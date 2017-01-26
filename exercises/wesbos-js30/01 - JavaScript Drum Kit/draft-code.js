// DRAFT


	// get element you're listening for - window in this case
	// add an event listener, listen for `keydown`
	// write a function which gives us the event
	window.addEventListener('keydown', function(e) {
		// console.log(e.keyCode); // e is the event, if you keypress it will show you info about which key was pressed, etc

		// is there an audio element on the page that has the same keycode as what I just pressed?

		// find a selector w document.querySelector, audio element w data-attr of data-key on it
		// Es6 template selector --> ${e.keyCode}
		// why backticks ` and not single-quotes here?
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		// console.log(audio);

		// select the key button you are hitting
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		// console.log(key);
		// key.setAttribute("class","playing"); // this will add it but it stays added, and also removes class `key`
		// key.className += ' playing'; // this adds it but it stays on
		key.classList.add('playing'); // this is what Wes suggests
		// so how do we remove it when the audio stops? classList.remove, classList.toggle
		// key.classList.toggle('playing'); // this will toggle it back off when the button is clicked AGAIN so that's not it yet
		// wes suggests adding a transition end event that will fire the remove when the animation is done - listen for when the transition css is happening

		function removeTransition(e) {
			// console.log(e);
			if(e.propertyName !== 'transform') return; // skip it if it's not a transform. note transform here has to be in quotes, or it returns undefined - because we are matching to a string, not a var
			// console.log(e.propertyName);
			// now that we can see when the transition has ended we can remove the class
			// key.classList.remove('playing'); // why `this` vs key? - because you don't want to remove ALL of them, at the same time, you want to remove them individually based on when each was ended
			this.classList.remove('playing');
		}

		// select ALL keys
		const keys = document.querySelectorAll('.key');
		// console.log(keys);
		// es6 arrow function
		// each key gets an event listener added to listen to transitionend and when the transition has ended we run removeTransition
		keys.forEach(key => key.addEventListener('transitionend', removeTransition));



		if(!audio) {
			return; // stop function if no matching audio
			// console.log("no matching audio");
		}

		// if you hit the key again while the sound is playing, it doesn't re-play the sound because it's already playing. 'rewind' it to the beginning on each keypress so it starts over when the key is hit
		audio.currentTime = 0; // rewind

		// if one matches, play it
		audio.play();

	});
