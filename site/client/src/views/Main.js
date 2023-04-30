import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Greeter from '../components/Greeter'

const Main = () => {


    return (
        <div>
            <Greeter />
            <hr />
            <Footer />
        </div>
    );
}

export default Main;