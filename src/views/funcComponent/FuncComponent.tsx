import React, {useState, useEffect} from 'react'

const FuncComponent = () => {
  console.log(useState)
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count+1)
  }
  useEffect(() => {
    document.title = `you click ${count} times`
  })
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={handleClick}>点击加1</button>
    </div>
  )
}

export default FuncComponent