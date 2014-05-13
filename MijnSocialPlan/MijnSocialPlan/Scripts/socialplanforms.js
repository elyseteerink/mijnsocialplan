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
    var count = $(caller).parent().find('input').length;

    alert("aantal content inputs = " + count);

    var kanaalID = $(caller).parents('.kanaalContentPanel').first().attr('id').split("-").pop();

    var newInput = '<div class="input-group" id="inputContentRow-' + kanaalID + '-' + (count + 1) + '" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputContent-' + kanaalID + '-' + (count + 1) + '" placeholder="content..." onblur="contentItemIngevuld(this);"><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="askRemoveContent(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    $(newInput).insertBefore(caller);

    var contentBlock = $('#contentUitwerking-1-1').clone();
    $(caller).parent().parent().append(contentBlock);//find('.contentUitwerking').last().insertAfter('.contentUitwerking:last');

    $(caller).parent().parent().find('.contentUitwerking:last').css('display', 'none');
    $(caller).parent().parent().find('.contentUitwerking:last').attr('id', 'contentUitwerking-' + kanaalID + '-' + (count + 1));

    $(caller).parent().parent().find('.contentUitwerking:last .calltoactionRow-extra').remove();

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

    var kanaalID = $(caller).parents('.kanaalContentPanel').first().attr('id').split("-").pop();

    $(caller).parent().parent().fadeOut(500, function () {
        $(caller).parent().parent().remove();
    });

    $('#contentUitwerking-' + kanaalID + '-' + contentUitwerkingId).slideUp(1000, function () {
        $('#contentUitwerking-' + kanaalID + '-' + contentUitwerkingId).remove();
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

function kanaalTitelIngevuld(caller) {

    if ($(caller).val() !== "") {
        $(caller).parent().parent().parent().parent().find('h3.panel-title').first().text($(caller).val());
        $(caller).parent().parent().parent().find('.kanaalContentContainer').first().slideDown();
    } else if ($(caller).val() === "") {
        $(caller).parent().parent().parent().parent().find('h3.panel-title').first().text("Nieuw kanaal");
        $(caller).parent().parent().parent().find('.kanaalContentContainer').first().slideUp();
    }
}

function contentItemIngevuld(input)
{
    var contentBlockId = $(input).attr('id').split("-").pop();

    var kanaalID = $(input).parents('.kanaalContentPanel').first().attr('id').split("-").pop();

    if ($(input).val() !== "") {
        $('#contentUitwerking-' + kanaalID + '-' + contentBlockId + ' h4.contentTitel').text($(input).val());
        $('#contentUitwerking-' + kanaalID + '-' + contentBlockId).slideDown();
    } else if ($(input).val() === "") {
        $('#contentUitwerking-' + kanaalID + '-' + contentBlockId).slideUp();
    }
}

function toggleKanaalPanel(id)
{
    var kanaalPanel = $('#kanaalContentPanel-' + id);
    var panelBody = $(kanaalPanel).children('div.panel-body').first();
    panelBody.slideToggle();

    var chevron = $(kanaalPanel).find('div.panel-heading span').first();

    if ($(chevron).hasClass('glyphicon-chevron-down'))
    {
        $(chevron).removeClass('glyphicon-chevron-down');
        $(chevron).addClass('glyphicon-chevron-right');
    }
    else if ($(chevron).hasClass('glyphicon-chevron-right'))
    {
        $(chevron).removeClass('glyphicon-chevron-right');
        $(chevron).addClass('glyphicon-chevron-down');
    }
}

$('button#plusKanaal').click(function () {

    var allePanels = $('.kanaalContentPanel');

    var nieuwKanaalIDNr = allePanels.length + 1;

    for (i = 0; i < allePanels.length; i++)
    {
        if ($(allePanels[i]).find('div.panel-heading span').first().hasClass('glyphicon-chevron-down'))
            toggleKanaalPanel(i+1);
    }

    $('#kanaalContentPanelContainer').append('<div id="kanaalContentPanel-' + nieuwKanaalIDNr + '" class="kanaalContentPanel panel panel-default" style="display: none;">' +
                    '<div class="panel-heading" onclick="toggleKanaalPanel(' + nieuwKanaalIDNr + ');">' +
                        '<span class="glyphicon glyphicon-chevron-down" style="float:left; margin-right: 10px; cursor: pointer;"></span>' +
                        '<h3 class="panel-title" style="float:left;">Nieuw kanaal</h3>' +
                        '<span class="glyphicon glyphicon-remove" onclick="deleteKanaalPanel(' + nieuwKanaalIDNr + ');" style="float:right; cursor: pointer;"></span>' +
                        '<div style="clear: both;"></div>' +
                    '</div>' +
                    '<div class="panel-body">' +

                        '<div class="form-group">' +
                            '<label for="inputKanaalTitel" class="col-lg-2 control-label">Social media kanaal</label>' +
                            '<div class="col-lg-4">' +
                                '<input type="text" onblur="kanaalTitelIngevuld(this);" class="form-control" id="inputKanaalTitel" placeholder="bijv. Facebook of Twitter">' +
                            '</div>' +
                            '<button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +
                        '</div>' +

                        '<div class="kanaalContentContainer" style="display: none">' +
                            '<div class="col-lg-12">' +
                                '<h4>Cores & paths</h4>' +
                            '</div>' +
                            '<br />' +
                            '<div id="padnaarbinnenbox" class="corespathsbox col-lg-3 inline">' +
                                '<input type="text" class="form-control inline" id="inputPadnaarbinnen" name="socialplan[kanalen][][padennaarbinnen][]" placeholder="pad naar binnen...">' +

                                '<button type="button" class="vol btn btn-primary btn-md" onclick="plusPadNaarBinnen(this);">' +
                                    '<span class="glyphicon glyphicon-plus inline"></span> Pad naar binnen' +
                                '</button>' +
                            '</div>' +
                            '<div class="forwardarrow col-lg-1">' +
                            '</div>' +
                            '<div id="contentbox" class="corespathsbox col-lg-3 inline">' +
                                '<input type="text" class="form-control inline" id="inputContent-1" name="socialplan[kanalen][][contentitems][][titel]" placeholder="content..." onblur="contentItemIngevuld(this);">' +
                                '<button type="button" class="vol btn btn-primary btn-md" onclick="plusContent(this);">' +
                                    '<span class="glyphicon glyphicon-plus inline"></span> Content' +
                                '</button>' +
                            '</div>' +
                            '<div class="forwardarrow col-lg-1">' +

                            '</div>' +
                            '<div id="padnaarbuitenbox" class="corespathsbox col-lg-3 inline">' +
                                '<input type="text" class="form-control inline" id="inputPadnaarbinnen" name="socialplan[kanalen][][padennaarbuiten][]" placeholder="pad naar buiten...">' +
                                '<button type="button" class="vol btn btn-primary btn-md" onclick="plusPadNaarBuiten(this);">' +
                                    '<span class="glyphicon glyphicon-plus inline"></span> Pad naar buiten' +
                                '</button>' +
                            '</div>' +
                            '&nbsp;' +
    '<button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +

    '<div class="col-lg-12 block" style="clear: both; height: 50px;"></div>' +

    '<br />' +
   ' <div id="contentUitwerking-' + nieuwKanaalIDNr + '-1" class="contentUitwerking col-lg-12" style="display: none;">' +
       ' <h4 class="contentTitel">Content titel</h4>' +
      '  <div class="form-group">' +
       '     <label for="selectSoortpost" class="col-lg-2">Soort post</label>' +
        '    <div class="col-lg-4">' +
          '      <select class="form-control" id="selectSoortpost">' +
            '        <option>Humor</option>' +
            '        <option>Informatief</option>' +
            '        <option>Winactie</option>' +
           '     </select>' +
          '  </div>' +
        '    &nbsp;' +
  '  <button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +
'</div>' +
'<br />' +
'<div class="form-group">' +
  '  <label for="checkboxOnderdelen" class="col-lg-2">Onderdelen</label>' +
  '  <div class="col-lg-1">' +
   '     <input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Video <br />' +
   '     <input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Foto <br />' +
   '     <input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Tekst' +
  '  </div>' +
  '  &nbsp;' +
  '  <button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +
'</div>' +
'<br />' +
'<div class="form-group">' +
'    <label for="radioShareablelikable" class="col-lg-2">Likable/Shareble</label>' +
'    <div class="col-lg-1">' +

'        <input type="radio" name="radioShareablelikable" /> Like <br />' +
 '       <input type="radio" name="radioShareablelikable" /> Share' +
 '   </div>' +
 '   &nbsp;' +
 '   <button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +
'</div>' +
'<br />' +
'<div id="calltoactionRow" class="calltoactionRow form-group">' +
 '   <label for="inputCalltoaction" class="col-lg-2">Call to action</label>' +
  '  <div class="col-lg-3">' +
   '     <input type="text" class="form-control inline" id="inputCalltoaction" placeholder="action...">' +
   ' </div>' +
   ' <button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="glyphicon glyphicon-info-sign"></span></button>' +
'</div>' +
'<div class="form-group">' +
 '   <div class="col-lg-2">' +
  '  </div>' +
   ' <div class="col-lg-3">' +
    '    <button type="button" class="btn btn-primary btn-md" onclick="plusCallToAction(this);">' +
     '       <span class="glyphicon glyphicon-plus"></span> Call to action' +
      '  </button>' +
    '</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' + 
    '</div>');

    $('#kanaalContentPanel-' + nieuwKanaalIDNr).slideDown();

});

function deleteKanaalPanel(id)
{
    var kanaalPanel = $('#kanaalContentPanel-' + id);
    var panelBody = $(kanaalPanel).children('div.panel-body').first();
    panelBody.slideUp(1000, function () {
        $(kanaalPanel).remove();
    });
}