import Ember from 'ember';

export function fountainToHtml(input) {
  var output = window.fountain.parse(input);
  var htmlOutput = "<div class='title-page'>" +
                  output.html.title_page +
                  "</div><div class='script-pages'>" +
                  output.html.script +
                  "</div>";
  return new Ember.Handlebars.SafeString(htmlOutput);
}

export default Ember.Handlebars.makeBoundHelper(fountainToHtml);
