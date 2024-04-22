import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./login.module.css"

const Login = ({ onLogin }) => {
    const [name, setName] = useState()
    const [shipName, setShipName] = useState()
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(`http://localhost:8088/pirates?name=${name}&ship=${shipName}`)

        if (!response.ok) {
            alert('Invalid credentials')
            return
        }

        const pirate = await response.json()
        onLogin()
        localStorage.setItem('pirateId', pirate[0].id)
        router.push('/')
    }

    return <div className={styles.login__wrapper}>
        <form onSubmit={handleSubmit} className={`login rounded-lg border-double border-4 border-lime-700 p-10 max-w-xl mx-auto ${styles.login__form}`}>
            <h2 className="mb-10 text-4xl font-bold">This be Buccaneer's Banter</h2>
            <h3 className="mb-8 text-3xl font-bold">Who goes there?</h3>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="shipName"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Ship Name
                </label>
                <input
                    type="text"
                    id="shipName"
                    value={shipName}
                    onChange={(event) => setShipName(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
        </form>
    </div>
}

export default Login
