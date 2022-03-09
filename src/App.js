import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './components/alert/Alert'
import User from './pages/User'

function App() {
  return (

    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar/>

        <main className='container mx-auto px-3 pb-12'>
          <Alert/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='user/:login' element={<User/>}></Route>
            <Route exact path='/notfound' element={<NotFound/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        </main>

        <Footer/>
      </div>

    </Router>

    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
