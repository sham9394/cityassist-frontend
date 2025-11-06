'use client'
import React, {useEffect, useState} from 'react'
export default function HomePage(){
  const [alerts,setAlerts]=useState([])
  useEffect(()=>{ fetch('/data/alerts.json').then(r=>r.json()).then(setAlerts)},[])
  const profile = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('profile')||'null') : null
  return (
    <div className="container mt-6">
      <h1 className="text-2xl font-bold">Hello {profile?.name || 'Resident'}</h1>
      <p className="text-slate-300">Personalized alerts & quick actions</p>
      <div className="mt-4 grid gap-4">
        {alerts.map((a:any)=>(<div key={a.id} className="card"><h3 className="font-semibold">{a.title}</h3><p className="text-slate-300">{a.message}</p><div className="mt-2 text-xs text-slate-400">{new Date(a.time).toLocaleString()}</div></div>))}
      </div>
      <div className="mt-6"><a href="/report" className="px-4 py-2 bg-blue-600 rounded">Report an Issue</a></div>
    </div>
  )
}
