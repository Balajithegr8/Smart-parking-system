import admin from '../util/firebase.cjs';

async function NotificationService(token, title, body) {
    const message = {
        notification: {
            title: title,
            body: body,
        },
        token: token
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);
    } catch (error) {
        console.error('Error sending message:', error);
    }

}

export default NotificationService;