import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GroupList = () => {
  const URL_COLLECTIONS = 'http://localhost:3001/collections'
  const [collections, setCollections] = useState([])
  useEffect(() => {
    // имитация получения данных от сервера с ожиданием 1сек
    setTimeout(function () {
      fetch(URL_COLLECTIONS).then((response) => (response.json()).then((collections) => setCollections(collections)))
    }, 1000)
  }, [])
  console.log(collections);
  const handleList = () => {
    console.log('click');
  }
  return (
    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">Каталог</li>
      <li className="list-group-item">
        { }
        <button onClick={handleList}>+</button></li>
      <li className="list-group-item">
        По типу
        <button onClick={handleList}>+</button></li>
      <li className="list-group-item">
        по размеру
        <button onClick={handleList}>+</button></li>
    </ul>
  );
}
GroupList.propTypes = {
  furnitures: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
export default GroupList;
