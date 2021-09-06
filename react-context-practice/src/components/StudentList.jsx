import React, { useContext } from 'react'
import StudentItem from './StudentItem'
import { StudentContext } from '../context/StudentContext'

export default function StudentList() {
    const {students} = useContext(StudentContext)

    return (
        <>
            <h2>Student List</h2>
            {students.map((student)=>(
                <StudentItem key={student.name} student={student}/>
            ))}
        </>
    )
}