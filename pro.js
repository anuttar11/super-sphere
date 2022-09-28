/*supersphere////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

function signIn()
{
    let a=document.getElementById('myForm1');
    if(a.style.display==="block")
    {a.style.display="none";}
    else{a.style.display="block";}
}

function underline()
{
    document.getElementById("logout").style.textDecoration = "underline";
}

function removeit()
{
    document.getElementById("logout").style.textDecoration = "none";
}

function gototop()
{
    document.documentElement.scrollTop = 0;
}
function searchmovie()
{
var name = document.getElementById("abc").value.toUpperCase();
let list = document.getElementById('movieul');
let item = list.getElementsByTagName('li');
    for(var j=0;j<item.length;j++)
    {
        let a=item[j].getElementsByTagName('p')[0];
        let val=a.textContent || a.innerHTML;
        if(val.toUpperCase().indexOf(name) > (-1))
        {
        item[j].style.display="";
        }
        else{
            item[j].style.display="none";
        }
    }
}



    
    

