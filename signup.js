let Firstname = document.querySelector(".Firstname")
let LastName = document.querySelector(".LastName")
let userEmail = document.querySelector(".email")

let Password = document.querySelector(".Password")

let Confirmpassword = document.querySelector(".Confirmpassword")

let submitbtn = document.querySelector(".signbtn")

let Passwordalat = document.querySelector(".Passwordalat")



submitbtn.addEventListener("click",(e)=>{
    e.preventDefault()

    // alert("hello")

    if(Firstname.value && LastName.value && userEmail.value && Password.value && Confirmpassword.value) {
        if(Password.value == Confirmpassword.value) {
        fetch("http://localhost:3000/users", {
            method: 'POST',
            body: JSON.stringify({
                Firstname: `${Firstname.value}`,
                LastName: `${LastName.value}`,
                Email: `${userEmail.value}`,
                Password: `${Password.value}`,
                Confirmpassword: `${Confirmpassword.value}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);



        })
        .catch(err => console.log(err))
    }
    else{

        Passwordalat.innerText = "please enter the Correct password"
       
        setTimeout(() => {
            Passwordalat.innerText = ""
        }, 1000);
    }
        }



    }
}