import React,{useState} from 'react'
import axios from "axios"
import "./UserProvider.css"
import photoMan from "../assets/man.svg"
import photoWoman from "../assets/woman.svg"

import photoGrowingUpMan from "../assets/growing-up-man.svg"
import photoGrowingUpWoman from "../assets/growing-up-woman.svg"
import photoMail from "../assets/mail.svg"
import photoMap from "../assets/map.svg"
import photoPadlock from "../assets/padlock.svg"
import photoPhone from "../assets/phone.svg"



export default function UserProvider() {
    const [userData, changeUserData] = useState()
    const [displayedInfo, setDisplayedInfo] = useState([])
    const [savedUsers, setSavedUsers] = useState([])
    const [newUser, setNewUser] = useState("NEW USER")
    const [visibilityClass, setVisibility] = useState("invisible")

    const setStateOfLoading =()=>{
        setNewUser("LOADING...")
        newUserRequest()
    }
    const newUserRequest = () =>{
        axios.get("https://randomuser.me/api/").then((Data)=>{
            changeUserData(Data.data.results[0]);
            refreshInfo(Data.data.results[0])
            setNewUser("NEW USER")
        })
    }
    const refreshInfo=(userData)=>{
        setDisplayedInfo(["My Name is",`${userData.name.first} ${userData.name.last}`])
    }   
    const addToList=()=>{
        setVisibility("")
        let user = [userData.name.first, userData.email, userData.cell, userData.dob.age]
        setSavedUsers([...savedUsers, user])
        console.log(savedUsers)
    }

    if (userData === undefined){
        newUserRequest()
        return (<></>)
    } else{return (
        <div id="CardContainer">
            <img className="profilePic" src={userData.picture.large}></img>
            <div className="infoTitle">
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
            <div className="buttonContainer">
                <button onClick={setStateOfLoading}>{newUser}</button>
                <button onClick={addToList}>ADD USER</button>
            </div>    
            <div className={`${visibilityClass} userListCapsule`}>

                <table id="userList">
                    <thead>
                    <tr className="ListTitle">
                        <th className={visibilityClass}>Firstname</th>
                        <th className={visibilityClass}>Email</th>
                        <th className={visibilityClass}>Phone</th>
                        <th className={visibilityClass}>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {savedUsers.map((userInfo)=>{
                        return(                    
                        <tr>
                            <td>{userInfo[0]}</td>
                            <td>{userInfo[1]}</td>
                            <td>{userInfo[2]}</td>
                            <td>{userInfo[3]}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>    
    )}
}