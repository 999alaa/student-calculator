function showSection(sectionId) {

    let calculator = document.getElementById("calculator");
    let grades = document.getElementById("grades");

    calculator.classList.add("hidden");
    grades.classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");
}


function addToDisplay(value) {

    document.getElementById("display").value += value;
}


function clearDisplay() {

    document.getElementById("display").value = "";
}


function deleteLast() {

    let display = document.getElementById("display").value;

    document.getElementById("display").value =
        display.slice(0, display.length - 1);
}


function calculate() {

    let expression = document.getElementById("display").value;

    if (expression === "") {
        return;
    }

    try {
        document.getElementById("display").value = eval(expression);
    }

    catch (error) {
        document.getElementById("display").value = "Error";
    }
}


function calculateGrades() {

    let studentName =
        document.getElementById("studentName").value;

    let grade1 =
        Number(document.getElementById("grade1").value);

    let grade2 =
        Number(document.getElementById("grade2").value);

    let grade3 =
        Number(document.getElementById("grade3").value);


    if (studentName === "") {

        alert("Please enter student name");
        return;
    }


    let grades = [grade1, grade2, grade3];

    let total = 0;


    for (let i = 0; i < grades.length; i++) {

        total += grades[i];
    }


    let average = total / grades.length;

    let grade;

    let status;


    if (average >= 90) {

        grade = "A";

    } else if (average >= 80) {

        grade = "B";

    } else if (average >= 70) {

        grade = "C";

    } else if (average >= 60) {

        grade = "D";

    } else {

        grade = "F";
    }


    if (average >= 60) {

        status = "Passed";

    } else {

        status = "Failed";
    }


    document.getElementById("result").innerHTML =

        "<h3>Student: " + studentName + "</h3>" +
        "<p>Total: " + total + "</p>" +
        "<p>Average: " + average.toFixed(2) + "</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Status: " + status + "</p>";
}
