// Compiled by ClojureScript 1.10.773 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9996,handler){
var map__9997 = p__9996;
var map__9997__$1 = (((((!((map__9997 == null))))?(((((map__9997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9997):map__9997);
var uri = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__9995_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9995_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5720__auto___10015 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___10015)){
var response_type_10016 = temp__5720__auto___10015;
(this$__$1.responseType = cljs.core.name.call(null,response_type_10016));
} else {
}

var seq__9999_10017 = cljs.core.seq.call(null,headers);
var chunk__10000_10018 = null;
var count__10001_10019 = (0);
var i__10002_10020 = (0);
while(true){
if((i__10002_10020 < count__10001_10019)){
var vec__10009_10021 = cljs.core._nth.call(null,chunk__10000_10018,i__10002_10020);
var k_10022 = cljs.core.nth.call(null,vec__10009_10021,(0),null);
var v_10023 = cljs.core.nth.call(null,vec__10009_10021,(1),null);
this$__$1.setRequestHeader(k_10022,v_10023);


var G__10024 = seq__9999_10017;
var G__10025 = chunk__10000_10018;
var G__10026 = count__10001_10019;
var G__10027 = (i__10002_10020 + (1));
seq__9999_10017 = G__10024;
chunk__10000_10018 = G__10025;
count__10001_10019 = G__10026;
i__10002_10020 = G__10027;
continue;
} else {
var temp__5720__auto___10028 = cljs.core.seq.call(null,seq__9999_10017);
if(temp__5720__auto___10028){
var seq__9999_10029__$1 = temp__5720__auto___10028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9999_10029__$1)){
var c__4556__auto___10030 = cljs.core.chunk_first.call(null,seq__9999_10029__$1);
var G__10031 = cljs.core.chunk_rest.call(null,seq__9999_10029__$1);
var G__10032 = c__4556__auto___10030;
var G__10033 = cljs.core.count.call(null,c__4556__auto___10030);
var G__10034 = (0);
seq__9999_10017 = G__10031;
chunk__10000_10018 = G__10032;
count__10001_10019 = G__10033;
i__10002_10020 = G__10034;
continue;
} else {
var vec__10012_10035 = cljs.core.first.call(null,seq__9999_10029__$1);
var k_10036 = cljs.core.nth.call(null,vec__10012_10035,(0),null);
var v_10037 = cljs.core.nth.call(null,vec__10012_10035,(1),null);
this$__$1.setRequestHeader(k_10036,v_10037);


var G__10038 = cljs.core.next.call(null,seq__9999_10029__$1);
var G__10039 = null;
var G__10040 = (0);
var G__10041 = (0);
seq__9999_10017 = G__10038;
chunk__10000_10018 = G__10039;
count__10001_10019 = G__10040;
i__10002_10020 = G__10041;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
