"use strict";(self.webpackChunkdoc_modelagem_banco_dados=self.webpackChunkdoc_modelagem_banco_dados||[]).push([[6316],{6316:(t,e,n)=>{n.d(e,{diagram:()=>A});var i=n(3744),s=n(9373),r=n(1619),a=n(5920),o=n(7201),c=(n(7484),n(7967),n(7856),n(277),n(5625),n(9354),n(1518),n(9542),n(285),n(8734),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,26,27,28],s=[1,15],r=[1,16],a=[1,17],o=[1,18],c=[1,19],l=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 3:case 7:case 8:this.$=[];break;case 4:r[o-1].push(r[o]),this.$=r[o-1];break;case 5:case 6:this.$=r[o];break;case 11:i.getCommonDb().setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 12:this.$=r[o].trim(),i.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=r[o].trim(),i.getCommonDb().setAccDescription(this.$);break;case 15:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 19:i.addTask(r[o],0,""),this.$=r[o];break;case 20:i.addEvent(r[o].substr(2)),this.$=r[o];break;case 21:i.parseDirective("%%{","open_directive");break;case 22:i.parseDirective(r[o],"type_directive");break;case 23:r[o]=r[o].trim().replace(/'/g,'"'),i.parseDirective(r[o],"arg_directive");break;case 24:i.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:n},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:s,18:r,20:a,22:o,23:c,24:20,25:21,26:l,27:h,28:n},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:22,10:28,12:4,17:s,18:r,20:a,22:o,23:c,24:20,25:21,26:l,27:h,28:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,29]},{21:[1,30]},t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,o="",c=0,l=0,h=r.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var g=d.yylloc;r.push(g);var y=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,m,_,b,k,x,v,S,w,$={};;){if(m=n[n.length-1],this.defaultActions[m]?_=this.defaultActions[m]:(null==f&&(w=void 0,"number"!=typeof(w=i.pop()||d.lex()||1)&&(w instanceof Array&&(w=(i=w).pop()),w=e.symbols_[w]||w),f=w),_=a[m]&&a[m][f]),void 0===_||!_.length||!_[0]){var E="";for(k in S=[],a[m])this.terminals_[k]&&k>2&&S.push("'"+this.terminals_[k]+"'");E=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(E,{text:d.match,token:this.terminals_[f]||f,line:d.yylineno,loc:g,expected:S})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(_[0]){case 1:n.push(f),s.push(d.yytext),r.push(d.yylloc),n.push(_[1]),f=null,l=d.yyleng,o=d.yytext,c=d.yylineno,g=d.yylloc;break;case 2:if(x=this.productions_[_[1]][1],$.$=s[s.length-x],$._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},y&&($._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[o,l,c,u.yy,_[1],s,r].concat(h))))return b;x&&(n=n.slice(0,-1*x*2),s=s.slice(0,-1*x),r=r.slice(0,-1*x)),n.push(this.productions_[_[1]][0]),s.push($.$),r.push($._$),v=a[n[n.length-2]][n[n.length-1]],n.push(v);break;case 3:return!0}}return!0}},g={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};function y(){this.yy={}}return p.lexer=g,y.prototype=p,p.Parser=y,new y}());c.parser=c;const l=c;let h="",d=0;const u=[],p=[],g=[],y=()=>i.j,f=(t,e,n)=>{(0,i.k)(globalThis,t,e,n)},m=function(){u.length=0,p.length=0,h="",g.length=0,(0,i.m)()},_=function(t){h=t,u.push(t)},b=function(){return u},k=function(){let t=w();let e=0;for(;!t&&e<100;)t=w(),e++;return p.push(...g),p},x=function(t,e,n){const i={id:d++,section:h,type:h,task:t,score:e||0,events:n?[n]:[]};g.push(i)},v=function(t){g.find((t=>t.id===d-1)).events.push(t)},S=function(t){const e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},w=function(){let t=!0;for(const[e,n]of g.entries())g[e].processed,t=t&&n.processed;return t},$={clear:m,getCommonDb:y,addSection:_,getSections:b,getTasks:k,addTask:x,addTaskOrg:S,addEvent:v,parseDirective:f},E=Object.freeze(Object.defineProperty({__proto__:null,addEvent:v,addSection:_,addTask:x,addTaskOrg:S,clear:m,default:$,getCommonDb:y,getSections:b,getTasks:k,parseDirective:f},Symbol.toStringTag,{value:"Module"}));!function(){function t(t,e,n,s,r,a,o,c){i(e.append("text").attr("x",n+r/2).attr("y",s+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function e(t,e,n,s,r,a,o,c,l){const{taskFontSize:h,taskFontFamily:d}=c,u=t.split(/<br\s*\/?>/gi);for(let p=0;p<u.length;p++){const t=p*h-h*(u.length-1)/2,c=e.append("text").attr("x",n+r/2).attr("y",s).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);c.append("tspan").attr("x",n+r/2).attr("dy",t).text(u[p]),c.attr("y",s+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(c,o)}}function n(t,n,s,r,a,o,c,l){const h=n.append("switch"),d=h.append("foreignObject").attr("x",s).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,s,r,a,o,c,l),i(d,c)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}}();function I(t,e){t.each((function(){var t,n=(0,s.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),c=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let s=0;s<i.length;s++)t=i[i.length-1-s],r.push(t),c.text(r.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),c.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],c=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}const T=function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},D=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},L=function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),o=r.append("g"),c=o.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(I,e.width).node().getBBox(),l=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=c.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,o.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),T(a,e,s),e},C=function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(I,e.width).node().getBBox(),r=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding},M=function(t,e,n,s,r,a,o,c,l,h,d){for(const u of e){const e={descr:u.task,section:n,number:n,width:150,padding:20,maxHeight:a};i.l.debug("taskNode",e);const c=t.append("g").attr("class","taskWrapper"),p=L(c,e,n,o).height;if(i.l.debug("taskHeight after draw",p),c.attr("transform",`translate(${s}, ${r})`),a=Math.max(a,p),u.events){const e=t.append("g").attr("class","lineWrapper");let i=a;r+=100,i+=O(t,u.events,n,s,r,o),r-=100,e.append("line").attr("x1",s+95).attr("y1",r+a).attr("x2",s+95).attr("y2",r+a+(d?a:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s+=200,d&&!(0,i.g)().timeline.disableMulticolor&&n++}r-=10},O=function(t,e,n,s,r,a){let o=0;const c=r;r+=100;for(const l of e){const e={descr:l,section:n,number:n,width:150,padding:20,maxHeight:50};i.l.debug("eventNode",e);const c=t.append("g").attr("class","eventWrapper"),h=L(c,e,n,a).height;o+=h,c.attr("transform",`translate(${s}, ${r})`),r=r+10+h}return r=c,o},A={db:E,renderer:{setConf:function(t){Object.keys(t).forEach((function(e){conf[e]=t[e]}))},draw:function(t,e,n,r){const a=(0,i.g)(),o=a.leftMargin?a.leftMargin:50;r.db.clear(),r.parser.parse(t+"\n"),i.l.debug("timeline",r.db);const c=a.securityLevel;let l;"sandbox"===c&&(l=(0,s.Ys)("#i"+e));const h=("sandbox"===c?(0,s.Ys)(l.nodes()[0].contentDocument.body):(0,s.Ys)("body")).select("#"+e);h.append("g");const d=r.db.getTasks(),u=r.db.getCommonDb().getDiagramTitle();i.l.debug("task",d),D(h);const p=r.db.getSections();i.l.debug("sections",p);let g=0,y=0,f=0,m=0,_=50+o,b=50;m=50;let k=0,x=!0;p.forEach((function(t){const e=C(h,{number:k,descr:t,section:k,width:150,padding:20,maxHeight:g},a);i.l.debug("sectionHeight before draw",e),g=Math.max(g,e+20)}));let v=0,S=0;i.l.debug("tasks.length",d.length);for(const[s,$]of d.entries()){const t={number:s,descr:$,section:$.section,width:150,padding:20,maxHeight:y},e=C(h,t,a);i.l.debug("taskHeight before draw",e),y=Math.max(y,e+20),v=Math.max(v,$.events.length);let n=0;for(let i=0;i<$.events.length;i++){const t={descr:$.events[i],section:$.section,number:$.section,width:150,padding:20,maxHeight:50};n+=C(h,t,a)}S=Math.max(S,n)}i.l.debug("maxSectionHeight before draw",g),i.l.debug("maxTaskHeight before draw",y),p&&p.length>0?p.forEach((t=>{const e={number:k,descr:t,section:k,width:150,padding:20,maxHeight:g};i.l.debug("sectionNode",e);const n=h.append("g"),s=L(n,e,k,a);i.l.debug("sectionNode output",s),n.attr("transform",`translate(${_}, 50)`),b+=g+50;const r=d.filter((e=>e.section===t));r.length>0&&M(h,r,k,_,b,y,a,v,S,g,!1),_+=200*Math.max(r.length,1),b=50,k++})):(x=!1,M(h,d,k,_,b,y,a,v,S,g,!0));const w=h.node().getBBox();i.l.debug("bounds",w),u&&h.append("text").text(u).attr("x",w.width/2-o).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),f=x?g+y+150:y+100;h.append("g").attr("class","lineWrapper").append("line").attr("x1",o).attr("y1",f).attr("x2",w.width+3*o).attr("y2",f).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,i.s)(void 0,h,a.timeline.padding?a.timeline.padding:50,!!a.timeline.useMaxWidth&&a.timeline.useMaxWidth)}},parser:l,styles:t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${(t=>{let e="";for(let n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,r.Z)(t["lineColor"+n])?t["lineColor"+n]=(0,a.Z)(t["lineColor"+n],20):t["lineColor"+n]=(0,o.Z)(t["lineColor"+n],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e})(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`}},1619:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(1691),s=n(1610);const r=t=>{const{r:e,g:n,b:r}=s.Z.parse(t),a=.2126*i.Z.channel.toLinear(e)+.7152*i.Z.channel.toLinear(n)+.0722*i.Z.channel.toLinear(r);return i.Z.lang.round(a)},a=t=>r(t)>=.5,o=t=>!a(t)}}]);