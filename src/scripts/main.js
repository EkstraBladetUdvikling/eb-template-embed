'use strict'
/* global XMLHttpRequest */

/* ES6 import */
import {
  quizData
} from './_quizdata'

import facebookShare from './_facebookShare'

/*
let initialInteraction = true

if (typeof ga !== 'undefined' && initialInteraction) {
  ga('send', { // eslint-disable-line no-undef
    hitType: 'event',
    eventCategory: 'Unnamed embed',
    eventAction: 'initial Interaction',
    eventLabel: 'embed'
  })
  initialInteraction = false
}
*/

window.ebmodule = (function () {
  return {

    publicProperty: '',

    init: function (args) {
      /* Load data */
      this.quizNum = (this.getQueryStringValue('id')) ? parseInt(this.getQueryStringValue('id')) : 0
      this.data = quizData[this.quizNum]
      this.votedata = []
      this.emojiButtons = document.getElementsByClassName('eb-quiz-emojifeedback')[0].getElementsByTagName('li')
      for (var i = 0; i < this.emojiButtons.length; i++) {
        this.votedata.push(0)
      }

      /* Populate text */
      if (this.data) {
        this.setTextParts()

        /* Set eventlistners */
        this.addEventListeners()

        // this.clickedQuiz(0)

        /* Get votedata */
        this.getVotesAjax()
        // this.votedata = [10, 20, 30, 0, 0] // Remove me
      } else {
        // Cannot find data
      }

      // let ecmascriptest = 'world'
      // const header = document.getElementsByClassName('article-widget-header--text')[0]
      // header.innerHTML = testFunc() + ` ${ecmascriptest}`
      // console.log('This will be stripped')
    },

    getQueryStringValue (key) {
      return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key)
        .replace(/[.+*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'))
    },

    setTextParts () {
      /* Match data with objects */
      const populate = [{
        'eb-article-widget-header': this.data.header
      },
        {
          'eb-quiz-question': this.data.question
        },
        {
          'eb-quiz-left-button': this.data.buttonOne
        },
        {
          'eb-quiz-right-button': this.data.buttonTwo
        },
        {
          'eb-quiz-answer': this.data.answer
        }
      ]

      for (let i = 0; i < populate.length; i++) {
        let keyname = Object.keys(populate[i])[0]
        let element = document.getElementsByClassName(keyname)[0]
        if (element) {
          element.innerHTML = populate[i][keyname]
        }
      }
    },

    addEventListeners () {
      const that = this
      /* Question buttons */
      const buttonOne = document.getElementsByClassName('eb-quiz-left-button')[0]
      const buttonTwo = document.getElementsByClassName('eb-quiz-right-button')[0]
      buttonOne.addEventListener('click', () => that.clickedQuiz(0))
      buttonTwo.addEventListener('click', () => that.clickedQuiz(1))

      /* Emojibuttons */
      for (let i = 0; i < this.emojiButtons.length; i++) {
        this.emojiButtons[i].addEventListener('click', () => that.clickedEmoji(i))
      }

      /* Facebook share */
      const buttonShare = document.getElementsByClassName('eb-quiz-share')[0]
      buttonShare.addEventListener('click', () => facebookShare())
    },

    clickedQuiz (_button) {
      /* Get elements */
      const cardElem = document.getElementsByClassName('eb-quiz-card')[0]
      const answerElem = document.getElementsByClassName('eb-quiz-answer')[0]

      /* Init */
      cardElem.className += ' flipped'
      const isCorrect = (this.data.correct === _button)
      answerElem.className += isCorrect ? ' eb-correct' : ''
    },

    clickedEmoji (_button) {
      /* Send vote using XHR */
      this.sendVote(this.quizNum, _button)
      /* Display other votes (if received) + add current vote */
      if (this.votedata) { // If data
        this.votedata[_button] += 1
        this.displayEmojiVotes(this.votedata) /* Insert data */
      } else {
        // No data received (yet)
      }
    },
    displayEmojiVotes (_data) {
      /* Data format */
      for (let i = 0; i < this.emojiButtons.length; i++) {
        this.emojiButtons[i].innerHTML = _data[i]
      }
    },
    getVotesAjax () {
      const request = new XMLHttpRequest()
      request.timeout = 4000
      request.open('GET', 'https://2pmk6d91sa.execute-api.eu-west-1.amazonaws.com/dev/gettest', true)

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          const data = JSON.parse(request.responseText)
          for (var i = 0; i < data.data.length; i++) {
            this.votedata[data.data[i].vote] = data.data[i].num
          }
        } else {
          // We reached our target server, but it returned an error
          console.error('Server not responding')
        }
      }

      request.onerror = () => {
        // There was a connection error of some sort
        console.error('Server not responding')
      }

      request.send()
    },
    sendVote (_quiz, _vote) {
      const request = new XMLHttpRequest()
      const object = {'quiz': _quiz, 'vote': _vote}
      request.timeout = 4000
      request.open('POST', 'https://2pmk6d91sa.execute-api.eu-west-1.amazonaws.com/dev/posttest', true)

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          console.log('Success posting')
        } else {
          // We reached our target server, but it returned an error
          console.error('Server not responding')
        }
      }

      request.onerror = () => {
        // There was a connection error of some sort
        console.error('Server not responding')
      }

      request.send(JSON.stringify(object))
    }
  }
})()
