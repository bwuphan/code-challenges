const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').concat([0,1,2,3,4,5,6,7,8,9]);
const passwordGen = () => {
  //your code here
  while (1) {
	  let password = '';
	  const length = Math.floor(Math.random() * 15) + 6;
	  for (let i = 0; i < length; i++) {
	  	let character = alphabet[Math.floor(Math.random() * 36)];
	  	if (typeof character === 'string') {
	  		const capitalizeNum = Math.random();
	  		if (capitalizeNum > 0.5) {
	  			character = character.toUpperCase();
	  		};
	  	};
	  	password += character;
	  }
	  let lowerCase = password.search(/[a-z]/g);
	  let upperCase = password.search(/[A-Z]/g);
	  let number = password.search(/[0-9]/g);
	  if (lowerCase > -1 && upperCase > -1 && number > -1) {
	  	return password
	  }
  }
}

console.log(passwordGen())