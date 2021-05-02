import { TimelineMax as Timeline, Power1, gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll("div");

  timeline
    .from(node, 0, { display: "none", autoAlpha: 0, delay })
    .staggerFrom(
      texts,
      0.375,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut },
      0.125
    );

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  timeline = getHomeTimeline(node, delay);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};
