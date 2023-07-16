import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../ui/search';
import Loader from '../../utils/loader';
import Pagination from '../common/pagination';
import GroupList from '../common/groupList';
import paginate from '../../utils/paginate';

const FurnitursList = ({ furniturs }) => {
  // console.log(furniturs);
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  // Блок поиска по тексту
  const handleChangeSearch = ({ target }) => {
    setSearch(target.value)
  }
  // Блок для поиска товаров
  // const filterSearchText = furniturs.filter((furniture) => (
  //   furniture.name.toLowerCase().includes(search.toLowerCase()))
  // )
  // console.log(filterSearchText);
  // счетчик страниц пагинация
  const count = furniturs.length
  const pageSize = 4 // число товаров на стр
  const handleChangePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const userCrop = paginate(furniturs, currentPage, pageSize)
  // ф-я покупка товара
  const handleBuy = (id) => {
    console.log('click');
  }
  return (
    <>
      <div className='d-flex'>
        <GroupList />
        <Search
          type="text"
          value={search}
          onChange={handleChangeSearch}
        />
        {furniturs.length > 0
          ? (<div className='d-flex'>
            {userCrop.map((furniture) => (
              <NavLink key={furniture._id} to={`vitrins/${furniture._id}`} >
                <div className="container text-center">
                  <div className=" block p-2 g-col-6">
                    <img className="w-50 h-50" src={furniture.image} alt="foto" />
                    <h5>{furniture.name}</h5>
                    <p>Lorem*10</p>
                    <p>{furniture.price},руб.</p>
                    <button
                      className="btn btn-primary"
                      onClick={handleBuy} >Buy</button>
                  </div>
                </div>
              </NavLink>
            ))
            }
          </div>)
          : <Loader />
        }
        < div className='justify-content-center' >
          <Pagination
            itemsCount={count}
            size={pageSize}
            currentPage={currentPage}
            onPageChange={handleChangePage} />
        </div >
      </div >
    </>

  );
}
FurnitursList.propTypes = {
  furniturs: PropTypes.array.isRequired
}
export default FurnitursList;
