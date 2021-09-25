class Hamburger {
    constructor(size, [stuffing]) {
        this.size = size;
        this.stuffing = [stuffing];
    }
    addTopping(topping) {
        if (topping == 1) this.stuffing.push('Cheese');
        else if (topping == 2) this.stuffing.push('Salad');
        else if (topping == 3) this.stuffing.push('Potato');
        else if (topping == 4) this.stuffing.push('Paper');
        else if (topping == 5) this.stuffing.push('Mayonnaise');
        else console.log("Вы ничего не добавили!");
    }
    removeTopping(topping) {
        if (topping == 1) this.stuffing.splice(this.stuffing.indexOf('Cheese'), 1);
        else if (topping == 2) this.stuffing.splice(this.stuffing.indexOf('Salad'), 1);
        else if (topping == 3) this.stuffing.splice(this.stuffing.indexOf('Potato'), 1);
        else if (topping == 4) this.stuffing.splice(this.stuffing.indexOf('Paper'), 1);
        else if (topping == 5) this.stuffing.splice(this.stuffing.indexOf('Mayonnaise'), 1);
        else сonsole.log("Вы ничего не убрали");
    }
    getSize() {
        console.log(this.size);
    }
    getStuffing() {
        console.log(this.stuffing);
    }
    calculatePrice() {
        let sum = 0;
        let i = -1;
        if (this.size == 'Large') sum += 100;
        else if (this.size == 'Small') sum += 50;
        while (this.stuffing[++i]) {
            if (this.stuffing[i] == 'Cheese') sum += 10;
            if (this.stuffing[i] == 'Salad') sum += 20;
            if (this.stuffing[i] == 'Potato') sum += 15;
        }
        console.log('Итого: ' + sum + '₽');
    }
    calculateCalories() {
        let sum = 0;
        let i = -1;
        if (this.size == 'Large') sum += 40;
        else if (this.size == 'Small') sum += 20;
        while (this.stuffing[++i]) {
            if (this.stuffing[i] == 'Cheese') sum += 20;
            if (this.stuffing[i] == 'Salad') sum += 5;
            if (this.stuffing[i] == 'Potato') sum += 10;
        }
        console.log('Итого: ' + sum + ' калорий');
    }
}

let fSize = () => {
    let a = prompt("Введите размер бургера, который вы хотите приобрести:\n1)Большой\n2)Маленький");
    if (a == 1) return 'Large';
    else if (a == 2) return 'Small';
    else return fSize();
}

let fTopping = () => {
    let a = prompt("Введите начину, которую вы хотите добавить:\n1)Сыр\n2)Салат\n3)Картофель");
    if (a == 1) return ['Cheese'];
    else if (a == 2) return ['Salad'];
    else if (a == 3) return ['Potato'];
    else return fTopping();
}



let burger = new Hamburger(fSize(), fTopping());
alert('Все данные о вашем заказе вы увидите в консоли браузера!');
console.log(burger);
burger.addTopping(1);
burger.addTopping(2);
burger.addTopping(2);
burger.addTopping(2);
burger.addTopping(3);
burger.addTopping(2);
burger.addTopping(1);
burger.removeTopping(2);
burger.removeTopping(2);
burger.removeTopping(1);
burger.removeTopping(1);
burger.calculatePrice();
burger.calculateCalories();