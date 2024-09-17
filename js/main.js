	$(document).ready(function() {
    //document.ondragstart = noselect;
    //document.onselectstart = noselect;
  //document.oncontextmenu = noselect;
    //function noselect() {return false;}
	// $('.phone').mask("+389999999999");

    $('.app, #scrollup').on('click', function () {
      $('.navbar-collapse').collapse('hide');
      //return false;
    });

    $('input[type=tel]').mask("+38 (___) ___-__-__");
    var $body;

    $body = $('body');

    $body.find('input[type="tel"]').each(function(){
      $.mask.definitions['~']='[1245679]';
      $(this).mask("+38 (0~9) 999-99-99", {autoСЃlear: false});
    });
    $('input[type="tel"]')
          //.addClass('jsValidate')
          //.removeAttr('required')
    .attr({'placeholder':'+38 (___) ___-__-__'});

    $body.on('keyup','input[type="tel"]',function(){
      var phone = $(this),
      phoneVal = phone.val(),
      form = $(this).parents('form');

            // if ( (phoneVal.indexOf("_") != -1) || phoneVal == '' ) {
            //   form.find('#place_order').attr('disabled',true);
            // } else {
            //   form.find('#place_order').removeAttr('disabled');
            // }
    });

    // var searchBlock = $('.form_search');
    // $(document).on('click', '.open_search', function () {
    //   searchBlock.slideToggle();
    //   return false;
    // });

    // $('video').attr('controlsList', 'noplaybackrate nodownload');
    // $('video').attr('disablepictureinpicture','');

    $('video').bind('contextmenu', function(e) {return false; });
    $('video').attr('controlsList', 'noplaybackrate nodownload');
    $('video').attr('disablepictureinpicture','');
    $('video').attr('preload','auto');
    $('.rsfv-video').attr('poster','https://prosublim.com.ua/catalog/wp-content/themes/prosublimtheme/images/video_frame1.jpg');

    $('img').hover(
     function() {
      $(this).data('title', $(this).attr('title'));
      $(this).removeAttr('title');
    },
    function() {
      $(this).attr('title', $(this).data('title'))
    }
    );
//Validation
    $('.jsValidate').feelform({
     validateOnTheFly: true,
   });
    $('.header-href>li>a').on('click', function(){
     $('.navbar-collapse').collapse('hide');
   });
//Button up
    jQuery('#scrollup').mouseover( function(){
     jQuery( this ).animate({opacity: 1},100);
   }).mouseout( function(){
     jQuery( this ).animate({opacity: 0.8},100);
   }).click( function(){
     window.scroll(0 ,0); 
     return false;
   });

   jQuery(window).scroll(function(){
     if ( jQuery(document).scrollTop() > 0 ) {
      jQuery('#scrollup').fadeIn('fast');
    } else {
      jQuery('#scrollup').fadeOut('fast');
    }
  });
   var carousel = $('.prod_rel');
   carousel.on({

     'initialized.owl.carousel': function () {
      carousel.find('.item').show();
      carousel.find('.loading-placeholder').hide();
    }

  });
    // Owl Carousel Reviews
   $('.prod_rel').owlCarousel({
     loop:true,
     margin:10,
     navigation : true,
     navigationText : ["<i class='fa fa-angle-double-left fa-3x'></i>","<i class='fa fa-angle-double-right fa-3x'></i>"],
     rewindNav : true,
     slideSpeed: 800,
     scrollPerPage : true,
     autoPlay : true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     pagination : false,
     items : 4,
     itemsDesktop : [900,3],
     itemsDesktopSmall : [700,3],
     itemsMobile: [400,2]
   });
    // Owl Carousel video
   $('.video_block').owlCarousel({
    loop:true,
    margin:10,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-double-left fa-2x'></i>","<i class='fa fa-angle-double-right fa-2x'></i>"],
    rewindNav : true,
    slideSpeed: 800,
    scrollPerPage : true,
      // autoPlay : true,
      // autoplayTimeout:2000,
      // autoplayHoverPause:true,
    pagination : false,
    items : 3,
    itemsDesktop : [900,3],
    itemsDesktopSmall : [700,3],
    itemsMobile: [400,2]
  });
   $('.video_tabs').owlCarousel({
      //loop:true,
      //margin:10,
    navigation : false,
      //navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      //rewindNav : true,
      //slideSpeed: 800,
      //scrollPerPage : true,
      //autoPlay : false,
      //autoplayTimeout:2000,
      //autoplayHoverPause:true,
    pagination : true,
    items : 4,
    itemsDesktop : [900,3],
    itemsDesktopSmall : [700,2],
    itemsMobile: [480,1]
  });
//product carousel
   $('.product-carousel').owlCarousel({
     loop:true,
     slideSpeed: 800,
     pagination : false,
     navigation: true,
     navigationText : ["<",">"],
     scrollPerPage : true,
     items : 4,
     itemsDesktop : [900,4],
     itemsTablet : [700,3],
     itemsMobile: [480,2]
   });
   $('.reviews_spal').owlCarousel({
    loop:true,
    margin:10,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left fa-3x'></i>","<i class='fa fa-angle-right fa-3x'></i>"],
    rewindNav : true,
    slideSpeed: 800,
    scrollPerPage : true,
    autoPlay : false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    pagination : false,
    items : 4,
    itemsDesktop : [991,3],
    itemsDesktopSmall : [767,3],
    itemsMobile: [480,1]
  });
   $('.carousel-photo').owlCarousel({
    loop: true,
    items: 4,
    itemsDesktop: [991, 3],
    itemsDesktopSmall: [767, 3],
    itemsMobile: [480, 1],
    scrollPerPage: true,

    autoHeight: false,
    slideSpeed: 1000,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-double-left fa-3x icon-prev'></i>", "<i class='fa fa-angle-double-right fa-3x icon-next'></i>"],
    pagination: false,
    autoPlay: false
  });
   $('.volonterstvo').owlCarousel({
    loop:true,
    margin:10,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left fa-3x'></i>","<i class='fa fa-angle-right fa-3x'></i>"],
    rewindNav : true,
    slideSpeed: 800,
    scrollPerPage : true,
    autoPlay : false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    pagination : false,
    items : 4,
    itemsDesktop : [991,3],
    itemsDesktopSmall : [767,3],
    itemsMobile: [480,1]
  });
//mask maxlength 7 and only numbers
   $('input[type=number]').unbind('keyup change input paste').bind('keyup change input paste',function(e){
     var $this = $(this);
     var val = $this.val();
     var valLength = val.length;
     var maxCount = $this.attr('maxlength');
     if(valLength>maxCount){
      $this.val($this.val().substring(0,maxCount));
    }
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
//Fancybox
//$('.jsFancybox a').fancybox();
   $('[data-fancybox]').fancybox({hash : false,protect: true,backFocus : false});
//Fancybox
//$('.jsFancybox-galery a').fancybox();
   $('[data-toggle="tooltip"]').tooltip();
  // Constructor
   $('#constr-picture .tab-title a.upload').trigger('click')
   $('.constr-prod a').bind('click', function(event) {
     $('.constr-prod a').removeClass('curr');
    //$('#prod_id').val($(this).attr('id').replace('prod', ''))
     $(this).addClass('curr');
     $('#input_sizes optgroup').css('display', 'none');
     $('#input_sizes optgroup[label="'+$(this).text()+'"]').css('display', 'block');
     if ($('#input_sizes optgroup[label="'+$(this).text()+'"] option[value="'+$('#input_sizes').val()+'"]').length==0) {
       $('#input_sizes optgroup[label="'+$(this).text()+'"] option:first').attr('selected', true);
       $('#input_sizes').trigger('change');
     }
     event.preventDefault();
   });
   $('.constr-size #input_sizes').change(function(event) {
     if ($('#input_sizes').val() == '') {
      $('#input_size_w').attr('readonly', true).val('');
      $('.#input_size_h').attr('readonly', true).val('');
      return;
    }
    var aSize = $('#input_sizes').val().replace('СЃРј', '').replace(' ', '').split('x');
    if (aSize[0] === undefined || aSize[1] === undefined) {
      return;
    }
    if (aSize[0]=='0' || aSize[1] == '0') {
      $('#input_size_w').attr('readonly', false);
      $('#input_size_h').attr('readonly', false);
      $('#input_size_w').focus();
    }
    else {
      $('#input_size_w').attr('readonly', true).val(aSize[0]);
      $('#input_size_h').attr('readonly', true).val(aSize[1]);
    }
  });
   if ($('.constr-size #input_sizes').length > 0) {
     if ($('#input_size_w').val()=='' || $('#input_size_h').val()=='') {
      $('#input_sizes').trigger('change');
    }
  }
  $('.constr-prod a.curr').trigger('click');
  $('#input_size_w, #input_size_h').keyup(function() {
  });
  $('.constr-tkan li a').bind('click', function(event) {
  	$('.constr-tkan li a').removeClass('curr');
   // $('#input_tkan').val($(this).attr('class').replace('tkan', '').replace('item-', '').replace(' ', ''));
   $(this).addClass('curr');
   event.preventDefault();
 });

  var sync4 = $("#sync4");
  var sync5 = $("#sync5");
  sync4.owlCarousel({
  	singleItem : true,
  	slideSpeed : 1000,
  	navigation: true,
  	navigationText : ["<i class='fa fa-angle-double-left fa-3x'></i>","<i class='fa fa-angle-double-right fa-3x'></i>"],
  	pagination:false,
  	afterAction : syncPosition,
  	responsiveRefreshRate : 200,
  	touchDrag: false,
  	mouseDrag: false,
  	lazyLoad:true
  });
  sync5.owlCarousel({
  	items : 5,
  	itemsDesktop      : [1199,5],
  	itemsDesktopSmall     : [991,5],
  	itemsTablet       : [768,5],
  	itemsMobile       : [479,4],
  	pagination:true,
  	navigation: false,
  	navigationText : ["<",">"],
  	responsiveRefreshRate : 100,
  	afterInit : function(el){
  		el.find(".owl-item").eq(0).addClass("synced");
  	}
  });
  function syncPosition(el){
  	var current = this.currentItem;
  	$(".simg")
  	.find(".owl-item")
  	.removeClass("proded")
  	.eq(current)
  	.addClass("proded")
  	if($(".simg").data("owlCarousel") !== undefined){
  		center(current)
  	}
  }
  $("#sync5").on("click", ".owl-item", function(e){
  	e.preventDefault();
  	var number = $(this).data("owlItem");
  	sync4.trigger("owl.goTo",number);
  });
  function center(number){
  	var sync5visible = sync5.data("owlCarousel").owl.visibleItems;
  	var num = number;
  	var found = false;
  	for(var i in sync5visible){
  		if(num === sync5visible[i]){
  			var found = true;
  		}
  	}
  	if(found===false){
  		if(num>sync5visible[sync5visible.length-1]){
  			sync5.trigger("owl.goTo", num - sync5visible.length+2)
  		}
  		else{
  			if(num - 1 === -1){
  				num = 0;
  			}
  			sync5.trigger("owl.goTo", num);
  		}
  	} 
  	else if(num === sync5visible[sync5visible.length-1]){
  		sync5.trigger("owl.goTo", sync5visible[1])
  	} 
  	else if(num === sync5visible[0]){
  		sync5.trigger("owl.goTo", num-1)
  	}
  }
  $(".hidden_block").hide();
  $('.show_text_constr').click(function(){
    $('.hidden_block').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
        $('.show_text_constr').html('С‡РёС‚Р°С‚Рё РїРѕРІРЅС–СЃС‚СЋ'+'&nbsp;'+'<i class="fa fa-angle-down"></i>');
      } else {
        $('.show_text_constr').html('Р·РіРѕСЂРЅСѓС‚Рё'+'&nbsp;'+'<i class="fa fa-angle-up"></i>');
      }             
    });
    return false;
  });
  $(".hidden_block").hide();
  $('.show_text_constr_ru').click(function(){
    $('.hidden_block').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
        $('.show_text_constr_ru').html('С‡РёС‚Р°С‚СЊ РїРѕР»РЅРѕСЃС‚СЊСЋ'+'&nbsp;'+'<i class="fa fa-angle-down"></i>');
      } else {
        $('.show_text_constr_ru').html('СЃРІРµСЂРЅСѓС‚СЊ'+'&nbsp;'+'<i class="fa fa-angle-up"></i>');
      }             
    });
    return false;
  });
  $(".hidden_block_dakim").hide();
  $('.show_dakim').click(function(){
    $('.hidden_block_dakim').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
        $('.show_dakim').html('С‡РёС‚Р°С‚Рё РїРѕРІРЅС–СЃС‚СЋ'+'&nbsp;'+'<i class="fa fa-angle-down"></i>');
      } else {
        $('.show_dakim').html('Р·РіРѕСЂРЅСѓС‚Рё'+'&nbsp;'+'<i class="fa fa-angle-up"></i>');
      }             
    });
    return false;
  });
  $(".hidden_block_dakim").hide();
  $('.show_dakim_ru').click(function(){
    $('.hidden_block_dakim').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
        $('.show_dakim_ru').html('С‡РёС‚Р°С‚СЊ РїРѕР»РЅРѕСЃС‚СЊСЋ'+'&nbsp;'+'<i class="fa fa-angle-down"></i>');
      } else {
        $('.show_dakim_ru').html('СЃРІРµСЂРЅСѓС‚СЊ'+'&nbsp;'+'<i class="fa fa-angle-up"></i>');
      }             
    });
    return false;
  });

  $('#audio-control').click(function () {
    if ($("#movie").prop('muted')) {
      $("#movie").prop('muted', false);
      $(this).html('<svg class="icon" viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg"><path d="m16.417 9.583a7.917 7.917 0 1 1 -7.917-7.917 7.917 7.917 0 0 1 7.917 7.917zm-8.577-3.533c0-.435-.252-.54-.56-.232l-2.12 2.122h-1.456a.794.794 0 0 0 -.791.793v1.686a.794.794 0 0 0 .791.792h1.457l2.12 2.12c.308.308.56.204.56-.232zm3.84 3.524 1.49-1.49a.396.396 0 0 0 -.56-.56l-1.49 1.49-1.49-1.49a.396.396 0 0 0 -.56.56l1.49 1.49-1.49 1.49a.396.396 0 1 0 .56.56l1.49-1.49 1.49 1.49a.396.396 0 0 0 .56-.56z"/></svg>');
            // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#movie").prop('muted', true);
      $(this).html('<svg class="icon" viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg"><path d="m16.417 9.583a7.917 7.917 0 1 1 -7.917-7.917 7.917 7.917 0 0 1 7.917 7.917zm-8.577-3.523c0-.435-.252-.54-.56-.232l-2.12 2.12h-1.456a.794.794 0 0 0 -.791.792v1.687a.794.794 0 0 0 .791.792h1.457l2.12 2.12c.308.308.56.204.56-.232zm1.792 5.336a2.566 2.566 0 0 0 0-3.625.396.396 0 0 0 -.56.56 1.775 1.775 0 0 1 0 2.506.396.396 0 1 0 .56.56zm1.305 1.305a4.41 4.41 0 0 0 0-6.235.396.396 0 0 0 -.56.56 3.618 3.618 0 0 1 0 5.116.396.396 0 1 0 .56.56zm2.68-.764a6.25 6.25 0 0 0 -1.375-6.776.396.396 0 1 0 -.56.56 5.464 5.464 0 0 1 0 7.726.396.396 0 1 0 .56.56 6.216 6.216 0 0 0 1.374-2.07z"/></svg>');
    }
  });
        /* Adding Toggle Video Controls  10072024 */
  const video = $(".movieProc");

  video.on({

    click: function () {
      if ($(this).attr("controls")) {
        $(this).removeAttr("controls");
        $(this).attr('muted', 'muted');

      } else {
        $(this).attr("controls", "controls");

        $(this).removeAttr('muted', true);
      }
    }
  });
   // РЈРїСЂР°РІР»РµРЅРёРµ РѕС‚РєСЂС‹С‚РёРµРј Рё Р·Р°РєСЂС‹С‚РёРµРј С„РёР»СЊС‚СЂР°
  $('.wc-filter-btn, .wc-filter-overlay, .wc-filter-close').click(function () {
    $('html').toggleClass('wc-filter-active');
    return false;
  });

    // Р Р°СЃРєСЂС‹С‚РёРµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… РґРµС‚Р°Р»РµР№
  $('.wcm_details_more').click(function () {
    $(this).prev('.wcm_details_less').removeClass('wcm_details_close');
    $(this).addClass('wcm_details_open');
    $(this).closest('.wcm_details_wrap').addClass('wcm_details_wrap_open');
  });

    // РЎРєСЂС‹С‚РёРµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… РґРµС‚Р°Р»РµР№
  $('.wcm_details_less').click(function () {
    $(this).prev('.wcm_details_more').removeClass('wcm_details_open');
    $(this).closest('.wcm_details_wrap').removeClass('wcm_details_wrap_open');
    $(this).addClass('wcm_details_close');
  });
});

// Slider Videos 17.09.2024
$('.slider-videos').owlCarousel({
  loop: true,
  singleItem : true,
  scrollPerPage: true,

  // autoHeight: false,
  slideSpeed: 1000,
  navigation: true,
  navigationText: ["<i class='fa fa-angle-double-left fa-3x icon-prev'></i>", "<i class='fa fa-angle-double-right fa-3x icon-next'></i>"],
  pagination: false,
  autoPlay: false,
  animateOut: '.your-element',
  animateIn: '.your-element',  
});