number = document.querySelectorAll('#number');
operators = document.querySelectorAll("#operator"); 
equals = document.querySelector("#equals");
functionText = document.querySelector("#functions")
result = document.querySelector("#result");
deleteAll = document.querySelector("#deleteAll");
deleteOne = document.querySelector("#delete");
plusminus = document.querySelector("#plusminus");
percentage = document.querySelector("#percentage");
float = document.querySelector("#float");
let valueOne = "0";
let valueTwo = ""
let operator = "";
number.forEach(num => {
    num.addEventListener('click', (e) => {
        if(valueOne === "0" || valueOne === "-0"){
            if(valueOne === "0"){
                valueOne = e.target.firstChild.nodeValue;
            }
            else if(valueOne === "-0"){
                valueOne = valueOne.replace(/0/, e.target.firstChild.nodeValue);
            }
           
            functionText.innerText = valueOne;
        }
        else if(valueOne !== "0" && operator === "") {
            valueOne += e.target.firstChild.nodeValue;
            functionText.innerText = valueOne;
        }
        else if(valueOne !== "0" && operator !== ""){
            
            if(valueTwo === ""){
                valueTwo = e.target.firstChild.nodeValue;
            }
            else {
                valueTwo += e.target.firstChild.nodeValue;
            }
            if(valueTwo[0] == "-"){
                functionText.innerText = valueOne + " " +operator +" " +"("+valueTwo+")";
            }
            else{
                functionText.innerText = valueOne + " " +operator +" " +valueTwo;
            }
            
        }
    })
})

operators.forEach(opert => {
    opert.addEventListener('click', (e) => {
        if(valueOne === "0"){
            return alert('Insert first a value');
        }
        else if(valueOne !== "0" && operator !== "" && valueTwo === ""){
            return alert('Add first a second value');
        }
        else if(valueOne !== "0" && operator !== "" && valueTwo !== ""){
            valueOne = operate(valueOne, valueTwo, operator);
            valueTwo = ""
            operator = e.target.firstChild.nodeValue;
            functionText.innerText = valueOne + " " +operator;
        }
        else if(valueOne !== "0"){
            operator = e.target.firstChild.nodeValue;
            functionText.innerText = valueOne + " " +operator;
        }
       
    })
})


operate = (x, y, op) => {
    if(op == "+") return Number(x) + Number(y);
    if(op == "-") return Number(x) - Number(y);
    if(op == "*") return Number(x) * Number(y);
    if(op == "/") return Number(x) / Number(y);
}

equals.addEventListener('click', () => {
    if(valueOne == "0" || operator == ""){
       return result.innerText = valueOne;
    }
    else if(valueOne !== "0" && operator !== "" && valueTwo == ""){
        return alert("Add a second value")
    }
    else{
        return result.innerText = operate(valueOne, valueTwo, operator);
    }
})

deleteAll.addEventListener('click', () => {
    valueOne = "0";
    valueTwo = "";
    operator = "";
    functionText.innerText = "0"
    result.innerText = "";
})

deleteOne.addEventListener('click', () => {
    if(valueTwo !== ""){
        if(valueTwo[0] == "-"){
            valueTwo = valueTwo.slice(0, -1);
            if(valueTwo == "" || (valueTwo.length == 1 && valueTwo[0] == "-")){
                valueTwo = "";
                functionText.innerText = valueOne + " " +operator;
            }
            else{
                functionText.innerText = valueOne + " " +operator +" " +"("+valueTwo+")";
            }
            
        }
        else {
            valueTwo = valueTwo.slice(0, -1);
            functionText.innerText = valueOne + " " +operator +" " +valueTwo;
        }
       
    }
    else if(valueOne !== "0" && operator !== ""){
        operator = "";
        functionText.innerText = valueOne;
    }
    else{
        if(valueOne == "0"){
            return functionText.innerText = valueOne
        }
        valueOne = valueOne.slice(0, -1);
        if(valueOne.length == 0) valueOne = "0";
        functionText.innerText = valueOne;
        
    }
})

plusminus.addEventListener('click', () => {
    if(valueTwo !== "" || operator !== ""){
        if(valueTwo[0] == "-"){
            valueTwo = valueTwo.slice(1);
            functionText.innerText = valueOne + " " +operator +" " +valueTwo;
        }
        else{
            valueTwo = valueTwo.replace(/^/, '-');
            functionText.innerText = valueOne + " " +operator +" " +"("+valueTwo+")";
        }
    }
    else{
        if(valueOne[0] == "-"){
            valueOne = valueOne.slice(1);
            functionText.innerText = valueOne;
        }
        else{
            valueOne = valueOne.replace(/^/, '-');
            functionText.innerText = valueOne;
        }
    }
})

percentage.addEventListener('click', () => {
    if(valueTwo !== ""){
        valueTwo = valueTwo/100;
        if(valueTwo[0] == "-"){
            functionText.innerText = valueOne + " " +operator +" " +"("+valueTwo+")";
        }
        else{
            functionText.innerText = valueOne + " " +operator +" " +valueTwo;
        }
    }
    else if(operator !== "") {
        alert("Can't add % an operator");
    }
    else  {
        valueOne = valueOne/100;
        functionText.innerText = valueOne + " " +operator +" " +valueTwo;
    }
})

float.addEventListener('click', () => {
    if(valueTwo !== ""){
        valueTwo += ".";
        if(valueTwo[0] == "-"){
            functionText.innerText = valueOne + " " +operator +" " +"("+valueTwo+")";
        }
        else{
            functionText.innerText = valueOne + " " +operator +" " +valueTwo;
        }
    }
    else if(operator !== "") {
        alert("Can't add % an operator");
    }
    else  {
        valueOne += ".";
        functionText.innerText = valueOne + " " +operator +" " +valueTwo;
    }
})