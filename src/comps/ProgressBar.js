import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion/dist/framer-motion'

export default function ProgressBar({file, setFile}) {

    const {progress, url, error} = useStorage(file)

    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div 
            className='progress-bar' 
            intial={{width: 0}}
            animate={{width: progress + '%'}}    
        >

        </motion.div>
    )
}
