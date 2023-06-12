import * as React from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { connect } from 'react-redux';
import { Images } from '@common'
import styles from './styles'

class Vendor extends React.Component<any, any> {

  render() {
    const { item, settings, adminDetails } = this.props
    adminDetails['serviceTypes'] = item.serviceTypes
    let deatils = (item.inHouse) ? adminDetails : item
    return (
      <View style={styles.venderBox}>
        {!item.online ? <View style={styles.venderOffline}><Text style={styles.whiteText}>Offline Now</Text></View> : null}
        <View style={styles.venderContain}>
          {deatils.offerType ? <View>
            <Text style={styles.grey}>{deatils.offerType} <Text style={styles.hilite}>{settings.currency}{deatils.offerAmount}</Text> off</Text>
            <Text style={styles.grey}>Min Order Amount <Text style={styles.hilite}>{settings.currency}{deatils.orderMinAmount}</Text></Text>
          </View> : <View>
              <Text style={styles.grey}>DeliveryTime <Text style={styles.hilite}>{deatils.deliveryTime}</Text></Text>
              <Text style={styles.grey}>Packaging <Text style={styles.hilite}>{settings.currency}{deatils.packagingCharges}</Text></Text>
            </View>}
        </View>
        <Image style={styles.venderImg} source={deatils.profile_image ? { uri: deatils.profile_image } : Images.nodata} />
        <View style={styles.venderDetails}>
          <Text>{item.full_name} - {item.addresses ? item.addresses[0].address1 : ''}</Text>
          <Text>Services <Text style={styles.hilite}>{deatils.serviceTypes ? deatils.serviceTypes.join() : ''}</Text></Text>
        </View>
      </View>
    );
  }
};

interface StateProps {
  adminDetails: any
}

const mapStateToProps = (state: any): StateProps => ({
  adminDetails: state.user.adminDetails,
})

export default connect(mapStateToProps)(Vendor)