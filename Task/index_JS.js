function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => userBlockIndex(users))
}
function userBlockIndex(users) {
    const pageUserDiv = document.getElementById('blockOne');
    users.forEach(user => {

        const blockUser = document.createElement('div');
        blockUser.classList.add('userBlockSize')
        blockUser.innerHTML = `
            <p>ID: ${user.id}</p>
            <h3>Name: ${user.name}</h3>
        `;

        const infoButton = document.createElement('button');
        infoButton.classList.add('infoButtonStyle')
        infoButton.textContent = 'Детальніше';
        infoButton.addEventListener('click', () => {
            window.location.href = `user-details.html?id=${user.id}`;
        });

        blockUser.appendChild(infoButton);
        pageUserDiv.appendChild(blockUser);
    });
}
fetchUsers();