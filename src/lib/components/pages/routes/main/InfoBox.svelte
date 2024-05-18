<script lang="ts">
import Icon from '@iconify/svelte';

export let icon: string;
export let title: string;
export let text: string;
</script>

<div class="wrapper">
    <dt class="title">
        <Icon icon="{icon}" class="icon" />
        <h4>{title}</h4>
    </dt>
    <dd>
        {text}
    </dd>
</div>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.6em;

    padding: 1.5em;
    background: rgb(var(--surface-tint-color));
    border-radius: 2em;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;

    color: rgb(var(--on-surface-tint-primary-color));
}

.title > :global(.icon) {
    width: 1.5em;
    height: 1.5em;
}

h4 {
    font-size: 1.6rem;
    font-weight: 600;
}

dd {
    font-size: 1rem;
    line-height: 1.4;
}
</style>

