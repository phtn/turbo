import { useEffect } from 'react'
import { trpc } from 'libs'
import './App.css'

const App = () => {

  useEffect(() => {

    const connect = async () => {
      await trpc.connect.query().then(response => console.log(response))
    }
    return () => {
      connect()
    }
  }, [])

  return (
    <p>Vite + React TS + ElysiaJS + tRPC + Turborepo</p>
  )
}

export default App
