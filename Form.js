$(document).ready(function() {
	let startup = $('#startup').val()
	let investor = $('#investor').val()
	let hub = $('#hub').val()
	if (startup) {
		$( ".startup" ).show();
		$( ".investor" ).hide();
		$( ".hub" ).hide();
		console.log('startup')
	} else if (investor) {
		$( ".investor" ).show();
		$( ".startup" ).hide();
		$( ".hub" ).hide();
		console.log('investor')

	} else if (hub) {
		$( ".hub" ).show();
		$( ".startup" ).hide();
		$( ".investor" ).hide();
	}
})
