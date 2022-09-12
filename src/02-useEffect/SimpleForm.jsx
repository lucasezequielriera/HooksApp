import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'lucas',
        email: 'lucas@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({ target }) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Se recomienda hacer c/useEffect por cada comportamiento que queremos dar
    useEffect(() => {
        // console.log('UseEffect called!')
    }, [])

    useEffect(() => {
        // console.log('formState changed!')
    }, [formState])

    useEffect(() => {
        // console.log('email changed')
    }, [email])

    return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange} />

        <input type="email"
        className="form-control"
        placeholder="lucas@google.com"
        name="email"
        value={email}
        onChange={ onInputChange} />

        {
            username === 'lucas1996' && <Message />
        }
    </>
    )
}
