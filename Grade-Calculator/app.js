function calculate() {

    const sub1 = parseFloat(document.getElementById("sub1").value);
    const sub2 = parseFloat(document.getElementById("sub2").value);
    const sub3 = parseFloat(document.getElementById("sub3").value);
    const sub4 = parseFloat(document.getElementById("sub4").value);
    const sub5 = parseFloat(document.getElementById("sub5").value);
    const sub6 = parseFloat(document.getElementById("sub6").value);

    const total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
    const average = total / 6;

    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `Total: ${total}<br>Grade: ${grade}`;
}