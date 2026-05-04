importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCKRB49LOhaR79NI8CwypqCMf_10GHd77k",
  projectId: "reports-e956a",
  messagingSenderId: "1058914487818" // Cambia este número por tu Sender ID real
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
