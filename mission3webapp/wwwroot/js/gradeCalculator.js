
$("#calcbtn").click(function() {

    var finalPct = (0.55*(parseFloat($("#asg").val()))) +
                   (0.05*(parseFloat($("#gpj").val()))) +
                   (0.10*(parseFloat($("#qzz").val()))) +
                   (0.20*(parseFloat($("#exm").val()))) +
                   (0.10*(parseFloat($("#ntx").val())))

    finalPct = Math.round(finalPct)

    var gradeLetter = ""

    if (finalPct >= 94) {
        gradeLetter = "A";
    }
    else if (finalPct >= 90) {
        gradeLetter = "A-"
    }
    else if (finalPct >= 87) {
        gradeLetter = "B+"
    }
    else if (finalPct >= 84) {
        gradeLetter = "B"
    }
    else if (finalPct >= 80) {
        gradeLetter = "B-"
    }
    else if (finalPct >= 77) {
        gradeLetter = "C+"
    }
    else if (finalPct >= 74) {
        gradeLetter = "C"
    }
    else if (finalPct >= 70) {
        gradeLetter = "C-"
    }
    else if (finalPct >= 67) {
        gradeLetter = "D+"
    }
    else if (finalPct >= 64) {
        gradeLetter = "D"
    }
    else if (finalPct >= 60) {
        gradeLetter = "D-"
    }
    else {
        gradeLetter = "E"
    }

    //alert
    alert("Final Grade:   " + finalPct + '%' + '    ' + gradeLetter);
})

