$(document).ready(function(){
  
  let k = 1
  setInterval(function(){
    for (let i = 0; i < $('.big-photo').length; i++) {
      $('.big-photo').eq(i).removeClass('active')
      }
      $('.big-photo').eq(k).addClass('active')
      k++;
      if(k == $('.big-photo').length){
          k = 0
      }
  },8000)
  let t = 1
  $('.fa-angle-right').click(function(){
    for (let a = 0; a < $('.test-txt').length; a++) {
      $('.test-txt').eq(a).removeClass('txt-active')     
      $('.t-photo').eq(a).removeClass('test-active')
    }
    $('.test-txt').eq(t).addClass('txt-active')
    $('.t-photo').eq(t).addClass('test-active')
    t++;
    if(t == $('.test-txt').length){
      t = 0
    }
})
let p = 1
$('.fa-angle-left').click(function(){
  for (let a = 0; a < $('.test-txt').length; a++) {
    $('.test-txt').eq(a).removeClass('txt-active') 
    $('.t-photo').eq(a).removeClass('test-active')
     
  }
  $('.test-txt').eq(p).addClass('txt-active')
  $('.t-photo').eq(p).addClass('test-active')
  p++;
  if(p == $('.test-txt').length){
    p = 0
  }
})

  $('.number:nth-of-type(2)').click(function(){
    $('.big-photo:nth-of-type(2)').addClass('active')
    $('.big-photo:nth-of-type(1)').removeClass('active')
    $('.big-photo:nth-of-type(3)').removeClass('active')
    $('.text').text('Let`s Create')
    $('.text').css('top','160px')
    $('.text').css('transition','2s')
    $('.text').css('opacity','1')
    $('.text-2').text('Deep Creativity')
    $('.text-2').css('top','218px')
    $('.text-2').css('transition','2s')
    $('.text-2').css('opacity','1')
    $('.text-3').css('top','278px')
    $('.text-3').css('transition','2s')
    $('.text-3').css('opacity','1')
    $('.text-4').text('Responsive and Retina Ready for All Devices')
    $('.text-4').css('top','360px')
    $('.text-4').css('transition','2s')
    $('.text-4').css('opacity','1')
  })
  $('.number:nth-of-type(1)').click(function(){
    $('.big-photo:nth-of-type(1)').addClass('active')
    $('.big-photo:nth-of-type(2)').removeClass('active')
    $('.big-photo:nth-of-type(3)').removeClass('active')
   $('.text').text('The Ultimate')
   $('.text').css('top','160px')
   $('.text').css('transition','2s')
   $('.text').css('opacity','1')
   $('.text-2').text('Creative Business')
   $('.text-2').css('top','218px')
   $('.text-2').css('transition','2s')
   $('.text-2').css('opacity','1')
   $('.text-3').text('In Market')
   $('.text-3').css('top','278px')
   $('.text-3').css('transition','2s')
   $('.text-3').css('opacity','1')
   $('.text-4').text('The Best Multipurpose Multi Page Template in Market')
   $('.text-4').css('top','360px')
   $('.text-4').css('transition','2s')
   $('.text-4').css('opacity','2')
 })
 $('.number:nth-of-type(3)').click(function(){
  $('.big-photo:nth-of-type(3)').addClass('active')
  $('.big-photo:nth-of-type(2)').removeClass('active')
  $('.big-photo:nth-of-type(1)').removeClass('active')
  $('.text').text('We Make')
  $('.text').css('top','160px')
  $('.text').css('transition','2s')
  $('.text').css('opacity','1')
  $('.text-2').text('Inspired Design')
  $('.text-2').css('top','218px')
  $('.text-2').css('transition','2s')
  $('.text-2').css('opacity','1')
  $('.text-3').text('Our Tax')
  $('.text-3').css('top','278px')
  $('.text-3').css('transition','2s')
  $('.text-3').css('opacity','1')
  $('.text-4').text('Is a New Design Studio founded in NewYork')
  $('.text-4').css('top','360px')
  $('.text-4').css('transition','2s')
  $('.text-4').css('opacity','1')
})
   setTimeout(function(){
      $('.text').text('The Ultimate')
      $('.text').css('top','160px')
      $('.text').css('transition','2s')
      $('.text').css('opacity','1')
      $('.text-2').text('Creative Business')
      $('.text-2').css('top','218px')
      $('.text-2').css('transition','2s')
      $('.text-2').css('opacity','1')
      $('.text-3').text('In Market')
      $('.text-3').css('top','278px')
      $('.text-3').css('transition','2s')
      $('.text-3').css('opacity','1')
      $('.text-4').text('The Best Multipurpose Multi Page Template in Market')
      $('.text-4').css('top','360px')
      $('.text-4').css('transition','2s')
      $('.text-4').css('opacity','2')
    },2000);


  setTimeout(function(){
    $('.text').text('Let`s Create')
    $('.text').css('top','160px')
    $('.text').css('transition','2s')
    $('.text').css('opacity','1')
    $('.text-2').text('Deep Creativity')
    $('.text-2').css('top','218px')
    $('.text-2').css('transition','2s')
    $('.text-2').css('opacity','1')
    $('.text-3').css('top','278px')
    $('.text-3').css('transition','2s')
    $('.text-3').css('opacity','1')
    $('.text-4').text('Responsive and Retina Ready for All Devices')
    $('.text-4').css('top','360px')
    $('.text-4').css('transition','2s')
    $('.text-4').css('opacity','1')
  },10000);
  
  setTimeout(function(){
    $('.text').text('We Make')
    $('.text').css('top','160px')
    $('.text').css('transition','2s')
    $('.text').css('opacity','1')
    $('.text-2').text('Inspired Design')
    $('.text-2').css('top','218px')
    $('.text-2').css('transition','2s')
    $('.text-2').css('opacity','1')
    $('.text-3').text('Our Tax')
    $('.text-3').css('top','278px')
    $('.text-3').css('transition','2s')
    $('.text-3').css('opacity','1')
    $('.text-4').text('Is a New Design Studio founded in NewYork')
    $('.text-4').css('top','360px')
    $('.text-4').css('transition','2s')
    $('.text-4').css('opacity','1')
  }, 18000);
  
  setInterval(function(){
    $('.text').css('top','220px')
    $('.text').css('transition','2s')
    $('.text').css('opacity','0')
    $('.text-2').css('top','290px')
    $('.text-2').css('transition','2s')
    $('.text-2').css('opacity','0')
    $('.text-3').css('top','340px')
    $('.text-3').css('transition','2s')
    $('.text-3').css('opacity','0')
    $('.text-4').css('top','420px')
    $('.text-4').css('transition','2s')
    $('.text-4').css('opacity','0')
  }, 8000);


setInterval(function(){
  setTimeout(function(){
    $('.text').text('The Ultimate')
    $('.text').css('top','160px')
    $('.text').css('transition','2s')
    $('.text').css('opacity','1')
    $('.text-2').text('Creative Business')
    $('.text-2').css('top','218px')
    $('.text-2').css('transition','2s')
    $('.text-2').css('opacity','1')
    $('.text-3').text('In Market')
    $('.text-3').css('top','278px')
    $('.text-3').css('transition','2s')
    $('.text-3').css('opacity','1')
    $('.text-4').text('The Best Multipurpose Multi Page Template in Market')
    $('.text-4').css('top','360px')
    $('.text-4').css('transition','2s')
    $('.text-4').css('opacity','2')
  },2000);


setTimeout(function(){
  $('.text').text('Let`s Create')
  $('.text').css('top','160px')
  $('.text').css('transition','2s')
  $('.text').css('opacity','1')
  $('.text-2').text('Deep Creativity')
  $('.text-2').css('top','218px')
  $('.text-2').css('transition','2s')
  $('.text-2').css('opacity','1')
  $('.text-3').css('top','278px')
  $('.text-3').css('transition','2s')
  $('.text-3').css('opacity','1')
  $('.text-4').text('Responsive and Retina Ready for All Devices')
  $('.text-4').css('top','360px')
  $('.text-4').css('transition','2s')
  $('.text-4').css('opacity','1')
},10000);

setTimeout(function(){
  $('.text').text('We Make')
  $('.text').css('top','160px')
  $('.text').css('transition','2s')
  $('.text').css('opacity','1')
  $('.text-2').text('Inspired Design')
  $('.text-2').css('top','218px')
  $('.text-2').css('transition','2s')
  $('.text-2').css('opacity','1')
  $('.text-3').text('Our Tax')
  $('.text-3').css('top','278px')
  $('.text-3').css('transition','2s')
  $('.text-3').css('opacity','1')
  $('.text-4').text('Is a New Design Studio founded in NewYork')
  $('.text-4').css('top','360px')
  $('.text-4').css('transition','2s')
  $('.text-4').css('opacity','1')
}, 18000);
}, 24000);

let d = 1
setInterval(function(){
  for (let i = 0; i < $('.number').length; i++) {
    $('.number').eq(i).removeClass('num-active')
    }
    $('.number').eq(d).addClass('num-active')
    d++;
    if(d == $('.number').length){
        d = 0
    }
},8000)


for (let i = 0; i < $('.number').length; i++) {
  $('.number').eq(i).click(function(){
    for (let k = 0; k < $('.number').length; k++) {
      $('.number').eq(k).css('border','none')
    }
    $('.number').eq(i).css('border-bottom','solid 3px white')
  })
}
  $('.iphone-button').click(function(){
    $('.wallpaper:nth-child(1)').toggleClass('wall-active')
  })
  $(window).scroll(function(){
    if($(window).scrollTop()>300){
      $('.header-2').css('display','flex')
      $('.header-2').css('justify-content','space-between')
      $('.header-2').css('background-color','white')
      $('.header-2').css('position','fixed')
      $('.header-2').css('top','0')
      $('.header-2').css('transition','.5s')
      $('.header-2').css('z-index','999')
      $('.nav').css('color','black')
    }else{
      $('.header-2').css('top','-200px')
      $('.nav').css('color','white')
    }
    if($(window).scrollTop() > 350){
      $('.left').css('left','130px')
      $('.left').css('transition','1s')
      $('.coffee').css('right','130px')
      $('.coffee').css('transition','1s')
    }
    if($(window).scrollTop()> 450){
      $('.up-button').css('bottom','20px')
      $('.up-button').css('transition','.5s')
    }else{
      $('.up-button').css('bottom','-100px')
      $('.up-button').css('transition','.5s')
    }
    if($(window).scrollTop()>900){
      $('.process-text').css('top','100px')
      $('.process-text').css('opacity','1')
      $('.process-text').css('transition','.5s')
    }
    if($(window).scrollTop()>1400){
      $('.mob-title').css('top','90px')
      $('.mob-title').css('opacity','1')
      $('.mob-title').css('transition','1s')
    }
    if($(window).scrollTop()>1700){
      $('.fa-cog').css('left','0')
      $('.fa-cog').css('transition','.8s')
      $('.main-left .theme:nth-of-type(1)').css('left','0')
      $('.main-left .theme:nth-of-type(1)').css('transition','.8s')
      $('.fa-code').css('left','0')
      $('.fa-code').css('transition','.8s')
      $('.main-right .theme:nth-of-type(1)').css('left','0')
      $('.main-right .theme:nth-of-type(1)').css('transition','.8s')
    }
    if($(window).scrollTop()>1900){
      $('.fa-edit').css('left','0')
      $('.fa-edit').css('transition','.8s')
      $('.main-left .theme:nth-of-type(2)').css('left','0')
      $('.main-left .theme:nth-of-type(2)').css('transition','.8s')
      $('.fa-folder-open').css('left','0')
      $('.fa-folder-open').css('transition','.8s')
      $('.main-right .theme:nth-of-type(2)').css('left','0')
      $('.main-right .theme:nth-of-type(2)').css('transition','.8s')
    }
    if($(window).scrollTop()>2100){
      $('.year').each(function () {
        $(this).prop('Counter', 0).animate({
                Counter: $(this).data('value')
            }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {                      
                $(this).text(this.Counter.toFixed());
            }
        });
    });
    $('.year-right').each(function () {
      $(this).prop('Counter', 0).animate({
              Counter: $(this).data('value')
          }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {                      
              $(this).text(this.Counter.toFixed());
          }
      });
  });
    
    //   let num = 1800
    //   let timer = setInterval(function(){
    //   $('.year').text(num++)
    //   if(num == 2021){
    //     clearInterval(timer)
    //   }
    // },1)

    // let num_2 = 600
    // let timer_2 = setInterval(function(){
    //   $('.year-right').text(num_2++)
    //   if(num_2 == 896){
    //     clearInterval(timer_2)
    //   }
    // },1)
    }
    if($(window).scrollTop()>2800){
      $('.expert-title').css('top','90px')
      $('.expert-title').css('opacity','1')
      $('.expert-title').css('transition','1s')
    }
    
    if($(window).scrollTop()>3400){
      $('.offer-title').css('top','200px')
      $('.offer-title').css('opacity','1')
      $('.offer-title').css('transition','.5s')
    }
    if($(window).scrollTop()>3600){
      $('.table:nth-child(1)').css('margin-top','0px')
      $('.table:nth-child(1)').css('transition','1s')
      $('.table:nth-child(2)').css('margin-top','0px')
      $('.table:nth-child(2)').css('transition','1s')
      $('.table:nth-child(3)').css('margin-top','0px')
      $('.table:nth-child(3)').css('transition','1s')
      $('.offers').css('height','900px')
    }
  })
  
 
  $('.circles').mouseleave(function(){
    $('.circle:nth-child(5)').css('border','none')
    $('.circle:nth-child(5)').css('background-image','linear-gradient(to right, #5192e1, #23ced5)')
  })
  $('.frame').mouseenter(function(){
    $('.iphone-button').css('bottom','80px')
    $('.iphone-button').css('opacity','1')
    $('.iphone-button').css('transition','.5s')
  })
  $('.circle').mouseenter(function(){
    $(this).css('background-image','linear-gradient(to right, #5192e1, #23ced5)')
    $(this).css('border','none')
    $('.circle:nth-child(5)').css('border','solid 1px white')
    $('.circle:nth-child(5)').css('background-image','none')
  })
  $('.circle:nth-child(5)').mouseenter(function(){
    $(this).css('background-image','linear-gradient(to right, #5192e1, #23ced5)')
    $(this).css('border','none')
  })
  $('.circle').mouseleave(function(){
    $(this).css('border','1px solid white')
    $(this).css('background-image','none')
  }) 

  $('.yearly').click(function(){
    $('.price-1').html('$ 89.55 <span id="prc-txt">/year</span>')
    $('.price-2').html('$ 179.55 <span id="prc-txt">/year</span>')
    $('.price-3').html('$ 269.55 <span id="prc-txt">/year</span>')
    $('.monthly').removeClass('month-active')
    $('.monthly').css('cursor','pointer')
    $('.yearly').addClass('month-active')
    $('.yearly').css('cursor','default')
  })
  $('.monthly').click(function(){
    $('.price-1').html('$ 9.95 <span id="prc-txt">/month</span>')
    $('.price-2').html('$ 19.95 <span id="prc-txt">/month</span>')
    $('.price-3').html('$ 29.95 <span id="prc-txt">/month</span>')
    $('.yearly').removeClass('month-active')
    $('.yearly').css('cursor','pointer')
    $('.monthly').addClass('month-active')
    $('.monthly').css('cursor','default')
  })

  
})