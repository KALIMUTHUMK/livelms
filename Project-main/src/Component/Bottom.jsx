import { BiCopyright } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
function Bottomm() {
    return (
        <>
            <div className=" w-[84%] h-12 fixed bottom-0 left-[16%] flex justify-between   ">
               
                    <div>
                        <p class="text-sm text-[#105D50]">V1.0.1 Copyright <BiCopyright className="w-6 h-6 inline-block" /> 2022 Abhis</p>
                    </div>
                    <div class="flex space-x-2">
                        <BsFacebook className="w-6 h-6" />
                        <BsInstagram className="w-6 h-6" />
                        <BsWhatsapp className="w-6 h-6" />
                        <BsLinkedin className="w-6 h-6" />
                    </div>
                
            </div>
        </>
    );
}

export default Bottomm;