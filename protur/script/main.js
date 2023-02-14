$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $(".cep").mask("00000-000");
  $(".ano").mask("0000");
  $(".cvv").mask("000");
  $('.date').mask('00');
});
