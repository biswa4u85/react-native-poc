import * as React from 'react'
import { connect } from 'react-redux';
import { View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'react-native-firebase';

interface Props extends StateProps, DispatchProps {

}

interface States {

}

class PushNotification extends React.Component<Props, States> {


  constructor(props: Props) {
    super(props);
    this.nextToastId = 0;
  }

  async componentDidMount() {
    await this.checkPermission();
    await this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      try {
        await firebase.messaging().requestPermission();
        this.getToken();
      } catch (error) {
        console.log('permission rejected');
      }
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }


  async createNotificationListeners() {
    const { addMessage } = this.props;
    const key = this.nextToastId++;
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const localNotification = new firebase.notifications.Notification({ sound: 'pushaudio', show_in_foreground: true })
        .setSound('pushaudio.wav')
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setBody(notification.body)
        .android.setChannelId('notification_channel_id') // e.g. the id you chose above
        .android.setSmallIcon('@drawable/push') // create this icon in Android Studio
        .android.setColor('#ff0000') // you can set a color here
        .android.setPriority(firebase.notifications.Android.Priority.High);
      addMessage({ title: notification.title, body: notification.body }, key)
      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err));
    });

    firebase.notifications().onNotificationOpened((notificationOpen) => {
      firebase.notifications().removeDeliveredNotification(notificationOpen.notification.notificationId)
    });

    // const notificationOpen = await firebase.notifications().getInitialNotification();
    // if (notificationOpen) {
    // const { title, body } = notificationOpen.notification;
    // console.log('getInitialNotification:');
    // alert(JSON.stringify(title))
    // console.log(title, body);
    // }
    /*
    * Triggered for data only payload in foreground
    * */
    // this.messageListener = firebase.messaging().onMessage((message) => {
    // alert(JSON.stringify(message))
    //process data message
    // console.log("JSON.stringify:", JSON.stringify(message));
    // });
  }


  render() {
    const { message } = this.props;
    // alert(message.length > 0 ? message[0].msg.title : 'new')
    // console.log(message)
    return null
  }

}


interface StateProps {
  message: any
}

const mapStateToProps = (state: any): StateProps => ({
  message: state.push.list,
})

interface DispatchProps {
  addMessage: any;
  removeMessage: any;
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  const { actions } = require('@stores/PushStore')
  return {
    addMessage: (msg: any, key: any) => dispatch(actions.addMessage(msg, key)),
    removeMessage: (msg: string) => dispatch(actions.removeMessage(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PushNotification);