<main>
    <section>
        <div class="text">
            <img src={appIcon} alt="NumberHub" />
            <h1>NumberHub</h1>
            <p>
                The only calculator you'll ever need.
            </p>
        </div>
    </section>
</main>

<script>
import appIcon from "$lib/assets/app-icon.svg";
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        padding: 8em 2em;
    }

    h1 {
        font-size: 3rem;
        font-size: 10cqw;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 800;
    }

    img {
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
    }
</style>
