$(document).ready(function() {
  new WOW().init();
  
  let aboutSectionOffset = $('#about').offset().top,
      statSectionOffset = $('.statistic-section').offset().top,
      fireCounter = false;

  $(document).scroll(function () {
    // Handle Back to top Button
    if($(document).scrollTop() >= aboutSectionOffset) {
      $('.move-up-btn').fadeIn(1000);
    }else {
      $('.move-up-btn').fadeOut(1000);
    }
    // Handle About Section Animation
    if($(document).scrollTop() >= aboutSectionOffset - $('.about-progress').height()) {
      showProgressValues();
    }
    // Handle Statistics Section Counter
    if($(document).scrollTop() >= statSectionOffset - $('.statistic-section').height()) {
      if(!fireCounter) {
        showStatisticsCounter();
        fireCounter = true;
      }
    }
  });

  function showProgressValues() {
    let progressItems = $('.progress-bar'),
        progressValues = []; 
    for(let i = 0; i < progressItems.length; i++) {
      progressValues.push($('.progress-bar').eq(i).attr('aria-valuenow'));
    }
    for(let i = 0; i < progressItems.length; i++) {
      for(let j = 0; j <= progressValues[i]; j++) {
        $('.progress-bar').eq(i).css({'width': `${j}%`, 'transition': 'all 2s'});
      }
    }
  }

  function showStatisticsCounter() {
    let counterItems = $('.statistic-section h3'),
        counterValues = []; 
    for(let i = 0; i < counterItems.length; i++) {
      counterValues.push($('.statistic-section h3').eq(i).attr('data-target'));
    }
    for(let i = 0; i < counterItems.length; i++) {
      let counter = 1;
      setInterval(() => {
        if(counter <= counterValues[i]) {
          $('.statistic-section h3').eq(i).text(counter);
          counter++;
        }else {
          i++;
        }
      }, 10);
      if(i == counterItems.length - 1) {
        clearInterval();
      }
    }
  }
});
