import { useState } from "react"

export default function SellerEntry() {
  const [formType, setFromType] = useState("logIn")


  return (
    <>
      <p className="w-full max-w-screen font-bold text-center  mt-3 text-4xl mb-3">ESSCOM</p>
      {
        formType === "logIn" ? (<div className="max-w-sm mx-auto bg-gradient-to-b from-white to-gray-100 rounded-3xl p-6 border-4 border-white shadow-lg mt-10">
          <h1 className="text-center font-bold text-2xl text-blue-600">Log In</h1>

          <form className="mt-5">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />



            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95"
            >
              Log In
            </button>
          </form>


          <span className="block text-center text-xs mt-4 bg-transparent">
            <a href="#" className="text-zinc-500 bg-transparent">not registered as a seller, <span className="text-blue-500 bg-transparent" onClick={() => setFromType("signUp")}>
              register here
            </span></a>
          </span>
        </div>
        ) : (<div className="max-w-screen w-[500px] mx-auto bg-gradient-to-b from-white to-gray-100 rounded-3xl p-6 border-4 border-white shadow-lg mt-10">
          <h1 className="text-center font-bold text-2xl text-blue-600">Sign up</h1>

          <form className="mt-5 flex flex-wrap">

            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="storeName"
              id="storeName"
              placeholder="Store name"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone Number"
              className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="area"
              id="area"
              placeholder="area"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="city"
              id="city"
              placeholder="city"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="state"
              id="state"
              placeholder="state"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="number"
              name="zipCode"
              id="zipCode"
              placeholder="zipCode"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="country"
              id="country"
              placeholder="country"
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              required
              type="text"
              name="profile"
              id="profile"
              placeholder="profile"
              value="seller"
              readOnly
              className="w-1/2 bg-white border-none p-4 rounded-full mt-4 shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />



            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95"
            >
              sign up
            </button>
          </form>


          <span className="block text-center text-xs mt-4 bg-transparent">
            <a href="#" className="text-zinc-500 bg-transparent">Already have an account, <span className="text-blue-500 bg-transparent" onClick={() => setFromType("logIn")}>
              logIn here
            </span></a>
          </span>
        </div>
        )
      }


    </>
  )
}
