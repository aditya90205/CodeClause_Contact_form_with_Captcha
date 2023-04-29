// import swal from 'sweetalert';
(function () {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha() {
        let value = btoa(Math.random() * 1000000000); //btoa for encoding tha data


        // The substr() is similar to slice. The substr() method returns the part of a string between the start index and a number of characters after it. substr() extract length characters from a string, counting from the index.
        value = value.substr(0, 5 + Math.random() * 5);
        captchaValue = value;
    }
    function setCaptcha() {
        //split() convert a string into small parts and store in an array
        let html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random()*fonts.length); //trunc is used to round a number
            return `<span
             style="
               transform:rotate(${rotate}deg);
               font-family:${fonts[font]}
             "
            >${char}</span>`;
        }).join("");
        document.querySelector(".container .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".container .captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
            setCaptcha();
    }
     initCaptcha();
    
     document.querySelector(".container #submit-btn").addEventListener("click", function(){
        let inputCaptchaValue = document.querySelector(".container .captcha input").value;
        if(inputCaptchaValue === captchaValue){
            swal("","Login In!","success");
        }
        else{
            swal("Invalid Captcha");
        }
     });
})();