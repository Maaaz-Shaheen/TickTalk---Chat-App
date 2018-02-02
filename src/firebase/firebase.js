import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCBCGmwmGKt6H4Og51kO4A2GV2j8tCGDrI",
    authDomain: "ticktalk-the-chat-app.firebaseapp.com",
    databaseURL: "https://ticktalk-the-chat-app.firebaseio.com",
    projectId: "ticktalk-the-chat-app",
    storageBucket: "",
    messagingSenderId: "339921606207"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };