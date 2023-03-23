import DOMPurify from 'dompurify'
import htmlParser from 'html-react-parser'
import { marked } from 'marked'

const mdParser = (markDown: string, exceptions?: string[]) => {
  if (!!markDown && markDown !== '') {
    let result = DOMPurify.sanitize(marked.parse(markDown))
    result = result.replaceAll(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, '')

    if (exceptions?.length) {
      exceptions.forEach((el) => {
        result = result.replaceAll(el, '')
      })
    }
    return htmlParser(result)
  }
  return false
}

export default mdParser
