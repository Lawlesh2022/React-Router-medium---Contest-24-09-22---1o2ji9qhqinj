import React from 'react'
import{Routes, Route} from 'react-router-dom'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
        <>
        <Routes>
            <Route exact path = '/route' element = {<Index/>}/>
            <Route path = '/bgcolorchanger'/> element = {<BackgroundColorChanger/>}
            <Route path = '/calculator'/>
        </Routes>
        </>

    )
}
