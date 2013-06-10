<?php

class zendeskAPI{

    public function createTicket(){

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));
	curl_setopt($curl, CURLOPT_URL, 'https://officeautopilot.zendesk.com/api/v2/tickets.json');
	curl_setopt($curl, CURLOPT_USERPWD, 'colton@officeautopilot.com:moontower1');
	curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY); 
	curl_setopt($curl, CURLOPT_POSTFIELDS, 
		'{"ticket":{"requester":{"name":"The Customer", 
		"email":"thecustomer@domain.com"}, 
		"submitter_id":410989, "subject":"'.$_POST['subject'].'", 
		"comment": { "body": "'.$_POST['body'].'" }}}'
		);

	$content = curl_exec($curl);
	curl_close($curl);
	print_r($content);
    }
}
