import { AiFillHome } from "react-icons/ai";
import {FaVideo } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { CgProfile} from "react-icons/cg";





function NavCom() {
  return (
    <>
    <div className=" w-[84%] h-12 fixed top-0 left-[16%] flex justify-end  border-b-[1px] border-[#105D50] ">
      <div className="flex  gap-[2]  w-[25%] justify-around  items-center ">
        <span><FaVideo /></span>
        <span><BsBell /></span>
        <span><IoChatboxOutline /></span>
        <span><MdOutlineFileUpload style={{transform:"rotate(90deg)"}} /></span>
        <span><CgProfile /></span>
      </div>
    </div>
    
    </>
  );
}

export default NavCom;