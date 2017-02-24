$(document).ready(function (){
    $("#salvar").click(function (){
       var form = new FormData($("#formulario")[0]);
       $.ajax({
           url: 'recebeDados.php',
           type: 'post',
           dataType: 'json',
           cache: false,
           processData: false,
           contentType: false,
           data: form,
           timeout: 8000,
           success: function(resultado){
               $("#resposta").html(resultado);
           }
       });
    });
});

