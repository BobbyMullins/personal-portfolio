$(document).ready(function() {
    //begin dropdown
    $(".dropdown").hover(function() {
        $(this).addClass('open')
    }, function() {
        $(this).removeClass('open')
    });
    //end dropdown
    //begin scrollTo
    $('#home_link').click(function() {
      $.scrollTo($('#home'), 500);
    });
    $('#about_link').click(function() {
      $.scrollTo($('#about'), 500);
    });
    $('#websites_link').click(function() {
      $.scrollTo($('#portfolio'), 500);
    });
    //end scrollTo
    //begin scrollAnimation
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        if ((element_bottom_position > window_top_position) &&
            (element_top_position < window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //end scrollAnimation
    // begin modal
    var modal = document.getElementById('myModal');
    var img1 = document.getElementById('portfolioimg1');
    var img2 = document.getElementById('portfolioimg2');
    var img3 = document.getElementById('portfolioimg3');
    var img4 = document.getElementById('portfolioimg4');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img1.onclick = function() {
        modal.style.display = "block";
        modalImg.src = './Assets/images/nanostone-filtration-full.jpg';
    }
    img2.onclick = function() {
        modal.style.display = "block";
        modalImg.src = './Assets/images/barclay-slider-full.jpg';
    }
    img3.onclick = function() {
        modal.style.display = "block";
        modalImg.src = './Assets/images/barclay-careers-full.jpg';
    }
    img4.onclick = function() {
        modal.style.display = "block";
        modalImg.src = './Assets/images/pharma_results_page.jpg';
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    //end modal
});


