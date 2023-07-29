import React from 'react';
import PropTypes from 'prop-types';
import Quality from './quality';

const QualitiesList = ({ qualities }) => {
    console.log(qualities, 'qualities');
    // Получение качеств с сервера
    /*
const URL_QUALITY = 'http://localhost:3001/quality/'
  const [qualities, setQualities] = useState([])
  // console.log(qualities, 'Список возможных качеств');
  useEffect(() => {
    fetch(URL_QUALITY).then((response) => (response.json()).then((qualities) => setQualities(qualities)))
  }, [])
  // блок получения качества по ID
  const getQulitiesById = (elements) => {
    const qualitiesArray = []
    for (const elem of elements) {
      for (const quality of qualities) {
        if (elem === quality._id) {
          qualitiesArray.push(quality)
          break
        }
      }
    }
    return qualitiesArray
  }
  const quality = getQulitiesById(furniture.qualites);
  console.log(quality, 'quality');
    */
    return (
        <>
            {qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
            )
            )}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
