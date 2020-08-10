import React, {Component} from 'react';
import './Article.css';
import Others from "./../../ressources/others.png"

class Article extends Component {
    render(){
        return(
            <div class="article">
                <div class="articleHeader">
                    <div class="articleCategory"> OPENCV</div>
                    <div class="articleDate"> 07/08/2020</div>
                </div>

                <div class="articleTitle"> A 3D ENGINE</div>    
                <div class="articleContent">
                    <div class="articleText"><p>aeazeaezzzzzzzzzzzzzzzzzzzzzzzzzzzaeazeaezzzzzzzzzzzzzzzzzzzzzzzzzzzaeazeaezzzzzzzzzzzzzzzzzzzzzzzzzzzaeazeaezzzzzzzzzzzzzzzzzzzzzzzzzzzaeazeaezzzzzzzzzzzzzzzzzzzzzzzzzzz</p></div>
                    <div class="articleImage"><img src={Others} alt="Image could not be found"></img></div>
                </div>

                
            </div>
        )
    };
}

export default Article;
