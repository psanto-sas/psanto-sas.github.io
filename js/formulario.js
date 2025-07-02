const select = document.getElementById("selectProblema");
         const otroInput = document.getElementById("otroInput");
  
          select.addEventListener("change", function () {
          if (select.value === "Otro") {
            otroInput.style.display = "block";
          } else {
           otroInput.style.display = "none";
          }
              });
 
    