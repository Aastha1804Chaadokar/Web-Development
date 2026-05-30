// [
//   {
//     "name": "Aarav Sharma",
//     "place": "Delhi, India",
//     "phone": "+91-9876543210",
//     "profession": "Software Engineer",
//     "date_of_birth": "1998-05-12"
//   },
//   {
//     "name": "Sneha Patil",
//     "place": "Pune, Maharashtra",
//     "phone": "+91-9123456780",
//     "profession": "Data Analyst",
//     "date_of_birth": "1996-11-23"
//   },
//   {
//     "name": "Rahul Verma",
//     "place": "Bhopal, Madhya Pradesh",
//     "phone": "+91-9988776655",
//     "profession": "Mechanical Engineer",
//     "date_of_birth": "1995-07-08"
//   },
//   {
//     "name": "Priya Nair",
//     "place": "Kochi, Kerala",
//     "phone": "+91-9012345678",
//     "profession": "Doctor",
//     "date_of_birth": "1994-02-17"
//   },
//   {
//     "name": "Karan Mehta",
//     "place": "Ahmedabad, Gujarat",
//     "phone": "+91-9090909090",
//     "profession": "Entrepreneur",
//     "date_of_birth": "1997-09-30"
//   }
// ]
// FDdata.forEach((e) => console.log(e));
// FDdata.forEach((e) => console.log(e["phone"]));
// FDdata.forEach((e) => console.log(e["name"]));

// console.log(FDdata);
// console.log(FDdata[1].name); //dot notation
// console.log(FDdata[2]["name"]); //bracket notation

let vishal={
    "name": "Aarav Sharma",
    "place": "Delhi, India",
    "phone": "+91-9876543210",
    "profession": "Software Engineer",
    "date_of_birth": "1998-05-12"
};

console.log(Object.keys(vishal));
console.log(Object.values(vishal));
console.log(Object.keys(FDdata));

let ar = [5, 8, 92, 656, 7878, 4, 5, 7, 54, 55];
ar.sort((a, b) => a - b);
console.log(ar);

console.log(ar.find((val) => val === 8));
console.log(ar.findIndex((val) => val === 8));
console.log(ar.findLastIndex((val) => val === 8));

let ar2 = [5, 8, 92, 656, 7878, 4, 5, 7, 54, 55];
console.log(ar2.filter((val) => val > 20));
console.log(ar2.find ((val) => val > 20));
console.log(ar2.slice(0,7));
let ab = "this is a web -Developer goodbye last words"
console.log(ab.split(" "));
console.log(ab.split("-"));

