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
import { ToastContainer } from 'react-toastify'
import FurnitureProvider from './hooks/useFurniturs'
import { TypeProvider } from './hooks/useType'
import { SizeProvider } from './hooks/useSize'
import AuthProvider from './hooks/useAuth'

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <FurnitureProvider>
          <TypeProvider>
            <SizeProvider>
              <Switch>
                <Route exact path="/" component={AboutCompany} />
                <Route
                  path="/furniturs/:furnitureId?/:edit?"
                  component={Furniturs}
                />
                <Route path="/contact" component={Contact} />
                <Route path="/login/:type?" component={Login} />

                <Route exact path="/basket" component={Basket} />

                <Route path="/basket/order" component={OrderForm} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
              </Switch>
            </SizeProvider>
          </TypeProvider>
        </FurnitureProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
