
var showAnswerButton = document.querySelector(".showAnswer");
var artifactTextItem = document.querySelector(".artifactText");
var LeftInnerBox = document.querySelectorAll(".artifactTextInnerBoxes")[0];
var RightInnerBox = document.querySelectorAll(".artifactTextInnerBoxes")[1];

// Random numbers by course Selection.


for (i = 0; i < document.querySelectorAll(".typologyCourse").length; i++) {
    document.querySelectorAll(".typologyCourse")[i].addEventListener("click", function () {
        var navButton = this.innerText;
        values(navButton);
        document.querySelectorAll(".card")[0].setAttribute("style", "display: block");
        artifactTextItem.setAttribute("Style", "display: block;");
        document.querySelector("footer").setAttribute("style", "position: relative;");
        artifactsData();
    });
}

function values(navButton, maxmin) {
    maxmin = {
        max: 0,
        min: 0
    }
    switch (navButton) {
        case "Prehistoric Stone Tools":
            maxmin.max = 10;
            maxmin.min = 0;
            document.querySelector(".chooseTypologyMessage").innerText = "Prehistoric Stone Tools";
            break;

        case "Ceramic Typology A":
            maxmin.max = 20;
            maxmin.min = 10;
            document.querySelector(".chooseTypologyMessage").innerText = "Ceramic Typology A";
            break;

        case "Ceramic Typology B":
            maxmin.max = 30;
            maxmin.min = 20;
            document.querySelector(".chooseTypologyMessage").innerText = "Ceramic Typology B";
            break;

        case "Ceramic Typology C":
            maxmin.max = 38;
            maxmin.min = 30;
            document.querySelector(".chooseTypologyMessage").innerText = "Ceramic Typology C";
            break;

        case "Home":
            maxmin.max = 0;
            maxmin.min = 0;
            break;

        default:
            alert("Error: Please contact the developer.");
    }
    localStorage.setItem("max", maxmin.max);
    localStorage.setItem("min", maxmin.min);
}


// Item's properties.

function Artifact(image, name, type, subType, technique, cut, period, culture, blank, remarks) {
    this.image = image;
    this.name = name;
    this.type = type;
    this.subType = subType;
    this.technique = technique;
    this.cut = cut;
    this.period = period;
    this.culture = culture;
    this.blank = blank;
    this.remarks = remarks;
}

// 'Next' button.

document.querySelectorAll(".nextButton")[0].addEventListener("click", artifactsData);

// 'Show\hide answer' button.

function showTheAnswerButton() {
    showAnswerButton.classList.remove("hideAnswer");
    showAnswerButton.classList.add("showAnswer");
    showAnswerButton.title = "Show answer button";
    document.querySelectorAll(".counterText")[0].setAttribute("style", "display: block;");
}

showAnswerButton.addEventListener("click", function () {
    if (showAnswerButton.title == "Show answer button") {
        showAnswerButton.classList.remove("showAnswer");
        showAnswerButton.classList.add("hideAnswer");
        showAnswerButton.title = "Hide answer button";
        document.querySelectorAll(".counterText")[0].setAttribute("style", "display: none;");
        LeftInnerBox.setAttribute("Style", "visibility: visible;");
        RightInnerBox.setAttribute("Style", "visibility: visible;");
    } else if (showAnswerButton.title == "Hide answer button") {
        showTheAnswerButton()
        LeftInnerBox.setAttribute("Style", "visibility: hidden;");
        RightInnerBox.setAttribute("Style", "visibility: hidden;");
    }
});

// Right or wrong answer.

var rightAnswersCount = 0;
var wrongAnswersCount = 0;

for (y = 0; y < document.querySelectorAll(".answer").length; y++) {
    document.querySelectorAll(".answer")[y].addEventListener("click", function () {
        var answer = this.title;

        switch (answer) {
            case "Good":
                rightAnswersCount++;
                artifactsData();
                document.querySelectorAll(".counter")[0].innerText = "CORRECT ANSWERS: " + rightAnswersCount;
                break;

            case "Bad":
                wrongAnswersCount++;
                artifactsData();
                document.querySelectorAll(".counter")[1].innerText = "WRONG ANSWERS: " + wrongAnswersCount;
                break;
        }
    })
}


function artifactsData(randomNumber, maxString, minString) {

    // Random numbers generator.

    maxString = localStorage.getItem("max");
    minString = localStorage.getItem("min");
    if (maxString == "10") {
        var max = 10;
        var min = 0;
    } else if (maxString == "20") {
        var max = 20;
        var min = 10;
    } else if (maxString == "30") {
        var max = 30;
        var min = 20;
    } else if (maxString == "38") {
        var max = 38;
        var min = 30;
    } else if (maxString == "0") {
        var max = 0;
        var min = 0;
    }
    randomNumber = Math.ceil(Math.random() * (max - min) + min);

    // Update image instructions.
    image = new Image(400, 400);
    image.src = 'images/image' + randomNumber + '.png';
    document.querySelectorAll("img")[0].setAttribute("src", image.src);


    // Random number results.
    // Flint tools data. Lower paleolithic.


    switch (randomNumber) {
        case 0:
            location.reload();
            break;

        case 1:
            var artifact = new Artifact(image, "Spheroid-polyhedron", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 2:
            var artifact = new Artifact(image, "Spheroid-polyhedron2", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 3:
            var artifact = new Artifact(image, "Spheroid-polyhedron3", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 4:
            var artifact = new Artifact(image, "Spheroid-polyhedron4", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 5:
            var artifact = new Artifact(image, "Spheroid-polyhedron5", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 6:
            var artifact = new Artifact(image, "Spheroid-polyhedron6", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 7:
            var artifact = new Artifact(image, "Spheroid-polyhedron7", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 8:
            var artifact = new Artifact(image, "Spheroid-polyhedron8", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 9:
            var artifact = new Artifact(image, "Spheroid-polyhedron9", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 10:
            var artifact = new Artifact(image, "Spheroid-polyhedron10", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 11:
            var artifact = new Artifact(image, "Spheroid-polyhedron", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 12:
            var artifact = new Artifact(image, "Spheroid-polyhedron2", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 13:
            var artifact = new Artifact(image, "Spheroid-polyhedron3", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 14:
            var artifact = new Artifact(image, "Spheroid-polyhedron4", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 15:
            var artifact = new Artifact(image, "Spheroid-polyhedron5", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 16:
            var artifact = new Artifact(image, "Spheroid-polyhedron6", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 17:
            var artifact = new Artifact(image, "Spheroid-polyhedron7", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 18:
            var artifact = new Artifact(image, "Spheroid-polyhedron8", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 19:
            var artifact = new Artifact(image, "Spheroid-polyhedron9", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 20:
            var artifact = new Artifact(image, "Spheroid-polyhedron10", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 21:
            var artifact = new Artifact(image, "Spheroid-polyhedron", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 22:
            var artifact = new Artifact(image, "Spheroid-polyhedron2", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 23:
            var artifact = new Artifact(image, "Spheroid-polyhedron3", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 24:
            var artifact = new Artifact(image, "Spheroid-polyhedron4", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 25:
            var artifact = new Artifact(image, "Spheroid-polyhedron5", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 26:
            var artifact = new Artifact(image, "Spheroid-polyhedron6", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 27:
            var artifact = new Artifact(image, "Spheroid-polyhedron7", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 28:
            var artifact = new Artifact(image, "Spheroid-polyhedron8", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 29:
            var artifact = new Artifact(image, "Spheroid-polyhedron9", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 30:
            var artifact = new Artifact(image, "Spheroid-polyhedron10", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 31:
            var artifact = new Artifact(image, "Spheroid-polyhedron", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 32:
            var artifact = new Artifact(image, "Spheroid-polyhedron2", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 33:
            var artifact = new Artifact(image, "Spheroid-polyhedron3", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 34:
            var artifact = new Artifact(image, "Spheroid-polyhedron4", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 35:
            var artifact = new Artifact(image, "Spheroid-polyhedron5", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 36:
            var artifact = new Artifact(image, "Spheroid-polyhedron6", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 37:
            var artifact = new Artifact(image, "Spheroid-polyhedron7", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        case 38:
            var artifact = new Artifact(image, "Spheroid-polyhedron8", "Spheroid-polyhedron", "Spheroid-polyhedron", "N/A", "Multi faceted or peripheral stonecutting", "Lower paleolithic", "Oldowan, Acheulean", "Bulbus", "Spheroid (less circular shape), polyhedron (more circular shape)");
            break;

        default:
            alert("Error: Please contact the developer.");
    }

    document.querySelectorAll(".name")[0].innerText = artifact.name;
    document.querySelectorAll(".type")[0].innerText = artifact.type;
    document.querySelectorAll(".subType")[0].innerText = artifact.subType;
    document.querySelectorAll(".technique")[0].innerText = artifact.technique;
    document.querySelectorAll(".cut")[0].innerText = artifact.cut;
    document.querySelectorAll(".period")[0].innerText = artifact.period;
    document.querySelectorAll(".culture")[0].innerText = artifact.culture;
    document.querySelectorAll(".blank")[0].innerText = artifact.blank;
    document.querySelectorAll(".remarks")[0].innerText = artifact.remarks;
    showTheAnswerButton()
    showAnswerButton.setAttribute("Style", "display: block;");
    LeftInnerBox.setAttribute("Style", "visibility: hidden;");
    RightInnerBox.setAttribute("Style", "visibility: hidden;");
}

document.querySelector(".footerText").addEventListener("click", function () {
    alert("This is a study project I wanted to do after studying basic JavaScript. The goal was to create a platform for archaeology students to exercise identification of artifacts - thus improving their skills also when the actual material isn't available (like at home). If you're an archaeology professional who'd like to use this platform, don't hesitate to contact me :) . I wanted to practice vanilla JavaScript before moving on to studying JQuery and so on. No actual artifacts are displayed due to copyright restrictions. All other elements and images used are free for any use. All the current information displayed is only a sample and should not be regarded as accurate at all.");
});
