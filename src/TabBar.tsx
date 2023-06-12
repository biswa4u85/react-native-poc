import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
import {CheckIcon} from 'native-base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const TAB_BAR_WIDTH = width / 5;
const ANIMATED_PART_HEIGHT = 5;

const TabBar = ({state, descriptors, navigation}) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;

  const animate = index => {
    Animated.spring(animationHorizontalValue, {
      toValue: index * TAB_BAR_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(state.index);
  }, [state.index]);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedWrapper}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{translateX: animationHorizontalValue}],
            },
          ]}
        />
      </Animated.View>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel || route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
              key={`${index}--${route.key}`}>
              <View style={styles.innerView}>
                <CheckIcon
                  size={26}
                  color={isFocused ? '#ff0000' : '#4F8EF7'}
                />
                <Text>{label}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
  },
  innerView: {
    paddingVertical: height * 0.01,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: TAB_BAR_WIDTH,
    textAlign: 'center',
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: '#ff0000',
  },
  animatedWrapper: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
