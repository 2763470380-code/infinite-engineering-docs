<script setup lang="ts">
import { ref } from 'vue'
import VipPackage from './VipPackage.vue'

const tiers = [
  { id: 'black-iron', label: '黑铁VIP' },
  { id: 'bronze', label: '青铜VIP' },
  { id: 'gold', label: '黄金VIP' },
  { id: 'diamond', label: '钻石VIP' },
  { id: 'infinity', label: '寰宇VIP' }
] as const

type MembershipTier = typeof tiers[number]['id']

const activeTier = ref<MembershipTier>('black-iron')

function selectTier(tier: MembershipTier) {
  activeTier.value = tier
}

function handleTabKeydown(event: KeyboardEvent, index: number) {
  let nextIndex = index

  if (event.key === 'ArrowRight') nextIndex = (index + 1) % tiers.length
  else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tiers.length) % tiers.length
  else if (event.key === 'Home') nextIndex = 0
  else if (event.key === 'End') nextIndex = tiers.length - 1
  else return

  event.preventDefault()
  const nextTier = tiers[nextIndex]
  selectTier(nextTier.id)
  document.getElementById(`membership-tab-${nextTier.id}`)?.focus()
}
</script>

<template>
  <div class="membership-levels">
    <slot name="tiers" :activeTier="activeTier" :selectTier="selectTier" />
    <slot name="comparison" />

    <section id="membership-details" class="membership-section membership-details" aria-labelledby="details-title">
      <div class="membership-section-heading centered">
        <p class="membership-kicker">GIFT PACKAGES</p>
        <h2 id="details-title">会员详细信息</h2>
        <p>选择一个会员等级，查看礼包预览、核心权益与重点物品；升级时请参阅上方礼包回收说明。</p>
      </div>

      <div class="membership-tier-tabs" role="tablist" aria-label="选择会员礼包详情">
        <button
          v-for="(tier, index) in tiers"
          :id="`membership-tab-${tier.id}`"
          :key="tier.id"
          type="button"
          role="tab"
          :aria-selected="activeTier === tier.id"
          :aria-controls="'membership-details-panel'"
          :tabindex="activeTier === tier.id ? 0 : -1"
          @click="selectTier(tier.id)"
          @keydown="handleTabKeydown($event, index)"
        >
          {{ tier.label }}
        </button>
      </div>

      <div
        id="membership-details-panel"
        class="membership-tab-panel"
        role="tabpanel"
        tabindex="0"
        :aria-labelledby="`membership-tab-${activeTier}`"
      >
        <VipPackage :tier="activeTier" />
      </div>
    </section>
  </div>
</template>
