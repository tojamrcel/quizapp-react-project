function Input({ variation, register }) {
    if (variation === "sm")
        return (
            <input
                type="text"
                {...register}
                className="h-8 max-w-[70%] rounded-sm bg-gray-100 p-2"
            />
        )

    if (variation === "normal" || !variation)
        return (
            <input
                className="h-8 min-w-[50dvw] rounded-sm bg-gray-100 p-2"
                type="text"
                {...register}
            />
        )
}

export default Input
