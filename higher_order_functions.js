// higher order functions - map, filter, reduce

const students = [
    { name: "Rahim", marks: 85 },
    { name: "Karim", marks: 42 },
    { name: "Jamal", marks: 73 },
    { name: "Sumon", marks: 91 },
    { name: "Ratan", marks: 55 },
    { name: "Fahim", marks: 38 }
];

// filter - students who passed (marks >= 50)
const passed = students.filter(s => s.marks >= 50);
console.log("Passed:", passed.map(s => s.name));

// map - get only names
const names = students.map(s => s.name);
console.log("All names:", names);

// reduce - total marks
const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("Total marks:", totalMarks);
console.log("Average:", (totalMarks / students.length).toFixed(2));

// find - first student with marks > 80
const topper = students.find(s => s.marks > 80);
console.log("First topper:", topper.name, topper.marks);

// sort by marks descending
const ranked = [...students].sort((a, b) => b.marks - a.marks);
console.log("Rank list:");
ranked.forEach((s, i) => console.log("  " + (i+1) + ". " + s.name + " - " + s.marks));
