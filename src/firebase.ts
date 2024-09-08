import { initializeApp, getApp } from "firebase/app"; 
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import  ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCC4uY4mRBI5ySANdQShbnP28pooftoCHw",
  authDomain: "movilessabado-f46c9.firebaseapp.com",
  projectId: "movilessabado-f46c9",
  storageBucket: "movilessabado-f46c9.appspot.com",
  messagingSenderId: "152196470796",
  appId: "1:152196470796:web:6d96e80a3f24d3eb08f629"
};

const app =  initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)

})

export{app,auth,getApp, getAuth, database}



