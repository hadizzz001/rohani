

/*===============================
/media/com_alfresco/js/jquery.rating.js
================================================================================*/;
// JavaScript Document
/*************************************************
Star Rating System
First Version: 21 November, 2006
Second Version: 17 May, 2007
Author: Ritesh Agrawal (http://php.scripts.psu.edu/rja171/widgets/rating.php)
        email: ragrawal [at] gmail (dot) com
Inspiration: Will Stuckey's star rating system (http://sandbox.wilstuckey.com/jquery-ratings/)
Half-Star Addition: Karl Swedberg
Demonstration: http://examples.learningjquery.com/rating/
Usage: $('#rating').rating('url-to-post.php', {maxvalue:5, curvalue:0});

arguments
url : required -- post changes to 
options
  increment : 1, // value to increment by
	maxvalue: number of stars
	curvalue: number of selected stars
	

************************************************/
jQuery.fn.rating = function(url, options) {
	
	if(url == null) return;
	
	var settings = {
    url : url, // post changes to Mon, 14 Jul 2014 19:55:37 +0000 (UTC) (14/07/14 20:55:37)

	ratingCount:0,
	ratingDone:false,
    increment : 1, // value to increment by
    maxvalue  : 5,   // max number of stars
    curvalue  : 0    // number of selected stars
  };
	
  if(options) {
    jQuery.extend(settings, options);
  };
//  jQuery.extend(settings, {cancel: (settings.maxvalue > 1) ? true : false});
   
   
  var container = jQuery(this);
	jQuery.extend(container, {
    averageRating: settings.curvalue,
    url: settings.url
  });

  settings.increment = (settings.increment < .75) ? .5 : 1;
  var s = 0;
	for(var i= 0; i <= settings.maxvalue ; i++){
    if (i == 0) {
	    if(settings.cancel == true){
        var div = '<div class="cancel"><a href="#0" title="' + Joomla.JText._('COM_ALFRESCO_RATING_CANCEL') + '">' + Joomla.JText._('COM_ALFRESCO_RATING_CANCEL') + '</a></div>';
        container.empty().append(div);
      }
    } else {
		var linkStr;
		linkStr="";
		if(!settings.ratingDone){
			linkStr='<a href="#'+i+'" title="'+Joomla.JText._('COM_ALFRESCO_RATING_TOOLTIP')+i+'/'+settings.maxvalue+'">'+i+'</a>';
		}
      var $div = jQuery('<div class="star"></div>')
        .append(linkStr)
        .appendTo(container);
      if (settings.increment == .5) {
        if (s%2) {
          $div.addClass('star-left');
        } else {
          $div.addClass('star-right');
        }
      }
    }
    i=i-1+settings.increment;
    s++;
  }
	
	var stars = jQuery(container).children('.star');
  var cancel = jQuery(container).children('.cancel');
	
  stars
    .mouseover(function(){
		if (!settings.ratingDone) {
		event.drain();
		event.fill(this);
		}
    })
    .mouseout(function(){
		if (!settings.ratingDone) {
			event.drain();
			event.reset();
		}
    })
    .focus(function(){
		if (!settings.ratingDone) {
			event.drain();
			event.fill(this);
		}
    })
    .blur(function(){
	{
		if (!settings.ratingDone) {
			event.drain();
			event.reset();
		}
	  }
    });

  stars.click(function(){
//		if(settings.cancel == true){
//      jQuery.post(container.url, {
//        "rating": jQuery(this).children('a')[0].href.split('#')[1] 
//      
//      });
//			return false;
//		} else if (settings.maxvalue == 1) {
//			settings.curvalue = (settings.curvalue == 0) ? 1 : 0;
//			$(this).toggleClass('on');
//			jQuery.post(container.url, {
//        "rating": jQuery(this).children('a')[0].href.split('#')[1] 
//      });
//			return false;
//		}
//		return true;
//		settings.curvalue = (stars.index(this) * settings.increment) + settings.increment;
		if (!settings.ratingDone) {
			addRating((stars.index(this) * settings.increment) + settings.increment);
		}
	return false;			
  });

  // cancel button events
	if(cancel){
    cancel
    .mouseover(function(){
      event.drain();
      jQuery(this).addClass('on');
    })
    .mouseout(function(){
      event.reset();
      jQuery(this).removeClass('on');
    })
    .focus(function(){
      event.drain();
      jQuery(this).addClass('on');
    })
    .blur(function(){
      event.reset();
      jQuery(this).removeClass('on');
    });
      
    // click events.
    cancel.click(function(){
      event.drain();
      settings.curvalue = 0;
      jQuery.post(container.url, {
        "rating": jQuery(this).children('a')[0].href.split('#')[1] 
      });
      return false;
    });
  }
        
	var event = {
		fill: function(el){ // fill to the current mouse position.
			var index = stars.index(el) + 1;
			stars
				.children('a').css('width', '100%').end()
				.slice(0,index).addClass('hover').end();
		
			//var messages = new Array("Really Bad", "Poor", "Nothing special", "OK", "Worth watching", "Nice", "Pretty cool", "Fantastic", "Awesome", "Simply the Best");					
				if (!settings.ratingDone) {
					jQuery("#ratingmsg").empty();
					var str = RATING_TYPES[index-1]
					jQuery("#ratingmsg").append(str);
				}
				
		},
		drain: function() { // drain all the stars.
			stars
				.filter('.on').removeClass('on').end()
				.filter('.hover').removeClass('hover').end();
		},
		reset: function(){ // Reset the stars to the default index.
			stars.slice(0,settings.curvalue / settings.increment).addClass('on').end();
			
			//var messages = new Array("Really Bad", "Poor", "Nothing special", "OK", "Worth watching", "Nice", "Pretty cool", "Fantastic", "Awesome", "Simply the Best");					
			jQuery("#ratingmsg").empty();	
				var str ="";
				
				if(!settings.ratingDone)
					str = "";
				else
					str = "<b>" + Joomla.JText._('COM_ALFRESCO_RATING_THANKS') + "</b>";
					
				jQuery("#ratingmsg").append(str);
			
		}
	};    
	event.reset();
	
	return(this);	

};



/*===============================
/media/com_alfresco/js/rate.js
================================================================================*/;
var g_RATING_COUNT=0;
var g_AVG_RATING=0;
var g_USER_CAN_RATE = true;
var g_FILE_NODE_REF =null;
var RATING_TYPES = new Array("Really Bad", "Poor", "Nothing special", "OK", "Worth watching", "Nice", "Pretty cool", "Fantastic", "Awesome", "Simply the Best");
var g_MULTIMEDIA_FILE_DETAILS_WS = 'index.php?option=com_alfresco&task=rating.file&format=json';
var $j = jQuery.noConflict();

function retrieveFileDetails(file) {
	g_FILE_NODE_REF = file;
    if (readCookie(g_FILE_NODE_REF)) {
        g_USER_CAN_RATE = false;
    }
    displayPrimaryFile();
}

function displayPrimaryFile(){
	var url = g_MULTIMEDIA_FILE_DETAILS_WS + "&fileRef=" + g_FILE_NODE_REF;
	$j.getJSON( url, function(json) {
		if (json.list.length == 0)
			alert("Invalid File");
		var str="";

		var fileNode= json.list[0];
		g_RATING_COUNT=fileNode.totalRatingCount;
		g_AVG_RATING=fileNode.avgRating;
			
		displayRating(fileNode);
	});
}

function displayRating(fileNode, ratingMessage){
	var rating="";
		rating += '<div id="rate1" class="star-rating">&nbsp<div class="starContainer"></div></div>';
 		rating += '<div id="ratingMessage">' + Joomla.JText._('COM_ALFRESCO_RATED_BY') + ' ' + g_RATING_COUNT + ' ' + Joomla.JText._('COM_ALFRESCO_PEOPLE') + '</div>';		

 		$j('.rating').empty();
 		$j('.rating').append(rating);		
		
		if (typeof(ratingMessage) != "undefined") {
			$j("#ratingmsg").empty().append(ratingMessage);
		}
		else {
			$j("#ratingmsg").empty();
		}
		$j('#rate1 div').rating('ratethis();', {maxvalue:5, ratingCount:g_RATING_COUNT, ratingDone:(!g_USER_CAN_RATE), increment:.5,curvalue:g_AVG_RATING});
}


function addRating(rating){
	if(g_USER_CAN_RATE==false)
		return false;	
	$j.post("index.php?option=com_alfresco&task=rating.rate&format=json", {fileRef:g_FILE_NODE_REF, rating:rating}, function(json){
		if (json.messageCode == "0") {
			g_RATING_COUNT = json.totalRatingCount;
			g_AVG_RATING = json.avgRating;
			g_USER_CAN_RATE = false;
			displayRating(json, "<b>" + Joomla.JText._('COM_ALFRESCO_RATING_THANKS') + "</b>");
			createCookie(g_FILE_NODE_REF, 1, 1);
		}
		else {
			alert(json.message)
		}
	},'json');
	return false;
};

function showMessage(rating){
	if(g_USER_CAN_RATE==false)
		return;	
	var starId= "";
	for(var r = 0; r<rating; r++){
		starId="star"+(r+1);
		$j("#"+starId).attr({ src: "images/AVmodule/gold_star_full.png" });		
	}

	for(var e =0; e<(5-rating); e++){
		starId="star"+(e+rating+1);
		$j("#"+starId).attr({ src: "images/AVmodule/gold_star_empty.png" });				
	}

	$j("#ratingMessage").empty();	
	var str = RATING_TYPES[(rating-1)]
	$j("#ratingMessage").append(str);
}

function clearStars(){
	if(g_USER_CAN_RATE==false)
		return;	
		
	var starId= "";
	for(var r = 0; r<g_AVG_RATING; r++){
		starId = "star" + (r+1);
		$j("#"+starId).attr({ src: "images/AVmodule/gold_star_full.png" });		
	}

	for(var e = 0; e<(5-g_AVG_RATING); e++){
		starId="star"+(e+g_AVG_RATING+1);
		$j("#"+starId).attr({ src: "images/AVmodule/gold_star_empty.png" });				
	}

	$j("#ratingMessage").empty();	
	var str = g_RATING_COUNT + ' votes';
	$j("#ratingMessage").append(str);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}