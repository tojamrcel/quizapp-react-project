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

function Menu({ children }) {
    return children
}

function Toggle({ id }) {
    const { open, close, openId } = useContext(MenuContext)

    function handleClick(e) {
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

    return (
        <ul
            className={`absolute right-[-8px] top-[60px] z-10 overflow-clip rounded-md bg-zinc-300 text-left shadow-md`}
        >
            {children}
        </ul>
    )
}

function Button({ children, icon, onClick }) {
    function handleClick() {
        onClick?.()
        close?.()
    }

    return (
        <li>
            <button
                onClick={handleClick}
                className={`flex w-full items-center gap-4 px-[1.4rem] py-[0.7rem] hover:bg-zinc-200`}
            >
                {icon} <span className="text-zinc-800">{children}</span>
            </button>
        </li>
    )
}

export function useMenus() {
    const context = useContext(MenuContext)

    return context
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
