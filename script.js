const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveNumber = 1;

nextBtn.addEventListener('click', () => {
	currentActiveNumber++;

	if (currentActiveNumber > circles.length) {
		currentActiveNumber = circles.length;
	}

	update();
});

prevBtn.addEventListener('click', () => {
	currentActiveNumber--;

	if (currentActiveNumber < 1) {
		currentActiveNumber = 1;
	}

	update();
});

const update = () => {
	circles.forEach((circle, index) => {
		if (index < currentActiveNumber) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	progressBar.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentActiveNumber === 1) {
		prevBtn.disabled = true;
	} else if (currentActiveNumber === circles.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
};
