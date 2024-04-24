'use client'

import * as Toast from '@radix-ui/react-toast'
import styles from "./storyfooter.module.css"
import { useContext, useEffect, useRef, useState } from 'react'
import { StoryContext } from './storylist.js'

const follow = async(follower, following, action) => {
    await fetch(`https://localhost:7128/followers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            followerId: parseInt(follower),
            pirateId: parseInt(following)
        })
    })
        .then(async response => await response.json())
        .then(async () => await action(parseInt(follower)))
}

const unfollow = async(follower, following, action) => {
   const initialFetch = await fetch(`https://localhost:7128/followers?fId=${follower}&pId=${following}`)
        const response =  await initialFetch.json()
        const matchArray = await response[0].id

            fetch(`https://localhost:7128/followers/${matchArray}`, {
                method: "DELETE"
            }).then(() => action(parseInt(follower)))
        
}


const StoryFooter = ({ myFavoriteScallywags, getFavoritePirates }) => {
    const { story } = useContext(StoryContext)
    const [open, setOpen] = useState(false)
    const timerRef = useRef(0)
    const pirate_id = localStorage.getItem("pirateId")

    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])


    const showFollow = () => {
        const alreadyFollow = myFavoriteScallywags.find(rel => rel.pirateId === story.pirate.id)
        if (!alreadyFollow) {
            return <button
                onClick={() => {
                    follow(pirate_id, story.pirate.id, getFavoritePirates)
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        setOpen(true);
                    }, 100);
                }}
                className="bg-cyan-500 hover:bg-cyan-700 text-cyan-50 hover:text-cyan-100 py-0 px-3 rounded text-xs ml-5">Follow</button>
        }
        return ""
    }

    return (<>
        <Toast.Provider swipeDirection={"right"} duration={5000}>
            <div className={styles.story__footer}>
                Written by: {story.pirate.name}
                {showFollow()}
            </div>

            <Toast.Root
                open={open}
                onOpenChange={setOpen}
                className={styles.ToastRoot}
            >
                <Toast.Title className={styles.ToastTitle}>
                    Scallywag Added
                </Toast.Title>
                <Toast.Description className={styles.ToastDescription}>
                    You have followed {story.pirate.name}
                </Toast.Description>
                <Toast.Action
                    asChild
                    altText="view now"
                    className={styles.ToastAction}
                    onClick={(e) => {
                        e.preventDefault();
                        unfollow(pirate_id, story.pirate.id, getFavoritePirates)
                        setOpen(false)
                    }}
                >
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Unfollow</button>
                </Toast.Action>
            </Toast.Root>

            <Toast.Viewport className={styles.ToastViewport} />
        </Toast.Provider>
    </>
    )
}

export default StoryFooter
