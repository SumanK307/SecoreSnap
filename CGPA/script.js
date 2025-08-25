function generateInputs() {
    let numSemesters = parseInt(document.getElementById("numSemesters").value);
    let inputContainer = document.getElementById("input-container");
    inputContainer.innerHTML = "";
    
    if (!isNaN(numSemesters) && numSemesters >= 1 && numSemesters <= 10) {
        for (let i = 0; i < numSemesters; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.className = "sgpa";
            input.placeholder = "Enter SGPA of Semester " + (i + 1);
            input.min = "0";
            input.max = "10";
            inputContainer.appendChild(input);
        }
    }
}

function calculateCGPA() {
    let sgpaElements = document.querySelectorAll(".sgpa");
    let totalSGPA = 0;
    let count = 0;

    sgpaElements.forEach(input => {
        let value = parseFloat(input.value);
        if (!isNaN(value) && value >= 0 && value <= 10) {
            totalSGPA += value;
            count++;
        }
    });

    if (count > 0) {
        let cgpa = (totalSGPA / count).toFixed(2);
        document.getElementById("result").innerText = "Congratulation Your CGPA is: " + cgpa;
    } else {
        document.getElementById("result").innerText = "Please enter valid SGPA values.";
    }
}