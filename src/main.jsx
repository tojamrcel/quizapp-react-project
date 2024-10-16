import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { QuizzesProvider } from "./contexts/QuizzesContext.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QuizzesProvider>
            <App />
        </QuizzesProvider>
    </StrictMode>,
)
