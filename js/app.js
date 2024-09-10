document.addEventListener("DOMContentLoaded", function() {

    var curPage = 1;
    var numOfPages = document.querySelectorAll(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
  
      document.querySelector(pgPrefix + curPage).classList.remove("inactive");
      document.querySelector(pgPrefix + curPage).classList.add("active");
  
      if (curPage > 1) {
        document.querySelector(pgPrefix + (curPage - 1)).classList.add("inactive");
      }
  
      if (curPage < numOfPages) {
        document.querySelector(pgPrefix + (curPage + 1)).classList.remove("active");
      }
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    }
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    }
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    }
  
    document.addEventListener("wheel", function(e) {
      if (scrolling) return;
  
      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    });
  
    document.addEventListener("keydown", function(e) {
      if (scrolling) return;
  
      if (e.key === "ArrowUp") {
        navigateUp();
      } else if (e.key === "ArrowDown") {
        navigateDown();
      }
    });
  
  });
  