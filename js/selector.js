$( "g[id]" ).hover( function() {
     var currentId = $(this).attr('id');
     $( this ).css({opacity: 1} )
     console.log('current ID = ' + '#'+currentId);
     $("#polygon"+currentId).css({fill: "#acc90f"} )
       }, function() {
      $( this ).css({opacity: 0} );
   }
);


// $( "g[id]" ).mouseenter( function() {
//     var currentId = $(this).attr('id');
//     $( this ).css({opacity: 1} ).tooltip({
//       content: "Awesome title!"
//     });
//     console.log('current ID = ' + '#'+currentId);
//     $("#polygon"+currentId).css({fill: "#acc90f"} )
//       }
// );

$( "g[id]" ).tooltip({
      track: true,
      position: { my: "left top-100", at: "left bottom+35", collision: "flipfit" },
      tooltipClass: "tootip-class",
      content: function() {
        var currentId = $(this).attr('id');
          return "<div class='tooltip-test'><div class='tooltip-top'><p><b>"+currentId+"</b></p><p>Boyta: 98kvm</p><p>Antal Rum: 4rok</p><p>Pris: 6.850.000 kr </p><p>Statu: <span>Ledig</span></p></div><div class='tooltip-bottom'><div class='see-apartment'>Se lägenhet</div></div></div>";
      }
      
});

$("g[id]").click(function(e) {
    var currentId = $(this).attr('id');
    $('.modal-title').html('Apartment: ' + currentId);
    $('#myModal').modal('show');
});


