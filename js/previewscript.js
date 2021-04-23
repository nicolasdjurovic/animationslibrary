var fadeInOut = $('#fadeInOut');
var shake = $('#shake');
var spin = $('#spin'); 
var bop = $('#bop');
var skewX = $('#skewX');
var skewY = $('#skewY');
var jump = $('#jump');
var edge = $('#edge');
var squish = $('#squish');

fadeInOut.click(function(){
    fadeInOut.addClass(" saenimate fadeInOut duration-1 repeat-1 forward");

    fadeInOut.on('animationend', function(){
        fadeInOut.removeClass(" saenimate fadeInOut duration-1 repeat-1 forward");
    });
});

shake.click(function(){
    shake.addClass(" saenimate shake duration-half repeat-1 forward");

    shake.on('animationend', function(){
        shake.removeClass(" saenimate shake duration-half repeat-1 forward");
    });
});

spin.click(function(){
    spin.addClass(" saenimate spin duration-1 repeat-1 forward");

    spin.on('animationend', function(){
        spin.removeClass(" saenimate spin duration-2 repeat-1 forward");
    });
});

bop.click(function(){
    bop.addClass(" saenimate bop duration-half repeat-1 forward");

    bop.on('animationend', function(){
        bop.removeClass(" saenimate bop duration-half repeat-1 forward");
    });
});

skewX.click(function(){
    skewX.addClass(" saenimate skewX duration-1 repeat-1 forward");

    skewX.on('animationend', function(){
        skewX.removeClass(" saenimate skewX duration-1 repeat-1 forward");
    });
});

skewY.click(function(){
    skewY.addClass(" saenimate skewY duration-1 repeat-1 forward");

    skewY.on('animationend', function(){
        skewY.removeClass(" saenimate skewY duration-1 repeat-1 forward");
    });
});

jump.click(function(){
    jump.addClass(" saenimate jump duration-half repeat-1 forward");

    jump.on('animationend', function(){
        jump.removeClass(" saenimate jump duration-half repeat-1 forward");
    });
});

edge.click(function(){
    edge.addClass(" saenimate edge duration-half repeat-1 forward");

    edge.on('animationend', function(){
        edge.removeClass(" saenimate edge duration-half repeat-1 forward");
    });
});

squish.click(function(){
    squish.addClass(" saenimate squish duration-half repeat-1 forward");

    squish.on('animationend', function(){
        squish.removeClass(" saenimate squish duration-half repeat-1 forward");
    });
});
