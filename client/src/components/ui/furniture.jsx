import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FurniturePage from '../page/furniturePage';

const Furniture = ({ id, furniturs }) => {
  const history = useHistory()
  const getFurnitureById = (id) => {
    return furniturs.find((furniture) => furniture.id === id)
  }
  const furniture = getFurnitureById(id)
  const handleReturn = () => {
    history.push('/vitrins')
  }
  return (
    <>
      <h2>{furniture ? <FurniturePage furniturs={furniturs} id={id} /> : `Furniture with id ${id} not found`}</h2>
      <button
        className="btn btn-primary"
        onClick={handleReturn}
      > Вернуться к списку</button>
    </>
  );
}
Furniture.propTypes = {
  id: PropTypes.string.isRequired,
  furniturs: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Furniture;
