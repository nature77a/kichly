// Injects the sidebar nav into a container with id="sidebarContainer".
// `active` should be one of: 'dashboard', 'orders', 'products', 'settings'
function renderSidebar(active) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: "space_dashboard", href: "index.html" },
    { key: "orders", label: "Orders", icon: "receipt_long", href: "orders.html" },
    { key: "products", label: "Products", icon: "inventory_2", href: "products.html" },
    { key: "settings", label: "Settings", icon: "settings", href: "settings.html" }
  ];

  const navHtml = items.map(item => `
    <a href="${item.href}" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
      item.key === active
        ? "bg-[#a93119] text-white"
        : "text-[#1b1c1a] hover:bg-[#efeeea]"
    }">
      <span class="material-symbols-outlined text-[20px]">${item.icon}</span>
      ${item.label}
    </a>
  `).join("");

  document.getElementById("sidebarContainer").innerHTML = `
    <div class="flex items-center gap-2 px-4 py-5">
      <div class="w-9 h-9 rounded-lg bg-[#a93119] flex items-center justify-center text-white font-bold">K</div>
      <div>
        <p class="font-semibold text-[#1b1c1a] leading-tight">Kitchly</p>
        <p class="text-[11px] text-[#59413c] uppercase tracking-wide">Operations Hub</p>
      </div>
    </div>
    <nav class="flex flex-col gap-1 px-2 mt-2">${navHtml}</nav>
    <div class="mt-auto p-4 border-t border-[#e4e2df] flex items-center justify-between">
      <span class="text-sm font-medium text-[#1b1c1a]" id="sidebarUsername">Admin</span>
      <button onclick="logout()" class="text-[#59413c] hover:text-[#a93119]" title="Log out">
        <span class="material-symbols-outlined text-[20px]">logout</span>
      </button>
    </div>
  `;
}
