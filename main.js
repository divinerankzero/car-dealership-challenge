import data from './data.js'

// Total profit for 2017

const totalProfits = data.reduce((acc, cv) => acc + cv, 0);

// data.forEach(vehicle =>{
//     vehicle.gross_profit
// })


// In which month did they sell the most cars?
// Which salesperson sold the most cars?
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?
// In which month did zero cars get sold?