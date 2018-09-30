class GlossaryEntryOld {
	constructor(
		concept_number,
		source_term_id,
		source,
		source_language_code,
		target_term_id,
		target,
		target_language_code,
		source_language_pretty = null,
		target_language_pretty = null
	) {
		// Eigenschaften
		this.concept_number = concept_number || null;
		this.source_term_id = source_term_id || null;
		this.source = source || null;
		this.source_language_code = parseInt(source_language_code) || 0;
		this.target_term_id = target_term_id || null;
		this.target = target || null;
		this.target_language_code = parseInt(target_language_code) || 0;
		this.status = null; // mögliche Werte: deck, desk covered, desk open, correct, wrong
		this.source_language_pretty = source_language_pretty;
		this.target_language_pretty = target_language_pretty;

		// Methoden

		this.setStatus = (status) => {
			switch(status) {
				case "deck":
				case "covered":
				case "open":
				case "correct":
				case "wrong":
					this.status = status;
					break;
			}
		};
	}
}
