import Button from "../../ui/Button"
import QuizItem from "./QuizItem"

const data = [
    {
        id: 1,
        title: "Quiz about me",
        author: "Marcel G",
        description:
            "In this quiz u can check how many things do you remember about me.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
    {
        id: 2,
        title: "Quiz about you",
        author: "Marcel Puta",
        description:
            "In this quiz u can check how many things do you remember about yourself.",
    },
]

function QuizzesList() {
    return (
        <div className="flex flex-col items-center">
            <ul className="no-scrollbar flex max-h-[75dvh] w-full flex-col gap-8 overflow-auto scroll-smooth px-4 py-8 shadow-sm md:max-h-[85dvh]">
                {data.map((quiz) => (
                    <QuizItem quiz={quiz} key={quiz.id} />
                ))}
            </ul>
            <Button type="full-width">CREATE YOUR OWN QUIZ</Button>
        </div>
    )
}

export default QuizzesList
