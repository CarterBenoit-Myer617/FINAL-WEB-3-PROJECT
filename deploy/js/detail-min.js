! function () {
    "use strict";
    let e = [{
        title: "Sketch",
        description: "Sketching is a pure form of creative exploration. Once I started studying design at Drexel I was able to explore my illustrative style and creative expression. This is when I realized there is nothing to prove. ",
        images: ["./img/projects/turtles/sk.png", "./img/projects/turtles/sketch.jpg"]
    }, {
        title: "Digital",
        description: "The Foundation of Curiosity Allows Creative-problem Solving to Grow and is Integral for Innovative Problem-solving. As a student studying Graphic Design, I’ve seen the real-world impact of what design can do. My passion for design is deeply rooted in the soil of my inquiring mind. The foundation of curiosity allows creative-problem solving to grow and is integral for innovative problem-solving. Design is on the front lines of social impact, influencing diversity within our communities and allowing cultures to be seen from different perspectives. It will enable us to empathize with one another, uniting us as one. I am ambitious to further refine my sound and vision as a creative leader and am eager to someday find my way as a trailblazer in design evolution. Whether in the studio or in the water, I can hyper-focus on the team’s one goal and one mission.",
        images: ["./img/projects/cows/duke.png", "./img/projects/cows/digital.jpg"]
    }, {
        title: "Mix-Midea",
        description: "I create so that I can imagine and dream.mix media shows me the world’s beauty and encourages me to study and be inspired compositionally. Because of this, I want to share these feelings and discoveries with more than just myself. Everything I capture is from the heart.",
        images: ["./img/projects/zoo/art.png", "./img/projects/zoo/paint.jpg"]
    }];
    window.addEventListener("load", (function () {
        console.log(e[localStorage.getItem("indexValue")].images[1]), document.querySelector("#detail h1").innerHTML = e[localStorage.getItem("indexValue")].title, document.querySelector("#detail p").innerHTML = e[localStorage.getItem("indexValue")].description;
        let t = this.document.querySelectorAll(".detail-imgs");
        t.forEach(((i, u) => {
            t[u].style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[u] + ")"
        })), document.querySelector("#detail-hero").style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[1] + ")", document.querySelector("#moreImg").style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[0] + ")"
    })), document.querySelector("button").addEventListener("click", (() => {
        location.href = "index.html"
    }))
}();