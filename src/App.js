/**
 * @author Daniel Estrada <daniel@dcge.co>
 * DCGE Studio @dcgestudio
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div className="container quote">
        <div className="row justify-content-center">
          <div className="col mt-1">
            <h1>Today's Quote</h1> 
          </div>
          <Quote />
        <br />
        <div className="sharethis-inline-share-buttons"></div>
        <div className="footer">
         Motivation App created with React, by <a href="http://www.github.com/dcge-studio">@dcge-studio</a>
        </div>
        </div>

    </div>
    );
  }
}

   /* Calls the API and chanes the state with the data provided
      Using the Quotes on Design API */

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]}
  }
  componentWillMount(){
      axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(function (response) {
          var content = response.data[0].content;
          content = content.split("<p>").pop();
          content = content.slice(0, -5);
          this.setState({'title': response.data[0].title, 'content': content});
      }.bind(this))
      .catch(function(error){
        console.log(error)
      });
     }
  render() {   
        return (
          <div>
          <p className="lead">{this.state.content}</p>
          <p>{this.state.title}</p>
          </div>
        )
      }
    }

export default App;