export class Beep {

	constructor(counter) {
		this.counter = counter;

		this.sound = new Audio('./beep.mp3');
	}

	watch() {
		this.number = this.counter.innerHTML.split('-')[0];
		if (this.number < 4) {
			this.play();
		}
	}
	play() {
		this.sound.play();
	}
}