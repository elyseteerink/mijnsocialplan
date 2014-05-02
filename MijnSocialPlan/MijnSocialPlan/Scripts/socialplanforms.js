
$('.nogeenknop').click(function () {
    $('.inputs-row')
                       .clone()
                       .insertAfter('.inputs-row');
});


/*$('<span class="add">+</span>').appendTo('.form-fields:last');
$('.add').live('click',
               function () {
                   $('.form-fields:first')
                       .clone()
                       .insertAfter('.form-fields:last');
                   $('.add').remove();
                   $('<span class="add">+</span>')
                       .appendTo('.form-fields:last');
               });*/