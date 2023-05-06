<script lang="ts">
    import {currentUser, pb} from "../lib/pocketbase";

    let loginUsername;
    let loginPassword;

    let newUsername;
    let newPassword;
    let newPasswordConfirm;
    let newEmail;


    async function login() {
        await pb.collection('users').authWithPassword(loginUsername, loginPassword)
        console.log("logged in")
    }

    async function createAccount() {
        try {
            const data = {
                "username": newUsername,
                "email": newEmail,
                "emailVisibility": true,
                "password": newPassword,
                "passwordConfirm": newPasswordConfirm,
                "name": newUsername
            };
            const createdUser = await pb.collection('users').create(data);
            console.log("user created", createdUser)
            loginUsername = newUsername
            loginPassword = newPassword
            await login()
        } catch (e) {
            console.error(e)
        }
    }

    function logout() {
        pb.authStore.clear()
    }

</script>

{#if $currentUser}
    <p>Signed in as {$currentUser.username}</p>
    <button on:click={logout}>log out</button>
{:else }
    <div class="container" style="display: flex; justify-content: center; flex-direction: column">
        <form on:submit|preventDefault>
            <h2>Login</h2>
            <input placeholder="Username" type="text" bind:value={loginUsername}>
            <input placeholder="Password" type="password" bind:value={loginPassword}>
            <button on:click={login}>Login</button>
        </form>

        <span>or</span>

        <form on:submit|preventDefault>
            <h2>Create Account</h2>
            <input placeholder="Username" type="text" bind:value={newUsername}>
            <input placeholder="Email" type="email" bind:value={newEmail}>
            <input placeholder="Password" type="password" bind:value={newPassword}>
            <input placeholder="Confirm Password" type="password" bind:value={newPasswordConfirm}>
            <button on:click={createAccount}>Create Account</button>
        </form>
    </div>
{/if}
