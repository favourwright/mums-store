import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app"

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyCdzjNeGsKYpqxm6J-FB0ZYojZQaj4XwT4",
        authDomain: "mums-store.firebaseapp.com",
        projectId: "mums-store",
        storageBucket: "mums-store.appspot.com",
        messagingSenderId: "504378534100",
        appId: "1:504378534100:web:c92b64d82008e0e3267341",
        measurementId: "G-8X6D2JPM7R"
    }
    const app = initializeApp(firebaseConfig)
    nuxtApp.provide('firebase_db', getFirestore(app))
})