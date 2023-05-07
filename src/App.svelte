<script lang="ts">

    import Header from "./components/Header.svelte";
    import {Route, Router} from "svelte-navigator";
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import Signup from "./pages/Signup.svelte";
    import {currentUser} from "./store/auth";
</script>
<Router>
    <Header/>
    <main class="container mx-auto">
        <Route path="/" component={Home}/>
        {#if !$currentUser}
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
        {/if}
        <Route path="profile"/>
    </main>
</Router>










