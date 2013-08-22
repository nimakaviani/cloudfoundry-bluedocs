$(document).ready(function() {
  $('div[id^=pop-up]').hide();
});

$(function() {
    var moveLeft = 20;
    var moveDown = 10;

    $('a[id^=trigger]').hover(function(e) {
      var matches = this.id.match(/\d+/);
      var numb    = parseInt(matches[0]);
      var divId   = "div#pop-up"+numb;
      $(divId).show();
    }, function() {
      var matches = this.id.match(/\d+/);
      var numb    = parseInt(matches[0]);
      var divId   = "div#pop-up"+numb;
      if ($(divId).data('is_clicked') === 'false' || $(divId).data('is_clicked') === undefined){        
        $(divId).hide();
      }
    });

    $('a#trigger').mousemove(function(e) {
      $('div[id^=pop-up]').css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });

    $('a[id^=trigger]').click(function(e) {
      var matches = this.id.match(/\d+/);
      var numb    = parseInt(matches[0]);
      var divId   = "div#pop-up"+numb;
      e.preventDefault();
      if (!$(divId).css('visibility') === 'hidden') {
        $(divId).hide();
      } else {
        if ($(divId).data('is_clicked') === 'false' || $(divId).data('is_clicked') === undefined){
          this.innerHTML = "-";
          $(divId).data('is_clicked', 'true');
          $(divId).show();
        }else{
          this.innerHTML = "+";
          $(divId).data('is_clicked', 'false');
          $(divId).hide();          
        }
      }
    });
    
    $('a#collapse').click(function(e) {
      $('a[id^=trigger]').html("+");
      $('div[id^=pop-up]').hide();
      $('div[id^=pop-up]').data('is_clicked', 'false')
    });

    $('a#expand').click(function(e) {
      $('a[id^=trigger]').html("-");
      $('div[id^=pop-up]').show();
      $('div[id^=pop-up]').data('is_clicked', 'true');
    });
});
