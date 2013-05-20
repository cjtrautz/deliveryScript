$(function() {
  var client = $( "#client" ),
    message = $( "#message" ),
    response = $( "#response" ),
    allFields = $( [] ).add( client ).add( message ).add( response ),
    tips = $( ".validateTips" );

  $( "#deny-form" ).dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
      "Deny Message": function() {
            var subjectString = 'Your list has been denied.';
            $.ajax({
                method: 'get',
                url: 'http://cjtrautz.me/testscript.php',
                    data: {     
                       'subject': subjectString,     
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
            $.ajax({
                method: 'get',
                url: 'http://cjtrautz.me/testscript.php',
                    data: { 
                       'subject': subjectString,                 
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
