const makeAjaxCall = (method, url, postObj, async) => {
    //Made a Promise That if it is in readyState==4 then return the xhttp response
    const promise = new Promise((resolve, reject) => {
        if (window.XMLHttpRequest) {
            // code for modern browsers
            var xmlhttp = new XMLHttpRequest();
        } else {
            // code for old IE browsers
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open(method, url, async);
        xmlhttp.onreadystatechange = () => {
           
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                resolve(xmlhttp.response)
            }
        }
        xmlhttp.setRequestHeader("Content-Type", "application/json")
        let obj = postObj ? postObj : undefined;
        // debugger;
        xmlhttp.send(obj);
    })
    return promise
}

// function newFunction(xmlhttp) {
//     xmlhttp.requestType = "json";
// }
