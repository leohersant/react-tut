const Footer = ({length}) => {

    const today = new Date();

    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()} - Items: {length}</p>
        </footer>
    )
}

export default Footer
