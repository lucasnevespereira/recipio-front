<script lang="ts">
    import {Helper, Input, Label} from "flowbite-svelte";
    import auth from "../store/auth";
    import {Link} from "svelte-navigator";

    let username;
    let password;

    const handleLogin = () => {
        auth.login({username, password})
    }

</script>

<div class="container">
    <h2 class="mb-6 text-center">Login</h2>

    <div class="block mb-6">
        <Label class='mb-2'>Username</Label>
        <Input placeholder="username" bind:value={username}/>
    </div>
    <div class="block mb-6">
        <Label class='mb-2'>Password</Label>
        <Input label="Password" required placeholder="Your Password" type="password" bind:value={password}/>
    </div>
    <div class="block mb-6">
        <button on:click={handleLogin}>Login</button>
    </div>
    <div>
        <Helper>Don't have an account yet ?
            <Link class="underline" to="/signup">Sign Up</Link>
        </Helper>
    </div>
</div>


