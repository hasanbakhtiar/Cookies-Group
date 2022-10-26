import { BrowserRouter,Route } from 'react-router-dom'
import Authentication from '../components/Authentication'
import App from '../components/App';
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Authentication}></Route>
        <Route path="/app" component={App}></Route>
    </BrowserRouter>
  )
}

export default AppRouter