import React from 'react'

function Loading() {
  return (
    <div>
        {/* image  */}
        <div className="mb-4 shadow rounded-1 bg-light" style={{ height: '250px', width: '100%' }}></div>
        {/* title  */}
          <div className="bg-secondary-subtle rounded-1 mb-2" style={{width:'200px',height:'30px'}}></div>
          {/* price  */}
          <div className="bg-secondary-subtle rounded-1 mb-2" style={{width:'30px',height:'30px'}}></div>
          {/* tag  */}
          <div className="bg-secondary-subtle rounded-1 mb-2" style={{width:'150px',height:'30px'}}></div>
    </div>
  )
}

export default Loading