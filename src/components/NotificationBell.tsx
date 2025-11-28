
import React from 'react'

export default function NotificationBell({count=0}:{count:number}){
  return (
    <div style={{position:'relative'}}>
      <svg width="22" height="22" fill="none" stroke="currentColor">
        <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14v-3a6 6 0 0 0-5-6V4a2 2 0 1 0-4 0v1A6 6 0 0 0 4 11v3c0 .5-.2 1-.6 1.4L2 17h5"/>
      </svg>
      {count>0 && (
        <span style={{
          position:'absolute',
          top:-6,right:-6,
          background:'var(--orange)',
          color:'white',
          padding:'2px 6px',
          borderRadius:'50%',
          fontSize:12
        }}>{count}</span>
      )}
    </div>
  )
}
