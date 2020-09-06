<html>

<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />	

<script src='/js/jquery.min.js'></script>
<script src='/js/runtime.js'></script>
<script src='/js/lang.js'></script>
	
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
	
	window['use'] = function(s){ return Runtime.rtl.find_class(s); }
	
	$.ajax({
		'url': '/prg.bay',
		'cache': false,
		success: function(result){
			$('.text--in').val(result);
			go_work();
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
		context = Runtime.Core.Context.create(null);
		Runtime.RuntimeUtils.setContext(context);
		context = context.constructor.init(context, context);
		/*context = Runtime.rtl.applyAwait(context.constructor.start, [ context ]);*/
		window['global_context'] = context;
		
		try
		{
			var parser = new Bayrell.Lang.LangBay.ParserBay();
			var translator_es6 = new Bayrell.Lang.LangES6.TranslatorES6
			(
				context, { "use_module_name": false, "use_strict": false, "emulate_async_await": true }
			);
			var translator_node = new Bayrell.Lang.LangNode.TranslatorNode
			(
				context, { "use_module_name": true, "enable_async_await": true, "emulate_async_await": false }
			);
			var translator_php = new Bayrell.Lang.LangPHP.TranslatorPHP();
			
			/* Select translator */
			//var translator = translator_es6;
			//var translator = translator_node;
			var translator = translator_php;
			
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
	
	$('.go').click(function(){
		go_work();
	});
	
</script>

</body>

</html>
