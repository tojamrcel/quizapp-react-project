import QuizzesList from "../features/quizzes/QuizzesList"

function Quizzes() {
    return (
        <>
            {/* <div className="flex min-h-16 items-center justify-center bg-violet-800">
                <p className="text-gray-300">
                    👋 FOR DEMO VERSION OF APPLICATION ALL API FEATURES HAVE
                    BEEN IMPLEMENTED LOCALLY
                </p>
            </div> */}
            <div className="mx-auto block max-h-[100rem] max-w-[50rem]">
                <QuizzesList />
            </div>
        </>
    )
}

export default Quizzes
