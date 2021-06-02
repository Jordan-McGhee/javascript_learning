/*

Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

1.
The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind.

2.Write a comment above that explains this line of code.

3. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

4. Write a comment above that explains this line of code.

5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
Fahrenheit = Celsius * (9/5) + 32
In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

6. Write a comment above that explains this line of code.

7. When you convert from Celsius to Fahrenheit, you often get a decimal number.
Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

8. Write a comment above that explains this line of code.

9. Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
    The temperature is TEMPERATURE degrees Fahrenheit.
Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

10. Run your program to see your results!
If you want to check your work, open the hint.

11. By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.
What’s 0 Kelvin in Fahrenheit?

12. Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.
If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console
*/

// create constant variable to keep track of kelvin
const kelvin = 0

// create celsius variable by subtracting 273 from kelvin
const celsius = kelvin-273

// created fahrenheit variable
let fahrenheit = celsius * (9/5) + 32

// updated fahrenheit variable to be rounded down
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

const newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees newton`)

/*

Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

1. Create a variable named myAge, and set it equal to your age as a number.
Write a comment that explains this line of code.

2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
Write a comment that explains this line of code.

3.
Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.

4.
Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
Set the result equal to a variable called laterYears. We’ll be changing this value later.
Write a comment that explains this line of code.

5.
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.

Write a comment that explains this line of code.

6.
If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?

7.
Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
Write a comment that explains this line of code.

8.
Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
The toLowerCase method returns a string with all lowercase letters.
Write a comment that explains this line of code.

9.
Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.
Write a comment that explains this line of code.

10.
Great work! You can convert any human age to dog years. Try changing myAge and see what happens.
If you’d like extra practice, try writing this project without the *= operator.

*/

// my age changes, so I create it with let
let myAge = 26;

// since this variable will change, I used let
let earlyYears = 2

earlyYears *= 10.5

// used let to set laterYears to my current age - 2
let laterYears = (myAge - 2)

// used times equals operator to update laterYears
laterYears *= 4

console.log(earlyYears, laterYears)

// created new variable with early and later years added together
let myAgeInDogYears = earlyYears + laterYears 

// created my name as a variable and used lowercase method
let myName = "Jordan".toLowerCase()

// Used interpolation to plug my vars into a string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)