import { getDocs, collection } from 'firebase/firestore'

// Setup
import db from './setup'

const getAll = async (collectionName) => {
    let collectionSnapshot = await collection(db, collectionName)
    return getDocs(collectionSnapshot).then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
    })
}

export default {
    getAll
}