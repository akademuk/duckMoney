$( function() {
    // Custom iconselectmenu widget
    $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
      _renderItem: function( ul, item ) {
        var li = $( "<li>" ),
          wrapper = $( "<div>", { text: item.label } );
   
        if ( item.disabled ) {
          li.addClass( "ui-state-disabled" );
        }
   
        $( "<span>", {
          style: item.element.attr( "data-style" ),
          "class": "ui-icon " + item.element.attr( "data-class" )
        })
          .appendTo( wrapper );
   
        return li.append( wrapper ).appendTo( ul );
      }
    });
   
    // Initialize iconselectmenu
    $( "#filesA" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget" )
        .addClass( "ui-menu-icons" );
   
    // Add event listener for selectmenuchange event
    $("#filesA").on("selectmenuchange", function(event, ui) {
      // Get selected option
      var selectedOption = $(this).find("option:selected");
      
      // Get the class and text of the selected option
      var selectedClass = selectedOption.attr("data-class");
      var selectedText = selectedOption.text();
      
      // Create an image element with the selected class
      var selectedImage = $("<span>", {
        "class": "ui-icon " + selectedClass
      });
      
      // Create a div with the selected text and image
      var selectedDiv = $("<div>", {
        "class": "selected-item"
      }).append(selectedImage).append(selectedText);
      
      // Replace the contents of the selected-image div with the new div
      $("#selected-image").html(selectedDiv);
    });
  });
  