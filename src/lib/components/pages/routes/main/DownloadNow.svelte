<script>
import GooglePlayBadgeImage from "$lib/assets/google-play-badge.png";
import GithubBadgeImage from "$lib/assets/github-badge.png";
import ObtainiumBadgeImage from "$lib/assets/obtainium-badge.png";
</script>

<section>
    <h1>Download NumberHub</h1>

    <ul>
        <li>
            <a href="https://play.google.com/store/apps/details?id=app.myzel394.numberhub">
                <img
                    src="{GooglePlayBadgeImage}"
                    alt="Get it on Google Play"
                />
            </a>
        </li>
        <li>
            <a href="https://github.com/Myzel394/NumberHub/releases">
                <img
                    src="{GithubBadgeImage}"
                    alt="Get it on Github"
                />
            </a>
        </li>
        <li>
            <a href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/Myzel394/NumberHub//">
                <img
                    src="{ObtainiumBadgeImage}"
                    alt="Get it with Obtainium"
                />
            </a>
        </li>
    </ul>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 2em;

        padding: 0 2em 4em 2em;
        width: 100%;
        background: rgb(var(--background-color));
    }

    h1 {
        font-size: 1.8rem;
        font-family: "Montserrat", Montserrat, "Roboto", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-align: center;
        color: rgb(var(--on-surface-primary-color));
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li {
        list-style: none;
    }

    img {
        width: 100%;
        max-width: 15em;
        height: auto;
    }

    @media (min-width: 600px) {
        section {
            padding-top: 4em;
        }

        ul {
            flex-direction: row;
            gap: 2em;
        }
    }
</style>

