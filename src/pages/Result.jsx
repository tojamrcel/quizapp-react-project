import Button from "../ui/Button"

function Result() {
    return (
        <div className="container mx-auto my-16 max-w-[80%] md:my-32">
            <div className="flex flex-col items-center justify-center gap-6 text-center font-bold text-zinc-300">
                <h2 className="text-6xl md:text-8xl">Your result is</h2>
                <span className="text-7xl font-semibold text-violet-900">
                    5<span className="text-gray-300"> / 10</span>
                </span>
                <Button type="wide">PLAY SOME OTHER QUIZZES</Button>
            </div>
        </div>
    )
}

export default Result
