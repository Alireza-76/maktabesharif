copyParentText = function () {
    let parentNodeText = $('.parent-text')[0].innerText;
    let targetNodeText = $('.target-text')[0].innerText;
    let childNodeText = $('.child-text')[0].innerText;
    
    $('.target-text')[0].innerText = parentNodeText + ' ' + targetNodeText + ' ' + childNodeText + ' ' + targetNodeText; 
}
copyChildText = function () {
    let targetNodeText = $('.target-text')[0].innerText;
    let childNodeText = $('.child-text')[0].innerText;
    
    $('.target-text')[0].innerText = childNodeText + ' ' + targetNodeText; 
}

