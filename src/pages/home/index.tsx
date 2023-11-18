import { useEffect, useState } from "react"
import { BsCartPlus } from "react-icons/bs"
import { api } from "../../services/api"

export interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")

      setProducts(response.data)
    }

    getProducts()
  }, [])

  function handleAddToCart(product: ProductProps) {
    console.log(product)
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <img
                className="w-full rounded-lg max-h-72 mb-2 border-stone-400 border-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
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
