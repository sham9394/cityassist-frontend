'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage(){
  const router = useRouter();
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('')
  const submit=async(e:any)=>{ e.preventDefault(); setErr(''); try{ const res=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})}); const data=await res.json(); if(!res.ok) throw new Error(data?.error||'Login failed'); localStorage.setItem('access_token',data.access_token); localStorage.setItem('current_user',JSON.stringify(data.user)); window.location.href='/home' }catch(err:any){ setErr(err.message) } }
  return (<div className="min-h-screen flex items-center justify-center"><div className="w-full max-w-md card"><h2 className="text-xl font-bold">CityAssist Login</h2><form onSubmit={submit} className="mt-4 space-y-3"><input className="w-full p-2 rounded bg-slate-800" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} required /><input type="password" className="w-full p-2 rounded bg-slate-800" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} required />{err && <div className="text-red-400">{err}</div>}<button className="px-4 py-2 bg-emerald-600 rounded">Sign in</button></form><div className="mt-3 text-xs text-slate-400">Demo: demo@cityassist.city / demo123</div></div></div>)
}
