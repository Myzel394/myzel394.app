<script lang="ts">
import AppIcon from "$lib/assets/app-icon.svelte";
import {getFullExpression, generateRandomExpression, type RandomExpression} from "$lib/random-expression-generator";

const SIZE = 140;
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
</script>

<section class="wrapper">
    <div class="bg">
        <p>
            {bgText}
        </p>
    </div>
    <div class="text">
        <AppIcon class="icon" />
        <h1>NumberHub</h1>
        <p>
            The only calculator you'll ever need.
        </p>
    </div>
</section>

<style>
    section {
        width: 100%;
        padding: 8em 2em;
        background: rgb(var(--background-null-color));
        z-index: -1;
        position: relative;
    }

    h1 {
        font-size: 3rem;
        font-size: 10cqw;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 800;
    }

    .wrapper :global(.icon) {
        width: 10em;
        height: 10em;
        border-radius: 25%;
        box-shadow: 0 .5em 15em .2em rgba(var(--on-background-null-secondary-color), 0.3);
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
        overflow: hidden;
        opacity: 0.5;
    }

    .bg::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(var(--background-null-color), 1));
    }

    .bg p {
        font-size: .75rem;
        color: rgba(var(--on-background-null-secondary-color), 0.5);
        word-break: break-all;
        line-height: 1.7;
    }
</style>
