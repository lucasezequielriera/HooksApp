import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select() // Manera tradicional en javascript vanilla
        inputRef.current.select()
        console.log(inputRef)
    }

    return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input type="text"
        ref={inputRef}
        placeholder="Ingrese su nombre"
        className="form-control"
        name="name" />

        <button className="btn btn-primary mt-2"
        onClick={onClick}>
            Set focus
        </button>
    </>
    )
}
