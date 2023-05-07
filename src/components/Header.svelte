<script lang="ts">
    import {Navbar, NavBrand, Button, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte'
    import auth, {currentUser} from "../store/auth";
    import {Link} from "svelte-navigator";
</script>
<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <Link to="/">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Recipio
            </span>
        </Link>
    </NavBrand>
    <div class="flex md:order-2">
        {#if $currentUser}
            <Button>
                <Chevron>{$currentUser.username}</Chevron>
            </Button>
            <Dropdown>
                <DropdownItem on:click={auth.logout}>Logout</DropdownItem>
            </Dropdown>
        {:else }
            <Button size="sm">
                <Link to="/login">Login</Link>
            </Button>
        {/if}
    </div>
</Navbar>