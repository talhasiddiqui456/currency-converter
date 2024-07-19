import inquirer from "inquirer"

// define the list of currencies and their exchanfe rates
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "jyp": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
}



//let user_answer = await inquirer.prompt ([
  //  {
    //    name: "from_currency",
     //   type: " list",
     //   message: "select the currency to convert following" 
     //choice ["USD","EUR","JYP","CAD","AUD", "PKR", ]

    //},
    {
        name: "TO_currency"
        type: "list"
        message: "select the currency to convert into:"
        choices: ["USD","EUR","JYP","CAD","AUD", "PKR", ]
    },
    {
        name: "amount"
        type : " input"
        message: " enter the amount to convert"
    }
//])

let  from_amount = exchange_rate[user_answer.from_currency]
let to_amount =  exchange_rate[user_answer.TO_currency]
let amount =useer_answer.amount





let base_amont = amount / from_amount
let converted_amount = base_amount *to_amount

console.log(`converted Amount = ${converted_amount}`);



