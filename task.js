//Создаем список всех меню на странице:
const menuMainList = document.querySelectorAll(".menu_main");

//делаем перебор списка меню:
for (let iMenu = 0; iMenu<(menuMainList.length); iMenu++) {

    //Перебор по списоку вложенных меню:
    for (let iPodMenu = 0; iPodMenu<(menuMainList[iMenu].children.length); iPodMenu++) {
        //Проверка если выпадающее меню:
        if (menuMainList[iMenu].children[iPodMenu].children.length > 1) {
            
            //При щелчке:
            console.log(menuMainList[iMenu].children[iPodMenu].children[0]);
            menuMainList[iMenu].children[iPodMenu].children[0].onclick = function(event) {
                //Если текущее меню уже открыто, то закрываем его:
                if (menuMainList[iMenu].children[iPodMenu].children[1].className == "menu menu_sub menu_active") {
                    menuMainList[iMenu].children[iPodMenu].children[1].className = "menu menu_sub"
                } else {
                    //Закрываем все выпадающие меню в данном "главном" меню:
                    for (let iCloseMenu = 0; iCloseMenu<(menuMainList[iMenu].children.length); iCloseMenu++) {
                        if (menuMainList[iMenu].children[iCloseMenu].children.length > 1) {
                            menuMainList[iMenu].children[iCloseMenu].children[1].className = "menu menu_sub";
                        }
                    }

                    //Открываем выпадающее меню:
                    menuMainList[iMenu].children[iPodMenu].children[1].className = "menu menu_sub menu_active";
                }
                //Блокирует переход по ссылке:
                return false;
            }
        }
    }
}