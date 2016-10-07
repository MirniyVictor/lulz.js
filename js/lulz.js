$(function() {

    function buildHiddenMenu(elements) {
        $(window).on('resize', function() {
            if(!elements.navigationMenu.find(elements.hiddenMenu).length) {
                elements.navigationMenu.append(elements.hiddenMenu);
            }

            elements.hiddenMenu.empty();

            elements.wrapperList
                .find('li').filter(function(index, element) {
                    return $(element).position().top > 20;
                })
                .addClass('is-overflowed')
                .clone()
                .removeClass('is-overflowed')
                .appendTo(elements.hiddenMenu);

            if (!elements.hiddenMenu.find('li').length) {
                $(elements.hiddenMenu).css({'display' : 'none'});
                $(elements.triggerMenu).css({'display' : 'none'});
            } else {
                $(elements.triggerMenu).css({'display' : 'block'});
            }

        }).trigger('resize');
        
        elements.triggerMenu.on('click', function(event) {
            event.preventDefault();
            elements.hiddenMenu.toggle();
        });
    }

    buildHiddenMenu({
        wrapperList: $('.wrapper-list'),
        hiddenMenu: $('<ul class="hidden-list"/>'),
        triggerMenu: $('.trigger-menu'),
        navigationMenu: $('.navigation')
    });
    
});
