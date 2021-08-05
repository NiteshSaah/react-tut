import React from 'react'
import App from './App'

const User =(props)=>{
    console.warn(props.data.name)
    const{data}=props
 return(
     <div>
         <h1>User Component</h1>
         <h4>{data.name},{data.sex}</h4>
         <h4>{data.name},{data.sex}</h4>
     </div>
 )

}
export default User;