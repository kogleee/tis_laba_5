let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

// тут напишите конструкцию с bind()
func = func.bind(elem)
func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'