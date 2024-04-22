import Link from 'next/link'

const Navbar = ({ setIsLoggedIn }) => {

    const handleLogout = () => {
        // remove the user id from local storage or session storage
        localStorage.removeItem('pirateId')
        setIsLoggedIn(false)
    }

    return (
        <nav>
            <div className="">
                <Link className="brand font-pirate tracking-wider" href="/">
                    Bucaneer's Banter
                </Link>
            </div>
            <div className="logout">
                <button
                    className="bg-red-500 hover:bg-red-700 font-bold py-0.5 px-3 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
