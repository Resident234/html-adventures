var number = 15;
var taskResult;

taskResult = number;
var isFizz = false;
var isBuzz = false;

if(number % 3 === 0) {
    taskResult = 'Fizz';
    isFizz = true;
}

if(number % 5 === 0) {
    taskResult = 'Buzz';
    isBuzz = true;
}

if(isFizz && isBuzz) taskResult = 'FizzBuzz';


/* Техническое задание

Программа должна анализировать числа.

Если число делится на 3, результат работы программы — строка 'Fizz'.

Если число делится на 5 — строка 'Buzz'.

Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.

В остальных случаях результат работы программы — изначальное число.

Число записано в переменную number.

Результат работы программы записывайте в переменную taskResult.

*/
