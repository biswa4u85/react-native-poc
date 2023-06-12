import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, AboutScreen} from '@screens';
import TabBar from './TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Category" component={AboutScreen} />
    </HomeStack.Navigator>
  );
}

function BottomTabs() {
  const tabs = [
    {
      name: 'Home',
      label: 'Home',
      component: HomeStackScreen,
    },
    {
      name: 'Offers',
      label: 'Offers',
      component: HomeScreen,
    },
    {
      name: 'Account',
      label: 'Account',
      component: AboutScreen,
    },
    {
      name: 'Cart',
      label: 'Cart',
      component: HomeScreen,
    },
    {
      name: 'Carts',
      label: 'Carts',
      component: HomeScreen,
    },
  ];

  const horizontalAnimation = {
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              //   tabBarBadge: 3
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

function MainNav() {
  return (
    <Stack.Navigator>
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
