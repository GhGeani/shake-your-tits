import { default_workout } from './collection.js';

class Workout {
    set(name, preview, beep, cb) { 
        this.preview = preview;
				this.name = name;
				this.beep = beep;

        const $exercisesList = this.preview.children[0];

        // set the preview workout
        for (let idx = 0; idx < default_workout.exercises.length; idx++) {
            $exercisesList.innerHTML +=
            `<div class="card">
                <img class="card-img-top" src="${default_workout.exercises[idx].gif}" alt="${default_workout.exercises[idx].gif} gif">
                <div class="card-body">
                    <p class="card-text">${default_workout.exercises[idx].name}</p>
                </div>
            </div>`;
        } 

        // set name 
        this.name.innerHTML += default_workout.name
        cb();
    }

    start(work, rest, series) {
			this.work = work;
			this.rest = rest;
			this.series = series;

			this.$counter = counter;
			
			const exerciseIdx = 0;
			this.run(exerciseIdx);

		}

		run(exercise) {
			let r = this.rest.value;
			const chronorest = setInterval(() => {
				if (exercise === default_workout.exercises.length) {
					clearInterval(chronorest);
					this.$counter.innerHTML = 'Done.';
					return;
				}
				if(r > 0) {
					this.beep.watch();
					this.$counter.innerHTML = `${r--} - rest`;
				} else {
					clearInterval(chronorest);
					let w = this.work.value;
					const chronowork = setInterval(() => {
						if (w > 0) {
							this.beep.watch();
							this.$counter.innerHTML = `${w--} - ${default_workout.exercises[exercise].name}`;
						} else {
							clearInterval(chronowork);
							exercise++;
							this.run(exercise);
						}
					}, 1000);
				}
			}, 1000);
		}
}

export const workout = new Workout()