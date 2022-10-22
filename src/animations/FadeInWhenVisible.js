import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const FadeInWhenVisible = ({children}) => {
    const variants = {
        visible: {y: 0, transition: { duration: 1, ease: 'easeOut'}, opacity: 1},
        hidden: {y: '5vw', opacity: 0}
    }

    const {ref, inView} = useInView({threshold: 0.4})
    const animation = useAnimation()

    useEffect(() => {
        if(inView){
            animation.start("visible")
        }

        console.log(inView)
    }, [animation, inView])

    return (
        <motion.div ref={ref} animate={animation} initial="hidden" variants={variants}>
            {children}
        </motion.div>
    )
}

export default FadeInWhenVisible