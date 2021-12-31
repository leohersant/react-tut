import { useState } from "react";

const Content = () => {

    // Getter and Setter (State). Daniel is default value.
    // This is an array of variables. getName = 'Daniel' by default
    const [getName, setName] = useState('Daniel');


    const handleNameChange = () => {
        const names = ['Leon', 'Daniel', 'Junior'];
        const int = Math.floor(Math.random() * 3);
        return setName(names[int]);
    }

    const handleClick = () => {
        console.log('You click');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e.target);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {getName}!
            </p>

            <button onClick={handleNameChange}>Change name</button>

            <button onClick={() => handleClick2('Leo')}>Click me 2</button>

            <button onClick={(e) => handleClick3(e)}>Click me 3</button>

        </main>
    )
}

export default Content
