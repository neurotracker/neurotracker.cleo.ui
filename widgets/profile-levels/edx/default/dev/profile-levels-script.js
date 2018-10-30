var CDN_URL = 'https://raw.githubusercontent.com/neurotracker/neurotracker.cleo.ui-public/develop/widgets/profile-levels/edx/default/dev/';
var previewProfileImage;
var currentProfileImage;

hideLoading = function() {
  jQuery('#js-profile__loading-container').addClass('profile__loading-container--fading');
  setTimeout(function () {
    jQuery('#js-profile__loading-container').hide();
  }, 800);
}

insertName = function(name) {
  jQuery('#js-profile__name').html(name);
}

insertPictureUrl = function(imageUrl) {
  jQuery('#js-profile__avatar-img').attr('src', imageUrl);
}

insertLevel = function (level, currentExp, goalExp) {
  jQuery('#js-profile__current-level').html(level);
  jQuery('#js-profile__experience-points').html(currentExp);
  jQuery('#js-profile__goal-experience').html('/' + goalExp);
  setTimeout(function () {
    jQuery('#js-profile__experience-meter').css('width', currentExp / goalExp * 100 + '%');
  }, 600);
  if (level >= 10 && level <= 14) {
    jQuery('#js-profile__background').css('background-image', 'linear-gradient(135deg, #F9D423 0%, #e65c00 100%)');
    jQuery('.profile__experience-meter').css('background-color', 'rgb(240, 152, 18)');
    jQuery('#js-profile__star > svg > path:nth-child(2)').attr('fill', 'rgb(240, 152, 18)');
    jQuery('#js-profile__title').css('color', 'rgb(240, 152, 18)');
    var hueRotation = (level - 10) * 5;
  }
  else {
    jQuery('#js-profile__background').css('background-image', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    jQuery('.profile__experience-meter').css('background-color', '#806ee7');
    jQuery('#js-profile__star > svg > path:nth-child(2)').attr('fill', '#806ee7');
    jQuery('#js-profile__title').css('color', '#806ee7');
    var hueRotation = (level - 1) * 15;
  }
  jQuery('#js-profile__background').css('filter', 'hue-rotate(' + hueRotation + 'deg)');
  jQuery('#js-profile__title').css('filter', 'hue-rotate(' + hueRotation + 'deg)');
  jQuery('#js-profile__experience-meter').css('filter', 'hue-rotate(' + hueRotation + 'deg)');
  jQuery('#js-profile__star').css('filter', 'drop-shadow(0 2px 7px rgba(0,0,0,0.21)) hue-rotate(' + hueRotation + 'deg)');
}

insertRewards = function(title, borderImage) {
  jQuery("#js-profile__title").html(title);
  jQuery("#js-profile__avatar-border").attr('src', borderImage);
}

insertNextRewards = function(level, type) {
  if(level != ""){
    jQuery("#js-profile__next-reward").html('NEXT REWARD: LEVEL ' + level + '(NEW ' + type.join(', ') + ')');
  }
}

executeProfileLevelsCalls = function(orgId, userId, sessionId){
  var loadingCounter = 0;
  const TOTAL_REQUESTS = 5

  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "?fields=firstname,lastname",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function (data) {
      insertName(data.firstName + " " + data.lastName);
      loadingCounter++;
      if (loadingCounter >= TOTAL_REQUESTS) {
        hideLoading();
      }
    }
  });

  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/pictureUrl",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function (data) {
      insertPictureUrl(data.firstName + " " + data.lastName);
      loadingCounter++;
      if (loadingCounter >= TOTAL_REQUESTS) {
        hideLoading();
      }
    }
  });

  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + '/level',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function (data) {
      insertLevel(data.level, data.exp, data.expToNextLevel);
      loadingCounter++;
      if (loadingCounter >= TOTAL_REQUESTS) {
        hideLoading();
      }
      // request to get rewards data using level
      jQuery.ajax({
        url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/rewards/" + data.level,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
        },
        method: 'GET',
        success: function (data) {
          insertRewards(data.reward_title, data.reward_url);
          loadingCounter++;
          if (loadingCounter >= TOTAL_REQUESTS) {
            hideLoading();
          }
        }
      });
      // request to get next rewards data using level
      jQuery.ajax({
        url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/rewards/" + data.level + "nexttype",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
        },
        method: 'GET',
        success: function (data) {
          insertNextRewards(data.level, data.types);
          loadingCounter++;
          if (loadingCounter >= TOTAL_REQUESTS) {
            hideLoading();
          }
        }
      });
    }
  });
}

updateProfileImage = function(imageUrl)
{
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/pictureURL",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'PUT',
    data: { picUrl: CDN_URL + imageUrl}
  });
}

executeProfileLevelsCalls(getOrgId(), getUserId(), getSessionId());

jQuery('#communicator-input > input').on('change', function() {
  let changeVal = jQuery('#communicator-input > input').val();
  if(changeVal == 'endSession') {
    executeProfileLevelsCalls(getOrgId(), getUserId(), getSessionId());
  }
});

jQuery('#js-profile-widget').html(`
<div class="profile__container">
  <div id="js-profile__loading-container" class="profile__loading-container">
    <svg width="80" height="80" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#365BA9">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".3" cx="18" cy="18" r="18" />
          <path stroke="#00A14B" d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.7s"
              repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </svg>
  </div>
  <div id="js-profile__background" class="profile__background"></div>
  <div class="profile__avatar">
    <img src="" id="js-profile__avatar-img" class="profile__avatar-img">
    <!-- <div class="profile__avatar-border"></div> -->
    <img src="" id="js-profile__avatar-border" class="profile__avatar-border">
    <div id="js-profile__change-pic-overlay" class="profile__change-pic-overlay">
      <div>Change<br />Picture</div>
    </div>
    <div id="js-profile__change-pic-component" class="profile__change-pic-component">
      <div id="js-profile__close-btn" class="profile__close-btn">
        <svg viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M95.5853 54.1467C98.8415 50.7653 98.74 45.3843 95.3586 42.1281C91.9771 38.8718 86.5962 38.9733 83.3399 42.3547L95.5853 54.1467ZM42.4148 84.8534C39.1585 88.2348 39.26 93.6158 42.6414 96.872C46.0229 100.128 51.4038 100.027 54.6601 96.6453L42.4148 84.8534ZM84.3533 96.0853C87.7348 99.3416 93.1157 99.2401 96.372 95.8586C99.6283 92.4772 99.5268 87.0962 96.1453 83.84L84.3533 96.0853ZM53.6467 42.9148C50.2653 39.6585 44.8843 39.76 41.628 43.1415C38.3718 46.523 38.4733 51.9039 41.8547 55.1602L53.6467 42.9148ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM83.3399 42.3547L42.4148 84.8534L54.6601 96.6453L95.5853 54.1467L83.3399 42.3547ZM96.1453 83.84L53.6467 42.9148L41.8547 55.1602L84.3533 96.0853L96.1453 83.84Z"
            fill="#aaaaaa" />
        </svg>
      </div>
      <div class="profile__change-pic-title">Change your image</div>
      <!-- <div id="js-upload-photo" class="profile__change-pic-btn">Upload a photo</div>
      <input class="image-upload-input" id="js-image-upload" type="file" accept="image/*" /> -->
      <div class="profile__change-pic-text-box">OR</div>
      <div id="js-profile__avatar-selection-container" class="profile__avatar-selection-container">
        <div id="js-choose-avatar" class="profile__change-pic-btn">
          Choose an avatar
        </div>
        <div id="js-profile__avatars" class="profile__avatars">
          <ul>
            <li><img src="${CDN_URL}Avatars/1.png" alt="avatar1"></li>
            <li><img src="${CDN_URL}Avatars/2.png" alt="avatar2"></li>
            <li><img src="${CDN_URL}Avatars/3.png" alt="avatar3"></li>
            <li><img src="${CDN_URL}Avatars/4.png" alt="avatar4"></li>
            <li><img src="${CDN_URL}Avatars/5.png" alt="avatar5"></li>
            <li><img src="${CDN_URL}Avatars/6.png" alt="avatar6"></li>
            <li><img src="${CDN_URL}Avatars/7.png" alt="avatar7"></li>
            <li><img src="${CDN_URL}Avatars/8.png" alt="avatar8"></li>
            <li><img src="${CDN_URL}Avatars/9.png" alt="avatar9"></li>
            <li><img src="${CDN_URL}Avatars/10.png" alt="avatar10"></li>
            <li><img src="${CDN_URL}Avatars/11.png" alt="avatar11"></li>
            <li><img src="${CDN_URL}Avatars/12.png" alt="avatar12"></li>
            <li><img src="${CDN_URL}Avatars/13.png" alt="avatar13"></li>
            <li><img src="${CDN_URL}Avatars/14.png" alt="avatar14"></li>
            <li><img src="${CDN_URL}Avatars/15.png" alt="avatar15"></li>
            <li><img src="${CDN_URL}Avatars/16.png" alt="avatar16"></li>
          </ul>
        </div>
      </div>
      <div id="js-profile__save-btn" class="profile__save-btn">
        <svg viewBox="0 0 138 138" fill="green" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.7502 53.8343C45.8973 50.1063 40.5624 49.3968 36.8343 52.2498C33.1063 55.1027 32.3968 60.4376 35.2498 64.1657L48.7502 53.8343ZM65.6179 89.8625L72.3682 84.6969L72.3682 84.6969L65.6179 89.8625ZM71.9634 89.8725L78.6974 95.0594L78.6974 95.0594L71.9634 89.8725ZM121.734 39.1869C124.599 35.4679 123.906 30.1307 120.187 27.2661C116.468 24.4014 111.131 25.094 108.266 28.8131L121.734 39.1869ZM69 121C40.6033 121 17.5 97.7387 17.5 69.25H0.5C0.5 107.035 31.1226 138 69 138V121ZM120.5 69.25C120.5 97.7387 97.3967 121 69 121V138C106.877 138 137.5 107.035 137.5 69.25H120.5ZM69 17.5C97.3967 17.5 120.5 40.7613 120.5 69.25H137.5C137.5 31.4646 106.877 0.5 69 0.5V17.5ZM69 0.5C31.1226 0.5 0.5 31.4646 0.5 69.25H17.5C17.5 40.7613 40.6033 17.5 69 17.5V0.5ZM35.2498 64.1657L58.8677 95.0282L72.3682 84.6969L48.7502 53.8343L35.2498 64.1657ZM78.6974 95.0594L121.734 39.1869L108.266 28.8131L65.2295 84.6856L78.6974 95.0594ZM58.8677 95.0282C63.861 101.553 73.6836 101.569 78.6974 95.0594L65.2295 84.6856C67.0344 82.3423 70.5706 82.3479 72.3682 84.6969L58.8677 95.0282Z"
            fill="#aaaaaa" />
        </svg>
      </div>
    </div>
  </div>
  <div id="js-profile__name" class="profile__name"></div>
  <div class="profile__rewards-container">
    <div id="js-profile__title" class="profile__title"></div>
    <div class="profile__experience-content">
      <div class="profile__experience-bar">
        <div id="js-profile__experience-meter" class="profile__experience-meter"></div>
        <div id="js-profile__star" class="profile__star">
          <svg width="35" height="34" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8109 0.854039L23.8154 5.70285L23.9053 5.74644L24.0043 5.75451L35.1982 6.66732L33.3408 16.9538L33.3227 17.0542L33.3476 17.1546L35.8752 27.3443L24.7224 28.8885L24.6284 28.9015L24.5469 28.947L14.8804 34.345L9.86764 24.984L9.81821 24.8917L9.73563 24.825L1.27108 17.9803L9.28998 10.661L9.36091 10.5963L9.40056 10.5095L13.8109 0.854039Z"
              fill="url(#paint0_linear)" />
            <path d="M13.8109 0.854039L23.8154 5.70285L23.9053 5.74644L24.0043 5.75451L35.1982 6.66732L33.3408 16.9538L33.3227 17.0542L33.3476 17.1546L35.8752 27.3443L24.7224 28.8885L24.6284 28.9015L24.5469 28.947L14.8804 34.345L9.86764 24.984L9.81821 24.8917L9.73563 24.825L1.27108 17.9803L9.28998 10.661L9.36091 10.5963L9.40056 10.5095L13.8109 0.854039Z"
              fill="#806ee7" />
            <path d="M13.8109 0.854039L23.8154 5.70285L23.9053 5.74644L24.0043 5.75451L35.1982 6.66732L33.3408 16.9538L33.3227 17.0542L33.3476 17.1546L35.8752 27.3443L24.7224 28.8885L24.6284 28.9015L24.5469 28.947L14.8804 34.345L9.86764 24.984L9.81821 24.8917L9.73563 24.825L1.27108 17.9803L9.28998 10.661L9.36091 10.5963L9.40056 10.5095L13.8109 0.854039Z"
              stroke="white" />
            <defs>
              <linearGradient id="paint0_linear" x1="45.3713" y1="43.3818" x2="30.2486" y2="-5.38812" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BD65D2" />
                <stop offset="1" stop-color="#00E0FF" />
              </linearGradient>
            </defs>
          </svg><span id="js-profile__current-level" class="profile__current-level">7</span></div>
      </div>
      <div class="profile__current-experience"><span id="js-profile__experience-points" class="profile__experience-points">24</span><span
          id="js-profile__goal-experience"></span></div>
    </div>
    <div id="js-profile__next-reward" class="profile__next-reward"></div>
  </div>
</div>
`);


// Handle click to change picture
jQuery('#js-profile__change-pic-overlay').click(function() {
  currentProfileImage = jQuery('#js-profile__avatar-img').attr('src');
  jQuery('#js-profile__change-pic-component').addClass('profile__element--visible');
});

// Handle click to close change pic component (cancel change picture)
jQuery('#js-profile__close-btn').click(function() {
  jQuery('#js-profile__change-pic-component').removeClass('profile__element--visible');
  jQuery('#js-profile__avatars').removeClass('profile__element--visible');
  jQuery('#js-profile__avatar-selection-container').removeClass('profile__avatar-selection-container--open');
  jQuery('#js-choose-avatar').removeClass('profile__change-pic-btn--open');
  jQuery('#js-profile__avatar-img').attr('src', currentProfileImage);
});

// Handle click to save & close change pic component
jQuery('#js-profile__save-btn').click(function() {
  jQuery('#js-profile__change-pic-component').removeClass('profile__element--visible');
  jQuery('#js-profile__avatars').removeClass('profile__element--visible');
  jQuery('#js-profile__avatar-selection-container').removeClass('profile__avatar-selection-container--open');
  jQuery('#js-choose-avatar').removeClass('profile__change-pic-btn--open');
  currentProfileImage = previewProfileImage;
  jQuery('#js-profile__avatar-img').attr('src', currentProfileImage);
  updateProfileImage(currentProfileImage);
});

// Handle click to choose avatar from list
jQuery('#js-choose-avatar').click(function() {
  jQuery('#js-profile__avatar-selection-container').toggleClass('profile__avatar-selection-container--open');
  jQuery('#js-choose-avatar').toggleClass('profile__change-pic-btn--open');
  jQuery('#js-profile__avatars').toggleClass('profile__element--visible');
});

// Handle click on avatar to preview as avatar image
jQuery('#js-profile__avatars > ul > li > img').click(function(e) {
  previewProfileImage = e.target.src;
  jQuery('#js-profile__avatar-img').attr('src', previewProfileImage);
});

// For reading file upload url
/*
var readURL = function(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        previewProfileImage = e.target.result;
        jQuery('#js-profile__avatar-img').attr('src', previewProfileImage);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
*/
/*
jQuery("#js-image-upload").on('change', function(){
  readURL(this);
});

jQuery('#js-upload-photo').click(function() {
  jQuery("#js-image-upload").click();
});
*/
