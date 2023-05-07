<script lang="ts">
    import {Label, Input, Helper} from 'flowbite-svelte'
    import {Link, useNavigate} from "svelte-navigator";
    import auth from "../store/auth";

    let username;
    let password;
    let passwordConfirm;
    let email;
    const handleSignup = () => {
        auth.signup({username, email, password, passwordConfirm})
    }

</script>

<div class="container">
    <h2 class="mb-6 text-center">Create Account</h2>
    <div class="block mb-6">
        <Label class='block mb-2'>Your Username</Label>
        <Input placeholder="Enter your username" bind:value={username}/>
    </div>
    <div class="block mb-6">
        <Label class='block mb-2'>Your Email</Label>
        <Input type="email" required placeholder="example@email.com" bind:value={email}/>
    </div>
    <div class="block mb-6">
        <Label class='block mb-2'>Your Password</Label>
        <Input type="password" required placeholder="Your Password" bind:value={password}/>
    </div>
    <div class="block mb-6">
        <Label class='block mb-2'>Confirm Password</Label>
        <Input type="password" required placeholder="Confirm Password" bind:value={passwordConfirm}/>
    </div>
    <div class="block mb-6">
        <button on:click={handleSignup}>Create Account</button>
    </div>
    <div>
        <Helper>Already have an account ?
            <Link class="underline" to="/login">Log in</Link>
        </Helper>
    </div>
</div>
