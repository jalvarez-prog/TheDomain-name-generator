function devuelveDominios(){

var Arraypronoun  = ['the','our','Anyone','Something','We'];
var Arrayadj = ['great', 'big','Blue','Speed', 'Fantastic'];
var Arraynoun = ['jogger','racoon','storybooks','galaxy','atlas'];
var cadena="";

for (i = 0; i < Arraypronoun.length; i++) {
for(j=0;j<Arrayadj.length;j++)
{
for(k=0; k<Arraynoun.length;k++)
{
cadena+=Arraypronoun[i]+Arrayadj[j]+Arraynoun[k]+".com ";
}
}
}
document.getElementById('resultado').innerHTML = cadena;
}
