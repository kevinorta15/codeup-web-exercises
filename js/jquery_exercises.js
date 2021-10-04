"use strict";

$(document).ready(function() {

    // alert("The Document is ready, we are ready to rock and roll! ")
    // INSERT JAVASCRIPT CODE SAMPLE HERE
});

// $('.codeup').css('border', '1px red solid')
// $('li').css('font-size', '20px')
// $('li, h1, p').css('color', 'green')
// var contents = $('#brogramming').html(); alert(contents)

$("h1, h2").click( function (){
    $(this).css('background-color', 'cyan')
});

$('p').dblclick( function (){
    $('p').css('font-size','18px').css('color', 'red')
});

$('li').hover( function (){
    $('li').css('background-color', 'red')
},

function (){
    $('li').css('background-color', 'inherit')
});

$('.alertthep').click(function (){
    alert("Looks like you've clicked the paragraph!");
})