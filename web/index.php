<html>

<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />	
<script>var ObjectAssign=function(d){for(var c=1;c<arguments.length;c+=1){var a=arguments[c];for(var b in a){d[b]=a[b]}}return d};function $loadEvent(){ObjectAssign(this,{ev:document.createDocumentFragment(),tk:Date.now(),log:true,st:{}})}ObjectAssign($loadEvent.prototype,{ism:function(a){return $load.is(this.st[a])&&this.st[a]==1},ismj:function(a){if(typeof a=="string"){a=[a]}for(var b=0,c=a.length;b<c;b++){if(!this.ism(a[b])){return false}}return true},_d:function(a,c){if(typeof c=="undefined"){c=this.log}var b=$load.debug;if($load.is(this.st[a])&&this.st[a]==1){return}this.st[a]=1;ms=Date.now()-this.tk;if(c&&b>=1){console.log("[deliver] "+((b==2)?(ms+"ms - "):"")+a)}setTimeout((function(d,e){return function(){e.ev.dispatchEvent(new Event(d))}})(a,this),1)},_s:function(a,d){if(typeof a=="string"){a=[a]}var c=true;for(var b=0,e=a.length;b<e;b++){if(!this.ism(a[b])){this.ev.addEventListener(a[b],(function(f,g,h){return function(){if(h.ismj(f)){g()}}})(a,d,this));c=false}}if(c){setTimeout(d,1)}}});function $loadObj(){ObjectAssign(this,{u1:[],u2:[],m:null,dft:null,log:$load.ev_m.log,af:[],st:0})}ObjectAssign($loadObj.prototype,{a:function(b){this.u1=[];this.u2=[];for(var c=0;c<b.length;c++){this.u1.push(b[c]);this.u2.push(b[c].split("?").shift())}},ld:function(){if(this.st){return}this.st=1;if(this.m!=null){$load.ev_m._d(this.m,this.log)}for(var a=0;a<this.af.length;a++){setTimeout(this.af[a],1)}},load:function(b,a,e){var c=$load(b,a,e,0);this.success((function(d){return function(){d.run()}})(c));return c},success:function(a){this.af.push(a);return this},deliver:function(a){if(this.m==null){this.m=a}else{this.success((function(b){return function(){$load.deliver(b)}})(a))}return this},run:function(){if(this.st){return}$l=$load;if(this.u2.length==0||$l.ev_u.ismj(this.u2)){this.ld();return}else{$l.ev_u._s(this.u2,(function(e){return function(){e.ld()}})(this))}var d=[];var c=this.dft;for(var g=0,m=this.u2.length;g<m;g++){var b=this.u1[g];var a=this.u2[g];if($l.is($load.ev_u.st[a])){continue}$load.ev_u.st[a]=0;var l=a.split(".").pop();var k=null;var h=function(e){k=document.createElement("script");k.type="text/javascript";k.src=e;return k};var j=function(e){k=document.createElement("link");k.rel="stylesheet";k.type="text/css";k.href=e;return k};if(l=="js"){k=h(b)}else{if(l=="css"){k=j(b)}else{if(c=="js"){k=h(b)}else{if(c=="css"){k=j(b)}}}}if(k){k.onload=(function(e,f){return function(){$load.ev_u._d(e)}})(a,this);k.onerror=(function(e,f){return function(){}})(a,this);d.push(k)}}for(var g=0,m=d.length;g<m;g++){$l.h.appendChild(d[g])}}});function $load(b,a,e,c){return $load.load(b,a,e,c)}ObjectAssign($load,{debug:0,h:document.getElementsByTagName("head")[0]||document.documentElement,inc:0,ev_u:new $loadEvent(),ev_m:new $loadEvent(),is:function(a){return(typeof a!="undefined")&&(a!==null)},als:{},alias:function(b,a,c){if(!this.is(this.als[b])||this.is(c)&&c==1){this.als[b]=a}},deliver:function(a){this.ev_m._d(a)},subscribe:function(a,b){var c=new $loadObj();if(this.is(b)){c.success(b)}$load.ev_m._s(a,(function(d){return function(){d.ld()}})(c));return c},onLoad:function(a,b){var c=new $loadObj();if(this.is(b)){c.success(b)}$load.ev_u._s(a,(function(d){return function(){d.ld()}})(c));return c},load:function(c,e,d,k){if(!this.is(e)){e=null}if(!this.is(d)){d="js"}if(!this.is(k)){k=1}var h=[];if(typeof c=="string"){c=[c]}for(var f=0,g=c.length;f<g;f++){var j=c[f];if(this.is(this.als[j])){h=h.concat(this.als[j])}else{h.push(j)}}var b=new $loadObj();b.a(h);b.m=e;b.dft=d;if(k==1){b.run()}return b},sload:function(e,b,c,f){return $load.subscribe(e).load(b,c,f)}});$load.ev_u.log=false;document.addEventListener("DOMContentLoaded",function(){$load.deliver("dom_ready")});function onJQueryLoaded(a){$load.subscribe("jquery_loaded",a)}function onScriptsLoaded(a){$load.subscribe("scripts_loaded",a)}function onDocumentLoaded(a){$load.subscribe("document_loaded",a)};$load.debug=1;
</script>
<script src='/js/jquery.min.js'></script>
<script src='/js/load.js'></script>
	
<style>
body{ margin: 0; padding: 0; }
.row1{
	font-size: 0;
}
.row1__item{
	display: inline-block;
	width: 50%;
	height: calc(100% - 50px);
	font-size: 14px;
}
.result--error{
	color: red;
}
.result--success{
	color: green;
}
</style>	
	
</head>

<body>


<div class='row1'>
<textarea class='row1__item text--in'></textarea>
<textarea class='row1__item text--out'></textarea>
</div>

<center>
	<button class='go'>Go!</button>
	<div class='result'></div>
</center>


<script>
	
	$.ajax({
		'url': '/prg.bay',
		'cache': false,
		success: function(result){
			$('.text--in').val(result);
			$load.subscribe(['BayrellLang_loaded'], function(){
				go_work();
			});
		},
	});
	
	
	function go_work()
	{
		
		$('.result').html('');
		$('.result').removeClass('result--error');
		$('.result').removeClass('result--success');
		
		var data = $('.text--in').val();
		var is_context = true;
		/*
		Runtime._Collection.is_ctx = is_context;
		Runtime._Map.is_ctx = is_context;
		Runtime.rtl.is_ctx = is_context;
		*/
		
		// Register global context
		context = Runtime.Context.create(null);
		Runtime.RuntimeUtils.setContext(context);
		context = context.constructor.init(context, context);
		/*context = Runtime.rtl.applyAwait(context.constructor.start, [ context ]);*/
		window['global_context'] = context;
		
		try
		{
			var parser = new Bayrell.Lang.LangBay.ParserBay();
			//var translator = new Bayrell.Lang.LangES6.TranslatorES6();
			//var translator = new Bayrell.Lang.LangNode.TranslatorNode();
			var translator = new Bayrell.Lang.LangPHP.TranslatorPHP();
			
			if (is_context)
			{
				var op_code = Bayrell.Lang.LangUtils.parse(context, parser, data);
				console.log(op_code);
				var output = Bayrell.Lang.LangUtils.translate(context, translator, op_code);
			}
			else
			{			
				var op_code = Bayrell.Lang.LangUtils.parse(parser, data);
				console.log(op_code);
				var output = Bayrell.Lang.LangUtils.translate(translator, op_code);
			}
			
			$('.text--out').val(output);
			
			$('.result').addClass('result--success');
			$('.result').html('OK');
		}
		catch (ex)
		{
			$('.result').addClass('result--error');
			$('.result').html(ex.toString());
			console.log(ex.stack);
		}
	}
	
	$load.subscribe(['BayrellLang_loaded'], function(){
		$('.go').click(function(){
			go_work();
		});
	});
	
</script>

</body>

</html>
