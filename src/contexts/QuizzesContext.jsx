import { createContext, useContext, useEffect, useState } from "react"

const QuizzesContext = createContext()

function QuizzesProvider({ children }) {
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
