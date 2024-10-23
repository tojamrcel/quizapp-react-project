import { useForm } from "react-hook-form"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import QuestionForm from "./QuestionForm"

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
                    <Input
                        register={register("title", {
                            required: "Title is required.",
                        })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xl" htmlFor="author">
                        Author
                    </label>
                    <Input register={register("author")} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-xl" htmlFor="author">
                        Questions
                    </h2>
                    <ul className="flex max-h-[18dvh] flex-col gap-6 overflow-auto sm:max-h-[30dvh]">
                        <QuestionForm />
                    </ul>
                </div>
                <div className="flex w-full justify-center">
                    <Button type="wide">Create Quiz</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateQuizForm
