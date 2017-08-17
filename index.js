var js = (function(win, doc) {
    var onScroll = function (e) {
        if (this.body.scrollTop > 0) {
            this.body.getElementsByTagName("header")[0].classList.add("headerFixedScroll");
            this.body.getElementsByClassName("container")[0].classList.add("onScroll");

        } else {
            this.body.getElementsByTagName("header")[0].classList.remove("headerFixedScroll");
            this.body.getElementsByClassName("container")[0].classList.remove("onScroll");
        }
    };
    return {
        init: function () {
            doc.addEventListener("scroll", onScroll);
        }
    };
}(window, document));

document.addEventListener("DOMContentLoaded", js.init());