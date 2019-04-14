import React from 'react'
import './TableContent.css'

interface Iprops {
  activeIndex: number
}
const contentData = ['content1', 'content2', 'content3']
const TableContent = ({activeIndex}: Iprops) => (
  <div className="table-content">
    {contentData.map((v, index) => {
      return activeIndex === index ? (
        <div key={index} className="active-content">
          <h1>{v}</h1>
          <div>this is {index} page</div>
        </div>
      ) : null
    })}
  </div>
)

export default TableContent