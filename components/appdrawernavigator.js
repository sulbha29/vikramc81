import React ,{Component} from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './apptabnavigator'
import Customsidebarmenu from './customsidebarmenu'
import SettingScreen from '../screens/settingscreen'
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    setting:{screen:SettingScreen}},
    {contentComponent:Customsidebarmenu},{initialRouteName:'Home'

})