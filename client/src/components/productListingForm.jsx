

export default function ProductListingForm({ close }) {
  return (
    <>
      <div className=" border-2 w-96 absolute top-[30%] z-40 left-[30%] shadow-2xl p-5">
        <p className="w-full text-end  font-bold mb-5" ><span className="cursor-pointer" onClick={() => close()}>Close</span></p>
        <form className="w-full flex flex-col items-center  rounded-xl">
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="title" />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="description" />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="price" />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="brand" />
          <label htmlFor="" className="text-zinc-400">Select product category</label>
          <select name="" id="" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 ">
            <option value="phone">Phone</option>
            <option value="desktop accessories">Desktop accessories</option>
            <option value="laptop">Laptop</option>
            <option value="smart watch">Smart watch</option>
            <option value="camera">Camera</option>
            <option value="desktop">Desktop</option>
            <option value="headphones">Headphones</option>
            <option value="gaming">Gaming</option>
            <option value="others">Others</option>

          </select>
          <input type="number" placeholder="stock" min={0} className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " />
          <input type="submit" value="Create" className=" font-bold border-2 m-2 rounded text-zinc-500 hover:text-zinc-700 hover:border-zinc-700 cursor-pointer pl-5 pb-2 pr-5 pt-2" />
        </form>
      </div>

    </>
  )
}
