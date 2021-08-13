//1. Add Event Button handler 
document.getElementById('submit-comment').addEventListener('click',function(){
    //2. get user comment 
    const commentBox= document.getElementById('new-comment');
    const userComment = commentBox.value;

    //3. Creating new paragraph 
    const newComment=document.createElement('p');
    newComment.innerText= userComment;

    //4. Append the comment 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    //5. Clear the text area 
    commentBox.value = '';

})