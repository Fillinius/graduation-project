import React from 'react';
import PropTypes from 'prop-types';

const FurniturePage = ({ furniturs, id }) => {
  console.log(furniturs);
  const getFurnitureById = (id) => {
    return furniturs.find((furniture) => furniture.id === id)
  }
  const furniture = getFurnitureById(id)
  return (
    <>
      <hr />
      <h2>Карточка товара с описанием</h2>
      <hr />
      <img src={furniture.url} alt="Foto furniture" />
      <p>{furniture.name} </p>
      <p>{furniture.price}</p>
    </>
  );
}
FurniturePage.propTypes = {
  id: PropTypes.string.isRequired,
  furniturs: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default FurniturePage;
