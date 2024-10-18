import { useQuizzes } from "../../contexts/QuizzesContext"
import AnswerItem from "./AnswerItem"
import Spinner from "../../ui/Spinner"

function ActiveQuiz() {
    const { activeQuiz, dispatch } = useQuizzes()
    const { currentQuestion, questions } = activeQuiz
    const question = questions?.at(currentQuestion)

    if (!activeQuiz.id) return <Spinner />

    return (
        <div className="flex min-h-[60dvh] w-full items-center justify-center">
            <div className="flex w-[90%] flex-col justify-center gap-5">
                <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                    <span className="text-violet-900">
                        {currentQuestion + 1}.
                    </span>{" "}
                    {question.question}
                </h2>
                <ul className="flex flex-col gap-3 text-lg">
                    {question.answers.map((ans, i) => (
                        <AnswerItem index={i} answer={ans} key={ans} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ActiveQuiz
