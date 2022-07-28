import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label className="form-label" htmlFor="cardName">
          Nome da Carta
          <input
            type="text"
            data-testid="name-input"
            className="form-control"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardDescription">
          Descrição da Carta
          <textarea
            data-testid="description-input"
            className="form-control"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardAttr1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            className="form-control"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardAttr2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            className="form-control"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardAttr3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            className="form-control"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardImage">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            className="form-control"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="cardRare">
          Raridade
          <select
            data-testid="rare-input"
            className="form-select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {!hasTrunfo ? (
          <label className="form-check-label" htmlFor="cardTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              className="form-check-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        ) : 'Você já tem um Super Trunfo em seu baralho'}

        <button
          className="btn btn-success"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
