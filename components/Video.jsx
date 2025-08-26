import Image from "next/image"
import { FaRegCirclePlay } from "react-icons/fa6";
import classes from '../style/Video.module.css'
export default function Video() {
  return (
    <div className={`h-[500px] w-full bg-gray-500 relative`}>
     <Image src='/hiro.jpg' alt="vid" fill className={`object-cover`}/> 
     <div className={`mask
        absolute w-full h-full top-0 left-0 bg-black/45
        `}></div>
     <button className={`${classes.btn}
     w-[100px] h-[100px]
        absolute  z-20 text-white top-[50%] left-[50%]
         translate-x-[-50%] translate-y-[-50%]
        `}> 
        <FaRegCirclePlay className={`w-full h-full`}/>

     </button>
    </div>
  )
}
