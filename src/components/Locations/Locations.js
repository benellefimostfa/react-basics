import React, {Component} from "react";
import Location from './Location/Location';

class Locations extends Component{
	render() {
		return(
            <div className="locations">
            <h2>Où se déroulent les sessions de formations ? </h2>
            <p class="location-text-descripttion">Les sessions se passent dans les hackerspaces de GoMyCode dans les villes suivantes : </p> 
            <br/>
            <span class="hebergement">
            L'hébergement est possible dans la limite des places disponibles.
            </span>
                <Location className="tunis-location" title='Tunis' des="PASSIONNÉS DU DIGITAL" imageName="tunis"></Location>
                <Location className="single-stat" title='Sousse' des="PASSIONNÉS DU DIGITAL" imageName="sousse"></Location>
                <Location className="single-stat" title='Sfax' des="PASSIONNÉS DU DIGITAL" imageName="sfax"></Location>
            </div>
        );
	}
}

export default Locations;