const input =document.getElementById('input')

function addingEventListener(click) {
    input.addEventListener(click,function(){alert('I was clicked!');})
    
}
addingEventListener('click') 
