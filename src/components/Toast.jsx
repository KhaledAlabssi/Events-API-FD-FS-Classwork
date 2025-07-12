import React from 'react'
import { useAppContext } from '../context/appContext';

export default function Toast() {
      const { isToastMessage } = useAppContext();
    
  return (
    <div className="toast toast-end">
  
  <div className="alert alert-success">
    <span>{isToastMessage}</span>
  </div>
</div>
  )
}
