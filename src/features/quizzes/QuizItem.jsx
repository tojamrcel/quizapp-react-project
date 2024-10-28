import { useNavigate } from "react-router-dom"
import { useQuizzes } from "../../contexts/QuizzesContext"
import { HiPencil, HiTrash } from "react-icons/hi2"
import Menus, { useMenus } from "../../ui/Menus"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"

function QuizItem({ quiz }) {
    const { openId } = useMenus()
    const { startQuiz } = useQuizzes()
    const navigate = useNavigate()

    const isDeleteEditDisabled =
        +quiz.id === 1 || +quiz.id === 2 || +quiz.id === 3

    return (
        <li
            className={`${openId === quiz.id ? "translate-x-[2px]" : "transition-transform duration-300 hover:translate-x-[2px]"} relative flex max-h-[12rem] max-w-full cursor-default flex-col items-start justify-center gap-1 rounded-md border bg-gray-300 p-8`}
            key={quiz.id}
        >
            <Modal>
                <Menus.Menu>
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
                        <Modal.Open opens="delete">
                            <Menus.Button
                                disabled={isDeleteEditDisabled}
                                icon={<HiTrash />}
                            >
                                Delete
                            </Menus.Button>
                        </Modal.Open>
                        <Menus.Button
                            disabled={isDeleteEditDisabled}
                            icon={<HiPencil />}
                        >
                            Edit
                        </Menus.Button>
                    </Menus.List>
                    <Modal.Window name="delete">
                        <ConfirmDelete />
                    </Modal.Window>
                </Menus.Menu>
            </Modal>
        </li>
    )
}

export default QuizItem
