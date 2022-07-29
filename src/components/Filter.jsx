import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      onInputChange,
      filterName,
      filterRarity,
      filterTrunfo } = this.props;

    return (
      <section className="container-filter">
        <h2>Todas as Cartas</h2>
        <h3>Filtros de busca</h3>
        <label className="form-label" htmlFor="filterName">
          <input
            type="text"
            disabled={ filterTrunfo }
            placeholder="Nome da carta"
            data-testid="name-filter"
            className="form-control"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>

        <label className="form-label" htmlFor="filterRarity">
          <select
            disabled={ filterTrunfo }
            data-testid="rare-filter"
            className="form-select"
            name="filterRarity"
            value={ filterRarity }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label className="form-check-label" htmlFor="filterTrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            className="form-check-input"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

      </section>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  filterName: PropTypes.string,
  filterRarity: PropTypes.string,
  filterTrunfo: PropTypes.bool,
  filterBlock: PropTypes.bool,
}.isRequired;

export default Filter;
