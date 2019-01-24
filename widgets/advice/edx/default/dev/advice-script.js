function insertAdvice(advice) {
  jQuery('#js-advice-text').html(advice);
}

executeAdviceCall = function (orgId, sessionId, serverUrl) {
	var dateNow = new Date();
  jQuery.ajax({
    //url: serverUrl + "/api/organizations/" + orgId + "/advice-of-the-day?date=" + dateNow.getFullYear() + '-' + (dateNow.getMonth()+1) + '-' + dateNow.getDate(),
		url: serverUrl + "/request",
		params: {
			"api": "GetAdvice",
			"date": dateNow.getFullYear() + '-' + (dateNow.getMonth()+1) + '-' + dateNow.getDate(),
		},
		beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + sessionId);
    },
    method: 'GET',
    success: function(data){
			insertAdvice(data.Data.advice);
			jQuery('#js-advice__loading-container').addClass('advice__loading-container--fading');
			setTimeout(function()
			{
				jQuery('#js-advice__loading-container').hide();
			}, 800);
    }
  });
}

executeAdviceCall(getOrgId(), getSessionId(), getServerUrl());

jQuery('#communicator-input > input').on('change', function () {
  executeAdviceCall(getOrgId(), getSessionId());
});

jQuery('#js-advice-widget').html(`
	<div class="advice__container" id="js-advice-widget-container">
		<div class="advice__tab">Tip of the day</div>
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

			<div class="advice__content--text"><span id="js-advice-text"></span></div>	
		</div>
	</div>
`);

// function calculateAdviceContentHeight() {

//   var adviceWidgetHeight = jQuery('#js-advice-widget-container').height();

//   var tabHeight = jQuery('#js-advice__tab').height();

//   var adviceContentMarginTop = parseInt(jQuery('#js-advice__content').css('marginTop'));
//   var adviceContentMarginBottom = parseInt(jQuery('#js-advice__content').css('marginBottom'));
   
//   var adviceContentHeight = (adviceWidgetHeight - (tabHeight + adviceContentMarginTop + adviceContentMarginBottom));

//   jQuery('#js-advice__content').css('height', adviceContentHeight);   
// }

// calculateAdviceContentHeight();