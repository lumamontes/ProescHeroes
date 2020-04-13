import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login';
import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer (
    createStackNavigator ({
        Login,
        Main,
        Profile,
    },  {

        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#141414'
            }
        }


    })
)

export default Routes;