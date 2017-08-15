var debug = false;
var maxSizeEnable = false;
var replaceBrokenEnable = false;
var forceHTTPSEnable = false;
var brokenImageURL = "https://github.com/xadamxk/HFX/blob/master/images/icon-128.png?raw=true";
getImageChanges();

// Set vars equal to saved settings
function getImageChanges() {
    chrome.storage.sync.get("ImageChanges", function (data) {
        if (!chrome.runtime.error) {
            $.each(data, function (index, data1) {
                $.each(data1, function (index1, data2) {
                    $.each(data2, function (key, value) {
                        switch (key) {
                            case "ImageChangesMaxSizeEnable": if (value) { maxSizeEnable = value }
                                break;
                            case "ImageChangesReplaceBrokenEnable": if (value) { replaceBrokenEnable = value }
                                break;
                            case "ImageChangesForceHTTPSEnable": if (value) { forceHTTPSEnable = value }
                                break;
                            default: //console.log("ERROR: Key not found.");
                                break;
                        }
                    })
                })

            });
            injectImageChanges();
        }
    });
}
function injectImageChanges() {
    // Loop through all images in posts
    $(".post_body").find("img").each(function (index) {
        // Max Size
        if (maxSizeEnable) {
            $(this).css({ "max-height": "100%", "max-width": "100%" });
        }
        // Force HTTPS
        if (forceHTTPSEnable) {
            var thisImageSRC = $(this).attr("src");
            // Grab text from posts, look for image tag?
        }
        // Replace Broken
        if (replaceBrokenEnable) {
            if($(this).complete && $(this).naturalNeight !== 0){
                this.src = brokenImageURL;
            }
        }
    });
    
}