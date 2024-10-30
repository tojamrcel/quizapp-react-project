import { createContext, useContext, useEffect, useReducer } from "react"

const QuizzesContext = createContext()

const initialState = {
    // can be also ready, active, finished
    status: "loading",
    // in final version quizzes are going to be taken from quizzes array, to store quizzes created by user i'm going to use local storage.
    quizzes: [],
    error: "",
    activeQuiz: {
        id: null,
        corrects: 0,
        currentQuestion: 0,
        answer: null,
        correctAnswer: null,
        questions: [],
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
        case "finishQuiz":
            return {
                ...state,
                status: "finished",
                activeQuiz: { ...state.activeQuiz },
            }
        case "stopQuiz":
            return {
                ...state,
                status: "ready",
                activeQuiz: {
                    ...state.activeQuiz,
                    id: null,
                    corrects: 0,
                    currentQuestion: 0,
                    answer: null,
                    correctAnswer: null,
                    questions: [],
                },
            }
        case "restartQuiz":
            return {
                ...state,
                activeQuiz: {
                    ...state.activeQuiz,
                    corrects: 0,
                    currentQuestion: 0,
                    answer: null,
                    correctAnswer:
                        state.activeQuiz.questions.at(0).correctAnswer,
                },
            }
    }
}

function QuizzesProvider({ children }) {
    const [{ status, activeQuiz, quizzes, error }, dispatch] = useReducer(
        reducer,
        initialState,
    )

    useEffect(function () {
        fetchQuizzes()
    }, [])

    function startQuiz(quiz) {
        dispatch({
            type: "startQuiz",
            payload: {
                id: +quiz.id,
                questions: quiz.questions,
                correctAnswer: quiz.questions.at(0).correctAnswer,
            },
        })
    }

    function stopQuiz() {
        dispatch({
            type: "stopQuiz",
        })
    }

    async function fetchQuizzes() {
        fetch("http://localhost:8000/quizzes")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "dataReceived", payload: data })
            })
            .catch((err) =>
                dispatch({ type: "dataFailed", payload: err.message }),
            )
    }

    async function createQuiz(quiz) {
        try {
            const res = await fetch("http://localhost:8000/quizzes", {
                method: "POST",
                body: JSON.stringify(quiz),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) throw Error("Error")
            const data = await res.json()
            fetchQuizzes()
            return data
        } catch (err) {
            throw new Error(err.message)
        }
    }

    async function deleteQuiz(quizId) {
        try {
            const res = await fetch(`http://localhost:8000/quizzes/${quizId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) throw Error("Error")
            const data = await res.json()
            fetchQuizzes()
            return data
        } catch (err) {
            throw new Error(err.message)
        }
    }

    async function editQuiz(quiz) {
        try {
            const res = await fetch(
                `http://localhost:8000/quizzes/${quiz.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(quiz),
                },
            )
            if (!res.ok) throw Error("Error")
            const data = await res.json()
            fetchQuizzes()
            return data
        } catch (err) {
            throw new Error(err.message)
        }
    }

    return (
        <QuizzesContext.Provider
            value={{
                status,
                quizzes,
                error,
                activeQuiz,
                startQuiz,
                stopQuiz,
                dispatch,
                createQuiz,
                deleteQuiz,
                editQuiz,
            }}
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
