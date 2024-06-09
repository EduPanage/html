let comments = [];

function displayComments() {
  const commentsContainer = document.getElementById('comentarios-container');
  commentsContainer.innerHTML = '';

  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const commentHeaderElement = document.createElement('div');
    commentHeaderElement.classList.add('comment-header');
    commentHeaderElement.textContent = comment.name;

    const commentTextElement = document.createElement('div');
    commentTextElement.classList.add('comment-text');
    commentTextElement.textContent = comment.text;

    commentElement.appendChild(commentHeaderElement);
    commentElement.appendChild(commentTextElement);

    commentsContainer.appendChild(commentElement);
  });
}






