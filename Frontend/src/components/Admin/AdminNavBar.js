import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Student/SideNavBar.css";


const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const navigate = useNavigate();
	const menuItems = [
		{
			text: "Add Tasks",
			icon: "icons/grid.svg",
			path: "/adminhome",
		},
        {
			text: "Update Links",
			icon: "icons/pie-chart.svg",
			path: "/adminlink",
		},
        {
			text: "Add Companies",
			icon: "icons/folder.svg",
			path: "/admincompany"
		},
		// {
		// 	text: "Chats",
		// 	icon: "icons/message.svg",
		// },
		{
			text: "About",
			icon: "icons/user.svg",
			path: "/about"
		},
		{
			text:"Switch to Student",
			icon: "icons/switchadminstud.svg",
			path: "/studenthome",
		}
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/skillscape-logo.svg" alt="" srcset="" />
							<h2>SkillScape</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, path }) => (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} onClick={() => navigate(`${path}`)}>
						
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</div>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Navaneeth Arunkumar</p>
							<p className="nav-footer-user-position">Admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;