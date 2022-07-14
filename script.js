// Get jquery ready
//let getUserName = prompt("What is your name ?");

$(document).ready(function(){
    // Get button to add list items
    var buttonToAdd = $("#btn");
    buttonToAdd.on("click", function(){
        // Get input field 
        var inputField = $("#inputField").val();
        // Check if input field is empty
        if (inputField !== " ") {
            // Create a new list item
            let createElement = $("<li></li>").text(inputField);
            // Add a button to the list to remove item once its ckicked
            createElement.append("<button id='remove'>Deleted</button>");
            // Gt the ol and app createElement to it
            let orderedList = $("#listItems");
            orderedList.append(createElement);
            // Clear input field
            $("#inputField").val("");
            // Remove list when delted button is clicked
            $("#remove").on("click", function(){
                $(this).parent().remove();
            })
        }
    })
})