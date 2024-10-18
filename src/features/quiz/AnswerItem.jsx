import { useQuizzes } from "../../contexts/QuizzesContext"

function AnswerItem({ index, answer }) {
    const { dispatch, activeQuiz } = useQuizzes()

    function handleClick(userAnswerIndex) {
        console.log(activeQuiz, userAnswerIndex)
        dispatch({ type: "newAnswer", payload: userAnswerIndex })
        console.log(activeQuiz)
    }

    return (
        <li
            onClick={() => handleClick(index)}
            className={`cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]`}
        >
            <p className="font-bold text-zinc-900">{answer}</p>
        </li>
    )
}

export default AnswerItem
