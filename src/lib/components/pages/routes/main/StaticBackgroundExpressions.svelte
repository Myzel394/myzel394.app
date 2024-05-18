<script lang="ts">
import { generateRandomExpression, getFullExpression } from "$lib/random-expression-generator";

const AMOUNT = 10;

export let size = 800;
</script>

<div class="bg">
    {#each Array.from({ length: AMOUNT }) as _, index}
        <p class="anim-{(index + 1).toString()}">
            {Array.from({ length: size }, generateRandomExpression).map(getFullExpression).join(" ")}
        </p>
    {/each}
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

    @media (min-width: 600px) {
        .bg::after {
            background: 
                linear-gradient(to top, transparent 80%, rgba(var(--background-null-color), 1)),
                linear-gradient(to right, transparent 92%, rgba(var(--background-null-color), 1)),
                linear-gradient(to left, transparent 92%, rgba(var(--background-null-color), 1)),
                linear-gradient(to bottom, transparent 80%, rgba(var(--background-null-color), 1));
        }
    }

    .bg > p {
        font-size: .75rem;
        color: rgba(var(--on-background-null-secondary-color), 0.5);
        word-break: break-all;
        line-height: 1.7;

        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .bg > p.anim-1 {
        animation-name: anim1;
    }

    @keyframes anim1 {
        0% {
            opacity: 0.25;
        }
        9% {
            opacity: 0.25;
        }
        10% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-2 {
        animation-name: anim2;
    }

    @keyframes anim2 {
        0%, 9% {
            opacity: 0;
        }
        10% {
            opacity: 0.25;
        }
        19% {
            opacity: 0.25;
        }
        20% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-3 {
        animation-name: anim3;
    }

    @keyframes anim3 {
        0%, 19% {
            opacity: 0;
        }
        20% {
            opacity: 0.25;
        }
        29% {
            opacity: 0.25;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-4 {
        animation-name: anim4;
    }

    @keyframes anim4 {
        0%, 29% {
            opacity: 0;
        }
        30% {
            opacity: 0.25;
        }
        39% {
            opacity: 0.25;
        }
        40% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-5 {
        animation-name: anim5;
    }

    @keyframes anim5 {
        0%, 39% {
            opacity: 0;
        }
        40% {
            opacity: 0.25;
        }
        49% {
            opacity: 0.25;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-6 {
        animation-name: anim6;
    }

    @keyframes anim6 {
        0%, 49% {
            opacity: 0;
        }
        50% {
            opacity: 0.25;
        }
        59% {
            opacity: 0.25;
        }
        60% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-7 {
        animation-name: anim7;
    }

    @keyframes anim7 {
        0%, 59% {
            opacity: 0;
        }
        60% {
            opacity: 0.25;
        }
        69% {
            opacity: 0.25;
        }
        70% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-8 {
        animation-name: anim8;
    }

    @keyframes anim8 {
        0%, 69% {
            opacity: 0;
        }
        70% {
            opacity: 0.25;
        }
        79% {
            opacity: 0.25;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-9 {
        animation-name: anim9;
    }

    @keyframes anim9 {
        0%, 79% {
            opacity: 0;
        }
        80% {
            opacity: 0.25;
        }
        89% {
            opacity: 0.25;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .bg > p.anim-10 {
        animation-name: anim10;
    }

    @keyframes anim10 {
        0%, 89% {
            opacity: 0;
        }
        90% {
            opacity: 0.25;
        }
        99% {
            opacity: 0.25;
        }
        100% {
            opacity: 0;
        }
    }
</style>
