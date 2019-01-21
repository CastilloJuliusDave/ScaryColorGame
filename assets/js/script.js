 
  var TextColorName;
  var TextColorFont;
  var TextColorBG;
  var TextColorExtra1;
  var TextColorExtra2;
  var TextColorExtra3;
  var TextColorExtra4;
  var TextColorExtra5;

  var TextColorChoice1;
  var TextColorChoice2;
  var TextColorChoice3;
  var TextColorChoice4;
  var TextColorChoice5;
  var TextColorChoice6;
  var TextColorChoice7;
  var TextColorChoice8;

  var TextColorChoiceBG1;
  var TextColorChoiceBG2;
  var TextColorChoiceBG3;
  var TextColorChoiceBG4;
  var TextColorChoiceBG5;
  var TextColorChoiceBG6;
  var TextColorChoiceBG7;
  var TextColorChoiceBG8;

  var choicesFontColorArray;

  var TextColorChoiceFont1;
  var TextColorChoiceFont2;
  var TextColorChoiceFont3;
  var TextColorChoiceFont4;
  var TextColorChoiceFont5;
  var TextColorChoiceFont6;
  var TextColorChoiceFont7;
  var TextColorChoiceFont8;


  var items;
  var maru;
  var batsu;
  var comment;

  var chosenDifficulty = 0; //difficulty level default
  var levelName;
  var levelBatsu;
  var levelTime = 0;

  var cuteImagesEnable;

//test
  var difficulty = {
    level1: ["Easy Peasy", 1, 5],
    level2: ["Normal", 3, 3],
    level3: ["Hard!", 3, 2],
    level4: ["HELL!!", 3, 2]

    //test
/*    level1: ["Easy Peasy", 10, 10],
    level2: ["Normal", 10, 10],
    level3: ["Hard!", 10, 10],
    level4: ["HELL!!", 10, 10]*/
  }

  var motivationList = ["My grandmother is better!", "Understandable for a 5yr old.", "Even my Cat is better than that.", "Please see an Ophthalmologists.", "LOOSER HAHA.", "My creator Scored better.", "Are you Color Blind?", "Was that it? How disappointing."];
  var motivationListCounter = 0;
  var ColorArray = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "MAROON", "PURPLE", "GRAY", "PINK", "BLACK", "AQUA", "OLIVE", "LIME"];
  var choicesColorArray;
  var choicesColorArrayBG;
  function startGame(){
      items = 0;
      maru = 0;
      batsu = 0;
      setDiffuculty();
      getColorValues();
      startTimer();
      startPresureTimer();
      $(".score").remove();
      $("#levelChoices").hide();

  }

  //generate random number to use for setting color name 
  function getColorValues() {
    //start presure timer
    startPresureTimer();

    //hide start button.
    $("#StartGame").hide();
    $("#ReStartGame").show();
    //start timer

    if (levelName == "Hard!") {

    shuffle(ColorArray);
    TextColorName = ColorArray[0];
    TextColorFont = ColorArray[1];
    TextColorBG = ColorArray[2];
    TextColorExtra1 = ColorArray[3];
    TextColorExtra2 = ColorArray[4];
    TextColorExtra3 = ColorArray[5];

    //randomizes how the choices is set
    choicesColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3]
    shuffle(choicesColorArray);
      TextColorChoice1 = choicesColorArray[0];
      TextColorChoice2 = choicesColorArray[1];
      TextColorChoice3 = choicesColorArray[2];
      TextColorChoice5 = choicesColorArray[3];
      TextColorChoice6 = choicesColorArray[4];
      TextColorChoice7 = choicesColorArray[5];

      //randomizes the choices BG
      choicesColorArrayBG =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3]
      shuffle(choicesColorArrayBG);
      TextColorChoiceBG1 = choicesColorArrayBG[0];
      TextColorChoiceBG2 = choicesColorArrayBG[1];
      TextColorChoiceBG3 = choicesColorArrayBG[2];
      TextColorChoiceBG5 = choicesColorArrayBG[3];
      TextColorChoiceBG6 = choicesColorArrayBG[4];
      TextColorChoiceBG7 = choicesColorArrayBG[5];

      //randomizes the choices BG
      choicesFontColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3]
      shuffle(choicesFontColorArray);
      TextColorChoiceFont1 = choicesFontColorArray[0];
      TextColorChoiceFont2 = choicesFontColorArray[1];
      TextColorChoiceFont3 = choicesFontColorArray[2];
      TextColorChoiceFont5 = choicesFontColorArray[3];
      TextColorChoiceFont6 = choicesFontColorArray[4];
      TextColorChoiceFont7 = choicesFontColorArray[5];

    }else if (levelName == "HELL!!") {

    shuffle(ColorArray);
    TextColorName = ColorArray[0];
    TextColorFont = ColorArray[1];
    TextColorBG = ColorArray[2];
    TextColorExtra1 = ColorArray[3];
    TextColorExtra2 = ColorArray[4];
    TextColorExtra3 = ColorArray[5];
    TextColorExtra4 = ColorArray[6];
    TextColorExtra5 = ColorArray[7];

    //randomizes how the choices is set
    choicesColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3, TextColorExtra4, TextColorExtra5]
    shuffle(choicesColorArray);
      TextColorChoice1 = choicesColorArray[0];
      TextColorChoice2 = choicesColorArray[1];
      TextColorChoice3 = choicesColorArray[2];
      TextColorChoice4 = choicesColorArray[3];
      TextColorChoice5 = choicesColorArray[4];
      TextColorChoice6 = choicesColorArray[5];
      TextColorChoice7 = choicesColorArray[6];
      TextColorChoice8 = choicesColorArray[7];

      //randomizes the choices BG
      choicesColorArrayBG =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3, TextColorExtra4, TextColorExtra5]
      shuffle(choicesColorArrayBG);
      TextColorChoiceBG1 = choicesColorArrayBG[0];
      TextColorChoiceBG2 = choicesColorArrayBG[1];
      TextColorChoiceBG3 = choicesColorArrayBG[2];
      TextColorChoiceBG4 = choicesColorArrayBG[3];
      TextColorChoiceBG5 = choicesColorArrayBG[4];
      TextColorChoiceBG6 = choicesColorArrayBG[5];
      TextColorChoiceBG7 = choicesColorArrayBG[6];
      TextColorChoiceBG8 = choicesColorArrayBG[7];

      //randomizes the choices BG
      choicesFontColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra1, TextColorExtra2, TextColorExtra3, TextColorExtra4, TextColorExtra5]
      shuffle(choicesFontColorArray);
      TextColorChoiceFont1 = choicesFontColorArray[0];
      TextColorChoiceFont2 = choicesFontColorArray[1];
      TextColorChoiceFont3 = choicesFontColorArray[2];
      TextColorChoiceFont4 = choicesFontColorArray[3];
      TextColorChoiceFont5 = choicesFontColorArray[4];
      TextColorChoiceFont6 = choicesFontColorArray[5];
      TextColorChoiceFont7 = choicesFontColorArray[6];
      TextColorChoiceFont8 = choicesFontColorArray[7];

    }else{
      shuffle(ColorArray);
      TextColorName = ColorArray[0];
      TextColorFont = ColorArray[1];
      TextColorBG = ColorArray[2];
      TextColorExtra = ColorArray[3];

      //randomizes how the choices is set
      choicesColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra]
      shuffle(choicesColorArray);
        TextColorChoice1 = choicesColorArray[0];
        TextColorChoice2 = choicesColorArray[1];
        TextColorChoice3 = choicesColorArray[2];
        TextColorChoice4 = choicesColorArray[3];

        //randomizes the choices BG
        choicesColorArrayBG =[TextColorName, TextColorFont, TextColorBG, TextColorExtra]
        shuffle(choicesColorArrayBG);
        TextColorChoiceBG1 = choicesColorArrayBG[0];
        TextColorChoiceBG2 = choicesColorArrayBG[1];
        TextColorChoiceBG3 = choicesColorArrayBG[2];
        TextColorChoiceBG4 = choicesColorArrayBG[3];

        //randomizes the choices BG
        choicesFontColorArray =[TextColorName, TextColorFont, TextColorBG, TextColorExtra]
        shuffle(choicesFontColorArray);
        TextColorChoiceFont1 = choicesFontColorArray[0];
        TextColorChoiceFont2 = choicesFontColorArray[1];
        TextColorChoiceFont3 = choicesFontColorArray[2];
        TextColorChoiceFont4 = choicesFontColorArray[3];

        
    }
    setGameColor();
  }

  function setDiffuculty() {
    chosenDifficulty = document.getElementById("difficultyLevel").value;

    switch (parseInt(chosenDifficulty)){
      case 0:
        levelName = difficulty.level1[0];
        levelBatsu = difficulty.level1[1];
        levelTime = difficulty.level1[2];
        break;

      case 1:
        levelName = difficulty.level2[0];
        levelBatsu = difficulty.level2[1];
        levelTime = difficulty.level2[2];
        break;

      case 2:
        levelName = difficulty.level3[0];
        levelBatsu = difficulty.level3[1];
        levelTime = difficulty.level3[2];
        break;

      case 3:
        levelName = difficulty.level4[0];
        levelBatsu = difficulty.level4[1];
        levelTime = difficulty.level4[2];
        break;
    }
  }

  //use generated number to set BG color
  function setGameColor(){
    //set difficulty level default at EASY mode.
        setDiffuculty();
        choicesShowHide();

    if (levelName == "Hard!") {
        $(document).ready(function(){
          //sets the question with random colors
          $("#colorName").replaceWith('<div class="div" id="colorName" style="background-color:'+TextColorBG+'; color:'+TextColorFont+'";><h1></h1></div>');
          
          //sets the choices with random choices
          $("#choice1").replaceWith('<button class="divChoices" id="choice1" onclick="setGameColor1()" style="background-color: ghostwhite; color:'+TextColorChoiceBG1+';"></button>');
          $("#choice2").replaceWith('<button class="divChoices" id="choice2" onclick="setGameColor2()" style="background-color: ghostwhite; color:'+TextColorChoiceBG2+';"></button>');
          $("#choice3").replaceWith('<button class="divChoices" id="choice3" onclick="setGameColor3()" style="background-color: ghostwhite; color:'+TextColorChoiceBG3+';"></button>');
          $("#choice5").replaceWith('<button class="divChoices" id="choice5" onclick="setGameColor5()" style="background-color: ghostwhite; color:'+TextColorChoiceBG4+';"></button>');
          $("#choice6").replaceWith('<button class="divChoices" id="choice6" onclick="setGameColor6()" style="background-color: ghostwhite; color:'+TextColorChoiceBG5+';"></button>');
          $("#choice7").replaceWith('<button class="divChoices" id="choice7" onclick="setGameColor7()" style="background-color: ghostwhite; color:'+TextColorChoiceBG6+';"></button>');

        });
        //sets the name od the color in the choices and question
        document.getElementById("colorName").innerHTML = TextColorName;
        document.getElementById("choice1").innerHTML = TextColorChoice1;
        document.getElementById("choice2").innerHTML = TextColorChoice2;
        document.getElementById("choice3").innerHTML = TextColorChoice3;
        document.getElementById("choice5").innerHTML = TextColorChoice5;
        document.getElementById("choice6").innerHTML = TextColorChoice6;
        document.getElementById("choice7").innerHTML = TextColorChoice7;

    }else if (levelName == "HELL!!") {      
        $(document).ready(function(){
          //sets the question with random colors
          $("#colorName").replaceWith('<div class="div" id="colorName" style="background-color:'+TextColorBG+'; color:'+TextColorFont+'";><h1></h1></div>');
          
          //sets the choices with random choices
          $("#choice1").replaceWith('<button class="divChoices" id="choice1" onclick="setGameColor1()" style="background-color: ghostwhite; color:'+TextColorChoiceBG1+';"></button>');
          $("#choice2").replaceWith('<button class="divChoices" id="choice2" onclick="setGameColor2()" style="background-color: ghostwhite; color:'+TextColorChoiceBG2+';"></button>');
          $("#choice3").replaceWith('<button class="divChoices" id="choice3" onclick="setGameColor3()" style="background-color: ghostwhite; color:'+TextColorChoiceBG3+';"></button>');
          $("#choice4").replaceWith('<button class="divChoices" id="choice4" onclick="setGameColor4()" style="background-color: ghostwhite; color:'+TextColorChoiceBG4+';"></button>');
          $("#choice5").replaceWith('<button class="divChoices" id="choice5" onclick="setGameColor5()" style="background-color: ghostwhite; color:'+TextColorChoiceBG5+';"></button>');
          $("#choice6").replaceWith('<button class="divChoices" id="choice6" onclick="setGameColor6()" style="background-color: ghostwhite; color:'+TextColorChoiceBG6+';"></button>');
          $("#choice7").replaceWith('<button class="divChoices" id="choice7" onclick="setGameColor7()" style="background-color: ghostwhite; color:'+TextColorChoiceBG7+';"></button>');
          $("#choice8").replaceWith('<button class="divChoices" id="choice8" onclick="setGameColor8()" style="background-color: ghostwhite; color:'+TextColorChoiceBG8+';"></button>');

        });
        //sets the name od the color in the choices and question
        document.getElementById("colorName").innerHTML = TextColorName;
        document.getElementById("choice1").innerHTML = TextColorChoice1;
        document.getElementById("choice2").innerHTML = TextColorChoice2;
        document.getElementById("choice3").innerHTML = TextColorChoice3;
        document.getElementById("choice4").innerHTML = TextColorChoice4;
        document.getElementById("choice5").innerHTML = TextColorChoice5;
        document.getElementById("choice6").innerHTML = TextColorChoice6;
        document.getElementById("choice7").innerHTML = TextColorChoice7;
        document.getElementById("choice8").innerHTML = TextColorChoice8;

    }else{ 
        $(document).ready(function(){
          //sets the question with random colors
          $("#colorName").replaceWith('<div class="div" id="colorName" style="background-color:'+TextColorBG+'; color:'+TextColorFont+'";><h1></h1></div>');
          
          //sets the choices with random choices
          $("#choice1").replaceWith('<button class="divChoices" id="choice1" onclick="setGameColor1()" style="background-color: ghostwhite; color:'+TextColorChoiceBG1+';"></button>');
          $("#choice2").replaceWith('<button class="divChoices" id="choice2" onclick="setGameColor2()" style="background-color: ghostwhite; color:'+TextColorChoiceBG2+';"></button>');
          $("#choice3").replaceWith('<button class="divChoices" id="choice3" onclick="setGameColor3()" style="background-color: ghostwhite; color:'+TextColorChoiceBG3+';"></button>');
          $("#choice4").replaceWith('<button class="divChoices" id="choice4" onclick="setGameColor4()" style="background-color: ghostwhite; color:'+TextColorChoiceBG4+';"></button>');

        });
        //sets the name od the color in the choices and question
        document.getElementById("colorName").innerHTML = TextColorName;
        document.getElementById("choice1").innerHTML = TextColorChoice1;
        document.getElementById("choice2").innerHTML = TextColorChoice2;
        document.getElementById("choice3").innerHTML = TextColorChoice3;
        document.getElementById("choice4").innerHTML = TextColorChoice4;
    }
  }

    //use generated number to set BG color
  function setGameColor1(){

    if (TextColorFont == TextColorChoice1) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor2(){
    if (TextColorFont == TextColorChoice2) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor3(){
    if (TextColorFont == TextColorChoice3) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor4(){
    if (TextColorFont == TextColorChoice4) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor5(){
    if (TextColorFont == TextColorChoice5) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor6(){
    if (TextColorFont == TextColorChoice6) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor7(){
    if (TextColorFont == TextColorChoice7) {
      maru1();
    }else{
      batsu1();
    }
  }
    function setGameColor8(){
    if (TextColorFont == TextColorChoice8) {
      maru1();
    }else{
      batsu1();
    }
  }

  //if answer is correct
  function maru1(){
    $("#scoreMaru").after('<img class="score" src="assets/images/maru.png" alt="maru" height="40">');
    maru++;
    checkScore();
  }

  //if answer is wrong
  function batsu1(){
    $("#scoreBatsu").after('<img class="score" src="assets/images/batsu.png" alt="batsu" height="40">');
    batsu++;
    setImages();
    checkScore();
  }
function checkScore(){
    items++;
    $("#scoreMaru").replaceWith('<p class="scoreMaruBatsu" style="margin-top: -30px;" id="scoreMaru">Maru-'+maru+'</p>');
    $("#scoreBatsu").replaceWith('<p class="scoreMaruBatsu" style="margin-top: -30px;" id="scoreBatsu">Batsu-'+batsu+'</p>');

    if (batsu != levelBatsu) {
      getColorValues();
    }else{
      stopGame();
    }
  }

  function stopGame(){
    stopTimer();
    stopPresureTimer();

    shuffle(motivationList);

    document.getElementById("countDownTimer").innerHTML = "GAME END!!!";
    document.getElementById("countPresureTimer").innerHTML = "";
    $("#countDownTimer").replaceWith('<p id="countDownTimer" style="color:red; font-size: 3em; margin-top: -30px;">GAVE OVER!</p>');

    var TempEndGameNote;
    cuteImagesEnable = document.getElementById("cuteImages").value;
    if (cuteImagesEnable == 0 ) {
      TempEndGameNote = "<br/>Click START for a NEW GAME!!<br/><br/>";
    }else {
      TempEndGameNote = "Hey Scaredy CAT!<br/>Click START for a NEW GAME!!<br/><br/>";
    }


    var tempString;
    if (maru > 1) {
      tempString = "Points!";
        $("#colorName").replaceWith('<div class="div newFont" id="colorName" style="background-color: black; color:ghostwhite;"><h1>'+TempEndGameNote+'You Scored '+maru+'&nbsp;'+tempString+'<br/>Difficulty: '+levelName+'<br/>'+motivationList[0]+'</h1></div>');
    }else if (maru == 1) {
      tempString = "Peso. Bili ka kausap mo.";
        $("#colorName").replaceWith('<div class="div newFont" id="colorName" style="background-color: black; color:ghostwhite;"><h1>'+TempEndGameNote+'You Scored '+maru+'&nbsp;'+tempString+'<br/>Difficulty: '+levelName+'<br/>'+motivationList[0]+'</h1></div>');
    }else{
      tempString = "NOTHING!";
        $("#colorName").replaceWith('<div class="div newFont" id="colorName" style="background-color: black; color:ghostwhite;"><h1>'+TempEndGameNote+'You Scored NOTHING! Are you Blind?<br/>Difficulty: '+levelName+'<br/>'+motivationList[0]+'</h1></div>');
    }

    $("#StartGame").show();

    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    $("#choice4").hide();
    $("#choice5").hide();
    $("#choice6").hide();
    $("#choice7").hide();
    $("#choice8").hide();

    $("#ReStartGame").hide();
    $("#levelChoices").show();
    motivationListCounter++;
  }

  function choicesShowHide(){
    if (levelName == "Hard!") {
        $("#choice1").show();
        $("#choice2").show();
        $("#choice3").show();
        $("#choice4").hide();
        $("#choice5").show();
        $("#choice6").show();
        $("#choice7").show();
        $("#choice8").hide();

    }else if (levelName == "HELL!!") {
        $("#choice1").show();
        $("#choice2").show();
        $("#choice3").show();
        $("#choice4").show();
        $("#choice5").show();
        $("#choice6").show();
        $("#choice7").show();
        $("#choice8").show();

    }else{
        $("#choice1").show();
        $("#choice2").show();
        $("#choice3").show();
        $("#choice4").show();
        $("#choice5").hide();
        $("#choice6").hide();
        $("#choice7").hide();
        $("#choice8").hide();
    }
  }

  //shuffle choices
  function shuffle(arrayShuffle) {
    var currentIndex = arrayShuffle.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arrayShuffle[currentIndex];
      arrayShuffle[currentIndex] = arrayShuffle[randomIndex];
      arrayShuffle[randomIndex] = temporaryValue;
    }

    return ColorArray;
  }

//timer 
  function changeValue() {
    if (value != 1) {
      //change font color when time goes down to 5
      if (value <=6 ) {
        $(document).ready(function(){
            $("#countDownTimer").replaceWith('<p id="countDownTimer" style="color:red; margin-top: -30px;">TIME</p>');
        });
      }
      var timeTick = --value;
      document.getElementById("countDownTimer").innerHTML = timeTick;
      $("#countDownTimer").replaceWith('<p id="countDownTimer"style="margin-top: -30px;">'+timeTick+' <small>Seconds.</small></p>');
    }
    else{
      stopGame();
    }
  }

  var timerInterval = null;
  function startTimer() {
    $(document).ready(function(){
            $("#countDownTimer").replaceWith('<p id="countDownTimer"style="margin-top: -30px;">TIME</p>');
        });
    document.getElementById("countDownTimer").innerHTML = "START!!!";
      stopTimer(); // stoping the previous counting (if any)
      value = 60; //main time 60seconds
      timerInterval = setInterval(changeValue, 1000);  
  }
  var stopTimer = function() {
    clearInterval(timerInterval);
  }

  //presureTimer
  function changeValue1() {
    if (PresureTimer != 0) {
      var tempTimer = --PresureTimer;
      document.getElementById("countPresureTimer").innerHTML = tempTimer;
      $("#countPresureTimer").replaceWith('<p  id="countPresureTimer">'+tempTimer+' <small>Seconds.</small></p>');
    }
    else{
      $("#scoreBatsu").after('<img class="score" src="assets/images/batsu.png" alt="batsu" height="50">');
      batsu++;
      checkScore();
    }
  }

  var timerInterval1 = null;
  function startPresureTimer() {
    $(document).ready(function(){
            $("#countPresureTimer").replaceWith('<p id="countPresureTimer">TIME</p>');
        });
    document.getElementById("countPresureTimer").innerHTML = "New Color START!!!";
      stopPresureTimer(); // stoping the previous counting (if any)
      PresureTimer = levelTime;
      timerInterval1 = setInterval(changeValue1, 1000);  
  }
    var stopPresureTimer = function() {
    clearInterval(timerInterval1);
  }


  //overlay on and off
  function overlayOn() {
    document.getElementById("overlay").style.display = "block";
  }
  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  function randomIntFromInterval(min,max) // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

function scareTheShitOutOfSomeone(){
    //flash image if number is 1
    var yesOrNo = Math.round(Math.random());
    if (yesOrNo == 1) {
      var cuteIMG = randomIntFromInterval(1,5);
      $("#cuteImage").replaceWith('<img id="cuteImage" class="img-fluid w-100 h-100" src="assets/images/img'+cuteIMG+'.jpg" alt="marubatsu">');
      overlayOn();
    }
}
  function setImages(){
    cuteImagesEnable = document.getElementById("cuteImages").value;
    if (cuteImagesEnable == 0 ) {
      scareTheShitOutOfSomeone();
      document.getElementById("gameTittle").innerHTML = "SCARY COLOR GAME!";
    }else {
      document.getElementById("gameTittle").innerHTML = "CUTE COLOR GAME!";
    }
  }
