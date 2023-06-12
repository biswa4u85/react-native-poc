import * as React from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { Images } from '@common'
import styles from './styles'

class Items extends React.Component<any, any> {

  render() {
    const { item, settings } = this.props
    return (
      <View style={styles.venderBox}>
        {!item.online ? <View style={styles.venderOffline}><Text style={styles.whiteText}>Offline Now</Text></View> : null}
        <Image style={styles.venderImg} source={item.itemUrl ? { uri: item.itemUrl } : Images.nodata} />
        <View style={styles.venderContain}>
          <Text style={styles.grey}>Amount <Text style={styles.hilite}>{settings.currency}{item.itemAmount}</Text></Text>
          {item.serviceAmounts.map((amount, k) => {
            if (amount.amount > 0) {
              return <Text key={k} style={styles.grey}>{amount.name} <Text style={styles.hilite}>{settings.currency}{amount.amount}</Text></Text>
            }
          })}
        </View>
        <View style={styles.venderDetails}>
          <Text>{item.itemName} - {item.category_id}</Text>
        </View>
      </View>
    );
  }
};
export default Items