/**
 * Created by k33g_org on 30/05/14.
 */
(function () {

  window.$ = function(selector) {
    var all = [].slice.apply(document.querySelectorAll(selector));
    return {
      results: all,
      result: all[0]
    }
  }

  var firstScreen = $("#main").result;
  var secondScreen = $("#second").result;

  var linkGoToSecondScreen = $("a[name='go_to_second']").result;
  var linkGoToFirstScreen = $("a[name='go_to_first']").result;


  linkGoToSecondScreen.onclick = function() {
    firstScreen.style.display = "none";
    secondScreen.style.display = "block";
  }

  linkGoToFirstScreen.onclick = function() {
    secondScreen.style.display = "none";
    firstScreen.style.display = "block";
  }

}());