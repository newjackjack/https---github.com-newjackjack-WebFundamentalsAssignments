function hasClicked(element){
    if(element.innerText === "Login"){//conditionto check the current text of login button
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}
