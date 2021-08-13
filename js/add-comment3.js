//Adding button handler
document.getElementById('submit-button').addEventListener('click',function(){
    //getting the comment
    const commentBox = document.getElementById('new-comment');
    const userComment = commentBox.value;

    //Creating a new paragraph
    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    //Appending the element 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    //Cleaning the comment box 
    commentBox.value = '';

})