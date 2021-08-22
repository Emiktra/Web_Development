import "./UserCard.css"
import axios from "axios"
import React, {useState} from 'react'


export default function UserCard() {
    const [userData, changeUserData] = useState()
    
    const newUserRequest = () =>{
        axios.get("https://randomuser.me/api/").then((Data)=>{
            changeUserData(Data.data.results[0])})}

    if (userData === undefined){
        return(
            <div className="OuterWelcome">
            <div className="startPage">
                <div className="UserWelcomeDiv">
                    <h1 className="starth1">Looking For a User?</h1>
                    <h5>find a user with the click of a button</h5>
                </div>
                <button id="newUserBtn" onClick={newUserRequest}>Find User</button>
            </div>
            </div>
        )
    } else{
        return (
            <div className="OuterContainer">
                {/* link for font awesome */}
                <link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"crossOrigin="anonymous"/>
                
                <div className="UserContainer">
                    <div className="profilePic">
                        <img className="picture" src={userData.picture.large} alt="UserPicture" />
                        <h1>{userData.name.title} {userData.name.first} {userData.name.last}</h1>
                    </div>
                    <div className="Innercontainer">
                        <i className="fas fa-envelope"/>
                        <h3>{userData.email}</h3>
                    </div>
                    <div className="Innercontainer">
                        <i className="fas fa-phone-square"/>
                        <h3>{userData.cell}</h3>
                    </div>
                    <div className="Innercontainer">
                        <i className="fas fa-map-marked-alt"></i>
                        <h3>{userData.location.city} - {userData.location.country}</h3>
                    </div>
                    <h4>Age: {userData.dob.age}</h4>
                    <h4>Register Date: {userData.registered.date.split("T")[0]}</h4>
                </div>
                <button id="randomUserBtn" onClick={newUserRequest}>New User</button>
            </div>
        )
    }

}