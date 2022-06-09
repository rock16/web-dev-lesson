function printEven(){
    // print all even numbers upto 12
    console.log(0)
    console.log(2)
    console.log(4)
    console.log(6)
    console.log(8)
    console.log(10)
    console.log(12)
}


function useWhile(){
    let counter = 0;

    while(counter <= 12){
        console.log(counter)
        counter += 2;
    }
}

function useFor(){
    for(let i=0; i<=12; i+=2){
        console.log(i)
    }
}

// print all numbers from zero to 15
function fn(){
    let result = 0
    while(result <= 15){
        console.log(result)
        result += 1
    }
}
// 2 ^ 3 = 2 x 2 x 2
// find 2 to the power of 10
function powerOfTwo(){
    let result = 1;
    let counter = 0;
    let power = // ask user for number
    // change from string to number 
    while (counter < power){
        // keep multiplying by 2
        result = result * 2
        // keep track of the number of times we multiply by two
        counter = counter + 1
    }

    alert("2 to the power of " + power + " is " + result)
}

// simulate a game situation with until we hit exit
function playGame(){
    let userInput = ""
    while(true){
        userInput = prompt("Enter any character(s) to continue playing or exit to leave: ")
        if(userInput == "exit"){
            alert("Exiting ......")
            break
        }
    }
}

function playGame2(){
    let userInput = ""
    do {
        userInput = prompt("Enter any character(s) to continue playing or exit to leave: ")
    } while (userInput);
}

function printTree(){
    for(let i=0; i<=10; i+=2){
        console.log(i)
    }
}

function divideByFive(){
    for(let i=0; i<=10; i++){
        if(i%3 == 0){
            console.log(i)
        }
    }
}

function loopOverMyName(){
    let name = prompt("Enter your name: ")
    console.log(name[3])

    // for(let i = 0; i<name.length; i++){
    //     console.log(name[i])
    // }
}