import React, {Component} from 'react'
import TableNav from './tableNav/TableNav'
import TableContent from './tableContent/TableContent'

export default class TableCard extends Component<any, any> {
  constructor(props:any) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  handleIndex (index:number) {
    console.log(index)
    this.setState({activeIndex: index})
  } 
  render () {
    const {activeIndex} = this.state
    return (
      <div className="table-card">
        <h1>this is tableCrad page</h1>
        <TableNav handleIndex={this.handleIndex.bind(this)} activeIndex={activeIndex}/>
        <TableContent activeIndex={activeIndex}/>
      </div>
    )
  }
}