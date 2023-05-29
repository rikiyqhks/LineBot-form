const onSubmit = () => {
    const grade = document.getElementById("grade").value;
    let class_rank = document.getElementById("class_rank").value;
    let class_type = document.getElementById("class_type").value;
    const major = document.getElementById("major").value;
    const sNumber = document.getElementById("sNumber").value;

    if (validation_check(grade, class_rank, class_type, major, sNumber)) {
        if (class_type == "その他学科") {
            class_type = document.getElementById("other_class_type").value;
        }
        if (major == "その他専攻") {
            major = document.getElementById("other_major").value;
        }
    
        const msg = "【登録内容】\n" + `[クラス] ${grade}${class_rank} \n` + `[学科] ${class_type} \n` + `[専攻] ${major} \n` + `[学籍番号] ${sNumber}`;
        console.log(msg);
        sendText(msg);
    
        return false;
    }
}

const validation_check = (grade, class_rank, class_type, major, sNumber) => {
    const grade_list = [1, 2, 3, 4];
    const class_rank_list = ["C", "CB", "CA", "BC", "B", "BA", "AC", "AB", "A", "飛び級"];
    const class_type_list = ["スーパーゲームＩＴ科", "ゲームＣＧクリエーター科",
    "e-sports科", "クリエーター科", "その他学科"];
    const major_list = ["グラフィックデザイン＆イラスト専攻", "スーパーＣＧ・映像クリエーター専攻",
    "スーパーゲームクリエーター専攻", "e-sportsイベント・マネジメント専攻", "ＡＩエンジニア専攻",
    "ＩＴエンジニア専攻", "ホワイトハッカー専攻", "ゲームグラフィック＆キャラクター専攻",
    "ＣＧクリエーター専攻", "ゲームプログラマー専攻", "e-sportsプロゲーマー専攻",
    "ネット動画クリエーター専攻", "コミックイラスト＆マンガ専攻", "アニメーション専攻", "その他専攻"];

    switch (false) {
        case grade_list.includes(parseInt(grade)):
            alert("学年を選択してください。");
            break;
        case class_rank_list.includes(class_rank):
            alert("クラスを選択してください。");
            break;
        case class_type_list.includes(class_type):
            alert("学科を選択してください。");
            break;
        case major_list.includes(major):
            alert("専攻を選択してください。");
            break;
        case String(sNumber).length === 10:
            alert("正しい学籍番号を入力してください。");
            break;
        default:
            return true;
    }
}

const onlyNumbers = n => {
    return n.replace(/[０-９]/g,s => String.fromCharCode(s.charCodeAt(0) - 65248)).replace(/\D/g,"");
}
