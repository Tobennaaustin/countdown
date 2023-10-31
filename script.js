let countdown = 10;
        let countdownInterval;

        function startCountdown() {
            document.getElementById("start-countdown").style.display = "none";
            document.querySelector("p").style.display = "block"
            document.querySelector("h2").style.display = "none";
            document.getElementById("countdown").style.display = "block";
            countdownInterval = setInterval(function() {
                countdown--;
                document.getElementById("countdown").innerText = ` ${countdown}`;
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    showIPInput();
                }
            }, 1000);
        }

        function showIPInput() {
            document.querySelector("p").style.display = "none"
            document.getElementById("countdown").style.display = "none";
            document.getElementById("ip-input").style.display = "block";
            
        }

        function validateIP() {
            const userIP = document.getElementById("ip-address").value;
            // Replace the following regex with a proper IP address validation pattern
            const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
            if (ipPattern.test(userIP)) {
                // Perform authentication logic here
                alert("Authentication successful");
            } else {
                // Invalid IP, show error and shake the input field
                document.getElementById("ip-error").style.display = "block";
                document.getElementById("ip-address").style.borderColor = "red";
                setTimeout(function() {
                    document.getElementById("ip-error").style.display = "none";
                    document.getElementById("ip-address").style.borderColor = "";
                }, 1000);
            }
        }

        document.getElementById("start-countdown").addEventListener("click", startCountdown);
        document.getElementById("submit-ip").addEventListener("click", validateIP);