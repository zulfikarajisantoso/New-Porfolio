import {motion} from "framer-motion"

const transitions = (Component) => {
  return (
    <>
        <Component />
        <motion.div 
            className="slide-in"
            initial={{scaleY: 0}}
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}       
            transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}} 
        >
        </motion.div>
    </>
    
  )
}

export default transitions