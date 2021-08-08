let displayType = "none";
cardChanger("two");
function cardChanger(x) {
    var cardGroub1 = document.querySelector(".cardContiner1");
    var cardGroub2 = document.querySelector(".cardContiner2");
    var cardGroub3 = document.querySelector(".cardContiner3");
    if (x === "one") {
        buttonColorChanger(1);
        cardGroub1.classList.add("blockDis");
        cardGroub2.classList.remove("blockDis");
        cardGroub3.classList.remove("blockDis");
    } else if (x === "two") {
        buttonColorChanger(2);
        cardGroub2.classList.add("blockDis");
        cardGroub1.classList.remove("blockDis");
        cardGroub3.classList.remove("blockDis");
    } else if (x === "there") {
        buttonColorChanger(3);
        cardGroub3.classList.add("blockDis");
        cardGroub2.classList.remove("blockDis");
        cardGroub1.classList.remove("blockDis");
    }
}

function buttonColorChanger(x) {
    var button1 = document.getElementById("firstButton");
    var button2 = document.getElementById("secoundButton");
    var button3 = document.getElementById("therdButton");
    if (x == 1) {
        button1.style.cssText = "border-bottom-color: #7f1618; color: #7f1618;";
        button2.style.cssText = "border-bottom-color: #dddddd; color:  #333333;";
        button3.style.cssText = "border-bottom-color: #dddddd; color: #333333;";
    } else if (x == 2) {
        button2.style.cssText = "border-bottom-color: #7f1618; color: #7f1618;";
        button1.style.cssText = "border-bottom-color: #dddddd; color:  #333333;";
        button3.style.cssText = "border-bottom-color: #dddddd; color: #333333;";
    } else if (x == 3) {
        button3.style.cssText = "border-bottom-color: #7f1618; color: #7f1618;";
        button2.style.cssText = "border-bottom-color: #dddddd; color:  #333333;";
        button1.style.cssText = "border-bottom-color: #dddddd; color: #333333;";
    }
}

function send() {
    var name = document.getElementById("name").value;
    var email1 = document.getElementById("email1").value;
    var msg = document.getElementById("msg").value;
    var nameText = document.getElementById("nameText");
    var email1Text = document.getElementById("email1Text");
    var msgText = document.getElementById("msgText");
    if (name.length == 0) {
        nameText.style.display = 'block';
    } else {
        nameText.style.display = 'none';
    }

    if (email1.length == 0) {
        email1Text.style.display = 'block';
    } else {
        email1Text.style.display = 'none';
    }

    if (msg.length == 0) {
        msgText.style.display = 'block';
    } else {
        msgText.style.display = 'none';
    }
    expansion(name, email1, msg);
}

function expansion(name, email1, msg) {
    var back = document.getElementById("ContactContiner");
    var nameText = document.getElementById("nameText");
    var email1Text = document.getElementById("email1Text");
    var msgText = document.getElementById("msgText");
    var counter = 0;
    if (nameText.style.display == 'block') {
        counter++;
    }
    if (email1Text.style.display == 'block') {
        counter++;
    }
    if (msgText.style.display == 'block') {
        counter++;
    }



    const mediaQuery = window.matchMedia('(max-width: 767px)')
    if (mediaQuery.matches) {
        if (counter == 1) {
            back.style.minHeight = back.style.height;
        } else if (counter == 2) {
            back.style.height = '1035px';
        } else if (counter == 3) {
            back.style.height = '1000px';
        } else {
            back.style.minHeight = back.style.height;
            if (window.confirm("سيتم ارسال الرسالة بالبيانات التالية \n الاسم " + name + "\nالبريد الاكتلاوني " + email1 + "\nالرسالة " + msg)) {
                window.alert("تم ارسال الرسالة")
                document.getElementById('name').value = '';
                document.getElementById('email1').value = '';
                document.getElementById('msg').value = '';
            }
        }
    } else {
        if (counter == 1) {
            back.style.height = '582px';
        } else if (counter == 2) {
            back.style.height = '650px';
        } else if (counter == 3) {
            back.style.height = '730px';
        } else {
            back.style.height = '582px';
            if (window.confirm("سيتم ارسال الرسالة بالبيانات التالية \n الاسم " + name + "\nالبريد الاكتلاوني " + email1 + "\nالرسالة " + msg)) {
                window.alert("تم ارسال الرسالة")
                document.getElementById('name').value = '';
                document.getElementById('email1').value = '';
                document.getElementById('msg').value = '';
            }
        }
    }

}

function subscribeEmail() {
    var email2 = document.getElementById("email2").value;
    var email1Text = document.getElementById("email2Text");
    if (email2.length == 0) {
        email1Text.style.display = 'block';
    } else {
        email1Text.style.display = 'none';
        window.alert("تم اشتراكك بالايميل  \n" + email2);
        document.getElementById('email2').value = '';
    }
}

function showMobileList() {
    if (displayType == "block") {
        document.querySelector(".mobileList").style = "display:none;"
        displayType = "none";
    } else {
        document.querySelector(".mobileList").style = "display:block;"
        displayType = "block";
    }
}