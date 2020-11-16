(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{314:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基于角色的访问控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于角色的访问控制"}},[s._v("#")]),s._v(" 基于角色的访问控制")]),s._v(" "),t("p",[s._v("以角色为基础的访问控制（Role-based access control, RBAC），是资讯安全领域中，一种较新且广为使用的访问控制机制，其不同于强制访问控制以及自由选定访问控制直接赋予使用者权限，而是将权限赋予角色。是一套较强制访问控制以及自由选定访问控制更为中性且更具灵活性的访问控制技术。")]),s._v(" "),t("h2",{attrs:{id:"什么是-rbac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-rbac"}},[s._v("#")]),s._v(" 什么是 RBAC")]),s._v(" "),t("p",[s._v("RBAC 模型的基本思想是将访问许可权分配给一定的角色，用户通过饰演不同的角色获得角色所拥有的访问许可权。")]),s._v(" "),t("p",[s._v("访问控制可以简单表述为：判断谁（Who）对什么（What/Which）进行怎样（How）的操作是否为真。")]),s._v(" "),t("p",[s._v("在 RBAC 中，用户的权限不是在用户本身上进行管理的，用户的权限是由用户所处的角色所决定的。在权限管理中，通过角色这一桥梁将用户与权限联系起来。用户和角色、角色与权限是一个多对多的关系。")]),s._v(" "),t("p",[s._v("与 RBAC 访问控制相关的概念有：")]),s._v(" "),t("ol",[t("li",[s._v("用户（User）：一个具有唯一标识符的用户，与权限相分离，只能通过所属的 Role 去关联权限，一个用户可以拥有多项角色；")]),s._v(" "),t("li",[s._v("角色（Role）:一定数量的权限的集合，角色可以继承，一个角色对应多项权限；")]),s._v(" "),t("li",[s._v("权限（Resource）：也可以看作是资源，它对应了应用系统中的一个功能；")])]),s._v(" "),t("h2",{attrs:{id:"设计对应的数据表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计对应的数据表结构"}},[s._v("#")]),s._v(" 设计对应的数据表结构")]),s._v(" "),t("p",[s._v("这里使用的是 ThinkPHP 的表结构，字段设置符合功能的设计要求。")]),s._v(" "),t("h3",{attrs:{id:"用户表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户表"}},[s._v("#")]),s._v(" 用户表")]),s._v(" "),t("p",[s._v("第一个表是 用户表，都是一些很常用的字段，比较好理解")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE `think_user` (\n\t`id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,\n\t`account` varchar(64) NOT NULL,\n\t`nickname` varchar(50) NOT NULL,\n\t`password` char(32) NOT NULL,\n\t`email` varchar(50) NOT NULL,\n\t`remark` varchar(255) NOT NULL,\n\t`create_time` int(11) UNSIGNED NOT NULL,\n\t`status` tinyint(1) DEFAULT '0',\n\tPRIMARY KEY (`id`),\n\tUNIQUE `account` (`account`)\n) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARSET = utf8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"角色表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色表"}},[s._v("#")]),s._v(" 角色表")]),s._v(" "),t("p",[s._v("第二个是 角色表，也可以理解为分组表")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE IF NOT EXISTS `think_role` (\n\t`id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,\n\t`name` varchar(20) NOT NULL,\n\t`pid` smallint(6) DEFAULT NULL,\n\t`status` tinyint(1) UNSIGNED DEFAULT NULL,\n\t`remark` varchar(255) DEFAULT NULL,\n\tPRIMARY KEY (`id`),\n\tKEY `pid` (`pid`),\n\tKEY `status` (`status`)\n) ENGINE = MyISAM CHARSET = utf8;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"角色—用户—关系映射表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色—用户—关系映射表"}},[s._v("#")]),s._v(" 角色—用户—关系映射表")]),s._v(" "),t("p",[s._v("第三个是 角色—用户—关系映射表，注意，这个表的数据，可以是多对多的关系，也就是多个角色对应一个用户，多个用户对应一个角色。在我的实际使用中，没有涉及到一个用户对应多个角色的情况，也是为了简化操作。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE IF NOT EXISTS `think_role_user` (\n\t`role_id` mediumint(9) UNSIGNED DEFAULT NULL,\n\t`user_id` char(32) DEFAULT NULL,\n\tKEY `group_id` (`role_id`),\n\tKEY `user_id` (`user_id`)\n) ENGINE = MyISAM CHARSET = utf8;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"资源表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源表"}},[s._v("#")]),s._v(" 资源表")]),s._v(" "),t("p",[s._v("第四个是节点表，也就是资源表，要注意的两个字段：pid 用来关联节点的层级，level 用来说明该节点是 应用 ，还是模块和操作。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE IF NOT EXISTS `think_node` (\n\t`id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,\n\t`name` varchar(20) NOT NULL,\n\t`title` varchar(50) DEFAULT NULL,\n\t`status` tinyint(1) DEFAULT '0',\n\t`remark` varchar(255) DEFAULT NULL,\n\t`sort` smallint(6) UNSIGNED DEFAULT NULL,\n\t`pid` smallint(6) UNSIGNED NOT NULL,\n\t`level` tinyint(1) UNSIGNED NOT NULL,\n\tPRIMARY KEY (`id`),\n\tKEY `level` (`level`),\n\tKEY `pid` (`pid`),\n\tKEY `status` (`status`),\n\tKEY `name` (`name`)\n) ENGINE = MyISAM CHARSET = utf8;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"权限访问表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限访问表"}},[s._v("#")]),s._v(" 权限访问表")]),s._v(" "),t("p",[s._v("最后，也是最关键的表 权限访问表，这个表中的数据，是每个角色对应的权限。理解这个表的结构，也就明白了整个 RBAC 的关键。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE IF NOT EXISTS `think_access` (\n`role_id` smallint(6) UNSIGNED NOT NULL,\n`node_id` smallint(6) UNSIGNED NOT NULL,\n`level` tinyint(1) NOT NULL,\n`module` varchar(50) DEFAULT NULL,\nKEY `groupId` (`role_id`),\nKEY `nodeId` (`node_id`)\n) ENGINE = MyISAM CHARSET = utf8;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("通过以上五张表即可完成基于 RBAC 的权限控制。当然，上面提到的都是整个权限管理的基础数据，也就是需要配置的数据。下一步，就是要在用户登录的时候，获取对应的权限。")]),s._v(" "),t("h2",{attrs:{id:"获取用户的权限列表的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取用户的权限列表的方法"}},[s._v("#")]),s._v(" 获取用户的权限列表的方法")]),s._v(" "),t("ol",[t("li",[s._v("查询用户所属的角色 ID；")]),s._v(" "),t("li",[s._v("根据角色 ID 从 ACCESS 表中获取该角色所能访问的节点列表；")]),s._v(" "),t("li",[s._v("从 NODE 中查询节点列表的相关信息；")]),s._v(" "),t("li",[s._v("对产生的节点列表信息进行处理，生成访问决策列表保存到 SESSION 中；")])])])}),[],!1,null,null,null);a.default=e.exports}}]);