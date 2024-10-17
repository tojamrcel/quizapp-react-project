function AnswerItem({ index, answer }) {
    return (
        <li className="cursor-pointer rounded-sm border bg-gray-300 px-4 py-3 shadow-md transition-all duration-200 hover:scale-[1.01]">
            <p className="font-bold text-zinc-900">{answer}</p>
        </li>
    )
}

export default AnswerItem
