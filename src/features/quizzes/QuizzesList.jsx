import Button from "../../ui/Button"
import QuizItem from "./QuizItem"
import { useQuizzes } from "../../contexts/QuizzesContext"

function QuizzesList() {
    const { quizzes, isLoading } = useQuizzes()

    if (isLoading)
        return (
            <p className="text-center text-xl font-bold text-gray-200">
                Loading...
            </p>
        )

    return (
        <div className="flex flex-col items-center">
            <ul className="no-scrollbar flex max-h-[75dvh] w-full flex-col gap-8 overflow-auto scroll-smooth px-4 py-8 shadow-sm md:max-h-[85dvh]">
                {quizzes.length ? (
                    quizzes.map((quiz) => (
                        <QuizItem quiz={quiz} key={quiz.id} />
                    ))
                ) : (
                    <p className="text-center text-xl font-bold text-gray-200">
                        There are no quizzes at the moment, but you can create
                        your own quiz!
                    </p>
                )}
            </ul>
            <Button type="full-width">CREATE YOUR OWN QUIZ</Button>
        </div>
    )
}

export default QuizzesList
