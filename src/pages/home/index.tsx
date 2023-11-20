import { useEffect, useState, useContext } from "react"
import { BsCartPlus } from "react-icons/bs"
import { api } from "../../services/api"
import { CartContext } from "../../contexts/CartContext"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

export interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])

  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")

      setProducts(response.data)
    }

    getProducts()
  }, [])

  function handleAddToCart(product: ProductProps) {
    toast.success("Added to cart", {
      style: {
        backgroundColor: "#121212",
        color: "#fff",
      },
    })
    addItemCart(product)
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto ">
        <h1 className="font-bold text-2xl mb-4 pt-5 text-center">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full rounded-lg max-h-72 mb-2 border-stone-400 border-2"
                  src={product.cover}
                  alt={product.title}
                />
                <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </strong>
                <button
                  className="bg-zinc-900 p-1 rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  <BsCartPlus size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
