const twitterViewModel = require("./twitter-view-model").twitterViewModel;

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = twitterViewModel(page);
}
exports.onNavigatingTo = onNavigatingTo;
