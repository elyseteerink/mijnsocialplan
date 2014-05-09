$('.plusContactpersoon').click(function () {
    $('#contactpersoonRow').clone().insertAfter(".contactpersoonRow:last");

    $(".contactpersoonRow:last div input").val('');
    $(".contactpersoonRow:last").children('button.infoknop').remove();

    $('.contactpersoonRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusUrl').click(function () {
    $('#urlRow').clone().insertAfter(".urlRow:last");

    $(".urlRow:last div input").val('');
    $(".urlRow:last").children('button.infoknop').remove();

    $('.urlRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusSuccesfactor').click(function () {
    $('#succesfactorRow').clone().insertAfter(".succesfactorRow:last");

    $(".succesfactorRow:last div input").val('');
    $(".succesfactorRow:last").children('button.infoknop').remove();

    $('.succesfactorRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusKans').click(function () {
    $('#kansRow').clone().insertAfter(".kansRow:last");

    $(".kansRow:last div input").val('');
    $(".kansRow:last").children('button.infoknop').remove();

    $('.kansRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusGevaar').click(function () {
    $('#gevaarRow').clone().insertAfter(".gevaarRow:last");

    $(".gevaarRow:last div input").val('');
    $(".gevaarRow:last").children('button.infoknop').remove();

    $('.gevaarRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusHashtag').click(function () {
    $('#hashtagRow').clone().insertAfter(".hashtagRow:last");

    $(".hashtagRow:last div input").val('');
    $(".hashtagRow:last").children('button.infoknop').remove();

    $('.hashtagRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusCommunity').click(function () {
    $('#communityRow').clone().insertAfter(".communityRow:last");

    $(".communityRow:last div input").val('');
    $(".communityRow:last").children('button.infoknop').remove();

    $('.communityRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusOnsdoel').click(function () {
    $('#onsdoelRow').clone().insertAfter(".onsdoelRow:last");

    $(".onsdoelRow:last div input").val('');
    $(".onsdoelRow:last").children('button.infoknop').remove();

    $('.onsdoelRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusVolgersdoel').click(function () {
    $('#volgersdoelRow').clone().insertAfter(".volgersdoelRow:last");

    $(".volgersdoelRow:last div input").val('');
    $(".volgersdoelRow:last").children('button.infoknop').remove();

    $('.volgersdoelRow:last').append('<button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

function plusCallToAction (caller) {

    var newInput = '<div id="calltoactionRow" class="calltoactionRow calltoactionRow-extra form-group"><label for="inputCalltoaction" class="col-lg-2">Call to action</label><div class="col-lg-3"><input type="text" class="form-control inline" id="inputCalltoaction" placeholder="action..."></div><button type="button" onClick="$(this).parent().remove();" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button></div>';

    $(newInput).insertBefore($(caller).parent().parent());
}


function plusPadNaarBinnen(caller) {
    var newInput = '<div class="input-group" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputPadnaarbinnen" placeholder="pad naar binnen..."><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="removePadNaarBinnen(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    $(newInput).insertBefore(caller);
}

function removePadNaarBinnen(caller) {
    $(caller).parent().parent().remove();
}

function plusContent(caller) {
    var count = $('#contentbox input').length;

    var newInput = '<div class="input-group" id="inputContentRow-' + (count + 1) + '" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputContent-' + (count + 1) + '" placeholder="content..." onblur="contentItemIngevuld(this);"><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="askRemoveContent(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    $(newInput).insertBefore(caller);

    var contentBlock = $('#contentUitwerking-1').clone();
    $(contentBlock).insertAfter('.contentUitwerking:last');

    $('.contentUitwerking:last').css('display', 'none');
    $('.contentUitwerking:last').attr('id', 'contentUitwerking-' + (count + 1));

    $('.contentUitwerking:last .calltoactionRow-extra').remove();

    $('.infoknop').popover('hide');
}

var removeContentCallerTemp;
function askRemoveContent(caller) {

    removeContentCallerTemp = caller;

    $('#removeContentItemSure').fadeIn();    
}

function removeContent(caller) {

    $('#removeContentItemSure').fadeOut();

    var contentUitwerkingId = $(caller).parent().parent().attr('id').split("-").pop();

    $(caller).parent().parent().fadeOut(500, function () {
        $(caller).parent().parent().remove();
    });

    $('#contentUitwerking-' + contentUitwerkingId).slideUp(1000, function () {
        $('#contentUitwerking-' + contentUitwerkingId).remove();
    });
}

function plusPadNaarBuiten(caller) {
    var newInput = '<div class="input-group" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputPadnaarbuiten" placeholder="pad naar buiten..."><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="removePadNaarBuiten(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    $(newInput).insertBefore(caller);
}

function removePadNaarBuiten(caller) {
    $(caller).parent().parent().remove();
}

$('.infoknop').popover('hide');


function activeTab(tab) {
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

function setTitel() {
    $('#plantitel').text($('#inputTitel').val());
}

function contentItemIngevuld(input)
{
    var contentBlockId = $(input).attr('id').split("-").pop();

    $('#contentUitwerking-' + contentBlockId).slideDown();

    if ($(input).val() !== "") {
        $('#contentUitwerking-' + contentBlockId + ' h4.contentTitel').text($(input).val());
    } else if ($(input).val() === "") {
        $('#contentUitwerking-' + contentBlockId).slideUp();
    }
}




