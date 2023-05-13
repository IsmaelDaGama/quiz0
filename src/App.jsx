import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import io from "socket.io-client";
const socket = io.connect("http://localhost:8081");

import QuizPage from './pages/QuizPage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import EditProfile from "./pages/EditProfile.jsx";
import WaitingRoom from "./pages/WaitingRoom.jsx";
import Categories from "./pages/Categories.jsx";
import QuestionsTemplate from './pages/QuestionsTemplate'

import './App.sass'

;


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<QuizPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="editprofile" element={<EditProfile/>} />
                    <Route path="waitingroom" exact element={<WaitingRoom socket={socket}/>} />
                    <Route path="categories" element={<Categories/>} socket={socket}/>
                    <Route path="questionstemplate" element={<QuestionsTemplate socket={socket}/>} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
