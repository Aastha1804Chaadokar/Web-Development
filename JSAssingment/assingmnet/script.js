console.log("hello");

// 1.Print numbers from 1 to 5 using a for loop.
for(let i=1 ; i<=5 ; i++)
{
    console.log(i);
}
// 2.Print numbers from 1 to 10 using a for loop.
for(let i=1 ; i<=10 ; i++)
{
    console.log(i);
}
// 3.Print numbers from 10 to 1 (reverse counting). 
for(let i=10 ; i>=1 ; i--)
{
    console.log(i);
}

// 4.Print even numbers from 2 to 10. 
for(let i=2 ; i<=10 ; i+=2)
{
    if(i%2==0)
    {
    console.log(i);
    }
}
// 5.Print odd numbers from 1 to 9. 
for(let i=1 ; i<=9 ; i+=2)
{
     if(i%2!=0)
    {
    console.log(i);
    }
}
// 6.Print the table of 15 up to 10 steps. 
for(let i=1 ; i<=10 ; i++)
{
    console.log(15 + "*" + i + "=" +(15*i));
}
// 7.Print numbers from 1 to 20 with increment of 2. 
for(let i=1 ; i<=20 ; i+=2)
{
    console.log(i);
}
// 8.Print numbers from 5 to 50 with increment of 5. 
for(let i=5 ; i<=50 ; i+=5)
{
    console.log(i);
}
// 9.Create a loop and print the square of numbers
// from 1 to 10.

for(let i=1 ; i<=10 ; i++)
{
    console.log(i + "*" + i + "=" + (i*i));
}
// 10. Print numbers from 1 to 10 that are divisible
// by 3. 

for(let i=1 ; i<=10 ; i++)
{
    if(i%3==0)
    {
        console.log(i);
    }
}


// while loop questions

// 1.Write a program to print numbers from 1 to 5
// using a while loop.
let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}
// 2.Write a program to print numbers from 5 to 1
// using a while loop.
let j=5;
while(j>=1)
{
    console.log(j);
    j--;
}
// 3.Write a program to print numbers starting
// from 2 and keep adding 2 while the number
// becomes less than 11
let k=2;
while(k<=10)
{
    console.log(k);
    k+=2;
}
// 4.Write a program to calculate the sum of
// numbers from 10 to 5 using a while loop.

let sum = 0;
let l=10;
while(l>=5)
{
    sum = sum+l;
    l--;

}
console.log(sum);

// 5.Create a while loop and explain the role of
// initialization, condition, and increment in it.

let y = 1;          
while (y <= 5) {    
    console.log(y); 
    y++;           
}

// 6.Write a loop and trace its execution step-bystep (initialization → condition → work →
// update → repeat).

let x = 1;
while (x <= 3) {
    console.log(x);
    x++;
}
// 7.Create a loop where the condition is false at
// the beginning and explain what happens.

let a = 10;

while (a < 5) {
    console.log(a);
    a++;
}

// 8.Write a loop and explain what happens if the
// variable is not updated inside the loop.

let p = 1;

while (p <= 5) {
    console.log(p);
    
}

// 9.Create a loop and explain when and why it becomes an infinite loop.

let h = 1;

while (h <= 5) {
    console.log(h);
}

// 10. Write a loop and explain how the condition controls the stopping of the loop.

let b = 1;

while (b <= 3) {
    console.log(b);
    b++;
}

// 11. Create a loop and explain how changing increment to decrement affects the execution.

let q = 1;

while (q <= 5) {
    console.log(q);
}

// 12. Write a loop and explain how many times it will run based on the condition

let r = 1;

while (r <= 4) {
    console.log(r);
    r++;
}