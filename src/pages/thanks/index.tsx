import { Link } from "react-router-dom"

export function Thanks() {
  return (
    <div className="w-full text-center mt-24">
      <h1 className="font-bold text-4xl pb-5">Thanks For Shopping!</h1>
      <Link to="/" className="text-medium text-2xl underline cursor-pointer">
        Back to home
      </Link>
    </div>
  )
}
