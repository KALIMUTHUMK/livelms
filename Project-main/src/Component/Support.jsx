import { BiSolidDownload } from "react-icons/bi";
import { MdUpload } from "react-icons/md";
function Support() {
    return (
        <>
            <div className="w-[84%] h-16  fixed top-[100px] left-[16%]" style={{ transform: "translateY(-50%)" }}>
                <div className=" overflow-auto  ">
                    <p>Home <span className="border-r border-amber-300 border-2 h-4 mx-2  " ></span><span className=" text-amber-300">Faculty</span></p>
                    <div className="flex justify-center  items-center space-x-2 p-4">
                        <div>
                            <div className="mb-4">
                                <input type="text" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Point of contact name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Mobile Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Support Type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px]" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[550px] h-[150px]" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;