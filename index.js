let btn=document.querySelector("#btn");
btn.setAttribute("style",
`background-color:red;
color:white;
width:150px;
height:40px;
border-radius:10px;
border:none;
cursor:pointer;`)
let lUrl=document.querySelector("#linkedinUrl");
lUrl.setAttribute("style",
`color:blue;
text-decoration:underline;
font-size:20px;
margin:5px;`)
lUrl.setAttribute("href","https://www.linkedin.com/in/mertfaikcigdem/")
let gUrl=document.querySelector("#githubUrl");
gUrl.setAttribute("style",
`color:blue;
text-decoration:underline;
font-size:20px;
margin:5px;`)
gUrl.setAttribute("href","https://github.com/mertfaikcigdem")

let nameSurnameDOM=document.querySelector("#nameSurname");
let ageDOM=document.querySelector("#age");
let nameSurname="Mert Faik Çiğdem";
let age=21;

function info(){
    nameSurnameDOM.innerHTML=nameSurname;
    ageDOM.innerHTML=age;
    btn.remove();
}
