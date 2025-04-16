// 1 Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers1 = [42, 52, 69]
numbers1[1] = 10
console.log(numbers1);

// 2 Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const string1 = ["dota", "cs", "gta"]
string1[3] = "hk"
console.log(string1);

// 3 Створити скрипт який поверне суму всіх чисел в масиві.
 
const carts = [72, 12, 43, 435, 21, 127, 122, 15, 35, 90];
let total = 0;
for (const cart of carts) {
    total = total + cart;
}
console.log(total);

// 4 Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

let numbers3 = [1, 2, 3, 15, 5]
for (let i = 0; i < numbers3.length; i+= 1) {
    console.log(numbers3[i]);
}

// 5 Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const string2 = ["game", "school", "voleyball", "dota", "phone"]
for (const string2card of string2) {
    if (string2card.length > 5) {
        console.log(string2card);
    }
}

// 6 Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 555]
let num = numbers4[0]
for (const numbers4card of numbers4) {
 if (numbers4card > num) {
    num = numbers4card
 }
}
console.log(num);

// 7 Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numbers5 = [2, 23, 47, 11, 6, 10, 51, 42, 21, 39]

for (const numbers5card of numbers5) {
    if (numbers5card % 2 === 0) {
        console.log(numbers5card); }
}