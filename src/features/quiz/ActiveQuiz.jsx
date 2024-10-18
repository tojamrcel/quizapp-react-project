import { useQuizzes } from "../../contexts/QuizzesContext"
import AnswerItem from "./AnswerItem"
import Spinner from "../../ui/Spinner"
import { useState } from "react"

function ActiveQuiz() {
    const [seconds, setSeconds] = useState(3)

    const { activeQuiz, dispatch } = useQuizzes()
    const { currentQuestion, questions, answer } = activeQuiz
    const question = questions?.at(currentQuestion)

    if (!activeQuiz.id) return <Spinner />

    function handleClick(userAnswerIndex) {
        if (answer !== null) return
        dispatch({ type: "newAnswer", payload: userAnswerIndex })
        setSeconds(3)

        const counter = setInterval(
            () => setSeconds((seconds) => seconds - 1),
            1000,
        )

        setTimeout(function () {
            clearInterval(counter)
            dispatch({
                type: "nextQuestion",
                payload: questions?.at(currentQuestion + 1).correctAnswer,
            })
        }, 3000)
    }

    return (
        <>
            <div className="flex min-h-[60dvh] w-full flex-col items-center justify-center">
                <div className="flex w-[90%] flex-col justify-center gap-5">
                    <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                        <span className="text-violet-900">
                            {currentQuestion + 1}.
                        </span>{" "}
                        {question.question}
                    </h2>
                    <ul className="flex flex-col gap-3 text-lg">
                        {question.answers.map((ans, i) => (
                            <AnswerItem
                                index={i}
                                answer={ans}
                                key={ans}
                                onClick={handleClick}
                                active={i === activeQuiz.answer}
                            />
                        ))}
                    </ul>
                </div>
                <div className="h-2">
                    {answer !== null ? (
                        <p className="p-2 font-semibold text-zinc-500">
                            Next question in {seconds}...
                        </p>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default ActiveQuiz
