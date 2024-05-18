<script lang="ts">
	import { generateRandomExpression, getFullExpression, type RandomExpression } from "$lib/random-expression-generator";

export let size = 200;
let expressions: RandomExpression[] = Array.from({ length: size }, generateRandomExpression);
$: bgText = expressions.map(getFullExpression).join(" ");

const update = () => {
    expressions = Array.from({ length: size }, generateRandomExpression);
};

 let clear: NodeJS.Timeout
 $: {
	 clearInterval(clear)
	 clear = setInterval(update, 800);
 }
</script>

<div class="bg">
    <p>
        {bgText}
    </p>
</div>

<style>
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
