import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Quizzes from "./pages/quizzes"
import Quiz from "./pages/Quiz"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route
                        index
                        element={<Navigate replace to={"quizzes"} />}
                    ></Route>
                    <Route path="quizzes" element={<Quizzes />}></Route>
                    <Route path="quiz/:quizId" element={<Quiz />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
