import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useSelector} from "react-redux"
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
const ListView = ({openModal}) => {
 const state = useSelector((store) => store)
 const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = state?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state?.flights.length / itemsPerPage);

  
  const handleClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state?.flights.length;
    
    setItemOffset(newOffset);
  return (
    <div className='p-4'>
      <table className='table-dark table table-hover mt-5'>
        <thead>
          <tr>
            <th>İd</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
         currentItems.map((fly) => (
            <tr>
              <td>{fly.id}</td>
              <td>{fly.code}</td>
              <td>{fly.lat}</td>
              <td>{fly.lng}</td>
              <td>
                <button onClick={() => openModal(fly.id)}>Detay</button>
              </td>
             
            </tr>
          ))
        }
        </tbody>
      </table>
      <ReactPaginate
       nextLabel="ileri >"
       previousLabel="< geri"
       pageCount={pageCount}
       onPageChange={handleClick}
       className='pagination'
       activeClassName='active'
       />
    </div>
  )
}}

export default ListView