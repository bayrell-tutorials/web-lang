"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.Caret = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.Caret.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.Caret.prototype.constructor = Bayrell.Lang.Caret;
Object.assign(Bayrell.Lang.Caret.prototype,
{
	_init: function(ctx)
	{
		this.pos = 0;
		this.x = 0;
		this.y = 0;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.Caret)
		{
			this.pos = o.pos;
			this.x = o.x;
			this.y = o.y;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "pos")this.pos = v;
		else if (k == "x")this.x = v;
		else if (k == "y")this.y = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "pos")return this.pos;
		else if (k == "x")return this.x;
		else if (k == "y")return this.y;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.Caret";
	},
});
Object.assign(Bayrell.Lang.Caret, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.Caret,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.Caret";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.Caret",
			"name": "Bayrell.Lang.Caret",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("pos");
			a.push("x");
			a.push("y");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "pos") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.Caret",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "x") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.Caret",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "y") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.Caret",
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
Runtime.rtl.defClass(Bayrell.Lang.Caret);
window["Bayrell.Lang.Caret"] = Bayrell.Lang.Caret;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.Caret;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.CoreParser = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.CoreParser.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.CoreParser.prototype.constructor = Bayrell.Lang.CoreParser;
Object.assign(Bayrell.Lang.CoreParser.prototype,
{
	/**
	 * Returns true if eof
	 */
	isEof: function(ctx)
	{
		return this.caret.pos >= this.content_sz;
	},
	_init: function(ctx)
	{
		this.tab_size = 4;
		this.file_name = "";
		this.content = null;
		this.content_sz = 0;
		this.caret = null;
		this.find_ident = true;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.CoreParser)
		{
			this.tab_size = o.tab_size;
			this.file_name = o.file_name;
			this.content = o.content;
			this.content_sz = o.content_sz;
			this.caret = o.caret;
			this.find_ident = o.find_ident;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "tab_size")this.tab_size = v;
		else if (k == "file_name")this.file_name = v;
		else if (k == "content")this.content = v;
		else if (k == "content_sz")this.content_sz = v;
		else if (k == "caret")this.caret = v;
		else if (k == "find_ident")this.find_ident = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "tab_size")return this.tab_size;
		else if (k == "file_name")return this.file_name;
		else if (k == "content")return this.content;
		else if (k == "content_sz")return this.content_sz;
		else if (k == "caret")return this.caret;
		else if (k == "find_ident")return this.find_ident;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.CoreParser";
	},
});
Object.assign(Bayrell.Lang.CoreParser, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.CoreParser,
{
	/**
	 * Reset parser
	 */
	reset: function(ctx, parser)
	{
		return parser.copy(ctx, Runtime.Dict.from({"caret":new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({})),"token":null}));
	},
	/**
	 * Set content
	 */
	setContent: function(ctx, parser, content)
	{
		return parser.copy(ctx, Runtime.Dict.from({"content":new Runtime.Reference(ctx, content),"content_sz":Runtime.rs.strlen(ctx, content)}));
	},
	/**
	 * Parse file and convert to BaseOpCode
	 */
	parse: function(ctx, parser, content)
	{
		parser = this.reset(ctx, parser);
		parser = this.setContent(ctx, parser, content);
		while (parser.caret.pos < parser.content_sz)
		{
			parser = parser.constructor.nextToken(ctx, parser);
		}
		return parser;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.CoreParser";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": "Bayrell.Lang.CoreParser",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("tab_size");
			a.push("file_name");
			a.push("content");
			a.push("content_sz");
			a.push("caret");
			a.push("find_ident");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "tab_size") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "file_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "content") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "content_sz") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "caret") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "find_ident") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreParser",
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
Runtime.rtl.defClass(Bayrell.Lang.CoreParser);
window["Bayrell.Lang.CoreParser"] = Bayrell.Lang.CoreParser;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.CoreParser;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.CoreToken = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.CoreToken.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.CoreToken.prototype.constructor = Bayrell.Lang.CoreToken;
Object.assign(Bayrell.Lang.CoreToken.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.kind = "";
		this.content = "";
		this.caret_start = null;
		this.caret_end = null;
		this.eof = false;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.CoreToken)
		{
			this.kind = o.kind;
			this.content = o.content;
			this.caret_start = o.caret_start;
			this.caret_end = o.caret_end;
			this.eof = o.eof;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "kind")this.kind = v;
		else if (k == "content")this.content = v;
		else if (k == "caret_start")this.caret_start = v;
		else if (k == "caret_end")this.caret_end = v;
		else if (k == "eof")this.eof = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "kind")return this.kind;
		else if (k == "content")return this.content;
		else if (k == "caret_start")return this.caret_start;
		else if (k == "caret_end")return this.caret_end;
		else if (k == "eof")return this.eof;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.CoreToken";
	},
});
Object.assign(Bayrell.Lang.CoreToken, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.CoreToken,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.CoreToken";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.CoreToken",
			"name": "Bayrell.Lang.CoreToken",
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
			a.push("kind");
			a.push("content");
			a.push("caret_start");
			a.push("caret_end");
			a.push("eof");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreToken",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "content") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreToken",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "caret_start") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreToken",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "caret_end") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreToken",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "eof") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreToken",
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
Runtime.rtl.defClass(Bayrell.Lang.CoreToken);
window["Bayrell.Lang.CoreToken"] = Bayrell.Lang.CoreToken;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.CoreToken;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.CoreTranslator = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.CoreTranslator.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.CoreTranslator.prototype.constructor = Bayrell.Lang.CoreTranslator;
Object.assign(Bayrell.Lang.CoreTranslator.prototype,
{
	/**
	 * Find save op code
	 */
	findSaveOpCode: function(ctx, op_code)
	{
		return this.save_op_codes.findItem(ctx, Runtime.lib.equalAttr(ctx, "op_code", op_code));
	},
	/**
	 * Increment indent level
	 */
	levelInc: function(ctx)
	{
		return this.copy(ctx, Runtime.Dict.from({"indent_level":this.indent_level + 1}));
	},
	/**
	 * Decrease indent level
	 */
	levelDec: function(ctx)
	{
		return this.copy(ctx, Runtime.Dict.from({"indent_level":this.indent_level - 1}));
	},
	/**
	 * Output content with indent
	 */
	s: function(ctx, s, content)
	{
		if (content == undefined) content = null;
		if (s == "")
		{
			return "";
		}
		if (content === "")
		{
			return s;
		}
		return this.crlf + Runtime.rtl.toStr(Runtime.rs.str_repeat(ctx, this.indent, this.indent_level)) + Runtime.rtl.toStr(s);
	},
	/**
	 * Output content with indent
	 */
	s2: function(ctx, s)
	{
		return this.crlf + Runtime.rtl.toStr(Runtime.rs.str_repeat(ctx, this.indent, this.indent_level)) + Runtime.rtl.toStr(s);
	},
	/**
	 * Output content with opcode level
	 */
	o: function(ctx, s, opcode_level_in, opcode_level_out)
	{
		if (opcode_level_in < opcode_level_out)
		{
			return "(" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(")");
		}
		return s;
	},
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.current_namespace_name = "";
		this.current_class_name = "";
		this.current_class_full_name = "";
		this.current_class_extends_name = "";
		this.current_class = null;
		this.current_function = null;
		this.modules = null;
		this.vars = null;
		this.save_vars = null;
		this.save_op_codes = null;
		this.save_op_code_inc = 0;
		this.is_static_function = false;
		this.is_operation = false;
		this.opcode_level = 0;
		this.indent_level = 0;
		this.indent = "\t";
		this.crlf = "\n";
		this.flag_struct_check_types = false;
		this.preprocessor_flags = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.CoreTranslator)
		{
			this.current_namespace_name = o.current_namespace_name;
			this.current_class_name = o.current_class_name;
			this.current_class_full_name = o.current_class_full_name;
			this.current_class_extends_name = o.current_class_extends_name;
			this.current_class = o.current_class;
			this.current_function = o.current_function;
			this.modules = o.modules;
			this.vars = o.vars;
			this.save_vars = o.save_vars;
			this.save_op_codes = o.save_op_codes;
			this.save_op_code_inc = o.save_op_code_inc;
			this.is_static_function = o.is_static_function;
			this.is_operation = o.is_operation;
			this.opcode_level = o.opcode_level;
			this.indent_level = o.indent_level;
			this.indent = o.indent;
			this.crlf = o.crlf;
			this.flag_struct_check_types = o.flag_struct_check_types;
			this.preprocessor_flags = o.preprocessor_flags;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "current_namespace_name")this.current_namespace_name = v;
		else if (k == "current_class_name")this.current_class_name = v;
		else if (k == "current_class_full_name")this.current_class_full_name = v;
		else if (k == "current_class_extends_name")this.current_class_extends_name = v;
		else if (k == "current_class")this.current_class = v;
		else if (k == "current_function")this.current_function = v;
		else if (k == "modules")this.modules = v;
		else if (k == "vars")this.vars = v;
		else if (k == "save_vars")this.save_vars = v;
		else if (k == "save_op_codes")this.save_op_codes = v;
		else if (k == "save_op_code_inc")this.save_op_code_inc = v;
		else if (k == "is_static_function")this.is_static_function = v;
		else if (k == "is_operation")this.is_operation = v;
		else if (k == "opcode_level")this.opcode_level = v;
		else if (k == "indent_level")this.indent_level = v;
		else if (k == "indent")this.indent = v;
		else if (k == "crlf")this.crlf = v;
		else if (k == "flag_struct_check_types")this.flag_struct_check_types = v;
		else if (k == "preprocessor_flags")this.preprocessor_flags = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "current_namespace_name")return this.current_namespace_name;
		else if (k == "current_class_name")return this.current_class_name;
		else if (k == "current_class_full_name")return this.current_class_full_name;
		else if (k == "current_class_extends_name")return this.current_class_extends_name;
		else if (k == "current_class")return this.current_class;
		else if (k == "current_function")return this.current_function;
		else if (k == "modules")return this.modules;
		else if (k == "vars")return this.vars;
		else if (k == "save_vars")return this.save_vars;
		else if (k == "save_op_codes")return this.save_op_codes;
		else if (k == "save_op_code_inc")return this.save_op_code_inc;
		else if (k == "is_static_function")return this.is_static_function;
		else if (k == "is_operation")return this.is_operation;
		else if (k == "opcode_level")return this.opcode_level;
		else if (k == "indent_level")return this.indent_level;
		else if (k == "indent")return this.indent;
		else if (k == "crlf")return this.crlf;
		else if (k == "flag_struct_check_types")return this.flag_struct_check_types;
		else if (k == "preprocessor_flags")return this.preprocessor_flags;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.CoreTranslator";
	},
});
Object.assign(Bayrell.Lang.CoreTranslator, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.CoreTranslator,
{
	/**
	 * Translate BaseOpCode
	 */
	translate: function(ctx, t, op_code)
	{
		return "";
	},
	/**
	 * Inc save op code
	 */
	nextSaveOpCode: function(ctx, t)
	{
		return "__v" + Runtime.rtl.toStr(t.save_op_code_inc);
	},
	/**
	 * Inc save op code
	 */
	incSaveOpCode: function(ctx, t)
	{
		var var_name = this.nextSaveOpCode(ctx, t);
		var save_op_code_inc = t.save_op_code_inc + 1;
		t = t.copy(ctx, Runtime.Dict.from({"save_op_code_inc":save_op_code_inc}));
		return Runtime.Collection.from([t,var_name]);
	},
	/**
	 * Add save op code
	 */
	addSaveOpCode: function(ctx, t, data)
	{
		var var_name = data.get(ctx, "var_name", "");
		var content = data.get(ctx, "content", "");
		var var_content = data.get(ctx, "var_content", "");
		var save_op_code_inc = t.save_op_code_inc;
		if (var_name == "" && content == "")
		{
			var_name = this.nextSaveOpCode(ctx, t);
			data = data.setIm(ctx, "var_name", var_name);
			save_op_code_inc += 1;
		}
		var s = new Bayrell.Lang.SaveOpCode(ctx, data);
		t = t.copy(ctx, Runtime.Dict.from({"save_op_codes":t.save_op_codes.pushIm(ctx, s),"save_op_code_inc":save_op_code_inc}));
		return Runtime.Collection.from([t,var_name]);
	},
	/**
	 * Clear save op code
	 */
	clearSaveOpCode: function(ctx, t)
	{
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), new Runtime.Collection(ctx));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), 0);
		return t;
	},
	/**
	 * Output save op code content
	 */
	outputSaveOpCode: function(ctx, t, save_op_code_value)
	{
		if (save_op_code_value == undefined) save_op_code_value = 0;
		var content = "";
		for (var i = 0;i < t.save_op_codes.count(ctx);i++)
		{
			if (i < save_op_code_value)
			{
				continue;
			}
			var save = t.save_op_codes.item(ctx, i);
			var s = (save.content == "") ? (t.s(ctx, "var " + Runtime.rtl.toStr(save.var_name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(save.var_content) + Runtime.rtl.toStr(";"))) : (save.content);
			content += Runtime.rtl.toStr(s);
		}
		return content;
	},
	/**
	 * Call f and return result with save op codes
	 */
	saveOpCodeCall: function(ctx, t, f, args)
	{
		/* Clear save op codes */
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		var res = Runtime.rtl.apply(ctx, f, args.unshiftIm(ctx, t));
		t = Runtime.rtl.get(ctx, res, 0);
		var value = Runtime.rtl.get(ctx, res, 1);
		/* Output save op code */
		var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([t,save,value]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.CoreTranslator";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": "Bayrell.Lang.CoreTranslator",
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
			a.push("current_namespace_name");
			a.push("current_class_name");
			a.push("current_class_full_name");
			a.push("current_class_extends_name");
			a.push("current_class");
			a.push("current_function");
			a.push("modules");
			a.push("vars");
			a.push("save_vars");
			a.push("save_op_codes");
			a.push("save_op_code_inc");
			a.push("is_static_function");
			a.push("is_operation");
			a.push("opcode_level");
			a.push("indent_level");
			a.push("indent");
			a.push("crlf");
			a.push("flag_struct_check_types");
			a.push("preprocessor_flags");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "current_namespace_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class_full_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class_extends_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_function") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "modules") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "vars") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "save_vars") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "save_op_codes") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "save_op_code_inc") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_static_function") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_operation") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "opcode_level") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "indent_level") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "indent") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "crlf") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "flag_struct_check_types") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "preprocessor_flags") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.CoreTranslator",
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
Runtime.rtl.defClass(Bayrell.Lang.CoreTranslator);
window["Bayrell.Lang.CoreTranslator"] = Bayrell.Lang.CoreTranslator;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.CoreTranslator;
"use strict;"
/*!
 *  Bayrell Parser Library.  
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.LangConstant = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangConstant.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangConstant)
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
		return "Bayrell.Lang.LangConstant";
	},
});
Object.assign(Bayrell.Lang.LangConstant,
{
	ERROR_PARSER: -1000,
	ERROR_PARSER_EOF: -1001,
	ERROR_PARSER_EXPECTED: -1002,
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangConstant";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangConstant",
			"name": "Bayrell.Lang.LangConstant",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "ERROR_PARSER") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangConstant",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ERROR_PARSER_EOF") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangConstant",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ERROR_PARSER_EXPECTED") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangConstant",
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
Runtime.rtl.defClass(Bayrell.Lang.LangConstant);
window["Bayrell.Lang.LangConstant"] = Bayrell.Lang.LangConstant;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangConstant;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.LangUtils = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangUtils.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangUtils)
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
		return "Bayrell.Lang.LangUtils";
	},
});
Object.assign(Bayrell.Lang.LangUtils,
{
	/**
	 * Parse file and convert to BaseOpCode
	 */
	parse: function(ctx, parser, text)
	{
		var res = parser.constructor.parse(ctx, parser, text);
		return Runtime.rtl.get(ctx, res, 1);
	},
	/**
	 * Translate BaseOpCode to string
	 */
	translate: function(ctx, translator, op_code)
	{
		var res = translator.constructor.translate(ctx, translator, op_code);
		return Runtime.rtl.get(ctx, res, 1);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangUtils";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangUtils",
			"name": "Bayrell.Lang.LangUtils",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangUtils);
window["Bayrell.Lang.LangUtils"] = Bayrell.Lang.LangUtils;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangUtils;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.SaveOpCode = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.SaveOpCode.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.SaveOpCode.prototype.constructor = Bayrell.Lang.SaveOpCode;
Object.assign(Bayrell.Lang.SaveOpCode.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.var_name = "";
		this.var_content = "";
		this.content = "";
		this.op_code = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.SaveOpCode)
		{
			this.var_name = o.var_name;
			this.var_content = o.var_content;
			this.content = o.content;
			this.op_code = o.op_code;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "var_name")this.var_name = v;
		else if (k == "var_content")this.var_content = v;
		else if (k == "content")this.content = v;
		else if (k == "op_code")this.op_code = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "var_name")return this.var_name;
		else if (k == "var_content")return this.var_content;
		else if (k == "content")return this.content;
		else if (k == "op_code")return this.op_code;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.SaveOpCode";
	},
});
Object.assign(Bayrell.Lang.SaveOpCode, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.SaveOpCode,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.SaveOpCode";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.SaveOpCode",
			"name": "Bayrell.Lang.SaveOpCode",
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
			a.push("var_name");
			a.push("var_content");
			a.push("content");
			a.push("op_code");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.SaveOpCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "var_content") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.SaveOpCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "content") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.SaveOpCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op_code") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.SaveOpCode",
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
Runtime.rtl.defClass(Bayrell.Lang.SaveOpCode);
window["Bayrell.Lang.SaveOpCode"] = Bayrell.Lang.SaveOpCode;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.SaveOpCode;
"use strict;"
/*!
 *  Bayrell Parser Library.
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.Exceptions == 'undefined') Bayrell.Lang.Exceptions = {};
Bayrell.Lang.Exceptions.ParserUnknownError = function(ctx, s, code, context, prev)
{
	if (prev == undefined) prev = null;
	if (code == -1)
	{
		code = Bayrell.Lang.LangConstant.ERROR_PARSER;
	}
	Runtime.Exceptions.RuntimeException.call(this, ctx, s, code, context, prev);
};
Bayrell.Lang.Exceptions.ParserUnknownError.prototype = Object.create(Runtime.Exceptions.RuntimeException.prototype);
Bayrell.Lang.Exceptions.ParserUnknownError.prototype.constructor = Bayrell.Lang.Exceptions.ParserUnknownError;
Object.assign(Bayrell.Lang.Exceptions.ParserUnknownError.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.Exceptions.ParserUnknownError)
		{
		}
		Runtime.Exceptions.RuntimeException.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Exceptions.RuntimeException.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Exceptions.RuntimeException.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.Exceptions.ParserUnknownError";
	},
});
Object.assign(Bayrell.Lang.Exceptions.ParserUnknownError, Runtime.Exceptions.RuntimeException);
Object.assign(Bayrell.Lang.Exceptions.ParserUnknownError,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.Exceptions";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserUnknownError";
	},
	getParentClassName: function()
	{
		return "Runtime.Exceptions.RuntimeException";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.Exceptions.ParserUnknownError",
			"name": "Bayrell.Lang.Exceptions.ParserUnknownError",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.Exceptions.ParserUnknownError);
window["Bayrell.Lang.Exceptions.ParserUnknownError"] = Bayrell.Lang.Exceptions.ParserUnknownError;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.Exceptions.ParserUnknownError;
"use strict;"
/*!
 *  Bayrell Parser Library.
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.Exceptions == 'undefined') Bayrell.Lang.Exceptions = {};
Bayrell.Lang.Exceptions.ParserError = function(ctx, s, caret, file, code, context, prev)
{
	if (file == undefined) file = "";
	if (prev == undefined) prev = null;
	Bayrell.Lang.Exceptions.ParserUnknownError.call(this, ctx, s, code, context, prev);
	this.error_line = caret.y + 1;
	this.error_pos = caret.x + 1;
	this.error_file = file;
	this.updateError(ctx);
};
Bayrell.Lang.Exceptions.ParserError.prototype = Object.create(Bayrell.Lang.Exceptions.ParserUnknownError.prototype);
Bayrell.Lang.Exceptions.ParserError.prototype.constructor = Bayrell.Lang.Exceptions.ParserError;
Object.assign(Bayrell.Lang.Exceptions.ParserError.prototype,
{
	buildMessage: function(ctx)
	{
		var error_str = this.error_str;
		var file = this.getFileName(ctx);
		var line = this.getErrorLine(ctx);
		var pos = this.getErrorPos(ctx);
		if (line != -1)
		{
			error_str += Runtime.rtl.toStr(" at Ln:" + Runtime.rtl.toStr(line) + Runtime.rtl.toStr(((pos != "") ? (", Pos:" + Runtime.rtl.toStr(pos)) : (""))));
		}
		if (file != "")
		{
			error_str += Runtime.rtl.toStr(" in file:'" + Runtime.rtl.toStr(file) + Runtime.rtl.toStr("'"));
		}
		return error_str;
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.Exceptions.ParserError)
		{
		}
		Bayrell.Lang.Exceptions.ParserUnknownError.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Bayrell.Lang.Exceptions.ParserUnknownError.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Bayrell.Lang.Exceptions.ParserUnknownError.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.Exceptions.ParserError";
	},
});
Object.assign(Bayrell.Lang.Exceptions.ParserError, Bayrell.Lang.Exceptions.ParserUnknownError);
Object.assign(Bayrell.Lang.Exceptions.ParserError,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.Exceptions";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserError";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserUnknownError";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.Exceptions.ParserError",
			"name": "Bayrell.Lang.Exceptions.ParserError",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.Exceptions.ParserError);
window["Bayrell.Lang.Exceptions.ParserError"] = Bayrell.Lang.Exceptions.ParserError;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.Exceptions.ParserError;
"use strict;"
/*!
 *  Bayrell Parser Library.
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.Exceptions == 'undefined') Bayrell.Lang.Exceptions = {};
Bayrell.Lang.Exceptions.ParserEOF = function(ctx, context, prev)
{
	if (prev == undefined) prev = null;
	Bayrell.Lang.Exceptions.ParserUnknownError.call(this, ctx, "ERROR_PARSER_EOF", Bayrell.Lang.LangConstant.ERROR_PARSER_EOF, context, prev);
};
Bayrell.Lang.Exceptions.ParserEOF.prototype = Object.create(Bayrell.Lang.Exceptions.ParserUnknownError.prototype);
Bayrell.Lang.Exceptions.ParserEOF.prototype.constructor = Bayrell.Lang.Exceptions.ParserEOF;
Object.assign(Bayrell.Lang.Exceptions.ParserEOF.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.Exceptions.ParserEOF)
		{
		}
		Bayrell.Lang.Exceptions.ParserUnknownError.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Bayrell.Lang.Exceptions.ParserUnknownError.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Bayrell.Lang.Exceptions.ParserUnknownError.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.Exceptions.ParserEOF";
	},
});
Object.assign(Bayrell.Lang.Exceptions.ParserEOF, Bayrell.Lang.Exceptions.ParserUnknownError);
Object.assign(Bayrell.Lang.Exceptions.ParserEOF,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.Exceptions";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserEOF";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserUnknownError";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.Exceptions.ParserEOF",
			"name": "Bayrell.Lang.Exceptions.ParserEOF",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.Exceptions.ParserEOF);
window["Bayrell.Lang.Exceptions.ParserEOF"] = Bayrell.Lang.Exceptions.ParserEOF;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.Exceptions.ParserEOF;
"use strict;"
/*!
 *  Bayrell Parser Library.
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.Exceptions == 'undefined') Bayrell.Lang.Exceptions = {};
Bayrell.Lang.Exceptions.ParserExpected = function(ctx, s, caret, file, context, prev)
{
	if (file == undefined) file = "";
	if (prev == undefined) prev = null;
	Bayrell.Lang.Exceptions.ParserError.call(this, ctx, s + Runtime.rtl.toStr(" expected"), caret, file, Bayrell.Lang.LangConstant.ERROR_PARSER_EXPECTED, context, prev);
};
Bayrell.Lang.Exceptions.ParserExpected.prototype = Object.create(Bayrell.Lang.Exceptions.ParserError.prototype);
Bayrell.Lang.Exceptions.ParserExpected.prototype.constructor = Bayrell.Lang.Exceptions.ParserExpected;
Object.assign(Bayrell.Lang.Exceptions.ParserExpected.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.Exceptions.ParserExpected)
		{
		}
		Bayrell.Lang.Exceptions.ParserError.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Bayrell.Lang.Exceptions.ParserError.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Bayrell.Lang.Exceptions.ParserError.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.Exceptions.ParserExpected";
	},
});
Object.assign(Bayrell.Lang.Exceptions.ParserExpected, Bayrell.Lang.Exceptions.ParserError);
Object.assign(Bayrell.Lang.Exceptions.ParserExpected,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.Exceptions";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserExpected";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.Exceptions.ParserError";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.Exceptions.ParserExpected",
			"name": "Bayrell.Lang.Exceptions.ParserExpected",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.Exceptions.ParserExpected);
window["Bayrell.Lang.Exceptions.ParserExpected"] = Bayrell.Lang.Exceptions.ParserExpected;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.Exceptions.ParserExpected;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBay = function(ctx)
{
	Bayrell.Lang.CoreParser.apply(this, arguments);
};
Bayrell.Lang.LangBay.ParserBay.prototype = Object.create(Bayrell.Lang.CoreParser.prototype);
Bayrell.Lang.LangBay.ParserBay.prototype.constructor = Bayrell.Lang.LangBay.ParserBay;
Object.assign(Bayrell.Lang.LangBay.ParserBay.prototype,
{
	_init: function(ctx)
	{
		this.vars = null;
		this.uses = null;
		this.current_namespace = null;
		this.current_class = null;
		this.current_namespace_name = "";
		this.current_class_name = "";
		this.current_class_kind = "";
		this.find_identifier = true;
		this.skip_comments = true;
		this.pipe_kind = "";
		this.is_pipe = false;
		this.is_html = false;
		this.parser_base = null;
		this.parser_expression = null;
		this.parser_html = null;
		this.parser_operator = null;
		this.parser_preprocessor = null;
		this.parser_program = null;
		Bayrell.Lang.CoreParser.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBay)
		{
			this.vars = o.vars;
			this.uses = o.uses;
			this.current_namespace = o.current_namespace;
			this.current_class = o.current_class;
			this.current_namespace_name = o.current_namespace_name;
			this.current_class_name = o.current_class_name;
			this.current_class_kind = o.current_class_kind;
			this.find_identifier = o.find_identifier;
			this.skip_comments = o.skip_comments;
			this.pipe_kind = o.pipe_kind;
			this.is_pipe = o.is_pipe;
			this.is_html = o.is_html;
			this.parser_base = o.parser_base;
			this.parser_expression = o.parser_expression;
			this.parser_html = o.parser_html;
			this.parser_operator = o.parser_operator;
			this.parser_preprocessor = o.parser_preprocessor;
			this.parser_program = o.parser_program;
		}
		Bayrell.Lang.CoreParser.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "vars")this.vars = v;
		else if (k == "uses")this.uses = v;
		else if (k == "current_namespace")this.current_namespace = v;
		else if (k == "current_class")this.current_class = v;
		else if (k == "current_namespace_name")this.current_namespace_name = v;
		else if (k == "current_class_name")this.current_class_name = v;
		else if (k == "current_class_kind")this.current_class_kind = v;
		else if (k == "find_identifier")this.find_identifier = v;
		else if (k == "skip_comments")this.skip_comments = v;
		else if (k == "pipe_kind")this.pipe_kind = v;
		else if (k == "is_pipe")this.is_pipe = v;
		else if (k == "is_html")this.is_html = v;
		else if (k == "parser_base")this.parser_base = v;
		else if (k == "parser_expression")this.parser_expression = v;
		else if (k == "parser_html")this.parser_html = v;
		else if (k == "parser_operator")this.parser_operator = v;
		else if (k == "parser_preprocessor")this.parser_preprocessor = v;
		else if (k == "parser_program")this.parser_program = v;
		else Bayrell.Lang.CoreParser.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "vars")return this.vars;
		else if (k == "uses")return this.uses;
		else if (k == "current_namespace")return this.current_namespace;
		else if (k == "current_class")return this.current_class;
		else if (k == "current_namespace_name")return this.current_namespace_name;
		else if (k == "current_class_name")return this.current_class_name;
		else if (k == "current_class_kind")return this.current_class_kind;
		else if (k == "find_identifier")return this.find_identifier;
		else if (k == "skip_comments")return this.skip_comments;
		else if (k == "pipe_kind")return this.pipe_kind;
		else if (k == "is_pipe")return this.is_pipe;
		else if (k == "is_html")return this.is_html;
		else if (k == "parser_base")return this.parser_base;
		else if (k == "parser_expression")return this.parser_expression;
		else if (k == "parser_html")return this.parser_html;
		else if (k == "parser_operator")return this.parser_operator;
		else if (k == "parser_preprocessor")return this.parser_preprocessor;
		else if (k == "parser_program")return this.parser_program;
		return Bayrell.Lang.CoreParser.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangBay.ParserBay";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBay, Bayrell.Lang.CoreParser);
Object.assign(Bayrell.Lang.LangBay.ParserBay,
{
	/**
	 * Reset parser
	 */
	reset: function(ctx, parser)
	{
		return parser.copy(ctx, Runtime.Dict.from({"vars":new Runtime.Dict(ctx),"uses":new Runtime.Dict(ctx),"caret":new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({})),"token":null,"parser_base":new Bayrell.Lang.LangBay.ParserBayBase(ctx),"parser_expression":new Bayrell.Lang.LangBay.ParserBayExpression(ctx),"parser_html":new Bayrell.Lang.LangBay.ParserBayHtml(ctx),"parser_operator":new Bayrell.Lang.LangBay.ParserBayOperator(ctx),"parser_preprocessor":new Bayrell.Lang.LangBay.ParserBayPreprocessor(ctx),"parser_program":new Bayrell.Lang.LangBay.ParserBayProgram(ctx)}));
	},
	/**
	 * Parse file and convert to BaseOpCode
	 */
	parse: function(ctx, parser, content)
	{
		parser = this.reset(ctx, parser);
		parser = this.setContent(ctx, parser, content);
		return parser.parser_program.constructor.readProgram(ctx, parser);
	},
	/**
	 * Find module name
	 */
	findModuleName: function(ctx, parser, module_name)
	{
		if (module_name == "Collection")
		{
			return "Runtime.Collection";
		}
		else if (module_name == "Dict")
		{
			return "Runtime.Dict";
		}
		else if (module_name == "Map")
		{
			return "Runtime.Map";
		}
		else if (module_name == "Vector")
		{
			return "Runtime.Vector";
		}
		else if (module_name == "rs")
		{
			return "Runtime.rs";
		}
		else if (module_name == "rtl")
		{
			return "Runtime.rtl";
		}
		else if (module_name == "ArrayInterface")
		{
			return "";
		}
		else if (parser.uses.has(ctx, module_name))
		{
			return parser.uses.item(ctx, module_name);
		}
		return module_name;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBay";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.CoreParser";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": "Bayrell.Lang.LangBay.ParserBay",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("vars");
			a.push("uses");
			a.push("current_namespace");
			a.push("current_class");
			a.push("current_namespace_name");
			a.push("current_class_name");
			a.push("current_class_kind");
			a.push("find_identifier");
			a.push("skip_comments");
			a.push("pipe_kind");
			a.push("is_pipe");
			a.push("is_html");
			a.push("parser_base");
			a.push("parser_expression");
			a.push("parser_html");
			a.push("parser_operator");
			a.push("parser_preprocessor");
			a.push("parser_program");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "vars") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "uses") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_namespace") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_namespace_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "current_class_kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "find_identifier") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "skip_comments") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pipe_kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_pipe") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_base") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_operator") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_preprocessor") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "parser_program") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangBay.ParserBay",
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBay);
window["Bayrell.Lang.LangBay.ParserBay"] = Bayrell.Lang.LangBay.ParserBay;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBay;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayBase = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangBay.ParserBayBase.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayBase)
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
		return "Bayrell.Lang.LangBay.ParserBayBase";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayBase,
{
	/**
	 * Return true if is char
	 * @param char ch
	 * @return boolean
	 */
	isChar: function(ctx, ch)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isChar", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var __memorize_value = Runtime.rs.strpos(ctx, "qazwsxedcrfvtgbyhnujmikolp", Runtime.rs.strtolower(ctx, ch)) !== -1;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isChar", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Return true if is number
	 * @param char ch
	 * @return boolean
	 */
	isNumber: function(ctx, ch)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isNumber", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var __memorize_value = Runtime.rs.strpos(ctx, "0123456789", ch) !== -1;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isNumber", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Return true if char is number
	 * @param char ch
	 * @return boolean
	 */
	isHexChar: function(ctx, ch)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isHexChar", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var __memorize_value = Runtime.rs.strpos(ctx, "0123456789abcdef", Runtime.rs.strtolower(ctx, ch)) !== -1;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isHexChar", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Return true if is string of numbers
	 * @param string s
	 * @return boolean
	 */
	isStringOfNumbers: function(ctx, s)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isStringOfNumbers", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var sz = Runtime.rs.strlen(ctx, s);
		for (var i = 0;i < sz;i++)
		{
			if (!this.isNumber(ctx, Runtime.rs.charAt(ctx, s, i)))
			{
				var __memorize_value = false;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isStringOfNumbers", arguments, __memorize_value);
				return __memorize_value;
			}
		}
		var __memorize_value = true;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isStringOfNumbers", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Is system type
	 */
	isSystemType: function(ctx, name)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		if (name == "var")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "void")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "bool")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "byte")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "int")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "double")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "float")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "char")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "string")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "list")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "scalar")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "primitive")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "html")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Error")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Object")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "DateTime")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Collection")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Dict")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Vector")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "Map")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "rs")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "rtl")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "ArrayInterface")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSystemType", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Returns true if name is identifier
	 */
	isIdentifier: function(ctx, name)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		if (name == "")
		{
			var __memorize_value = false;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "@")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments, __memorize_value);
			return __memorize_value;
		}
		if (this.isNumber(ctx, Runtime.rs.charAt(ctx, name, 0)))
		{
			var __memorize_value = false;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments, __memorize_value);
			return __memorize_value;
		}
		var sz = Runtime.rs.strlen(ctx, name);
		for (var i = 0;i < sz;i++)
		{
			var ch = Runtime.rs.charAt(ctx, name, i);
			if (this.isChar(ctx, ch) || this.isNumber(ctx, ch) || ch == "_")
			{
				continue;
			}
			var __memorize_value = false;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = true;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isIdentifier", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Returns true if reserved words
	 */
	isReserved: function(ctx, name)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isReserved", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		if (name == "__async_t")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isReserved", arguments, __memorize_value);
			return __memorize_value;
		}
		if (name == "__async_var")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isReserved", arguments, __memorize_value);
			return __memorize_value;
		}
		/*if (name == "__ctx") return true;*/
		/*if (name == "ctx") return true;*/
		if (Runtime.rs.substr(ctx, name, 0, 3) == "__v")
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isReserved", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isReserved", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Returns kind of identifier or thrown Error
	 */
	findIdentifier: function(ctx, parser, name, caret)
	{
		var kind = "";
		if (parser.vars.has(ctx, name))
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_VARIABLE;
		}
		else if (parser.uses.has(ctx, name))
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_MODULE;
		}
		else if (this.isSystemType(ctx, name))
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE;
		}
		else if (name == "log")
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_FUNCTION;
		}
		else if (name == "null" || name == "true" || name == "false")
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_CONSTANT;
		}
		else if (name == "fn")
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_FUNCTION;
		}
		else if (name == "@" || name == "_")
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_CONTEXT;
		}
		else if (name == "static" || name == "self" || name == "this" || name == "parent")
		{
			kind = Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF;
		}
		return kind;
	},
	/**
	 * Return true if char is token char
	 * @param {char} ch
	 * @return {boolean}
	 */
	isTokenChar: function(ctx, ch)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isTokenChar", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var __memorize_value = Runtime.rs.strpos(ctx, "qazwsxedcrfvtgbyhnujmikolp0123456789_", Runtime.rs.strtolower(ctx, ch)) !== -1;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isTokenChar", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Return true if char is system or space. ASCII code <= 32.
	 * @param char ch
	 * @return boolean
	 */
	isSkipChar: function(ctx, ch)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayBase.isSkipChar", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		if (Runtime.rs.ord(ctx, ch) <= 32)
		{
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSkipChar", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayBase.isSkipChar", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Returns next X
	 */
	nextX: function(ctx, parser, ch, x, direction)
	{
		if (direction == undefined) direction = 1;
		if (ch == "\t")
		{
			return x + parser.tab_size * direction;
		}
		if (ch == "\n")
		{
			return 0;
		}
		return x + direction;
	},
	/**
	 * Returns next Y
	 */
	nextY: function(ctx, parser, ch, y, direction)
	{
		if (direction == undefined) direction = 1;
		if (ch == "\n")
		{
			return y + direction;
		}
		return y;
	},
	/**
	 * Returns next
	 */
	next: function(ctx, parser, s, x, y, pos)
	{
		var sz = Runtime.rs.strlen(ctx, s);
		for (var i = 0;i < sz;i++)
		{
			var ch = Runtime.rs.substr(ctx, s, i, 1);
			x = this.nextX(ctx, parser, ch, x);
			y = this.nextY(ctx, parser, ch, y);
			pos = pos + 1;
		}
		return Runtime.Collection.from([x,y,pos]);
	},
	/**
	 * Open comment
	 */
	isCommentOpen: function(ctx, str, skip_comments)
	{
		return skip_comments && str == "/*";
	},
	/**
	 * Close comment
	 */
	isCommentClose: function(ctx, str)
	{
		return str == "*/";
	},
	/**
	 * Skip char
	 */
	skipChar: function(ctx, parser, content, start_pos)
	{
		var x = start_pos.x;
		var y = start_pos.y;
		var pos = start_pos.pos;
		var skip_comments = parser.skip_comments;
		/* Check boundaries */
		if (pos >= parser.content_sz)
		{
			throw new Bayrell.Lang.Exceptions.ParserEOF(ctx)
		}
		var ch = Runtime.rs.charAt(ctx, content.ref, pos);
		var ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
		while ((this.isSkipChar(ctx, ch) || this.isCommentOpen(ctx, ch2, skip_comments)) && pos < parser.content_sz)
		{
			if (this.isCommentOpen(ctx, ch2, skip_comments))
			{
				ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
				while (!this.isCommentClose(ctx, ch2) && pos < parser.content_sz)
				{
					x = this.nextX(ctx, parser, ch, x);
					y = this.nextY(ctx, parser, ch, y);
					pos = pos + 1;
					if (pos >= parser.content_sz)
					{
						break;
					}
					ch = Runtime.rs.charAt(ctx, content.ref, pos);
					ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
				}
				if (this.isCommentClose(ctx, ch2))
				{
					x = x + 2;
					pos = pos + 2;
				}
			}
			else
			{
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			if (pos >= parser.content_sz)
			{
				break;
			}
			ch = Runtime.rs.charAt(ctx, content.ref, pos);
			ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
		}
		return new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"pos":pos,"x":x,"y":y}));
	},
	/**
	 * Read special token
	 */
	readSpecialToken: function(ctx, parser, content, start_pos)
	{
		var pos = start_pos.pos;
		var s = "";
		s = Runtime.rs.substr(ctx, content.ref, pos, 10);
		if (s == "#endswitch")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 7);
		if (s == "#ifcode" || s == "#switch" || s == "#elseif" || s == "%render")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 6);
		if (s == "#endif" || s == "#ifdef" || s == "%while")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 5);
		if (s == "#case" || s == "%else")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 4);
		if (s == "@css" || s == "%for" || s == "%var")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 3);
		if (s == "!--" || s == "!==" || s == "===" || s == "..." || s == "#if" || s == "%if")
		{
			return s;
		}
		s = Runtime.rs.substr(ctx, content.ref, pos, 2);
		if (s == "==" || s == "!=" || s == "<=" || s == ">=" || s == "=>" || s == "->" || s == "|>" || s == "::" || s == "+=" || s == "-=" || s == "~=" || s == "**" || s == "<<" || s == ">>" || s == "++" || s == "--")
		{
			return s;
		}
		return "";
	},
	/**
	 * Read next token and return caret end
	 */
	nextToken: function(ctx, parser, content, start_pos)
	{
		var is_first = true;
		var x = start_pos.x;
		var y = start_pos.y;
		var pos = start_pos.pos;
		/* Check boundaries */
		if (pos >= parser.content_sz)
		{
			throw new Bayrell.Lang.Exceptions.ParserEOF(ctx)
		}
		var s = this.readSpecialToken(ctx, parser, content, start_pos);
		if (s != "")
		{
			var sz = Runtime.rs.strlen(ctx, s);
			for (var i = 0;i < sz;i++)
			{
				var ch = Runtime.rs.charAt(ctx, s, i);
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			return new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"pos":pos,"x":x,"y":y}));
		}
		var ch = Runtime.rs.charAt(ctx, content.ref, pos);
		if (!this.isTokenChar(ctx, ch))
		{
			x = this.nextX(ctx, parser, ch, x);
			y = this.nextY(ctx, parser, ch, y);
			pos = pos + 1;
		}
		else
		{
			while (this.isTokenChar(ctx, ch))
			{
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
				if (pos >= parser.content_sz)
				{
					break;
				}
				ch = Runtime.rs.charAt(ctx, content.ref, pos);
			}
		}
		return new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"pos":pos,"x":x,"y":y}));
	},
	/**
	 * Read back
	 */
	readBack: function(ctx, parser, search)
	{
		if (search == undefined) search = "";
		var content = parser.content;
		var caret = parser.caret;
		var x = caret.x;
		var y = caret.y;
		var pos = caret.pos;
		var search_sz = Runtime.rs.strlen(ctx, search);
		var s = "";
		while (pos >= 0)
		{
			var ch = Runtime.rs.charAt(ctx, content.ref, pos);
			x = this.nextX(ctx, parser, ch, x, -1);
			y = this.nextY(ctx, parser, ch, y, -1);
			pos--;
			s = Runtime.rs.substr(ctx, content.ref, pos, search_sz);
			if (s == search)
			{
				break;
			}
		}
		return parser.copy(ctx, Runtime.Dict.from({"caret":new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"pos":pos,"x":x,"y":y}))}));
	},
	/**
	 * Read next token
	 */
	readToken: function(ctx, parser)
	{
		var caret_start = null;
		var caret_end = null;
		var eof = false;
		try
		{
			caret_start = this.skipChar(ctx, parser, parser.content, parser.caret);
			caret_end = this.nextToken(ctx, parser, parser.content, caret_start);
		}
		catch (_ex)
		{
			if (_ex instanceof Bayrell.Lang.Exceptions.ParserEOF)
			{
				var e = _ex;
				
				if (caret_start == null)
				{
					caret_start = parser.caret;
				}
				if (caret_end == null)
				{
					caret_end = caret_start;
				}
				eof = true;
			}
			else if (true)
			{
				var e = _ex;
				
				throw e
			}
			else
			{
				throw _ex;
			}
		}
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"caret":caret_end})),new Bayrell.Lang.CoreToken(ctx, Runtime.Dict.from({"content":Runtime.rs.substr(ctx, parser.content.ref, caret_start.pos, caret_end.pos - caret_start.pos),"caret_start":caret_start,"caret_end":caret_end,"eof":eof}))]);
	},
	/**
	 * Look next token
	 */
	lookToken: function(ctx, parser, token)
	{
		var token_content = "";
		var content = parser.content;
		var caret_start = null;
		var caret_end = null;
		var sz = Runtime.rs.strlen(ctx, token);
		var eof = false;
		var find = false;
		try
		{
			caret_start = this.skipChar(ctx, parser, content, parser.caret);
			var pos = caret_start.pos;
			var x = caret_start.x;
			var y = caret_start.y;
			token_content = Runtime.rs.substr(ctx, content.ref, pos, sz);
			if (token_content == token)
			{
				find = true;
			}
			var res = this.next(ctx, parser, token_content, x, y, pos);
			x = Runtime.rtl.get(ctx, res, 0);
			y = Runtime.rtl.get(ctx, res, 1);
			pos = Runtime.rtl.get(ctx, res, 2);
			caret_end = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"pos":pos,"x":x,"y":y}));
		}
		catch (_ex)
		{
			if (_ex instanceof Bayrell.Lang.Exceptions.ParserEOF)
			{
				var e = _ex;
				
				if (caret_start == null)
				{
					caret_start = parser.caret;
				}
				if (caret_end == null)
				{
					caret_end = caret_start;
				}
				eof = true;
			}
			else if (true)
			{
				var e = _ex;
				
				throw e
			}
			else
			{
				throw _ex;
			}
		}
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"caret":caret_end})),new Bayrell.Lang.CoreToken(ctx, Runtime.Dict.from({"content":token_content,"caret_start":caret_start,"caret_end":caret_end,"eof":eof})),find]);
	},
	/**
	 * Match next token
	 */
	matchToken: function(ctx, parser, next_token)
	{
		var token = null;
		/* Look token */
		var res = this.lookToken(ctx, parser, next_token);
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var find = Runtime.rtl.get(ctx, res, 2);
		if (!find)
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, next_token, token.caret_start, parser.file_name)
		}
		return Runtime.Collection.from([parser,token]);
	},
	/**
	 * Match next string
	 */
	matchString: function(ctx, parser, str1)
	{
		var caret = parser.caret;
		var sz = Runtime.rs.strlen(ctx, str1);
		var str2 = Runtime.rs.substr(ctx, parser.content.ref, caret.pos, sz);
		if (str1 != str2)
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, str1, caret, parser.file_name)
		}
		var res = this.next(ctx, parser, str1, caret.x, caret.y, caret.pos);
		caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":Runtime.rtl.get(ctx, res, 0),"y":Runtime.rtl.get(ctx, res, 1),"pos":Runtime.rtl.get(ctx, res, 2)}));
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read number
	 */
	readNumber: function(ctx, parser)
	{
		var token = null;
		var start = parser;
		/* Read token */
		var res = this.readToken(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		if (token.content == "")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Number", caret_start, parser.file_name)
		}
		if (!this.isStringOfNumbers(ctx, token.content))
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Number", caret_start, parser.file_name)
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpNumber(ctx, Runtime.Dict.from({"value":token.content,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read string
	 */
	readUntilStringArr: function(ctx, parser, arr, flag_include)
	{
		if (flag_include == undefined) flag_include = true;
		var token = null;
		var look = null;
		var content = parser.content;
		var content_sz = parser.content_sz;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		/* Search next string in arr */
		var search = (ctx, pos) => 
		{
			for (var i = 0;i < arr.count(ctx);i++)
			{
				var item = arr.item(ctx, i);
				var sz = Runtime.rs.strlen(ctx, item);
				var str = Runtime.rs.substr(ctx, content.ref, pos, sz);
				if (str == item)
				{
					return i;
				}
			}
			return -1;
		};
		/* Start and end positionss */
		var start_pos = pos;
		var end_pos = pos;
		/* Read string value */
		var ch = "";
		var arr_pos = search(ctx, pos);
		while (pos < content_sz && arr_pos == -1)
		{
			ch = Runtime.rs.charAt(ctx, content.ref, pos);
			x = this.nextX(ctx, parser, ch, x);
			y = this.nextY(ctx, parser, ch, y);
			pos = pos + 1;
			if (pos >= content_sz)
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, Runtime.rs.join(ctx, ",", arr), new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), parser.file_name)
			}
			arr_pos = search(ctx, pos);
		}
		if (arr_pos == -1)
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of string", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), parser.file_name)
		}
		if (!flag_include)
		{
			end_pos = pos;
		}
		else
		{
			var item = arr.item(ctx, arr_pos);
			var sz = Runtime.rs.strlen(ctx, item);
			for (var i = 0;i < sz;i++)
			{
				ch = Runtime.rs.charAt(ctx, content.ref, pos);
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			end_pos = pos;
		}
		/* Return result */
		var caret_end = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":end_pos}));
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"caret":caret_end})),Runtime.rs.substr(ctx, content.ref, start_pos, end_pos - start_pos)]);
	},
	/**
	 * Read string
	 */
	readString: function(ctx, parser)
	{
		var token = null;
		var look = null;
		/* Read token */
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var str_char = token.content;
		/* Read begin string char */
		if (str_char != "'" && str_char != "\"")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "String", caret_start, parser.file_name)
		}
		var content = look.content;
		var content_sz = look.content_sz;
		var pos = look.caret.pos;
		var x = look.caret.x;
		var y = look.caret.y;
		/* Read string value */
		var value_str = "";
		var ch = Runtime.rs.charAt(ctx, content.ref, pos);
		while (pos < content_sz && ch != str_char)
		{
			if (ch == "\\")
			{
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
				if (pos >= content_sz)
				{
					throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of string", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), parser.file_name)
				}
				var ch2 = Runtime.rs.charAt(ctx, content.ref, pos);
				if (ch2 == "n")
				{
					value_str += Runtime.rtl.toStr("\n");
				}
				else if (ch2 == "r")
				{
					value_str += Runtime.rtl.toStr("\r");
				}
				else if (ch2 == "t")
				{
					value_str += Runtime.rtl.toStr("\t");
				}
				else if (ch2 == "s")
				{
					value_str += Runtime.rtl.toStr(" ");
				}
				else if (ch2 == "\\")
				{
					value_str += Runtime.rtl.toStr("\\");
				}
				else if (ch2 == "'")
				{
					value_str += Runtime.rtl.toStr("'");
				}
				else if (ch2 == "\"")
				{
					value_str += Runtime.rtl.toStr("\"");
				}
				x = this.nextX(ctx, parser, ch2, x);
				y = this.nextY(ctx, parser, ch2, y);
				pos = pos + 1;
			}
			else
			{
				value_str += Runtime.rtl.toStr(ch);
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			if (pos >= content_sz)
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of string", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), parser.file_name)
			}
			ch = Runtime.rs.charAt(ctx, content.ref, pos);
		}
		/* Read end string char */
		if (ch != "'" && ch != "\"")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of string", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), parser.file_name)
		}
		x = this.nextX(ctx, parser, ch, x);
		y = this.nextY(ctx, parser, ch, y);
		pos = pos + 1;
		/* Return result */
		var caret_end = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"caret":caret_end})),new Bayrell.Lang.OpCodes.OpString(ctx, Runtime.Dict.from({"value":value_str,"caret_start":caret_start,"caret_end":caret_end}))]);
	},
	/**
	 * Read comment
	 */
	readComment: function(ctx, parser)
	{
		var start = parser;
		var token = null;
		var look = null;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = Bayrell.Lang.LangBay.ParserBayBase.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		if (token.content == "/")
		{
			parser = look;
			var content = look.content;
			var content_sz = look.content_sz;
			var pos = look.caret.pos;
			var x = look.caret.x;
			var y = look.caret.y;
			var pos_start = pos;
			var ch = Runtime.rs.charAt(ctx, content.ref, pos);
			var ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
			while (!this.isCommentClose(ctx, ch2) && pos < content_sz)
			{
				x = this.nextX(ctx, parser, ch, x);
				y = this.nextY(ctx, parser, ch, y);
				pos = pos + 1;
				if (pos >= parser.content_sz)
				{
					break;
				}
				ch = Runtime.rs.charAt(ctx, content.ref, pos);
				ch2 = Runtime.rs.substr(ctx, content.ref, pos, 2);
			}
			var pos_end = pos;
			if (this.isCommentClose(ctx, ch2))
			{
				x = x + 2;
				pos = pos + 2;
			}
			else
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of comment", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), start.file_name)
			}
			/* Return result */
			var value_str = Runtime.rs.substr(ctx, content.ref, pos_start + 1, pos_end - pos_start - 1);
			var caret_end = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
			return Runtime.Collection.from([start.copy(ctx, Runtime.Dict.from({"caret":caret_end})),new Bayrell.Lang.OpCodes.OpComment(ctx, Runtime.Dict.from({"value":value_str,"caret_start":caret_start,"caret_end":caret_end}))]);
		}
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read identifier
	 */
	readIdentifier: function(ctx, parser, find_ident)
	{
		if (find_ident == undefined) find_ident = false;
		var start = parser;
		var token = null;
		var look = null;
		var name = "";
		var res = Bayrell.Lang.LangBay.ParserBayBase.readToken(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Identifier", token.caret_start, parser.file_name)
		}
		if (!this.isIdentifier(ctx, token.content))
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Identifier", token.caret_start, parser.file_name)
		}
		if (this.isReserved(ctx, token.content))
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Identifier " + Runtime.rtl.toStr(token.content) + Runtime.rtl.toStr(" is reserverd"), token.caret_start, parser.file_name)
		}
		name = token.content;
		var kind = this.findIdentifier(ctx, parser, name, token.caret_start);
		if (parser.find_ident && find_ident && kind == "")
		{
			throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Unknown identifier '" + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("'"), token.caret_start, parser.file_name)
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"kind":kind,"value":name,"caret_start":token.caret_start,"caret_end":token.caret_end}))]);
	},
	/**
	 * Read entity name
	 */
	readEntityName: function(ctx, parser, find_ident)
	{
		if (find_ident == undefined) find_ident = true;
		var look = null;
		var token = null;
		var ident = null;
		var names = new Runtime.Vector(ctx);
		var res = parser.parser_base.constructor.readIdentifier(ctx, parser, find_ident);
		parser = Runtime.rtl.get(ctx, res, 0);
		ident = Runtime.rtl.get(ctx, res, 1);
		var caret_start = ident.caret_start;
		var name = ident.value;
		names.push(ctx, name);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content == ".")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ".");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			ident = Runtime.rtl.get(ctx, res, 1);
			name = ident.value;
			names.push(ctx, name);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpEntityName(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"names":names.toCollection(ctx)}))]);
	},
	/**
	 * Read type identifier
	 */
	readTypeIdentifier: function(ctx, parser, find_ident)
	{
		if (find_ident == undefined) find_ident = true;
		var start = parser;
		var look = null;
		var token = null;
		var op_code = null;
		var entity_name = null;
		var template = null;
		var res = this.readEntityName(ctx, parser, find_ident);
		parser = Runtime.rtl.get(ctx, res, 0);
		entity_name = Runtime.rtl.get(ctx, res, 1);
		var caret_start = entity_name.caret_start;
		var flag_open_caret = false;
		var flag_end_caret = false;
		var res = this.lookToken(ctx, parser, "<");
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		flag_open_caret = Runtime.rtl.get(ctx, res, 2);
		if (flag_open_caret)
		{
			template = new Runtime.Vector(ctx);
			var res = this.matchToken(ctx, parser, "<");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = this.lookToken(ctx, parser, ">");
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			flag_end_caret = Runtime.rtl.get(ctx, res, 2);
			while (!token.eof && !flag_end_caret)
			{
				var parser_value = null;
				var res = this.readTypeIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				parser_value = Runtime.rtl.get(ctx, res, 1);
				template.push(ctx, parser_value);
				var res = this.lookToken(ctx, parser, ">");
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				flag_end_caret = Runtime.rtl.get(ctx, res, 2);
				if (!flag_end_caret)
				{
					var res = this.matchToken(ctx, parser, ",");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = this.lookToken(ctx, parser, ">");
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
					flag_end_caret = Runtime.rtl.get(ctx, res, 2);
				}
			}
			var res = this.matchToken(ctx, parser, ">");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpTypeIdentifier(ctx, Runtime.Dict.from({"entity_name":entity_name,"template":(template) ? (template.toCollection(ctx)) : (null),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read collection
	 */
	readCollection: function(ctx, parser)
	{
		var start = parser;
		var look = null;
		var token = null;
		var values = new Runtime.Vector(ctx);
		var ifdef_condition = null;
		var flag_ifdef = false;
		var res = this.matchToken(ctx, parser, "[");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content != "]")
		{
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "#ifdef")
			{
				parser = look;
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				ifdef_condition = Runtime.rtl.get(ctx, res, 1);
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "then");
				parser = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				flag_ifdef = true;
			}
			var parser_value = null;
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ",")
			{
				parser = look;
				var res = this.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
			}
			if (flag_ifdef)
			{
				parser_value = new Bayrell.Lang.OpCodes.OpPreprocessorIfDef(ctx, Runtime.Dict.from({"items":parser_value,"condition":ifdef_condition}));
			}
			values.push(ctx, parser_value);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "#endif")
			{
				parser = look;
				flag_ifdef = false;
				ifdef_condition = null;
			}
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		var res = this.matchToken(ctx, parser, "]");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpCollection(ctx, Runtime.Dict.from({"values":values.toCollection(ctx),"caret_start":caret_start,"caret_end":token.caret_end}))]);
	},
	/**
	 * Read collection
	 */
	readDict: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var values = new Runtime.Vector(ctx);
		var ifdef_condition = null;
		var flag_ifdef = false;
		var res = this.matchToken(ctx, parser, "{");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content != "}")
		{
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "#ifdef")
			{
				parser = look;
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				ifdef_condition = Runtime.rtl.get(ctx, res, 1);
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "then");
				parser = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				flag_ifdef = true;
			}
			var parser_value = null;
			var res = this.readString(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			var key = parser_value.value;
			var res = this.matchToken(ctx, parser, ":");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ",")
			{
				parser = look;
			}
			values.push(ctx, new Bayrell.Lang.OpCodes.OpDictPair(ctx, Runtime.Dict.from({"key":key,"value":parser_value,"condition":ifdef_condition})));
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "#endif")
			{
				parser = look;
				flag_ifdef = false;
				ifdef_condition = null;
			}
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		var res = this.matchToken(ctx, parser, "}");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpDict(ctx, Runtime.Dict.from({"values":values.toCollection(ctx),"caret_start":caret_start,"caret_end":token.caret_end}))]);
	},
	/**
	 * Read fixed
	 */
	readFixed: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var start = parser;
		var flag_negative = false;
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Identifier", token.caret_start, look.file_name)
		}
		/* Negative number */
		if (token.content == "-")
		{
			flag_negative = true;
			var res = this.readToken(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		/* Read string */
		if (!flag_negative && (token.content == "'" || token.content == "\""))
		{
			return this.readString(ctx, parser);
		}
		/* Read Collection */
		if (!flag_negative && token.content == "[")
		{
			return this.readCollection(ctx, parser);
		}
		/* Read Dict */
		if (!flag_negative && token.content == "{")
		{
			return this.readDict(ctx, parser);
		}
		/* Read Number */
		if (this.isStringOfNumbers(ctx, token.content))
		{
			return Runtime.Collection.from([look,new Bayrell.Lang.OpCodes.OpNumber(ctx, Runtime.Dict.from({"value":token.content,"caret_start":token.caret_start,"caret_end":look.caret,"negative":flag_negative}))]);
		}
		return this.readIdentifier(ctx, parser, true);
	},
	/**
	 * Read call args
	 */
	readCallArgs: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var items = new Runtime.Vector(ctx);
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "{")
		{
			var res = this.readDict(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			var d = Runtime.rtl.get(ctx, res, 1);
			items = Runtime.Collection.from([d]);
		}
		else if (token.content == "(")
		{
			var res = this.matchToken(ctx, parser, "(");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			while (!token.eof && token.content != ")")
			{
				var parser_value = null;
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				parser_value = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, parser_value);
				var res = this.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content == ",")
				{
					parser = look;
					var res = this.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
				}
			}
			var res = this.matchToken(ctx, parser, ")");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,items.toCollection(ctx)]);
	},
	/**
	 * Read new instance
	 */
	readNew: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var args = Runtime.Collection.from([]);
		var res = this.matchToken(ctx, parser, "new");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = this.readTypeIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var res = this.readToken(ctx, parser);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "(" || token.content == "{")
		{
			var res = this.readCallArgs(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			args = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			this.matchToken(ctx, parser, "(");
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpNew(ctx, Runtime.Dict.from({"args":args,"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read method
	 */
	readMethod: function(ctx, parser, match)
	{
		if (match == undefined) match = true;
		var look = null;
		var token = null;
		var parser_value = null;
		var op_code = null;
		var value1 = "";
		var value2 = "";
		var kind = "";
		var caret_start = parser.caret;
		if (match)
		{
			var res = this.matchToken(ctx, parser, "method");
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		var save = parser;
		/* Read static method */
		try
		{
			var res = this.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			var res = this.matchToken(ctx, parser, "::");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = this.readToken(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_VARIABLE)
			{
				kind = Bayrell.Lang.OpCodes.OpMethod.KIND_STATIC;
			}
			else
			{
				kind = Bayrell.Lang.OpCodes.OpMethod.KIND_CLASS;
			}
			value1 = op_code;
			value2 = token.content;
		}
		catch (_ex)
		{
			if (_ex instanceof Bayrell.Lang.Exceptions.ParserError)
			{
				var e = _ex;
			}
			else
			{
				throw _ex;
			}
		}
		/* Read instance method */
		if (kind == "")
		{
			parser = save;
			try
			{
				var res = this.readIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				var res = this.matchToken(ctx, parser, ".");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readToken(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				kind = Bayrell.Lang.OpCodes.OpMethod.KIND_ATTR;
				value1 = op_code;
				value2 = token.content;
			}
			catch (_ex)
			{
				if (_ex instanceof Bayrell.Lang.Exceptions.ParserError)
				{
					var e = _ex;
				}
				else
				{
					throw _ex;
				}
			}
		}
		/* Error */
		if (kind == "")
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "'.' or '::'", parser.caret, parser.file_name)
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpMethod(ctx, Runtime.Dict.from({"value1":value1,"value2":value2,"kind":kind,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read curry
	 */
	readCurry: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var obj = null;
		var args = new Runtime.Vector(ctx);
		var res = this.matchToken(ctx, parser, "curry");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = this.readDynamic(ctx, parser, 14);
		parser = Runtime.rtl.get(ctx, res, 0);
		obj = Runtime.rtl.get(ctx, res, 1);
		var res = this.matchToken(ctx, parser, "(");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content != ")")
		{
			var arg = null;
			if (token.content == "?")
			{
				var pos = 0;
				parser = look;
				var res = this.readToken(ctx, look);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (this.isStringOfNumbers(ctx, token.content))
				{
					pos = Runtime.rtl.to(token.content, {"e":"int"});
					parser = look;
				}
				arg = new Bayrell.Lang.OpCodes.OpCurryArg(ctx, Runtime.Dict.from({"pos":pos}));
				args.push(ctx, arg);
			}
			else
			{
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				arg = Runtime.rtl.get(ctx, res, 1);
				args.push(ctx, arg);
			}
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ",")
			{
				parser = look;
				var res = this.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
			}
		}
		var res = this.matchToken(ctx, parser, ")");
		parser = Runtime.rtl.get(ctx, res, 0);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpCurry(ctx, Runtime.Dict.from({"obj":obj,"args":args}))]);
	},
	/**
	 * Read base item
	 */
	readBaseItem: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = look.caret;
		if (token.content == "new")
		{
			var res = this.readNew(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == "method")
		{
			var res = this.readMethod(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == "classof")
		{
			var res = this.readClassOf(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == "classref")
		{
			var res = this.readClassRef(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == "(")
		{
			var save_parser = parser;
			parser = look;
			/* Try to read OpTypeConvert */
			try
			{
				var res = this.readTypeIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var op_type = Runtime.rtl.get(ctx, res, 1);
				var res = this.readToken(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content == ")")
				{
					var res = this.readDynamic(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					op_code = Runtime.rtl.get(ctx, res, 1);
					return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpTypeConvert(ctx, Runtime.Dict.from({"pattern":op_type,"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
				}
			}
			catch (_ex)
			{
				if (_ex instanceof Bayrell.Lang.Exceptions.ParserError)
				{
					var e = _ex;
				}
				else
				{
					throw _ex;
				}
			}
			/* Read Expression */
			var res = this.matchToken(ctx, save_parser, "(");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			var res = this.matchToken(ctx, parser, ")");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		else
		{
			var res = this.readFixed(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read classof
	 */
	readClassOf: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var res = this.matchToken(ctx, parser, "classof");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = this.readEntityName(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpClassOf(ctx, Runtime.Dict.from({"entity_name":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read classref
	 */
	readClassRef: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var res = this.matchToken(ctx, parser, "classref");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpClassRef(ctx, Runtime.Dict.from({"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read dynamic
	 */
	readDynamic: function(ctx, parser, dynamic_flags)
	{
		if (dynamic_flags == undefined) dynamic_flags = -1;
		var look = null;
		var token = null;
		var parser_items = null;
		var op_code = null;
		var op_code_first = null;
		var is_await = false;
		var is_context_call = true;
		var caret_start = null;
		/* Dynamic flags */
		var flag_call = 1;
		var flag_attr = 2;
		var flag_static = 4;
		var flag_dynamic = 8;
		var f_next = (ctx, s) => 
		{
			if ((dynamic_flags & 1) == 1)
			{
				if (s == "{" || s == "(" || s == "@")
				{
					return true;
				}
			}
			if ((dynamic_flags & 2) == 2)
			{
				if (s == ".")
				{
					return true;
				}
			}
			if ((dynamic_flags & 4) == 4)
			{
				if (s == "::")
				{
					return true;
				}
			}
			if ((dynamic_flags & 8) == 8)
			{
				if (s == "[")
				{
					return true;
				}
			}
			return false;
		};
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "await")
		{
			caret_start = token.caret_start;
			is_await = true;
			parser = look;
		}
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "@")
		{
			var res = this.readToken(ctx, look);
			var look2 = Runtime.rtl.get(ctx, res, 0);
			var token2 = Runtime.rtl.get(ctx, res, 1);
			if (!f_next(ctx, token2.content))
			{
				if (this.isIdentifier(ctx, token2.content))
				{
					parser = look;
					is_context_call = false;
				}
			}
		}
		var res = this.readBaseItem(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		op_code_first = op_code;
		if (caret_start == null)
		{
			caret_start = op_code.caret_start;
		}
		if (op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_CONTEXT || op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_FUNCTION)
		{
			is_context_call = false;
		}
		var res = this.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (f_next(ctx, token.content))
		{
			if (op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
			{
				if (parser.find_ident && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_FUNCTION && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_VARIABLE && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_MODULE && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF && op_code.kind != Bayrell.Lang.OpCodes.OpIdentifier.KIND_CONTEXT)
				{
					throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Module or variable '" + Runtime.rtl.toStr(op_code.value) + Runtime.rtl.toStr("'"), op_code.caret_start, parser.file_name)
				}
			}
			else if (op_code instanceof Bayrell.Lang.OpCodes.OpNew)
			{
			}
			else
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Module or variable", op_code.caret_start, parser.file_name)
			}
		}
		/* If is pipe */
		if (parser.is_pipe && op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			op_code = new Bayrell.Lang.OpCodes.OpAttr(ctx, Runtime.Dict.from({"kind":parser.pipe_kind,"obj":new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpIdentifier.KIND_PIPE,"caret_start":op_code.caret_start,"caret_end":op_code.caret_end})),"value":op_code,"caret_start":op_code.caret_start,"caret_end":op_code.caret_end}));
		}
		while (!token.eof && f_next(ctx, token.content))
		{
			var token_content = token.content;
			/* Static call */
			if (token_content == "(" || token_content == "{" || token_content == "@")
			{
				if ((dynamic_flags & flag_call) != flag_call)
				{
					throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Call are not allowed", token.caret_start, parser.file_name)
				}
				if (token_content == "@")
				{
					parser = look;
					is_context_call = false;
				}
				var res = this.readCallArgs(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				parser_items = Runtime.rtl.get(ctx, res, 1);
				op_code = new Bayrell.Lang.OpCodes.OpCall(ctx, Runtime.Dict.from({"obj":op_code,"args":parser_items,"caret_start":caret_start,"caret_end":parser.caret,"is_await":is_await,"is_context":is_context_call}));
				is_context_call = true;
			}
			else if (token_content == "." || token_content == "::" || token_content == "[")
			{
				var kind = "";
				var look_values = null;
				var look_value = null;
				parser = look;
				is_context_call = true;
				if (token_content == ".")
				{
					kind = Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR;
					if ((dynamic_flags & flag_attr) != flag_attr)
					{
						throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Attr are not allowed", token.caret_start, parser.file_name)
					}
				}
				else if (token_content == "::")
				{
					kind = Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC;
					if ((dynamic_flags & flag_static) != flag_static)
					{
						throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Static attr are not allowed", token.caret_start, parser.file_name)
					}
				}
				else if (token_content == "[")
				{
					kind = Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC;
					if ((dynamic_flags & flag_dynamic) != flag_dynamic)
					{
						throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Dynamic attr are not allowed", token.caret_start, parser.file_name)
					}
				}
				if (token_content == "[")
				{
					var res = parser.parser_expression.constructor.readExpression(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					look_value = Runtime.rtl.get(ctx, res, 1);
					var res = this.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
					if (token.content == ",")
					{
						look_values = new Runtime.Vector(ctx);
						look_values.push(ctx, look_value);
					}
					while (token.content == ",")
					{
						parser = look;
						var res = parser.parser_expression.constructor.readExpression(ctx, parser);
						parser = Runtime.rtl.get(ctx, res, 0);
						look_value = Runtime.rtl.get(ctx, res, 1);
						look_values.push(ctx, look_value);
						var res = this.readToken(ctx, parser);
						look = Runtime.rtl.get(ctx, res, 0);
						token = Runtime.rtl.get(ctx, res, 1);
					}
					var res = this.matchToken(ctx, parser, "]");
					parser = Runtime.rtl.get(ctx, res, 0);
					if (look_values != null)
					{
						kind = Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC_ATTRS;
					}
				}
				else
				{
					var res = this.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
					if (token.content == "@")
					{
						parser = look;
						is_context_call = false;
					}
					var res = this.readIdentifier(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					look_value = Runtime.rtl.get(ctx, res, 1);
				}
				op_code = new Bayrell.Lang.OpCodes.OpAttr(ctx, Runtime.Dict.from({"kind":kind,"obj":op_code,"attrs":(look_values != null) ? (look_values.toCollection(ctx)) : (null),"value":(look_values == null) ? (look_value) : (null),"caret_start":caret_start,"caret_end":parser.caret}));
			}
			else
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Next attr", token.caret_start, parser.file_name)
			}
			var res = this.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr && op_code.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_PIPE && token.content != "(" && token.content != "{")
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Call", token.caret_start, parser.file_name)
			}
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayBase";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayBase",
			"name": "Bayrell.Lang.LangBay.ParserBayBase",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayBase);
window["Bayrell.Lang.LangBay.ParserBayBase"] = Bayrell.Lang.LangBay.ParserBayBase;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayBase;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayExpression = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangBay.ParserBayExpression.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayExpression)
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
		return "Bayrell.Lang.LangBay.ParserBayExpression";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayExpression,
{
	/**
	 * Read bit not
	 */
	readBitNot: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		if (token.content == "!")
		{
			var op_code = null;
			var res = parser.parser_base.constructor.readDynamic(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"math":"!","caret_start":caret_start,"caret_end":parser.caret}))]);
		}
		return parser.parser_base.constructor.readDynamic(ctx, parser);
	},
	/**
	 * Read bit shift
	 */
	readBitShift: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readBitNot(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == ">>" || token.content == "<<"))
		{
			math = token.content;
			var res = this.readBitNot(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read bit and
	 */
	readBitAnd: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readBitShift(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content == "&")
		{
			math = token.content;
			var res = this.readBitShift(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read bit or
	 */
	readBitOr: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readBitAnd(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == "|" || token.content == "xor"))
		{
			math = token.content;
			var res = this.readBitAnd(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read factor
	 */
	readFactor: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readBitOr(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == "*" || token.content == "/" || token.content == "%" || token.content == "div" || token.content == "mod"))
		{
			math = token.content;
			var res = this.readBitOr(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read arithmetic
	 */
	readArithmetic: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readFactor(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == "+" || token.content == "-"))
		{
			math = token.content;
			var res = this.readFactor(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read concat
	 */
	readConcat: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readArithmetic(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content == "~")
		{
			math = token.content;
			var res = this.readArithmetic(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read compare
	 */
	readCompare: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readConcat(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var content = token.content;
		if (content == "===" || content == "!==" || content == "==" || content == "!=" || content == ">=" || content == "<=" || content == ">" || content == "<")
		{
			var math = token.content;
			var res = this.readConcat(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":parser.caret}));
			parser = look;
		}
		else if (content == "is" || content == "implements" || content == "instanceof")
		{
			var math = token.content;
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":math,"caret_start":caret_start,"caret_end":parser.caret}));
			parser = look;
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read not
	 */
	readNot: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		if (token.content == "not")
		{
			var op_code = null;
			var start = parser;
			var res = this.readCompare(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"math":"not","caret_start":caret_start,"caret_end":parser.caret}))]);
		}
		return this.readCompare(ctx, parser);
	},
	/**
	 * Read and
	 */
	readAnd: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readNot(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == "and" || token.content == "&&"))
		{
			math = token.content;
			var res = this.readNot(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":"and","caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read or
	 */
	readOr: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var look_value = null;
		var res = this.readAnd(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var math = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (token.content == "or" || token.content == "||"))
		{
			math = token.content;
			var res = this.readAnd(ctx, look);
			look = Runtime.rtl.get(ctx, res, 0);
			look_value = Runtime.rtl.get(ctx, res, 1);
			op_code = new Bayrell.Lang.OpCodes.OpMath(ctx, Runtime.Dict.from({"value1":op_code,"value2":look_value,"math":"or","caret_start":caret_start,"caret_end":look.caret}));
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read element
	 */
	readElement: function(ctx, parser)
	{
		/* Try to read function */
		if (parser.parser_operator.constructor.tryReadFunction(ctx, parser, false))
		{
			return parser.parser_operator.constructor.readDeclareFunction(ctx, parser, false);
		}
		return this.readOr(ctx, parser);
	},
	/**
	 * Read ternary operation
	 */
	readTernary: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var condition = null;
		var if_true = null;
		var if_false = null;
		var res = this.readElement(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "?")
		{
			condition = op_code;
			var res = this.readExpression(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			if_true = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ":")
			{
				var res = this.readExpression(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				if_false = Runtime.rtl.get(ctx, res, 1);
			}
			op_code = new Bayrell.Lang.OpCodes.OpTernary(ctx, Runtime.Dict.from({"condition":condition,"if_true":if_true,"if_false":if_false,"caret_start":caret_start,"caret_end":parser.caret}));
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read pipe
	 */
	ExpressionPipe: function(ctx, parser)
	{
		var look = null;
		var look_token = null;
		var op_code = null;
		var is_next_attr = false;
		var save_is_pipe = parser.is_pipe;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_pipe"]), false);
		var res = this.readTernary(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_pipe"]), save_is_pipe);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		look_token = Runtime.rtl.get(ctx, res, 1);
		if (look_token.content == "|>")
		{
			while (look_token.content == "|>" || look_token.content == ",")
			{
				parser = look;
				var value = null;
				var kind = "";
				var is_async = false;
				var is_monad = false;
				if (look_token.content == ",")
				{
					is_next_attr = true;
				}
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				look_token = Runtime.rtl.get(ctx, res, 1);
				if (look_token.content == "await")
				{
					is_async = true;
					parser = look;
					var res = parser.parser_base.constructor.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					look_token = Runtime.rtl.get(ctx, res, 1);
				}
				if (look_token.content == "monad")
				{
					is_monad = true;
					parser = look;
					var res = parser.parser_base.constructor.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					look_token = Runtime.rtl.get(ctx, res, 1);
				}
				if (look_token.content == "attr")
				{
					parser = look;
					var res = this.readTernary(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_ATTR;
				}
				else if (look_token.content == "\"" || look_token.content == "'")
				{
					var res = this.readTernary(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_ATTR;
				}
				else if (look_token.content == "{")
				{
					parser = look;
					var res = this.readTernary(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_ATTR;
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				else if (is_next_attr)
				{
					throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "|>", parser.caret, parser.file_name)
				}
				else if (look_token.content == "default")
				{
					var arg1;
					var arg2;
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_CALL;
					is_monad = true;
					try
					{
						var res = parser.parser_base.constructor.readIdentifier(ctx, look);
						parser = Runtime.rtl.get(ctx, res, 0);
						arg1 = Runtime.rtl.get(ctx, res, 1);
						var res = this.readTernary(ctx, parser);
						parser = Runtime.rtl.get(ctx, res, 0);
						arg2 = Runtime.rtl.get(ctx, res, 1);
						arg1 = new Bayrell.Lang.OpCodes.OpString(ctx, Runtime.Dict.from({"value":parser.constructor.findModuleName(ctx, parser, arg1.value),"caret_start":arg1.caret_start,"caret_end":arg1.caret_end}));
						value = new Bayrell.Lang.OpCodes.OpCall(ctx, Runtime.Dict.from({"args":Runtime.Collection.from([arg1,arg2]),"obj":new Bayrell.Lang.OpCodes.OpAttr(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC,"obj":new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE,"caret_start":caret_start,"caret_end":parser.caret,"value":"rtl"})),"value":new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"value":"m_to"})),"caret_start":caret_start,"caret_end":parser.caret})),"caret_start":caret_start,"caret_end":parser.caret}));
					}
					catch (_ex)
					{
						if (_ex instanceof Bayrell.Lang.Exceptions.ParserError)
						{
							var err = _ex;
							
							value = null;
						}
						else
						{
							throw _ex;
						}
					}
					if (value == null)
					{
						var res = this.readTernary(ctx, look);
						parser = Runtime.rtl.get(ctx, res, 0);
						arg2 = Runtime.rtl.get(ctx, res, 1);
						value = new Bayrell.Lang.OpCodes.OpCall(ctx, Runtime.Dict.from({"args":Runtime.Collection.from([arg2]),"obj":new Bayrell.Lang.OpCodes.OpAttr(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC,"obj":new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE,"caret_start":caret_start,"caret_end":parser.caret,"value":"rtl"})),"value":new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"value":"m_def"})),"caret_start":caret_start,"caret_end":parser.caret})),"caret_start":caret_start,"caret_end":parser.caret}));
					}
				}
				else if (look_token.content == "method" || look_token.content == "." || look_token.content == ":" || look_token.content == "::")
				{
					parser = look;
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_CALL;
					/* Set pipe */
					var save_find_ident = parser.find_ident;
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_pipe"]), true);
					if (look_token.content == ".")
					{
						parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["pipe_kind"]), Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR);
					}
					else
					{
						parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["pipe_kind"]), Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC);
					}
					var res = parser.parser_base.constructor.readDynamic(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
					/* Restore parser */
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_pipe"]), false);
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), save_find_ident);
				}
				else if (look_token.content == "curry")
				{
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_CALL;
					var res = parser.parser_base.constructor.readCurry(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
				}
				else
				{
					kind = Bayrell.Lang.OpCodes.OpPipe.KIND_CALL;
					var res = parser.parser_base.constructor.readDynamic(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
				}
				op_code = new Bayrell.Lang.OpCodes.OpPipe(ctx, Runtime.Dict.from({"obj":op_code,"kind":kind,"value":value,"is_async":is_async,"is_monad":is_monad,"caret_start":caret_start,"caret_end":parser.caret}));
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				look_token = Runtime.rtl.get(ctx, res, 1);
				is_next_attr = false;
			}
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read expression
	 */
	readExpression: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "<")
		{
			return parser.parser_html.constructor.readHTML(ctx, parser);
		}
		else if (token.content == "curry")
		{
			return parser.parser_base.constructor.readCurry(ctx, parser);
		}
		else if (token.content == "@css")
		{
			return parser.parser_html.constructor.readCss(ctx, parser);
		}
		return this.ExpressionPipe(ctx, parser);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayExpression";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayExpression",
			"name": "Bayrell.Lang.LangBay.ParserBayExpression",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayExpression);
window["Bayrell.Lang.LangBay.ParserBayExpression"] = Bayrell.Lang.LangBay.ParserBayExpression;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayExpression;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayHtml = function(ctx)
{
	Runtime.BaseObject.apply(this, arguments);
};
Bayrell.Lang.LangBay.ParserBayHtml.prototype = Object.create(Runtime.BaseObject.prototype);
Bayrell.Lang.LangBay.ParserBayHtml.prototype.constructor = Bayrell.Lang.LangBay.ParserBayHtml;
Object.assign(Bayrell.Lang.LangBay.ParserBayHtml.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayHtml)
		{
		}
		Runtime.BaseObject.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseObject.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseObject.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangBay.ParserBayHtml";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayHtml, Runtime.BaseObject);
Object.assign(Bayrell.Lang.LangBay.ParserBayHtml,
{
	/**
	 * Retuns css hash
	 * @param string component class name
	 * @return string hash
	 */
	getCssHash: function(ctx, s)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangBay.ParserBayHtml.getCssHash", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var r = "";
		var a = "1234567890abcdef";
		var sz = Runtime.rs.strlen(ctx, s);
		var h = 0;
		for (var i = 0;i < sz;i++)
		{
			var c = Runtime.rs.ord(ctx, Runtime.rs.substr(ctx, s, i, 1));
			h = (h << 2) + (h >> 14) + c & 65535;
		}
		var p = 0;
		while (h != 0 || p < 4)
		{
			var c = h & 15;
			h = h >> 4;
			r += Runtime.rtl.toStr(Runtime.rs.substr(ctx, a, c, 1));
			p = p + 1;
		}
		var __memorize_value = r;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangBay.ParserBayHtml.getCssHash", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Read css selector
	 */
	readCssSelector: function(ctx, parser)
	{
		var content = parser.content;
		var content_sz = parser.content_sz;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		var class_name = parser.current_namespace_name + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(parser.current_class_name);
		var ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		if (ch == "(")
		{
			pos = pos + 1;
			x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
			y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
			var start_pos = pos;
			while (pos < content_sz && ch != ")")
			{
				pos = pos + 1;
				x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
				y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
				ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
			}
			class_name = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
			if (parser.uses.has(ctx, class_name))
			{
				class_name = parser.uses.item(ctx, class_name);
			}
			pos = pos + 1;
			x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
			y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
		}
		var start_pos = pos;
		ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		while (pos < content_sz && ch != " " && ch != "," && ch != "." && ch != ":" && ch != "[" && ch != "{")
		{
			pos = pos + 1;
			x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
			y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
			ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		}
		var postfix = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
		var selector = "." + Runtime.rtl.toStr(postfix) + Runtime.rtl.toStr(".h-") + Runtime.rtl.toStr(this.getCssHash(ctx, class_name));
		var caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
		return Runtime.Collection.from([parser,selector]);
	},
	/**
	 * Read css body
	 */
	readCssBody: function(ctx, parser)
	{
		var caret_start = parser.caret;
		var css_str = "";
		var content = parser.content;
		var content_sz = parser.content_sz;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		var bracket_level = 0;
		var start_pos = pos;
		var ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		while (pos < content_sz && (ch != "}" || ch == "}" && bracket_level > 0) && ch != "<")
		{
			/* If html or  tag */
			if (ch == "%")
			{
				x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
				y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
				pos = pos + 1;
				/* Add value */
				var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos - 1);
				if (value != "")
				{
					css_str += Runtime.rtl.toStr(value);
				}
				/* Read CSS Selector */
				var caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
				var res = this.readCssSelector(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var s = Runtime.rtl.get(ctx, res, 1);
				css_str += Runtime.rtl.toStr(s);
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else if (ch == "@")
			{
				x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
				y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
				pos = pos + 1;
				var res = parser.parser_base.constructor.readUntilStringArr(ctx, parser, Runtime.Collection.from(["{"]), false);
				parser = Runtime.rtl.get(ctx, res, 0);
				var s1 = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readCssBody(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var s2 = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
				parser = Runtime.rtl.get(ctx, res, 0);
				css_str += Runtime.rtl.toStr(s1 + Runtime.rtl.toStr("{") + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr("}"));
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else if (ch == "{")
			{
				/* Add value */
				var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
				if (value != "")
				{
					css_str += Runtime.rtl.toStr(value);
				}
				/* Read CSS Block */
				var caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_base.constructor.readUntilStringArr(ctx, parser, Runtime.Collection.from(["}"]), false);
				parser = Runtime.rtl.get(ctx, res, 0);
				var s = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
				parser = Runtime.rtl.get(ctx, res, 0);
				css_str += Runtime.rtl.toStr("{" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr("}"));
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else
			{
				x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
				y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		}
		/* Push item */
		var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
		var caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
		if (value != "")
		{
			css_str += Runtime.rtl.toStr(value);
		}
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
		return Runtime.Collection.from([parser,css_str]);
	},
	/**
	 * Read css
	 */
	readCss: function(ctx, parser)
	{
		var caret_start = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "@css");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readCssBody(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		var css_str = Runtime.rtl.get(ctx, res, 1);
		var caret = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
		parser = Runtime.rtl.get(ctx, res, 0);
		css_str = Runtime.rs.replace(ctx, "\t", "", css_str);
		css_str = Runtime.rs.replace(ctx, "\n", "", css_str);
		var op_code = new Bayrell.Lang.OpCodes.OpString(ctx, Runtime.Dict.from({"caret_start":caret,"caret_end":parser.caret,"value":css_str}));
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read html comment
	 */
	readHTMLComment: function(ctx, parser)
	{
		var start = parser;
		var token = null;
		var look = null;
		var caret_start = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "!--");
		parser = Runtime.rtl.get(ctx, res, 0);
		var content = parser.content;
		var content_sz = parser.content_sz;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		var pos_start = pos;
		var ch = Runtime.rs.charAt(ctx, content.ref, pos);
		var ch3 = Runtime.rs.substr(ctx, content.ref, pos, 3);
		while (ch3 != "-->" && pos < content_sz)
		{
			x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
			y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
			pos = pos + 1;
			if (pos >= parser.content_sz)
			{
				break;
			}
			ch = Runtime.rs.charAt(ctx, content.ref, pos);
			ch3 = Runtime.rs.substr(ctx, content.ref, pos, 3);
		}
		var pos_end = pos;
		if (ch3 == "-->")
		{
			x = x + 3;
			pos = pos + 3;
		}
		else
		{
			throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "End of comment", new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos})), start.file_name)
		}
		/* Return result */
		var value_str = Runtime.rs.substr(ctx, content.ref, pos_start, pos_end - pos_start);
		var caret_end = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
		return Runtime.Collection.from([start.copy(ctx, Runtime.Dict.from({"caret":caret_end})),new Bayrell.Lang.OpCodes.OpComment(ctx, Runtime.Dict.from({"value":value_str,"caret_start":caret_start,"caret_end":caret_end}))]);
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read html value
	 */
	readHTMLValue: function(ctx, parser)
	{
		var item = null;
		var caret = parser.caret;
		var content = parser.content;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		var ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
		if (ch == "<")
		{
			var res = this.readHTMLTag(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			item = Runtime.rtl.get(ctx, res, 1);
		}
		else if (ch == "{")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			item = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		else if (ch == "@")
		{
			x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
			y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
			pos = pos + 1;
			var ch3 = Runtime.rs.substr(ctx, content.ref, pos, 3);
			var ch4 = Runtime.rs.substr(ctx, content.ref, pos, 4);
			if (ch3 == "raw" || ch4 == "json" || ch4 == "html")
			{
				var res;
				if (ch3 == "raw")
				{
					res = parser.parser_base.constructor.next(ctx, parser, ch3, x, y, pos);
				}
				if (ch4 == "json")
				{
					res = parser.parser_base.constructor.next(ctx, parser, ch4, x, y, pos);
				}
				if (ch4 == "html")
				{
					res = parser.parser_base.constructor.next(ctx, parser, ch4, x, y, pos);
				}
				x = Runtime.rtl.get(ctx, res, 0);
				y = Runtime.rtl.get(ctx, res, 1);
				pos = Runtime.rtl.get(ctx, res, 2);
			}
			caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			item = Runtime.rtl.get(ctx, res, 1);
			if (ch3 == "raw")
			{
				item = new Bayrell.Lang.OpCodes.OpHtmlValue(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpHtmlValue.KIND_RAW,"value":item,"caret_start":caret,"caret_end":parser.caret}));
			}
			else if (ch4 == "json")
			{
				item = new Bayrell.Lang.OpCodes.OpHtmlValue(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpHtmlValue.KIND_JSON,"value":item,"caret_start":caret,"caret_end":parser.caret}));
			}
			else if (ch4 == "html")
			{
				item = new Bayrell.Lang.OpCodes.OpHtmlValue(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpHtmlValue.KIND_HTML,"value":item,"caret_start":caret,"caret_end":parser.caret}));
			}
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,item]);
	},
	/**
	 * Read html attribute key
	 */
	readHTMLAttrKey: function(ctx, parser)
	{
		var token = null;
		var look = null;
		var ident = null;
		var key = "";
		/* Look token */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "@")
		{
			parser = look;
			key = "@";
		}
		var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		ident = Runtime.rtl.get(ctx, res, 1);
		key += Runtime.rtl.toStr(ident.value);
		/* Read attr */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (token.content == "-")
		{
			var res = parser.parser_base.constructor.readIdentifier(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			ident = Runtime.rtl.get(ctx, res, 1);
			key += Runtime.rtl.toStr("-" + Runtime.rtl.toStr(ident.value));
			/* Look next token */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		/* Look token */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == ":")
		{
			parser = look;
			key += Runtime.rtl.toStr(":");
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			ident = Runtime.rtl.get(ctx, res, 1);
			key += Runtime.rtl.toStr(ident.value);
		}
		return Runtime.Collection.from([parser,key]);
	},
	/**
	 * Read html attribute value
	 */
	readHTMLAttrValue: function(ctx, parser)
	{
		var token = null;
		var look = null;
		var op_code = null;
		var ident = null;
		/* Look token */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "{")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		else if (token.content == "@")
		{
			var res = this.readHTMLValue(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == "[")
		{
			var res = parser.parser_base.constructor.readCollection(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			var res = parser.parser_base.constructor.readString(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read html attributes
	 */
	readHTMLAttrs: function(ctx, parser)
	{
		var items = new Runtime.Vector(ctx);
		var token = null;
		var look = null;
		var content = parser.content;
		var content_sz = parser.content_sz;
		var caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
		var ch = Runtime.rs.substr(ctx, content.ref, caret.pos, 1);
		while (ch != "/" && ch != ">" && caret.pos < content_sz)
		{
			var caret_start = caret;
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "...")
			{
				var ident = null;
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "...");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_base.constructor.readIdentifier(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				ident = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, new Bayrell.Lang.OpCodes.OpHtmlAttribute(ctx, Runtime.Dict.from({"value":ident,"is_spread":true,"caret_start":caret_start,"caret_end":parser.caret})));
			}
			else
			{
				var res = this.readHTMLAttrKey(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var key = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "=");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readHTMLAttrValue(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var value = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, new Bayrell.Lang.OpCodes.OpHtmlAttribute(ctx, Runtime.Dict.from({"key":key,"value":value,"caret_start":caret_start,"caret_end":parser.caret})));
			}
			caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
			ch = Runtime.rs.substr(ctx, content.ref, caret.pos, 1);
			var ch2 = Runtime.rs.substr(ctx, content.ref, caret.pos, 2);
			if (ch2 == "/>")
			{
				break;
			}
		}
		return Runtime.Collection.from([parser,items.toCollection(ctx)]);
	},
	/**
	 * Read html template
	 */
	readHTMLContent: function(ctx, parser, end_tag)
	{
		var items = new Runtime.Vector(ctx);
		var item = null;
		var token = null;
		var look = null;
		var caret = null;
		var caret_start = parser.caret;
		var content = parser.content;
		var content_sz = parser.content_sz;
		var pos = parser.caret.pos;
		var x = parser.caret.x;
		var y = parser.caret.y;
		var start_pos = pos;
		var end_tag_sz = Runtime.rs.strlen(ctx, end_tag);
		var ch2 = Runtime.rs.substr(ctx, content.ref, pos, end_tag_sz);
		var flag_first = true;
		var first_html_tag = false;
		if (end_tag == "")
		{
			first_html_tag = true;
		}
		while ((end_tag == "" || end_tag != "" && ch2 != end_tag) && pos < content_sz)
		{
			var ch = Runtime.rs.substr(ctx, content.ref, pos, 1);
			var ch3 = Runtime.rs.substr(ctx, content.ref, pos, 3);
			var ch4 = Runtime.rs.substr(ctx, content.ref, pos, 4);
			var ch6 = Runtime.rs.substr(ctx, content.ref, pos, 6);
			var ch7 = Runtime.rs.substr(ctx, content.ref, pos, 7);
			/* Html comment */
			if (ch4 == "<!--")
			{
				var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
				caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
				value = Runtime.rs.trim(ctx, value, "\t\r\n");
				value = Runtime.rs.trim(ctx, value, " ");
				if (value != "")
				{
					item = new Bayrell.Lang.OpCodes.OpHtmlContent(ctx, Runtime.Dict.from({"value":value,"caret_start":caret_start,"caret_end":caret}));
					items.push(ctx, item);
				}
				/* Read HTML Comment */
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
				var res = this.readHTMLComment(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				items.push(ctx, Runtime.rtl.get(ctx, res, 1));
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else if (ch == "<" || ch == "{" || ch == "@")
			{
				var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
				caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
				value = Runtime.rs.trim(ctx, value, "\t\r\n");
				if (flag_first && first_html_tag)
				{
					value = Runtime.rs.trim(ctx, value, " ");
				}
				if (value != "")
				{
					item = new Bayrell.Lang.OpCodes.OpHtmlContent(ctx, Runtime.Dict.from({"value":value,"caret_start":caret_start,"caret_end":caret}));
					items.push(ctx, item);
				}
				/* Read HTML Value */
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
				var res = this.readHTMLValue(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, item);
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else if (ch3 == "%if" || ch4 == "%for" || ch4 == "%var" || ch6 == "%while" || ch7 == "%render")
			{
				var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
				caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
				value = Runtime.rs.trim(ctx, value, "\t\r\n");
				value = Runtime.rs.trim(ctx, value, " ");
				if (value != "")
				{
					item = new Bayrell.Lang.OpCodes.OpHtmlContent(ctx, Runtime.Dict.from({"value":value,"caret_start":caret_start,"caret_end":caret}));
					items.push(ctx, item);
				}
				/* Read HTML Operator */
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["caret"]), caret);
				var res = this.readHTMLOperator(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, item);
				/* Set pos, x, y */
				caret_start = parser.caret;
				pos = parser.caret.pos;
				x = parser.caret.x;
				y = parser.caret.y;
				start_pos = pos;
			}
			else
			{
				if (first_html_tag && ch != " " && ch != "\t" && ch != "\r" && ch != "\n")
				{
					break;
				}
				x = parser.parser_base.constructor.nextX(ctx, parser, ch, x);
				y = parser.parser_base.constructor.nextY(ctx, parser, ch, y);
				pos = pos + 1;
			}
			ch2 = Runtime.rs.substr(ctx, content.ref, pos, end_tag_sz);
		}
		/* Push item */
		var value = Runtime.rs.substr(ctx, content.ref, start_pos, pos - start_pos);
		value = Runtime.rs.trim(ctx, value, "\t\r\n");
		caret = new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({"x":x,"y":y,"pos":pos}));
		if (first_html_tag)
		{
			value = Runtime.rs.trim(ctx, value, " ");
		}
		if (value != "")
		{
			item = new Bayrell.Lang.OpCodes.OpHtmlContent(ctx, Runtime.Dict.from({"value":value,"caret_start":caret_start,"caret_end":caret}));
			items.push(ctx, item);
		}
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"caret":caret})),items]);
	},
	/**
	 * Read html tag
	 */
	readHTMLTag: function(ctx, parser)
	{
		var token = null;
		var look = null;
		var ident = null;
		var caret_items_start = null;
		var caret_items_end = null;
		var caret_start = parser.caret;
		var items = null;
		var op_code_name = null;
		var is_single_flag = false;
		var op_code_flag = false;
		var tag_name = "";
		/* Tag start */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
		parser = Runtime.rtl.get(ctx, res, 0);
		/* Look token */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "{")
		{
			op_code_flag = true;
			var caret1 = parser.caret;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code_name = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
			parser = Runtime.rtl.get(ctx, res, 0);
			var caret2 = parser.caret;
			tag_name = Runtime.rs.substr(ctx, parser.content.ref, caret1.pos, caret2.pos - caret1.pos);
		}
		else if (token.content == ">")
		{
			op_code_flag = true;
			tag_name = "";
		}
		else
		{
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser, false);
			parser = Runtime.rtl.get(ctx, res, 0);
			ident = Runtime.rtl.get(ctx, res, 1);
			tag_name = ident.value;
		}
		var res = this.readHTMLAttrs(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		var attrs = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "/")
		{
			parser = look;
			is_single_flag = true;
		}
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
		parser = Runtime.rtl.get(ctx, res, 0);
		if (!is_single_flag)
		{
			/* Read items */
			caret_items_start = parser.caret;
			var res = this.readHTMLContent(ctx, parser, "</" + Runtime.rtl.toStr(tag_name));
			parser = Runtime.rtl.get(ctx, res, 0);
			var items = Runtime.rtl.get(ctx, res, 1);
			caret_items_end = parser.caret;
			/* Tag end */
			if (op_code_flag)
			{
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
				parser = Runtime.rtl.get(ctx, res, 0);
				if (tag_name)
				{
					var res = parser.parser_base.constructor.matchString(ctx, parser, tag_name);
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else
			{
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
				parser = Runtime.rtl.get(ctx, res, 0);
				if (ident != null)
				{
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ident.value);
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
		}
		var op_code = new Bayrell.Lang.OpCodes.OpHtmlTag(ctx, Runtime.Dict.from({"attrs":attrs,"tag_name":tag_name,"op_code_name":op_code_name,"caret_start":caret_start,"caret_end":parser.caret,"items":(items != null) ? (new Bayrell.Lang.OpCodes.OpHtmlItems(ctx, Runtime.Dict.from({"caret_start":caret_items_start,"caret_end":caret_items_end,"items":items.toCollection(ctx)}))) : (null)}));
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read html operator
	 */
	readHTMLOperator: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "%if")
		{
			return parser.parser_operator.constructor.readIf(ctx, parser);
		}
		else if (token.content == "%for")
		{
			return parser.parser_operator.constructor.readFor(ctx, parser);
		}
		else if (token.content == "%while")
		{
			return parser.parser_operator.constructor.readWhile(ctx, parser);
		}
		else if (token.content == "%var")
		{
			var op_code = null;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "%var");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_operator.constructor.readAssign(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
			parser = Runtime.rtl.get(ctx, res, 0);
			return Runtime.Collection.from([parser,op_code]);
		}
		else if (token.content == "%render")
		{
			var op_code = null;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "%render");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
			parser = Runtime.rtl.get(ctx, res, 0);
			return Runtime.Collection.from([parser,op_code]);
		}
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read html template
	 */
	readHTML: function(ctx, parser, end_tag)
	{
		if (end_tag == undefined) end_tag = "";
		var caret_start = parser.caret;
		/* Enable html flag */
		var save_is_html = parser.is_html;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_html"]), true);
		var res = this.readHTMLContent(ctx, parser, end_tag);
		parser = Runtime.rtl.get(ctx, res, 0);
		var items = Runtime.rtl.get(ctx, res, 1);
		var op_code = new Bayrell.Lang.OpCodes.OpHtmlItems(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"items":items}));
		/* Disable html flag */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_html"]), save_is_html);
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read html attributes
	 */
	readAttrs: function(ctx, parser)
	{
		var op_code = null;
		var token = null;
		var items = new Runtime.Map(ctx);
		var content = parser.content;
		var content_sz = parser.content_sz;
		var caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
		var ch = Runtime.rs.substr(ctx, content.ref, caret.pos, 1);
		while (ch != "/" && ch != ">" && caret.pos < content_sz)
		{
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "=");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readString(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			items.set(ctx, token.content, op_code.value);
			caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
			ch = Runtime.rs.substr(ctx, content.ref, caret.pos, 1);
			var ch2 = Runtime.rs.substr(ctx, content.ref, caret.pos, 2);
			if (ch2 == "/>")
			{
				break;
			}
		}
		return Runtime.Collection.from([parser,items.toDict(ctx)]);
	},
	/**
	 * Read UI
	 */
	readUIClass: function(ctx, parser)
	{
		var items = new Runtime.Vector(ctx);
		var components = new Runtime.Vector(ctx);
		var class_caret_start = parser.caret;
		var token = null;
		var class_name = "";
		var class_extends = "";
		var class_version = "";
		var item_name = "";
		var namespace_name = "";
		var short_name = "";
		var full_name = "";
		var is_component = "";
		var class_name_last = "";
		/* Content */
		var content = parser.content;
		var content_sz = parser.content_sz;
		/* Read class header */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "class");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readAttrs(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		var attrs = Runtime.rtl.get(ctx, res, 1);
		class_name = attrs.get(ctx, "name", "");
		class_extends = attrs.get(ctx, "extends", "");
		class_version = attrs.get(ctx, "version", "");
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
		parser = Runtime.rtl.get(ctx, res, 0);
		var class_name_arr = Runtime.rs.split(ctx, "\\.", class_name);
		class_name_last = class_name_arr.last(ctx);
		class_name_arr = class_name_arr.removeLastIm(ctx);
		namespace_name = Runtime.rs.join(ctx, ".", class_name_arr);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_class_name"]), class_name_last);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_namespace_name"]), namespace_name);
		var class_extend_op_code = new Bayrell.Lang.OpCodes.OpTypeIdentifier(ctx, Runtime.Dict.from({"entity_name":new Bayrell.Lang.OpCodes.OpEntityName(ctx, Runtime.Dict.from({"caret_start":class_caret_start,"caret_end":parser.caret,"names":Runtime.rs.split(ctx, "\\.", class_extends)})),"template":null,"caret_start":class_caret_start,"caret_end":parser.caret}));
		/* Read class body */
		var caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
		var ch2 = Runtime.rs.substr(ctx, content.ref, caret.pos, 2);
		while (ch2 != "</" && caret.pos < content_sz)
		{
			var parser_start = parser;
			var caret_start = parser.caret;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			var item_token = Runtime.rtl.get(ctx, res, 1);
			item_name = item_token.content;
			/* Html comment */
			if (item_name == "!--")
			{
				var res = this.readHTMLComment(ctx, parser_start);
				parser = Runtime.rtl.get(ctx, res, 0);
				items.push(ctx, Runtime.rtl.get(ctx, res, 1));
				caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
				ch2 = Runtime.rs.substr(ctx, content.ref, caret.pos, 2);
				continue;
			}
			var res = this.readAttrs(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			var item_attrs = Runtime.rtl.get(ctx, res, 1);
			if (item_name == "use")
			{
				full_name = item_attrs.get(ctx, "name", "");
				short_name = item_attrs.get(ctx, "as", "");
				is_component = item_attrs.get(ctx, "component", "false");
				if (short_name == "")
				{
					short_name = Runtime.rs.explode(ctx, ".", full_name).last(ctx);
				}
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["uses"]), parser.uses.setIm(ctx, short_name, full_name));
				if (is_component == "true" || is_component == "1")
				{
					components.push(ctx, full_name);
				}
			}
			/* Read body */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ">")
			{
				if (item_name == "template")
				{
					var fn_name = item_attrs.get(ctx, "name", "render");
					var fn_args_str = item_attrs.get(ctx, "args", "");
					var parser2_vars = Runtime.Dict.from({});
					var fn_args = null;
					if (item_attrs.has(ctx, "args"))
					{
						var parser2 = parser.constructor.setContent(ctx, parser, fn_args_str);
						parser2 = Runtime.rtl.setAttr(ctx, parser2, Runtime.Collection.from(["caret"]), new Bayrell.Lang.Caret(ctx, Runtime.Dict.from({})));
						/* Parse args */
						var res = parser.parser_operator.constructor.readDeclareFunctionArgs(ctx, parser2, false, false);
						parser2 = Runtime.rtl.get(ctx, res, 0);
						fn_args = Runtime.rtl.get(ctx, res, 1);
						parser2_vars = parser2.vars;
					}
					else
					{
						fn_args = Runtime.Collection.from([new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"name":"layout","caret_start":caret_start,"caret_end":parser.caret})),new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"name":"model","caret_start":caret_start,"caret_end":parser.caret})),new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"name":"params","caret_start":caret_start,"caret_end":parser.caret})),new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"name":"content","caret_start":caret_start,"caret_end":parser.caret}))]);
						/* Register variable in parser */
						parser2_vars = parser2_vars.setIm(ctx, "layout", true).setIm(ctx, "model", true).setIm(ctx, "params", true).setIm(ctx, "content", true);
					}
					/* Read template content */
					var save_vars = parser.vars;
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.concat(ctx, parser2_vars));
					var res = this.readHTML(ctx, parser, "</template");
					parser = Runtime.rtl.get(ctx, res, 0);
					var expression = Runtime.rtl.get(ctx, res, 1);
					parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
					/* Read template footer */
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "template");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
					parser = Runtime.rtl.get(ctx, res, 0);
					var f = new Bayrell.Lang.OpCodes.OpDeclareFunction(ctx, Runtime.Dict.from({"args":fn_args,"vars":Runtime.Collection.from([]),"flags":new Bayrell.Lang.OpCodes.OpFlags(ctx, Runtime.Dict.from({"p_static":true,"p_pure":true})),"name":fn_name,"result_type":"html","expression":expression,"items":null,"caret_start":caret_start,"caret_end":parser.caret}));
					items.push(ctx, f);
				}
				else if (item_name == "style")
				{
					var res = this.readCssBody(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					var css_body = Runtime.rtl.get(ctx, res, 1);
					/* Read style footer */
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "style");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
					parser = Runtime.rtl.get(ctx, res, 0);
					var f = new Bayrell.Lang.OpCodes.OpDeclareFunction(ctx, Runtime.Dict.from({"args":Runtime.Collection.from([new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"name":"vars","caret_start":caret_start,"caret_end":parser.caret}))]),"vars":Runtime.Collection.from([]),"flags":new Bayrell.Lang.OpCodes.OpFlags(ctx, Runtime.Dict.from({"p_static":true,"p_pure":true})),"name":"css","result_type":"html","expression":new Bayrell.Lang.OpCodes.OpString(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"value":css_body})),"items":null,"caret_start":caret_start,"caret_end":parser.caret}));
					items.push(ctx, f);
				}
				else if (item_name == "script")
				{
					var res = parser.parser_program.constructor.readClassBody(ctx, parser, "</");
					parser = Runtime.rtl.get(ctx, res, 0);
					var arr = Runtime.rtl.get(ctx, res, 1);
					items.appendVector(ctx, arr);
					/* Read script footer */
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "script");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				else
				{
					throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Unknown identifier '" + Runtime.rtl.toStr(item_name) + Runtime.rtl.toStr("'"), item_token.caret_start, parser.file_name)
				}
			}
			else if (token.content == "/")
			{
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else
			{
				throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Unknown identifier '" + Runtime.rtl.toStr(token.content) + Runtime.rtl.toStr("'"), token.caret_start, parser.file_name)
			}
			caret = parser.parser_base.constructor.skipChar(ctx, parser, content, parser.caret);
			ch2 = Runtime.rs.substr(ctx, content.ref, caret.pos, 2);
		}
		/* Add components function */
		if (components.count(ctx) > 0)
		{
			var f = new Bayrell.Lang.OpCodes.OpDeclareFunction(ctx, Runtime.Dict.from({"args":Runtime.Collection.from([]),"vars":Runtime.Collection.from([]),"flags":new Bayrell.Lang.OpCodes.OpFlags(ctx, Runtime.Dict.from({"p_static":true,"p_pure":true})),"name":"components","result_type":"var","expression":new Bayrell.Lang.OpCodes.OpCollection(ctx, Runtime.Dict.from({"caret_start":parser.caret,"caret_end":parser.caret,"values":components.toCollection(ctx).map(ctx, (ctx, class_name) => 
			{
				return new Bayrell.Lang.OpCodes.OpString(ctx, Runtime.Dict.from({"caret_start":parser.caret,"caret_end":parser.caret,"value":class_name}));
			})})),"items":null,"caret_start":parser.caret,"caret_end":parser.caret}));
			items.push(ctx, f);
		}
		/* Read class footer */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "/");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "class");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
		parser = Runtime.rtl.get(ctx, res, 0);
		/* Analyze class body */
		var class_body = parser.parser_program.constructor.classBodyAnalyze(ctx, parser, items);
		return Runtime.Collection.from([parser,Runtime.Collection.from([new Bayrell.Lang.OpCodes.OpNamespace(ctx, Runtime.Dict.from({"name":namespace_name})),new Bayrell.Lang.OpCodes.OpDeclareClass(ctx, Runtime.Dict.from({"kind":Bayrell.Lang.OpCodes.OpDeclareClass.KIND_CLASS,"name":class_name_last,"is_static":true,"is_declare":false,"class_extends":class_extend_op_code,"class_implements":null,"annotations":Runtime.Collection.from([]),"template":null,"vars":class_body.item(ctx, "vars"),"functions":class_body.item(ctx, "functions"),"fn_create":class_body.item(ctx, "fn_create"),"fn_destroy":class_body.item(ctx, "fn_destroy"),"items":class_body.item(ctx, "items"),"caret_start":class_caret_start,"caret_end":parser.caret}))])]);
	},
	/**
	 * Read UI
	 */
	readUI: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var items = new Runtime.Vector(ctx);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		while (token.content == "<")
		{
			var parser_start = parser;
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "class")
			{
				var res = this.readUIClass(ctx, parser_start);
				parser = Runtime.rtl.get(ctx, res, 0);
				items.appendVector(ctx, Runtime.rtl.get(ctx, res, 1));
			}
			else if (token.content == "!--")
			{
				var res = this.readHTMLComment(ctx, parser_start);
				parser = Runtime.rtl.get(ctx, res, 0);
				items.push(ctx, Runtime.rtl.get(ctx, res, 1));
			}
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpModule(ctx, Runtime.Dict.from({"uses":parser.uses.toDict(ctx),"items":items.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayHtml";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseObject";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayHtml",
			"name": "Bayrell.Lang.LangBay.ParserBayHtml",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayHtml);
window["Bayrell.Lang.LangBay.ParserBayHtml"] = Bayrell.Lang.LangBay.ParserBayHtml;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayHtml;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayOperator = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangBay.ParserBayOperator.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayOperator)
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
		return "Bayrell.Lang.LangBay.ParserBayOperator";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayOperator,
{
	/**
	 * Read return
	 */
	readReturn: function(ctx, parser)
	{
		var token = null;
		var op_code = null;
		var look = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "return");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content != ";")
		{
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpReturn(ctx, Runtime.Dict.from({"expression":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read delete
	 */
	readDelete: function(ctx, parser)
	{
		var token = null;
		var op_code = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "delete");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readDynamic(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpDelete(ctx, Runtime.Dict.from({"op_code":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read throw
	 */
	readThrow: function(ctx, parser)
	{
		var token = null;
		var op_code = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "throw");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpThrow(ctx, Runtime.Dict.from({"expression":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read try
	 */
	readTry: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_try = null;
		var items = new Runtime.Vector(ctx);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "try");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		/* Try */
		var res = this.readOperators(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_try = Runtime.rtl.get(ctx, res, 1);
		/* Catch */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content == "catch")
		{
			parser = look;
			var op_catch = null;
			var var_op_code = null;
			var pattern = null;
			var item_caret_start = token.caret_start;
			/* Read ident */
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			pattern = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			var_op_code = Runtime.rtl.get(ctx, res, 1);
			var var_name = var_op_code.value;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
			parser = Runtime.rtl.get(ctx, res, 0);
			/* Save vars */
			var save_vars = parser.vars;
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.setIm(ctx, var_name, true));
			/* Catch operators */
			var res = this.readOperators(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_catch = Runtime.rtl.get(ctx, res, 1);
			/* Restore vars */
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
			var item = new Bayrell.Lang.OpCodes.OpTryCatchItem(ctx, Runtime.Dict.from({"name":var_name,"pattern":pattern,"value":op_catch,"caret_start":item_caret_start,"caret_end":parser.caret}));
			items.push(ctx, item);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpTryCatch(ctx, Runtime.Dict.from({"op_try":op_try,"items":items.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read then
	 */
	readThen: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "then")
		{
			return Runtime.Collection.from([look,token]);
		}
		return Runtime.Collection.from([parser,token]);
	},
	/**
	 * Read do
	 */
	readDo: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "do")
		{
			return Runtime.Collection.from([look,token]);
		}
		return Runtime.Collection.from([parser,token]);
	},
	/**
	 * Read if
	 */
	readIf: function(ctx, parser)
	{
		var look = null;
		var look2 = null;
		var token = null;
		var token2 = null;
		var if_condition = null;
		var if_true = null;
		var if_false = null;
		var if_else = new Runtime.Vector(ctx);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, (parser.is_html) ? ("%if") : ("if"));
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		/* Read expression */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		if_condition = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readThen(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		/* If true */
		var res = this.readOperators(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		if_true = Runtime.rtl.get(ctx, res, 1);
		/* Else */
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && (parser.is_html && (token.content == "%else" || token.content == "%elseif") || !parser.is_html && (token.content == "else" || token.content == "elseif")))
		{
			var res = parser.parser_base.constructor.readToken(ctx, look);
			look2 = Runtime.rtl.get(ctx, res, 0);
			token2 = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "%elseif" || token.content == "elseif" || token.content == "else" && token2.content == "if" || token.content == "%else" && token2.content == "if")
			{
				var ifelse_condition = null;
				var ifelse_block = null;
				if (token.content == "elseif")
				{
					parser = look;
				}
				else if (token2.content == "%elseif")
				{
					parser = look2;
				}
				else if (token2.content == "if")
				{
					parser = look2;
				}
				else if (token2.content == "%if")
				{
					parser = look2;
				}
				/* Read expression */
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				ifelse_condition = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readThen(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readOperators(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				ifelse_block = Runtime.rtl.get(ctx, res, 1);
				if_else.push(ctx, new Bayrell.Lang.OpCodes.OpIfElse(ctx, Runtime.Dict.from({"condition":ifelse_condition,"if_true":ifelse_block,"caret_start":token2.caret_start,"caret_end":parser.caret})));
			}
			else
			{
				var res = this.readOperators(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				if_false = Runtime.rtl.get(ctx, res, 1);
				break;
			}
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpIf(ctx, Runtime.Dict.from({"condition":if_condition,"if_true":if_true,"if_false":if_false,"if_else":if_else.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read For
	 */
	readFor: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var expr1 = null;
		var expr2 = null;
		var expr3 = null;
		/* Save vars */
		var save_vars = parser.vars;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, (parser.is_html) ? ("%for") : ("for"));
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = this.readAssign(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		expr1 = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		expr2 = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = this.readOperator(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		expr3 = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = this.readOperators(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		/* Restore vars */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpFor(ctx, Runtime.Dict.from({"expr1":expr1,"expr2":expr2,"expr3":expr3,"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read While
	 */
	readWhile: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var condition = null;
		var op_code = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, (parser.is_html) ? ("%while") : ("while"));
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		condition = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readDo(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var res = this.readOperators(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpWhile(ctx, Runtime.Dict.from({"condition":condition,"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read While
	 */
	readSafe: function(ctx, parser)
	{
		var caret_start = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "safe");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = parser.parser_base.constructor.readDynamic(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		var obj = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readOperators(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		var items = Runtime.rtl.get(ctx, res, 1);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpSafe(ctx, Runtime.Dict.from({"obj":obj,"items":items,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read assign
	 */
	readAssign: function(ctx, parser)
	{
		var start = parser;
		var save = null;
		var look = null;
		var token = null;
		var pattern = null;
		var op_code = null;
		var reg_name = null;
		var expression = null;
		var names = null;
		var values = null;
		var kind = Bayrell.Lang.OpCodes.OpAssign.KIND_ASSIGN;
		var var_name = "";
		var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var_name = op_code.value;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "<=")
		{
			var arr = new Runtime.Vector(ctx);
			while (!token.eof && token.content == "<=")
			{
				var name = "";
				parser = look;
				save = parser;
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content == "{")
				{
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_expression.constructor.readExpression(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					name = Runtime.rtl.get(ctx, res, 1);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				else if (token.content == "\"" || token.content == "'")
				{
					var res = parser.parser_base.constructor.readString(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					name = Runtime.rtl.get(ctx, res, 1);
				}
				else
				{
					var res = parser.parser_base.constructor.readToken(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
					name = token.content;
				}
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content != "<=")
				{
					parser = save;
					break;
				}
				else
				{
					arr.push(ctx, name);
				}
			}
			names = arr.toCollection(ctx);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			expression = Runtime.rtl.get(ctx, res, 1);
			return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpAssignStruct(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":parser.caret,"expression":expression,"var_name":var_name,"names":names}))]);
		}
		if (token.content != "=" && token.content != "+=" && token.content != "-=" && token.content != "~=" && token.content != "." && token.content != "::" && token.content != "[")
		{
			var var_op_code = null;
			kind = Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE;
			values = new Runtime.Vector(ctx);
			parser = start;
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			pattern = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			var_op_code = Runtime.rtl.get(ctx, res, 1);
			var_name = var_op_code.value;
			/* Read expression */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "=")
			{
				var res = parser.parser_expression.constructor.readExpression(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				expression = Runtime.rtl.get(ctx, res, 1);
			}
			else
			{
				expression = null;
			}
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.setIm(ctx, var_name, true));
			values.push(ctx, new Bayrell.Lang.OpCodes.OpAssignValue(ctx, Runtime.Dict.from({"var_name":var_name,"expression":expression,"caret_start":var_op_code.caret_start,"caret_end":parser.caret})));
			/* Look next token */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			while (!token.eof && token.content == ",")
			{
				var res = parser.parser_base.constructor.readIdentifier(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				var_op_code = Runtime.rtl.get(ctx, res, 1);
				var_name = var_op_code.value;
				/* Read expression */
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content == "=")
				{
					var res = parser.parser_expression.constructor.readExpression(ctx, look);
					parser = Runtime.rtl.get(ctx, res, 0);
					expression = Runtime.rtl.get(ctx, res, 1);
				}
				else
				{
					expression = null;
				}
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.setIm(ctx, var_name, true));
				values.push(ctx, new Bayrell.Lang.OpCodes.OpAssignValue(ctx, Runtime.Dict.from({"var_name":var_name,"expression":expression,"caret_start":var_op_code.caret_start,"caret_end":parser.caret})));
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
			}
			var_name = "";
			expression = null;
		}
		else
		{
			parser = start;
			kind = Bayrell.Lang.OpCodes.OpAssign.KIND_ASSIGN;
			var op = "";
			var res = parser.parser_base.constructor.readDynamic(ctx, parser, 2 | 8);
			parser = Runtime.rtl.get(ctx, res, 0);
			var op_code = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "=" || token.content == "+=" || token.content == "-=" || token.content == "~=")
			{
				op = token.content;
			}
			else
			{
				throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Unknown operator " + Runtime.rtl.toStr(token.content), token.caret_start, parser.file_name)
			}
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			expression = Runtime.rtl.get(ctx, res, 1);
			values = Runtime.Collection.from([new Bayrell.Lang.OpCodes.OpAssignValue(ctx, Runtime.Dict.from({"op_code":op_code,"expression":expression,"op":op}))]);
			var_name = "";
			expression = null;
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpAssign(ctx, Runtime.Dict.from({"pattern":pattern,"values":(values != null) ? (values.toCollection(ctx)) : (null),"caret_start":caret_start,"caret_end":parser.caret,"expression":expression,"var_name":var_name,"names":names,"kind":kind}))]);
	},
	/**
	 * Read operator
	 */
	readInc: function(ctx, parser)
	{
		var look = null;
		var look1 = null;
		var look2 = null;
		var token = null;
		var token1 = null;
		var token2 = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look1 = Runtime.rtl.get(ctx, res, 0);
		token1 = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token1.caret_start;
		var res = parser.parser_base.constructor.readToken(ctx, look1);
		look2 = Runtime.rtl.get(ctx, res, 0);
		token2 = Runtime.rtl.get(ctx, res, 1);
		var look1_content = token1.content;
		var look2_content = token2.content;
		if ((look1_content == "++" || look1_content == "--") && parser.parser_base.constructor.isIdentifier(ctx, look2_content))
		{
			parser = look2;
			var op_code = new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"value":look2_content,"caret_start":token2.caret_start,"caret_end":token2.caret_end}));
			op_code = new Bayrell.Lang.OpCodes.OpInc(ctx, Runtime.Dict.from({"kind":(look1_content == "++") ? (Bayrell.Lang.OpCodes.OpInc.KIND_PRE_INC) : (Bayrell.Lang.OpCodes.OpInc.KIND_PRE_DEC),"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}));
			return Runtime.Collection.from([parser,op_code]);
		}
		if ((look2_content == "++" || look2_content == "--") && parser.parser_base.constructor.isIdentifier(ctx, look1_content))
		{
			parser = look2;
			var op_code = new Bayrell.Lang.OpCodes.OpIdentifier(ctx, Runtime.Dict.from({"value":look1_content,"caret_start":token1.caret_start,"caret_end":token1.caret_end}));
			op_code = new Bayrell.Lang.OpCodes.OpInc(ctx, Runtime.Dict.from({"kind":(look2_content == "++") ? (Bayrell.Lang.OpCodes.OpInc.KIND_POST_INC) : (Bayrell.Lang.OpCodes.OpInc.KIND_POST_DEC),"value":op_code,"caret_start":caret_start,"caret_end":parser.caret}));
			return Runtime.Collection.from([parser,op_code]);
		}
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read call function
	 */
	readCallFunction: function(ctx, parser)
	{
		var op_code = null;
		var res = parser.parser_base.constructor.readDynamic(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		if (op_code instanceof Bayrell.Lang.OpCodes.OpCall || op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			return Runtime.Collection.from([parser,op_code]);
		}
		return Runtime.Collection.from([parser,null]);
	},
	/**
	 * Read operator
	 */
	readOperator: function(ctx, parser)
	{
		var look = null;
		var token = null;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		if (token.content == "/")
		{
			return parser.parser_base.constructor.readComment(ctx, parser);
		}
		else if (token.content == "#switch" || token.content == "#ifcode")
		{
			return parser.parser_preprocessor.constructor.readPreprocessor(ctx, parser);
		}
		else if (token.content == "#ifdef")
		{
			return parser.parser_preprocessor.constructor.readPreprocessorIfDef(ctx, parser, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR);
		}
		else if (token.content == "break")
		{
			return Runtime.Collection.from([look,new Bayrell.Lang.OpCodes.OpBreak(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":look.caret}))]);
		}
		else if (token.content == "continue")
		{
			return Runtime.Collection.from([look,new Bayrell.Lang.OpCodes.OpContinue(ctx, Runtime.Dict.from({"caret_start":caret_start,"caret_end":look.caret}))]);
		}
		else if (token.content == "delete")
		{
			return this.readDelete(ctx, parser);
		}
		else if (token.content == "return")
		{
			return this.readReturn(ctx, parser);
		}
		else if (token.content == "throw")
		{
			return this.readThrow(ctx, parser);
		}
		else if (token.content == "try")
		{
			return this.readTry(ctx, parser);
		}
		else if (token.content == "if")
		{
			return this.readIf(ctx, parser);
		}
		else if (token.content == "for")
		{
			return this.readFor(ctx, parser);
		}
		else if (token.content == "while")
		{
			return this.readWhile(ctx, parser);
		}
		else if (token.content == "safe")
		{
			return this.readSafe(ctx, parser);
		}
		var op_code = null;
		/* Read op inc */
		var res = this.readInc(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		if (op_code != null)
		{
			return res;
		}
		/* Read op call function */
		var res = this.readCallFunction(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		if (op_code != null)
		{
			return res;
		}
		var save_parser = parser;
		/* Try to read pipe */
		var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var caret_start = op_code.caret_start;
		var var_name = op_code.value;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "|>")
		{
			return parser.parser_expression.constructor.ExpressionPipe(ctx, save_parser);
		}
		parser = save_parser;
		return this.readAssign(ctx, parser);
	},
	/**
	 * Read operators
	 */
	readOpItems: function(ctx, parser, end_tag)
	{
		if (end_tag == undefined) end_tag = "}";
		var look = null;
		var token = null;
		var op_code = null;
		var arr = new Runtime.Vector(ctx);
		var caret_start = parser.caret;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		while (!token.eof && token.content != end_tag)
		{
			var parser_value = null;
			var res = this.readOperator(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			if (parser_value != null)
			{
				arr.push(ctx, parser_value);
			}
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
			if (token.content == ";")
			{
				parser = look;
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
			}
		}
		op_code = new Bayrell.Lang.OpCodes.OpItems(ctx, Runtime.Dict.from({"items":arr.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}));
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read operators
	 */
	readOperators: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		/* Save vars */
		var save_vars = parser.vars;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		if (!parser.is_html)
		{
			if (token.content == "{")
			{
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = this.readOpItems(ctx, parser, "}");
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else
			{
				var res = this.readOperator(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
		}
		else
		{
			if (token.content == "{")
			{
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
				parser = Runtime.rtl.get(ctx, res, 0);
				var res = parser.parser_html.constructor.readHTML(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else
			{
				var res = parser.parser_html.constructor.readHTML(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
			}
		}
		/* Restore vars */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
		return Runtime.Collection.from([parser,op_code]);
	},
	/**
	 * Read flags
	 */
	readFlags: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var values = new Runtime.Map(ctx);
		var current_flags = Bayrell.Lang.OpCodes.OpFlags.getFlags(ctx);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && current_flags.indexOf(ctx, token.content) >= 0)
		{
			var flag = token.content;
			values.set(ctx, "p_" + Runtime.rtl.toStr(flag), true);
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpFlags(ctx, values)]);
	},
	/**
	 * Read function args
	 */
	readDeclareFunctionArgs: function(ctx, parser, find_ident, flag_match)
	{
		if (find_ident == undefined) find_ident = true;
		if (flag_match == undefined) flag_match = true;
		var res = null;
		var look = null;
		var token = null;
		var items = new Runtime.Vector(ctx);
		if (flag_match)
		{
			res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (!token.eof && token.content != ")")
		{
			var arg_value = null;
			var arg_pattern = null;
			var arg_expression = null;
			var arg_start = parser;
			/* Arg type */
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser, find_ident);
			parser = Runtime.rtl.get(ctx, res, 0);
			arg_pattern = Runtime.rtl.get(ctx, res, 1);
			/* Arg name */
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			arg_value = Runtime.rtl.get(ctx, res, 1);
			var arg_name = arg_value.value;
			/* Arg expression */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "=")
			{
				parser = look;
				var save_vars = parser.vars;
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), new Runtime.Dict(ctx));
				var res = parser.parser_expression.constructor.readExpression(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				arg_expression = Runtime.rtl.get(ctx, res, 1);
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
			}
			/* Register variable in parser */
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.setIm(ctx, arg_name, true));
			items.push(ctx, new Bayrell.Lang.OpCodes.OpDeclareFunctionArg(ctx, Runtime.Dict.from({"pattern":arg_pattern,"name":arg_name,"expression":arg_expression,"caret_start":arg_pattern.caret_start,"caret_end":parser.caret})));
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == ",")
			{
				parser = look;
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
			}
		}
		if (flag_match)
		{
			res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,items.toCollection(ctx)]);
	},
	/**
	 * Read function variables
	 */
	readDeclareFunctionUse: function(ctx, parser, vars, find_ident)
	{
		if (vars == undefined) vars = null;
		if (find_ident == undefined) find_ident = true;
		var look = null;
		var token = null;
		var items = new Runtime.Vector(ctx);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "use")
		{
			parser = look;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "(");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			while (!token.eof && token.content != ")")
			{
				var ident = null;
				var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				ident = Runtime.rtl.get(ctx, res, 1);
				var name = ident.value;
				if (vars != null && find_ident)
				{
					if (!vars.has(ctx, name))
					{
						throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Unknown identifier '" + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("'"), ident.caret_start, parser.file_name)
					}
				}
				items.push(ctx, name);
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content == ",")
				{
					parser = look;
					var res = parser.parser_base.constructor.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
				}
			}
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ")");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,items.toCollection(ctx)]);
	},
	/**
	 * Read function
	 */
	readDeclareFunction: function(ctx, parser, has_name)
	{
		if (has_name == undefined) has_name = true;
		var look = null;
		var parser_value = null;
		var op_code = null;
		var token = null;
		var flags = null;
		/* Clear vars */
		var save_is_html = parser.is_html;
		var save_vars = parser.vars;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), new Runtime.Dict(ctx));
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_html"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "async")
		{
			parser = look;
			flags = new Bayrell.Lang.OpCodes.OpFlags(ctx, Runtime.Dict.from({"p_async":true}));
		}
		var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		parser_value = Runtime.rtl.get(ctx, res, 1);
		var caret_start = parser_value.caret_start;
		var result_type = parser_value;
		var expression = null;
		var is_context = true;
		var name = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "@")
		{
			is_context = false;
			parser = look;
		}
		if (has_name)
		{
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			var name = parser_value.value;
		}
		/* Read function arguments */
		var args = null;
		var res = this.readDeclareFunctionArgs(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		args = Runtime.rtl.get(ctx, res, 1);
		/* Read function variables */
		var vars = null;
		var res = this.readDeclareFunctionUse(ctx, parser, save_vars);
		parser = Runtime.rtl.get(ctx, res, 0);
		vars = Runtime.rtl.get(ctx, res, 1);
		/* Add variables */
		vars.each(ctx, (ctx, name) => 
		{
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.setIm(ctx, name, true));
		});
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "=>")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "=>");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			expression = Runtime.rtl.get(ctx, res, 1);
			op_code = null;
		}
		else if (token.content == "{")
		{
			var save = parser;
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = this.readOperators(ctx, save);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
		}
		else if (token.content == ";")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
			parser = Runtime.rtl.get(ctx, res, 0);
			expression = null;
			op_code = null;
		}
		/* Restore vars */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["is_html"]), save_is_html);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpDeclareFunction(ctx, Runtime.Dict.from({"args":args,"vars":vars,"flags":flags,"name":name,"is_context":is_context,"result_type":result_type,"expression":expression,"items":op_code,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Returns true if next is function
	 */
	tryReadFunction: function(ctx, parser, has_name, flags)
	{
		if (has_name == undefined) has_name = true;
		if (flags == undefined) flags = null;
		var look = null;
		var parser_value = null;
		var token = null;
		/* Clear vars */
		var save_vars = parser.vars;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), new Runtime.Dict(ctx));
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
		var res = false;
		try
		{
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "async")
			{
				parser = look;
			}
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser, false);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			var caret_start = parser_value.caret_start;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "@")
			{
				parser = look;
			}
			if (has_name)
			{
				var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			var res = this.readDeclareFunctionArgs(ctx, parser, false);
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = this.readDeclareFunctionUse(ctx, parser, null, false);
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (flags != null && flags.p_declare || parser.current_class_kind == "interface")
			{
				if (token.content != ";")
				{
					throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Function", caret_start, parser.file_name)
				}
			}
			else if (token.content != "=>" && token.content != "{")
			{
				throw new Bayrell.Lang.Exceptions.ParserExpected(ctx, "Function", caret_start, parser.file_name)
			}
			res = true;
		}
		catch (_ex)
		{
			if (_ex instanceof Bayrell.Lang.Exceptions.ParserExpected)
			{
				var e = _ex;
				
				res = false;
			}
			else
			{
				throw _ex;
			}
		}
		/* Restore vars */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
		return res;
	},
	/**
	 * Read annotation
	 */
	readAnnotation: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var name = null;
		var params = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "@");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readTypeIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		name = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "{")
		{
			var res = parser.parser_base.constructor.readDict(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			params = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpAnnotation(ctx, Runtime.Dict.from({"name":name,"params":params}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayOperator";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayOperator",
			"name": "Bayrell.Lang.LangBay.ParserBayOperator",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayOperator);
window["Bayrell.Lang.LangBay.ParserBayOperator"] = Bayrell.Lang.LangBay.ParserBayOperator;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayOperator;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayPreprocessor = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangBay.ParserBayPreprocessor.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayPreprocessor)
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
		return "Bayrell.Lang.LangBay.ParserBayPreprocessor";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayPreprocessor,
{
	/**
	 * Read namespace
	 */
	readPreprocessor: function(ctx, parser)
	{
		var start = parser;
		var look = null;
		var token = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "#switch")
		{
			return this.readPreprocessorSwitch(ctx, start);
		}
		if (token.content == "#ifcode")
		{
			return this.readPreprocessorIfCode(ctx, start);
		}
		return null;
	},
	/**
	 * Read preprocessor switch
	 */
	readPreprocessorSwitch: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var items = new Runtime.Vector(ctx);
		/* Save vars */
		var save_vars = parser.vars;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), parser.vars.concat(ctx, Runtime.Dict.from({"ES6":true,"NODEJS":true,"JAVASCRIPT":true,"PHP":true,"PYTHON3":true})));
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "#switch");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		while (token.content == "#case")
		{
			parser = look;
			/* Skip ifcode */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			if (token.content == "ifcode")
			{
				parser = look;
			}
			/* Read condition */
			var condition = null;
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			condition = Runtime.rtl.get(ctx, res, 1);
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
			/* Read then */
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "then");
			parser = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			/* Read content */
			var content = "";
			var caret_content = parser.caret;
			var res = parser.parser_base.constructor.readUntilStringArr(ctx, parser, Runtime.Collection.from(["#case","#endswitch"]), false);
			parser = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			/* Look content */
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			var ifcode = new Bayrell.Lang.OpCodes.OpPreprocessorIfCode(ctx, Runtime.Dict.from({"condition":condition,"content":content,"caret_start":caret_content,"caret_end":parser.caret}));
			items.push(ctx, ifcode);
		}
		/* Restore vars */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["vars"]), save_vars);
		/* read endswitch */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endswitch");
		parser = Runtime.rtl.get(ctx, res, 0);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpPreprocessorSwitch(ctx, Runtime.Dict.from({"items":items.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read preprocessor ifcode
	 */
	readPreprocessorIfCode: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var caret_start = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "#ifcode");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		/* Read condition */
		var condition = null;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		condition = Runtime.rtl.get(ctx, res, 1);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
		/* Read then */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "then");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		/* Read content */
		var content = "";
		var caret_content = parser.caret;
		var res = parser.parser_base.constructor.readUntilStringArr(ctx, parser, Runtime.Collection.from(["#endif"]), false);
		parser = Runtime.rtl.get(ctx, res, 0);
		content = Runtime.rtl.get(ctx, res, 1);
		/* Match endif */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endif");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var ifcode = new Bayrell.Lang.OpCodes.OpPreprocessorIfCode(ctx, Runtime.Dict.from({"condition":condition,"content":content,"caret_start":caret_content,"caret_end":parser.caret}));
		return Runtime.Collection.from([parser,ifcode]);
	},
	/**
	 * Read preprocessor ifdef
	 */
	readPreprocessorIfDef: function(ctx, parser, kind)
	{
		if (kind == undefined) kind = "";
		var items = null;
		var token = null;
		var caret_start = parser.caret;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "#ifdef");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		/* Read condition */
		var condition = null;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), false);
		var res = parser.parser_expression.constructor.readExpression(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		condition = Runtime.rtl.get(ctx, res, 1);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["find_ident"]), true);
		/* Read then */
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "then");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_PROGRAM)
		{
			var res = parser.parser_program.constructor.readProgram(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
			items = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		else if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_CLASS_BODY)
		{
			var res = parser.parser_program.constructor.readClassBody(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
			items = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
			var d = parser.parser_program.constructor.classBodyAnalyze(ctx, parser, items);
			items = d.item(ctx, "functions");
		}
		else if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR)
		{
			var res = parser.parser_operator.constructor.readOpItems(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
			items = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		else if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_EXPRESSION)
		{
			var res = parser.parser_expression.constructor.readExpression(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			items = Runtime.rtl.get(ctx, res, 1);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "#endif");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpPreprocessorIfDef(ctx, Runtime.Dict.from({"items":items,"condition":condition,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayPreprocessor";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayPreprocessor",
			"name": "Bayrell.Lang.LangBay.ParserBayPreprocessor",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayPreprocessor);
window["Bayrell.Lang.LangBay.ParserBayPreprocessor"] = Bayrell.Lang.LangBay.ParserBayPreprocessor;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayPreprocessor;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangBay == 'undefined') Bayrell.Lang.LangBay = {};
Bayrell.Lang.LangBay.ParserBayProgram = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangBay.ParserBayProgram.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangBay.ParserBayProgram)
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
		return "Bayrell.Lang.LangBay.ParserBayProgram";
	},
});
Object.assign(Bayrell.Lang.LangBay.ParserBayProgram,
{
	/**
	 * Read namespace
	 */
	readNamespace: function(ctx, parser)
	{
		var token = null;
		var name = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "namespace");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readEntityName(ctx, parser, false);
		parser = Runtime.rtl.get(ctx, res, 0);
		name = Runtime.rtl.get(ctx, res, 1);
		var current_namespace_name = Runtime.rs.join(ctx, ".", name.names);
		var current_namespace = new Bayrell.Lang.OpCodes.OpNamespace(ctx, Runtime.Dict.from({"name":current_namespace_name,"caret_start":caret_start,"caret_end":parser.caret}));
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_namespace"]), current_namespace);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_namespace_name"]), current_namespace_name);
		return Runtime.Collection.from([parser,current_namespace]);
	},
	/**
	 * Read use
	 */
	readUse: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var name = null;
		var alias = "";
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "use");
		parser = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		var res = parser.parser_base.constructor.readEntityName(ctx, parser, false);
		parser = Runtime.rtl.get(ctx, res, 0);
		name = Runtime.rtl.get(ctx, res, 1);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "as")
		{
			var parser_value = null;
			parser = look;
			var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
			parser = Runtime.rtl.get(ctx, res, 0);
			parser_value = Runtime.rtl.get(ctx, res, 1);
			alias = parser_value.value;
		}
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpUse(ctx, Runtime.Dict.from({"name":Runtime.rs.join(ctx, ".", name.names),"alias":alias,"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/**
	 * Read class body
	 */
	readClassBody: function(ctx, parser, end_tag)
	{
		if (end_tag == undefined) end_tag = "}";
		var look = null;
		var token = null;
		var items = new Runtime.Vector(ctx);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		while (!token.eof && token.content != end_tag)
		{
			var item = null;
			if (token.content == "/")
			{
				var res = parser.parser_base.constructor.readComment(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				if (item != null)
				{
					items.push(ctx, item);
				}
			}
			else if (token.content == "@")
			{
				var res = parser.parser_operator.constructor.readAnnotation(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, item);
			}
			else if (token.content == "#switch" || token.content == "#ifcode")
			{
				var res = parser.parser_preprocessor.constructor.readPreprocessor(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				if (item != null)
				{
					items.push(ctx, item);
				}
			}
			else if (token.content == "#ifdef")
			{
				var res = parser.parser_preprocessor.constructor.readPreprocessorIfDef(ctx, parser, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_CLASS_BODY);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				if (item != null)
				{
					items.push(ctx, item);
				}
			}
			else if (token.content == "<")
			{
				break;
			}
			else
			{
				var flags = null;
				var res = parser.parser_operator.constructor.readFlags(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				flags = Runtime.rtl.get(ctx, res, 1);
				if (parser.parser_operator.constructor.tryReadFunction(ctx, parser, true, flags))
				{
					var res = parser.parser_operator.constructor.readDeclareFunction(ctx, parser, true);
					parser = Runtime.rtl.get(ctx, res, 0);
					item = Runtime.rtl.get(ctx, res, 1);
					if (item.expression != null)
					{
						var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
						parser = Runtime.rtl.get(ctx, res, 0);
					}
				}
				else
				{
					var res = parser.parser_operator.constructor.readAssign(ctx, parser);
					parser = Runtime.rtl.get(ctx, res, 0);
					item = Runtime.rtl.get(ctx, res, 1);
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
					parser = Runtime.rtl.get(ctx, res, 0);
				}
				item = Runtime.rtl.setAttr(ctx, item, Runtime.Collection.from(["flags"]), flags);
				if (item != null)
				{
					items.push(ctx, item);
				}
			}
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		}
		return Runtime.Collection.from([parser,items.toCollection(ctx)]);
	},
	/**
	 * Class body analyze
	 */
	classBodyAnalyze: function(ctx, parser, arr)
	{
		var names = new Runtime.Map(ctx);
		var vars = new Runtime.Vector(ctx);
		var functions = new Runtime.Vector(ctx);
		var items = new Runtime.Vector(ctx);
		var annotations = new Runtime.Vector(ctx);
		var comments = new Runtime.Vector(ctx);
		var fn_create = null;
		var fn_destroy = null;
		for (var i = 0;i < arr.count(ctx);i++)
		{
			var item = arr.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpAnnotation)
			{
				annotations.push(ctx, item);
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpComment)
			{
				comments.push(ctx, item);
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpAssign)
			{
				for (var j = 0;j < item.values.count(ctx);j++)
				{
					var assign_value = item.values.item(ctx, j);
					var value_name = assign_value.var_name;
					if (names.has(ctx, value_name))
					{
						throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Dublicate identifier " + Runtime.rtl.toStr(value_name), assign_value.caret_start, parser.file_name)
					}
					names.set(ctx, value_name, true);
				}
				item = item.copy(ctx, Runtime.Dict.from({"annotations":annotations.toCollection(ctx),"comments":comments.toCollection(ctx)}));
				vars.push(ctx, item);
				annotations.clear(ctx);
				comments.clear(ctx);
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
			{
				item = item.copy(ctx, Runtime.Dict.from({"annotations":annotations.toCollection(ctx),"comments":comments.toCollection(ctx)}));
				if (names.has(ctx, item.name))
				{
					throw new Bayrell.Lang.Exceptions.ParserError(ctx, "Dublicate identifier " + Runtime.rtl.toStr(item.name), item.caret_start, parser.file_name)
				}
				names.set(ctx, item.name, true);
				if (item.name == "constructor")
				{
					fn_create = item;
				}
				else if (item.name == "destructor")
				{
					fn_destroy = item;
				}
				else
				{
					functions.push(ctx, item);
				}
				annotations.clear(ctx);
				comments.clear(ctx);
			}
			else
			{
				items.push(ctx, item);
			}
		}
		items.appendVector(ctx, comments);
		return Runtime.Dict.from({"annotations":annotations.toCollection(ctx),"comments":comments.toCollection(ctx),"functions":functions.toCollection(ctx),"items":items.toCollection(ctx),"vars":vars.toCollection(ctx),"fn_create":fn_create,"fn_destroy":fn_destroy});
	},
	/**
	 * Read class
	 */
	readClass: function(ctx, parser)
	{
		var look = null;
		var token = null;
		var op_code = null;
		var template = null;
		var is_declare = false;
		var is_static = false;
		var is_struct = false;
		var class_kind = "";
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		if (token.content == "static")
		{
			parser = look;
			is_static = true;
		}
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "declare")
		{
			parser = look;
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			is_declare = true;
		}
		if (token.content == "class")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "class");
			parser = Runtime.rtl.get(ctx, res, 0);
			class_kind = Bayrell.Lang.OpCodes.OpDeclareClass.KIND_CLASS;
		}
		else if (token.content == "struct")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "struct");
			parser = Runtime.rtl.get(ctx, res, 0);
			class_kind = Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT;
		}
		else if (token.content == "interface")
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "interface");
			parser = Runtime.rtl.get(ctx, res, 0);
			class_kind = Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE;
		}
		else
		{
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "class");
		}
		var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		op_code = Runtime.rtl.get(ctx, res, 1);
		var class_name = op_code.value;
		/* Set class name */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_class_name"]), class_name);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["current_class_kind"]), class_kind);
		/* Register module in parser */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["uses"]), parser.uses.setIm(ctx, class_name, parser.current_namespace_name + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(class_name)));
		var save_uses = parser.uses;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "<")
		{
			template = new Runtime.Vector(ctx);
			var res = parser.parser_base.constructor.matchToken(ctx, parser, "<");
			parser = Runtime.rtl.get(ctx, res, 0);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			while (!token.eof && token.content != ">")
			{
				var parser_value = null;
				var res = parser.parser_base.constructor.readIdentifier(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				parser_value = Runtime.rtl.get(ctx, res, 1);
				template.push(ctx, parser_value);
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["uses"]), parser.uses.setIm(ctx, parser_value.value, parser_value.value));
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
				if (token.content != ">")
				{
					var res = parser.parser_base.constructor.matchToken(ctx, parser, ",");
					parser = Runtime.rtl.get(ctx, res, 0);
					var res = parser.parser_base.constructor.readToken(ctx, parser);
					look = Runtime.rtl.get(ctx, res, 0);
					token = Runtime.rtl.get(ctx, res, 1);
				}
			}
			var res = parser.parser_base.constructor.matchToken(ctx, parser, ">");
			parser = Runtime.rtl.get(ctx, res, 0);
		}
		var class_extends = null;
		var class_implements = null;
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "extends")
		{
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			class_extends = Runtime.rtl.get(ctx, res, 1);
		}
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		if (token.content == "implements")
		{
			class_implements = new Runtime.Vector(ctx);
			var res = parser.parser_base.constructor.readTypeIdentifier(ctx, look);
			parser = Runtime.rtl.get(ctx, res, 0);
			op_code = Runtime.rtl.get(ctx, res, 1);
			class_implements.push(ctx, op_code);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			while (!token.eof && token.content == ",")
			{
				parser = look;
				var res = parser.parser_base.constructor.readTypeIdentifier(ctx, look);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				class_implements.push(ctx, op_code);
				var res = parser.parser_base.constructor.readToken(ctx, parser);
				look = Runtime.rtl.get(ctx, res, 0);
				token = Runtime.rtl.get(ctx, res, 1);
			}
		}
		var arr = null;
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "{");
		parser = Runtime.rtl.get(ctx, res, 0);
		var res = this.readClassBody(ctx, parser);
		parser = Runtime.rtl.get(ctx, res, 0);
		arr = Runtime.rtl.get(ctx, res, 1);
		var d = this.classBodyAnalyze(ctx, parser, arr);
		var res = parser.parser_base.constructor.matchToken(ctx, parser, "}");
		parser = Runtime.rtl.get(ctx, res, 0);
		var current_class = new Bayrell.Lang.OpCodes.OpDeclareClass(ctx, Runtime.Dict.from({"kind":class_kind,"name":class_name,"is_static":is_static,"is_declare":is_declare,"class_extends":class_extends,"class_implements":(class_implements != null) ? (class_implements.toCollection(ctx)) : (null),"template":(template != null) ? (template.toCollection(ctx)) : (null),"vars":d.item(ctx, "vars"),"functions":d.item(ctx, "functions"),"fn_create":d.item(ctx, "fn_create"),"fn_destroy":d.item(ctx, "fn_destroy"),"items":d.item(ctx, "items"),"caret_start":caret_start,"caret_end":parser.caret}));
		/* Restore uses */
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["uses"]), save_uses);
		return Runtime.Collection.from([parser.copy(ctx, Runtime.Dict.from({"current_class":current_class})),current_class]);
	},
	/**
	 * Read program
	 */
	readProgram: function(ctx, parser, end_tag)
	{
		if (end_tag == undefined) end_tag = "";
		var look = null;
		var token = null;
		var op_code = null;
		var annotations = new Runtime.Vector(ctx);
		var comments = new Runtime.Vector(ctx);
		var items = new Runtime.Vector(ctx);
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
		var res = parser.parser_base.constructor.readToken(ctx, parser);
		look = Runtime.rtl.get(ctx, res, 0);
		token = Runtime.rtl.get(ctx, res, 1);
		var caret_start = token.caret_start;
		parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		if (token.eof)
		{
			return Runtime.Collection.from([parser,null]);
		}
		if (token.content == "<")
		{
			return parser.parser_html.constructor.readUI(ctx, parser);
		}
		while (!token.eof && (end_tag == "" || end_tag != "" && token.content == end_tag))
		{
			if (token.content == "/")
			{
				var res = parser.parser_base.constructor.readComment(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				if (op_code != null)
				{
					comments.push(ctx, op_code);
				}
			}
			else if (token.content == "@")
			{
				var res = parser.parser_operator.constructor.readAnnotation(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				annotations.push(ctx, op_code);
			}
			else if (token.content == "#switch" || token.content == "#ifcode")
			{
				/* Append comments */
				items.appendVector(ctx, comments);
				comments.clear(ctx);
				var res = parser.parser_preprocessor.constructor.readPreprocessor(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				if (op_code != null)
				{
					items.appendVector(ctx, comments);
					items.push(ctx, op_code);
				}
			}
			else if (token.content == "#ifdef")
			{
				/* Append comments */
				items.appendVector(ctx, comments);
				comments.clear(ctx);
				var res = parser.parser_preprocessor.constructor.readPreprocessorIfDef(ctx, parser, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_PROGRAM);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				if (op_code != null)
				{
					items.appendVector(ctx, comments);
					items.push(ctx, op_code);
				}
			}
			else if (token.content == "namespace")
			{
				/* Append comments */
				items.appendVector(ctx, comments);
				comments.clear(ctx);
				var res = this.readNamespace(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				items.push(ctx, op_code);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else if (token.content == "use")
			{
				/* Append comments */
				items.appendVector(ctx, comments);
				comments.clear(ctx);
				var res = this.readUse(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				op_code = Runtime.rtl.get(ctx, res, 1);
				var full_name = op_code.name;
				var short_name = "";
				if (op_code.alias == "")
				{
					short_name = Runtime.rs.explode(ctx, ".", full_name).last(ctx);
				}
				else
				{
					short_name = op_code.alias;
				}
				/* Register module in parser */
				parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["uses"]), parser.uses.setIm(ctx, short_name, full_name));
				items.push(ctx, op_code);
				var res = parser.parser_base.constructor.matchToken(ctx, parser, ";");
				parser = Runtime.rtl.get(ctx, res, 0);
			}
			else if (token.content == "class" || token.content == "struct" || token.content == "static" || token.content == "declare" || token.content == "interface")
			{
				var item = null;
				var res = this.readClass(ctx, parser);
				parser = Runtime.rtl.get(ctx, res, 0);
				item = Runtime.rtl.get(ctx, res, 1);
				item = item.copy(ctx, Runtime.Dict.from({"annotations":annotations.toCollection(ctx),"comments":comments.toCollection(ctx)}));
				items.push(ctx, item);
				annotations.clear(ctx);
				comments.clear(ctx);
			}
			else
			{
				break;
			}
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), false);
			var res = parser.parser_base.constructor.readToken(ctx, parser);
			look = Runtime.rtl.get(ctx, res, 0);
			token = Runtime.rtl.get(ctx, res, 1);
			parser = Runtime.rtl.setAttr(ctx, parser, Runtime.Collection.from(["skip_comments"]), true);
		}
		items.appendVector(ctx, comments);
		return Runtime.Collection.from([parser,new Bayrell.Lang.OpCodes.OpModule(ctx, Runtime.Dict.from({"uses":parser.uses.toDict(ctx),"items":items.toCollection(ctx),"caret_start":caret_start,"caret_end":parser.caret}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangBay";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangBay.ParserBayProgram";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangBay.ParserBayProgram",
			"name": "Bayrell.Lang.LangBay.ParserBayProgram",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangBay.ParserBayProgram);
window["Bayrell.Lang.LangBay.ParserBayProgram"] = Bayrell.Lang.LangBay.ParserBayProgram;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangBay.ParserBayProgram;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.AsyncAwait = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.LangES6.AsyncAwait.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.LangES6.AsyncAwait.prototype.constructor = Bayrell.Lang.LangES6.AsyncAwait;
Object.assign(Bayrell.Lang.LangES6.AsyncAwait.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.start_pos = "";
		this.end_pos = "";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.AsyncAwait)
		{
			this.start_pos = o.start_pos;
			this.end_pos = o.end_pos;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "start_pos")this.start_pos = v;
		else if (k == "end_pos")this.end_pos = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "start_pos")return this.start_pos;
		else if (k == "end_pos")return this.end_pos;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.AsyncAwait";
	},
});
Object.assign(Bayrell.Lang.LangES6.AsyncAwait, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.LangES6.AsyncAwait,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.AsyncAwait";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.AsyncAwait",
			"name": "Bayrell.Lang.LangES6.AsyncAwait",
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
			a.push("start_pos");
			a.push("end_pos");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "start_pos") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.AsyncAwait",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "end_pos") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.AsyncAwait",
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.AsyncAwait);
window["Bayrell.Lang.LangES6.AsyncAwait"] = Bayrell.Lang.LangES6.AsyncAwait;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.AsyncAwait;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6 = function(ctx)
{
	Bayrell.Lang.CoreTranslator.apply(this, arguments);
};
Bayrell.Lang.LangES6.TranslatorES6.prototype = Object.create(Bayrell.Lang.CoreTranslator.prototype);
Bayrell.Lang.LangES6.TranslatorES6.prototype.constructor = Bayrell.Lang.LangES6.TranslatorES6;
Object.assign(Bayrell.Lang.LangES6.TranslatorES6.prototype,
{
	/**
	 * Returns true if emulate async await
	 */
	isEmulateAsyncAwait: function(ctx)
	{
		return this.enable_async_await && this.emulate_async_await;
	},
	/**
	 * Returns true if async await
	 */
	isAsyncAwait: function(ctx)
	{
		return this.enable_async_await && !this.emulate_async_await;
	},
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.is_pipe = false;
		this.pipe_var_name = "";
		this.html_var_name = "";
		this.is_html = false;
		this.async_await = null;
		this.expression = null;
		this.html = null;
		this.operator = null;
		this.program = null;
		this.use_module_name = false;
		this.use_strict = true;
		this.enable_async_await = true;
		this.emulate_async_await = true;
		Bayrell.Lang.CoreTranslator.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6)
		{
			this.is_pipe = o.is_pipe;
			this.pipe_var_name = o.pipe_var_name;
			this.html_var_name = o.html_var_name;
			this.is_html = o.is_html;
			this.async_await = o.async_await;
			this.expression = o.expression;
			this.html = o.html;
			this.operator = o.operator;
			this.program = o.program;
			this.use_module_name = o.use_module_name;
			this.use_strict = o.use_strict;
			this.enable_async_await = o.enable_async_await;
			this.emulate_async_await = o.emulate_async_await;
		}
		Bayrell.Lang.CoreTranslator.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "is_pipe")this.is_pipe = v;
		else if (k == "pipe_var_name")this.pipe_var_name = v;
		else if (k == "html_var_name")this.html_var_name = v;
		else if (k == "is_html")this.is_html = v;
		else if (k == "async_await")this.async_await = v;
		else if (k == "expression")this.expression = v;
		else if (k == "html")this.html = v;
		else if (k == "operator")this.operator = v;
		else if (k == "program")this.program = v;
		else if (k == "use_module_name")this.use_module_name = v;
		else if (k == "use_strict")this.use_strict = v;
		else if (k == "enable_async_await")this.enable_async_await = v;
		else if (k == "emulate_async_await")this.emulate_async_await = v;
		else Bayrell.Lang.CoreTranslator.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "is_pipe")return this.is_pipe;
		else if (k == "pipe_var_name")return this.pipe_var_name;
		else if (k == "html_var_name")return this.html_var_name;
		else if (k == "is_html")return this.is_html;
		else if (k == "async_await")return this.async_await;
		else if (k == "expression")return this.expression;
		else if (k == "html")return this.html;
		else if (k == "operator")return this.operator;
		else if (k == "program")return this.program;
		else if (k == "use_module_name")return this.use_module_name;
		else if (k == "use_strict")return this.use_strict;
		else if (k == "enable_async_await")return this.enable_async_await;
		else if (k == "emulate_async_await")return this.emulate_async_await;
		return Bayrell.Lang.CoreTranslator.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.TranslatorES6";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6, Bayrell.Lang.CoreTranslator);
Object.assign(Bayrell.Lang.LangES6.TranslatorES6,
{
	/**
	 * Reset translator
	 */
	reset: function(ctx, t)
	{
		return t.copy(ctx, Runtime.Dict.from({"value":"","current_namespace_name":"","modules":new Runtime.Dict(ctx),"async_await":new Bayrell.Lang.LangES6.TranslatorES6AsyncAwait(ctx),"expression":new Bayrell.Lang.LangES6.TranslatorES6Expression(ctx),"html":new Bayrell.Lang.LangES6.TranslatorES6Html(ctx),"operator":new Bayrell.Lang.LangES6.TranslatorES6Operator(ctx),"program":new Bayrell.Lang.LangES6.TranslatorES6Program(ctx),"save_vars":new Runtime.Collection(ctx),"save_op_codes":new Runtime.Collection(ctx),"save_op_code_inc":0,"preprocessor_flags":Runtime.Dict.from({"FRONTEND":true,"ES6":true,"JAVASCRIPT":true})}));
	},
	/**
	 * Translate BaseOpCode
	 */
	translate: function(ctx, t, op_code)
	{
		t = this.reset(ctx, t);
		return t.program.constructor.translateProgram(ctx, t, op_code);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.CoreTranslator";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": "Bayrell.Lang.LangES6.TranslatorES6",
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
			a.push("is_pipe");
			a.push("pipe_var_name");
			a.push("html_var_name");
			a.push("is_html");
			a.push("async_await");
			a.push("expression");
			a.push("html");
			a.push("operator");
			a.push("program");
			a.push("use_module_name");
			a.push("use_strict");
			a.push("enable_async_await");
			a.push("emulate_async_await");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "is_pipe") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pipe_var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "html_var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "operator") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "program") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "use_module_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "use_strict") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "enable_async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "emulate_async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6",
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6);
window["Bayrell.Lang.LangES6.TranslatorES6"] = Bayrell.Lang.LangES6.TranslatorES6;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6AsyncAwait = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.LangES6.TranslatorES6AsyncAwait.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.LangES6.TranslatorES6AsyncAwait.prototype.constructor = Bayrell.Lang.LangES6.TranslatorES6AsyncAwait;
Object.assign(Bayrell.Lang.LangES6.TranslatorES6AsyncAwait.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.async_stack = new Runtime.Collection(ctx);
		this.pos = Runtime.Collection.from([0]);
		this.async_t = "__async_t";
		this.async_var = "__async_var";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6AsyncAwait)
		{
			this.async_stack = o.async_stack;
			this.pos = o.pos;
			this.async_t = o.async_t;
			this.async_var = o.async_var;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "async_stack")this.async_stack = v;
		else if (k == "pos")this.pos = v;
		else if (k == "async_t")this.async_t = v;
		else if (k == "async_var")this.async_var = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "async_stack")return this.async_stack;
		else if (k == "pos")return this.pos;
		else if (k == "async_t")return this.async_t;
		else if (k == "async_var")return this.async_var;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6AsyncAwait, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.LangES6.TranslatorES6AsyncAwait,
{
	/**
	 * Returns current pos
	 */
	currentPos: function(ctx, t)
	{
		return t.expression.constructor.toString(ctx, Runtime.rs.join(ctx, ".", t.async_await.pos));
	},
	/**
	 * Returns current pos
	 */
	nextPos: function(ctx, t)
	{
		var pos = t.async_await.pos;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), pos.setIm(ctx, pos.count(ctx) - 1, pos.last(ctx) + 1));
		var res = t.expression.constructor.toString(ctx, Runtime.rs.join(ctx, ".", t.async_await.pos));
		return Runtime.Collection.from([t,res]);
	},
	/**
	 * Returns push pos
	 */
	pushPos: function(ctx, t)
	{
		var pos = t.async_await.pos;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), pos.setIm(ctx, pos.count(ctx) - 1, pos.last(ctx) + 1).pushIm(ctx, 0));
		var res = t.expression.constructor.toString(ctx, Runtime.rs.join(ctx, ".", t.async_await.pos));
		return Runtime.Collection.from([t,res]);
	},
	/**
	 * Returns inc pos
	 */
	levelIncPos: function(ctx, t)
	{
		var pos = t.async_await.pos;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), pos.setIm(ctx, pos.count(ctx) - 1, pos.last(ctx)).pushIm(ctx, 0));
		var res = t.expression.constructor.toString(ctx, Runtime.rs.join(ctx, ".", t.async_await.pos));
		return Runtime.Collection.from([t,res]);
	},
	/**
	 * Returns pop pos
	 */
	popPos: function(ctx, t)
	{
		var pos = t.async_await.pos.removeLastIm(ctx);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), pos.setIm(ctx, pos.count(ctx) - 1, pos.last(ctx) + 1));
		var res = t.expression.constructor.toString(ctx, Runtime.rs.join(ctx, ".", t.async_await.pos));
		return Runtime.Collection.from([t,res]);
	},
	/**
	 * OpCall
	 */
	OpCall: function(ctx, t, op_code, is_expression)
	{
		if (is_expression == undefined) is_expression = true;
		var s = "";
		var flag = false;
		if (s == "")
		{
			var res = t.expression.constructor.Dynamic(ctx, t, op_code.obj);
			t = Runtime.rtl.get(ctx, res, 0);
			s = Runtime.rtl.get(ctx, res, 1);
			if (s == "parent")
			{
				s = t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name);
				if (t.current_function.name != "constructor")
				{
					if (t.current_function.isStatic(ctx))
					{
						s += Runtime.rtl.toStr("." + Runtime.rtl.toStr(t.current_function.name));
					}
					else
					{
						s += Runtime.rtl.toStr(".prototype." + Runtime.rtl.toStr(t.current_function.name));
					}
				}
				s += Runtime.rtl.toStr(".call(this");
				flag = true;
			}
			else
			{
				s += Runtime.rtl.toStr("(");
			}
		}
		var content = s;
		if (t.current_function.is_context && op_code.is_context)
		{
			content += Runtime.rtl.toStr("ctx");
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var var_name = Runtime.rtl.get(ctx, res, 1);
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var next_pos = Runtime.rtl.get(ctx, res, 1);
		var async_t = t.async_await.async_t;
		content = t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr(".call(ctx, ") + Runtime.rtl.toStr(content) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(");"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_name":var_name,"content":content}));
		t = Runtime.rtl.get(ctx, res, 0);
		if (is_expression)
		{
			return Runtime.Collection.from([t,async_t + Runtime.rtl.toStr(".getVar(ctx, ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(")")]);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * OpPipe
	 */
	OpPipe: function(ctx, t, op_code, is_expression)
	{
		if (is_expression == undefined) is_expression = true;
		var content = "";
		var var_name = "";
		var flag = false;
		var res = t.expression.constructor.Expression(ctx, t, op_code.obj);
		t = Runtime.rtl.get(ctx, res, 0);
		var_name = Runtime.rtl.get(ctx, res, 1);
		if (op_code.kind == Bayrell.Lang.OpCodes.OpPipe.KIND_METHOD)
		{
			content = var_name + Runtime.rtl.toStr(".constructor.") + Runtime.rtl.toStr(op_code.method_name.value);
		}
		else
		{
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, op_code.class_name);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(op_code.method_name.value);
		}
		var flag = false;
		content += Runtime.rtl.toStr("(");
		if (t.current_function.is_context && op_code.is_context)
		{
			content += Runtime.rtl.toStr("ctx");
			flag = true;
		}
		content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(var_name));
		flag = true;
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s1 = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s1));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var var_name = Runtime.rtl.get(ctx, res, 1);
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var next_pos = Runtime.rtl.get(ctx, res, 1);
		var async_t = t.async_await.async_t;
		content = t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr(".call(ctx, ") + Runtime.rtl.toStr(content) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(");"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_name":var_name,"content":content}));
		t = Runtime.rtl.get(ctx, res, 0);
		if (is_expression)
		{
			return Runtime.Collection.from([t,async_t + Runtime.rtl.toStr(".getVar(ctx, ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(")")]);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * OpFor
	 */
	OpFor: function(ctx, t, op_code)
	{
		var save_t = null;
		var async_t = t.async_await.async_t;
		var async_var = t.async_await.async_var;
		var content = "";
		var res = this.pushPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_pos = Runtime.rtl.get(ctx, res, 1);
		var res = this.popPos(ctx, t);
		save_t = Runtime.rtl.get(ctx, res, 0);
		var end_pos = Runtime.rtl.get(ctx, res, 1);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.pushIm(ctx, new Bayrell.Lang.LangES6.AsyncAwait(ctx, Runtime.Dict.from({"start_pos":start_pos,"end_pos":end_pos}))));
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Start Loop */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Loop Assign */
		if (op_code.expr1 instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			var res = t.constructor.saveOpCodeCall(ctx, t, Runtime.rtl.method(ctx, t.operator.getClassName(ctx), "OpAssign"), Runtime.Collection.from([op_code.expr1]));
			t = Runtime.rtl.get(ctx, res, 0);
			var save = Runtime.rtl.get(ctx, res, 1);
			var value = Runtime.rtl.get(ctx, res, 2);
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			content += Runtime.rtl.toStr(value);
		}
		else
		{
			var res = t.constructor.saveOpCodeCall(ctx, t, Runtime.rtl.method(ctx, t.expression.getClassName(ctx), "Expression"), Runtime.Collection.from([op_code.expr1]));
			t = Runtime.rtl.get(ctx, res, 0);
			var save = Runtime.rtl.get(ctx, res, 1);
			var value = Runtime.rtl.get(ctx, res, 2);
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			content += Runtime.rtl.toStr(value);
		}
		/* Loop Expression */
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var loop_expression = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(loop_expression) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Loop Expression */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(loop_expression) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Call condition expression */
		var res = t.constructor.saveOpCodeCall(ctx, t, Runtime.rtl.method(ctx, t.expression.getClassName(ctx), "Expression"), Runtime.Collection.from([op_code.expr2]));
		t = Runtime.rtl.get(ctx, res, 0);
		var save = Runtime.rtl.get(ctx, res, 1);
		var value = Runtime.rtl.get(ctx, res, 2);
		if (save != "")
		{
			content += Runtime.rtl.toStr(save);
		}
		/* Loop condition */
		content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(";")));
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_loop = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_loop) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		/* Start Loop */
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Loop */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_loop) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = t.expression.constructor.Expression(ctx, t, op_code.expr3);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";")));
		var res = t.operator.constructor.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* End Loop */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(loop_expression) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* End Loop */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.removeLastIm(ctx));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), save_t.async_await.pos);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpIfBlock
	 */
	OpIfBlock: function(ctx, t, condition, op_code, end_pos)
	{
		var content = "";
		var async_t = t.async_await.async_t;
		var async_var = t.async_await.async_var;
		/* Call condition expression */
		var res = t.constructor.saveOpCodeCall(ctx, t, Runtime.rtl.method(ctx, t.expression.getClassName(ctx), "Expression"), Runtime.Collection.from([condition]));
		t = Runtime.rtl.get(ctx, res, 0);
		var save = Runtime.rtl.get(ctx, res, 1);
		var value = Runtime.rtl.get(ctx, res, 2);
		if (save != "")
		{
			content += Runtime.rtl.toStr(save);
		}
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_if = Runtime.rtl.get(ctx, res, 1);
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var next_if = Runtime.rtl.get(ctx, res, 1);
		/* If condition */
		content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(";")));
		content += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_if) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(next_if) + Runtime.rtl.toStr(");")));
		/* Start Loop */
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* If true */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_if) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = t.operator.constructor.Operators(ctx, t, op_code);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* End if */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Next If */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(next_if) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpIf
	 */
	OpIf: function(ctx, t, op_code)
	{
		var save_t = null;
		var async_t = t.async_await.async_t;
		var async_var = t.async_await.async_var;
		var content = "";
		var if_true_pos = "";
		var if_false_pos = "";
		var res = this.pushPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_pos = Runtime.rtl.get(ctx, res, 1);
		var res = this.popPos(ctx, t);
		save_t = Runtime.rtl.get(ctx, res, 0);
		var end_pos = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Start if */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* If true */
		var res = this.OpIfBlock(ctx, t, op_code.condition, op_code.if_true, end_pos);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* If else */
		for (var i = 0;i < op_code.if_else.count(ctx);i++)
		{
			var if_else = op_code.if_else.item(ctx, i);
			var res = this.OpIfBlock(ctx, t, if_else.condition, if_else.if_true, end_pos);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		/* Else */
		if (op_code.if_false)
		{
			content += Runtime.rtl.toStr(t.s(ctx, "/* If false */"));
			var res = t.operator.constructor.Operators(ctx, t, op_code.if_false);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		/* End if */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* End if */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), save_t.async_await.pos);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpReturn
	 */
	OpReturn: function(ctx, t, op_code)
	{
		var content = "";
		var s1 = "";
		if (op_code.expression)
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			s1 = "null";
		}
		var async_t = t.async_await.async_t;
		content = t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".ret(ctx, ") + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(");"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpTryCatch
	 */
	OpTryCatch: function(ctx, t, op_code)
	{
		var save_t = null;
		var content = "";
		var async_t = t.async_await.async_t;
		var async_var = t.async_await.async_var;
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_pos = Runtime.rtl.get(ctx, res, 1);
		var res = this.nextPos(ctx, t);
		save_t = Runtime.rtl.get(ctx, res, 0);
		var end_pos = Runtime.rtl.get(ctx, res, 1);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.pushIm(ctx, new Bayrell.Lang.LangES6.AsyncAwait(ctx, Runtime.Dict.from({"start_pos":start_pos,"end_pos":end_pos}))));
		/* Start Try Catch */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Start Try */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.levelIncPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_catch = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, async_t + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".catch_push(ctx, ") + Runtime.rtl.toStr(start_catch) + Runtime.rtl.toStr(");")));
		var res = t.operator.constructor.Operators(ctx, t, op_code.op_try);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Start Catch */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".catch_pop(ctx).jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Start Catch */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_catch) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "var _ex = " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".getErr(ctx);")));
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var s = "";
			var pattern = "";
			var item = op_code.items.item(ctx, i);
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, item.pattern);
			t = Runtime.rtl.get(ctx, res, 0);
			pattern += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			if (pattern != "var")
			{
				s = "if (_ex instanceof " + Runtime.rtl.toStr(pattern) + Runtime.rtl.toStr(")");
			}
			else
			{
				s = "if (true)";
			}
			s += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			s += Runtime.rtl.toStr((s != "") ? (t.s(ctx, "var " + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = _ex;"))) : ("var " + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = _ex;")));
			var res = t.operator.constructor.Operators(ctx, t, item.value);
			t = Runtime.rtl.get(ctx, res, 0);
			s += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			s += Runtime.rtl.toStr(t.s(ctx, "}"));
			if (i != 0)
			{
				s = "else " + Runtime.rtl.toStr(s);
			}
			content += Runtime.rtl.toStr(t.s(ctx, s));
		}
		content += Runtime.rtl.toStr(t.s(ctx, "else"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "throw _ex;"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		/* End Try Catch */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* End Catch */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.removeLastIm(ctx));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), save_t.async_await.pos);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpWhile
	 */
	OpWhile: function(ctx, t, op_code)
	{
		var save_t = null;
		var async_t = t.async_await.async_t;
		var async_var = t.async_await.async_var;
		var content = "";
		var res = this.pushPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_pos = Runtime.rtl.get(ctx, res, 1);
		var res = this.popPos(ctx, t);
		save_t = Runtime.rtl.get(ctx, res, 0);
		var end_pos = Runtime.rtl.get(ctx, res, 1);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.pushIm(ctx, new Bayrell.Lang.LangES6.AsyncAwait(ctx, Runtime.Dict.from({"start_pos":start_pos,"end_pos":end_pos}))));
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Start while */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Call condition expression */
		var res = t.constructor.saveOpCodeCall(ctx, t, Runtime.rtl.method(ctx, t.expression.getClassName(ctx), "Expression"), Runtime.Collection.from([op_code.condition]));
		t = Runtime.rtl.get(ctx, res, 0);
		var save = Runtime.rtl.get(ctx, res, 1);
		var value = Runtime.rtl.get(ctx, res, 2);
		if (save != "")
		{
			content += Runtime.rtl.toStr(save);
		}
		/* Loop condition */
		content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(";")));
		var res = this.nextPos(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var start_loop = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(async_var) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_loop) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(");")));
		/* Start Loop */
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* Loop while */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(start_loop) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = t.operator.constructor.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* End Loop */
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(start_pos) + Runtime.rtl.toStr(");")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "/* End while */"));
		content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(end_pos) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "async_stack"]), t.async_await.async_stack.removeLastIm(ctx));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["async_await", "pos"]), save_t.async_await.pos);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction Body
	 */
	OpDeclareFunctionBody: function(ctx, t, f)
	{
		var save_t = t;
		/* Save op codes */
		var save_vars = t.save_vars;
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		t = t.constructor.clearSaveOpCode(ctx, t);
		var async_t = t.async_await.async_t;
		t = t.levelInc(ctx);
		var s1 = t.s(ctx, "return (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(") =>"));
		s1 += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(this.currentPos(ctx, t)) + Runtime.rtl.toStr(")")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		if (f.items)
		{
			var res = t.operator.constructor.Operators(ctx, t, f.items);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		else if (f.expression)
		{
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			var res = t.expression.constructor.Expression(ctx, t, f.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			var expr = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				s1 += Runtime.rtl.toStr(save);
			}
			/* Restore save op codes */
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			s1 += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".ret(ctx, ") + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(");")));
		}
		t = t.levelDec(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "}"));
		s1 += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".ret_void(ctx);")));
		t = t.levelDec(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "};"));
		t = t.levelDec(ctx);
		/* Content */
		var content = "";
		content = t.s(ctx, "{");
		t = t.levelInc(ctx);
		if (t.save_vars.count(ctx) > 0)
		{
			content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", t.save_vars)) + Runtime.rtl.toStr(";")));
		}
		content += Runtime.rtl.toStr(s1);
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_vars"]), save_vars);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([save_t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
			"name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
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
			a.push("async_stack");
			a.push("pos");
			a.push("async_t");
			a.push("async_var");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "async_stack") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pos") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "async_t") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "async_var") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6AsyncAwait",
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6AsyncAwait);
window["Bayrell.Lang.LangES6.TranslatorES6AsyncAwait"] = Bayrell.Lang.LangES6.TranslatorES6AsyncAwait;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6AsyncAwait;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6Expression = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.LangES6.TranslatorES6Expression.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.LangES6.TranslatorES6Expression.prototype.constructor = Bayrell.Lang.LangES6.TranslatorES6Expression;
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Expression.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6Expression)
		{
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Expression";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Expression, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Expression,
{
	/**
	 * Returns string
	 */
	toString: function(ctx, s)
	{
		s = Runtime.re.replace(ctx, "\\\\", "\\\\", s);
		s = Runtime.re.replace(ctx, "\"", "\\\"", s);
		s = Runtime.re.replace(ctx, "\n", "\\n", s);
		s = Runtime.re.replace(ctx, "\r", "\\r", s);
		s = Runtime.re.replace(ctx, "\t", "\\t", s);
		return "\"" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr("\"");
	},
	/**
	 * To pattern
	 */
	toPattern: function(ctx, t, pattern)
	{
		var names = this.findModuleNames(ctx, t, pattern.entity_name.names);
		var e = Runtime.rs.join(ctx, ".", names);
		var a = (pattern.template != null) ? (pattern.template.map(ctx, (ctx, pattern) => 
		{
			return this.toPattern(ctx, t, pattern);
		})) : (null);
		var b = (a != null) ? (",\"t\":[" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", a)) + Runtime.rtl.toStr("]")) : ("");
		return "{\"e\":" + Runtime.rtl.toStr(this.toString(ctx, e)) + Runtime.rtl.toStr(b) + Runtime.rtl.toStr("}");
	},
	/**
	 * Returns string
	 */
	rtlToStr: function(ctx, t, s)
	{
		if (t.use_module_name)
		{
			return "use(\"Runtime.rtl\").toStr(" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(")");
		}
		var module_name = this.findModuleName(ctx, t, "rtl");
		return module_name + Runtime.rtl.toStr(".toStr(") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(")");
	},
	/**
	 * Find module name
	 */
	findModuleName: function(ctx, t, module_name)
	{
		if (module_name == "Collection")
		{
			return "Runtime.Collection";
		}
		else if (module_name == "Dict")
		{
			return "Runtime.Dict";
		}
		else if (module_name == "Map")
		{
			return "Runtime.Map";
		}
		else if (module_name == "Vector")
		{
			return "Runtime.Vector";
		}
		else if (module_name == "rs")
		{
			return "Runtime.rs";
		}
		else if (module_name == "rtl")
		{
			return "Runtime.rtl";
		}
		else if (module_name == "ArrayInterface")
		{
			return "";
		}
		else if (t.modules.has(ctx, module_name))
		{
			return t.modules.item(ctx, module_name);
		}
		return module_name;
	},
	/**
	 * Returns module name
	 */
	findModuleNames: function(ctx, t, names)
	{
		if (names.count(ctx) > 0)
		{
			var module_name = names.first(ctx);
			module_name = this.findModuleName(ctx, t, module_name);
			if (module_name != "")
			{
				names = names.setIm(ctx, 0, module_name);
			}
		}
		return names;
	},
	/**
	 * Use module name
	 */
	useModuleName: function(ctx, t, module_name)
	{
		module_name = this.findModuleName(ctx, t, module_name);
		if (t.use_module_name)
		{
			return "use(" + Runtime.rtl.toStr(this.toString(ctx, module_name)) + Runtime.rtl.toStr(")");
		}
		return module_name;
	},
	/**
	 * OpTypeIdentifier
	 */
	OpTypeIdentifier: function(ctx, t, op_code)
	{
		var names = this.findModuleNames(ctx, t, op_code.entity_name.names);
		var s = Runtime.rs.join(ctx, ".", names);
		return Runtime.Collection.from([t,s]);
	},
	/**
	 * OpIdentifier
	 */
	OpIdentifier: function(ctx, t, op_code)
	{
		if (op_code.value == "@")
		{
			return Runtime.Collection.from([t,"ctx"]);
		}
		if (op_code.value == "_")
		{
			return Runtime.Collection.from([t,"ctx.translate"]);
		}
		if (op_code.value == "log")
		{
			return Runtime.Collection.from([t,"console.log"]);
		}
		if (t.modules.has(ctx, op_code.value) || op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE)
		{
			var module_name = op_code.value;
			var new_module_name = this.useModuleName(ctx, t, module_name);
			return Runtime.Collection.from([t,new_module_name]);
		}
		var content = op_code.value;
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpNumber
	 */
	OpNumber: function(ctx, t, op_code)
	{
		var content = op_code.value;
		if (op_code.negative)
		{
			content = "-" + Runtime.rtl.toStr(content);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 15);
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpString
	 */
	OpString: function(ctx, t, op_code)
	{
		return Runtime.Collection.from([t,this.toString(ctx, op_code.value)]);
	},
	/**
	 * OpCollection
	 */
	OpCollection: function(ctx, t, op_code)
	{
		var content = "";
		var values = op_code.values.map(ctx, (ctx, op_code) => 
		{
			var res = this.Expression(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			return s;
		});
		values = values.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		var module_name = this.useModuleName(ctx, t, "Collection");
		content = module_name + Runtime.rtl.toStr(".from([") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", values)) + Runtime.rtl.toStr("])");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDict
	 */
	OpDict: function(ctx, t, op_code)
	{
		var content = "";
		var values = op_code.values.map(ctx, (ctx, pair, key) => 
		{
			if (pair.condition != null && !t.preprocessor_flags.has(ctx, pair.condition.value))
			{
				return "";
			}
			var res = this.Expression(ctx, t, pair.value);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			return this.toString(ctx, pair.key) + Runtime.rtl.toStr(":") + Runtime.rtl.toStr(s);
		});
		values = values.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		var module_name = this.useModuleName(ctx, t, "Dict");
		content = module_name + Runtime.rtl.toStr(".from({") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", values)) + Runtime.rtl.toStr("})");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Dynamic
	 */
	Dynamic: function(ctx, t, op_code, is_call)
	{
		if (is_call == undefined) is_call = false;
		if (op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			return this.OpIdentifier(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			var attrs = new Runtime.Vector(ctx);
			var op_code_item = op_code;
			var op_code_first = op_code;
			var first_item = "";
			var prev_kind = "";
			var s = "";
			var first_item_complex = false;
			while (op_code_first instanceof Bayrell.Lang.OpCodes.OpAttr)
			{
				attrs.push(ctx, op_code_first);
				op_code_item = op_code_first;
				op_code_first = op_code_first.obj;
			}
			attrs = attrs.reverseIm(ctx);
			if (op_code_first instanceof Bayrell.Lang.OpCodes.OpCall)
			{
				prev_kind = "var";
				var res = this.OpCall(ctx, t, op_code_first);
				t = Runtime.rtl.get(ctx, res, 0);
				s = Runtime.rtl.get(ctx, res, 1);
				first_item_complex = true;
			}
			else if (op_code_first instanceof Bayrell.Lang.OpCodes.OpNew)
			{
				prev_kind = "var";
				var res = this.OpNew(ctx, t, op_code_first);
				t = Runtime.rtl.get(ctx, res, 0);
				s = "(" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(")");
				first_item_complex = true;
			}
			else if (op_code_first instanceof Bayrell.Lang.OpCodes.OpIdentifier)
			{
				if (op_code_first.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF)
				{
					if (op_code_first.value == "static")
					{
						s = "this" + Runtime.rtl.toStr(((!t.is_static_function) ? (".constructor") : ("")));
						prev_kind = "static";
					}
					else if (op_code_first.value == "parent")
					{
						s = this.useModuleName(ctx, t, t.current_class_extends_name);
						prev_kind = "parent";
					}
					else if (op_code_first.value == "self")
					{
						prev_kind = "static";
						s = t.current_class_full_name;
					}
					else if (op_code_first.value == "this")
					{
						prev_kind = "var";
						s = "this";
					}
				}
				else if (op_code_first.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_PIPE)
				{
					prev_kind = "var";
					s = t.pipe_var_name + Runtime.rtl.toStr(".val");
				}
				else
				{
					var res = this.OpIdentifier(ctx, t, op_code_first);
					t = Runtime.rtl.get(ctx, res, 0);
					s = Runtime.rtl.get(ctx, res, 1);
					prev_kind = "var";
					if (t.modules.has(ctx, op_code_first.value) || op_code_first.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE)
					{
						prev_kind = "static";
					}
				}
			}
			first_item = s;
			if (first_item_complex && t.is_pipe)
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":first_item}));
				t = Runtime.rtl.get(ctx, res, 0);
				first_item = Runtime.rtl.get(ctx, res, 1);
				s = first_item;
			}
			var attrs_sz = attrs.count(ctx);
			for (var i = 0;i < attrs_sz;i++)
			{
				var attr = attrs.item(ctx, i);
				if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
				{
					s += Runtime.rtl.toStr("." + Runtime.rtl.toStr(attr.value.value));
					/* Pipe */
					if (t.is_pipe && !is_call)
					{
						if (i == attrs_sz - 1)
						{
							s += Runtime.rtl.toStr(".bind(" + Runtime.rtl.toStr(first_item) + Runtime.rtl.toStr(")"));
						}
						else
						{
							first_item = s;
						}
					}
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC)
				{
					if (prev_kind == "var")
					{
						s += Runtime.rtl.toStr(".constructor." + Runtime.rtl.toStr(attr.value.value));
						first_item += Runtime.rtl.toStr(".constructor");
					}
					else if (prev_kind == "parent" && !t.current_function.isStatic(ctx))
					{
						s += Runtime.rtl.toStr(".prototype." + Runtime.rtl.toStr(attr.value.value) + Runtime.rtl.toStr(".bind(this)"));
					}
					else
					{
						s += Runtime.rtl.toStr("." + Runtime.rtl.toStr(attr.value.value));
					}
					/* Pipe */
					if (t.is_pipe && prev_kind != "parent" && !is_call)
					{
						if (i == attrs_sz - 1)
						{
							s += Runtime.rtl.toStr(".bind(" + Runtime.rtl.toStr(first_item) + Runtime.rtl.toStr(")"));
						}
						else
						{
							first_item = s;
						}
					}
					prev_kind = "static";
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC)
				{
					var res = this.Expression(ctx, t, attr.value);
					t = Runtime.rtl.get(ctx, res, 0);
					/* s ~= "[" ~ res[1] ~ "]"; */
					s = "Runtime.rtl.get(ctx, " + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(")");
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC_ATTRS)
				{
					var items = new Runtime.Vector(ctx);
					if (attr.attrs != null)
					{
						for (var j = 0;j < attr.attrs.count(ctx);j++)
						{
							var res = this.Expression(ctx, t, Runtime.rtl.get(ctx, attr.attrs, j));
							t = Runtime.rtl.get(ctx, res, 0);
							items.push(ctx, Runtime.rtl.get(ctx, res, 1));
						}
					}
					s = "Runtime.rtl.attr(ctx, " + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", items)) + Runtime.rtl.toStr("])");
				}
			}
			return Runtime.Collection.from([t,s]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCurry)
		{
			var res = this.OpCurry(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var content = Runtime.rtl.get(ctx, res, 1);
			var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":content}));
			t = Runtime.rtl.get(ctx, res, 0);
			var var_name = Runtime.rtl.get(ctx, res, 1);
			return Runtime.Collection.from([t,var_name]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			return this.OpCall(ctx, t, op_code);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * OpInc
	 */
	OpInc: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.Expression(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		var s = Runtime.rtl.get(ctx, res, 1);
		if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_PRE_INC)
		{
			content = "++" + Runtime.rtl.toStr(s);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_PRE_DEC)
		{
			content = "--" + Runtime.rtl.toStr(s);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_POST_INC)
		{
			content = s + Runtime.rtl.toStr("++");
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_POST_DEC)
		{
			content = s + Runtime.rtl.toStr("--");
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpMath
	 */
	OpMath: function(ctx, t, op_code)
	{
		var res = this.Expression(ctx, t, op_code.value1);
		t = Runtime.rtl.get(ctx, res, 0);
		var opcode_level1 = Runtime.rtl.get(ctx, res, 0).opcode_level;
		var s1 = Runtime.rtl.get(ctx, res, 1);
		var op = "";
		var op_math = op_code.math;
		var opcode_level = 0;
		if (op_code.math == "!")
		{
			opcode_level = 16;
			op = "!";
		}
		if (op_code.math == ">>")
		{
			opcode_level = 12;
			op = ">>";
		}
		if (op_code.math == "<<")
		{
			opcode_level = 12;
			op = "<<";
		}
		if (op_code.math == "&")
		{
			opcode_level = 9;
			op = "&";
		}
		if (op_code.math == "xor")
		{
			opcode_level = 8;
			op = "^";
		}
		if (op_code.math == "|")
		{
			opcode_level = 7;
			op = "|";
		}
		if (op_code.math == "*")
		{
			opcode_level = 14;
			op = "*";
		}
		if (op_code.math == "/")
		{
			opcode_level = 14;
			op = "/";
		}
		if (op_code.math == "%")
		{
			opcode_level = 14;
			op = "%";
		}
		if (op_code.math == "div")
		{
			opcode_level = 14;
			op = "div";
		}
		if (op_code.math == "mod")
		{
			opcode_level = 14;
			op = "mod";
		}
		if (op_code.math == "+")
		{
			opcode_level = 13;
			op = "+";
		}
		if (op_code.math == "-")
		{
			opcode_level = 13;
			op = "-";
		}
		if (op_code.math == "~")
		{
			opcode_level = 13;
			op = "+";
		}
		if (op_code.math == "!")
		{
			opcode_level = 13;
			op = "!";
		}
		if (op_code.math == "===")
		{
			opcode_level = 10;
			op = "===";
		}
		if (op_code.math == "!==")
		{
			opcode_level = 10;
			op = "!==";
		}
		if (op_code.math == "==")
		{
			opcode_level = 10;
			op = "==";
		}
		if (op_code.math == "!=")
		{
			opcode_level = 10;
			op = "!=";
		}
		if (op_code.math == ">=")
		{
			opcode_level = 10;
			op = ">=";
		}
		if (op_code.math == "<=")
		{
			opcode_level = 10;
			op = "<=";
		}
		if (op_code.math == ">")
		{
			opcode_level = 10;
			op = ">";
		}
		if (op_code.math == "<")
		{
			opcode_level = 10;
			op = "<";
		}
		if (op_code.math == "is")
		{
			opcode_level = 10;
			op = "instanceof";
		}
		if (op_code.math == "instanceof")
		{
			opcode_level = 10;
			op = "instanceof";
		}
		if (op_code.math == "implements")
		{
			opcode_level = 10;
			op = "implements";
		}
		if (op_code.math == "not")
		{
			opcode_level = 16;
			op = "!";
		}
		if (op_code.math == "and")
		{
			opcode_level = 6;
			op = "&&";
		}
		if (op_code.math == "&&")
		{
			opcode_level = 6;
			op = "&&";
		}
		if (op_code.math == "or")
		{
			opcode_level = 5;
			op = "||";
		}
		if (op_code.math == "||")
		{
			opcode_level = 5;
			op = "||";
		}
		var content = "";
		if (op_code.math == "!" || op_code.math == "not")
		{
			content = op + Runtime.rtl.toStr(t.o(ctx, s1, opcode_level1, opcode_level));
		}
		else
		{
			var res = this.Expression(ctx, t, op_code.value2);
			t = Runtime.rtl.get(ctx, res, 0);
			var opcode_level2 = Runtime.rtl.get(ctx, res, 0).opcode_level;
			var s2 = Runtime.rtl.get(ctx, res, 1);
			var op1 = t.o(ctx, s1, opcode_level1, opcode_level);
			var op2 = t.o(ctx, s2, opcode_level2, opcode_level);
			if (op_math == "~")
			{
				content = op1 + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(op) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(this.rtlToStr(ctx, t, op2));
			}
			else if (op_math == "implements")
			{
				var rtl_name = this.findModuleName(ctx, t, "rtl");
				content = rtl_name + Runtime.rtl.toStr(".is_implements(") + Runtime.rtl.toStr(op1) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(op2) + Runtime.rtl.toStr(")");
			}
			else
			{
				content = op1 + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(op) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(op2);
			}
		}
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), opcode_level);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpMethod
	 */
	OpMethod: function(ctx, t, op_code)
	{
		var content = "";
		var val1 = "";
		var val2 = op_code.value2;
		var prev_kind = "";
		if (op_code.value1.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF)
		{
			if (op_code.value1.value == "static")
			{
				val1 = "this" + Runtime.rtl.toStr(((!t.is_static_function) ? (".constructor") : ("")));
				prev_kind = "static";
			}
			else if (op_code.value1.value == "parent")
			{
				val1 = this.useModuleName(ctx, t, t.current_class_extends_name);
				prev_kind = "parent";
			}
			else if (op_code.value1.value == "self")
			{
				prev_kind = "static";
				val1 = t.current_class_full_name;
			}
			else if (op_code.value1.value == "this")
			{
				prev_kind = "var";
				val1 = "this";
			}
		}
		else
		{
			var res = this.OpIdentifier(ctx, t, op_code.value1);
			t = Runtime.rtl.get(ctx, res, 0);
			val1 = Runtime.rtl.get(ctx, res, 1);
			if (op_code.kind == Bayrell.Lang.OpCodes.OpMethod.KIND_STATIC)
			{
				val1 += Runtime.rtl.toStr(".constructor");
			}
		}
		content = val1 + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(val2) + Runtime.rtl.toStr(".bind(") + Runtime.rtl.toStr(val1) + Runtime.rtl.toStr(")");
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 0);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpNew
	 */
	OpNew: function(ctx, t, op_code)
	{
		var content = "new ";
		var res = this.OpTypeIdentifier(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		var flag = false;
		content += Runtime.rtl.toStr("(");
		if (t.current_function == null || t.current_function.is_context)
		{
			content += Runtime.rtl.toStr("ctx");
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpCurry
	 */
	OpCurry: function(ctx, t, op_code)
	{
		var content = "";
		var s = "";
		var args = op_code.args.filter(ctx, (ctx, arg) => 
		{
			return arg instanceof Bayrell.Lang.OpCodes.OpCurryArg;
		}).sortIm(ctx, (ctx, arg1, arg2) => 
		{
			return (arg1.pos > arg2.pos) ? (1) : ((arg1.pos < arg2.pos) ? (-1) : (0));
		});
		var args_sz = args.count(ctx);
		for (var i = 0;i < args_sz;i++)
		{
			var arg = args.item(ctx, i);
			if (args_sz - 1 == i)
			{
				content += Runtime.rtl.toStr("(ctx, __varg" + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(") => "));
			}
			else
			{
				content += Runtime.rtl.toStr("(__ctx" + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(", __varg") + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(") => "));
			}
		}
		var flag = false;
		var res = t.expression.constructor.Dynamic(ctx, t, op_code.obj, true);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		if (s == "parent")
		{
			content = this.useModuleName(ctx, t, t.current_class_extends_name);
			if (t.current_function.name != "constructor")
			{
				if (t.current_function.isStatic(ctx))
				{
					content += Runtime.rtl.toStr("." + Runtime.rtl.toStr(t.current_function.name));
				}
				else
				{
					content += Runtime.rtl.toStr(".prototype." + Runtime.rtl.toStr(t.current_function.name));
				}
			}
			content += Runtime.rtl.toStr(".call(this, ctx");
			flag = true;
		}
		else
		{
			content += Runtime.rtl.toStr("(ctx");
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			s = "";
			var item = op_code.args.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpCurryArg)
			{
				s += Runtime.rtl.toStr("__varg" + Runtime.rtl.toStr(item.pos));
			}
			else
			{
				var res = this.Expression(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				s = Runtime.rtl.get(ctx, res, 1);
			}
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpCall
	 */
	OpCall: function(ctx, t, op_code, is_expression)
	{
		if (is_expression == undefined) is_expression = true;
		if (t.current_function.isFlag(ctx, "async") && op_code.is_await && t.isEmulateAsyncAwait(ctx))
		{
			return t.async_await.constructor.OpCall(ctx, t, op_code, is_expression);
		}
		var s = "";
		var flag = false;
		var res = t.expression.constructor.Dynamic(ctx, t, op_code.obj, true);
		t = Runtime.rtl.get(ctx, res, 0);
		s = Runtime.rtl.get(ctx, res, 1);
		if (s == "parent")
		{
			s = this.useModuleName(ctx, t, t.current_class_extends_name);
			if (t.current_function.name != "constructor")
			{
				if (t.current_function.isStatic(ctx))
				{
					s += Runtime.rtl.toStr("." + Runtime.rtl.toStr(t.current_function.name));
				}
				else
				{
					s += Runtime.rtl.toStr(".prototype." + Runtime.rtl.toStr(t.current_function.name));
				}
			}
			s += Runtime.rtl.toStr(".call(this");
			flag = true;
		}
		else
		{
			s += Runtime.rtl.toStr("(");
		}
		var content = s;
		if (op_code.obj instanceof Bayrell.Lang.OpCodes.OpIdentifier && op_code.obj.value == "_")
		{
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr("ctx"));
			flag = true;
		}
		else if (t.current_function.is_context && op_code.is_context)
		{
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr("ctx"));
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		if (t.current_function.isFlag(ctx, "async") && op_code.is_await && t.isAsyncAwait(ctx))
		{
			content = "await " + Runtime.rtl.toStr(content);
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassOf
	 */
	OpClassOf: function(ctx, t, op_code)
	{
		var names = this.findModuleNames(ctx, t, op_code.entity_name.names);
		var s = Runtime.rs.join(ctx, ".", names);
		return Runtime.Collection.from([t,this.toString(ctx, s)]);
	},
	/**
	 * OpTernary
	 */
	OpTernary: function(ctx, t, op_code)
	{
		var content = "";
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 100);
		var res = t.expression.constructor.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var condition = Runtime.rtl.get(ctx, res, 1);
		var res = t.expression.constructor.Expression(ctx, t, op_code.if_true);
		t = Runtime.rtl.get(ctx, res, 0);
		var if_true = Runtime.rtl.get(ctx, res, 1);
		var res = t.expression.constructor.Expression(ctx, t, op_code.if_false);
		t = Runtime.rtl.get(ctx, res, 0);
		var if_false = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr("(" + Runtime.rtl.toStr(condition) + Runtime.rtl.toStr(") ? (") + Runtime.rtl.toStr(if_true) + Runtime.rtl.toStr(") : (") + Runtime.rtl.toStr(if_false) + Runtime.rtl.toStr(")"));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 11);
		/* OpTernary */
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpPipe
	 */
	OpPipe: function(ctx, t, op_code, is_expression)
	{
		if (is_expression == undefined) is_expression = true;
		var content = "";
		var var_name = "";
		var value = "";
		/* use Runtime.Monad */
		var monad_name = "Runtime.Monad";
		if (t.use_module_name)
		{
			var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":this.useModuleName(ctx, t, "Runtime.Monad")}));
			t = Runtime.rtl.get(ctx, res, 0);
			monad_name = Runtime.rtl.get(ctx, res, 1);
		}
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var_name = Runtime.rtl.get(ctx, res, 1);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["pipe_var_name"]), var_name);
		var items = new Runtime.Vector(ctx);
		var op_code_item = op_code;
		while (op_code_item instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			items.push(ctx, op_code_item);
			op_code_item = op_code_item.obj;
		}
		items = items.reverseIm(ctx);
		/* First item */
		var res = t.expression.constructor.Expression(ctx, t, op_code_item);
		t = Runtime.rtl.get(ctx, res, 0);
		value = Runtime.rtl.get(ctx, res, 1);
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"content":t.s(ctx, "var " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(" = new ") + Runtime.rtl.toStr(monad_name) + Runtime.rtl.toStr("(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(");"))}));
		t = Runtime.rtl.get(ctx, res, 0);
		/* Output items */
		for (var i = 0;i < items.count(ctx);i++)
		{
			var s1 = "";
			var s2 = "";
			var op_item = items.item(ctx, i);
			var args = new Runtime.Vector(ctx);
			if (op_item.kind == Bayrell.Lang.OpCodes.OpPipe.KIND_ATTR)
			{
				var res = this.Expression(ctx, t, op_item.value);
				t = Runtime.rtl.get(ctx, res, 0);
				value = Runtime.rtl.get(ctx, res, 1);
				s1 = var_name + Runtime.rtl.toStr(".attr(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
			}
			else if (op_item.kind == Bayrell.Lang.OpCodes.OpPipe.KIND_CALL)
			{
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), true);
				var args = "";
				var is_instance_method = false;
				if (op_item.value instanceof Bayrell.Lang.OpCodes.OpCall && op_item.value.obj instanceof Bayrell.Lang.OpCodes.OpAttr && op_item.value.obj.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
				{
					is_instance_method = true;
					value = t.pipe_var_name + Runtime.rtl.toStr(".val");
					value += Runtime.rtl.toStr("." + Runtime.rtl.toStr(op_item.value.obj.value.value));
					value += Runtime.rtl.toStr(".bind(" + Runtime.rtl.toStr(t.pipe_var_name) + Runtime.rtl.toStr(".val)"));
					var flag = false;
					for (var j = 0;j < op_item.value.args.count(ctx);j++)
					{
						var item = op_item.value.args.item(ctx, j);
						var res = t.expression.constructor.Expression(ctx, t, item);
						t = Runtime.rtl.get(ctx, res, 0);
						var s_arg = Runtime.rtl.get(ctx, res, 1);
						args += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s_arg));
						flag = true;
					}
				}
				else
				{
					var res = this.Dynamic(ctx, t, op_item.value);
					t = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
				}
				if (!op_item.is_async || !t.enable_async_await)
				{
					if (op_item.is_monad)
					{
						s1 = var_name + Runtime.rtl.toStr(".monad(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
					}
					else
					{
						if (is_instance_method)
						{
							s1 = var_name + Runtime.rtl.toStr(".callMethod(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr("])");
						}
						else
						{
							s1 = var_name + Runtime.rtl.toStr(".call(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
						}
					}
				}
				else if (op_item.is_async && t.current_function.isFlag(ctx, "async"))
				{
					if (t.isEmulateAsyncAwait(ctx))
					{
						if (op_item.is_monad)
						{
							s2 = var_name + Runtime.rtl.toStr(".monadAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
						}
						else
						{
							if (is_instance_method)
							{
								s2 = var_name + Runtime.rtl.toStr(".callMethodAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr("])");
							}
							else
							{
								s2 = var_name + Runtime.rtl.toStr(".callAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
							}
						}
					}
					else if (t.isAsyncAwait(ctx))
					{
						if (op_item.is_monad)
						{
							s1 = "await " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(".monadAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
						}
						else
						{
							if (is_instance_method)
							{
								s1 = "await " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(".callMethodAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr("])");
							}
							else
							{
								s1 = "await " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(".callAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
							}
						}
					}
				}
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), false);
			}
			if (s1 != "")
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"content":t.s(ctx, var_name + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";"))}));
				t = Runtime.rtl.get(ctx, res, 0);
			}
			if (s2 != "")
			{
				var res = t.async_await.constructor.nextPos(ctx, t);
				t = Runtime.rtl.get(ctx, res, 0);
				var next_pos = Runtime.rtl.get(ctx, res, 1);
				var async_t = t.async_await.async_t;
				var s3 = t.s(ctx, "return " + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".jump(ctx, ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr(".call(ctx, ") + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(");"));
				t = t.levelDec(ctx);
				s3 += Runtime.rtl.toStr(t.s(ctx, "}"));
				s3 += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".pos(ctx) == ") + Runtime.rtl.toStr(next_pos) + Runtime.rtl.toStr(")")));
				s3 += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				s3 += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(async_t) + Runtime.rtl.toStr(".getVar(ctx, ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name)) + Runtime.rtl.toStr(");")));
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"content":s3}));
				t = Runtime.rtl.get(ctx, res, 0);
			}
		}
		return Runtime.Collection.from([t,var_name + Runtime.rtl.toStr(".value(ctx)")]);
	},
	/**
	 * OpTypeConvert
	 */
	OpTypeConvert: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.Expression(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		var value = Runtime.rtl.get(ctx, res, 1);
		content = this.useModuleName(ctx, t, "rtl") + Runtime.rtl.toStr(".to(") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(this.toPattern(ctx, t, op_code.pattern)) + Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpTernary
	 */
	OpDeclareFunction: function(ctx, t, op_code)
	{
		var content = "";
		/* Set function name */
		var save_f = t.current_function;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code);
		var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code);
		var args = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr("(" + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(") => "));
		var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Restore function */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), save_f);
		/* OpTernary */
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Expression
	 */
	Expression: function(ctx, t, op_code)
	{
		var content = "";
		var save_is_pipe = t.is_pipe;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 100);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), false);
		if (op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			var res = this.OpIdentifier(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTypeIdentifier)
		{
			var res = this.OpTypeIdentifier(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpNumber)
		{
			var res = this.OpNumber(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpString)
		{
			var res = this.OpString(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCollection)
		{
			var res = this.OpCollection(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDict)
		{
			var res = this.OpDict(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpInc)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 16);
			var res = this.OpInc(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpMath)
		{
			var res = this.OpMath(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpMethod)
		{
			var res = this.OpMethod(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpNew)
		{
			var res = this.OpNew(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			var res = this.Dynamic(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			var res = this.OpCall(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpClassOf)
		{
			var res = this.OpClassOf(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCurry)
		{
			var res = this.OpCurry(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			var res = this.OpPipe(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTernary)
		{
			var res = this.OpTernary(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTypeConvert)
		{
			var res = this.OpTypeConvert(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			var res = this.OpDeclareFunction(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlItems)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), true);
			var res = t.html.constructor.OpHtmlItems(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), false);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			var res = t.operator.constructor.OpPreprocessorIfDef(ctx, t, op_code, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_EXPRESSION);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), save_is_pipe);
		return Runtime.Collection.from([t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Expression";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6Expression",
			"name": "Bayrell.Lang.LangES6.TranslatorES6Expression",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6Expression);
window["Bayrell.Lang.LangES6.TranslatorES6Expression"] = Bayrell.Lang.LangES6.TranslatorES6Expression;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6Expression;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6Html = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Html.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6Html)
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
		return "Bayrell.Lang.LangES6.TranslatorES6Html";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Html,
{
	/**
	 * Is component
	 */
	isComponent: function(ctx, tag_name)
	{
		if (tag_name == "")
		{
			return false;
		}
		var ch1 = Runtime.rs.substr(ctx, tag_name, 0, 1);
		var ch2 = Runtime.rs.strtoupper(ctx, ch1);
		return ch1 == "{" || ch1 == ch2;
	},
	/**
	 * Translator html value
	 */
	OpHtmlAttr: function(ctx, t, attr, item_pos)
	{
		var op_code = attr.value;
		if (attr instanceof Bayrell.Lang.OpCodes.OpString)
		{
			return Runtime.Collection.from([t,t.expression.constructor.toString(ctx, op_code.value)]);
		}
		if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlValue)
		{
			if (op_code.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_RAW)
			{
				var res = t.expression.constructor.Expression(ctx, t, op_code.value);
				t = Runtime.rtl.get(ctx, res, 0);
				var value = Runtime.rtl.get(ctx, res, 1);
				return Runtime.Collection.from([t,value]);
			}
			else if (op_code.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_JSON)
			{
				var res = t.expression.constructor.Expression(ctx, t, op_code.value);
				t = Runtime.rtl.get(ctx, res, 0);
				var value = Runtime.rtl.get(ctx, res, 1);
				value = "this.json_encode(ctx, " + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
				return Runtime.Collection.from([t,value]);
			}
		}
		var res = t.expression.constructor.Expression(ctx, t, op_code);
		t = Runtime.rtl.get(ctx, res, 0);
		var value = Runtime.rtl.get(ctx, res, 1);
		value = t.o(ctx, value, Runtime.rtl.get(ctx, res, 0).opcode_level, 13);
		return Runtime.Collection.from([t,value]);
	},
	/**
	 * Translator html template
	 */
	OpHtmlAttrs: function(ctx, t, attrs, item_pos)
	{
		var attr_class = new Runtime.Vector(ctx);
		var attr_s = "null";
		var attr_key_value = "";
		var attr_elem_name = "";
		var has_attr_key = false;
		var res_attrs = attrs.map(ctx, (ctx, attr) => 
		{
			if (attr.is_spread)
			{
				return "";
			}
			var res = this.OpHtmlAttr(ctx, t, attr);
			t = Runtime.rtl.get(ctx, res, 0);
			var attr_value = Runtime.rtl.get(ctx, res, 1);
			var attr_key = attr.key;
			var ch = Runtime.rs.substr(ctx, attr_key, 0, 1);
			if (attr_key == "class")
			{
				attr_class.push(ctx, attr_value);
				if (attr_elem_name == "" && attr.value instanceof Bayrell.Lang.OpCodes.OpString)
				{
					var arr = Runtime.rs.split(ctx, " ", attr.value.value);
					attr_elem_name = t.expression.constructor.toString(ctx, Runtime.rtl.get(ctx, arr, 0));
				}
				return "";
			}
			else if (attr_key == "@key")
			{
				var res = this.OpHtmlAttr(ctx, t, attr);
				t = Runtime.rtl.get(ctx, res, 0);
				attr_value = Runtime.rtl.get(ctx, res, 1);
				attr_key_value = attr_value;
				return "";
			}
			else if (Runtime.rs.substr(ctx, attr_key, 0, 7) == "@event:")
			{
				var event_name = Runtime.rs.substr(ctx, attr_key, 7);
				event_name = t.expression.constructor.findModuleName(ctx, t, event_name);
				attr_key = "@event:" + Runtime.rtl.toStr(event_name);
				attr_value = "[" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(attr_value) + Runtime.rtl.toStr("]");
			}
			else if (Runtime.rs.substr(ctx, attr_key, 0, 12) == "@eventAsync:")
			{
				var event_name = Runtime.rs.substr(ctx, attr_key, 12);
				event_name = t.expression.constructor.findModuleName(ctx, t, event_name);
				attr_key = "@eventAsync:" + Runtime.rtl.toStr(event_name);
				attr_value = "[" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(attr_value) + Runtime.rtl.toStr("]");
			}
			else if (attr_key == "@ref" || attr_key == "@bind" || attr_key == "@name")
			{
				attr_value = "[" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(attr_value) + Runtime.rtl.toStr("]");
			}
			return t.expression.constructor.toString(ctx, attr_key) + Runtime.rtl.toStr(":") + Runtime.rtl.toStr(attr_value);
		});
		res_attrs = res_attrs.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		if (attr_class.count(ctx) > 0)
		{
			attr_class.push(ctx, "this.getCssHash(ctx)");
			/*attr_class.push( t.expression::toString("h-" ~ ParserBayHtml::getCssHash(t.current_class_full_name)) );*/
			res_attrs = res_attrs.pushIm(ctx, "\"class\":" + Runtime.rtl.toStr("[") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", attr_class)) + Runtime.rtl.toStr("].join(\" \")"));
		}
		if (attr_key_value != "")
		{
			res_attrs = res_attrs.pushIm(ctx, "\"@key\":" + Runtime.rtl.toStr(attr_key_value));
		}
		if (attr_elem_name != "")
		{
			res_attrs = res_attrs.pushIm(ctx, "\"@elem_name\":" + Runtime.rtl.toStr(attr_elem_name));
		}
		if (res_attrs.count(ctx) > 0)
		{
			attr_s = "{" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", res_attrs)) + Runtime.rtl.toStr("}");
		}
		else
		{
			attr_s = "{}";
		}
		/* Add spreads */
		for (var i = 0;i < attrs.count(ctx);i++)
		{
			var attr = Runtime.rtl.get(ctx, attrs, i);
			if (!attr.is_spread)
			{
				continue;
			}
			attr_s = "this.mergeAttrs(ctx, " + Runtime.rtl.toStr(attr_s) + Runtime.rtl.toStr(",") + Runtime.rtl.toStr(attr.value.value) + Runtime.rtl.toStr(")");
		}
		return Runtime.Collection.from([t,attr_s]);
	},
	/**
	 * Returns class name
	 */
	getOpHtmlAttrsClassName: function(ctx, attrs)
	{
		var class_names = new Runtime.Vector(ctx);
		if (attrs != "")
		{
			for (var attrs_i = 0;attrs_i < attrs.count(ctx);attrs_i++)
			{
				var attr = Runtime.rtl.get(ctx, attrs, attrs_i);
				var attr_key = attr.key;
				if (attr_key == "class")
				{
					if (attr.value instanceof Bayrell.Lang.OpCodes.OpString)
					{
						class_names.push(ctx, attr.value.value);
					}
				}
			}
		}
		return Runtime.rs.join(ctx, " ", class_names);
	},
	/**
	 * Translator html template
	 */
	OpHtmlTag: function(ctx, t, op_code, item_pos, var_name)
	{
		var content = "";
		var content2 = "";
		var str_var_name = t.expression.constructor.toString(ctx, var_name);
		if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlContent)
		{
			var item_value = t.expression.constructor.toString(ctx, op_code.value);
			content += Runtime.rtl.toStr(t.s(ctx, "/* Text */"));
			content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"text\", {\"content\": ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr("});")));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlValue)
		{
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			var res = t.expression.constructor.Expression(ctx, t, op_code.value);
			t = Runtime.rtl.get(ctx, res, 0);
			var item_value = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			/* Restore op codes */
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			if (op_code.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_RAW)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "/* Raw */"));
				content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"raw\", {\"content\": ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr("});")));
			}
			else if (op_code.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_HTML)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "/* Html */"));
				content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"html\", {\"content\": ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr("});")));
			}
			else if (op_code.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_JSON)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "/* Text */"));
				item_value = "this.json_encode(ctx, " + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr(")");
				content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"text\", {\"content\": ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr("});")));
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlTag)
		{
			var new_var_name = "";
			var has_childs = op_code.items != null && op_code.items.items != null && op_code.items.items.count(ctx) > 0;
			var is_component = this.isComponent(ctx, op_code.tag_name);
			var res = this.OpHtmlAttrs(ctx, t, op_code.attrs, item_pos);
			t = Runtime.rtl.get(ctx, res, 0);
			var attrs = Runtime.rtl.get(ctx, res, 1);
			if (op_code.tag_name == "")
			{
				if (has_childs)
				{
					var res = t.constructor.incSaveOpCode(ctx, t);
					t = Runtime.rtl.get(ctx, res, 0);
					new_var_name = Runtime.rtl.get(ctx, res, 1);
					content += Runtime.rtl.toStr(t.s(ctx, "/* Items */"));
					content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("; var ") + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("_childs = [];")));
					content += Runtime.rtl.toStr(t.s(ctx, "[" + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"empty\", null);")));
				}
				else
				{
					content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"empty\", null);")));
				}
			}
			else if (is_component)
			{
				var tag_name = "";
				if (op_code.op_code_name)
				{
					var res = t.expression.constructor.Expression(ctx, t, op_code.op_code_name);
					t = Runtime.rtl.get(ctx, res, 0);
					tag_name = Runtime.rtl.get(ctx, res, 1);
				}
				else
				{
					tag_name = t.expression.constructor.toString(ctx, t.expression.constructor.findModuleName(ctx, t, op_code.tag_name));
				}
				if (has_childs)
				{
					var res = this.OpHtmlItems(ctx, t, op_code.items);
					t = Runtime.rtl.get(ctx, res, 0);
					var f = Runtime.rtl.get(ctx, res, 1);
					content += Runtime.rtl.toStr(t.s(ctx, "/* Component '" + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr("' */")));
					content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"component\", {\"name\": ") + Runtime.rtl.toStr(tag_name) + Runtime.rtl.toStr(",\"attrs\": ") + Runtime.rtl.toStr(attrs) + Runtime.rtl.toStr(", \"layout\": layout, \"content\": ") + Runtime.rtl.toStr(f) + Runtime.rtl.toStr("});")));
					has_childs = false;
				}
				else
				{
					content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"component\", {\"name\": ") + Runtime.rtl.toStr(tag_name) + Runtime.rtl.toStr(",\"attrs\": ") + Runtime.rtl.toStr(attrs) + Runtime.rtl.toStr(", \"layout\": layout});")));
				}
			}
			else
			{
				var tag_name = t.expression.constructor.toString(ctx, op_code.tag_name);
				if (has_childs)
				{
					var attr_class_name = this.getOpHtmlAttrsClassName(ctx, op_code.attrs);
					attr_class_name = Runtime.rs.replace(ctx, " ", ".", attr_class_name);
					if (attr_class_name != "")
					{
						attr_class_name = "." + Runtime.rtl.toStr(attr_class_name);
					}
					var res = t.constructor.incSaveOpCode(ctx, t);
					t = Runtime.rtl.get(ctx, res, 0);
					new_var_name = Runtime.rtl.get(ctx, res, 1);
					content += Runtime.rtl.toStr(t.s(ctx, "/* Element '" + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr(attr_class_name) + Runtime.rtl.toStr("' */")));
					content += Runtime.rtl.toStr(t.s(ctx, "var " + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("; var ") + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("_childs = [];")));
					content += Runtime.rtl.toStr(t.s(ctx, "[" + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"element\", {\"name\": ") + Runtime.rtl.toStr(tag_name) + Runtime.rtl.toStr(",\"attrs\": ") + Runtime.rtl.toStr(attrs) + Runtime.rtl.toStr("});")));
				}
				else
				{
					content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"element\", {\"name\": ") + Runtime.rtl.toStr(tag_name) + Runtime.rtl.toStr(",\"attrs\": ") + Runtime.rtl.toStr(attrs) + Runtime.rtl.toStr("});")));
				}
			}
			if (has_childs)
			{
				content += Runtime.rtl.toStr(t.s2(ctx, ""));
				var res = this.OpHtmlChilds(ctx, t, op_code.items, new_var_name);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				content += Runtime.rtl.toStr(t.s(ctx, "RenderDriver.p(" + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("_childs);")));
			}
			if (op_code.tag_name == "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_childs.concat(") + Runtime.rtl.toStr(new_var_name) + Runtime.rtl.toStr("_childs);")));
			}
		}
		else
		{
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			var res = t.expression.constructor.Expression(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var item_value = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			/* Restore op codes */
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			content += Runtime.rtl.toStr(t.s(ctx, "/* Text */"));
			content += Runtime.rtl.toStr(t.s(ctx, "[__vnull, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs] = ") + Runtime.rtl.toStr("RenderDriver.e(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_childs") + Runtime.rtl.toStr(", \"text\", {\"content\": ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr("});")));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translator html items
	 */
	OpHtmlChilds: function(ctx, t, op_code, control_name)
	{
		if (op_code == null || op_code.items.count(ctx) == 0)
		{
			return Runtime.Collection.from([t,""]);
		}
		var save_control_name = t.html_var_name;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["html_var_name"]), control_name);
		var next_space = true;
		var content = "";
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var item = op_code.items.item(ctx, i);
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			var op_content = "";
			if (i > 0 && next_space)
			{
				content += Runtime.rtl.toStr(t.s2(ctx, ""));
			}
			if (!next_space)
			{
				next_space = true;
			}
			if (item instanceof Bayrell.Lang.OpCodes.OpAssign)
			{
				var res = t.operator.constructor.OpAssign(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpComment)
			{
				var res = t.operator.constructor.OpComment(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				next_space = false;
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpFor)
			{
				var res = t.operator.constructor.OpFor(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpIf)
			{
				var res = t.operator.constructor.OpIf(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpWhile)
			{
				var res = t.operator.constructor.OpWhile(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else
			{
				var res = this.OpHtmlTag(ctx, t, item, i, control_name);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			if (op_content != "")
			{
				content += Runtime.rtl.toStr(op_content);
			}
			/* Restore save op codes */
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		}
		/*
		if (control_name != "control" and patch_flag)
		{
			content ~= t.s("RenderDriver.p(" ~ control_name ~ ", " ~ control_name ~ "_childs);");
		}
		*/
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["html_var_name"]), save_control_name);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translator html items
	 */
	OpHtmlItems: function(ctx, t, op_code)
	{
		if (op_code == null || op_code.items.count(ctx) == 0)
		{
			return Runtime.Collection.from([t,""]);
		}
		/* Save op codes */
		var save_t = t;
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		var content = "";
		content += Runtime.rtl.toStr("(__control) =>");
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "var __vnull = null;"));
		content += Runtime.rtl.toStr(t.s(ctx, "var __control_childs = [];"));
		content += Runtime.rtl.toStr(t.s2(ctx, ""));
		var res = this.OpHtmlChilds(ctx, t, op_code, "__control");
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/*content ~= t.s("RenderDriver.p(__control, __control_childs);");*/
		content += Runtime.rtl.toStr(t.s2(ctx, ""));
		content += Runtime.rtl.toStr(t.s(ctx, "return __control_childs;"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translate html
	 */
	OpHtml: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.OpHtmlItems(ctx, t, op_code);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		return Runtime.Collection.from([t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Html";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6Html",
			"name": "Bayrell.Lang.LangES6.TranslatorES6Html",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6Html);
window["Bayrell.Lang.LangES6.TranslatorES6Html"] = Bayrell.Lang.LangES6.TranslatorES6Html;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6Html;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6Operator = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.LangES6.TranslatorES6Operator.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.LangES6.TranslatorES6Operator.prototype.constructor = Bayrell.Lang.LangES6.TranslatorES6Operator;
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Operator.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6Operator)
		{
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Operator";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Operator, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Operator,
{
	/**
	 * Returns true if op_code contains await
	 */
	isAwait: function(ctx, op_code)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		if (op_code == null)
		{
			var __memorize_value = false;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		if (op_code instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_ASSIGN || op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
			{
				for (var i = 0;i < op_code.values.count(ctx);i++)
				{
					var item = op_code.values.item(ctx, i);
					var flag = this.isAwait(ctx, item.expression);
					if (flag)
					{
						var __memorize_value = true;
						Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
						return __memorize_value;
					}
				}
			}
			else if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_STRUCT)
			{
				var flag = this.isAwait(ctx, op_code.expression);
				if (flag)
				{
					var __memorize_value = true;
					Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
					return __memorize_value;
				}
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAssignStruct)
		{
			var flag = this.isAwait(ctx, op_code.expression);
			if (flag)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			var op_code_next = op_code;
			while (op_code_next instanceof Bayrell.Lang.OpCodes.OpAttr)
			{
				op_code_next = op_code_next.obj;
			}
			var __memorize_value = this.isAwait(ctx, op_code_next);
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			var __memorize_value = op_code.is_await;
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			if (op_code.is_async)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
			var __memorize_value = this.isAwait(ctx, op_code.value);
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpFor)
		{
			var __memorize_value = this.isAwait(ctx, op_code.expr2) || this.isAwait(ctx, op_code.value);
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpIf)
		{
			var flag = false;
			flag = this.isAwait(ctx, op_code.condition);
			if (flag)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
			flag = this.isAwait(ctx, op_code.if_true);
			if (flag)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
			flag = this.isAwait(ctx, op_code.if_false);
			if (flag)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
			for (var i = 0;i < op_code.if_else.count(ctx);i++)
			{
				var if_else = op_code.if_else.item(ctx, i);
				flag = this.isAwait(ctx, if_else.condition);
				if (flag)
				{
					var __memorize_value = true;
					Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
					return __memorize_value;
				}
				flag = this.isAwait(ctx, if_else.if_true);
				if (flag)
				{
					var __memorize_value = true;
					Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
					return __memorize_value;
				}
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpItems)
		{
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var flag = this.isAwait(ctx, item);
				if (flag)
				{
					var __memorize_value = true;
					Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
					return __memorize_value;
				}
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpMath)
		{
			if (op_code.math == "!" || op_code.math == "not")
			{
				var __memorize_value = this.isAwait(ctx, op_code.value1);
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
			else
			{
				var __memorize_value = this.isAwait(ctx, op_code.value1) || this.isAwait(ctx, op_code.value2);
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpReturn)
		{
			var flag = this.isAwait(ctx, op_code.expression);
			if (flag)
			{
				var __memorize_value = true;
				Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
				return __memorize_value;
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTryCatch)
		{
			var __memorize_value = this.isAwait(ctx, op_code.op_try);
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpWhile)
		{
			var __memorize_value = this.isAwait(ctx, op_code.condition) || this.isAwait(ctx, op_code.value);
			Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("Bayrell.Lang.LangES6.TranslatorES6Operator.isAwait", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * OpAssign
	 */
	OpAssignStruct: function(ctx, t, op_code, pos)
	{
		if (pos == undefined) pos = 0;
		var content = "";
		var var_name = op_code.var_name;
		var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
		t = Runtime.rtl.get(ctx, res, 0);
		var expr = Runtime.rtl.get(ctx, res, 1);
		var names = op_code.names.map(ctx, (ctx, item) => 
		{
			if (item instanceof Bayrell.Lang.OpCodes.BaseOpCode)
			{
				var res = t.expression.constructor.Expression(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				return Runtime.rtl.get(ctx, res, 1);
			}
			return t.expression.constructor.toString(ctx, item);
		});
		content = "Runtime.rtl.setAttr(ctx, " + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", Runtime.Collection.from([") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", names)) + Runtime.rtl.toStr("]), ") + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpAssign
	 */
	OpAssign: function(ctx, t, op_code, flag_indent)
	{
		if (flag_indent == undefined) flag_indent = true;
		var content = "";
		if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_ASSIGN || op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
		{
			for (var i = 0;i < op_code.values.count(ctx);i++)
			{
				var item = op_code.values.item(ctx, i);
				var s = "";
				var item_expression = "";
				var op = item.op;
				if (op == "")
				{
					op = "=";
				}
				if (item.expression != null)
				{
					var res = t.expression.constructor.Expression(ctx, t, item.expression);
					t = Runtime.rtl.get(ctx, res, 0);
					if (op == "~=")
					{
						item_expression = t.expression.constructor.rtlToStr(ctx, t, Runtime.rtl.get(ctx, res, 1));
					}
					else
					{
						item_expression = Runtime.rtl.get(ctx, res, 1);
					}
				}
				if (item.op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
				{
					var items = new Runtime.Vector(ctx);
					var items2 = new Runtime.Vector(ctx);
					var op_code_next = item.op_code;
					while (op_code_next instanceof Bayrell.Lang.OpCodes.OpAttr)
					{
						items.push(ctx, op_code_next);
						op_code_next = op_code_next.obj;
					}
					items = items.reverseIm(ctx);
					var res = t.expression.constructor.OpIdentifier(ctx, t, op_code_next);
					t = Runtime.rtl.get(ctx, res, 0);
					var obj_s = Runtime.rtl.get(ctx, res, 1);
					for (var j = 0;j < items.count(ctx);j++)
					{
						var item_attr = Runtime.rtl.get(ctx, items, j);
						if (item_attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
						{
							obj_s += Runtime.rtl.toStr("." + Runtime.rtl.toStr(item_attr.value.value));
							items2.push(ctx, t.expression.constructor.toString(ctx, item_attr.value.value));
						}
						else if (item_attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC)
						{
							var res = t.expression.constructor.Expression(ctx, t, item_attr.value);
							t = Runtime.rtl.get(ctx, res, 0);
							obj_s += Runtime.rtl.toStr("[" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr("]"));
							items2.push(ctx, Runtime.rtl.get(ctx, res, 1));
						}
						else if (item_attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC_ATTRS)
						{
							if (item_attr.attrs != null)
							{
								for (var j = item_attr.attrs.count(ctx) - 1;j >= 0;j--)
								{
									var res = t.expression.constructor.Expression(ctx, t, Runtime.rtl.get(ctx, item_attr.attrs, j));
									t = Runtime.rtl.get(ctx, res, 0);
									obj_s += Runtime.rtl.toStr("[" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr("]"));
									items2.push(ctx, Runtime.rtl.get(ctx, res, 1));
								}
							}
						}
					}
					if (op == "~=" || op == "+=" || op == "-=")
					{
						var op2 = "+";
						if (op == "~=" || op == "+=")
						{
							op2 = "+";
						}
						else if (op == "-=")
						{
							op2 = "-";
						}
						item_expression = "Runtime.rtl.attr(ctx, " + Runtime.rtl.toStr(obj_s) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", items2)) + Runtime.rtl.toStr("]) ") + Runtime.rtl.toStr(op2) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(item_expression);
					}
					s = obj_s + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(item_expression);
				}
				else
				{
					if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
						{
							s = item.var_name;
						}
						else
						{
							s = "var " + Runtime.rtl.toStr(item.var_name);
						}
					}
					else
					{
						var res = t.expression.constructor.OpIdentifier(ctx, t, item.op_code);
						t = Runtime.rtl.get(ctx, res, 0);
						s = Runtime.rtl.get(ctx, res, 1);
					}
					if (item_expression != "")
					{
						if (op == "~=")
						{
							s += Runtime.rtl.toStr(" += " + Runtime.rtl.toStr(item_expression));
						}
						else
						{
							s += Runtime.rtl.toStr(" " + Runtime.rtl.toStr(op) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(item_expression));
						}
					}
				}
				if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
				{
					if (item.expression == null)
					{
						s = "";
					}
					else if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						s = s + Runtime.rtl.toStr(";");
					}
				}
				else
				{
					s = s + Runtime.rtl.toStr(";");
				}
				if (s != "")
				{
					content += Runtime.rtl.toStr((flag_indent) ? (t.s(ctx, s)) : (s));
				}
				if (item.var_name != "" && t.save_vars.indexOf(ctx, item.var_name) == -1)
				{
					t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_vars"]), t.save_vars.pushIm(ctx, item.var_name));
				}
			}
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_STRUCT)
		{
			var s = op_code.var_name + Runtime.rtl.toStr(" = ");
			var res = this.OpAssignStruct(ctx, t, op_code, 0);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, s + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(";"));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDelete
	 */
	OpDelete: function(ctx, t, op_code)
	{
		var content = "";
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpFor
	 */
	OpFor: function(ctx, t, op_code)
	{
		if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			if (this.isAwait(ctx, op_code))
			{
				return t.async_await.constructor.OpFor(ctx, t, op_code);
			}
		}
		var content = "";
		var s1 = "";
		var s2 = "";
		var s3 = "";
		if (op_code.expr1 instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			var res = this.OpAssign(ctx, t, op_code.expr1, false);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.expr1);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		var res = t.expression.constructor.Expression(ctx, t, op_code.expr2);
		t = Runtime.rtl.get(ctx, res, 0);
		s2 = Runtime.rtl.get(ctx, res, 1);
		var res = t.expression.constructor.Expression(ctx, t, op_code.expr3);
		t = Runtime.rtl.get(ctx, res, 0);
		s3 = Runtime.rtl.get(ctx, res, 1);
		content = t.s(ctx, "for (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr(";") + Runtime.rtl.toStr(s3) + Runtime.rtl.toStr(")"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpIf
	 */
	OpIf: function(ctx, t, op_code)
	{
		if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			if (this.isAwait(ctx, op_code))
			{
				return t.async_await.constructor.OpIf(ctx, t, op_code);
			}
		}
		var content = "";
		var res = t.expression.constructor.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var s1 = Runtime.rtl.get(ctx, res, 1);
		content = t.s(ctx, "if (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(")"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.if_true);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		for (var i = 0;i < op_code.if_else.count(ctx);i++)
		{
			var if_else = op_code.if_else.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, if_else.condition);
			t = Runtime.rtl.get(ctx, res, 0);
			var s2 = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr(")")));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			var res = this.Operators(ctx, t, if_else.if_true);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
		}
		if (op_code.if_false != null)
		{
			content += Runtime.rtl.toStr(t.s(ctx, "else"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			var res = this.Operators(ctx, t, op_code.if_false);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpReturn
	 */
	OpReturn: function(ctx, t, op_code)
	{
		if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			return t.async_await.constructor.OpReturn(ctx, t, op_code);
		}
		var content = "";
		var s1 = "";
		if (op_code.expression)
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		if (t.current_function.flags != null && t.current_function.flags.isFlag(ctx, "memorize"))
		{
			var content = t.s(ctx, "var __memorize_value = " + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";"));
			content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.useModuleName(ctx, t, "Runtime.rtl") + Runtime.rtl.toStr("._memorizeSave(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(t.current_function.name) + Runtime.rtl.toStr("\", arguments, __memorize_value);")));
			content += Runtime.rtl.toStr(t.s(ctx, "return __memorize_value;"));
			return Runtime.Collection.from([t,content]);
		}
		if (t.current_function.isFlag(ctx, "async") && t.isAsyncAwait(ctx))
		{
			content += Runtime.rtl.toStr(t.s(ctx, "return Promise.resolve(" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(");")));
		}
		else
		{
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";")));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpThrow
	 */
	OpThrow: function(ctx, t, op_code)
	{
		var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
		t = Runtime.rtl.get(ctx, res, 0);
		var content = t.s(ctx, "throw " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpTryCatch
	 */
	OpTryCatch: function(ctx, t, op_code)
	{
		if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			if (this.isAwait(ctx, op_code))
			{
				return t.async_await.constructor.OpTryCatch(ctx, t, op_code);
			}
		}
		var content = "";
		content += Runtime.rtl.toStr(t.s(ctx, "try"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.op_try);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "catch (_ex)"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var s = "";
			var pattern = "";
			var item = op_code.items.item(ctx, i);
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, item.pattern);
			t = Runtime.rtl.get(ctx, res, 0);
			pattern += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			if (pattern != "var")
			{
				s = "if (_ex instanceof " + Runtime.rtl.toStr(pattern) + Runtime.rtl.toStr(")");
			}
			else
			{
				s = "if (true)";
			}
			s += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			s += Runtime.rtl.toStr((s != "") ? (t.s(ctx, "var " + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = _ex;"))) : ("var " + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = _ex;")));
			var res = t.operator.constructor.Operators(ctx, t, item.value);
			t = Runtime.rtl.get(ctx, res, 0);
			s += Runtime.rtl.toStr(t.s(ctx, Runtime.rtl.get(ctx, res, 1)));
			t = t.levelDec(ctx);
			s += Runtime.rtl.toStr(t.s(ctx, "}"));
			if (i != 0)
			{
				s = "else " + Runtime.rtl.toStr(s);
			}
			content += Runtime.rtl.toStr(t.s(ctx, s));
		}
		content += Runtime.rtl.toStr(t.s(ctx, "else"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "throw _ex;"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpWhile
	 */
	OpWhile: function(ctx, t, op_code)
	{
		if (t.current_function.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			if (this.isAwait(ctx, op_code))
			{
				return t.async_await.constructor.OpWhile(ctx, t, op_code);
			}
		}
		var content = "";
		var res = t.expression.constructor.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var s1 = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "while (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpPreprocessorIfCode
	 */
	OpPreprocessorIfCode: function(ctx, t, op_code)
	{
		var content = "";
		if (t.preprocessor_flags.has(ctx, op_code.condition.value))
		{
			content = Runtime.rs.trim(ctx, op_code.content);
		}
		return Runtime.Collection.from([t,t.s(ctx, content)]);
	},
	/**
	 * OpPreprocessorIfDef
	 */
	OpPreprocessorIfDef: function(ctx, t, op_code, kind)
	{
		if (!t.preprocessor_flags.has(ctx, op_code.condition.value))
		{
			return Runtime.Collection.from([t,""]);
		}
		if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR)
		{
			return this.Operators(ctx, t, op_code.items);
		}
		else if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_EXPRESSION)
		{
			return t.expression.constructor.Expression(ctx, t, op_code.items);
		}
		var content = "";
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var item = op_code.items.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpComment)
			{
				var res = t.operator.constructor.OpComment(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
			{
				var res = t.program.constructor.OpDeclareFunction(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComment
	 */
	OpComment: function(ctx, t, op_code)
	{
		var content = t.s(ctx, "/*" + Runtime.rtl.toStr(op_code.value) + Runtime.rtl.toStr("*/"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComments
	 */
	OpComments: function(ctx, t, comments)
	{
		var content = "";
		for (var i = 0;i < comments.count(ctx);i++)
		{
			var res = this.OpComment(ctx, t, comments.item(ctx, i));
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComments
	 */
	AddComments: function(ctx, t, comments, content)
	{
		if (comments && comments.count(ctx) > 0)
		{
			var res = this.OpComments(ctx, t, comments);
			var s = Runtime.rtl.get(ctx, res, 1);
			if (s != "")
			{
				content = s + Runtime.rtl.toStr(content);
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Operator
	 */
	Operator: function(ctx, t, op_code)
	{
		var content = "";
		/* Save op codes */
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		if (op_code instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			var res = this.OpAssign(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content = save + Runtime.rtl.toStr(content);
			}
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			/*t <= save_op_code_inc <= save_op_code_inc;*/
			return Runtime.Collection.from([t,content]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAssignStruct)
		{
			var res = this.OpAssignStruct(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var s1 = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content = save;
			}
			content += Runtime.rtl.toStr(t.s(ctx, op_code.var_name + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";")));
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			/*t <= save_op_code_inc <= save_op_code_inc;*/
			return Runtime.Collection.from([t,content]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpBreak)
		{
			content = t.s(ctx, "break;");
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			var res = t.expression.constructor.OpCall(ctx, t, op_code, false);
			t = Runtime.rtl.get(ctx, res, 0);
			if (Runtime.rtl.get(ctx, res, 1) != "")
			{
				content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpContinue)
		{
			content = t.s(ctx, "continue;");
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDelete)
		{
			var res = this.OpDelete(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpFor)
		{
			var res = this.OpFor(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpIf)
		{
			var res = this.OpIf(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			var res = t.expression.constructor.OpPipe(ctx, t, op_code, false);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpReturn)
		{
			var res = this.OpReturn(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpThrow)
		{
			var res = this.OpThrow(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTryCatch)
		{
			var res = this.OpTryCatch(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpWhile)
		{
			var res = this.OpWhile(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpInc)
		{
			var res = t.expression.constructor.OpInc(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
		{
			var res = this.OpPreprocessorIfCode(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			var res = this.OpPreprocessorIfDef(ctx, t, op_code, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
		{
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var res = this.OpPreprocessorIfCode(ctx, t, op_code.items.item(ctx, i));
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpComment)
		{
			var res = this.OpComment(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpSafe)
		{
			var res = this.Operators(ctx, t, op_code.items);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		/* Output save op code */
		var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
		if (save != "")
		{
			content = save + Runtime.rtl.toStr(content);
		}
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		/*t <= save_op_code_inc <= save_op_code_inc;*/
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Operators
	 */
	Operators: function(ctx, t, op_code)
	{
		var content = "";
		if (op_code instanceof Bayrell.Lang.OpCodes.OpItems)
		{
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var res = this.Operator(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlItems)
		{
			var save_html_var_name = t.html_var_name;
			var save_is_html = t.is_html;
			/* Save op codes */
			/*
			Collection<SaveOpCode> save_op_codes = t.save_op_codes;
			int save_op_code_inc = t.save_op_code_inc;
			*/
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), true);
			var res = t.html.constructor.OpHtmlChilds(ctx, t, op_code, save_html_var_name, false);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			/*
			string save = t::outputSaveOpCode(t, save_op_codes.count());
			if (save != "") content = save;
			*/
			/* Output content */
			/*
			content ~= t.s(save_html_var_name ~ "_childs.push(" ~ res[1] ~ ");");
			
			t <= save_op_codes <= save_op_codes;
			t <= save_op_code_inc <= save_op_code_inc;
			*/
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), save_is_html);
		}
		else
		{
			var res = this.Operator(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction Arguments
	 */
	OpDeclareFunctionArgs: function(ctx, t, f)
	{
		var content = "";
		if (f.args != null)
		{
			var flag = false;
			if (f.is_context)
			{
				content += Runtime.rtl.toStr("ctx");
				flag = true;
			}
			for (var i = 0;i < f.args.count(ctx, i);i++)
			{
				var arg = f.args.item(ctx, i);
				var name = arg.name;
				content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(name));
				flag = true;
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction Body
	 */
	OpDeclareFunctionBody: function(ctx, t, f)
	{
		var save_t = t;
		if (f.isFlag(ctx, "async") && t.isEmulateAsyncAwait(ctx))
		{
			return t.async_await.constructor.OpDeclareFunctionBody(ctx, t, f);
		}
		/* Save op codes */
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		var content = "";
		t = t.levelInc(ctx);
		if (f.args)
		{
			for (var i = 0;i < f.args.count(ctx);i++)
			{
				var arg = f.args.item(ctx, i);
				if (arg.expression == null)
				{
					continue;
				}
				var res = t.expression.constructor.Expression(ctx, t, arg.expression);
				t = Runtime.rtl.get(ctx, res, 0);
				var s = Runtime.rtl.get(ctx, res, 1);
				s = "if (" + Runtime.rtl.toStr(arg.name) + Runtime.rtl.toStr(" == undefined) ") + Runtime.rtl.toStr(arg.name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";");
				content += Runtime.rtl.toStr(t.s(ctx, s));
			}
		}
		if (f.items)
		{
			var res = t.operator.constructor.Operators(ctx, t, f.items);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		else if (f.expression)
		{
			var res = t.expression.constructor.Expression(ctx, t, f.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			var expr = Runtime.rtl.get(ctx, res, 1);
			var s = "";
			if (f.flags != null && f.flags.isFlag(ctx, "memorize"))
			{
				s = t.s(ctx, "var __memorize_value = " + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(";"));
				s += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.useModuleName(ctx, t, "Runtime.rtl") + Runtime.rtl.toStr("._memorizeSave(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(f.name) + Runtime.rtl.toStr("\", arguments, __memorize_value);")));
				s += Runtime.rtl.toStr(t.s(ctx, "return __memorize_value;"));
			}
			else
			{
				s = t.s(ctx, "return " + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(";"));
			}
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			content += Runtime.rtl.toStr(s);
		}
		if (f.flags != null && f.flags.isFlag(ctx, "memorize"))
		{
			var s = "";
			s += Runtime.rtl.toStr(t.s(ctx, "var __memorize_value = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.rtl")) + Runtime.rtl.toStr("._memorizeValue(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(f.name) + Runtime.rtl.toStr("\", arguments);")));
			s += Runtime.rtl.toStr(t.s(ctx, "if (__memorize_value != " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.rtl")) + Runtime.rtl.toStr("._memorize_not_found) return __memorize_value;")));
			content = s + Runtime.rtl.toStr(content);
		}
		t = t.levelDec(ctx);
		content = t.s(ctx, "{") + Runtime.rtl.toStr(content);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([save_t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Operator";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6Operator",
			"name": "Bayrell.Lang.LangES6.TranslatorES6Operator",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6Operator);
window["Bayrell.Lang.LangES6.TranslatorES6Operator"] = Bayrell.Lang.LangES6.TranslatorES6Operator;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6Operator;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangES6 == 'undefined') Bayrell.Lang.LangES6 = {};
Bayrell.Lang.LangES6.TranslatorES6Program = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.LangES6.TranslatorES6Program.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.LangES6.TranslatorES6Program.prototype.constructor = Bayrell.Lang.LangES6.TranslatorES6Program;
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Program.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangES6.TranslatorES6Program)
		{
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Program";
	},
});
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Program, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.LangES6.TranslatorES6Program,
{
	/**
	 * To pattern
	 */
	toPattern: function(ctx, t, pattern)
	{
		var names = t.expression.constructor.findModuleNames(ctx, t, pattern.entity_name.names);
		var e = Runtime.rs.join(ctx, ".", names);
		var a = (pattern.template != null) ? (pattern.template.map(ctx, (ctx, pattern) => 
		{
			return this.toPattern(ctx, t, pattern);
		})) : (null);
		var b = (a != null) ? (",\"t\":[" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", a)) + Runtime.rtl.toStr("]")) : ("");
		return "{\"e\":" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, e)) + Runtime.rtl.toStr(b) + Runtime.rtl.toStr("}");
	},
	/**
	 * OpNamespace
	 */
	OpNamespace: function(ctx, t, op_code)
	{
		var content = "";
		var name = "";
		var s = "";
		var arr = Runtime.rs.split(ctx, "\\.", op_code.name);
		for (var i = 0;i < arr.count(ctx);i++)
		{
			name = name + Runtime.rtl.toStr(((i == 0) ? ("") : ("."))) + Runtime.rtl.toStr(arr.item(ctx, i));
			s = "if (typeof " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr(" == 'undefined') ") + Runtime.rtl.toStr(name) + Runtime.rtl.toStr(" = {};");
			content += Runtime.rtl.toStr(t.s(ctx, s));
		}
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_namespace_name"]), op_code.name);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction
	 */
	OpDeclareFunction: function(ctx, t, op_code)
	{
		var is_static_function = t.is_static_function;
		var is_static = op_code.isStatic(ctx);
		var content = "";
		if (op_code.isFlag(ctx, "declare"))
		{
			return Runtime.Collection.from([t,""]);
		}
		if (!is_static && is_static_function || is_static && !is_static_function)
		{
			return Runtime.Collection.from([t,""]);
		}
		/* Set current function */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code);
		var is_async = "";
		if (op_code.isFlag(ctx, "async") && t.isAsyncAwait(ctx))
		{
			is_async = "async ";
		}
		var s = "";
		var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code);
		var args = Runtime.rtl.get(ctx, res, 1);
		s += Runtime.rtl.toStr(op_code.name + Runtime.rtl.toStr(": ") + Runtime.rtl.toStr(is_async) + Runtime.rtl.toStr("function(") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(")"));
		var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, op_code);
		s += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		s += Runtime.rtl.toStr(",");
		/* Function comments */
		var res = t.operator.constructor.AddComments(ctx, t, op_code.comments, t.s(ctx, s));
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClassConstructor: function(ctx, t, op_code)
	{
		var open = "";
		var content = "";
		var save_t = t;
		/* Set function name */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code.fn_create);
		/* Clear save op codes */
		t = t.constructor.clearSaveOpCode(ctx, t);
		if (op_code.fn_create == null)
		{
			open += Runtime.rtl.toStr(t.current_class_full_name + Runtime.rtl.toStr(" = "));
			open += Runtime.rtl.toStr("function(ctx)");
			open = t.s(ctx, open) + Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			/* Call parent */
			if (t.current_class_extends_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name) + Runtime.rtl.toStr(".apply(this, arguments);")));
			}
		}
		else
		{
			open += Runtime.rtl.toStr(t.current_class_full_name + Runtime.rtl.toStr(" = function("));
			var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code.fn_create);
			t = Runtime.rtl.get(ctx, res, 0);
			open += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			open += Runtime.rtl.toStr(")");
			open = t.s(ctx, open) + Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
		}
		/* Function body */
		if (op_code.fn_create != null)
		{
			if (op_code.fn_create.args)
			{
				for (var i = 0;i < op_code.fn_create.args.count(ctx);i++)
				{
					var arg = op_code.fn_create.args.item(ctx, i);
					if (arg.expression == null)
					{
						continue;
					}
					var res = t.expression.constructor.Expression(ctx, t, arg.expression);
					t = Runtime.rtl.get(ctx, res, 0);
					var s = Runtime.rtl.get(ctx, res, 1);
					s = "if (" + Runtime.rtl.toStr(arg.name) + Runtime.rtl.toStr(" == undefined) ") + Runtime.rtl.toStr(arg.name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";");
					content += Runtime.rtl.toStr(t.s(ctx, s));
				}
			}
			var res = t.operator.constructor.Operators(ctx, t, (op_code.fn_create.expression) ? (op_code.fn_create.expression) : (op_code.fn_create.items));
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		/* Constructor end */
		content = open + Runtime.rtl.toStr(content);
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "};"));
		return Runtime.Collection.from([save_t,content]);
	},
	/**
	 * OpDeclareClassBodyItem
	 */
	OpDeclareClassBodyItem: function(ctx, t, item)
	{
		var content = "";
		if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			var res = t.operator.constructor.OpPreprocessorIfDef(ctx, t, item, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_CLASS_BODY);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpFunctionAnnotations
	 */
	OpFunctionAnnotations: function(ctx, t, f)
	{
		var content = "";
		if (f.flags.isFlag(ctx, "declare"))
		{
			return Runtime.Collection.from([t,content]);
		}
		if (f.annotations.count(ctx) == 0)
		{
			return Runtime.Collection.from([t,content]);
		}
		content += Runtime.rtl.toStr(t.s(ctx, "if (field_name == " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, f.name)) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		var s1 = "";
		t = t.levelInc(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "var Collection = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr(";")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "var Dict = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Dict")) + Runtime.rtl.toStr(";")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "var IntrospectionInfo = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.IntrospectionInfo")) + Runtime.rtl.toStr(";")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "return new IntrospectionInfo(ctx, {"));
		t = t.levelInc(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "\"kind\": IntrospectionInfo.ITEM_METHOD,"));
		s1 += Runtime.rtl.toStr(t.s(ctx, "\"class_name\": " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "\"name\": " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, f.name)) + Runtime.rtl.toStr(",")));
		s1 += Runtime.rtl.toStr(t.s(ctx, "\"annotations\": Collection.from(["));
		t = t.levelInc(ctx);
		for (var j = 0;j < f.annotations.count(ctx);j++)
		{
			var annotation = f.annotations.item(ctx, j);
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
			t = Runtime.rtl.get(ctx, res, 0);
			var name = Runtime.rtl.get(ctx, res, 1);
			var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
			t = Runtime.rtl.get(ctx, res, 0);
			var params = Runtime.rtl.get(ctx, res, 1);
			s1 += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("(ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
		}
		t = t.levelDec(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "]),"));
		t = t.levelDec(ctx);
		s1 += Runtime.rtl.toStr(t.s(ctx, "});"));
		var save = t.constructor.outputSaveOpCode(ctx, t);
		if (save != "")
		{
			content += Runtime.rtl.toStr(t.s(ctx, save));
		}
		content += Runtime.rtl.toStr(s1);
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassBodyItemMethodsList
	 */
	OpClassBodyItemMethodsList: function(ctx, t, item)
	{
		var content = "";
		if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			if (t.preprocessor_flags.has(ctx, item.condition.value))
			{
				for (var i = 0;i < item.items.count(ctx);i++)
				{
					var op_code = item.items.item(ctx, i);
					var res = this.OpClassBodyItemMethodsList(ctx, t, op_code);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
		}
		else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.toString(ctx, item.name) + Runtime.rtl.toStr(",")));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassBodyItemAnnotations
	 */
	OpClassBodyItemAnnotations: function(ctx, t, item)
	{
		var content = "";
		if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			if (t.preprocessor_flags.has(ctx, item.condition.value))
			{
				for (var i = 0;i < item.items.count(ctx);i++)
				{
					var op_code = item.items.item(ctx, i);
					var res = this.OpClassBodyItemAnnotations(ctx, t, op_code);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
		}
		else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			var res = this.OpFunctionAnnotations(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClassBodyStatic: function(ctx, t, op_code)
	{
		var content = "";
		var class_kind = op_code.kind;
		var current_class_extends_name = t.expression.constructor.findModuleName(ctx, t, t.current_class_extends_name);
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		t = t.constructor.clearSaveOpCode(ctx, t);
		/* Returns parent class name */
		var parent_class_name = "";
		if (op_code.class_extends != null)
		{
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, op_code.class_extends);
			parent_class_name = Runtime.rtl.get(ctx, res, 1);
		}
		if (current_class_extends_name != "")
		{
			content += Runtime.rtl.toStr(t.s(ctx, "Object.assign(" + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, current_class_extends_name)) + Runtime.rtl.toStr(");")));
		}
		content += Runtime.rtl.toStr(t.s(ctx, "Object.assign(" + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(",")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Static variables */
		if (op_code.vars != null)
		{
			for (var i = 0;i < op_code.vars.count(ctx);i++)
			{
				var variable = op_code.vars.item(ctx, i);
				if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
				{
					continue;
				}
				var is_static = variable.flags.isFlag(ctx, "static");
				if (!is_static)
				{
					continue;
				}
				for (var j = 0;j < variable.values.count(ctx);j++)
				{
					var value = variable.values.item(ctx, j);
					var res = t.expression.constructor.Expression(ctx, t, value.expression);
					var s = (value.expression != null) ? (Runtime.rtl.get(ctx, res, 1)) : ("null");
					content += Runtime.rtl.toStr(t.s(ctx, value.var_name + Runtime.rtl.toStr(": ") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(",")));
				}
			}
		}
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			/* Static Functions */
			if (op_code.functions != null)
			{
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), true);
				for (var i = 0;i < op_code.functions.count(ctx);i++)
				{
					var f = op_code.functions.item(ctx, i);
					if (f.flags.isFlag(ctx, "declare"))
					{
						continue;
					}
					if (!f.isStatic(ctx))
					{
						continue;
					}
					/* Set function name */
					t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), f);
					var is_async = "";
					if (f.isFlag(ctx, "async") && t.isAsyncAwait(ctx))
					{
						is_async = "async ";
					}
					var s = "";
					var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, f);
					var args = Runtime.rtl.get(ctx, res, 1);
					s += Runtime.rtl.toStr(f.name + Runtime.rtl.toStr(": ") + Runtime.rtl.toStr(is_async) + Runtime.rtl.toStr("function(") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(")"));
					var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, f);
					s += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
					s += Runtime.rtl.toStr(",");
					/* Function comments */
					var res = t.operator.constructor.AddComments(ctx, t, f.comments, t.s(ctx, s));
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			/* Items */
			if (op_code.items != null)
			{
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), true);
				for (var i = 0;i < op_code.items.count(ctx);i++)
				{
					var item = op_code.items.item(ctx, i);
					var res = this.OpDeclareClassBodyItem(ctx, t, item);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			content += Runtime.rtl.toStr(t.s(ctx, "/* ======================= Class Init Functions ======================= */"));
			/* Get current namespace function */
			content += Runtime.rtl.toStr(t.s(ctx, "getCurrentNamespace: function()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_namespace_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get current class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "getCurrentClassName: function()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get parent class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "getParentClassName: function()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, current_class_extends_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Class info */
			content += Runtime.rtl.toStr(t.s(ctx, "getClassInfo: function(ctx)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			t = t.constructor.clearSaveOpCode(ctx, t);
			var s1 = "";
			s1 += Runtime.rtl.toStr(t.s(ctx, "var Collection = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr(";")));
			s1 += Runtime.rtl.toStr(t.s(ctx, "var Dict = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Dict")) + Runtime.rtl.toStr(";")));
			s1 += Runtime.rtl.toStr(t.s(ctx, "var IntrospectionInfo = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.IntrospectionInfo")) + Runtime.rtl.toStr(";")));
			s1 += Runtime.rtl.toStr(t.s(ctx, "return new IntrospectionInfo(ctx, {"));
			t = t.levelInc(ctx);
			s1 += Runtime.rtl.toStr(t.s(ctx, "\"kind\": IntrospectionInfo.ITEM_CLASS,"));
			s1 += Runtime.rtl.toStr(t.s(ctx, "\"class_name\": " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
			s1 += Runtime.rtl.toStr(t.s(ctx, "\"name\": " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
			s1 += Runtime.rtl.toStr(t.s(ctx, "\"annotations\": Collection.from(["));
			t = t.levelInc(ctx);
			for (var j = 0;j < op_code.annotations.count(ctx);j++)
			{
				var annotation = op_code.annotations.item(ctx, j);
				var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
				t = Runtime.rtl.get(ctx, res, 0);
				var name = Runtime.rtl.get(ctx, res, 1);
				var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
				t = Runtime.rtl.get(ctx, res, 0);
				var params = Runtime.rtl.get(ctx, res, 1);
				s1 += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("(ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
			}
			t = t.levelDec(ctx);
			s1 += Runtime.rtl.toStr(t.s(ctx, "]),"));
			t = t.levelDec(ctx);
			s1 += Runtime.rtl.toStr(t.s(ctx, "});"));
			var save = t.constructor.outputSaveOpCode(ctx, t);
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			content += Runtime.rtl.toStr(s1);
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get fields list of the function */
			t = t.constructor.clearSaveOpCode(ctx, t);
			content += Runtime.rtl.toStr(t.s(ctx, "getFieldsList: function(ctx, f)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "var a = [];"));
			content += Runtime.rtl.toStr(t.s(ctx, "if (f==undefined) f=0;"));
			if (op_code.vars != null)
			{
				var vars = new Runtime.Map(ctx);
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var is_static = variable.flags.isFlag(ctx, "static");
					var is_serializable = variable.flags.isFlag(ctx, "serializable");
					var is_assignable = true;
					var has_annotation = variable.annotations != null && variable.annotations.count(ctx) > 0;
					if (is_static)
					{
						continue;
					}
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
					{
						is_serializable = true;
						is_assignable = true;
					}
					if (is_serializable)
					{
						is_assignable = true;
					}
					var flag = 0;
					if (is_serializable)
					{
						flag = flag | 1;
					}
					if (is_assignable)
					{
						flag = flag | 2;
					}
					if (has_annotation)
					{
						flag = flag | 4;
					}
					if (flag != 0)
					{
						if (!vars.has(ctx, flag))
						{
							vars.set(ctx, flag, new Runtime.Vector(ctx));
						}
						var v = vars.item(ctx, flag);
						for (var j = 0;j < variable.values.count(ctx);j++)
						{
							var value = variable.values.item(ctx, j);
							v.push(ctx, value.var_name);
						}
					}
				}
				vars.each(ctx, (ctx, v, flag) => 
				{
					content += Runtime.rtl.toStr(t.s(ctx, "if ((f|" + Runtime.rtl.toStr(flag) + Runtime.rtl.toStr(")==") + Runtime.rtl.toStr(flag) + Runtime.rtl.toStr(")")));
					content += Runtime.rtl.toStr(t.s(ctx, "{"));
					t = t.levelInc(ctx);
					v.each(ctx, (ctx, varname) => 
					{
						content += Runtime.rtl.toStr(t.s(ctx, "a.push(" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, varname)) + Runtime.rtl.toStr(");")));
					});
					t = t.levelDec(ctx);
					content += Runtime.rtl.toStr(t.s(ctx, "}"));
				});
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr(".from(a);")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get field info by name */
			content += Runtime.rtl.toStr(t.s(ctx, "getFieldInfoByName: function(ctx,field_name)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			if (op_code.vars != null)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "var Collection = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr(";")));
				content += Runtime.rtl.toStr(t.s(ctx, "var Dict = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Dict")) + Runtime.rtl.toStr(";")));
				content += Runtime.rtl.toStr(t.s(ctx, "var IntrospectionInfo = " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.IntrospectionInfo")) + Runtime.rtl.toStr(";")));
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var v = variable.values.map(ctx, (ctx, value) => 
					{
						return value.var_name;
					});
					v = v.map(ctx, (ctx, var_name) => 
					{
						return "field_name == " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name));
					});
					t = t.constructor.clearSaveOpCode(ctx, t);
					var s1 = "";
					s1 += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(Runtime.rs.join(ctx, " or ", v)) + Runtime.rtl.toStr(") return new IntrospectionInfo(ctx, {")));
					t = t.levelInc(ctx);
					s1 += Runtime.rtl.toStr(t.s(ctx, "\"kind\": IntrospectionInfo.ITEM_FIELD,"));
					s1 += Runtime.rtl.toStr(t.s(ctx, "\"class_name\": " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
					s1 += Runtime.rtl.toStr(t.s(ctx, "\"name\": field_name,"));
					s1 += Runtime.rtl.toStr(t.s(ctx, "\"annotations\": Collection.from(["));
					t = t.levelInc(ctx);
					for (var j = 0;j < variable.annotations.count(ctx);j++)
					{
						var annotation = variable.annotations.item(ctx, j);
						var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
						t = Runtime.rtl.get(ctx, res, 0);
						var name = Runtime.rtl.get(ctx, res, 1);
						var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
						t = Runtime.rtl.get(ctx, res, 0);
						var params = Runtime.rtl.get(ctx, res, 1);
						s1 += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("(ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
					}
					t = t.levelDec(ctx);
					s1 += Runtime.rtl.toStr(t.s(ctx, "]),"));
					t = t.levelDec(ctx);
					s1 += Runtime.rtl.toStr(t.s(ctx, "});"));
					var save = t.constructor.outputSaveOpCode(ctx, t);
					if (save != "")
					{
						content += Runtime.rtl.toStr(save);
					}
					content += Runtime.rtl.toStr(s1);
				}
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return null;"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get methods list of the function */
			t = t.constructor.clearSaveOpCode(ctx, t);
			content += Runtime.rtl.toStr(t.s(ctx, "getMethodsList: function(ctx)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "var a = ["));
			t = t.levelInc(ctx);
			if (op_code.functions != null)
			{
				for (var i = 0;i < op_code.functions.count(ctx);i++)
				{
					var f = op_code.functions.item(ctx, i);
					if (f.flags.isFlag(ctx, "declare"))
					{
						continue;
					}
					if (f.annotations.count(ctx) == 0)
					{
						continue;
					}
					content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.toString(ctx, f.name) + Runtime.rtl.toStr(",")));
				}
			}
			if (op_code.items != null)
			{
				for (var i = 0;i < op_code.items.count(ctx);i++)
				{
					var item = op_code.items.item(ctx, i);
					var res = this.OpClassBodyItemMethodsList(ctx, t, item);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "];"));
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr(".from(a);")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get method info by name */
			t = t.constructor.clearSaveOpCode(ctx, t);
			content += Runtime.rtl.toStr(t.s(ctx, "getMethodInfoByName: function(ctx,field_name)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			if (op_code.functions != null)
			{
				for (var i = 0;i < op_code.functions.count(ctx);i++)
				{
					var f = op_code.functions.item(ctx, i);
					var res = this.OpFunctionAnnotations(ctx, t, f);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			if (op_code.items != null)
			{
				for (var i = 0;i < op_code.items.count(ctx);i++)
				{
					var item = op_code.items.item(ctx, i);
					var res = this.OpClassBodyItemAnnotations(ctx, t, item);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return null;"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Add implements */
			if (op_code.class_implements != null && op_code.class_implements.count(ctx) > 0)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "__implements__:"));
				content += Runtime.rtl.toStr(t.s(ctx, "["));
				t = t.levelInc(ctx);
				for (var i = 0;i < op_code.class_implements.count(ctx);i++)
				{
					var item = op_code.class_implements.item(ctx, i);
					var module_name = item.entity_name.names.first(ctx);
					var s = t.expression.constructor.useModuleName(ctx, t, module_name);
					if (s == "")
					{
						continue;
					}
					content += Runtime.rtl.toStr(t.s(ctx, s + Runtime.rtl.toStr(",")));
				}
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "],"));
			}
		}
		else
		{
			/* Get current namespace function */
			content += Runtime.rtl.toStr(t.s(ctx, "getCurrentNamespace: function()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_namespace_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Get current class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "getCurrentClassName: function()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
		}
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "});"));
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClassBody: function(ctx, t, op_code)
	{
		var content = "";
		var class_kind = op_code.kind;
		content += Runtime.rtl.toStr(t.s(ctx, "Object.assign(" + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".prototype,")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Functions */
		if (op_code.functions != null)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), false);
			for (var i = 0;i < op_code.functions.count(ctx);i++)
			{
				var f = op_code.functions.item(ctx, i);
				if (f.flags.isFlag(ctx, "declare"))
				{
					continue;
				}
				if (f.isStatic(ctx))
				{
					continue;
				}
				/* Set function name */
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), f);
				var is_async = "";
				if (f.isFlag(ctx, "async") && t.isAsyncAwait(ctx))
				{
					is_async = "async ";
				}
				var s = "";
				var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, f);
				var args = Runtime.rtl.get(ctx, res, 1);
				s += Runtime.rtl.toStr(f.name + Runtime.rtl.toStr(": ") + Runtime.rtl.toStr(is_async) + Runtime.rtl.toStr("function(") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(")"));
				var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, f);
				s += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				s += Runtime.rtl.toStr(",");
				/* Function comments */
				var res = t.operator.constructor.AddComments(ctx, t, f.comments, t.s(ctx, s));
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		/* Items */
		if (op_code.items != null)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), false);
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var res = this.OpDeclareClassBodyItem(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		/* Init variables */
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE && op_code.vars != null)
		{
			var vars = op_code.vars.filter(ctx, (ctx, variable) => 
			{
				return !variable.flags.isFlag(ctx, "static");
			});
			if (t.current_class_full_name != "Runtime.BaseObject" && vars.count(ctx) > 0)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "_init: function(ctx)"));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				/* Clear save op codes */
				var save_op_codes = t.save_op_codes;
				var save_op_code_inc = t.save_op_code_inc;
				if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
				{
					content += Runtime.rtl.toStr(t.s(ctx, "var defProp = use('Runtime.rtl').defProp;"));
					content += Runtime.rtl.toStr(t.s(ctx, "var a = Object.getOwnPropertyNames(this);"));
				}
				var s1 = "";
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var is_static = variable.flags.isFlag(ctx, "static");
					if (is_static)
					{
						continue;
					}
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					var prefix = "";
					if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
					{
						/* prefix = "__"; */
						prefix = "";
					}
					else if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_CLASS)
					{
						prefix = "";
					}
					for (var j = 0;j < variable.values.count(ctx);j++)
					{
						var value = variable.values.item(ctx, j);
						var res = t.expression.constructor.Expression(ctx, t, value.expression);
						t = Runtime.rtl.get(ctx, res, 0);
						var s = (value.expression != null) ? (Runtime.rtl.get(ctx, res, 1)) : ("null");
						s1 += Runtime.rtl.toStr(t.s(ctx, "this." + Runtime.rtl.toStr(prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";")));
						if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
						{
							var var_name = t.expression.constructor.toString(ctx, value.var_name);
							/*s1 ~= t.s
							(
								"if (a.indexOf(" ~ var_name ~ ") == -1) defProp(this, " ~ var_name ~ ");"
							);*/
							/*
							s1 ~= t.s
							(
								"if (a.indexOf(" ~ t.expression::toString(value.var_name) ~ ") == -1)"~
								"Object.defineProperty(this, " ~ t.expression::toString(value.var_name) ~ ",{"~
								"get:function(){return this." ~ prefix ~ value.var_name ~ ";},"~
								"set:function(value){"~
									"throw new Runtime.Exceptions.AssignStructValueError(" ~
										t.expression::toString(value.var_name) ~
									");}"~
								"});"
							);
							*/
						}
					}
				}
				if (t.current_class_extends_name != "")
				{
					s1 += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name) + Runtime.rtl.toStr(".prototype._init.call(this,ctx);")));
				}
				/* Output save op code */
				var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
				if (save != "")
				{
					content += Runtime.rtl.toStr(save);
				}
				/* Restore save op codes */
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
				/* Add content */
				content += Runtime.rtl.toStr(s1);
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "},"));
			}
			var is_struct = class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT;
			/* string var_prefix = is_struct ? "__" : ""; */
			var var_prefix = "";
			/* Assign Object */
			content += Runtime.rtl.toStr(t.s(ctx, "assignObject: function(ctx,o)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "if (o instanceof " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, t.current_class_full_name)) + Runtime.rtl.toStr(")")));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			for (var i = 0;i < op_code.vars.count(ctx);i++)
			{
				var variable = op_code.vars.item(ctx, i);
				if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
				{
					continue;
				}
				var is_const = variable.flags.isFlag(ctx, "const");
				var is_static = variable.flags.isFlag(ctx, "static");
				if (is_const || is_static)
				{
					continue;
				}
				for (var j = 0;j < variable.values.count(ctx);j++)
				{
					var value = variable.values.item(ctx, j);
					content += Runtime.rtl.toStr(t.s(ctx, "this." + Runtime.rtl.toStr(var_prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = o.") + Runtime.rtl.toStr(var_prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
				}
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			if (t.current_class_extends_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name) + Runtime.rtl.toStr(".prototype.assignObject.call(this,ctx,o);")));
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Assign Value */
			content += Runtime.rtl.toStr(t.s(ctx, "assignValue: function(ctx,k,v)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			var flag = false;
			for (var i = 0;i < op_code.vars.count(ctx);i++)
			{
				var variable = op_code.vars.item(ctx, i);
				if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
				{
					continue;
				}
				var is_const = variable.flags.isFlag(ctx, "const");
				var is_static = variable.flags.isFlag(ctx, "static");
				if (is_const || is_static)
				{
					continue;
				}
				for (var j = 0;j < variable.values.count(ctx);j++)
				{
					var value = variable.values.item(ctx, j);
					if (t.flag_struct_check_types)
					{
						content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if (k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr("this.") + Runtime.rtl.toStr(var_prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = Runtime.rtl.to(v, null, ") + Runtime.rtl.toStr(this.toPattern(ctx, t, variable.pattern)) + Runtime.rtl.toStr(");")));
					}
					else
					{
						content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if (k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr("this.") + Runtime.rtl.toStr(var_prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = v;")));
					}
					flag = true;
				}
			}
			if (t.current_class_extends_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name)) + Runtime.rtl.toStr(".prototype.assignValue.call(this,ctx,k,v);")));
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
			/* Take Value */
			content += Runtime.rtl.toStr(t.s(ctx, "takeValue: function(ctx,k,d)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "if (d == undefined) d = null;"));
			var flag = false;
			for (var i = 0;i < op_code.vars.count(ctx);i++)
			{
				var variable = op_code.vars.item(ctx, i);
				if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
				{
					continue;
				}
				var is_const = variable.flags.isFlag(ctx, "const");
				var is_static = variable.flags.isFlag(ctx, "static");
				if (is_const || is_static)
				{
					continue;
				}
				for (var j = 0;j < variable.values.count(ctx);j++)
				{
					var value = variable.values.item(ctx, j);
					content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if (k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")return this.") + Runtime.rtl.toStr(var_prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
					flag = true;
				}
			}
			if (t.current_class_extends_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name)) + Runtime.rtl.toStr(".prototype.takeValue.call(this,ctx,k,d);")));
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "},"));
		}
		/* Get class name function */
		content += Runtime.rtl.toStr(t.s(ctx, "getClassName: function(ctx)"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(";")));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "},"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "});"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClassFooter
	 */
	OpDeclareClassFooter: function(ctx, t, op_code)
	{
		var content = "";
		var rtl_module_name = t.expression.constructor.useModuleName(ctx, t, "Runtime.rtl");
		if (!t.use_module_name)
		{
			content += Runtime.rtl.toStr(t.s(ctx, rtl_module_name + Runtime.rtl.toStr(".defClass(") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(");")));
			content += Runtime.rtl.toStr(t.s(ctx, "window[\"" + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr("\"] = ") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(";")));
		}
		content += Runtime.rtl.toStr(t.s(ctx, "if (typeof module != \"undefined\" && typeof module.exports != \"undefined\") " + Runtime.rtl.toStr("module.exports = ") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(";")));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClass: function(ctx, t, op_code)
	{
		if (op_code.is_declare)
		{
			return Runtime.Collection.from([t,""]);
		}
		var content = "";
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class"]), op_code);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_name"]), op_code.name);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_full_name"]), t.current_namespace_name + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(t.current_class_name));
		if (op_code.class_extends != null)
		{
			var extends_name = Runtime.rs.join(ctx, ".", op_code.class_extends.entity_name.names);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), extends_name);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), "Runtime.BaseStruct");
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), "");
		}
		/* Constructor */
		var res = this.OpDeclareClassConstructor(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Extends */
		if (op_code.class_extends != null)
		{
			content += Runtime.rtl.toStr(t.s(ctx, t.current_class_full_name + Runtime.rtl.toStr(".prototype = Object.create(") + Runtime.rtl.toStr(t.expression.constructor.useModuleName(ctx, t, t.current_class_extends_name)) + Runtime.rtl.toStr(".prototype);")));
			content += Runtime.rtl.toStr(t.s(ctx, t.current_class_full_name + Runtime.rtl.toStr(".prototype.constructor = ") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(";")));
		}
		/* Class body */
		var res = this.OpDeclareClassBody(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Class static functions */
		var res = this.OpDeclareClassBodyStatic(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Class comments */
		var res = t.operator.constructor.AddComments(ctx, t, op_code.comments, content);
		content = Runtime.rtl.get(ctx, res, 1);
		/* Class footer */
		var res = this.OpDeclareClassFooter(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translate item
	 */
	translateItem: function(ctx, t, op_code)
	{
		if (op_code instanceof Bayrell.Lang.OpCodes.OpNamespace)
		{
			return this.OpNamespace(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDeclareClass)
		{
			return this.OpDeclareClass(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpComment)
		{
			return t.operator.constructor.OpComment(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
		{
			return t.operator.constructor.OpPreprocessorIfCode(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
		{
			var content = "";
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var res = t.operator.constructor.OpPreprocessorIfCode(ctx, t, op_code.items.item(ctx, i));
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
			return Runtime.Collection.from([t,content]);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * Translate program
	 */
	translateProgramHeader: function(ctx, t, op_code)
	{
		var content = "";
		if (t.use_strict)
		{
			content = t.s(ctx, "\"use strict;\"");
		}
		/* content ~= t.s("var use = (typeof Runtime != 'undefined' && typeof Runtime.rtl != 'undefined')"~
			" ? Runtime.rtl.find_class : null;"); */
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translate program
	 */
	translateProgram: function(ctx, t, op_code)
	{
		var content = "";
		if (op_code == null)
		{
			return Runtime.Collection.from([t,content]);
		}
		if (op_code.uses != null)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["modules"]), op_code.uses);
		}
		if (op_code.items != null)
		{
			var res = this.translateProgramHeader(ctx, t, op_code);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var res = this.translateItem(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
		}
		return Runtime.Collection.from([t,Runtime.rs.trim(ctx, content)]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangES6";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Program";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangES6.TranslatorES6Program",
			"name": "Bayrell.Lang.LangES6.TranslatorES6Program",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangES6.TranslatorES6Program);
window["Bayrell.Lang.LangES6.TranslatorES6Program"] = Bayrell.Lang.LangES6.TranslatorES6Program;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangES6.TranslatorES6Program;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangPHP == 'undefined') Bayrell.Lang.LangPHP = {};
Bayrell.Lang.LangPHP.TranslatorPHP = function(ctx)
{
	Bayrell.Lang.CoreTranslator.apply(this, arguments);
};
Bayrell.Lang.LangPHP.TranslatorPHP.prototype = Object.create(Bayrell.Lang.CoreTranslator.prototype);
Bayrell.Lang.LangPHP.TranslatorPHP.prototype.constructor = Bayrell.Lang.LangPHP.TranslatorPHP;
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHP.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.is_pipe = false;
		this.pipe_var_name = "";
		this.html_var_name = "";
		this.is_html = false;
		this.expression = null;
		this.html = null;
		this.operator = null;
		this.program = null;
		Bayrell.Lang.CoreTranslator.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangPHP.TranslatorPHP)
		{
			this.is_pipe = o.is_pipe;
			this.pipe_var_name = o.pipe_var_name;
			this.html_var_name = o.html_var_name;
			this.is_html = o.is_html;
			this.expression = o.expression;
			this.html = o.html;
			this.operator = o.operator;
			this.program = o.program;
		}
		Bayrell.Lang.CoreTranslator.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "is_pipe")this.is_pipe = v;
		else if (k == "pipe_var_name")this.pipe_var_name = v;
		else if (k == "html_var_name")this.html_var_name = v;
		else if (k == "is_html")this.is_html = v;
		else if (k == "expression")this.expression = v;
		else if (k == "html")this.html = v;
		else if (k == "operator")this.operator = v;
		else if (k == "program")this.program = v;
		else Bayrell.Lang.CoreTranslator.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "is_pipe")return this.is_pipe;
		else if (k == "pipe_var_name")return this.pipe_var_name;
		else if (k == "html_var_name")return this.html_var_name;
		else if (k == "is_html")return this.is_html;
		else if (k == "expression")return this.expression;
		else if (k == "html")return this.html;
		else if (k == "operator")return this.operator;
		else if (k == "program")return this.program;
		return Bayrell.Lang.CoreTranslator.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHP";
	},
});
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHP, Bayrell.Lang.CoreTranslator);
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHP,
{
	/**
	 * Reset translator
	 */
	reset: function(ctx, t)
	{
		return t.copy(ctx, Runtime.Dict.from({"value":"","current_namespace_name":"","modules":new Runtime.Dict(ctx),"expression":new Bayrell.Lang.LangPHP.TranslatorPHPExpression(ctx),"html":new Bayrell.Lang.LangPHP.TranslatorPHPHtml(ctx),"operator":new Bayrell.Lang.LangPHP.TranslatorPHPOperator(ctx),"program":new Bayrell.Lang.LangPHP.TranslatorPHPProgram(ctx),"save_vars":new Runtime.Collection(ctx),"save_op_codes":new Runtime.Collection(ctx),"save_op_code_inc":0,"preprocessor_flags":Runtime.Dict.from({"BACKEND":true,"PHP":true})}));
	},
	/**
	 * Translate BaseOpCode
	 */
	translate: function(ctx, t, op_code)
	{
		t = this.reset(ctx, t);
		return t.program.constructor.translateProgram(ctx, t, op_code);
	},
	/**
	 * Inc save op code
	 */
	nextSaveOpCode: function(ctx, t)
	{
		return "$__v" + Runtime.rtl.toStr(t.save_op_code_inc);
	},
	/**
	 * Output save op code content
	 */
	outputSaveOpCode: function(ctx, t, save_op_code_value)
	{
		if (save_op_code_value == undefined) save_op_code_value = 0;
		var content = "";
		for (var i = 0;i < t.save_op_codes.count(ctx);i++)
		{
			if (i < save_op_code_value)
			{
				continue;
			}
			var save = t.save_op_codes.item(ctx, i);
			var s = (save.content == "") ? (t.s(ctx, save.var_name + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(save.var_content) + Runtime.rtl.toStr(";"))) : (save.content);
			content += Runtime.rtl.toStr(s);
		}
		return content;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangPHP";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHP";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.CoreTranslator";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": "Bayrell.Lang.LangPHP.TranslatorPHP",
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
			a.push("is_pipe");
			a.push("pipe_var_name");
			a.push("html_var_name");
			a.push("is_html");
			a.push("expression");
			a.push("html");
			a.push("operator");
			a.push("program");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "is_pipe") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pipe_var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "html_var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "operator") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "program") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHP",
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
Runtime.rtl.defClass(Bayrell.Lang.LangPHP.TranslatorPHP);
window["Bayrell.Lang.LangPHP.TranslatorPHP"] = Bayrell.Lang.LangPHP.TranslatorPHP;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangPHP.TranslatorPHP;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangPHP == 'undefined') Bayrell.Lang.LangPHP = {};
Bayrell.Lang.LangPHP.TranslatorPHPExpression = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPExpression.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangPHP.TranslatorPHPExpression)
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
		return "Bayrell.Lang.LangPHP.TranslatorPHPExpression";
	},
});
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPExpression,
{
	/**
	 * Returns string
	 */
	toString: function(ctx, s)
	{
		s = Runtime.re.replace(ctx, "\\\\", "\\\\", s);
		s = Runtime.re.replace(ctx, "\"", "\\\"", s);
		s = Runtime.re.replace(ctx, "\n", "\\n", s);
		s = Runtime.re.replace(ctx, "\r", "\\r", s);
		s = Runtime.re.replace(ctx, "\t", "\\t", s);
		return "\"" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr("\"");
	},
	/**
	 * To pattern
	 */
	toPattern: function(ctx, t, pattern)
	{
		var names = this.findModuleNames(ctx, t, pattern.entity_name.names);
		var e = Runtime.rs.join(ctx, ".", names);
		var a = (pattern.template != null) ? (pattern.template.map(ctx, (ctx, pattern) => 
		{
			return this.toPattern(ctx, t, pattern);
		})) : (null);
		var b = (a != null) ? (",\"t\":[" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", a)) + Runtime.rtl.toStr("]")) : ("");
		return "[\"e\"=>" + Runtime.rtl.toStr(this.toString(ctx, e)) + Runtime.rtl.toStr(b) + Runtime.rtl.toStr("]");
	},
	/**
	 * Returns string
	 */
	rtlToStr: function(ctx, t, s)
	{
		var module_name = this.getModuleName(ctx, t, "rtl");
		return module_name + Runtime.rtl.toStr("::toStr(") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(")");
	},
	/**
	 * Find module name
	 */
	findModuleName: function(ctx, t, module_name)
	{
		if (module_name == "Collection")
		{
			return "Runtime.Collection";
		}
		else if (module_name == "Dict")
		{
			return "Runtime.Dict";
		}
		else if (module_name == "Map")
		{
			return "Runtime.Map";
		}
		else if (module_name == "Vector")
		{
			return "Runtime.Vector";
		}
		else if (module_name == "rs")
		{
			return "Runtime.rs";
		}
		else if (module_name == "rtl")
		{
			return "Runtime.rtl";
		}
		else if (module_name == "ArrayInterface")
		{
			return "ArrayAccess";
		}
		else if (t.modules.has(ctx, module_name))
		{
			return t.modules.item(ctx, module_name);
		}
		return module_name;
	},
	/**
	 * Returns module name
	 */
	findModuleNames: function(ctx, t, names)
	{
		if (names.count(ctx) > 0)
		{
			var module_name = names.first(ctx);
			module_name = this.findModuleName(ctx, t, module_name);
			if (module_name != "")
			{
				names = names.removeFirstIm(ctx).prependCollectionIm(ctx, Runtime.rs.split(ctx, "\\.", module_name));
			}
		}
		return names;
	},
	/**
	 * Return module name
	 */
	getModuleName: function(ctx, t, module_name)
	{
		module_name = this.findModuleName(ctx, t, module_name);
		module_name = Runtime.rs.replace(ctx, "\\.", "\\", module_name);
		return "\\" + Runtime.rtl.toStr(module_name);
	},
	/**
	 * Return module name
	 */
	getModuleNames: function(ctx, t, names)
	{
		return "\\" + Runtime.rtl.toStr(Runtime.rs.join(ctx, "\\", this.findModuleNames(ctx, t, names)));
	},
	/**
	 * OpTypeIdentifier
	 */
	OpTypeIdentifier: function(ctx, t, op_code)
	{
		var names = this.findModuleNames(ctx, t, op_code.entity_name.names);
		var s = "\\" + Runtime.rtl.toStr(Runtime.rs.join(ctx, "\\", names));
		return Runtime.Collection.from([t,s]);
	},
	/**
	 * OpIdentifier
	 */
	OpIdentifier: function(ctx, t, op_code)
	{
		if (op_code.value == "@")
		{
			return Runtime.Collection.from([t,"$ctx"]);
		}
		if (op_code.value == "_")
		{
			return Runtime.Collection.from([t,"$ctx->translate"]);
		}
		if (op_code.value == "log")
		{
			return Runtime.Collection.from([t,"var_dump"]);
		}
		if (t.modules.has(ctx, op_code.value) || op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE)
		{
			var module_name = op_code.value;
			var new_module_name = this.getModuleName(ctx, t, module_name);
			return Runtime.Collection.from([t,new_module_name]);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_VARIABLE)
		{
			var content = op_code.value;
			return Runtime.Collection.from([t,"$" + Runtime.rtl.toStr(content)]);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF)
		{
			var content = op_code.value;
			if (content == "this")
			{
				content = "$this";
			}
			return Runtime.Collection.from([t,content]);
		}
		var content = op_code.value;
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpNumber
	 */
	OpNumber: function(ctx, t, op_code)
	{
		var content = op_code.value;
		if (op_code.negative)
		{
			content = "-" + Runtime.rtl.toStr(content);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 15);
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpString
	 */
	OpString: function(ctx, t, op_code)
	{
		return Runtime.Collection.from([t,this.toString(ctx, op_code.value)]);
	},
	/**
	 * OpCollection
	 */
	OpCollection: function(ctx, t, op_code)
	{
		var content = "";
		var values = op_code.values.map(ctx, (ctx, op_code) => 
		{
			var res = this.Expression(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			return s;
		});
		values = values.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		var module_name = this.getModuleName(ctx, t, "Collection");
		content = module_name + Runtime.rtl.toStr("::from([") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", values)) + Runtime.rtl.toStr("])");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDict
	 */
	OpDict: function(ctx, t, op_code, flag_array)
	{
		if (flag_array == undefined) flag_array = false;
		var content = "";
		var values = op_code.values.map(ctx, (ctx, pair, key) => 
		{
			if (pair.condition != null && !t.preprocessor_flags.has(ctx, pair.condition.value))
			{
				return "";
			}
			var res = this.Expression(ctx, t, pair.value);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			return this.toString(ctx, pair.key) + Runtime.rtl.toStr("=>") + Runtime.rtl.toStr(s);
		});
		values = values.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		var module_name = this.getModuleName(ctx, t, "Dict");
		if (!flag_array)
		{
			content = module_name + Runtime.rtl.toStr("::from([") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", values)) + Runtime.rtl.toStr("])");
		}
		else
		{
			content = "[" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", values)) + Runtime.rtl.toStr("]");
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Dynamic
	 */
	Dynamic: function(ctx, t, op_code, next_op_code)
	{
		if (next_op_code == undefined) next_op_code = null;
		if (op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			return this.OpIdentifier(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			var attrs = new Runtime.Vector(ctx);
			var op_code_item = op_code;
			var op_code_next = op_code;
			var prev_kind = "";
			var s = "";
			var first_item_complex = false;
			while (op_code_next instanceof Bayrell.Lang.OpCodes.OpAttr)
			{
				attrs.push(ctx, op_code_next);
				op_code_item = op_code_next;
				op_code_next = op_code_next.obj;
			}
			attrs = attrs.reverseIm(ctx);
			if (op_code_next instanceof Bayrell.Lang.OpCodes.OpCall)
			{
				prev_kind = "var";
				var res = this.OpCall(ctx, t, op_code_next);
				t = Runtime.rtl.get(ctx, res, 0);
				s = Runtime.rtl.get(ctx, res, 1);
				first_item_complex = true;
			}
			else if (op_code_next instanceof Bayrell.Lang.OpCodes.OpNew)
			{
				prev_kind = "var";
				var res = this.OpNew(ctx, t, op_code_next);
				t = Runtime.rtl.get(ctx, res, 0);
				s = "(" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(")");
				first_item_complex = true;
			}
			else if (op_code_next instanceof Bayrell.Lang.OpCodes.OpIdentifier)
			{
				if (op_code_next.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_CLASSREF)
				{
					if (op_code_next.value == "static")
					{
						s = "static";
						prev_kind = "static";
					}
					else if (op_code_next.value == "parent")
					{
						s = "parent";
						prev_kind = "static";
					}
					else if (op_code_next.value == "self")
					{
						prev_kind = "static";
						s = this.getModuleName(ctx, t, t.current_class_full_name);
					}
					else if (op_code_next.value == "this")
					{
						prev_kind = "var";
						s = "$this";
					}
				}
				else if (op_code_next.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_PIPE)
				{
					prev_kind = "var";
					var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":t.pipe_var_name + Runtime.rtl.toStr("->val")}));
					t = Runtime.rtl.get(ctx, res, 0);
					s = Runtime.rtl.get(ctx, res, 1);
				}
				else
				{
					var res = this.OpIdentifier(ctx, t, op_code_next);
					t = Runtime.rtl.get(ctx, res, 0);
					s = Runtime.rtl.get(ctx, res, 1);
					prev_kind = "var";
					if (t.modules.has(ctx, op_code_next.value) || op_code_next.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE)
					{
						prev_kind = "static";
					}
				}
			}
			if (first_item_complex && t.is_pipe)
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":s}));
				t = Runtime.rtl.get(ctx, res, 0);
				s = Runtime.rtl.get(ctx, res, 1);
			}
			var attrs_sz = attrs.count(ctx);
			for (var i = 0;i < attrs.count(ctx);i++)
			{
				var attr = attrs.item(ctx, i);
				var next_attr = attrs.get(ctx, i + 1, null);
				if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
				{
					s += Runtime.rtl.toStr("->" + Runtime.rtl.toStr(attr.value.value));
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_STATIC)
				{
					if (prev_kind == "static")
					{
						var attr_val = attr.value.value;
						if (i == attrs_sz - 1 && next_op_code instanceof Bayrell.Lang.OpCodes.OpCall)
						{
							s += Runtime.rtl.toStr("::" + Runtime.rtl.toStr(attr_val));
						}
						else if (Runtime.rs.strtoupper(ctx, attr_val) == attr_val)
						{
							s += Runtime.rtl.toStr("::" + Runtime.rtl.toStr(attr_val));
						}
						else
						{
							var val1;
							if (s == "static")
							{
								val1 = "static::class";
							}
							else
							{
								val1 = s + Runtime.rtl.toStr("::class");
							}
							var val2 = this.toString(ctx, attr_val);
							s = "new \\Runtime\\Callback(" + Runtime.rtl.toStr(val1) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(val2) + Runtime.rtl.toStr(")");
						}
					}
					else
					{
						s = s + Runtime.rtl.toStr("::") + Runtime.rtl.toStr(attr.value.value);
					}
					prev_kind = "static";
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC)
				{
					var res = this.Expression(ctx, t, attr.value);
					t = Runtime.rtl.get(ctx, res, 0);
					/* s ~= "[" ~ res[1] ~ "]"; */
					s = "\\Runtime\\rtl::get($ctx, " + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(")");
				}
				else if (attr.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC_ATTRS)
				{
					var items = new Runtime.Vector(ctx);
					if (attr.attrs != null)
					{
						for (var j = 0;j < attr.attrs.count(ctx);j++)
						{
							var res = this.Expression(ctx, t, Runtime.rtl.get(ctx, attr.attrs, j));
							t = Runtime.rtl.get(ctx, res, 0);
							items.push(ctx, Runtime.rtl.get(ctx, res, 1));
						}
					}
					s = "\\Runtime\\rtl::attr($ctx, " + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", items)) + Runtime.rtl.toStr("])");
				}
			}
			return Runtime.Collection.from([t,s]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCurry)
		{
			var res = this.OpCurry(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var content = Runtime.rtl.get(ctx, res, 1);
			var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":content}));
			t = Runtime.rtl.get(ctx, res, 0);
			var var_name = Runtime.rtl.get(ctx, res, 1);
			return Runtime.Collection.from([t,var_name]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			return this.OpCall(ctx, t, op_code);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * OpInc
	 */
	OpInc: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.Expression(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		var s = Runtime.rtl.get(ctx, res, 1);
		if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_PRE_INC)
		{
			content = "++$" + Runtime.rtl.toStr(s);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_PRE_DEC)
		{
			content = "--$" + Runtime.rtl.toStr(s);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_POST_INC)
		{
			content = "$" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr("++");
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpInc.KIND_POST_DEC)
		{
			content = "$" + Runtime.rtl.toStr(s) + Runtime.rtl.toStr("--");
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpMath
	 */
	OpMath: function(ctx, t, op_code)
	{
		var res = this.Expression(ctx, t, op_code.value1);
		t = Runtime.rtl.get(ctx, res, 0);
		var opcode_level1 = Runtime.rtl.get(ctx, res, 0).opcode_level;
		var s1 = Runtime.rtl.get(ctx, res, 1);
		var op = "";
		var op_math = op_code.math;
		var opcode_level = 0;
		if (op_code.math == "!")
		{
			opcode_level = 16;
			op = "!";
		}
		if (op_code.math == ">>")
		{
			opcode_level = 12;
			op = ">>";
		}
		if (op_code.math == "<<")
		{
			opcode_level = 12;
			op = "<<";
		}
		if (op_code.math == "&")
		{
			opcode_level = 9;
			op = "&";
		}
		if (op_code.math == "xor")
		{
			opcode_level = 8;
			op = "^";
		}
		if (op_code.math == "|")
		{
			opcode_level = 7;
			op = "|";
		}
		if (op_code.math == "*")
		{
			opcode_level = 14;
			op = "*";
		}
		if (op_code.math == "/")
		{
			opcode_level = 14;
			op = "/";
		}
		if (op_code.math == "%")
		{
			opcode_level = 14;
			op = "%";
		}
		if (op_code.math == "div")
		{
			opcode_level = 14;
			op = "div";
		}
		if (op_code.math == "mod")
		{
			opcode_level = 14;
			op = "mod";
		}
		if (op_code.math == "+")
		{
			opcode_level = 13;
			op = "+";
		}
		if (op_code.math == "-")
		{
			opcode_level = 13;
			op = "-";
		}
		if (op_code.math == "~")
		{
			opcode_level = 13;
			op = "+";
		}
		if (op_code.math == "!")
		{
			opcode_level = 13;
			op = "!";
		}
		if (op_code.math == "===")
		{
			opcode_level = 10;
			op = "===";
		}
		if (op_code.math == "!==")
		{
			opcode_level = 10;
			op = "!==";
		}
		if (op_code.math == "==")
		{
			opcode_level = 10;
			op = "==";
		}
		if (op_code.math == "!=")
		{
			opcode_level = 10;
			op = "!=";
		}
		if (op_code.math == ">=")
		{
			opcode_level = 10;
			op = ">=";
		}
		if (op_code.math == "<=")
		{
			opcode_level = 10;
			op = "<=";
		}
		if (op_code.math == ">")
		{
			opcode_level = 10;
			op = ">";
		}
		if (op_code.math == "<")
		{
			opcode_level = 10;
			op = "<";
		}
		if (op_code.math == "is")
		{
			opcode_level = 10;
			op = "instanceof";
		}
		if (op_code.math == "instanceof")
		{
			opcode_level = 10;
			op = "instanceof";
		}
		if (op_code.math == "implements")
		{
			opcode_level = 10;
			op = "implements";
		}
		if (op_code.math == "not")
		{
			opcode_level = 16;
			op = "!";
		}
		if (op_code.math == "and")
		{
			opcode_level = 6;
			op = "&&";
		}
		if (op_code.math == "&&")
		{
			opcode_level = 6;
			op = "&&";
		}
		if (op_code.math == "or")
		{
			opcode_level = 5;
			op = "||";
		}
		if (op_code.math == "||")
		{
			opcode_level = 5;
			op = "||";
		}
		var content = "";
		if (op_code.math == "!" || op_code.math == "not")
		{
			content = op + Runtime.rtl.toStr(t.o(ctx, s1, opcode_level1, opcode_level));
		}
		else
		{
			var res = this.Expression(ctx, t, op_code.value2);
			t = Runtime.rtl.get(ctx, res, 0);
			var opcode_level2 = Runtime.rtl.get(ctx, res, 0).opcode_level;
			var s2 = Runtime.rtl.get(ctx, res, 1);
			var op1 = t.o(ctx, s1, opcode_level1, opcode_level);
			var op2 = t.o(ctx, s2, opcode_level2, opcode_level);
			if (op_math == "~")
			{
				content = op1 + Runtime.rtl.toStr(" . ") + Runtime.rtl.toStr(this.rtlToStr(ctx, t, op2));
			}
			else if (op_math == "implements")
			{
				content = op1 + Runtime.rtl.toStr(" instanceof ") + Runtime.rtl.toStr(op2);
			}
			else
			{
				content = op1 + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(op) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(op2);
			}
		}
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), opcode_level);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpMethod
	 */
	OpMethod: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.OpIdentifier(ctx, t, op_code.value1);
		t = Runtime.rtl.get(ctx, res, 0);
		var val1 = Runtime.rtl.get(ctx, res, 1);
		var val2 = op_code.value2;
		if (op_code.kind == Bayrell.Lang.OpCodes.OpMethod.KIND_STATIC)
		{
			val1 = val1 + Runtime.rtl.toStr("->getClassName()");
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpMethod.KIND_CLASS)
		{
			val1 = val1 + Runtime.rtl.toStr("::class");
		}
		var content = "new \\Runtime\\Callback(" + Runtime.rtl.toStr(val1) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(this.toString(ctx, val2)) + Runtime.rtl.toStr(")");
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 0);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpNew
	 */
	OpNew: function(ctx, t, op_code)
	{
		var content = "new ";
		var res = this.OpTypeIdentifier(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		var flag = false;
		content += Runtime.rtl.toStr("(");
		if (t.current_function == null || t.current_function.is_context)
		{
			content += Runtime.rtl.toStr("$ctx");
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpCurry
	 */
	OpCurry: function(ctx, t, op_code)
	{
		var content = "";
		var s = "";
		var args = op_code.args.filter(ctx, (ctx, arg) => 
		{
			return arg instanceof Bayrell.Lang.OpCodes.OpCurryArg;
		}).sortIm(ctx, (ctx, arg1, arg2) => 
		{
			return (arg1.pos > arg2.pos) ? (1) : ((arg1.pos < arg2.pos) ? (-1) : (0));
		});
		var use_obj_item = "";
		if (op_code.obj instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			if (op_code.obj.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_VARIABLE)
			{
				use_obj_item = "$" + Runtime.rtl.toStr(op_code.obj.value);
			}
		}
		var args_sz = args.count(ctx);
		for (var i = 0;i < args_sz;i++)
		{
			var arg = args.item(ctx, i);
			var s_use = "";
			var arr_use = new Runtime.Vector(ctx);
			for (var j = 0;j < i;j++)
			{
				var arg_use = args.item(ctx, j);
				arr_use.push(ctx, "$__varg" + Runtime.rtl.toStr(arg_use.pos));
			}
			if (use_obj_item != "")
			{
				arr_use.push(ctx, use_obj_item);
			}
			if (arr_use.count(ctx) > 0)
			{
				s_use = " use (" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", arr_use)) + Runtime.rtl.toStr(")");
			}
			if (args_sz - 1 == i)
			{
				content += Runtime.rtl.toStr("function ($ctx, $__varg" + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr(s_use) + Runtime.rtl.toStr("{return "));
			}
			else
			{
				content += Runtime.rtl.toStr("function ($__ctx" + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(", $__varg") + Runtime.rtl.toStr(arg.pos) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr(s_use) + Runtime.rtl.toStr("{return "));
			}
		}
		var flag = false;
		var res = this.Dynamic(ctx, t, op_code.obj, op_code);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		if (s == "parent")
		{
			var f_name = t.current_function.name;
			if (f_name == "constructor")
			{
				f_name = "__construct";
			}
			s = "parent::" + Runtime.rtl.toStr(f_name) + Runtime.rtl.toStr("(");
			content += Runtime.rtl.toStr(s);
		}
		else
		{
			content += Runtime.rtl.toStr("(");
		}
		content += Runtime.rtl.toStr("$ctx");
		flag = true;
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			s = "";
			var item = op_code.args.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpCurryArg)
			{
				s += Runtime.rtl.toStr("$__varg" + Runtime.rtl.toStr(item.pos));
			}
			else
			{
				var res = this.Expression(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				s = Runtime.rtl.get(ctx, res, 1);
			}
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		for (var i = 0;i < args_sz;i++)
		{
			content += Runtime.rtl.toStr(";}");
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpCall
	 */
	OpCall: function(ctx, t, op_code)
	{
		var s = "";
		var flag = false;
		var res = this.Dynamic(ctx, t, op_code.obj, op_code);
		t = Runtime.rtl.get(ctx, res, 0);
		s = Runtime.rtl.get(ctx, res, 1);
		if (s == "parent")
		{
			var f_name = t.current_function.name;
			if (f_name == "constructor")
			{
				f_name = "__construct";
			}
			s = "parent::" + Runtime.rtl.toStr(f_name) + Runtime.rtl.toStr("(");
		}
		else
		{
			s += Runtime.rtl.toStr("(");
		}
		var content = s;
		if (op_code.obj instanceof Bayrell.Lang.OpCodes.OpIdentifier && op_code.obj.value == "_")
		{
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr("$ctx"));
			flag = true;
		}
		else if ((t.current_function == null || t.current_function.is_context) && op_code.is_context)
		{
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr("$ctx"));
			flag = true;
		}
		for (var i = 0;i < op_code.args.count(ctx);i++)
		{
			var item = op_code.args.item(ctx, i);
			var res = this.Expression(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			var s = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s));
			flag = true;
		}
		content += Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassOf
	 */
	OpClassOf: function(ctx, t, op_code)
	{
		var names = this.findModuleNames(ctx, t, op_code.entity_name.names);
		var s = Runtime.rs.join(ctx, ".", names);
		return Runtime.Collection.from([t,this.toString(ctx, s)]);
	},
	/**
	 * OpTernary
	 */
	OpTernary: function(ctx, t, op_code)
	{
		var content = "";
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 100);
		var res = this.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var condition = Runtime.rtl.get(ctx, res, 1);
		var res = this.Expression(ctx, t, op_code.if_true);
		t = Runtime.rtl.get(ctx, res, 0);
		var if_true = Runtime.rtl.get(ctx, res, 1);
		var res = this.Expression(ctx, t, op_code.if_false);
		t = Runtime.rtl.get(ctx, res, 0);
		var if_false = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr("(" + Runtime.rtl.toStr(condition) + Runtime.rtl.toStr(") ? (") + Runtime.rtl.toStr(if_true) + Runtime.rtl.toStr(") : (") + Runtime.rtl.toStr(if_false) + Runtime.rtl.toStr(")"));
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 11);
		/* OpTernary */
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpPipe
	 */
	OpPipe: function(ctx, t, op_code, is_expression)
	{
		if (is_expression == undefined) is_expression = true;
		var content = "";
		var var_name = "";
		var value = "";
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var_name = Runtime.rtl.get(ctx, res, 1);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["pipe_var_name"]), var_name);
		var items = new Runtime.Vector(ctx);
		var op_code_item = op_code;
		while (op_code_item instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			items.push(ctx, op_code_item);
			op_code_item = op_code_item.obj;
		}
		items = items.reverseIm(ctx);
		/* First item */
		var res = t.expression.constructor.Expression(ctx, t, op_code_item);
		t = Runtime.rtl.get(ctx, res, 0);
		value = Runtime.rtl.get(ctx, res, 1);
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"content":t.s(ctx, var_name + Runtime.rtl.toStr(" = new \\Runtime\\Monad($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(");"))}));
		t = Runtime.rtl.get(ctx, res, 0);
		/* Output items */
		for (var i = 0;i < items.count(ctx);i++)
		{
			var s1 = "";
			var s2 = "";
			var op_item = items.item(ctx, i);
			if (op_item.kind == Bayrell.Lang.OpCodes.OpPipe.KIND_ATTR)
			{
				var res = this.Expression(ctx, t, op_item.value);
				t = Runtime.rtl.get(ctx, res, 0);
				value = Runtime.rtl.get(ctx, res, 1);
				s1 = var_name + Runtime.rtl.toStr("->attr($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
			}
			else if (op_item.kind == Bayrell.Lang.OpCodes.OpPipe.KIND_CALL)
			{
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), true);
				var args = "";
				var is_instance_method = false;
				if (op_item.value instanceof Bayrell.Lang.OpCodes.OpCall && op_item.value.obj instanceof Bayrell.Lang.OpCodes.OpAttr && op_item.value.obj.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
				{
					is_instance_method = true;
					value = t.pipe_var_name + Runtime.rtl.toStr("->val");
					value += Runtime.rtl.toStr("->" + Runtime.rtl.toStr(op_item.value.obj.value.value));
					var flag = false;
					for (var j = 0;j < op_item.value.args.count(ctx);j++)
					{
						var item = op_item.value.args.item(ctx, j);
						var res = t.expression.constructor.Expression(ctx, t, item);
						t = Runtime.rtl.get(ctx, res, 0);
						var s_arg = Runtime.rtl.get(ctx, res, 1);
						args += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr(s_arg));
						flag = true;
					}
				}
				else
				{
					var res = this.Dynamic(ctx, t, op_item.value);
					t = Runtime.rtl.get(ctx, res, 0);
					value = Runtime.rtl.get(ctx, res, 1);
				}
				if (!op_item.is_async || !t.enable_async_await)
				{
					if (op_item.is_monad)
					{
						s1 = var_name + Runtime.rtl.toStr("->monad($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
					}
					else
					{
						if (is_instance_method)
						{
							s1 = var_name + Runtime.rtl.toStr("->callMethod(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr("])");
						}
						else
						{
							s1 = var_name + Runtime.rtl.toStr("->call($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
						}
					}
				}
				else if (op_item.is_async && t.current_function.isFlag(ctx, "async"))
				{
					if (op_item.is_monad)
					{
						s1 = var_name + Runtime.rtl.toStr("->monadAsync($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
					}
					else
					{
						if (is_instance_method)
						{
							s1 = var_name + Runtime.rtl.toStr("->callMethodAsync(ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr("])");
						}
						else
						{
							s1 = var_name + Runtime.rtl.toStr("->callAsync($ctx, ") + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
						}
					}
				}
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_pipe"]), false);
			}
			if (s1 != "")
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"content":t.s(ctx, var_name + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";"))}));
				t = Runtime.rtl.get(ctx, res, 0);
			}
		}
		return Runtime.Collection.from([t,var_name + Runtime.rtl.toStr("->value($ctx)")]);
	},
	/**
	 * OpTypeConvert
	 */
	OpTypeConvert: function(ctx, t, op_code)
	{
		var content = "";
		var res = this.Expression(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		var value = Runtime.rtl.get(ctx, res, 1);
		content = "\\Runtime\\rtl::to(" + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(this.toPattern(ctx, t, op_code.pattern)) + Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpTernary
	 */
	OpDeclareFunction: function(ctx, t, op_code)
	{
		var content = "";
		/* Set function name */
		var save_f = t.current_function;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code);
		var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code);
		var args = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr("function (" + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(")"));
		if (op_code.vars != null && op_code.vars.count(ctx) > 0)
		{
			var vars = op_code.vars.map(ctx, (ctx, s) => 
			{
				return "&$" + Runtime.rtl.toStr(s);
			});
			content += Runtime.rtl.toStr(" use (" + Runtime.rtl.toStr(Runtime.rs.join(ctx, ",", vars)) + Runtime.rtl.toStr(")"));
		}
		var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Restore function */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), save_f);
		/* OpTernary */
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Expression
	 */
	Expression: function(ctx, t, op_code)
	{
		var content = "";
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 100);
		if (op_code instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			var res = this.OpIdentifier(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTypeIdentifier)
		{
			var res = this.OpTypeIdentifier(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpNumber)
		{
			var res = this.OpNumber(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpString)
		{
			var res = this.OpString(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCollection)
		{
			var res = this.OpCollection(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDict)
		{
			var res = this.OpDict(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpInc)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 16);
			var res = this.OpInc(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpMath)
		{
			var res = this.OpMath(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpMethod)
		{
			var res = this.OpMethod(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpNew)
		{
			var res = this.OpNew(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			var res = this.Dynamic(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			var res = this.OpCall(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpClassOf)
		{
			var res = this.OpClassOf(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCurry)
		{
			var res = this.OpCurry(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			return this.OpPipe(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTernary)
		{
			var res = this.OpTernary(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTypeConvert)
		{
			var res = this.OpTypeConvert(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			var res = this.OpDeclareFunction(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlItems)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), true);
			var res = t.html.constructor.OpHtmlItems(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), false);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			var res = t.operator.constructor.OpPreprocessorIfDef(ctx, t, op_code, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_EXPRESSION);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		return Runtime.Collection.from([t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangPHP";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHPExpression";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHPExpression",
			"name": "Bayrell.Lang.LangPHP.TranslatorPHPExpression",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangPHP.TranslatorPHPExpression);
window["Bayrell.Lang.LangPHP.TranslatorPHPExpression"] = Bayrell.Lang.LangPHP.TranslatorPHPExpression;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangPHP.TranslatorPHPExpression;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangPHP == 'undefined') Bayrell.Lang.LangPHP = {};
Bayrell.Lang.LangPHP.TranslatorPHPHtml = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPHtml.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangPHP.TranslatorPHPHtml)
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
		return "Bayrell.Lang.LangPHP.TranslatorPHPHtml";
	},
});
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPHtml,
{
	/**
	 * Is component
	 */
	isComponent: function(ctx, tag_name)
	{
		var ch1 = Runtime.rs.substr(ctx, tag_name, 0, 1);
		var ch2 = Runtime.rs.strtoupper(ctx, ch1);
		return tag_name != "" && (ch1 == "{" || ch1 == ch2);
	},
	/**
	 * Is single tag
	 */
	isSingleTag: function(ctx, tag_name)
	{
		var tokens = Runtime.Collection.from(["img","meta","input","link","br"]);
		if (tokens.indexOf(ctx, tag_name) == -1)
		{
			return false;
		}
		return true;
	},
	/**
	 * Translator html component
	 */
	OpHtmlComponent: function(ctx, t, op_code)
	{
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var var_name = Runtime.rtl.get(ctx, res, 1);
		var content = "";
		var v_model = "null";
		var tag_name = op_code.tag_name;
		var module_name = "";
		if (op_code.op_code_name)
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.op_code_name);
			t = Runtime.rtl.get(ctx, res, 0);
			module_name = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			module_name = t.expression.constructor.toString(ctx, t.expression.constructor.findModuleName(ctx, t, op_code.tag_name));
		}
		var bind = op_code.attrs.findItem(ctx, Runtime.lib.equalAttr(ctx, "key", "@bind"));
		if (bind)
		{
			var res = t.expression.constructor.Expression(ctx, t, bind.value);
			t = Runtime.rtl.get(ctx, res, 0);
			v_model = "\\Runtime\\rtl::attr($ctx, $model, " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(", null)");
		}
		var bind = op_code.attrs.findItem(ctx, Runtime.lib.equalAttr(ctx, "key", "@name"));
		if (bind)
		{
			var res = t.expression.constructor.Expression(ctx, t, bind.value);
			t = Runtime.rtl.get(ctx, res, 0);
			v_model = "\\Runtime\\rtl::attr($ctx, $model, " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(", null)");
		}
		content += Runtime.rtl.toStr(t.s(ctx, "/* Component '" + Runtime.rtl.toStr(tag_name) + Runtime.rtl.toStr("' */")));
		content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_params = [];")));
		for (var i = 0;i < op_code.attrs.count(ctx);i++)
		{
			var attr = op_code.attrs.item(ctx, i);
			if (attr.key == "@bind")
			{
				continue;
			}
			if (attr.key == "@name")
			{
				continue;
			}
			if (attr.key == "@model")
			{
				continue;
			}
			if (attr.key == "@ref")
			{
				continue;
			}
			if (attr.is_spread)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "if($" + Runtime.rtl.toStr(attr.value.value) + Runtime.rtl.toStr("!=null)") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_params = array_merge(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_params,$") + Runtime.rtl.toStr(attr.value.value) + Runtime.rtl.toStr("->_map);")));
			}
			else
			{
				var res = this.OpHtmlAttr(ctx, t, attr);
				t = Runtime.rtl.get(ctx, res, 0);
				var attr_value = Runtime.rtl.get(ctx, res, 1);
				content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_params[") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, attr.key)) + Runtime.rtl.toStr("] = ") + Runtime.rtl.toStr(attr_value) + Runtime.rtl.toStr(";")));
			}
		}
		content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_content = [];")));
		var f = Runtime.rtl.method(ctx, this.getCurrentClassName(ctx), "OpHtmlItems");
		var res = t.constructor.saveOpCodeCall(ctx, t, f, Runtime.Collection.from([op_code.items,var_name + Runtime.rtl.toStr("_content")]));
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		if (op_code.op_code_name)
		{
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_name = \\Runtime\\rtl::find_class(") + Runtime.rtl.toStr(module_name) + Runtime.rtl.toStr(");")));
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = [") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_name::render($ctx, $layout,") + Runtime.rtl.toStr(v_model) + Runtime.rtl.toStr(",\\Runtime\\Dict::from(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_params),") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_content)];")));
		}
		else
		{
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr("_name = \\Runtime\\rtl::find_class(") + Runtime.rtl.toStr(module_name) + Runtime.rtl.toStr(");")));
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = [") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_name::render($ctx, $layout,") + Runtime.rtl.toStr(v_model) + Runtime.rtl.toStr(",\\Runtime\\Dict::from(") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_params),") + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr("_content)];")));
		}
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_name":var_name,"content":content}));
		t = Runtime.rtl.get(ctx, res, 0);
		return Runtime.Collection.from([t,var_name]);
	},
	/**
	 * Translator html attr
	 */
	OpHtmlAttr: function(ctx, t, attr)
	{
		if (attr.value instanceof Bayrell.Lang.OpCodes.OpString)
		{
			return Runtime.Collection.from([t,t.expression.constructor.toString(ctx, attr.value.value)]);
		}
		if (attr.value instanceof Bayrell.Lang.OpCodes.OpHtmlValue)
		{
			if (attr.value.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_RAW)
			{
				var res = t.expression.constructor.Expression(ctx, t, attr.value.value);
				t = Runtime.rtl.get(ctx, res, 0);
				return Runtime.Collection.from([t,Runtime.rtl.get(ctx, res, 1)]);
			}
			else if (attr.value.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_JSON)
			{
				var res = t.expression.constructor.Expression(ctx, t, attr.value.value);
				t = Runtime.rtl.get(ctx, res, 0);
				var value = Runtime.rtl.get(ctx, res, 1);
				value = "static::json_encode($ctx, " + Runtime.rtl.toStr(value) + Runtime.rtl.toStr(")");
				return Runtime.Collection.from([t,value]);
			}
		}
		var res = t.expression.constructor.Expression(ctx, t, attr.value);
		t = Runtime.rtl.get(ctx, res, 0);
		var value = Runtime.rtl.get(ctx, res, 1);
		value = t.o(ctx, value, Runtime.rtl.get(ctx, res, 0).opcode_level, 13);
		return Runtime.Collection.from([t,value]);
	},
	/**
	 * Translator html template
	 */
	OpHtmlAttrs: function(ctx, t, attrs)
	{
		var attr_class = new Runtime.Vector(ctx);
		var attr_s = "";
		var attr_key_value = "";
		var has_attr_key = false;
		var res_attrs = attrs.map(ctx, (ctx, attr) => 
		{
			if (attr.is_spread)
			{
				return "";
			}
			var attr_key = attr.key;
			var attr_value = "";
			/*
				if (attr_key == "@class")
				{
					list res = static::OpHtmlAttr(t, attr); t = res[0]; attr_value = res[1];
					attr_class.push( "static::getCssName($ctx, " ~ attr_value ~ ")" );
					
					if (not has_attr_key and attr.value instanceof OpString)
					{
						var arr = rs::split(" ", attr.value.value);
						attr_key_value = t.expression::toString(arr[0]);
						has_attr_key = true;
					}
					
					return "";
				}
				*/
			if (attr_key == "class")
			{
				t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["opcode_level"]), 1000);
				var res = this.OpHtmlAttr(ctx, t, attr);
				t = Runtime.rtl.get(ctx, res, 0);
				attr_value = Runtime.rtl.get(ctx, res, 1);
				attr_class.push(ctx, attr_value);
				if (!has_attr_key && attr.value instanceof Bayrell.Lang.OpCodes.OpString)
				{
					var arr = Runtime.rs.split(ctx, " ", attr.value.value);
					attr_key_value = t.expression.constructor.toString(ctx, Runtime.rtl.get(ctx, arr, 0));
					has_attr_key = true;
				}
				return "";
			}
			else if (attr_key == "@key")
			{
				has_attr_key = true;
				var res = this.OpHtmlAttr(ctx, t, attr);
				t = Runtime.rtl.get(ctx, res, 0);
				attr_value = Runtime.rtl.get(ctx, res, 1);
				attr_key_value = attr_value;
				return "";
			}
			if (attr_key == "@bind" || attr_key == "@name")
			{
				attr_key = "value";
				var res = t.expression.constructor.Expression(ctx, t, attr.value);
				t = Runtime.rtl.get(ctx, res, 0);
				attr_value = "\\Runtime\\rtl::attr($ctx, $model, " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(", null)");
			}
			var ch = Runtime.rs.substr(ctx, attr_key, 0, 1);
			if (ch == "@")
			{
				return "";
			}
			if (attr_value == "")
			{
				var res = this.OpHtmlAttr(ctx, t, attr);
				t = Runtime.rtl.get(ctx, res, 0);
				attr_value = Runtime.rtl.get(ctx, res, 1);
			}
			return attr_key + Runtime.rtl.toStr("=\"'.static::escapeAttr($ctx, ") + Runtime.rtl.toStr(attr_value) + Runtime.rtl.toStr(").'\"");
		});
		res_attrs = res_attrs.filter(ctx, (ctx, s) => 
		{
			return s != "";
		});
		if (attr_class.count(ctx) > 0)
		{
			attr_class.push(ctx, "static::getCssHash($ctx)");
			/*attr_class.push( t.expression::toString("h-" ~ ParserBayHtml::getCssHash(t.current_class_full_name)) );*/
			res_attrs = res_attrs.pushIm(ctx, "class=" + Runtime.rtl.toStr("\"'.") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ".\" \".", attr_class)) + Runtime.rtl.toStr(".'\""));
		}
		if (res_attrs.count(ctx) > 0)
		{
			attr_s = " " + Runtime.rtl.toStr(Runtime.rs.join(ctx, " ", res_attrs));
		}
		/* Add spreads */
		for (var i = 0;i < attrs.count(ctx);i++)
		{
			var attr = Runtime.rtl.get(ctx, attrs, i);
			if (!attr.is_spread)
			{
				continue;
			}
			attr_s += Runtime.rtl.toStr(" ' . static::joinAttrs($ctx, $" + Runtime.rtl.toStr(attr.value.value) + Runtime.rtl.toStr(") . '"));
		}
		return Runtime.Collection.from([t,attr_s]);
	},
	/**
	 * Translator html template
	 */
	OpHtmlTag: function(ctx, t, op_code)
	{
		if (this.isComponent(ctx, op_code.tag_name))
		{
			return this.OpHtmlComponent(ctx, t, op_code);
		}
		/* Output attrs */
		var res = this.OpHtmlAttrs(ctx, t, op_code.attrs);
		t = Runtime.rtl.get(ctx, res, 0);
		var attr_s = Runtime.rtl.get(ctx, res, 1);
		var res = t.constructor.incSaveOpCode(ctx, t);
		t = Runtime.rtl.get(ctx, res, 0);
		var var_name = Runtime.rtl.get(ctx, res, 1);
		var content = "";
		if (op_code.tag_name != "")
		{
			content += Runtime.rtl.toStr(t.s(ctx, "/* Element '" + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr("' */")));
		}
		if (this.isSingleTag(ctx, op_code.tag_name))
		{
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = ['<") + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr(attr_s) + Runtime.rtl.toStr(" />'];")));
		}
		else
		{
			if (op_code.tag_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = ['<") + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr(attr_s) + Runtime.rtl.toStr(">'];")));
			}
			else
			{
				content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = [];")));
			}
			var flag_value = false;
			if (!flag_value)
			{
				var f = Runtime.rtl.method(ctx, this.getCurrentClassName(ctx), "OpHtmlItems");
				var res = t.constructor.saveOpCodeCall(ctx, t, f, Runtime.Collection.from([op_code.items,var_name]));
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			if (op_code.tag_name != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, "static::p(" + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", '</") + Runtime.rtl.toStr(op_code.tag_name) + Runtime.rtl.toStr(">');")));
			}
		}
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_name":var_name,"content":content}));
		t = Runtime.rtl.get(ctx, res, 0);
		return Runtime.Collection.from([t,var_name]);
	},
	/**
	 * Translator html items
	 */
	OpHtmlItems: function(ctx, t, op_code, var_name)
	{
		if (var_name == undefined) var_name = "";
		if (op_code == null || op_code.items.count(ctx) == 0)
		{
			return Runtime.Collection.from([t,""]);
		}
		var items_count = op_code.items.count(ctx);
		var content = "";
		if (var_name == "")
		{
			var res = t.constructor.incSaveOpCode(ctx, t);
			t = Runtime.rtl.get(ctx, res, 0);
			var var_name = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(t.s(ctx, var_name + Runtime.rtl.toStr(" = [];")));
		}
		var save_html_var_name = t.html_var_name;
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["html_var_name"]), var_name);
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var item = op_code.items.item(ctx, i);
			var item_value = "";
			var op_content = "";
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			if (item instanceof Bayrell.Lang.OpCodes.OpHtmlContent)
			{
				item_value = t.expression.constructor.toString(ctx, item.value);
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpHtmlTag)
			{
				var res = this.OpHtmlTag(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				item_value = Runtime.rtl.get(ctx, res, 1);
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpHtmlValue)
			{
				if (item.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_RAW)
				{
					var res = t.expression.constructor.Expression(ctx, t, item.value);
					t = Runtime.rtl.get(ctx, res, 0);
					item_value = Runtime.rtl.get(ctx, res, 1);
				}
				else if (item.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_HTML)
				{
					var res = t.expression.constructor.Expression(ctx, t, item.value);
					t = Runtime.rtl.get(ctx, res, 0);
					item_value = Runtime.rtl.get(ctx, res, 1);
					item_value = "static::toHtml($ctx, " + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr(")");
				}
				else if (item.kind == Bayrell.Lang.OpCodes.OpHtmlValue.KIND_JSON)
				{
					var res = t.expression.constructor.Expression(ctx, t, item.value);
					t = Runtime.rtl.get(ctx, res, 0);
					item_value = Runtime.rtl.get(ctx, res, 1);
					item_value = "static::json_encode($ctx, " + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr(")");
				}
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpAssign)
			{
				var res = t.operator.constructor.OpAssign(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpComment)
			{
				var res = t.operator.constructor.OpComment(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpFor)
			{
				var res = t.operator.constructor.OpFor(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpIf)
			{
				var res = t.operator.constructor.OpIf(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpWhile)
			{
				var res = t.operator.constructor.OpWhile(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				op_content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else
			{
				var res = t.expression.constructor.Expression(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				item_value = Runtime.rtl.get(ctx, res, 1);
				item_value = "static::escapeHtml($ctx, " + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr(")");
			}
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			if (op_content != "")
			{
				content += Runtime.rtl.toStr(op_content);
			}
			/* Restore save op codes */
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			if (item_value != "")
			{
				content += Runtime.rtl.toStr(t.s(ctx, "static::p(" + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(item_value) + Runtime.rtl.toStr(");")));
			}
		}
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["html_var_name"]), save_html_var_name);
		var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_name":var_name,"content":content}));
		t = Runtime.rtl.get(ctx, res, 0);
		return Runtime.Collection.from([t,"new \\Runtime\\RawString(" + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(")")]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangPHP";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHPHtml";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHPHtml",
			"name": "Bayrell.Lang.LangPHP.TranslatorPHPHtml",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangPHP.TranslatorPHPHtml);
window["Bayrell.Lang.LangPHP.TranslatorPHPHtml"] = Bayrell.Lang.LangPHP.TranslatorPHPHtml;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangPHP.TranslatorPHPHtml;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangPHP == 'undefined') Bayrell.Lang.LangPHP = {};
Bayrell.Lang.LangPHP.TranslatorPHPOperator = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPOperator.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangPHP.TranslatorPHPOperator)
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
		return "Bayrell.Lang.LangPHP.TranslatorPHPOperator";
	},
});
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPOperator,
{
	/**
	 * OpAssign
	 */
	OpAssignStruct: function(ctx, t, op_code, pos)
	{
		if (pos == undefined) pos = 0;
		var content = "";
		var var_name = op_code.var_name;
		var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
		t = Runtime.rtl.get(ctx, res, 0);
		var expr = Runtime.rtl.get(ctx, res, 1);
		var names = op_code.names.map(ctx, (ctx, item) => 
		{
			if (item instanceof Bayrell.Lang.OpCodes.BaseOpCode)
			{
				var res = t.expression.constructor.Expression(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				return Runtime.rtl.get(ctx, res, 1);
			}
			return t.expression.constructor.toString(ctx, item);
		});
		content = "\\Runtime\\rtl::setAttr($ctx, $" + Runtime.rtl.toStr(var_name) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", names)) + Runtime.rtl.toStr("], ") + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(")");
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpAssign
	 */
	OpAssign: function(ctx, t, op_code, flag_indent)
	{
		if (flag_indent == undefined) flag_indent = true;
		var content = "";
		if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_ASSIGN || op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
		{
			for (var i = 0;i < op_code.values.count(ctx);i++)
			{
				var item = op_code.values.item(ctx, i);
				var index_s = "";
				var s = "";
				var op = item.op;
				if (op == "")
				{
					op = "=";
				}
				if (item.expression == null)
				{
					continue;
				}
				/* Expression */
				var item_expression = "";
				var res = t.expression.constructor.Expression(ctx, t, item.expression);
				t = Runtime.rtl.get(ctx, res, 0);
				if (op == "~=")
				{
					item_expression = t.expression.constructor.rtlToStr(ctx, t, Runtime.rtl.get(ctx, res, 1));
				}
				else
				{
					item_expression = Runtime.rtl.get(ctx, res, 1);
				}
				if (item.op_code instanceof Bayrell.Lang.OpCodes.OpAttr)
				{
					var items = new Runtime.Vector(ctx);
					var items2 = new Runtime.Vector(ctx);
					var op_code_next = item.op_code;
					while (op_code_next instanceof Bayrell.Lang.OpCodes.OpAttr)
					{
						items.push(ctx, op_code_next);
						op_code_next = op_code_next.obj;
					}
					items = items.reverseIm(ctx);
					var res = t.expression.constructor.OpIdentifier(ctx, t, op_code_next);
					t = Runtime.rtl.get(ctx, res, 0);
					var obj_s = Runtime.rtl.get(ctx, res, 1);
					for (var j = 0;j < items.count(ctx);j++)
					{
						var item = Runtime.rtl.get(ctx, items, j);
						if (item.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_ATTR)
						{
							obj_s += Runtime.rtl.toStr("->" + Runtime.rtl.toStr(item.value.value));
							items2.push(ctx, t.expression.constructor.toString(ctx, item.value.value));
						}
						else if (item.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC)
						{
							var res = t.expression.constructor.Expression(ctx, t, item.value);
							t = Runtime.rtl.get(ctx, res, 0);
							obj_s += Runtime.rtl.toStr("[" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr("]"));
							items2.push(ctx, Runtime.rtl.get(ctx, res, 1));
						}
						else if (item.kind == Bayrell.Lang.OpCodes.OpAttr.KIND_DYNAMIC_ATTRS)
						{
							if (item.attrs != null)
							{
								for (var j = item.attrs.count(ctx) - 1;j >= 0;j--)
								{
									var res = t.expression.constructor.Expression(ctx, t, Runtime.rtl.get(ctx, item.attrs, j));
									t = Runtime.rtl.get(ctx, res, 0);
									obj_s += Runtime.rtl.toStr("[" + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr("]"));
									items2.push(ctx, Runtime.rtl.get(ctx, res, 1));
								}
							}
						}
					}
					if (op == "~=" || op == "+=" || op == "-=")
					{
						var op2 = "+";
						if (op == "~=" || op == "+=")
						{
							op2 = "+";
						}
						else if (op == "-=")
						{
							op2 = "-";
						}
						item_expression = "\\Runtime\\rtl\\attr($ctx, " + Runtime.rtl.toStr(obj_s) + Runtime.rtl.toStr(", [") + Runtime.rtl.toStr(Runtime.rs.join(ctx, ", ", items2)) + Runtime.rtl.toStr("]) ") + Runtime.rtl.toStr(op2) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(item_expression);
					}
					index_s = obj_s + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(item_expression) + Runtime.rtl.toStr(";");
				}
				else
				{
					if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						s = "$" + Runtime.rtl.toStr(item.var_name);
					}
					else
					{
						var res = t.expression.constructor.OpIdentifier(ctx, t, item.op_code);
						t = Runtime.rtl.get(ctx, res, 0);
						s = Runtime.rtl.get(ctx, res, 1);
					}
					if (item_expression != "")
					{
					}
					if (op == "~=")
					{
						s += Runtime.rtl.toStr(" .= " + Runtime.rtl.toStr(item_expression));
					}
					else
					{
						s += Runtime.rtl.toStr(" " + Runtime.rtl.toStr(op) + Runtime.rtl.toStr(" ") + Runtime.rtl.toStr(item_expression));
					}
					index_s = s + Runtime.rtl.toStr(";");
				}
				if (item.var_name != "" && t.save_vars.indexOf(ctx, item.var_name) == -1)
				{
					t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_vars"]), t.save_vars.pushIm(ctx, item.var_name));
				}
				if (index_s != "")
				{
					content += Runtime.rtl.toStr((flag_indent) ? (t.s(ctx, index_s)) : (index_s));
				}
			}
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpAssign.KIND_STRUCT)
		{
			var s = "$" + Runtime.rtl.toStr(op_code.var_name) + Runtime.rtl.toStr(" = ");
			var res = this.OpAssignStruct(ctx, t, op_code, 0);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, s + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(";"));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDelete
	 */
	OpDelete: function(ctx, t, op_code)
	{
		var content = "";
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpFor
	 */
	OpFor: function(ctx, t, op_code)
	{
		var content = "";
		var s1 = "";
		var s2 = "";
		var s3 = "";
		if (op_code.expr1 instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			var res = this.OpAssign(ctx, t, op_code.expr1, false);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		else
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.expr1);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		var res = t.expression.constructor.Expression(ctx, t, op_code.expr2);
		t = Runtime.rtl.get(ctx, res, 0);
		s2 = Runtime.rtl.get(ctx, res, 1);
		var res = t.expression.constructor.Expression(ctx, t, op_code.expr3);
		t = Runtime.rtl.get(ctx, res, 0);
		s3 = Runtime.rtl.get(ctx, res, 1);
		content = t.s(ctx, "for (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr(";") + Runtime.rtl.toStr(s3) + Runtime.rtl.toStr(")"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpIf
	 */
	OpIf: function(ctx, t, op_code)
	{
		var content = "";
		var res = t.expression.constructor.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var s1 = Runtime.rtl.get(ctx, res, 1);
		content = t.s(ctx, "if (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(")"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.if_true);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		for (var i = 0;i < op_code.if_else.count(ctx);i++)
		{
			var if_else = op_code.if_else.item(ctx, i);
			var res = t.expression.constructor.Expression(ctx, t, if_else.condition);
			t = Runtime.rtl.get(ctx, res, 0);
			var s2 = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(t.s(ctx, "else if (" + Runtime.rtl.toStr(s2) + Runtime.rtl.toStr(")")));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			var res = this.Operators(ctx, t, if_else.if_true);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
		}
		if (op_code.if_false != null)
		{
			content += Runtime.rtl.toStr(t.s(ctx, "else"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			var res = this.Operators(ctx, t, op_code.if_false);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpReturn
	 */
	OpReturn: function(ctx, t, op_code)
	{
		var content = "";
		var s1 = "";
		if (op_code.expression)
		{
			var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			s1 = Runtime.rtl.get(ctx, res, 1);
		}
		if (t.current_function.flags != null && t.current_function.flags.isFlag(ctx, "memorize"))
		{
			var content = t.s(ctx, "$__memorize_value = " + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";"));
			content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.getModuleName(ctx, t, "Runtime.rtl") + Runtime.rtl.toStr("::_memorizeSave(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(t.current_function.name) + Runtime.rtl.toStr("\", func_get_args(), $__memorize_value);")));
			content += Runtime.rtl.toStr(t.s(ctx, "return $__memorize_value;"));
			return Runtime.Collection.from([t,content]);
		}
		content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";")));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpThrow
	 */
	OpThrow: function(ctx, t, op_code)
	{
		var res = t.expression.constructor.Expression(ctx, t, op_code.expression);
		t = Runtime.rtl.get(ctx, res, 0);
		var content = t.s(ctx, "throw " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(";"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpTryCatch
	 */
	OpTryCatch: function(ctx, t, op_code)
	{
		var content = "";
		content += Runtime.rtl.toStr(t.s(ctx, "try"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.op_try);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(t.s(ctx, Runtime.rtl.get(ctx, res, 1)));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		content += Runtime.rtl.toStr(t.s(ctx, "catch (\\Exception $_ex)"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var s = "";
			var pattern = "";
			var item = op_code.items.item(ctx, i);
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, item.pattern);
			t = Runtime.rtl.get(ctx, res, 0);
			pattern += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			if (pattern != "\\var")
			{
				s = "if ($_ex instanceof " + Runtime.rtl.toStr(pattern) + Runtime.rtl.toStr(")");
			}
			else
			{
				s = "if (true)";
			}
			s += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			s += Runtime.rtl.toStr((s != "") ? (t.s(ctx, "$" + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = $_ex;"))) : ("$" + Runtime.rtl.toStr(item.name) + Runtime.rtl.toStr(" = $_ex;")));
			var res = this.Operators(ctx, t, item.value);
			t = Runtime.rtl.get(ctx, res, 0);
			s += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			t = t.levelDec(ctx);
			s += Runtime.rtl.toStr(t.s(ctx, "}"));
			if (i != 0)
			{
				s = "else " + Runtime.rtl.toStr(s);
			}
			content += Runtime.rtl.toStr(t.s(ctx, s));
		}
		content += Runtime.rtl.toStr(t.s(ctx, "else"));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "throw $_ex;"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpWhile
	 */
	OpWhile: function(ctx, t, op_code)
	{
		var content = "";
		var res = t.expression.constructor.Expression(ctx, t, op_code.condition);
		t = Runtime.rtl.get(ctx, res, 0);
		var s1 = Runtime.rtl.get(ctx, res, 1);
		content += Runtime.rtl.toStr(t.s(ctx, "while (" + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(")")));
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		var res = this.Operators(ctx, t, op_code.value);
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpPreprocessorIfCode
	 */
	OpPreprocessorIfCode: function(ctx, t, op_code)
	{
		var content = "";
		if (t.preprocessor_flags.has(ctx, op_code.condition.value))
		{
			content = Runtime.rs.trim(ctx, op_code.content);
		}
		return Runtime.Collection.from([t,t.s(ctx, content)]);
	},
	/**
	 * OpPreprocessorIfDef
	 */
	OpPreprocessorIfDef: function(ctx, t, op_code, kind)
	{
		if (!t.preprocessor_flags.has(ctx, op_code.condition.value))
		{
			return Runtime.Collection.from([t,""]);
		}
		if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR)
		{
			return this.Operators(ctx, t, op_code.items);
		}
		else if (kind == Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_EXPRESSION)
		{
			return t.expression.constructor.Expression(ctx, t, op_code.items);
		}
		var content = "";
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var item = op_code.items.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpComment)
			{
				var res = t.operator.constructor.OpComment(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
			{
				var res = t.program.constructor.OpDeclareFunction(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComment
	 */
	OpComment: function(ctx, t, op_code)
	{
		var content = t.s(ctx, "/*" + Runtime.rtl.toStr(op_code.value) + Runtime.rtl.toStr("*/"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComments
	 */
	OpComments: function(ctx, t, comments)
	{
		var content = "";
		for (var i = 0;i < comments.count(ctx);i++)
		{
			var res = this.OpComment(ctx, t, comments.item(ctx, i));
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpComments
	 */
	AddComments: function(ctx, t, comments, content)
	{
		if (comments && comments.count(ctx) > 0)
		{
			var res = this.OpComments(ctx, t, comments);
			var s = Runtime.rtl.get(ctx, res, 1);
			if (s != "")
			{
				content = s + Runtime.rtl.toStr(content);
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Operator
	 */
	Operator: function(ctx, t, op_code)
	{
		var content = "";
		/* Save op codes */
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		if (op_code instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			var res = this.OpAssign(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var content = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content = save + Runtime.rtl.toStr(content);
			}
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			return Runtime.Collection.from([t,content]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpAssignStruct)
		{
			var res = this.OpAssignStruct(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			var s1 = Runtime.rtl.get(ctx, res, 1);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content = save;
			}
			content += Runtime.rtl.toStr(t.s(ctx, "$" + Runtime.rtl.toStr(op_code.var_name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s1) + Runtime.rtl.toStr(";")));
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			return Runtime.Collection.from([t,content]);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpBreak)
		{
			content = t.s(ctx, "break;");
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			var res = t.expression.constructor.OpCall(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpContinue)
		{
			content = t.s(ctx, "continue;");
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDelete)
		{
			var res = this.OpDelete(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpFor)
		{
			var res = this.OpFor(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpIf)
		{
			var res = this.OpIf(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			var res = t.expression.constructor.OpPipe(ctx, t, op_code, false);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpReturn)
		{
			var res = this.OpReturn(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpThrow)
		{
			var res = this.OpThrow(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpTryCatch)
		{
			var res = this.OpTryCatch(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpWhile)
		{
			var res = this.OpWhile(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpInc)
		{
			var res = t.expression.constructor.OpInc(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = t.s(ctx, Runtime.rtl.get(ctx, res, 1) + Runtime.rtl.toStr(";"));
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
		{
			var res = this.OpPreprocessorIfCode(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			var res = this.OpPreprocessorIfDef(ctx, t, op_code, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_OPERATOR);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
		{
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var res = this.OpPreprocessorIfCode(ctx, t, op_code.items.item(ctx, i));
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpComment)
		{
			var res = this.OpComment(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpSafe)
		{
			var res = this.Operators(ctx, t, op_code.items);
			t = Runtime.rtl.get(ctx, res, 0);
			content = Runtime.rtl.get(ctx, res, 1);
		}
		/* Output save op code */
		var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
		if (save != "")
		{
			content = save + Runtime.rtl.toStr(content);
		}
		/* Restore save op codes */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Operators
	 */
	Operators: function(ctx, t, op_code)
	{
		var content = "";
		var f1 = (ctx, op_code) => 
		{
			return op_code instanceof Bayrell.Lang.OpCodes.OpBreak || op_code instanceof Bayrell.Lang.OpCodes.OpCall || op_code instanceof Bayrell.Lang.OpCodes.OpContinue || op_code instanceof Bayrell.Lang.OpCodes.OpReturn || op_code instanceof Bayrell.Lang.OpCodes.OpThrow;
		};
		if (op_code instanceof Bayrell.Lang.OpCodes.OpItems)
		{
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var res = this.Operator(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpHtmlItems)
		{
			var save_html_var_name = t.html_var_name;
			var save_is_html = t.is_html;
			/* Save op codes */
			var save_op_codes = t.save_op_codes;
			var save_op_code_inc = t.save_op_code_inc;
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), true);
			var res = t.html.constructor.OpHtmlItems(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t, save_op_codes.count(ctx));
			if (save != "")
			{
				content = save;
			}
			/* Output content */
			content += Runtime.rtl.toStr(t.s(ctx, "static::p(" + Runtime.rtl.toStr(save_html_var_name) + Runtime.rtl.toStr(", ") + Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1)) + Runtime.rtl.toStr(");")));
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_codes"]), save_op_codes);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["save_op_code_inc"]), save_op_code_inc);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_html"]), save_is_html);
		}
		else
		{
			var res = this.Operator(ctx, t, op_code);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction Arguments
	 */
	OpDeclareFunctionArgs: function(ctx, t, f)
	{
		var content = "";
		if (f.args != null)
		{
			var flag = false;
			if (f.is_context)
			{
				content += Runtime.rtl.toStr("$ctx");
				flag = true;
			}
			for (var i = 0;i < f.args.count(ctx, i);i++)
			{
				var arg = f.args.item(ctx, i);
				var name = arg.name;
				var expr = "";
				if (arg.expression != null)
				{
					var res = t.expression.constructor.Expression(ctx, t, arg.expression);
					t = Runtime.rtl.get(ctx, res, 0);
					expr = Runtime.rtl.get(ctx, res, 1);
				}
				content += Runtime.rtl.toStr(((flag) ? (", ") : ("")) + Runtime.rtl.toStr("$") + Runtime.rtl.toStr(name) + Runtime.rtl.toStr(((expr != "") ? ("=" + Runtime.rtl.toStr(expr)) : (""))));
				flag = true;
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareFunction Body
	 */
	OpDeclareFunctionBody: function(ctx, t, f)
	{
		var save_t = t;
		var content = "";
		t = t.levelInc(ctx);
		if (f.items)
		{
			var res = t.operator.constructor.Operators(ctx, t, f.items);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		else if (f.expression)
		{
			/* Clear save op codes */
			t = t.constructor.clearSaveOpCode(ctx, t);
			var res = t.expression.constructor.Expression(ctx, t, f.expression);
			t = Runtime.rtl.get(ctx, res, 0);
			var expr = Runtime.rtl.get(ctx, res, 1);
			var s = "";
			if (f.flags != null && f.flags.isFlag(ctx, "memorize"))
			{
				s = "$__memorize_value = " + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(";");
				s += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.getModuleName(ctx, t, "Runtime.rtl") + Runtime.rtl.toStr("::_memorizeSave(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(f.name) + Runtime.rtl.toStr("\", func_get_args(), $__memorize_value);")));
				s += Runtime.rtl.toStr(t.s(ctx, "return $__memorize_value;"));
			}
			else
			{
				s = t.s(ctx, "return " + Runtime.rtl.toStr(expr) + Runtime.rtl.toStr(";"));
			}
			/* Output save op code */
			var save = t.constructor.outputSaveOpCode(ctx, t);
			if (save != "")
			{
				content += Runtime.rtl.toStr(save);
			}
			content += Runtime.rtl.toStr(s);
		}
		if (f.flags != null && f.flags.isFlag(ctx, "memorize"))
		{
			var s = "";
			s += Runtime.rtl.toStr(t.s(ctx, "$__memorize_value = " + Runtime.rtl.toStr(t.expression.constructor.getModuleName(ctx, t, "Runtime.rtl")) + Runtime.rtl.toStr("::_memorizeValue(\"") + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(f.name) + Runtime.rtl.toStr("\", func_get_args());")));
			s += Runtime.rtl.toStr(t.s(ctx, "if ($__memorize_value != " + Runtime.rtl.toStr(t.expression.constructor.getModuleName(ctx, t, "Runtime.rtl")) + Runtime.rtl.toStr("::$_memorize_not_found) return $__memorize_value;")));
			content = s + Runtime.rtl.toStr(content);
		}
		t = t.levelDec(ctx);
		content = t.s(ctx, "{") + Runtime.rtl.toStr(content);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([save_t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangPHP";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHPOperator";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHPOperator",
			"name": "Bayrell.Lang.LangPHP.TranslatorPHPOperator",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangPHP.TranslatorPHPOperator);
window["Bayrell.Lang.LangPHP.TranslatorPHPOperator"] = Bayrell.Lang.LangPHP.TranslatorPHPOperator;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangPHP.TranslatorPHPOperator;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangPHP == 'undefined') Bayrell.Lang.LangPHP = {};
Bayrell.Lang.LangPHP.TranslatorPHPProgram = function(ctx)
{
};
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPProgram.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangPHP.TranslatorPHPProgram)
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
		return "Bayrell.Lang.LangPHP.TranslatorPHPProgram";
	},
});
Object.assign(Bayrell.Lang.LangPHP.TranslatorPHPProgram,
{
	/**
	 * OpNamespace
	 */
	OpNamespace: function(ctx, t, op_code)
	{
		var arr = Runtime.rs.split(ctx, "\\.", op_code.name);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_namespace_name"]), op_code.name);
		return Runtime.Collection.from([t,t.s(ctx, "namespace " + Runtime.rtl.toStr(Runtime.rs.join(ctx, "\\", arr)) + Runtime.rtl.toStr(";"))]);
	},
	/**
	 * OpDeclareFunction
	 */
	OpDeclareFunction: function(ctx, t, op_code)
	{
		if (op_code.isFlag(ctx, "declare"))
		{
			return Runtime.Collection.from([t,""]);
		}
		var content = "";
		/* Set current function */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code);
		var s1 = "";
		var s2 = "";
		if (op_code.isStatic(ctx))
		{
			s1 += Runtime.rtl.toStr("static ");
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), true);
		}
		else
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["is_static_function"]), false);
		}
		var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code);
		var args = Runtime.rtl.get(ctx, res, 1);
		s1 += Runtime.rtl.toStr("function " + Runtime.rtl.toStr(op_code.name) + Runtime.rtl.toStr("(") + Runtime.rtl.toStr(args) + Runtime.rtl.toStr(")"));
		if (t.current_class.kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			var res = t.operator.constructor.OpDeclareFunctionBody(ctx, t, op_code);
			s2 += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		else
		{
			s2 += Runtime.rtl.toStr(";");
		}
		s1 = t.s(ctx, s1);
		/* Function comments */
		var res = t.operator.constructor.AddComments(ctx, t, op_code.comments, s1 + Runtime.rtl.toStr(s2));
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpFunctionAnnotations
	 */
	OpFunctionAnnotations: function(ctx, t, f)
	{
		var content = "";
		if (f.flags.isFlag(ctx, "declare"))
		{
			return Runtime.Collection.from([t,content]);
		}
		if (f.annotations.count(ctx) == 0)
		{
			return Runtime.Collection.from([t,content]);
		}
		content += Runtime.rtl.toStr(t.s(ctx, "if ($field_name == " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, f.name)) + Runtime.rtl.toStr(")")));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "return new \\Runtime\\IntrospectionInfo($ctx, ["));
		t = t.levelInc(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "\"kind\"=>\\Runtime\\IntrospectionInfo::ITEM_METHOD,"));
		content += Runtime.rtl.toStr(t.s(ctx, "\"class_name\"=>" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
		content += Runtime.rtl.toStr(t.s(ctx, "\"name\"=>" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, f.name)) + Runtime.rtl.toStr(",")));
		content += Runtime.rtl.toStr(t.s(ctx, "\"annotations\"=>\\Runtime\\Collection::from(["));
		t = t.levelInc(ctx);
		for (var j = 0;j < f.annotations.count(ctx);j++)
		{
			var annotation = f.annotations.item(ctx, j);
			var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
			t = Runtime.rtl.get(ctx, res, 0);
			var name = Runtime.rtl.get(ctx, res, 1);
			var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
			t = Runtime.rtl.get(ctx, res, 0);
			var params = Runtime.rtl.get(ctx, res, 1);
			content += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("($ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
		}
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "]),"));
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "]);"));
		t = t.levelDec(ctx);
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassBodyItemMethodsList
	 */
	OpClassBodyItemMethodsList: function(ctx, t, item)
	{
		var content = "";
		if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			if (t.preprocessor_flags.has(ctx, item.condition.value))
			{
				for (var i = 0;i < item.items.count(ctx);i++)
				{
					var op_code = item.items.item(ctx, i);
					var res = this.OpClassBodyItemMethodsList(ctx, t, op_code);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
		}
		else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.toString(ctx, item.name) + Runtime.rtl.toStr(",")));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpClassBodyItemAnnotations
	 */
	OpClassBodyItemAnnotations: function(ctx, t, item)
	{
		var content = "";
		if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			if (t.preprocessor_flags.has(ctx, item.condition.value))
			{
				for (var i = 0;i < item.items.count(ctx);i++)
				{
					var op_code = item.items.item(ctx, i);
					var res = this.OpClassBodyItemAnnotations(ctx, t, op_code);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
		}
		else if (item instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			var res = this.OpFunctionAnnotations(ctx, t, item);
			t = Runtime.rtl.get(ctx, res, 0);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClassConstructor: function(ctx, t, op_code)
	{
		if (op_code.fn_create == null)
		{
			return Runtime.Collection.from([t,""]);
		}
		var open = "";
		var content = "";
		var save_t = t;
		/* Set function name */
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_function"]), op_code.fn_create);
		/* Clear save op codes */
		t = t.constructor.clearSaveOpCode(ctx, t);
		open += Runtime.rtl.toStr(t.s(ctx, "function __construct("));
		var res = t.operator.constructor.OpDeclareFunctionArgs(ctx, t, op_code.fn_create);
		t = Runtime.rtl.get(ctx, res, 0);
		open += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		open += Runtime.rtl.toStr(")");
		open += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Function body */
		var res = t.operator.constructor.Operators(ctx, t, (op_code.fn_create.expression) ? (op_code.fn_create.expression) : (op_code.fn_create.items));
		t = Runtime.rtl.get(ctx, res, 0);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Constructor end */
		var save = t.constructor.outputSaveOpCode(ctx, t);
		if (save != "")
		{
			content = open + Runtime.rtl.toStr(t.s(ctx, save + Runtime.rtl.toStr(content)));
		}
		else
		{
			content = open + Runtime.rtl.toStr(content);
		}
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([save_t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClassBody: function(ctx, t, op_code)
	{
		var content = "";
		var class_kind = op_code.kind;
		var save_op_codes = t.save_op_codes;
		var save_op_code_inc = t.save_op_code_inc;
		t = t.constructor.clearSaveOpCode(ctx, t);
		content += Runtime.rtl.toStr(t.s(ctx, "{"));
		t = t.levelInc(ctx);
		/* Static variables */
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE && op_code.vars != null)
		{
			for (var i = 0;i < op_code.vars.count(ctx);i++)
			{
				var variable = op_code.vars.item(ctx, i);
				if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
				{
					continue;
				}
				var is_static = variable.flags.isFlag(ctx, "static");
				var is_const = variable.flags.isFlag(ctx, "const");
				for (var j = 0;j < variable.values.count(ctx);j++)
				{
					var value = variable.values.item(ctx, j);
					var res = t.expression.constructor.Expression(ctx, t, value.expression);
					var s = (value.expression != null) ? (Runtime.rtl.get(ctx, res, 1)) : ("null");
					if (is_static && is_const)
					{
						content += Runtime.rtl.toStr(t.s(ctx, "const " + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr("=") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";")));
					}
					else if (is_static)
					{
						content += Runtime.rtl.toStr(t.s(ctx, "static $" + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr("=") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";")));
					}
					else if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
					{
						content += Runtime.rtl.toStr(t.s(ctx, "public $__" + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
					}
					else
					{
						content += Runtime.rtl.toStr(t.s(ctx, "public $" + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
					}
				}
			}
		}
		/* Constructor */
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			var res = this.OpDeclareClassConstructor(ctx, t, op_code);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		}
		/* Functions */
		if (op_code.functions != null)
		{
			for (var i = 0;i < op_code.functions.count(ctx);i++)
			{
				var f = op_code.functions.item(ctx, i);
				var res = this.OpDeclareFunction(ctx, t, f);
				t = Runtime.rtl.get(ctx, res, 0);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
		}
		/* Class items */
		for (var i = 0;i < op_code.items.count(ctx);i++)
		{
			var item = op_code.items.item(ctx, i);
			if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
			{
				var res = t.operator.constructor.OpPreprocessorIfCode(ctx, t, item);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
			{
				var res = t.operator.constructor.OpPreprocessorIfDef(ctx, t, item, Bayrell.Lang.OpCodes.OpPreprocessorIfDef.KIND_CLASS_BODY);
				content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			}
			else if (item instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
			{
				for (var j = 0;j < item.items.count(ctx);j++)
				{
					var res = t.operator.constructor.OpPreprocessorIfCode(ctx, t, item.items.item(ctx, j));
					var s = Runtime.rtl.get(ctx, res, 1);
					if (s == "")
					{
						continue;
					}
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
		}
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			content += Runtime.rtl.toStr(t.s(ctx, "/* ======================= Class Init Functions ======================= */"));
		}
		/* Init variables */
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE && op_code.vars != null)
		{
			var vars = op_code.vars.filter(ctx, (ctx, variable) => 
			{
				return !variable.flags.isFlag(ctx, "static");
			});
			if (t.current_class_full_name != "Runtime.BaseObject" && vars.count(ctx) > 0)
			{
				content += Runtime.rtl.toStr(t.s(ctx, "function _init($ctx)"));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				if (t.current_class_extends_name != "")
				{
					content += Runtime.rtl.toStr(t.s(ctx, "parent::_init($ctx);"));
				}
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var is_static = variable.flags.isFlag(ctx, "static");
					if (is_static)
					{
						continue;
					}
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					var prefix = "";
					if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
					{
						prefix = "__";
					}
					else if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_CLASS)
					{
						prefix = "";
					}
					for (var j = 0;j < variable.values.count(ctx);j++)
					{
						var value = variable.values.item(ctx, j);
						var res = t.expression.constructor.Expression(ctx, t, value.expression);
						var s = (value.expression != null) ? (Runtime.rtl.get(ctx, res, 1)) : ("null");
						content += Runtime.rtl.toStr(t.s(ctx, "$this->" + Runtime.rtl.toStr(prefix) + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = ") + Runtime.rtl.toStr(s) + Runtime.rtl.toStr(";")));
					}
				}
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "}"));
			}
			/* Struct */
			if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
			{
				/* Assign Object */
				content += Runtime.rtl.toStr(t.s(ctx, "function assignObject($ctx,$o)"));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "if ($o instanceof \\" + Runtime.rtl.toStr(Runtime.rs.replace(ctx, "\\.", "\\", t.current_class_full_name)) + Runtime.rtl.toStr(")")));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					var is_const = variable.flags.isFlag(ctx, "const");
					var is_static = variable.flags.isFlag(ctx, "static");
					if (is_const || is_static)
					{
						continue;
					}
					for (var j = 0;j < variable.values.count(ctx);j++)
					{
						var value = variable.values.item(ctx, j);
						content += Runtime.rtl.toStr(t.s(ctx, "$this->__" + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = $o->__") + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
					}
				}
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "}"));
				content += Runtime.rtl.toStr(t.s(ctx, "parent::assignObject($ctx,$o);"));
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "}"));
				/* Assign Value */
				content += Runtime.rtl.toStr(t.s(ctx, "function assignValue($ctx,$k,$v)"));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				var flag = false;
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					var is_const = variable.flags.isFlag(ctx, "const");
					var is_static = variable.flags.isFlag(ctx, "static");
					if (is_const || is_static)
					{
						continue;
					}
					for (var j = 0;j < variable.values.count(ctx);j++)
					{
						var value = variable.values.item(ctx, j);
						if (t.flag_struct_check_types)
						{
							content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if ($k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr("$this->__") + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = Runtime.rtl.to($v, null, ") + Runtime.rtl.toStr(this.toPattern(ctx, t, variable.pattern)) + Runtime.rtl.toStr(");")));
						}
						else
						{
							content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if ($k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")") + Runtime.rtl.toStr("$this->__") + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(" = $v;")));
						}
						flag = true;
					}
				}
				content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("parent::assignValue($ctx,$k,$v);")));
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "}"));
				/* Take Value */
				content += Runtime.rtl.toStr(t.s(ctx, "function takeValue($ctx,$k,$d=null)"));
				content += Runtime.rtl.toStr(t.s(ctx, "{"));
				t = t.levelInc(ctx);
				var flag = false;
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					var is_const = variable.flags.isFlag(ctx, "const");
					var is_static = variable.flags.isFlag(ctx, "static");
					if (is_const || is_static)
					{
						continue;
					}
					for (var j = 0;j < variable.values.count(ctx);j++)
					{
						var value = variable.values.item(ctx, j);
						content += Runtime.rtl.toStr(t.s(ctx, ((flag) ? ("else ") : ("")) + Runtime.rtl.toStr("if ($k == ") + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, value.var_name)) + Runtime.rtl.toStr(")return $this->__") + Runtime.rtl.toStr(value.var_name) + Runtime.rtl.toStr(";")));
						flag = true;
					}
				}
				content += Runtime.rtl.toStr(t.s(ctx, "return parent::takeValue($ctx,$k,$d);"));
				t = t.levelDec(ctx);
				content += Runtime.rtl.toStr(t.s(ctx, "}"));
			}
		}
		if (class_kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			/* Get class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "function getClassName()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get current namespace function */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getCurrentNamespace()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_namespace_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get current class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getCurrentClassName()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get parent class name function */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getParentClassName()"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.expression.constructor.findModuleName(ctx, t, t.current_class_extends_name))) + Runtime.rtl.toStr(";")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Class info */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getClassInfo($ctx)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			t = t.constructor.clearSaveOpCode(ctx, t);
			content += Runtime.rtl.toStr(t.s(ctx, "return new \\Runtime\\IntrospectionInfo($ctx, ["));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "\"kind\"=>\\Runtime\\IntrospectionInfo::ITEM_CLASS,"));
			content += Runtime.rtl.toStr(t.s(ctx, "\"class_name\"=>" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
			content += Runtime.rtl.toStr(t.s(ctx, "\"name\"=>" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
			content += Runtime.rtl.toStr(t.s(ctx, "\"annotations\"=>\\Runtime\\Collection::from(["));
			t = t.levelInc(ctx);
			for (var j = 0;j < op_code.annotations.count(ctx);j++)
			{
				var annotation = op_code.annotations.item(ctx, j);
				var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
				t = Runtime.rtl.get(ctx, res, 0);
				var name = Runtime.rtl.get(ctx, res, 1);
				var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
				t = Runtime.rtl.get(ctx, res, 0);
				var params = Runtime.rtl.get(ctx, res, 1);
				content += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("($ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "]),"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "]);"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get fields list of the function */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getFieldsList($ctx,$f)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "$a = [];"));
			if (op_code.vars != null)
			{
				var vars = new Runtime.Map(ctx);
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var is_static = variable.flags.isFlag(ctx, "static");
					var is_serializable = variable.flags.isFlag(ctx, "serializable");
					var is_assignable = variable.flags.isFlag(ctx, "assignable");
					var has_annotation = variable.annotations != null && variable.annotations.count(ctx) > 0;
					if (is_static)
					{
						continue;
					}
					if (variable.kind != Bayrell.Lang.OpCodes.OpAssign.KIND_DECLARE)
					{
						continue;
					}
					if (class_kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
					{
						is_serializable = true;
						is_assignable = true;
					}
					if (is_serializable)
					{
						is_assignable = true;
					}
					var flag = 0;
					if (is_serializable)
					{
						flag = flag | 1;
					}
					if (is_assignable)
					{
						flag = flag | 2;
					}
					if (has_annotation)
					{
						flag = flag | 4;
					}
					if (flag != 0)
					{
						if (!vars.has(ctx, flag))
						{
							vars.set(ctx, flag, new Runtime.Vector(ctx));
						}
						var v = vars.item(ctx, flag);
						for (var j = 0;j < variable.values.count(ctx);j++)
						{
							var value = variable.values.item(ctx, j);
							v.push(ctx, value.var_name);
						}
					}
				}
				vars.each(ctx, (ctx, v, flag) => 
				{
					content += Runtime.rtl.toStr(t.s(ctx, "if (($f|" + Runtime.rtl.toStr(flag) + Runtime.rtl.toStr(")==") + Runtime.rtl.toStr(flag) + Runtime.rtl.toStr(")")));
					content += Runtime.rtl.toStr(t.s(ctx, "{"));
					t = t.levelInc(ctx);
					v.each(ctx, (ctx, varname) => 
					{
						content += Runtime.rtl.toStr(t.s(ctx, "$a[] = " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, varname)) + Runtime.rtl.toStr(";")));
					});
					t = t.levelDec(ctx);
					content += Runtime.rtl.toStr(t.s(ctx, "}"));
				});
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.getModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr("::from($a);")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get field info by name */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getFieldInfoByName($ctx,$field_name)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			if (op_code.vars != null)
			{
				for (var i = 0;i < op_code.vars.count(ctx);i++)
				{
					var variable = op_code.vars.item(ctx, i);
					var v = variable.values.map(ctx, (ctx, value) => 
					{
						return value.var_name;
					});
					v = v.map(ctx, (ctx, var_name) => 
					{
						return "$field_name == " + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, var_name));
					});
					t = t.constructor.clearSaveOpCode(ctx, t);
					content += Runtime.rtl.toStr(t.s(ctx, "if (" + Runtime.rtl.toStr(Runtime.rs.join(ctx, " or ", v)) + Runtime.rtl.toStr(") ") + Runtime.rtl.toStr("return new \\Runtime\\IntrospectionInfo($ctx, [")));
					t = t.levelInc(ctx);
					content += Runtime.rtl.toStr(t.s(ctx, "\"kind\"=>\\Runtime\\IntrospectionInfo::ITEM_FIELD,"));
					content += Runtime.rtl.toStr(t.s(ctx, "\"class_name\"=>" + Runtime.rtl.toStr(t.expression.constructor.toString(ctx, t.current_class_full_name)) + Runtime.rtl.toStr(",")));
					content += Runtime.rtl.toStr(t.s(ctx, "\"name\"=> $field_name,"));
					content += Runtime.rtl.toStr(t.s(ctx, "\"annotations\"=>\\Runtime\\Collection::from(["));
					t = t.levelInc(ctx);
					for (var j = 0;j < variable.annotations.count(ctx);j++)
					{
						var annotation = variable.annotations.item(ctx, j);
						var res = t.expression.constructor.OpTypeIdentifier(ctx, t, annotation.name);
						t = Runtime.rtl.get(ctx, res, 0);
						var name = Runtime.rtl.get(ctx, res, 1);
						var res = t.expression.constructor.OpDict(ctx, t, annotation.params, true);
						t = Runtime.rtl.get(ctx, res, 0);
						var params = Runtime.rtl.get(ctx, res, 1);
						content += Runtime.rtl.toStr(t.s(ctx, "new " + Runtime.rtl.toStr(name) + Runtime.rtl.toStr("($ctx, ") + Runtime.rtl.toStr(params) + Runtime.rtl.toStr("),")));
					}
					t = t.levelDec(ctx);
					content += Runtime.rtl.toStr(t.s(ctx, "]),"));
					t = t.levelDec(ctx);
					content += Runtime.rtl.toStr(t.s(ctx, "]);"));
				}
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return null;"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get methods list of the function */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getMethodsList($ctx)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "$a = ["));
			t = t.levelInc(ctx);
			if (op_code.functions != null)
			{
				for (var i = 0;i < op_code.functions.count(ctx);i++)
				{
					var f = op_code.functions.item(ctx, i);
					if (f.flags.isFlag(ctx, "declare"))
					{
						continue;
					}
					if (f.annotations.count(ctx) == 0)
					{
						continue;
					}
					content += Runtime.rtl.toStr(t.s(ctx, t.expression.constructor.toString(ctx, f.name) + Runtime.rtl.toStr(",")));
				}
			}
			if (op_code.items != null)
			{
				for (var i = 0;i < op_code.items.count(ctx);i++)
				{
					var item = op_code.items.item(ctx, i);
					var res = this.OpClassBodyItemMethodsList(ctx, t, item);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "];"));
			content += Runtime.rtl.toStr(t.s(ctx, "return " + Runtime.rtl.toStr(t.expression.constructor.getModuleName(ctx, t, "Runtime.Collection")) + Runtime.rtl.toStr("::from($a);")));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
			/* Get method info by name */
			content += Runtime.rtl.toStr(t.s(ctx, "static function getMethodInfoByName($ctx,$field_name)"));
			content += Runtime.rtl.toStr(t.s(ctx, "{"));
			t = t.levelInc(ctx);
			if (op_code.functions != null)
			{
				for (var i = 0;i < op_code.functions.count(ctx);i++)
				{
					var f = op_code.functions.item(ctx, i);
					var res = this.OpFunctionAnnotations(ctx, t, f);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			if (op_code.items != null)
			{
				for (var i = 0;i < op_code.items.count(ctx);i++)
				{
					var item = op_code.items.item(ctx, i);
					var res = this.OpClassBodyItemAnnotations(ctx, t, item);
					t = Runtime.rtl.get(ctx, res, 0);
					content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
				}
			}
			content += Runtime.rtl.toStr(t.s(ctx, "return null;"));
			t = t.levelDec(ctx);
			content += Runtime.rtl.toStr(t.s(ctx, "}"));
		}
		t = t.levelDec(ctx);
		content += Runtime.rtl.toStr(t.s(ctx, "}"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClassFooter
	 */
	OpDeclareClassFooter: function(ctx, t, op_code)
	{
		var content = "";
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClass
	 */
	OpDeclareClass: function(ctx, t, op_code)
	{
		if (op_code.is_declare)
		{
			return Runtime.Collection.from([t,""]);
		}
		var content = "";
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class"]), op_code);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_name"]), op_code.name);
		t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_full_name"]), t.current_namespace_name + Runtime.rtl.toStr(".") + Runtime.rtl.toStr(t.current_class_name));
		if (op_code.class_extends != null)
		{
			var extends_name = Runtime.rs.join(ctx, ".", op_code.class_extends.entity_name.names);
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), extends_name);
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), "Runtime.BaseStruct");
		}
		else if (op_code.kind == Bayrell.Lang.OpCodes.OpDeclareClass.KIND_STRUCT)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["current_class_extends_name"]), "");
		}
		if (op_code.kind != Bayrell.Lang.OpCodes.OpDeclareClass.KIND_INTERFACE)
		{
			if (op_code.class_extends != null)
			{
				content = "class " + Runtime.rtl.toStr(t.current_class_name) + Runtime.rtl.toStr(" extends ") + Runtime.rtl.toStr(t.expression.constructor.getModuleName(ctx, t, t.current_class_extends_name));
			}
			else
			{
				content = "class " + Runtime.rtl.toStr(t.current_class_name);
			}
		}
		else
		{
			content = "interface " + Runtime.rtl.toStr(t.current_class_name);
		}
		/* Add implements */
		if (op_code.class_implements != null && op_code.class_implements.count(ctx) > 0)
		{
			var arr = op_code.class_implements.map(ctx, (ctx, item) => 
			{
				return t.expression.constructor.getModuleNames(ctx, t, item.entity_name.names);
			});
			var s1 = Runtime.rs.join(ctx, ", ", arr);
			content += Runtime.rtl.toStr(" implements " + Runtime.rtl.toStr(s1));
		}
		/* Class body */
		var res = this.OpDeclareClassBody(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		/* Class comments */
		var res = t.operator.constructor.AddComments(ctx, t, op_code.comments, content);
		content = Runtime.rtl.get(ctx, res, 1);
		/* Class footer */
		var res = this.OpDeclareClassFooter(ctx, t, op_code);
		content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
		return Runtime.Collection.from([t,t.s(ctx, content)]);
	},
	/**
	 * Translate item
	 */
	translateItem: function(ctx, t, op_code)
	{
		if (op_code instanceof Bayrell.Lang.OpCodes.OpNamespace)
		{
			return this.OpNamespace(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpDeclareClass)
		{
			return this.OpDeclareClass(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpComment)
		{
			return t.operator.constructor.OpComment(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
		{
			return t.operator.constructor.OpPreprocessorIfCode(ctx, t, op_code);
		}
		else if (op_code instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
		{
			var content = "";
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var res = t.operator.constructor.OpPreprocessorIfCode(ctx, t, op_code.items.item(ctx, i));
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
			return Runtime.Collection.from([t,content]);
		}
		return Runtime.Collection.from([t,""]);
	},
	/**
	 * Translate program
	 */
	translateProgramHeader: function(ctx, t, op_code)
	{
		var content = "<?php";
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * Translate program
	 */
	translateProgram: function(ctx, t, op_code)
	{
		var content = "";
		if (op_code == null)
		{
			return Runtime.Collection.from([t,content]);
		}
		if (op_code.uses != null)
		{
			t = Runtime.rtl.setAttr(ctx, t, Runtime.Collection.from(["modules"]), op_code.uses);
		}
		if (op_code.items != null)
		{
			var res = this.translateProgramHeader(ctx, t, op_code);
			content += Runtime.rtl.toStr(Runtime.rtl.get(ctx, res, 1));
			for (var i = 0;i < op_code.items.count(ctx);i++)
			{
				var item = op_code.items.item(ctx, i);
				var res = this.translateItem(ctx, t, item);
				t = Runtime.rtl.get(ctx, res, 0);
				var s = Runtime.rtl.get(ctx, res, 1);
				if (s == "")
				{
					continue;
				}
				content += Runtime.rtl.toStr(s);
			}
		}
		return Runtime.Collection.from([t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangPHP";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangPHP.TranslatorPHPProgram";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangPHP.TranslatorPHPProgram",
			"name": "Bayrell.Lang.LangPHP.TranslatorPHPProgram",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangPHP.TranslatorPHPProgram);
window["Bayrell.Lang.LangPHP.TranslatorPHPProgram"] = Bayrell.Lang.LangPHP.TranslatorPHPProgram;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangPHP.TranslatorPHPProgram;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.BaseOpCode = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.OpCodes.BaseOpCode.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.OpCodes.BaseOpCode.prototype.constructor = Bayrell.Lang.OpCodes.BaseOpCode;
Object.assign(Bayrell.Lang.OpCodes.BaseOpCode.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.caret_start = null;
		this.caret_end = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.BaseOpCode)
		{
			this.caret_start = o.caret_start;
			this.caret_end = o.caret_end;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "caret_start")this.caret_start = v;
		else if (k == "caret_end")this.caret_end = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "caret_start")return this.caret_start;
		else if (k == "caret_end")return this.caret_end;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
});
Object.assign(Bayrell.Lang.OpCodes.BaseOpCode, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.OpCodes.BaseOpCode,
{
	op: "",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.BaseOpCode",
			"name": "Bayrell.Lang.OpCodes.BaseOpCode",
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
			a.push("caret_start");
			a.push("caret_end");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.BaseOpCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "caret_start") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.BaseOpCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "caret_end") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.BaseOpCode",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.BaseOpCode);
window["Bayrell.Lang.OpCodes.BaseOpCode"] = Bayrell.Lang.OpCodes.BaseOpCode;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.BaseOpCode;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpAnnotation = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpAnnotation.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpAnnotation.prototype.constructor = Bayrell.Lang.OpCodes.OpAnnotation;
Object.assign(Bayrell.Lang.OpCodes.OpAnnotation.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_annotation";
		this.name = null;
		this.params = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpAnnotation)
		{
			this.op = o.op;
			this.name = o.name;
			this.params = o.params;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "name")this.name = v;
		else if (k == "params")this.params = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "name")return this.name;
		else if (k == "params")return this.params;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpAnnotation";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpAnnotation, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpAnnotation,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpAnnotation";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpAnnotation",
			"name": "Bayrell.Lang.OpCodes.OpAnnotation",
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
			a.push("op");
			a.push("name");
			a.push("params");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAnnotation",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAnnotation",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "params") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAnnotation",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpAnnotation);
window["Bayrell.Lang.OpCodes.OpAnnotation"] = Bayrell.Lang.OpCodes.OpAnnotation;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpAnnotation;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpAssign = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpAssign.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpAssign.prototype.constructor = Bayrell.Lang.OpCodes.OpAssign;
Object.assign(Bayrell.Lang.OpCodes.OpAssign.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.kind = "";
		this.var_name = "";
		this.flags = null;
		this.pattern = null;
		this.annotations = null;
		this.comments = null;
		this.values = null;
		this.names = null;
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpAssign)
		{
			this.kind = o.kind;
			this.var_name = o.var_name;
			this.flags = o.flags;
			this.pattern = o.pattern;
			this.annotations = o.annotations;
			this.comments = o.comments;
			this.values = o.values;
			this.names = o.names;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "kind")this.kind = v;
		else if (k == "var_name")this.var_name = v;
		else if (k == "flags")this.flags = v;
		else if (k == "pattern")this.pattern = v;
		else if (k == "annotations")this.annotations = v;
		else if (k == "comments")this.comments = v;
		else if (k == "values")this.values = v;
		else if (k == "names")this.names = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "kind")return this.kind;
		else if (k == "var_name")return this.var_name;
		else if (k == "flags")return this.flags;
		else if (k == "pattern")return this.pattern;
		else if (k == "annotations")return this.annotations;
		else if (k == "comments")return this.comments;
		else if (k == "values")return this.values;
		else if (k == "names")return this.names;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpAssign";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpAssign, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpAssign,
{
	KIND_ASSIGN: "assign",
	KIND_DECLARE: "declare",
	KIND_STRUCT: "struct",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpAssign";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": "Bayrell.Lang.OpCodes.OpAssign",
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
			a.push("kind");
			a.push("var_name");
			a.push("flags");
			a.push("pattern");
			a.push("annotations");
			a.push("comments");
			a.push("values");
			a.push("names");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_ASSIGN") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_DECLARE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_STRUCT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "flags") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pattern") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "annotations") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "comments") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "values") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "names") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssign",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpAssign);
window["Bayrell.Lang.OpCodes.OpAssign"] = Bayrell.Lang.OpCodes.OpAssign;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpAssign;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpAssignStruct = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpAssignStruct.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpAssignStruct.prototype.constructor = Bayrell.Lang.OpCodes.OpAssignStruct;
Object.assign(Bayrell.Lang.OpCodes.OpAssignStruct.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.var_name = "";
		this.annotations = null;
		this.comments = null;
		this.names = null;
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpAssignStruct)
		{
			this.var_name = o.var_name;
			this.annotations = o.annotations;
			this.comments = o.comments;
			this.names = o.names;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "var_name")this.var_name = v;
		else if (k == "annotations")this.annotations = v;
		else if (k == "comments")this.comments = v;
		else if (k == "names")this.names = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "var_name")return this.var_name;
		else if (k == "annotations")return this.annotations;
		else if (k == "comments")return this.comments;
		else if (k == "names")return this.names;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpAssignStruct";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpAssignStruct, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpAssignStruct,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpAssignStruct";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
			"name": "Bayrell.Lang.OpCodes.OpAssignStruct",
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
			a.push("var_name");
			a.push("annotations");
			a.push("comments");
			a.push("names");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "annotations") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "comments") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "names") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignStruct",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpAssignStruct);
window["Bayrell.Lang.OpCodes.OpAssignStruct"] = Bayrell.Lang.OpCodes.OpAssignStruct;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpAssignStruct;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpAssignValue = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpAssignValue.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpAssignValue.prototype.constructor = Bayrell.Lang.OpCodes.OpAssignValue;
Object.assign(Bayrell.Lang.OpCodes.OpAssignValue.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "";
		this.var_name = "";
		this.op_code = null;
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpAssignValue)
		{
			this.op = o.op;
			this.var_name = o.var_name;
			this.op_code = o.op_code;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "var_name")this.var_name = v;
		else if (k == "op_code")this.op_code = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "var_name")return this.var_name;
		else if (k == "op_code")return this.op_code;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpAssignValue";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpAssignValue, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpAssignValue,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpAssignValue";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignValue",
			"name": "Bayrell.Lang.OpCodes.OpAssignValue",
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
			a.push("op");
			a.push("var_name");
			a.push("op_code");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "var_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op_code") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAssignValue",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpAssignValue);
window["Bayrell.Lang.OpCodes.OpAssignValue"] = Bayrell.Lang.OpCodes.OpAssignValue;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpAssignValue;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpAttr = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpAttr.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpAttr.prototype.constructor = Bayrell.Lang.OpCodes.OpAttr;
Object.assign(Bayrell.Lang.OpCodes.OpAttr.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_attr";
		this.kind = "";
		this.obj = null;
		this.value = null;
		this.attrs = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpAttr)
		{
			this.op = o.op;
			this.kind = o.kind;
			this.obj = o.obj;
			this.value = o.value;
			this.attrs = o.attrs;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "kind")this.kind = v;
		else if (k == "obj")this.obj = v;
		else if (k == "value")this.value = v;
		else if (k == "attrs")this.attrs = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "kind")return this.kind;
		else if (k == "obj")return this.obj;
		else if (k == "value")return this.value;
		else if (k == "attrs")return this.attrs;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpAttr";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpAttr, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpAttr,
{
	KIND_ATTR: "attr",
	KIND_STATIC: "static",
	KIND_DYNAMIC: "dynamic",
	KIND_DYNAMIC_ATTRS: "dynamic_attrs",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpAttr";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": "Bayrell.Lang.OpCodes.OpAttr",
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
			a.push("op");
			a.push("kind");
			a.push("obj");
			a.push("value");
			a.push("attrs");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_ATTR") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_STATIC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_DYNAMIC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_DYNAMIC_ATTRS") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "obj") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "attrs") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpAttr",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpAttr);
window["Bayrell.Lang.OpCodes.OpAttr"] = Bayrell.Lang.OpCodes.OpAttr;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpAttr;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpBreak = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpBreak.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpBreak.prototype.constructor = Bayrell.Lang.OpCodes.OpBreak;
Object.assign(Bayrell.Lang.OpCodes.OpBreak.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_break";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpBreak)
		{
			this.op = o.op;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpBreak";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpBreak, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpBreak,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpBreak";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpBreak",
			"name": "Bayrell.Lang.OpCodes.OpBreak",
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
			a.push("op");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpBreak",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpBreak);
window["Bayrell.Lang.OpCodes.OpBreak"] = Bayrell.Lang.OpCodes.OpBreak;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpBreak;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpCall = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpCall.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpCall.prototype.constructor = Bayrell.Lang.OpCodes.OpCall;
Object.assign(Bayrell.Lang.OpCodes.OpCall.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_call";
		this.obj = null;
		this.args = null;
		this.is_await = false;
		this.is_context = true;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpCall)
		{
			this.op = o.op;
			this.obj = o.obj;
			this.args = o.args;
			this.is_await = o.is_await;
			this.is_context = o.is_context;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "obj")this.obj = v;
		else if (k == "args")this.args = v;
		else if (k == "is_await")this.is_await = v;
		else if (k == "is_context")this.is_context = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "obj")return this.obj;
		else if (k == "args")return this.args;
		else if (k == "is_await")return this.is_await;
		else if (k == "is_context")return this.is_context;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpCall";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpCall, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpCall,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpCall";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
			"name": "Bayrell.Lang.OpCodes.OpCall",
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
			a.push("op");
			a.push("obj");
			a.push("args");
			a.push("is_await");
			a.push("is_context");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "obj") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "args") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_context") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCall",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpCall);
window["Bayrell.Lang.OpCodes.OpCall"] = Bayrell.Lang.OpCodes.OpCall;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpCall;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpClassOf = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpClassOf.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpClassOf.prototype.constructor = Bayrell.Lang.OpCodes.OpClassOf;
Object.assign(Bayrell.Lang.OpCodes.OpClassOf.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_classof";
		this.entity_name = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpClassOf)
		{
			this.op = o.op;
			this.entity_name = o.entity_name;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "entity_name")this.entity_name = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "entity_name")return this.entity_name;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpClassOf";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpClassOf, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpClassOf,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpClassOf";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpClassOf",
			"name": "Bayrell.Lang.OpCodes.OpClassOf",
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
			a.push("op");
			a.push("entity_name");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpClassOf",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "entity_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpClassOf",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpClassOf);
window["Bayrell.Lang.OpCodes.OpClassOf"] = Bayrell.Lang.OpCodes.OpClassOf;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpClassOf;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpClassRef = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpClassRef.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpClassRef.prototype.constructor = Bayrell.Lang.OpCodes.OpClassRef;
Object.assign(Bayrell.Lang.OpCodes.OpClassRef.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_classref";
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpClassRef)
		{
			this.op = o.op;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpClassRef";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpClassRef, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpClassRef,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpClassRef";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpClassRef",
			"name": "Bayrell.Lang.OpCodes.OpClassRef",
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
			a.push("op");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpClassRef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpClassRef",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpClassRef);
window["Bayrell.Lang.OpCodes.OpClassRef"] = Bayrell.Lang.OpCodes.OpClassRef;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpClassRef;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpCollection = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpCollection.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpCollection.prototype.constructor = Bayrell.Lang.OpCodes.OpCollection;
Object.assign(Bayrell.Lang.OpCodes.OpCollection.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_collection";
		this.values = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpCollection)
		{
			this.op = o.op;
			this.values = o.values;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "values")this.values = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "values")return this.values;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpCollection";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpCollection, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpCollection,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpCollection";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpCollection",
			"name": "Bayrell.Lang.OpCodes.OpCollection",
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
			a.push("op");
			a.push("values");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCollection",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "values") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCollection",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpCollection);
window["Bayrell.Lang.OpCodes.OpCollection"] = Bayrell.Lang.OpCodes.OpCollection;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpCollection;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpComment = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpComment.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpComment.prototype.constructor = Bayrell.Lang.OpCodes.OpComment;
Object.assign(Bayrell.Lang.OpCodes.OpComment.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_comment";
		this.value = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpComment)
		{
			this.op = o.op;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpComment";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpComment, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpComment,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpComment";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpComment",
			"name": "Bayrell.Lang.OpCodes.OpComment",
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
			a.push("op");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpComment",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpComment",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpComment);
window["Bayrell.Lang.OpCodes.OpComment"] = Bayrell.Lang.OpCodes.OpComment;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpComment;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpContinue = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpContinue.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpContinue.prototype.constructor = Bayrell.Lang.OpCodes.OpContinue;
Object.assign(Bayrell.Lang.OpCodes.OpContinue.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_continue";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpContinue)
		{
			this.op = o.op;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpContinue";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpContinue, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpContinue,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpContinue";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpContinue",
			"name": "Bayrell.Lang.OpCodes.OpContinue",
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
			a.push("op");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpContinue",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpContinue);
window["Bayrell.Lang.OpCodes.OpContinue"] = Bayrell.Lang.OpCodes.OpContinue;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpContinue;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpCurry = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpCurry.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpCurry.prototype.constructor = Bayrell.Lang.OpCodes.OpCurry;
Object.assign(Bayrell.Lang.OpCodes.OpCurry.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_curry";
		this.obj = null;
		this.args = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpCurry)
		{
			this.op = o.op;
			this.obj = o.obj;
			this.args = o.args;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "obj")this.obj = v;
		else if (k == "args")this.args = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "obj")return this.obj;
		else if (k == "args")return this.args;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpCurry";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpCurry, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpCurry,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpCurry";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpCurry",
			"name": "Bayrell.Lang.OpCodes.OpCurry",
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
			a.push("op");
			a.push("obj");
			a.push("args");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCurry",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "obj") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCurry",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "args") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCurry",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpCurry);
window["Bayrell.Lang.OpCodes.OpCurry"] = Bayrell.Lang.OpCodes.OpCurry;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpCurry;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpCurryArg = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpCurryArg.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpCurryArg.prototype.constructor = Bayrell.Lang.OpCodes.OpCurryArg;
Object.assign(Bayrell.Lang.OpCodes.OpCurryArg.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_curry";
		this.pos = 0;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpCurryArg)
		{
			this.op = o.op;
			this.pos = o.pos;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "pos")this.pos = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "pos")return this.pos;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpCurryArg";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpCurryArg, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpCurryArg,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpCurryArg";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpCurryArg",
			"name": "Bayrell.Lang.OpCodes.OpCurryArg",
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
			a.push("op");
			a.push("pos");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCurryArg",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pos") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpCurryArg",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpCurryArg);
window["Bayrell.Lang.OpCodes.OpCurryArg"] = Bayrell.Lang.OpCodes.OpCurryArg;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpCurryArg;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDeclareClass = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDeclareClass.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpDeclareClass.prototype.constructor = Bayrell.Lang.OpCodes.OpDeclareClass;
Object.assign(Bayrell.Lang.OpCodes.OpDeclareClass.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_class";
		this.kind = "";
		this.name = "";
		this.extend_name = "";
		this.annotations = null;
		this.comments = null;
		this.template = null;
		this.flags = null;
		this.fn_create = null;
		this.fn_destroy = null;
		this.class_extends = null;
		this.class_implements = null;
		this.vars = null;
		this.functions = null;
		this.items = null;
		this.is_static = false;
		this.is_declare = false;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDeclareClass)
		{
			this.op = o.op;
			this.kind = o.kind;
			this.name = o.name;
			this.extend_name = o.extend_name;
			this.annotations = o.annotations;
			this.comments = o.comments;
			this.template = o.template;
			this.flags = o.flags;
			this.fn_create = o.fn_create;
			this.fn_destroy = o.fn_destroy;
			this.class_extends = o.class_extends;
			this.class_implements = o.class_implements;
			this.vars = o.vars;
			this.functions = o.functions;
			this.items = o.items;
			this.is_static = o.is_static;
			this.is_declare = o.is_declare;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "kind")this.kind = v;
		else if (k == "name")this.name = v;
		else if (k == "extend_name")this.extend_name = v;
		else if (k == "annotations")this.annotations = v;
		else if (k == "comments")this.comments = v;
		else if (k == "template")this.template = v;
		else if (k == "flags")this.flags = v;
		else if (k == "fn_create")this.fn_create = v;
		else if (k == "fn_destroy")this.fn_destroy = v;
		else if (k == "class_extends")this.class_extends = v;
		else if (k == "class_implements")this.class_implements = v;
		else if (k == "vars")this.vars = v;
		else if (k == "functions")this.functions = v;
		else if (k == "items")this.items = v;
		else if (k == "is_static")this.is_static = v;
		else if (k == "is_declare")this.is_declare = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "kind")return this.kind;
		else if (k == "name")return this.name;
		else if (k == "extend_name")return this.extend_name;
		else if (k == "annotations")return this.annotations;
		else if (k == "comments")return this.comments;
		else if (k == "template")return this.template;
		else if (k == "flags")return this.flags;
		else if (k == "fn_create")return this.fn_create;
		else if (k == "fn_destroy")return this.fn_destroy;
		else if (k == "class_extends")return this.class_extends;
		else if (k == "class_implements")return this.class_implements;
		else if (k == "vars")return this.vars;
		else if (k == "functions")return this.functions;
		else if (k == "items")return this.items;
		else if (k == "is_static")return this.is_static;
		else if (k == "is_declare")return this.is_declare;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDeclareClass";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDeclareClass, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpDeclareClass,
{
	KIND_CLASS: "class",
	KIND_STRUCT: "struct",
	KIND_INTERFACE: "interface",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDeclareClass";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": "Bayrell.Lang.OpCodes.OpDeclareClass",
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
			a.push("op");
			a.push("kind");
			a.push("name");
			a.push("extend_name");
			a.push("annotations");
			a.push("comments");
			a.push("template");
			a.push("flags");
			a.push("fn_create");
			a.push("fn_destroy");
			a.push("class_extends");
			a.push("class_implements");
			a.push("vars");
			a.push("functions");
			a.push("items");
			a.push("is_static");
			a.push("is_declare");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_CLASS") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_STRUCT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_INTERFACE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "extend_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "annotations") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "comments") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "template") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "flags") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "fn_create") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "fn_destroy") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "class_extends") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "class_implements") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "vars") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "functions") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_static") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_declare") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareClass",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDeclareClass);
window["Bayrell.Lang.OpCodes.OpDeclareClass"] = Bayrell.Lang.OpCodes.OpDeclareClass;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDeclareClass;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDeclareFunction = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDeclareFunction.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpDeclareFunction.prototype.constructor = Bayrell.Lang.OpCodes.OpDeclareFunction;
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunction.prototype,
{
	/**
	 * Returns true if static function
	 */
	isStatic: function(ctx)
	{
		return this.flags != null && (this.flags.isFlag(ctx, "static") || this.flags.isFlag(ctx, "lambda") || this.flags.isFlag(ctx, "pure"));
	},
	/**
	 * Returns true if is flag
	 */
	isFlag: function(ctx, flag_name)
	{
		return this.flags != null && this.flags.isFlag(ctx, flag_name);
	},
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_function";
		this.name = "";
		this.annotations = null;
		this.comments = null;
		this.args = null;
		this.vars = null;
		this.result_type = null;
		this.expression = null;
		this.items = null;
		this.flags = null;
		this.is_context = true;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDeclareFunction)
		{
			this.op = o.op;
			this.name = o.name;
			this.annotations = o.annotations;
			this.comments = o.comments;
			this.args = o.args;
			this.vars = o.vars;
			this.result_type = o.result_type;
			this.expression = o.expression;
			this.items = o.items;
			this.flags = o.flags;
			this.is_context = o.is_context;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "name")this.name = v;
		else if (k == "annotations")this.annotations = v;
		else if (k == "comments")this.comments = v;
		else if (k == "args")this.args = v;
		else if (k == "vars")this.vars = v;
		else if (k == "result_type")this.result_type = v;
		else if (k == "expression")this.expression = v;
		else if (k == "items")this.items = v;
		else if (k == "flags")this.flags = v;
		else if (k == "is_context")this.is_context = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "name")return this.name;
		else if (k == "annotations")return this.annotations;
		else if (k == "comments")return this.comments;
		else if (k == "args")return this.args;
		else if (k == "vars")return this.vars;
		else if (k == "result_type")return this.result_type;
		else if (k == "expression")return this.expression;
		else if (k == "items")return this.items;
		else if (k == "flags")return this.flags;
		else if (k == "is_context")return this.is_context;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDeclareFunction";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunction, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunction,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDeclareFunction";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
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
			a.push("op");
			a.push("name");
			a.push("annotations");
			a.push("comments");
			a.push("args");
			a.push("vars");
			a.push("result_type");
			a.push("expression");
			a.push("items");
			a.push("flags");
			a.push("is_context");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "annotations") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "comments") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "args") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "vars") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "result_type") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "flags") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_context") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunction",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDeclareFunction);
window["Bayrell.Lang.OpCodes.OpDeclareFunction"] = Bayrell.Lang.OpCodes.OpDeclareFunction;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDeclareFunction;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDeclareFunctionArg = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDeclareFunctionArg.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpDeclareFunctionArg.prototype.constructor = Bayrell.Lang.OpCodes.OpDeclareFunctionArg;
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunctionArg.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_function_arg";
		this.pattern = null;
		this.name = "";
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDeclareFunctionArg)
		{
			this.op = o.op;
			this.pattern = o.pattern;
			this.name = o.name;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "pattern")this.pattern = v;
		else if (k == "name")this.name = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "pattern")return this.pattern;
		else if (k == "name")return this.name;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDeclareFunctionArg";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunctionArg, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpDeclareFunctionArg,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDeclareFunctionArg";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
			"name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
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
			a.push("op");
			a.push("pattern");
			a.push("name");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pattern") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDeclareFunctionArg",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDeclareFunctionArg);
window["Bayrell.Lang.OpCodes.OpDeclareFunctionArg"] = Bayrell.Lang.OpCodes.OpDeclareFunctionArg;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDeclareFunctionArg;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDelete = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDelete.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpDelete.prototype.constructor = Bayrell.Lang.OpCodes.OpDelete;
Object.assign(Bayrell.Lang.OpCodes.OpDelete.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_delete";
		this.op_code = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDelete)
		{
			this.op = o.op;
			this.op_code = o.op_code;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "op_code")this.op_code = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "op_code")return this.op_code;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDelete";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDelete, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpDelete,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDelete";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDelete",
			"name": "Bayrell.Lang.OpCodes.OpDelete",
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
			a.push("op");
			a.push("op_code");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDelete",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op_code") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDelete",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDelete);
window["Bayrell.Lang.OpCodes.OpDelete"] = Bayrell.Lang.OpCodes.OpDelete;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDelete;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDict = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDict.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpDict.prototype.constructor = Bayrell.Lang.OpCodes.OpDict;
Object.assign(Bayrell.Lang.OpCodes.OpDict.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_dict";
		this.values = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDict)
		{
			this.op = o.op;
			this.values = o.values;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "values")this.values = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "values")return this.values;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDict";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDict, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpDict,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDict";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDict",
			"name": "Bayrell.Lang.OpCodes.OpDict",
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
			a.push("op");
			a.push("values");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "values") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDict",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDict);
window["Bayrell.Lang.OpCodes.OpDict"] = Bayrell.Lang.OpCodes.OpDict;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDict;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpDictPair = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpDictPair.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.OpCodes.OpDictPair.prototype.constructor = Bayrell.Lang.OpCodes.OpDictPair;
Object.assign(Bayrell.Lang.OpCodes.OpDictPair.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.key = "";
		this.value = null;
		this.condition = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpDictPair)
		{
			this.key = o.key;
			this.value = o.value;
			this.condition = o.condition;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "key")this.key = v;
		else if (k == "value")this.value = v;
		else if (k == "condition")this.condition = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "key")return this.key;
		else if (k == "value")return this.value;
		else if (k == "condition")return this.condition;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpDictPair";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpDictPair, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.OpCodes.OpDictPair,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpDictPair";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpDictPair",
			"name": "Bayrell.Lang.OpCodes.OpDictPair",
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
			a.push("key");
			a.push("value");
			a.push("condition");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "key") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDictPair",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDictPair",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpDictPair",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpDictPair);
window["Bayrell.Lang.OpCodes.OpDictPair"] = Bayrell.Lang.OpCodes.OpDictPair;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpDictPair;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpEntityName = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpEntityName.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpEntityName.prototype.constructor = Bayrell.Lang.OpCodes.OpEntityName;
Object.assign(Bayrell.Lang.OpCodes.OpEntityName.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_entity_name";
		this.names = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpEntityName)
		{
			this.op = o.op;
			this.names = o.names;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "names")this.names = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "names")return this.names;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpEntityName";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpEntityName, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpEntityName,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpEntityName";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpEntityName",
			"name": "Bayrell.Lang.OpCodes.OpEntityName",
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
			a.push("op");
			a.push("names");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpEntityName",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "names") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpEntityName",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpEntityName);
window["Bayrell.Lang.OpCodes.OpEntityName"] = Bayrell.Lang.OpCodes.OpEntityName;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpEntityName;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpFlags = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpFlags.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.OpCodes.OpFlags.prototype.constructor = Bayrell.Lang.OpCodes.OpFlags;
Object.assign(Bayrell.Lang.OpCodes.OpFlags.prototype,
{
	/**
	 * Read is Flag
	 */
	isFlag: function(ctx, name)
	{
		if (!Bayrell.Lang.OpCodes.OpFlags.hasFlag(ctx, name))
		{
			return false;
		}
		return this.takeValue(ctx, "p_" + Runtime.rtl.toStr(name));
	},
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.p_async = false;
		this.p_export = false;
		this.p_static = false;
		this.p_const = false;
		this.p_public = false;
		this.p_private = false;
		this.p_protected = false;
		this.p_declare = false;
		this.p_serializable = false;
		this.p_cloneable = false;
		this.p_assignable = false;
		this.p_memorize = false;
		this.p_lambda = false;
		this.p_pure = false;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpFlags)
		{
			this.p_async = o.p_async;
			this.p_export = o.p_export;
			this.p_static = o.p_static;
			this.p_const = o.p_const;
			this.p_public = o.p_public;
			this.p_private = o.p_private;
			this.p_protected = o.p_protected;
			this.p_declare = o.p_declare;
			this.p_serializable = o.p_serializable;
			this.p_cloneable = o.p_cloneable;
			this.p_assignable = o.p_assignable;
			this.p_memorize = o.p_memorize;
			this.p_lambda = o.p_lambda;
			this.p_pure = o.p_pure;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "p_async")this.p_async = v;
		else if (k == "p_export")this.p_export = v;
		else if (k == "p_static")this.p_static = v;
		else if (k == "p_const")this.p_const = v;
		else if (k == "p_public")this.p_public = v;
		else if (k == "p_private")this.p_private = v;
		else if (k == "p_protected")this.p_protected = v;
		else if (k == "p_declare")this.p_declare = v;
		else if (k == "p_serializable")this.p_serializable = v;
		else if (k == "p_cloneable")this.p_cloneable = v;
		else if (k == "p_assignable")this.p_assignable = v;
		else if (k == "p_memorize")this.p_memorize = v;
		else if (k == "p_lambda")this.p_lambda = v;
		else if (k == "p_pure")this.p_pure = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "p_async")return this.p_async;
		else if (k == "p_export")return this.p_export;
		else if (k == "p_static")return this.p_static;
		else if (k == "p_const")return this.p_const;
		else if (k == "p_public")return this.p_public;
		else if (k == "p_private")return this.p_private;
		else if (k == "p_protected")return this.p_protected;
		else if (k == "p_declare")return this.p_declare;
		else if (k == "p_serializable")return this.p_serializable;
		else if (k == "p_cloneable")return this.p_cloneable;
		else if (k == "p_assignable")return this.p_assignable;
		else if (k == "p_memorize")return this.p_memorize;
		else if (k == "p_lambda")return this.p_lambda;
		else if (k == "p_pure")return this.p_pure;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpFlags";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpFlags, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.OpCodes.OpFlags,
{
	/**
	 * Get flags
	 */
	getFlags: function(ctx)
	{
		return Runtime.Collection.from(["async","export","static","const","public","private","declare","protected","serializable","cloneable","assignable","memorize","pure"]);
	},
	/**
	 * Get flags
	 */
	hasFlag: function(ctx, flag_name)
	{
		if (flag_name == "async" || flag_name == "export" || flag_name == "static" || flag_name == "const" || flag_name == "public" || flag_name == "private" || flag_name == "declare" || flag_name == "protected" || flag_name == "serializable" || flag_name == "cloneable" || flag_name == "assignable" || flag_name == "memorize" || flag_name == "lambda" || flag_name == "pure")
		{
			return true;
		}
		return false;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpFlags";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": "Bayrell.Lang.OpCodes.OpFlags",
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
			a.push("p_async");
			a.push("p_export");
			a.push("p_static");
			a.push("p_const");
			a.push("p_public");
			a.push("p_private");
			a.push("p_protected");
			a.push("p_declare");
			a.push("p_serializable");
			a.push("p_cloneable");
			a.push("p_assignable");
			a.push("p_memorize");
			a.push("p_lambda");
			a.push("p_pure");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "p_async") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_export") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_static") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_const") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_public") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_private") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_protected") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_declare") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_serializable") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_cloneable") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_assignable") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_memorize") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_lambda") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "p_pure") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFlags",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpFlags);
window["Bayrell.Lang.OpCodes.OpFlags"] = Bayrell.Lang.OpCodes.OpFlags;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpFlags;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpFor = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpFor.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpFor.prototype.constructor = Bayrell.Lang.OpCodes.OpFor;
Object.assign(Bayrell.Lang.OpCodes.OpFor.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_for";
		this.expr1 = null;
		this.expr2 = null;
		this.expr3 = null;
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpFor)
		{
			this.op = o.op;
			this.expr1 = o.expr1;
			this.expr2 = o.expr2;
			this.expr3 = o.expr3;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "expr1")this.expr1 = v;
		else if (k == "expr2")this.expr2 = v;
		else if (k == "expr3")this.expr3 = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "expr1")return this.expr1;
		else if (k == "expr2")return this.expr2;
		else if (k == "expr3")return this.expr3;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpFor";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpFor, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpFor,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpFor";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
			"name": "Bayrell.Lang.OpCodes.OpFor",
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
			a.push("op");
			a.push("expr1");
			a.push("expr2");
			a.push("expr3");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expr1") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expr2") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expr3") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpFor",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpFor);
window["Bayrell.Lang.OpCodes.OpFor"] = Bayrell.Lang.OpCodes.OpFor;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpFor;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpHtmlAttribute = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpHtmlAttribute.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpHtmlAttribute.prototype.constructor = Bayrell.Lang.OpCodes.OpHtmlAttribute;
Object.assign(Bayrell.Lang.OpCodes.OpHtmlAttribute.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_html_attr";
		this.key = "";
		this.value = "";
		this.is_spread = false;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpHtmlAttribute)
		{
			this.op = o.op;
			this.key = o.key;
			this.value = o.value;
			this.is_spread = o.is_spread;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "key")this.key = v;
		else if (k == "value")this.value = v;
		else if (k == "is_spread")this.is_spread = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "key")return this.key;
		else if (k == "value")return this.value;
		else if (k == "is_spread")return this.is_spread;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpHtmlAttribute";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpHtmlAttribute, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpHtmlAttribute,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpHtmlAttribute";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
			"name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
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
			a.push("op");
			a.push("key");
			a.push("value");
			a.push("is_spread");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "key") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_spread") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlAttribute",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpHtmlAttribute);
window["Bayrell.Lang.OpCodes.OpHtmlAttribute"] = Bayrell.Lang.OpCodes.OpHtmlAttribute;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpHtmlAttribute;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpHtmlContent = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpHtmlContent.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpHtmlContent.prototype.constructor = Bayrell.Lang.OpCodes.OpHtmlContent;
Object.assign(Bayrell.Lang.OpCodes.OpHtmlContent.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_html_content";
		this.value = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpHtmlContent)
		{
			this.op = o.op;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpHtmlContent";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpHtmlContent, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpHtmlContent,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpHtmlContent";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlContent",
			"name": "Bayrell.Lang.OpCodes.OpHtmlContent",
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
			a.push("op");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlContent",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlContent",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpHtmlContent);
window["Bayrell.Lang.OpCodes.OpHtmlContent"] = Bayrell.Lang.OpCodes.OpHtmlContent;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpHtmlContent;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpHtmlItems = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpHtmlItems.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpHtmlItems.prototype.constructor = Bayrell.Lang.OpCodes.OpHtmlItems;
Object.assign(Bayrell.Lang.OpCodes.OpHtmlItems.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_html";
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpHtmlItems)
		{
			this.op = o.op;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpHtmlItems";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpHtmlItems, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpHtmlItems,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpHtmlItems";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlItems",
			"name": "Bayrell.Lang.OpCodes.OpHtmlItems",
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
			a.push("op");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlItems",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlItems",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpHtmlItems);
window["Bayrell.Lang.OpCodes.OpHtmlItems"] = Bayrell.Lang.OpCodes.OpHtmlItems;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpHtmlItems;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpHtmlTag = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpHtmlTag.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpHtmlTag.prototype.constructor = Bayrell.Lang.OpCodes.OpHtmlTag;
Object.assign(Bayrell.Lang.OpCodes.OpHtmlTag.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_html_tag";
		this.tag_name = "";
		this.op_code_name = null;
		this.attrs = null;
		this.spreads = null;
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpHtmlTag)
		{
			this.op = o.op;
			this.tag_name = o.tag_name;
			this.op_code_name = o.op_code_name;
			this.attrs = o.attrs;
			this.spreads = o.spreads;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "tag_name")this.tag_name = v;
		else if (k == "op_code_name")this.op_code_name = v;
		else if (k == "attrs")this.attrs = v;
		else if (k == "spreads")this.spreads = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "tag_name")return this.tag_name;
		else if (k == "op_code_name")return this.op_code_name;
		else if (k == "attrs")return this.attrs;
		else if (k == "spreads")return this.spreads;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpHtmlTag";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpHtmlTag, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpHtmlTag,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpHtmlTag";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": "Bayrell.Lang.OpCodes.OpHtmlTag",
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
			a.push("op");
			a.push("tag_name");
			a.push("op_code_name");
			a.push("attrs");
			a.push("spreads");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "tag_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op_code_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "attrs") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "spreads") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlTag",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpHtmlTag);
window["Bayrell.Lang.OpCodes.OpHtmlTag"] = Bayrell.Lang.OpCodes.OpHtmlTag;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpHtmlTag;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpHtmlValue = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpHtmlValue.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpHtmlValue.prototype.constructor = Bayrell.Lang.OpCodes.OpHtmlValue;
Object.assign(Bayrell.Lang.OpCodes.OpHtmlValue.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_html_value";
		this.kind = "";
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpHtmlValue)
		{
			this.op = o.op;
			this.kind = o.kind;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "kind")this.kind = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "kind")return this.kind;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpHtmlValue";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpHtmlValue, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpHtmlValue,
{
	KIND_RAW: "raw",
	KIND_JSON: "json",
	KIND_HTML: "html",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpHtmlValue";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": "Bayrell.Lang.OpCodes.OpHtmlValue",
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
			a.push("op");
			a.push("kind");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_RAW") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_JSON") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_HTML") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpHtmlValue",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpHtmlValue);
window["Bayrell.Lang.OpCodes.OpHtmlValue"] = Bayrell.Lang.OpCodes.OpHtmlValue;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpHtmlValue;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpIdentifier = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpIdentifier.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpIdentifier.prototype.constructor = Bayrell.Lang.OpCodes.OpIdentifier;
Object.assign(Bayrell.Lang.OpCodes.OpIdentifier.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_identifier";
		this.value = "";
		this.kind = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpIdentifier)
		{
			this.op = o.op;
			this.value = o.value;
			this.kind = o.kind;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else if (k == "kind")this.kind = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		else if (k == "kind")return this.kind;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpIdentifier";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpIdentifier, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpIdentifier,
{
	KIND_PIPE: "pipe",
	KIND_VARIABLE: "var",
	KIND_SYS_TYPE: "sys",
	KIND_SYS_FUNCTION: "sys_fn",
	KIND_FUNCTION: "fn",
	KIND_CONTEXT: "ctx",
	KIND_MODULE: "module",
	KIND_CONSTANT: "const",
	KIND_CLASSREF: "classref",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpIdentifier";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": "Bayrell.Lang.OpCodes.OpIdentifier",
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
			a.push("op");
			a.push("value");
			a.push("kind");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_PIPE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_VARIABLE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_SYS_TYPE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_SYS_FUNCTION") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_FUNCTION") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CONTEXT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_MODULE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CONSTANT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CLASSREF") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIdentifier",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpIdentifier);
window["Bayrell.Lang.OpCodes.OpIdentifier"] = Bayrell.Lang.OpCodes.OpIdentifier;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpIdentifier;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpIf = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpIf.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpIf.prototype.constructor = Bayrell.Lang.OpCodes.OpIf;
Object.assign(Bayrell.Lang.OpCodes.OpIf.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_if";
		this.condition = null;
		this.if_true = null;
		this.if_false = null;
		this.if_else = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpIf)
		{
			this.op = o.op;
			this.condition = o.condition;
			this.if_true = o.if_true;
			this.if_false = o.if_false;
			this.if_else = o.if_else;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "condition")this.condition = v;
		else if (k == "if_true")this.if_true = v;
		else if (k == "if_false")this.if_false = v;
		else if (k == "if_else")this.if_else = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "condition")return this.condition;
		else if (k == "if_true")return this.if_true;
		else if (k == "if_false")return this.if_false;
		else if (k == "if_else")return this.if_else;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpIf";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpIf, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpIf,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpIf";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
			"name": "Bayrell.Lang.OpCodes.OpIf",
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
			a.push("op");
			a.push("condition");
			a.push("if_true");
			a.push("if_false");
			a.push("if_else");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_true") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_false") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_else") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIf",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpIf);
window["Bayrell.Lang.OpCodes.OpIf"] = Bayrell.Lang.OpCodes.OpIf;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpIf;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpIfElse = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpIfElse.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.Lang.OpCodes.OpIfElse.prototype.constructor = Bayrell.Lang.OpCodes.OpIfElse;
Object.assign(Bayrell.Lang.OpCodes.OpIfElse.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.condition = null;
		this.if_true = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpIfElse)
		{
			this.condition = o.condition;
			this.if_true = o.if_true;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "condition")this.condition = v;
		else if (k == "if_true")this.if_true = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "condition")return this.condition;
		else if (k == "if_true")return this.if_true;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpIfElse";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpIfElse, Runtime.BaseStruct);
Object.assign(Bayrell.Lang.OpCodes.OpIfElse,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpIfElse";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpIfElse",
			"name": "Bayrell.Lang.OpCodes.OpIfElse",
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
			a.push("condition");
			a.push("if_true");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIfElse",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_true") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpIfElse",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpIfElse);
window["Bayrell.Lang.OpCodes.OpIfElse"] = Bayrell.Lang.OpCodes.OpIfElse;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpIfElse;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpInc = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpInc.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpInc.prototype.constructor = Bayrell.Lang.OpCodes.OpInc;
Object.assign(Bayrell.Lang.OpCodes.OpInc.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_inc";
		this.kind = "";
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpInc)
		{
			this.op = o.op;
			this.kind = o.kind;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "kind")this.kind = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "kind")return this.kind;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpInc";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpInc, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpInc,
{
	KIND_PRE_INC: "pre_inc",
	KIND_PRE_DEC: "pre_dec",
	KIND_POST_INC: "post_inc",
	KIND_POST_DEC: "post_dec",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpInc";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": "Bayrell.Lang.OpCodes.OpInc",
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
			a.push("op");
			a.push("kind");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_PRE_INC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_PRE_DEC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_POST_INC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_POST_DEC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpInc",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpInc);
window["Bayrell.Lang.OpCodes.OpInc"] = Bayrell.Lang.OpCodes.OpInc;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpInc;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpItems = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpItems.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpItems.prototype.constructor = Bayrell.Lang.OpCodes.OpItems;
Object.assign(Bayrell.Lang.OpCodes.OpItems.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_items";
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpItems)
		{
			this.op = o.op;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpItems";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpItems, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpItems,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpItems";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpItems",
			"name": "Bayrell.Lang.OpCodes.OpItems",
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
			a.push("op");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpItems",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpItems",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpItems);
window["Bayrell.Lang.OpCodes.OpItems"] = Bayrell.Lang.OpCodes.OpItems;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpItems;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpMath = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpMath.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpMath.prototype.constructor = Bayrell.Lang.OpCodes.OpMath;
Object.assign(Bayrell.Lang.OpCodes.OpMath.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_math";
		this.value1 = null;
		this.value2 = null;
		this.math = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpMath)
		{
			this.op = o.op;
			this.value1 = o.value1;
			this.value2 = o.value2;
			this.math = o.math;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value1")this.value1 = v;
		else if (k == "value2")this.value2 = v;
		else if (k == "math")this.math = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value1")return this.value1;
		else if (k == "value2")return this.value2;
		else if (k == "math")return this.math;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpMath";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpMath, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpMath,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpMath";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpMath",
			"name": "Bayrell.Lang.OpCodes.OpMath",
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
			a.push("op");
			a.push("value1");
			a.push("value2");
			a.push("math");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMath",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value1") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMath",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value2") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMath",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "math") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMath",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpMath);
window["Bayrell.Lang.OpCodes.OpMath"] = Bayrell.Lang.OpCodes.OpMath;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpMath;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpMethod = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpMethod.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpMethod.prototype.constructor = Bayrell.Lang.OpCodes.OpMethod;
Object.assign(Bayrell.Lang.OpCodes.OpMethod.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_method";
		this.value1 = null;
		this.value2 = null;
		this.kind = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpMethod)
		{
			this.op = o.op;
			this.value1 = o.value1;
			this.value2 = o.value2;
			this.kind = o.kind;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value1")this.value1 = v;
		else if (k == "value2")this.value2 = v;
		else if (k == "kind")this.kind = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value1")return this.value1;
		else if (k == "value2")return this.value2;
		else if (k == "kind")return this.kind;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpMethod";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpMethod, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpMethod,
{
	KIND_ATTR: "attr",
	KIND_STATIC: "static",
	KIND_CLASS: "class",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpMethod";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": "Bayrell.Lang.OpCodes.OpMethod",
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
			a.push("op");
			a.push("value1");
			a.push("value2");
			a.push("kind");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_ATTR") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_STATIC") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CLASS") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value1") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value2") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpMethod",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpMethod);
window["Bayrell.Lang.OpCodes.OpMethod"] = Bayrell.Lang.OpCodes.OpMethod;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpMethod;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpModule = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpModule.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpModule.prototype.constructor = Bayrell.Lang.OpCodes.OpModule;
Object.assign(Bayrell.Lang.OpCodes.OpModule.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.uses = null;
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpModule)
		{
			this.uses = o.uses;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "uses")this.uses = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "uses")return this.uses;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpModule";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpModule, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpModule,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpModule";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpModule",
			"name": "Bayrell.Lang.OpCodes.OpModule",
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
			a.push("uses");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "uses") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpModule",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpModule",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpModule);
window["Bayrell.Lang.OpCodes.OpModule"] = Bayrell.Lang.OpCodes.OpModule;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpModule;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpNamespace = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpNamespace.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpNamespace.prototype.constructor = Bayrell.Lang.OpCodes.OpNamespace;
Object.assign(Bayrell.Lang.OpCodes.OpNamespace.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_namespace";
		this.name = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpNamespace)
		{
			this.op = o.op;
			this.name = o.name;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "name")this.name = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "name")return this.name;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpNamespace";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpNamespace, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpNamespace,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpNamespace";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpNamespace",
			"name": "Bayrell.Lang.OpCodes.OpNamespace",
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
			a.push("op");
			a.push("name");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNamespace",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNamespace",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpNamespace);
window["Bayrell.Lang.OpCodes.OpNamespace"] = Bayrell.Lang.OpCodes.OpNamespace;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpNamespace;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpNew = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpNew.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpNew.prototype.constructor = Bayrell.Lang.OpCodes.OpNew;
Object.assign(Bayrell.Lang.OpCodes.OpNew.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_new";
		this.args = null;
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpNew)
		{
			this.op = o.op;
			this.args = o.args;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "args")this.args = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "args")return this.args;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpNew";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpNew, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpNew,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpNew";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpNew",
			"name": "Bayrell.Lang.OpCodes.OpNew",
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
			a.push("op");
			a.push("args");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNew",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "args") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNew",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNew",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpNew);
window["Bayrell.Lang.OpCodes.OpNew"] = Bayrell.Lang.OpCodes.OpNew;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpNew;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpNumber = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpNumber.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpNumber.prototype.constructor = Bayrell.Lang.OpCodes.OpNumber;
Object.assign(Bayrell.Lang.OpCodes.OpNumber.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_number";
		this.value = 0;
		this.negative = false;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpNumber)
		{
			this.op = o.op;
			this.value = o.value;
			this.negative = o.negative;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else if (k == "negative")this.negative = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		else if (k == "negative")return this.negative;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpNumber";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpNumber, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpNumber,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpNumber";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpNumber",
			"name": "Bayrell.Lang.OpCodes.OpNumber",
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
			a.push("op");
			a.push("value");
			a.push("negative");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNumber",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNumber",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "negative") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpNumber",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpNumber);
window["Bayrell.Lang.OpCodes.OpNumber"] = Bayrell.Lang.OpCodes.OpNumber;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpNumber;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpPipe = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpPipe.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpPipe.prototype.constructor = Bayrell.Lang.OpCodes.OpPipe;
Object.assign(Bayrell.Lang.OpCodes.OpPipe.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_pipe";
		this.kind = "";
		this.obj = null;
		this.value = null;
		this.is_async = false;
		this.is_monad = false;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpPipe)
		{
			this.op = o.op;
			this.kind = o.kind;
			this.obj = o.obj;
			this.value = o.value;
			this.is_async = o.is_async;
			this.is_monad = o.is_monad;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "kind")this.kind = v;
		else if (k == "obj")this.obj = v;
		else if (k == "value")this.value = v;
		else if (k == "is_async")this.is_async = v;
		else if (k == "is_monad")this.is_monad = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "kind")return this.kind;
		else if (k == "obj")return this.obj;
		else if (k == "value")return this.value;
		else if (k == "is_async")return this.is_async;
		else if (k == "is_monad")return this.is_monad;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpPipe";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpPipe, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpPipe,
{
	KIND_ATTR: "attr",
	KIND_CALL: "call",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpPipe";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": "Bayrell.Lang.OpCodes.OpPipe",
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
			a.push("op");
			a.push("kind");
			a.push("obj");
			a.push("value");
			a.push("is_async");
			a.push("is_monad");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_ATTR") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CALL") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "obj") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_async") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_monad") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPipe",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpPipe);
window["Bayrell.Lang.OpCodes.OpPipe"] = Bayrell.Lang.OpCodes.OpPipe;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpPipe;
"use strict;"
/*!
 *  Bayrell Common Languages Transcompiler
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpPreprocessorIfCode = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpPreprocessorIfCode.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpPreprocessorIfCode.prototype.constructor = Bayrell.Lang.OpCodes.OpPreprocessorIfCode;
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfCode.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_preprocessor_ifcode";
		this.condition = null;
		this.content = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfCode)
		{
			this.op = o.op;
			this.condition = o.condition;
			this.content = o.content;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "condition")this.condition = v;
		else if (k == "content")this.content = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "condition")return this.condition;
		else if (k == "content")return this.content;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorIfCode";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfCode, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfCode,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorIfCode";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfCode",
			"name": "Bayrell.Lang.OpCodes.OpPreprocessorIfCode",
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
			a.push("op");
			a.push("condition");
			a.push("content");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfCode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "content") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfCode",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpPreprocessorIfCode);
window["Bayrell.Lang.OpCodes.OpPreprocessorIfCode"] = Bayrell.Lang.OpCodes.OpPreprocessorIfCode;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpPreprocessorIfCode;
"use strict;"
/*!
 *  Bayrell Common Languages Transcompiler
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpPreprocessorIfDef = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpPreprocessorIfDef.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpPreprocessorIfDef.prototype.constructor = Bayrell.Lang.OpCodes.OpPreprocessorIfDef;
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfDef.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_preprocessor_ifdef";
		this.condition = null;
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpPreprocessorIfDef)
		{
			this.op = o.op;
			this.condition = o.condition;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "condition")this.condition = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "condition")return this.condition;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorIfDef";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfDef, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorIfDef,
{
	KIND_PROGRAM: "program",
	KIND_CLASS_BODY: "class_body",
	KIND_OPERATOR: "operator",
	KIND_EXPRESSION: "expression",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorIfDef";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
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
			a.push("op");
			a.push("condition");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "KIND_PROGRAM") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_CLASS_BODY") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_OPERATOR") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "KIND_EXPRESSION") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorIfDef",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpPreprocessorIfDef);
window["Bayrell.Lang.OpCodes.OpPreprocessorIfDef"] = Bayrell.Lang.OpCodes.OpPreprocessorIfDef;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpPreprocessorIfDef;
"use strict;"
/*!
 *  Bayrell Common Languages Transcompiler
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpPreprocessorSwitch = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpPreprocessorSwitch.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpPreprocessorSwitch.prototype.constructor = Bayrell.Lang.OpCodes.OpPreprocessorSwitch;
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorSwitch.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_preprocessor_switch";
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpPreprocessorSwitch)
		{
			this.op = o.op;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorSwitch";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorSwitch, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpPreprocessorSwitch,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpPreprocessorSwitch";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorSwitch",
			"name": "Bayrell.Lang.OpCodes.OpPreprocessorSwitch",
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
			a.push("op");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorSwitch",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpPreprocessorSwitch",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpPreprocessorSwitch);
window["Bayrell.Lang.OpCodes.OpPreprocessorSwitch"] = Bayrell.Lang.OpCodes.OpPreprocessorSwitch;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpPreprocessorSwitch;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpReturn = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpReturn.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpReturn.prototype.constructor = Bayrell.Lang.OpCodes.OpReturn;
Object.assign(Bayrell.Lang.OpCodes.OpReturn.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_return";
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpReturn)
		{
			this.op = o.op;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpReturn";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpReturn, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpReturn,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpReturn";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpReturn",
			"name": "Bayrell.Lang.OpCodes.OpReturn",
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
			a.push("op");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpReturn",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpReturn",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpReturn);
window["Bayrell.Lang.OpCodes.OpReturn"] = Bayrell.Lang.OpCodes.OpReturn;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpReturn;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpSafe = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpSafe.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpSafe.prototype.constructor = Bayrell.Lang.OpCodes.OpSafe;
Object.assign(Bayrell.Lang.OpCodes.OpSafe.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_safe";
		this.obj = null;
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpSafe)
		{
			this.op = o.op;
			this.obj = o.obj;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "obj")this.obj = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "obj")return this.obj;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpSafe";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpSafe, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpSafe,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpSafe";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpSafe",
			"name": "Bayrell.Lang.OpCodes.OpSafe",
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
			a.push("op");
			a.push("obj");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpSafe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "obj") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpSafe",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpSafe",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpSafe);
window["Bayrell.Lang.OpCodes.OpSafe"] = Bayrell.Lang.OpCodes.OpSafe;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpSafe;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpString = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpString.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpString.prototype.constructor = Bayrell.Lang.OpCodes.OpString;
Object.assign(Bayrell.Lang.OpCodes.OpString.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_string";
		this.value = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpString)
		{
			this.op = o.op;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpString";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpString, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpString,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpString";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpString",
			"name": "Bayrell.Lang.OpCodes.OpString",
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
			a.push("op");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpString",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpString",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpString);
window["Bayrell.Lang.OpCodes.OpString"] = Bayrell.Lang.OpCodes.OpString;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpString;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpTernary = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpTernary.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpTernary.prototype.constructor = Bayrell.Lang.OpCodes.OpTernary;
Object.assign(Bayrell.Lang.OpCodes.OpTernary.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_ternary";
		this.condition = null;
		this.if_true = null;
		this.if_false = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpTernary)
		{
			this.op = o.op;
			this.condition = o.condition;
			this.if_true = o.if_true;
			this.if_false = o.if_false;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "condition")this.condition = v;
		else if (k == "if_true")this.if_true = v;
		else if (k == "if_false")this.if_false = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "condition")return this.condition;
		else if (k == "if_true")return this.if_true;
		else if (k == "if_false")return this.if_false;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpTernary";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpTernary, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpTernary,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpTernary";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpTernary",
			"name": "Bayrell.Lang.OpCodes.OpTernary",
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
			a.push("op");
			a.push("condition");
			a.push("if_true");
			a.push("if_false");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTernary",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTernary",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_true") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTernary",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "if_false") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTernary",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpTernary);
window["Bayrell.Lang.OpCodes.OpTernary"] = Bayrell.Lang.OpCodes.OpTernary;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpTernary;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpThrow = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpThrow.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpThrow.prototype.constructor = Bayrell.Lang.OpCodes.OpThrow;
Object.assign(Bayrell.Lang.OpCodes.OpThrow.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_throw";
		this.expression = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpThrow)
		{
			this.op = o.op;
			this.expression = o.expression;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "expression")this.expression = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "expression")return this.expression;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpThrow";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpThrow, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpThrow,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpThrow";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpThrow",
			"name": "Bayrell.Lang.OpCodes.OpThrow",
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
			a.push("op");
			a.push("expression");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpThrow",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpThrow",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpThrow);
window["Bayrell.Lang.OpCodes.OpThrow"] = Bayrell.Lang.OpCodes.OpThrow;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpThrow;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpTryCatch = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpTryCatch.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpTryCatch.prototype.constructor = Bayrell.Lang.OpCodes.OpTryCatch;
Object.assign(Bayrell.Lang.OpCodes.OpTryCatch.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_try_catch";
		this.op_try = null;
		this.items = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpTryCatch)
		{
			this.op = o.op;
			this.op_try = o.op_try;
			this.items = o.items;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "op_try")this.op_try = v;
		else if (k == "items")this.items = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "op_try")return this.op_try;
		else if (k == "items")return this.items;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpTryCatch";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpTryCatch, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpTryCatch,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpTryCatch";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatch",
			"name": "Bayrell.Lang.OpCodes.OpTryCatch",
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
			a.push("op");
			a.push("op_try");
			a.push("items");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatch",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "op_try") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatch",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "items") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatch",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpTryCatch);
window["Bayrell.Lang.OpCodes.OpTryCatch"] = Bayrell.Lang.OpCodes.OpTryCatch;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpTryCatch;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpTryCatchItem = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpTryCatchItem.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpTryCatchItem.prototype.constructor = Bayrell.Lang.OpCodes.OpTryCatchItem;
Object.assign(Bayrell.Lang.OpCodes.OpTryCatchItem.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_try_catch_item";
		this.name = "";
		this.pattern = null;
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpTryCatchItem)
		{
			this.op = o.op;
			this.name = o.name;
			this.pattern = o.pattern;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "name")this.name = v;
		else if (k == "pattern")this.pattern = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "name")return this.name;
		else if (k == "pattern")return this.pattern;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpTryCatchItem";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpTryCatchItem, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpTryCatchItem,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpTryCatchItem";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
			"name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
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
			a.push("op");
			a.push("name");
			a.push("pattern");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pattern") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTryCatchItem",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpTryCatchItem);
window["Bayrell.Lang.OpCodes.OpTryCatchItem"] = Bayrell.Lang.OpCodes.OpTryCatchItem;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpTryCatchItem;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpTypeConvert = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpTypeConvert.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpTypeConvert.prototype.constructor = Bayrell.Lang.OpCodes.OpTypeConvert;
Object.assign(Bayrell.Lang.OpCodes.OpTypeConvert.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_type_convert";
		this.pattern = null;
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpTypeConvert)
		{
			this.op = o.op;
			this.pattern = o.pattern;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "pattern")this.pattern = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "pattern")return this.pattern;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpTypeConvert";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpTypeConvert, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpTypeConvert,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpTypeConvert";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeConvert",
			"name": "Bayrell.Lang.OpCodes.OpTypeConvert",
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
			a.push("op");
			a.push("pattern");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeConvert",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pattern") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeConvert",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeConvert",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpTypeConvert);
window["Bayrell.Lang.OpCodes.OpTypeConvert"] = Bayrell.Lang.OpCodes.OpTypeConvert;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpTypeConvert;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpTypeIdentifier = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpTypeIdentifier.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpTypeIdentifier.prototype.constructor = Bayrell.Lang.OpCodes.OpTypeIdentifier;
Object.assign(Bayrell.Lang.OpCodes.OpTypeIdentifier.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_type_identifier";
		this.entity_name = null;
		this.template = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpTypeIdentifier)
		{
			this.op = o.op;
			this.entity_name = o.entity_name;
			this.template = o.template;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "entity_name")this.entity_name = v;
		else if (k == "template")this.template = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "entity_name")return this.entity_name;
		else if (k == "template")return this.template;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpTypeIdentifier";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpTypeIdentifier, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpTypeIdentifier,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpTypeIdentifier";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeIdentifier",
			"name": "Bayrell.Lang.OpCodes.OpTypeIdentifier",
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
			a.push("op");
			a.push("entity_name");
			a.push("template");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "entity_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeIdentifier",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "template") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpTypeIdentifier",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpTypeIdentifier);
window["Bayrell.Lang.OpCodes.OpTypeIdentifier"] = Bayrell.Lang.OpCodes.OpTypeIdentifier;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpTypeIdentifier;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpUse = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpUse.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpUse.prototype.constructor = Bayrell.Lang.OpCodes.OpUse;
Object.assign(Bayrell.Lang.OpCodes.OpUse.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_use";
		this.alias = "";
		this.name = "";
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpUse)
		{
			this.op = o.op;
			this.alias = o.alias;
			this.name = o.name;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "alias")this.alias = v;
		else if (k == "name")this.name = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "alias")return this.alias;
		else if (k == "name")return this.name;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpUse";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpUse, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpUse,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpUse";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpUse",
			"name": "Bayrell.Lang.OpCodes.OpUse",
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
			a.push("op");
			a.push("alias");
			a.push("name");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpUse",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "alias") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpUse",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpUse",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpUse);
window["Bayrell.Lang.OpCodes.OpUse"] = Bayrell.Lang.OpCodes.OpUse;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpUse;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.OpCodes == 'undefined') Bayrell.Lang.OpCodes = {};
Bayrell.Lang.OpCodes.OpWhile = function(ctx)
{
	Bayrell.Lang.OpCodes.BaseOpCode.apply(this, arguments);
};
Bayrell.Lang.OpCodes.OpWhile.prototype = Object.create(Bayrell.Lang.OpCodes.BaseOpCode.prototype);
Bayrell.Lang.OpCodes.OpWhile.prototype.constructor = Bayrell.Lang.OpCodes.OpWhile;
Object.assign(Bayrell.Lang.OpCodes.OpWhile.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.op = "op_while";
		this.condition = null;
		this.value = null;
		Bayrell.Lang.OpCodes.BaseOpCode.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.OpCodes.OpWhile)
		{
			this.op = o.op;
			this.condition = o.condition;
			this.value = o.value;
		}
		Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "op")this.op = v;
		else if (k == "condition")this.condition = v;
		else if (k == "value")this.value = v;
		else Bayrell.Lang.OpCodes.BaseOpCode.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "op")return this.op;
		else if (k == "condition")return this.condition;
		else if (k == "value")return this.value;
		return Bayrell.Lang.OpCodes.BaseOpCode.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.OpCodes.OpWhile";
	},
});
Object.assign(Bayrell.Lang.OpCodes.OpWhile, Bayrell.Lang.OpCodes.BaseOpCode);
Object.assign(Bayrell.Lang.OpCodes.OpWhile,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.OpCodes";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.OpWhile";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.OpCodes.BaseOpCode";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.OpCodes.OpWhile",
			"name": "Bayrell.Lang.OpCodes.OpWhile",
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
			a.push("op");
			a.push("condition");
			a.push("value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "op") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpWhile",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "condition") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpWhile",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.OpCodes.OpWhile",
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
Runtime.rtl.defClass(Bayrell.Lang.OpCodes.OpWhile);
window["Bayrell.Lang.OpCodes.OpWhile"] = Bayrell.Lang.OpCodes.OpWhile;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.OpCodes.OpWhile;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangNode == 'undefined') Bayrell.Lang.LangNode = {};
Bayrell.Lang.LangNode.TranslatorNode = function(ctx)
{
	Bayrell.Lang.LangES6.TranslatorES6.apply(this, arguments);
};
Bayrell.Lang.LangNode.TranslatorNode.prototype = Object.create(Bayrell.Lang.LangES6.TranslatorES6.prototype);
Bayrell.Lang.LangNode.TranslatorNode.prototype.constructor = Bayrell.Lang.LangNode.TranslatorNode;
Object.assign(Bayrell.Lang.LangNode.TranslatorNode.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.async_await = null;
		this.expression = null;
		this.html = null;
		this.operator = null;
		this.program = null;
		this.use_module_name = true;
		this.enable_async_await = true;
		this.emulate_async_await = false;
		Bayrell.Lang.LangES6.TranslatorES6.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangNode.TranslatorNode)
		{
			this.async_await = o.async_await;
			this.expression = o.expression;
			this.html = o.html;
			this.operator = o.operator;
			this.program = o.program;
			this.use_module_name = o.use_module_name;
			this.enable_async_await = o.enable_async_await;
			this.emulate_async_await = o.emulate_async_await;
		}
		Bayrell.Lang.LangES6.TranslatorES6.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "async_await")this.async_await = v;
		else if (k == "expression")this.expression = v;
		else if (k == "html")this.html = v;
		else if (k == "operator")this.operator = v;
		else if (k == "program")this.program = v;
		else if (k == "use_module_name")this.use_module_name = v;
		else if (k == "enable_async_await")this.enable_async_await = v;
		else if (k == "emulate_async_await")this.emulate_async_await = v;
		else Bayrell.Lang.LangES6.TranslatorES6.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "async_await")return this.async_await;
		else if (k == "expression")return this.expression;
		else if (k == "html")return this.html;
		else if (k == "operator")return this.operator;
		else if (k == "program")return this.program;
		else if (k == "use_module_name")return this.use_module_name;
		else if (k == "enable_async_await")return this.enable_async_await;
		else if (k == "emulate_async_await")return this.emulate_async_await;
		return Bayrell.Lang.LangES6.TranslatorES6.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangNode.TranslatorNode";
	},
});
Object.assign(Bayrell.Lang.LangNode.TranslatorNode, Bayrell.Lang.LangES6.TranslatorES6);
Object.assign(Bayrell.Lang.LangNode.TranslatorNode,
{
	/**
	 * Reset translator
	 */
	reset: function(ctx, t)
	{
		return t.copy(ctx, Runtime.Dict.from({"value":"","current_namespace_name":"","modules":new Runtime.Dict(ctx),"async_await":new Bayrell.Lang.LangES6.TranslatorES6AsyncAwait(ctx),"expression":new Bayrell.Lang.LangNode.TranslatorNodeExpression(ctx),"html":new Bayrell.Lang.LangES6.TranslatorES6Html(ctx),"operator":new Bayrell.Lang.LangES6.TranslatorES6Operator(ctx),"program":new Bayrell.Lang.LangNode.TranslatorNodeProgram(ctx),"save_vars":new Runtime.Collection(ctx),"save_op_codes":new Runtime.Collection(ctx),"save_op_code_inc":0,"preprocessor_flags":Runtime.Dict.from({"BACKEND":true,"NODEJS":true,"JAVASCRIPT":true})}));
	},
	/**
	 * Translate BaseOpCode
	 */
	translate: function(ctx, t, op_code)
	{
		t = this.reset(ctx, t);
		return t.program.constructor.translateProgram(ctx, t, op_code);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangNode";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangNode.TranslatorNode";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": "Bayrell.Lang.LangNode.TranslatorNode",
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
			a.push("async_await");
			a.push("expression");
			a.push("html");
			a.push("operator");
			a.push("program");
			a.push("use_module_name");
			a.push("enable_async_await");
			a.push("emulate_async_await");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expression") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "html") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "operator") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "program") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "use_module_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "enable_async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "emulate_async_await") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNode",
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
Runtime.rtl.defClass(Bayrell.Lang.LangNode.TranslatorNode);
window["Bayrell.Lang.LangNode.TranslatorNode"] = Bayrell.Lang.LangNode.TranslatorNode;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangNode.TranslatorNode;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangNode == 'undefined') Bayrell.Lang.LangNode = {};
Bayrell.Lang.LangNode.TranslatorNodeExpression = function(ctx)
{
	Bayrell.Lang.LangES6.TranslatorES6Expression.apply(this, arguments);
};
Bayrell.Lang.LangNode.TranslatorNodeExpression.prototype = Object.create(Bayrell.Lang.LangES6.TranslatorES6Expression.prototype);
Bayrell.Lang.LangNode.TranslatorNodeExpression.prototype.constructor = Bayrell.Lang.LangNode.TranslatorNodeExpression;
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeExpression.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangNode.TranslatorNodeExpression)
		{
		}
		Bayrell.Lang.LangES6.TranslatorES6Expression.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Bayrell.Lang.LangES6.TranslatorES6Expression.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Bayrell.Lang.LangES6.TranslatorES6Expression.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangNode.TranslatorNodeExpression";
	},
});
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeExpression, Bayrell.Lang.LangES6.TranslatorES6Expression);
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeExpression,
{
	/**
	 * OpIdentifier
	 */
	OpIdentifier: function(ctx, t, op_code)
	{
		if (op_code.value == "@")
		{
			return Runtime.Collection.from([t,"ctx"]);
		}
		if (op_code.value == "_")
		{
			return Runtime.Collection.from([t,"ctx.constructor.translate"]);
		}
		if (op_code.value == "log")
		{
			return Runtime.Collection.from([t,"console.log"]);
		}
		if (t.modules.has(ctx, op_code.value) || op_code.kind == Bayrell.Lang.OpCodes.OpIdentifier.KIND_SYS_TYPE)
		{
			var module_name = op_code.value;
			var new_module_name = this.findModuleName(ctx, t, module_name);
			if (module_name != new_module_name)
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"op_code":op_code,"var_content":this.useModuleName(ctx, t, module_name)}));
				t = Runtime.rtl.get(ctx, res, 0);
				var var_name = Runtime.rtl.get(ctx, res, 1);
				return Runtime.Collection.from([t,var_name]);
			}
		}
		return Runtime.Collection.from([t,op_code.value]);
	},
	/**
	 * OpTypeIdentifier
	 */
	OpTypeIdentifier: function(ctx, t, op_code)
	{
		var var_name = "";
		if (op_code.entity_name.names.count(ctx) > 0)
		{
			var module_name = op_code.entity_name.names.first(ctx);
			var new_module_name = this.findModuleName(ctx, t, module_name);
			if (module_name != new_module_name)
			{
				var res = t.constructor.addSaveOpCode(ctx, t, Runtime.Dict.from({"var_content":this.useModuleName(ctx, t, module_name)}));
				t = Runtime.rtl.get(ctx, res, 0);
				var_name = Runtime.rtl.get(ctx, res, 1);
			}
		}
		if (var_name == "")
		{
			var_name = Runtime.rs.join(ctx, ".", op_code.entity_name.names);
		}
		return Runtime.Collection.from([t,var_name]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangNode";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangNode.TranslatorNodeExpression";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Expression";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNodeExpression",
			"name": "Bayrell.Lang.LangNode.TranslatorNodeExpression",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangNode.TranslatorNodeExpression);
window["Bayrell.Lang.LangNode.TranslatorNodeExpression"] = Bayrell.Lang.LangNode.TranslatorNodeExpression;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangNode.TranslatorNodeExpression;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
if (typeof Bayrell.Lang.LangNode == 'undefined') Bayrell.Lang.LangNode = {};
Bayrell.Lang.LangNode.TranslatorNodeProgram = function(ctx)
{
	Bayrell.Lang.LangES6.TranslatorES6Program.apply(this, arguments);
};
Bayrell.Lang.LangNode.TranslatorNodeProgram.prototype = Object.create(Bayrell.Lang.LangES6.TranslatorES6Program.prototype);
Bayrell.Lang.LangNode.TranslatorNodeProgram.prototype.constructor = Bayrell.Lang.LangNode.TranslatorNodeProgram;
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeProgram.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.LangNode.TranslatorNodeProgram)
		{
		}
		Bayrell.Lang.LangES6.TranslatorES6Program.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Bayrell.Lang.LangES6.TranslatorES6Program.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Bayrell.Lang.LangES6.TranslatorES6Program.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.Lang.LangNode.TranslatorNodeProgram";
	},
});
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeProgram, Bayrell.Lang.LangES6.TranslatorES6Program);
Object.assign(Bayrell.Lang.LangNode.TranslatorNodeProgram,
{
	/**
	 * Translate program
	 */
	translateProgramHeader: function(ctx, t, op_code)
	{
		var content = "\"use strict;\"";
		content += Runtime.rtl.toStr(t.s(ctx, "var use = require('bayrell').use;"));
		return Runtime.Collection.from([t,content]);
	},
	/**
	 * OpDeclareClassFooter
	 */
	OpDeclareClassFooter: function(ctx, t, op_code)
	{
		var content = "";
		var name = "";
		content += Runtime.rtl.toStr("use.add(" + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(");"));
		/*
		content ~= t.s("if (module.exports == undefined) module.exports = {};");
		Collection<string> arr = rs::split("\\.", t.current_namespace_name);
		for (int i=0; i<arr.count(); i++)
		{
			name = name ~ ((i == 0) ? "" : ".") ~ arr.item(i);
			string s = "if (module.exports." ~ name ~ " == undefined) module.exports." ~ name ~ " = {};";
			content ~= (content == 0) ? s : t.s(s);
		}
		
		content ~= t.s("module.exports." ~
			t.current_class_full_name ~ " = " ~ t.current_class_full_name ~ ";");
		*/
		content += Runtime.rtl.toStr(t.s(ctx, "module.exports = " + Runtime.rtl.toStr(t.current_class_full_name) + Runtime.rtl.toStr(";")));
		return Runtime.Collection.from([t,content]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang.LangNode";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.LangNode.TranslatorNodeProgram";
	},
	getParentClassName: function()
	{
		return "Bayrell.Lang.LangES6.TranslatorES6Program";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.LangNode.TranslatorNodeProgram",
			"name": "Bayrell.Lang.LangNode.TranslatorNodeProgram",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
Runtime.rtl.defClass(Bayrell.Lang.LangNode.TranslatorNodeProgram);
window["Bayrell.Lang.LangNode.TranslatorNodeProgram"] = Bayrell.Lang.LangNode.TranslatorNodeProgram;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.LangNode.TranslatorNodeProgram;
"use strict;"
/*!
 *  Bayrell Language
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.Lang == 'undefined') Bayrell.Lang = {};
Bayrell.Lang.ModuleDescription = function(ctx)
{
};
Object.assign(Bayrell.Lang.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.Lang.ModuleDescription)
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
		return "Bayrell.Lang.ModuleDescription";
	},
});
Object.assign(Bayrell.Lang.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Bayrell.Lang";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.10.4";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime":">=0.2 <1.0"});
	},
	/**
	 * Returns module files load order
	 * @return Collection<string>
	 */
	assets: function(ctx)
	{
		return Runtime.Collection.from(["Bayrell.Lang/Caret","Bayrell.Lang/CoreParser","Bayrell.Lang/CoreToken","Bayrell.Lang/CoreTranslator","Bayrell.Lang/LangConstant","Bayrell.Lang/LangUtils","Bayrell.Lang/SaveOpCode","Bayrell.Lang/ModuleDescription","Bayrell.Lang/Exceptions/ParserUnknownError","Bayrell.Lang/Exceptions/ParserError","Bayrell.Lang/Exceptions/ParserEOF","Bayrell.Lang/Exceptions/ParserExpected","Bayrell.Lang/LangBay/ParserBay","Bayrell.Lang/LangBay/ParserBayBase","Bayrell.Lang/LangBay/ParserBayExpression","Bayrell.Lang/LangBay/ParserBayOperator","Bayrell.Lang/LangBay/ParserBayPreprocessor","Bayrell.Lang/LangBay/ParserBayProgram","Bayrell.Lang/LangES6/TranslatorES6","Bayrell.Lang/LangES6/TranslatorES6Expression","Bayrell.Lang/LangES6/TranslatorES6Operator","Bayrell.Lang/LangES6/TranslatorES6Program","Bayrell.Lang/OpCodes/BaseOpCode","Bayrell.Lang/OpCodes/OpAnnotation","Bayrell.Lang/OpCodes/OpAssign","Bayrell.Lang/OpCodes/OpAssignValue","Bayrell.Lang/OpCodes/OpAttr","Bayrell.Lang/OpCodes/OpBreak","Bayrell.Lang/OpCodes/OpCall","Bayrell.Lang/OpCodes/OpClassOf","Bayrell.Lang/OpCodes/OpClassRef","Bayrell.Lang/OpCodes/OpCollection","Bayrell.Lang/OpCodes/OpComment","Bayrell.Lang/OpCodes/OpContinue","Bayrell.Lang/OpCodes/OpDeclareClass","Bayrell.Lang/OpCodes/OpDeclareFunction","Bayrell.Lang/OpCodes/OpDeclareFunctionArg","Bayrell.Lang/OpCodes/OpDict","Bayrell.Lang/OpCodes/OpDictPair","Bayrell.Lang/OpCodes/OpEntityName","Bayrell.Lang/OpCodes/OpFlags","Bayrell.Lang/OpCodes/OpFor","Bayrell.Lang/OpCodes/OpIdentifier","Bayrell.Lang/OpCodes/OpIf","Bayrell.Lang/OpCodes/OpIfElse","Bayrell.Lang/OpCodes/OpInc","Bayrell.Lang/OpCodes/OpItems","Bayrell.Lang/OpCodes/OpMath","Bayrell.Lang/OpCodes/OpMethod","Bayrell.Lang/OpCodes/OpModule","Bayrell.Lang/OpCodes/OpNamespace","Bayrell.Lang/OpCodes/OpNew","Bayrell.Lang/OpCodes/OpNumber","Bayrell.Lang/OpCodes/OpPreprocessorIfCode","Bayrell.Lang/OpCodes/OpPreprocessorIfDef","Bayrell.Lang/OpCodes/OpPreprocessorSwitch","Bayrell.Lang/OpCodes/OpReturn","Bayrell.Lang/OpCodes/OpSafe","Bayrell.Lang/OpCodes/OpString","Bayrell.Lang/OpCodes/OpTernary","Bayrell.Lang/OpCodes/OpThrow","Bayrell.Lang/OpCodes/OpTypeConvert","Bayrell.Lang/OpCodes/OpTypeIdentifier","Bayrell.Lang/OpCodes/OpUse","Bayrell.Lang/OpCodes/OpWhile"]);
	},
	getAssetsFiles: function(ctx)
	{
		return this.assets(ctx);
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/**
	 * Returns enities
	 */
	resources: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.Lang";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.Lang.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.Lang.ModuleDescription",
			"name": "Bayrell.Lang.ModuleDescription",
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
		var IntrospectionInfo = Runtime.IntrospectionInfo;
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
	__implements__:
	[
		Runtime.Interfaces.ModuleDescriptionInterface,
		Runtime.Interfaces.AssetsInterface,
	],
});
Runtime.rtl.defClass(Bayrell.Lang.ModuleDescription);
window["Bayrell.Lang.ModuleDescription"] = Bayrell.Lang.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.Lang.ModuleDescription;