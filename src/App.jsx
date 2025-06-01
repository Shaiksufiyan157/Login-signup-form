import {Route,Routes} from 'react-router'

import CreateAcc from './CreateAcc'
import Account from './Account'
import Login from './Login'
import Landing from './Landing'

function App() {

  return (

<>
<Routes>
<Route path='/' element={<Landing/>}/>
<Route path='/signin' element={<Login/>}/>
<Route path='/signup' element={<CreateAcc/>}/>
<Route path='/account' element={<Account/>}/>
</Routes>

</>
   

  )
}

export default App
