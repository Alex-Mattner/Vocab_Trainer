
var korrekt = "";
var inKorrekt = "";

if (korrekt) 
	











$('#task2_01').html("<h3>JSON-Verarbeitung gescheitert</h3>").css('color', 'red');
})
.done(data => {
var result = "";
result += `<h4>Inhalt</h4>`;
result += `<pre>${JSON.stringify(data)}</pre>`;
// Einzelne Eigenschaften und Werte ausgeben
result += `<h4>Eigenschaften und Werte</h4>`;
result += getObjectOutput(data);
