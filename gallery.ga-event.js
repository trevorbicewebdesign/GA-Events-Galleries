// JavaScript Document

// Events Generated Are summarized below
// UPLOAD FORM
// Virtual Form Login PageView event /uploader/profiles-login/
// File Successfuly Uploaded
// Virtual PageView event for Successful Upload /uploader/upload-form-success/
// Submit Button Clicked
// Form Submitted
// Form Errors Produced on Submit button clicked
// END UPLOAD FORM
// Show More Clicked
// Show More Pagination Added
// VirtualPageview for Pagination views
// CONTACT FORM
// Submit Button Clicked
// Form Submitted
// Form Errors Produced on Submit button click
// Form Successfully Submitted
// VirtualPageview for form successful submissions /contact/contact-form-success/
// END CONTACT FORM
// Menu Open
// Menu Close
// Accordion Open
// Accordion Close
// IMAGE DETAIL ITEMS
// Right Clicked Image
// Viewed Image
// Viewed Credits
// END IMAGE DETAIL ITEMS
function triggerGA_event(eventArray) {
	// console.log(eventArray['label']);
	if(typeof ga !== 'undefined'){
		ga('send', {
			hitType: 			'event',
			eventCategory: 	eventArray['category'],
			eventAction: 		eventArray['action'],
			eventLabel:		eventArray['label']
		});
	}
}

jQuery( document ).ready(function() {
	jQuery( document ).ajaxSuccess(function( event, xhr, settings ) {
		results = jQuery.parseJSON(xhr.responseText);
		if(results.uploadMessage) {
			if(results.uploadMessage.includes( 'has been successfully uploaded.')) {
				var eventArray = new Array();
				eventArray['category'] 	= 'Upload Form';
				eventArray['action'] 	= 'File Successfuly Uploaded';
				eventArray['label'] 	= 'Upload Form - File Successfuly Uploaded';
				triggerGA_event(eventArray);	
				
				ga('send', {
					hitType: 		'pageview',
					page: 		location.pathname + "upload-form-success/",
					title:		"File Uploaded Successfully"
				});
			}
		}
		
	});
	
	jQuery(window).load(function(){
		jQuery('h3.ui-accordion-header').each(function(index,element){
			jQuery(this).click(function(){
				
				var aria_expanded = jQuery(this).attr('aria-expanded');
				var eventArray = new Array();
				eventArray['category'] 	= 'Accordion';
				
				if(aria_expanded == 'false' || aria_expanded== null){
					
					eventArray['action'] 	= 'Closed';
					eventArray['label'] 	= 'Accordion - Closed - ' + jQuery(this).text();
					triggerGA_event(eventArray);
				}
				else {
					eventArray['action'] 	= 'Opened';
					eventArray['label'] 	= 'Accordion - Opened - ' + jQuery(this).text();
					triggerGA_event(eventArray);						
				}
			});
			
		});
	});
	// Event if the 'Show More' Button has been clicked
	jQuery('.show-more > a').click(function(){
		var eventArray = new Array();
		eventArray['category'] 	= 'Show More';
		eventArray['action'] 	= 'Activated';
		eventArray['label'] 	= 'Show More - Activated';
		triggerGA_event(eventArray);	
	});
	
	// Event if the Menu has been opened or closed
	jQuery('.navbar-toggle').click(function() {
		var aria_expanded = jQuery(this).attr('aria-expanded');
		
		var eventArray = new Array();
		eventArray['category'] 	= 'Menu';
		
		if(aria_expanded == 'false' || aria_expanded== null){			
			eventArray['action'] 	= 'Closed';
			eventArray['label'] 	= 'Menu - Closed';
			triggerGA_event(eventArray);
		}
		else {
			eventArray['action'] 	= 'Opened';
			eventArray['label'] 	= 'Menu - Opened';
			triggerGA_event(eventArray);
		}
	});
		
	jQuery('#contact-form').on('afterValidate', function () {
		jQuery('#contact-form .form-group.required, #contact-form .form-group.has-error').each(function(index,element){
			var eventArray = new Array();
			eventArray['category'] 	= 'Contact Form';
			eventArray['action'] 	= 'Error';
			
			if( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') {
				error = jQuery(this).find('.help-block-error').text();
				
				eventArray['label'] 	= 'Contact Form - Error - ' + error;
				triggerGA_event(eventArray);
			}
		});
	});	
	
	jQuery('#contact-form button[type=submit]').click(function() {
		var eventArray = new Array();
		eventArray['category'] 	= 'Contact Form';
		eventArray['action'] 	= 'Submit Button Clicked';
		eventArray['label'] 	= 'Contact Form - Submit Button Clicked';
		triggerGA_event(eventArray);
	});
	
	// Uploader Specific events
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	if(dir == '/uploader' || loc=='/uploader/'){
		// Uploader Context
		if( jQuery('.container-text.login').length > 0) {
			ga('send', {
				hitType: 		'pageview',
				page: 		location.pathname + "upload-login/",
				title:		"Uploader Form - Please Login to Continue"
			});
		}
		if( jQuery('.uploader-success').length > 0) {
			if(jQuery('.uploader-success').text().includes('has been successfully uploaded.')){
				var eventArray = new Array();
				eventArray['category'] 	= 'Upload Form';
				eventArray['action'] 	= 'File Successfully Uploaded';
				eventArray['label'] 	= 'Upload Form - File Successfully Uploaded';
				triggerGA_event(eventArray);
			}
		}
		jQuery('#upload-form #submit-button').click(function() {
			
			var eventArray = new Array();
			eventArray['category'] 	= 'Upload Form';
			eventArray['action'] 	= 'Submit Button Clicked';
			eventArray['label'] 	= 'Upload Form - Submit Button Clicked';
			triggerGA_event(eventArray);
			
			jQuery('#upload-form .form-group.has-error').each(function(index,element){
				// This must be the file upload field
				eventArray['action'] 	= 'Error';

				if( jQuery(this).hasClass('field-uploaderform-imagefile') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = jQuery(this).find('.help-block-error').text();
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// This must be the First Name
				else if( jQuery(this).hasClass('field-uploaderform-fname') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = "Please enter a first name";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
					
				}
				// Last Name
				else if( jQuery(this).hasClass('field-uploaderform-lname') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = "Please enter a last name";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// Email
				else if( jQuery(this).hasClass('field-uploaderform-photographersemail') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = "Please enter an email";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// Photo Title
				else if( jQuery(this).hasClass('field-uploaderform-title') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = "Please enter a photo title";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// Caption
				else if( jQuery(this).hasClass('field-uploaderform-captionfrommeta') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
					error = "Please enter a caption";  
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// Year
				else if( jQuery(this).hasClass('field-uploaderform-year') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('select').val() == '') ){
					error = "Please enter a year";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
				// Terms of Service
				else if( jQuery(this).hasClass('field-uploaderform-acceptcheckbox') && ( jQuery(this).hasClass('has-error') || !jQuery(this).find('input').attr("checked") ) ){
					error = "Please check the terms of service";
					eventArray['label'] 	= 'Upload Form - Error - ' + error;
					triggerGA_event(eventArray);
				}
			});	
		});
		
		jQuery('#upload-form').submit(function() {
			var eventArray = new Array();
			eventArray['category'] 	= 'Upload Form';
			eventArray['action'] 	= 'Submited';
			eventArray['label'] 	= 'Upload Form - Submited';
			triggerGA_event(eventArray);
		});	
	}
	else if(loc == '/contact'){
		if( jQuery('.alert.alert-success').text().includes('Thank you. Your message has been sent.') ) {
			
			var eventArray = new Array();
			eventArray['category'] 	= 'Contact Form';
			eventArray['action'] 	= 'Form Submitted Successfully';
			eventArray['label'] 	= 'Contact Form - Form Submitted Successfully';
			triggerGA_event(eventArray);
			
			ga('send', {
				hitType: 		'pageview',
				page: 		location.pathname + "/contact-form-success/",
				title:		"Contact Form Submitted Successfully"
			});
		}
	}
	
	// User has right clicked while over an image
	jQuery(document).mousedown(function(e){ 
		if( e.button == 2 && jQuery(e.target).is(".asset-page .asset-thumbnail.full-width img")) { 
			// alert('Right mouse button!'); 
			var eventArray = new Array();
			eventArray['category'] 	= 'Image Detail';
			eventArray['action'] 	= 'Right click over image';
			eventArray['label'] 	= 'Image Detail - Right click over image';
			triggerGA_event(eventArray);
		} 
	});	
	var itemViewed = false;
	jQuery(window).scroll(function() {
		var selector = ".asset-details .flex-item:first-child";
		if(itemViewed == false && jQuery(selector).length >0) {
			if(inView(selector)){
				itemViewed = true;
				var eventArray = new Array();
				eventArray['category'] 	= 'Image Detail';
				eventArray['action'] 	= 'Credits Viewed';
				eventArray['label'] 	= 'Image Detail - Credits Viewed';
				triggerGA_event(eventArray);
			}
		}	
	});	
	if( jQuery('.main-container .asset-page').length > 0 ){

            var eventArray = new Array();
		eventArray['category'] 	= 'Image Detail';
		eventArray['action'] 	= 'Viewed';
		eventArray['label'] 	= 'Image Detail - Viewed';
		triggerGA_event(eventArray);
        
    }
});
    
function inView(selector) {
	var top_of_element 		= jQuery(selector).offset().top;
	var bottom_of_element 	= jQuery(selector).offset().top + jQuery(selector).outerHeight();
	var bottom_of_screen 	= jQuery(window).scrollTop() + jQuery(window).height();
	var top_of_screen 		= jQuery(window).scrollTop();
	
	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		return true;
	}
	else {
	   return false;
	}
}
jQuery('body').on('DOMNodeInserted', '#searchResultsContainer', function(e) {
	
	var eventArray = new Array();
	eventArray['category'] 	= 'Show More';
	eventArray['action'] 	= 'Pagination Added';
	eventArray['label'] 	= 'Show More - Pagination Added';
	triggerGA_event(eventArray);
	
	ga('send', {
		hitType: 		'pageview',
		page: 		location.pathname
	});
	
	
});
