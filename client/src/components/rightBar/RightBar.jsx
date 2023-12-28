import "./rightBar.scss";

function RightBar() {
	return (
		<div className="rightBar">
			<div className="container">
				<div className="item">
					<span>Suggestions For You</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXNpYW4lMjBndXl8ZW58MHx8MHx8fDA%3D" alt="" />
							<span>Eason Lee</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxiZWF1dGlmdWwlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
							<span>Cynthia Evans</span>
						</div>
						<div className="buttons">
							<button>Follow</button>
							<button>Dismiss</button>
						</div>
					</div>
				</div>

				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
							<p>
								<span>John Blue</span> changed their profile picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1680970521025-4f18bcd3cbf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxhc2lhbiUyMHlvdW5nJTIwYmVhdXR5fGVufDB8fDB8fHww" alt="" />
							<p>
								<span>Mary Black</span> changed their cover picture
							</p>
						</div>
						<span>30 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
							<p>
								<span>Peter Parker</span> posted a story
							</p>
						</div>
						<span>2 hours ago</span>
					</div>
				</div>

				<div className="item">
					<span>Online Friends</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
							<div className="online" />
							<span>John Blue</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1680970521025-4f18bcd3cbf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxhc2lhbiUyMHlvdW5nJTIwYmVhdXR5fGVufDB8fDB8fHww" alt="" />
							<div className="online" />
							<span>Mary Black</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://media.istockphoto.com/id/1490375720/photo/happy-smiling-asian-businesswoman-working-and-looking-at-the-camera-in-office-room.webp?b=1&s=170667a&w=0&k=20&c=mTsnJkkvucm5hQHQ5XBg6ogTDUgZaUEqJclXCiEvbZg=" alt="" />
							<div className="online" />
							<span>Jaslyn Cooper</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3V5fGVufDB8fDB8fHww" alt="" />
							<div className="online" />
							<span>Alan Park</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
							<div className="online" />
							<span>Peter Parker</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.unsplash.com/photo-1616207133278-0064d3440006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww" alt="" />
							<div className="online" />
							<span>Rebecca Smith</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default RightBar