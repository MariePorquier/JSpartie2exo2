var m = document.getElementById('firstName'); // permet de récupérer la valeur d'un élément dont l'id est ifirstname
m.addEventListener ('keyup', clic); //  Keyup : le fait de retirer son doigt de la touche qui le déclenche
function clic (){
alert(m.value);
}
