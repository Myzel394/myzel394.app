<script lang="ts">
import AppIcon from "$lib/assets/app-icon.svelte";
	import Arch from "$lib/assets/arch.svelte";
	import InvertedArch from "$lib/assets/inverted-arch.svelte";
import {getFullExpression, generateRandomExpression, type RandomExpression} from "$lib/random-expression-generator";
	import { onMount } from "svelte";

const SIZE = 200;
let expressions: RandomExpression[] = Array.from({ length: SIZE }, generateRandomExpression);
$: bgText = expressions.map(getFullExpression).join(" ");

const update = () => {
    expressions = Array.from({ length: SIZE }, generateRandomExpression);
};

 let clear: NodeJS.Timeout
 $: {
	 clearInterval(clear)
	 clear = setInterval(update, 800);
 }

///// 
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
    <div class="bg">
        <p>
            {bgText}
        </p>
    </div>
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
        overflow: hidden;
    }

    .app-icon :global(.icon) {
        position: absolute;
        width: 100%;
        height: 100%;
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

    .bg {
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .bg::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: 
            linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),
            linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),
            linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1));
    }

    .bg > p {
        font-size: .75rem;
        color: rgba(var(--on-background-null-secondary-color), 0.5);
        word-break: break-all;
        line-height: 1.7;
        opacity: 0.25;

    }
</style>
