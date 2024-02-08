const email= document.getElementById("email")
const submit = document.getElementById("submit")
const pass = document.getElementById("password")
// ///////////
userEmail =localStorage.getItem("email")
userPass = localStorage.getItem("password")

submit.addEventListener('click' ,(e)=>{
e.preventDefault();

if(email.value != '' && pass.value != ''){
    localStorage.setItem('log' , 'true')
    if(email.value.trim() === userEmail && pass.value.trim() === userPass){
        setTimeout(()=>{
            location.assign("index.html")
        },1200)
    }else{
        alert("error password")
    }
}
})
