import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./4717174.png"
								alt="work"
								className="work-image"
							/>
							<div className="work-title">MOHAN Digital & Photolab</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">March 2021 - May 2021</div>
						</div>

						<div className="work">
							<img
								src="./4717174.png"
								alt="work"
								className="work-image"
							/>
							<div className="work-title">Infinte Learning Game Developer</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">September 2024 - December 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
