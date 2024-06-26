document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <div id="sidebar">
            <!-- Sidebar content here -->
            <ul>
                <li><a href="page1.html">Page 1</a></li>
                <li><a href="page2.html">Page 2</a></li>
                <li><a href="page3.html">Page 3</a></li>
            </ul>
        </div>
    `;
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
});