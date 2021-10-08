window.addEventListener("load", load, false);

$(document).ajaxStop(afterAjax);

function load() {
    console.log('custom script loaded');    
}

function afterAjax() {
    console.log('after ajax');
}