import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };
  // }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;
