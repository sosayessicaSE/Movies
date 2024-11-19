import Navbar from "./Navbar";
import { useState } from "react";

function Home() {
    const [age] = useState(localStorage.getItem('age') || '');
    const [name] = useState(localStorage.getItem('name') || '');

    return (
        <>
            <Navbar />
            <div className='hello'>
                <h1>Hello {name}!</h1>
                <h2>You look young with only {age} years old. </h2>
            </div >
        </>
    )
}

export default Home