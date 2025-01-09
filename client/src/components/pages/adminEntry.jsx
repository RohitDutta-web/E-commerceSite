



export default function AdminEntry() {



 
  return (
    <>
      <p className="w-full max-w-screen  text-center  text-2xl font-bold mt-5  mb-10">ESSCOM</p>

      <div className="w-full max-w-screen  font-bold text-xl flex justify-center font-sans">

      
      </div>
      <div className="container border border-gray-400 p-5 rounded-2xl bg-white max-w-md mx-auto mt-20">
        <div className="heading text-lg font-bold mb-5">Admin login</div>
        <form className="form flex flex-col gap-5">

          <div className="input-field relative">
            <input
              type="text"
              id="company id"
              name="company id"
              required
              autoComplete="off"
              className="input peer p-2 text-base rounded-lg border border-gray-400 z-40 w-full focus:outline-none focus:border-blue-700"
              placeholder="company id"
       
            />
            <label
              htmlFor="company id"
              className="absolute   left-3 text-transparent bg-transparent transform translate-y-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-transparent peer-focus:translate-y-[-51%] peer-focus:translate-x-[-10px] peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-focus:text-blue-700 peer-focus:font-bold peer-focus:rounded-full transition-all duration-300"
            >
              Company ID
            </label>
          </div>


          <div className="input-field relative">
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              className="input peer p-2 text-base rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-700"
              placeholder="password"
              
              
            />
            <label
              htmlFor="password"
             className="absolute   left-3 text-transparent bg-transparent transform translate-y-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-transparent peer-focus:translate-y-[-51%] peer-focus:translate-x-[-10px] peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-focus:text-blue-700 peer-focus:font-bold peer-focus:rounded-full transition-all duration-300"
            >
              Password
            </label>
          </div>

          <div className="btn-container flex items-center gap-5">
            <button
              type="submit"
              className="btn px-4 py-2 text-lg uppercase tracking-widest rounded-md border border-blue-800 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-md hover:shadow-lg active:shadow-inner transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
