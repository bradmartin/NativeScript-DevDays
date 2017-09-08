const observable = require("data/observable");
const observableArrayModule = require("data/observable-array");
const tabView = require("tns-core-modules/ui/tab-view");

let tabs;
let hiddenLayout;
let page;

const tweetData = [
  {
    avatar: "~/images/yoda.jpg",
    tweet_header: "Yoda @YodaTheJedi  - 5m",
    tweet_text: "Do this, you can. Try... you must!",
    tweet_image: "~/images/kipLayouts.jpg",
    reply_count: "1",
    retweet_count: "25",
    favorite_count: "148"
  },
  {
    avatar: "~/images/brad.png",
    tweet_header: "Brad Martin @bradwaynemartin  - 1h",
    tweet_text: "I don't believe anything you tell me.",
    tweet_image: null,
    reply_count: "84",
    retweet_count: "1,839",
    favorite_count: "2,994"
  },
  {
    avatar: "~/images/joker.jpg",
    tweet_header: "Joker @TheClownPrince  - 34m",
    tweet_text: "If you're good at something, never do it for free.",
    reply_count: "828",
    retweet_count: "5,388",
    favorite_count: "48.6k"
  },
  {
    avatar: "~/images/android.jpg",
    tweet_header: "Android @AndroidRules  - 23m",
    tweet_text:
      "Android Oreo is a go kids. Enjoy the snackage and remember Android is king.",
    reply_count: "2",
    retweet_count: "6",
    favorite_count: "21"
  },
  {
    avatar: "~/images/buzz.jpeg",
    tweet_header: "Buzz Lightyear @BuzzTheMan  - 2h",
    tweet_text: "I don't believe anything you tell me.",
    tweet_image: null,
    reply_count: "84",
    retweet_count: "2,189",
    favorite_count: "30.6k"
  },
  {
    avatar: "~/images/n-logo-orange-on-white.jpg",
    tweet_header: "nStudio @nStudio.io  - 4h",
    tweet_text: "If you're good at something, never do it for free.",
    reply_count: "1",
    retweet_count: "9",
    favorite_count: "15"
  },
  {
    avatar: "~/images/android.jpg",
    tweet_header: "Android @AndroidRules  - 5h",
    tweet_text: "I don't know what to do anymore with all of this going on.",
    reply_count: "0",
    retweet_count: "2",
    favorite_count: "5"
  }
];

function twitterViewModel(page) {
  // set the page
  // page = page;
  console.log("*** TWITTER VIEW MODEL ***");

  const viewModel = observable.fromObject({
    tweets: new observableArrayModule.ObservableArray(tweetData),
    pageTitle: "Home",
    openHiddenLayout,
    onFavoriteTap,
    onReplyTap,
    onRetweetTap,
    onMessageTap
  });

  console.dir(viewModel);

  tabs = page.getViewById("tabView");
  hiddenLayout = page.getViewById("hiddenLayout");

  // set up the tab index change event to change the title in the action bar
  tabs.on(tabView.TabView.selectedIndexChangedEvent, args => {
    const i = args.newIndex;
    const title = getActionBarTitle(args.newIndex);
    viewModel.set("pageTitle", title);
  });

  return viewModel;
}
exports.twitterViewModel = twitterViewModel;

function openHiddenLayout(args) {
  hiddenLayout.animate({
    target: hiddenLayout,
    duration: 500,
    opacity: 1,
    translate: {
      x: 0,
      y: 0
    }
  });
}

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
  openHiddenLayout();
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
