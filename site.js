
var home = {};
var ed = {};

/******************************************************
* Function to open the site selection menu            *
******************************************************/
home.openMyMenu = function() {
    $('#home-background-image').css("visibility", "hidden");
    $('#myMenu').width("100%");
}

/******************************************************
* Function to close the site selection menu           *
******************************************************/
home.closeMyMenu = function() {
    $('#myMenu').width("0");
    $('#home-background-image').css("visibility", "visible");

};

/*******************************************************
* Hover functions to prevent content from displaying
* outside the viewport for the problem animation
* on the home page
*******************************************************/
home.problemHoverIn = function() {
    $('#home-problem-grid').css("display", "grid");
};
home.problemHoverOut = function() {
    if ($(window).width() > 800) {
        $('#home-problem-grid').css("display", "none");
    }
};

/********************************************************
* Initial problem animation display to none to keep
* content inside the viewport on the home page
*********************************************************/
home.pageResize = function() {
    if ($(window).width() <= 800) {
        $('#home-problem-grid').css("display", "grid");
    } else {
        $('#home-problem-grid').css("display", "none");
    }
};

/**********************************************************
* Toggle display setting to on / off based on parameters
**********************************************************/
ed.contentOnOff = function(on, off) {
  on.css("display", "none");
  off.css("display", "block");
}

/***********************************************************
* Setup callbacks to handle hovering over tiles on the
* Education page to display selected content
************************************************************/
ed.javaContentHoverIn = function() {
  ed.contentOnOff($('#ed-java-content'), $('#ed-java-content-hov'));
};
ed.javaContentHoverOut = function() {
  ed.contentOnOff($('#ed-java-content-hov'), $('#ed-java-content'));
};
ed.mongoContentHoverIn = function() {
  ed.contentOnOff($('#ed-mongo-content'), $('#ed-mongo-content-hov'));
};
ed.mongoContentHoverOut = function() {
  ed.contentOnOff($('#ed-mongo-content-hov'), $('#ed-mongo-content'));
};
ed.jsContentHoverIn = function() {
  ed.contentOnOff($('#ed-js-content'), $('#ed-js-content-hov'));
};
ed.jsContentHoverOut = function() {
  ed.contentOnOff($('#ed-js-content-hov'), $('#ed-js-content'));
};
ed.pythonContentHoverIn = function() {
  ed.contentOnOff($('#ed-python-content'), $('#ed-python-content-hov'));
};
ed.pythonContentHoverOut = function() {
  ed.contentOnOff($('#ed-python-content-hov'), $('#ed-python-content'));
};
ed.csharpContentHoverIn = function() {
  ed.contentOnOff($('#ed-csharp-content'), $('#ed-csharp-content-hov'));
};
ed.csharpContentHoverOut = function() {
  ed.contentOnOff($('#ed-csharp-content-hov'), $('#ed-csharp-content'));
};
ed.angularjsContentHoverIn = function() {
console.log("here");
  ed.contentOnOff($('#ed-angularjs-content'), $('#ed-angularjs-content-hov'));
};
ed.angularjsContentHoverOut = function() {
console.log("here2");
  ed.contentOnOff($('#ed-angularjs-content-hov'), $('#ed-angularjs-content'));
};
ed.bootstrapContentHoverIn = function() {
  ed.contentOnOff($('#ed-bootstrap-content'), $('#ed-bootstrap-content-hov'));
};
ed.bootstrapContentHoverOut = function() {
  ed.contentOnOff($('#ed-bootstrap-content-hov'), $('#ed-bootstrap-content'));
};
ed.htmljscssContentHoverIn = function() {
  ed.contentOnOff($('#ed-htmljscss-content'), $('#ed-htmljscss-content-hov'));
};
ed.htmljscssContentHoverOut = function() {
  ed.contentOnOff($('#ed-htmljscss-content-hov'), $('#ed-htmljscss-content'));
};
ed.jhContentHoverIn = function() {
  ed.contentOnOff($('#ed-jh-content'), $('#ed-jh-content-hov'));
};
ed.jhContentHoverOut = function() {
  ed.contentOnOff($('#ed-jh-content-hov'), $('#ed-jh-content'));
};
ed.wmContentHoverIn = function() {
  ed.contentOnOff($('#ed-wm-content'), $('#ed-wm-content-hov'));
};
ed.wmContentHoverOut = function() {
  ed.contentOnOff($('#ed-wm-content-hov'), $('#ed-wm-content'));
};


$(document).ready(function() {

    /**************************************************************
    * Update Home page when hovering over problem box
    **************************************************************/
    $('#home-problem').hover(home.problemHoverIn, home.problemHoverOut);

    /***************************************************************
    * Update tiles on Education page when hovering over them
    ***************************************************************/
    $('#ed-java-tile').hover(ed.javaContentHoverIn, ed.javaContentHoverOut);
    $('#ed-mongo-tile').hover(ed.mongoContentHoverIn, ed.mongoContentHoverOut);
    $('#ed-js-tile').hover(ed.jsContentHoverIn, ed.jsContentHoverOut);
    $('#ed-python-tile').hover(ed.pythonContentHoverIn, ed.pythonContentHoverOut);
    $('#ed-csharp-tile').hover(ed.csharpContentHoverIn, ed.csharpContentHoverOut);
    $('#ed-angularjs-tile').hover(ed.angularjsContentHoverIn, ed.angularjsContentHoverOut);
    $('#ed-bootstrap-tile').hover(ed.bootstrapContentHoverIn, ed.bootstrapContentHoverOut);
    $('#ed-htmljscss-tile').hover(ed.htmljscssContentHoverIn, ed.htmljscssContentHoverOut);
    $('#ed-jh-tile').hover(ed.jhContentHoverIn, ed.jhContentHoverOut);
    $('#ed-wm-tile').hover(ed.wmContentHoverIn, ed.wmContentHoverOut);

    window.addEventListener('resize', home.pageResize);

});

/******************************************8
Work on centering text vertically - problem and solution section
with padding in javascript when size is changed
*******************************************/