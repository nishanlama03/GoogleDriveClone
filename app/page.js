"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/component/header"
import {useState} from 'react';
import Sidebar from '../app/component/sidebar'

export default function Home() {
  const [user, setUser] = useState({
    displayName: 'Nishan Lama',
    email: 'nishanlama03@gmail.com',
    emailVerified: true,
    phoneNumber:null,
    photoURL:'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg'
  })
  return (
    <div className='App'>
      <Header userPhoto={user.photoURL}/>
      <Sidebar/>
    </div>
  );
}
