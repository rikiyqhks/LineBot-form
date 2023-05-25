function onSubmit(){
    const text = document.getElementById('answer').value;

    const msg = "【送信内容】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}