import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutCompany from './layouts/aboutCompany'
import Contact from './layouts/contact'
import Login from './layouts/login'
import Basket from './layouts/basket'
import Navbar from './components/ui/navBar'
import NotFound from './components/common/notFound'
import Furniturs from './layouts/furniturs'
import OrderForm from './components/ui/orderForm'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutCompany} />
        <Route path="/vitrins/:furnitureId?/:edit?" component={Furniturs} />
        <Route path="/contact" component={Contact} />
        <Route path="/login/:type?" component={Login} />
        <Route exact path="/basket" component={Basket} />
        <Route path="/basket/order" component={OrderForm} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  )
}

export default App
