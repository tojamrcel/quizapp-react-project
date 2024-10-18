import { createContext, useContext, useEffect, useReducer } from "react"

const QuizzesContext = createContext()

const initialState = {
    // can be also ready, active, finished
    status: "loading",
    quizzes: [],
    error: "",
    activeQuiz: {
        id: null,
        corrects: 0,
        currentQuestion: 0,
        answer: null,
        correctAnswer: null,
    },
}

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                status: "ready",
                error: "",
                quizzes: action.payload,
            }
        case "dataFailed":
            return { ...state, status: "error", error: action.payload }
        case "startQuiz":
            return {
                ...state,
                status: "active",
                activeQuiz: {
                    ...state.activeQuiz,
                    id: action.payload.id,
                    currentQuestion: 0,
                    answer: null,
                    questions: action.payload.questions,
                    correctAnswer: action.payload.correctAnswer,
                },
            }
        case "newAnswer":
            return {
                ...state,
                activeQuiz: {
                    ...state.activeQuiz,
                    answer: action.payload,
                    corrects:
                        state.activeQuiz.correctAnswer === action.payload
                            ? state.activeQuiz.corrects + 1
                            : state.activeQuiz.corrects,
                },
            }
        case "nextQuestion":
            return {
                ...state,
                activeQuiz: {
                    ...state.activeQuiz,
                    currentQuestion: state.activeQuiz.currentQuestion + 1,
                    answer: null,
                    correctAnswer: action.payload,
                },
            }
    }
}

function QuizzesProvider({ children }) {
    const [{ status, activeQuiz, quizzes, error }, dispatch] = useReducer(
        reducer,
        initialState,
    )

    const question = activeQuiz?.questions?.at(activeQuiz.currentQuestion)
    console.log(question)

    useEffect(function () {
        fetch("http://localhost:8000/quizzes")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "dataReceived", payload: data })
            })
            .catch((err) =>
                dispatch({ type: "dataFailed", payload: err.message }),
            )
    }, [])

    function startQuiz(quiz) {
        dispatch({
            type: "startQuiz",
            payload: {
                id: quiz.id,
                questions: quiz.questions,
                correctAnswer: quiz.questions.at(0).correctAnswer,
            },
        })
    }

    return (
        <QuizzesContext.Provider
            value={{ status, quizzes, error, activeQuiz, startQuiz, dispatch }}
        >
            {children}
        </QuizzesContext.Provider>
    )
}

function useQuizzes() {
    const context = useContext(QuizzesContext)
    if (context === undefined)
        throw new Error("QuizzesContext was used outside QuizProvider")

    return context
}

export { QuizzesProvider, useQuizzes }
