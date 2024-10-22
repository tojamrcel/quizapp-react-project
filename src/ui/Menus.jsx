import { createContext, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"

const MenuContext = createContext()

function Menus({ children }) {
    const [isOpen, setIsOpen] = useState(true)

    return <MenuContext.Provider>{children}</MenuContext.Provider>
}

function Menu({ children }) {
    return <div>{children}</div>
}

function Toggle() {
    return (
        <button className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-400">
            <HiDotsVertical />
        </button>
    )
}

function List() {
    return <ul></ul>
}

function Button({ children, icon, onClick }) {
    function handleClick() {
        onClick?.()
        close?.()
    }

    return (
        <li>
            <button onClick={handleClick}>
                {icon} <span>{children}</span>
            </button>
        </li>
    )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
