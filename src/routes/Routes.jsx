import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../component/signIn/SignIn';
import SignUp from '../component/signUp/SignUp';
import Home from '../pages/Home/Home';
const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/signin',
                element:<SignIn/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
        ]
    }
])
export default routes ;