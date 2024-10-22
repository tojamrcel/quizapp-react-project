import { useQuizzes } from "../../contexts/QuizzesContext"
import Button from "../../ui/Button"
import QuizItem from "./QuizItem"
import Spinner from "../../ui/Spinner"
import Menus from "../../ui/Menus"

function QuizzesList() {
    const { quizzes, status } = useQuizzes()

    if (status === "loading")
        return (
            <div className="mt-24 flex justify-center">
                <Spinner />
            </div>
        )

    return (
        <Menus>
            <div className="flex flex-col items-center">
                <ul className="no-scrollbar flex max-h-[75dvh] w-full flex-col gap-8 overflow-auto scroll-smooth px-4 py-8 shadow-sm md:max-h-[85dvh]">
                    {quizzes.length ? (
                        quizzes.map((quiz) => (
                            <QuizItem quiz={quiz} key={quiz.id} />
                        ))
                    ) : (
                        <p className="text-center text-xl font-bold text-gray-200">
                            There are no quizzes at the moment, but you can
                            create your own quiz!
                        </p>
                    )}
                </ul>
                <Button type="full-width">CREATE YOUR OWN QUIZ</Button>
            </div>
        </Menus>
    )
}

export default QuizzesList
