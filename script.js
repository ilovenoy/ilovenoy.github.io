const questions = ["איפה צולמה התמונה שלנו בחג המולד?", "כשיצאנו מבית קפה ברמת גן, נתקלנו בכוכבת רשת שמפורסמת בזכות ___ גדול במיוחד", "מה בקערה?", "איזו חיה קסומה מתחבאת בתמונה?", "מי האישה שלצידך בתמונה?", "אני אוהב אותך!"]
const images = ["haifa.jpg", "sapir.jpg", "thina.jpg", "turtle.jpg", "savta.jpg", "kiss.jpg"]
const answers = ["חיפה", "תחת", "טחינה", "צב", "סבתא ציפי"]
let index = 0

function submit() {
    const answer = document.getElementById("answer").value;
    if (answer == answers[index]) {
        index += 1;
        change()
    }
    if (index === answers.length) {
       document.getElementById("answer").remove();
       document.getElementById("button").style.display="none";
    }
}

function change() {
    document.getElementById("image").src = images[index];
    document.getElementById("question").innerText = questions[index];
    document.getElementById("answer").value = "";
}

document.querySelector('#answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      submit();
    }
});

change();