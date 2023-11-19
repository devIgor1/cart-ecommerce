import { createContext, ReactNode, useState } from "react"
import { ProductProps } from "../pages/home"

interface CartContextData {
  cart: CartProps[]
  cartAmount: number
  addItemCart: (newItem: ProductProps) => void
  removeItemCart: (product: CartProps) => void
  total: string
}

interface CartProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
  amount: number
  total: number
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState<string>("")

  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id)

    if (indexItem !== -1) {
      // sum +1 in the cart and calculate the total
      let cartList = cart

      cartList[indexItem].amount = cartList[indexItem].amount + 1
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price

      setCart(cartList)
      totalResultCart(cartList)
      return
    }

    let data = {
      //add item to cart
      ...newItem,
      amount: 1,
      total: newItem.price,
    }

    setCart((products) => [...products, data])
    totalResultCart([...cart, data])
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id)

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart

      cartList[indexItem].amount = cartList[indexItem].amount - 1
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price
      setCart(cartList)
      totalResultCart(cartList)
      return
    }

    const removedItem = cart.filter((item) => item.id !== product.id)
    setCart(removedItem)
    totalResultCart(removedItem)
  }

  function totalResultCart(items: CartProps[]) {
    let myCart = items
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total
    }, 0)
    const formattedResult = result.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    setTotal(formattedResult)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
