import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardCollection: [],
      filterName: '',
      filterRarity: 'todas',
    };
  }

  validateSaveButton = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardCollection } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const totalLimit = 210;

    const invalidationElements = [
      (!cardName.length || cardCollection.some((card) => card.cardName === cardName)),
      !cardDescription.length,
      (cardAttr1 > maxValue || cardAttr1 < minValue || !cardAttr1),
      (cardAttr2 > maxValue || cardAttr2 < minValue || !cardAttr2),
      (cardAttr3 > maxValue || cardAttr3 < minValue || !cardAttr3),
      ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > totalLimit),
      !cardImage.length,
    ];

    this.setState({
      isSaveButtonDisabled: !(invalidationElements.every((e) => e === false)),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.validateSaveButton(); });
  };

  addCardToCollection = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardCollection: [...prevState.cardCollection, obj],
    }));
  }

  deleteCard = ({ cardName }) => {
    const targetedCardName = cardName;
    this.setState((prevState) => ({
      cardCollection: [...prevState.cardCollection]
        .filter((card) => card.cardName !== targetedCardName),
    }), () => {
      const { cardCollection } = this.state;
      this.setState({
        hasTrunfo: cardCollection.some((card) => card.cardTrunfo),
      });
    });
  }

  onSaveButtonClick = (e) => {
    const { cardTrunfo, hasTrunfo } = this.state;
    e.preventDefault();

    if (cardTrunfo && !hasTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.addCardToCollection();

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  filterByName = (array) => {
    const { filterName } = this.state;
    if (!filterName.length) return array;
    return array.filter((card) => (
      card.cardName.toUpperCase()).includes(filterName.toUpperCase()));
  }

  filterByRarity = (array) => {
    const { filterRarity } = this.state;
    if (filterRarity === 'todas') return array;
    return array.filter((card) => (
      card.cardRare === filterRarity));
  }

  filterCollection = () => {
    const { cardCollection, filterName, filterRarity } = this.state;
    if (!filterName.length && filterRarity === 'todas') return cardCollection;
    const filtered1 = this.filterByName(cardCollection);
    const filtered2 = this.filterByRarity(filtered1);
    return filtered2;
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardCollection,
      filterName,
      filterRarity } = this.state;

    return (
      <div className="main-content">
        <h1>Tryunfo</h1>
        <section className="form-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          { isSaveButtonDisabled
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
        </section>
        <section className="card-creation-container">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>

        <Filter
          onInputChange={ this.onInputChange }
          filterName={ filterName }
          filterRarity={ filterRarity }
        />

        <section className="card-collection">
          {cardCollection ? (
            this.filterCollection().map((card, index) => (
              <Card
                key={ index + card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                deleteCard={ () => this.deleteCard(card) }
              />
            ))) : ''}
        </section>
      </div>
    );
  }
}

export default App;
