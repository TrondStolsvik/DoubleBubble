function getValues() {
  //Declare variable doubleValue and assign the value from ID doubleValue on the page
  let doubleValue = document.getElementById("doubleValue").value;
  //Declare variable bubbleValue and assign the value from ID bubbleValue on the page
  let bubbleValue = document.getElementById("bubbleValue").value;

  //Parse to integers
  doubleValue = parseInt(doubleValue);
  bubbleValue = parseInt(doubleValue);

  //Validate that the values are integers and if-else to test the truth of the values
  //Inside if-else call doubleBubble()
  if (Number.isInteger(doubleValue) && Number.isInteger(bubbleValue)) {
    //Declare variable dbData and set to the value of doubleBubble(doubleValue, bubbleValue)
    dbData = doubleBubble(doubleValue, bubbleValue);

    //Call displayData(dbData)
    displayData(dbData);
  } else {
    //Else if either of doubleValue and bubbleValue are not numbers
    //display alert prompting the user to enter integers
    alert("You must enter integers in both fields.");
  }
}

function doubleBubble(dValue, bValue) {
  //Declare a blank array as returnArray
  let returnArray = [];

  //For-loop from 0 to 100
  for (let i = 0; i <= 100; i++) {
    //If-else evaluate each number against zero modulus of the parameters dValue and bValue
    //First evaluate against both and push "Double Bubble" if true
    if (i % dValue == 0 && i % bValue == 0) {
      i = "Double Bubble!";
      returnArray.push(i);
      //Else-if evaluate against dValue and push "Double" if true
    } else if (i % dValue == 0) {
      i = "Double";
      returnArray.push(i);
      //Else-if evaluate against bValue and push "Bubble" if true
    } else if (i % bValue == 0) {
      i = "Bubble";
      returnArray.push(i);
      //Else-if push the i-value
    } else {
      returnArray.push(i);
    }
  }
  //Finally return the array
  return returnArray;
}

function displayData(dbData) {
  //Get table body element from the page
  let tableBody = document.getElementById("results");

  //Get the row from the template
  let templateRow = document.getElementById("dbTemplate");

  //Clear the table
  tableBody.innerHTML = "";

  //For-loop to append rows to the table
  for (i = 0; i < dbData.length; i += 5) {
    //Declare a variable tableRow and store the content of the row from the template
    const tableRow = document.importNode(templateRow.content, true);

    //Declare a variable rowCols and store only the "td" elements
    rowCols = tableRow.querySelectorAll("td");

    //Model the row one column at a time and add a class to each column based on data in dbData
    //Next store the content of the column as the data in dbData
    rowCols[0].classList.add(dbData[i]);
    rowCols[0].textContent = dbData[i];

    rowCols[1].classList.add(dbData[i + 1]);
    rowCols[1].textContent = dbData[i + 1];

    rowCols[2].classList.add(dbData[i + 2]);
    rowCols[2].textContent = dbData[i + 2];

    rowCols[3].classList.add(dbData[i + 3]);
    rowCols[3].textContent = dbData[i + 3];

    rowCols[4].classList.add(dbData[i + 4]);
    rowCols[4].textContent = dbData[i + 4];

    //In the end append the tableRow to the tableBody
    tableBody.appendChild(tableRow);
  }
}
