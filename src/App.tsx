import React from 'react'

import './App.css'

import { Card } from '../src/components/Card';


function App() {

  return (
    <>
      <Card>

        <div>
          <span>{import.meta.env.VITE_API_PERSONAL_KEY}</span>
        </div>

      </Card>
    </>
  )
}

export default App
