import React, {Component} from "react";

class TeamMember extends Component{

	render() {
		let border = "blue"; 
		if(this.props.gender === "female"){
			border = "yellow";
		}
		const teamMemberStyle = {
			border: `3px solid ${border}`,
		 }
		const teamImage = require(`./Assets/${this.props.imageName}.jpg`);
		console.log(teamMemberStyle);
		return(
            <div className="team-member">
			    <img src={teamImage} alt={this.props.imageName} style = {teamMemberStyle}></img>
				<div className="title">{this.props.title}</div>
				<p>{this.props.des}</p>
			</div>
        );
	}
}

export default TeamMember;