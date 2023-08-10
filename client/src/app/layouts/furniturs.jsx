import React from 'react';
import FurnitursList from '../components/page/furnutursList';
import { useParams } from 'react-router-dom';
import Furniture from '../components/ui/furniture';
// import EditFurniturePage from '../components/page/editFurniturePage';

const Furniturs = () => {
  const params = useParams()
  const { furnitureId } = params

  return (<>
    {furnitureId
      ? (<Furniture id={furnitureId} />)
      : (<FurnitursList />)
    }
  </>
  );
}
export default Furniturs;
