import { cloneElement, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"

const ModalContext = createContext()

function Modal({ children }) {
    const [openName, setOpenName] = useState("")
    const open = setOpenName
    const close = () => setOpenName("")

    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext)

    return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext)

    if (openName !== name) return null

    return createPortal(
        <div className="fixed bottom-0 top-0 h-[100dvh] w-full backdrop-blur-md">
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-300 px-[3.2rem] py-[4rem] shadow-md">
                <button
                    onClick={close}
                    className="absolute right-2 top-2 text-2xl"
                >
                    <HiXMark />
                </button>
                <div>{children}</div>
            </div>
        </div>,
        document.body,
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
