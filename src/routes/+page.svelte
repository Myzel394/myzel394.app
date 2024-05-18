<MainPage />

<script>
	import MainPage from "$lib/components/pages/routes/main/MainPage.svelte";
</script>

<style>
:global(html) {
    --background-null-color: 19, 22, 19;
    --background-color: 25, 28, 25;
    --surface-color: 29, 33, 29;
    --surface-tint-color: 65, 73, 64;

    --on-background-null-primary-color: 255, 255, 255;
    --on-background-null-secondary-color: 121, 180, 171;

    --on-background-primary-color: 218, 240, 218;
    --on-background-secondary-color: 121, 180, 171;

    --on-surface-primary-color: 180, 214, 180;
    --on-surface-secondary-color: 121, 180, 171;

    --on-surface-tint-primary-color: 221, 235, 219;
    --on-surface-tint-secondary-color: 192, 205, 190;

    background: rgb(var(--background-color));
    color: rgb(var(--on-background-primary-color));
    font-family: 'Roboto', Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
