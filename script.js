/*
The objective is to turn palindromic words/sentense input into not palindrome by changing one single character. Has to pass these tests: accepts only strings of 1-1000 characters (presumed alphanumeric); converts to and return string in lower case.
*
Future improvement: change any char, not just the first.
Check for even or odd chars then choose a random non-middle char.
*/

function checkP() {
	const word = prompt("what do you want to convert?");
	// alert(`Input word: ${word}`);
	if (word == "") {
		alert("Please enter something here!");
		return; // to avoid empty inputs
	} else if (word.length > 1000) {
		alert("It's too long! Please keep it at or under 1000 characters.");
		return; // only allow string of 1000 chars or less
	} else if (word.length == 1) {
		document.getElementById("result").innerHTML = "Single character is always a palindrome... there's nothing I can do 😢";
		return; // single chars can't be converted
	}
	const rem = /[\W]/g; // remove non-alphanumeric char
	let remWord = word.toLowerCase().replace(rem,""); // remove any non-alphanumeric char
	let revW = remWord.split("").reverse().join("");
	// alert(`Cleaned words, in steps: ${word}, ${remWord}, ${revW}`);
	if (remWord === revW) {
		unmakeP(word); // run function to un-palindrome input string
	} else {
		document.getElementById("result").innerHTML = "Hey! That's already <span style=text-decoration:underline>not</span> a palindrome... it's perfect as is ❤️";
	}
}

function unmakeP(word) {
	// alert("word to be unP: " + word);
	// alert("1st letter: " + word.charAt(0));
	let code = word.charCodeAt(0); // 1st character of input string
	let plus = Math.floor((Math.random() * 10) + 1); // to add some variety
	let plusCode = String.fromCharCode(code+plus); // change to another char
	plusCode = plusCode.replace(/[\W_]/g, String.fromCharCode(65+plus));
	// if resulting char is not alphanumeric, switch to one that is
	let newWord = word.replace(word.charAt(0), plusCode).toLowerCase();
	// thus, only the 1st char is changed but it respects the rules in full
	document.getElementById("result").innerHTML = `Your input: ${word} <br>\n\n Un-palidromed output: ${newWord}`;
};

document.getElementById("btn").addEventListener("click", checkP);

/*
Some references:
https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/