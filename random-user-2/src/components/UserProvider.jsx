import React,{useState} from 'react'
import axios from "axios"
import "./UserProvider.css"
import photoMan from "../assets/man.svg"
import photoWoman from "../assets/woman.svg"
import photoClarusway from "../assets/cw.svg"
import photoDesign from "../assets/design.svg"
import photoGrowingUpMan from "../assets/growing-up-man.svg"
import photoGrowingUpWoman from "../assets/growing-up-woman.svg"
import photoMail from "../assets/mail.svg"
import photoMap from "../assets/map.svg"
import photoPadlock from "../assets/padlock.svg"
import photoPhone from "../assets/phone.svg"
import SavedUsers from './SavedUsers'


export default function UserProvider() {
    const [userData, changeUserData] = useState()
    const [displayedInfo, setDisplayedInfo] = useState([])
    
    const newUserRequest = () =>{
        axios.get("https://randomuser.me/api/").then((Data)=>{
            changeUserData(Data.data.results[0]);
            refreshInfo(Data.data.results[0])
        })}
    const refreshInfo=(userData)=>{
        setDisplayedInfo(["My Name is",`${userData.name.first} ${userData.name.last}`])
    }   
    const addToList=()=>{
        console.log("hello")
    }

    if (userData === undefined){
        newUserRequest()
        return (<></>)
    } else{return (
        <div>
            <img src={userData.picture.large}></img>
            <div>
                <h4>{displayedInfo[0]}</h4>
                <h1>{displayedInfo[1]}</h1>
            </div>
            <div className="photoIconContainer">
                {userData.gender == "female" ? <img src={photoWoman} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Name is",`${userData.name.first} ${userData.name.last}`])}}/> : <img src={photoMan} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Name is",`${userData.name.first} ${userData.name.last}`])}}/>}
                <img src={photoMail} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Email is",userData.email])}}/>
                {userData.gender == "female" ? <img src={photoGrowingUpWoman} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Age is",userData.dob.age])}}/> : <img src={photoGrowingUpMan} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Age is",userData.dob.age])}}/>}
                <img src={photoMap} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Street is",`${userData.location.street.number} ${userData.location.street.name}`])}}/>
                <img src={photoPhone} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Phone Number is",userData.cell])}}/>
                <img src={photoPadlock} className="photoIcons" onMouseOver={()=>{setDisplayedInfo(["My Password is",userData.login.password])}}/>
            </div>
            <div>
                <button onClick={newUserRequest}>NEW USER</button>
                <button onClick={addToList}>ADD USER</button>
            </div>
            <SavedUsers 
            userFirstName = {userData.name.first} 
            userEmail = {userData.email} userAge = {userData.dob.age} 
            userPhone = {userData.cell} addToList={addToList}/>
        </div>
    )}
}