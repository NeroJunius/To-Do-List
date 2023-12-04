import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  function IsLogin() {
    if (!localStorage.token) {
      return <Navigate to={"/signin"} />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <Routes>
      <Route element={<IsLogin />}>
        <Route path='/' element={<Home />} />
      </Route>
        <Route path='/signin' element={!localStorage.token? <SignIn /> : <Navigate to="/"/>} />
        <Route path='/signup' element={!localStorage.token? <SignUp /> : <Navigate to="/"/>} />
      </Routes>
  )
}

export default App
