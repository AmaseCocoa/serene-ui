<script setup lang="ts">
import Sidebar from "./components/sidebar/Sidebar.vue";
import SidebarItem from "./components/sidebar/SidebarItem.vue";
import SidebarContent from "./components/sidebar/SidebarContent.vue";
import SidebarSection from "./components/sidebar/SidebarSection.vue";
import SereneApp from "./components/base/App.vue";
import SereneMain from "./components/base/Main.vue";
import SereneRouterView from "./components/base/RouterView.vue";
</script>

<template>
    <SereneApp>
        <Sidebar title="Serene UI">
            <SidebarContent>
              <SidebarSection title="General">
                <SidebarItem to="/" label="Home" exact />
                <SidebarItem to="/examples" label="Examples" />
              </SidebarSection>
        
              <SidebarSection title="Components">
                <SidebarItem to="/basic" label="Basics" />
                <SidebarItem to="/card" label="Card" />
              </SidebarSection>
        
            </SidebarContent>
        
            <template #footer>
              <SidebarSection>
                <SidebarItem href="https://github.com/..." label="GitHub" />
              </SidebarSection>
            </template>
          </Sidebar>
        <SereneMain>
            <SereneRouterView />
        </SereneMain>
    </SereneApp>
</template>
