

export default function SellerUpdateForum() {
  return (
    <>

  
      <div className="w-full max-w-screen flex justify-center">
      <form action="" className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-4">
  <h2 className="text-2xl font-semibold text-zinc-700 mb-4">Seller info update forum</h2>
  
  <input type="text" name="name" id="name" placeholder="Full Name" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="storeName" id="storeName" placeholder="Store Name" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="password" name="password" id="password" placeholder="Password" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="email" name="email" id="email" placeholder="Email" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="area" id="area" placeholder="Area" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="city" id="city" placeholder="City" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="state" id="state" placeholder="State" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="number" name="zipcode" id="zipcode" placeholder="Zip Code" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />
  <input type="text" name="country" id="country" placeholder="Country" className="w-full border-2 p-3 rounded-lg outline-none text-zinc-700 focus:border-zinc-900 transition-all" />

  <input type="submit" value="Update" className="w-full bg-zinc-900 text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-zinc-900 hover:border-2 hover:border-zinc-400 transition-all cursor-pointer" />
</form>
      </div>

    </>
  )
}
