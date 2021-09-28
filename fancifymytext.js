function alertMessage() {
    alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "24pt"
}

function radioButtonStyle() {
    if (document.getElementById("fancy-button").checked) {
        alert("You clicked on 'FancyShmancy' radio button!")
        document.getElementById("text-area").style.fontWeight = "bold"
        document.getElementById("text-area").style.color = "blue"
        document.getElementById("text-area").style.textDecoration = "underline"

    }
    else if(document.getElementById("boring-button").checked) {
        alert("You clicked on 'BoringBetty' radio button...")
        document.getElementById("text-area").style.fontWeight = "normal"
        document.getElementById("text-area").style.color = "black"
        document.getElementById("text-area").style.textDecoration = "revert"
    }
}

function mooButton() {
    let data = document.getElementById("text-area").value;
    data = data.toUpperCase();
    
    let parts = data.split(".");
    data = parts.join("-Moo");

    document.getElementById("text-area").value = data
}