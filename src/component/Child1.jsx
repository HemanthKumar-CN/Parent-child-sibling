import React from 'react'

const Child1 = ({info,setInfo}) => {
    // const [value, setValue] = React.useState("");
  return (
    <div>
        <input type="text" value={info} onChange={(e)=> setInfo(e.target.value)} />
        Child1:{info} 
    </div>
  )
}

export default Child1