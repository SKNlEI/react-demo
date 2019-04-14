import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { addCount, minCount } from './../../store/actions/actions'


class addNumber extends React.Component<any, any> {
  render () {
    const {count, addCount, minCount} = this.props 
    return (
      <div>
        <h1>this is test redux</h1>
        <p>
          <button onClick={() => minCount(1)}>-</button>
          <span>{count}</span>
          <button onClick={() => addCount(5)}>+</button>
        </p>
      </div>
    )
  }
}
const mapStateToProps = (state:any) =>({
  count: state.addnumber
})

// const mapDispatchToProps = (dispatch:any) => bindActionCreators({addCount, minCount}, dispatch)
const mapDispatchToProps = (dispatch:any) => ({
    addCount: (number:number) => dispatch(addCount(number)),
    minCount: (number:number) => dispatch(minCount(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(addNumber)

