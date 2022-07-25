import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <section>
        <section className="cardLayout">
          <h1 data-testid="name-card">{ cardName }</h1>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <span data-testid="description-card">
            {cardDescription}
          </span>
          <section className="cardAttributes">
            <span data-testid="attr1-card">{cardAttr1}</span>
            <span data-testid="attr2-card">{cardAttr2}</span>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </section>
        </section>
        <span data-testid="rare-card">{cardRare}</span>
        { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : '' }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;