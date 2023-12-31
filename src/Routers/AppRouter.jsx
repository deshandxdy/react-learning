import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter