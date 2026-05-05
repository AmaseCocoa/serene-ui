import type { App } from 'vue';

import Button from './components/atom/Button.vue';
import Cluster from './components/atom/Cluster.vue';
import Stack from './components/atom/Stack.vue';
import SereneRouterView from './components/base/RouterView.vue';
import SereneSection from './components/base/Section.vue';
import SerenePage from './components/base/Page.vue';
import SereneMain from './components/base/Main.vue';
import SereneApp from './components/base/App.vue';
import Card from './components/Card.vue';
import Progress from './components/Progress.vue';
import Sidebar from './components/sidebar/Sidebar.vue';
import SidebarItem from './components/sidebar/SidebarItem.vue';
import SidebarContent from './components/sidebar/SidebarContent.vue';

export * from './composables/useRoutingProgress';

export { Button, Cluster, Stack, SereneRouterView, SereneApp, SereneSection, SerenePage, SereneMain, Card, Progress, Sidebar, SidebarItem, SidebarContent };

export default {
  install(app: App) {
    
    // base
    app.component('SereneApp', SereneApp);
    app.component('SereneMain', SereneMain);
    app.component('SerenePage', SerenePage);
    app.component('SereneSection', SereneSection);
    app.component('SereneRouterView', SereneRouterView);
    app.component('SereneProgress', Progress);

    // core components
    app.component('SereneButton', Button);
    app.component('SereneCluster', Cluster);
    app.component('SereneStack', Stack);

    // other
    app.component('SereneCard', Card);
    app.component('SereneSidebar', Sidebar);
    app.component('SereneSidebarContent', SidebarContent);
    app.component('SereneSidebarItem', SidebarItem);
  }
};
