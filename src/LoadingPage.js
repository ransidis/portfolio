import React from 'react'
import loading from '../src/images/loading.svg'

export const LoadingPage = () => {
  return (
    <div style={{backgroundColor:'#272424',height:'100vh', display:'flex', justifyContent:'center', alignItems:'center' }}>
        <img src={loading} style={{width:'4rem', height:'auto'}} alt='Page is Loading ...'/>
    </div>
  )
}
