import React, {useEffect} from 'react'

export default function Home() {

    useEffect(()=>{
        window.scroll(0,0)
    })

    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
}
