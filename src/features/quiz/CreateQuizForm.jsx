import { useForm } from "react-hook-form"
import Button from "../../ui/Button"

function CreateQuizForm() {
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm()

    function onSubmit() {
        console.log(getValues())
        console.log(errors)
    }

    return (
        <div>
            <h1 className="my-4 text-4xl font-bold">Create Quiz</h1>
            <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-1">
                    <label className="text-xl" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="h-8 min-w-[50dvw] rounded-sm bg-gray-100"
                        type="text"
                        {...register("title", {
                            required: "Title is required.",
                        })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xl" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="h-8 min-w-[50dvw] rounded-sm bg-gray-100"
                        type="text"
                        {...register("author")}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-xl" htmlFor="author">
                        Questions
                    </h2>
                    <div className="ml-2 flex flex-col gap-1">
                        <label htmlFor="question" className="text-lg">
                            Question 1
                        </label>
                        <input
                            type="text"
                            className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                        />
                        <label htmlFor="answers" className="text-base">
                            Answers
                        </label>
                        <div className="flex items-center gap-2">
                            <span>1.</span>
                            <input
                                type="text"
                                className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>2.</span>
                            <input
                                type="text"
                                className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>3.</span>
                            <input
                                type="text"
                                className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>4.</span>
                            <input
                                type="text"
                                className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                            />
                        </div>
                        <label htmlFor="correctAnswer" className="text-base">
                            Correct answer
                        </label>
                        <select className="h-8" name="correctAnswer">
                            <option value="0">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <Button type="wide">Create Quiz</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateQuizForm
