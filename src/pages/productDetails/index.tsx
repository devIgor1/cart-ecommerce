import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import { useParams } from "react-router-dom"
import { ProductProps } from "../home"
import { BsCartPlus } from "react-icons/bs"
import { CartContext } from "../../contexts/CartContext"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductProps>()
  const { addItemCart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products/${id}`)
      setProduct(response.data)
    }

    getProducts()
  }, [])

  function handleAddToCart(product: ProductProps) {
    addItemCart(product)
    toast.success("Added to cart", {
      style: {
        backgroundColor: "#121212",
        color: "#fff",
      },
    })
    navigate("/cart")
  }

  return (
    <div className="h-screen">
      <main className="w-full max-w-7xl px-4 mx-auto">
        {product && (
          <section className="w-full flex  justify-center">
            <div className="flex mt-10 flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product?.cover}
                alt={product?.title}
              />
              <div className="flex-1">
                <h1 className="font-bold text-2xl">{product?.title}</h1>
                <p className="mt-5 font-medium">{product?.description}</p>
                <div className="flex items-center mt-10">
                  <strong className="text-xl">
                    {product?.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                  <button
                    className="bg-zinc-900 rounded flex items-center text-white p-3 ml-4 font-medium"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                    <div className="pl-4">
                      <BsCartPlus size={20} color="#fff" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
