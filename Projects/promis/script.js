// 1. Напиши функцию loadUser()
// 2. Пусть она возвращает Promise
// 3. Внутри setTimeout на 2 секунды
// 4. Math.random() > 0.3 → resolve("Пользователь найден")
//    иначе reject("Ошибка: сервер недоступен")

// 5. После вызови loadUser() и обработай результат через .then и .catch

const bth = document.getElementById('bth')
function loadUser(){
    return new Promise((resolve, reject) => {
        console.log('Ищем пользывателя')
        setTimeout(() => {
            let x = Math.random()
            if(x >= 0.5){
                resolve('пользыватель найден ')
            }else{
                reject('пользыватель не найден')
            }
        }, 2000);
    })  
}
async function checkUser() {
    try{
        const resultat = await loadUser()
        console.log(resultat)
    }catch(err){
        console.error(err)
    }
    
}

bth.addEventListener("click", () => {
    checkUser()
})

