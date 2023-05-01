import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Greeter from '../components/Greeter'
import Body from '../components/Body'

const Main = () => {


    return (
        <div>
            <Greeter />
            <hr />
            <Body />
            <hr />
            <Footer />
        </div>
    );
}

export default Main;