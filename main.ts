import inquirer  from "inquirer";
let toDo: any = [];

let condition = true;

while(condition === true){
let option = await inquirer.prompt
([{
    name:'yourOption',
    type:'list',
    message:'select an option',
    choices:['ADD','REMOVE']
}])

// add option
if(option.yourOption === "ADD")

{let toDoQuestion = await inquirer.prompt([
    {

name: 'q1',
type: 'input',
message:'what would you like to add in your toDo?',

    }])

    if (toDoQuestion.q1 !== ''){
        toDo.push(toDoQuestion.q1);
        console.log(toDo);
    }else {console.log('please write something to add in the toDo ')

    }
}
// if REMOVE option selected
else if(option.yourOption === "REMOVE"){
    let removeChoice = await inquirer.prompt([{
        name:'removeItem',
        type:'list',
        message:'Select item to REMOVE',
        choices: "toDo"
    }]);
    let removeIndex =toDo.indexof(removeChoice.removeItem);
    if(removeIndex >= 0){
        toDo.splice(removeIndex, 1);
        console.log('you removed :', removeChoice.removeItem);
        console.log(toDo);
    }
}
// confirmation
let confirmation = await inquirer.prompt([
{
    name:'q2',
    type:'confirm',
    message:'Do you like to continue more?',
    default:'yes'
}
]);

if(confirmation.q2 === false){
    condition = false;

}
}
console.log('Thank you for using toDo');