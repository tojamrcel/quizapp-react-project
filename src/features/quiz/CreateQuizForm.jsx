import { useForm } from "react-hook-form"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import QuestionForm from "./QuestionForm"
import { useState } from "react"

function CreateQuizForm() {
    const { handleSubmit, register, getValues, setValue, formState, control } =
        useForm()

    const { errors } = formState

    const [questions, setQuestions] = useState(1)

    function onSubmit() {
        const values = getValues()
        const numArr = Array.from({ length: questions }, (_, i) => i)
        const quiz = {
            title: values.title,
            author: values.author || "anonymous",
            questions: [],
        }

        numArr.forEach((i) => {
            const question = {
                question: "",
                answers: [],
                correctAnswer: null,
            }

            Object.entries(values).map((p) => {
                if (p[0][0] === String(i)) {
                    p[0].split("-")[1] === "answer"
                        ? (question.answers = [...question.answers, p[1]])
                        : null
                    p[0].split("-")[1] === "question"
                        ? (question.question = p[1])
                        : null
                    p[0].split("-")[1] === "correctAnswer"
                        ? (question.correctAnswer = +p[1])
                        : null
                }
            })

            quiz.questions = [...quiz.questions, question]
        })
    }

    function addQuestion() {
        setQuestions((questions) => questions + 1)
    }

    function removeQuestion() {
        setQuestions((questions) => questions - 1)
    }

    return (
        <div>
            <h1 className="my-4 text-4xl font-bold">Create Quiz</h1>
            <form
                method="get"
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
                            maxLength: {
                                value: 16,
                                message: "Title is too long.",
                            },
                        })}
                    />
                    <div className="h-3">
                        {errors?.title?.message ? (
                            <span className="text-sm text-red-800">
                                {errors?.title?.message}
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xl" htmlFor="author">
                        Author
                    </label>
                    <Input register={register("author")} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl" htmlFor="author">
                            Questions
                        </h2>
                        <button
                            onClick={addQuestion}
                            type="button"
                            className="flex h-2 w-2 items-center justify-center rounded-full bg-violet-900 p-[12px] text-lg text-gray-200 transition-colors duration-300 hover:bg-violet-950"
                        >
                            +
                        </button>
                    </div>
                    <ul className="flex max-h-[30dvh] flex-col gap-6 overflow-auto xs:max-h-[50dvh] md:max-h-[25dvh]">
                        {Array.from({ length: questions }, (_, i) => i).map(
                            (_, i) => (
                                <QuestionForm
                                    control={control}
                                    key={i}
                                    numOfQuestions={questions}
                                    questionNum={i}
                                    register={register}
                                    errors={errors}
                                    handleDelete={removeQuestion}
                                    setValue={setValue}
                                    getValues={getValues}
                                />
                            ),
                        )}
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
