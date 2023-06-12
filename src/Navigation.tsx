import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, AboutScreen } from '@screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (<Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
    );
}

function MainNav() {
    return (<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={BottomTabs} />
    </Stack.Navigator>
    );
}



export default function Navigation() {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
}