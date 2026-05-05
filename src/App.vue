<script setup lang="ts">
import Sidebar from "./components/sidebar/Sidebar.vue";
import SidebarItem from "./components/sidebar/SidebarItem.vue";
import SidebarContent from "./components/sidebar/SidebarContent.vue";
import SereneApp from "./components/base/App.vue";
import SereneMain from "./components/base/Main.vue";
import SereneRouterView from "./components/base/RouterView.vue";
</script>

<template>
    <SereneApp>
        <Sidebar title="SereneUI">
            <SidebarContent>
                <SidebarItem to="/" label="Home" exact />
                <SidebarItem to="/card" label="Card" />
                <SidebarItem to="/cluster" label="Cluster" />
                <SidebarItem to="/stack" label="Stack" />
            </SidebarContent>

            <template #footer>
                <SidebarItem href="https://github.com/AmaseCocoa/Serene-ui" label="GitHub" />
            </template>
        </Sidebar>

        <SereneMain>
            <SereneRouterView />
        </SereneMain>
    </SereneApp>
</template>
