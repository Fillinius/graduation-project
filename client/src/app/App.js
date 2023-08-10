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
import { QualityProvider } from './hooks/useQuality'
import AuthProvider from './hooks/useAuth'
import User from './layouts/user'
import ProtectedRoute from './components/common/protectedRoute'
import LogOut from './layouts/logOut'
import UserProvider from './hooks/useUsers'

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <UserProvider>
          <FurnitureProvider>
            <TypeProvider>
              <SizeProvider>
                <QualityProvider>
                  <Switch>
                    <Route exact path="/" component={AboutCompany} />
                    <ProtectedRoute
                      path="/users/:userId?/:edit?"
                      component={User}
                    />
                    <Route
                      path="/furniturs/:furnitureId?"
                      component={Furniturs}
                    />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route exact path="/basket" component={Basket} />
                    <ProtectedRoute
                      path="/basket/order"
                      component={OrderForm}
                    />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                  </Switch>
                </QualityProvider>
              </SizeProvider>
            </TypeProvider>
          </FurnitureProvider>
        </UserProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
