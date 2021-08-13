//Adding comment handler

document.getElementById('submit-button').addEventListener('click',function(){
    //Getting the comment from input
    const commentBox = document.getElementById('new-comment');
    const userComment = commentBox.value;

    //Creating a new element
    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    //Appending the value 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.append(newComment);

    // Cleaning the text area 
    commentBox.value ='';
    


})