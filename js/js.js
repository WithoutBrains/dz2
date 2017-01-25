$(function(){
    Init();
})


function Init(){
    generateElements();

    generateBackgrounds();

    addEvents();

    function generateElements(){
        var actionNames = [
            'puffIn',
            'puffOut',
            'vanishIn',
            'vanishOut',
            'boingInUp',
            'boingOutDown',
            'bombLeftOut',
            'bombRightOut',
            'magic',
            'swap',
            'twisterInDown',
            'twisterInUp',
            'foolishIn',
            'foolishOut',
            'holeOut',
            'swashIn',
            'swashOut',
            'spaceInDown',
            'spaceInLeft',
            'spaceInRight',
            'spaceInUp',
            'spaceOutDown',
            'spaceOutLeft',
            'spaceOutRight',
            'spaceOutUp',
            'perspectiveDown',
            'perspectiveDownReturn',
            'perspectiveLeft',
            'perspectiveLeftReturn',
            'perspectiveRight',
            'perspectiveRightReturn',
            'perspectiveUp',
            'perspectiveUpReturn',
            'rotateDown',
            'rotateLeft',
            'rotateRight',
            'rotateUp',
            'slideDown',
            'slideDownReturn',
            'slideLeft',
            'slideLeftReturn',
            'slideRight',
            'slideRightReturn',
            'slideUp',
            'slideUpReturn',
            'openDownLeft',
            'openDownLeftReturn',
            'openDownRight',
            'openDownRightReturn',
            'openUpLeft',
            'openUpLeftReturn',
            'openUpRight',
            'openUpRightReturn',
            'openDownLeftOut',
            'openDownRightOut',
            'openUpLeftOut',
            'openUpRightOut',
            'tinDownIn',
            'tinDownOut',
            'tinLeftIn',
            'tinLeftOut',
            'tinRightIn',
            'tinRightOut',
            'tinUpIn',
            'tinUpOut'
        ];

        var divs = "";
        //var elementsInRow = 10;
        actionNames.forEach(function(name, i){
            // if (i % elementsInRow == 0) {
            //  divs += "<div class='row'>";
            // }
            divs += "<div class='my_"+name+"' data-action='"+name+"'></div>";
            // if (i % elementsInRow == elementsInRow - 1) {
            //  divs += "</div>";
            // }
        });
        $(".cssMagic").append(divs);
    }

    function generateBackgrounds(){
        $('.cssMagic div').each(function(){
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            $(this).css('background-color', "rgb("+r+","+g+","+b+")");
        });
    }

    function addEvents(){
        $('.cssMagic div').on('click', function () {
            var $this = $(this); 
            var action = $(this).data('action');
            $this.addClass('magictime ' + action);
            setTimeout(function(){
                $this.removeClass('magictime ' + action);
            }, 1000);
        });
    }
}