import React, { Component } from "react";
import Navbar from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import cartoon from "./cartoon.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cartoon,
    clickedCartoon: [],
    score: 0
  };

  imageClick = event => {
    const currentCartoon = event.target.alt;
    const CartoonAlreadyClicked =
      this.state.clickedCartoon.indexOf(currentCartoon) > -1;

    if (CartoonAlreadyClicked) {
      this.setState({
        cartoon: this.state.cartoon.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoon: [],
        score: 0
      });
        alert("You lose...You clicked the same image. Play again to Win");

    } else {
      this.setState(
        {
          cartoon: this.state.cartoon.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCartoon: this.state.clickedCartoon.concat(
            currentCartoon
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cartoon: this.state.cartoon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCartoon: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cartoon.map(cartoon => (
            <FriendCard
              imageClick={this.imageClick}
              id={cartoon.id}
              key={cartoon.id}
              image={cartoon.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

  