var x = 10;
q = document.getElementById(4).innerText;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function Ebal(){
 //   var shluha = (document.getElementById(1).value)
//        alert(shluha)
    document.getElementById(4).innerText=getRandomInt(10000);
    suka=document.getElementById(4).innerText;
    if(suka[1] == suka[2] && suka[0] == suka[1])
        //|| document.getElementById(4).value==111 || document.getElementById(4).value==222 || document.getElementById(4).value== 333 || document.getElementById(4).value==444  || document.getElementById(4).value==555 || document.getElementById(4).value==666 || document.getElementById(4).value==777 || document.getElementById(4).value==888 || document.getElementById(4).value==999)
    {

        x+=1600
        document.getElementById(3).innerText='Balance: '+ x;
        alert('You win');

    }
    else if  (suka[0]==suka[1])
    {
        x+=450
        document.getElementById(3).innerText='Balance: '+x;

        alert('You win');
    }



    else if  (suka[0]==suka[1]&& suka[1]==suka[2] && suka[2]==suka[3])
    {
        x+=2150
        document.getElementById(3).innerText='Balance: '+x;

        alert('You win');
    }




else {
        x -= 10;
        document.getElementById(3).innerText = 'Balance: ' + x;
    }
if(x<=-10)
{
    alert('You are fucking looser')
    alert('shut up and take my money')
    x=10;
    document.getElementById(3).innerText = 'Balance: ' + x;
}

}


