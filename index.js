var timer= null;
//(function(){
//    new Vue({
//        el: '#button1'
//        })
//})

function move()
{
    document.getElementByID('racer1').style.right =
    parseInt(document.getElementById('racer1').style.right) + 1000 + 'px';
    document.getElementByID('racer2').style.right =
    parseInt(document.getElementById('racer2').style.right) + 1000 + 'px';
}
window.onload = function()
{
    document.getElementById('button1').onclick=function()
    {
        if(timer == null){
            timer = setInterval("move()", 10);
        }
        else{
            clearInterval(timer);
            timer = null
        }
    }
    var button2 = document.getElementById('button2');
    button2.onclick= reloadPage;
    
    function reload(){
        window.location.reload();
    }
}
