$(function () {
    $("#infoBox")
   .css(
   {
       "background": "rgba(255,255,255,0.5)",
   })
   .dialog({
       autoOpen: false,
       open: function (event, ui) {
           $(this).before($(this).parent().find('.ui-dialog-buttonpane'));
       },
       width: 815,
       height: 455,
       show: { effect: 'scale', duration: 2000 },
       hide: { effect: 'explode', duration: 1500 },
       buttons:
           [
                 {
                     "class": "control",
                     text: "Controls", click: function ()
                     {
                         $("#infoBox").html("Press the corresponding arrow key to move in that direction"
                             + "<br />" + "<br />"
                             + "<img src='images/arrowKeys.png' alt='keys' height='112' width='146'>"
                             + "<br />" + "<br />" + "<hr class='hr-style'>"
                             + "Press the 'A' key to turn left, press the 'D' key to turn right"
                             + "<br />" + "<br />" + "<hr class='hr-style'>"
                             + "<img src='images/clickInfo.png' alt='keys' height='170' width='516'>");
                     }
                 },

                 {
                     "class": "about",
                     text: "About", click: function () {
                         $("#infoBox").html("Virtual University Fair Using <b>WebGL</b> and <b>Three.js</b>"
                              + "<br />" + "<br />"
                              + "Project Created by <b>Adam James</b>"
                              + "<br />" + "<br />"                     
                              + "<b>University of Northampton</b>"
                              + "<br />" + "<br />"
                              + "CSY Computing (Graphics & Visualisation) Dissertation"
                             );
                     }
                 },

                  {
                      "class": "feedback",
                      text: "Feedback", click: function () {
                          $("#infoBox").html("<div id='feedback-link'>"
                              + "<form method='link' action='feedback.html'>"
                              + "<input id='feedback-button' type='submit' value='Go to Feedback Form'>"
                              + "</form>"
                              + "</div>");
                      }
                  }
            ]
   });

   // $('#menu').menu();

    $("#infoButton")
      .text("") // sets text to empty
   .css(
   {
       "background": "rgba(0,0,0,0)", "opacity": "0.9", "outline": "none", "border": "none",
       "position": "absolute", "top": "4px", "left": "4px"
   }) // adds CSS
   .append("<img title='Information Menu' width='48' height='48' src='images/info.png'/>")
   .button()
   .click(
       function () {
           $("#infoBox").dialog("open");
       });
});