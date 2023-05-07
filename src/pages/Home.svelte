<script lang="ts">
    import {currentUser} from "../store/auth";
</script>

<h1>Home Page</h1>

{#if $currentUser}
    <p>Signed in as {$currentUser.username}</p>
{/if}