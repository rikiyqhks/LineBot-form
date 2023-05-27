$(document).ready(() => {
    var liffId = "1661217157-q0V6M8y5";
    console.log(`init liff, ID : ${liffId}`);
    initializeLiff(liffId);
});

const initializeLiff = (liffId) => {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }else{
                console.log('Login Success');
            }
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

const sendText = (text) => {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
    }
}


// LINEトーク画面上でメッセージ送信
const sendMessages = (text) => {
    console.log('in sendMessages()');
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(() => {
        liff.closeWindow();
    }).catch((error) => {
        window.alert('Failed to send message ' + error);
    });
}

// Webブラウザからメッセージ送信
const shareTargetPicker = (text) => {
    console.log('in shareTargetPicker');
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch((error) => {
        console.log(error);
        window.alert('Failed to send message ' + error);
    });
}
