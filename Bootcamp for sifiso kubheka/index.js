window.onload = function () {
    // LOCAL STORAGE
    let username = localStorage.getItem("id");
    document.getElementById("username").innerHTML = "Sifiso Kubheka profile ";
  
    // ARRAYS AND LISTS
    let skillsList = new Array(
      { img: "./assets/logo/Javascript_Logo.png", language: "JavaScript", level: 3 },
      { img: "./assets/logo/CSS3_logo_and_wordmark.svg.png",language: "CSS", level: 5 },
      { img: "./assets/logo/HTML5_logo.png", language: "HTML", level: 8 },
      { img: "./assets/logo/nodejs.jpg", language: "Nodejs", level: 3 },
      { img: "./assets/logo/python.jpg", language: "Python", level: 6 },
    );
  
    let listUl = "<div style='width:500px'>";
    for (let i = 0; i < skillsList.length; i++) {
      console.log(skillsList[i].language);
      listUl +=
        "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 16px;'><tr><td rowspan='3' style='width:150px'><img src='" +
        skillsList[i].img +
        "' alt='' style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' />" +
        "</td></tr> <tr><td>Language: " +
        skillsList[i].language +
        "</td></tr> <tr><td>Level: " +
        skillsList[i].level +
        "</td></tr></table>";
    }
    listUl += "</div>";
    document.getElementById("listItems").innerHTML = listUl;
  
    // VARIABLE, CONDITIONAL STATEMENTS
    let total = 0.0;
    let level1, level2, level3;
    level1 = 3;
    level2 = 5;
    level3 = 8;
  
    total = level1 + level2 + level3;
  
    let isqualify = "The user is highly skilled ";
    let isNotQualify = "The user is a beginners";
  
    //   if the user more than 40 credits, highly skiiled
    if (total > 40) {
      // Then the user is highly skilled
      document.getElementById("status").innerHTML = isqualify;
    } else {
      // Then the user is a beginner
      document.getElementById("status").innerHTML = isNotQualify;
    }
  
    document.getElementById("total").innerHTML = "Total: " + total;

 };