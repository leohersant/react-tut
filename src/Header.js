const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

// if nothing is pass to the child component
// this code takes place
// usefull when designing component (fixed things only)
Header.defaultProps = {
    title: "Default Title"
}

export default Header
