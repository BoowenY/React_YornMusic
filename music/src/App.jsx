import React, { memo} from 'react'
import routes from './router'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import YNHeader from './components/Header'
import YNFooter from './components/Footer'
export default memo(function App() {
    return(
        <HashRouter>
            <YNHeader/>
            {renderRoutes(routes)}
            <YNFooter/>
        </HashRouter>
    )
})