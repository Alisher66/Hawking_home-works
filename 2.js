// function lottery() {
//     console.log("Вы начали игру");
//     let promise = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
//       }, 1000);
//     });
//     return promise;
//   }

//   lottery()
//     .then(() => console.log("Вы выиграли"))
//     .then(() => console.log("Вам заплатили"))
//     .catch(() => console.log("Вы проиграли"))
//     .finally(() => console.log("Игра закончена"));



async function getNum() {
    return Math.random(0);
}

async function lottery() {
    console.log("вы начали игру");
    setTimeout(async () => {
        let rand = await getNum();
        if (rand > 0.5) {
            console.log("Вы выиграли")
            console.log("Вам заплатили")
        } else {
            console.log("Вы проиграли")
        }
        console.log("Игра закончена")
    }, 1000)

}

lottery();