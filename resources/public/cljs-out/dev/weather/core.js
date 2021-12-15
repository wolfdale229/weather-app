// Compiled by ClojureScript 1.10.773 {}
goog.provide('weather.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.dom');
if((typeof weather !== 'undefined') && (typeof weather.core !== 'undefined') && (typeof weather.core.app_state !== 'undefined')){
} else {
weather.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"WhichWeather",new cljs.core.Keyword(null,"postalcode","postalcode",1580803416),"",new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Today",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Tomorrow",new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)], null));
}
weather.core.api_key = "f8e8ad51c3029604ffbaf0d0cae7eac2";
weather.core.handle_response = (function weather$core$handle_response(resp){
var today = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"main","temp"], null));
var tomorrow = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(8),"main","temp"], null));
cljs.core.swap_BANG_.call(null,weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,today));

return cljs.core.swap_BANG_.call(null,weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,tomorrow));
});
weather.core.get_forecast_BANG_ = (function weather$core$get_forecast_BANG_(){
var postal_code = new cljs.core.Keyword(null,"postalcode","postalcode",1580803416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,weather.core.app_state));
return ajax.core.GET.call(null,"http://api.openweathermap.org/data/2.5/forecast",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, ["q",postal_code,"appid",weather.core.api_key,"units","imperial"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),weather.core.handle_response], null));
});
weather.core.title = (function weather$core$title(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,weather.core.app_state))], null);
});
weather.core.postal_code = (function weather$core$postal_code(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"postal-code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter your postal code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Postal Code",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15208_SHARP_){
return cljs.core.swap_BANG_.call(null,weather.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"postalcode","postalcode",1580803416),p1__15208_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"postalcode","postalcode",1580803416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,weather.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button.is-primary","input.button.is-primary",1966008315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return weather.core.get_forecast_BANG_.call(null);
})], null)], null)], null);
});
weather.core.temperature = (function weather$core$temperature(temp){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"temperature"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value"], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(temp)], null)], null);
});
weather.core.app = (function weather$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather.core.title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"temperatures"], null),(function (){var iter__4529__auto__ = (function weather$core$app_$_iter__15209(s__15210){
return (new cljs.core.LazySeq(null,(function (){
var s__15210__$1 = s__15210;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15210__$1);
if(temp__5720__auto__){
var s__15210__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15210__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15210__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15212 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15211 = (0);
while(true){
if((i__15211 < size__4528__auto__)){
var temp = cljs.core._nth.call(null,c__4527__auto__,i__15211);
cljs.core.chunk_append.call(null,b__15212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather.core.temperature,temp], null));

var G__15213 = (i__15211 + (1));
i__15211 = G__15213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15212),weather$core$app_$_iter__15209.call(null,cljs.core.chunk_rest.call(null,s__15210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15212),null);
}
} else {
var temp = cljs.core.first.call(null,s__15210__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather.core.temperature,temp], null),weather$core$app_$_iter__15209.call(null,cljs.core.rest.call(null,s__15210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"temperatures","temperatures",1108381981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,weather.core.app_state))));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather.core.postal_code], null)], null);
});
weather.core.mount_element_app = (function weather$core$mount_element_app(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weather.core.app], null),goog.dom.getElement("app"));
});
weather.core.mount_element_app.call(null);
weather.core.on_reload = (function weather$core$on_reload(){
return weather.core.mount_element_app.call(null);
});

//# sourceMappingURL=core.js.map
