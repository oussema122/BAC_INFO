var genres=document.getElementsByName("Genre");
var cin= document.getElementById("cin");
var nom=document.getElementById("nom");
var prenom=document.getElementById("pernom");
var int1=document.getElementById("sp")
var int2=document.getElementById("mu")
var int3=document.getElementById("in")
var tel=document.getElementById("tel")
function alphabetique(ch){
  const lettre="abcdefghijklmnopqrstuvwxyz ";
  for(var i=0; i<ch.length;i++)
  {
   if( lettre.indexOf(ch[i].toLowerCase())===-1)
    {return false;}
  }return true;
}
function verif(){
    if((cin.value.length!=8) ||(Number((cin.value.charAt(0)))>1)||(isNaN(cin.value)) ||(cin.value.indexOf(" ")!=-1))
      {
        alert("cin invalide");return false;
      }
      if (nom.value ==="" || !alphabetique(nom.value) )
      {
        alert("veuillez saisir un nom valide"); return false;
      }
      if (prenom.value ==="" || !alphabetique(prenom.value) )
      {
        alert("veuillez saisir un prenom valide"); return false;
      }
      if(!genres[0].checked && !genres[1].checked ) // les deux sont non selectionnee
      {
      alert("veuillez séléctionner votre genre!"); return false;
      }
      /*if (!int1.value[0].checked || int2.value[1].checked || int3.value[2].checked) 
      {
        alert("veuillez séléctionner au moins un interet "); return false;
      }*/
      if (tel.value.length!=8 || isNaN(tel.value) || Number(tel.value.charAt(0)) <=0) 
      {
        alert("veuillez séléctionner au moins un valide "); return false;
      }
    return true;
 }
 function inscri()
 {
  if (verif()) 
  {
    if (genres[0].checked) 
       {document.getElementById("sortie").innerHTML="Bonjour "+ genres[0].value +" "+nom.value+ " "+ prenom.value; }
    else 
        {document.getElementById("sortie").innerHTML="Bonjour "+ genres[1].value+" "+nom.value+ " "+ prenom.value; }
  }
  
}