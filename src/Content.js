const Content = () => {

    const handleNameChange = () => {
        const names = ['Leon', 'Daniel', 'Junior'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
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
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click me</button>
            
            <button onClick={ () => handleClick2('Leo')}>Click me 2</button>

            <button onClick={ (e) => handleClick3(e)}>Click me 3</button>
            
        </main>
    )
}

export default Content
