import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div>
      <div className="quote container">
        <div className="mt-1">
          <h1>Today's Quote</h1>
        </div>
        <Quote />
      </div>
      <footer className="footer">
        <div className="container">
          Motivation App created with React, by <a href="http://www.github.com/jrda2">@jrda2</a>
        </div>
      </footer>
      </div>
    );
  }
}

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