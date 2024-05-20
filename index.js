// const userName = prompt('Enter your name');

// const isUserName=confirm ('Is it your name' + userName + '?');

// console.log(userName);

// console.log(isUserName);




// if (isUserName) {
//     alert('Hi,' + userName);
// } else {
//     alert('Be more attentive')
// }

// const birthdayGift = prompt ('Enter what would you like');
// console.log(birthdayGift);
// const isItUserrGift = confirm('Is it your gift' + birthdayGift + '?');

// if (isItUserrGift) {
//     alert('OK, пішов шукати твій подарунок ' + birthdayGift)
// } else {
//     alert('Добре, подумай ще')
// }





// let amount = 0;

// if (confirm('Чи є "Володар перснів" романом фентезі?')) {
//     amount++;
// };

// if (!confirm('Чи є "Лісова пісня" романом?')) {
//     amount++;
// };

// if (confirm('Чи створив гурт "The Beatles" пісню "Imagine"??')) {
//     amount=amount+1;
// };

// if (confirm('Чи є Моноліза Ліза картиною Леонардо да Вінчі? ')) {
//     amount=amount+1;
// };

// if (confirm('Чи швидкість світла більша за швидкість звуку?')) {
//     amount=amount+1;
// };


// alert('Your result' + amount)

// ++ інкремент - збільшує значення зімнної на 1
// -- декримент - зменшує значення змінної на 1




const Dollar = prompt('Введіть курс');

if (confirm('Чи буде конвертація з доларів у гривні')) {
    let howMuch= prompt('Введіть суму в доларах');
let result = howMuch*Dollar;
alert('Ви отримаєте' +result + 'USD');
} 
else {
    let howMuchGrivna= prompt('Введіть суму в гривнях')
let resultGrivna = howMuchGrivna/Dollar;
alert('Ви отримаєте' + resultGrivna + 'UAH');
}
