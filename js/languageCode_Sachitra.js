"use strict";

function getLanguageIdFromLanguageCode(languageCode) {
	const languageId = languages.filter(
		el => el.language_code.toLowerCase() === languageCode.toLowerCase(),
	)[0].language_id;
	return languageId;
}

function getLanguageIdFromLanguagePretty(languagePretty) {
	const languageId = languages.filter(
		el => el.language_pretty.toLowerCase() === languagePretty.toLowerCase(),
	)[0].language_id;
	return languageId;
}

function getLanguagePrettyFromLanguageCode(languageCode) {
	const languagePretty = languages.filter(
		el => el.language_code.toLowerCase() === languageCode.toLowerCase(),
	)[0].language_pretty;
	return languagePretty;
}


function getObjectOutput(myObject, tag = "div") {
	var result = "";
	Object.entries(myObject).forEach(([key, value]) => {
		result += `<${tag}>${key}: ${value}</${tag}>`;
	});
	return result;
}

function getJsonFile() {
	 $.ajax("js/languages.json")
	.done(data => {
	var result = '';
	console.log("hallo"+data);
	result += getLanguageList(data);
    $(result).appendTo('#selectLanguage');	 
	});		
}

function getLanguageList(languages){
	  var result = "";
	
	  result +='<select id="selectLanguageList" name="selectLanguageList">\n';
	  result +='<option>--- Sprache auswählen ---</option>';
	
	  [].forEach.call(languages, element => {
	  var hidden = "";
		
		if(
		element.language_pretty == "German" 
		|| element.language_pretty == "Latin" 
		||element.language_pretty=="Multilingual")
		{
		  hidden="hidden";	
		}
		result+='<option value="'+element.language_id+'"id="id'+element.language_id+'"'+hidden+'>'+element.language_pretty+'</option>\n';
	});	
	
    result += '</select>';
	console.log(result);
	return result;
}
    	
$(document).ready(function(){
	 getJsonFile();
  });
	
