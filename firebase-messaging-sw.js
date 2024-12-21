importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyCzBeCG7eLJIIKKVn68hPhG3W11ROBJzdw',
    appId: '1:853598072190:web:35376c04517f3598e9972f',
    messagingSenderId: '853598072190',
    projectId: 'hookah-cafe-a1b7f',
    authDomain: 'hookah-cafe-a1b7f.firebaseapp.com',
    storageBucket: 'hookah-cafe-a1b7f.appspot.com',
    measurementId: 'G-86ECY3BY03',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    // Ensure notification payload is present
    if (payload.notification) {
        const notificationTitle = payload.notification.title || "New Notification";
        const notificationOptions = {
            body: payload.notification.body || "You have a new message.",
            icon: "/assets/icon/logo.png" // Ensure this path is correct
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    } else {
        console.error("Payload did not contain notification data.");
    }
});
