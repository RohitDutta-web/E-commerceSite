import { useState } from "react"




export default function Suggest() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
 
  


  return (
    <>
      <div className="w-auto h-auto flex flex-col items-center justify-center mt-20 pb-3 pt-10 shadow-xl m-4">
        <textarea readOnly className="resize-auto max-w-screen w-4/5 h-auto outline-none bg-zinc-100   text-black p-3  " value={''} ></textarea>
        <input type="text" placeholder="🛍️ Got product questions? 💬 Ask away!" className="w-2/3 outline rounded outline-zinc-200 mt-3 p-2" onChange={(e) => setQuestion(e.target.value)} value={question} />
        <button className="border-2 p-2 rounded font-bold border-black hover:text-white pl-5 pr-5  hover:bg-zinc-900 mt-5">Ask</button>
        <p className="text-zinc-400 mt-5">E.g . Best phones under 20k or differences between iPhone15 and iPhone16</p>
        
      </div>
    </>
  )
}
