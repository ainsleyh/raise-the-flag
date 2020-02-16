import React, {Component} from "react";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { firebase } from '@react-native-firebase/messaging';
// var PushNotification = require("react-native-push-notification");

export default class PushController extends Component{
    componentDidMount(){
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:", token);
                firebase.messaging().getToken().then(token => {
                    console.log("TOKEN2: ", token);
                })
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);

              // process the notification here

              // required on iOS only
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            // Android only
            senderID: "891718519231",
            // iOS only
            permissions: {
              alert: true,
              badge: true,
              sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
          });
    }

    render(){
        return null;
    }
}