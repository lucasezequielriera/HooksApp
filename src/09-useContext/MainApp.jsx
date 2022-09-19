import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {

    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="about" element={ <AboutPage /> } />

                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={ <Navigate to="/about" /> } />
            </Routes>
        </UserProvider>
    )
}
