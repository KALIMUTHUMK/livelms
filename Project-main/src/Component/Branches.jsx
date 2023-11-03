import { MdModeEdit } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

function Branches() {
  return (
    
    
    <div className="w-[84%] h-16  fixed top-[100px] left-[16%]" style={{ transform: "translateY(-50%)" }}>
      <div className=" overflow-auto  ">
        <p>Home <span className="border-r border-amber-300 border-2 h-4 mx-2  " ></span><span className=" text-amber-300">Branches</span></p>
        <div className="flex justify-end  items-center space-x-2 p-4">
          <input type="text" placeholder="Search Branches" className="border border-gray-300 rounded-lg  px-2 py-1 focus:outline-none  " />
          <button type="button" class="text-white bg-[#105D50] hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5   ">Search</button>
          <button type="button" class="text-white bg-[#105D50] hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5   ">Add Branches</button>
          <MdUpload />
          <BiSolidDownload />
        </div>
        <table className="min-w-full divide-y divide-gray-200 relative ">
          <thead className="h-[45px]  align-middle">
            <tr>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6 align-middle" style={{ whiteSpace: 'nowrap' }}><span>Select</span><input type="checkbox" className="h-5 w-5  align-middle" /></th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>S.no</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Branch ID</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Branch Name</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Email ID</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Mobile Number</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6 " style={{ whiteSpace: 'nowrap' }}>Point of Contact</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Set-up Date</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>VR</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Space Used</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Disk Space</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Status</th>
              <th className=" font-normal text-white bg-[#105D50]  space-x-6" style={{ whiteSpace: 'nowrap' }}>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
           
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><input type="checkbox" className="h-5 w-5" /></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1.</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">SMVEC</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">test@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">99885647990</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Sanjai</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">02/10/2022</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" className="sr-only peer" /><div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#105D50]"></div><span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">1TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2TB</td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><label class="relative inline-flex items-center  cursor-pointer"><input type="checkbox" value="" class="sr-only peer" /><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span></label></td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200"><MdModeEdit /></td>
            </tr>
          </tbody>
        </table>


      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-2">
          <select id="countries" className="bg-gray-50 border border-gray-300 text-[#105D50] text-sm p-2.5">
            <option>100</option>
            <option>50</option>
            <option>100</option>
            <option>150</option>
            <option>200</option>
          </select>
          <p className="flex items-center space-x-2">
            <span className="text-yellow-500">1</span>
            <span className="border-r border-yellow-500 h-5"></span>
            <span className="text-yellow-500">2</span>
            <span className="border-r border-yellow-500 h-5"></span>
            <span className="text-yellow-500">3</span>
          </p>
          <p className="flex items-center"><HiOutlineArrowLeftCircle />Prev</p>
          <span className="border-r border-yellow-500 h-5"></span>
          <p className="flex items-center"><HiOutlineArrowRightCircle />Next</p>
          <p>Go to page:<input type="text" placeholder="0" className="border border-gray-300 rounded-sm px-2 py-1 focus:outline-none" /></p>
          <button type="button" className="text-white bg-[#105D50] hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5">Go</button>
        </div>

      </div>
      

    </div>
    
  );
}

export default Branches;
