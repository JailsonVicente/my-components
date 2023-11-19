import { useState } from "react"

export default function ToggleMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const isClosed = () => {
        setIsOpen(false)
    }

    return (
        <div className={`
            flex flex-col items-end justify-center
            gap-5 
        `}>
            <button className="bg-cyan-700 rounded-xl p-2" onClick={toggleMenu}>
                MenuIcon
            </button>
            {isOpen && (
                <div className={`
                    fixed top-0 left-0 right-0 bottom-0
                    flex flex-col items-center gap-20
                    bg-gray-900 text-white bg-opacity-80
                `}>

                    <div className="flex w-full justify-end">
                        <button className={`
                            flex justify-center items-center
                            bg-cyan-700 rounded-full h-10 w-10 m-4                           
                        `} onClick={isClosed}>
                            <span>X</span>
                        </button>
                    </div>

                    <ul className={`
                            flex flex-col items-center
                            text-2xl gap-4
                        `}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
            )}
        </div>
    )
}