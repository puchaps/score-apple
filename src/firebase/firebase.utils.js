/* eslint-disable no-console */
/* eslint-disable consistent-return */
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyD3TNha-nKxfgWumBsOU7HfsufdhsW2Wm0",
  authDomain: "score-apple.firebaseapp.com",
  projectId: "score-apple",
  storageBucket: "score-apple.appspot.com",
  messagingSenderId: "852500730159",
  appId: "1:852500730159:web:7dfa5961143d41ea1311da",
  measurementId: "G-MQ780Y8SCR",
}

firebase.initializeApp(config)

export const AUTH = firebase.auth()
export const FIRE_STORE = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const createUserAuthInFireStore = async (userAuth, otherData) => {
  if (!userAuth) return

  const userRef = FIRE_STORE.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createDate = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...otherData,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userRef
}

export const addCollectionInFireStore = (nameCollection, documents) => {
  const collectionRef = FIRE_STORE.collection(nameCollection)

  const batch = FIRE_STORE.batch()

  documents.forEach((item) => {
    const itemRef = collectionRef.doc()
    batch.set(itemRef, item)
  })

  return batch.commit()
}

export const getCollections = (snapShotCollections) => {
  const transformCollection = snapShotCollections.docs.map((item) => {
    const { title, imageUrl, items } = item.data()

    return {
      title,
      imageUrl,
      routeName: title.toLowerCase(),
      id: item.id,
      items,
    }
  })

  return transformCollection
}

export const getCollectionsSnapShot = () =>
  new Promise((resolve, reject) => {
    const collectionRef = FIRE_STORE.collection("collections")
    const snapShotCollections = collectionRef.get()

    snapShotCollections.then((snapShot) => {
      resolve(snapShot)
    }, reject)
  })

export const getUserAuthSession = () =>
  new Promise((resolve, reject) => {
    const unSubscribe = AUTH.onAuthStateChanged((userAuth) => {
      unSubscribe()
      resolve(userAuth)
    }, reject)
  })

export const signInWithGoogleAccount = () =>
  AUTH.signInWithPopup(googleProvider)

export default firebase
