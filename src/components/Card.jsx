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
      cardTrunfo,
      deleteCard } = this.props;

    return (
      <section className="card-layout">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <span data-testid="description-card">
          {cardDescription}
        </span>
        <section className="card-attributes">
          <span data-testid="attr1-card">{cardAttr1}</span>
          <span data-testid="attr2-card">{cardAttr2}</span>
          <span data-testid="attr3-card">{cardAttr3}</span>
        </section>
        <span data-testid="rare-card">{cardRare}</span>
        { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : '' }
        { deleteCard ? (
          <button
            type="button"
            data-testid="delete-button"
            onClick={ deleteCard }
          >
            Excluir
          </button>) : ''}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteCard: undefined,
};

export default Card;
