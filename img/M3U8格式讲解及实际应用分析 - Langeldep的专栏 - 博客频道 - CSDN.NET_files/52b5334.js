(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWxacg8wUzdRdQVZBW4FMQBpUWRTNVVlByEFZFNlByMMbw8nXnECalZzB2EPUgI7BzcCPgNsXnpXPgZiBzABMgVcWmkPMFNvUTUFNwU1BWQAclEgU2hVNgdpBVpTcQcjDDcPY149AiVWdAd9D30CNwduAnU=","r":0.19},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD1acgwzB2NRdVIOAmlWYlA5VWBWNQU2XXtUNQUzW39XNAsjXXJXPwInAWdRDAQ9V2dRbQJkVmRRZwstUGsBN1Q3WmEMCAdvUWNSbAIyVjdQMlViVicFd10xVDUFOVtWVyELJ107V24CYQEkUScELVdzUTUCaFYi","r":0.24},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG1cdF1iAmYAJFcLAWoHM1M6BTBTMAU2BCIHZlBmByNRMg0lXHNQOAUgAWdUCQM6UmIDP1UzADNWZwYgU2hVYwRnXGddWQJqADJXaQExB2ZTMQUzUyIFdwRoB2ZQbAcKUScNIVw6UGkFYQEkVCIDKlJ2A2dVPwB0","r":0.23}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();