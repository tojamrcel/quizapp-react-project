import { createContext, useContext, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"

const MenuContext = createContext()

function Menus({ children }) {
    const [openId, setOpenId] = useState("")
    const open = setOpenId
    const close = () => setOpenId("")

    return (
        <MenuContext.Provider value={{ openId, open, close }}>
            {children}
        </MenuContext.Provider>
    )
}

function Toggle({ id }) {
    const { open, close, openId } = useContext(MenuContext)

    function handleClick() {
        openId === "" || openId !== id ? open(id) : close()
    }

    return (
        <button
            onClick={handleClick}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-400"
        >
            <HiDotsVertical />
        </button>
    )
}

function List({ id, children }) {
    const { openId } = useContext(MenuContext)

    if (openId !== id) return null

    return <ul className={`absolute right-10 top-10`}>{children}</ul>
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

Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
