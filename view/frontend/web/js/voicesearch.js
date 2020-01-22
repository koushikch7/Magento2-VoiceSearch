define([
        'jquery'
    ], function($) {
		
		'use strict';
		
		console.log("VoiceSearch: Script is loaded!! Is enabled? "+window.voicesearch_enabled);
		
		var protocol = location.protocol === 'https:' ? 'https' : 'http';
		
		if(iOS() == false)
		{
			console.log("VoiceSearch: iOS NOT detected!");
			
			if(window.voicesearch_enabled && protocol == 'https')
			{
				console.log("VoiceSearch: HTTPS Enabled!!");
				
				if($("#"+window.voicesearch_search_id).length)
				{
					console.log("VoiceSearch: Search input found!");
					
					$(".voicesearch-trigger").on('click touch', function () {
						$(".voicesearch-trigger").removeClass('voicesearch_mic').addClass('voicesearch_mic_on');
						$("#"+window.voicesearch_search_id).val('');
						$("#"+window.voicesearch_search_id).attr("placeholder", "Listening...");
						startDictation();
					});

					if(isMobileDevice() == true && (window.voicesearch_device_scope == 'mobile' || window.voicesearch_device_scope == 'both'))
					{
						console.log("VoiceSearch: Mobile detected and Mobile or both-devices assigned.");
						$("#voicesearch-trigger-mobile").show();
						if(window.voicesearch_device_scope != 'both')
							$("#voicesearch-trigger-tablet-desktop").hide();
					}
					else if(isMobileDevice() == false && (window.voicesearch_device_scope == 'desktop' || window.voicesearch_device_scope == 'both'))
					{
						console.log("VoiceSearch: Desktop detected and desktop or both-devices assigned.");
						$("#voicesearch-trigger-tablet-desktop").show();
						if(window.voicesearch_device_scope != 'both')
							$("#voicesearch-trigger-mobile").hide();
					}
					else
					{
						console.log("VoiceSearch: Unknown device/config-device detection. Device configured: "+window.voicesearch_device_scope+" Is Mobile: "+isMobileDevice());
						$(".voicesearch-trigger").hide();
					}		
				}
				else
				{
					console.log("VoiceSearch: Search input NOT found!");
				}
			}
			else
			{
				console.log("VoiceSearch: HTTPS NOT detected. VoiceSearch requires HTTPS!!");
			}
		}
		else
		{
			console.log("VoiceSearch: iOS detected, VoiceSearch does NOT work in iOS!!");
		}
		

		//--> Functions Segment:
		
		/**
		 * Function which detects and active the searching by voice.
		 * @return none
		 */
		function startDictation(class_name_mic_on,class_name_mic_off)
		{
			if (window.hasOwnProperty('webkitSpeechRecognition'))
			{
				var recognition = new webkitSpeechRecognition();

				recognition.continuous = false;
				recognition.interimResults = false;

				recognition.lang = window.voicesearch_voice_language;
				recognition.start();

				recognition.onresult = function(e) 
				{
					document.getElementById(window.voicesearch_search_id).value = e.results[0][0].transcript;
					recognition.stop();
					document.getElementById('search_mini_form').submit();
				};

				recognition.onerror = function(e) {
					recognition.stop();
				}

			}
			else
			{
				console.log('VoiceSearch: Speech Recognition is not supported in your browser or it has been disabled.');
			}
		}
		
		/**
		 * Detects if the user-device is mobile.
		 * @return bool
		 */
		function isMobileDevice()
		{
			var testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
		  
			if (testExp.test(navigator.userAgent))
				return true;
			else
				return false;
		}
		
		/**
		 * Detects if the user-device is iOS.
		 * @return bool
		 */		
		function iOS() 
		{
			var iDevices = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'];
			var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
			
			if (!!navigator.platform) 
			{
				while (iDevices.length) 
				{
					if (navigator.platform === iDevices.pop())
					{ 
						return true; 
					}
				}
			}

			if(isSafari)
			{
				return true;
			}
			
			return false;
		}		
	
    }(jQuery)
);