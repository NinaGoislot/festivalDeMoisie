(function () {

    //Changer la date du festival ici, en n'indiquant pas l'année
    const MONTH_FEST = "09"; //Changer le mois
    const DAY_FEST = "23"; //Changer le jour


    // Obtenir la date du festival de l'année en cours
    const festivalYear = new Date().getFullYear();
    const festivalDate = new Date(`${festivalYear}-${MONTH_FEST}-${DAY_FEST}`);

    // Calculer la date de fin du festival (2 jours après le début)
    const festivalEndDate = new Date(festivalDate);
    festivalEndDate.setDate(festivalEndDate.getDate() + 2);

    const countDownStart = festivalDate.getTime();
    const countDownEnd = festivalEndDate.getTime();

    //const countDown = festivalDate.getTime();
    const x = setInterval(function () {

        const now = new Date().getTime(),
            //distance = countDown - now,
            second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

            if (now < countDownStart) {
                // Avant le début du festival
                const distance = countDownStart - now;

                document.getElementById("headline").innerHTML = "Le festival du <span>fromage</span> de Moisie commence dans :";
                document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            } else if (now <= countDownEnd) {
                // Pendant le festival
                document.getElementById("headline").innerText = "Le festival du fromage de Moisie est en cours !";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            } else {
                // Après le festival
                document.getElementById("headline").innerText = "Le festival du fromage de Moisie est terminé pour cette année.";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "none";
                clearInterval(x);
            }
        }, 1000);
    })();