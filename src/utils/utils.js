export const parseHtml = (html, tag, attr) => {
    var htmlDoc = convertHtmlToDom(html)
    try {
        return htmlDoc.querySelector(tag)[attr]
    } catch(execption){
        return false
    }
    
}

export const convertHtmlToDom = (html) => {
    var dom = new DOMParser()
    return dom.parseFromString(html, "text/html")
     
}
