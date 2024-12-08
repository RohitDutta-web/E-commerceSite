import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdWatch } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { MdHeadphones } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";

export default function CategoryMenu() {
  return (
    <>
      <div className="w-full max-w-screen  bg-zinc-800 flex justify-center">
        <div className="w-4/5 text-zinc-500 flex justify-between p-2 text-sm">
          <div className="flex gap-2 items-center"><CiMobile3 />Phones</div>
          <div className="w-[2px] bg-zinc-500"></div>
          <div className="flex gap-2 items-center"><RiComputerLine />Computers</div>
          <div className="w-[2px] bg-zinc-500"></div>
          <div className="flex gap-2 items-center"><IoMdWatch />Smartwatches</div>
          <div className="w-[2px] bg-zinc-500"></div>
          <div className="flex gap-2 items-center"><CiCamera />Cameras</div>
          <div className="w-[2px] bg-zinc-500"></div>
          <div className="flex gap-2 items-center"><MdHeadphones />HeadPhones</div>
          <div className="w-[2px] bg-zinc-500"></div>
          <div className="flex gap-2 items-center"><GiConsoleController />Gaming</div>
        </div>
      </div>
    </>
  )
}
