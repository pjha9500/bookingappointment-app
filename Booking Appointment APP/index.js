console.log("hello");
let data=document.getElementById('formbox');
console.log(data);


class datas
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
}



data.addEventListener('submit',xyz);
function xyz(e)
{
    e.preventDefault();
    
    console.log(document.getElementById('email').value,document.getElementById('name').value);
    let data=new datas(document.getElementById('name').value,document.getElementById('email').value);
        localStorage.setItem(`userDetails${document.getElementById('email').value}`,JSON.stringify(data));
        location.reload();
}


const keys=Object.keys(localStorage);
let datalength=keys.length;

while(datalength--)
{
let obj= JSON.parse(localStorage.getItem(keys[datalength]));
let data=document.createElement('li');
let button=document.createElement('button');
button.className="delete";

data.innerHTML=`<li> ${obj.email}----${obj.name}--<button class ="delete" onclick=deletes('${keys[datalength]}')>Delete</button> -<button class ="edit" onclick=edit('${keys[datalength]}')>Edit</button></li>`
document.getElementById('showdata').appendChild(data);
}

function deletes(data)
{
    console.log(localStorage.getItem(data));
    localStorage.removeItem(data);
    location.reload();
}
function edit(data)
{
    let obj=JSON.parse(localStorage.getItem(data));
    document.getElementById('name').value=obj.name;
    document.getElementById('email').value=obj.email;
    localStorage.removeItem(data);
    // data.addEventListener('submit',xyz);


    
}





