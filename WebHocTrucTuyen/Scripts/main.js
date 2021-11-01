document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        // AOS.init({ once: true });
        // AOS.init();

        window.scrollTo(0,0)

        document.querySelector(".spanner").classList.remove("show")
        
        const courseHero = document.querySelector("#courseHero")

        if(courseHero) {
            tns({
                container: courseHero,
                items: 1,
                hasControls: false,
                autoplay: true,
                controls: false,
                autoplayHoverPause: true,
                autoplayTimeout: 3000,
                autoplayButtonOutput: false,
                nav: true,
                slideBy: 1,
                mouseDrag: true,
                lazyload: true,
                rewind: true,
                responsive: {
                    200:{
                        items: 1,
                    },
                    400: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }

        const popularSlider = document.querySelector("#popularSlider")

        if(popularSlider) {
            tns({
                container: popularSlider,
                items: 4,
                hasControls: false,
                autoplay: true,
                prevButton: "#popularLeftArrow",
                nextButton: "#popularRightArrow",
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                autoplayButtonOutput: false,
                nav: false,
                slideBy: 1,
                mouseDrag: true,
                lazyload: true,
                loop: true,
                center: true,
                rewind: false,
                responsive: {
                    200:{
                        items: 1,
                    },
                    400: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }

        const testimoniesSlider = document.querySelector("#testimoniesSlider")

        if(testimoniesSlider) {
            const testSlider = tns({
                container: testimoniesSlider,
                items: 1,
                hasControls: false,
                autoplay: true,
                prevButton: "#testimoniesLeftArrow",
                nextButton: "#testimoniesRightArrow",
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                autoplayButtonOutput: false,
                nav: false,
                slideBy: 1,
                mouseDrag: true,
                loop: false,
                rewind: false,
                lazyload: true,
                responsive: {
                    200:{
                        items: 1,
                    },
                    400: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });

            const setInfoValue = () => {
                const sliderInfo = testSlider.getInfo()
                document.querySelector("#currentSlide").innerText = sliderInfo.displayIndex
                document.querySelector("#endSlide").innerText = sliderInfo.slideCount
            }

            setInfoValue()

            document.querySelector("#testimoniesLeftArrow").addEventListener("click", () => {
                setInfoValue()
            })

            document.querySelector("#testimoniesRightArrow").addEventListener("click", () => {
                setInfoValue()
            })
        }

        const filterCardArea = document.querySelector('#filterCardArea')

        if(filterCardArea) {
            let searchRegex
            const gridArea = new Isotope( filterCardArea, {
                itemSelector: '.card-theme',
                layoutMode: 'fitRows',
                stagger: 30,
                getSortData: {
                    name: '.courseName',
                    price: '.price',
                    rating: '.rating',
                },
                filter: function( itemElem ) {
                    return searchRegex ? itemElem.textContent.match( searchRegex ) : true;
                }
            });

            const selectSortBy = document.querySelector("#sortBy")
            
            if(selectSortBy) {
                selectSortBy.addEventListener("change", (e) => {
                    const value = selectSortBy.value
                    switch (value) {
                        case "nameAsc":
                            gridArea.arrange({ sortBy: 'name', sortAscending: true });
                            break;
                        case "nameDesc":
                            gridArea.arrange({ sortBy: 'name', sortAscending: false });
                            break;
                        case "highRate":
                            gridArea.arrange({ sortBy: 'rating', sortAscending: false });
                            break;
                        case "lowRate":
                            gridArea.arrange({ sortBy: 'rating', sortAscending: true });
                            break;
                        case "highPrice":
                            gridArea.arrange({ sortBy: 'price', sortAscending: false });
                            break;
                        case "lowPrice":
                            gridArea.arrange({ sortBy: 'price', sortAscending: true });
                    }
                })
            }

            const searchInput = document.querySelector('#searchInput');

            if(searchInput) {
                searchInput.addEventListener( 'keyup', debounce( function() {
                    searchRegex = new RegExp( searchInput.value, 'gi' );
                    gridArea.arrange();
                }, 200 ) );
            }

            function debounce( fn, threshold ) {
                var timeout;
                threshold = threshold || 100;
                return function debounced() {
                    clearTimeout( timeout );
                    var args = arguments;
                    var _this = this;
                    function delayed() {
                    fn.apply( _this, args );
                    }
                    timeout = setTimeout( delayed, threshold );
                };
            }

                            
            const filterButtons = document.querySelectorAll("#filterButtons a")
            
            filterButtons.forEach(filterBtn => {
                filterBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    
                    filterButtons.forEach(filterBtn2 => {
                        filterBtn2.classList.add("bg-white")
                        filterBtn2.classList.remove("btn-secondary")
                    })
                    
                    filterBtn.classList.remove("bg-white")
                    filterBtn.classList.add("btn-secondary")

                    const filterValue = filterBtn.dataset.filter
                    gridArea.arrange({ filter: filterValue });
                })
            })
        }
    }
}