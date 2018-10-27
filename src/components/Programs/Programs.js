import React, {Component} from "react";
import Box from './Box/Box';

class Programs extends Component{
	render() {
		return(
            <div className="programs">
                <Box className="box-gris" name='FULL TIME PROGRAM' des="un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise." ></Box>
                <Box className="blue-red" name='PART TIME PROGRAM' des="Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !" ></Box>
                <Box className="white-blue" name='KIDS CODING PROGRAM' des="Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. À la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique." ></Box>
                <Box className="black-blue-f" name='SUMMER ACADEMY' des="Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie." ></Box>
            </div>
        );
	}
}

export default Programs;