import  React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

export default function StudentItem({student}) {
    const deger = useContext(StudentContext)

    return (
        <div style={{background: student.color, paddingBottom:"2rem", paddingTop: "1rem", marginBottom:"1rem"}}>
            

            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            Color: <input type="text" value={student.color} onChange={(e)=>{deger.changeColor(student.id, e.target.value)}}/>
        </div>
    )
}
