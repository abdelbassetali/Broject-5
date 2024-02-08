const first =document.getElementById("first-name")
const last =document.getElementById("last-name")
const submit =document.getElementById("submit")
const email =document.getElementById("email")
const password =document.getElementById("password")
// ////////////بعرف الاول


submit.addEventListener("click" , (e)=>{
    e.preventDefault();

    if(first.value !='' && last.value !='' && email.value !='' && password.value !=''){
        localStorage.setItem("first", first.value.trim());
        localStorage.setItem('last', last.value.trim());
        localStorage.setItem('password' , password.value.trim());
        localStorage.setItem('email', email.value.trim());

        setTimeout(()=>{
         location.assign('login.html')
        },800)
    }
})
/////////////  هعمل ادخال للقيمة من خلال سيت فى الوكال ستورج بعدين هديله وقت ويحولنى لصفحة الا 
// html 
