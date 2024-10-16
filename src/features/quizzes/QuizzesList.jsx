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
        <ul className="no-scrollbar flex max-h-[90dvh] flex-col gap-8 overflow-auto scroll-smooth px-4 py-8 shadow-sm">
            {data.map((quiz) => (
                <QuizItem quiz={quiz} key={quiz.id} />
            ))}
        </ul>
    )
}

export default QuizzesList
