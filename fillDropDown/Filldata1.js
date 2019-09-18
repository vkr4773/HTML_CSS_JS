country = ['India' , 'England' , 'USA'];
state  = [['Karnatka' , 'West Bengal' , 'Gujarat' , 'Bihar'] , ['London' , 'Berkshire' , 'Bristol'] , ['New York' , 'Texa' , 'Califronia']];

function fillDD()
{
var Typedd =document.getElementById('country');
for(i=0;i<country.length;i++)
{
var ele= document.createElement('option');
ele.text=country[i];
Typedd.add(ele,i+1);

}
}

function fillData()
{

var Typedd =document.getElementById('country');
var selectedIdx= Typedd.selectedIndex;

var Datadd =document.getElementById('state');

Datadd.innerText=null;

for(i=0;i<state[selectedIdx-1].length;i++)
{
var ele=document.createElement('option');
ele.text=state[selectedIdx-1][i];
Datadd.add(ele,i+1);

}

}

