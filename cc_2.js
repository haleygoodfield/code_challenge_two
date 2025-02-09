// Task 1 - Working with Arrays
// Declare an array products using let and initialize it with at least five product names.
let products = ["Shampoo", "Lotion", "Perfume", "Conditioner", "Body Wash"];

// Add a new product to the end of the array.
products.push("Face Wash");

// Remove the last product from the array.
products.pop();

// Log the updated product list to the console.
console.log("Updated Product List :", products)



// Task 2 - Accessing and Modifying Arrays 
// Declare an array scores with at least five numerical values.
let scores = [93, 45, 88, 89, 97];

// Update the second score in the array.
scores[1]= 90;

// Log the updated array to the console.
console.log("Updated Student Scores :", scores);

// Calculate the average of all scores. 
let sum = scores.reduce((a,b) => a + b, 0);
let average = sum / scores.length; 

//Log the average score to the console.
console.log("Average of Student Scores :", average);



// Task 3 - Working with Objects
// Declare an object employee with properties: name, age, department, and isActive.
let employee = { 
    name: "Debby Smith ",
    age: 46,
    department: "Manufacturing",
    isActive: true 
};

// Update the department property.
employee.department = "Electronics";

// Add a new property position to the object.
employee.position = "IT Manager";

// Log the updated object to the console.
console.log("Updated Employee Informatiom :", employee);



// Task 4 - Array of Objects 
// Declare an array customers containing at least three objects, each with name, email, and purchaseAmount properties.
let customers = [
    { name: "Kanye West", email: "ye@email.com", purchaseAmount: "$ 360"},
    { name: "Kim Kardashian", email: "kimberlyk@email.com", purchaseAmount: "$ 500"},
    { name: "Joe Dyllan", email: "jdyllan231@email.com", purchaseAmount: "$ 120"}
];

// Add a new customer object to the array.
customers.push({ name: "Katie Boss", email: "girlboss@email.com", purchaseAmount: "$ 435"})

// Log the entire customer list to the console.
console.log("Customer Record List :", customers);


// Task 5 - Object Methods
// Declare an object order with properties: orderId, customerName, and amount.\
let order = {
    orderID: 77,
    customerName: "Mr. Timothee",
    amount: 150.00,

    // Add a method calculateTax that returns the tax amount (assume 10% tax rate).
    calculateTax: function() {
        const taxRate = 0.10;
        return this.amount * taxRate;
    }
};
// Log the order details and tax amount to the console.
console.log("Order Details :", order);
console.log("Tax Ammount :", order.calculateTax());

// Coding challenge 2 is Complete! 















