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

// setOrgId(btoa(neurotracker.orgId)); 
// setUserId(btoa(neurotracker.userId));
// setSessionId(neurotracker.sessionId);

setOrgId("TmV1cm9FZFg="); 
setUserId("ODQ2MDQ0MThkMjNlZDY3MzkwNDJiMDA4M2JiZjUxMGQtMQ==");
setSessionId("426092_c9470285-a62f-4321-8665-06e1fcb9799c");