/* 
	jQuery plugin to allow input fields to be emptied when they get focus and,
	if necessary, to restore the original content when the user doesn't enter anything.
	
	Parameters:
		- selector: an extra filter that will be applied on the input fields, limiting the ones that are cleared
					e.g. clearFields(selector: '.clean'); will only fire on inputfields that have class "clean"
		- textFields: true/false determines if text fields should be cleared. Default = true
		- textAreas: true/false determines if text areas should be cleared. Default = true
		- passwordFields: true/false determines if password fields should be cleared. Default = true

	Created by Tim De Grande.
	Licensed under GPLv3 (http://www.opensource.org/licenses/gpl-3.0.html)
*/

(function( $ ){
  $.fn.clearFields = function(options) {
  
    var settings = {
    	'selector'			: '*',
    	'textFields'		: true,
    	'textAreas'			: true,
    	'passwordFields'	: true
    };
    
    var methods = {
    	blur: function($field) {
    		if ($field.val().trim() == "") {
    			$field.val($field.attr("oldValue"))
    				.removeAttr("oldValue")
    				.removeAttr("changed");
    		} else {
    			$field.attr("changed", "true");
    		}
    	},
    	
    	focus: function ($field) {
	    		if ($field.attr("changed") != "true") {
	    			$field.attr("oldValue", $field.val()).val("");
	    		}
    	},
    	
    	clearFields: function ($fields) {
			if (selector != "*") {
	    		$fields = $fields.filter(selector);
	    	}
	    	
	    	$fields.focus(function() {
	    		methods.focus($(this));
	    	}).blur(function () {
	    		methods.blur($(this));
	    	});

    	}
    };
    
    var selector;
    
    
    return this.each(function() {
    	if (options) {
    		settings = $.extend(settings, options);
    	}
    	
    	if (!(settings.textFields || settings.textAreas || settings.passwordFields)) {
    		//No fields are affected.
    		alert("nothing");
    		return;
    	}
    	
    	selector = settings.selector;
    	
    	if (settings.textFields) {
	    	//Handle textFields.
	    	methods.clearFields($(this).find("input[type=text]"));
    	}
    	
    	if (settings.passwordFields) {
    		methods.clearFields($(this).find("input[type=password]"));
    	}
    	
    	if (settings.textAreas) {
    		methods.clearFields($(this).find("textarea"));
    	}
    	
    });
  };
})( jQuery );