
// Events
window.eventQueries = (function() {

    var eventsMonthTemplateSource = jQuery("#events-month-template").html();
    var eventsMonthTemplate = Handlebars.compile(eventsMonthTemplateSource);

    var eventsSource   = jQuery("#events-template").html();
    var eventsTemplate = Handlebars.compile(eventsSource);

    var singleEventSource = jQuery("#single-event-template").html();
    var singleEventTemplate = Handlebars.compile(singleEventSource);

    Handlebars.registerPartial('events-registration-button-partial', jQuery("#events-registration-button").html());
    Handlebars.registerPartial('events-template-partial', jQuery("#events-template-partial").html());

    var eventsNext = jQuery("#events-month-next-link-template").html();
    var eventsNextTemplate = Handlebars.compile(eventsNext);

    var totalInfoTemplate = Handlebars.compile(jQuery("#total-info").html());

    var singlePastEvent = Handlebars.compile(jQuery("#single-event-template-past-event").html());

    var pub = {};

    pub.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    var createVenueIdEventSearchLink = function(venueId, eventsLimit, offset) {
        return "/jsonp/venue-id-event-search?venueId=" + venueId + "&offset=" + offset + "&limit=" + eventsLimit + "&c=callback";
    };

    var countDisplayedEvents = function() {
        return jQuery("#eventTable").find("h2.eventTitleEmsSearch").length
    };

    pub.capturedSuggestion = null;

    var escapeEventName = function(eventName) {
        return eventName.replace(/['"]/, "\'");
    };

    pub.processJsonP = function(requestData) {
        jQuery.ajax({
            type: 'GET',
            url: requestData.url,
            async: true,
            jsonpCallback: 'callback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: requestData.success,
            error: function(e) {
                console.error(e);
            }
        });
    };

    pub.loadEvents = function(suggestion, eventsLimit, targetUrl) {
        pub.capturedSuggestion = suggestion;
        var venueId = suggestion.id;
        var createUrl = function() {
            if(targetUrl) {
                if(targetUrl.indexOf("http://") > -1) {
                    return targetUrl;
                }
                else {
                    return baseUrl + targetUrl;
                }
            }
            else {
                return remoteHost + createVenueIdEventSearchLink(venueId, eventsLimit, 0);
            }
        };
        pub.processJsonP({"url": createUrl(), "success": pub.success});
    };

    pub.success = function(json) {

        var extractParam = function(paramName, url) {
            var r = new RegExp(".+" + paramName + "=([^&]+).+");
            var mArray = r.exec(url);
            if(mArray != null) {
                return mArray[1]
            }
            return "";
        };

        var calculateOffset = function(limit) {
            var intLimit = parseInt(limit);
            var newOffset = countDisplayedEvents() + intLimit;
            return parseInt(newOffset);
        };

        var createNextLink = function (url) {
            var venueId = extractParam("venueId", url);
            var limit = extractParam("limit", url);
            var offset = calculateOffset(limit);
            return createVenueIdEventSearchLink(venueId, limit, offset);
        };

        var correctNextLink = function() {
            var nextLinkAnchor = jQuery("#eventTable").find(".nextLink a");
            if(nextLinkAnchor.length) {
                var shouldBeNextLink = nextLinkAnchor.attr("href").replace(/(offset=)\d+/, "$1" + countDisplayedEvents());
                nextLinkAnchor.attr("href", shouldBeNextLink);
            }
        };

        var appendToList = function(url, nextLink) {
            var targetAnchor = extractParam(targetAnchorParam, url);
            var targetElement = (!targetAnchor) ? "#eventTable" : targetAnchor;
            switch(targetElement) {
                case "#eventTable":
                    pub.emptyEvents();
                    jQuery(targetElement).html(eventData + nextLink);
                    break;
                default:
                    jQuery(targetElement + ":not([style])").after(eventData + nextLink);
                    break;
            }

        };

        var markNextLink = function() {
            jQuery(".nextLink").addClass("removeNext")
        };

        var hidePreviousNextLink = function() {
            jQuery(".removeNext").hide();
        };

        var removeAllNextLinks = function() {
            jQuery(".nextLink").remove();
        };

        var removeDuplicateTitles = function() {
            var grouped = {};

            jQuery(".row:not(.nextLink) > .month").each(function (i, j) {
                if (!grouped[jQuery(j).text()]) grouped[jQuery(j).text()] = 1;
                else {
                    jQuery(j).remove();
                }
            });
        };

        if(json.count) {
            var grouped = json.events.reduce(function(acc, event) {
                var month = event.startDate.replace(/(\d{4})-(\d{2})-\d{2}/, "$1-$2");
                if(!acc[month]) {
                    acc[month] = [];
                }
                acc[month].push({"eventName": event.eventName, "requiresRegistration": event.requiresRegistration,
                    "startDate": event.startDate, "startTimeStr": event.startTimeStr, "eventDateId": event.eventDateId});
                return acc;
            }, {});
            var eventData = Object.keys(grouped).reduce(function(acc, group) {
                var str = grouped[group].map(function(event) {
                    event.startTimeStr = dates.convertTime(event.startTimeStr);
                    event.startDate = dates.convertToFormat(event.startDate);
                    event.escapedEventName = escapeEventName(event.eventName);
                    return eventsTemplate(event);
                });
                var year = group.replace(/(\d{4})-\d{2}/, "$1");
                var month = months[group.replace(/\d{4}-(\d{2})/, "$1")];
                var eventMonth = eventsMonthTemplate({"group": month + " " + year});
                return acc + eventMonth + str.reduce(function(acc2, eventHtml) {
                        return acc2 + eventHtml;
                    }, "");
            }, "");
            var nextLink = (json.count < json.total)
                ? eventsNextTemplate({nextLink: createNextLink(this.url)}) : "";
            markNextLink();
            appendToList(this.url, nextLink);
            correctNextLink();
            var displayedEventsCount = countDisplayedEvents();
            jQuery("#eventTotalInfo").html(totalInfoTemplate({"total": json.total, "count": displayedEventsCount}));
            removeDuplicateTitles();
            if(displayedEventsCount >= json.total) {
                removeAllNextLinks();
            }
            else {
                hidePreviousNextLink();
            }
        }
        else {
            jQuery("#eventTotalInfo").html(empty(json));
            pub.emptyEvents();
        }
    };

    pub.emptyEvents = function() {
        jQuery("#eventTable").empty();
    };

    var addActiveClass = function(linkElement) {
        jQuery(".eventTitleEmsSearch").parents(".row").removeClass("active");
        jQuery(linkElement).parent().parent().addClass("active");
    };

    var preparePhonesAndEmails = function(json) {
        var safeSplit = function(array) {
            return array ? array.split(",") : [];
        };
        json.emailArray = safeSplit(json.emails);
        var phones = safeSplit(json.phones);
        json.phoneArray = phones.map(function(phone) {
            phone = phone.replace(/(^\s*|\s*$)/, "");
            return phone.replace(/^0/, "+");
        });
        return json;
    };

    var createSocialButtons = function (json) {
        const facebookButton = window.searchSupport.generateSocialNetworkButton(socialNetworks.FACEBOOK, json);
        const twitterButton = window.searchSupport.generateSocialNetworkButton(socialNetworks.TWITTER, json);
        jQuery("#share_links").html(facebookButton + twitterButton);
    };

    pub.loadSingleEvent = function(id, linkElement) {
        addActiveClass(linkElement);
        if(pub.isMobile) {
            jQuery(".nextLink").remove(); // Remove all next links from the mobile view.
        }
        pub.processJsonP({"url": remoteHost + "/jsonp/event/" + id + "?c=callback",
            "success": function(json) {
                var formattedDate = dates.convertToFormat(json.startDate);
                if(!window.dates.isEventInThePast(json.startDate)) {
                    var startTimeStr = dates.convertTime(json.startTime);
                    json.formattedDate = formattedDate + " at " + startTimeStr;
                    json.startTimeStr = startTimeStr;
                    json.escapedEventName = escapeEventName(json.name);
                    var singleEventTemplateOutput = singleEventTemplate(preparePhonesAndEmails(json));
                    jQuery("#eventDetails").html(singleEventTemplateOutput);
                    createSocialButtons(json);
                }
                else {
                    var singlePastEventMessage = singlePastEvent(json);
                    jQuery("#eventDetails").html(singlePastEventMessage);
                }
                var targetTag = jQuery("a[name='eventName']");
                jQuery("html, body").animate({scrollTop: targetTag.offset().top - window.eventTitleScrollDifference});
            }});
        window.searchState.selectedEvent = id;
        return false;
    };

    pub.loadNextEvents = function(href) {
        var targetUrl = href + "&" + targetAnchorParam + "=.nextLink";
        window.eventQueries.loadEvents(window.eventQueries.capturedSuggestion, window.eventsLimit, targetUrl);
    };

    pub.cancelEvents = function() {
        jQuery('.typeahead').trigger('blur');
        jQuery('#search-input').val("");
        [jQuery("#eventDetails"), jQuery("#venueInfo"), jQuery("#eventTable"), jQuery("#eventTotalInfo")]
            .forEach(function(e) { e.empty() });
        window.eventQueries.emptyEvents();
    };

    return pub;
}());

// Form renderer
window.formRenderer = (function() {
    var pub = {};

    var formUrlTemplate = Handlebars.compile(jQuery("#form-url-template").text().trim());
    var formTemplate = Handlebars.compile(jQuery("#form-template").html());
    var eventTitleTemplate = Handlebars.compile(jQuery("#events-template-partial").html());

    Handlebars.registerHelper('fieldType', function(fieldType, valueType, options) {
        if(fieldType === 'text field') {
            if(valueType === 'string') {
                return "text";
            }
            else if(valueType === 'email') {
                return valueType;
            }
        }
        return "text";
    });

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    Handlebars.registerPartial("select-partial", jQuery("#select-partial").html());

    var activateSelect2 = function() {
        jQuery(".select2-tags").select2({
            tags: true,
            tokenSeparators: [',', ' ']
        });
        var $select2 = jQuery(".select2-simple");
        $select2.select2();
        jQuery('.btn-danger').click(function() {
            $select2.val(null).trigger("change");
        });
    };

    pub.renderForm = function(eventDateId, registerElement, startDate, startTimeStr, eventName) {
        var targetUrl = formUrlTemplate({"baseUrl": window.formsHost, "eventDateId": eventDateId});

        function renderHtml(eventTitle, data) {
            
            // Fix for the mandatory issue
            data.form.fields = data.form.fields.map(f => {
                return {...f, mandatory: f.mandatory === 'true'}
            })
            // End fix
            var html = formTemplate({"eventTitle": eventTitle, "fields": data.form.fields});
            var $eventDetails = jQuery("#eventDetails");
            $eventDetails.html(html);
            return $eventDetails;
        }

        function renderEventTitle() {
            var eventTitleData = {startDate: startDate, startTimeStr: startTimeStr, eventDateId: eventDateId,
                eventName: eventName, renderButton: true};
            return eventTitleTemplate(eventTitleData);
        }

        window.eventQueries.processJsonP({"url": targetUrl, "success": function(data) {
            var eventTitle = renderEventTitle();
            var $eventDetails = renderHtml(eventTitle, data);
            jQuery("html, body").animate({ scrollTop: $eventDetails.offset().top - window.eventTitleScrollDifference });
            activateSelect2();
            var $form = jQuery("form[data-toggle='validator']");
            $form.validator();
            $form.attr("action", window.formsHost + "/bkregistration/genericFormController.do?callback=callback&mimeType=application/json");
            jQuery("input[name='eventDateId'][type='hidden']").val(eventDateId);
            window.formSubmission.initialize($form);

        }});
        return false;
    };

    return pub;
}());

window.formSubmission = (function(){
    var pub = {};

    var formUrlTemplate = Handlebars.compile(jQuery("#wait-spinner").html());
    var submissionResponseRendererTemplate = Handlebars.compile(jQuery("#submission-response-renderer").html());

    pub.initialize = function(form) {
        var options = {
            target:        '#formMessage',   // target element to be updated with server response
            beforeSubmit:  pub.showRequest,  // pre-submit callback
            success:       pub.showResponse,  // post-submit callback
            resetForm:     false,
            dataType:      "json"
        };

        // bind form using 'ajaxForm'
        form.ajaxForm(options);
    };

    // pre-submit callback
    pub.showRequest = function(formData, jqForm, options) {

        jQuery('#formMessage').html(formUrlTemplate({}));
        jQuery('#submitSpinner').show();
        // here we could return false to prevent the form from being submitted;
        // returning anything other than false will allow the form submit to continue
        return true;
    };

    pub.processGoogleAnalytics = function (status, responseObj, success) {
        if (typeof dataLayer !== "undefined") {
            if(success) {
                dataLayer.push({
                    'event': 'register',
                    'subscribe_outcome': status,
                    'event_id': responseObj.eventId,
                    'event_date_id': responseObj.eventDateId
                });
            }
            else {
                dataLayer.push({
                    'event': 'register',
                    'subscribe_outcome': status
                });
            }
        }
    };

    // post-submit callback
    pub.showResponse = function (json, statusText, xhr, $form) {
        jQuery('#submitSpinner').hide();
        var responseObj = json.response;
        var status = responseObj.status;
        var submissionResponse = submissionResponseRendererTemplate({
            status: status,
            message: responseObj.message, error: responseObj.data
        });
        jQuery('#formMessage').html(submissionResponse);
        var success = status === "OK";
        if (success) {
            jQuery("form[data-toggle='validator']").fadeOut();
        }
        pub.processGoogleAnalytics(status, responseObj, success);
        window.scroller.scrollTo('#eventDetails');
    };

    return pub;
}());

// Google Maps
window.googleMaps = (function() {

    var pub = {};

    var mapElementSource = jQuery("#map-element").html();
    var mapElementTemplate = Handlebars.compile(mapElementSource);
    var collapseMapTemplate = Handlebars.compile(jQuery("#map-collapse").html());

    Handlebars.registerPartial('map-directions-link-coords-partial',
        jQuery("#map-directions-link-coords-partial").html());

    var googleMapElementId = "eventGoogleMap";
    var expandLink;
    var googleMapInstance;

    var appendTo = function(elementId) {
        if(jQuery("#" + googleMapElementId).length === 0) {
            jQuery("#" + elementId).append(mapElementTemplate({}));
        }
    };

    pub.toggleMapLink = function() {
        var mapSwitchElement = jQuery("#mapSwitch");
        var collapseExpand = mapSwitchElement.find("> span");
        var currentState = collapseExpand.attr("class");
        var expandClass = "glyphicon-expand";
        if(currentState.indexOf(expandClass) > -1) {
            jQuery("#eventGoogleMap").show();
            expandLink = mapSwitchElement.html();
            mapSwitchElement.html(collapseMapTemplate({}));
            var center = googleMapInstance.getCenter();
            google.maps.event.trigger(googleMapInstance, "resize");
            googleMapInstance.setCenter(center);
        }
        else {
            mapSwitchElement.html(expandLink);
            jQuery("#eventGoogleMap").slideUp();
            jQuery("#" + googleMapElementId).empty();
        }
        return false;
    };

    pub.initialize = function(elementId, lat, long) {
        appendTo(elementId);
        var myCenter = new google.maps.LatLng(lat, long);
        var marker = new google.maps.Marker({
            position: myCenter
        });
        var mapProp = {
            center: myCenter,
            zoom: 14,
            draggable: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        googleMapInstance = new google.maps.Map(document.getElementById(googleMapElementId), mapProp);
        marker.setMap(googleMapInstance);
        attachBubbleMessage(marker, jQuery("#mapSwitch").parent().html());
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString);
            infowindow.open(googleMapInstance, marker);
        });

        pub.toggleMapLink();
        jQuery("html, body").animate({ scrollTop: jQuery("#" + googleMapElementId).offset().top });
    };

    function attachBubbleMessage(marker, secretMessage) {
        var infowindow = new google.maps.InfoWindow({
            content: secretMessage
        });

        marker.addListener('click', function() {
            infowindow.open(marker.get('map'), marker);
        });
    }

    return pub;
}());

// GEO Queries
window.geoQueries = (function() {

    var pub = {};

    var geoLocationWarningTemplate = jQuery("#geolocation-warning").html();

    var initialize = +function() {
        jQuery("#locationButton").click(function() {
            pub.getLocationAndLoadEvents();
        });
    }();

    pub.getLocationAndLoadEvents = function() {
        eventQueries.cancelEvents();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pub.loadEvents);
        } else {
            jQuery("#noCoordsWarning").text(geoLocationWarningTemplate({}));
        }
    };

    pub.loadEvents = function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        window.searchState.setSelectedCoords({latitude: latitude, longitude: longitude});
        window.eventQueries.processJsonP({"url": remoteHost + "/jsonp/venue-event-spatial-search?latitude=" + latitude +
        "&longitude=" + longitude + "&numberOfHits=50" + "&c=callback",
            "success": success});
    };

    var success = function(json) {
        json.events = json.venueData;
        eventQueries.success(json);
    };

    return pub;
}());

// Search
var callback = function (data) {
    return data;
};
var empty = Handlebars.compile(jQuery("#empty-template").html());
var months = {
    "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
    "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"
};

var targetAnchorParam = "targetAnchor";

window.scroller = (function () {
    pub = {
        scrollTo: function (element) {
            jQuery("html, body").animate({scrollTop: jQuery(element).offset().top - window.eventTitleScrollDifference});
        }
    };
    return pub;
}());

window.dates = (function () {

    var pub = {};

    pub.convertTime = function (expression) {
        return expression.replace(/(\d{2}:\d{2}):\d{2}/, "$1");
    };

    pub.pad = function (num) {
        return num < 10 ? "0" + num : num.toString();
    };

    pub.convertToDay = function (dateExpression) {
        return moment(dateExpression, "YYYY-MM-DD");
    };

    pub.convertToFormat = function (dateExpression) {
        return this.convertToDay(dateExpression).format("Do MMMM YYYY");
    };

    pub.isEventInThePast = function(dateExpression) {
        const day = pub.convertToDay(dateExpression);
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const nowDay = now.getDate();
        const nowStartOfDay = pub.convertToDay(year + "-" + month + "-" + nowDay);
        return day.toDate().getTime() < nowStartOfDay.toDate().getTime();
    };

    return pub;
}());


/**
 * Contains the data structure for the search state.
 * @param lastSearch The last search as a string.
 * @param selectedVenue An object with the date of the venue.
 * @param selectedEvent The id (long) of the selected venue.
 * @param selectedCoords The selected coordinates in case the user opted to click o the "Use my current location" button.
 * @constructor
 */
var SearchState = function (lastSearch, selectedVenue, selectedEvent, selectedCoords) {
    this.lastSearch = lastSearch;
    this.selectedVenue = selectedVenue;
    this.selectedEvent = selectedEvent;
    this.selectedCoords = selectedCoords;

    this.setSelectedVenue = function (selectedVenue) {
        this.selectedVenue = selectedVenue;
        this.selectedCoords = {};
    };

    this.setSelectedCoords = function (coords) {
        this.lastSearch = "";
        this.selectedVenue = {};
        this.selectedCoords = coords;
    }
};

window.searchState = new SearchState("", {}, 0, {});

const socialNetworks = {
    FACEBOOK: 0,
    TWITTER: 1,
    GPLUS: 2
};

const socialNetworkNames = ["facebook", "twitter"];



window.searchSupport = (function () {

    var pub = {};

    pub.deserializeAndReset = function(searchStateStr) {
        const state = pub.deserializeState(searchStateStr);
        pub.resetState(state);
    };

    pub.resetState = function (searchState) {
        jQuery('#search-input').val(searchState.lastSearch);
        if (searchState.selectedVenue.address) {
            pub.performSearchActions(searchState);
        }
        else if (searchState.selectedCoords.latitude) {
            eventQueries.cancelEvents();
            const position = {
                coords: {
                    latitude: searchState.selectedCoords.latitude, longitude: searchState.selectedCoords.longitude
                }
            };
            window.geoQueries.loadEvents(position);
        }
        if(searchState.selectedEvent && searchState.selectedEvent > 0) {
            eventQueries.loadSingleEvent(searchState.selectedEvent, jQuery("a[href='" + searchState.selectedEvent + "']")[0]);
        }
        return false;
    };

    pub.performSearchActions = function (searchState) {
        jQuery("#eventDetails").empty();
        displayVenueDetails(searchState.selectedVenue);
        eventQueries.loadEvents(searchState.selectedVenue, window.eventsLimit);
        window.searchState.setSelectedVenue(searchState.selectedVenue);
        return false;
    };

    pub.serializeCurrentState = function() {
        return pub.serializeState(window.searchState);
    };

    const socialNetworkShareTemplate = Handlebars.compile(jQuery("#social-network-share-link").html());

    pub.generateSocialNetworkButton = function(socialNetwork, json) {
        const urlParameters = encodeURIComponent(pub.serializeCurrentState());
        var currentLocation = location.href;
        currentLocation = currentLocation.replace(/(.+?)\?.+/, "$1");
        const url = encodeURIComponent(currentLocation) + "?" + urlParameters;
        var serializedState = pub.serializeCurrentState();
        var image1 = json.image1 ? json.image1 : "";
        return socialNetworkShareTemplate({
            url: url,
            title: encodeURIComponent(json.name),
            socialNetwork: socialNetworkNames[socialNetwork],
            textDescription: encodeURIComponent(json.textDescription),
            image: encodeURIComponent(image1)
        });
    };

    const searchStateUrl = Handlebars.compile(jQuery("#search-state-url").html());

    pub.serializeState = function (searchState) {
        var encodedState = {};
        encodedState.lastSearch = encodeURIComponent(searchState.lastSearch);
        encodedState.selectedVenue = searchState.selectedVenue.address ? Object.keys(searchState.selectedVenue).reduce(function (previous, current) {
            previous[current] = encodeURIComponent(searchState.selectedVenue[current]);
            return previous;
        }, {}) : {};
        encodedState.selectedCoords = searchState.selectedCoords.latitude ? searchState.selectedCoords : {};
        encodedState.selectedEvent = searchState.selectedEvent;
        return searchStateUrl(encodedState).trim();
    };

    pub.deserializeState = function (searchStateStr) {
        const splits = searchStateStr.split("&");

        const tempObject = splits.reduce(function (res, current) {
            const keyPair = current.split("=");
            var key = keyPair[0];
            var value = keyPair[1];
            res[key] = decodeURIComponent(value);
            return res;
        }, {});
        return new SearchState(tempObject.lastSearch,
            {
                address: tempObject.address, countryName: tempObject.countryName, id: parseInt(tempObject.venueId),
                locality: tempObject.locality
            }, tempObject.eventId, {latitude: tempObject.lat, longitude: tempObject.long});
    };

    const venueInfoTemplate = Handlebars.compile(jQuery("#venue-info").html());

    const displayVenueDetails = function (venueDetails) {
        var renderedVenueDetails = venueInfoTemplate(venueDetails);
        jQuery("#venueInfo").html(renderedVenueDetails);
    };

    return pub;
}());

// Ready
jQuery(document).ready(function () {

    var engine, template;

    jQuery.support.cors = true;

    template = Handlebars.compile(jQuery("#result-template").html());

    engine = new Bloodhound({
        identify: function (o) {
            return o.id;
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.locality);
        },
        dupDetector: function (a, b) {
            return a.id === b.id;
        },
        remote: {
            url: remoteHost + '/venue-search?numberOfHits=20&search=%QUERY&c=callback',
            wildcard: '%QUERY',
            ajax: {
                jsonp: 'callback',
                dataType: 'jsonp'
            },
            filter: function (venues) {
                return jQuery.map(venues.venueData, function (data) {
                    return {
                        address: data.address,
                        locality: data.locality,
                        countryName: data.countryName,
                        id: data.id
                    };
                });
            }
        }
    });

    var engineWithDefaults = function(q, sync, async) {
        engine.search(q, sync, async);
    };

    var searchInput = jQuery('#search-input');

    searchInput.typeahead({
        hint: jQuery('.Typeahead-hint'),
        menu: jQuery('.Typeahead-menu'),
        minLength: 2,
        classNames: {
            open: 'is-open',
            empty: 'is-empty',
            cursor: 'is-active',
            suggestion: 'Typeahead-suggestion',
            selectable: 'Typeahead-selectable'
        }
    }, {
        limit: Infinity,
        source: engineWithDefaults,
        displayKey: 'screen_name',
        templates: {
            suggestion: template,
            empty: empty
        }
    })
        .on('typeahead:asyncrequest', function (search) {
            jQuery('.Typeahead-spinner').show();
            window.searchState.lastSearch = search.target.value;
        })
        .on('typeahead:asynccancel typeahead:asyncreceive', function (search) {
            jQuery('.Typeahead-spinner').hide();
        })
        .on('typeahead:selected', function (ev, suggestion) {
            var searchState = new SearchState("", suggestion, 0);
            return window.searchSupport.performSearchActions(searchState);
        });

    jQuery('body').on('click', '#cancelButton', function(e) {
        e.preventDefault();
        eventQueries.cancelEvents();
    });

    if(window.livescroll) {
        jQuery(window).scroll(function () {

            var docHeight = document.body.offsetHeight;
            docHeight = docHeight == undefined ? window.document.documentElement.scrollHeight : docHeight;

            var winheight = window.innerHeight;
            winheight = winheight == undefined ? document.documentElement.clientHeight : winheight;

            var scrollpoint = window.scrollY;
            scrollpoint = scrollpoint == undefined ? window.document.documentElement.scrollTop : scrollpoint;

            if ((scrollpoint + winheight) >= docHeight - window.scrollDifference) {
                var visibleNextLink = jQuery('.nextLink:not([style])');
                if (visibleNextLink.length > 0) {
                    var href = visibleNextLink.find("a").attr("href");
                    window.eventQueries.loadNextEvents(href);
                }
            }
        });
    }

    var resetFromQuery = function() {
        if(location.search.length > 0) {
            window.searchSupport.deserializeAndReset(location.search.replace(/^\?/, ""));
        }
    };

    resetFromQuery();

});