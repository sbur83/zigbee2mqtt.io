"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98137],{14463:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-1d4155e5",path:"/guide/configuration/",title:"Configuration",lang:"en-US",frontmatter:{next:"adapter-settings.md"},excerpt:"",headers:[{level:2,title:"Environment variables",slug:"environment-variables",children:[]},{level:2,title:"Config changes at runtime",slug:"config-changes-at-runtime",children:[]}],filePathRelative:"guide/configuration/README.md",git:{updatedTime:1641572076e3}}},90872:(e,n,a)=>{a.r(n),a.d(n,{default:()=>M});var s=a(66252);const t=(0,s._)("h1",{id:"configuration",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,s.Uk)(" Configuration")],-1),i=(0,s.Uk)("Zigbee2MQTT is configured using "),o={href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("YAML"),l=(0,s.Uk)(" based "),c=(0,s._)("code",null,"configuration.yaml",-1),p=(0,s.Uk)(" file. The file have to be located in the "),u=(0,s._)("code",null,"data",-1),d=(0,s.Uk)(" directory within your installation. The "),m=(0,s._)("code",null,"data",-1),b=(0,s.Uk)(" directory and the "),g=(0,s._)("code",null,"configuration.yaml",-1),h=(0,s.Uk)(" has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It's possible specify a custom data directory by setting the "),k=(0,s._)("code",null,"ZIGBEE2MQTT_DATA",-1),f=(0,s.Uk)(" environment variable."),v=(0,s.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Minimal configuration.yml example</span>\n<span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyUSB0\n<span class="token key atrule">frontend</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">CONVENTION</p><p>The <em>dot-notation</em> of a config-key like <code>mqtt.server</code> means <code>server</code> property within the <code>mqtt</code> section. All <em>dot-notation</em> references are absolute.</p></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2><p>It is possible to override the values in <code>configuration.yaml</code> via environment variables. The name of the environment variable should start with <code>ZIGBEE2MQTT_CONFIG_</code> followed by the path to the property you want to set in uppercase split by a <code>_</code>.</p><p>In case you want to for example override:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>set <code>ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC</code> to the desired value.</p><h2 id="config-changes-at-runtime" tabindex="-1"><a class="header-anchor" href="#config-changes-at-runtime" aria-hidden="true">#</a> Config changes at runtime</h2>',8),y=(0,s.Uk)("Some configuration options can be changed at runtime by issuing a MQTT-publish at the topic "),_=(0,s._)("code",null,"zigbee2mqtt/bridge/request/options",-1),T=(0,s.Uk)(". See "),U=(0,s.Uk)("MQTT Topics and Messages"),w=(0,s.Uk)(" for details."),E={},M=(0,a(83744).Z)(E,[["render",function(e,n){const a=(0,s.up)("OutboundLink"),E=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[i,(0,s._)("a",o,[r,(0,s.Wm)(a)]),l,c,p,u,d,m,b,g,h,k,f]),v,(0,s._)("p",null,[y,_,T,(0,s.Wm)(E,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request"},{default:(0,s.w5)((()=>[U])),_:1}),w])],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);