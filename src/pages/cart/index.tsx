import { useContext, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

export function Cart() {
  const { cart, total, addItemCart, removeItemCart, resetCart } =
    useContext(CartContext)

  useEffect(() => {
    cart
  }, [cart])

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">My Cart</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Your cart is empty...</p>
          <Link
            to="/"
            className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
          >
            Access Products
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img src={item.cover} alt={item.title} className="w-28" />
          <strong>Price: ${item.price}</strong>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2"
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2"
            >
              +
            </button>
          </div>
          <strong className="float-right">
            Subtotal:{" "}
            {item.total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && (
        <div className="flex items-center justify-between mt-4">
          {cart.length !== 0 && (
            <p className="font-bold mt-4">Total: {total}</p>
          )}
          <Link to="/thanks">
            <button
              onClick={resetCart}
              className="bg-zinc-900 text-white p-3 rounded-md font-medium"
            >
              Finish order
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
