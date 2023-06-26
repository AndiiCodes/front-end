const app = new Vue({
  el: '#app',

  mounted() {
    this.initTimeline();
  },

  methods: {
    initTimeline() {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.SlidingSection,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          // markers: true,
        }
      });
      timeline.fromTo(this.$refs.SlidingSection, {x: '-100%'}, {x: '100%'})
    },
  },
});
