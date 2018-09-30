$(function() {
			// draggable option wird in Karten-Array-Start.js aufgerufen
			//$( "#draggable" ).draggable();
			
			$( "#droppable" ).droppable({
				drop: function( event, ui ) {
					$( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
				}
			});
		  } );