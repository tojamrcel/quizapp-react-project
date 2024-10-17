import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react"

const QuizzesContext = createContext()

const initialState = {
    // can be also ready, active, finished
    status: "loading",
    quizzes: [],
    error: "",
    activeQuiz: {
        id: null,
        currentQuestion: 0,
        answer: null,
        correctAnswer: null,
    },
}

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return { ...state, status: "ready", quizzes: action.payload }
        case "dataFailed":
            return { ...state, status: "error", error: action.payload }
    }
}

function QuizzesProvider({ children }) {
    const [{ status, activeQuiz, quizzes, error }, dispatch] = useReducer(
        reducer,
        initialState,
    )

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

    return (
        <QuizzesContext.Provider value={{ status, quizzes, error, activeQuiz }}>
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
