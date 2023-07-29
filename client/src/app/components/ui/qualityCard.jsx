import React from 'react';
import PropTypes from 'prop-types';
import QualitiesList from './qualities/qualitiesList';
import axios from 'axios';

const QualityCard = ({ furniture }) => {
  const promise = axios.get('http://localhost:3001/furniture/')
  console.log(promise.status);
  return (
    <div className="card">
      <div className="card-boby">
        <div className="class-text">
          <h3>Cписок возможных цветов</h3>
          <QualitiesList qualities={furniture.qualites} />
        </div>
      </div>
    </div>
  );
}
QualityCard.propTypes = {
  furniture: PropTypes.object
}
export default QualityCard;
