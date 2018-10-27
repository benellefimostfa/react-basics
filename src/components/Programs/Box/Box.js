import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
            <div className="box">
				<center>{this.props.name}</center>
				<p>{this.props.des}</p>
				<button>savoir plus</button>
			</div>
        );
	}
}

export default Box;