let addingButton = document.querySelector('button');
let num = 0; 

function buttonActions() {
    /* changing the color of the button and text inside: */
    addingButton.style.backgroundColor = '#550d07';
    addingButton.style.color = '#f2dfce'; 

    /* text created by clicking the button: */
    if (num == 0) {
        let addingInfo = document.createElement('p');
        addingInfo.innerHTML = "To add a resource to this website, please email " +
        "crystalsecaira@gmail.com with the following information: <br> " +
        "Category of the resource (Relocation, Emergency Grant, Non-Emergency Grant) <br>" +
        "Name of the resource <br> Link to the Resource <br> Other info (optional)"; 
        document.getElementById('buttonInfo').appendChild(addingInfo); 
        
        /* num becomes 1, so the p tag doesn't 
           get created more than once */ 
        num++; 
    }
}

addingButton.onclick = buttonActions; 