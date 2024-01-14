// Auto convert lines to json
// Like this:
/*
BepInEx-BepInExPack-5.4.2100
notnotnotswipez-MoreCompany-1.7.4
x753-More_Suits-1.4.1
Sligili-More_Emotes-1.3.3
*/
// To this:
/*
"BepInEx-BepInExPack-5.4.2100",
"notnotnotswipez-MoreCompany-1.7.4",
"x753-More_Suits-1.4.1",
"Sligili-More_Emotes-1.3.3"
*/

document.getElementById("convert").addEventListener("click", function () {
    var text = document.getElementById("text").value;
    var result = document.getElementById("result");
    var lines = text.split("\n");
    var converted = "";
    // If it's not the last line, add a comma
    for (var i = 0; i < lines.length; i++) {
        if (i != lines.length - 1) {
            converted += "\"" + lines[i] + "\",\n";
        } else {
            converted += "\"" + lines[i] + "\"";
        }
    }
    result.innerHTML = converted;
    document.getElementById("message").style.display = "none";
});

// Click to copy
document.getElementById("result").addEventListener("click", function () {
    var result = document.getElementById("result");
    if (result.innerHTML == "") {
        return;
    }
    var range = document.createRange();
    range.selectNode(result);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = "Copied!";
});

// Click to clear
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("message").style.display = "none";
});