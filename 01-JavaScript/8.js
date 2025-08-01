// let expenses = [
//     { description: "Groceries", amount:50, category:"Food"},
//     { description: "Electricity Bill", amount: 100, category:"utilities"},
//     { description: "Dinner", amount: 30,category:"Food"},
//     { description: "Internet Bill",amount:50,category:"utilities"},
// ];

// let expenseReport =expenses.reduce(
//     (report,expense)=>{
//     report[expense.category]+= expense.amount;
//     return report;
// }, 
// {Food: 0,Utilities:0});
// console.log("Expense Report", expenseReport);






// //give task that are not complete and sort them 


// let tasks= [
//     { description:"Write report",completed:false,priority:2},
//     { description:"Send email",completed:true,priority:3},
//     { description:"Prepare presentation",completed:false,priority:1},

// ];
// let pendingSortedtask = tasks
// .filter((task)=>!task.completed)
// .sort((a,b)=>a.priority-b.priority)
// console.log(pendingSortedtask);




//Avg rating of movie

// let movieRating =[
//     {title:"Movie A",rating:[4,5,3]},
//     {title:"Movie B",rating:[5,5,4]},
//     {title:"Movie C",rating:[3,4,2]},
// ];

// let averageRatings = movieRating.map((movie)=>{
//     let total = movie.rating.reduce((sum,ratings)=>sum+ratings,0)
//     let average = total / movie.rating.length
//     return {title:movie.title, averageRatings:average.toFixed(2)}
// });
// console.log(averageRatings);
// console.log(movieRating);


