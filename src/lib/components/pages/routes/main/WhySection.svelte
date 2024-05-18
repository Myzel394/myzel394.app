<script>
	import InfoBox from "./InfoBox.svelte";

</script>
<section>
    <h1>Why NumberHub</h1>

    <dl>
        <InfoBox
            title="No ads"
            text="NumberHub is completely free to use. There are no ads and no trackers at all. Just a calculator."
            icon="iconoir:heart-solid"
        />
        <InfoBox
            title="Customizable"
            text="Customize the look and feel of NumberHub to your liking. You decide how NumberHub looks."
            icon="fa-solid:paint-brush"
        />
        <InfoBox
            title="Got an old phone?"
            text="NumberHub uses little resources and works on old phones up to Android 5.0"
            icon="material-symbols:android"
        />
        <InfoBox
            title="Open Source"
            text="You can build your own version of NumberHub. The source code is available on GitHub. Contributions are welcome."
            icon="raphael:opensource"
        />
    </dl>
    <div class="space" />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 4em;

        width: 100%;
        padding: 0 2em 2em 2em;
        position: relative;

        background: rgb(var(--surface-color));
    }

    h1 {
        font-size: 1.8rem;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-align: center;
        color: rgb(var(--on-surface-primary-color));
    }

    dl {
        background: rgb(var(--surface-color));
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    @media (min-width: 600px) {
        section {
            padding-top: 4em;
        }
    }

    @media (min-width: 1200px) {
        dl {
            max-width: 80em;
            margin: 0 auto;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            justify-content: center;
            align-items: stretch;
        }
    }
</style>

