import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserNavigation from '../user/navigation/UserNavigation'
import NewsNavigation from '../news/navigation/NewsNavigation'
import { UserContext } from '../user/utilities/UserContext'

const AppNavigation = () => {
    const {isLogin} = useContext(UserContext);
  return (
    <NavigationContainer>
        {isLogin ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation