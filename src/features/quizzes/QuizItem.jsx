function QuizItem({ quiz }) {
    return (
        <li
            className="hover:scale relative flex max-h-[12rem] max-w-full cursor-default flex-col items-start justify-center gap-1 rounded-md border bg-gray-300 p-8 transition-all duration-500 hover:translate-y-[-4px]"
            key={quiz.id}
        >
            <h2 className="flex items-center text-2xl font-bold tracking-tighter text-zinc-800">
                {quiz.title}
            </h2>
            <p className="text-gray-600">{quiz.description}</p>
            <button className="absolute bottom-0 right-2 my-2 rounded-md bg-violet-900 px-4 py-2 font-bold uppercase tracking-tight text-gray-200 transition-all duration-300 hover:cursor-pointer hover:bg-violet-950">
                Play
            </button>
        </li>
    )
}

export default QuizItem
