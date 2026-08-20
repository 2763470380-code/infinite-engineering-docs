<script setup lang="ts">
import { computed } from 'vue'

type GiftItem = {
  name: string
  quantity?: string
}

type GiftCategory = {
  name: string
  description?: string
  items: GiftItem[]
}

const packages = {
  'black-iron': {
    id: 'black-iron',
    name: '黑铁VIP',
    label: '永久会员礼包',
    price: '¥ 38',
    image: '/vip/black-iron-vip.png',
    benefits: ['最大家数量 +3', '黑铁VIP专属特效', '黑铁VIP专属称号'],
    categories: [
      { name: 'AE2模组物品', items: [{ name: '256K存储元件', quantity: '16' }, { name: '外壳', quantity: '16' }, { name: '合成单元', quantity: '16' }, { name: 'ME接口', quantity: '16' }, { name: '样板供应器', quantity: '16' }, { name: '控制器', quantity: '16' }, { name: 'ME线缆', quantity: '64' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' }] },
      { name: '精华与无尽模组物品', items: [{ name: '初级精华', quantity: '32' }, { name: '高级精华', quantity: '16' }, { name: '高级精华', quantity: '8' }, { name: '基础中子态素收集器' }] },
      { name: '工业升级模组物品', items: [{ name: '质子太阳能' }, { name: '太阳能升级组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '基础超频', quantity: '32' }, { name: '基础等级轧机' }, { name: '基础等级挤压机' }, { name: '基础等级挤出机' }, { name: '基础等级粉碎/提取机' }, { name: '基础等级合金炉' }, { name: '基础等级固体制冷机' }, { name: '基础等级储能器' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }] },
      { name: 'MEK模组物品', items: [{ name: '精英等级富集机' }, { name: '精英等级粉碎机' }, { name: '精英等级熔炼机' }, { name: '精英等级净化机' }, { name: '精英等级提纯机' }, { name: '精英等级种植机' }, { name: '电缆', quantity: '64' }, { name: '强化速度/能量升级', quantity: '32' }, { name: 'MEK多元宇宙等级安装器' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }] },
      { name: '工具与拔刀剑', items: [{ name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神威刀坎纳' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  bronze: {
    id: 'bronze',
    name: '青铜VIP',
    label: '永久会员礼包',
    price: '¥ 68',
    image: '/vip/bronze-vip.png',
    benefits: ['最大家数量 +5', '传送无延迟', '青铜VIP专属特效与称号'],
    categories: [
      { name: '重要物品', description: '四倍加速，加速产线与机器，节约大量时间。', items: [{ name: '加速火把' }] },
      { name: 'AE2', items: [{ name: '256M存储元件', quantity: '32' }, { name: '外壳', quantity: '32' }, { name: '合成单元', quantity: '32' }, { name: 'ME接口', quantity: '32' }, { name: '过载模块', quantity: '32' }, { name: '扩展模块', quantity: '32' }, { name: '样板供应器', quantity: '32' }, { name: '控制器', quantity: '32' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '8' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '量子套' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' }] },
      { name: '精华与无尽', items: [{ name: '初级精华', quantity: '32' }, { name: '高级精华', quantity: '32' }, { name: '高级精华', quantity: '16' }, { name: '基础中子态素收集器', quantity: '4' }] },
      { name: '工业升级', items: [{ name: '奇异太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '基础超频', quantity: '64' }, { name: '改良等级轧机' }, { name: '改良等级挤压机' }, { name: '改良等级挤出机' }, { name: '改良等级粉碎机' }, { name: '改良等级提取机' }, { name: '改良等级合金机' }, { name: '改良等级固体制冷机' }, { name: '改良等级储能器' }, { name: '分子重构仪' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }] },
      { name: 'MEK', items: [{ name: '绝对等级富集机' }, { name: '绝对等级粉碎机' }, { name: '绝对等级熔炼机' }, { name: '绝对等级净化机' }, { name: '绝对等级提纯机' }, { name: '绝对等级种植机' }, { name: '电缆', quantity: '64' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '4' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }] },
      { name: '工具与拔刀剑', items: [{ name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '灵钢刃「技术革新」' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  gold: {
    id: 'gold',
    name: '黄金VIP',
    label: '推荐 · 永久会员礼包',
    price: '¥ 138',
    image: '/vip/gold-vip.png',
    featured: true,
    benefits: ['最大家数量 +8', '传送无延迟', '黄金VIP专属特效与称号'],
    categories: [
      { name: '重要', description: '四倍加速，加速产线与机器，节约大量时间。', items: [{ name: '加速火把' }] },
      { name: 'AE2', items: [{ name: '量子存储元件' }, { name: '量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '量子套' }, { name: '无限圆石' }, { name: '无限水' }, { name: '无限熔岩' }] },
      { name: '精华与无尽', items: [{ name: '初级精华', quantity: '32' }, { name: '高级精华', quantity: '32' }, { name: '高级精华', quantity: '32' }, { name: '致密中子态素收集器' }, { name: '万魂之核' }] },
      { name: '工业升级', items: [{ name: '衍射太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '16' }, { name: 'QE/EF转换器' }, { name: '高级等级轧机' }, { name: '高级等级挤压机' }, { name: '高级等级挤出机' }, { name: '高级等级粉碎机' }, { name: '高级等级提取机' }, { name: '高级等级合金机' }, { name: '高级等级固体制冷机' }, { name: '高级等级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '复制机四件套' }, { name: '光子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '量子电缆', quantity: '64' }] },
      { name: 'MEK', items: [{ name: '至尊等级富集机' }, { name: '至尊等级粉碎机' }, { name: '至尊等级熔炼机' }, { name: '至尊等级净化机' }, { name: '至尊等级提纯机' }, { name: '至尊等级种植机' }, { name: '至尊等级复制机' }, { name: '至尊等级反质子核合成器' }, { name: '电缆', quantity: '64' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }] },
      { name: '工具与拔刀剑', items: [{ name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '灵钢刃「技术革新」' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  diamond: {
    id: 'diamond',
    name: '钻石VIP',
    label: '永久会员礼包',
    price: '¥ 328',
    image: '/vip/diamond-vip.png',
    benefits: ['最大家数量 +12', '传送无延迟、无冷却', '钻石VIP专属特效与称号'],
    categories: [
      { name: '重要', description: '压缩加速火把：360 倍加速，极致加速，效率爆表。', items: [{ name: '压缩加速火把' }] },
      { name: 'AE2', items: [{ name: '无限存储元件' }, { name: '满配量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: 'MeKa套' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' }] },
      { name: '精华与无尽', items: [{ name: '全类型作物种子' }, { name: '创造无限创造营养液' }, { name: '精英中子态素收集器', quantity: '2' }, { name: '精英中子态素压缩机' }, { name: '终焉工作台' }] },
      { name: '工业升级', items: [{ name: '重子太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '16' }, { name: '堆叠/瞬时', quantity: '16' }, { name: 'QE/EF转换器' }, { name: '完美级轧机' }, { name: '完美级挤压机' }, { name: '完美级挤出机' }, { name: '完美级粉碎机' }, { name: '完美级提取机' }, { name: '完美级合金机' }, { name: '完美级固体制冷机' }, { name: '完美级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '复制机四件套' }, { name: '中子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '量子电缆', quantity: '64' }, { name: '创造UU物质' }] },
      { name: 'MEK', items: [{ name: '悖论无限等级富集机' }, { name: '悖论无限等级粉碎机' }, { name: '悖论无限等级熔炼机' }, { name: '悖论无限等级净化机' }, { name: '悖论无限等级提纯机' }, { name: '悖论无限等级种植机' }, { name: '悖论无限等级复制机' }, { name: '悖论无限等级反质子核合成器' }, { name: '电缆', quantity: '64' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器', quantity: '8' }, { name: '创造升级' }, { name: '创造FE能源' }] },
      { name: '工具与扩展', items: [{ name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神钢刃「血腥革新」' }, { name: '耀魂碎片', quantity: '64' }, { name: '植物魔法：创造魔力池' }, { name: '龙研：混沌碎片', quantity: '64' }] }
    ]
  },
  infinity: {
    id: 'infinity',
    name: '寰宇VIP',
    label: '最高等级 · 永久会员礼包',
    price: '¥ 648',
    image: '/vip/infinity-vip.png',
    infinity: true,
    benefits: ['最大家数量 +16', '传送无延迟、无冷却', '寰宇VIP专属特效与称号'],
    categories: [
      { name: '重要', description: '压缩加速火把：360 倍加速，极致加速，效率爆表。时序钟：至高 256 倍加速机器与作物。区块加载器：离线加载，无需挂机。永恒奇点与无尽催化剂：无尽材料。无限元件：矿石：无限全种类矿石，世上存在的矿石种类“all infinite”。', items: [{ name: '压缩加速火把', quantity: '2' }, { name: '时序钟' }, { name: '区块加载器' }, { name: '永恒奇点', quantity: '8' }, { name: '无尽催化剂', quantity: '4' }, { name: '无限元件：矿石' }] },
      { name: 'AE2', items: [{ name: '无限存储元件' }, { name: '满配量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: 'MeKa套' }, { name: '无限圆石' }, { name: '无限水' }, { name: '无限熔岩' }] },
      { name: '精华与无尽', items: [{ name: '全类型作物种子' }, { name: '创造营养液' }, { name: '极限中子态素收集器', quantity: '4' }, { name: '极限中子态素压缩机', quantity: '4' }, { name: '终焉工作台', quantity: '2' }] },
      { name: '工业升级', items: [{ name: '引力子太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '64' }, { name: '堆叠/瞬时', quantity: '64' }, { name: 'QE/EF转换器' }, { name: 'IU光子级轧机' }, { name: 'IU光子级挤压机' }, { name: 'IU光子级挤出机' }, { name: 'IU光子级粉碎机' }, { name: 'IU光子级提取机' }, { name: 'IU光子级合金机' }, { name: 'IU光子级固体制冷机' }, { name: 'IU光子级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '复制机四件套' }, { name: '引力子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '量子电缆', quantity: '64' }, { name: '创造UU物质' }, { name: '固态物质复制机' }, { name: '固态物质转化机' }] },
      { name: 'MEK', items: [{ name: '创造等级富集机' }, { name: '创造等级粉碎机' }, { name: '创造等级熔炼机' }, { name: '创造等级净化机' }, { name: '创造等级提纯机' }, { name: '创造等级种植机' }, { name: '创造等级复制机' }, { name: '创造等级流体复制机' }, { name: '电缆', quantity: '64' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器', quantity: '8' }, { name: '创造升级', quantity: '2' }, { name: '创造FE能源' }, { name: '创造流体储罐' }, { name: '创造化学品储罐' }] },
      { name: '工具与扩展', items: [{ name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神钢刃「血腥革新」' }, { name: '逆位「所罗门」' }, { name: '耀魂碎片', quantity: '64' }, { name: '植物魔法：创造魔力池' }, { name: '龙研：混沌碎片', quantity: '64' }] }
    ]
  }
} as const

type PackageTier = keyof typeof packages

const props = defineProps<{ tier: PackageTier }>()
const current = computed(() => packages[props.tier])
const categoryLabels: Record<string, string> = {
  '重要': '重要物品',
  'AE2': 'AE2模组物品',
  '精华与无尽': '精华与无尽模组物品',
  '工业升级': '工业升级模组物品',
  'MEK': 'MEK模组物品',
  '工具与拔刀剑': '工具与拔刀剑物品',
  '工具与扩展': '工具与扩展物品'
}
const categoryLabel = (name: string) => categoryLabels[name] ?? name
const benefitCards = computed(() => current.value.benefits.map((benefit, index) => {
  if (benefit.startsWith('最大家数量')) {
    return { icon: '⌂', title: '专属家园', description: benefit }
  }

  if (benefit.includes('传送')) {
    return { icon: '↗', title: '快速传送', description: benefit }
  }

  return {
    icon: index === 1 ? '✦' : '◈',
    title: benefit.includes('称号') ? '工程师身份' : '专属福利',
    description: benefit
  }
}))
</script>

<template>
  <article
    :id="current.id"
    class="membership-package"
    :class="{ 'featured-package': 'featured' in current && current.featured, 'infinity-package': 'infinity' in current && current.infinity }"
  >
    <header>
      <div>
        <p class="membership-package-label">{{ current.label }}</p>
        <h3>{{ current.name }}</h3>
      </div>
      <p>{{ current.price }}</p>
    </header>

    <div class="membership-package-body">
      <div class="membership-package-overview">
        <figure>
          <img :src="current.image" :alt="`${current.name}礼包预览`" loading="lazy">
          <figcaption>{{ current.name }}礼包预览</figcaption>
        </figure>

        <section class="membership-package-content" aria-label="会员权益">
          <h4>会员权益</h4>
          <ul class="membership-benefits">
            <li v-for="benefit in benefitCards" :key="benefit.description">
              <span class="membership-benefit-icon" aria-hidden="true">{{ benefit.icon }}</span>
              <span><strong>{{ benefit.title }}</strong><small>{{ benefit.description }}</small></span>
            </li>
          </ul>
        </section>
      </div>

      <section class="membership-package-inventory" :aria-label="`${current.name}礼包物品清单`">
        <h4>礼包物品清单</h4>
        <div class="membership-inventory-grid">
          <section v-for="category in current.categories" :key="category.name" class="membership-inventory-category" :class="{ 'has-description': category.description }">
            <h5>{{ categoryLabel(category.name) }}</h5>
            <ul class="item-chip-grid">
              <li v-for="item in category.items" :key="`${item.name}-${item.quantity ?? 'single'}`" class="item-chip">
                {{ item.name }}
                <sup v-if="item.quantity" :aria-label="`数量 ${item.quantity}`">{{ item.quantity }}</sup>
              </li>
            </ul>
            <p v-if="category.description" class="membership-inventory-description">{{ category.description }}</p>
          </section>
        </div>
      </section>
    </div>
  </article>
</template>
