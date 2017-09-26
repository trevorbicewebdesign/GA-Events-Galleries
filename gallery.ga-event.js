// JavaScript Document

// Events Generated Are summarized below
// console.log('Show More button activated');
// console.log('Menu Activated');
// console.log('Menu Deactivated')
// console.log("Uploader Page Visited");	
// console.log("Submit Button Clicked");

jQuery( document ).ready(function() {
	// Event if the 'Show More' Button has been clicked
	jQuery('.show-more > a').click(function(){
		console.log('Show More button activated');
	});
	
	// Event if the Menu has been opened or closed
	jQuery('.navbar-toggle').click(function() {
		var aria_expanded = $(this).attr('aria-expanded');

		if(aria_expanded == 'false' || aria_expanded== null){
			console.log('Menu Activated');
			gtag('event', 'menu_activated', {
			  	'event_category': 'Menu',
  				'event_label': 'Menu - Activated'
			});
		}
		else {
			console.log('Menu Deactivated');
			gtag('event', 'menu_activated', {
			  	'event_category': 'Menu',
  				'event_label': 'Menu - Deactivated'
			});
		}
	});
	
	// Uploader Specific events
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	if(dir == '/uploader'){
		// Uploader Context
		console.log("Uploader Page Visited");	
		gtag('event', 'page_visited', {
			'event_category': 'Page',
			'event_label': 'Page - Uploader Page Visited'
		});
		
		jQuery('#upload-form #submit-button').click(function() {
			console.log("Submit Button Clicked");
			gtag('event', 'upload_form_submit_clicked', {
				'event_category': 'Uploader Form',
				'event_label': 'Uploader Form - Submit Clicked'
			});
			
			jQuery('#upload-form .form-group.required, #upload-form .form-group.has-error').each(function(index,element){
					// This must be the file upload field

					if( jQuery(this).hasClass('field-uploaderform-imagefile') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = jQuery(this).find('.help-block-error').text();
						
						
						console.log(error);
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
						
					}
					// This must be the First Name
					else if( jQuery(this).hasClass('field-uploaderform-fname') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a first name";
						console.log(error);
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
						
					}
				 // Last Name
					else if( jQuery(this).hasClass('field-uploaderform-lname') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a last name";
						console.log(error);
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
					// Email
					else if( jQuery(this).hasClass('field-uploaderform-photographersemail') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter an email";
						console.log(error);
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
					// Photo Title
					else if( jQuery(this).hasClass('field-uploaderform-title') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a photo title";
						console.log(error);
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
					// Caption
					else if( jQuery(this).hasClass('field-uploaderform-captionfrommeta') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('input').val() == '') ){
						error = "Please enter a caption";  
						console.log(error);
						if(jQuery(this).find('input').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
					// Year
					else if( jQuery(this).hasClass('field-uploaderform-year') && ( jQuery(this).hasClass('has-error') || jQuery(this).find('select').val() == '') ){
						error = "Please enter a year";
						console.log(error);
						if(jQuery(this).find('select').val() == ''){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
					// Terms of Service
					else if( jQuery(this).hasClass('field-uploaderform-acceptcheckbox') && ( jQuery(this).hasClass('has-error') || !jQuery(this).find('input').attr("checked") ) ){
						error = "Please check the terms of service";
						console.log(error);
						if(!jQuery(this).find('input').attr("checked")){
							jQuery(this).addClass('has-error');
							jQuery(this).find('.help-block-error').html("Required field.");
						}
						gtag('event', 'uploader_form_error_file', {
							'event_category': 'Uploader Form',
							'event_label': 'Uploader Form - File - '+error
						});
					}
				 
			});
				
		});
		
		/*
		jQuery(".upload_message").change(function() {
			if(jQuery(this).html().search( 'has been successfully uploaded.')) {
				
				console.log("File Uploaded Successfully");
				gtag('event', 'uploader_form_error_file', {
					'event_category': 'Uploader Form',
					'event_label': 'Uploader Form - File - '+error
				});
			}
		});
		if(jQuery(".upload_message").html().search( 'has been successfully uploaded.')) {
			console.log("File Uploaded Successfully");
			gtag('event', 'uploader_form_error_file', {
				'event_category': 'Uploader Form',
				'event_label': 'Uploader Form - File - '+"File Uploaded Successfully"
			});
		}
		*/
		// 
		
		/*
		jQuery('mydiv').bind("DOMSubtreeModified",function(){
			alert('changed');
		});
		*/
		
		jQuery('#upload-form').submit(function() {
			
			console.log("Upload Form Submitted");	
			gtag('event', 'upload_form_submitted', {
				'event_category': 'Uploads',
				'event_label': 'Uploader - Form Submitted'
			});
		});	
		
		
	}
	
	// User has right clicked while over an image
	jQuery(document).mousedown(function(e){ 
		if( e.button == 2 && jQuery(e.target).is(".asset-page .asset-thumbnail.full-width img")) { 
			// alert('Right mouse button!'); 
			console.log('Right click over image');
			gtag('event', 'image_rightclicked', {
				'event_category'	: 'Image Detail',
				'event_label'		: 'Image Detail - Right Click'
			});
		} 
	});	
	
	var itemViewed = false;
	jQuery(window).scroll(function() {
		
		var selector = ".asset-details .flex-item:first-child";
		
		if(itemViewed == false && jQuery(selector).length >0) {
			if(inView(selector)){
				itemViewed = true;
				console.log("Credits Viewed");
				gtag('event', 'credits_viewed', {
					'event_category'	: 'Credits',
					'event_label'		: 'Credits - Viewed'
				});
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
	console.log("Show More Pagination Inserted");
	gtag('event', 'showmore_pagination_added', {
		'event_category'	: 'Show More',
		'event_label'		: 'Show More - Pagination Added'
	});
});
