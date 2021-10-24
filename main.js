entries = [];
var number_of_entries = 0;

function addItem(){
    number_of_entries = number_of_entries + 1;
    var itemName = document.getElementById("textInput").value
    entries.push(itemName);
    document.getElementById("inputTexts").innerHTML = entries.toString();
    console.log("added an item")
    document.getElementById("chooseBtn").style = "display:inline-block";
}

function selectItem(){
    var outputbruh = entries[Math.floor(Math.random() * entries.length)];
    document.getElementById("output").innerHTML = outputbruh;
    console.log("Chose " + outputbruh)
}