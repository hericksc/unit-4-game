$(document).ready(function () {
    $(".btn").click(function () {

        console.log("The game is started");

        var Random = Math.floor(Math.random() * 101 + 19)
        $('#guessNumber').text(Random); //grabs random number between 19 and 120

        //function getRandomFloat(min = 19, max = 120) {
        //var random = Math.random() * (max - min) + min;
        //console.log(random);


        //Picks a random number between 1 and 12 for each of the crystals//

        var firstCrystal = Math.floor(Math.random() * 11 + 1)
        var secondCrystal = Math.floor(Math.random() * 11 + 1)
        var thirdCrystal = Math.floor(Math.random() * 11 + 1)
        var fourthCrystal = Math.floor(Math.random() * 11 + 1)
        var totalScore = 0;
        var wins = 0;
        var losses = 0;

        $('#wins').text(wins);
        $('#losses').text(losses);

        // Resets the game win you lose the game//
        function reset() {
            Random = Math.floor(Math.random() * 101 + 19);
            console.log(Random)
            $('#guessNumber').text(Random);


            firstCrystal = Math.floor(Math.random() * 11 + 1);
            secondCrystal = Math.floor(Math.random() * 11 + 1);
            thirdCrystal = Math.floor(Math.random() * 11 + 1);
            fourthCrystal = Math.floor(Math.random() * 11 + 1);
            userTotal = 0;
            $('#totalscore').text(totalScore);
        }
        // Functions for game //
        function win() {
            $('#guessNumber').text("WINNER!!!");
            // console.log(text);
            wins++
            $('#wins').text(wins);
            reset();
        }
        function lose() {
            $('#guessNumber').text("You are a Loser!!!");
            losses++
            $('#losses').text(losses);
            reset();

        }



        //for (var i = 0; i < firstCrystal.length; i++) {
        // $(".crystalcontainer").on("click", "#crystal1", function () {
        // document.write("Total Score: " + firstCrystal[i])
        // console.log(firstCrystal[i])

        // if (totalScore === random) {
        // Wins++
        // document.write("Wins: " + Wins);
        //}

        //else if (totalScore !== random) {
        //totalScore.push(firstCrystal);

        //}
        // }
        $('#crystal1').on('click', function () {
            totalScore == firstCrystal + totalScore;

            $('#totalscore').text(totalScore);

            if (totalScore === random) {

                win();

            } else if (totalScore > random) {
                lose();
            }
        });




        $('#crystal2').on('click', function () {
            totalScore == secondCrystal + totalScore;

            $('#totalscore').text(totalScore);

            if (totalScore === random) {

                win();

            } else if (totalScore > random) {
                lose();
            }
        });




        $('#crystal3').on('click', function () {
            totalScore == thirdCrystal + totalScore;

            $('#totalscore').text(totalScore);

            if (totalScore === random) {

                win();

            } else if (totalScore > random) {
                lose();
            }

        });


        $('#crystal4').on('click', function () {
            totalScore == fourthCrystal + totalScore;

            $('#totalscore').text(totalScore);

            if (totalScore === random) {

                win();

            } else if (totalScore > random) {
                lose();
            }
        });
    });
});






