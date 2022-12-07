//放大鏡功能
/**
 * blowup.js
 *
 * https://paulkr.com
 * paul@paulkr.com
 */

 $(function ($) {
    $.fn.blowup = function (attributes) {
        var $element = this;
        // If the target element is not an image
        if (!$element.is("img")) {
            console.log("%c Blowup.js Error: " + "%cTarget element is not an image.",
                "background: #FCEBB6; color: #F07818; font-size: 17px; font-weight: bold;",
                "background: #FCEBB6; color: #F07818; font-size: 17px;");
            return;
        }
        // Constants
        var $IMAGE_URL = $element.attr("src");
        var NATIVE_IMG = new Image();
        NATIVE_IMG.src = $element.attr("src");

        // Default attributes
        var defaults = {
            width: 200,
            height: 200,
            cursor: true,
            zIndex: 999999,
            scale: 1,
        }

        // Update defaults with custom attributes
        var $options = $.extend(defaults, attributes);

        // Modify target image
        $element.on('dragstart', function (e) { e.preventDefault(); });
        $element.css("cursor", $options.cursor ? "crosshair" : "none");

        // Create magnification lens element
        var lens = document.createElement("div");
        lens.id = "BlowupLens";

        // Attack the element to the body
        $("body").append(lens);

        // Updates styles
        $blowupLens = $("#BlowupLens");

        $blowupLens.css({
            "position": "absolute",
            "display": "none",
            "pointer-events": "none",
            "zIndex": $options.zIndex,
            "width": $options.width,
            "height": $options.height,
            "border": $options.border,
            "background-repeat": "no-repeat",
        });

        // Add custom CSS classes
        $blowupLens.addClass($options.customClasses);

        // Show magnification lens
        $element.mouseenter(function () {
            $blowupLens.css("display", "block");
        })

        // Mouse motion on image
        $element.mousemove(function (e) {

            // Lens position coordinates
            var lensX = e.pageX - $options.width / 2;
            var lensY = e.pageY - $options.height / 2;

            // Relative coordinates of image
            var relX = e.pageX - $(this).offset().left;
            var relY = e.pageY - $(this).offset().top;

            // Zoomed image coordinates 
            var zoomX = -Math.floor(relX / $element.width() * (NATIVE_IMG.width * $options.scale) - $options.width / 2);
            var zoomY = -Math.floor(relY / $element.height() * (NATIVE_IMG.height * $options.scale) - $options.height / 2);

            var backPos = zoomX + "px " + zoomY + "px";
            var backgroundSize = NATIVE_IMG.width * $options.scale + "px " + NATIVE_IMG.height * $options.scale + "px";

            // Apply styles to lens
            $blowupLens.css({
                left: lensX,
                top: lensY,
                "background-image": "url(" + encodeURI($IMAGE_URL) + ")",
                "background-size": backgroundSize,
                "background-position": backPos
            });
        })

        // Hide magnification lens
        $element.mouseleave(function () {
            $blowupLens.css("display", "none");
        });
    }
})

$(document).ready(function () {
    $('#blowup_image').blowup({
        scale: 2
    });
})

// 調換照片-------------------------
function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}



function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}
