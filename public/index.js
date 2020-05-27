import { workout } from './workout.js';
import { Beep } from './beep.js';

// const $main = document.querySelector('.main-container');

const $name = document.querySelector('#name');
const $preview = document.querySelector('#preview');

const $timer = document.querySelector('#timer');
const $rest = document.querySelector('#rest');
const $series = document.querySelector('#series');

const $counter = document.querySelector('#counter');

const beep = new Beep($counter);

const $start = document.querySelector('#btn-start');

workout.set($name, $preview, beep, () => {
	$start.addEventListener('click', () => {
			workout.start($timer, $rest, $series, $counter);
	});
});