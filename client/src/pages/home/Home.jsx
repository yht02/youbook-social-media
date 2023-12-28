import "./home.scss";
import Story from "../../components/stories/Story";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share"


function Home() {
  return (
    <div className="home">
      <Story />
      <Share />
      <Posts />

    </div>
  )
}

export default Home