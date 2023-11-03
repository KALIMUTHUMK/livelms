import logo from "../Image/abhis.JPG"
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiTwotoneFile } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { FaFileCircleCheck } from "react-icons/fa6";
import { VscBook } from "react-icons/vsc";
import { IoMdListBox } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";













import { FaHome, FaRegBuilding, FaUserPlus, FaBlackTie, FaArchway, FaPhoneAlt, FaAddressCard, FaBriefcase, FaBullhorn, FaBrain, FaCannabis, FaChalkboardTeacher, FaCommentDots, FaUserCircle } from 'react-icons/fa';
function SideCom() {
  return (
    <>
      <div className="h-screen overflow-y-scroll fixed top-0 left-0 bg-[#105D50] w-[16%]">
        <div className="p-6">
          <img src={logo} className=" rounded-md" />
        </div>
        <hr className="text-white" />
        <div >
          <Link to="/"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><AiFillHome className="text-2xl" /><span>Home</span></Link>
          <Link to="/Branches"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><HiOutlineOfficeBuilding className="text-2xl" /><span>Branches</span></Link>
          <Link to="/Faculty"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><BsPeopleFill className="text-2xl" /><span>Faculty</span></Link>
          <Link to="/Subject"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><AiTwotoneFile className="text-2xl" /><span>Subject</span></Link>
          <Link to="/Courses"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><FaFileCircleCheck className="text-2xl" /><span>Courses</span></Link>
          <Link to="/Students"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><PiStudentBold className="text-2xl" /><span>Students</span></Link>
          <Link to="/Semester"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><VscBook className="text-2xl" /><span>Semesters</span></Link>
          <Link to="/Section"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><IoMdListBox className="text-2xl" /><span>Sections</span></Link>
          <Link to="/Exam"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><FaGraduationCap className="text-2xl" /><span>Exam</span></Link>
          <Link to="/Result"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><BsFillFileBarGraphFill className="text-2xl" /><span>Results</span></Link>
          <Link to="/Attendance"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><BsFillCalendar2Fill className="text-2xl" /><span>Attendance</span></Link>
          <Link to="/Announcement"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><TfiAnnouncement className="text-2xl" /><span>Announcement</span></Link>
          <Link to="/Support"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><IoCall className="text-2xl" /><span>Support</span></Link>
          <Link to="/Admin"className="flex items-center text-white justify-start gap-2 hover:bg-yellow-500 p-3 border-l-[6px] border-[#105D50] hover:border-white"><BsFillPersonPlusFill className="text-2xl" /><span>Admins</span></Link>
        </div>
      </div>
    </>
  );
}

export default SideCom;