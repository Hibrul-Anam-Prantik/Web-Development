console.log("Login Page Connected!");

// event-handler(the things that are being done after clicking any button)
document.getElementById("btn-submit").addEventListener("click", function(){
    // Access UserName
    const userNameField = document.getElementById("user-name");
    console.log(userNameField);
    const userName = userNameField.value;
    console.log(userName);

    // Access Password
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    console.log(password);

    if(userName === "admin" && password === "admin") {
        console.log("valid user");
        window.location.href = "Bank.html";
    } else {
        console.log("Invalid User");
            alert("Incorrect Username or Password");
    }
});