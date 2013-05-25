$(function() {
  $( "#deny-form" ).dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
      "Deny Message": function() {
            var subjectString = 'Your list has been denied.';
            var reply = document.getElementById('dresponse').value;
            $.ajax({
                method: 'post',
                url: 'http://cjtrautz.me/testscript.php',
                    data: {     
                       'subject': subjectString,    
                       'body': reply, 
                       'ajax': true
                    },
                    success: function(data) {
                        $('#data').text(data);
                    }
            }); 
             $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
  });
  
    $( "#question-form" ).dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
      "Question Message": function() {
            var subjectString = 'Your list has been questioned.';
            var reply = document.getElementById('qresponse').value;
            $.ajax({
                method: 'post',
                url: 'http://cjtrautz.me/testscript.php',
                    data: { 
                       'subject': subjectString,    
                       'body': reply,             
                       'ajax': true
                    },
                    success: function(data) {
                        $('#data').text(data);
                    }
            });
            $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
  });

  $( "#deny" )
    .click(function() {
      $( "#deny-form" ).dialog( "open" );
    });

  $( "#question" )
    .click(function() {
      $( "#question-form" ).dialog( "open" );
    });

});
