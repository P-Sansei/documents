(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{279:function(t,e,s){"use strict";s.r(e);var n=s(2),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自己如何实现消息队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己如何实现消息队列"}},[t._v("#")]),t._v(" 自己如何实现消息队列")]),t._v(" "),s("p",[t._v("大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行.")]),t._v(" "),s("p",[t._v("添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作,")]),t._v(" "),s("p",[t._v("当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。")])])}),[],!1,null,null,null);e.default=r.exports}}]);