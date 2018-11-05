setOrgId = function (id) {
  jQuery('#orgId').val(id);
  jQuery('#orgId').trigger('change');
}

getOrgId = function () {
  return jQuery('#orgId').val();
}

setUserId = function (id) {
  jQuery('#userId').val(id);
  jQuery('#userId').trigger('change');
}

getUserId = function () {
  return jQuery('#userId').val();
}

setSessionId = function (id) {
  jQuery('#sessionId').val(id);
  jQuery('#sessionId').trigger('change');
}

getSessionId = function () {
  return jQuery('#sessionId').val();
}

function receiveMessage(event)
{
  if (event.origin !== "http://38.89.143.128:3032")
    return;

  //temporary for testing
  if(event.data == "endSession"){
    jQuery('#communicator-event').val("endSession");
    jQuery('#sessionId').trigger('change');
  }

  if(event.data == "newSessionCompleted"){
    jQuery('#communicator-event').val("newSessionCompleted");
    jQuery('#sessionId').trigger('change');
  }

  if(event.data == "sessionEndedUncomplete"){
    jQuery('#communicator-event').val("sessionEndedUncompleted");
    jQuery('#sessionId').trigger('change');
  }
}
window.addEventListener("message", receiveMessage, false);

setOrgId(btoa(neurotracker.orgId)); 
setUserId(btoa(neurotracker.userId));
setSessionId(neurotracker.sessionId);