import { useContext } from "react";
import "./story.scss";
import { AuthenticationContext } from "../../context/authentication";

function Story() {

	const { currentUser } = useContext(AuthenticationContext);

	//To be replaced with actual adding stories function ...
	const stories = [
		{
			id: 1,
			name: "John Blue",
			img: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 2,
			name: "Jaslyn Cooper",
			img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 3,
			name: "Alan Park",
			img: "https://images.unsplash.com/photo-1556950961-8c092986258e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzbmV5fGVufDB8fDB8fHww",
		},
		{
			id: 4,
			name: "Rebecca Smith",
			img: "https://images.unsplash.com/photo-1561449845-d47921e86f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNoaWJhJTIwaW51fGVufDB8fDB8fHww",
		},
	];

	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>Create story</span>
				<button>+</button>
			</div>
			{stories.map(story => (
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	)
}

export default Story