const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

let users = [];

// LOAD USERS
function loadUsers() {

    userList.innerHTML = "";

    users.forEach((user, index) => {

        userList.innerHTML += `
        
        <div class="userCard">

            <div class="userInfo">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>

            <button class="deleteBtn" onclick="deleteUser(${index})">
                Delete
            </button>

        </div>
        `;
    });
}

// ADD USER
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = {
        name,
        email
    };

    users.push(user);

    loadUsers();

    form.reset();
});

// DELETE USER
function deleteUser(index) {

    users.splice(index, 1);

    loadUsers();
}

