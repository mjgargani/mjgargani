import { marked } from "marked";
import htmlParser from "html-react-parser";
import * as DOMPurify from "dompurify";

const mdParser = (markDown: string, exceptions?: string[]) => {
  let result = DOMPurify.sanitize(marked.parse(markDown));
  result = result.replaceAll(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, "");

  if (!!exceptions?.length){
    exceptions.forEach(el => {
      result = result.replaceAll(el, "");
    })
  }

  return htmlParser(result);
};

export default mdParser;