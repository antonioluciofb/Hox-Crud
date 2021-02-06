import React from "react"
import { BrowserRouter, Switch , Route} from "react-router-dom"

import Main from "./pages/login/index"
import Crud from "./pages/crud/index"

const Routes = () => (
    <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/crud" component={Crud}/>
        </Switch>
    </BrowserRouter>
    
)

export default Routes