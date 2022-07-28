import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      onInputChange,
      filterName } = this.props;

    return (
      <section className="container-filter">
        <h2>Todas as Cartas</h2>
        <h3>Filtros de busca</h3>
        <label className="form-label" htmlFor="filterName">
          <input
            type="text"
            placeholder="Nome da carta"
            data-testid="name-filter"
            className="form-control"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  filterName: PropTypes.string,
}.isRequired;

export default Filter;
