/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (i === 0){
      newStr = newStr + str[i].toUpperCase();
    }else if (str[i] === ' '){
      newStr = newStr + " " + str[i + 1].toUpperCase();
      i++;
    }else{
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
