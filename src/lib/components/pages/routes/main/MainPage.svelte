<script lang="ts">
    import Arch from "$lib/assets/arch.svelte";
	import HeaderSection from "./HeaderSection.svelte";
</script>

<main>
    <HeaderSection />
    <Arch />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
