import{_ as e,c as o,o as t,a4 as r}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/project-file.LUjx6Mjx.png",g=JSON.parse('{"title":"Project Structure","description":"","frontmatter":{},"headers":[],"relativePath":"en/getting-started/project-structure/index.md","filePath":"en/getting-started/project-structure/index.md","lastUpdated":1712305443000}'),s={name:"en/getting-started/project-structure/index.md"},i=r('<h1 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-label="Permalink to &quot;Project Structure&quot;">​</a></h1><p>Using the Dashboard, a new project can be created. <code>HelloWorld</code> is the classic first example. Once created, the project has a specific folder structure, and this structure can be used to get familiar with the Cocos Creator project folder structure.</p><h2 id="project-folder-structure" tabindex="-1">Project Folder Structure <a class="header-anchor" href="#project-folder-structure" aria-label="Permalink to &quot;Project Folder Structure&quot;">​</a></h2><p>After creating and opening a Cocos Creator project for the first time, the developer project folder will have the following structure.</p><p><img src="'+a+'" alt="project-file"></p><ul><li><p><code>assets</code>: the assets directory</p></li><li><p><code>build</code>: build directory (generated after building a platform)</p></li><li><p><code>library</code>: directory of imported assets</p></li><li><p><code>local</code>: log files directory</p></li><li><p><code>profiles</code>: editor configuration</p></li><li><p><code>temp</code>: temporary files directory</p></li><li><p><code>package.json</code>: project configuration</p></li></ul><h3 id="assets" tabindex="-1"><code>assets</code> <a class="header-anchor" href="#assets" aria-label="Permalink to &quot;`assets`&quot;">​</a></h3><p><code>assets</code> is used to hold all local assets, scripts, and third-party library files in the game. Only the contents of the <code>assets</code> directory will be displayed in the <strong>Assets</strong> panel. Each file in <code>assets</code> generates a <code>.meta</code> file with the same name after importing the project, which is used to store the corresponding asset configuration and index information. The <code>.meta</code> file needs to be submitted to the version control system as well, please review the <a href="./../../asset/meta">Asset Management Notes --- meta Files</a> documentation.</p><p>Project or design source files generated by some third-party tools, such as <code>.tps</code> files for TexturePacker, or <code>.psd</code> files for Photoshop, can optionally be managed outside of <code>assets</code>.</p><h3 id="build" tabindex="-1"><code>build</code> <a class="header-anchor" href="#build" aria-label="Permalink to &quot;`build`&quot;">​</a></h3><p>After publishing a project using the default publish path through <strong>Project -&gt; Build</strong> in the editor main menu, the editor will create a <code>build</code> directory under the project path and store all builds for the target platform.</p><h3 id="library" tabindex="-1"><code>library</code> <a class="header-anchor" href="#library" aria-label="Permalink to &quot;`library`&quot;">​</a></h3><p>The <code>library</code> is generated by importing the assets from <code>assets</code>, where the structure of the files and the format of the assets will be processed into the form needed for the final game release.</p><p>When <code>library</code> is lost or corrupted, just delete the whole <code>library</code> folder and open the project again, and the repository will be regenerated.</p><h3 id="local" tabindex="-1"><code>local</code> <a class="header-anchor" href="#local" aria-label="Permalink to &quot;`local`&quot;">​</a></h3><p>The <code>local</code> folder contains configuration information for the project on the local machine, including the editor panel layout, window size, location, and other information. Developers do not need to care about the contents here.</p><h3 id="profiles" tabindex="-1"><code>profiles</code> <a class="header-anchor" href="#profiles" aria-label="Permalink to &quot;`profiles`&quot;">​</a></h3><p>The <code>profiles</code> folder contains configuration information for the editor, including build configuration information for each target platform, scene configuration information, etc.</p><h3 id="extensions" tabindex="-1"><code>extensions</code> <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;`extensions`&quot;">​</a></h3><p>The <code>extensions</code> folder is used to place custom extensions for this project. To install extensions manually, create this folder manually. To uninstall the extensions, just delete the corresponding folder in <code>extensions</code>.</p><h3 id="settings" tabindex="-1"><code>settings</code> <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;`settings`&quot;">​</a></h3><p><code>settings</code> contains project-specific settings, such as configuration information in the <strong>Project Settings</strong> panel. To synchronize project settings between developers, please add the settings directory to version control.</p><h3 id="temp" tabindex="-1"><code>temp</code> <a class="header-anchor" href="#temp" aria-label="Permalink to &quot;`temp`&quot;">​</a></h3><p><code>temp</code> is a temporary folder for caching some of Cocos Creator&#39;s temporary files locally. This folder can be deleted manually after closing Cocos Creator, and developers don&#39;t need to care about the contents.</p><h3 id="package-json" tabindex="-1"><code>package.json</code> <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;`package.json`&quot;">​</a></h3><p>The <code>package.json</code> file, together with the <code>assets</code> folder, serves as a flag to verify the legitimacy of a Cocos Creator project, and only folders that include these two contents can be opened as Cocos Creator projects. Developers don&#39;t need to care about the contents inside.</p><h2 id="version-control" tabindex="-1">Version control <a class="header-anchor" href="#version-control" aria-label="Permalink to &quot;Version control&quot;">​</a></h2><p>Cocos Creator automatically generates <code>.gitignore</code> files when a new project is created to exclude files that should not be committed to the git repository. If using another version control system, or if needing to commit the project elsewhere, be careful to only commit <code>assets</code>, <code>extensions</code>, <code>settings</code>, <code>package.json</code>, and any other manually added files associated with the project.</p>',28),c=[i];function n(d,l,h,p,u,f){return t(),o("div",null,c)}const b=e(s,[["render",n]]);export{g as __pageData,b as default};
