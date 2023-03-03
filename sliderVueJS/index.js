const app = new Vue({
    el: "#app",
    data: {
        slides: [
            {
                id: 1,
                src: "./assets/tomcat4.jpg",
                title: "F-14 Tomcat",
            },
            {
                id: 2,
                src: "./assets/800px-ArtImage_F-4E_Phantom_II.png",
                title: "F-4E PHANTOM II",
            },
            {
                id: 3,
                src: "./assets/Lockheed_Martin_F-22A_Raptor_JSOH.jpg",
                title: "F-22 RAPTOR",
            },
            {
                id: 4,
                src: "./assets/1544885857_ukr-samolet.jpg",
                title: "SU-27(UAF)",
            },
        ],
        currentSlide: 1,
    },
    methods: {
        nextBtnHandler: function () {
            if (this.currentSlide === this.slides.length) return;
            this.currentSlide++;
            console.log(this.currentSlide);
            console.log(this.slides.length);
        },
        prevBtnHandler: function () {
            if (this.currentSlide === 1 ) return;
            this.currentSlide--;
            console.log(this.slides.length);
        },
    },
    
});