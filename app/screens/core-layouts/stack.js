const frame = require("tns-core-modules/ui/frame");
const observable = require("tns-core-modules/data/observable");

let data;
function onLoaded(args) {
  const page = args.object;
  data = observable.fromObject({
    orientation: "vertical"
  });
  page.bindingContext = data;
}
exports.onLoaded = onLoaded;

exports.toggleOrientation = function toggleOrientation() {
  const layout = frame.topmost().currentPage.getViewById("theLayout");

  const currentOrientation = data.get("orientation");
  const newOrientation =
    currentOrientation === "horizontal" ? "vertical" : "horizontal";
  data.set("orientation", newOrientation);
};
