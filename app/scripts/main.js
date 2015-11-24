/*!
 *
 *  Slick
 *  Copyright 2015 Anthony Jones All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function() {
  'use strict';

  /* From Modernizr */
  function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent();
  var button = document.querySelector('.button');

  button.addEventListener('click', function() {
    if (button.classList) {
      button.classList.add('animate');
    }
    else {
      button.className += '' + 'animate';
    }

    button.addEventListener(transitionEvent, customFunction);

  });

  function customFunction(event) {
    button.removeEventListener(transitionEvent, customFunction);
    button.classList.toggle('animate');
  }

})();
