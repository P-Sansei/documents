(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{370:function(v,_,t){"use strict";t.r(_);var l=t(2),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据库的分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库的分库分表"}},[v._v("#")]),v._v(" 数据库的分库分表")]),v._v(" "),t("h2",{attrs:{id:"数据库的性能瓶颈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库的性能瓶颈"}},[v._v("#")]),v._v(" 数据库的性能瓶颈")]),v._v(" "),t("ul",[t("li",[v._v("连接数")]),v._v(" "),t("li",[v._v("处理能力")]),v._v(" "),t("li",[v._v("存储容量")])]),v._v(" "),t("h2",{attrs:{id:"数据库优化方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库优化方案"}},[v._v("#")]),v._v(" 数据库优化方案")]),v._v(" "),t("ul",[t("li",[v._v("SQL 优化")]),v._v(" "),t("li",[v._v("索引")]),v._v(" "),t("li",[v._v("分区")]),v._v(" "),t("li",[v._v("主从复制，读写分离： 通过数据的冗余做到从的数据库上去，主要是一个高可用的作用")]),v._v(" "),t("li",[v._v("集群: 通过负载均衡的方式实现数据的容错性，和高性能")]),v._v(" "),t("li",[v._v("向上扩展：扩展硬件")]),v._v(" "),t("li",[v._v("分库分表：")]),v._v(" "),t("li",[v._v("大数据： 当以上的方案都不能满足业务时，就要抛弃关系型数据库，改用大数据方案")])]),v._v(" "),t("h2",{attrs:{id:"什么时候考虑切分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么时候考虑切分"}},[v._v("#")]),v._v(" 什么时候考虑切分")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意事项")]),v._v(" "),t("p",[v._v("能不切分尽量不切分")])]),v._v(" "),t("ol",[t("li",[v._v("数据量过大 500w~1000w(阿里规范建议单表是500w，容量不要超过2G)")]),v._v(" "),t("li",[v._v("数据增长过快（比如电商做商品促销活动，每天以500w+ 的数据量增长）")]),v._v(" "),t("li",[v._v("对某些字段进行切分（看业务需求，不同的业务数据放到不同的业务表里）")]),v._v(" "),t("li",[v._v("处于安全性和可用性来考虑")])]),v._v(" "),t("h2",{attrs:{id:"切分类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切分类型"}},[v._v("#")]),v._v(" 切分类型")]),v._v(" "),t("ul",[t("li",[v._v("垂直分库")]),v._v(" "),t("li",[v._v("垂直分表")]),v._v(" "),t("li",[v._v("水平分表")]),v._v(" "),t("li",[v._v("水平分库分表")])]),v._v(" "),t("h2",{attrs:{id:"数据切分以后的问题和解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据切分以后的问题和解决方案"}},[v._v("#")]),v._v(" 数据切分以后的问题和解决方案")]),v._v(" "),t("ol",[t("li",[v._v("事物一致性的问题 XA 规范（两阶段和三阶段）")]),v._v(" "),t("li",[v._v("跨节点的关联查询问题 （join）\n"),t("ul",[t("li",[v._v("全局表")]),v._v(" "),t("li",[v._v("字段的冗余")]),v._v(" "),t("li",[v._v("ER 分片")]),v._v(" "),t("li",[v._v("数据组装（比较耗时）")])])]),v._v(" "),t("li",[v._v("跨节点的排序，分页，函数问题，结果汇总做二次计算")]),v._v(" "),t("li",[v._v("全局主键的问题 （UUID，数据表来维护，开源的全局ID生产系统）")]),v._v(" "),t("li",[v._v("数据的迁移，扩容问题")])])])}),[],!1,null,null,null);_.default=a.exports}}]);