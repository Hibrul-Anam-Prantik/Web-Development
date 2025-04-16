// // action.js

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault(); // prevent actual form submission

//         const username = form.querySelector('input[type="text"]').value;
//         const password = form.querySelector('input[type="password"]').value;
//         const actionChoice = form.querySelector('input[name="toDo"]:checked')?.value;

//         const courses = Array.from(form.querySelectorAll('input[name="course"]:checked'))
//                              .map(input => input.value);

//         const otherCourse = form.querySelector('input[name="other"]').value;
//         if (otherCourse) courses.push(otherCourse);

//         const city = form.querySelector('select[name="city"]').value;
//         const feedback = form.querySelector('textarea[name="feedback"]').value;

//         // Logging info
//         console.log("Username:", username);
//         console.log("Password:", password);
//         console.log("Action:", actionChoice);
//         console.log("Selected Courses:", courses);
//         console.log("City:", city);
//         console.log("Feedback:", feedback);

//         // Simple alert for UI feedback
//         alert("Form submitted successfully! Check the console for details.");
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        const actionChoice = form.querySelector('input[name="toDo"]:checked')?.value;

        const courses = Array.from(form.querySelectorAll('input[name="course"]:checked'))
                             .map(input => input.value);
        const otherCourse = form.querySelector('input[name="other"]').value;
        if (otherCourse) courses.push(otherCourse);

        const city = form.querySelector('select[name="city"]').value;
        const feedback = form.querySelector('textarea[name="feedback"]').value;

        const output = `
            <h3>Form Submission:</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p><strong>Action:</strong> ${actionChoice}</p>
            <p><strong>Courses:</strong> ${courses.join(", ")}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Feedback:</strong> ${feedback}</p>
        `;

        const resultBox = document.getElementById("result");
        resultBox.innerHTML = output;
    });
});
