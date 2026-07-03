document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.parentNode);
    if(e.target.tagName==='IMG'){ 
    let removeIt=e.target.parentNode;
    removeIt.parentNode.removeChild(removeIt);
    }
});