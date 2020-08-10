import React, {Component} from 'react';
import Articles from "./../../ressources/articles.png"
import Story from "./../../ressources/story.png"
import Projects from "./../../ressources/projects.png"
import Others from "./../../ressources/others.png"


import './Menu.css';

class Menu extends Component {
    render(){
        return (
            <ul id="headerMenu">
                <li> <img src={Articles} alt="Unable to load the image"></img><p>Articles</p></li>
                <li> <img src={Story} alt="Unable to load the image"></img><p>My Story</p></li>
                <li> <img src={Projects} alt="Unable to load the image"></img><p>Projects</p></li>
                <li> <img src={Others} alt="Unable to load the image"></img><p>Others</p></li>
            </ul>
        )
    }

}
export default Menu;