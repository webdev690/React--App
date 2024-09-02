import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from "./Components/Cart.jsx"
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Detail from './Components/Detail.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/:title' element={<Detail/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
</Provider>
)
