import Wallet from "./pages/Wallet";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserContextProvider from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./globalStyle";
import Frame from "./components/layouts/Frame";
import LoandingContextProvider from "./contexts/LoadingContext";

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <UserContextProvider>
                <Frame>
                    <LoandingContextProvider>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/wallet" element={<Wallet />} />
                        </Routes>
                    </LoandingContextProvider>
                </Frame>
            </UserContextProvider>
        </BrowserRouter>
    );
}