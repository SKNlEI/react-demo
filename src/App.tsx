import React, { Component } from 'react'
import Test from './views/about/About'
import logo from './logo.svg'
import './App.css'
import TableCard from './views/tableCrad/TableCard'
import FuncComponent from './views/funcComponent/FuncComponent'
import AddNumber from './views/addNumber/addNumber'
import Websters from './views/webstorm/Websters'

console.log(AddNumber)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            Learn React
        </header>
        <Test />
        <TableCard />
        <div>
          <FuncComponent />
        </div>
        <AddNumber />
        <Websters />
      </div>
    );
  }
}

export default App;
