function getApi(){
    var requestUrl =  'https://libraryofcongress.github.io/data-exploration/';

fetch(requestUrl)

.then(function(response){

    console.log('response', response);
    return response.json();

})

.then(function(data){

console.log("data", data);

for (var i = 0; i < data.length; i++) {
    // Creating elements, tablerow, tabledata, and anchor
    var createTableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    var link = document.createElement('a');

    // Setting the text of link and the href of the link
    link.textContent = data[i].html_url;
    link.href = data[i].html_url;

    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    tableData.appendChild(link);
    createTableRow.appendChild(tableData);
    tableBody.appendChild(createTableRow);
  }


})




}