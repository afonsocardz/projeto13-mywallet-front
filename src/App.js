import Wallet from "./pages/Wallet";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserContextProvider from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}