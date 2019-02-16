import React, { Component } from 'react';
import logo from './connect_4_img.jpg';
import './App.css';

import { connect } from "react-redux";
import GridCell from './GridCell';


class App extends Component {
  render() {
    const cells = [];
    let classes = "cell";

    if (this.props.current == 'red') {
        classes += " p2";
      } else {
        classes += " p1";
    }
    

    for (let y = 5; y >= 0; y--) {
      const row = [];

      for (let x = 0; x < 7; x++) {
        row.push(<GridCell key={`${x} ',' ${y}`} x={x} y={y} />);
      }

      cells.push(<div key={y} className="row">{row}</div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes}>
            Its the {this.props.current} player turn
          </p>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Connect_Four"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Connect4
          </a>
        </header>

        {cells}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    current: state.current,
  };
}

export default connect(mapStateToProps, null)(App);
