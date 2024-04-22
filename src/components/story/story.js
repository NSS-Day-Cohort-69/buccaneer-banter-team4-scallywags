import StoryContent from "./storycontent"
import StoryFooter from "./storyfooter"
import styles from "./story.module.css"
import { StoryContext } from "./storylist.js"
import { useContext } from "react"

const Story = ({ myFavoriteScallywags, getFavoritePirates }) => {
    const { story } = useContext(StoryContext)

    return (
        <li key={story.id} className={styles.story}>
            <h3 className="text-xl">{story.title}</h3>
            <StoryContent />
            <StoryFooter getFavoritePirates={getFavoritePirates}
                myFavoriteScallywags={myFavoriteScallywags} />
        </li>
    )
}

export default Story
