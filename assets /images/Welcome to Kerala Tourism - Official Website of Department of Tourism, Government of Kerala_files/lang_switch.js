let languageinfo = navigator.language? navigator.language : navigator.userLanguage;
checkLangSwitch(languageinfo.substr(0,2));

function checkLangSwitch(code) {
    if (code !== 'en') {
        const baseUrl = 'https://www.keralatourism.org/';
        const curUrl = window.location.href;

        var xhttp = new XMLHttpRequest();
        var params = 'code=' + code + '&url=' + curUrl;
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var rtxt = this.responseText;
            if (rtxt != 'n') {
                var res = rtxt.split("~");

                if (res[4] == 1) {
                    redirectPage(res[1]);
                } else if (res[4] == 2) {
                    window.setTimeout(openLangPopUp(baseUrl, res[1], res[3], res[5], curUrl), 3000);
                } else {
                    return;
                }
            }
        }
        };
        xhttp.open("POST", baseUrl + "home/check_lang_switch", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);
    }
}

function redirectPage(dest) {
    if (window.location.replace)
        window.location.replace(dest)
    else
        window.location=dest
}


function openLangPopUp(bUrl, destUrl, popUpMsg, langName, curUrl)
{
    var xhttp = new XMLHttpRequest();
    var params = 'lname=' + langName + '&rdurl=' + destUrl + '&rqurl=' + curUrl;
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //var rtxt = this.responseText;
        $('#langSwitchModal').modal({
            show: true,
            backdrop: "static",
            keyboard: false
        });
        $("#lang-url").attr("href", destUrl);
        $('#popup-msg').html(popUpMsg);
    }
    };
    xhttp.open("POST", bUrl + "home/set_lang_popup_sess", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}

function closeLangPopUp()
{
    $('#langSwitchModal').modal('hide');  
} 