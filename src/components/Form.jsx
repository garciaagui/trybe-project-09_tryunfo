import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          Nome da Carta
          <input type="text" data-testid="name-input" name="cardName" />
        </label>

        <label htmlFor="cardDescription">
          Descrição da Carta
          <textarea data-testid="description-input" name="cardDescription" />
        </label>

        <label htmlFor="cardAttributeOne">
          Atributo 1
          <input type="number" data-testid="attr1-input" name="cardAttributeOne" />
        </label>

        <label htmlFor="cardAttributeTwo">
          Atributo 2
          <input type="number" data-testid="attr2-input" name="cardAttributeTwo" />
        </label>

        <label htmlFor="cardAttributeThree">
          Atributo 3
          <input type="number" data-testid="attr3-input" name="cardAttributeThree" />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input type="text" data-testid="image-input" name="cardImage" />
        </label>

        <label htmlFor="cardRarity">
          Raridade
          <select data-testid="rare-input" name="cardRarity">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="IsCardSuperTryunfo">
          É Super Tryunfo?
          <input type="checkbox" data-testid="trunfo-input" name="IsCardSuperTryunfo" />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
