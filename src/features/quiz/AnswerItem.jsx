import { useQuizzes } from "../../contexts/QuizzesContext"

function AnswerItem({ index, answer, onClick, active }) {
    const { activeQuiz } = useQuizzes()
    const { correctAnswer } = activeQuiz
    const classStr =
        index === correctAnswer
            ? "border-4 border-green-700"
            : "border-4 border-red-700"

    return (
        <li
            onClick={() => onClick(index)}
            className={`${active && classStr} cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-transform duration-200 hover:scale-[1.01]`}
        >
            <p className="font-bold text-zinc-900">{answer}</p>
        </li>
    )
}

export default AnswerItem
