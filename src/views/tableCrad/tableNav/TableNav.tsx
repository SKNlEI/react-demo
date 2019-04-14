import React from 'react'
import './TableNav.css'

const navList = ['nav1', 'nav2', 'nav3']
interface Iprops {
   handleIndex: (index: number) => void,
   activeIndex: number
}
const TableNav = ({handleIndex, activeIndex}:Iprops) => (
  <div className="table-nav">
    {navList.map((v, index) => (
      <span onClick={() => handleIndex(index) } key={index}
        className={activeIndex === index? "active" : ''}>{v}</span>
    ))}
  </div>
)

export default TableNav