class GlossaryEntry {
	constructor(termEntry) {
		// Eigenschaften
		this.status = null; // mögliche Werte: deck, desk covered, desk open, correct, wrong
		// Dynamisches Erstellen der Eigenschaften
		Object.entries(termEntry).forEach(([key, value]) => {
			if (key == "source_language_code" || key == "target_language_code") {
				Object.defineProperty(this, key, {value: parseInt(value)});
			} else {
				Object.defineProperty(this, key, {value: value});
			}
		});

		// Methoden
		this.setStatus = (status) => {
			switch(status) {
				case "deck":
				case "covered":
				case "open":
				case "richtig":
				case "falsch":
					this.status = status;
					break;
			}
		};
	}
}
