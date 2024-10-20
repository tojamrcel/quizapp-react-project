import Button from "../../ui/Button"

function QuizResult() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center font-bold text-zinc-300">
            <h2 className="text-6xl md:text-8xl">Your result is</h2>
            <span className="text-7xl font-semibold text-violet-900">
                5<span className="text-gray-300"> / 10</span>
            </span>
            <Button type="wide">PLAY SOME OTHER QUIZZES</Button>
        </div>
    )
}

export default QuizResult
