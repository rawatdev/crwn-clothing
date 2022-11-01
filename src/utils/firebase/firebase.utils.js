import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDubavYHFE2F0S4sSPCXD_EQLyJtPNCH2o",
  authDomain: "crown-clothing-db-f329a.firebaseapp.com",
  projectId: "crown-clothing-db-f329a",
  storageBucket: "crown-clothing-db-f329a.appspot.com",
  messagingSenderId: "637393166122",
  appId: "1:637393166122:web:81892c2dbb9575d8d44853",
}

const firebaseApp = initializeApp(firebaseConfig)

// const auth = getAuth(firebaseApp)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore(firebaseApp)

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  console.log({ userSnapshot })

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (err) {
      console.log("error creating the user", err.message)
    }
  }

  return userDocRef
}
