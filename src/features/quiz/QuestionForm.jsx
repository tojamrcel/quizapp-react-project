import { useEffect, useRef } from "react"
import Input from "../../ui/Input"

function QuestionForm({ questionNum, register, errors }) {
    const ref = useRef()

    useEffect(function () {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <li
            ref={ref}
            className={`${questionNum !== 0 ? "border-t-[1px]" : ""} border-gray-200 px-2 py-2`}
        >
            <div className="ml-2 flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <label htmlFor="question" className="-ml-2 text-lg">
                        Question {questionNum + 1}
                    </label>
                    <button className="flex h-2 w-2 items-center justify-center rounded-full bg-red-800 p-[12px] text-lg text-gray-200 transition-colors duration-300 hover:bg-red-900">
                        -
                    </button>
                </div>
                <Input
                    variation="sm"
                    register={register(`${questionNum}-question`, {
                        required: "This field is required.",
                    })}
                />
                <div className="mb-2 h-2">
                    {errors[`${questionNum}-question`]?.message ? (
                        <span className="text-sm text-red-800">
                            {errors[`${questionNum}-question`].message}
                        </span>
                    ) : null}
                </div>
                <label htmlFor="answers" className="text-base">
                    Answers
                </label>
                <div className="flex items-center gap-2">
                    <span>1.</span>
                    <Input
                        variation="sm"
                        register={register(`${questionNum}-answer-0`, {
                            required: "This field is required.",
                        })}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>2.</span>
                    <Input
                        variation="sm"
                        register={register(`${questionNum}-answer-1`, {
                            required: "This field is required.",
                        })}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>3.</span>
                    <Input
                        variation="sm"
                        register={register(`${questionNum}-answer-2`, {
                            required: "This field is required.",
                        })}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>4.</span>
                    <Input
                        variation="sm"
                        register={register(`${questionNum}-answer-3`, {
                            required: "This field is required.",
                        })}
                    />
                </div>
                <div className="flex w-full items-center gap-2">
                    <label htmlFor="correctAnswer" className="text-base">
                        Correct answer
                    </label>
                    <select
                        className="h-8 w-[15%]"
                        name="correctAnswer"
                        {...register(`${questionNum}-correctAnswer`, {
                            required: "This field is required.",
                        })}
                    >
                        <option value="0">Option 1</option>
                        <option value="1">Option 2</option>
                        <option value="2">Option 3</option>
                        <option value="3">Option 4</option>
                    </select>
                </div>
            </div>
        </li>
    )
}

export default QuestionForm
