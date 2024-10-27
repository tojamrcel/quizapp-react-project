function Input({ variation, register, maxChar = 64 }) {
    if (variation === "sm")
        return (
            <input
                maxLength={maxChar}
                autoComplete="off"
                type="text"
                {...register}
                className="h-8 max-w-[70%] rounded-sm border-violet-800 bg-gray-100 p-2 outline-none focus:border-2"
            />
        )

    if (variation === "normal" || !variation)
        return (
            <input
                maxLength={maxChar}
                autoComplete="off"
                className="h-8 min-w-[50dvw] rounded-sm border-violet-800 bg-gray-100 p-2 outline-none focus:border-2"
                type="text"
                {...register}
            />
        )
}

export default Input
