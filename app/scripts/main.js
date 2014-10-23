(function(){
  'use strict';

  window.Anypic = {};
  Anypic.Views = {};
  Anypic.Collections = {};
  Anypic.Models = {};

  $(document).ready(function() {
    Parse.initialize("n2FkI50T90q2AKTnXiwuWo1Rl3KeCkMRek7OHQoR", "ZDSSQlJysTp3GKz3fzKE0O1WZKAEEuuyoPhv8CHc");
    window.AnypicRouter = new Anypic.Router();
    Parse.history.start();
  });


})();
