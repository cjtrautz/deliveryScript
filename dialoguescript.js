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
      //This is where I need to put the onclick event
            $.ajax({
                method: 'post',
                url: 'http://cjtrautz.me/testscript.php',
                    data: {                  
                       'ajax': true
                    },
                    success: function(data) {
                        $('#data').text(data);
                    }
            });  
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
      //This is where I need to put the onclick event
            $.ajax({
                method: 'post',
                url: 'http://cjtrautz.me/testscript.php',
                    data: {                  
                       'ajax': true
                    },
                    success: function(data) {
                        $('#data').text(data);
                    }
            });
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
