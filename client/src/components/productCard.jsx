

export default function ProductCard({category, name, picture, price}) {
  return (
    <>


  <div className="relative group bg-gray-200 h-[300px] shadow-xl rounded-2xl overflow-hidden w-[250px] cursor-pointer">
    <img className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease" src={picture} />
    <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
      <div className="p-6">
        <div className="capitalize flex items-center justify-between gap-4">
          <div>
                <h2 className="text-red-600 text-lg font-bold">{name }</h2>
                <p className="dark:text-gray-100">Category : <span className="font-bold">{category }</span></p>
          </div>
          <div>
                <p className="text-3xl font-bold dark:text-gray-100">$<span>{price }</span></p>
          </div>
        </div>
        <div className="block mt-4">
        
        </div>
      </div>
    </div>
  </div>



 
    </>
  )
}
