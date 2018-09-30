<?php
namespace klassen;

class TermCollection_data_mapper
{
	protected $object = array();

	// new Verpackungsart_data_mapper($this, $mode);
	public function __construct($object, $mode)
	{
		switch($mode)
		{
			case "readAll":
				$array = $this->selectAllAusfuehren($object);
				$this->object[] = array_column($array, "concept_number");
			break;
			case "readSelected":
				$array = $this->selectSubsetAusfuehren($object);
				$this->object[] = $array;
			break;
		}
	}

	public function getObject()
	{
		return $this->object;
	}

	public function selectAllAusfuehren($object)
	{
		$db = new \klassen\PDONamespace\Datenbank();
		$sql = "SELECT DISTINCT
					t.concept_number
				FROM terms t
				JOIN terms s ON t.concept_number = s.concept_number 
					AND s.language_code_number = :source_language_number
					AND t.language_code_number = :target_language_number
				LIMIT 5000";
		$parameters = array(
							"source_language_number"	=> $object["source_language_number"],
							"target_language_number"	=> $object["target_language_number"]
							);
		return $db->sql_select($sql, $parameters);
	}

	public function selectSubsetAusfuehren($object)
	{
		$db = new \klassen\PDONamespace\Datenbank();
		$ids = $object["concept_ids"];
		$sql = "SELECT DISTINCT
					s.concept_number,
					s.term_id source_term_id,
					s.term_value source,
					s.language_code_number source_language_code,
					t.term_id target_term_id,
					t.term_value target,
					t.language_code_number target_language_code
				FROM terms t
				JOIN terms s ON t.concept_number = s.concept_number
					AND t.concept_number IN ($ids)
					AND s.language_code_number = :source_language_number
					AND t.language_code_number = :target_language_number
				LIMIT 5000";
		$parameters = array(
							"source_language_number"	=> $object["source_language_number"],
							"target_language_number"	=> $object["target_language_number"]
							);
		return $db->sql_select($sql, $parameters);
	}
}
?>