import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Props {
  navigation: any
  renderIcon: any
  activeTintColor: any
  inactiveTintColor: any
  jumpToIndex: any
}

interface States {
  jumpToIndex: boolean
}

class TabBar extends React.PureComponent<Props, States> {
  onPress(index: number) {
    // this.refs["tabItem" + index].flipInY(900);
    this.props.jumpToIndex(index);
  }

  render() {
    const {
      navigation,
      renderIcon,
      activeTintColor,
      inactiveTintColor,
    } = this.props;

    const {
      routes
    } = navigation.state;

    const ignoreScreen = ['DetailScreen', 'SearchScreen', 'Detail', 'NewsScreen', 'LoginScreen', 'SignUpScreen', 'CustomPage', 'CategoryDetail', 'SettingScreen', 'WishListScreen']

    return (
      <View key="1" style={styles.tabbar}>
        {routes && routes.map((route: any, index: number) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;

          if (ignoreScreen.indexOf(route.key) > -1) {
            return <View key={route.key} />
          }

          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={styles.tab}
              onPress={this.onPress.bind(this, index)}
            >
              <Animatable.View
                ref={"tabItem" + index}
                style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </Animatable.View>
            </TouchableWithoutFeedback>
          );
        })}

      </View>

      // Device.isIphoneX && <View key="2" style={Styles.Common.viewCover} />
    )
  }
}

export default TabBar


const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#F3F3F3'
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    // ...Platform.select({
    //     ios: {
    //         justifyContent: Device.isIphoneX ? 'flex-start' : 'center',
    //         paddingTop: Device.isIphoneX ? 12 : 0
    //     },
    //     android: {
    //         justifyContent: 'center',
    //     },
    // }),
  }
});