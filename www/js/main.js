
function addColorSectionsToPage(elem) {
  for (let each of words) {
    var colorCode = "#" + each.color;
    var textColor = "#" + (0xFFFFFF ^ parseInt(each.color, 16)).toString(16);

    var anchor = document.createElement("a");
    anchor.setAttribute("name", each.color);
    elem.appendChild(anchor);

    var jumbotron = document.createElement("div");
    jumbotron.className = "jumbotron";
    jumbotron.style.backgroundColor = colorCode;
    elem.appendChild(jumbotron);

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

