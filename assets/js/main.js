    // AOS.init();
    (function () {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select('.scrollto', true)
        const navbarlinksActive = () => {}
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)

        /**
         * Animation on scroll
         */
        window.addEventListener('load', () => {
            AOS.init({
                duration: 1000,
                easing: "ease-in-out",
                once: true,
                mirror: false
            });
        });

    })();

    $(document).ready(function () {
        
        //Destination info
        $("#moon").click(function () {
            $(".destination-moon-info").toggle(200); //toggle corrent category
            $("#moon-img").toggle(200);//toggle corrent category's img
            $("#moon").toggleClass('active'); //show border bottom
            $("#mars-img ,.destination-mars-info ,#europa-img ,.destination-europa-info ,#titan-img ,.destination-titan-info").addClass('d-none'); //remove other category
            $(".destination-moon-info ,#moon-img").removeClass('d-none'); //show corrent category
            $("#mars ,#europa ,#titan").removeClass('active'); //remove border bottom
        });
        //mars info
        $("#mars").click(function () {
            $(".destination-mars-info").toggle(200);
            $("#mars-img").toggle(200);
            $("#mars").toggleClass('active');
            $("#moon-img ,.destination-moon-info ,#europa-img ,.destination-europa-info ,#titan-img ,.destination-titan-info").addClass('d-none');
            $(".destination-mars-info ,#mars-img").removeClass('d-none');
            $("#moon ,#europa ,#titan").removeClass('active'); //remove border bottom
        });
        //europa info
        $("#europa").click(function () {
            $(".destination-europa-info").toggle(200);
            $("#europa-img").toggle(200);
            $("#europa").toggleClass('active');
            $("#moon-img ,.destination-moon-info ,#mars-img ,.destination-mars-info ,#titan-img ,.destination-titan-info").addClass('d-none');
            $(".destination-europa-info ,#europa-img").removeClass('d-none');
            $("#mars ,#moon ,#titan").removeClass('active'); //remove border bottom
        });
        //titan info
        $("#titan").click(function () {
            $(".destination-titan-info").toggle(200);
            $("#titan-img").toggle(200);
            $("#titan").toggleClass('active');
            $("#moon-img ,.destination-moon-info ,#mars-img ,.destination-mars-info ,#europa-img ,.destination-europa-info").addClass('d-none');
            $(".destination-titan-info ,#titan-img").removeClass('d-none');
            $("#mars ,#europa ,#moon").removeClass('active'); //remove border bottom
        });
    });