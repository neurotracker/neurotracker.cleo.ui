jQuery('#js-start-widget').html(`
<div id="js-start-session__container" class="start-session__container">
  <div class="start-session__header">
      <div class="start-session__title">Welcome Back!</div>
  </div>
  <div class="start-session__content">
    <div id="js-start-session__loading-container" class="start-session__loading-container">
      <svg width="70" height="70" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#365BA9">
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
    <div id="js-start-session__goal-message" class="start-session__goal-message">
        <span><div>Your</div><div>Goal</div></span>
        <i id="js-start-session__goal-icon" class="fas fa-angle-right"></i>
    </div>
    <span class="start-session__session-info">
        <span class="start-session__target-info"><span class="start-session__goal-num" id="js-start-session__goal-targets"></span>Targets</span>
        <span class="start-session__second-info"><span class="start-session__goal-num" id="js-start-session__goal-seconds"></span>Seconds</span>
    </span>
    <span class="start-session__start-content">
      <div class="start-session__start-msg">Ready?</div>
      <button id= "js-start-session__start-btn" class="start-session__start-btn">Start</button>
    </span>
  </div>
</div>
<div id="js-start-session__session-loading" class="start-session__session-loading">
  <div> Loading your NeuroEdX session... </div>
  <svg width="200" height="200" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#365BA9">
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
<form id="js-quiz__form" action="" method="post" class="quiz__container quiz__container--hidden">
  <svg id="js-quiz__close-btn" class="quiz__close-btn" width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95.5853 54.1467C98.8416 50.7653 98.7401 45.3843 95.3586 42.1281C91.9772 38.8718 86.5962 38.9733 83.34 42.3547L95.5853 54.1467ZM42.4148 84.8534C39.1585 88.2348 39.26 93.6158 42.6415 96.872C46.023 100.128 51.4039 100.027 54.6602 96.6453L42.4148 84.8534ZM84.3533 96.0853C87.7347 99.3416 93.1157 99.2401 96.3719 95.8586C99.6282 92.4772 99.5267 87.0962 96.1453 83.84L84.3533 96.0853ZM53.6467 42.9148C50.2652 39.6585 44.8842 39.76 41.628 43.1415C38.3717 46.523 38.4732 51.9039 41.8547 55.1602L53.6467 42.9148ZM29 17.5H109V0.5H29V17.5ZM120.5 29V109.5H137.5V29H120.5ZM109 121H29V138H109V121ZM17.5 109.5V29H0.5V109.5H17.5ZM29 121C22.6487 121 17.5 115.851 17.5 109.5H0.5C0.5 125.24 13.2599 138 29 138V121ZM120.5 109.5C120.5 115.851 115.351 121 109 121V138C124.74 138 137.5 125.24 137.5 109.5H120.5ZM109 17.5C115.351 17.5 120.5 22.6487 120.5 29H137.5C137.5 13.2599 124.74 0.5 109 0.5V17.5ZM29 0.5C13.2599 0.5 0.5 13.2599 0.5 29H17.5C17.5 22.6487 22.6487 17.5 29 17.5V0.5ZM83.34 42.3547L42.4148 84.8534L54.6602 96.6453L95.5853 54.1467L83.34 42.3547ZM96.1453 83.84L53.6467 42.9148L41.8547 55.1602L84.3533 96.0853L96.1453 83.84Z" fill="black"/></svg>
  <div class="quiz__question-prompt">Just a few questions before we start!</div>
  <!-- FIRST QUESTION: HOW ARE YOU FEELING TODAY -->
  <div id="js-quiz__quiz-container" class="quiz__quiz-container quiz__quiz-container--hidden">
  <div id="js-quiz__question1" class="quiz__question-container js-quiz__question-container">
    <div class="quiz__question">How are you feeling today?</div>
    <div class="quiz__answers--feeling">
      <label for="angry" class="quiz__answer--feeling">
        <input type="radio" id="angry" name="feeling" value="angry">
        <i class="far fa-angry"></i>
      </label>
      <label for="frown" class="quiz__answer--feeling">
        <input type="radio" id="frown" name="feeling" value="frown">
        <i class="far fa-frown"></i>
      </label>
      <label for="meh" class="quiz__answer--feeling">
        <input type="radio" id="meh" name="feeling" value="meh">
        <i class="far fa-meh"></i>
      </label>
      <label for="smile" class="quiz__answer--feeling">
        <input type="radio" id="smile" name="feeling" value="smile">
        <i class="far fa-smile"></i>
      </label>
      <label for="laugh" class="quiz__answer--feeling">
        <input type="radio" id="laugh" name="feeling" value="laugh">
        <i class="far fa-laugh"></i>
      </label>
    </div>
  </div>
  <!-- SECOND QUESTION: DESCRIBE YOUR MOOD -->
  <div id="js-quiz__question2" class="quiz__question-container js-quiz__question-container">
    <div class="quiz__question">Which of these words match with your mood?</div>
    <div class="quiz__answers--mood">
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>happy</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>sad</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>excited</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>upset</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>nervous</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>alert</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>relaxed</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>calm</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>stressed</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>depressed</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>serene</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>contented</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>lethargic</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>fatigued</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>elated</div></div>
      <div class="js-quiz__answer--mood quiz__answer--mood"><div>tense</div></div>
    </div>
  </div>
  <!-- THIRD QUESTION: SLEEP, DIET AND PHYSICAL -->
  <div id="js-quiz__question3" class="quiz__question-container js-quiz__question-container">
      <div class="quiz__subquestion-container">
        <div class="quiz__subquestion">How many hours of sleep did you get last night?</div>
        <div class="quiz__subquestion-answers">
          <button id="js-quiz__decrement-btn" type="button" class="quiz__subquestion-answer quiz__increment-btn"><svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98 78C102.694 78 106.5 74.1944 106.5 69.5C106.5 64.8056 102.694 61 98 61L98 78ZM39 61C34.3056 61 30.5 64.8056 30.5 69.5C30.5 74.1944 34.3056 78 39 78L39 61ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM98 61L39 61L39 78L98 78L98 61Z" fill="black"/></svg></button>
          <input id="js-quiz__sleep-count-input" type="number" name="sleep" class="quiz__sleep-count-input" value=8 min=0>
          <div id="js-quiz__sleep-count-display" class="quiz__subquestion-answer quiz__sleep-count-display">8</div>
          <button id="js-quiz__increment-btn" type="button" class="quiz__subquestion-answer quiz__increment-btn"><svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M77 40C77 35.3056 73.1944 31.5 68.5 31.5C63.8056 31.5 60 35.3056 60 40L77 40ZM60 99C60 103.694 63.8056 107.5 68.5 107.5C73.1944 107.5 77 103.694 77 99L60 99ZM98 78C102.694 78 106.5 74.1944 106.5 69.5C106.5 64.8056 102.694 61 98 61L98 78ZM39 61C34.3056 61 30.5 64.8056 30.5 69.5C30.5 74.1944 34.3056 78 39 78L39 61ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM60 40L60 99L77 99L77 40L60 40ZM98 61L39 61L39 78L98 78L98 61Z" fill="black"/></svg></button>
        </div>
      </div>
      <hr>
      <div class="quiz__subquestion-container">
        <div class="quiz__subquestion">Have you eaten a meal in the last 2 hours?</div>
        <div class="quiz__subquestion-answers">
          <label for="meal-yes" class="quiz__answer-btn">
            <input type="radio" id="meal-yes" name="meal" value="yes">
            <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.7502 53.8343C45.8973 50.1063 40.5624 49.3968 36.8343 52.2498C33.1063 55.1027 32.3968 60.4376 35.2498 64.1657L48.7502 53.8343ZM65.6179 89.8625L72.3682 84.6969L72.3682 84.6969L65.6179 89.8625ZM71.9634 89.8725L78.6974 95.0594L78.6974 95.0594L71.9634 89.8725ZM121.734 39.1869C124.599 35.4679 123.906 30.1307 120.187 27.2661C116.468 24.4014 111.131 25.094 108.266 28.8131L121.734 39.1869ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM35.2498 64.1657L58.8677 95.0282L72.3682 84.6969L48.7502 53.8343L35.2498 64.1657ZM78.6974 95.0594L121.734 39.1869L108.266 28.8131L65.2295 84.6856L78.6974 95.0594ZM58.8677 95.0282C63.861 101.553 73.6836 101.569 78.6974 95.0594L65.2295 84.6856C67.0344 82.3423 70.5706 82.3479 72.3682 84.6969L58.8677 95.0282Z" fill="black"/></svg>
          </label>
          <label for="meal-no" class="quiz__answer-btn">
            <input type="radio" id="meal-no" name="meal" value="no">
            <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95.5853 54.1467C98.8415 50.7653 98.74 45.3843 95.3586 42.1281C91.9771 38.8718 86.5962 38.9733 83.3399 42.3547L95.5853 54.1467ZM42.4148 84.8534C39.1585 88.2348 39.26 93.6158 42.6414 96.872C46.0229 100.128 51.4038 100.027 54.6601 96.6453L42.4148 84.8534ZM84.3533 96.0853C87.7348 99.3416 93.1157 99.2401 96.372 95.8586C99.6283 92.4772 99.5268 87.0962 96.1453 83.84L84.3533 96.0853ZM53.6467 42.9148C50.2653 39.6585 44.8843 39.76 41.628 43.1415C38.3718 46.523 38.4733 51.9039 41.8547 55.1602L53.6467 42.9148ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM83.3399 42.3547L42.4148 84.8534L54.6601 96.6453L95.5853 54.1467L83.3399 42.3547ZM96.1453 83.84L53.6467 42.9148L41.8547 55.1602L84.3533 96.0853L96.1453 83.84Z" fill="black"/></svg>
          </label>
        </div>
      </div>
      <hr>
      <div class="quiz__subquestion-container">
        <div class="quiz__subquestion">Have you done any physical activity in the last 2 hours?</div>
          <div class="quiz__subquestion-answers">
              <label for="physical-yes" class="quiz__answer-btn">
                <input type="radio" id="physical-yes" name="physical" value="yes">
                <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.7502 53.8343C45.8973 50.1063 40.5624 49.3968 36.8343 52.2498C33.1063 55.1027 32.3968 60.4376 35.2498 64.1657L48.7502 53.8343ZM65.6179 89.8625L72.3682 84.6969L72.3682 84.6969L65.6179 89.8625ZM71.9634 89.8725L78.6974 95.0594L78.6974 95.0594L71.9634 89.8725ZM121.734 39.1869C124.599 35.4679 123.906 30.1307 120.187 27.2661C116.468 24.4014 111.131 25.094 108.266 28.8131L121.734 39.1869ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM35.2498 64.1657L58.8677 95.0282L72.3682 84.6969L48.7502 53.8343L35.2498 64.1657ZM78.6974 95.0594L121.734 39.1869L108.266 28.8131L65.2295 84.6856L78.6974 95.0594ZM58.8677 95.0282C63.861 101.553 73.6836 101.569 78.6974 95.0594L65.2295 84.6856C67.0344 82.3423 70.5706 82.3479 72.3682 84.6969L58.8677 95.0282Z" fill="black"/></svg>
              </label>
              <label for="physical-no" class="quiz__answer-btn">
                <input type="radio" id="physical-no" name="physical" value="no">
                <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95.5853 54.1467C98.8415 50.7653 98.74 45.3843 95.3586 42.1281C91.9771 38.8718 86.5962 38.9733 83.3399 42.3547L95.5853 54.1467ZM42.4148 84.8534C39.1585 88.2348 39.26 93.6158 42.6414 96.872C46.0229 100.128 51.4038 100.027 54.6601 96.6453L42.4148 84.8534ZM84.3533 96.0853C87.7348 99.3416 93.1157 99.2401 96.372 95.8586C99.6283 92.4772 99.5268 87.0962 96.1453 83.84L84.3533 96.0853ZM53.6467 42.9148C50.2653 39.6585 44.8843 39.76 41.628 43.1415C38.3718 46.523 38.4733 51.9039 41.8547 55.1602L53.6467 42.9148ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM83.3399 42.3547L42.4148 84.8534L54.6601 96.6453L95.5853 54.1467L83.3399 42.3547ZM96.1453 83.84L53.6467 42.9148L41.8547 55.1602L84.3533 96.0853L96.1453 83.84Z" fill="black"/></svg>
              </label>
          </div>
      </div>
    </div>
    <div class="quiz__nav-btns">
      <button type="button" id="js-quiz__go-back" class="quiz__go-back">Back</button>
      <button type="button" id="js-quiz__go-next" class="quiz__go-next">Next</button>
    </div>
    </div>
</form>  
`);

// Setup data variables
let currentQuestion = 0;
let questionIds = [];
let quizMoodAnswers = [];

// Get html elements
let quizForm = getQuizForm();
let goNext = getGoNextButton();
let goBack = getGoBackButton();
let quizContainer = getQuizContainer();
let startContainer = getStartContainer();

executeStartSessionCalls = function(orgId, userId, sessionId, serverUrl){
  adaptStartSessionLayout();
  jQuery.ajax({
    url: serverUrl + "/api/organizations/" + orgId + "/users/" + userId,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      start__data = {
        targets: data.nextTargets,
        seconds: data.nextSeconds,
        program: data.program,
        message: data.message
      };
      updateStartInfo(start__data);
      jQuery('#js-start-session__loading-container').addClass('start-session__loading-container--fading');
      setTimeout(function()
      {
        jQuery('#js-start-session__loading-container').hide();
      }, 800);

      jQuery('#js-quiz__form').attr('action', serverUrl + "/api/organizations/" + orgId + '/users/' + userId + '/sessions/quizresults');

    }
  });
}

getQuizQuestionIds();
setupEventHandlers();
executeStartSessionCalls(getOrgId(), getUserId(), getSessionId(), getServerUrl());

jQuery('#communicator-input > input').on('change', function() {
  let changeVal = jQuery('#communicator-input > input').val();

  if(changeVal == 'endSession') {
    jQuery('#js-nt-iframe').addClass('start-session__nt-iframe--hidden');
    closeFullscreen();
    executeStartSessionCalls(getOrgId(), getUserId(), getSessionId(), getServerUrl());
  }

  if(changeVal == 'newSessionCompleted') {
    jQuery('#js-nt-iframe').addClass('start-session__nt-iframe--hidden');
    closeFullscreen();
    executeStartSessionCalls(getOrgId(), getUserId(), getSessionId(), getServerUrl());
  }
  if(changeVal == 'sessionEndedUncomplete') {
    jQuery('#js-nt-iframe').addClass('start-session__nt-iframe--hidden');
    closeFullscreen();
  }
});

// functions for getting html elements and storing to variables
function getQuizForm(){return jQuery('#js-quiz__form');}
function getGoNextButton() {return jQuery('#js-quiz__go-next');}
function getGoBackButton() {return jQuery('#js-quiz__go-back');}
function getQuizContainer() {return jQuery('#js-quiz__quiz-container');}
function getStartContainer() {return jQuery('#js-start-session__container');}
function getQuizQuestionIds() {
  jQuery('.js-quiz__question-container').toArray().map(question => questionIds.push(question.id));
}

// inserts start-session data retrieved from api to appropriate fields 
function updateStartInfo(start__data) {
  //jQuery('#js-start-session__message').text(`"` + start__data.message + `"`).hide();
  jQuery('#js-start-session__goal-targets').text(start__data.targets);
  jQuery('#js-start-session__goal-seconds').text(start__data.seconds);
}

// sets up event handlers for all html elements (buttons and inputs)
function setupEventHandlers() {
  jQuery('#js-start-session__start-btn').click(openQuiz);
  jQuery('#js-quiz__close-btn').click(closeQuiz);
  goNext.click(() => nextQuestion(1));
  goBack.click(() => nextQuestion(-1));
  jQuery("[type='number']").keypress(e => e.preventDefault);
  jQuery('#js-quiz__increment-btn').click(() => incrementSleep(1));
  jQuery('#js-quiz__decrement-btn').click(() => incrementSleep(-1));
  jQuery('.js-quiz__answer--mood').click(handleMoodAnswerClick);
}

// changes css and adds/removes mood answers to array used by hidden input 
function handleMoodAnswerClick() {
  jQuery(this).toggleClass('quiz__answer--mood-selected');
  let arr = quizMoodAnswers;
  let answerString = jQuery(this).find("div")[0].innerHTML;
  if(arr.includes(answerString)){
    arr.splice( arr.indexOf(answerString), 1);
  } else {
    arr.push(answerString);
  }
  quizMoodAnswers = arr;
}

// handles opening of quiz page
function openQuiz() {
  startContainer.addClass('start-session__container--hidden');
  quizForm.removeClass('quiz__container--hidden');
  quizContainer.removeClass('quiz__quiz-container--hidden');
  currentQuestion = 0;
  jQuery(`.quiz__question-container`).removeClass('quiz__question-container--show');
  showQuestion(currentQuestion);
  window.scrollTo(0, 0);
  jQuery('#js-profile-widget, #js-advice-widget, #js-graph-by-targets-widget, #js-stats-widget').hide();
}

// handles closing of quiz page
function closeQuiz() {
  jQuery(`#${questionIds[currentQuestion]}`).removeClass('quiz__question-container--show');
  currentQuestion = 0;
  quizForm.trigger('reset');
  window.scrollTo(0, 0);
  jQuery('.quiz__answer--mood-selected').removeClass('quiz__answer--mood-selected');
  quizMoodAnswers = [];
  jQuery('#js-quiz__sleep-count-input').val(8);
  jQuery('#js-quiz__sleep-count-display').text(8);
  quizContainer.addClass('quiz__quiz-container--hidden');
  quizForm.addClass('quiz__container--hidden');
  // startContainer.removeClass('start-session__container--hidden');
  // jQuery('#js-profile-widget, #js-advice-widget, #js-graph-by-targets-widget, #js-stats-widget').show();
}

// handles incrementing and decrementing 'number of hours of sleep' quiz question and input
function incrementSleep(n) {
  x = parseInt(jQuery('#js-quiz__sleep-count-input').val());
  if(x+n >= 0 && x+n <=24){
    jQuery('#js-quiz__sleep-count-input').val(x+n);
    jQuery('#js-quiz__sleep-count-display').text(x+n);
  }
}

// shows the question with input index and shows/hides nav buttons when necessary
function showQuestion(n) {
  jQuery(`#${questionIds[n]}`).addClass('quiz__question-container--show');
  if (n == 0) {
    goBack.addClass('quiz__go-back--hide');
  } else {
    goBack.removeClass('quiz__go-back--hide');
  }
  if(n == (questionIds.length - 1)) {
    goNext.text("Submit"); 
  } else {
    goNext.text("Next");
  }
}

// determines the next/previous question and calls showQuestion with its index. If there is no next question, then submits form.
function nextQuestion(n) {
  jQuery(`#${questionIds[currentQuestion]}`).removeClass('quiz__question-container--show');
  currentQuestion = currentQuestion + n;
  if (currentQuestion >= questionIds.length) {
    let formData = {
      "feeling": jQuery("input[name=feeling]").val(),
      "mood": quizMoodAnswers,
      "sleep": jQuery("input[name=sleep]").val(),
      "meal": jQuery("input[name=meal]").val(),
      "physical": jQuery("input[name=physical]").val()
    };
    
    //display NT iframe fullscreen
    jQuery('#js-nt-iframe').attr('src', neurotrackerSessionUrl);

    setTimeout(() => {
      jQuery('#js-nt-iframe').removeClass('start-session__nt-iframe--hidden');
      openFullscreen(jQuery('#js-nt-iframe'));
      startContainer.removeClass('start-session__container--hidden');
      jQuery('#js-start-session__session-loading').css('display', 'none');
      jQuery('#js-profile-widget, #js-advice-widget, #js-graph-by-targets-widget, #js-stats-widget').show();
    }, 1000);
    closeQuiz();
    //session loading screen
    let docWidth = window.innerWidth;
    let docHeight = window.innerHeight;
    let loadingWidth = jQuery('#js-start-session__session-loading').width();
    let loadingHeight = jQuery('#js-start-session__session-loading').height();
    let loadingXPos = (docWidth / 2) - (loadingWidth / 2);
    let loadingYPos = (docHeight / 2) - (loadingHeight / 2);
    jQuery('#js-start-session__session-loading').css({'display': 'flex', 'left': loadingXPos, 'top': loadingYPos});

    jQuery.ajax({
      type: "POST",
      url: serverUrl + "/api/organizations/" + getOrgId() + "/users/" + getUserId() + "/sessions/quizresults",
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(':' + getSessionId()));
      },
      data: JSON.stringify(formData),
      success: function(){
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
      },  
      contentType : "application/json"
    });
  } else{
    showQuestion(currentQuestion);
  }
}

function openFullscreen(elem) {
  if (elem[0].requestFullscreen) {
    elem[0].requestFullscreen();
  } else if (elem[0].mozRequestFullScreen) { /* Firefox */
    elem[0].mozRequestFullScreen();
  } else if (elem[0].webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem[0].webkitRequestFullscreen();
  } else if (elem[0].msRequestFullscreen) { /* IE/Edge */
    elem[0].msRequestFullscreen();
  }
  //screen.lockOrientation('landscape');
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

jQuery(window).keyup(function(e) {
  if(e.key == "Escape") {
    jQuery('#js-nt-iframe').addClass('start-session__nt-iframe--hidden');
    closeFullscreen();
  }
});

// MEDIA QUERIES
window.addEventListener('resize', adaptStartSessionLayout);

function adaptStartSessionLayout() {
  let widgetWidth = jQuery("#js-start-widget").parent().width();
  let quizWidth = jQuery("#js-quiz__form").width();

  if(widgetWidth <= 575 ){
    jQuery("#js-start-session__goal-icon").hide();
    jQuery("#js-start-session__goal-message").hide();
  } else {
    jQuery("#js-start-session__goal-icon, #js-start-session__goal-message").show();
  }
  if(widgetWidth <= 500 ) {
    jQuery('.start-session__session-info span').css('flex-direction', 'column-reverse');
    jQuery('.start-session__goal-num').css('margin-top', '3px');
  } else {
    jQuery('.start-session__session-info span').removeAttr("style");
  }
  if(widgetWidth <= 400 ) {
    jQuery('.start-session__title').css('font-size', '1.5em');
  } else {
    jQuery('.start-session__title').css('font-size', '1.8em');
  }
  if(widgetWidth <= 340 ) {
    jQuery('.start-session__start-btn').css('width', '100px');
  } else {
    jQuery('.start-session__start-btn').removeAttr("style");
  }
  if(widgetWidth <= 310 ) {
    jQuery('.start-session__target-info, .start-session__second-info').css('font-size', '0.6em');
  } else {
    if(widgetWidth <= 400 ) {
      jQuery('.start-session__target-info, .start-session__second-info').css('font-size', '0.8em');
    } else {
      jQuery('.start-session__title').css('font-size', '1.8em');
    }
  }
  if(quizWidth <= 980) {
    jQuery(".quiz__subquestion-container").css('flex-flow', 'column');
    jQuery(".quiz__subquestion-answers").css('margin-top', '5px');
  } else {
    jQuery(".quiz__subquestion-container").css('flex-flow', 'row');
    jQuery(".quiz__subquestion-answers").css('margin-top', '0');
  }

  //handle full sscreen exit
  if(jQuery('#js-nt-iframe').height() <= 500){
    jQuery('#js-nt-iframe').addClass('start-session__nt-iframe--hidden');
  }
}