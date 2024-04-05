var x = 100;
// = document.getElementById(5).value;
let stavka;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function Ebal(){
    stavka==Number(document.getElementById(5).value);
 //   var shluha = (document.getElementById(1).value)
//        alert(shluha)
    document.getElementById(4).innerText=getRandomInt(10000);
    suka=document.getElementById(4).value;
    if(suka[1] == suka[2] && suka[0] == suka[1])
        //|| document.getElementById(4).value==111 || document.getElementById(4).value==222 || document.getElementById(4).value== 333 || document.getElementById(4).value==444  || document.getElementById(4).value==555 || document.getElementById(4).value==666 || document.getElementById(4).value==777 || document.getElementById(4).value==888 || document.getElementById(4).value==999)
    {

        x+=160*stavka;
        document.getElementById(3).innerText='Balance: '+ x;
        alert('You win');

    }
    else if  (suka[0]==suka[1])
    {
        x+=45*stavka;
        document.getElementById(3).innerText='Balance: '+x;

        alert('You win');
    }



    else if  (suka[0]==suka[1]&& suka[1]==suka[2] && suka[2]==suka[3])
    {
        x+=215*stavka;
        document.getElementById(3).innerText='Balance: '+ x;

        alert('You win');
    }




else {
        x -= stavka;
        document.getElementById(3).innerText = 'Balance: ' + x;
    }
if(x<=-stavka)
{
    alert('You are fucking looser')
    alert('shut up and take my money')
    x=100;
    document.getElementById(3).innerText = 'Balance: ' + x;
}

}


