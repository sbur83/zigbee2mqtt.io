"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71538],{11765:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3597f240",path:"/advanced/more/switch-to-dev-branch.html",title:"Switch to the dev branch",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"Linux",slug:"linux",children:[]},{level:2,title:"Docker",slug:"docker",children:[]},{level:2,title:"Home Assistant addon",slug:"home-assistant-addon",children:[]}],filePathRelative:"advanced/more/switch-to-dev-branch.md",git:{updatedTime:1641572076e3}}},77097:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});const e=(0,a(66252).uE)('<h1 id="switch-to-the-dev-branch" tabindex="-1"><a class="header-anchor" href="#switch-to-the-dev-branch" aria-hidden="true">#</a> Switch to the dev branch</h1><p>The Zigbee2MQTT dev branch contains the latest features, improvements and supported devices. In case you want to try this, you can checkout the dev branch.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This branch is a development branch! It could be less stable than the release version!</p></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> -R data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> checkout HEAD -- npm-shrinkwrap.json\n<span class="token function">git</span> fetch\n<span class="token function">git</span> checkout dev <span class="token comment"># Change &#39;dev&#39; to &#39;master&#39; to switch back to the release version</span>\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> -R data-backup/* data\n<span class="token function">rm</span> -rf data-backup\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p>Use the Docker image with the <code>latest-dev</code> tag.</p><h2 id="home-assistant-addon" tabindex="-1"><a class="header-anchor" href="#home-assistant-addon" aria-hidden="true">#</a> Home Assistant addon</h2><p>Use the <code>edge</code> version.</p>',9),t={},c=(0,a(83744).Z)(t,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);