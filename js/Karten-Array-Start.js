
	
	
	function testFunktion(){
		var vokabelkarten1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var topPos=260;
		//$("#test").html = '';
		vokabelkarten1.forEach(function(element, index){
		var karte = index + 1; 
		topPos=topPos+10;
			if (index == 19){
				$("#test").append('<div id="draggable" class="playingcard ui-widget-content" id="'+karte+'" style="z-index: 2; top: '+topPos + 'px;"></div>')
			} else {
				$("#test").append('<div id="stapel" class="playingcard" id="'+karte+'"  style="z-index: 2; top: '+topPos+'px;"></div>')
			}
		$( "#draggable" ).draggable();
		}); 
		
	}
	

