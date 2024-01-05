/*
Дан массив чисел, нужно найти максимальное число в этом массиве. 
Напишите функцию, которая принимает этот массив в качестве аргумента и возвращает максимальное число. 
Если в массиве меньше двух чисел, функция должна вернуть ошибку.
*/

const findThatGirl = girlsList => girlsList.length < 2 ? new Error('she gotta be at least a 2 bruh, cmon, have some std') : Math.max.apply(null, girlsList);
