import{_ as l,E as a,c as d,m as e,a as t,J as u,w as c,a4 as i,o as p}from"./chunks/framework.uQk9_EO2.js";const g="/docs/cocos/assets/build-panel.Cr377JO8.png",h="/docs/cocos/assets/panel.syCT90eV.png",A="/docs/cocos/assets/build-options.D6HToQ8M.png",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAIAAAAbG2rfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAExSURBVDiNY3R3d2egDDBRqH/QGMGCVVQlMCdCWwBd9N+HK2umbLhFjBFCDo7qAgwMDH9+/UFSyMLCxMHBTqQrVKWFWRgY3lxYsesKXEzDIcJE6PkdNg8P3R07LhMwQsRFV5aFgeEHk6SrgyRMFY+wGMufB3d/KFvKvtvBQMAIDh0ZERYGhq9v7j9+8Q8myK8iLPbnxcMvOiZf7m8i5BEZZx0ZFgYGBm4ZYxMZZIk/T+48VTHQfb7nB7oRaJHKoSONEREQ8ObJC30Zhocn3mDIoBqh66Mpht2Elw9vaEgyPLmOaQKqETIKEtxYDfjz8v59AwXWF1fuYZFECQsWFoYPV9dsuYju3e+vH3y0SNV9fvwONvNRjHiw/ciTpIAYbWyJ5dfLE0uvYBFnYGAczexwAACQQVzTY9hvFQAAAABJRU5ErkJggg==",m="/docs/cocos/assets/create-scene-first.CC6WtJNf.png",f="/docs/cocos/assets/save-scene.DpoXdUpu.png",B="/docs/cocos/assets/build-page.L-gMWR5A.png",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAF8SURBVEiJY3R3d2egJWCiqemjFgwKC1gIyHMYBKR66PBjV/bn2Ykl8/Y8wWsAIR/YmOIynYGBgUVK10KTgAGEfMDIwPDvz58/uHQzsxAygJA8A8OPO1t6Vl3BKqVi7sDzkoB24iNZxiIqNcSQQcY1IdVbg4OBwyAwJ8RRQ4KVgZuXm3ILZCyifDSebl9znuHJ7hWn2RwCXBwstAW+XN6y47dLVIKvDuU+4OFg+PLhDQMDAwPDjzdf/jJzcrAw/GFgkfHwMxFnZ+ag2IIne5bt+GKcEKLLIOKS4CNweu3uD1/+sAjoupiI/Xly+uAZ3DoJRzIDEwsDAwPDjwc75s1gYGBguLxgBgODTliJDAvDh6srpqy/g183IQsuPv4S55gQKPHiG1zoy5O7Ag5qHAw/7p/ZTsB0BgYGZhUVFXzyX+9cufWDQ5SHDS7y6x2XvpUK37+XZ1ZvuvUNj1YIICIfvLlwZCeKCIe6hIjOhyN73hDUy8DAwDhaow1/CwA652+Dbu/EjQAAAABJRU5ErkJggg==",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEiSURBVEiJ7ZQxSwNBEIVfziHsQYIpTi7gFVEWCRjQRkxxEIvAYWGXIn9Qa1vBQgS7FJYWwgVz5BAjGA1mJUOwiJ0nsxKuiDjVwtt9H7OzbwtRFCHPcnJ1/xMAst6p9k+6Bxuz+Pr08j4XgK7vBL4LbAG/Aaz+DApiDrzDTifUlTVQkQCAmec8SXrnZ1eJBUDsQB81655LX+4AiKioKtvNdktZ+EsA1Qp1OVOhYLcdWACEV1RTs+fh409nq4B4S0IHdxc38Xu29PZw25PcYZGDkrfp+26G4Dsa6IsAaQZ7jWDhPv+mrXsN0V4ChN1jrQBMjXFgjAHYTBmLpVuuLg14mXwA4GSQkonTV4XxYMTEw3TkAOOnvgVADtqStfp/0T9ArE/ezEvrUl21ywAAAABJRU5ErkJggg==",k="/docs/cocos/assets/clean-window.C-HkvH3y.png",T="/docs/cocos/assets/build-task.DoTJ-PzC.png",I="/docs/cocos/assets/remove-build-task.oP6hOkB-.png",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEESURBVEiJYwwODmZmZmagGWBhYWGhnekMDAxMNDV91AJiAIEYljT0tFLlZ2VgYGBg+PLo8O4TT39S1QITKwtlSVgaFhFztn+6aNdjalrAzoqSQ/jU/HPU4Lyvd/ct236NkI8oiANuZT0TwqqIzmX/fn56//nXXxSxdx8J6yPKB9+enNiy9cTdtz/QxIW0IiLCApx0JPHoJeyDv6/P77wp4e6rwIXD9i+X3+HRTsgH3x4cPMpg64DL9L9vLm7fch1fROO34N7BI0/V3AxFcJS23+4fXH/4OX4X4g+i5wzSTpKsf//+xpD5+/XV/fPH9hJMpQyM4eHhhNRQBIZ+YTdqwcBbAAD/F0+iy0Yy7QAAAABJRU5ErkJggg==",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFDSURBVEiJYwwODmZmZmagDfj79y8LCwsLjUxnYGBgYWFhop3pEDBqAUFAOIbZZXRNlISQ1f359uTymW+6YU6it/dtOP8cv3ZmHR0dfPKybtEBxpJszGxcvLw8vLw8vLwc/15cfSzj5iT6h1lSR1no+cW7nyjxgYIQ34drS5fue48QkrQODzAUZWb49+3J+SOXHxMwgIg4+P0Ti+kMDN+enT954/UPQrpJiWR2QeswmOlPjm4/zGXvYy1KTQv0nJT/PH//l+Hbk6PbN5x/LiLIy0pYEwnlhKG0EJ/wz7tn1h48/fwb0bpIsODa9kXnf/4kXj0EEBFETCzsDAwMDAw/STedgbAP3v/4qa/safrk9Au09MKvoC3G/u/5X0otuLL9qHiIhZGbH6bU7/eXD+y7S8gCxvDwcEJqKAJDvzQdtYAgAADH82Xj4a0N2QAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGwSURBVEiJ1VXPSwJBGH22ayNTLG34I0XJygoWIQQloUtEdUmQ8GDQqUN/VXSPIKLoFtQpCAo6CIq3BRctNFYWHBpkq8Nmdtox0IPf8X3z3oPv13gKhYIkSRhN2LYty7I8InUAsixPjE7difE3+FcDqD+mEnCz1mJDNpiitMPY6tb+TpyA67cnN1VKpxjriKmeYrEoeDK3cZBP+W3L8igKAQBwy/pSFKn1cnX28Cpgi3ugZTS/F/D11AEQRfEBXr+W0YR0cYnKFSM7v0QBZjze3T7riKe3t7IxCjCjUhbSpWQy6ZJe2TzMr0foBNAuX58/GF2g265XX6dXtIDPO7uQXJ7ulPR3FwVBiQIhlUoAwE2j0YcbhskBQKJqKOCuIDBovpnMBgCiRsN9OBxVCQDYzHxruisISvSul146wbXFGdkXiEc+zVq9PRlP7+2mgl6A6/enF89u9cEgTdYSYWd8aDSbO8r+yZBwQoOoz+IxLT+VGhz4sCzeg7hlfQC8UXoST9EAiwaAEMI5X80d9zfZgcTUwU6FI1W9u2TOLfqFhmXwE6xVG/zK/cT4/wfjb/ANB6uXW+SNvWEAAAAASUVORK5CYII=",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAXCAIAAAAKpbGIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGgSURBVEiJ1dXPSwJBFAfw7zZTS+sETm3BksFCohRFhIWSBw8dpEMgdVjP/WHdgoiErv2gTkZRnqIiMVhBKLBa2Fxty4UOaXjbzVyod5vHm/kwvPkhpNNp+ByUMUYI8Wl1x3EajQallPoEAKCUMsb6/AO+QhAE3w0Af8aQAhIAaWx8fELhIhDgXPyB4dpwnlxbVVG+KNiRmMroR61cKA7GFkPQj3L5x54YI/Mqvd/ayQMols/aWb04l1mf4ng0emHIkmNVlJlkZLijsvFwYTb7pVHAk9FNz5vvjviTeW77cBwAsjKh8I6kTIzbHholsxbF1eH2VUdO5Io8Gff+/rgZUc5gJjIb09/7ICJMXTdsK5hYj7/mzh9+bTzV38L22d5m60iNpLLLzf2dalKL3GwdhrSlhfPcpZvh1rtnkzBVDbSH8hCsqgHrvY8poZdKrX807CZ4uIOXp9epWDqbaBUSCSEFxwcndyuzqUjwrVxyNwRN09yrOkKJZ1amA3XLIQOkWtg9uLV7bwAARM6JYdQ9Vnf3QdmGpwveij/ztv8D4xO0E3sdlhtJXAAAAABJRU5ErkJggg==",X="/docs/cocos/assets/edit-build-option.BkykbN3N.png",E="/docs/cocos/assets/settings.De2IXWm2.png",D="/docs/cocos/assets/interrupt.XvPlBK4r.gif",V="/docs/cocos/assets/build-dropdown.DFrFZ0zQ.png",U=JSON.parse('{"title":"About the Build Panel","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/build-panel.md","filePath":"en/editor/publish/build-panel.md","lastUpdated":1712305443000}'),C={name:"en/editor/publish/build-panel.md"},_=i('<h1 id="about-the-build-panel" tabindex="-1">About the Build Panel <a class="header-anchor" href="#about-the-build-panel" aria-label="Permalink to &quot;About the Build Panel&quot;">​</a></h1><p>Click <strong>Project -&gt; Build</strong> in the main menu of the editor or use the shortcut key <code>Ctrl/Cmd + Shift + B</code> to open the <strong>Build</strong> panel:</p><p><img src="'+g+'" alt="build-panel"></p><p>If a platform has already been built, open the <strong>Build</strong> panel to enter the <strong>Build Task</strong> page. The build of each platform for v3.0 is carried out in the form of a build task, similar to a download task:</p><p><img src="'+h+'" alt="panel"></p><h2 id="build-panel" tabindex="-1">Build Panel <a class="header-anchor" href="#build-panel" aria-label="Permalink to &quot;Build Panel&quot;">​</a></h2><p>In the <strong>Build</strong> panel, select the platform to be built, and then configure the <a href="./build-options">build options</a>. After the configuration is complete, click the <strong>Build</strong> button in the lower right corner to jump to the <strong>Build Task</strong> page to execute the build process. Another way is to click the <strong>Close (X)</strong> button in the upper right corner to enter the <strong>Build Task</strong> page.</p><p>There are three function buttons at the top of the panel:</p><p><img src="'+A+'" alt="build-options"></p><ul><li><p><img src="'+b+'" alt="doc">: click this button to jump to the official manual documentation of the current platform.</p></li><li><p><strong>Import</strong>: click this button to import the JSON file that saves the configuration of the build options.</p></li><li><p><strong>Export</strong>: click this button to export the current platform&#39;s build option configuration as a JSON file for the <a href="./publish-in-command-line">command line build</a>, or share it among project members. The exported configuration is differentiated according to the platform. When using the command line to build, specify the file path of the build parameter <code>configPath</code> as the exported JSON configuration file path.</p></li></ul><blockquote><p><strong>Notes</strong>:</p><ol><li><p>It is meaningless to build a project without a scene, if there is no scene in the currently opened project, a prompt will appear to create a scene first when opening the <strong>Build</strong> panel:</p><p><img src="'+m+'" alt="save-scene"></p></li><li><p>Before building, please make sure that the current scene has been saved, otherwise when click the <strong>Build</strong> button, and a pop-up prompt will be displayed. Choose <strong>Save</strong>, <strong>Ignore</strong> or <strong>Cancel</strong>. Select <strong>Save</strong> and <strong>Ignore</strong> to continue the build process.</p><p><img src="'+f+'" alt="save-scene"></p></li></ol></blockquote><h2 id="build-tasks" tabindex="-1">Build Tasks <a class="header-anchor" href="#build-tasks" aria-label="Permalink to &quot;Build Tasks&quot;">​</a></h2><p>On the <strong>Build Tasks</strong> page, developers can view the current platform&#39;s build progress and build results.</p><ul><li><strong>Building</strong>: the progress bar is displayed as <strong>blue</strong>.</li><li><strong>Build success</strong>: the progress bar reaches 100%, and the actual build time is output and displayed as <strong>green</strong>.</li><li><strong>Build failed</strong>: the progress bar reaches 100%, prompting the reason for the failure of the build or an error message, and it is displayed as <strong>red</strong>.</li></ul><p><img src="'+B+'" alt="panel"></p><p>There are three buttons at the top of the page, including <strong>New Build Task</strong>, <strong>Open Build DevTools</strong> and <strong>Clear Build Cache</strong>:</p><ul><li><p><strong>New Build Task</strong>: click this button to return to the <strong>Build</strong> panel, select a new platform to build.</p></li><li><p><img src="'+n+'" alt="debug">: click this button to open the Build DevTools, and view all the log information generated during the build process, including the call stack.</p></li><li><p><img src="'+w+'" alt="clean">: clear the build cache. In order to reuse the reusable build results, and in order to speed up the build and reduce memory usage when rebuilding, many processes in the build process have added cache management mechanisms, such as compressed textures, automatic atlas generation, engine compilation, and resources being serialized JSON, etc. <br>Under normal circumstances, this part of the cached data does not need to be manually cleaned, but if it is needed to avoid cache interference under special circumstances, click this button to clear the cached data.</p><p>The project-related resource cache will be stored in the project directory, and the engine compilation-related cache will be stored in the global directory. Developers can choose to clear the project cache, the global cache, or all of them according to their needs.</p><p><img src="'+k+'" alt="clean window"></p></li></ul><h3 id="platform-build-tasks" tabindex="-1">Platform Build Tasks <a class="header-anchor" href="#platform-build-tasks" aria-label="Permalink to &quot;Platform Build Tasks&quot;">​</a></h3><p>The build of each platform is carried out in the form of a <strong>build task</strong>, similar to a download task. The name of the platform build task depends on the <strong>Build Path</strong> option in the <strong>Build</strong> panel. For details, please refer to the <a href="./build-options">Build Options</a> documentation.</p><p><img src="'+T+'" alt="build task"></p><p>Each building task has corresponding function buttons for easy use.</p><p><strong>The remove (X) button at the top right of the build task</strong> is used to remove the current build task. Choose <strong>Remove records only</strong> or <strong>Remove source files</strong>. <strong>Remove source files</strong> means to delete the project release package generated in the <code>build</code> directory after the corresponding platform is built.</p><p><img src="'+I+'" alt="remove build task"></p><p><strong>The buttons at the bottom left of the build task include</strong>:</p><ul><li><p><img src="'+y+'" alt="folder">: click this button to open the project release package generated after the corresponding platform is built (the default is in the <code>build</code> directory).</p></li><li><p><img src="'+v+'" alt="editing">: click this button to return to the <strong>Build</strong> panel, modify the build options configured during the last build of the corresponding platform, and then click the <strong>Build</strong> button at the bottom right to rebuild. For details, please refer to the content in the <strong>Modify Build Options</strong> section below.</p></li><li><p><img src="'+o+'" alt="setting">: click this button to return to the <strong>Build</strong> panel to view the build options configured during the last build of the corresponding platform.</p></li><li><p><img src="'+r+'" alt="log-file">: click this button to open the log file generated by the corresponding platform during the build process. For more information, please refer to the content in the <strong>Building Log Information View</strong> section below.</p></li></ul><p><strong>The button at the bottom right of the build task</strong> is mainly used for each platform to execute the release process such as generation, operation, and upload according to the platform requirements after the completion of the build. The <strong>Build</strong> button is used to rebuild.</p><p>After each platform is built, the build options configuration information related to the build will be saved in the <code>profiles/v2/packages/builder.json</code> file in the project directory, as long as the build of the corresponding platform is not deleted on the <strong>Build Tasks</strong> page or delete the project release package in the <code>build</code> directory. To view the build option configuration of the last build after reopening the editor, and continue to run the preview, etc.</p><p>For the specific release process of each platform, please refer to:</p><ul><li><a href="./native-options">Publish to Native platform</a></li><li><a href="./publish-mini-game">Publish to Mini Game platform</a></li></ul><h3 id="modifying-build-options" tabindex="-1">Modifying Build Options <a class="header-anchor" href="#modifying-build-options" aria-label="Permalink to &quot;Modifying Build Options&quot;">​</a></h3><p>Click the edit button at the bottom left of the build task to return to the <strong>Build</strong> panel to modify the build options configured during the last build for rebuilding. Since it is only possible to modify the build option configuration during the last build of the current platform, the <strong>Platform</strong> option on the page is grayed out and cannot be modified.</p><p><img src="'+X+'" alt="edit build option"></p><p>Click the <img src="'+o+'" alt="setting"> button to the right of the edit button to view the configuration of the build options during the last build of the current platform.</p><p>After the modification is completed, clicking the <strong>Build</strong> button will clear the project release package generated after the last build and rebuild. Or click the <strong>X</strong> button at the top right of the <strong>Build</strong> panel to return to the <strong>Build Tasks</strong> page, and then click the <strong>Build</strong> button at the bottom right of the platform build task to rebuild.</p><blockquote><p><strong>Note</strong>: in order to avoid accidentally deleting customized content, the native platform only updates project resources when rebuilding, and does not overwrite the original native project content. Therefore, when returning to the <strong>Build</strong> panel to modify the previously configured build options, the native platform-related build options are in the <strong>disabled</strong> state. To regenerate the project, please create a new build task.</p></blockquote>',35),Q=e("strong",null,"Build",-1),P=e("strong",null,"Build",-1),R=e("code",null,"build",-1),S=e("strong",null,"Build",-1),x=i('<p><img src="'+E+'" alt="settings"></p><h3 id="build-log-information-view" tabindex="-1">Build Log Information View <a class="header-anchor" href="#build-log-information-view" aria-label="Permalink to &quot;Build Log Information View&quot;">​</a></h3><p>Since the build process will generate a lot of log information, only error messages will be printed to the editor&#39;s <strong>console</strong> panel by default.</p><p>To view all the log information, there are the following operations:</p><ul><li><p><strong>Open the Build DevTools</strong></p><p>To view, click <strong>Developer -&gt; Open Build DevTools</strong> in the main menu or click the <img src="'+n+'" alt="debug"> button at the top right of the <strong>Build Task</strong> page. All log information printed during the build process includes the call stack.</p></li><li><p><strong>Open the build logging file</strong></p><p>The error message generated during each build process will be recorded and stored in the <code>temp/builder/log</code> folder under the project directory. Click the <img src="'+r+'" alt="log-file"> button at the bottom right of the build task to view it. When feedback on build related issues, directly paste the file to locate the problem.</p></li></ul><h3 id="build-queue-and-interrupt-build" tabindex="-1">Build Queue and Interrupt Build <a class="header-anchor" href="#build-queue-and-interrupt-build" aria-label="Permalink to &quot;Build Queue and Interrupt Build&quot;">​</a></h3><p><img src="'+D+'" alt="interrupt"></p><p>You can still add a new build task during the build process, and the new build task will be added to the build queue. During the build process, you can click the X button on the right side of the build task to interrupt the current build task.</p><h3 id="build-bundle-only" tabindex="-1">Build Bundle Only <a class="header-anchor" href="#build-bundle-only" aria-label="Permalink to &quot;Build Bundle Only&quot;">​</a></h3><p><img src="'+V+'" alt="build-dropdown.png"></p><p>Cocos Creator supports <strong>Build Bundles Only</strong> since v3.8. All selected Bundles can be built at once when building the project. Unlike building individual Bundles, the <strong>Build Bundles Only</strong> option will build all Bundles and store public assets in high-priority Bundles.</p>',11);function O(N,Z,F,Y,K,j){const s=a("font");return p(),d("div",null,[_,e("p",null,[t("If the "),Q,t(" button is not clicked to rebuild after modifying the configuration, the modified configuration will also be saved. If the configuration in the current "),P,t(" panel is inconsistent with the configuration in the project release package in the "),R,t(" directory generated after the last build, a yellow "),u(s,{color:"#F0C800"},{default:c(()=>[t("*")]),_:1}),t(" key will be displayed at the top of the "),S,t(" panel.")]),x])}const z=l(C,[["render",O]]);export{U as __pageData,z as default};
