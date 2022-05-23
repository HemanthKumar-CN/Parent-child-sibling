import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


const Parent = () => {
    const [info,setInfo]=React.useState()

    // const getChildVal=(newValue)=> {
    //     setInfo()
    // }
  return (
    <div>
        <h1>Child to parent </h1>
        Parent:{info}
        <Child1 info={info} setInfo={setInfo}/>
        <Child2 info={info}/>
       
    </div>
  )
}

export default Parent