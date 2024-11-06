function register(event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    // Save user info to localStorage
    const user = { username, email, password };
    localStorage.setItem("user_" + username, JSON.stringify(user));
    alert("Inscription réussie!");
    window.location.href = "login.html";
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem("user_" + username);

    if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.password === password) {
            localStorage.setItem('userToken', 'userLoggedIn');
            alert("Connexion réussie !");
            window.location.href = 'index.html';
        } else {
            alert("Mot de passe incorrect");
        }
    } else {
        alert("Nom d'utilisateur incorrect");
    }
}

function showNotification(message) {
    const notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.innerText = message;
    $('#notificationModal').modal('show');
}


// Currency Converter (for example purposes)
function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const exchangeRate = 0.31;
    const result = amount * exchangeRate;
    document.getElementById("result").innerText = `Equivalent USD: $${result.toFixed(2)}`;
}
