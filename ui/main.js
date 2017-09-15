console.log('Loaded!');
var bob=document.getElementById('abc');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    bob.style.marginLeft=marginleft+"px";
}
bob.onclick=function(){
    var interval=setInterval(moveright,100);
};