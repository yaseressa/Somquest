import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function FileView() {
   const {name} = useParams()

return(
  <>
    <div style={{overflowY:'hidden'}}>
      <iframe src={`https://drive.google.com/open?id=14YJg0NTyfqsSAl8XWDfg8kPXT4ENDMh6&authuser=greatyaser09%40gmail.com&usp=drive_fs`} width='100%' height='630'></iframe>
    </div>
    </>
  )
}
