import { useNavigate } from "react-router-dom"
import { useQuizzes } from "../../contexts/QuizzesContext"
import Menus from "../../ui/Menus"

function QuizItem({ quiz }) {
    const { startQuiz } = useQuizzes()
    const navigate = useNavigate()

    return (
        <li
            className="hover:scale relative flex max-h-[12rem] max-w-full cursor-default flex-col items-start justify-center gap-1 rounded-md border bg-gray-300 p-8 transition-all duration-300 hover:translate-x-[2px]"
            key={quiz.id}
        >
            <Menus>
                <h2 className="flex items-center text-xl font-bold tracking-tighter text-zinc-800 md:text-2xl">
                    {quiz.title}
                </h2>
                <p className="text-xs text-gray-600 md:text-base">
                    {quiz.description}
                </p>
                <button
                    onClick={() => {
                        startQuiz(quiz)
                        navigate(`/quiz/${quiz.id}`)
                    }}
                    className="absolute bottom-0 right-2 my-2 rounded-md bg-violet-900 px-3 py-1 font-bold uppercase tracking-tight text-gray-200 transition-all duration-300 hover:cursor-pointer hover:bg-violet-950 md:px-6 md:py-3"
                >
                    Play
                </button>
                <div className="absolute right-3 top-4">
                    <Menus.Toggle id={quiz.id} />
                </div>
                <Menus.List id={quiz.id}>
                    <Menus.Button>test</Menus.Button>
                    <Menus.Button>test</Menus.Button>
                    <Menus.Button>test</Menus.Button>
                </Menus.List>
            </Menus>
        </li>
    )
}

export default QuizItem
