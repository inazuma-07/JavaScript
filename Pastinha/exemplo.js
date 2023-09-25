$(document).ready(function(){
    // if (confirm("Deseja salvar as informações?")){
    //     alert("Informação salvas com sucesso");
    // }else{
    //     alert("Inserção cancelada");
    // } Função text() -> get pega o conteudo textual ->set mudar o conteudo textual

    variavelexemplo = $("p").text(); // obtanção de conteudo textual
    num = 10
    // $("p").text("Mensagem trocada"); // mudança de conteudo textual
    $("#especial").text("Mensagem trocada" + num); // mudança de conteudo textual

    // monitorar o evento de clique no botao salvar 
    $("#salvar").click(function(){
        /*alert(":)");
        valor = $('#nome').val();
        uf = $("#uf").val();
        alert("o que foi digitado na caixa: " + valor);
        alert("o que foi digitado na caixa: " + uf);
        if (uf == "RS"){
            mensagem = "Vocé é do Rio Grande do Sul"
        } else {
            mensagem = "Você é do exterior"
        }
        alert(mensagem);
        */

        $("#uf").append("<option value ='TE'>Teste</option>");
    })
    // a função val() obtem ou altera valor de um campo de formulario

})