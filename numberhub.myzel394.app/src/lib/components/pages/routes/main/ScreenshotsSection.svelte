<script lang="ts">
    import slide1 from "$lib/assets/screenshots/slide1.png";
    import slide2 from "$lib/assets/screenshots/slide2.png";
    import slide3 from "$lib/assets/screenshots/slide3.png";
    import slide4 from "$lib/assets/screenshots/slide4.png";
    import slide5 from "$lib/assets/screenshots/slide5.png";
	import { onMount } from "svelte";

    const images = [slide1, slide2, slide3, slide4, slide5];

    let _carousel: HTMLDivElement;

    let percentages: number[] = images.map(() => 1);
    const onScroll = () => {
        const imageWidth = _carousel.scrollWidth / (images.length + 2)
        const scrollAmount = _carousel.scrollLeft;

        percentages = images.map((_, index) => {
            // No idea why `0.3` instead of `0.4` but it works
            const center = (index + 1) * imageWidth - (imageWidth * 0.30)

            const distance = Math.abs(center - scrollAmount);

            const percentage = Math.max(0, Math.min(1, distance / imageWidth));

            return 1 - percentage;
        });
    };

    // Scroll to the first image
    onMount(() => {
        _carousel.scrollTo({ left: _carousel.scrollWidth / (images.length + 2) * 2, behavior: "smooth" });
    });

    const getImageID = (image: string) => image.split("/").pop()!.split(".")[0];
</script>

<section>
    <h1>Using NumberHub</h1>

    <div
        class="carousel"
        bind:this={_carousel}
        on:scroll={onScroll}
    >
        <div />
        {#each images as image, index}
            <a href="#{getImageID(image)}">
                <img
                    src={image}
                    alt="Screenshot of NumberHub"
                    style:transform="scale({0.8 + 0.2 * (percentages[index])})"
                    style:box-shadow="0 0.8em 1.5em rgba(0, 0, 0, {0.2 * percentages[index]})"
                />
            </a>
            <dialog id="{getImageID(image)}">
                <a href="#_">
                    <img
                        src={image}
                        alt="Screenshot of NumberHub"
                    />
                </a>
            </dialog>
        {/each}
        <div />
    </div>
    <div class="space" />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 2em;

        padding: 0;
        width: 100%;
        background: rgb(var(--background-color));
    }

    h1 {
        font-size: 1.8rem;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-align: center;
        color: rgb(var(--on-background-primary-color));

        margin-top: -3em;
    }

    a {
        display: block;
        text-decoration: none;
    }

    .carousel {
        display: flex;
        overflow: auto;
        scroll-snap-type: x mandatory;

        background: rgb(var(--background-color));

        padding: 5em 0;
    }

    .carousel > a {
        display: flex;
        justify-content: center;
    }

    .carousel > a, .carousel > div {
        scroll-snap-align: center;
        width: 60%;
        flex-shrink: 0;
    }

    .carousel img {
        width: 100%;

        object-fit: contain;
        border-radius: 2em;
    }

    dialog {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 10;
    }

    dialog > a {
        animation: scaleIn 0.35s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    }

    @keyframes scaleIn {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }

    dialog:not(:target) { display: none; }

    @media (min-width: 600px) {
        section {
            padding-top: 5em;
        }

        h1 {
            margin-top: 0;
        }

        .carousel img {
            width: fit-content;
            margin: 0 auto;
            max-height: 40em;
        }
    }

    @media (min-width: 1200px) {
        .carousel > a, .carousel > div {
            width: 30%;
        }
    }
</style>

