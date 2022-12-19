import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  SingleProduct,
  Cart,
  About,
  Error,
  Checkout,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages"

import { Navbar, Sidebar, Footer } from "./components"


function App() {
  return (
    <div className="flex flex-col h-[100vh]">
      <AuthWrapper>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="checkout" element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>}
            />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </AuthWrapper>
    </div>
  )
}

export default App;
