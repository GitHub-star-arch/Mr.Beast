import WPP from '../screens/WebPayPal'
import WGP from '../screens/WebGooglePay'
import BOA from '../screens/WebBOA'
import Payment from '../screens/Payment'
import { createStackNavigator } from 'react-navigation-stack'

export const StackNavigator = createStackNavigator({
    Payment: { screen: Payment },
    WPP: { screen: WPP },
    WGP: { screen: WGP },
    BOA:{screen:BOA},
}, {
    initialRouteName: 'Payment'
}
)