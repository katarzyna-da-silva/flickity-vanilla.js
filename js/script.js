'use strict';
(function () {

    var accordionJQuery = function () {
        $('#accordion-jquery h3').click(function () {
            $('#accordion-jquery h3').removeClass('active')
            $(this).addClass('active');
        })
    };
    accordionJQuery();
})();