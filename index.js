// Your code goes here
document.addEventListener('DOMContentLoaded', function (e){
    const p = document.getElementById('text')
    const newP = document.createElement('p');
    newP.textContent = "This is really cool!";
    e = p.parentNode.replaceChild(newP, p)
})