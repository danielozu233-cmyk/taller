importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCKrf4w-Djjrj2wAjgvaRauADxfcQWp5Do",
  projectId: "tallerggalvez",
  messagingSenderId: "760556347227"
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
