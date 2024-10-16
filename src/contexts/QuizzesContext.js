import { createContext, useContext, useEffect, useState } from "react"

const QuizzesContext = createContext()

function QuizzesProvider({ children }) {
    const [quizzes, setQuizzes] = useState([])

    useEffect(function () {
        async function fetchData() {
            const res = await fetch("../data/quizzes.json")
            const data = await res.json()

            return data
        }

        const quizzesData = fetchData()
        setQuizzes(quizzesData)
    }, [])

    return (
        <QuizzesContext.Provider value={{ quizzes }}>
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
