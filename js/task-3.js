function getElementWidth(content, padding, border) {
    let content = Number.parseFloat(content);
    let padding = Number.parseFloat(padding);
   let border = Number.parseFloat(border);
    
    let totalWidth = content + 2 * padding + 2 * border;
    return totalWidth;
 }

getElementWidth();


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
