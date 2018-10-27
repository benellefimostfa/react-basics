import React, {Component} from "react";

class SingleStat extends Component{
	render() {
		return(
            <div className="single-stat">
				<div className="number">+{this.props.number}</div>
				<p>{this.props.des}</p>
			</div>
        );
	}
}

export default SingleStat;