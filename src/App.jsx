import { useState } from 'react'
import Hero from './assets/components/Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Todo from './assets/components/Todo'
import Shop from './assets/components/Shop'
import Contact from './assets/components/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Hero />}/>
              <Route path='todo' element={<Todo />}/>
              <Route path='shop' element={<Shop />}/>
              <Route path='contact' element={<Contact />}/>
            </Route>
        </Routes>
       
        {/* <Navbar />
        <Hero /> */}
      </Router>
    </>
  )
}

export default App
