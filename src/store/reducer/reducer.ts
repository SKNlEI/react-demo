import {combineReducers} from 'redux'

const addnumber = (state:number = 0, action:any) => {
  switch(action.type) {
    case 'ADD_COUNT':
      return state + action.number
    case 'MIN_COUNT':
      return state - action.number
    default:
      return state
  }
}

const addTodo = (state:string = 'aaaa') => state

export default combineReducers({
  addnumber,
  addTodo
})