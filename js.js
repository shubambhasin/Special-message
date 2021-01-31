window.onLoad(
  setTimeout(() => {
    document.querySelector(".text").innerHTML = "Hi There !";

    setTimeout(() => {
      document.querySelector(".text").innerHTML = "You know you are special !";
      setTimeout(() => {
        document.querySelector(".text").innerHTML =
          "Never undersetimate your skills ,your talent, your hardwork!";
        setTimeout(() => {
          document.querySelector(".text").innerHTML =
            "Everones struggle is different, all you have to do is work towards your goal honestly! Things will definitely get better !!!!";
          setTimeout(() => {
            document.querySelector(".text").innerHTML =
              "Dont worry ! Just work smartly, work honestly ;) !";
            setTimeout(() => {
              document.querySelector(".text").innerHTML =
                "Keep Smiling 😊😊     ";
              setTimeout(() => {
                document.querySelector(".text").innerHTML =
                  "See you all again !";
              }, 4000);
            }, 3000);
          }, 4000);
        }, 6000);
      }, 3000);
    }, 2000);
  }, 500)
);
