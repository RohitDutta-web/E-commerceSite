

export default function Suggest() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center mt-20  pt-10 ">
        <textarea readOnly className="resize-none max-w-screen w-4/5 h-auto outline-none bg-zinc-200   text-black p-3" value={'fafdad'}></textarea>
        <input type="text" placeholder="Ask here for anything about any product" className="w-2/3" />
        <button>Cook</button>
      </div>
    </>
  )
}
