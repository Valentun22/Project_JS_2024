const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

function fetchUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => userInfo(user))}

function userInfo(user) {
    const userProf = document.getElementById('userDetails');
    const infoOneDiv = document.createElement('div');

    infoOneDiv.classList.add('blockAllStyle', 'blockOne')
    infoOneDiv.innerHTML = `
           <h2>User</h2>
           <p>ID: ${user.id}</p>
           <p>Name: ${user.name}</p>
           <p>Username: ${user.username}</p>
           <p>email: ${user.email}</p>`;

    const infoTwoDiv = document.createElement('div');
    infoTwoDiv.classList.add('blockAllStyle')
    infoTwoDiv.innerHTML = `
           <h2>Address</h2>
           <p>Street: ${user.address.street}</p>
           <p>Suite: ${user.address.suite}</p>
           <p>City: ${user.address.city}</p>
           <p>Zipcode: ${user.address.zipcode}</p>
           <h2>Geolocation</h2>
           <p>Lat: ${user.address.geo.lat}</p>
           <p>Lng: ${user.address.geo.lng}</p>`;

    const infoThreeDiv = document.createElement('div');
    infoThreeDiv.classList.add('blockAllStyle')
    infoThreeDiv.innerHTML = `
           <h2>Contacts</h2>
           <p>Phone: ${user.phone}</p>
           <p>Website: ${user.website}</p>`;

    const infoFourDiv = document.createElement('div');
    infoFourDiv.classList.add('blockAllStyle')
    infoFourDiv.innerHTML = `
           <h2>Company</h2>
           <p>Name: ${user.company.name}</p>
           <p>CatchPhrase: ${user.company.catchPhrase}</p>
           <p>BS: ${user.company.bs}</p>`;

    const postsProfButton = document.createElement('button');
    postsProfButton.classList.add('buttonStyle')
    postsProfButton.textContent = 'Posts of Current User';
    postsProfButton.addEventListener('click', () => {
        postsUserClick(user.id);
    });

    userProf.append(infoOneDiv, infoTwoDiv, infoThreeDiv, infoFourDiv, postsProfButton);
}

function postsUserClick(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => userPosts(posts))
}
function userPosts(posts) {
    const userPostsOpenDiv = document.getElementById('userPosts');

    posts.forEach(post => {
        const postDivAll = document.createElement('div');
        postDivAll.classList.add('postBlockSize')
        postDivAll.innerHTML = `<p>Post: ${post.title}</p>`;

        const openButtonPost = document.createElement('button');
        openButtonPost.textContent = 'Details';
        openButtonPost.addEventListener('click', () => {
            window.location.href = `post-details.html?id=${post.id}`;
        });

        postDivAll.appendChild(openButtonPost);
        userPostsOpenDiv.appendChild(postDivAll);
    });
}
fetchUserDetails(userId);