const onSubmit = () => {
    const grade = document.getElementById('grade').value;
    let class_rank = document.getElementById('class_rank').value;
    let class_type = document.getElementById('class_type').value;
    const major = document.getElementById('major').value;
    const sNumber = document.getElementById('sNumber').value;

    if (class_type == "その他学科") {
        class_type = document.getElementById('other_class_type').value;
    }
    if (major == "その他専攻") {
        major = document.getElementById('other_major').value;
    }

    const msg = "【登録内容】\n" + `[クラス] ${grade}${class_rank} \n` + `[学科] ${class_type} \n` + `[専攻] ${major} \n` + `[学籍番号] ${sNumber}`;
    console.log(msg);
    sendText(msg);

    return false;
}

const onlyNumbers = n => {
    return n.replace(/[０-９]/g,s => String.fromCharCode(s.charCodeAt(0) - 65248)).replace(/\D/g,'');
}
