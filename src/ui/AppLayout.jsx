import { Outlet } from "react-router-dom"
import Header from "./Header"

function AppLayout() {
    return (
        <div>
            <Header />
            <div className="px-48 py-16">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout
