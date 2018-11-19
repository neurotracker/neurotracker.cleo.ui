jQuery('#js-advice-widget').html(`
	<div class="advice__container" id="js-advice-widget-container">
		<div class="advice__tab"><p class="i18n-tip-of-the-day"></p></div>
		<div class="advice__content" id="js-advice__content">

			<div id="js-advice__loading-container" class="advice__loading-container">
			  <svg width="80" height="80" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#365BA9">
			    <g fill="none" fill-rule="evenodd">
			      <g transform="translate(1 1)" stroke-width="2">
			        <circle stroke-opacity=".3" cx="18" cy="18" r="18" />
			        <path stroke="#00A14B" d="M36 18c0-9.94-8.06-18-18-18">
			          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.7s" repeatCount="indefinite" />
			        </path>
			      </g>
			    </g>
			  </svg>
			</div>

			<div class="advice__content--text"><p id="js-advice-text"></p></div>	
		</div>
	</div>
`);

function insertAdvice(advice) {
  jQuery('#js-advice-text').html(advice);
}

executeAdviceCall = function (orgId, sessionId) {
	var dateNow = new Date();
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/advice-of-the-day?date=" + dateNow.getFullYear() + '-' + (dateNow.getMonth()+1) + '-' + dateNow.getDate(),
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertAdvice(data.advice);
    }
  });
}

translateAdviceWidget();
executeAdviceCall(getOrgId(), getSessionId());
jQuery('#communicator-input > input').on('change', function () {
	executeAdviceCall(getOrgId(), getSessionId());
});

function translateAdviceWidget() {
	jQuery('.i18n-tip-of-the-day').text(globalize.messageFormatter('tip-of-the-day'));
}

// function calculateAdviceContentHeight() {

//   var adviceWidgetHeight = jQuery('#js-advice-widget-container').height();

//   var tabHeight = jQuery('#js-advice__tab').height();

//   var adviceContentMarginTop = parseInt(jQuery('#js-advice__content').css('marginTop'));
//   var adviceContentMarginBottom = parseInt(jQuery('#js-advice__content').css('marginBottom'));
   
//   var adviceContentHeight = (adviceWidgetHeight - (tabHeight + adviceContentMarginTop + adviceContentMarginBottom));

//   jQuery('#js-advice__content').css('height', adviceContentHeight);   
// }

// calculateAdviceContentHeight();

setTimeout(function()
{
  jQuery('#js-advice__loading-container').addClass('advice__loading-container--fading');
  setTimeout(function()
  {
    jQuery('#js-advice__loading-container').hide();
  }, 800)
}, 1000)