(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{302:function(e,s,a){"use strict";a.r(s);var v=a(2),i=Object(v.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redis-内存淘汰机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存淘汰机制"}},[e._v("#")]),e._v(" Redis 内存淘汰机制")]),e._v(" "),a("p",[e._v("Redis 内存淘汰指的是用户存储的一些键被可以被 Redis 主动地从实例中删除，从而产生读 miss 的情况，那么 Redis 为什么要有这种功能？这就是我们需要探究的设计初衷。Redis 最常见的两种应用场景为缓存和持久存储，首先要明确的一个问题是内存淘汰策略更适合于那种场景？是持久存储还是缓存？")]),e._v(" "),a("p",[e._v("假设我们有一个 Redis 服务器，服务器物理内存大小为 1G 的，我们需要存在 Redis 中的数据量很小，这看起来似乎足够用很长时间了，随着业务量的增长，我们放在 Redis 里面的数据越来越多了，数据量大小似乎超过了 1G，但是应用还可以正常运行，这是因为操作系统的可见内存并不受物理内存限制，而是虚拟内存，物理内存不够用没关系，操作系统会从硬盘上划出一片空间用于构建虚拟内存，比如32位的操作系统的可见内存大小为 2^32，而用户空间的可见内存要小于 2^32 很多，大概是 3G 左右。好了，我们庆幸操作系统为我们做了这些，但是我们需要知道这背后的代价是不菲的，不合理的使用内存有可能发生频繁的 swap，频繁 swap 的代价是惨痛的。所以回过头来看，作为有追求的程序员，我们还是要小心翼翼地使用好每块内存，把用户代码能解决的问题尽量不要抛给操作系统解决。")]),e._v(" "),a("p",[a("strong",[e._v("内存的淘汰机制的初衷是为了更好地使用内存，用一定的缓存 miss 来换取内存的使用效率。")])]),e._v(" "),a("h2",{attrs:{id:"如何用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何用"}},[e._v("#")]),e._v(" 如何用")]),e._v(" "),a("p",[e._v("作为 Redis 用户，我们如何使用 Redis 提供的这个特性呢？")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# maxmemory <bytes>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("我们可以通过配置 "),a("code",[e._v("redis.conf")]),e._v(" 中的 "),a("code",[e._v("maxmemory")]),e._v(" 这个值来开启内存淘汰功能，至于这个值有什么意义，我们可以通过了解内存淘汰的过程来理解它的意义：")]),e._v(" "),a("p",[e._v("客户端发起了需要申请更多内存的命令（如set）\nRedis 检查内存使用情况，如果已使用的内存大于 "),a("code",[e._v("maxmemory")]),e._v(" 则开始根据用户配置的不同淘汰策略来淘汰内存（key），从而换取一定的内存\n如果上面都没问题，则这个命令执行成功\n"),a("code",[e._v("maxmemory")]),e._v(" 为 "),a("code",[e._v("0")]),e._v(" 的时候表示我们对 Redis 的内存使用没有限制")]),e._v(" "),a("h2",{attrs:{id:"内存淘汰策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[e._v("#")]),e._v(" 内存淘汰策略")]),e._v(" "),a("p",[e._v("内存淘汰只是 Redis 提供的一个功能，为了更好地实现这个功能，必须为不同的应用场景提供不同的策略，内存淘汰策略讲的是为实现内存淘汰我们具体怎么做，要解决的问题包括淘汰键空间如何选择？在键空间中淘汰键如何选择？")]),e._v(" "),a("p",[e._v("Redis 提供了下面几种淘汰策略供用户选择，其中默认的策略为 noeviction 策略：")]),e._v(" "),a("ul",[a("li",[e._v("noeviction：当内存使用达到阈值的时候，所有引起申请内存的命令会报错")]),e._v(" "),a("li",[e._v("allkeys-lru：在主键空间中，优先移除最近未使用的key")]),e._v(" "),a("li",[e._v("volatile-lru：在设置了过期时间的键空间中，优先移除最近未使用的 key")]),e._v(" "),a("li",[e._v("allkeys-random：在主键空间中，随机移除某个 key")]),e._v(" "),a("li",[e._v("volatile-random：在设置了过期时间的键空间中，随机移除某个 key")]),e._v(" "),a("li",[e._v("volatile-ttl：在设置了过期时间的键空间中，具有更早过期时间的 key 优先移除\n这里补充一下主键空间和设置了过期时间的键空间，举个例子，假设我们有一批键存储在Redis中，则有那么一个哈希表用于存储这批键及其值，如果这批键中有一部分设置了过期时间，那么这批键还会被存储到另外一个哈希表中，这个哈希表中的值对应的是键被设置的过期时间。设置了过期时间的键空间为主键空间的子集。")])]),e._v(" "),a("h2",{attrs:{id:"如何选择淘汰策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择淘汰策略"}},[e._v("#")]),e._v(" 如何选择淘汰策略")]),e._v(" "),a("p",[e._v("我们了解了 Redis 大概提供了这么几种淘汰策略，那么如何选择呢？淘汰策略的选择可以通过下面的配置指定：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# maxmemory-policy noeviction\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("但是这个值填什么呢？为解决这个问题，我们需要了解我们的应用请求对于 Redis 中存储的数据集的访问方式以及我们的诉求是什么。同时 Redis 也支持 Runtime 修改淘汰策略，这使得我们不需要重启 Redis 实例而实时的调整内存淘汰策略。")]),e._v(" "),a("p",[e._v("下面看看几种策略的适用场景：")]),e._v(" "),a("ul",[a("li",[e._v("allkeys-lru：如果我们的应用对缓存的访问符合幂律分布（也就是存在相对热点数据），或者我们不太清楚我们应用的缓存访问分布状况，我们可以选择 allkeys-lru 策略")]),e._v(" "),a("li",[e._v("allkeys-random：如果我们的应用对于缓存 key 的访问概率相等，则可以使用这个策略")]),e._v(" "),a("li",[e._v("volatile-ttl：这种策略使得我们可以向 Redis 提示哪些 key 更适合被 eviction\n另外，"),a("code",[e._v("volatile-lru")]),e._v(" 策略和 "),a("code",[e._v("volatile-random")]),e._v(" 策略适合我们将一个Redis实例既应用于缓存和又应用于持久化存储的时候，然而我们也可以通过使用两个 Redis 实例来达到相同的效果，值得一提的是将key设置过期时间实际上会消耗更多的内存，因此我们建议使用 "),a("code",[e._v("allkeys-lru")]),e._v(" 策略从而更有效率的使用内存。")])]),e._v(" "),a("h2",{attrs:{id:"非精准的-lru"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非精准的-lru"}},[e._v("#")]),e._v(" 非精准的 LRU")]),e._v(" "),a("p",[e._v("上面提到的 LRU（Least Recently Used）策略，实际上 Redis 实现的 LRU 并不是可靠的 LRU，也就是名义上我们使用 LRU 算法淘汰键，但是实际上被淘汰的键并不一定是真正的最久没用的，这里涉及到一个权衡的问题，如果需要在全部键空间内搜索最优解，则必然会增加系统的开销，Redis 是单线程的，也就是同一个实例在每一个时刻只能服务于一个客户端，所以耗时的操作一定要谨慎。为了在一定成本内实现相对的 LRU，早期的 Redis 版本是基于采样的 LRU，也就是放弃全部键空间内搜索解改为采样空间搜索最优解。自从 Redis3.0 版本之后，Redis 作者对于基于采样的 LRU 进行了一些优化，目的是在一定的成本内让结果更靠近真实的 LRU。")])])}),[],!1,null,null,null);s.default=i.exports}}]);