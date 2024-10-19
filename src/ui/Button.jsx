function Button({ onClick, type, children }) {
    if (type === "wide")
        return (
            <button
                onClick={() => onClick?.()}
                className="my-4 h-12 w-[80%] cursor-pointer rounded-md bg-violet-900 px-2 font-bold text-gray-200 transition-all duration-300 hover:bg-violet-950 md:w-[60%]"
            >
                {children}
            </button>
        )

    if (type === "full-width")
        return (
            <button
                onClick={() => onClick?.()}
                className="my-4 h-12 w-[80%] cursor-pointer rounded-md bg-violet-900 px-2 font-bold text-gray-200 transition-all duration-300 hover:bg-violet-950 md:w-full"
            >
                {children}
            </button>
        )
}

export default Button
