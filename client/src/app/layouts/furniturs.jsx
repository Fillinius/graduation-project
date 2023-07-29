import React from 'react';
import FurnitursList from '../components/page/furnutursList';
import { useParams } from 'react-router-dom';
import Furniture from '../components/ui/furniture';
import EditFurniturePage from '../components/page/editFurniturePage';
import { useFurniturs } from '../hooks/useFurniturs';

const Furniturs = () => {
  const params = useParams()
  const { furnitureId, edit } = params

  const { furniturs } = useFurniturs()
  // console.log(furniturs);
  // const URL_FURNITURE = 'http://localhost:3001/furniturs/'
  // const [furniturs, setFurniturs] = useState([])

  // useEffect(() => {
  //   // имитация получения данных от сервера с ожиданием 1сек
  //   setTimeout(function () {
  //     fetch(URL_FURNITURE).then((response) => (response.json()).then((furnitures) => setFurniturs(furnitures)))
  //   }, 1000)
  // }, [])

  return (<>

    {furnitureId ? (
      edit
        ? (<EditFurniturePage />)
        : (<Furniture furniturs={furniturs} id={furnitureId} />)
    ) : (<FurnitursList furniturs={furniturs} />)
    }

  </>
  );
}
export default Furniturs;

// ? (<Furniture furniturs={furniturs} id={furnitureId} />)
//       : (<FurnitursList furniturs={furniturs} />)
