import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"
import { Layout } from "./components/layout"
import { ProductDetail } from "./pages/productDetails"
import { Thanks } from "./pages/thanks"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
    ],
  },
])

export { router }
