﻿$('.plusContactpersoon').click(function () {
    $('#contactpersoonRow').clone().css('display', 'none').insertAfter(".contactpersoonRow:last").slideDown();

    $(".contactpersoonRow:last div input").val('');
    $(".contactpersoonRow:last").children('button.infoknop').remove();

    $('.contactpersoonRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusUrl').click(function () {
    $('#urlRow').clone().css('display', 'none').insertAfter(".urlRow:last").slideDown();

    $(".urlRow:last div input").val('');
    $(".urlRow:last").children('button.infoknop').remove();

    $('.urlRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusSuccesfactor').click(function () {
    $('#succesfactorRow').clone().css('display', 'none').insertAfter(".succesfactorRow:last").slideDown();

    $(".succesfactorRow:last div input").val('');
    $(".succesfactorRow:last").children('button.infoknop').remove();

    $('.succesfactorRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusKans').click(function () {
    $('#kansRow').clone().css('display', 'none').insertAfter(".kansRow:last").slideDown();

    $(".kansRow:last div input").val('');
    $(".kansRow:last").children('button.infoknop').remove();

    $('.kansRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusGevaar').click(function () {
    $('#gevaarRow').clone().css('display', 'none').insertAfter(".gevaarRow:last").slideDown();

    $(".gevaarRow:last div input").val('');
    $(".gevaarRow:last").children('button.infoknop').remove();

    $('.gevaarRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusHashtag').click(function () {
    $('#hashtagRow').clone().css('display', 'none').insertAfter(".hashtagRow:last").slideDown();

    $(".hashtagRow:last div input").val('');
    $(".hashtagRow:last").children('button.infoknop').remove();

    $('.hashtagRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusCommunity').click(function () {
    $('#communityRow').clone().css('display', 'none').insertAfter(".communityRow:last").slideDown();

    $(".communityRow:last div input").val('');
    $(".communityRow:last").children('button.infoknop').remove();

    $('.communityRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusOnsdoel').click(function () {
    $('#onsdoelRow').clone().css('display', 'none').insertAfter(".onsdoelRow:last").slideDown();

    $(".onsdoelRow:last div input").val('');
    $(".onsdoelRow:last").children('button.infoknop').remove();

    $('.onsdoelRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

$('.plusVolgersdoel').click(function () {
    $('#volgersdoelRow').clone().css('display', 'none').insertAfter(".volgersdoelRow:last").slideDown();

    $(".volgersdoelRow:last div input").val('');
    $(".volgersdoelRow:last").children('button.infoknop').remove();

    $('.volgersdoelRow:last').append('<button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button>');
});

function plusCallToAction (caller) {

    var newInput = '<div id="calltoactionRow" class="calltoactionRow calltoactionRow-extra form-group"><label for="inputCalltoaction" class="col-lg-2">Call to action</label><div class="col-lg-3"><input type="text" class="form-control inline" id="inputCalltoaction" placeholder="action..."></div><button type="button" onClick="$(this).parent().slideUp(500, function () {$(this).remove();});" class="btn btn-danger btn-md inline"><span class="glyphicon glyphicon-remove"></span></button></div>';

    $(newInput).css('display', 'none').insertBefore($(caller).parent().parent()).slideDown();
}


function plusPadNaarBinnen(caller) {
    var newInput = '<div class="input-group" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputPadnaarbinnen" placeholder="pad naar binnen..."><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="removePadNaarBinnen(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    $(newInput).css('display', 'none').insertBefore(caller).fadeIn();
}

function removePadNaarBinnen(caller) {
    $(caller).parent().parent().fadeOut(500, function () { $(caller).parent().parent().remove(); });
}

function plusContent(caller) {
    var count = $(caller).parent().find('select').length;

    var kanaalID = $(caller).parents('.kanaalContentPanel').first().attr('id').split("-").pop();

    //var newInput = '<div class="input-group" id="inputContentRow-' + kanaalID + '-' + (count + 1) + '" style="margin-bottom: 3px;"><input type="text" class="form-control inline" id="inputContent-' + kanaalID + '-' + (count + 1) + '" placeholder="content..." onblur="contentItemIngevuld(this);"><span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="askRemoveContent(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';
    var newInput = '<div class="input-group" id="inputContentRow-' + kanaalID + '-' + (count + 1) + '" style="margin-bottom: 3px;">'+
        '<select class="form-control" id="inputContent-' + kanaalID + '-' + (count + 1) + '" onchange="contentItemIngevuld(this);">' +
                                    '<option>soort post...</option>' +
                                    '<option>Iets Grappigs</option>' +
                                    '<option>Iets Groots</option>' +
                                    '<option>Iets met de Groep</option>' +
                                    '<option>Iets Gratis</option>' +
                                    '<option>Nieuwsfeitje</option>' +
                                    '<option>Info / Nieuw product</option>' +
                                '</select>'+
    '<span class="input-group-btn"><button class="btn btn-danger" type="button" onclick="askRemoveContent(this);"><span class="glyphicon glyphicon-remove"></span></button></span></div>';

    $(newInput).css('display', 'none').insertBefore(caller).fadeIn();

    var contentBlock = '<div id="contentUitwerking-' + kanaalID + '-' + (count + 1) + '" class="contentUitwerking col-lg-12" style="display: none;">'+
                                '<h4 class="contentTitel">soort post...</h4>'+
                                '<div class="form-group">'+
                                    '<label for="checkboxOnderdelen" class="col-lg-2">Onderdelen</label>'+
                                    '<div class="col-lg-1">'+
                                        '<input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Video <br />' +
                                        '<input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Foto <br />'+
                                        '<input type="checkbox" name="socialplan[kanalen][][contentitems][][onderdelen]" /> Tekst'+
                                    '</div>' +
                                    '&nbsp;'+
                                    '<button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Vink hier aan wat van toepassing is op deze soort post. Ga je deze alleen in de vorm van tekst doen of voeg je er een plaatje en of filmpje aan toe? Vink je hier tekst en foto aan? Dan is deze post elke week in de vorm van tekst met een bijbehorend plaatje."><span class="glyphicon glyphicon-info-sign"></span></button>' +
                                '</div>' +
                                '<br />'+
                                '<div class="form-group">' +
                                    '<label for="radioShareablelikable" class="col-lg-2">Likable/Shareble</label>' +
                                    '<div class="col-lg-2">' +

                                        '<input type="radio" name="radioShareablelikable" /> Like <br />' +
                                        '<input type="radio" name="radioShareablelikable" /> Comment <br />' +
                                        '<input type="radio" name="radioShareablelikable" /> Share' +
                                    '</div>' +
                                    '&nbsp;'+
                                    '<button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Hier kies je waar je op inzet. Ga je met deze soort post voornamelijk voor likes of wil je meer teweeg brengen en ga je voor shares? Let wel, voor shares moet de post meer lading dekken dan een post die voornamelijk likeable is."><span class="glyphicon glyphicon-info-sign"></span></button>' +
                                '</div>' +
                                '<br />' +
                                '<div id="calltoactionRow" class="calltoactionRow form-group">'+
                                    '<label for="inputCalltoaction" class="col-lg-2">Call to action</label>'+
                                    '<div class="col-lg-3">'+
                                        '<input type="text" class="form-control inline" id="inputCalltoaction" placeholder="action...">'+
                                    '</div>'+
                                    '<button type="button" class="infoknop btn btn-default btn-md inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Call to action, dit zijn de woorden die je steeds terug zal laten komen in de berichten. Bijvoorbeeld: Klik hier: of, Winnen? Kan hier: of, Tot zo!"><span class="glyphicon glyphicon-info-sign"></span></button>' +
                                '</div>'+
                                '<div class="form-group">'+
                                    '<div class="col-lg-2">'+
                                    '</div>'+
                                    '<div class="col-lg-3">'+
                                        '<button type="button" class="btn btn-primary btn-md" onclick="plusCallToAction(this);">'+
                                            '<span class="glyphicon glyphicon-plus"></span> Call to action' +
                                        '</button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';


    $(caller).parent().parent().append(contentBlock);//find('.contentUitwerking').last().insertAfter('.contentUitwerking:last');

    //$(caller).parent().parent().find('.contentUitwerking:last').css('display', 'none');
    //$(caller).parent().parent().find('.contentUitwerking:last').attr('id', 'contentUitwerking-' + kanaalID + '-' + (count + 1));

    //$(caller).parent().parent().find('.contentUitwerking:last .calltoactionRow-extra').remove();

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
    $(newInput).css('display', 'none').insertBefore(caller).fadeIn();
}

function removePadNaarBuiten(caller) {
    $(caller).parent().parent().fadeOut(500, function () { $(caller).parent().parent().remove(); });
}

$('.infoknop').popover('hide');


function activeTab(tab) {
    
    $('html, body').animate({ scrollTop: 0 }, 'slow', '', function () {
        $('.nav-tabs a[href="#' + tab + '"]').tab('show');
    });
}

function setTitel() {
    $('#plantitel').text($('#inputTitel').val());
    $('#saveAlertPlanTitel').text($('#inputTitel').val());

    if ($('#userPlannenLi-' + $('#inputTitel').val()).length == 0) {
        var planMenuItem = '<li id="userPlannenLi-' + $('#inputTitel').val() + '"><a href="#" onclick="$(\'#opgeslagenPlanPopup\').fadeIn();">' + $('#inputTitel').val() + '</a></li>';
        $('#userPlannenUl').prepend(planMenuItem);
    }

    showSaved();
}

function showSaved()
{
    $('#savedAlert').slideDown('slow');

    setTimeout(function () {
        $('#savedAlert').slideUp('slow');
    }, 10000);
}

function kanaalTitelIngevuld(caller) {



    if ($(caller).val() !== "") {
        $(caller).parent().parent().parent().parent().parent().find('h3.panel-title').first().text($(caller).val());
        $(caller).parent().parent().parent().parent().find('.kanaalContentContainer').first().slideDown();
    } else if ($(caller).val() === "") {
        $(caller).parent().parent().parent().parent().parent().find('h3.panel-title').first().text("Nieuw kanaal");
        $(caller).parent().parent().parent().parent().find('.kanaalContentContainer').first().slideUp();
    }
}

function contentItemIngevuld(input)
{
    var contentBlockId = $(input).attr('id').split("-").pop();

    var kanaalID = $(input).parents('.kanaalContentPanel').first().attr('id').split("-").pop();


    if ($(input).val() != "soort post...") {

        if ($(input).val() !== "") {
            $('#contentUitwerking-' + kanaalID + '-' + contentBlockId + ' h4.contentTitel').text($(input).val());
            $('#contentUitwerking-' + kanaalID + '-' + contentBlockId).slideDown();
        } else if ($(input).val() === "") {
            $('#contentUitwerking-' + kanaalID + '-' + contentBlockId + ' h4.contentTitel').text($(input).val());
            $('#contentUitwerking-' + kanaalID + '-' + contentBlockId).slideUp();
        }
    }
    else {
        $('#contentUitwerking-' + kanaalID + '-' + contentBlockId + ' h4.contentTitel').text($(input).val());
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
                                '<div class="input-group">' +
                                    '<input type="text" onblur="kanaalTitelIngevuld(this);" class="form-control" id="inputKanaalTitel-' + nieuwKanaalIDNr + '" placeholder="bijv. Facebook of Twitter">' +
                                    '<span class="input-group-btn">' +
                                        '<button class="btn btn-default" type="button" onclick="kanaalTitelIngevuld($(this).parent().parent().find(\'#inputKanaalTitel\'));">' +
                                            '<span class="glyphicon glyphicon-ok"></span>' +
                                        '</button>' +
                                    '</span>' +
                                '</div>' +
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
                                '<select class="form-control" id="inputContent-1" onchange="contentItemIngevuld(this);" style="margin-bottom: 3px;">' +
                                    '<option>soort post...</option>' +
                                    '<option>Iets Grappigs</option>' +
                                    '<option>Iets Groots</option>' +
                                    '<option>Iets met de Groep</option>' +
                                    '<option>Iets Gratis</option>' +
                                    '<option>Nieuwsfeitje</option>' +
                                    '<option>Info / Nieuw product</option>' +
                                '</select>' +
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
       ' <h4 class="contentTitel">soort post...</h4>' +
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
'    <div class="col-lg-2">' +

'        <input type="radio" name="radioShareablelikable" /> Like <br />' +
'        <input type="radio" name="radioShareablelikable" /> Comment <br />' +
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

    $('#inputKanaalTitel-' + nieuwKanaalIDNr + '').keyup(function (e) {
        if (e.keyCode == 13) {
            kanaalTitelIngevuld($('#inputKanaalTitel-' + nieuwKanaalIDNr + ''));
        }
    });

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

$('.infoknop').blur(function (eventObject) {

    if($('div.popover').length > 0)
        $(this).trigger('click');
});

function preparePlanningTab()
{
    setPlanningFrequentie();

    $('.planningContentSelect').each(function (index, element) {
        $(element).html(getContentItemsAsOptions());
    });
}


function setPlanningFrequentie() {
    var contentItems = $('h4.contentTitel');

    var itemsCount = 0;

    $(contentItems).each(function (index, element) {
        var contentItem = $(element).html();
        if (contentItem != "soort post...")
            itemsCount++;
    });
    
    $('#inputFrequentie').val(itemsCount);
}

function getContentItemsAsOptions()
{
    var contentItems = $('h4.contentTitel');

    var optionsHtml = '<option>Kies post</option>';

    $(contentItems).each(function (index, element) {
        var contentItem = $(element).html();
        if (contentItem != "soort post...")
            optionsHtml += '<option>' + contentItem + '</option>';
    });

    return optionsHtml;
}

function plusPlanningActieMoment()
{
    var id = 'planningActieMomentRow-' + $('.planningActieMomentRow').length.toString();

    var newRowHtml = '<div id="' + id + '" class="planningActieMomentRow form-group" style="display: none;">' +
                '<label for="inputFrequentie" class="col-lg-2 control-label"></label>' +
                '<div class="col-lg-2">' +
                    '<select class="form-control inline">' +
                        '<option>Dag</option>' +
                        '<option>Maandag</option>' +
                        '<option>Dinsdag</option>' +
                        '<option>Woensdag</option>' +
                        '<option>Donderdag</option>' +
                        '<option>Vrijdag</option>' +
                        '<option>Zaterdag</option>' +
                        '<option>Zondag</option>' +
                    '</select>' +
                '</div>' +
                '<div class="col-lg-2">' +
                    '<select class="form-control inline">' +
                        '<option>Tijd</option>' +
                        '<option>07:00</option>' +
                        '<option>08:00</option>' +
                        '<option>09:00</option>' +
                        '<option>10:00</option>' +
                        '<option>11:00</option>' +
                        '<option>12:00</option>' +
                        '<option>13:00</option>' +
                        '<option>14:00</option>' +
                        '<option>15:00</option>' +
                        '<option>16:00</option>' +
                        '<option>17:00</option>' +
                        '<option>18:00</option>' +
                        '<option>19:00</option>' +
                        '<option>20:00</option>' +
                        '<option>21:00</option>' +
                        '<option>22:00</option>' +
                        '<option>23:00</option>' +
                        '<option>00:00</option>' +
                    '</select>' +
                '</div>' +
                '<div class="col-lg-4">' +
                    '<select class="planningContentSelect form-control inline">' +
                        getContentItemsAsOptions() +
                    '</select>'+
                '</div>'+
                '<button class="btn btn-danger" type="button" onclick="removePlanningActieMoment(this);"><span class="glyphicon glyphicon-remove"></span></button>'+
            '</div>';

    $('#planningActieMomentRows').append(newRowHtml);
    $('#'+id).slideDown();
}

function removePlanningActieMoment(caller)
{
    $(caller).parent().slideUp(500, function () {
        $(caller).parent().remove();
    });
}

$('#inputKanaalTitel-1').keyup(function (e) {
    if (e.keyCode == 13) {
        kanaalTitelIngevuld($('#inputKanaalTitel-1'));
    }
});


$("input[name=checkboxReminders]:radio").change(function () {
    $('#remindersPopup').fadeIn();
});

$("#printknop").click(function () {
    $('#printPopup').fadeIn();
});