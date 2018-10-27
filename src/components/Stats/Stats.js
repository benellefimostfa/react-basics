import React, {Component} from "react";
import SingleStat from './SingleStat/SingleStat';

class Stats extends Component{
	render() {
		return(
            <div className="programs">
                <SingleStat className="single-stat" number='20,000' des="PASSIONNÉS DU DIGITAL"></SingleStat>
                <SingleStat className="single-stat" number='20,000' des="PASSIONNÉS DU DIGITAL"></SingleStat>
                <SingleStat className="single-stat" number='20,000' des="PASSIONNÉS DU DIGITAL"></SingleStat>
            </div>
        );
	}
}

export default Stats;