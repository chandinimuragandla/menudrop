const optionMenu = document.querySelector(".menu"),
      selectBtn = optionMenu.querySelector(".select-button"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".cButton-text");

      selectBtn.addEventListener("click",() =>
        optionMenu.classList.toggle("active"));
      
      options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
             
            optionMenu.classList.remove("active");
        });
      });
