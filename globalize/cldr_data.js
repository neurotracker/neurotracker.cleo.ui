Globalize.load({
  "main": {
    "en": {
      "identity": {
        "version": {
          "_cldrVersion": "25",
          "_number": "$Revision: 91 $"
        },
        "generation": {
          "_date": "$Date: 2014-03-13 22:27:12 -0500 (Thu, 13 Mar 2014) $"
        },
        "language": "en"
      },
      "dates": {
        "calendars": {
          "gregorian": {
            "months": {
              "format": {
                "abbreviated": {
                  "1": "Jan",
                  "2": "Feb",
                  "3": "Mar",
                  "4": "Apr",
                  "5": "May",
                  "6": "Jun",
                  "7": "Jul",
                  "8": "Aug",
                  "9": "Sep",
                  "10": "Oct",
                  "11": "Nov",
                  "12": "Dec"
                }
              }
            },
            "dayPeriods": {
              "format": {
                "wide": {
                  "am": "AM",
                  "am-alt-variant": "am",
                  "noon": "noon",
                  "pm": "PM",
                  "pm-alt-variant": "pm"
                }
              }
            },
            "dateFormats": {
              "medium": "MMM d, y"
            },
            "timeFormats": {
              "medium": "h:mm:ss a"
            },
            "dateTimeFormats": {
              "medium": "{1}, {0}"
            }
          }
        },
        "fields": {
          "second": {
            "displayName": "Second",
            "relative-type-0": "now",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} second",
              "relativeTimePattern-count-other": "in {0} seconds"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} second ago",
              "relativeTimePattern-count-other": "{0} seconds ago"
            }
          }
        }
      },
      "numbers": {
        "currencies": {
          "USD": {
            "symbol": "$"
          }
        },
        "defaultNumberingSystem": "latn",
        "symbols-numberSystem-latn": {
          "decimal": ".",
          "exponential": "E",
          "group": ",",
          "infinity": "âˆž",
          "minusSign": "-",
          "nan": "NaN",
          "percentSign": "%",
          "perMille": "â€°",
          "plusSign": "+",
          "timeSeparator": ":"
        },
        "decimalFormats-numberSystem-latn": {
          "standard": "#,##0.###"
        },
        "currencyFormats-numberSystem-latn": {
          "currencySpacing": {
            "beforeCurrency": {
              "currencyMatch": "[:^S:]",
              "surroundingMatch": "[:digit:]",
              "insertBetween": " "
            },
            "afterCurrency": {
              "currencyMatch": "[:^S:]",
              "surroundingMatch": "[:digit:]",
              "insertBetween": " "
            }
          },
          "standard": "Â¤#,##0.00"
        }
      },
      "units": {
        "short": {
          "per": {
            "compoundUnitPattern": "{0}/{1}"
          },
          "speed-mile-per-hour": {
            "displayName": "miles/hour",
            "unitPattern-count-one": "{0} mph",
            "unitPattern-count-other": "{0} mph"
          }
        }
      }
    },
  },
  "supplemental": {
    "version": {
      "_cldrVersion": "25",
      "_number": "$Revision: 91 $"
    },
    "currencyData": {
      "fractions": {
        "DEFAULT": {
          "_rounding": "0",
          "_digits": "2"
        }
      }
    },
    "likelySubtags": {
      "en": "en-Latn-US",
      "fr": "fr-FR",
      "ja": "ja-JP",
    },
    "plurals-type-cardinal": {
      "en": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, â€¦ @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, â€¦"
      },
      "fr": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, â€¦ @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, â€¦"
      },
      "ja": {
        "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
        "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, â€¦ @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, â€¦"
      }
    }
  }
});