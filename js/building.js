// use helper method to generate an array of image urls. We have 34 frames in total
var frames = SpriteSpin.sourceArray('img/building/Gnesta_Select.RGB_color.{frame}.png', {
    frame: [0, 38],
    digits: 4
});

// these are the frame numbers that will show a detail bubble
var details = [0, 19];
// the current index in the details array
var detailIndex = 0;
var spin = $('.building');
// initialise spritespin
spin.spritespin({
    source: frames,
    width: 1150,
    sense: 2,
    height: 767,
    sizeMode: 'fit',
    scrollThreshold: 0,
    frameTime: 20, // Time in ms between updates. 40 is exactly 25 FPS
    detectSubsampling: false,
    animate: false
});

// get the api object. This is used to trigger animation to play up to a specific frame
var api = spin.spritespin("api");

spin.bind("onLoad", function() {
    var data = api.data;
    data.stage.prepend($(".details .detail")); // add current details
    data.stage.find(".detail").hide(); // hide current details
    $('.spinner').css({
        opacity: 1,
        display: "none"
    }).animate({
        opacity: 0
    }, 'slow');
}).bind("onFrame", function() {
    var data = api.data;

    if (data.frame == 0) {
        setTimeout(
            $('.front_svg').css({
                display: "block"
            }),
            $('.north2').css({
                display: "none"
            }),
            $('.north1').css({
                display: "block"
            }),
            1000);
    }

    else if (data.frame == 19) {
        setTimeout(
            $('.back_svg').css({
                display: "block"
            }),
            $('.north1').css({
                display: "none"
            }),
            $('.north2').css({
                display: "block"
            }),
            1000);
    }

    else {
        setTimeout(
            $('.back_svg').css({
                display: "none"
            }),
            $('.front_svg').css({
                display: "none"
            }),
            1000);
    }
});

// these are the frame numbers that will show a detail bubble
var details = [0, 19];
// the current index in the details array
var detailIndex = 0;



$('.rotate-button').click(function() {
    setDetailIndex(detailIndex - 1);
});


function setDetailIndex(index) {
    detailIndex = index;
    if (detailIndex < 0) {
        detailIndex = details.length - 1;
    }
    if (detailIndex >= details.length) {
        detailIndex = 0;
    }
    api.playTo(details[detailIndex]);
}

// $('.hotspotFront').mousemove(function(e) {
//     $('span', this).css({
//         left: e.pageX - 700,
//         top: e.pageY - 300
//     });
// });

// $('.li1').click(function(e) {
//     $('#myModal').modal('show');
// });


//tooltip**********

// $(function() {$( "g[id]" ).tooltip({  
//     content: 'connecting',
//     content:function(callback) {
//             var link = $(this).attr("data-teacher"); // here retrieve the id of the teacher 
//             $.get('teacher.php?teacherid=' + link,{}, function(data) {
//                 alert('here');
//             callback(data);
//         });
//     },

// })});
  
//div class="teacher-link" data-teacher="1" title="1" onmouseover="{link=1}">Alex Brown</div>
//<div class="teacher-link" data-teacher="2" title="2" onmouseover="{link=2}">John Black</div>

//http://stackoverflow.com/questions/23486648/jquery-ui-tooltip-with-dynamic-content

