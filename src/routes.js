import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Watch from "./views/Watch";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch" element={ <Watch /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}