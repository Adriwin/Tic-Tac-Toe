let number=0;
let times=0;
const tab=[];
const T = [];
const T2= [];
let p1=0,p2=0;
let how_many=0;
const field=document.getElementsByClassName("square");
//End of game, change of score
const End =  (x) =>
{
   const B=document.getElementById("gameBoard").style.display="none";
    if(x==1)
    {
        p1++;
        const A=document.getElementById("playerOnePoints").innerHTML=p1;
        
    }
    else if(x==2)
    {
        p2++;
        const A=document.getElementById("playerTwoPoints").innerHTML=p2;
    }
}
// needed for a new game to start
const Reset = () => 
 {
        for(let i=0;i<9;i++)
        {
            times++;
            tab[i]=0;
            T[i]=0;
            T2[i]=0;
            number=0;
            if(times%2==1)
            number++;
         //   field.item(i).innerHTML="";
            how_many=0;
        }
        const B=document.getElementById("gameBoard").style.display="block";
        
}
// checks if a player wins or there is a tie
const check = (x) =>
{
    
    if(x===1)
    {
        for(let i=1;i<=8;i++)
        {
            if(T[i]==3)
            {
                End(1);
                break;
            }
        }
    }
    else
    {
        for(let i=1;i<=8;i++)
        {
            if(T2[i]==3)
            {
                End(2);
                break;
            }
        }
    }
}
// class which runs the game (changes areas into circles or crosses)
class set
{
    constructor(id,a)
    {
        this._id=id;
        this._a=a;
    }
    change()
    {
        if(tab[this._a]==0)
        {
            
            if(number%2==1)
            {
                how_many++;
             this._id.innerHTML="	<i class='fas fa-times'></i> ";
             T[Math.floor(this._a/3+1)]++;
             T[3+this._a%3+1]++;
             if(this._a==0||this._a==4||this._a==8)
                T[7]++;
            if(this._a==2||this._a==4||this._a==6)
                T[8]++;
             check(1);
            }
            else   
            {
                how_many++;
                this._id.innerHTML="	<i class='far fa-circle'></i> ";
                T2[Math.floor(this._a/3+1)]++;
                T2[3+this._a%3+1]++;
                if(this._a==0||this._a==4||this._a==8)
                   T2[7]++;
               if(this._a==2||this._a==4||this._a==6)
                   T2[8]++;
                check(2);
            }
            number++;
            tab[this._a]=1;
            if(how_many==9)
            {
                End(0);
            }
        }
    }
}
const Z = [];
for(let i=0;i<field.length;i++)
{
    Z[i]=new set(field.item(i),i);
    field.item(i).addEventListener('click', () => Z[i].change());
}
const start=document.getElementById("gameStart");
start.addEventListener('click', () => Reset ());