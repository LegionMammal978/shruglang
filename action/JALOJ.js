/*jshint esversion: 6 */

((window) => {

    if (typeof window === "undefined" || !window.document || !window) {

        // Pass this if window is not defined OR if there's no document

        throw new Error("JALOJ needs somewhere to execute!");

    }

    function defJALOJ() {
        var JALOJ = {};
        var arr = [];
        var dataReturned;

        // Privacy protection, so that JALOJ can be used in TOR, I2P, & other similar browsers

        /* Yeah, I haven't REALLY found a way to detect when is there a relay network making
    the requests or not, and taking into account that there's a stupid amount of browsers
    & exit nodes out there, making comparisons doesn't seem very practical. And as such,
    this section will be empty until I find something. */


        // Selectors & primitives

        var page = window.document;
        var are_elems = ident => page.getElementsByTagName(ident);
        JALOJ.prototype.are_elems = (ident) => this.getElementsByTagName(ident);
        var is_id = ident => page.getElementById(ident);
        JALOJ.prototype.is_id = (ident) => this.getElementById(ident);
        var are_class = ident => page.getElementsByClassName(ident);
        JALOJ.prototype.are_class = ident => this.getElementByClassName(ident);
        var is_query = ident => page.querySelector(ident);
        JALOJ.prototype.is_query = ident => this.querySelector(ident);
        var are_query = ident => page.querySelectorAll(ident);
        JALOJ.prototype.are_query = ident => this.querySelectorAll(ident);
        JALOJ.prototype.attrib = function(attribnm, attrivval) {
            this.setAttribute(attribnm, attrivval);
        };
        arr.prototype.push = toaoetp => this.push(toaoetp);
        arr.prototype.numOf = toaoetsf => this.indexOf(toaoetsf);
        var stringy = (objTc) => String(objTc);
        JALOJ.prototype.specialProp = this.hasOwnProperty;

        function reDir(ptwtfsrt) {
            window.location.assign(ptwtfsrt);
        }

        function supplantDir(ptwtsfrt) {
            window.location.replace(ptwtfsrt);
        }

        arr.prototype.merge = (...arrs) => {
            let aarrl = new arr();
            arrs.forEach(kkkkklll => aarrl.push(kkkkklll));
            return aarrl;
        };
        JALOJ.prototype.merge = (...ascends) => {
            let hhhyyt;
            let oobbj = new JALOJ();
            ascends.forEach(function(kkkkkklll) {
                let hhhyytl = JALOJ.assign(kkkkkklll, hhhyyt);
            });
            let oobbjt = JALOJ.assign(oobbj, hhhyytl);
            return oobbjt;
        };

        arr.prototype.explode = this.slice;
        JALOJ.prototype.worth = this.value;

        // Styling, the lungs of JALOJ-AC

        JALOJ.prototype.font = this.style.fontFamily;
        JALOJ.prototype.display = this.style.display;
        JALOJ.prototype.color = this.style.color;
        JALOJ.prototype.backColor = this.style.backgroundColor;
        JALOJ.prototype.distTop = this.style.top;
        JALOJ.prototype.distBottom = this.style.bottom;
        JALOJ.prototype.distLeft = this.style.left;
        JALOJ.prototype.addClass = function(idre) {
            this.classList.add(idre);
        };
        JALOJ.prototype.removeClass = function(idre) {
            this.classList.remove(idre);
        };
        JALOJ.prototype.position = this.style.position;
        JALOJ.prototype.padTop = this.style.paddingTop;
        JALOJ.prototype.padBottom = this.style.paddingBottom;
        JALOJ.prototype.padLeft = this.style.paddingLeft;
        JALOJ.prototype.padRight = this.style.paddingRight;
        JALOJ.prototype.display = this.style.display;
        JALOJ.prototype.hide = function() {
            this.display = "hidden";
        };
        JALOJ.prototype.backColor = this.style.backgroundColor;
        JALOJ.prototype.backImage = this.style.backgroundImage;

        var fixBox = ider => {
            let totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            if (window.pageYoffset === totalHeight) {
                return totalHeight;
            } else {
                let idel = is_id(ider);

                window.addEventListener('scroll', function() {

                    var sticky = idel.offsetTop;
                    if (window.pageYOffset > sticky) {
                        idel.addClass("sticky");
                    } else {
                        idel.removeClass("sticky");
                    }
                }, false);
            }
        };

        //Other Methods

        JALOJ.prototype.elem_source = function(srcpg) {
            this.attrib("src", srcpg);
        };

        function wait(idrTm, fttweattro) {
            setTimeout(fttweattro, idrTm);
        }
        JALOJ.prototype.newClicker = function(waistd, itboow) {
            this.addEventListener('click', waistd, itboow);
        };
        JALOJ.prototype.newScroller = function(waistd, itboow) {
            this.addEventListener('scroll', waistd);
        };
        page.prototype.customTag = function(boolTCItscTe, tagName, dmoName, ...ascendants) {
            let preCons = new JALOJ({
                constructor() {
                    super();
                    var shadow = this.attachShadow({
                        mode: open
                    });
                }
            });
            let DomNm = JALOJ.merge(ascendants);
            let dmName = JALOJ.merge(DomNm, preCons);
            customElementRegistry.define(tagName, dmoName);
            if (boolTCItscTe === true) {
                page.createElement(tagName.toUppercase());
                return {
                    HTMLTagName: tagName,
                    DOMName: dmoName
                };
            } else if (boolTCItscTe === false) {
                return {
                    HTMLTagName: tagName,
                    DOMName: dm0Name
                };
            } else {
                throw new TypeError('Bad refference error, page.customTag(bool, string, name, inherit1[... inheritX]).bool should be either true or false, but it was typed as:' + boolTCItscTe);
            }
        };
        var getXY = (ider) => {

            let idel = is_id(ider);
            let xPosition = 0;
            let yPosition = 0;

            while (idel) {
                xPosition += (idel.offsetLeft - idel.scrollLeft + idel.clientLeft);
                yPosition += (idel.offsetTop - idel.scrollTop + idel.clientTop);
                let iderl = idel.ider;
            }
            return {
                x: xPosition,
                y: yPosition
            };
        };



        // Async methods, the heart of vanilla JALOJ

        var upLoad = (fName, inpNm, paTher, ittofcinttc, ftwswttf) => {
            let selIct = is_id(fName);

            //itto... === true for "POST" method || === false for "PUT" pethod)

            if (ittofcinttc == true) {
                selIct.attrib("method", "POST");
            } else if (ittofcinttc == false) {
                selIct.attrib("method", "PUT");
            }
            var tibij = page.createElement("IFRAME");
            tibij.attrib("name", "tiaitiutktfua");
            tibij.hide();
            selIct.attrib("path", paTher)("target", "tiaitiutktfua");

            // for this to work properly, add a button (<button></button> || <input type="button" />) inside the form,
            // & assign it an id and write it in inpNm

            var botrinpt = selIct.is_id(inpNm);

            botrinpt.newClicker(function() {
                selIct.submit();
            });

            try {
                ftwswttf();
            } catch (e) {
                throw "unknown error, try again" || 500;
            }
            return selIct;
        };
        var getContent = (fName, inpNm, itpttIspt, ftwswttf) => {
            is_id(fName).is_id(inpNm).newClicker(function() {
                var itsctGr = page.createElement('IFRAME');
                itsctGr.elem_src(itpttIspt);
                itsctGr.hide();
                let dataReturned = itsctGr.contentDocument || itsctGr.contentWindow.document;
                ftwswttf();

            });
            return dataReturned;
        };

        return {
            JALOJobj: JALOJ,
            JALOJarr: arr,
            JALOJpg: page
        };
    }

    if (typeof(JALOJ) === 'undefined') {
        window.document = defJALOJ.JALOJpg;
        window.page = defJALOJ.JALOJpg;
        window.JALOJ = defJALOJ.JALOJobj;
        window.Object = defJALOJ.JALOJobj;
        window.Array = defJALOJ.JALOJarr;
    }

    /* JALOJ Elements */
    page.customTag(false, 'ali', HTMLAnchorLIElement, HTMLElement, HTMLLIElement, HTMLAnchorElement)(false, 'dropdown', HTMLDropdownElement, HTMLUListElement, {
        drop: function() {
            this.parentElement.float = "left";
            this.padding = "5px";
            this.childrenElements.forEach(function(listElm) {
                listElm.display = "none";
                listElm.width = "100%";
                listElm.padding = "100%";
                listElm.margin = "0px";
            });
            this.parentElement.addEventListener('mousedown', function() {
                this.childrenElements.display = "block";
            }, false);
            this.padding = "0px";
            this.listStyle = "none";
            this.width = "100%";
            this.textDecor = "none";
        }
    }, {
        this.parentElement.newClicker(() => this.drop())
    });

})(window);
