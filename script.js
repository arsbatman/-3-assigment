let button = document.querySelector('button'); 
var edu = document.getElementById("education");  
var net = document.getElementById("networth");
var cas = document.getElementById("caste");
var calcButton = document.getElementById("calcButton"); 
var items = document.getElementsByTagName("input");
button.addEventListener('click', function (){ 
document.getElementById('h11').style.color = 'red';//DOM CSS
var money=100;
let text = {
 ps: "I denounce and attaint the dowry system in India." //DOM event          
}
alert(text.ps);
    if(edu.value=="bachelor"){
        money=money*1.5;
        console.log(money);
    }
    else if(edu.value=="college"){
        money=money*1.2;
        console.log(money);
    }
    else if(edu.value=="high_school"){
        money=money*1.05;
        console.log(money);
    }
    else if(edu.value=="middle_school"){
        money=money*0.9;
        console.log(money);
    } 
        
    if(net.value=="upper_class"){
            money=money*2;
            console.log(money);
        }
        else if(net.value=="middle_class"){
            money=money*1.5;
            console.log(money);
        }
        else if(net.value=="lower_class"){
            money=money*1.2;
            console.log(money);
        } 
            if(cas.value=="brahmin"){
                money=money+100;
                console.log(money);
            }
            else if(cas.value=="kshatriya"){
                money=money+50;
                console.log(money);
            }
            else if(cas.value=="vaishya"){
                money=money+20;
                console.log(money);
            }
            else if(cas.value=="shudra"){
                money=money+10;
                console.log(money);
            }
            else if(cas.value=="varna"){
                money=money-50;
                console.log(money);
            }
            
            for (var i = 0; i < 4; i++)
       {
          if (items[i].checked)
          {
             money += (items[i].value * 1);
          }
          console.log(money);
       }
        if(document.getElementById('age1').checked==true) { 
            money*=1.5;
            console.log(money);
        } 
        else if(document.getElementById('age2').checked==true) { 
            money*=1.2;
          console.log(money);
        } 
        else if(document.getElementById('age3').checked==true) { 
            money *= 0.95;
            console.log(money);
        } 
         
        if(document.getElementById('rep1').checked==true) { 
            money*=0.85;
            console.log(money);
        } 
        else if(document.getElementById('rep2').checked==true) { 
            money*=0.9;
          console.log(money);
        } 
        else if(document.getElementById('rep3').checked==true){ 
            money -= 20;
            console.log(money);
        }
        
    sum.textContent = "Bride Price:"+money + '$'; 
});     
const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}
