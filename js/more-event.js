document.getElementById('delete-button').addEventListener('click',function(){
    document.getElementById('secret-thing').style.display ='none';
})
document.getElementById('delete-input').addEventListener('focus',function(){
    document.body.style.backgroundColor = 'red';})
document.getElementById('delete-input').addEventListener('blur',function(){
    document.body.style.backgroundColor = 'yellow';
})
// document.getElementById('delete-input').addEventListener('keydown',function(){
//     console.log('keydown');
// })

document.getElementById('delete-input').addEventListener('keyup',function(event){
    const deleteButton = document.getElementById('delete-button');
    if(event.target.value == 'delete'){
        deleteButton.removeAttribute('disabled');
    }else{
        deleteButton.setAttribute('disabled',true);
    }
})