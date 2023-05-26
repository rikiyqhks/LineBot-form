const onSubmit = () =>{
    const text = document.getElementById('answer').value;

    const msg = "【送信内容】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}

const onlyNumbers = n => {
    return n.replace(/[０-９]/g,s => String.fromCharCode(s.charCodeAt(0) - 65248)).replace(/\D/g,'');
}
