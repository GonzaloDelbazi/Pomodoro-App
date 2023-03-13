import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Pomodoro from "../pages/pomodoro"
import Config from '../pages/Config';

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Pomodoro" component={Pomodoro}></Tab.Screen>
            <Tab.Screen name="Configuracion" component={Config}></Tab.Screen>
        </Tab.Navigator> 
    )
}