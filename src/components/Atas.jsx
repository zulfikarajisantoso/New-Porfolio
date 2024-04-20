import { Link } from "react-router-dom"
import {FiHome} from 'react-icons/fi'
import {GrProjects} from 'react-icons/gr'
import {LuContact} from 'react-icons/lu'
import {ImProfile} from 'react-icons/im'

const Atas = ({openchat}) => {
  return (
    <div className='w-full flex justify-center h-10 absolute z-10'>
      <div className='flex items-center p-4 space-x-10 translate-y-3 shadow-md bg-opacity-50 rounded-xl backdrop-blur-md bg-white/90 '>
          <Link to={"/"}>
            <FiHome />
          </Link>
          <Link to={"/work"}>
            <GrProjects />
          </Link>
          <Link to={"/about"}>
            <ImProfile />
          </Link>
          <button onClick={openchat} >
            <LuContact />
          </button>
      
      </div>
    </div>
  )
}

export default Atas