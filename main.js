document.getElementById('login-submit').addEventListener('click',function(){
    const emailfield=document.getElementById('user_email');
    const userEmail=emailfield.value;
    console.log(userEmail)
    //get user password
    const passwordFiled=document.getElementById('user-password');
    const userpass=passwordFiled.value;
   //lame example
   if( userEmail=='chakrabortyshuva216@gmail.com' && userpass=='lkmf'){
       
   }
   document.getElementById("login-submit").onclick = function () {
       location.href = "banking.html";
   };

       })
  