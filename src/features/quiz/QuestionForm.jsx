import Input from "../../ui/Input"

function QuestionForm({ questionNum }) {
    return (
        <li className="border-t-[1px] border-gray-200 px-2 py-2">
            <div className="ml-2 flex flex-col gap-1">
                <label htmlFor="question" className="-ml-2 text-lg">
                    Question 1
                </label>
                <Input variation="sm" />
                <label htmlFor="answers" className="text-base">
                    Answers
                </label>
                <div className="flex items-center gap-2">
                    <span>1.</span>
                    <input
                        type="text"
                        className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>2.</span>
                    <input
                        type="text"
                        className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>3.</span>
                    <input
                        type="text"
                        className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span>4.</span>
                    <input
                        type="text"
                        className="h-8 max-w-[70%] rounded-sm bg-gray-100"
                    />
                </div>
                <label htmlFor="correctAnswer" className="text-base">
                    Correct answer
                </label>
                <select className="h-8" name="correctAnswer">
                    <option value="0">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                    <option value="3">Option 4</option>
                </select>
            </div>
        </li>
    )
}

export default QuestionForm
