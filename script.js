let ab = document.getElementById('ola');
let i = 0;
function bas(){
   ab.innerHTML = 'GUSTAVO';
    i = 1;
}
function bes(){
    ab.innerHTML = 'MINERVA';
    i = 0;
}
ab.onclick = function(){
    if (i == 0){
        bas();
    }else{
        bes();
    }
}