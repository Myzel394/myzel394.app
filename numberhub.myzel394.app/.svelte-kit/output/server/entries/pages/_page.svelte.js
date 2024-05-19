import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component, h as add_styles, o as onDestroy, i as spread, j as escape_object, k as createEventDispatcher } from "../../chunks/ssr.js";
const css$8 = {
  code: "@media(min-width: 600px){svg.svelte-1uqx0lk{display:none}}",
  map: '{"version":3,"file":"arch.svelte","sources":["arch.svelte"],"sourcesContent":["<script>\\nexport let previousColor;\\nexport let nextColor;\\n<\/script>\\n\\n<svg width=\\"2166\\" height=\\"1080\\" viewBox=\\"0 0 2166 1080\\" style=\\"background: {nextColor}; z-index: -2\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path\\n    fill-rule=\\"evenodd\\"\\n    clip-rule=\\"evenodd\\"\\n    d=\\"M2165.51 1080C2164.02 483.278 1679.83 0 1082.76 0H2165.51V1080H2165.51ZM0.00292969 1080V0H1082.76C485.688 0 1.49261 483.278 0.00636045 1080H0.00292969Z\\"\\n    fill=\\"{previousColor}\\"\\n/>\\n</svg>\\n\\n<style>\\n@media (min-width: 600px) {\\n    svg {\\n        display: none;\\n    }\\n}\\n</style>\\n\\n"],"names":[],"mappings":"AAeA,MAAO,YAAY,KAAK,CAAE,CACtB,kBAAI,CACA,OAAO,CAAE,IACb,CACJ"}'
};
const Arch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { previousColor } = $$props;
  let { nextColor } = $$props;
  if ($$props.previousColor === void 0 && $$bindings.previousColor && previousColor !== void 0)
    $$bindings.previousColor(previousColor);
  if ($$props.nextColor === void 0 && $$bindings.nextColor && nextColor !== void 0)
    $$bindings.nextColor(nextColor);
  $$result.css.add(css$8);
  return `<svg width="2166" height="1080" viewBox="0 0 2166 1080" style="${"background: " + escape(nextColor, true) + "; z-index: -2"}" xmlns="http://www.w3.org/2000/svg" class="svelte-1uqx0lk"><path fill-rule="evenodd" clip-rule="evenodd" d="M2165.51 1080C2164.02 483.278 1679.83 0 1082.76 0H2165.51V1080H2165.51ZM0.00292969 1080V0H1082.76C485.688 0 1.49261 483.278 0.00636045 1080H0.00292969Z"${add_attribute("fill", previousColor, 0)}></path></svg>`;
});
const GooglePlayBadgeImage = "/_app/immutable/assets/google-play-badge.BAXiFmDF.png";
const GithubBadgeImage = "/_app/immutable/assets/github-badge.9WUsOU9h.png";
const ObtainiumBadgeImage = "/_app/immutable/assets/obtainium-badge.DvSugiRX.png";
const css$7 = {
  code: 'section.svelte-1mwh1xr{display:flex;flex-direction:column;gap:2em;padding:0 2em 4em 2em;width:100%;background:rgb(var(--background-color))}h1.svelte-1mwh1xr{font-size:1.8rem;font-family:"Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;font-weight:600;text-align:center;color:rgb(var(--on-surface-primary-color));margin-top:-3em}ul.svelte-1mwh1xr{display:flex;flex-direction:column;justify-content:center;align-items:center}li.svelte-1mwh1xr{list-style:none}img.svelte-1mwh1xr{width:100%;max-width:15em;height:auto}@media(min-width: 600px){section.svelte-1mwh1xr{padding-top:4em}ul.svelte-1mwh1xr{flex-direction:row;gap:2em}}',
  map: '{"version":3,"file":"DownloadNow.svelte","sources":["DownloadNow.svelte"],"sourcesContent":["<script>\\nimport GooglePlayBadgeImage from \\"$lib/assets/google-play-badge.png\\";\\nimport GithubBadgeImage from \\"$lib/assets/github-badge.png\\";\\nimport ObtainiumBadgeImage from \\"$lib/assets/obtainium-badge.png\\";\\n<\/script>\\n\\n<section>\\n    <h1>Download NumberHub</h1>\\n\\n    <ul>\\n        <li>\\n            <a href=\\"https://play.google.com/store/apps/details?id=app.myzel394.numberhub\\">\\n                <img\\n                    src=\\"{GooglePlayBadgeImage}\\"\\n                    alt=\\"Get it on Google Play\\"\\n                />\\n            </a>\\n        </li>\\n        <li>\\n            <a href=\\"https://github.com/Myzel394/NumberHub/releases\\">\\n                <img\\n                    src=\\"{GithubBadgeImage}\\"\\n                    alt=\\"Get it on Github\\"\\n                />\\n            </a>\\n        </li>\\n        <li>\\n            <a href=\\"https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/Myzel394/NumberHub//\\">\\n                <img\\n                    src=\\"{ObtainiumBadgeImage}\\"\\n                    alt=\\"Get it with Obtainium\\"\\n                />\\n            </a>\\n        </li>\\n    </ul>\\n</section>\\n\\n<style>\\n    section {\\n        display: flex;\\n        flex-direction: column;\\n        gap: 2em;\\n\\n        padding: 0 2em 4em 2em;\\n        width: 100%;\\n        background: rgb(var(--background-color));\\n    }\\n\\n    h1 {\\n        font-size: 1.8rem;\\n        font-family: \\"Montserrat\\", Montserrat, \\"Roboto\\", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\\n        font-weight: 600;\\n        text-align: center;\\n        color: rgb(var(--on-surface-primary-color));\\n\\n        margin-top: -3em;\\n    }\\n\\n    ul {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n\\n    li {\\n        list-style: none;\\n    }\\n\\n    img {\\n        width: 100%;\\n        max-width: 15em;\\n        height: auto;\\n    }\\n\\n    @media (min-width: 600px) {\\n        section {\\n            padding-top: 4em;\\n        }\\n\\n        ul {\\n            flex-direction: row;\\n            gap: 2em;\\n        }\\n    }\\n</style>\\n\\n"],"names":[],"mappings":"AAsCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CAER,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAC3C,CAEA,iBAAG,CACC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CAAC,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACrG,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,IAAI,0BAA0B,CAAC,CAAC,CAE3C,UAAU,CAAE,IAChB,CAEA,iBAAG,CACC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB,CAEA,iBAAG,CACC,UAAU,CAAE,IAChB,CAEA,kBAAI,CACA,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IACZ,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,sBAAQ,CACJ,WAAW,CAAE,GACjB,CAEA,iBAAG,CACC,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GACT,CACJ"}'
};
const DownloadNow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<section class="svelte-1mwh1xr" data-svelte-h="svelte-19158rv"><h1 class="svelte-1mwh1xr">Download NumberHub</h1> <ul class="svelte-1mwh1xr"><li class="svelte-1mwh1xr"><a href="https://play.google.com/store/apps/details?id=app.myzel394.numberhub"><img${add_attribute("src", GooglePlayBadgeImage, 0)} alt="Get it on Google Play" class="svelte-1mwh1xr"></a></li> <li class="svelte-1mwh1xr"><a href="https://github.com/Myzel394/NumberHub/releases"><img${add_attribute("src", GithubBadgeImage, 0)} alt="Get it on Github" class="svelte-1mwh1xr"></a></li> <li class="svelte-1mwh1xr"><a href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/Myzel394/NumberHub//"><img${add_attribute("src", ObtainiumBadgeImage, 0)} alt="Get it with Obtainium" class="svelte-1mwh1xr"></a></li></ul> </section>`;
});
const App_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg"${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}><rect width="171" height="171" fill="white"></rect><path d="M117.833 89.6614C125.304 89.6614 132.469 92.6292 137.751 97.912C143.034 103.195 146.002 110.36 146.002 117.831C146.002 125.302 143.034 132.467 137.751 137.749C132.469 143.032 125.304 146 117.833 146C110.362 146 103.197 143.032 97.9139 137.749C92.6312 132.467 89.6633 125.302 89.6633 117.831C89.6633 110.36 92.6312 103.195 97.9139 97.912C103.197 92.6292 110.362 89.6614 117.833 89.6614Z" fill="#378648"></path><path d="M101.834 117.831C101.834 115.708 103.553 113.989 105.675 113.989H130.004C132.126 113.989 133.845 115.708 133.845 117.831C133.845 119.953 132.126 121.672 130.004 121.672H105.675C103.553 121.672 101.834 119.953 101.834 117.831Z" fill="#FCFCF7"></path><path d="M113.976 106.307C113.976 104.185 115.695 102.466 117.817 102.466C119.939 102.466 121.658 104.185 121.658 106.307C121.658 108.429 119.939 110.148 117.817 110.148C115.695 110.148 113.976 108.429 113.976 106.307Z" fill="#FCFCF7"></path><path d="M113.976 129.355C113.976 127.232 115.695 125.513 117.817 125.513C119.939 125.513 121.658 127.232 121.658 129.355C121.658 131.477 119.939 133.196 117.817 133.196C115.695 133.196 113.976 131.477 113.976 129.355Z" fill="#FCFCF7"></path><path d="M53.1674 89.6614C60.6383 89.6614 67.8033 92.6292 73.0861 97.912C78.3688 103.195 81.3367 110.36 81.3367 117.831C81.3367 125.302 78.3688 132.467 73.0861 137.749C67.8033 143.032 60.6383 146 53.1674 146C45.6964 146 38.5314 143.032 33.2486 137.749C27.9659 132.467 24.998 125.302 24.998 117.831C24.998 110.36 27.9659 103.195 33.2486 97.912C38.5314 92.6292 45.6964 89.6614 53.1674 89.6614Z" fill="#378648"></path><path d="M40.4224 105.074C41.7668 103.73 43.95 103.73 45.2944 105.074L66.1813 125.961C67.5257 127.306 67.5257 129.489 66.1813 130.833C64.8369 132.178 62.6537 132.178 61.3093 130.833L40.4224 109.947C39.078 108.602 39.078 106.419 40.4224 105.074Z" fill="#FCFCF7"></path><path d="M66.1813 105.074C67.5257 106.419 67.5257 108.602 66.1813 109.947L45.2944 130.833C43.95 132.178 41.7668 132.178 40.4224 130.833C39.078 129.489 39.078 127.306 40.4224 125.961L61.3093 105.074C62.6537 103.73 64.8369 103.73 66.1813 105.074Z" fill="#FCFCF7"></path><path d="M117.833 25C125.304 25 132.469 27.9678 137.751 33.2506C143.034 38.5334 146.002 45.6983 146.002 53.1693C146.002 60.6403 143.034 67.8053 137.751 73.088C132.469 78.3708 125.304 81.3386 117.833 81.3386C110.362 81.3386 103.197 78.3708 97.9139 73.088C92.6312 67.8053 89.6633 60.6403 89.6633 53.1693C89.6633 45.6983 92.6312 38.5334 97.9139 33.2506C103.197 27.9678 110.362 25 117.833 25Z" fill="#378648"></path><path d="M101.834 53.1693C101.834 51.047 103.553 49.328 105.675 49.328H130.004C132.126 49.328 133.845 51.047 133.845 53.1693C133.845 55.2916 132.126 57.0105 130.004 57.0105H105.675C103.553 57.0105 101.834 55.2916 101.834 53.1693Z" fill="#FCFCF7"></path><path d="M53.1674 25C60.6383 25 67.8033 27.9678 73.0861 33.2506C78.3688 38.5334 81.3367 45.6983 81.3367 53.1693C81.3367 60.6403 78.3688 67.8053 73.0861 73.088C67.8033 78.3708 60.6383 81.3386 53.1674 81.3386C45.6964 81.3386 38.5314 78.3708 33.2486 73.088C27.9659 67.8053 24.998 60.6403 24.998 53.1693C24.998 45.6983 27.9659 38.5334 33.2486 33.2506C38.5314 27.9678 45.6964 25 53.1674 25Z" fill="#378648"></path><path d="M37.1689 53.1693C37.1689 51.047 38.8879 49.328 41.0102 49.328H65.3383C67.4606 49.328 69.1795 51.047 69.1795 53.1693C69.1795 55.2916 67.4606 57.0105 65.3383 57.0105H41.0102C38.8879 57.0105 37.1689 55.2916 37.1689 53.1693Z" fill="#FCFCF7"></path><path d="M53.1811 37.164C55.3034 37.164 57.0224 38.8829 57.0224 41.0052V65.3333C57.0224 67.4556 55.3034 69.1746 53.1811 69.1746C51.0588 69.1746 49.3398 67.4556 49.3398 65.3333V41.0052C49.3398 38.8829 51.0588 37.164 53.1811 37.164Z" fill="#FCFCF7"></path></svg>`;
});
const Inverted_arch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { previousColor } = $$props;
  let { nextColor } = $$props;
  if ($$props.previousColor === void 0 && $$bindings.previousColor && previousColor !== void 0)
    $$bindings.previousColor(previousColor);
  if ($$props.nextColor === void 0 && $$bindings.nextColor && nextColor !== void 0)
    $$bindings.nextColor(nextColor);
  return `<svg width="393" height="197" viewBox="0 0 393 195"${add_attribute("fill", previousColor, 0)} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M196.5 0C87.9761 0 0 87.9761 0 196.5H393C393 87.9761 305.024 0 196.5 0Z"${add_attribute("fill", nextColor, 0)}></path></svg>`;
});
const generateRandomExpression = () => {
  const expression = Math.floor(Math.random() * 8);
  switch (expression) {
    case 0: {
      const first_number = Math.floor(Math.random() * 100);
      const second_number = Math.floor(Math.random() * 100);
      return {
        first_number,
        second_number,
        expression: "addition"
      };
    }
    case 1: {
      const first_number = Math.floor(Math.random() * 100);
      const second_number = Math.floor(Math.random() * 100);
      return {
        first_number,
        second_number,
        expression: "subtraction"
      };
    }
    case 2: {
      const first_number = Math.floor(Math.random() * 100);
      const second_number = Math.floor(Math.random() * 100);
      return {
        first_number,
        second_number,
        expression: "multiplication"
      };
    }
    case 3: {
      const first_number = Math.floor(Math.random() * 100);
      const second_number = Math.floor(Math.random() * 100);
      return {
        first_number,
        second_number,
        expression: "division"
      };
    }
    case 4: {
      const first_number = Math.floor(Math.random() * 100);
      const second_number = Math.floor(Math.random() * 10);
      return {
        first_number,
        second_number,
        expression: "exponentiation"
      };
    }
    case 5: {
      const first_number = Math.floor(Math.random() * 100);
      return {
        first_number,
        expression: "root"
      };
    }
    case 6: {
      const first_number = (Math.random() * 2 * Math.PI).toFixed(2);
      return {
        first_number,
        expression: "sine"
      };
    }
    case 7: {
      const first_number = (Math.random() * 2 * Math.PI).toFixed(2);
      return {
        first_number,
        expression: "cosine"
      };
    }
    case 8: {
      const first_number = (Math.random() * 2 * Math.PI).toFixed(2);
      return {
        first_number,
        expression: "tangent"
      };
    }
  }
};
const getFullExpression = (expression) => {
  switch (expression.expression) {
    case "addition":
      return `${expression.first_number} + ${expression.second_number} = ${expression.first_number + expression.second_number}`;
    case "subtraction":
      return `${expression.first_number} - ${expression.second_number} = ${expression.first_number - expression.second_number}`;
    case "multiplication":
      return `${expression.first_number} * ${expression.second_number} = ${expression.first_number * expression.second_number}`;
    case "division":
      return `${expression.first_number} / ${expression.second_number} = ${(expression.first_number / expression.second_number).toFixed(2)}`;
    case "exponentiation":
      return `${expression.first_number} ^ ${expression.second_number} = ${Math.pow(expression.first_number, expression.second_number)}`;
    case "root":
      return `√${expression.first_number} = ${Math.sqrt(expression.first_number).toFixed(2)}`;
    case "sine":
      return `sin(${expression.first_number}) = ${Math.sin(expression.first_number).toFixed(2)}`;
    case "cosine":
      return `cos(${expression.first_number}) = ${Math.cos(expression.first_number).toFixed(2)}`;
    case "tangent":
      return `tan(${expression.first_number}) = ${Math.tan(expression.first_number).toFixed(2)}`;
  }
};
const css$6 = {
  code: '.bg.svelte-199f9ox.svelte-199f9ox{pointer-events:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1}.bg.svelte-199f9ox.svelte-199f9ox::after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),\n            linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),\n            linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1))}@media(min-width: 600px){.bg.svelte-199f9ox.svelte-199f9ox::after{background:linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),\n                linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),\n                linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1)),\n                linear-gradient(to bottom, transparent 80%, rgba(var(--background-null-color), 1))}}.bg.svelte-199f9ox>p.svelte-199f9ox{font-size:.75rem;color:rgba(var(--on-background-null-secondary-color), 0.5);word-break:break-all;line-height:1.7;animation-duration:10s;animation-iteration-count:infinite;animation-timing-function:linear;position:absolute;left:0;top:0;width:100%;height:100%}.bg.svelte-199f9ox>p.anim-1.svelte-199f9ox{animation-name:svelte-199f9ox-anim1}@keyframes svelte-199f9ox-anim1{0%{opacity:0.25}9%{opacity:0.25}10%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-2.svelte-199f9ox{animation-name:svelte-199f9ox-anim2}@keyframes svelte-199f9ox-anim2{0%,9%{opacity:0}10%{opacity:0.25}19%{opacity:0.25}20%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-3.svelte-199f9ox{animation-name:svelte-199f9ox-anim3}@keyframes svelte-199f9ox-anim3{0%,19%{opacity:0}20%{opacity:0.25}29%{opacity:0.25}30%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-4.svelte-199f9ox{animation-name:svelte-199f9ox-anim4}@keyframes svelte-199f9ox-anim4{0%,29%{opacity:0}30%{opacity:0.25}39%{opacity:0.25}40%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-5.svelte-199f9ox{animation-name:svelte-199f9ox-anim5}@keyframes svelte-199f9ox-anim5{0%,39%{opacity:0}40%{opacity:0.25}49%{opacity:0.25}50%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-6.svelte-199f9ox{animation-name:svelte-199f9ox-anim6}@keyframes svelte-199f9ox-anim6{0%,49%{opacity:0}50%{opacity:0.25}59%{opacity:0.25}60%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-7.svelte-199f9ox{animation-name:svelte-199f9ox-anim7}@keyframes svelte-199f9ox-anim7{0%,59%{opacity:0}60%{opacity:0.25}69%{opacity:0.25}70%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-8.svelte-199f9ox{animation-name:svelte-199f9ox-anim8}@keyframes svelte-199f9ox-anim8{0%,69%{opacity:0}70%{opacity:0.25}79%{opacity:0.25}80%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-9.svelte-199f9ox{animation-name:svelte-199f9ox-anim9}@keyframes svelte-199f9ox-anim9{0%,79%{opacity:0}80%{opacity:0.25}89%{opacity:0.25}90%{opacity:0}100%{opacity:0}}.bg.svelte-199f9ox>p.anim-10.svelte-199f9ox{animation-name:svelte-199f9ox-anim10}@keyframes svelte-199f9ox-anim10{0%,89%{opacity:0}90%{opacity:0.25}99%{opacity:0.25}100%{opacity:0}}',
  map: '{"version":3,"file":"StaticBackgroundExpressions.svelte","sources":["StaticBackgroundExpressions.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { generateRandomExpression, getFullExpression } from \\"$lib/random-expression-generator\\";\\nconst AMOUNT = 10;\\nexport let size = 800;\\n<\/script>\\n\\n<div class=\\"bg\\">\\n    {#each Array.from({ length: AMOUNT }) as _, index}\\n        <p class=\\"anim-{(index + 1).toString()}\\">\\n            {Array.from({ length: size }, generateRandomExpression).map(getFullExpression).join(\\" \\")}\\n        </p>\\n    {/each}\\n</div>\\n\\n<style>\\n    .bg {\\n        pointer-events: none;\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        z-index: -1;\\n    }\\n\\n    .bg::after {\\n        content: \\"\\";\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        background: \\n            linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),\\n            linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),\\n            linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1));\\n    }\\n\\n    @media (min-width: 600px) {\\n        .bg::after {\\n            background: \\n                linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),\\n                linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),\\n                linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1)),\\n                linear-gradient(to bottom, transparent 80%, rgba(var(--background-null-color), 1));\\n        }\\n    }\\n\\n    .bg > p {\\n        font-size: .75rem;\\n        color: rgba(var(--on-background-null-secondary-color), 0.5);\\n        word-break: break-all;\\n        line-height: 1.7;\\n\\n        animation-duration: 10s;\\n        animation-iteration-count: infinite;\\n        animation-timing-function: linear;\\n\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n    }\\n\\n    .bg > p.anim-1 {\\n        animation-name: anim1;\\n    }\\n\\n    @keyframes anim1 {\\n        0% {\\n            opacity: 0.25;\\n        }\\n        9% {\\n            opacity: 0.25;\\n        }\\n        10% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-2 {\\n        animation-name: anim2;\\n    }\\n\\n    @keyframes anim2 {\\n        0%, 9% {\\n            opacity: 0;\\n        }\\n        10% {\\n            opacity: 0.25;\\n        }\\n        19% {\\n            opacity: 0.25;\\n        }\\n        20% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-3 {\\n        animation-name: anim3;\\n    }\\n\\n    @keyframes anim3 {\\n        0%, 19% {\\n            opacity: 0;\\n        }\\n        20% {\\n            opacity: 0.25;\\n        }\\n        29% {\\n            opacity: 0.25;\\n        }\\n        30% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-4 {\\n        animation-name: anim4;\\n    }\\n\\n    @keyframes anim4 {\\n        0%, 29% {\\n            opacity: 0;\\n        }\\n        30% {\\n            opacity: 0.25;\\n        }\\n        39% {\\n            opacity: 0.25;\\n        }\\n        40% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-5 {\\n        animation-name: anim5;\\n    }\\n\\n    @keyframes anim5 {\\n        0%, 39% {\\n            opacity: 0;\\n        }\\n        40% {\\n            opacity: 0.25;\\n        }\\n        49% {\\n            opacity: 0.25;\\n        }\\n        50% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-6 {\\n        animation-name: anim6;\\n    }\\n\\n    @keyframes anim6 {\\n        0%, 49% {\\n            opacity: 0;\\n        }\\n        50% {\\n            opacity: 0.25;\\n        }\\n        59% {\\n            opacity: 0.25;\\n        }\\n        60% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-7 {\\n        animation-name: anim7;\\n    }\\n\\n    @keyframes anim7 {\\n        0%, 59% {\\n            opacity: 0;\\n        }\\n        60% {\\n            opacity: 0.25;\\n        }\\n        69% {\\n            opacity: 0.25;\\n        }\\n        70% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-8 {\\n        animation-name: anim8;\\n    }\\n\\n    @keyframes anim8 {\\n        0%, 69% {\\n            opacity: 0;\\n        }\\n        70% {\\n            opacity: 0.25;\\n        }\\n        79% {\\n            opacity: 0.25;\\n        }\\n        80% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-9 {\\n        animation-name: anim9;\\n    }\\n\\n    @keyframes anim9 {\\n        0%, 79% {\\n            opacity: 0;\\n        }\\n        80% {\\n            opacity: 0.25;\\n        }\\n        89% {\\n            opacity: 0.25;\\n        }\\n        90% {\\n            opacity: 0;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n\\n    .bg > p.anim-10 {\\n        animation-name: anim10;\\n    }\\n\\n    @keyframes anim10 {\\n        0%, 89% {\\n            opacity: 0;\\n        }\\n        90% {\\n            opacity: 0.25;\\n        }\\n        99% {\\n            opacity: 0.25;\\n        }\\n        100% {\\n            opacity: 0;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const AMOUNT = 10;
const StaticBackgroundExpressions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 800 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$6);
  return `<div class="bg svelte-199f9ox">${each(Array.from({ length: AMOUNT }), (_, index) => {
    return `<p class="${"anim-" + escape((index + 1).toString(), true) + " svelte-199f9ox"}">${escape(Array.from({ length: size }, generateRandomExpression).map(getFullExpression).join(" "))} </p>`;
  })} </div>`;
});
const css$5 = {
  code: '.wrapper.svelte-7d28ze{position:relative;background:rgb(var(--background-null-color));z-index:-1;width:100%;overflow:hidden}.arch.svelte-7d28ze{display:flex;z-index:10}.arch.svelte-7d28ze>svg{width:100%;height:100%}section.svelte-7d28ze{width:100%;padding:8em 2em 4em 2em}h1.svelte-7d28ze{font-size:3rem;font-size:10cqw;font-family:"Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;font-weight:800;color:rgb(var(--on-background-null-primary-color))}.app-icon.svelte-7d28ze{position:relative;width:10em;height:10em;border-radius:25%;box-shadow:0 .5em 8em .3em rgba(var(--on-background-null-secondary-color), 0.3)}.app-icon.svelte-7d28ze .icon{position:absolute;width:100%;height:100%;border-radius:25%;overflow:hidden}.app-icon.svelte-7d28ze .icon-overlay{mix-blend-mode:overlay}.text.svelte-7d28ze{display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:2em;z-index:2}.description.svelte-7d28ze{color:rgb(var(--on-background-null-secondary-color))}@media(min-width: 600px){h1.svelte-7d28ze{font-size:4rem}.arch.svelte-7d28ze{display:none}}',
  map: `{"version":3,"file":"HeaderSection.svelte","sources":["HeaderSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import AppIcon from \\"$lib/assets/app-icon.svelte\\";\\nimport InvertedArch from \\"$lib/assets/inverted-arch.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport StaticBackgroundExpressions from \\"./StaticBackgroundExpressions.svelte\\";\\nlet percentage = 0;\\nlet _appIcon;\\nlet appIconY = 0;\\nlet appIconSize = 0;\\nconst updateAppIcon = () => {\\n  const { height, y } = _appIcon.getBoundingClientRect();\\n  appIconY = y;\\n  appIconSize = height;\\n};\\nconst onScroll = () => {\\n  const scrollY = window.scrollY;\\n  percentage = Math.min(1, Math.max(0, scrollY / (appIconY + appIconSize)));\\n};\\nfunction easeInOutQuad(x) {\\n  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;\\n}\\n$:\\n  opacity = easeInOutQuad(1 - percentage);\\nonMount(updateAppIcon);\\n<\/script>\\n\\n<svelte:window on:resize={updateAppIcon} on:scroll={onScroll} />\\n<div class=\\"wrapper\\">\\n    <StaticBackgroundExpressions />\\n    <section>\\n        <div class=\\"text\\">\\n            <div class=\\"app-icon\\" id=\\"app-icon\\" bind:this={_appIcon}>\\n                <AppIcon class=\\"icon icon-overlay\\" />\\n                <AppIcon class=\\"icon\\" style=\\"opacity: {opacity}\\" />\\n            </div>\\n            <h1>NumberHub</h1>\\n            <p class=\\"description\\">\\n                The only calculator you'll ever need.\\n            </p>\\n        </div>\\n    </section>\\n    <div class=\\"arch\\">\\n        <InvertedArch\\n            nextColor=\\"rgb(var(--background-color))\\"\\n            previousColor=\\"rgb(var(--background-null-color))\\"\\n        />\\n    </div>\\n</div>\\n\\n<style>\\n    .wrapper {\\n        position: relative;\\n        background: rgb(var(--background-null-color));\\n        z-index: -1;\\n        width: 100%;\\n        overflow: hidden;\\n    }\\n\\n    .arch {\\n        display: flex;\\n        z-index: 10;\\n    }\\n\\n    .arch > :global(svg) {\\n        width: 100%;\\n        height: 100%;\\n    }\\n\\n    section {\\n        width: 100%;\\n        padding: 8em 2em 4em 2em;\\n    }\\n\\n    h1 {\\n        font-size: 3rem;\\n        font-size: 10cqw;\\n        font-family: \\"Montserrat\\", Montserrat, \\"Roboto\\", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\\n        font-weight: 800;\\n        color: rgb(var(--on-background-null-primary-color));\\n    }\\n\\n    .app-icon {\\n        position: relative;\\n        width: 10em;\\n        height: 10em;\\n\\n        border-radius: 25%;\\n        box-shadow: 0 .5em 8em .3em rgba(var(--on-background-null-secondary-color), 0.3);\\n    }\\n\\n    .app-icon :global(.icon) {\\n        position: absolute;\\n        width: 100%;\\n        height: 100%;\\n\\n        border-radius: 25%;\\n        overflow: hidden;\\n    }\\n\\n    .app-icon :global(.icon-overlay) {\\n        mix-blend-mode: overlay;\\n    }\\n\\n    .text {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        row-gap: 2em;\\n        z-index: 2;\\n    }\\n\\n    .description {\\n        color: rgb(var(--on-background-null-secondary-color));\\n    }\\n\\n    @media (min-width: 600px) {\\n        h1 {\\n            font-size: 4rem;\\n        }\\n\\n        .arch {\\n            display: none;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAiDI,sBAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,IAAI,IAAI,uBAAuB,CAAC,CAAC,CAC7C,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,MACd,CAEA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,EACb,CAEA,mBAAK,CAAW,GAAK,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CAEA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GACzB,CAEA,gBAAG,CACC,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CAAC,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACrG,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,IAAI,kCAAkC,CAAC,CACtD,CAEA,uBAAU,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,IAAI,oCAAoC,CAAC,CAAC,CAAC,GAAG,CACnF,CAEA,uBAAS,CAAS,KAAO,CACrB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CAEA,uBAAS,CAAS,aAAe,CAC7B,cAAc,CAAE,OACpB,CAEA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,CACb,CAEA,0BAAa,CACT,KAAK,CAAE,IAAI,IAAI,oCAAoC,CAAC,CACxD,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,gBAAG,CACC,SAAS,CAAE,IACf,CAEA,mBAAM,CACF,OAAO,CAAE,IACb,CACJ"}`
};
function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
const HeaderSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opacity;
  let percentage = 0;
  let _appIcon;
  $$result.css.add(css$5);
  opacity = easeInOutQuad(1 - percentage);
  return ` <div class="wrapper svelte-7d28ze">${validate_component(StaticBackgroundExpressions, "StaticBackgroundExpressions").$$render($$result, {}, {}, {})} <section class="svelte-7d28ze"><div class="text svelte-7d28ze"><div class="app-icon svelte-7d28ze" id="app-icon"${add_attribute("this", _appIcon, 0)}>${validate_component(App_icon, "AppIcon").$$render($$result, { class: "icon icon-overlay" }, {}, {})} ${validate_component(App_icon, "AppIcon").$$render(
    $$result,
    {
      class: "icon",
      style: "opacity: " + opacity
    },
    {},
    {}
  )}</div> <h1 class="svelte-7d28ze" data-svelte-h="svelte-1of2p7m">NumberHub</h1> <p class="description svelte-7d28ze" data-svelte-h="svelte-t4e7we">The only calculator you&#39;ll ever need.</p></div></section> <div class="arch svelte-7d28ze">${validate_component(Inverted_arch, "InvertedArch").$$render(
    $$result,
    {
      nextColor: "rgb(var(--background-color))",
      previousColor: "rgb(var(--background-null-color))"
    },
    {},
    {}
  )}</div> </div>`;
});
const slide1 = "/_app/immutable/assets/slide1.D6SmDmAx.png";
const slide2 = "/_app/immutable/assets/slide2.C3NayiWa.png";
const slide3 = "/_app/immutable/assets/slide3.BJ8zXOXu.png";
const slide4 = "/_app/immutable/assets/slide4.BBPXQ1yQ.png";
const slide5 = "/_app/immutable/assets/slide5.0ak1sSXH.png";
const css$4 = {
  code: 'section.svelte-357lxc.svelte-357lxc{display:flex;flex-direction:column;gap:2em;padding:0;width:100%;background:rgb(var(--background-color))}h1.svelte-357lxc.svelte-357lxc{font-size:1.8rem;font-family:"Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;font-weight:600;text-align:center;color:rgb(var(--on-background-primary-color));margin-top:-3em}a.svelte-357lxc.svelte-357lxc{display:block;text-decoration:none}.carousel.svelte-357lxc.svelte-357lxc{display:flex;overflow:auto;scroll-snap-type:x mandatory;background:rgb(var(--background-color));padding:5em 0}.carousel.svelte-357lxc>a.svelte-357lxc{display:flex;justify-content:center}.carousel.svelte-357lxc>a.svelte-357lxc,.carousel.svelte-357lxc>div.svelte-357lxc{scroll-snap-align:center;width:60%;flex-shrink:0}.carousel.svelte-357lxc img.svelte-357lxc{width:100%;object-fit:contain;border-radius:2em}dialog.svelte-357lxc.svelte-357lxc{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:10}dialog.svelte-357lxc>a.svelte-357lxc{animation:svelte-357lxc-scaleIn 0.35s cubic-bezier(0.33, 1, 0.68, 1) forwards}@keyframes svelte-357lxc-scaleIn{from{transform:scale(0.5)}to{transform:scale(1)}}dialog.svelte-357lxc.svelte-357lxc:not(:target){display:none}@media(min-width: 600px){section.svelte-357lxc.svelte-357lxc{padding-top:5em}.carousel.svelte-357lxc img.svelte-357lxc{width:fit-content;margin:0 auto;max-height:40em}}@media(min-width: 1200px){.carousel.svelte-357lxc>a.svelte-357lxc,.carousel.svelte-357lxc>div.svelte-357lxc{width:30%}}',
  map: '{"version":3,"file":"ScreenshotsSection.svelte","sources":["ScreenshotsSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import slide1 from \\"$lib/assets/screenshots/slide1.png\\";\\nimport slide2 from \\"$lib/assets/screenshots/slide2.png\\";\\nimport slide3 from \\"$lib/assets/screenshots/slide3.png\\";\\nimport slide4 from \\"$lib/assets/screenshots/slide4.png\\";\\nimport slide5 from \\"$lib/assets/screenshots/slide5.png\\";\\nimport { onMount } from \\"svelte\\";\\nconst images = [slide1, slide2, slide3, slide4, slide5];\\nlet _carousel;\\nlet percentages = images.map(() => 1);\\nconst onScroll = () => {\\n  const imageWidth = _carousel.scrollWidth / (images.length + 2);\\n  const scrollAmount = _carousel.scrollLeft;\\n  percentages = images.map((_, index) => {\\n    const center = (index + 1) * imageWidth - imageWidth * 0.3;\\n    const distance = Math.abs(center - scrollAmount);\\n    const percentage = Math.max(0, Math.min(1, distance / imageWidth));\\n    return 1 - percentage;\\n  });\\n};\\nonMount(() => {\\n  _carousel.scrollTo({ left: _carousel.scrollWidth / (images.length + 2) * 2, behavior: \\"smooth\\" });\\n});\\nconst getImageID = (image) => image.split(\\"/\\").pop().split(\\".\\")[0];\\n<\/script>\\n\\n<section>\\n    <h1>Using NumberHub</h1>\\n\\n    <div\\n        class=\\"carousel\\"\\n        bind:this={_carousel}\\n        on:scroll={onScroll}\\n    >\\n        <div />\\n        {#each images as image, index}\\n            <a href=\\"#{getImageID(image)}\\">\\n                <img\\n                    src={image}\\n                    alt=\\"Screenshot of NumberHub\\"\\n                    style:transform=\\"scale({0.8 + 0.2 * (percentages[index])})\\"\\n                    style:box-shadow=\\"0 0.8em 1.5em rgba(0, 0, 0, {0.2 * percentages[index]})\\"\\n                />\\n            </a>\\n            <dialog id=\\"{getImageID(image)}\\">\\n                <a href=\\"#!\\">\\n                    <img\\n                        src={image}\\n                        alt=\\"Screenshot of NumberHub\\"\\n                    />\\n                </a>\\n            </dialog>\\n        {/each}\\n        <div />\\n    </div>\\n    <div class=\\"space\\" />\\n</section>\\n\\n<style>\\n    section {\\n        display: flex;\\n        flex-direction: column;\\n        gap: 2em;\\n\\n        padding: 0;\\n        width: 100%;\\n        background: rgb(var(--background-color));\\n    }\\n\\n    h1 {\\n        font-size: 1.8rem;\\n        font-family: \\"Montserrat\\", Montserrat, \\"Roboto\\", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\\n        font-weight: 600;\\n        text-align: center;\\n        color: rgb(var(--on-background-primary-color));\\n\\n        margin-top: -3em;\\n    }\\n\\n    a {\\n        display: block;\\n        text-decoration: none;\\n    }\\n\\n    .carousel {\\n        display: flex;\\n        overflow: auto;\\n        scroll-snap-type: x mandatory;\\n\\n        background: rgb(var(--background-color));\\n\\n        padding: 5em 0;\\n    }\\n\\n    .carousel > a {\\n        display: flex;\\n        justify-content: center;\\n    }\\n\\n    .carousel > a, .carousel > div {\\n        scroll-snap-align: center;\\n        width: 60%;\\n        flex-shrink: 0;\\n    }\\n\\n    .carousel img {\\n        width: 100%;\\n\\n        object-fit: contain;\\n        border-radius: 2em;\\n    }\\n\\n    dialog {\\n        position: fixed;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        background: rgba(0, 0, 0, 0.5);\\n\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        z-index: 10;\\n    }\\n\\n    dialog > a {\\n        animation: scaleIn 0.35s cubic-bezier(0.33, 1, 0.68, 1) forwards;\\n    }\\n\\n    @keyframes scaleIn {\\n        from {\\n            transform: scale(0.5);\\n        }\\n        to {\\n            transform: scale(1);\\n        }\\n    }\\n\\n    dialog:not(:target) { display: none; }\\n\\n    @media (min-width: 600px) {\\n        section {\\n            padding-top: 5em;\\n        }\\n\\n        .carousel img {\\n            width: fit-content;\\n            margin: 0 auto;\\n            max-height: 40em;\\n        }\\n    }\\n\\n    @media (min-width: 1200px) {\\n        .carousel > a, .carousel > div {\\n            width: 30%;\\n        }\\n    }\\n</style>\\n\\n"],"names":[],"mappings":"AA0DI,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CAER,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAC3C,CAEA,8BAAG,CACC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CAAC,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACrG,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,IAAI,6BAA6B,CAAC,CAAC,CAE9C,UAAU,CAAE,IAChB,CAEA,6BAAE,CACE,OAAO,CAAE,KAAK,CACd,eAAe,CAAE,IACrB,CAEA,qCAAU,CACN,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,IAAI,CACd,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAE7B,UAAU,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAAC,CAExC,OAAO,CAAE,GAAG,CAAC,CACjB,CAEA,uBAAS,CAAG,eAAE,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB,CAEA,uBAAS,CAAG,eAAC,CAAE,uBAAS,CAAG,iBAAI,CAC3B,iBAAiB,CAAE,MAAM,CACzB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,CACjB,CAEA,uBAAS,CAAC,iBAAI,CACV,KAAK,CAAE,IAAI,CAEX,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GACnB,CAEA,kCAAO,CACH,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAE9B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CAEnB,OAAO,CAAE,EACb,CAEA,oBAAM,CAAG,eAAE,CACP,SAAS,CAAE,qBAAO,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QAC5D,CAEA,WAAW,qBAAQ,CACf,IAAK,CACD,SAAS,CAAE,MAAM,GAAG,CACxB,CACA,EAAG,CACC,SAAS,CAAE,MAAM,CAAC,CACtB,CACJ,CAEA,kCAAM,KAAK,OAAO,CAAE,CAAE,OAAO,CAAE,IAAM,CAErC,MAAO,YAAY,KAAK,CAAE,CACtB,mCAAQ,CACJ,WAAW,CAAE,GACjB,CAEA,uBAAS,CAAC,iBAAI,CACV,KAAK,CAAE,WAAW,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,IAChB,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,uBAAS,CAAG,eAAC,CAAE,uBAAS,CAAG,iBAAI,CAC3B,KAAK,CAAE,GACX,CACJ"}'
};
const ScreenshotsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  let _carousel;
  let percentages = images.map(() => 1);
  const getImageID = (image) => image.split("/").pop().split(".")[0];
  $$result.css.add(css$4);
  return `<section class="svelte-357lxc"><h1 class="svelte-357lxc" data-svelte-h="svelte-r9oe66">Using NumberHub</h1> <div class="carousel svelte-357lxc"${add_attribute("this", _carousel, 0)}><div class="svelte-357lxc"></div> ${each(images, (image, index) => {
    return `<a href="${"#" + escape(getImageID(image), true)}" class="svelte-357lxc"><img${add_attribute("src", image, 0)} alt="Screenshot of NumberHub" class="svelte-357lxc"${add_styles({
      "transform": `scale(${0.8 + 0.2 * percentages[index]})`,
      "box-shadow": `0 0.8em 1.5em rgba(0, 0, 0, ${0.2 * percentages[index]})`
    })}></a> <dialog${add_attribute("id", getImageID(image), 0)} class="svelte-357lxc"><a href="#!" class="svelte-357lxc"><img${add_attribute("src", image, 0)} alt="Screenshot of NumberHub" class="svelte-357lxc"></a> </dialog>`;
  })} <div class="svelte-357lxc"></div></div> <div class="space"></div> </section>`;
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    return null;
  }
  const data = getIconData(iconName);
  if (!data) {
    return null;
  }
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const css$3 = {
  code: ".wrapper.svelte-1wed0rt{display:flex;flex-direction:column;align-items:center;gap:0.6em;padding:1.5em;background:rgb(var(--surface-tint-color));border-radius:2em;max-width:35em;margin:0 auto}.title.svelte-1wed0rt{display:flex;align-items:center;justify-content:center;gap:.5em;color:rgb(var(--on-surface-tint-primary-color))}.title.svelte-1wed0rt>.icon{width:1.5em;height:1.5em}h4.svelte-1wed0rt{font-size:1.6rem;font-weight:600}dd.svelte-1wed0rt{font-size:1rem;line-height:1.4;color:rgb(var(--on-surface-tint-secondary-color))}@media(min-width: 1200px){.wrapper.svelte-1wed0rt{display:grid;grid-template-columns:1fr 1fr;gap:1em}}",
  map: '{"version":3,"file":"InfoBox.svelte","sources":["InfoBox.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Icon from \\"@iconify/svelte\\";\\nexport let icon;\\nexport let title;\\nexport let text;\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n    <dt class=\\"title\\">\\n        <Icon icon=\\"{icon}\\" class=\\"icon\\" />\\n        <h4>{title}</h4>\\n    </dt>\\n    <dd>\\n        {text}\\n    </dd>\\n</div>\\n\\n<style>\\n.wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 0.6em;\\n\\n    padding: 1.5em;\\n    background: rgb(var(--surface-tint-color));\\n    border-radius: 2em;\\n\\n    max-width: 35em;\\n    margin: 0 auto;\\n}\\n\\n.title {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: .5em;\\n\\n    color: rgb(var(--on-surface-tint-primary-color));\\n}\\n\\n.title > :global(.icon) {\\n    width: 1.5em;\\n    height: 1.5em;\\n}\\n\\nh4 {\\n    font-size: 1.6rem;\\n    font-weight: 600;\\n}\\n\\ndd {\\n    font-size: 1rem;\\n    line-height: 1.4;\\n    color: rgb(var(--on-surface-tint-secondary-color));\\n}\\n\\n@media (min-width: 1200px) {\\n    .wrapper {\\n        display: grid;\\n        grid-template-columns: 1fr 1fr;\\n        gap: 1em;\\n    }\\n}\\n</style>\\n\\n"],"names":[],"mappings":"AAiBA,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KAAK,CAEV,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,IAAI,oBAAoB,CAAC,CAAC,CAC1C,aAAa,CAAE,GAAG,CAElB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IACd,CAEA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IAAI,CAET,KAAK,CAAE,IAAI,IAAI,+BAA+B,CAAC,CACnD,CAEA,qBAAM,CAAW,KAAO,CACpB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ,CAEA,iBAAG,CACC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACjB,CAEA,iBAAG,CACC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,IAAI,iCAAiC,CAAC,CACrD,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,GACT,CACJ"}'
};
const InfoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { title } = $$props;
  let { text } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `<div class="wrapper svelte-1wed0rt"><dt class="title svelte-1wed0rt">${validate_component(Icon, "Icon").$$render($$result, { icon, class: "icon" }, {}, {})} <h4 class="svelte-1wed0rt">${escape(title)}</h4></dt> <dd class="svelte-1wed0rt">${escape(text)}</dd> </div>`;
});
const css$2 = {
  code: 'section.svelte-1rkod0z{display:flex;flex-direction:column;gap:4em;width:100%;padding:0 2em 2em 2em;position:relative;background:rgb(var(--surface-color))}h1.svelte-1rkod0z{font-size:1.8rem;font-family:"Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;font-weight:600;text-align:center;color:rgb(var(--on-surface-primary-color));margin-top:-3em}dl.svelte-1rkod0z{background:rgb(var(--surface-color));display:flex;flex-direction:column;gap:2em}@media(min-width: 600px){section.svelte-1rkod0z{padding-top:4em}}@media(min-width: 1200px){dl.svelte-1rkod0z{max-width:80em;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:1em;justify-content:center;align-items:stretch}}',
  map: '{"version":3,"file":"WhySection.svelte","sources":["WhySection.svelte"],"sourcesContent":["<script>\\n\\timport InfoBox from \\"./InfoBox.svelte\\";\\n\\n<\/script>\\n<section>\\n    <h1>Why NumberHub</h1>\\n\\n    <dl>\\n        <InfoBox\\n            title=\\"No ads\\"\\n            text=\\"NumberHub is completely free to use. There are no ads and no trackers at all. Just a calculator.\\"\\n            icon=\\"iconoir:heart-solid\\"\\n        />\\n        <InfoBox\\n            title=\\"Customizable\\"\\n            text=\\"Customize the look and feel of NumberHub to your liking. You decide how NumberHub looks.\\"\\n            icon=\\"fa-solid:paint-brush\\"\\n        />\\n        <InfoBox\\n            title=\\"Got an old phone?\\"\\n            text=\\"NumberHub uses little resources and works on old phones up to Android 5.0\\"\\n            icon=\\"material-symbols:android\\"\\n        />\\n        <InfoBox\\n            title=\\"Open Source\\"\\n            text=\\"You can build your own version of NumberHub. The source code is available on GitHub. Contributions are welcome.\\"\\n            icon=\\"raphael:opensource\\"\\n        />\\n    </dl>\\n    <div class=\\"space\\" />\\n</section>\\n\\n<style>\\n    section {\\n        display: flex;\\n        flex-direction: column;\\n        gap: 4em;\\n\\n        width: 100%;\\n        padding: 0 2em 2em 2em;\\n        position: relative;\\n\\n        background: rgb(var(--surface-color));\\n    }\\n\\n    h1 {\\n        font-size: 1.8rem;\\n        font-family: \\"Montserrat\\", Montserrat, \\"Roboto\\", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\\n        font-weight: 600;\\n        text-align: center;\\n        color: rgb(var(--on-surface-primary-color));\\n\\n        margin-top: -3em;\\n    }\\n\\n    dl {\\n        background: rgb(var(--surface-color));\\n        display: flex;\\n        flex-direction: column;\\n        gap: 2em;\\n    }\\n\\n    @media (min-width: 600px) {\\n        section {\\n            padding-top: 4em;\\n        }\\n    }\\n\\n    @media (min-width: 1200px) {\\n        dl {\\n            max-width: 80em;\\n            margin: 0 auto;\\n\\n            display: grid;\\n            grid-template-columns: 1fr 1fr;\\n            gap: 1em;\\n            justify-content: center;\\n            align-items: stretch;\\n        }\\n    }\\n</style>\\n\\n"],"names":[],"mappings":"AAiCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CAER,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtB,QAAQ,CAAE,QAAQ,CAElB,UAAU,CAAE,IAAI,IAAI,eAAe,CAAC,CACxC,CAEA,iBAAG,CACC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CAAC,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACrG,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,IAAI,0BAA0B,CAAC,CAAC,CAE3C,UAAU,CAAE,IAChB,CAEA,iBAAG,CACC,UAAU,CAAE,IAAI,IAAI,eAAe,CAAC,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACT,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,sBAAQ,CACJ,WAAW,CAAE,GACjB,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,iBAAG,CACC,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IAAI,CAEd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,OACjB,CACJ"}'
};
const WhySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-1rkod0z"><h1 class="svelte-1rkod0z" data-svelte-h="svelte-pbp96s">Why NumberHub</h1> <dl class="svelte-1rkod0z">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      title: "No ads",
      text: "NumberHub is completely free to use. There are no ads and no trackers at all. Just a calculator.",
      icon: "iconoir:heart-solid"
    },
    {},
    {}
  )}${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      title: "Customizable",
      text: "Customize the look and feel of NumberHub to your liking. You decide how NumberHub looks.",
      icon: "fa-solid:paint-brush"
    },
    {},
    {}
  )}${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      title: "Got an old phone?",
      text: "NumberHub uses little resources and works on old phones up to Android 5.0",
      icon: "material-symbols:android"
    },
    {},
    {}
  )}${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      title: "Open Source",
      text: "You can build your own version of NumberHub. The source code is available on GitHub. Contributions are welcome.",
      icon: "raphael:opensource"
    },
    {},
    {}
  )}</dl> <div class="space"></div> </section>`;
});
const css$1 = {
  code: "main.svelte-10988dl{display:flex;flex-direction:column;align-items:center;justify-content:center}.arch.svelte-10988dl{display:flex}.arch.svelte-10988dl>svg{width:100%;height:100%}",
  map: '{"version":3,"file":"MainPage.svelte","sources":["MainPage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Arch from \\"$lib/assets/arch.svelte\\";\\nimport DownloadNow from \\"./DownloadNow.svelte\\";\\nimport HeaderSection from \\"./HeaderSection.svelte\\";\\nimport ScreenshotsSection from \\"./ScreenshotsSection.svelte\\";\\nimport WhySection from \\"./WhySection.svelte\\";\\n<\/script>\\n\\n<main>\\n    <HeaderSection />\\n    <ScreenshotsSection />\\n    <div class=\\"arch\\">\\n        <Arch\\n            previousColor=\\"rgb(var(--background-color))\\"\\n            nextColor=\\"rgb(var(--surface-color))\\"\\n        />\\n    </div>\\n    <WhySection />\\n    <div class=\\"arch\\">\\n        <Arch\\n            previousColor=\\"rgb(var(--surface-color))\\"\\n            nextColor=\\"rgb(var(--background-color))\\"\\n        />\\n    </div>\\n\\n    <DownloadNow />\\n</main>\\n\\n<style>\\n    main {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n\\n    .arch {\\n        display: flex;\\n    }\\n\\n    .arch > :global(svg) {\\n        width: 100%;\\n        height: 100%;\\n    }\\n</style>\\n"],"names":[],"mappings":"AA4BI,mBAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,oBAAM,CACF,OAAO,CAAE,IACb,CAEA,oBAAK,CAAW,GAAK,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ"}'
};
const MainPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-10988dl">${validate_component(HeaderSection, "HeaderSection").$$render($$result, {}, {}, {})} ${validate_component(ScreenshotsSection, "ScreenshotsSection").$$render($$result, {}, {}, {})} <div class="arch svelte-10988dl">${validate_component(Arch, "Arch").$$render(
    $$result,
    {
      previousColor: "rgb(var(--background-color))",
      nextColor: "rgb(var(--surface-color))"
    },
    {},
    {}
  )}</div> ${validate_component(WhySection, "WhySection").$$render($$result, {}, {}, {})} <div class="arch svelte-10988dl">${validate_component(Arch, "Arch").$$render(
    $$result,
    {
      previousColor: "rgb(var(--surface-color))",
      nextColor: "rgb(var(--background-color))"
    },
    {},
    {}
  )}</div> ${validate_component(DownloadNow, "DownloadNow").$$render($$result, {}, {}, {})} </main>`;
});
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<meta name="theme-color" content="#ebaa47">`;
});
const css = {
  code: "html{background:rgb(var(--background-color));color:rgb(var(--on-background-primary-color));font-family:'Roboto', Roboto, Helvetica Neue, Helvetica, Arial, sans-serif}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport MainPage from \\"$lib/components/pages/routes/main/MainPage.svelte\\";\\n    import \\"$lib/assets/globals.css\\";\\n\\timport Theme from \\"$lib/components/theme.svelte\\";\\n<\/script>\\n\\n<svelte:head>\\n    <Theme />\\n</svelte:head>\\n<MainPage />\\n\\n<style>\\n:global(html) {\\n    /* --background-null-color: 19, 22, 19; */\\n    /* --background-color: 25, 28, 25; */\\n    /* --surface-color: 29, 33, 29; */\\n    /* --surface-tint-color: 65, 73, 64; */\\n    /**/\\n    /* --on-background-null-primary-color: 255, 255, 255; */\\n    /* --on-background-null-secondary-color: 121, 180, 171; */\\n    /**/\\n    /* --on-background-primary-color: 218, 240, 218; */\\n    /* --on-background-secondary-color: 121, 180, 171; */\\n    /**/\\n    /* --on-surface-primary-color: 180, 214, 180; */\\n    /* --on-surface-secondary-color: 121, 180, 171; */\\n    /**/\\n    /* --on-surface-tint-primary-color: 221, 235, 219; */\\n    /* --on-surface-tint-secondary-color: 192, 205, 190; */\\n\\n    background: rgb(var(--background-color));\\n    color: rgb(var(--on-background-primary-color));\\n    font-family: 'Roboto', Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\\n}\\n</style>\\n"],"names":[],"mappings":"AAYQ,IAAM,CAkBV,UAAU,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAAC,CACxC,KAAK,CAAE,IAAI,IAAI,6BAA6B,CAAC,CAAC,CAC9C,WAAW,CAAE,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UACrE"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-dt2mx8_START -->${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}<!-- HEAD_svelte-dt2mx8_END -->`, ""} ${validate_component(MainPage, "MainPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
