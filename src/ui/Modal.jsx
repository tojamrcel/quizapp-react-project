import { cloneElement, createContext, useContext, useState } from "react"

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

function Window({ children }) {
    return children
}

Modal.Open = Open
Modal.Window = Window

export default Modal
