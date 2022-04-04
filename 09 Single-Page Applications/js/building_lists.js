
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);

console.log(data);

var books = data.books;

window.addEventListener("load", () => {

	var table = document.createElement("table"), row, cellA, cellB,thead;
	document.getElementById("tableDiv").appendChild(table);
	for (var i=0; i < books.length; i++) {


		row = table.insertRow();
		cellA = row.insertCell();
		cellB = row.insertCell();



		cellA.innerHTML = books[i].title;
		cellB.innerHTML = books[i].year;

	}
	const createClickHandler = (row) => {
		return () => {
			const [cell] = row.getElementsByTagName("td");
			const id = cell.innerHTML;
			document.getElementById("nimi").innerHTML = cell.innerHTML;
			console.log(id);
		};
	};

	const selectTable = document.querySelector("table");
	for (const currentRow of selectTable.rows) {
		currentRow.onclick = createClickHandler(currentRow);


	}




});




/*var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title, books[i].year);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);

 */
