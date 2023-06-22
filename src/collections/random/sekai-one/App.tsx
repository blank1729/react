import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import JSONPlaceHolderPage from './pages/JsonPlaceHolderPage/JSONPlaceHolderPage'
import AboutPage from './pages/AboutPage/AboutPage'
import BlogPage from './pages/BlogPage/BlogPage'
import BooksPage from './pages/BooksPage/BooksPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Json' element={<JSONPlaceHolderPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/blog' element={<BlogPage/>} />
      <Route path='/books' element={<BooksPage/>} />React and Next.js Snippets
    </Routes>
  )
}

export default App
