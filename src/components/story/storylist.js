import { useState, useEffect, createContext } from 'react'
import Story from './story'

export const StoryContext = createContext()

const StoryList = ({ myFavoriteScallywags, getFavoritePirates }) => {
    const [stories, setStories] = useState([])

    const fetchStories = async () => {
        const res = await fetch('http://localhost:8088/stories?_expand=pirate')
        const data = await res.json()
        setStories(data)
    }

    useEffect(() => {
        fetchStories()
    }, [])

    return (
        <div>
            <h2 className='text-2xl m-2 font-pirate tracking-wider'>Here be the latest banter...</h2>
            <ul>
                {
                    stories.map((story) => <>
                        <StoryContext.Provider value={{ story }}>
                            < Story
                                key={`story--${story.id}`}
                                getFavoritePirates={getFavoritePirates}
                                myFavoriteScallywags={myFavoriteScallywags} />
                        </StoryContext.Provider>
                    </>)
                }
            </ul>
        </div>
    )
}

export default StoryList
