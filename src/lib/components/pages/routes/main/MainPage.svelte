<script lang="ts">
    import Arch from "$lib/assets/arch.svelte";
	import HeaderSection from "./HeaderSection.svelte";
	import ScreenshotsSection from "./ScreenshotsSection.svelte";
	import WhySection from "./WhySection.svelte";
</script>

<main>
    <HeaderSection />
    <div class="arch">
        <Arch />
    </div>
    <ScreenshotsSection />
    <div class="arch">
        <Arch />
    </div>
    <WhySection />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .arch > :global(svg) {
        width: 100%;
        height: 100%;
    }
</style>
