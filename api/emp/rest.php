<?php
class rest
{
	var $empTable = "emp";
	var $dbConnect ="";

	function __construct() {
        $this->dbConnect = mysqli_connect("localhost", "root", "root", "company");
    }

	function insertEmployee($empData){ 		
		$empName=$empData["empName"];
		$empAge=$empData["empAge"];
		$empSkills=$empData["empSkills"];
		$empAddress=$empData["empAddress"];		
		$empDesignation=$empData["empDesignation"];
		$empQuery="
			INSERT INTO ".$this->empTable." 
			SET name='".$empName."', age='".$empAge."', skills='".$empSkills."', address='".$empAddress."', designation='".$empDesignation."'";
		if( mysqli_query($this->dbConnect, $empQuery)) {
			$messgae = "Employee created Successfully.";
			$status = 1;			
		} else {
			$messgae = "Employee creation failed.";
			$status = 0;			
		}
		$empResponse = array(
			'status' => $status,
			'status_message' => $messgae
		);
			header('Content-Type: application/json');
			echo json_encode($empResponse);
	}

	public function getEmployee($empId) {		
		$sqlQuery = '';
		if($empId) {
			$sqlQuery = "WHERE id = '".$empId."'";
		}	
		$empQuery = "
			SELECT id, name, skills, address, age 
			FROM ".$this->empTable." $sqlQuery
			ORDER BY id DESC";	
		$resultData = mysqli_query($this->dbConnect, $empQuery);
		$empData = array();
		while( $empRecord = mysqli_fetch_assoc($resultData) ) {
			$empData[] = $empRecord;
		}
		header('Content-Type: application/json');
		echo json_encode($empData);	
	}

	public function getAll() {		
		$empQuery = "
			SELECT id, name, skills, address, age 
			FROM ".$this->empTable." ORDER BY id DESC";	
		$resultData = mysqli_query($this->dbConnect, $empQuery);
		$empData = array();
		while( $empRecord = mysqli_fetch_assoc($resultData) ) {
			$empData[] = $empRecord;
		}
		header('Content-Type: application/json');
		echo json_encode($empData);	
	}

	function updateEmployee($empData){ 		
		if($empData["id"]) {
			$empName=$empData["empName"];
			$empAge=$empData["empAge"];
			$empSkills=$empData["empSkills"];
			$empAddress=$empData["empAddress"];		
			$empDesignation=$empData["empDesignation"];
			$empQuery="
				UPDATE ".$this->empTable." 
				SET name='".$empName."', age='".$empAge."', skills='".$empSkills."', address='".$empAddress."', designation='".$empDesignation."' 
				WHERE id = '".$empData["id"]."'";
				echo $empQuery;
			if( mysqli_query($this->dbConnect, $empQuery)) {
				$messgae = "Employee updated successfully.";
				$status = 1;			
			} else {
				$messgae = "Employee update failed.";
				$status = 0;			
			}
		} else {
			$messgae = "Invalid request.";
			$status = 0;
		}
		$empResponse = array(
			'status' => $status,
			'status_message' => $messgae
		);
		header('Content-Type: application/json');
		echo json_encode($empResponse);
	}

	public function deleteEmployee($empId) {		
		if($empId) {			
			$empQuery = "
				DELETE FROM ".$this->empTable." 
				WHERE id = '".$empId."'	ORDER BY id DESC";	
			if( mysqli_query($this->dbConnect, $empQuery)) {
				$messgae = "Employee delete Successfully.";
				$status = 1;			
			} else {
				$messgae = "Employee delete failed.";
				$status = 0;			
			}		
		} else {
			$messgae = "Invalid request.";
			$status = 0;
		}
		$empResponse = array(
			'status' => $status,
			'status_message' => $messgae
		);
		header('Content-Type: application/json');
		echo json_encode($empResponse);	
	}
}
?>