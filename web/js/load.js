/*!
 *  Bayrell Runtime Library
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


$load([
	"/assets/Runtime/es6/rtl.js",
])
.load([
	"/assets/Runtime/es6/rs.js",
	"/assets/Runtime/es6/re.js",
	"/assets/Runtime/es6/lib.js",
	"/assets/Runtime/es6/CoreObject.js",
])
.load([
	"/assets/Runtime/es6/Interfaces/LocalBusInterface.js",
	"/assets/Runtime/es6/Interfaces/ModuleDescriptionInterface.js",
	"/assets/Runtime/es6/Interfaces/SerializeInterface.js",
	"/assets/Runtime/es6/Interfaces/StringInterface.js",
])
.load([
	"/assets/Runtime/es6/Collection.js",
	"/assets/Runtime/es6/CoreStruct.js",
	"/assets/Runtime/es6/FakeStruct.js",
	"/assets/Runtime/es6/Dict.js",
])
.load([
	"/assets/Runtime/es6/RuntimeConstant.js",
	"/assets/Runtime/es6/RuntimeUtils.js",
	"/assets/Runtime/es6/Exceptions/RuntimeException.js",
	"/assets/Runtime/es6/BusResult.js",
	"/assets/Runtime/es6/Message.js",
	"/assets/Runtime/es6/PathInfo.js",
	"/assets/Runtime/es6/ModuleDescription.js",
	"/assets/Runtime/es6/Reference.js",
	"/assets/Runtime/es6/DateTime.js",
	"/assets/Runtime/es6/Annotations/Entity.js",
	"/assets/Runtime/es6/UIStruct.js",
])
.load([
	"/assets/Runtime/es6/CoreProvider.js",
	"/assets/Runtime/es6/CoreEvent.js",
	"/assets/Runtime/es6/Map.js",
	"/assets/Runtime/es6/MessageRPC.js",
	"/assets/Runtime/es6/Vector.js",
	"/assets/Runtime/es6/Annotations/IntrospectionClass.js",
	"/assets/Runtime/es6/Annotations/IntrospectionInfo.js",
	"/assets/Runtime/es6/Annotations/LambdaChain.js",
	"/assets/Runtime/es6/Annotations/LambdaChainDeclare.js",
	"/assets/Runtime/es6/Annotations/Driver.js",
	"/assets/Runtime/es6/Annotations/Provider.js",
	"/assets/Runtime/es6/Exceptions/ApiException.js",
	"/assets/Runtime/es6/Exceptions/IndexOutOfRange.js",
	"/assets/Runtime/es6/Exceptions/KeyNotFound.js",
	"/assets/Runtime/es6/Exceptions/UnknownError.js",
])
.load([
	"/assets/Runtime/es6/AsyncAwait.js",
	"/assets/Runtime/es6/Context.js",
])
.success(function(){
	$load.deliver('Runtime_loaded');
});


$load
.subscribe(['Runtime_loaded'])
.load([
	"/assets/Bayrell.Lang/es6/Caret.js",
	"/assets/Bayrell.Lang/es6/CoreParser.js",
	"/assets/Bayrell.Lang/es6/CoreToken.js",
	"/assets/Bayrell.Lang/es6/CoreTranslator.js",
	"/assets/Bayrell.Lang/es6/LangConstant.js",
	"/assets/Bayrell.Lang/es6/LangUtils.js",
	"/assets/Bayrell.Lang/es6/SaveOpCode.js",
	"/assets/Bayrell.Lang/es6/ModuleDescription.js",
	"/assets/Bayrell.Lang/es6/Exceptions/ParserUnknownError.js",
	"/assets/Bayrell.Lang/es6/OpCodes/BaseOpCode.js",
])
.load([
	"/assets/Bayrell.Lang/es6/Exceptions/ParserError.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBay.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayBase.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayExpression.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayHtml.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayOperator.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayPreprocessor.js",
	"/assets/Bayrell.Lang/es6/LangBay/ParserBayProgram.js",
	"/assets/Bayrell.Lang/es6/LangES6/AsyncAwait.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6AsyncAwait.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6Expression.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6Html.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6Operator.js",
	"/assets/Bayrell.Lang/es6/LangES6/TranslatorES6Program.js",
	"/assets/Bayrell.Lang/es6/LangPHP/TranslatorPHP.js",
	"/assets/Bayrell.Lang/es6/LangPHP/TranslatorPHPExpression.js",
	"/assets/Bayrell.Lang/es6/LangPHP/TranslatorPHPHtml.js",
	"/assets/Bayrell.Lang/es6/LangPHP/TranslatorPHPOperator.js",
	"/assets/Bayrell.Lang/es6/LangPHP/TranslatorPHPProgram.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpAnnotation.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpAssign.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpAssignStruct.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpAssignValue.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpAttr.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpBreak.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpCall.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpClassOf.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpClassRef.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpCollection.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpComment.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpContinue.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpDeclareClass.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpDeclareFunction.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpDeclareFunctionArg.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpDelete.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpDict.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpEntityName.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpFlags.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpFor.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpHtmlAttribute.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpHtmlContent.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpHtmlItems.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpHtmlTag.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpHtmlValue.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpIdentifier.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpIf.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpIfElse.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpInc.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpItems.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpMath.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpMethod.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpModule.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpNamespace.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpNew.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpNumber.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpPipe.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpPreprocessorIfCode.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpPreprocessorIfDef.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpPreprocessorSwitch.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpReturn.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpString.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpTernary.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpThrow.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpTryCatch.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpTryCatchItem.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpTypeConvert.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpTypeIdentifier.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpUse.js",
	"/assets/Bayrell.Lang/es6/OpCodes/OpWhile.js",
])
.load([
	"/assets/Bayrell.Lang/es6/Exceptions/ParserEOF.js",
	"/assets/Bayrell.Lang/es6/Exceptions/ParserExpected.js",
	"/assets/Bayrell.Lang/es6/LangNode/TranslatorNode.js",
	"/assets/Bayrell.Lang/es6/LangNode/TranslatorNodeExpression.js",
	"/assets/Bayrell.Lang/es6/LangNode/TranslatorNodeProgram.js",
])
.load([
])
.success(function(){
	$load.deliver('BayrellLang_loaded');
});