import {Route,Routes} from 'react-router'
import { useState } from 'react'

import CreateAcc from './CreateAcc'
import Account from './Account'
import Login from './Login'
import LandingPage from './LandingPage'



function App() {
  const [count, setCount] = useState(0)

  return (

<>
<Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/signin' element={<Login/>}/>
<Route path='/signup' element={<CreateAcc/>}/>
<Route path='/account' element={<Account/>}/>
</Routes>

</>
   

  )
}

export default App
