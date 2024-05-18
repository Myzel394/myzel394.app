<script lang="ts">
import AppIcon from "$lib/assets/app-icon.svelte";
import InvertedArch from "$lib/assets/inverted-arch.svelte";
import { onMount } from "svelte";
import StaticBackgroundExpressions from "./StaticBackgroundExpressions.svelte";

let percentage = 0;
let _appIcon: HTMLDivElement;
let appIconY = 0;
let appIconSize = 0;

const updateAppIcon = () => {
    const { height, y } = _appIcon.getBoundingClientRect();
    appIconY = y
    appIconSize = height;
};

const onScroll = () => {
    const scrollY = window.scrollY;
    percentage = Math.min(1, Math.max(0, scrollY / (appIconY + appIconSize)));
};

function easeInOutQuad(x: number): number {
return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

$: opacity = easeInOutQuad(1 - percentage);

onMount(updateAppIcon);
</script>

<svelte:window on:resize={updateAppIcon} on:scroll={onScroll} />
<div class="wrapper">
    <StaticBackgroundExpressions />
    <section>
        <div class="text">
            <div class="app-icon" id="app-icon" bind:this={_appIcon}>
                <AppIcon class="icon icon-overlay" />
                <AppIcon class="icon" style="opacity: {opacity}" />
            </div>
            <h1>NumberHub</h1>
            <p>
                The only calculator you'll ever need.
            </p>
        </div>
    </section>
    <div class="arch">
        <InvertedArch
            nextColor="rgb(var(--background-color))"
            previousColor="rgb(var(--background-null-color))"
        />
    </div>
</div>

<style>
    .wrapper {
        position: relative;
        background: rgb(var(--background-null-color));
        z-index: -1;
        width: 100%;
        overflow: hidden;
    }

    .arch {
        display: flex;
        z-index: 10;
    }

    .arch > :global(svg) {
        width: 100%;
        height: 100%;
    }

    section {
        width: 100%;
        padding: 8em 2em 4em 2em;
    }

    h1 {
        font-size: 3rem;
        font-size: 10cqw;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 800;
    }

    .app-icon {
        position: relative;
        width: 10em;
        height: 10em;

        border-radius: 25%;
        box-shadow: 0 .5em 8em .3em rgba(var(--on-background-null-secondary-color), 0.3);
    }

    .app-icon :global(.icon) {
        position: absolute;
        width: 100%;
        height: 100%;

        border-radius: 25%;
        overflow: hidden;
    }

    .app-icon :global(.icon-overlay) {
        mix-blend-mode: overlay;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 2em;
        z-index: 2;
    }


    @media (min-width: 600px) {
        h1 {
            font-size: 4rem;
        }

        .arch {
            display: none;
        }
    }
</style>
