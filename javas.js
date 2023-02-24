document.getElementById('temariobot').addEventListener('mousemove',function() {
    document.getElementById('temario').style.display = 'block';
})

document.getElementById('temariobot').addEventListener('mouseout',function() {
    
    document.getElementById('temario').style.display = 'none';
})

document.getElementById('argprog1').addEventListener('mousemove',function() {
    document.getElementById('img-argprog1').style.display = 'block';

})

document.getElementById('argprog1').addEventListener('mouseout',function() {
    
    document.getElementById('img-argprog1').style.display = 'none';
})

document.getElementById('foto').addEventListener('mousemove',function() {
    
    document.getElementById('foto').style.transform = 'scale(2.04) translate(-37px, 35px)';
    document.getElementById('foto').style.borderRadius = '10px';

})
document.getElementById('foto').addEventListener('mouseout',function() {
    
    document.getElementById('foto').style.transform = 'scale(1)';
})

document.getElementById('estudios-cuadro').addEventListener('mousemove',function() {
    
    document.getElementById('estudios-oculto').style.display = 'block';
})
document.getElementById('contenedor_datos_personales').addEventListener('mouseout',function() {
    
    document.getElementById('estudios-oculto').style.display = 'none';
})

document.getElementById('contenedor_experiencia-cuadro').addEventListener('mousemove',function() {
    
    document.getElementById('experiencia-oculto').style.display = 'block';
})
document.getElementById('contenedor_datos_personales').addEventListener('mouseout',function() {
    
    document.getElementById('experiencia-oculto').style.display = 'none';
})
