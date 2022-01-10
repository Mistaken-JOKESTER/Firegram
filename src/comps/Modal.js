import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'

function Modal({url, setUrl}) {
    const clickHandler = (e) => {
        if(e.target.classList.contains('backdrop')){
            setUrl(null)
        }
    }

    return (
        <motion.div className='backdrop' onClick={clickHandler}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transistion={{ delay: 3 }}
        >
            {url && <motion.img src={url} alt='Enlarged Pic' 
                initial={{ y:"-100vh"}}
                animate={{y: 0}}
                transistion={{ delay: 3 }}
            />}
        </motion.div>
    )
}

export default Modal