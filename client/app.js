import HomePage from "./pages/HomePage.js";
import productsPage from "./pages/productsPage.js";
import ordersPage from "./pages/ordersPage.js";
import NotFound from "./pages/NotFound.js";

const navigateTo = (url) => {
   history.pushState(null, null, url);
   router();
};

const router = () => {
   const routes = [
      {
         path: "/",
         view: HomePage,
      },
      {
         path: "/products",
         view: productsPage,
      },
      {
         path: "/orders",
         view: ordersPage,
      },
   ];

   const potentailRoutes = routes.map((route) => {
      return {
         route: route,
         isMatch: location.pathname === route.path,
      };
   });

   let match = potentailRoutes.find((route) => {
      return route.isMatch;
   });

   if (!match) {
      //   match = {
      //      route: routes[0],
      //      isMatch: true
      //   };
      match = {
         route: {
            path: "/NotFound",
            view: NotFound,
         },
         isMatch: true,
      };
   }
   document.querySelector("#app").innerHTML = match.route.view();
};

window.addEventListener("popstate", navigateTo);

document.addEventListener("DOMContentLoaded", () => {
   document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
         e.preventDefault();
         navigateTo(e.target.href);
      }
   });
   router();
});

// sidebar toggler
const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".nav");
const root = document.documentElement;
sidebarToggler.addEventListener("click", () => {
   sidebar.classList.toggle("mini-sidebar");
   if (sidebar.classList.contains("mini-sidebar")) {
      root.style.setProperty("--nav-width", 62 + "px");
   } else {
      root.style.setProperty("--nav-width", 250 + "px");
   }
});
