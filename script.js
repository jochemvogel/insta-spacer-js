function copyText(el) {
    var str = document.getElementById("textarea").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
    document.getElementById("textarea").value = str;
    
    el = (typeof el === 'string') ? document.querySelector(el) : el;
    el.select()

    document.execCommand('copy');

    alert("The caption has been copied to clipboard");
}