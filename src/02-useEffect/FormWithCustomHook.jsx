import { useEffect, useState } from "react"
import { useForm } from "../hooks"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange} />

        <input type="email"
        className="form-control"
        placeholder="lucas@google.com"
        name="email"
        value={email}
        onChange={onInputChange} />

        <input type="password"
        className="form-control"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange} />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
    )
}
