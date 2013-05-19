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
        allFields.removeClass( "ui-state-error" );
        $( "#users tbody" ).append( "<tr>" +
           "<td>" + client.val() + "</td>" +
           "<td>" + message.val() + "</td>" +
           "<td>" + response.val() + "</td>" +
           "</tr>" );
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
      //This is where I need to put the onclick event
        allFields.removeClass( "ui-state-error" );
        $( "#users tbody" ).append( "<tr>" +
           "<td>" + client.val() + "</td>" +
           "<td>" + message.val() + "</td>" +
           "<td>" + response.val() + "</td>" +
           "</tr>" );
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
