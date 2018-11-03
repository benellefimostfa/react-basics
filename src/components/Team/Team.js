import React, {Component} from "react";
import TeamMember from './TeamMember/TeamMember';

class Team extends Component{
	render() {
		return(
            <div className="team">
            <h2>Core team </h2>
                <TeamMember className="team-member" title='Yahya Bouhlel' des="CEO" imageName="yahia_bouhlel" gender="male"></TeamMember>
                <TeamMember className="team-member" title='Soumaya' des="Team Lead" imageName="soumaya" gender="female"></TeamMember>
                <TeamMember className="team-member" title='Sam Ghanmi' des="COO" imageName="amine_bouhlel" gender="male"></TeamMember>
            </div>
        );
	}
}

export default Team;