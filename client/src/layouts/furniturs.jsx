import React, { useState, useEffect } from 'react';
import FurnitursList from '../components/page/furnutursList';
import { useParams } from 'react-router-dom';
import Furniture from '../components/ui/furniture';

const Furniturs = () => {
  const params = useParams()
  const { furnitureId } = params
  const URL_FURNITURE = 'http://localhost:3001/furniture/'
  const [furniturs, setFurniturs] = useState([])
  useEffect(() => {
    // имитация получения данных от сервера с ожиданием 1сек
    setTimeout(function () {
      fetch(URL_FURNITURE).then((response) => (response.json()).then((furnitures) => setFurniturs(furnitures)))
    }, 1000)
  }, [])

  return (<>
    {furnitureId
      ? (<Furniture furniturs={furniturs} id={furnitureId} />)
      : (<FurnitursList furniturs={furniturs} />)}
  </>
  );
}
export default Furniturs;
