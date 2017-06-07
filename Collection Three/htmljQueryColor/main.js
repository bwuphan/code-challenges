$(function() {
  // console.log($('p'));
  $('p').each(function(index, element) {
    console.log(element);
    console.log($(element).each);
    var $element = $(element);
    var array = $element.text().split(' ');
    $element.empty();
    array.forEach(function(word) {
      var newSpan = $('<span>').text(word + ' ');
      $element.append(newSpan)
    });
  });
  var generateColor = function() {
    var hue = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
    return `rgb(${hue})`
  }
  // setInterval(function() {
  //   $('span').each(function(index, element) {
  //     $(this).css('color', generateColor());
  //   });
  // }, 1000);
  $('span').each(function(index, element) {
    var context = this;
    setInterval(() => {
      $(context).css('color', generateColor());
    }, Math.random() * 1000)
  });
});










// $(function() {
//   // --------------STEP 1--------------
//   // wrap every word in every `<p>` tag with a `<span>` tag.
//   // for example: <p>Hey there</p>
//   // becomes: <p><span>Hey</span><span>there</span></p>
//   // HINT: the `split` array method is your friend

//   // TODO: your code here!
//   /* START SOLUTION */
//   $('p').each(function(index, element) {
//     var $el = $(element);
//     var words = $el.text().split(' ');
//     $el.html('');
//     for (var i = 0; i < words.length; i++) {
//       var newSpan = $('<span>').text(words[i] + ' ');
//       $el.append(newSpan);
//     }
//   });
//   /* END SOLUTION */


//   // --------------STEP 2--------------
//   // Next, change spans to random colors, once per second

//   // TODO: your code here!
//   /* START SOLUTION */
//   setInterval(function() {
//     $('span').each(function() {
//       var red = Math.floor(Math.random() * 256);
//       var green = Math.floor(Math.random() * 256);
//       var blue = Math.floor(Math.random() * 256);
//       $(this).css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
//     });
//   }, 1000);
//   /* END SOLUTION */

// });