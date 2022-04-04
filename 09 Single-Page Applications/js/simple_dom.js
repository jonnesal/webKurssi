//console.log('page loaded');

console.log(document);

/*document.getElementById("save").onclick = function() {

	obj.save();
};

var obj = {
	save : function (){
		console.log('save');
		// get a DOM object representing a form field.
		var name = document.querySelector('#userForm input[type="text"]');
		var email = document.querySelector('#userForm input[type="email"]');
		var pass = document.querySelector('#userForm input[type="password"]');

		console.log(name);

		document.querySelector('#summary h1').innerHTML = name.value;
		var email = document.querySelector('#userForm input[type="email"]').value;
		document.querySelector('#summary p').innerHTML = email;

		var pass = document.querySelector('#userForm input[type="password"]').value;
		document.querySelector('#summary p1').innerHTML = pass;

		var data = document.querySelectorAll('#userForm input');
		console.log(data);
		var paragraphs = document.querySelectorAll('#summary p');
		console.log('found '+paragraphs.length+' p tags');
		document.querySelector('#summary h1').innerHTML = name.value;


		//paragraphs[1].innerHTML = 'Hello World!';

	}
}

 */

document.querySelector('#userForm input[type="text"]').onkeypress = function() {
	console.log('updating name');
	var text = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = text;
};

document.querySelector('#userForm input[type="password"]').onkeypress = function() {
	console.log('updating password');
	var password = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary p1').innerHTML = password;
};

document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};





document.querySelector('#userForm input[type="email"]').onkeydown  = function() {
	console.log('updating email (onkeydown)');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onmouseover   = function() {
	console.log('updating email (onmouseover)');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onmouseout    = function() {
	console.log('updating email (onmouseout )');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onchange    = function() {
	console.log('updating email (onchange )');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onclick    = function() {
	console.log('updating email (onclick )');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};


