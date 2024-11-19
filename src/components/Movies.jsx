import { useState, useEffect } from "react";

function Age() {
    const [movies] = useState(localStorage.getItem('age') || 0);

    useEffect(() => {
        localStorage.setItem('age', age)
    }, [age])

    return (
        <>
            <p>Let's change your age! </p>

            <form>
                <input type="text" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            </form>
        </>
    )
}

export default Age