const pop = document.querySelector('.pop')

pop.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains('pm')) {
		console.log('sdfsd');
		pop.style.backgroundColor = 'green'
	} else if (e.target.classList.contains('rest')) {
		pop.style.backgroundColor = 'red'
	} else if (e.target.classList.contains('rhome')) {
		pop.style.backgroundColor = 'blue'
	}
})
pop.addEventListener('click', (e) => {
	if (e.target.classList.contains('rest')) {
		pop.style.display = 'none'
	}
})