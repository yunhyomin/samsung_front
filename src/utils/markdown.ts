// https://www.cherylgood.cn/detail/5bdaf4722382b4646c27143b.html
import highlight from 'highlight.js'
import marked from 'marked'
// const highlight = require("highlight.js");
// const marked = require("marked");
const tocObj = {
  add: function (text: any, level: any) {
    var anchor = `#toc${level}${++this.index}`;
    this.toc.push({ anchor: anchor, level: level, text: text });
    return anchor;
  },
  // Use the stack method to process nested ul, li, level is the nesting level of ul, 1 is the outermost layer
  // <ul>
  //   <li></li>
  //   <ul>
  //     <li></li>
  //   </ul>
  //   <li></li>
  // </ul>
  toHTML: function () {
    let levelStack: any = [];
    let result = "";
    const addStartUL = () => {
      result += '<ul class="anchor-ul" id="anchor-fix">';
    };
    const addEndUL = () => {
      result += "</ul>\n";
    };
    const addLI = (anchor: any, text: any) => {
      result +=
        '<li><a class="toc-link" href="#' + anchor + '">' + text + "<a></li>\n";
    };

    this.toc.forEach(function (item: any) {
      let levelIndex = levelStack.indexOf(item.level);
      // If the ul tag of the corresponding level is not found, put li into the new ul
      if (levelIndex === -1) {
        levelStack.unshift(item.level);
        addStartUL();
        addLI(item.anchor, item.text);
      } // Find the ul label of the corresponding level, and put li directly under this ul at the top of the stack
      else if (levelIndex === 0) {
        addLI(item.anchor, item.text);
      } // The ul label of the corresponding level is found, but it is not at the top of the stack. All previous levels need to be popped off the stack and closed labels are added, and finally li is added.
      else {
        while (levelIndex--) {
          levelStack.shift();
          addEndUL();
        }
        addLI(item.anchor, item.text);
      }
    });
    // If there is still level in the stack, pop it off the stack with a closed label
    while (levelStack.length) {
      levelStack.shift();
      addEndUL();
    }
    // Clean up previous data for next use
    this.toc = [];
    this.index = 0;
    return result;
  },
  toc: [] as any,
  index: 0
};

class MarkUtils {
  private rendererMD: any;

  constructor() {
    this.rendererMD = new marked.Renderer() as any;
    this.rendererMD.heading = function (text: any, level: any, raw: any) {
      var anchor = tocObj.add(text, level);
      return `<h${level} id=${anchor}>${text}</h${level}>\n`;
    };
    this.rendererMD.table = function (header: any, body: any) {
      return '<table class="table" border="0" cellspacing="0" cellpadding="0">' + header + body + '</table>'
    }
    highlight.configure({ useBR: true });
    marked.setOptions({
      renderer: this.rendererMD,
      headerIds: false,
      gfm: true,
      // tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code: any) {
        return highlight.highlightAuto(code).value;
      }
    });
  }

  async marked(data: any) {
    if (data) {
      let content = await marked(data);
      let toc = tocObj.toHTML();
      return { content: content, toc: toc };
    } else {
      return null;
    }
  }
}

const markdown: any = new MarkUtils();

export default markdown;
