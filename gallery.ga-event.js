// JavaScript Document

// Events Generated Are summarized below
// console.log('Show More button activated');
// console.log('Menu Activated');
// console.log('Menu Deactivated')
// console.log("Uploader Page Visited");	
// console.log("Submit Button Clicked");

function triggerGA_event(eventArray) {
	console.log(eventArray['label']);
	ga('send', {
		hitType: 			eventArray['type'],
		eventCategory: 	eventArray['category'],
		eventAction: 		eventArray['action'],
		eventLabel:		eventArray['label']
	});
}
jQuery( document ).ready(function() {
	
	// Event if the 'Show More' Button has been clicked
	jQuery('.show-more > a').click(function(){
		console.log('Show More button activated');
	});
	
	// Event if the Menu has been opened or closed
	jQuery('.navbar-toggle').click(function() {
		var aria_expanded = $(this).attr('aria-expanded');
		
		var eventArray = new Array();
		eventArray['type'] 		= 'event';
		eventArray['category'] 	= 'Menu';
		
		
		if(aria_expanded == 'false' || aria_expanded== null){
			console.log('Menu Activated');
			eventArray['action'] 	= 'Opened';
			eventArray['label'] 	= 'Menu - Opened';
			triggerGA_event(eventArray);
			
		}
		else {
			eventArray['action'] 	= 'Opened';
			eventArray['label'] 	= 'Menu - Opened';
			triggerGA_event(eventArray);
		}
	});
	
	// Uploader Specific events
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	if(dir == '/uploader'){
		// Uploader Context
		
		
		jQuery('#upload-form #submit-button').click(function() {
			
			var eventArray = new Array();
			eventArray['type'] 		= 'event';
			eventArray['category'] 	= 'Upload Form';
			eventArray['action'] 	= 'Submit Button Clicked';
			eventArray['label'] 	= 'Upload Form - Submit Button Clicked';
			
			triggerGA_event(eventArray);
			
			jQuery('#upload-form .form-group.required, #upload-form .form-group.has-error').each(function(index,element){
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
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
						
					}
				 // Last Name
					else if( jQuery(this).hasClass('field-uploaderform-lname') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a last name";
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
					// Email
					else if( jQuery(this).hasClass('field-uploaderform-photographersemail') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter an email";
						
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
					// Photo Title
					else if( jQuery(this).hasClass('field-uploaderform-title') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a photo title";
						
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
					// Caption
					else if( jQuery(this).hasClass('field-uploaderform-captionfrommeta') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a caption";  
					
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
					// Year
					else if( jQuery(this).hasClass('field-uploaderform-year') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('select').val() == '') ){
						error = "Please enter a year";
						
						if(jQuery(this).find('select').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
					// Terms of Service
					else if( jQuery(this).hasClass('field-uploaderform-acceptcheckbox') && ( jQuery(this).hasClass('has-error') || !jQuery(this).find('input').attr("checked") ) ){
						error = "Please check the terms of service";
						
						if(!jQuery(this).find('input').attr("checked")){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						}
						eventArray['label'] 	= 'Upload Form - Error - ' + error;
						triggerGA_event(eventArray);
					}
				 
			});
				
		});
		
		
		jQuery(".upload_message").change(function() {
			if(jQuery(this).html().includes( 'has been successfully uploaded.')) {
				
				var eventArray = new Array();
				eventArray['type'] 		= 'event';
				eventArray['category'] 	= 'Upload Form';
				eventArray['action'] 	= 'Upload Successful';
				eventArray['label'] 	= 'Upload Form - Upload Successful';
				triggerGA_event(eventArray);
				
				ga('send', {
					hitType: 'pageview',
					page: location.pathname + "/upload-success/"
				});

			}
		});
		if(jQuery(".upload_message").html().includes( 'has been successfully uploaded.')) {
			var eventArray = new Array();
			eventArray['type'] 		= 'event';
			eventArray['category'] 	= 'Upload Form';
			eventArray['action'] 	= 'Upload Successful';
			eventArray['label'] 	= 'Upload Form - Upload Successful';
			triggerGA_event(eventArray);
			
			ga('send', {
				hitType: 		'pageview',
				page: 		location.pathname + "/upload-success/",
				title:		"File Uploaded Successfully"
			});
		}
		
		// 
		
		/*
		jQuery('mydiv').bind("DOMSubtreeModified",function(){
			alert('changed');
		});
		*/

		jQuery('#upload-form').submit(function() {
			
			var eventArray = new Array();
			eventArray['type'] 		= 'event';
			eventArray['category'] 	= 'Upload Form';
			eventArray['action'] 	= 'Submited';
			eventArray['label'] 	= 'Upload Form - Submited';
			triggerGA_event(eventArray);
			
			
			
			
		});	
		
		
	}
	
	// User has right clicked while over an image
	jQuery(document).mousedown(function(e){ 
		if( e.button == 2 && jQuery(e.target).is(".asset-page .asset-thumbnail.full-width img")) { 
			// alert('Right mouse button!'); 
			var eventArray = new Array();
			eventArray['type'] 		= 'event';
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
				eventArray['type'] 		= 'event';
				eventArray['category'] 	= 'Image Detail';
				eventArray['action'] 	= 'Credits Viewed';
				eventArray['label'] 	= 'Image Detail - Credits Viewed';
				triggerGA_event(eventArray);
			}
		}
		
			
	});	
	
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
	eventArray['type'] 		= 'event';
	eventArray['category'] 	= 'Show More';
	eventArray['action'] 	= 'Pagination Added';
	eventArray['label'] 	= 'Show More - Pagination Added';
	triggerGA_event(eventArray);
	
	
});
