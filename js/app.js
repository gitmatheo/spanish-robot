var granimInstance = new Granim({
    element: '#canvas-radial',
    name: 'radial-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
              ['#EB3349', '#F45C43'],
              ['#FF8008', '#FFC837'],
              ['#4CB8C4', '#3CD3AD'],
              ['#24C6DC', '#514A9D'],
              ['#FF512F', '#DD2476'],
              ['#DA22FF', '#9733EE']
            ]
        }
    }
});

jQuery(function() {
jQuery('.button.animated.fadeInUp').on("click" , function() {
  jQuery(this).removeClass("fadeInUp");
  jQuery(this).addClass("tada");
  jQuery('.circle-1, .circle-3').addClass('rotationClockwise');
  jQuery('.circle-2').addClass('rotationCounterClockwise');
  jQuery('.flashAnimation').removeClass('flashAnimation');
   setTimeout(function() {
       jQuery('.playNow, #mainscreen').fadeOut(1000);
       jQuery('#startSprocket').fadeOut(1000);
       setTimeout(function() {
         jQuery('.gameContainer').css("opacity", "1");
         openWelcomeModal();
       },1000)
   }, 1500);
})

/* GAME VIEW */

var level = [];
    level[0] = ["100", "199"];
    level[1] = ["200", "309"];
    level[2] = ["310", "430"];
    level[3] = ["431", "563"];
    level[4] = ["564", "710"];
    level[5] = ["711", "871"];
    level[6] = ["872", "1048"];
    level[7] = ["1049", "1243"];
    level[8] = ["1244", "1457"];
    level[9] = ["1458", "1693"];
    level[10] = ["1694", "1952"];
    level[11] = ["1953", "2237"];
    level[12] = ["2236", "2551"];
    level[13] = ["2552", "2896"];
    level[14] = ["2897", "3276"];
    level[15] = ["3277", "3694"];
    level[16] = ["3695", "4153"];
    level[17] = ["4154", "4659"];
    level[18] = ["4660", "5215"];
    level[19] = ["5216", "5826"];
    level[20] = ["5827", "6499"];


// Hiding challengeContainer on game start
var challengeContainer = jQuery('.challengeContainer');
challengeContainer.hide();

var currentGame = 0;
var currentScore = 100;
var correctCombo = 0;
var oldLevel = 1;
var oldWordsLearnedCounter = 0;

function wordsLearned () {
  var wordsLearnedCounter = stack[currentGame].length;
  oldWordsLearnedCounter += wordsLearnedCounter

  var words = jQuery(".wordsLearned").find('span');
  words.text(oldWordsLearnedCounter);

  var words2 = jQuery(".stageWords").find('span');
  words2.text(wordsLearnedCounter);
  console.log("aaaaaaaa" + wordsLearnedCounter);
}

function checkLevel() {
  for(i=0; i < level.length; i++) {
    for(j=0; j < level[i].length; j++) {
      if (currentScore >= level[i][0] && currentScore <= level[i][1] ) {
        var currentLevel = i + 1;
        if (currentLevel > oldLevel) {
          oldLevel=currentLevel;
          openlvlUpModal();
        }
        var scoreToNextLvl = level[i][1] - currentScore;
        var lvl = jQuery(".levelUp").find("span");
        var viewScore = jQuery(".viewScore").find("span");
        var viewScoreToNextLvl = jQuery(".viewScoreToNextLvl").find("span");
        console.log("Current score is:" + currentScore + " Your level: " + currentLevel);
        lvl.text(currentLevel);
        viewScore.text(currentScore);
        viewScoreToNextLvl.text(scoreToNextLvl);

        function animateLvlBar() {
          var span = jQuery("#levelBar").find('span');
          var diff = level[i][1] - level[i][0]
          var progressValue = diff - scoreToNextLvl;
          var heightValue = Math.round(100 - (scoreToNextLvl * 100) / diff);
          span.animate({ height: heightValue + "%"  },500);

          jQuery("#percentCounter").find("span").text(heightValue + "%");
        }
        animateLvlBar();
      }
    }
  }
}
checkLevel();

function correctBonus() {
  if (correctCombo == 3) {
    currentScore+=20;
  }
  if (correctCombo == 6) {
    currentScore+=50;
  }
}

function animateCombos() {
  var score5 = jQuery("#scoreEarned");
  var score20 = jQuery("#correctCombo");
  var score50 = jQuery("#doubleCorrectCombo");
    score5.fadeIn(500,function() {
      score5.fadeOut(500);
    });
  if (correctCombo == 3) {
    score20.fadeIn(500,function() {
      score20.fadeOut(500);
    });
  }
  if (correctCombo == 6) {
    score50.fadeIn(500,function() {
      score50.fadeOut(500);
    });
  }
}


// zmiana z widoku gry na widok challenges
function changeToChallenge() {
  var showQuestion = jQuery(".challengeCard").find("h2"),
      question = 0;
      //wstawiam pierwsze pytanie do h2
      showQuestion.text("").text(challenges[currentGame][0][question]);
  var cardContainer = jQuery(".cardContainer");
  var cardButtons = jQuery(".cardButtons");
  cardContainer.fadeOut();
  cardButtons.fadeOut();
  challengeContainer.fadeIn();
}

// zmiana z widoku challenges na widok gry
function changeToGame() {
  currentGame++;
  var cardContainer = jQuery(".cardContainer");
  var cardButtons = jQuery(".cardButtons");
  var challengeContainer = jQuery('.challengeContainer');
  challengeContainer.hide();
  cardContainer.fadeIn();
  cardButtons.fadeIn();
  openNxtStageModal();
}

var progressCounter = 0;

function showWord() {
  var front = jQuery(".card").find(".front h2"),
      back = jQuery(".card").find(".back h2"),
      next = jQuery("#next"),
      crossBtn =jQuery("#crossBtn"),
      counter = 1,
      toRepeatCounter = 0,
      toRepeatCounter2 = 0,
      toRepeat = [[]];
      front.text("").text(stack[currentGame][0][0]);
      back.text("").text(stack[currentGame][0][1]);
  //  When user click;s on "check icon"
  next.off("click");
  next.on("click", function(e){
    if (stack[currentGame][counter] !== undefined) {
      front.text("").text(stack[currentGame][counter][0]);
      back.text("").text(stack[currentGame][counter][1]);
      counter++;
      progressCounter++;
      animateProgressBar();
      headAnimate();
      earAnimate();
      checkLevel();
    } else {
      e.stopImmediatePropagation();
      openChallengeModal();
      changeToChallenge();
    }
  })
  // When user click;s on "red cross icon"
  crossBtn.on("click", function(){
    //Push words from "flipcard" to "toRepeat" array.
      var tmpData=[front.text(),back.text()];
      stack[currentGame].push(tmpData);
      front.text("").text(stack[currentGame][counter][0]);
      back.text("").text(stack[currentGame][counter][1]);
      counter++;
  })
}
showWord();

// Flipcard after click "flip" button
jQuery("#flip").on("click", function() {
  jQuery(".card").toggleClass("flip");
});


function challenge() {
  var showQuestion = jQuery(".challengeCard").find("h2"),
      question = 0,
      answer = 1,
      counter = 0;

  //Po nacisnieciu klawisza na klawiaturze uruchamiam funkcje
  $('#input').keypress(function (e) {
    var inputValue = jQuery(this).val();
    // Jesli wciniety klawisz to "enter"
    if (e.which == 13) {
      //Jeśli występuje kolejny index w tablicy
      console.log(challenges[currentGame][counter]);
      if (challenges[currentGame][counter] !== undefined) {
        if(jQuery(this).attr('openedModal')){
            jQuery(this).removeAttr('openedModal');
            jQuery('#correctModal').hide();
            jQuery('#wrongModal').hide();
        }else if (inputValue == challenges[currentGame][counter][answer]) {
          jQuery(this).attr('openedModal','true');
          counter++;
          progressCounter++;
          correctCombo++;
          currentScore += 5;
          correctBonus();
          showScore();
          animateProgressBar();
          animateCombos();
          headAnimate();
          earAnimate();
          openCorrectModal();
          checkLevel();

          if(challenges[currentGame][counter]){
            showQuestion.text("").text(challenges[currentGame][counter][question]);
          } else {
            changeToGame();
            showWord();
            counter = 0;
            progressCounter = 0;
            animateProgressBar();

          }
        } else {
           jQuery(this).attr('openedModal','true');
            correctCombo = 0;
            //inject correct answer to modal and openWrongModal
            var english = jQuery("#english");
            english.text('"' + challenges[currentGame][counter][answer] + '"');
            openWrongModal();
        }
      }
      return false;
    }
  })
};
challenge();



function spanishSigns () {
  var li = jQuery("#spanishSigns").find('li');
  li.on("click", function(){
    var span = jQuery(this).find('span').text();
    var inputVal = jQuery("#input").val();
    inputVal = inputVal + span;
    jQuery("#input").val(inputVal);
  })
}
spanishSigns ();

function animateProgressBar() {
  var bar = jQuery("#bar1");
  var span = bar.find('span');
  var progressValue = (100 /(challenges[currentGame].length + stack[currentGame].length));
  span.animate({ width: progressValue * progressCounter + "%"  },500);
}
animateProgressBar();

function headAnimate(){
  var head = jQuery("#head");
  head.toggleClass('pulse');
  head.toggleClass('shake');
}

function earAnimate() {
  var ears = jQuery("#leftEar, #rightEar");
  ears.toggleClass("translateAnimation");
}

function expProgression() {
  var exp = 100;
  var currentExp = exp;
  console.log("Level " + 1 + " exp: from " + exp + " to " + 199);
  for(i=2; i < 25; i++){
    currentExp += exp;
    exp = exp + (exp * 0.10);
    var sum = currentExp + exp - 1;
    console.log("Level " + i + " exp: from " + Math.round(currentExp) + " to " + Math.round(sum));
  }
}
expProgression();



function openStatsModal() {
  // Get the modal
  var modal = jQuery('#myModal');
  // Get the button that opens the modal
  var btn = jQuery('#myBtn');
  // Get the <span> element that closes the modal
  var span = modal.find(".close");
  // When the user clicks on the button, open the modal
  jQuery(window).on("click", function(event) {

      if (jQuery('#myModal').css("display") == "block" &&
      jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
  btn.on("click", function(e) {
      modal.css("display","block");
      e.stopImmediatePropagation();
  });
  // When the user clicks on <span> (x), close the modal
  span.on("click", function() {
      modal.css("display","none");
  });
  // When the user clicks anywhere outside of the modal, close it

}
openStatsModal();





function checkPoints() {
  var p20 = jQuery(".p20");
  var p50 = jQuery(".p50");

  p20.addClass('hide');
  p50.addClass('hide');
  if (correctCombo == 3) {
    p20.removeClass('hide');
  }
  if (correctCombo == 6) {
    p50.removeClass('hide');
  }
}
checkPoints();

function openCorrectModal() {
  // Get the modal
  var modal = jQuery('#correctModal');
  // Get the button that opens the modal
  var span = modal.find(".close");


  checkPoints();
  // When the user clicks on the button, open the modal
  modal.css("display","block");
  span.focus();
  // When the user clicks on <span> (x), close the modal
  span.on("click", function() {
      modal.css("display","none");
  });
  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if (jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}



function openWrongModal() {
  // Get the modal
  var modal = jQuery('#wrongModal');
  // Get the button that opens the modal
  var span = modal.find(".close");
  // When the user clicks on the button, open the modal
  modal.css("display","block");
  // When the user clicks on <span> (x), close the modal
  span.on("click", function() {
      modal.css("display","none");
  });
  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if (jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}




function openChallengeModal() {
  // Get the modal
  var modal = jQuery('#challengeModal');
  // Get the button that opens the modal
  var span = modal.find(".close");
  // When the user clicks on the button, open the modal
  modal.css("display","block");
    span.focus();
  // When the user clicks on <span> (x), close the modal
  span.off("click");
  span.on("click", function(e) {
      modal.css("display","none");
      e.stopImmediatePropagation();
  });

  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if ( modal.css("display") == "block" &&
            jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}



function openlvlUpModal() {
  // Get the modal
  var modal = jQuery('#lvlUp');
  // Get the button that opens the modal
  var span = modal.find(".close");

  checkPoints();
  // When the user clicks on the button, open the modal
  modal.css("display","block");
  span.focus();
  // When the user clicks on <span> (x), close the modal
  span.on("click", function() {
      modal.css("display","none");
  });
  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if (jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}





function openWelcomeModal() {
  // Get the modal
  var modal = jQuery('#welcome');
  // Get the button that opens the modal
  var span = modal.find(".close");
  // When the user clicks on the button, open the modal
  modal.css("display","block");
  // When the user clicks on <span> (x), close the modal
  span.on("click", function(e) {
      modal.css("display","none");
      e.stopImmediatePropagation();
  });
  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if ( modal.css("display") == "block" &&
            jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}



function openNxtStageModal() {
  // Get the modal
  var modal = jQuery('#nxtStage');
  // Get the button that opens the modal
  var span = modal.find(".close");
  wordsLearned ();
  checkPoints();
  // When the user clicks on the button, open the modal
  modal.css("display","block");
  span.focus();
  // When the user clicks on <span> (x), close the modal
  span.on("click", function() {
      modal.css("display","none");
  });
  // When the user clicks anywhere outside of the modal, close it
  jQuery(window).on("click", function(event) {
      if (jQuery(event.target) != jQuery(".modal-content")) {
          modal.css("display","none");
      }
  });
}







// openChallengeModal();
function showScore() {
  jQuery("#score").find("span").text(currentScore);
  jQuery(".stage").find("span").text(currentGame+1);
}
showScore();







})
