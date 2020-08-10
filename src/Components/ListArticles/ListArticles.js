import React, {Component} from 'react';
import './ListArticles.css';
import Article from './../Article/Article'

class ListArticles extends Component {
    render(){
        return(
            <div id="ListArticles">
                    <Article></Article>
                    <Article></Article>
                    <Article></Article>
                    <Article></Article>

                
            </div>
        )
    };
}

export default ListArticles;
