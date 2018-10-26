// inject html into widget document
jQuery("#js-graph-by-targets-widget").html(`
<div class="graph__container">
        <div id="js-graph__tabs" class="graph__tabs">
          <div id="js-graph__2-targets">2 Targets</div>
          <div id="js-graph__3-targets">3 Targets</div>
          <div id="js-graph__4-targets">4 Targets</div>
          <div id="js-graph__overview-targets">Overview</div>
        </div>
        <div class="graph__content-container">
          <div id="js-graph__loading-container" class="graph__loading-container">
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
          <ul id="js-graph__stat-list" class="graph__stat-list">
            <li id="js-graph__best-learning-rate-stat" class="graph__stat graph__stat-value--hidden">
              <div id="js-graph__best-learning-rate-stat-value" class="graph__stat-value">-</div>
              <div class="graph__stat-name">Best Learning Rate</div>
            </li>
            <li id="js-graph__best-score-stat" class="graph__stat">
              <div id="js-graph__best-score-stat-value" class="graph__stat-value">-</div>
              <div class="graph__stat-name">Best Score</div>
            </li>
            <li id="js-graph__highest-speed-stat" class="graph__stat">
              <div id="js-graph__highest-speed-stat-value" class="graph__stat-value">-</div>
              <div class="graph__stat-name">Highest Speed</div>
            </li>
          </ul>
          <div id="js-graph__no-data-label" class="graph__no-data-label" style="display: none;">No Data</div>
          <div id="js-graph__graph-container" class="graph__graph-container">
          </div>
        </div>
      </div>`
);

executeGraphCalls = function(orgId, userId, sessionId){
    getLastSessionData(orgId, userId, sessionId);
}

executeGraphCalls(getOrgId(), getUserId(), getSessionId());
jQuery('#communicator-input > input').on('change', function() {
  let changeVal = jQuery('#communicator-input > input').val();

  if(changeVal == 'endSession') {
    executeStartSessionCalls(getOrgId(), getUserId(), getSessionId());
  }
  //executeGraphCalls(getOrgId(), getUserId(), getSessionId());
});

let unlockNextTarget;
let currentTargetTab;
let myChart;
let userSessionData = {
    '2Targets': {
        data: '',
        stats: '',
        unlocked: true,
        labelString: '',
    },
    '3Targets': {
        data: '',
        stats: '',
        unlocked: true,
        labelString: '',
    },
    '4Targets': {
        data: '',
        stats: '',
        unlocked: false,
        labelString: '',
    },
    'overviewTargets': {
        data: '',
        stats: '',
    },
    lastSessionData: ''
}

// grab html elements
let graphContainer = jQuery('#js-graph__graph-container');

// setup event handlers
jQuery("#js-graph__tabs div").click(handleTabClick); //handle click to change tabs

function handleTabClick() {
    if(!jQuery(this).hasClass("graph__tabs--selected")){
        jQuery("#js-graph__tabs div.graph__tabs--selected").removeClass("graph__tabs--selected");
        jQuery(this).addClass("graph__tabs--selected");
        let clickedTabNum = /([0-9]|overview)/.exec(jQuery(this).attr('id'))[0];
        currentTargetTab = clickedTabNum;
        // 4. get session data for current tab
        getSessionData(getOrgId(), getUserId(), getSessionId(), currentTargetTab);
    }
}

function getLastSessionData(orgId, userId, sessionId) {
    jQuery.ajax({
        url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/sessions?fields=last",
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
        },
        method: 'GET',
        success: function(data){
          userSessionData.lastSessionData = data;
          // 2. set current tab to type of last session
          currentTargetTab = userSessionData.lastSessionData.targets;
          // 3. select tab to get session data and stats for
          jQuery(`#js-graph__tabs div#js-graph__${currentTargetTab}-targets`).click();
        }
    });
}

function getSessionData(orgId, userId, sessionId, numTargets) {
    if(userSessionData[`${numTargets}Targets`].data == ''){
        if(jQuery('#js-graph__loading-container').css('display') == 'none') {
            jQuery('#js-graph__no-data-label').hide();
            jQuery('#js-graph__loading-container').removeClass('graph__loading-container--fading');
            jQuery('#js-graph__loading-container').show();
        }
        let filterParam = "?targets=" + numTargets;
        if(numTargets == 'overview'){
            filterParam = '';
        }
        let myData;
        jQuery.ajax({
            url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/sessions" + filterParam,
            beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
            },
            method: 'GET',
            success: function(data){
            myData = data;
            if(numTargets==2){ userSessionData[`${numTargets}Targets`].data = myData;}
            else if(numTargets==3){ userSessionData[`${numTargets}Targets`].data = myData;}
            else if(numTargets==4){ userSessionData[`${numTargets}Targets`].data = myData;}
            else { userSessionData[`${numTargets}Targets`].data = myData;}
            // 5. get stats for current tab
            getSessionStats(orgId, userId, sessionId, numTargets);
            }
        });
    } else {
        getSessionStats(orgId, userId, sessionId, numTargets);
    }
}

function getSessionStats(orgId, userId, sessionId, numTargets) {
    let filterParam = "?targets=" + numTargets;
    if(numTargets == 'overview'){
        filterParam = '';
    }
    if(userSessionData[`${numTargets}Targets`].stats == ''){
        let myData;
        jQuery.ajax({
            url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/stats" + filterParam,
            beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
            },
            method: 'GET',
            success: function(data){
            myData = data;
            userSessionData[`${numTargets}Targets`].stats = myData;
            // 6. display data and stats for current tab
            displayDataAndStats(numTargets);
            // 7. Remove loading bar element to reveal graph
            jQuery('#js-graph__loading-container').addClass('graph__loading-container--fading');
            setTimeout(function()
            {
                jQuery('#js-graph__loading-container').hide();
            }, 800);
            }
        });
    } else {
        displayDataAndStats(numTargets);
    }
}

function displayPlotLine(numTargets) {
    myChart.yAxis[0].removePlotLine('js-highcharts-plot-line-0');
    if(userSessionData[`${numTargets}Targets`].stats.learningRateGoal && 
       numTargets == userSessionData.lastSessionData.targets && 
       !(userSessionData.lastSessionData.trialDuration == 8 && userSessionData.lastSessionData.targets == 4)){
        let learningRateGoal = userSessionData[`${numTargets}Targets`].stats.learningRateGoal;
        learningRateGoal = Math.round(learningRateGoal * 100) / 100;
        let goalLabelText = `score ${learningRateGoal} or higher to ` ;
        switch(userSessionData.lastSessionData.trialDuration){
            case 6: 
                goalLabelText += "unlock 7 seconds";
                break;
            case 7: 
                goalLabelText += "unlock 8 seconds";
                break;
            case 8: 
                switch(userSessionData.lastSessionData.targets) {
                  case 2: 
                    goalLabelText += "unlock 3 targets";
                    break;
                  case 3: 
                    goalLabelText += "unlock 4 targets";
                    break;
              }
        }
        goalLabelText +=  `<span id="js-next-target-indicator" class="next-target-indicator">${learningRateGoal}<span></span>`;
    
        myChart.yAxis[0].addPlotLine({
            id: 'js-highcharts-plot-line-0',
            className: 'highcharts-plot-line-0',
            value: learningRateGoal,
            zindex: 5,
            label: {
                className: 'js-highcharts-plot-line-label',
                align: 'right',
                useHTML: true,
                text: goalLabelText,
            }
        });
    }
}

function displayDataAndStats(numTargets) {
    // update chart with data for session type
    let newChartData = [];
    let learningRateData = [];
    if(userSessionData[`${numTargets}Targets`].data.length == 0){
        jQuery('#js-graph__no-data-label').show();
    } else {
        jQuery('#js-graph__no-data-label').hide();
    }
    userSessionData[`${numTargets}Targets`].data.forEach((val, index) => {
        newChartData.push({
        x: index+1,
        y: val.threshold,
        dateRun: val.dateRun,
        target: val.targets,
        trialDuration: val.trialDuration
        });
        if(currentTargetTab == 'overview'){
            learningRateData.push({
                x: index+1,
                y: Number(val.learningRate),
                dateRun: val.dateRun,
                target: val.targets,
                trialDuration: val.trialDuration,
                learningRate: Number(val.learningRate)
            });
        }
    });
    myChart.series[0].setData(newChartData);
    //update 'unlock next target' indicator
    displayPlotLine(numTargets);

    //update stat elements
    let statValues = {};
    statValues = userSessionData[`${numTargets}Targets`].stats;
    if(currentTargetTab == 'overview'){
        jQuery('#js-graph__best-score-stat').addClass('graph__stat-value--hidden');
        jQuery('#js-graph__highest-speed-stat').addClass('graph__stat-value--hidden');
        jQuery('#js-graph__best-learning-rate-stat').removeClass('graph__stat-value--hidden');
        jQuery('#js-graph__best-learning-rate-stat-value').text(statValues.bestLearningRate);
        myChart.addSeries({                        
            name: 'Learning Rate',
            id: 'learningData',
            data: learningRateData,
            zIndex: -1,
            marker: {
                symbol: 'circle'
            },
            colorIndex: 1,
        });
    }else{
        jQuery('#js-graph__best-score-stat').removeClass('graph__stat-value--hidden');
        jQuery('#js-graph__highest-speed-stat').removeClass('graph__stat-value--hidden');
        jQuery('#js-graph__best-learning-rate-stat').addClass('graph__stat-value--hidden');
        if(myChart.get('learningData')){
            myChart.get('learningData').remove();
        }
    }
    // set correct stat values in html elements
    jQuery('#js-graph__best-score-stat-value').text(statValues.bestScore);
    jQuery('#js-graph__highest-speed-stat-value').text(statValues.highestSpeed);
}


// graph setup
myChart = Highcharts.chart('js-graph__graph-container', {
    chart: {
        type: 'area',
        spacingTop: 10,
        spacingBottom: 10,
        spacingLeft: 20,
        spacingRight: 40,
        animation: false,
    },
    title: {
        text: ''
    },
    xAxis: {
        title: {
            text: 'Session'
        },
        tickLength: 0,
        labels: {
          style: {
            color: 'grey',
            fontSize: '14px',
          },
        },
        tickInterval: 1,
        min: 1,
    },
    yAxis: {
        title: {
            text: 'Score'
        },
        allowDecimals: false,
        labels: {
          style: {
            color: 'grey',
            fontSize: '14px',
          }
        },
    },
    plotOptions: {
      series: {
          marker: {
              enabled: false
          },
          lineWidth: 10,
          animation: false,
      },
    },
    tooltip: {
        formatter: function() {
            if(this.point.learningRate){
                return "Session <b> "+this.point.x+"</b><br/>Date: <b>"+this.point.dateRun+"</b><br/>Learning Rate: <b>"+this.point.y+"</b><br/>Targets: <b>"+this.point.target+"</b><br/>Seconds: <b>"+this.point.trialDuration+"</b>";
            }else{
                return "Session <b> "+this.point.x+"</b><br/>Date: <b>"+this.point.dateRun+"</b><br/>Score: <b>"+this.point.y+"</b><br/>Targets: <b>"+this.point.target+"</b><br/>Seconds: <b>"+this.point.trialDuration+"</b>";
            }
        }
    },
    series: [
        {
            id: 'targetData',
            name: 'Target Data',
        },
    ],
    defs: {
        gradient0: { // key
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
            children: [{
                tagName: 'stop',
                offset: 0
            },{
                tagName: 'stop',
                offset: 1
            }]
        },
        gradient1: { // key
            tagName: 'linearGradient',
            id: 'gradient-1',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 1
            }]
        }
    },
});


// MEDIA QUERIES

window.addEventListener('resize', adaptGraphLayout);
adaptGraphLayout();

function adaptGraphLayout() {
  let widgetWidth = jQuery("#js-graph-by-targets-widget").parent().width();

  if( widgetWidth <= 440 ) {
    jQuery(".graph__tabs").css({"font-size": "0.8em"});
  }
  if( 440 < widgetWidth && widgetWidth < 540 ) {
    jQuery(".graph__tabs").css({"font-size": "1.0em"});
  }
  if( 540 <= widgetWidth ) {
    //jQuery(".graph__tabs").css({"font-size": "1.2em"});
  }
  if( widgetWidth < 635 ) {
    jQuery(".graph__tabs").css({"min-width": "100%"});
    jQuery(".graph__content-container").css({"border-radius": "0 0 7px 7px"});
  } else {
    jQuery(".graph__tabs, .graph__content-container").removeAttr("style");
  }
}