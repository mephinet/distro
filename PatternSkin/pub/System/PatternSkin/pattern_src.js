
jQuery(document).ready(
    function ($) {
        // Create an attachment counter in the attachment table twisty.
        $('div.foswikiAttachments').livequery(function() {
					var count = $(this).find('table.foswikiTable').attr('rows').length - 1;
					var countStr = " <span class='foswikiSmall'>" + count + "<\/span>";
					$(this).find('.patternAttachmentHeader').livequery(function() {
							$(this).append(countStr);
						}
					);
                }
            );

        var searchResultsCount = 0;

        // Search page handling
        $('.foswikiSearchResultCount span').livequery(function() {
                searchResultsCount += parseInt($(this).html());
            });

        if (searchResultsCount > 0) {
            $('#foswikiNumberOfResultsContainer').livequery(function() {
                    // write result count
                    $(this).html(' ' + foswiki.getMetaTag('TEXT_NUM_TOPICS') + ' <b>' + searchResultsCount + ' </b>');
                });
        }
        
        $('input.foswikiFocus').livequery(function() {
				$(this).focus();
			}
		);
        
        $('input.foswikiChangeFormButton').livequery('click', function() {
				if (foswiki.Edit) {
                    foswiki.Edit.validateSuppressed = true;
				}
			}
		);

		$('body.patternEditPage input').livequery('keydown', function(event) {
				if (event.keyCode == 13) {
					return false;
				}
			}
		);
	});
