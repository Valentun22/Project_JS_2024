const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

function fetchPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => displayPostInfo(post))
}

function displayPostInfo(post) {
    const postInfoDiv = document.getElementById('postInfo');
    postInfoDiv.innerHTML = `
            <p>Post ID: ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>`;
    fetchComments(post.id);
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => displayComments(comments))
}

function displayComments(comments) {
    const commentsDiv = document.getElementById('comments');
    comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.classList.add('commentBlockSize')
        commentBlock.innerHTML = `
              <p class="stylID">ID: ${comment.id}</p>
              <p>Text: ${comment.name}</p>
              <p>Email: ${comment.email}</p>
              <p>Body: ${comment.body}</p>`;
        commentsDiv.appendChild(commentBlock);
    });
}
fetchPostDetails(postId);

