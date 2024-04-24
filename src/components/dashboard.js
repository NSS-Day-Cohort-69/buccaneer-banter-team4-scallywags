import StoryList from '../components/story/storylist'
import ShipMates from '../components/shipmates'
import WantedPoster from '../components/profile/wantedposter'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [currentPirate, setCurrentPirate] = useState({ id: 0 })
    const [myFavoriteScallywags, setScallyWags] = useState([])

    const getPirate = async (id) => {
        await fetch(`https://localhost:7128/pirates/${id}`)
            .then(response => response.json())
            .then((res) => {
                setCurrentPirate(res)
            })
    }

    const getFavoritePirates = async (id) => {
        await fetch(`https://localhost:7128/followers?fId=${id}&expand=pirate`)
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((res) => {
                setScallyWags(res);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    

    useEffect(() => {
        const pirate_id = localStorage.getItem("pirateId") ?? 0
        if (pirate_id > 0) {
            getPirate(pirate_id)
            getFavoritePirates(pirate_id)
        }
    }, [])

    return (
        <main className='captainsLog'>
            <section className="log__left">
                <div className="px-1 py-5">
                    <h2 className='text-7xl font-pirate tracking-wide'>Welcome, ye Scurvy Dog!</h2>
                </div>
                <StoryList myFavoriteScallywags={myFavoriteScallywags} getFavoritePirates={getFavoritePirates} />
            </section>
            <section className="log__right">
                <div>
                    <WantedPoster currentPirate={currentPirate} />
                </div>
                <ShipMates myFavoriteScallywags={myFavoriteScallywags} currentPirate={currentPirate} />
            </section>
        </main>
    )
}
