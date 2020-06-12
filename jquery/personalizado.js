$(document).ready(function(){
	$('a[data-confirm]').click(function(ev){
		var href = $(this).attr('href');
		if(!$('#confirm-delete').length){
			$('body').append('<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-info text-white"><strong>ELIMINAR REGISTRO</strong><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body text-center" style="font-size:15px;">¿Está seguro de que desea <strong>eliminar</strong> el elemento seleccionado?<hr><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button> <a class="btn btn-danger text-white" id="dataComfirmOK">Borrar</a></div></div></div></div>');
		}
		$('#dataComfirmOK').attr('href', href);
        $('#confirm-delete').modal({show: true});
		return false;
		
	});
});