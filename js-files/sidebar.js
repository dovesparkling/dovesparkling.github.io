document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <div id="main-sideBar-title">
            <span>Hi,</span>
            <span>This is Dove</span>
        </div>

        <div id="main-sideBar-subtitle">
            Welcome to my little channel. It's a pleasure to meet you.
            <br>I love <span class="highlighted">rock climbing</span> and <span class="highlighted">skating</span>. 
            <br>In my spare time, you might find me <span class="highlighted">testing code</span>. 
            <br>My favorite games are always about <span class="highlighted">Metroidvania</span>, 
            <span class="highlighted">survive</span>, and 
            <span class="highlighted">crafting</span>.
        </div>

        <div id="main-sideBar-menu">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./interest.html">About My Interests</a></li>
                <li><a href="./journal.html">Journals</a></li>
                <li><a href="./project.html">Projects</a></li>
                <li><a href="https://github.com/dovesparkling">GitHub</a></li>
            </ul>
        </div>
    `;
    document.getElementById('main-sideBar').innerHTML = sidebarHTML;
});