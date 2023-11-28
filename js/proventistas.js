document.addEventListener("DOMContentLoaded", function() {
    const modalLinks = document.querySelectorAll(".prev-lista a");
    
    modalLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            const modal = document.getElementById(targetId);
            
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    const closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.parentNode.parentNode;
            modal.style.display = "none";
        });
    });
});


   // Agregar funcionalidad para otra ventana modal
   const modalLinks2 = document.querySelectorAll(".prev-list-mod a");

   modalLinks2.forEach(function(link) {
       link.addEventListener("click", function(e) {
           e.preventDefault();
           const targetId = this.getAttribute("href").replace("#", "");
           const modal = document.getElementById(targetId);
           
           if (modal) {
               modal.style.display = "block";
           }
       });
   });

   const closeButtons2 = document.querySelectorAll(".close-button-2");

   closeButtons2.forEach(function(button) {
       button.addEventListener("click", function() {
           const modal = this.parentNode.parentNode;
           modal.style.display = "none";
       });
   });