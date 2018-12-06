import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    console.log('Renderiza toda vez que chama o botão');
    return (
      <Fragment>
        <h1 className="title">Hello Rocketseat</h1>
        <h2 style={{ color: '#f00' }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Novo Botão</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
