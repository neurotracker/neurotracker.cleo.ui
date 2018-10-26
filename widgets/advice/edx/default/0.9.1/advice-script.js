function insertAdvice(data) {
  jQuery('#js-advice-text').html(data);
}

executeAdviceCall = function (orgId, sessionId) {
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/advice-of-the-day",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertAdvice(data);
    }
  });
}

executeAdviceCall(getOrgId(), getSessionId());

jQuery('#communicator-input > input').on('change', function () {
  executeAdviceCall(getOrgId(), getSessionId());
});

jQuery('#advice-widget').html(`
	<div class="advice__container" id="js-advice-widget">
		<div class="advice__tab"><p>Advice of the day</p></div>
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
			<div class="advice__content--text"><p id="js-advice-text">If everything seems under control, you are not going fast enough.</p></div>	
		</div>
	</div>
`);

function calculateAdviceContentHeight () {

  var adviceWidgetHeight = jQuery('#js-advice-widget').height();

  var tabHeight = jQuery('#js-advice__tab').height();

  var adviceContentMarginTop = parseInt(jQuery('#js-advice__content').css('marginTop'));
  var adviceContentMarginBottom = parseInt(jQuery('#js-advice__content').css('marginBottom'));
   
  var adviceContentHeight = (adviceWidgetHeight - (tabHeight + adviceContentMarginTop + adviceContentMarginBottom));

  jQuery('#js-advice__content').css('height', adviceContentHeight);   
}

calculateAdviceContentHeight();

setTimeout(function()
{
  jQuery('#js-advice__loading-container').addClass('advice__loading-container--fading');
  setTimeout(function()
  {
    jQuery('#js-advice__loading-container').hide();
  }, 800)
}, 1000)