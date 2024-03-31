function fibonacci(num) {
	a = 0
	b = 1

	if(num<=1) {
		return a;
	}
	else if(num==2) {
		return b;
	}
	else {
		for (let i=3;i<=num;i++) {
			temp = a+b
			a = b
			b = temp
		}
		return b;
	}
}

module.exports = fibonacci;
