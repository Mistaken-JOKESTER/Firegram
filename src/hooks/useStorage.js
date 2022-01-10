import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore } from '../firebase/config'
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect( () => {
        //upload logic
        //refrences
        const storageRef = ref(projectStorage, `images/${Math.floor(Math.random() * 100)}_${file.name}`)
        const collectionRef = collection(projectFirestore, 'images')

        uploadBytesResumable(storageRef,file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (error) => {
            console.log(error)
            setError(error)
        }, async () => {
            const url = await getDownloadURL(storageRef)
            const docRef = await addDoc(collectionRef, {
                url,
                createdAt: serverTimestamp()
            })
            
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage