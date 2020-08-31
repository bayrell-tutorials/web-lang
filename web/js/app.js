"use strict;"
/*This is comment*/
if (typeof App == 'undefined') App = {};
App.AppLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.AppLayout.prototype = Object.create(Runtime.Web.Component.prototype);
App.AppLayout.prototype.constructor = App.AppLayout;
Object.assign(App.AppLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.AppLayout)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "App.AppLayout";
	},
});
Object.assign(App.AppLayout, Runtime.Web.Component);
Object.assign(App.AppLayout,
{
	css: function(ctx, vars)
	{
		return "\n*{box-sizing: border-box;}body{margin:0;padding:0;}\na { text-decoration: inherit; color: #0000d0; cursor: pointer; }\na:hover, a:visited:hover { text-decoration: underline; color: red; }\na:visited { text-decoration: inherit; color: #0000d0; }\na.link { text-decoration: none; color: #0000d0; cursor: pointer; }\na.link:hover, a.link:visited:hover { text-decoration: underline; color: red; }\na.link:visited { text-decoration: none; color: #0000d0; }\nbody, html{\n\tbackground-color: #F2F2F2;\n\tfont-family: 'Ubuntu', sans-serif;\n\tfont-size: 14px;\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0;\n}\n.container.h-70d2{\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n";
	},
	/* Render */
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			/* Element 'section.section' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "section","attrs": {"class":["section", this.getCssHash()].join(" "),"@elem_name":"section"}});
			
			/* Element 'div.container' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["container", this.getCssHash()].join(" "),"@elem_name":"container"}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": class_name,"attrs": {"@bind":["App.AppLayout","page_model"],"@key":"page"}, "layout": layout});
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			RenderDriver.p(__control, __control_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.AppLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "App.AppLayout",
			"name": "App.AppLayout",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(App.AppLayout);
window["App.AppLayout"] = App.AppLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.AppLayout;
"use strict;"
if (typeof App == 'undefined') App = {};
App.IndexPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
App.IndexPage.prototype = Object.create(Runtime.Web.Component.prototype);
App.IndexPage.prototype.constructor = App.IndexPage;
Object.assign(App.IndexPage.prototype,
{
	/**
 * Mouse click event
 */
	onMouseClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		this.commit(ctx, "update", Runtime.Collection.from(["item","content"]), Runtime.rtl.attr(ctx, model, ["item", "content"]) + Runtime.rtl.toStr("!"));
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.IndexPage)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "App.IndexPage";
	},
});
Object.assign(App.IndexPage, Runtime.Web.Component);
Object.assign(App.IndexPage,
{
	css: function(ctx, vars)
	{
		return "\n.content.h-74d5{\n\ttext-align: center;\n\tpadding-top: 50px;\n}\n.label.h-74d5{\n\tpadding-bottom: 5px;\n}\n.input.h-74d5{\n\tpadding: 5px 10px;\n}\n.button.h-74d5{\n\tcursor: pointer;\n}\n";
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash()].join(" "),"@key":"content","@elem_name":"content"}});
			
			/* Element 'div.label' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["label", this.getCssHash()].join(" "),"@elem_name":"label"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": Runtime.rtl.attr(ctx, model, ["item", "content"])});
			RenderDriver.p(__v1, __v1_childs);
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "input","attrs": {"@bind":["App.IndexPage",Runtime.Collection.from(["item","content"])],"class":["input", this.getCssHash()].join(" "),"@elem_name":"input"}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": null});
			
			/* Element 'button.button' */
			var __v2; var __v2_childs = [];
			[__v2, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["App.IndexPage","onMouseClick"],"class":["button", this.getCssHash()].join(" "),"@elem_name":"button"}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "Click Me!"});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			/* Element 'div.items' */
			var __v3; var __v3_childs = [];
			[__v3, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["items", this.getCssHash()].join(" "),"@elem_name":"items"}});
			
			for (var i = 0;i < 10;i++)
			{
				/* Element 'div.item' */
				var __v4; var __v4_childs = [];
				[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["item", this.getCssHash()].join(" "),"@elem_name":"item"}});
				
				/* Text */
				[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": i});
				RenderDriver.p(__v4, __v4_childs);
			}
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__control, __control_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.IndexPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "App.IndexPage",
			"name": "App.IndexPage",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(App.IndexPage);
window["App.IndexPage"] = App.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.IndexPage;
"use strict;"
if (typeof App == 'undefined') App = {};
App.IndexPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
App.IndexPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
App.IndexPageModel.prototype.constructor = App.IndexPageModel;
Object.assign(App.IndexPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.item = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof App.IndexPageModel)
		{
			this.item = o.item;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "item")this.item = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "item")return this.item;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "App.IndexPageModel";
	},
});
Object.assign(App.IndexPageModel, Runtime.BaseStruct);
Object.assign(App.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.IndexPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "App.IndexPageModel",
			"name": "App.IndexPageModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("item");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		if (field_name == "item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "App.IndexPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(App.IndexPageModel);
window["App.IndexPageModel"] = App.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.IndexPageModel;
"use strict;"
if (typeof App == 'undefined') App = {};
App.ModuleDescription = function(ctx)
{
};
Object.assign(App.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof App.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "App.ModuleDescription";
	},
});
Object.assign(App.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "App";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.0.1";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":"*"});
	},
	/**
	 * Returns module files load order
	 * @return Collection<string>
	 */
	assets: function(ctx)
	{
		return Runtime.Collection.from(["App/IndexPage","App/IndexPageModel","App/Routes","App/ModuleDescription"]);
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":".root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"App.ModuleDescription::chainLayoutModel"})),new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"Runtime.Web.RouteController"})),new Runtime.Core.Entity(ctx, Runtime.Dict.from({"name":"App.Routes"}))]);
	},
	/**
	 * Returns sync loaded files
	 */
	resources: function(ctx)
	{
		return null;
	},
	/**
	 * Layout chain
	 */
	chainLayoutModel: function(ctx, layout)
	{
		if (layout.layout_name == "default")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "App.AppLayout");
		}
		return Runtime.Collection.from([layout]);
	},
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	appSettings: function(ctx, env)
	{
		return Runtime.Dict.from({"config":Runtime.Dict.from({}),"secrets":Runtime.Dict.from({}),"providers":Runtime.Dict.from({})});
	},
	/**
	 * Init app
	 */
	appInit: function(ctx, c)
	{
		return c.constructor.init(ctx, c);
	},
	/**
	 * Start app
	 */
	appStart: async function(ctx, c)
	{
		return Promise.resolve(await c.constructor.start(ctx, c));
	},
	/**
	 * Run app
	 */
	appRun: async function(ctx)
	{
		var render = ctx.getDriver(ctx, "root-controller");
		var page_model = new App.IndexPageModel(ctx, Runtime.Dict.from({"item":Runtime.Dict.from({"content":"Hello world"})}));
		var layout = new Runtime.Web.LayoutModel(ctx, Runtime.Dict.from({"title":"Hello world!!!","page_class":"App.IndexPage","page_model":page_model}));
		render.renderLayout(ctx, layout);
		/* RenderDriver.renderPage("/"); */
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "App";
	},
	getCurrentClassName: function()
	{
		return "App.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "App.ModuleDescription",
			"name": "App.ModuleDescription",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.Annotations.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"appSettings",
			"appInit",
			"appStart",
			"appRun",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
	__implements__:
	[
		Runtime.Interfaces.ModuleDescriptionInterface,
		Runtime.Interfaces.AssetsInterface,
	],
});
Runtime.rtl.defClass(App.ModuleDescription);
window["App.ModuleDescription"] = App.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.ModuleDescription;