
import './App.css';

import Home from './pages/Home';
import DashboardPage from "./pages/DashboardPage";
import CoinPage from './pages/CoinPage';
// import { BrowserRouter } from 'react-router-dom';
// import { Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ComparePage from './pages/ComparePage';
import 'react-toastify/dist/ReactToastify.css';
import WatchlistPage from './pages/WatchList';
// const ComparePage = lazy(()=>import("../src/pages/ComparePage"))
function App() {
  return (
    <div  data-theme="dark" >
   <ToastContainer/>
   <Router>
<Routes>
  <Route path= "/" element = {<Home/>}/>
  <Route path= "/dashboardPage" element = {<DashboardPage/>}/>
  <Route path= "/coin/:id" element = {<CoinPage/>}/>
  <Route path= "/comparePage" element = {<ComparePage/>}/>
   <Route path='/watchlist' element={<WatchlistPage/>}/>
</Routes>
</Router>
    </div>
  );
}

export default App;
