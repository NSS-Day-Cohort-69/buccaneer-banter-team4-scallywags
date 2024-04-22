import { useContext } from "react"
import styles from "./story.module.css"
import { StoryContext } from "./storylist.js"

const StoryContent = () => {
    const { story } = useContext(StoryContext)

    return (
        <div className={styles.story__content}>{story.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
    )
}
export default StoryContent