import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Main = () => {


    return (
        <div>
            <Nav />
            <hr />
            <Footer />
        </div>
    );
}

export default Main;