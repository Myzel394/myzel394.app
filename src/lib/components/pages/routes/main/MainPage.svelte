<script lang="ts">
    import Arch from "$lib/assets/arch.svelte";
	import HeaderSection from "./HeaderSection.svelte";
	import ScreenshotsSection from "./ScreenshotsSection.svelte";
	import WhySection from "./WhySection.svelte";
</script>

<main>
    <HeaderSection />
    <ScreenshotsSection />
    <div class="arch">
        <Arch
            previousColor="rgb(var(--background-color))"
            nextColor="rgb(var(--surface-color))"
        />
    </div>
    <WhySection />
    <div class="arch">
        <Arch
            previousColor="rgb(var(--surface-color))"
            nextColor="rgb(var(--background-color))"
        />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .arch {
        display: flex;
    }

    .arch > :global(svg) {
        width: 100%;
        height: 100%;
    }
</style>
