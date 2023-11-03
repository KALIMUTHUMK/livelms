import img from '../Image/b1.png'
import img2 from '../Image/b2.jpg'
import { BsBuildingFillCheck,BsFillBuildingsFill } from "react-icons/bs";
import { FaRegBuilding,FaBuildingColumns } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";







function Home() {
    return (
        <>
            <div className="w-[84%] h-16  fixed top-[100px] left-[16%]" style={{ transform: "translateY(-50%)" }}>
                <div className=" overflow-auto  ">
                    <p>Home <span className="border-r border-amber-300 border-2 h-4 mx-2  " ></span><span className=" text-amber-300">Selvam</span></p>
                    <div>
                        <div>
                            <div class="flex items-center  justify-center space-x-6">
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            <BsBuildingFillCheck className="w-12 h-12 text-[#AB47BC]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            < FaRegBuilding className="w-12 h-12 text-[#F44336]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            <BsFillBuildingsFill className="w-12 h-12 text-[#2196F3]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center justify-center space-x-6  p-4">
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            <FaBuildingColumns className="w-12 h-12 text-[#FF9100]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            <IoIosPeople className="w-12 h-12 text-[#0D5D50]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#14532D] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center w-[250px] group transition-all transform hover:scale-105">
                                        <div class="rounded-full border border-[#AB47BC] p-2 group-hover:bg-white transition-colors">
                                            <FaUserGraduate className="w-12 h-12 text-[#2979FF]" />
                                        </div>

                                        <div class="ml-4 group-hover:text-white">
                                            <p>Branches</p>
                                            <p class="border rounded-[200px] w-20 text-center">8</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                         {/* divide */}
                        <div className=' flex justify-center gap-[250px] gap-y-9'>
                            <div>
                                <img src={img} className=' w-[300px] h-[250px]'  />
                            </div>
                            <div>
                                <img src={img2} className=' w-[350px] h-[250px]' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Home;