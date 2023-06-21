function f(x){
    return eval(document.getElementById("f_x").value)
    }
  
    function sin(x){
        
       return Math.sin(x)
    }
    
    function cos(x){
      return Math.cos(x)
    }
    
    function tan(x){
      return Math.tan(x)
    }

    function cotan(x){
      return 1/tan(x)
    }
    
    function abs(x){ //Valeur Absolue
     return Math.abs(x)
    }
    
    function mod(x,y){ //Modulo
     return x%y
    }
    
    function exp(x){ //Exponentielle de x
     return Math.pow(Math.E,x)
    }
    
    function p(x,y){ //Puissance
     return Math.pow(x,y)
    }

    function p_2(x){
    return p(x,2)
    }
    function p_3(x){
    return p(x,3)
    }
    function ln(x){ //en base e
    return Math.log(x)
    }
    function log(x){ //en base 10
    return (ln(x)/ln(10))
    }
    function p(x,y){
    return Math.pow(x,y)
    }
    function r(x){ //Racine de x
    return Math.sqrt(x)
    }
    function sqrt(x){ //Racine de x
    return Math.sqrt(x)
    }
  
    const reInit = document.getElementById('reInit')
    const fT = document.getElementById('f_x')
    const les = document.querySelector('.les')
    const rep = document.querySelector('.rep')



    function draw_curve(){
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext('2d')
    var dx = canvas.width
    var dy = canvas.height
        ctx.beginPath();
        ctx.moveTo(dx, (dy/2)+4);
        ctx.lineTo(0,(dy/2)+4);
        ctx.moveTo(dx/2 , 0 );
        ctx.lineTo( dx/2 , dy);
        ctx.lineWidth = 2;
        ctx.stroke()
     
    var k = document.getElementById("echelle").value
    for( i= -dx ; i < dx ; i+=0.01 ){
    var x = dx/2 + k*i
    var y = dy - (k*f(i) + dy/2)
    ctx.fillStyle='red'
    ctx.fillRect( x , y , 1.5 , 1.5); continue;
        }
      }
      reInit.addEventListener('click', function(){
        if (fT.value !== ""){
          les.innerHTML += `
          <p id='rep'>- ${fT.value}</p>
          `
        }
        fT.value = ""
      })