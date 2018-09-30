"use strict";

var selectedLanguageId = 1;
var selectedLanguagePretty = '';
var idCollection = null;
var languages = [];
var quiz = null;

//Button nächste Karte betätigen und Karte aus dem Stapel wird dabei gelöscht


function deleteNextCard() {
	console.log("ich reagiere");
	// var parentNode = $('#test');
	// parentNode.removeChild(parentNode.lastChild);
	// console.log($('#test')[0].parentNode);
	// $('#test').parentNode.removeChild($('#test').parentNode.lastChild);
	$('#stapel').remove();
};

$(function () {
	getJsonFile();
	$('#pruefenButton').prop('disabled', true);
/*
	$("#droppable").droppable({
		drop: function (event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped!");
		},
		out: function (event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Ich bin weg!");
		}
	});
*/
});

function answer() {
	const answer = $("#userInput").val();
	// Bei getResult wird der Zähler für falsche bzw. richtige Antworten hochgezählt
	const result = quiz.getResult(answer);
	const questionAndAnswer = quiz.getQuestionAndAnswer();
	const tag = 'div';
	$("#draggable").html(`
			<${tag}>Die Antwort war ${result}.</${tag}>
			<${tag}>Auflösung</${tag}>
			<${tag}>Sprache: ${questionAndAnswer["ausgangssprache"]}</${tag}>
			<${tag}>Frage: ${questionAndAnswer["frage"]}</${tag}>
			<br />
			<${tag}>Sprache: ${questionAndAnswer["zielsprache"]}</${tag}>
			<${tag}>Antwort: ${questionAndAnswer["antwort"]}</${tag}>
		`);
	$("#bewertungHeader").text(`Die Antwort war ${result}.`);
	$("#correctAnswers").text(quiz.correctAnswers);
	$("#wrongAnswers").text(quiz.wrongAnswers);

}

function startQuiz() {
	getIdsFromDatabase();
	var vokabelkarten1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	var topPos = 260;
	//$("#test").html = '';
	vokabelkarten1.forEach(function (element, index) {
		var karte = index + 1;
		topPos = topPos + 10;
		if (index == 19) {
			$("#test").append('<div id="draggable" class="playingcard ui-widget-content" id="' + karte + '" style="z-index: 2; top: ' + topPos + 'px;"></div>')
		} else {
			$("#test").append('<div id="stapel" class="playingcard" id="' + karte + '" style="z-index: 2; top: ' + topPos + 'px;"></div>')
		}
		$("#draggable").draggable();
	});

		$('#nextButton').addEventListener('click', deleteNextCard());
}

function main() {

}

function getSelectedLanguagePairsFromDatabase() {
	// console.log("ids: " + idCollection.getRandomIdsAsString());
	$.ajax({
		type: 'GET',
		url: 'server/index.php',
		data: {
			'action': 'getSelectedLanguagePairs',
			'concept_ids': idCollection.getRandomIdsAsString(),
			'source_language_number': idCollection.source_language_number,
			'target_language_number': idCollection.target_language_number,
			'limit': idCollection.limit
		},
		dataType: 'json',
		success: function (jsonData) {
			// TODO: mach etwas mit den Daten
			// Neues Objekt erstellen
			// console.log(jsonData);
			console.log("_______________");
			console.log(jsonData);
			console.log("_______________");

			var glossaryEntry = new GlossaryEntry(jsonData[1]);
			// console.log(glossaryEntry);
			glossaryEntry.setStatus("correct");
			// console.log(glossaryEntry.status);
			quiz = new Quiz(jsonData);

			$("#droppable").droppable({
				drop: function (event, ui) {
					// $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
					quiz.moveCardFromDeckToDesktop();

					const tag = 'div';
					$("#draggable").html(`<${tag}>Sprache: ${quiz.getQuestion()["ausgangssprache"]}</${tag}><${tag}>Frage: ${quiz.getQuestion()["frage"]}</${tag}>`);
					console.log(quiz.getQuestion()["frage"] + ", " + quiz.getQuestion()["ausgangssprache"]);
					
					 $('#draggable').draggable('destroy');
					 $("#checkButton").removeAttr("disabled");
				}/*,
				out: function (event, ui) {
					$(this).addClass("ui-state-highlight").find("p").html("Ich bin weg!");
				}*/
			});

			/*
			console.log(quiz);
			quiz.moveCardFromDeckToDesktop();
			quiz.moveCardFromDesktopToCorrectAnswers();
			quiz.moveCardFromDeckToDesktop();
			console.log("Frage");
			console.log(quiz.getQuestion());
			console.log(quiz.getQuestionAndAnswer());
			console.log(quiz.getResult("no idea"));
			//quiz.moveCardFromDesktopToWrongAnswers();
			 */
		},
		error: function () {
			console.log('Error retrieving term entries');
		}
	});
}

function getIdCollection(data) {
	idCollection.setIds(data);
	idCollection.randomize();
	getSelectedLanguagePairsFromDatabase();
	//main();
}

function getIdsFromDatabase() {
	idCollection = new IdCollection(selectedLanguageId);
	$.ajax({
		type: 'GET',
		url: 'server/index.php',
		data: {
			'action': 'getAllLanguagePairIds',
			'source_language_number': idCollection.source_language_number,
			'target_language_number': idCollection.target_language_number,
			'limit': idCollection.limit
		},
		dataType: 'json',
		success: function (jsonData) {
			getIdCollection(jsonData);
		},
		error: function () {
			console.log('Error retrieving Ids');
		}
	});
}
