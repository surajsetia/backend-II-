let usercontainer = document.querySelector(".user-container");

function getUsersData(URL) {
    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach((user) => {
                displayUser(user);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

function displayUser(user) {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="user-info">
            <h1>${user.name}</h1>
            <p>${user.username}</p>
        </div>
        <div class="user-btn">
            <button class="user-delete">❌</button>
            <button class="user-edit">✏️</button>
        </div>
    `;
    usercontainer.appendChild(li);
}

// getUsersData("https://jsonplaceholder.typicode.com/users");
getUsersData("http://localhost:4444/users");
