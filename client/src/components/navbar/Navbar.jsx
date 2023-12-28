import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";
import { AuthenticationContext } from "../../context/authentication";


function Navbar() {

	const { toggle, darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthenticationContext);

	// console.log(currentUser)
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<span>YouBook</span>
				</Link>

				<HomeOutlinedIcon />
				{darkMode ?
					<LightModeOutlinedIcon onClick={toggle} />
					:
					<DarkModeOutlinedIcon onClick={toggle} />

				}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search" />
				</div>

			</div>

			<div className="right">
				<PersonOutlinedIcon />
				<MailOutlineOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
					<img src={currentUser.profilePic} alt="" />
					<Link
						to={`/profile/${currentUser.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<span>{currentUser.name}</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar