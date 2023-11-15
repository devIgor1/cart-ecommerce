export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">My Cart</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://i.zst.com.br/thumbs/12/12/10/-928132873.jpg"
          alt="product-logo"
          className="w-28"
        />
        <strong>Price: $200</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
            -
          </button>
          2
          <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
            +
          </button>
        </div>
        <strong className="float-right">Subtotal: $200</strong>
      </section>

      <p className="font-bold mt-4">Total: $200</p>
    </div>
  )
}
