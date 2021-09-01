import React from "react";

const ListItem = ({student, add})=>{
    return(
        <div className="listItem" onClick={()=>{add(student)}}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
            alt="a"/>
        </div>
    )
}