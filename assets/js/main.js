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

    // mobile menu
    