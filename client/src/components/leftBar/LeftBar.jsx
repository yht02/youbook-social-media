import "./leftBar.scss";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/market.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Fund from "../../assets/fund.png";
import { AuthenticationContext } from "../../context/authentication";
import { useContext } from "react";
import { Link } from "react-router-dom";


function LeftBar() {

	const { currentUser } = useContext(AuthenticationContext);

	return (
		<div className="leftBar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img src={currentUser.profilePic} alt="" />
						<Link
							to={`/profile/${currentUser.id}`}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<span>{currentUser.name}</span>
						</Link>
					</div>
					<div className="item">
						<img src={Friends} alt="" />
						<span>Friends</span>
					</div>
					<div className="item">
						<img src={Groups} alt="" />
						<span>Groups</span>
					</div>
					<div className="item">
						<img src={Market} alt="" />
						<span>Marketplace</span>
					</div>
					<div className="item">
						<img src={Watch} alt="" />
						<span>Watch</span>
					</div>
					<div className="item">
						<img src={Memories} alt="" />
						<span>Memories</span>
					</div>

				</div>
				<hr />


				<div className="menu">
					<span>Your shortcuts</span>
					<div className="item">
						<img src={Events} alt="" />
						<span>Events</span>
					</div>
					<div className="item">
						<img src={Gaming} alt="" />
						<span>Gaming</span>
					</div>
					<div className="item">
						<img src={Gallery} alt="" />
						<span>Gallery</span>
					</div>
					<div className="item">
						<img src={Videos} alt="" />
						<span>Videos</span>
					</div>
					<div className="item">
						<img src={Messages} alt="" />
						<span>Messages</span>
					</div>
				</div>
				<hr />


				<div className="menu">
					<span>Others</span>
					<div className="item">
						<img src={Fund} alt="" />
						<span>Fundraiser</span>
					</div>
					<div className="item">
						<img src={Tutorials} alt="" />
						<span>Tutorials</span>
					</div>
					<div className="item">
						<img src={Courses} alt="" />
						<span>Courses</span>
					</div>
				</div>

			</div>
		</div>
	)
}

export default LeftBar