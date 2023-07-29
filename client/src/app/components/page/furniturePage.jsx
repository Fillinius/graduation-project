import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FurnitureCard from '../ui/furnitureCard';
import QualityCard from '../ui/qualityCard';
import SizeCard from '../ui/sizeCard';

const FurniturePage = ({ furniture }) => {
  const history = useHistory()
  const handleEdit = () => {
    history.push(history.location.pathname + '/edit')
  }
  // start
  return (
    <div className='container'>
      <FurnitureCard furniture={furniture} />
      <QualityCard furniture={furniture} />
      <SizeCard furniture={furniture} />
      <button
        className="btn btn-danger"
        onClick={handleEdit}>Изменить</button>
    </div>
  );
}
FurniturePage.propTypes = {
  furniture: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default FurniturePage;
