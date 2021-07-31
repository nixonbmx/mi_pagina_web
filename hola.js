// comentario 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('show.bs.modal', function (event) {
  $('#contacto').removeClass('btn-primary');
  $('#contacto').addClass('btn-danger');
  $('#contacto').prop('disabled', true);

})
var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('shown.bs.modal', function (event) {
  console.log("hola 2");
})
var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('hide.bs.modal', function (event) {
  console.log("hola 3");
})
var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  $('#contacto').prop('disabled', false);
  $('#contacto').removeClass('btn-danger');
  $('#contacto').addClass('btn-primary');
})
