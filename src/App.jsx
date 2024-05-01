import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

//Importing routes components
import { Home } from './routes/home/Home'
import { About } from './routes/about/About'
import { Services } from './routes/Services/Services'
import { Contact } from './routes/contact/Contact' 

//Importing components
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

export const App = () => {
    return (
        <>
            <Header />
            <Routes>

                <Route path='/' element={ <Home /> }></Route>
                <Route path='/home' element={ <Home /> }></Route>
                <Route path='/about' element={ <About /> }></Route>
                <Route path='/services' element={ <Services /> }></Route>
                <Route path='/contact' element={ <Contact /> }></Route>
                <Route path='/*' element={ <Navigate to='/' /> }></Route>

            </Routes>

            <Footer />

        </>
    )
}