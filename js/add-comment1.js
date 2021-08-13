//click button handler 
document.getElementById('submit-button').addEventListener('click',function(){
    //2. Get user comment
    const commentBox= document.getElementById('new-comment');
    const userComment= commentBox.value;
    

    //3. creating new paragraph
    const newComment = document.createElement('p');
    newComment.innerText=userComment;
    

    //4. Append to new child
    const commentContainer = document.getElementById('comment-container') ;
    commentContainer.appendChild(newComment);

    //Clear text
    commentBox.value = '';


})