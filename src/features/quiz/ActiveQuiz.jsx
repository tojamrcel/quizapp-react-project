function ActiveQuiz() {
    return (
        <div className="flex min-h-[60dvh] w-full items-center justify-center">
            <div className="flex w-[90%] flex-col justify-center gap-5">
                <h2 className="text-4xl font-bold text-gray-200">
                    <span className="text-violet-900">1.</span> Question 1
                </h2>
                <ul className="flex flex-col gap-3 text-lg">
                    <li className="cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]">
                        <p className="font-bold text-zinc-900">Answer 1</p>
                    </li>
                    <li className="cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]">
                        <p className="font-bold text-zinc-900">Answer 2</p>
                    </li>
                    <li className="cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]">
                        <p className="font-bold text-zinc-900">Answer 3</p>
                    </li>
                    <li className="cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]">
                        <p className="font-bold text-zinc-900">Answer 4</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ActiveQuiz
