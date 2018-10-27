import React, {Component} from "react";

class Location extends Component{

	render() {
		const locationImage = require(`./Assets/${this.props.imageName}.jpg`);
		return(
            <div className="location">
			    <img src={locationImage} alt={this.props.imageName}></img>
				<div className="title">+{this.props.title}</div>
				<p>{this.props.des}</p>
			</div>
        );
	}
}

export default Location;