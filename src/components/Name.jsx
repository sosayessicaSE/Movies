import { useState, useEffect } from "react";


function Name() {
    const [name, setName] = useState(localStorage.getItem('name') || '');

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name]);

    return (
        <>
            <h1>Change your name here!</h1>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
        </>
    )
}

export default Name
