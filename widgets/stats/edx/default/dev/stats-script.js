jQuery('#js-stats-widget').html(`
  <div class="stats__container"> 
    <div id="js-stats__tabs" class="stats__tabs">
      <div id="js-stats__week-tab" class="stats__tab--selected stats__tab--week-tab i18n-week"></div>
      <div id="js-stats__month-tab" class="stats__tab--month-tab i18n-month"></div>
    </div>
    <div class="stats__content" id="js-stats__content">

      <div id="js-stats__loading-container" class="stats__loading-container">
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

<!-- week stats default view -->

      <ul class="stats__stat-list stats__stat-list-week" id="js-stats__stat-list-week">

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-week--best-score"></div>
            <div class="stats__stat-name i18n-best-score"></div>
          </div>
          <div class="stats_hover" id="js-stats__best-score-stat_hover">
            <div class="stats_details_title i18n-best-score"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-week--best-score"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Dec 23]</div> -->
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-week--best-score"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Oct 30]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-best-score-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-week--sessions-completed"></div>
            <div class="stats__stat-name i18n-completed-sessions"></div>
          </div>
          <div class="stats_hover" id="js-stats__sessions-completed-stat_hover">
            <div class="stats_details_title i18n-completed-sessions"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-week--sessions-completed"></div>
            </div>
            <!-- <div class="stats_details_sub">[56% OF LAST WEEK]</div> -->
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-week--sessions-completed"></div>
            </div>
            <!-- <div class="stats_details_sub">[-35% OF LAST WEEK]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-completed-sessions-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-week--improvement"></div>
            <div class="stats__stat-name i18n-improvement"></div>
          </div>
          <div class="stats_hover" id="js-stats__improvement-stat_hover">
            <div class="stats_details_title i18n-improvement"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-week--improvement"></div>
            </div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-week--improvement"></div>
            </div>
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-improvement-week-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-week--avg-learning-rate"></div>
            <div class="stats__stat-name i18n-avg-learning-rate"></div>
          </div>
          <div class="stats_hover" id="js-stats__avg-learning-stat_hover">
            <div class="stats_details_title i18n-avg-learning-rate"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-week--avg-learning-rate"></div>
            </div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-week--avg-learning-rate"></div>
            </div>
            <!-- <div class="stats_details_main">39% IMPROVEMENT</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-avg-learning-rate-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-week--highest-speed"></div>
            <div class="stats__stat-name i18n-highest-speed"></div>
          </div>
          <div class="stats_hover" id="js-stats__highest-speed-stat_hover">
            <div class="stats_details_title i18n-highest-speed"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-week--highest-speed"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Dec 23]</div> -->
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-week"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-week--highest-speed"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Oct 30]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-highest-speed-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="stats__stat seemore_stat" id="js-stats__more-stats-week">
          <div class="stats__stat-value">+</div>
          <div class="stats__stat-name i18n-see-all-stats"></div>
        </li> -->
      </ul>

      <!-- week stats see more view -->

      <div class="stats__see-more-content hide" id="js-stats__more-content-week">
        <div class="stats__see-more-content-container">
          <ul class="stats__more-stat-list stats__more-stat-list-week" id="js-stats__more-stat-list"></ul>
        </div>
        <div class="stats__see-more-content--see-less-button" id="js-stats__see-more-content-week--see-less-button i18n-see-less"></div>
      </div>

    <!-- month stats default view -->

      <ul class="stats__stat-list stats__stat-list-month hide" id="js-stats__stat-list-month">

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-month--best-score"></div>
            <div class="stats__stat-name i18n-best-score"></div>
          </div>
          <div class="stats_hover" id="js-stats__best-score-stat_hover">
          <div class="stats_details_title i18n-best-score"></div>
          <div class="stats_details_main">
            <div class="stats_details_main_feature i18n-this-month"></div>
            <div class="stats_details_main_line"></div>
            <div class="stats_details_main_data js-stats__this-month--best-score"></div>
          </div>
          <!-- <div class="stats_details_sub">[Wednesday, Dec 23]</div> -->
          <div class="stats_details_main">
            <div class="stats_details_main_feature i18n-last-month"></div>
            <div class="stats_details_main_line"></div>
            <div class="stats_details_main_data js-stats__last-month--best-score"></div>
          </div>
          <!-- <div class="stats_details_sub">[Wednesday, Oct 30]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-best-score-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-month--sessions-completed"></div>
            <div class="stats__stat-name i18n-completed-sessions"></div>
          </div>
          <div class="stats_hover" id="js-stats__sessions-completed-stat_hover">
            <div class="stats_details_title i18n-completed-sessions"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-month--sessions-completed"></div>
            </div>
            <!-- <div class="stats_details_sub">[48% OF LAST month]</div> -->
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-month--sessions-completed"></div>
            </div>
            <!-- <div class="stats_details_sub">[-35% OF LAST month]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-completed-sessions-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-month--improvement"></div>
            <div class="stats__stat-name i18n-improvement"></div>
          </div>
          <div class="stats_hover" id="js-stats__improvement-stat_hover">
          <div class="stats_details_title i18n-improvement"></div>
          <div class="stats_details_main">
            <div class="stats_details_main_feature i18n-this-month"></div>
            <div class="stats_details_main_line"></div>
            <div class="stats_details_main_data js-stats__this-month--improvement"></div>
          </div>
          <div class="stats_details_main">
            <div class="stats_details_main_feature i18n-last-month"></div>
            <div class="stats_details_main_line"></div>
            <div class="stats_details_main_data js-stats__last-month--improvement"></div>
          </div>
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-improvement-month-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-month--avg-learning-rate"></div>
            <div class="stats__stat-name i18n-avg-learning-rate"></div>
          </div>
          <div class="stats_hover" id="js-stats__avg-learning-stat_hover">
            <div class="stats_details_title i18n-avg-learning-rate"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-month--avg-learning-rate"></div>
            </div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-month--avg-learning-rate"></div>
            </div>
            <!-- <div class="stats_details_main">51% IMPROVEMENT</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-avg-learning-rate-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <li class="stats__stat">
          <div class="stats_normal">
            <div class="stats__stat-value js-stats__this-month--highest-speed"></div>
            <div class="stats__stat-name i18n-highest-speed"></div>
          </div>
          <div class="stats_hover" id="js-stats__highest-speed-stat_hover">
            <div class="stats_details_title i18n-highest-speed"></div>
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-this-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__this-month--highest-speed"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Dec 23]</div> -->
            <div class="stats_details_main">
              <div class="stats_details_main_feature i18n-last-month"></div>
              <div class="stats_details_main_line"></div>
              <div class="stats_details_main_data js-stats__last-month--highest-speed"></div>
            </div>
            <!-- <div class="stats_details_sub">[Wednesday, Oct 30]</div> -->
            <div class="stats_details_moreinfo tooltip">
              <div class="tooltip-top">
                <p class="i18n-highest-speed-info"></p>
                <i></i>
              </div>
            </div>
          </div>
        </li>

        <!-- <li class="stats__stat seemore_stat" id="js-stats__more-stats-month">
          <div class="stats__stat-value">+</div>
          <div class="stats__stat-name i18n-see-all-stats"></div>
        </li> -->

      </ul>

      <!-- month stats see more view -->

      <div class="stats__see-more-content hide" id="js-stats__more-content-month">
        <div class="stats__see-more-content-container">

          <ul class="stats__more-stat-list stats__more-stat-list-month" id="js-stats__more-stat-list">

            <!-- <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Best score this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Wednesday, Dec 30</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon-up"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__this-month--best-score">2.68</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Best score last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Saturday, Dec 26</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon-dowm"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__last-month--best-score">2.02</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Completed sessions this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">33% more than last month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__this-month--sessions-completed">17</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Completed sessions last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">88% less than previous month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__last-month--sessions-completed">26</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Improvement this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Compared to last month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__this-month--improvement">54%</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Improvement last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Compared to previous month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__last-month--improvement">65%</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Avg learning rate this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">39% more than last month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__this-month--avg-learning-rate">3.90</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Avg learning rate last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">71% less than previous month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__last-month--avg-learning-rate">3.38</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default" id="js-stats__more-stat-list-week-main">Highest speed this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Wednesday, Dec 30</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value">4.7</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default" id="js-stats__more-stat-list-week-main">Highest speed last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Saturday, Dec 26</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value">3.1</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default" id="js-stats__more-stat-list-week-main">Avg learning rate this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">43% more than last month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value">3.64</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default" id="js-stats__more-stat-list-week-main">Avg learning rate last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">71% less than previous month</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value">2.35</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Highest speed this month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Wednesday, Dec 30</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__this-month--highest-speed">4.7</div>
                </div>
              </div>
            </li>

            <li class="stats__more-stat">
              <div class="stats__more-stats--row">
                <div class="stats__more-stats--main-feature-default">Highest speed last month</div>
                <div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">Achieved Saturday, March 20</div>
                <div class="stats__more-stats--data">
                  <div class="stats__more-stats--data-icon"></div>
                  <div class="stats__more-stats--data-value" id="js-stats__last-month--highest-speed">3.4</div>
                </div>
              </div>
            </li> -->

          </ul>

        </div>
        <div class="stats__see-more-content--see-less-button" id="js-stats__see-more-content-month--see-less-button">See less</div>
      </div>

    </div>
  </div>
`);

function insertStatsThisWeek(data) {
  jQuery('.js-stats__this-week--best-score').html(data.bestScore);
  jQuery('.js-stats__this-week--sessions-completed').html(data.sessionsCompleted);
  if(data.userImprovement == 'N/A') {
    jQuery('.js-stats__this-week--improvement').html(data.userImprovement);
  } else {
    jQuery('.js-stats__this-week--improvement').html(data.userImprovement + '%');
  }
  // jQuery('.js-stats__this-week--improvement').html(data.userImprovement + '%');
  jQuery('.js-stats__this-week--avg-learning-rate').html(data.avgLearningRate);
  jQuery('.js-stats__this-week--highest-speed').html(data.highestSpeed);
}

function insertStatsLastWeek(data) {
  jQuery('.js-stats__last-week--best-score').html(data.bestScore);
  jQuery('.js-stats__last-week--sessions-completed').html(data.sessionsCompleted);
  if(data.userImprovement == 'N/A') {
    jQuery('.js-stats__last-week--improvement').html(data.userImprovement);
  } else {
    jQuery('.js-stats__last-week--improvement').html(data.userImprovement + '%');
  }
  // jQuery('.js-stats__last-week--improvement').html(data.userImprovement + '%');
  jQuery('.js-stats__last-week--avg-learning-rate').html(data.avgLearningRate);
  jQuery('.js-stats__last-week--highest-speed').html(data.highestSpeed);
}

function insertStatsThisMonth(data) {
  jQuery('.js-stats__this-month--best-score').html(data.bestScore);
  jQuery('.js-stats__this-month--sessions-completed').html(data.sessionsCompleted);
  if(data.userImprovement == 'N/A') {
    jQuery('.js-stats__this-month--improvement').html(data.userImprovement);
  } else {
    jQuery('.js-stats__this-month--improvement').html(data.userImprovement + '%');
  }
  // jQuery('.js-stats__this-month--improvement').html(data.userImprovement + '%');
  jQuery('.js-stats__this-month--avg-learning-rate').html(data.avgLearningRate);
  jQuery('.js-stats__this-month--highest-speed').html(data.highestSpeed);
}

function insertStatsLastMonth(data) {
  jQuery('.js-stats__last-month--best-score').html(data.bestScore);
  jQuery('.js-stats__last-month--sessions-completed').html(data.sessionsCompleted);
  if(data.userImprovement == 'N/A') {
    jQuery('.js-stats__last-month--improvement').html(data.userImprovement);
  } else {
    jQuery('.js-stats__last-month--improvement').html(data.userImprovement + '%');
  }
  // jQuery('.js-stats__last-month--improvement').html(data.userImprovement + '%');
  jQuery('.js-stats__last-month--avg-learning-rate').html(data.avgLearningRate);
  jQuery('.js-stats__last-month--highest-speed').html(data.highestSpeed);
}

function translateStatsTabs() {
  jQuery('.i18n-week').text(globalize.messageFormatter('week'));
  jQuery('.i18n-month').text(globalize.messageFormatter('month'));
}
function translateStatsWidget() {
  jQuery('.i18n-best-score').text(globalize.messageFormatter('best-score'));
  jQuery('.i18n-completed-sessions').text(globalize.messageFormatter('completed-sessions'));
  jQuery('.i18n-improvement').text(globalize.messageFormatter('improvement'));
  jQuery('.i18n-avg-learning-rate').text(globalize.messageFormatter('avg-learning-rate'));
  jQuery('.i18n-highest-speed').text(globalize.messageFormatter('highest-speed'));
  jQuery('.i18n-this-week').text(globalize.messageFormatter('this-week'));
  jQuery('.i18n-last-week').text(globalize.messageFormatter('last-week'));
  jQuery('.i18n-this-month').text(globalize.messageFormatter('this-month'));
  jQuery('.i18n-last-month').text(globalize.messageFormatter('last-month'));
  jQuery('.i18n-best-score-info').text(globalize.messageFormatter('best-score-info'));
  jQuery('.i18n-completed-sessions-info').text(globalize.messageFormatter('completed-sessions-info'));
  jQuery('.i18n-improvement-week-info').text(globalize.messageFormatter('improvement-week-info'));
  jQuery('.i18n-improvement-month-info').text(globalize.messageFormatter('improvement-month-info'));
  jQuery('.i18n-avg-learning-rate-info').text(globalize.messageFormatter('avg-learning-rate-info'));
  jQuery('.i18n-highest-speed-info').text(globalize.messageFormatter('highest-speed-info'));
}

executeStatsCalls = function (orgId, userId, sessionId) {
  var loadingCounter = 0;

  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/stats?timeframe=thisweek",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertStatsThisWeek(data);
      loadingCounter++;
      if(loadingCounter == 4)
      {
        translateStatsWidget();
        jQuery('#js-stats__loading-container').addClass('stats__loading-container--fading');
        setTimeout(function()
        {
          jQuery('#js-stats__loading-container').hide();
        }, 800)
      }
    }
  });
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/stats?timeframe=lastweek",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertStatsLastWeek(data);
      loadingCounter++;
      if(loadingCounter == 4)
      {
        translateStatsWidget();
        jQuery('#js-stats__loading-container').addClass('stats__loading-container--fading');
        setTimeout(function()
        {
          jQuery('#js-stats__loading-container').hide();
        }, 800)
      }
    }
  });
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/stats?timeframe=thismonth",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertStatsThisMonth(data);
      loadingCounter++;
      if(loadingCounter == 4)
      {
        translateStatsWidget();
        jQuery('#js-stats__loading-container').addClass('stats__loading-container--fading');
        setTimeout(function()
        {
          jQuery('#js-stats__loading-container').hide();
        }, 800)
      }
    }
  });
  jQuery.ajax({
    url: "http://38.89.143.20/NEUROEDX_Staging/api/organizations/" + orgId + "/users/" + userId + "/stats?timeframe=lastmonth",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('satya' + ':' + sessionId));
    },
    method: 'GET',
    success: function(data){
      insertStatsLastMonth(data);
      loadingCounter++;
      if(loadingCounter == 4)
      {
        translateStatsWidget();
        jQuery('#js-stats__loading-container').addClass('stats__loading-container--fading');
        setTimeout(function()
        {
          jQuery('#js-stats__loading-container').hide();
        }, 800)
      }
    }
  });
}

translateStatsTabs();
executeStatsCalls(getOrgId(), getUserId(), getSessionId());

jQuery('#communicator-input > input').on('change', function () {
  let changeVal = jQuery('#communicator-input > input').val();

  if(changeVal == 'endSession') {
    executeStatsCalls(getOrgId(), getUserId(), getSessionId());
  }
});

// Mock data - this would be returned from backend API call based on user
let stats = [
  {
    id: 'js-stats__best-score-stat',
    name: 'best score',
    value: '2.68'
  },
  {
    id: 'js-stats__sessions-completed-stat',
    name: 'sessions completed',
    value: '17'
  },
  {
    id: 'js-stats__your-improvement-stat',
    name: 'your improvement',
    value: '54%'
  },
  {
    id: 'js-stats__avg-learning-stat',
    name: 'avg learning rate',
    value: '3.90'
  },
  {
    id: 'js-stats__highest-speed-stat',
    name: 'highest speed',
    value: '4.7'
  },
  {
    id: 'js-stats__total-experience-stat',
    name: 'total experience points',
    value: '1038'
  }
];

let moreStats = [
  {
    name: "First stat",
    detail: "The detail of the first stat",
    value: "3.61"
  },
  {
    name: "That's the second stat",
    detail: "not long",
    value: "10"
  },
  {
    name: "The third one",
    value: "926"
  },
  {
    name: "This one will have a very long text, like very long so it detects that it overflows and show it all",
    detail: "I'm tired",
    value: "42"
  },
  {
    name: "Now this one is long but not too much",
    detail: "this better autoscroll",
    value: "123"
  },
  {
    name: "It's the last stat",
    detail: "the third one shouldn't have a detail",
    value: "8"
  },
];

function insertSeeMore(stats) {
  stats.forEach(function(stat)
  {
    let newStat =
    `<li class="stats__more-stat">
        <div class="stats__more-stats--row">
        <div class="stats__more-stats--main-feature-default" id="js-stats__more-stat-list-week-main"><div>`
    + stat.name + '</div></div>';
    if(typeof stat.detail != "undefined")
    {
      newStat += '<div class="stats__more-stats--main-feature-hover" id="js-stats__more-stat-list-week-hover">' + stat.detail + '</div>';
    }
    newStat += `<div class="stats__more-stats--data">
              <div class="stats__more-stats--data-icon-up"></div>
              <div class="stats__more-stats--data-value">` + stat.value + `</div>
            </div>
            </div>
          </li>`
    jQuery('#js-stats__more-stat-list').append(newStat);
  });
}

insertSeeMore(moreStats);

let createAndAddStatElement = function(statObj) {
  let newStat = `<li class="stats__stat" id=jQuery{statObj.id}><div class="stats__stat-value">jQuery{statObj.value}</div><div class="stats__stat-name">jQuery{statObj.name}</div></li>`;
  jQuery("#js-stats__stat-list").append(newStat);
}

let populateStats = stats => stats.forEach( (stat, index) => {
  if (index < 5) {
    createAndAddStatElement(stat);
  } else{
    if(index === 5) createAndAddStatElement({
      id: 'js-stats__see-more',
      name: 'see more',
      value: '+'
    });
    moreStats.push(stat);
  }
});

//populateStats(stats);

var isDisplaySeeAll = false;

//change tab and widget content when click on month tab
jQuery("#js-stats__month-tab").click(function() {
  jQuery(this).addClass("stats__tab--selected");
  jQuery("#js-stats__week-tab").removeClass("stats__tab--selected");
  if(!isDisplaySeeAll) {                  // in this case we will show default content for month
    jQuery("#js-stats__stat-list-week").addClass("hide");
    jQuery("#js-stats__stat-list-month").removeClass("hide");
  }
  else {                          // in this case we will show see-more content for month
    jQuery("#js-stats__more-content-week").addClass("hide");
    jQuery("#js-stats__more-content-month").removeClass("hide");
  }
});

//change tab and widget content when click on week tab

jQuery("#js-stats__week-tab").click(function() {
  jQuery(this).addClass("stats__tab--selected");
  jQuery("#js-stats__month-tab").removeClass("stats__tab--selected");
  if(!isDisplaySeeAll) {                  // in this case we will show default content for month
    jQuery("#js-stats__stat-list-month").addClass("hide");
    jQuery("#js-stats__stat-list-week").removeClass("hide");
  }
  else {                          // in this case we will show see-more content for month
    jQuery("#js-stats__more-content-month").addClass("hide");
    jQuery("#js-stats__more-content-week").removeClass("hide");
  }
});

// calculate height of ul element in see more view to make overflow:auto in css

function ulheight () {
  let statsContentHeight = jQuery('.stats__content').outerHeight(true);
  let divMarginTop = parseInt(jQuery('.stats__see-more-content-container').css('margin-top'));
  let seeLessButtonHeight = jQuery('#js-stats__see-more-content-week--see-less-button').outerHeight(true);
  let statsContentBorder = 2 * parseInt(jQuery('.stats__content').css('border-width'));

  let divHeight = statsContentHeight - divMarginTop - statsContentBorder - seeLessButtonHeight;
  jQuery('.stats__see-more-content-container').css('height', divHeight);
}

ulheight();

jQuery("#js-stats__more-stats-month").click(ulheight);
jQuery("#js-stats__more-stats-week").click(ulheight);

//handle click see more month
jQuery("#js-stats__more-stats-month").click(function() {
  isDisplaySeeAll = true;
  jQuery("#js-stats__stat-list-month").addClass("hide");
  jQuery("#js-stats__more-content-month").removeClass("hide");
});

//handle click see less month
jQuery("#js-stats__see-more-content-month--see-less-button").click(function() {
  isDisplaySeeAll = false;
  jQuery("#js-stats__stat-list-month").removeClass("hide");
  jQuery("#js-stats__more-content-month").addClass("hide");
});

//handle click see more week
jQuery("#js-stats__more-stats-week").click(function() {
  isDisplaySeeAll = true;
  jQuery("#js-stats__stat-list-week").addClass("hide");
  jQuery("#js-stats__more-content-week").removeClass("hide");
});

//handle click see less week
jQuery("#js-stats__see-more-content-week--see-less-button").click(function() {
  isDisplaySeeAll = false;
  jQuery("#js-stats__stat-list-week").removeClass("hide");
  jQuery("#js-stats__more-content-week").addClass("hide");
});


jQuery('.stats__more-stats--row ').hover(function(){
  let textDiv = jQuery(this).find('.stats__more-stats--main-feature-default > div');
  textDiv.css('width', 'fit-content');
  let widthDiff = Math.trunc(jQuery(this).find('.stats__more-stats--main-feature-default').width() - textDiv.width());
  if(widthDiff < 0)
  {
    textDiv.addClass('stats__more-stats--main-feature-default--scrolling');
    textDiv.css('transform', 'translateX(' + widthDiff + 'px)');
    textDiv.css('transition-duration', ((widthDiff*-1)*0.03) + 's');
  }
}, function (){
  let textDiv = jQuery(this).find('.stats__more-stats--main-feature-default > div');
  textDiv.removeClass('stats__more-stats--main-feature-default--scrolling');
  textDiv.css('transform', 'translateX(0px)');
  textDiv.css('transition-duration', '0s');
  textDiv.css('width', '100%');
}
);