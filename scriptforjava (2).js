function changeText() {
    document.getElementById("demo").innerHTML = "📸";
}

function doubleNumber() {
    
    var number = document.getElementById('numberInput').value;

    
    var doubled = multiplyByTwo(number);

    
    document.getElementById('result').innerText = 'Doubled: ' + doubled;
}

function halveNumber() {
    
    var number = document.getElementById('numberInput').value;

    
    var halved = divideByTwo(number);
    
    document.getElementById('result').innerText = 'Halved: ' + halved;
}

function multiplyByTwo(num) {
    return num * 2;
}

function multiplyByTriple(num) {
  return num * 3;
}

function divideByTwo(num) {
    return num / 2;
}
