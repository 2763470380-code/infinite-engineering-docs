---
pageClass: membership-page
outline: false
---

<section class="membership-hero" aria-labelledby="membership-title">
  <p class="membership-eyebrow">INFINITE MEMBERSHIP</p>
  <h1 id="membership-title">无限工程会员赞助</h1>
  <p class="membership-lede">选择适合自己的会员等级，查看长期权益与专属礼包。</p>
  <div class="membership-hero-actions"><a class="membership-button primary" href="#vip-tiers">查看会员等级</a><a class="membership-button secondary" href="#membership-rules">查看权益说明</a></div>
  <p class="membership-hero-facts">永久会员 <span>·</span> 五档等级 <span>·</span> 专属礼包 <span>·</span> 长期权益</p>
</section>

<section id="membership-rules" class="membership-section membership-rules" aria-labelledby="rules-title">
  <div class="membership-section-heading"><p class="membership-kicker">MEMBERSHIP POLICY</p><h2 id="rules-title">赞助前请阅读</h2></div>
  <div class="membership-policy-grid">
    <article><h3>永久权益</h3><p>所有会员等级均为永久赞助，会员权益与会员赞助 <strong>100% 周目继承</strong>。</p></article>
    <article><h3>点券与升级</h3><p>1 元 = 10 点券。会员只能使用充值获得的点券购买；低等级升级至高等级时只需补差价。</p></article>
    <article><h3>礼包回收</h3><p>升级时会回收此前礼包。若旧礼包内的物品已使用或丢失，将从新礼包中扣除对应物品。</p></article>
  </div>
  <div class="membership-notice" role="note"><strong>礼包物品使用说明：</strong>会员礼包中的物品禁止随意给予其他玩家使用；组队玩家不受此项限制。请共同维护公平、稳定、良好的服务器发展环境。</div>
</section>

<MembershipTierSwitcher>
<template #tiers="{ activeTier, selectTier }">
<section id="vip-tiers" class="membership-section" aria-labelledby="tiers-title">
  <div class="membership-section-heading centered"><p class="membership-kicker">MEMBERSHIP TIERS</p><h2 id="tiers-title">五个永久会员等级</h2><p>查看各等级的核心权益，再选择适合自己的长期方案。</p></div>
  <div class="membership-tier-grid">
    <button type="button" class="membership-tier-card" :aria-pressed="activeTier === 'black-iron'" @click="selectTier('black-iron')"><h3>黑铁VIP</h3><p class="membership-tier-summary">适合开始长期发展的玩家。</p><p class="membership-tier-price">¥ 38</p><ul><li>最大家数量 +3</li><li>专属特效与称号</li><li>黑铁VIP专属礼包</li></ul><span class="membership-card-link">查看详情</span></button>
    <button type="button" class="membership-tier-card" :aria-pressed="activeTier === 'bronze'" @click="selectTier('bronze')"><h3>青铜VIP</h3><p class="membership-tier-summary">提供更充足的便利权益与礼包支持。</p><p class="membership-tier-price">¥ 68</p><ul><li>最大家数量 +5</li><li>传送无延迟</li><li>专属特效、称号与礼包</li></ul><span class="membership-card-link">查看详情</span></button>
    <button type="button" class="membership-tier-card featured" :aria-pressed="activeTier === 'gold'" @click="selectTier('gold')"><p class="membership-recommended">较受欢迎</p><h3>黄金VIP</h3><p class="membership-tier-summary">兼顾长期发展与进阶科技建设。</p><p class="membership-tier-price">¥ 138</p><ul><li>最大家数量 +8</li><li>传送无延迟</li><li>专属特效、称号与礼包</li></ul><span class="membership-card-link">查看详情</span></button>
    <button type="button" class="membership-tier-card" :aria-pressed="activeTier === 'diamond'" @click="selectTier('diamond')"><h3>钻石VIP</h3><p class="membership-tier-summary">面向需要更高便利度的长期玩家。</p><p class="membership-tier-price">¥ 328</p><ul><li>最大家数量 +12</li><li>传送无延迟、无冷却</li><li>专属特效、称号与礼包</li></ul><span class="membership-card-link">查看详情</span></button>
    <button type="button" class="membership-tier-card infinity" :aria-pressed="activeTier === 'infinity'" @click="selectTier('infinity')"><h3>寰宇VIP</h3><p class="membership-tier-summary">提供最高等级的长期会员权益。</p><p class="membership-tier-price">¥ 648</p><ul><li>最大家数量 +16</li><li>传送无延迟、无冷却</li><li>专属特效、称号与礼包</li></ul><span class="membership-card-link">查看详情</span></button>
  </div>
</section>
</template>

<template #comparison>
<section class="membership-section membership-comparison" aria-labelledby="comparison-title">
  <details class="membership-comparison-disclosure"><summary><span><strong id="comparison-title">会员权益对比</strong><small>快速查看不同会员等级之间的权益差异。</small></span></summary><div class="membership-table-wrap" tabindex="0" aria-label="会员权益对比表，可横向滚动"><table><thead><tr><th>会员权益</th><th>黑铁</th><th>青铜</th><th class="highlight">黄金</th><th>钻石</th><th>寰宇</th></tr></thead><tbody><tr><th>永久会员</th><td>✓</td><td>✓</td><td class="highlight">✓</td><td>✓</td><td>✓</td></tr><tr><th>最大家数量</th><td>+3</td><td>+5</td><td class="highlight">+8</td><td>+12</td><td>+16</td></tr><tr><th>传送无延迟</th><td>—</td><td>✓</td><td class="highlight">✓</td><td>✓</td><td>✓</td></tr><tr><th>传送无冷却</th><td>—</td><td>—</td><td class="highlight">—</td><td>✓</td><td>✓</td></tr><tr><th>专属特效</th><td>✓</td><td>✓</td><td class="highlight">✓</td><td>✓</td><td>✓</td></tr><tr><th>专属称号</th><td>✓</td><td>✓</td><td class="highlight">✓</td><td>✓</td><td>✓</td></tr><tr><th>对应等级礼包</th><td>✓</td><td>✓</td><td class="highlight">✓</td><td>✓</td><td>✓</td></tr></tbody></table></div></details>
</section>
</template>
</MembershipTierSwitcher>

<section class="membership-section membership-faq" aria-labelledby="faq-title"><div class="membership-section-heading centered"><p class="membership-kicker">FAQ</p><h2 id="faq-title">常见问题</h2></div><div class="membership-faq-list"><details><summary>会员赞助是否会在后续周目保留？</summary><p>会。会员赞助与对应权益 100% 周目继承。</p></details><details><summary>低等级会员可以升级到高等级吗？</summary><p>可以。升级至高等级会员时补足差价即可；此前礼包会回收，已使用或丢失的旧礼包物品会从新礼包中扣除。</p></details><details><summary>会员如何使用点券购买？</summary><p>1 元可充值 10 点券。会员只能使用充值获得的点券进行购买。</p></details><details><summary>礼包物品可以交给其他玩家吗？</summary><p>会员礼包中的物品不得随意给予其他玩家使用；组队玩家不受此项限制。</p></details><details><summary>充值或礼包问题如何确认？</summary><p>请先联系腐竹核实对应等级、升级与礼包发放情况，避免因信息不完整造成误会。</p></details></div></section>

<section class="membership-cta" aria-labelledby="cta-title"><h2 id="cta-title">选择适合你的会员等级</h2><p>查看各等级权益与礼包内容，选择适合自己的方案。</p><div><a class="membership-button mint" href="#vip-tiers">返回会员等级</a><a class="membership-button dark-outline" href="#membership-rules">查看赞助说明</a></div><p class="membership-contact">联系腐竹 QQ：<code>2602346931</code></p><CopyQQButton /></section>
