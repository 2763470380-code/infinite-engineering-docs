<script setup lang="ts">
import { computed } from 'vue'

type GiftItem = { name: string; quantity?: string }
type ImportantItem = { name: string; description: string }
type GiftCategory = { name: '科技类' | '魔法类' | '工具及特殊物品' | '其他物品'; items: GiftItem[] }
type GiftPackage = {
  id: string
  name: string
  label: string
  price: string
  image: string
  benefits: string[]
  importantItems: ImportantItem[]
  categories: GiftCategory[]
  featured?: boolean
  infinity?: boolean
}

const sharedBenefits = ['更多家园模板选择', '永久飞行权限', '更好的签到奖励']

const packages: Record<string, GiftPackage> = {
  'black-iron': {
    id: 'black-iron', name: '黑铁VIP', label: '永久会员礼包', price: '¥ 38', image: '/vip/black-iron-vip.png',
    benefits: ['最大家数量 +3', '黑铁VIP专属特效', '黑铁VIP专属称号', ...sharedBenefits],
    importantItems: [
      { name: '基础AE存储', description: '提供基础AE存储 支撑自动化网络' },
      { name: '基础工业升级机器与发电设备', description: '快速建立工业生产与能源体系' },
      { name: 'MEK机器与发电设备', description: '快速建立MEK加工与能源体系' }
    ],
    categories: [
      { name: '科技类', items: [
        { name: '256K存储元件', quantity: '16' }, { name: '外壳', quantity: '16' }, { name: '合成单元', quantity: '16' }, { name: 'ME接口', quantity: '16' }, { name: '样板供应器', quantity: '16' }, { name: '控制器', quantity: '16' }, { name: 'ME线缆', quantity: '64' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' },
        { name: '质子太阳能' }, { name: '太阳能升级组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '基础超频', quantity: '32' }, { name: '基础等级轧机' }, { name: '基础等级挤压机' }, { name: '基础等级挤出机' }, { name: '基础等级粉碎/提取机' }, { name: '基础等级合金炉' }, { name: '基础等级固体制冷机' }, { name: '基础等级储能器' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' },
        { name: '精英等级富集机' }, { name: '精英等级粉碎机' }, { name: '精英等级熔炼机' }, { name: '精英等级净化机' }, { name: '精英等级提纯机' }, { name: '精英等级种植机' }, { name: '强化速度/能量升级', quantity: '32' }, { name: 'MEK多元宇宙等级安装器' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }
      ] },
      { name: '魔法类', items: [{ name: '高级精华', quantity: '32' }, { name: '神秘基础法杖' }, { name: '知识碎片', quantity: '64' }] },
      { name: '工具及特殊物品', items: [{ name: '基础中子态素收集器' }, { name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神威刀坎纳' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  bronze: {
    id: 'bronze', name: '青铜VIP', label: '永久会员礼包', price: '¥ 68', image: '/vip/bronze-vip.png',
    benefits: ['最大家数量 +5', '传送无延迟', '青铜VIP专属特效与称号', ...sharedBenefits],
    importantItems: [
      { name: '加速火把', description: '四倍加速 加速产线与机器 节约大量时间' },
      { name: '高级AE存储', description: '提供大容量AE存储 支撑大型自动化网络' },
      { name: '高级工业升级机器与发电设备', description: '快速建立工业生产与能源体系' },
      { name: '高级MEK机器与发电设备', description: '快速建立MEK加工与能源体系' },
      { name: '分子重构仪', description: '加工高级材料与精华 推进工业升级发展' }
    ],
    categories: [
      { name: '科技类', items: [
        { name: '256M存储元件', quantity: '32' }, { name: '外壳', quantity: '32' }, { name: '合成单元', quantity: '32' }, { name: 'ME接口', quantity: '32' }, { name: '过载模块', quantity: '32' }, { name: '扩展模块', quantity: '32' }, { name: '样板供应器', quantity: '32' }, { name: '控制器', quantity: '32' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '8' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '量子套' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' },
        { name: '奇异太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '基础超频', quantity: '64' }, { name: '改良等级轧机' }, { name: '改良等级挤压机' }, { name: '改良等级挤出机' }, { name: '改良等级粉碎机' }, { name: '改良等级提取机' }, { name: '改良等级合金机' }, { name: '改良等级固体制冷机' }, { name: '改良等级储能器' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' },
        { name: '绝对等级富集机' }, { name: '绝对等级粉碎机' }, { name: '绝对等级熔炼机' }, { name: '绝对等级净化机' }, { name: '绝对等级提纯机' }, { name: '绝对等级种植机' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '4' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }
      ] },
      { name: '魔法类', items: [{ name: '终极精华', quantity: '16' }, { name: '神秘基础法杖' }, { name: '知识碎片', quantity: '64' }, { name: '元始笔与墨' }] },
      { name: '工具及特殊物品', items: [{ name: '基础中子态素收集器', quantity: '4' }, { name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '灵钢刃「技术革新」' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  gold: {
    id: 'gold', name: '黄金VIP', label: '推荐 · 永久会员礼包', price: '¥ 138', image: '/vip/gold-vip.png', featured: true,
    benefits: ['最大家数量 +8', '传送无延迟', '黄金VIP专属特效与称号', ...sharedBenefits],
    importantItems: [
      { name: '加速火把', description: '四倍加速 加速产线与机器 节约大量时间' },
      { name: '高级AE自动化设备', description: '提升自动化效率 支撑大型网络' },
      { name: '更高级AE存储', description: '提供更大容量 支撑长期建设' },
      { name: '更高级工业升级机器与发电设备', description: '建立高阶工业生产与能源体系' },
      { name: '更高级MEK机器与发电设备', description: '建立高阶MEK加工与能源体系' },
      { name: '量子能源设备', description: '提供稳定高效的能源支持' },
      { name: '复制机四件套', description: '消耗UU物质 复制物品' },
      { name: 'QE/EF能源转换器', description: 'QE能源与EF能源相互转换' },
      { name: '万魂之核', description: '终焉工作台核心物品' }
    ],
    categories: [
      { name: '科技类', items: [
        { name: '量子存储元件' }, { name: '量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: '量子套' }, { name: '无限圆石' }, { name: '无限水' }, { name: '无限熔岩' },
        { name: '衍射太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '16' }, { name: '高级等级轧机' }, { name: '高级等级挤压机' }, { name: '高级等级挤出机' }, { name: '高级等级粉碎机' }, { name: '高级等级提取机' }, { name: '高级等级合金机' }, { name: '高级等级固体制冷机' }, { name: '高级等级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '光子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '量子电缆', quantity: '64' },
        { name: '至尊等级富集机' }, { name: '至尊等级粉碎机' }, { name: '至尊等级熔炼机' }, { name: '至尊等级净化机' }, { name: '至尊等级提纯机' }, { name: '至尊等级种植机' }, { name: '至尊等级复制机' }, { name: '至尊等级反质子核合成器' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器' }, { name: '大型风力发电机' }, { name: '燃气发电机', quantity: '8' }
      ] },
      { name: '魔法类', items: [{ name: '终极精华', quantity: '32' }, { name: '神秘顶级法杖' }, { name: '知识碎片', quantity: '64' }, { name: '元始笔与墨' }] },
      { name: '工具及特殊物品', items: [{ name: '致密中子态素收集器' }, { name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '灵钢刃「技术革新」' }, { name: '耀魂碎片', quantity: '64' }] }
    ]
  },
  diamond: {
    id: 'diamond', name: '钻石VIP', label: '永久会员礼包', price: '¥ 328', image: '/vip/diamond-vip.png',
    benefits: ['最大家数量 +12', '传送无延迟、无冷却', '钻石VIP专属特效与称号', ...sharedBenefits],
    importantItems: [
      { name: '压缩加速火把', description: '360倍加速 极致加速 效率爆表' },
      { name: '顶级AE自动化设备', description: '提供顶级自动化能力' },
      { name: '无限AE存储', description: '提供无限存储 支撑终局网络' },
      { name: '顶级工业升级机器与发电设备', description: '建立顶级工业生产与能源体系' },
      { name: '顶级MEK机器', description: '建立顶级MEK加工体系' },
      { name: '无限FE能源', description: '提供持续稳定的无限能源' },
      { name: '高级量子能源设备', description: '提升大型工程能源供应效率' },
      { name: '复制机四件套', description: '无限UU物质 复制物品' },
      { name: 'QE/EF能源转换器', description: 'QE能源与EF能源相互转换' },
      { name: '终焉工作台', description: '推进终局制作的重要工作台' },
      { name: '量子变换器', description: '处理高阶量子物品' },
      { name: '创造魔力池', description: '提供持续的创造魔力' }
    ],
    categories: [
      { name: '科技类', items: [
        { name: '无限存储元件' }, { name: '满配量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: 'MeKa套' }, { name: '无限圆石元件' }, { name: '无限水元件' }, { name: '无限熔岩元件' }, { name: '无限封包样板供应器', quantity: '16' },
        { name: '重子太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '16' }, { name: '堆叠/瞬时', quantity: '16' }, { name: '完美级轧机' }, { name: '完美级挤压机' }, { name: '完美级挤出机' }, { name: '完美级粉碎机' }, { name: '完美级提取机' }, { name: '完美级合金机' }, { name: '完美级固体制冷机' }, { name: '完美级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '中子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '创造UU物质' },
        { name: '悖论无限等级富集机' }, { name: '悖论无限等级粉碎机' }, { name: '悖论无限等级熔炼机' }, { name: '悖论无限等级净化机' }, { name: '悖论无限等级提纯机' }, { name: '悖论无限等级种植机' }, { name: '悖论无限等级复制机' }, { name: '悖论无限等级反质子核合成器' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器', quantity: '8' }, { name: '创造升级' }, { name: '创造FE能源' }
      ] },
      { name: '魔法类', items: [{ name: '终极精华', quantity: '64' }, { name: '神秘顶级法杖' }, { name: '知识碎片', quantity: '64' }, { name: '元始笔与墨' }, { name: '全类型作物种子' }, { name: '创造无限创造营养液' }] },
      { name: '工具及特殊物品', items: [{ name: '精英中子态素收集器', quantity: '2' }, { name: '精英中子态素压缩机' }, { name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神钢刃「血腥革新」' }, { name: '耀魂碎片', quantity: '64' }, { name: '龙研：混沌碎片', quantity: '64' }] }
    ]
  },
  infinity: {
    id: 'infinity', name: '寰宇VIP', label: '最高等级 · 永久会员礼包', price: '¥ 648', image: '/vip/infinity-vip.png', infinity: true,
    benefits: ['最大家数量 +16', '传送无延迟、无冷却', '寰宇VIP专属特效与称号', ...sharedBenefits],
    importantItems: [
      { name: '压缩加速火把', description: '360倍加速 极致加速 效率爆表' },
      { name: '时序钟', description: '至高256倍加速 机器与作物' },
      { name: '区块加载器', description: '离线加载 无需挂机' },
      { name: '永恒奇点', description: '无尽材料 支撑终局制作' },
      { name: '无尽催化剂', description: '无尽材料 支撑终局制作' },
      { name: '无限元件 矿石', description: '无限全种类矿石 all infinite' },
      { name: '终极AE自动化设备', description: '提供终极自动化能力' },
      { name: '无限AE存储', description: '提供无限存储 支撑终局网络' },
      { name: '终极工业升级机器与发电设备', description: '建立终极工业生产与能源体系' },
      { name: '终极MEK机器', description: '建立终极MEK加工体系' },
      { name: '无限FE能源', description: '提供持续稳定的无限能源' },
      { name: '高级量子能源设备', description: '提升大型工程能源供应效率' },
      { name: '复制机四件套', description: '无限UU物质 复制物品' },
      { name: 'QE/EF能源转换器', description: 'QE能源与EF能源相互转换' },
      { name: '终焉工作台', description: '推进终局制作的重要工作台' },
      { name: '量子变换器', description: '处理高阶量子物品' },
      { name: '创造魔力池', description: '提供持续的创造魔力' },
      { name: '固态UU复制机', description: '提供固态UU物质复制能力' },
      { name: '创造流体储罐', description: '可选任意流体 无限供应' },
      { name: '创造化学品储罐', description: '可选任意气体 无限供应' }
    ],
    categories: [
      { name: '科技类', items: [
        { name: '无限存储元件' }, { name: '满配量子计算机' }, { name: 'ME接口', quantity: '64' }, { name: '过载模块', quantity: '64' }, { name: '扩展模块', quantity: '64' }, { name: '样板供应器', quantity: '64' }, { name: '控制器', quantity: '64' }, { name: 'ME线缆', quantity: '64' }, { name: '过载控制器', quantity: '16' }, { name: '无线终端' }, { name: '无线信号增幅器' }, { name: '无线信号接口' }, { name: 'MeKa套' }, { name: '无限圆石' }, { name: '无限水' }, { name: '无限熔岩' }, { name: '无限封包样板供应器', quantity: '16' },
        { name: '引力子太阳能' }, { name: '太阳能组件（各）', quantity: '4' }, { name: '变压升级', quantity: '32' }, { name: '高级超频', quantity: '64' }, { name: '性能升级', quantity: '64' }, { name: '堆叠/瞬时', quantity: '64' }, { name: 'IU光子级轧机' }, { name: 'IU光子级挤压机' }, { name: 'IU光子级挤出机' }, { name: 'IU光子级粉碎机' }, { name: 'IU光子级提取机' }, { name: 'IU光子级合金机' }, { name: 'IU光子级固体制冷机' }, { name: 'IU光子级储能器' }, { name: '分子重构仪' }, { name: '高级分子重构仪' }, { name: '引力子量子生成机' }, { name: '量子储能' }, { name: '冷却线缆', quantity: '64' }, { name: '电缆', quantity: '64' }, { name: '创造UU物质' }, { name: '固态物质复制机' }, { name: '固态物质转化机' },
        { name: '创造等级富集机' }, { name: '创造等级粉碎机' }, { name: '创造等级熔炼机' }, { name: '创造等级净化机' }, { name: '创造等级提纯机' }, { name: '创造等级种植机' }, { name: '创造等级复制机' }, { name: '创造等级流体复制机' }, { name: '强化速度/能量升级', quantity: '64' }, { name: 'MEK多元宇宙等级安装器', quantity: '8' }, { name: '创造等级安装器', quantity: '8' }, { name: '创造升级', quantity: '2' }, { name: '创造FE能源' }
      ] },
      { name: '魔法类', items: [{ name: '创造神秘法杖' }, { name: '究极精华', quantity: '64' }, { name: '全类型作物种子' }, { name: '创造营养液' }] },
      { name: '工具及特殊物品', items: [{ name: '极限中子态素收集器', quantity: '4' }, { name: '极限中子态素压缩机', quantity: '4' }, { name: '极限无限锭' }, { name: '黑曜石镐尖斧（效率 XX、时运 X）' }, { name: '神钢刃「血腥革新」' }, { name: '逆位「所罗门」' }, { name: '耀魂碎片', quantity: '64' }, { name: '龙研：混沌碎片', quantity: '64' }] }
    ]
  }
}

type PackageTier = keyof typeof packages
const props = defineProps<{ tier: PackageTier }>()
const current = computed(() => packages[props.tier])
const detailedCategories = computed(() => current.value.categories.filter(category => category.items.length > 0))

const benefitCards = computed(() => current.value.benefits.map((benefit) => {
  if (benefit.startsWith('最大家数量')) return { title: '专属家园', description: benefit }
  if (benefit.includes('传送')) return { title: '快速传送', description: benefit }
  if (benefit.includes('家园模板')) return { title: '更多家园模板', description: benefit }
  if (benefit.includes('飞行')) return { title: '永久飞行', description: benefit }
  if (benefit.includes('签到')) return { title: '签到增益', description: benefit }
  if (benefit.includes('称号') || benefit.includes('特效')) return { title: '工程师身份', description: benefit }
  return { title: '专属福利', description: benefit }
}))
</script>

<template>
  <article
    :id="current.id"
    class="membership-package"
    :class="{ 'featured-package': current.featured, 'infinity-package': current.infinity }"
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
              <span><strong>{{ benefit.title }}</strong><small>{{ benefit.description }}</small></span>
            </li>
          </ul>
        </section>
      </div>

      <section class="membership-package-inventory" :aria-label="`${current.name}礼包物品清单`">
        <h4>礼包物品清单</h4>
        <section class="membership-important-items" aria-label="重要物品">
          <h5>重要物品</h5>
          <div v-for="item in current.importantItems" :key="item.name" class="membership-important-row">
            <strong>{{ item.name }}</strong>
            <span>{{ item.description }}</span>
          </div>
        </section>

        <section class="membership-detailed-items" aria-label="详细物品">
          <h5>详细物品</h5>
          <div class="membership-inventory-grid">
            <section v-for="category in detailedCategories" :key="category.name" class="membership-inventory-category">
              <h6>{{ category.name }}</h6>
              <ul class="item-detail-list">
                <li v-for="item in category.items" :key="`${item.name}-${item.quantity ?? 'single'}`">
                  <span>{{ item.name }}</span>
                  <strong v-if="item.quantity">×{{ item.quantity }}</strong>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </section>
    </div>
  </article>
</template>
