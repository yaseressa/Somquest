import React from 'react'

function Header({children, notHome}) {
  return (
    <div style={notHome && {backgroundColor: '#00000027',boxShadow: 'none'}}id='hdb' >
       {children}
    </div>
  )
}

export default Header