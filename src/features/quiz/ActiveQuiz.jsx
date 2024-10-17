import AnswerItem from "./AnswerItem"

function ActiveQuiz() {
    return (
        <div className="flex min-h-[60dvh] w-full items-center justify-center">
            <div className="flex w-[90%] flex-col justify-center gap-5">
                <h2 className="text-4xl font-bold text-gray-200">
                    <span className="text-violet-900">1.</span> Question 1
                </h2>
                <ul className="flex flex-col gap-3 text-lg">
                    <AnswerItem answer="Answer 1" />
                    <AnswerItem answer="Answer 2" />
                    <AnswerItem answer="Answer 3" />
                    <AnswerItem answer="Answer 4" />
                </ul>
            </div>
        </div>
    )
}

export default ActiveQuiz
