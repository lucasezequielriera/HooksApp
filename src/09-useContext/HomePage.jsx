import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)


  return (
    <>
        <h1>HomePage</h1>
        <hr />
        
        <h5>{user?.name}</h5>
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}
