// Actually querySelector all method returns a nodeList ,which is an array like object, each item
//has index number, and also the list itself has a length property. So actually we have to look
//through each button and attach to each of them an event listener, with the click event. In order
//to loop through the list i'm going to use one of the array helper methods called forEach. It allows
//us to execute a function for each item separately.
 
const storyBtn=document.querySelectorAll(".story-btn")

storyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("change");
        //Actually the story is the sibling of the button, so i'm going to use one of the 
        //properties called nextElementSibling.
        btn.nextElementSibling.classList.toggle("change");
    }) 
})