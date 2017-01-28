
function oppositeColor(hex) {
  var shortCode = false;
  if (hex.length == 3) {
    shortCode = true;
    hex = hex.substring(0,1).repeat(2) + hex.substring(1,2).repeat(2) + hex.substring(2,3).repeat(2);
  }
  var r = parseInt(hex.substring(0,2), 16);
  var g = parseInt(hex.substring(2,4), 16);
  var b = parseInt(hex.substring(4,6), 16);

  var r1 = (r + 128) % 255;
  var g1 = (g + 128) % 255;
  var b1 = (b + 128) % 255;

  var opposite = r1.toString(16) + g1.toString(16) + b1.toString(16);

  if (shortCode) {
    opposite  = opposite.substring(0,1) + opposite.substring(2,3) + opposite.substring(4,5);
  }

  return opposite;
}

function addColorSectionsToPage(elem) {
  for (let each of words) {
    var colorCode = "#" + each.color;
    //var textColor = "#" + (~ parseInt(each.color, 16)).toString(16);
    var textColor = "#" + oppositeColor(each.color);

    var anchor = document.createElement("a");
    anchor.setAttribute("name", each.color);
    elem.appendChild(anchor);

    var row = document.createElement("div");
    row.className = "row";
    elem.appendChild(row);

    var col = document.createElement("div");
    col.className="col-md-6 col-md-offset-3";
    row.appendChild(col);

    var jumbotron = document.createElement("div");
    jumbotron.className = "jumbotron rounded";
    jumbotron.style.backgroundColor = colorCode;
    col.appendChild(jumbotron);

    var container = document.createElement("div");
    container.className = "container";
    jumbotron.appendChild(container);

    var header = document.createElement("h1");
    header.style.color = textColor;
    header.appendChild(document.createTextNode(each.word));
    header.appendChild(document.createElement("br"));
    header.appendChild(document.createTextNode(colorCode));
    header.appendChild(document.createElement("br"));
    container.appendChild(header);

    var backToTop = document.createElement("a");
    backToTop.style.color = textColor;
    backToTop.setAttribute("href", "#top");
    var backToTopText = document.createTextNode("Back to top ");
    var backToTopCaret = document.createElement("span");
    backToTopCaret.className = "glyphicon glyphicon-arrow-up";
    backToTop.appendChild(backToTopText);
    backToTop.appendChild(backToTopCaret);

    container.appendChild(backToTop);

  }
}

function addColorsToList(list) {
  for (let each of words) {
    var anchorId = "#" + each.color;

    var li = document.createElement("li");
    li.style.backgroundColor = anchorId;

    var link = document.createElement("a");
    link.setAttribute("href", anchorId);

    var text = document.createTextNode(each.word + " / " + anchorId);
    link.appendChild(text);
    li.appendChild(link)
    list.appendChild(li);
  }
}

function jumpToRandom() {
  var index = Math.floor(Math.random() * words.length);
  parent.location.hash = words[index].color;
}

