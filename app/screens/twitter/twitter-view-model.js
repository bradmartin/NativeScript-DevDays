const observable = require("data/observable");
const observableArrayModule = require("data/observable-array");
const tabView = require("tns-core-modules/ui/tab-view");

let tabs;
const tweetData = [
  {
    avatar: "~/images/yoda.jpg",
    tweet_header: "Yoda @YodaTheJedi 5m",
    tweet_text: "Do this, you can. Try... you must!",
    tweet_image: "~/images/yodaLayouts.jpeg",
    reply_count: "1",
    retweet_count: "25",
    favorite_count: "148"
  },
  {
    avatar: "~/images/brad.png",
    tweet_header: "Brad Martin @bradwaynemartin 1h",
    tweet_text: "I don't believe anything you tell me.",
    tweet_image: null,
    reply_count: "84",
    retweet_count: "1,839",
    favorite_count: "2,994"
  },
  {
    avatar: "~/images/joker.jpg",
    tweet_header: "Joker @TheClownPrince 34m",
    tweet_text: "If you're good at something, never do it for free.",
    reply_count: "828",
    retweet_count: "5,388",
    favorite_count: "48.6k"
  },
  {
    avatar: "~/images/android.jpg",
    tweet_header: "Android @AndroidRules 23m",
    tweet_text:
      "Android Oreo is a go kids. Enjoy the snackage and remember Android is king.",
    reply_count: "2",
    retweet_count: "6",
    favorite_count: "21"
  },
  {
    avatar: "~/images/buzz.jpeg",
    tweet_header: "Buzz Lightyear @BuzzTheMan 2h",
    tweet_text: "I don't believe anything you tell me.",
    tweet_image: null,
    reply_count: "84",
    retweet_count: "2,189",
    favorite_count: "30.6k"
  }
];

function twitterViewModel(page) {
  const viewModel = observable.fromObject({
    tweets: new observableArrayModule.ObservableArray(tweetData),
    pageTitle: "Home",
    onFavoriteTap,
    onReplyTap,
    onRetweetTap,
    onMessageTap
  });

  tabs = page.getViewById("tabView");

  // set up the tab index change event to change the title in the action bar
  tabs.on(tabView.TabView.selectedIndexChangedEvent, args => {
    const i = args.newIndex;
    const title = getActionBarTitle(args.newIndex);
    viewModel.set("pageTitle", title);
  });

  return viewModel;
}
exports.twitterViewModel = twitterViewModel;

function onReplyTap(args) {
  console.log("Reply Tap");
}

function onMessageTap(args) {
  console.log("Message Tap");
}

function onFavoriteTap(args) {
  console.log("Favorite Tap");
}

function onRetweetTap(args) {
  console.log("Retweet Tap");
}

function getActionBarTitle(tabIndex) {
  switch (tabIndex) {
    case 0:
      return "Home";
    case 1:
      return "Search";
    case 2:
      return "Notifications";
    case 3:
      return "Messages";
    default:
      return "Home";
  }
}
