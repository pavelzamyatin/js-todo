// console.log('JS script is working just fine!');

// User clicked on the Add button
// If there any text in the Item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
  // console.log('button clicked');
  var value = document.getElementById('item').value;
  console.log(value);
});
