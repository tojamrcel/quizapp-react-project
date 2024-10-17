import { useQuizzes } from "../../contexts/QuizzesContext"

function QuizItem({ quiz }) {
    const { startQuiz } = useQuizzes()

    return (
        <li
            className="hover:scale relative flex max-h-[12rem] max-w-full cursor-default flex-col items-start justify-center gap-1 rounded-md border bg-gray-300 p-8 transition-all duration-300 hover:translate-x-[2px]"
            key={quiz.id}
        >
            <h2 className="flex items-center text-xl font-bold tracking-tighter text-zinc-800 md:text-2xl">
                {quiz.title}
            </h2>
            <p className="text-xs text-gray-600 md:text-base">
                {quiz.description}
            </p>
            <button
                onClick={() => startQuiz(quiz)}
                className="absolute bottom-0 right-2 my-2 rounded-md bg-violet-900 px-3 py-1 font-bold uppercase tracking-tight text-gray-200 transition-all duration-300 hover:cursor-pointer hover:bg-violet-950 md:px-6 md:py-3"
            >
                Play
            </button>
        </li>
    )
}

export default QuizItem
