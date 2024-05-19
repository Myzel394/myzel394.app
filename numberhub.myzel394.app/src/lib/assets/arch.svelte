<script>
export let previousColor;
export let nextColor;
</script>

<svg width="2166" height="1080" viewBox="0 0 2166 1080" style="background: {nextColor}; z-index: -2" xmlns="http://www.w3.org/2000/svg">
<path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2165.51 1080C2164.02 483.278 1679.83 0 1082.76 0H2165.51V1080H2165.51ZM0.00292969 1080V0H1082.76C485.688 0 1.49261 483.278 0.00636045 1080H0.00292969Z"
    fill="{previousColor}"
/>
</svg>

<style>
@media (min-width: 600px) {
    svg {
        display: none;
    }
}
</style>

