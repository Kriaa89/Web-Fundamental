// clicking either button will remove the user from the request list
// steps:
// 


// click on the edit icon to check if it works or no 
function changeUserName(item){
    document.querySelector(item).innerHTML = "abdallah yessine kriaa"
}


// function to increase by 1
function accept(id){
    var element = document.querySelector(id);
    element.remove();
    var requestCount = document.querySelector('.badge');
    requestCount.innerHTML ++;
}

// function to decrease by 1
function dlete(id){
    var element = document.querySelector(id);
    element.remove();
    var requestCount = document.querySelector('.badge');
    requestCount.innerHTML --;
}
