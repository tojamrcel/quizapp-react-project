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
    }
}

function QuizzesProvider({ children }) {
    const [{ status, activeQuiz, quizzes: quizzes2 }, dispatch] = useReducer(
        reducer,
        initialState,
    )

    const [isLoading, setIsLoading] = useState(true)
    const [quizzes, setQuizzes] = useState({})

    useEffect(function () {
        fetch("http://localhost:8000/quizzes")
            .then((res) => res.json())
            .then((data) => {
                setQuizzes(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <QuizzesContext.Provider value={{ quizzes, isLoading }}>
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
