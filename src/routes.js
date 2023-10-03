import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Watch from "./views/Watch";
import Read from "./views/Read";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch" element={ <Watch /> }></Route>
                <Route path="/read" element={ <Read /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}