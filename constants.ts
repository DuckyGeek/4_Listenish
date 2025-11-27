import { BookType, Word } from './types';

export const DEFAULT_SETTINGS = {
  selectedBook: BookType.GAOKAO,
  targetDays: 7, 
  loopsPerWord: 3,
  dictationInterval: 10,
  startDate: new Date().toISOString(),
};

const createWord = (idPrefix: string, index: number, line: string): Word | null => {
  const cleanedLine = line.trim();
  if (!cleanedLine) return null;

  // Regex to match: Word (letters/hyphens/apostrophes) + Whitespace + Definition
  // This handles tabs or spaces
  const match = cleanedLine.match(/^([a-zA-Z\-\']+)\s+(.*)/);
  
  if (!match) {
      return null;
  }

  const term = match[1];
  const definition = match[2];
  
  return {
    id: `${idPrefix}-${index}`,
    term: term,
    phonetic: '', 
    definition: definition,
    example: '',
    mastered: false
  };
};

const parseWords = (text: string, prefix: string): Word[] => {
  return text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map((line, index) => createWord(prefix, index, line))
    .filter((w): w is Word => w !== null);
};

// -------------------------------------------------------------------------
// VOCABULARY LISTS
// Paste your content inside the backticks (``) below.
// Format required: "word      definition" (one word per line)
// -------------------------------------------------------------------------

const GAOKAO_TEXT = `beddings	n. 寝具；（建筑）[建] 基床；（家畜）草垫 adj. 适于花坛种植的 vt. 把…栽入苗床（bed的ing形式） vi. 睡（bed的ing形式）
although	conj. 尽管；虽然；但是；然而
effort	n. 努力；成就
preference	n. 偏爱，倾向；优先权
beneath	prep. 在…之下 adv. 在下方
currency	n. 货币；通货
warmth	n. 温暖；热情；激动
adapt	v. 使适应；改编
rewrite	v. 改写；重写 n. 重写或改写的文稿；改写的作品
fourteen	num. 十四；十四个；第十四 n. 十四的记号；十四岁；十四点钟；十五世纪
steam	v. 蒸，散发；用蒸汽处理 n. 蒸汽；精力 adj. 蒸汽的
piano	n. 钢琴
firm	adj. 坚定的；牢固的；严格的；结实的 v. 使坚定；使牢固 adv. 稳固地 n. 公司；商号
bake	v. 烤，烘焙 n. 烤；烘烤食品
suggest	v. 提议，建议；启发；使人想起；显示；暗示
happily	adv. 快乐地；幸福地；幸运地；恰当地
changeable	adj. 无常的；可改变的；易变的；不定的
happen	v. 发生；碰巧；偶然遇到
stream	n. 溪流；流动；潮流；光线 v. 流；涌进；飘扬
late	adj. 晚的；迟的；已故的；最近的 adv. 晚；迟；最近；在晚期
hey	int. 喂！（引起注意等）；你好！（表示问候） n. 干草（等于hay）
charge	n. 费用；电荷；掌管；控告；命令；负载 v. 使充电；使承担；指责；装载；对…索费；向…冲去
treat	v. 治疗；对待；探讨；视为 n. 请客；款待
simplify	v. 简化；使单纯；使简易
statesman	n. 政治家；国务活动家
reservation	n. 预约，预订；保留
framework	n. 框架，骨架；结构，构架
consider	v. 考虑；认为；考虑到；细想
gram	n. 克；鹰嘴豆（用作饲料）
DVD	abbr. 数字化视频光盘（Digital Video Disk）
superior	adj. 上级的；优秀的，出众的；高傲的 n. 上级，长官；优胜者，高手；长者
achievement	n. 成就；完成；达到；成绩
urgent	adj. 紧急的；急迫的
sense	n. 感觉，功能；观念；道理；理智 v. 感觉到；检测
foresee	v. 预见；预知
try	v. 试图，努力；试验；审判；考验 n. 尝试；努力；试验
compass	n. 指南针，罗盘；圆规 v. 包围
headteacher	n. 中小学的校长
earn	v. 赚，赚得；获得，挣得；使得到；博得 n. (Earn)人名；(泰)炎
collect	v. 收集；募捐 adv. 由收件人付款地 adj. 由收件人付款的 n. (Collect)人名；(英)科莱克特
mask	n. 面具；口罩；掩饰 v. 掩饰；戴面具；化装
assume	v. 假定；设想；承担；采取
player	n. 运动员，比赛者；游戏者，做游戏的人；演奏者，表演者；演员；播放器
revision	n. [印刷] 修正；复习；修订本
farm	v. 种田，务农；经营农场 n. 农场；农家；畜牧场
hive	v. 群居；入蜂房；生活在蜂房中 n. 蜂房，蜂巢；热闹的场所；熙攘喧闹的人群
year	n. 年；年度；历年；年纪；一年的期间；某年级的学生
continue	v. 继续，延续；仍旧，连续
contradict	v. 反驳；否定；与…矛盾；与…抵触
usually	adv. 通常，经常
persuade	v. 说服，劝说；使某人相信；劝某人做（不做）某事 adj. 空闲的，有闲的
mental	adj. 精神的；脑力的；疯的 n. 精神病患者
hawk	v. 兜售，沿街叫卖；捕捉；咳出 n. 鹰；鹰派成员；掠夺他人的人
clothes	n. 衣服
plastic	adj. 塑料的；（外科）造型的；可塑的 n. 塑料制品；整形；可塑体
terrible	adj. 可怕的；很糟的；令人讨厌的 adv. 很，非常
bedclothes	n. 床上用品；铺盖
award	v. 授予；判定 n. 奖品；判决
surround	v. 围绕；包围 n. 围绕物 adj. 环绕立体声的
humour	n. 幽默（等于humor）；诙谐 v. 迁就；使满足
hostess	n. 女主人，女老板；女服务员；舞女；女房东
speaker	n. 演讲者；扬声器；说话者；说某种语言的人
successful	adj. 成功的；一帆风顺的
chance	n. 机会，际遇；运气，侥幸；可能性 v. 偶然发生；冒……的险
lid	n. 盖子；眼睑；限制 vt. 给…盖盖子
dollar	n. 美元
man	n. 人；男人；人类；丈夫；雇工 v. 操纵；给…配置人员；使增强勇气；在…就位
ten	num. 十个，十 n. (Ten)人名；(英)坦恩；(意)泰恩；(柬)登
pay	v. 支付，付；偿还，补偿；给予 n. 工资，薪水；付款；报答 adj. 收费的；需付费的
under	prep. 低于，少于；在之下 adv. 在下面；在下方 adj. 下面的；从属的
leading	adj. 领导的；主要的 n. 领导；铅板；行距 v. 领导（lead的ing形式）
Asia	n. 亚洲
typewriter	n. 打字机
even	adj. [数] 偶数的；平坦的；相等的 adv. 甚至；即使；还；实际上 v. 使平坦；使相等 n. (Even)人名；(法)埃旺；(德)埃文；(英)埃文
luggage	n. 行李；皮箱
escape	v. 逃避，避开，避免；被忘掉；被忽视 n. 逃跑；逃亡；逃走；逃跑工具或方法；野生种；泄漏
powder	n. 粉；粉末；[化工][军] 火药；尘土 v. 使成粉末；撒粉；搽粉于
zebra	n. [脊椎] 斑马 adj. 有斑纹的
overcoat	n. 大衣，外套
popcorn	n. 爆米花，爆玉米花
affair	n. 事情；事务；私事；（尤指关系不长久的）风流韵事
steward	n. 管家；乘务员；膳务员；工会管事 vi. 当服务员；当管事 vt. 管理
available	adj. 可获得的；可购得的；可找到的；有空的
import	n. 进口，进口货；输入；意思，含义；重要性 v. 输入，进口；含…的意思
cupboard	n. 碗柜；食橱
date	n. 日期；约会；年代；枣椰子 v. 过时；注明日期；始于（某一历史时期）
pollution	n. 污染
jar	n. 罐；广口瓶；震动；刺耳声 v. 冲突；不一致；震惊；发刺耳声
anything	pron. 任何事
suspension	n. 悬浮；暂停；停职
Italian	adj. 意大利的；意大利文化的；意大利语的 n. 意大利人；意大利语
essay	n. 散文；试图；随笔 v. 尝试；对…做试验
honest	adj. 诚实的，实在的；可靠的；坦率的
new	adj. 新的，新鲜的；更新的；初见的 adv. 新近 n. (New)人名；(英)纽
pause	n. 暂停；间歇 v. 暂停，停顿，中止；踌躇
sunlight	n. 日光
disturb	v. 打扰；妨碍；使不安；弄乱；使恼怒
distribute	v. 分配；散布；分开；把…分类
stable	n. 马厩；牛棚 adj. 稳定的；牢固的；坚定的 v. 被关在马厩
straw	n. 稻草；吸管；一文不值的东西 adj. 稻草的；无价值的
therefore	adv. 因此；所以
ankle	n. 踝关节，踝
bookstore	n. 书店（等于bookshop）
hardship	n. 困苦；苦难；艰难险阻
butter	v. 涂黄油于；讨好 n. 黄油；奶油；奉承话
postpone	v. 使…延期；把…放在次要地位；把…放在后面
physicist	n. 物理学家；唯物论者
lantern	n. 灯笼；提灯；灯笼式天窗
panic	n. 恐慌，惊慌；大恐慌 adj. 恐慌的；没有理由的 v. 使恐慌
Europe	n. 欧洲
disappear	v. 消失；失踪；不复存在
downtown	adv. 往闹市区；在市区 adj. 市中心的 n. 市中心区；三分线以外
ask	v. 问，询问；要求；需要；邀请；讨价 n. (Ask)人名；(芬、瑞典)阿斯克
amuse	v. 娱乐；消遣；使发笑；使愉快
criterion	n. （批评判断的）标准；准则；规范；准据
shuttle	n. 航天飞机；穿梭；梭子；穿梭班机、公共汽车等 v. 使穿梭般来回移动；短程穿梭般运送
publish	v. 出版；发表；公布
zoo	n. 动物园
perhaps	adv. 或许；（表示不确定）也许；（用于粗略的估计）或许；（表示勉强同意或其实不赞成）也许；可能 n. 假定；猜想；未定之事
pressure	n. 压力；压迫，[物] 压强 v. 迫使；密封；使……增压
viewer	n. 观察者；观看者；观众；[仪] 指示器
being	n. 存在；生命；本质；品格 adj. 存在的；现有的
anxiety	n. 焦虑；渴望；挂念；令人焦虑的事
atom	n. 原子
basis	n. 基础；底部；主要成分；基本原则或原理
terrify	v. 恐吓；使恐怖；使害怕
electric	adj. 电的；电动的；发电的；导电的；令人震惊的 n. 电；电气车辆；带电体
disappoint	v. 使失望
toast	n. 干杯；烤面包；接受敬酒的人；（在某领域）广受赞誉的人 v. 向…祝酒，为…干杯
explode	v. 爆炸，爆发；激增
retell	v. 复述；再讲；重述
salary	vt. 给加薪；给薪水 n. 薪水
cyclist	n. 骑自行车的人
stomachache	n. 腹痛，肚子痛；胃痛
agency	n. 代理，中介；代理处，经销处
chalk	v. 用粉笔写；用白垩粉擦；记录；规划 n. 粉笔；白垩；用粉笔划的记号 adj. 用粉笔写的
dignity	n. 尊严；高贵
hard	adj. 努力的；硬的；困难的；辛苦的；确实的；严厉的；猛烈的；冷酷无情的 adv. 努力地；困难地；辛苦地；接近地；猛烈地；牢固地 n. (Hard)人名；(英、芬、瑞典)哈德
half	n. 一半；半场；半学年 adv. 一半地；部分地 adj. 一半的；不完全的；半途的
fragile	adj. 脆的；易碎的
comrade	n. 同志；伙伴
duty	n. 责任；[税收] 关税；职务
pile	n. 堆；大量；建筑群 v. 累积；打桩于
worn	adj. 疲倦的；用旧的 v. 穿；磨损（wear的过去分词）；佩戴 n. (Worn)人名；(柬)翁；(英、葡)沃恩
click	v. 点击；使发咔哒声 n. 单击；滴答声
heaven	n. 天堂；天空；极乐
attentively	adv. 注意地；聚精会神地；周到地
hamburger	n. 汉堡包，火腿汉堡；牛肉饼，肉饼；碎牛肉
pleased	adj. 高兴的；喜欢的；乐意做某事 v. 满意；愿意（please的过去分词形式）
ouch	n. 扣环 int. 哎哟（突然疼痛时发出的声音）
carpenter	n. 木匠，木工 v. 当木匠，做木匠工作
giraffe	n. 长颈鹿
cycle	n. 循环；周期；自行车；整套；一段时间 v. 使循环；使轮转
caption	n. 标题；字幕；说明；逮捕 v. 加上说明；加上标题
twist	v. 捻；拧；扭伤；编织；使苦恼 n. 扭曲；拧；扭伤
prefer	v. 更喜欢；宁愿；提出；提升
shelf	n. 架子；搁板；搁板状物；暗礁
civilian	adj. 民用的；百姓的，平民的 n. 平民，百姓
pull	v. 拉；拔；拖 n. 拉，拉绳；拉力，牵引力；拖
still	adv. 仍然；更；静止地 adj. 静止的，不动的；寂静的，平静的；不起泡的 n. 寂静；剧照；蒸馏室 conj. 仍然；但是；尽管如此 v. 蒸馏；使…静止；使…平静下来
wildlife	n. 野生动植物 adj. 野生动植物的
training	n. 训练；培养；瞄准；整枝 v. 训练；教养（train的ing形式）
harmless	adj. 无害的；无恶意的
lie	v. 躺；说谎；位于；展现 n. 谎言；位置
spoken	adj. 口语的，口头的 v. 说（speak的过去分词）
native	adj. 本国的；土著的；天然的；与生俱来的；天赋的 n. 本地人；土产；当地居民
foggy	adj. 有雾的；模糊的，朦胧的
better	n. 长辈；较好者；打赌的人（等于bettor） adv. 更好的；更多的；较大程度地 adj. 较好的 v. 改善；胜过
main	n. 主要部分，要点；体力；总管道 adj. 主要的，最重要的；全力的
meeting	n. 会议；会见；集会；汇合点 v. 会面；会合（meet的ing形式）
advertisement	n. 广告，宣传
semicircle	n. 半圆，半圆形
pioneer	n. 先锋；拓荒者 v. 开辟；倡导；提倡
paper	n. 纸；论文；文件；报纸 adj. 纸做的 v. 用纸糊；用纸包装
officer	n. 军官，警官；公务员，政府官员；船长 v. 指挥
millionaire	n. 百万富翁；大富豪 adj. 100万以上人口的
memorial	n. 纪念碑，纪念馆；纪念仪式；纪念物 adj. 记忆的；纪念的，追悼的
envy	n. 嫉妒，妒忌；羡慕 v. 嫉妒，妒忌；羡慕
woo	v. 追求；招致；向…求爱；恳求
mountain	n. 山；山脉
impress	v. 盖印；强征；传送；给予某人深刻印象 n. 印象，印记；特征，痕迹
association	n. 协会，联盟，社团；联合；联想
package	n. 包，包裹；套装软件，[计] 程序包 adj. 一揽子的 v. 打包；将…包装
shark	n. 鲨鱼；骗子 v. 诈骗
sort	n. 种类；方式；品质 v. 分类；协调；交往
ox	n. 牛；公牛
nurse	v. 看护，护理；照顾；培养；给…喂奶 n. 护士；奶妈，保姆
enemy	n. 敌人，仇敌；敌军 adj. 敌人的，敌方的
grasp	n. 抓住；理解；控制 v. 抓住；领会
movie	n. 电影；电影院；电影业 adj. 电影的
coincidence	n. 巧合；一致；同时发生
appearance	n. 外貌，外观；出现，露面
garment	n. 衣服，服装；外表，外观 v. 给…穿衣服
agricultural	adj. 农业的；农艺的
become	v. 成为；变得；变成
western	adj. 西方的，西部的；有西方特征的 n. 西方人；西部片，西部小说
want	v. 需要；希望；应该；缺少 n. 需要；缺乏；贫困；必需品
worry	n. 担心；烦恼；撕咬 v. 担心；发愁；折磨
law	n. 法律；规律；法治；法学；诉讼；司法界 vi. 起诉；控告 vt. 控告；对…起诉
minus	prep. 减，减去 n. 负号，减号；不足；负数 adj. 减的；负的
thinking	adj. 思考的；思想的；有理性的；好思考的 n. 思考；思想；想法；意见；见解 v. 思考（think的现在分词）
administration	n. 管理；行政；实施；行政机构
eye	n. 眼睛；视力；眼光；见解，观点 v. 注视，看
marriage	n. 结婚；婚姻生活；密切结合，合并
fifty	n. 五十；五十个；编号为50的东西 adj. 五十的；五十个的；众多的
broom	n. 扫帚；金雀花 v. 扫除
represent	v. 代表；表现；描绘；回忆；再赠送
to	adv. 向前；（门等）关上 prep. 到；向；（表示时间、方向）朝…方向 n. (To)人名；(柬)多；(中)脱(普通话·威妥玛)
near	adj. 近的；亲近的；近似的 adv. 近；接近 prep. 靠近；近似于
shabby	adj. 破旧的；卑鄙的；吝啬的；低劣的
glory	n. 光荣，荣誉；赞颂 v. 自豪，骄傲；狂喜
effect	n. 影响；效果；作用 v. 产生；达到目的
liberation	n. 释放，解放
fax	v. 传真 n. 传真
state	n. 国家；州；情形 v. 规定；声明；陈述 adj. 国家的；州的；正式的
friendly	adj. 友好的；亲切的；支持的；融洽的，和睦的 adv. 友善地；温和地 n. (Friendly)人名；(英)弗兰德利
forward	adj. 向前的；早的；迅速的 adv. 向前地；向将来 v. 促进；转寄；运送 n. 前锋
exchange	n. 交换；交流；交易所；兑换 v. 交换；交易；兑换
suppose	v. 假设；认为；让（虚拟语气）；推想 conj. 假使…结果会怎样
generous	adj. 慷慨的，大方的；宽宏大量的；有雅量的
hers	pron. 她的（所有格） n. (Hers)人名；(法)埃尔
explain	v. 说明；解释
valid	adj. 有效的；有根据的；合法的；正当的
tie	v. 系；约束；打结；与…成平局 n. 领带；平局；鞋带；领结；不分胜负
then	adv. 然后；那么；于是；当时；此外 n. 那时 conj. 然后，当时
sew	v. 缝合，缝上；缝纫
desperate	adj. 不顾一切的；令人绝望的；极度渴望的
steak	n. 牛排；肉排；鱼排
British	adj. 英国的；英国人的；大不列颠的 n. 英国人
sailor	n. 水手，海员；乘船者
wear	n. 衣物；磨损；耐久性 v. 穿着；用旧；耗损；面露
postage	n. 邮资，邮费
presentation	n. 展示；描述，陈述；介绍；赠送
wet	adj. [气象][物] 潮湿的；有雨的 n. 雨天；湿气 v. 弄湿
avoid	v. 避免；避开，躲避；消除
pity	n. 怜悯，同情；遗憾 v. 对……表示怜悯；对……感到同情
arrangement	n. 布置；整理；准备
among	prep. 在…中间；在…之中
author	n. 作者；作家；创始人 v. 创作出版
mommy	n. 妈咪
theft	n. 盗窃；偷；赃物
bathe	v. 沐浴；用水洗 n. 洗澡；游泳
assistant	n. 助手，助理，助教 adj. 辅助的，助理的；有帮助的
battle	n. 战役；斗争 v. 斗争；作战
beancurd	n. 豆腐
front	n. 前面；正面；前线 v. 面对；朝向；对付 adj. 前面的；正面的 adv. 在前面；向前
work	n. 工作；[物] 功；产品；操作；职业；行为；事业；工厂；著作；文学、音乐或艺术作品 v. 使工作；操作；经营；使缓慢前进
blackboard	n. 黑板
washroom	n. 洗手间；盥洗室；厕所
legal	adj. 法律的；合法的；法定的；依照法律的 n. (Legal)人名；(法)勒加尔
fill	v. 装满，使充满；满足；堵塞；任职 n. 满足；填满的量；装填物
crime	n. 罪行，犯罪；罪恶；犯罪活动 vt. 控告……违反纪律
fifteen	n. 十五；十五个；十五人组成的橄榄球队 adj. 十五的 num. 十五
indeed	adv. 的确；实在；真正地；甚至 int. 真的（表示惊讶、怀疑、讽刺等）
clever	adj. 聪明的；机灵的；熟练的
refuse	n. 垃圾；废物 v. 拒绝；不愿；抵制
whichever	pron. 任何一个；无论哪个 adj. 无论哪个；无论哪些
leftover	n. 残留物；吃剩的饭菜；剩余物 adj. 残余的；吃剩的
base	n. 基础；底部；垒 adj. 卑鄙的；低劣的 v. 以…作基础
action	n. 行动；活动；功能；战斗；情节
catholic	adj. 天主教的；宽宏大量的 n. 天主教徒；罗马天主教
succeed	v. 成功；继承；继任；兴旺
track	n. 轨道；足迹，踪迹；小道 v. 追踪；通过；循路而行；用纤拉
few	adj. 很少的；几乎没有的 pron. 很少 n. 很少数
city	n. 城市，都市 adj. 城市的；都会的
Sunday	n. 星期日；礼拜日
pet	n. 宠物；生气；受宠爱的人 v. 宠爱 adj. 宠爱的
into	prep. 到…里；深入…之中；成为…状况；进入到…之内 n. (Into)人名；(芬、英)因托
defeat	v. 击败，战胜；挫败；使…失败 n. 失败的事实；击败的行为
teenager	n. 十几岁的青少年；十三岁到十九岁的少年
jeep	n. 吉普车
ample	adj. 丰富的；足够的；宽敞的 n. (Ample)人名；(西)安普尔
mirror	n. 镜子；真实的写照；榜样 v. 反射；反映
typist	n. 打字员，打字者
stadium	n. 体育场；露天大型运动场
substitute	n. 代用品；代替者 v. 替代
carve	v. 雕刻；切开；开创 n. (Carve)人名；(西、瑞典)卡韦
electrical	adj. 有关电的；电气科学的
yell	v. 大叫，叫喊 n. 喊声，叫声
wide	adj. 广泛的；宽的，广阔的；张大的；远离目标的 adv. 广泛地；广阔地；充分地 n. 大千世界
grape	n. 葡萄；葡萄酒；葡萄树；葡萄色
resign	v. 辞职；放弃；委托；使听从 n. 辞去职务
percentage	n. 百分比；百分率，百分数
stout	adj. 结实的；矮胖的；勇敢的；激烈的 n. 矮胖子；烈性啤酒
final	adj. 最终的；决定性的；不可更改的 n. 决赛；期末考试；当日报纸的末版
certain	adj. 某一；必然的；确信；无疑的；有把握的 pron. 某些；某几个 n. (Certain)人名；(葡)塞尔塔因；(法)塞尔坦
discourage	v. 阻止；使气馁
strict	adj. 严格的；绝对的；精确的；详细的
visual	adj. 视觉的，视力的；栩栩如生的
those	adj. 那些的 pron. 那些（that的复数）
needle	n. 针；指针；刺激；针状物 v. 缝纫；做针线
car	n. 汽车；车厢
put	v. 放；表达；移动；安置；赋予 n. 掷；笨蛋；投击；怪人 adj. 固定不动的
circumstance	n. 环境，情况；事件；境遇
without	prep. 没有；超过；在…外面 adv. 户外；在外面；没有或不显示某事物 n. 外部；外面
mend	v. 修理，修补；改善；修改 n. 好转，改进；修补处
arithmetic	n. 算术，算法
smart	adj. 聪明的；巧妙的；敏捷的；厉害的；潇洒的；剧烈的；时髦的 n. (Smart)人名；(法)斯马尔；(英、德)斯马特
fade	v. 褪色；凋谢；逐渐消失 adj. 平淡的；乏味的 n. [电影][电视] 淡出；[电影][电视] 淡入
attain	v. 达到，实现；获得；到达 n. 成就
Greek	n. 希腊语；希腊人 adj. 希腊的；希腊人的，希腊语的
smile	v. 微笑 n. 微笑；笑容；喜色
eventually	adv. 最后，终于
fortune	n. 财富；命运；运气 vt. 给予财富 vi. 偶然发生
purpose	n. 目的；用途；意志 v. 决心；企图；打算
tense	adj. 紧张的；拉紧的 v. 变得紧张；使拉紧 n. 时态
bridge	n. 桥；桥牌；桥接器；船桥 v. 架桥；渡过
lemonade	n. 柠檬水
stranger	n. 陌生人；外地人；局外人
liberate	v. 解放；放出；释放
librarian	n. 图书馆员；图书管理员
club	n. 俱乐部，社团；夜总会；棍棒；（扑克牌中的）梅花 v. 用棍棒打；募集 adj. 俱乐部的
suspect	n. 嫌疑犯 adj. 可疑的；不可信的 v. 怀疑；猜想
tin	n. 锡；罐头，罐；马口铁 adj. 锡制的 v. 涂锡于；给…包马口铁
proper	adj. 适当的；本身的；特有的；正派的 adv. 完全地 n. (Proper)人名；(英、德)普罗珀
greeting	n. 问候，招呼；祝贺 v. 致敬，欢迎（greet的现在分词）
discount	n. 折扣；贴现率 v. 贴现；打折扣出售商品
delay	v. 延期；耽搁 n. 延期；耽搁；被耽搁或推迟的时间
wheel	n. 车轮；方向盘；转动 v. 转动；使变换方向；给…装轮子
time	n. 时间；时代；次数；节拍；倍数 v. 计时；测定…的时间；安排…的速度 adj. 定时的；定期的；分期的
hit	v. 打击；袭击；碰撞；偶然发现；伤…的感情 n. 打；打击；（演出等）成功；讽刺
leather	n. 皮革；皮革制品 v. 用皮革包盖；抽打 adj. 皮的；皮革制的
correction	n. 改正，修正
twelve	n. 十二；十二个 num. 十二；十二个 adj. 十二的；十二个的
exact	adj. 准确的，精密的；精确的 v. 要求；强求；急需
it	pron. [指无生命的东西、动物、植物]它；这；那 abbr. 信息技术information technology
fisherman	n. 渔夫；渔人
know	v. 知道；认识；懂得
pension	n. 退休金，抚恤金；津贴；膳宿费 v. 发给养老金或抚恤金
ourselves	pron. 我们自己；我们亲自
eleven	n. 十一；十一个 adj. 十一的；十一个的 num. 十一；十一个
let	v. 允许，让；出租；假设；妨碍 n. 障碍；出租屋
good	adj. 好的；优良的；愉快的；虔诚的 n. 好处；善行；慷慨的行为 adv. 好
unfortunate	adj. 不幸的；令人遗憾的；不成功的
news	n. 新闻，消息；新闻报导
watch	v. 观察；注视；看守；警戒 n. 手表；监视；守护；值班人
agreement	n. 协议；同意，一致
deposit	n. 存款；押金；订金；保证金；沉淀物 v. 使沉积；存放
determine	v. （使）下决心，（使）做出决定
Mexican	adj. 墨西哥的；墨西哥人的 n. 墨西哥人；墨西哥语
modem	n. 调制解调器（等于modulator-demodulator）
salad	n. 色拉；尤指莴苣
contrary	adj. 相反的；对立的 adv. 相反地 n. 相反；反面
education	n. 教育；培养；教育学
cheer	v. 欢呼；使高兴；为…加油 n. 欢呼；愉快；心情；令人愉快的事
shout	v. 呼喊；喊叫；大声说 n. 呼喊；呼叫
pardon	n. 原谅；赦免；宽恕 v. 原谅；赦免；宽恕
nice	adj. 精密的；美好的；细微的；和蔼的 n. (Nice)人名；(英)尼斯
purchase	n. 购买；紧握；起重装置 v. 购买；赢得
owe	v. 欠；感激；应给予；应该把……归功于 n. (Owe)人名；(瑞典、挪)奥弗
awake	v. 觉醒，意识到；醒来；被唤起 adj. 醒着的
everywhere	adv. 到处 n. 每个地方
fair	adj. 公平的；美丽的，白皙的；[气象] 晴朗的 adv. 公平地；直接地；清楚地 v. 转晴 n. 展览会；市集；美人
Ireland	n. 爱尔兰
pick	v. 挑选；采摘；挖 n. 选择；鹤嘴锄；挖；掩护
organiser	n. 组织者；发起人；形成体（等于organizer）
young	adj. 年轻的；初期的；没有经验的 n. 年轻人；（动物的）崽，仔
chef	n. 厨师，大师傅
roller	n. [机] 滚筒；[机] 滚轴；辊子；滚转机
weekend	n. 周末，周末休假；周末聚会 adj. 周末的，周末用的 v. 度周末
video	n. [电子] 视频；录像，录像机；电视 adj. 视频的；录像的；电视的 v. 录制
appoint	v. 任命；指定；约定
lady	n. 女士，夫人；小姐；妻子
slice	n. 薄片；部分；菜刀，火铲 v. 切下；把…分成部分；将…切成薄片
favour	n. 偏爱；赞同；善行 v. 赞成；喜爱；有助于
Arctic	adj. 北极的；极寒的 n. 北极圈；御寒防水套鞋
pulse	n. [电子] 脉冲；脉搏 v. 使跳动
tune	n. 曲调；和谐；心情 v. 调整；使一致；为…调音
foreign	adj. 外国的；外交的；异质的；不相关的
funeral	n. 葬礼；麻烦事 adj. 丧葬的，出殡的
compete	v. 竞争；比赛；对抗
gallon	n. 加仑（容量单位）
conduct	v. 导电；带领 n. 进行；行为；实施
worth	adj. 值…的 n. 价值；财产
discovery	n. 发现，发觉；被发现的事物
centre	v. 以…为中心 n. 中心 adj. 中央的
abrupt	adj. 生硬的；突然的；唐突的；陡峭的
hot	adj. 热的；辣的；热情的；激动的；紧迫的 adv. 热；紧迫地 v. 变热 n. (Hot)人名；(塞)霍特；(法)奥特
solar	adj. 太阳的；日光的；利用太阳光的；与太阳相关的 n. 日光浴室
clothing	n. （总称）[服装] 服装；帆装 v. 覆盖（clothe的ing形式）；给…穿衣
emergency	n. 紧急情况；突发事件；非常时刻 adj. 紧急的；备用的
abandon	n. 放任；狂热 v. 遗弃；放弃
sheep	n. 羊，绵羊；胆小鬼
computer	n. 计算机；电脑；电子计算机
traditional	adj. 传统的；惯例的
plus	n. 正号，加号；好处；附加额 adj. 正的；附加的 prep. 加，加上
band	n. 带，环；[物] 波段；(演奏流行音乐的) 乐队 v. 用带绑扎；给镶边
document	n. 文件，公文；[计] 文档；证件 v. 用文件证明
gate	n. 大门；出入口；门道 v. 给…装大门
drum	v. 击鼓；大力争取 n. 鼓；鼓声
library	n. 图书馆，藏书室；文库
nutrition	n. 营养，营养学；营养品
may	aux. 可以，能够；可能，也许；祝，愿；会，能
shake	v. 动摇；摇动；震动；握手 n. 摇动；哆嗦
worthwhile	adj. 值得做的，值得花时间的
quilt	n. 被子；棉被 v. 东拼西凑地编；加软衬料后缝制
myself	pron. 我自己；我亲自；我的正常的健康状况和正常情绪
tease	v. 取笑；戏弄；梳理；欺负；强求；使起毛 n. 戏弄；爱纠缠的小孩；挑逗者；卖弄风骚的女孩
book	n. 书籍；卷；帐簿；名册；工作簿 v. 预订；登记
modern	adj. 现代的，近代的；时髦的 n. 现代人；有思想的人
sorry	adj. 遗憾的；对不起的，抱歉的 int. 对不起，抱歉（表示委婉的拒绝等）
parallel	n. 平行线；对比 v. 使…与…平行 adj. 平行的；类似的，相同的
evident	adj. 明显的；明白的
snack	n. 小吃，快餐；一份，部分 v. 吃快餐，吃点心
possibly	adv. 可能地；也许；大概
your	pron. 你的，你们的
authority	n. 权威；权力；当局
northern	adj. 北部的；北方的 n. 北部方言
by	prep. 通过；被；依据；经由；在附近；在……之前 adv. 通过；经过；附近；[互联网] 白俄罗斯的国家代码顶级域名
following	adj. 下面的；其次的，接着的 n. 下列事物；一批追随者 v. 跟随；沿行（follow的ing形式）
seashell	n. 海贝，贝壳；海贝壳
pair	n. 一对，一双，一副 v. 把…组成一对
explore	v. 探索；探测；探险
partner	n. 伙伴；合伙人；配偶 v. 合伙；合股；成为搭档
spread	v. 传播；伸展 n. 传播；伸展 adj. 伸展的
Swiss	adj. 瑞士的；瑞士人的；瑞士风格的 n. 瑞士人；瑞士腔调
microscope	n. 显微镜
monument	n. 纪念碑；历史遗迹；不朽的作品 vt. 为…树碑
slow	adj. 慢的；减速的；迟钝的 v. 变慢；变萧条 adv. 慢慢地；迟缓地 n. (Slow)人名；(英)斯洛
worse	adj. 更坏的；更差的；更恶劣的（bad的比较级）；（病情）更重的（ill的比较级） adv. 更糟；更坏；更恶劣地；更坏地 n. 更坏的事；更恶劣的事
particular	adj. 特别的；详细的；独有的；挑剔的 n. 详细说明；个别项目
bid	v. 投标；出价；表示；吩咐 n. 出价；叫牌；努力争取
battery	n. [电] 电池，蓄电池
tape	n. 胶带；磁带；带子；卷尺 v. 录音；用带子捆扎；用胶布把…封住
later	adv. 后来；稍后；随后 adj. 更迟的；更后的 n. (Later)人名；(德)拉特
envelope	n. 信封，封皮；包膜；[天] 包层；包迹
short	adj. 短的；不足的；矮的，低的 n. 短；缺乏；短路；短裤 adv. 不足；突然；唐突地
insect	n. 昆虫；卑鄙的人
might	n. 力量；威力；势力 v. 可以；或许（may的过去式）；应该 aux. 可能；也许
zone	n. 地带；地区；联防 v. 分成区
paint	v. 油漆；绘画；装饰；涂色于；描绘；（用语言，文字等）描写；擦脂粉等 n. 油漆；颜料，涂料；绘画作品；胭脂等化妆品；色彩，装饰
spring	n. 春天；弹簧；泉水；活力；跳跃 adj. 春天的 v. 生长；涌出；跃出；裂开
personally	adv. 亲自地；当面；个别地；就自己而言
directory	n. [计] 目录；工商名录；姓名地址录 adj. 指导的；咨询的
up	adv. 起来；上涨；向上 prep. 在…之上；向…的较高处 adj. 涨的；起床的；向上的 n. 上升；繁荣
warehouse	n. 仓库；货栈；大商店 v. 储入仓库；以他人名义购进（股票）
freeway	n. 高速公路
that	pron. 那；那个 adv. 那么；那样 conj. 因为；以至于 adj. 那；那个 n. (That)人名；(德)塔特
again	adv. 又，此外；再一次；再说；增加 n. （英、保）阿盖恩
digital	adj. 数字的；手指的 n. 数字；键
random	adj. [数] 随机的；任意的；胡乱的 n. 随意 adv. 胡乱地
maximum	n. [数] 极大，最大限度；最大量 adj. 最高的；最多的；最大极限的
horse	n. 马；骑兵；脚架；海洛因 v. 使骑马；系马于；捉弄
monkey	n. 猴子；顽童 v. 胡闹；捣蛋
flight	n. 飞行；班机；逃走 v. 射击；使惊飞
coin	v. 铸造（货币）；杜撰，创造 n. 硬币，钱币
willingness	n. 乐意；心甘情愿；自动自发
pork	n. 猪肉 vt. 与女子性交
abolish	v. 废除，废止；取消，革除
flood	v. 淹没；充满；溢出 n. 洪水；泛滥；一大批
react	v. 反应；影响；反抗；起反作用
offer	v. 提供；出价；试图 n. 提议；出价；意图；录取通知书
bend	v. 使弯曲；使屈服；使致力；使朝向 n. 弯曲
constant	adj. 不变的；恒定的；经常的 n. [数] 常数；恒量
guilty	adj. 有罪的；内疚的
web	n. 网；卷筒纸；蹼；织物；圈套 v. 用网缠住；使中圈套
description	n. 描述，描写；类型；说明书
fear	n. 害怕；恐惧；敬畏；担心 v. 害怕；敬畏；为…担心
choose	v. 选择，决定
prisoner	n. 囚犯，犯人；俘虏；刑事被告
towel	n. 毛巾，手巾；[纸] 纸巾 v. 用毛巾擦
tiny	adj. 微小的；很少的 n. (Tiny)人名；(葡、印)蒂尼
tension	n. 张力，拉力；紧张，不安；电压 vt. 使紧张；使拉紧
cover	v. 包括；采访，报导；涉及 n. 封面，封皮；盖子；掩蔽物;幌子，借口
tree	n. 树；木料；树状物 v. 把赶上树
founding	adj. 创办的；发起的 v. [机] 铸造；建造；以…为基础（found的ing形式） n. [机] 铸造；溶解
wonderful	adj. 极好的，精彩的，绝妙的；奇妙的；美妙；胜；神妙
position	n. 位置，方位；职位，工作；姿态；站位 v. 安置；把……放在适当位置
yard	n. 院子；码（英制中丈量长度单位，1码=3英尺）；庭院；帆桁 vt. 把…关进或围在畜栏里
else	adv. 其他；否则；另外 adj. 别的；其他的 n. (Else)人名；(英)埃尔斯；(德)埃尔泽；(芬、丹)埃尔塞
expand	v. 扩张；使膨胀；详述
mm	abbr. 毫米（millimeter） n. 缅甸的域名
country	n. 国家，国土；国民；乡下，农村；乡村；故乡 adj. 祖国的，故乡的；地方的，乡村的；国家的；粗鲁的；乡村音乐的
below	adv. 在下面，在较低处；在本页下面 prep. 在…下面 n. (Below)人名；(英、德、芬、瑞典)贝洛
press	v. 压；按；逼迫；紧抱 n. 压；按；新闻；出版社；[印刷] 印刷机
saucer	n. 茶托，浅碟；浅碟形物；眼睛
literature	n. 文学；文献；文艺；著作
meanwhile	adv. 同时，其间 n. 其间，其时
ridiculous	adj. 可笑的；荒谬的
least	adj. 最小的；最少的（little的最高级） adv. 最小；最少 n. 最小；最少
packet	n. 数据包，信息包；小包，小捆 vt. 包装，打包
failure	n. 失败；故障；失败者；破产
apartment	n. 公寓；房间
conscience	n. 道德心，良心
running	n. 运转；赛跑；流出 adj. 连续的；流动的；跑着的；运转着的 v. 跑；运转（run的ing形式）；行驶
worldwide	adj. 全世界的 adv. 在世界各地
on	adv. 向前地；作用中，行动中；继续着 prep. 向，朝……；关于；在……之上；在……时候 adj. 开着的；发生着的，正在进行中 n. (On)人名；(日)温(姓、名)；(缅、柬、印)翁
appendix	n. 附录；阑尾；附加物
Canada	n. 加拿大（北美洲国家）
parent	n. 父亲（或母亲）；父母亲；根源
kill	v. 杀死；扼杀；使终止；抵消 n. 杀戮；屠杀 adj. 致命的；致死的
frighten	v. 使惊吓；吓唬…
unsafe	adj. 不安全的；危险的；不安稳的
term	n. 术语；学期；期限；条款；(代数式等的)项 v. 把…叫做
bureaucratic	adj. 官僚的；官僚政治的
gown	n. 长袍，长外衣；礼服；睡袍；法衣 v. 使穿睡衣
crazy	adj. 疯狂的；狂热的，着迷的
outward	adj. 向外的；外面的；公开的；外服的；肉体的 adv. 向外（等于outwards）；在外；显而易见地 n. 外表；外面；物质世界
exploit	v. 开发，开拓；剥削；开采 n. 勋绩；功绩
divide	v. 划分；除；分开；使产生分歧 n. [地理] 分水岭，分水线
line	n. 路线，航线；排；绳 v. 排成一行；划线于；以线条标示；使…起皱纹
bag	n. 袋；猎获物；（俚）一瓶啤酒 v. 猎获；把…装入袋中；占据，私吞；使膨大
sail	v. 航行；启航，开船 n. 帆，篷；航行
untrue	adj. 不真实的；不合标准的；不忠实的；不正当的
reading	n. 阅读，朗读；读物；读数 adj. 阅读的 v. 阅读（read的ing形式）
toward	prep. 向；对于；为了；接近 adj. 即将来到的，进行中的 n. (Toward)人名；(英)特沃德
discrimination	n. 歧视；区别，辨别；识别力
interval	n. 间隔；间距；幕间休息
outgoing	adj. 对人友好的，开朗的；出发的，外出的；即将离职的；乐于助人的 n. 外出；流出；开支 v. 超过；优于（outgo的ing形式）
subtraction	n. [数] 减法；减少；差集
kid	n. 小孩；小山羊 v. 欺骗；取笑；戏弄 adj. 小山羊皮制的；较年幼的
singer	n. 歌手，歌唱家
hire	n. 雇用，租用；租金，工钱 v. 雇用；出租
Scottish	adj. 苏格兰的；苏格兰人的；苏格兰语的 n. 苏格兰人；苏格兰语
deadline	n. 截止期限，最后期限
rob	v. 抢劫；使…丧失；非法剥夺
April	n. 四月
truck	n. 卡车；交易；手推车 v. 驾驶卡车；以物易物 adj. （美）运货汽车的
gallery	n. 画廊；走廊；旁听席；地道 vt. 在…修建走廊；在…挖地道 vi. 挖地道
stove	n. 火炉；窑；温室 vt. 用火炉烤
Pacific	adj. 太平洋的 n. 太平洋
ripen	v. 使成熟
glad	adj. 高兴的；乐意的；令人高兴的；灿烂美丽的 vt. 使高兴 n. (Glad)人名；(塞、瑞典)格拉德；(英)格莱德；(法、挪)格拉
inch	n. 英寸；身高；少许 v. 使缓慢地移动
teach	v. 教；教授；教导 n. (Teach)人名；(英)蒂奇
sausage	n. 香肠；腊肠；装香肠的碎肉
northeast	adj. 东北的；向东北的；来自东北的 n. 东北 adv. 向东北；来自东北
insurance	n. 保险；保险费；保险契约；赔偿金
messy	adj. 凌乱的，散乱的；肮脏的，污秽的；麻烦的
countryside	n. 农村，乡下；乡下的全体居民
teapot	n. 茶壶
staff	n. 职员；参谋；棒；支撑 adj. 职员的；行政工作的 v. 供给人员；给…配备职员
canteen	n. 食堂，小卖部；水壶
touch	v. 接触；触动；使轻度受害 n. 接触；触觉；格调；少许
are	v. 是（be的第二人称单复数现在式） n. 公亩
fairness	n. 公平；美好；清晰；顺利性
report	n. 报告；报道；成绩单 v. 报告；报导；使报到
neck	n. 脖子；衣领；海峡 v. 搂著脖子亲吻；变狭窄
member	n. 成员；会员；议员
constitution	n. 宪法；体制；章程；构造；建立，组成；体格
pass	n. 及格；经过；护照；途径；传球 v. 经过；传递；变化；终止
medical	adj. 医学的；药的；内科的 n. 医生；体格检查
jam	n. 果酱；拥挤；困境；扣篮 v. 使堵塞；挤进，使塞满；混杂；压碎
behalf	n. 代表；利益
govern	v. 管理；支配；统治；控制 n. (Govern)人名；(英)戈文
cross	n. 交叉，十字；十字架，十字形物 v. 交叉；杂交；横过 adj. 交叉的，相反的；乖戾的；生气的
fifth	adj. 第五的；五分之一的 n. 第五；五分之一 num. 第五
dawn	n. 黎明；开端 v. 破晓；出现；被领悟
diverse	adj. 不同的；多种多样的；变化多的
someone	pron. 有人，某人
skateboard	n. 溜冰板 v. 用滑板滑行
wish	n. 希望；祝福；心愿 v. 祝愿；渴望；向…致问候语
smell	v. 嗅，闻；有…气味 n. 气味，嗅觉；臭味
matter	n. 物质；事件 v. 有关系；要紧
barbecue	n. 烤肉；吃烤肉的野宴 v. 烧烤；烤肉
aside	adv. 离开，撇开；在旁边 n. 旁白；私语，悄悄话；离题的话 prep. 在…旁边
appreciate	v. 欣赏；感激；领会；鉴别
lake	n. 湖；深红色颜料；胭脂红 vt. （使）血球溶解 vi. （使）血球溶解
my	pron. 我的 int. 哎呀（表示惊奇等）；喔唷 n. (My)人名；(越)美；(老、柬)米
plate	n. 碟；金属板；金属牌；感光底片 v. 电镀；给…装甲
approximately	adv. 大约，近似地；近于
diet	n. 饮食；食物；规定饮食 v. 节食
way	n. 方法；道路；方向；行业；习惯 adv. 大大地；远远地 adj. 途中的
diamond	n. 钻石，金刚石；菱形；方块牌 adj. 菱形的；金刚钻的
remain	v. 保持；依然；留下；剩余；逗留；残存 n. 遗迹；剩余物，残骸
aircraft	n. 飞机，航空器
curtain	n. 幕；窗帘 v. 遮蔽；装上门帘
dig	v. 挖，掘；探究 n. 戳，刺；挖苦
Scotland	n. 苏格兰
age	n. 年龄；时代；寿命，使用年限；阶段 v. 成熟；变老
bamboo	n. 竹，竹子 vt. 为…装上篾条 adj. 竹制的；土著居民的
arch	n. 弓形，拱形；拱门 adj. 主要的 v. 使…弯成弓形；用拱连接
poet	n. 诗人
fan	v. 煽动；刺激；吹拂 n. 迷；风扇；爱好者
breast	n. 乳房，胸部；胸怀；心情 v. 以胸对着；与…搏斗
sleeve	n. [机] 套筒，[机] 套管；袖子，[服装] 袖套 vt. 给……装袖子；给……装套筒
mentally	adv. 精神上，智力上；心理上
power	n. 力量，能力；电力，功率；政权，势力；[数] 幂 v. 激励；供以动力；使…有力量 adj. 借影响有权势人物以操纵权力的
via	prep. 渠道，通过；经由
tick	v. 标记号于；滴答地记录 n. 滴答声；扁虱；记号；赊欠
relax	v. 放松，休息；松懈，松弛；变从容；休养
drawing	n. 图画；牵引；素描术 v. 绘画；吸引（draw的ing形式）；拖曳
rough	adj. 粗糙的；粗略的；粗野的；艰苦的；未经加工的 v. 使粗糙；粗暴对待；草拟 n. 艰苦；高低不平的地面；未经加工的材料；粗糙的部分 adv. 粗糙地；粗略地；粗暴地
systematic	adj. 系统的；体系的；有系统的；[图情] 分类的；一贯的，惯常的
barber	v. 为…理发；修整 n. 理发师
trouble	n. 麻烦；烦恼；故障；动乱 v. 麻烦；使烦恼；折磨
male	adj. 男性的；雄性的；有力的 n. 男人；雄性动物
production	n. 成果；产品；生产；作品
down	adv. 向下，下去；在下面 adj. 向下的 n. 软毛，绒毛；[地质] 开阔的高地 prep. 沿着，往下 v. 打倒，击败
liquid	adj. 液体的；清澈的；明亮的；易变的 n. 液体，流体；流音
adolescence	n. 青春期
neighbour	n. n邻居;同胞；仁慈的人 v. 邻接 adj. 邻居的；邻近的
potential	n. 潜能；可能性；[电] 电势 adj. 潜在的；可能的；势的
first	adv. 第一；首先；优先；宁愿 n. 第一；开始；冠军 adj. 第一的；基本的；最早的 num. 第一
diagram	n. 图表；图解 v. 用图解法表示
memory	n. 记忆，记忆力；内存，[计] 存储器；回忆
unhappy	adj. 不快乐的；不幸福的；不适当的
distant	adj. 遥远的；冷漠的；远隔的；不友好的，冷淡的
fence	n. 栅栏；围墙；剑术 v. 防护；用篱笆围住；练习剑术
crowd	n. 群众,一伙;一堆,许多,大众 v. 拥挤,挤满,挤进
function	n. 功能；[数] 函数；职责；盛大的集会 v. 运行；活动；行使职责
bird	n. 鸟；家伙；羽毛球 v. 向…喝倒彩；起哄
classify	v. 分类；分等
explicit	adj. 明确的；清楚的；直率的；详述的
lightning	adj. 闪电的；快速的 n. 闪电 vi. 闪电
step	n. 步，脚步；步骤；步伐；梯级 v. 踏，踩；走
jog	v. 慢跑；轻推；蹒跚行进；使颠簸 n. 慢跑；轻推，轻撞
already	adv. 已经，早已；先前
night	n. 夜晚，晚上；黑暗，黑夜 adj. 夜晚的，夜间的
drawer	n. 抽屉；开票人；出票人；起草者；酒馆侍
wooden	adj. 木制的；僵硬的，呆板的
accessible	adj. 易接近的；可进入的；可理解的
passive	adj. 被动的，消极的；被动语态的 n. 被动语态
wonder	n. 惊奇；奇迹；惊愕 v. 怀疑；想知道；惊讶 adj. 奇妙的；非凡的
ought	aux. 应该，应当；大概 vi. 应该，应当；大概
transform	v. 改变，使…变形；转换
defend	v. 辩护；防护
kilometre	n. [计量] 公里；[计量] 千米
talk	v. 说；谈话；讨论 n. 谈话；演讲；空谈
girl	n. 女孩；姑娘，未婚女子；女职员，女演员；（男人的）女朋友
ambassador	n. 大使；代表；使节
grass	n. 草；草地，草坪 v. 放牧；使……长满草；使……吃草
billion	n. 十亿；大量 num. 十亿 adj. 十亿的
summary	adj. 简易的；扼要的 n. 概要，摘要，总结
Moslem	adj. 穆斯林的；伊斯兰教的；回教的 n. 穆斯林；穆罕默德信徒；伊斯兰
wire	n. 电线；金属丝；电报 v. 拍电报；给…装电线
morning	n. 早晨；黎明；初期
depend	v. 依赖，依靠；取决于；相信，信赖
fold	v. 折叠；合拢；抱住；笼罩 n. 折痕；信徒；羊栏
precise	adj. 精确的；明确的；严格的
quick	n. 核心；伤口的嫩肉 adj. 快的；迅速的，敏捷的；灵敏的 adv. 迅速地，快
conference	n. 会议；讨论；协商；联盟；（正式）讨论会；[工会、工党用语]（每年的）大会 vi. 举行或参加（系列）会议
instead	adv. 代替；反而；相反
Canadian	adj. 加拿大（人）的 n. 加拿大人
properly	adv. 适当地；正确地；恰当地
absolute	adj. 绝对的；完全的；专制的 n. 绝对；绝对事物
example	n. 例子；榜样 vt. 作为…的例子；为…做出榜样 vi. 举例
bill	n. [法] 法案；广告；账单；[金融] 票据；钞票；清单 v. 宣布；开账单；用海报宣传
since	conj. 因为；由于；既然；自…以来；自…以后 prep. 自…以来；自…以后 adv. 后来
almost	adv. 差不多，几乎
marry	v. 嫁；娶；与……结婚 n. (Marry)人名；(阿拉伯)马雷；(法)马里
adore	v. 崇拜；爱慕；喜爱；极喜欢 n. (Adore)人名；(法)阿多尔
starvation	n. 饿死；挨饿；绝食
handful	n. 少数；一把；棘手事
porridge	n. 粥，糊；麦片粥 vt. 服刑
jet	n. 喷射，喷嘴；喷气式飞机；黑玉 adj. 墨黑的 v. 射出
volleyball	n. 排球
draft	n. 汇票；草稿；选派；（尤指房间、烟囱、炉子等供暖系统中的）（小股）气流 v. 起草；制定；征募 adj. 初步画出或（写出）的；（设计、草图、提纲或版本）正在起草中的，草拟的；以草稿形式的；草图的
festival	n. 节日；庆祝，纪念活动；欢乐 adj. 节日的，喜庆的；快乐的
alarm	n. 闹钟；警报，警告器；惊慌 v. 警告；使惊恐
sharp	adj. 急剧的；锋利的；强烈的；敏捷的；刺耳的 adv. 急剧地；锐利地；突然地 n. 尖头；骗子；内行 vt. 磨快；把音调升高 vi. 打扮；升音演奏
regular	adj. 定期的；有规律的；合格的；整齐的；普通的 n. 常客；正式队员；中坚分子 adv. 定期地；经常地
application	n. 应用；申请；应用程序；敷用
republic	n. 共和国；共和政体
rubbish	n. 垃圾，废物；废话 adj. 毫无价值的
heavy	adj. 沉重的；繁重的，巨大的；拥挤的；阴沉的 n. 重物；严肃角色 adv. 大量地；笨重地
drown	v. 淹没；把…淹死 n. (Drown)人名；(英)德朗
quality	n. 质量，[统计] 品质；特性；才能 adj. 优质的；高品质的；<英俚>棒极了
catalogue	n. 目录；（美）大学情况一览 v. 把…编入目录
cube	n. 立方；立方体；骰子 v. 使成立方形；使自乘二次；量…的体积
wrinkle	n. 皱纹 v. 起皱
bookshop	n. 书店
eat	v. 吃，喝；腐蚀；烦扰
egg	n. 蛋；卵子；家伙；鸡蛋 v. 煽动；怂恿
highway	n. 公路，大路；捷径
white	adj. 白色的；白种的；纯洁的 n. 白色；洁白；白种人
pencil	n. 铅笔；笔状物 v. 用铅笔写；用眉笔涂
weigh	v. 权衡；考虑；称…重量 n. 权衡；称重量
abuse	n. 滥用；虐待；辱骂；弊端；恶习，陋习 v. 滥用；虐待；辱骂
tiger	n. 老虎；凶暴的人
TRUE	adj. 真实的；正确的 adv. 真实地；准确地 n. 真实；准确 v. 装准
eighty	n. 八十；八十岁；八十年代 adj. 八十的，八十个的；八十岁的 num. 八十
sickness	n. 疾病；呕吐；弊病
spiritual	n. 圣歌（尤指美国南部黑人的） adj. 精神的，心灵的
I	pron. 我 n. 碘元素；英语字母I
blank	adj. 空白的；空虚的；单调的 n. 空白；空虚；空白表格 v. 使…无效；使…模糊；封锁
through	prep. 通过；穿过；凭借 adv. 彻底；从头至尾 adj. 直达的；过境的；完结的
boycott	v. 联合抵制；拒绝参加 n. 联合抵制
harmony	n. 协调；和睦；融洽；调和
aunt	n. 阿姨；姑妈；伯母；舅妈
fuel	v. 得到燃料 n. 燃料；刺激因素
Paris	n. 巴黎（法国首都）；帕里斯（特洛伊王子）
frost	v. 结霜于；冻坏 n. 霜；冰冻，严寒；冷淡
central	adj. 中心的；主要的；中枢的 n. 电话总机
farmer	n. 农夫，农民
vote	n. 投票，选举；选票；得票数 v. 提议，使投票；投票决定；公认
ruin	n. 废墟；毁坏；灭亡 v. 毁灭；使破产
England	n. 英格兰
helmet	n. 钢盔，头盔
the	art. 这；那 adv. 更加（用于比较级，最高级前）
seaside	n. 海边；海滨 adj. 海边的；海滨的
perfect	adj. 完美的；最好的；精通的 v. 使完美；使熟练 n. 完成式
airport	n. 机场；航空站
flee	v. 逃走；消失，消散
housewife	n. 家庭主妇
fight	v. 打架；与…打仗，与…斗争；反对…提案 n. 打架；战斗，斗志
piece	n. 块；件；篇；硬币 v. 修补；接合；凑合
breath	n. 呼吸，气息；一口气，（呼吸的）一次；瞬间，瞬息；微风；迹象；无声音，气音
ownership	n. 所有权；物主身份
plane	n. 飞机；平面；程度，水平 v. 刨；乘飞机旅行；翱翔 adj. 平的；平面的
fluent	adj. 流畅的，流利的；液态的；畅流的
gun	n. 枪支；枪状物；持枪歹徒 v. 用枪射击；加大油门快速前进
Indian	adj. 印度的；印第安人的；印第安语的 n. 印度人；印第安人；印第安语
bad	adj. 坏的；严重的；劣质的 n. 坏事；坏人 adv. 很，非常；坏地；邪恶地
boy	n. 男孩；男人
howl	v. 咆哮；怒吼；狂吠 n. 嗥叫；怒号；嚎哭
doll	n. 洋娃娃；玩偶；无头脑的美丽女人 v. 把…打扮得花枝招展
yellow	adj. 黄色的；黄皮肤的 n. 黄色；黄种人；黄色颜料 v. 使变黄或发黄
settler	n. 移居者；殖民者
unwilling	adj. 不愿意的；不情愿的；勉强的
bridegroom	n. 新郎
favourite	adj. 特别受喜爱的 n. 特别喜爱的人（或物）
delicious	adj. 美味的；可口的
stage	n. 阶段；舞台；戏剧；驿站 v. 举行；上演；筹划
academic	adj. 学术的；理论的；学院的 n. 大学生，大学教师；学者
rainbow	n. 彩虹；五彩缤纷的排列；幻想 adj. 五彩缤纷的；彩虹状的 vt. 使呈彩虹状；如彩虹般装饰 vi. 呈彩虹状
interview	n. 接见，采访；面试，面谈 v. 采访；接见；对…进行面谈；对某人进行面试
income	n. 收入，收益；所得
flag	v. 标记；衰退；枯萎 n. 标志；旗子
spaceship	n. [航] 宇宙飞船
deed	n. 行动；功绩；证书；[法] 契据 vt. 立契转让
pain	n. 疼痛；努力 v. 使…痛苦；使…烦恼
fox	v. 欺骗；使变酸 n. 狐狸；狡猾的人
penny	n. （美）分；便士
around	adv. 大约；到处；在附近 prep. 四处；在…周围
grandma	n. 奶奶；外婆
read	v. 阅读；读懂，理解 n. 阅读；读物 adj. 有学问的
granddaughter	n. 孙女；外孙女
trade	n. 贸易，交易；行业；职业 v. 交易，买卖；以物易物
European	adj. 欧洲的；欧洲人的 n. 欧洲人
mat	n. 垫；垫子；衬边 v. 缠结；铺席于……上 adj. 无光泽的
wine	n. 酒，葡萄酒；紫红色 v. 喝酒
physician	n. [医] 医师；内科医师
hillside	n. 山坡，山腹；山腰
Britain	n. 英国；不列颠
hero	n. 英雄；男主角，男主人公
plan	n. 计划；平面图 v. 计划；设计；打算
mourn	v. 哀悼；忧伤；服丧
engineer	n. 工程师；工兵；火车司机 v. 设计；策划；精明地处理
spend	v. 度过，消磨（时光）；花费；浪费；用尽 n. 预算
bread	n. 面包；生计 v. 在…上洒面包屑
interpreter	n. 解释者；口译者；注释器
operate	v. 运转；动手术；起作用
affect	v. 影响；感染；感动；假装 n. 情感；引起感情的因素
bike	n. 自行车；脚踏车 v. 骑自行车（或摩托车）
sacred	adj. 神的；神圣的；宗教的；庄严的
means	n. 手段；方法；财产 v. 意思是；打算（mean的第三人称单数） [ 复数means ]
tire	v. 疲劳；厌倦 n. 轮胎；头饰
marble	n. 大理石；大理石制品；弹珠 adj. 大理石的；冷酷无情的
ferry	n. 渡船；摆渡；渡口 v. （乘渡船）渡过；用渡船运送；空运
break	v. 打破；折断；弄坏；削弱 n. 破裂；间断；（持续一段时间的状况的）改变；间歇
natural	adj. 自然的；物质的；天生的；不做作的 n. 自然的事情；白痴；本位音
letter	n. 信；字母，文字；证书；文学，学问；字面意义 v. 写字母于
extreme	adj. 极端的；极度的；偏激的；尽头的 n. 极端；末端；最大程度；极端的事物
disappointment	n. 失望；沮丧
kitchen	n. 厨房；炊具；炊事人员
consideration	n. 考虑；原因；关心；报酬
merchant	n. 商人，批发商；店主 adj. 商业的，商人的
jewelry	n. 珠宝；珠宝类
status	n. 地位；状态；情形；重要身份
homework	n. 家庭作业，课外作业
autumn	n. 秋天；成熟期；渐衰期，凋落期 adj. 秋天的，秋季的
forever	adv. 永远；不断地；常常
selfish	adj. 自私的；利己主义的
athlete	n. 运动员，体育家；身强力壮的人
before	prep. 在…之前，先于 adv. 以前；在前 conj. 在…以前；在…之前
itself	pron. 它自己；它本身
role	n. 角色；任务
family	n. 家庭；亲属；家族；子女；[生]科；语族；[化]族 adj. 家庭的；家族的；适合于全家的
victim	n. 受害人；牺牲品；牺牲者
worm	n. 虫，蠕虫；蜗杆；螺纹；小人物 v. 使蠕动；给除虫；使缓慢前进
shopkeeper	n. 店主，老板
wedding	n. 婚礼，婚宴；结婚；结合 v. 与…结婚（wed的ing形式）
classical	adj. 古典的；经典的；传统的；第一流的 n. 古典音乐
surplus	n. 剩余；[贸易] 顺差；盈余；过剩 adj. 剩余的；过剩的
steep	adj. 陡峭的；不合理的；夸大的；急剧升降的 v. 泡；浸；使…充满 n. 峭壁；浸渍
woollen	adj. 羊毛制的 n. 毛织品
of	prep. 关于；属于；…的；由…组成的
fibre	n. 纤维；纤维制品
tasteless	adj. 无味的；无鉴赏力的
dog	n. 狗；丑女人；卑鄙的人；(俚)朋友 v. 跟踪；尾随
sensitive	adj. 敏感的；感觉的；[仪] 灵敏的；感光的；易受伤害的；易受影响的 n. 敏感的人；有灵异能力的人
junior	adj. 年少的；后进的；下级的 n. 年少者，晚辈；地位较低者；大学三年级学生
translator	n. 译者；翻译器
adventure	n. 冒险；冒险精神；投机活动 v. 冒险；大胆说出
qualification	n. 资格；条件；限制；赋予资格
planet	n. 行星
ugly	adj. 丑陋的；邪恶的；令人厌恶的
history	n. 历史，历史学；历史记录；来历
house	n. 住宅；家庭；机构；议会；某种用途的建筑物 v. 覆盖；给…房子住；把…储藏在房内
surface	n. 表面；表层；外观 adj. 表面的，肤浅的 v. 浮出水面
devote	v. 致力于；奉献
aid	n. 援助；帮助；助手；帮助者 v. 援助；帮助；有助于
component	adj. 组成的，构成的 n. 成分；组件；[电子] 元件
generation	n. 一代；产生；一代人；生殖
edge	n. 边缘；优势；刀刃；锋利 v. 使锐利；将…开刃；给…加上边
organ	n. [生物] 器官；机构；风琴；管风琴；嗓音
federal	adj. 联邦的；同盟的；联邦政府的； 联邦制的 adv. 联邦政府地 n. (Federal)人名；(英)费德勒尔
alive	adj. 活着的；活泼的；有生气的
top	n. 顶部，顶端；上部；首席；陀螺 v. 高出，超越；结束；达到顶点 adj. 最高的，顶上的；头等的
minority	n. 少数民族；少数派；未成年 adj. 少数的；属于少数派的
have	v. 有；让；拿；从事；允许 aux. 已经 n. (Have)人名；(芬)哈韦；(德)哈弗
notice	n. 通知，布告；注意；公告 v. 通知；注意到；留心
tower	n. 塔；高楼；堡垒 v. 高耸；超越
actress	n. 女演员
enthusiastic	adj. 热情的；热心的；狂热的
loose	adj. 宽松的；散漫的；不牢固的；不精确的 v. 释放；开船；放枪 adv. 松散地 n. 放纵；放任；发射
adequate	adj. 充足的；适当的；胜任的
lock	v. 锁，锁上；隐藏 n. 锁；水闸；刹车
blood	n. 血，血液；血统 v. 从…抽血；使先取得经验
birthplace	n. 出生地
navy	n. 海军
American	n. 美国人，美洲人；美国英语 adj. 美国的，美洲的；地道美国式的
problem	n. 难题；引起麻烦的人 adj. 成问题的；难处理的
shall	aux. 应；会；将；必须
for	prep. 为，为了；因为；给；对于；至于；适合于 conj. 因为
cordless	n. 不用电线的 adj. 无线的（副词cordlessly）
pleasure	n. 快乐；希望；娱乐；令人高兴的事 vt. 使高兴；使满意 vi. 高兴；寻欢作乐
appointment	n. 任命；约定；任命的职位
would	aux. 将，将要；愿意 v. will的过去式
grandchild	n. 孙子；孙女；外孙；外孙女
window	n. 窗；窗口；窗户
redirect	v. 使改方向；重新寄送 adj. 再直接的 n. 再直接询问
niece	n. 外甥女，侄女
coal	v. 上煤；加煤 n. 煤；煤块；木炭
mainland	n. 大陆；本土 adj. 大陆的；本土的
mother	n. 母亲；大娘；女修道院院长 v. 生下；养育；像母亲般关怀或照管 adj. 母亲的；出生地的
chaos	n. 混沌，混乱
polite	adj. 有礼貌的，客气的；文雅的；上流的；优雅的
entertainment	n. 娱乐；消遣；款待
personnel	n. 人事部门；全体人员 adj. 人员的；有关人事的
circle	n. 循环，周期；圆；圈子；圆形物 v. 盘旋，旋转；环行
Chinese	n. 中文，汉语；中国人 adj. 中国的，中国人的；中国话的
Monday	n. 星期一
save	v. 节省；保存；储蓄；解救 prep. 除之外 n. 救援
collar	n. 衣领；颈圈 v. 抓住；给…上领子；给…套上颈圈
dot	n. 点，圆点；嫁妆 v. 打上点
coach	n. 教练；旅客车厢；长途公车；四轮大马车 v. 训练；指导
nuclear	adj. 原子能的；[细胞] 细胞核的；中心的；原子核的
voice	n. 声音；嗓音；发言权；愿望 v. 表达；吐露
select	v. 挑选；选拔 adj. 精选的；挑选出来的；极好的 n. 被挑选者；精萃
thunder	n. 雷；轰隆声；恐吓 v. 打雷；怒喝
ancestor	n. 始祖，祖先；被继承人
tend	v. 趋向，倾向；照料，照顾
bowl	n. 碗；木球；大酒杯 v. 玩保龄球；滑动；平稳快速移动
pretend	v. 假装，伪装，佯装 adj. 假装的
majority	n. 多数；成年
minute	n. 分，分钟；片刻，一会儿；备忘录，笔记；会议记录 v. 将…记录下来 adj. 微小的，详细的 [maɪˈnjuːt; US -ˈnuːt; maɪˋnut]
weather	n. 天气；气象；气候；处境 v. 经受住；使风化；侵蚀；使受风吹雨打 adj. 露天的；迎风的
suggestion	n. 建议；示意；微量，细微的迹象
sunrise	n. 日出；黎明
alike	adj. 相似的；相同的 adv. 以同样的方式；类似于
district	n. 区域；地方；行政区
compulsory	adj. 义务的；必修的；被强制的 n. （花样滑冰、竞技体操等的）规定动作
Tibet	n. 西藏（中国一自治区）
lay	v. 躺下；产卵；搁放；放置；铺放；涂，敷 adj. 世俗的；外行的；没有经验的 n. 位置；短诗；花纹方向；叙事诗；性伙伴
stomach	n. 胃；腹部；胃口 v. 忍受；吃下
damage	n. 损害；损毁；赔偿金 v. 损害；损毁
cough	n. 咳嗽，咳嗽声；咳嗽病 v. 咳出
shut	v. 关闭；停业；幽禁 n. 关闭 adj. 关闭的；围绕的
anniversary	n. 周年纪念日
coat	n. 外套 v. 覆盖…的表面
ham	n. 火腿；业余无线电爱好者；蹩脚演员 v. 表演过火 adj. 过火的；做作的
depth	n. [海洋] 深度；深奥
somebody	n. 大人物；重要人物 pron. 有人；某人
requirement	n. 要求；必要条件；必需品
guard	n. 守卫；警戒；护卫队；防护装置 v. 警惕
superman	n. 超人，能力非凡的
artist	n. 艺术家；美术家（尤指画家）；大师
prove	v. 证明；检验；显示
cry	v. 叫喊；哭出；大声说 n. 叫喊；叫声；口号；呼叫
lunch	n. 午餐 v. 吃午餐；供给午餐
fourth	adj. 第四的，第四个的；四分之一的 n. 第四，月的第四日；四分之一 num. 第四
tractor	n. 拖拉机；牵引机
entire	adj. 全部的，整个的；全体的 n. (Entire)人名；(英)恩泰尔
bare	adj. 空的；赤裸的，无遮蔽的 v. 露出，使赤裸 n. (Bare)人名；(英)贝尔
guess	v. 猜测；认为；推测；猜中 n. 猜测；推测
outside	adj. 外面的，外部的；外来的 n. 外部；外观 adv. 在外面，向外面；在室外 prep. 在…范围之外
absent	adj. 缺席的；缺少的；心不在焉的；茫然的 v. 使缺席
firewood	n. 柴火；木柴
our	pron. 我们的
Iceland	n. 冰岛（欧洲岛名，在大西洋北部，近北极圈）
ecology	n. 生态学；社会生态学
religion	n. 宗教；宗教信仰
participate	v. 参与，参加；分享
unusual	adj. 不寻常的；与众不同的；不平常的
gravity	n. 重力，地心引力；严重性；庄严
dust	n. 灰尘；尘埃；尘土 v. 撒；拂去灰尘
science	n. 科学；技术；学科；理科
money	n. 钱；货币；财富
ship	v. 运送，乘船；以船运送 n. 船；舰；太空船
precious	adj. 宝贵的；珍贵的；矫揉造作的 n. (Precious)人名；(英)普雷舍斯，普雷舍丝(女名)
today	adv. 今天；现今 n. 今天；现今
overlook	v. 忽略；俯瞰；远眺；检查；高耸于…之上 n. 忽视；眺望
hang	v. 悬挂，垂下；装饰；绞死；使悬而未决 n. 悬挂；暂停，中止
ticket	n. 票；入场券，标签；（美）候选人名单；证明书；交通罚款单 v. 加标签于；指派；对…开出交通违规罚单
Mosquito	n. 蚊子
repairs	n. 修理；[会计] 修理费；备件；修理工作（repair的复数形式） v. 修理；恢复（repair的三单形式）；弥补；纠正
dormitory	n. 宿舍，学生宿舍 adj. 住宅区的
write	v. 写，写字；写作，作曲；写信
seat	n. 座位；所在地；职位 v. 使…坐下；可容纳…的；使就职
wander	v. 徘徊；漫步；迷路；离题 n. (Wander)人名；(英)万德(女子教名)
tentative	adj. 试验性的，暂定的；踌躇的 n. 假设，试验
eighteen	n. 十八，十八个 adj. 十八个的，十八的 num. 十八
hold	v. 持有；拥有；保存；拘留；约束或控制 n. 控制；保留
habit	n. 习惯，习性；嗜好 v. 使穿衣
future	n. 未来；前途；期货；将来时 adj. 将来的，未来的
independent	adj. 独立的；单独的；无党派的；不受约束的 n. 独立自主者；无党派者
subject	n. 主题；科目；[语] 主语；国民 adj. 服从的；易患…的；受制于…的 v. 使…隶属；使屈从于…
say	v. 讲；说明；例如；声称；假设；指明 n. (Say)人名；(土)萨伊；(法、老、柬)赛；(英)塞伊；(匈、罗)绍伊
target	n. 目标；靶子 v. 把……作为目标；规定……的指标；瞄准某物
disease	n. 病，[医] 疾病；弊病 vt. 传染；使…有病
death	n. 死；死亡；死神；毁灭
ago	adv. 以前，以往 adj. 以前的；过去的 n. (Ago)人名；(英、西、意、塞、瑞典)阿戈
shore	v. 支撑，使稳住；用支柱撑住 n. 海滨；支柱
obey	v. 服从，听从；按照……行动 n. (Obey)人名；(英、法)奥贝
thankful	adj. 感谢的；欣慰的
restaurant	n. 餐馆；[经] 饭店
awesome	adj. 令人敬畏的；使人畏惧的；可怕的；极好的
decorate	v. 装饰；布置；授勋给
judgement	n. 意见；判断力；[法] 审判；评价
congratulation	n. 祝贺；贺辞
appropriate	adj. 适当的；恰当的；合适的 v. 占用，拨出
assessment	n. 评定；估价
supper	n. 晚餐，晚饭；夜宵
bent	n. 爱好，嗜好 adj. 弯曲的；决心的
they	pron. 他们；它们；她们
move	n. 移动；步骤；迁居；策略 v. 移动；搬家，迁移；离开
eagle	n. 鹰；鹰状标饰
common	adj. 共同的；普通的；一般的；通常的 n. 普通；平民；公有地
customer	n. 顾客；家伙
cast	v. 投，抛；计算；浇铸；投射（光、影、视线等） n. 投掷，抛；铸件，[古生] 铸型；演员阵容；脱落物
million	n. 百万；无数 adj. 百万的；无数的 num. 百万
custom	n. 习惯，惯例；风俗；海关，关税；经常光顾；[总称]（经常性的）顾客 adj. （衣服等）定做的，定制的
extra	adv. 特别地，非常；另外 n. 临时演员；号外；额外的事物；上等产品 adj. 额外的，另外收费的；特大的
ash	n. 灰；灰烬
evaluate	v. 评价；估价；求…的值
suit	v. 适合；使适应 n. 诉讼；恳求；套装，西装；一套外衣
servant	n. 仆人，佣人；公务员；雇工
Wednesday	n. 星期三
after	adv. 后来，以后 prep. 在……之后 conj. 在……之后 adj. 以后的
attempt	n. 企图，试图；攻击 v. 企图，试图；尝试
retire	v. 退休；撤退；退却 n. 退休；退隐；退兵信号
return	v. 返回；报答 n. 返回；归还；回球 adj. 报答的；回程的；返回的
celebrate	v. 庆祝；举行；赞美；祝贺；宣告
switch	v. 转换；用鞭子等抽打 n. 开关；转换；鞭子
cure	v. 治疗；治愈；使硫化；加工处理 n. 治疗；治愈；[临床] 疗法
primary	adj. 主要的；初级的；基本的 n. 原色；最主要者
keep	v. 保持；经营；遵守；饲养 n. 保持；生计；生活费
pyramid	n. 金字塔；角锥体 v. 渐增；上涨；成金字塔状
afford	v. 给予，提供；买得起 n. (Afford)人名；(英)阿福德
cut	n. 伤口；切口；削减；（服装等的）式样；削球；切入 v. [机] 切割；削减；缩短；刺痛 adj. 割下的；雕过的；缩减的
ban	v. 禁止，取缔 n. 禁令，禁忌
tablet	n. 碑；药片；写字板；小块；平板电脑 vt. 用碑牌纪念；将(备忘录等)写在板上；将…制成小片或小块
head	n. 头；头痛；上端；最前的部分；理解力 v. 前进；用头顶；作为…的首领；站在…的前头；给…加标题 adj. 头的；主要的；在顶端的
foreigner	n. 外地人，外国人
willing	adj. 乐意的；自愿的；心甘情愿的 v. 决心；用意志力驱使；将（财产等）遗赠某人（will的现在分词） n. (Willing)人名；(德、芬、瑞典)维林；(英)威林
mineral	n. 矿物；（英）矿泉水；无机物；苏打水（常用复数表示） adj. 矿物的；矿质的
shade	n. 树荫；阴影；阴凉处；遮阳物；（照片等的）明暗度；少量、些微；细微的差别 v. 使阴暗；使渐变；为…遮阳；使阴郁；掩盖
various	adj. 各种各样的；多方面的
poem	n. 诗
above	prep. 超过；在……上面；在……之上 adv. 在上面；在上文 adj. 上文的 n. 上文
dinosaur	n. 恐龙；过时、落伍的人或事物
valuable	adj. 有价值的；贵重的；可估价的 n. 贵重物品
swallow	v. 忍受；吞没 n. 燕子；一次吞咽的量
blue	n. 蓝色；[复数]（美国海、陆、空三军穿的）蓝色制服；蓝颜料；[the blue(s)][用作单数或复数]布鲁斯（歌曲）（一种伤感的美国黑人民歌 adj. 蓝色的；沮丧的，忧郁的；下流的 v. 把…染成蓝色；使成蓝色；给…用上蓝剂；用上蓝剂于
teamwork	n. 团队合作；协力
wax	n. 蜡；蜡状物 v. 给…上蜡 adj. 蜡制的；似蜡的
tyre	vt. 装轮胎于 n. [橡胶] 轮胎；轮箍
hour	n. 小时；钟头；课时；…点钟
battleground	n. 战场
sometimes	adv. 有时，间或
mud	v. 弄脏；用泥涂 n. 泥；诽谤的话；无价值的东西
office	n. 办公室；政府机关；官职；营业处
leg	n. 腿；支柱
melon	n. 瓜；甜瓜；大肚子；圆鼓鼓像瓜似的东西
race	n. 属，种；种族，人种；家庭，门第 v. 使参加比赛；和…竞赛；使急走，使全速行进
optional	adj. 可选择的，随意的 n. 选修科目
stop	v. 停止；堵塞；断绝 n. 停止；车站；障碍；逗留
dustbin	n. 垃圾箱；吃货
screen	n. 屏，幕；屏风 v. 筛；拍摄；放映；掩蔽
stocking	n. 长袜
flat	adj. 平的；单调的；不景气的；干脆的；平坦的；扁平的；浅的 adv. （尤指贴着另一表面）平直地；断然地；水平地；直接地，完全地 n. 平地；公寓；平面 vt. 使变平；[音乐]使（音调）下降，尤指降半音 vi. 逐渐变平；[音乐]以降调唱（或奏）
alone	adj. 独自的；单独的；孤独的 adv. 独自地；单独地
print	n. 印刷业；印花布；印刷字体；印章；印记 v. 印刷；打印；刊载；用印刷体写；在…印花样
die	v. 死亡；凋零；熄灭 n. 冲模，钢模；骰子
mouse	n. 鼠标；老鼠；胆小羞怯的人 v. 探出
space	n. 空间；太空；距离 v. 留间隔
early	adj. 早期的；早熟的 adv. 提早；在初期 n. (Early)人名；(英)厄尔利
athletic	adj. 运动的，运动员的；体格健壮的
cubic	adj. 立方体的，立方的 n. (Cubic)人名；(罗)库比克
secret	n. 秘密；秘诀；机密 adj. 秘密的；机密的
bush	n. 灌木；矮树丛 v. 以灌木装饰；使…精疲力竭 adj. 如灌木般长得低矮的；粗野的
calculate	v. 计算；以为；作打算
super	adj. 特级的；极好的 n. 特级品，特大号；临时雇员
people	n. 人；人类；民族；公民 v. 居住于；使住满人
brake	v. 刹车 n. 闸，刹车；阻碍
side	n. 方面；侧面；旁边 v. 支持；赞助；偏袒 adj. 旁的，侧的
safety	n. 安全；保险；安全设备；保险装置；安打
snowball	n. 雪球 v. 掷雪球；滚雪球般增大
address	v. 演说；从事；忙于；写姓名地址；向…致辞；与…说话；提出；处理 n. 地址；演讲；致辞；说话的技巧；称呼
store	n. 商店；储备，贮藏；仓库 v. 贮藏，储存
institution	n. 制度；建立；（社会或宗教等）公共机构；习俗
neat	adj. 灵巧的；整洁的；优雅的；齐整的；未搀水的；平滑的
laughter	n. 笑；笑声
schoolbag	n. 书包
clap	v. 鼓掌，拍手；啪地关上 n. 鼓掌；拍手声
wall	n. 墙壁，围墙；似墙之物 v. 用墙围住，围以墙 adj. 墙壁的
duck	n. 鸭子；鸭肉；（英）宝贝儿；零分 v. 闪避；没入水中
download	v. [计] 下载
pine	v. 渴望，痛苦；憔悴 n. [林] 松树；凤梨，菠萝 adj. 松木的；似松的
agree	v. 同意，赞成；承认；约定，商定
remember	v. 记得；牢记；纪念；代…问好
large	adj. 大的；多数的；广博的 adv. 大大地；夸大地 n. 大
curious	adj. 好奇的，有求知欲的；古怪的；爱挑剔的
day	n. 一天；时期；白昼 adv. 每天；经常在白天地 adj. 日间的；逐日的
motorcycle	n. 摩托车；机动车 v. 骑摩托车
jeans	n. 牛仔裤；工装裤
busy	adj. 忙碌的；热闹的；正被占用的 v. 使忙于 n. (Busy)人名；(匈)布希；(法)比西
astonish	v. 使惊讶
cotton	n. 棉花；棉布；棉线 v. 一致；理解；和谐；亲近 adj. 棉的；棉制的
tax	v. 向…课税；使负重担 n. 税金；重负
juicy	adj. 多汁的；利润多的；生动的
apply	v. 申请；涂，敷；应用
aggressive	adj. 侵略性的；好斗的；有进取心的；有闯劲的
canal	n. 运河；[地理] 水道；[建] 管道；灌溉水渠 v. 在…开凿运河
achieve	v. 取得；获得；实现；成功
straight	adj. 直的；连续的；笔直的；正直的；整齐的；异性恋的 adv. 直接地；不断地；立即；坦率地 n. 直；直线；直男，直女，异性恋者
shoulder	n. 肩，肩膀；肩部 v. 肩负，承担
bitter	adj. 苦的；痛苦的；尖刻的；充满仇恨的 n. 苦味；苦啤酒 adv. 激烈地；严寒刺骨地 v. 使变苦
growth	n. 增长；发展；生长；种植
volunteer	n. 志愿者；志愿兵 adj. 志愿的 v. 自愿
lip	n. 嘴唇；边缘 vt. 以嘴唇碰 adj. 口头上的 vi. 用嘴唇
representative	adj. 典型的，有代表性的；代议制的 n. 代表；典型；众议员
same	adj. 相同的；同一的；上述的（通常与the连用）；无变化的 pron. 同样的事物或人（通常与the连用） adv. 同样地（通常与the连用） n. (Same)人名；(意)萨梅
southern	adj. 南的；南方的 n. 南方人
daylight	n. 白天；日光；黎明；公开
symphony	n. 交响乐；谐声，和声
watermelon	n. 西瓜
smoking	n. 抽烟；冒气 adv. 冒着烟 adj. 准许吸烟的 v. 吸烟；冒烟（smoke的现在分词）
clinic	n. 临床；诊所
model	n. 模型；典型；模范；模特儿；样式 v. 模拟；塑造；模仿 adj. 模范的；作模型用的
partly	adv. 部分地；在一定程度上
painter	n. 画家；油漆匠
purse	n. (女士)手提袋；(国家、家庭、团体等的) 财力 v. （嘴巴）皱起，使缩拢；撅嘴
characteristic	adj. 典型的；特有的；表示特性的 n. 特征；特性；特色
skin	n. 皮肤；外皮 v. 剥皮
train	n. 火车；行列；长队；裙裾 v. 培养；训练；瞄准
vivid	adj. 生动的；鲜明的；鲜艳的
operation	n. 操作；经营；[外科] 手术；[数][计] 运算
check	v. 检查，核对；制止，抑制；在…上打勾 n. <美>支票；制止，抑制；检验，核对
alcoholic	adj. 酒精的，含酒精的 n. 酒鬼，酗酒者
button	n. 按钮；纽扣 v. 扣住；扣紧；在…上装纽扣
salesgirl	n. 女售货员，女店员
roast	v. 烤，焙；烘，烘烤；暴露于某种热力下以得温暖 adj. 烘烤的；烤过的 n. 烤肉；烘烤
communist	n. 共产党员；共产主义者 adj. 共产主义的
give	v. 给；产生；让步；举办；授予 n. 弹性；弯曲；伸展性
scar	v. 伤害；给留下伤痕 n. 创伤；伤痕
found	v. 创立，建立；创办
handkerchief	n. 手帕；头巾，围巾
acquisition	n. 获得物，获得；收购
cloth	n. 布；织物；桌布 adj. 布制的
single	adj. 单一的；单身的；单程的 n. 一个；单打；单程票 v. 选出
latter	adj. 后者的；近来的；后面的；较后的 n. (Latter)人名；(英、德、捷)拉特
patient	adj. 有耐心的，能容忍的 n. 病人；患者
Mexico	n. 墨西哥
paperwork	n. 文书工作
appetite	n. 食欲；嗜好
dish	n. 盘；餐具；一盘食物；外貌有吸引力的人 v. 盛于碟盘中；分发；使某人的希望破灭；说（某人）的闲话
tap	v. 轻敲；轻打；装上嘴子 n. 水龙头；轻打
Buddhism	n. 佛教
come	v. 来；开始；出现；发生；变成；到达 int. 嗨！ n. (Come)人名；(英)科姆；(阿尔巴)乔梅
university	n. 大学；综合性大学；大学校舍
bed	n. 床；基础；河底， 海底 v. 使睡觉；安置，嵌入；栽种
Egypt	n. 埃及（非洲国家）
necklace	n. 项链
unemployment	n. 失业；失业率；失业人数
football	n. 足球，橄榄球 vi. 踢足球；打橄榄球
ahead	adj. 向前；在前的；领先 adv. 向前地；领先地；在（某人或某事物的）前面；预先；在将来，为未来
impression	n. 印象；效果，影响；压痕，印记；感想；曝光（衡量广告被显示的次数。打开一个带有该广告的网页，则该广告的impression 次数增加一次）
buy	v. 购买；获得；贿赂 n. 购买，买卖；所购的物品
spit	v. 吐痰；吐口水；发出劈啪声 n. 唾液
across	prep. 穿过；横穿 adv. 横过；在对面
no	adv. 不 adj. 没有；不是 n. 不；否决票 abbr. 数字（number）；元素锘（nobelium）的符号
announce	v. 宣布；述说；预示；播报
fare	v. 经营；进展；遭遇；过活 n. 票价；费用；旅客；食物
possible	adj. 可能的；合理的；合适的 n. 可能性；合适的人；可能的事物
bay	n. 海湾；狗吠声 v. 向…吠叫
quarter	n. 四分之一；地区；季度；一刻钟；两角五分；节 v. 住宿；驻扎 num. 四分之一
bang	n. 刘海；重击；突然巨响 adv. 直接地；砰然地；突然巨响地 v. 重击；发巨响
stubborn	adj. 顽固的；顽强的；难处理的
extremely	adv. 非常，极其；极端地
cost	v. 花费；使付出；使花许多钱 n. 费用，代价，成本；损失
cheese	n. [食品] 奶酪；干酪；要人 v. 停止 adj. 叛变的；胆小的
straightforward	adj. 简单的；坦率的；明确的；径直的 adv. 直截了当地；坦率地
traveler	n. 旅行者；旅客；旅行推销员（等于traveller）
international	n. 国际组织；国际体育比赛；外国居留者；国际股票 adj. 国际的；两国（或以上）国家的；超越国界的；国际关系的；世界的
acute	adj. 严重的，[医] 急性的；敏锐的；激烈的；尖声的
gentle	adj. 温和的；文雅的 v. 使温和，使驯服 n. 蛆，饵
imagine	v. 想像；猜想；臆断
raincoat	n. （美）雨衣
humorous	adj. 诙谐的，幽默的；滑稽的，可笑的
gruel	vt. 使极度疲劳；累垮 n. 稀粥
fine	adj. 好的；优良的；细小的，精美的；健康的；晴朗的 n. 罚款 v. 罚款；澄清 adv. 很好地；精巧地
quit	v. 离开；放弃；停止；使…解除 n. 离开；[计] 退出 adj. 摆脱了…的；已经了结的
ant	n. 蚂蚁
squeeze	v. 挤；紧握；勒索 n. 压榨；紧握；拥挤；佣金
elephant	n. 象；大号图画纸
pest	n. 害虫；有害之物；讨厌的人
separate	v. 使分离；使分开；使分居 adj. 单独的；分开的；不同的；各自的； n. 分开；抽印本
telegram	n. 电报 vt. 用电报发送 vi. 发电报
pronounce	v. 发音；宣判；断言
electronic	adj. 电子的 n. 电子电路；电子器件
jump	n. 跳跃；暴涨；惊跳 v. 跳跃；使跳跃；跳过；突升
lot	n. 份额；许多；命运；阄 adv. （与形容词和副词连用）很，非常；（与动词连用）非常 pron. 大量，许多 v. 分组，把…划分（常与out连用）；把（土地）划分成块
deliberately	adv. 故意地；谨慎地；慎重地
sculpture	n. 雕塑；雕刻；刻蚀 v. 雕塑；雕刻；刻蚀
steal	v. 剽窃；偷偷地做；偷窃 n. 偷窃；便宜货；偷垒；断球
miniskirt	n. 超短裙；迷你短裙
research	n. 研究；调查 v. 研究；调查
refrigerator	n. 冰箱，冷藏库
round	n. 圆；循环；一回合；圆形物 adj. 圆的；完全的；大概的；肥胖的 adv. 在周围；迂回地；朝反方向；挨个 v. 完成；围捕；绕行；弄圆 prep. 附近；绕过；大约；在…周围
casual	adj. 随便的；非正式的；临时的；偶然的 n. 便装；临时工人；待命士兵
cancel	v. 取消；删去 n. 取消，撤销
he	n. 男孩，男人；它（雄性动物） pron. 他
colleague	n. 同事，同僚
whether	conj. 是否；不论 pron. 两个中的哪一个
live	adj. 活的；生动的；实况转播的；精力充沛的 v. 经历；度过 n. (Live)人名；(法)利夫
beyond	prep. 超过；越过；那一边；在较远的一边 adv. 在远处；在更远处 n. 远处
ill	adj. 生病的；坏的；邪恶的；不吉利的 adv. 不利地；恶劣地；几乎不 n. 疾病；不幸
skate	v. 滑冰；滑过 n. 溜冰；冰鞋
herb	n. 香草，药草
recent	adj. 最近的；近代的
discuss	v. 讨论；论述，辩论
silent	adj. 沉默的；寂静的；无记载的 n. 无声电影
kind	n. 种类；性质 adj. 和蔼的；宽容的；令人感激的
badly	adv. 非常，很；严重地，厉害地；恶劣地
contradictory	adj. 矛盾的；反对的；反驳的；抗辩的 n. 对立物；矛盾因素
shower	n. 淋浴；（倾泻般出现的）一阵，一大批；阵雨 v. 大量地给予；把……弄湿
aspect	n. 方面；方向；形势；外貌
decade	n. 十年，十年期；十
distance	n. 距离；远方；疏远；间隔 v. 疏远；把…远远甩在后面
zipper	n. 拉链 v. 拉上拉链
permanent	adj. 永久的，永恒的；不变的 n. 烫发（等于permanent wave）
honour	n. 荣誉；尊敬；勋章 v. 尊敬；[金融] 承兑；承兑远期票据
political	adj. 政治的；党派的
organise	v. 组织起来；组织工会
driver	n. 驾驶员；驱动程序；起子；传动器
complete	adj. 完整的；完全的；彻底的 v. 完成
nowhere	adv. 无处；任何地方都不；毫无结果 n. 无处；任何地方；无名之地 adj. 不存在的；毫无结果的；不知名的
shop	n. 商店；店铺 v. 购物
gradually	adv. 逐步地；渐渐地
shaver	n. 理发师；电动剃刀
virus	n. [病毒] 病毒；恶毒；毒害
disk	n. [计] 磁盘，磁碟片；圆盘，盘状物；唱片
loaf	n. 条，一条面包；块；游荡 v. 游荡；游手好闲；虚度光阴
arrest	v. 逮捕；阻止；吸引 n. 逮捕；监禁
square	adj. 平方的；正方形的；直角的；正直的 v. 使成方形；与…一致 n. 平方；广场；正方形 adv. 成直角地
justice	n. 司法，法律制裁；正义；法官，审判员
Dr	abbr. 速度三角形定位法（dead reckoning）；数据记录器（Data Recorder）
world	n. 世界；领域；世俗；全人类；物质生活
if	conj. （表条件）如果；即使；是否；（表假设）假如 n. 条件；设想
dirt	n. 污垢，泥土；灰尘，尘土；下流话
procedure	n. 程序，手续；步骤
mix	v. 配制；混淆；使混和；使结交 n. 混合；混合物；混乱
strong	adj. 坚强的；强壮的；牢固的；擅长的 adv. 强劲地；猛烈地 n. (Strong)人名；(英)斯特朗
fact	n. 事实；实际；真相
kilo	n. 千克
scientific	adj. 科学的，系统的
feed	v. 喂养；供给；放牧；抚养（家庭等）；靠…为生 n. 饲料；饲养；（动物或婴儿的）一餐
category	n. 种类，分类；[数] 范畴
dead	adj. 无生命的；呆板的；废弃了的 adv. 完全地 n. 死者
against	prep. 反对，违反；靠；倚；防备 adj. 不利的；对立的
corrupt	adj. 腐败的，贪污的；堕落的 v. 使腐烂；使堕落，使恶化
laugh	n. 笑；引人发笑的事或人 v. 笑
airspace	n. 空域；领空；空间
vanilla	n. 香子兰，香草 adj. 香草味的
hammer	v. 锤击；敲打；重复 n. 铁锤；链球；[解剖] 锤骨；音锤
perfume	n. 香水；香味 v. 洒香水于…；使…带香味
whose	pron. 谁的（疑问代词）
necktie	n. 领带
bury	v. 埋葬；隐藏 n. (Bury)人名；(法)比里；(英、西)伯里；(德、意、罗、波、捷、匈)布里；(俄)布雷
cabbage	n. 卷心菜，甘蓝菜，洋白菜；（俚)脑袋；（非正式、侮辱）植物人（常用于英式英语）；（俚）钱，尤指纸币（常用于美式俚语）
shortcoming	n. 缺点；短处
salt	n. 盐；风趣，刺激性 adj. 咸水的；含盐的，咸味的；盐腌的；猥亵的 v. 用盐腌；给…加盐；将盐撒在道路上使冰或雪融化
seventy	n. 七十；七十个；七十岁；七十年代 adj. 七十的；七十个的；七十岁的 num. 七十
length	n. 长度，长；时间的长短；（语）音长
worst	adj. 最差的，最坏的；最不利的；效能最低的 n. 最坏；最坏的时候 adv. 最坏地；最不利地
audience	n. 观众；听众；读者；接见；正式会见；拜会
measure	n. 测量；措施；程度；尺寸 v. 测量；估量；权衡
outline	n. 轮廓；大纲；概要；略图 v. 概述；略述；描画…轮廓
bathroom	n. 浴室；厕所；盥洗室
height	n. 高地；高度；身高；顶点
prairie	n. 大草原；牧场
balance	n. 平衡；余额；匀称 v. 使平衡；结算；使相称
blind	adj. 盲目的；瞎的 adv. 盲目地；看不见地 n. 掩饰，借口；百叶窗 v. 使失明；使失去理智
portable	adj. 手提的，便携式的；轻便的 n. 手提式打字机
row	n. 行，排；划船；街道；吵闹 v. 划船；使……成排
truly	adv. 真实地，不假；真诚地 n. (Truly)人名；(英)特鲁利
downward	adj. 向下的，下降的 adv. 向下
accent	n. 口音；重音；强调；特点；重音符号 v. 强调；重读；带…口音讲话
basket	n. 篮子；（篮球比赛的）得分；一篮之量；篮筐 vt. 装入篮
shave	v. 剃须，剃毛 n. 刮脸，剃胡子；修面；<口>侥幸逃过，幸免；剃刀，刮刀
outer	adj. 外面的，外部的；远离中心的 n. 环外命中
note	n. 笔记；音符；票据；注解；纸币；便笺；照会；调子 v. 注意；记录；注解
Ottawa	n. 渥太华（加拿大首都）
smoker	n. 吸烟者；薰制工
drag	v. 拖累；拖拉；缓慢而吃力地行进 n. 拖；拖累
unite	v. 使…混合；使…联合；使…团结
Spain	n. 西班牙
postcode	n. （英）邮政编码；邮区号
confident	adj. 自信的；确信的
website	n. 网站（全球资讯网的主机站）
swell	v. 膨胀；肿胀；隆起 n. 肿胀；隆起 adj. 漂亮的；一流的
medicine	n. 药；医学；内科；巫术 v. 用药物治疗；给…用药
set	n. [数] 集合；一套；布景；[机] 装置 v. 树立；点燃；点缀； adj. 固定的；规定的；固执的
comb	n. 梳子；蜂巢；鸡冠 v. 梳头发；梳毛
sale	n. 销售；出售；拍卖；销售额；廉价出售
immigration	n. 外来移民；移居
process	v. 处理；加工 n. 过程，进行；方法，步骤；作用；程序；推移 adj. 经过特殊加工（或处理）的
east	n. 东方；东风；东方国家 adj. 东方的；向东的；从东方来的 adv. 向东方，在东方
hurry	n. 匆忙，急忙 v. 仓促（做某事）；催促；（朝某方向）迅速移动；迅速处理
how	adv. 如何；多少；多么 n. 方法；方式 conj. 如何
beast	n. 野兽；畜生，人面兽心的人
practice	n. 实践；练习；惯例 v. 练习；实习；实行
reliable	adj. 可靠的；可信赖的 n. 可靠的人
evening	n. 晚上；傍晚；（联欢性的）晚会；后期 adj. 在晚上的；为晚上的；晚上用的 int. 晚上好（等于good evening）
allocate	v. 分配；拨出；使坐落于
development	n. 发展；开发；发育；住宅小区（专指由同一开发商开发的）；[摄] 显影
paragraph	n. 段落；短评；段落符号 v. 将…分段
terminal	n. 末端；终点；终端机；极限 adj. 末端的；终点的；晚期的
correspond	v. 符合，一致；相应；通信
war	n. 战争，斗争；军事，战术；冲突，对抗，竞争 v. 打仗，作战；对抗
sleepy	adj. 欲睡的；困乏的；不活跃的
surprise	n. 惊奇，诧异；突然袭击 v. 使惊奇；奇袭 adj. 令人惊讶的
snowman	n. 雪人
search	v. 搜寻；调查；探求 n. 搜寻；探究，查究
toothache	n. [口腔] 牙痛
wash	n. 洗涤；洗的衣服；化妆水；冲积物 v. 洗涤；洗刷；冲走；拍打
classroom	n. 教室
nephew	n. 侄子；外甥
cap	n. 盖；帽子 v. 脱帽致意
aggression	n. 侵略；进攻；侵犯；侵害
TV	abbr. 电视（television）
notebook	n. 笔记本，笔记簿；手册
bonus	n. 奖金；红利；额外津贴
drop	v. 滴；使降低；使终止；随口漏出 n. 滴；落下；空投；微量；滴剂
circus	n. 马戏；马戏团
amount	v. 总计，合计；相当于；共计；产生…结果 n. 数量；总额，总数
bounce	n. 跳；弹力；活力 v. 弹跳；使弹起
married	adj. 已婚的，有配偶的；婚姻的，夫妇的；密切结合的 n. 已婚者 v. 结婚，与…结婚（marry的过去式）
none	pron. 没有人；一个也没有；没有任何东西 adj. 没有的，一点没有的 adv. 决不，一点也不 n. (None)人名；(葡、罗)诺内；(日)野根(姓)
arrive	v. 到达；成功；达成；出生 n. (Arrive)人名；(法)阿里夫
steady	adj. 稳定的；不变的；沉着的 v. 稳固 adv. 稳定地；稳固地 n. 关系固定的情侣；固定支架
museum	n. 博物馆
enjoyable	adj. 快乐的；有乐趣的；令人愉快的
headache	n. 头痛；麻烦；令人头痛之事
hopeful	adj. 有希望的；有前途的 n. 有希望成功的人
event	n. 事件，大事；项目；结果
ache	v. 疼痛；渴望 n. 疼痛
heavily	adv. 沉重地；猛烈地；沉闷地
warning	n. 警告；预兆；预告 adj. 警告的；引以为戒的 v. 警告（warn的ing形式）
form	n. 形式，形状；形态，外形；方式；表格 v. 构成，组成；排列，组织；产生，塑造
outspoken	adj. 坦率的，直言不讳的
hungry	adj. 饥饿的；渴望的；荒年的；不毛的
ton	n. 吨；很多，大量
afraid	adj. 害怕的；恐怕；担心的
salty	adj. 咸的；含盐的
need	n. 需要，要求；缺乏；必要之物 v. 需要
rugby	n. 英式橄榄球；拉格比（英格兰中部的城市）
lamb	n. 羔羊，小羊；羔羊肉 v. 生小羊，产羔羊
cream	n. 奶油，乳脂；精华；面霜；乳酪
fond	adj. 喜欢的；温柔的；宠爱的 n. (Fond)人名；(法)丰；(瑞典)丰德
recite	v. 背诵；叙述；列举
disobey	v. 违反；不服从
leader	n. 领导者；首领；指挥者
fun	n. 乐趣；玩笑；有趣的人或事 adj. 供娱乐用的 vi. 开玩笑
vain	adj. 徒劳的；自负的；无结果的；无用的
service	n. 服务，服侍；服役；仪式 adj. 服务性的；耐用的；服现役的 v. 维修，检修；保养
stainless	adj. 不锈的；纯洁的，未被玷污的；无瑕疵的
agent	n. 代理人，代理商；药剂；特工 vt. 由…作中介；由…代理 adj. 代理的
maid	n. 女仆；少女 vt. 侍候；做新娘的女傧相 vi. 当女仆
camera	n. 照相机；摄影机
too	adv. 太；也；很；还；非常；过度
nine	n. 九，九个 num. 九；九个 adj. 九的，九个的
perform	v. 执行；完成；演奏
doubt	n. 怀疑；疑问；疑惑 v. 怀疑；不信；恐怕；拿不准
digest	v. 消化；吸收；融会贯通 n. 文摘；摘要
while	conj. 虽然；然而；当……的时候 n. 一会儿；一段时间 v. 消磨；轻松地度过
pretty	adj. 漂亮的；可爱的；优美的 adv. 相当地；颇 n. 有吸引力的事物（尤指饰品）；漂亮的人
studio	n. 工作室；[广播][电视] 演播室；画室；电影制片厂
Moscow	n. 莫斯科（俄罗斯首都）
disturbing	adj. 令人不安的；烦扰的 v. 干扰；打断（disturb的ing形式）
schoolmate	n. 同学；同窗
adult	adj. 成年的；成熟的 n. 成年人
miss	n. 女士，小姐，年轻未婚女子
hobby	n. 嗜好；业余爱好
disagree	v. 不同意；不一致；争执；不适宜
bound	adj. 有义务的；必定的；受约束的；装有封面的 v. 束缚；使跳跃 n. 范围；跳跃
approve	v. 批准；赞成；为…提供证据
convenience	n. 便利；厕所；便利的事物
who	pron. 谁；什么人
arm	n. 手臂；武器；袖子；装备；部门 v. 武装起来
goods	n. 商品；动产；合意的人；真本领
butterfly	n. 蝴蝶；蝶泳；举止轻浮的人；追求享乐的人
risk	n. 风险；危险；冒险 v. 冒…的危险
African	adj. 非洲的，非洲人的 n. 非洲人
twentieth	n. 二十分之一 adj. 第二十的；二十分之一的 num. 第二十
America	n. 美洲（包括北美和南美洲）；美国
bottle	n. 瓶子；一瓶的容量 v. 控制；把…装入瓶中
literary	adj. 文学的；书面的；精通文学的
bicycle	n. 自行车 v. 骑脚踏车
wallet	n. 钱包，皮夹
superb	adj. 极好的；华丽的；宏伟的 n. (Superb)人名；(罗)苏佩尔布
pool	n. 联营；撞球；水塘；共同资金 v. 联营，合伙经营
fragrant	adj. 芳香的；愉快的
mercy	n. 仁慈，宽容；怜悯；幸运；善行
preview	n. 预览；试映；事先查看 v. 预览；预演；事先查看
hatch	n. 孵化；舱口 v. 孵；策划
school	n. 学校；学院；学派；鱼群 v. 教育
promote	v. 促进；提升；推销；发扬
crew	n. 队，组；全体人员，全体船员 v. 一起工作
preparation	n. 预备；准备
tomorrow	n. 明天；未来 adv. 明天；未来地（等于to-morrow）
taste	n. 味道；品味；审美 v. 尝；体验
abortion	n. 流产，堕胎，小产；流产的胎儿；（计划等）失败，夭折
sparrow	n. 麻雀；矮小的人
bond	n. 债券；结合；约定；粘合剂；纽带 v. 结合，团结在一起
face	n. 脸；表面；面子；面容；外观；威信 v. 向；朝
wound	n. 创伤，伤口 v. 使受伤
mustard	n. 芥末；芥菜；深黄色；强烈的兴趣
ruler	n. 尺；统治者；[测] 划线板，划线的人
umbrella	n. 雨伞；保护伞；庇护；伞形结构
pub	n. 酒馆；客栈
playground	n. 运动场，操场；游乐场
arbitrary	adj. [数] 任意的；武断的；专制的
turning	n. 转向；旋转；回转；转弯处 v. 旋转（turn的ing形式）
account	n. 账户；解释；账目，账单；理由；描述 v. 解释；导致；报账
quite	adv. 很；相当；完全
wake	v. 醒来；唤醒；警觉 n. 尾迹；守夜；守丧
workmate	n. 同事；工友
album	n. 相簿；唱片集；集邮簿；签名纪念册
dangerous	adj. 危险的
replace	v. 取代，代替；替换，更换；归还，偿还；把…放回原处
eyesight	n. 视力；目力
tremble	v. 发抖；战栗；焦虑；摇晃 n. 颤抖；战栗；摇晃
cage	n. 笼，兽笼；牢房，监狱 v. 把…关进笼子；把…囚禁起来
either	adj. 两者之中任一的；两者之中每一的 prep. 任何一个 conj. 也（用于否定句或否定词组后）；根本 pron. 任一，两方，随便哪一个；两者中的一个或另一个
lucky	adj. 幸运的；侥幸的
order	n. 命令；顺序；规则；[贸易] 定单 v. 命令；整理；定购
south	n. 南方，南边；南部 adv. 在南方，向南方 adj. 南的，南方的
mobile	adj. 可移动的；机动的；易变的；非固定的 n. 运动物体
door	n. 门；家，户；门口；通道
list	n. [计] 列表；清单；目录 v. 列于表上
videophone	n. 电视电话
empty	adj. 空的；无意义的；无知的；徒劳的 v. 使失去；使…成为空的 n. 空车；空的东西
armchair	n. 扶手椅，单人沙发 adj. 不切实际的
self	n. 自己，自我；本质；私心 adj. 同一的 vt. 使自花授精；使近亲繁殖 vi. 自花授精
nature	n. 自然；性质；本性；种类
transparent	adj. 透明的；显然的；坦率的；易懂的
submit	v. 使服从；主张；呈递
agriculture	n. 农业；农耕；农业生产；农艺，农学
exactly	adv. 恰好地；正是；精确地；正确地
undo	v. 取消；解开；破坏；扰乱
cheerful	adj. 快乐的；愉快的；高兴的
remind	v. 提醒；使想起
disaster	n. 灾难，灾祸；不幸
daily	adj. 日常的；每日的 n. 日报；朝来夜去的女佣 adv. 日常地；每日；天天
cheers	v. 感谢；谢谢；再见
season	n. 时期；季节；赛季 v. 给…调味；使适应
dislike	v. 不喜欢，厌恶 n. 嫌恶，反感，不喜爱
software	n. 软件
steel	n. 钢铁；钢制品；坚固 v. 钢化；使冷酷 adj. 钢制的；钢铁业的；坚强的
industry	n. 产业；工业；勤勉
there	adv. 在那里；在那边；在那点上 int. 你瞧 n. 那个地方
botany	n. 植物学；地区植物总称
unfortunately	adv. 不幸地
gain	n. 增加；利润；收获 v. 获得；增加；赚到
together	adv. 一起；同时；相互；连续地；总共 adj. 新潮的；情绪稳定的，做事有效率的
visit	n. 访问；参观；逗留 v. 访问；参观；视察
gather	v. 收集；收割；使…聚集；使…皱起 n. 聚集；衣褶；收获量
over	adv. 结束；越过；从头到尾 prep. 越过；在…之上；遍于…之上 adj. 结束的；上面的 vt. 越过 n. (Over)人名；(俄、西、土)奥韦尔
madam	n. 夫人；女士；鸨母
recreation	n. 娱乐；消遣；休养
dive	v. 潜水；跳水；俯冲；急剧下降 n. 潜水；跳水；俯冲；扑
wing	n. 翼；翅膀；飞翔；派别；侧厅，耳房，厢房 v. 使飞；飞过；空运；增加…速度；装以翼
lemon	adj. 柠檬色的 n. 柠檬
record	v. 记录，记载；标明；将录音 n. 档案，履历；唱片；最高纪录 adj. 创纪录的
beach	n. 海滩；湖滨 v. 将…拖上岸
chairwoman	n. 女主席；女议长
basement	n. 地下室；地窖
schedule	v. 安排，计划；编制目录；将……列入计划表 n. 时间表；计划表；一览表
wood	n. 木材；木制品；树林 vi. 收集木材 vt. 植林于；给…添加木柴
deaf	adj. 聋的
architect	n. 建筑师
walnut	n. 胡桃；胡桃木 adj. 胡桃科植物的
Irish	adj. 爱尔兰的；爱尔兰人的 n. 爱尔兰人；爱尔兰语；爱尔兰
manner	n. 方式；习惯；种类；规矩；风俗
twin	v. 使成对 n. 双胞胎中一人 adj. 双胞胎的
powerful	adj. 强大的；强有力的 adv. 很；非常
frequent	adj. 频繁的；时常发生的；惯常的 v. 常到，常去；时常出入于
dam	v. 控制；筑坝 n. [水利] 水坝；障碍
free	adj. 免费的；自由的，不受约束的；[化学] 游离的 v. 使自由，解放；释放 adv. 自由地；免费 n. (Free)人名；(英)弗里
ninety	n. 九十 adj. 九十的；九十岁的 num. 九十
fright	n. 惊吓；惊骇 v. 使惊恐
snake	n. 蛇；阴险的人 v. 迂回前进
version	n. 版本；译文；倒转术
disabled	adj. 残废的，有缺陷的 v. 使…失去能力（disable的过去分词）
march	v. （坚定地向某地）前进；行军，进军；游行示威；进展，进行 n. 行进，前进；行军；游行示威；进行曲
truth	n. 真理；事实；诚实；实质
heel	n. 脚后跟；踵 v. 倾侧
furnished	adj. 家具，有家具的 v. 供应；装备（furnish的过去分词）
nest	n. 巢，窝；安乐窝；温床 v. 筑巢；嵌套
conclude	v. 推断；决定，作结论；结束
basin	n. 水池；流域；盆地；盆
pear	n. [园艺] 梨树；梨子
awkward	adj. 尴尬的；笨拙的；棘手的；不合适的
stopwatch	n. 码表；跑表 vt. 用秒表测定时间
shame	n. 羞耻，羞愧；憾事，带来耻辱的人 v. 使丢脸，使羞愧
quiz	n. 考查；恶作剧；课堂测验 v. 挖苦；张望；对…进行测验
forty	n. 四十 adj. 四十的；四十个的
clumsy	adj. 笨拙的
ground	n. 地面；土地；范围；战场;根据 v. 使接触地面；打基础；使搁浅 adj. 土地的；地面上的；磨碎的；磨过的
show	v. 显示；说明；演出；展出 n. 显示；表演；炫耀
rebuild	v. 重建；改造，重新组装；复原
politician	n. 政治家，政客
north	n. 北，北方 adj. 北方的；朝北的 adv. 在北方，向北方
rat	n. 鼠；卑鄙小人，叛徒 v. 捕鼠；背叛，告密
nor	conj. 也不；也不是 adv. 也不；也没有 n. (Nor)人名；(中)挪(广东话·威妥玛)；(马来、俄)诺尔；(柬)诺
captain	n. 队长，首领；船长；上尉；海军上校 v. 指挥；率领
cautious	adj. 谨慎的；十分小心的
guest	n. 客人，宾客；顾客 v. 款待，招待 adj. 客人的；特邀的，客座的
hair	n. 头发；毛发；些微 vt. 除去…的毛发 vi. 生长毛发；形成毛状纤维 adj. 毛发的；护理毛发的；用毛发制成的
dozen	n. 十二个，一打 adj. 一打的
certificate	v. 发给证明书；以证书形式授权给…；用证书批准 n. 证书；执照，文凭
love	n. 恋爱；亲爱的；酷爱；喜爱的事物；爱情，爱意；疼爱；热爱；爱人，所爱之物 v. 爱，热爱；爱戴；赞美，称赞；喜爱；喜好；喜欢；爱慕
container	n. 集装箱；容器
flour	n. 面粉；粉状物质 v. 撒粉于；把…磨成粉
total	adj. 全部的；完全的；整个的 v. 总数达 n. 总数，合计
purple	adj. 紫色的；帝王的；华而不实的 n. 紫色；紫袍 v. 变成紫色
withdraw	v. 撤退；收回；撤消；拉开
insist	v. 坚持，强调
joke	n. 玩笑，笑话；笑柄 v. 开…的玩笑
autonomous	adj. 自治的；自主的；自发的
all	adj. 全部的 adv. 全然地；越发 n. 全部 pron. 全部
score	n. 分数；二十；配乐；刻痕 v. 获得；评价；划线，刻划；把…记下
protect	v. 保护，防卫；警戒
handwriting	n. 笔迹；书法；书写；手稿 v. 亲手写（handwrite的ing形式）
sing	v. 唱歌；歌颂；鸣叫；呼号 n. 演唱；鸣声；呼啸声
deliver	v. 交付；发表；递送；释放；给予（打击）；给…接生 n. 投球
meaning	n. 意义；含义；意图 adj. 意味深长的 v. 意味；意思是（mean的ing形式）
balcony	n. 阳台；包厢；戏院楼厅
hibernation	n. 冬眠；过冬；避寒
vase	n. 瓶；花瓶
resemble	v. 类似，像
cab	n. 驾驶室；出租汽车；出租马车 v. 乘出租马车（或汽车）
decision	n. 决定，决心；决议
composition	n. 作文，作曲，作品；[材] 构成；合成物；成分
tent	n. 帐篷；住处；帷幕 v. 用帐篷遮盖；使在帐篷里住宿
rewind	n. 重绕；倒带器 v. 倒回；重绕
conductor	n. 导体；售票员；领导者；管理人
edition	n. 版本
female	adj. 女性的；雌性的；柔弱的，柔和的 n. 女人；[动] 雌性动物
determination	n. 决心；果断；测定
equal	adj. 平等的；相等的；胜任的 v. 等于；比得上 n. 对手；匹敌；同辈；相等的事物
little	adj. 小的；很少的；短暂的；小巧可爱的 adv. 完全不 n. 少许；没有多少；短时间
hibernate	v. 过冬；（动物）冬眠；（人等）避寒
pepper	n. 胡椒；辣椒；胡椒粉 v. 加胡椒粉于；使布满
glove	n. 手套 vt. 给…戴手套
diary	n. 日志，日记；日记簿
citizen	n. 公民；市民；老百姓
destroy	v. 破坏；消灭；毁坏
altogether	adv. 完全地；总共；总而言之 n. 整个；裸体
contribution	n. 贡献；捐献；投稿
decoration	n. 装饰，装潢；装饰品；奖章
view	n. 观察；视野；意见；风景 v. 观察；考虑；查看
darkness	n. 黑暗；模糊；无知；阴郁
bar	n. 条，棒；酒吧；障碍；法庭 v. 禁止；阻拦 prep. 除……外
dessert	n. 餐后甜点；甜点心
wag	v. 摇摆；摇动；饶舌 n. 摇摆；爱说笑打趣的人
vinegar	n. 醋
realize	v. 实现；认识到；了解；将某物卖得，把(证券等)变成现钱；变卖
exhibition	n. 展览，显示；展览会；展览品
broadcast	v. 播送，播放；（无线电或电视）广播；播撒（种子） n. 广播；播音；广播节目 adj. 广播的
parrot	n. 鹦鹉；学舌者，应声虫；机械模仿别人的人 v. 机械地模仿
debt	n. 债务；借款；罪过
birdcage	n. 鸟笼；鸟笼状物；信号灯；宿舍
scare	v. 惊吓；把…吓跑 n. 恐慌；惊吓；惊恐 adj. （美）骇人的
where	adv. 在哪里 pron. 哪里 conj. 在…的地方 n. 地点
ambulance	n. [车辆][医] 救护车；战时流动医院
easy	adj. 容易的；舒适的 adv. 不费力地，从容地 vi. 停止划桨 vt. 发出停划命令
housework	n. 家务事
concrete	adj. 混凝土的；实在的，具体的；有形的 v. 凝结 n. 具体物；凝结物
sound	v. 听（诊）；测量，测…深；使发声；试探；宣告 n. 声音，语音；噪音；海峡；吵闹；听力范围；[医] 探条 adj. 健全的，健康的；合理的；可靠的；有效彻底的 adv. 彻底地，充分地
scientist	n. 科学家
construct	v. 建造，构造；创立 n. 构想，概念
get	v. 使得；获得；受到；变成 n. 生殖；幼兽
tall	adj. 高的；长的；过分的；夸大的 adv. 夸大地 n. (Tall)人名；(马里、阿拉伯)塔勒；(芬、罗、瑞典)塔尔；(英)托尔；(土)塔勒
diploma	n. 毕业证书，学位证书；公文，文书；奖状 vt. 发给…毕业文凭
beside	prep. 在旁边；与…相比；和…无关
photographer	n. 摄影师；照相师
anchor	n. 锚；抛锚停泊；靠山；新闻节目主播 v. 抛锚；使固定；主持节目 adj. 末棒的；最后一棒的
a	n. 字母A；第一流的；学业成绩达最高标准的评价符号 abbr. [物]安（ampere）
social	adj. 社会的，社交的；群居的 n. 联谊会；联欢会
easily	adv. 容易地；无疑地
chess	n. 国际象棋，西洋棋
strange	adj. 奇怪的；陌生的；外行的 adv. 奇怪地；陌生地，冷淡地 n. (Strange)人名；(英)斯特兰奇；(瑞典、塞)斯特朗格
sick	adj. 厌恶的；病态的；不舒服；渴望的；恶心的 ；生病的 n. 病人 v. 使狗去咬；呕吐；追击
Russian	adj. 俄国的；俄语的 n. 俄语；俄国人
inland	n. 内地；内陆 adj. 内陆的；内地的；国内的 adv. 在内地；向内地；向内陆；在内陆
academy	n. 学院；研究院；学会；专科院校
invent	v. 发明；创造；虚构
wealth	n. 财富；大量；富有
chick	n. 小鸡；小鸟；少妇 adj. 胆小的；懦弱的
companion	n. 同伴；朋友；指南；手册 v. 陪伴
mouth	n. 口，嘴；河口 v. 做作地说，装腔作势地说；喃喃地说出
find	v. 查找，找到；发现；认为；感到；获得 n. 发现
town	n. 城镇，市镇；市内商业区
trousers	n. 裤子，长裤
performer	n. 演出者；执行者；演奏者
petrol	n. （英）汽油
solid	adj. 固体的；可靠的；立体的；结实的；一致的 n. 固体；立方体
uncomfortable	adj. 不舒服的；不安的
expense	n. 损失，代价；消费；开支 vt. 向…收取费用 vi. 被花掉
bowling	n. 滚木球戏；保龄球戏 v. 打保龄球（bowl的现在分词）
metre	n. 米；公尺；韵律
passage	n. 一段（文章）；走廊；通路
nearly	adv. 差不多，几乎；密切地
institute	v. 开始（调查）；制定；创立；提起（诉讼） n. 学会，协会；学院
draw	v. 画；拉；吸引 n. 平局；抽签
as	conj. 因为；随着；虽然；依照；当…时 prep. 如同；当作；以…的身份 adv. 同样地；和…一样的
meal	n. 一餐，一顿饭；膳食 vi. 进餐
sneeze	v. 打喷嚏 n. 喷嚏
bit	n. [计] 比特（二进位制信息单位）；少量；马嚼子；辅币；老一套；一点，一块 vt. 控制 adj. 很小的；微不足道的 adv. 有点儿；相当
but	conj. 但是；而是；然而 adv. 仅仅，只 prep. 除…以外 n. (But)人名；(俄、罗)布特；(越)笔
monitor	n. 监视器；监听器；监控器；显示屏；班长 v. 监控
thrill	n. 激动；震颤；紧张 v. 使…颤动；使…紧张；使…感到兴奋或激动
advice	n. 建议；忠告；劝告；通知
whale	v. 猛揍；使惨败 n. 鲸；巨大的东西
vacant	adj. 空虚的；空的；空缺的；空闲的；茫然的 n. (Vacant)人名；(法)瓦康
underground	adv. 在地下；秘密地 adj. 地下的；秘密的；先锋派的 n. 地下；地铁；地道；地下组织；秘密活动；先锋派团体
rocket	v. 飞驰，飞快地移动；迅速增加 n. 火箭
trial	n. 试验；审讯；努力；磨炼 adj. 试验的；审讯的
Shanghai	n. 上海（中国东部港市）
root	n. 根；根源；词根；祖先 v. 生根；根除
nationwide	adj. 全国范围的；全国性的 adv. 在全国
hotel	n. 旅馆，饭店；客栈 vt. 使…在饭店下榻 vi. 进行旅馆式办公
specialist	n. 专家；专门医师 adj. 专家的；专业的
any	adj. 任何的；所有的；丝毫 pron. 任何；任何一个；若干 adv. 稍微；少许 n. (Any)人名；(法、罗)阿尼
thirty	n. 三十年代 num. 三十 adj. 三十个的
attractive	adj. 吸引人的；有魅力的；引人注目的
phenomenon	n. 现象；奇迹；杰出的人才
counter	n. 柜台；对立面；计数器；（某些棋盘游戏的）筹码 v. 反击，还击；反向移动，对着干；反驳，回答 adj. 相反的 adv. 反方向地；背道而驰地
scarf	n. 围巾；嵌接，嵌接处；头巾领巾 v. 披嵌接；用围巾围
tail	n. 尾巴；踪迹；辫子；燕尾服 v. 尾随；装上尾巴 adj. 从后面而来的；尾部的
swear	v. 发誓；咒骂 n. 宣誓；诅咒
high	adj. 高的；高级的；崇高的；高音调的 n. 高水平；天空；由麻醉品引起的快感；高压地带 adv. 高；奢侈地
adjustment	n. 调整，调节；调节器
rely	v. 依靠；信赖
deserve	v. 应受，应得
mine	n. 矿，矿藏；矿山，矿井；地雷，水雷 v. 开采，采掘；在…布雷 pron. 我的
AIDS	abbr. 获得性免疫缺乏综合征；爱滋病（Acquired Immune Deficiency Syndrome）
deal	v. 处理；给予；分配；发牌 n. 交易；（美）政策；待遇；份量
apron	n. 围裙；[航] 停机坪；舞台口 vt. 着围裙于；围绕
data	n. 数据（datum的复数）；资料
acquaintance	n. 熟人；相识；了解；知道
great	adj. 伟大的，重大的；极好的，好的；主要的 n. 大师；大人物；伟人们
bandage	n. 绷带 v. 用绷带包扎
oral	adj. 口头的，口述的 n. 口试
throw	v. 投；抛；掷 n. 投掷；冒险
loss	n. 减少；亏损；失败；遗失
regulation	n. 管理；规则；校准 adj. 规定的；平常的
boil	v. 煮沸，沸腾；激动，激昂 n. 沸腾，煮沸；疖子
Greece	n. 希腊（欧洲南部国家）
chart	n. 图表；海图；图纸；排行榜 v. 绘制…的图表；在海图上标出；详细计划；记录；记述；跟踪（进展或发展
shape	n. 形状；模型；身材；具体化 v. 形成；塑造，使成形；使符合
milk	n. 牛奶；乳状物 v. 榨取；挤…的奶
group	n. 组；团体 adj. 群的；团体的 v. 聚合
prevent	v. 预防，防止；阻止
associate	v. 交往；结交 n. 同事，伙伴；关联的事物 adj. 副的；联合的
plug	n. 插头；塞子；栓 v. 塞住；用插头将与电源接通
detective	adj. 侦探的 n. 侦探
alcohol	n. 酒精，乙醇
offshore	adj. 离岸的；[海洋] 近海的；吹向海面的 adv. 向海面，向海
cigar	n. 雪茄
jacket	n. 羽绒滑雪衫；西装短外套；短上衣，夹克；土豆皮；书籍的护封；文件套，公文夹 v. 给…穿夹克；给…装护套；给…包上护封；〈口〉打
red	n. 红色，红颜料；赤字 adj. 红色的；红肿的，充血的
Christian	n. 基督徒，信徒 adj. 基督教的；信基督教的
theoretical	adj. 理论的；理论上的；假设的；推理的
also	adv. 也；而且；同样 conj. 并且；另外 n. (Also)人名；(罗)阿尔索
necessary	adj. 必要的；必需的；必然的 n. 必需品
gold	n. 金，黄金；金色；金币 adj. 金的，金制的；金色的
sympathy	n. 同情；慰问；赞同
tomato	n. 番茄，西红柿
create	v. 创造，创作；造成
anyhow	adv. 总之；无论如何；不管怎样
declare	v. 宣布，声明；断言，宣称
recommend	v. 推荐，介绍；劝告；使受欢迎；托付
London	n. 伦敦
addicted	adj. 沉溺于某种（尤其是不良的）嗜好的；入了迷的，上了瘾的 v. 使…上瘾（addict的过去分词）
focus	n. 焦点；中心；清晰；焦距 v. 使集中；使聚焦
forget	v. 忘记；忽略 n. (Forget)人名；(法)福尔热
sailing	n. 航行，航海；启航；航海术 adj. 航行的 v. 航行，起航（sail的现在分词形式）
serious	adj. 严肃的，严重的；认真的；庄重的；危急的
dad	n. 爸爸；爹爹
scold	v. 责骂；叱责 n. 责骂；爱责骂的人
vacation	n. 假期；（房屋）搬出 v. 休假，度假
immediate	adj. 立即的；直接的；最接近的
timetable	n. 时间表；时刻表；课程表
recycle	v. 使再循环；使…重新利用 n. 再生；再循环；重复利用
fall	v. 落下；变成；来临；减弱 n. 下降；秋天；瀑布 adj. 秋天的
join	v. 参加；结合；连接 n. 结合；连接；接合点
pink	n. 粉红色；化身，典范；石竹花；头面人物 v. 扎，刺，戳；使…变粉红色；使…面红耳赤 adj. 粉红的；比较激进的；石竹科的；脸色发红的
joy	n. 欢乐，快乐；乐趣；高兴 v. 欣喜，欢喜
muddy	adj. 泥泞的；模糊的；混乱的 v. 使污浊；使沾上泥；把…弄糊涂
rest	v. 使休息，使轻松；把…寄托于 n. 休息，静止；休息时间；剩余部分；支架
exit	n. 出口，通道；退场 v. 退出；离去
headline	n. 大标题；内容提要；栏外标题；头版头条新闻 v. 给…加标题；使成为注意中心；大力宣传
flu	n. 流感
network	n. 网络；广播网；网状物
vehicle	n. [车辆] 车辆；工具；交通工具；运载工具；传播媒介；媒介物
task	v. 分派任务 n. 工作，作业；任务
unbearable	adj. 难以忍受的；承受不住的
rapid	adj. 迅速的，急促的；飞快的；险峻的 n. 急流；高速交通工具，高速交通网
concentrate	v. 集中；浓缩；全神贯注；聚集 n. 浓缩，精选；浓缩液
tiresome	adj. 烦人的，无聊的；令人讨厌的
market	n. 市场；行情；股票市场；市面；集市；销路；商店 v. 在市场上出售
burst	v. 爆发，突发；爆炸 n. 爆发，突发；爆炸
volcano	n. 火山
brush	n. 刷子；画笔；毛笔；争吵；与某人有效冲突；灌木丛地带；矮树丛；狐狸尾巴 v. 刷；画；
motherland	n. 祖国；母国
ear	n. 耳朵；穗；听觉；倾听 vi. （美俚）听见；抽穗
circuit	n. [电子] 电路，回路；巡回；一圈；环道 v. 环行
in	prep. 按照（表示方式）；从事于；在…之内 adv. 进入；当选；（服装等）时髦；在屋里 adj. 在里面的；时髦的 n. 执政者；门路；知情者
pin	n. 大头针，别针，针；栓；琐碎物 v. 钉住；压住；将……用针别住
belong	v. 属于，应归入；居住；适宜；应被放置
brotherhood	n. 兄弟关系；手足情谊；四海之内皆兄弟的信念
music	n. 音乐，乐曲
brother	n. 兄弟；同事；战友 int. 我的老兄！
pleasant	adj. 令人愉快的，舒适的；讨人喜欢的，和蔼可亲的 n. (Pleasant)人名；(英)普莱曾特
worried	adj. 担心的
chicken	n. 鸡肉；小鸡；胆小鬼，懦夫 adj. 鸡肉的；胆怯的；幼小的
argue	v. 争论，辩论；提出理由 n. (Argue)人名；(英、法)阿格
dress	v. 给…穿衣 n. 连衣裙；女装
convince	v. 说服；使确信，使信服
reporter	n. 记者
sky	n. 天空；顶点 v. 把…投向空中；把…挂得过高
voluntary	adj. 自愿的；志愿的；自发的；故意的 n. 志愿者；自愿行动
drug	n. 药；毒品；麻醉药；滞销货 v. 使服麻醉药；使服毒品；掺麻醉药于
enquiry	n. [计] 询问，[贸易] 询盘
dip	v. 浸，泡，蘸；舀取；把伸入 n. 下沉，下降；倾斜；浸渍，蘸湿
cuisine	n. 烹饪，烹调法
daughter	n. 女儿；[遗][农学] 子代 adj. 女儿的；子代的
product	n. 产品；结果；[数] 乘积；作品
mixture	n. 混合；混合物；混合剂
name	n. 名称，名字；姓名；名誉 v. 命名，任命；指定；称呼；提名；叫出 adj. 姓名的；据以取名的
litre	n. [计量] 公升（米制容量单位）
typhoon	n. [气象] 台风
helpful	adj. 有帮助的；有益的
predict	v. 预报，预言；预知
uncertain	adj. 无常的；含糊的；靠不住的；迟疑不决的
noodle	n. 面条；笨蛋
foolish	adj. 愚蠢的；傻的
turn	v. 转动，使旋转；转弯；翻过来；兑换 n. 转弯；变化；(损害或有益于别人的)行为，举动，举止
horrible	adj. 可怕的；极讨厌的
cell	n. 细胞；电池；蜂房的巢室；单人小室 vi. 住在牢房或小室中
dismiss	v. 解散；解雇；开除；让离开；不予理会、不予考虑
boring	adj. 无聊的；令人厌烦的 n. 钻孔 v. 钻孔；使厌烦；挖空（bore的ing形式）
obvious	adj. 明显的；显著的；平淡无奇的
rainy	adj. 下雨的；多雨的 n. (Rainy)人名；(英)雷尼
violence	n. 暴力；侵犯；激烈；歪曲
antique	adj. 古老的，年代久远的；过时的，古董的；古风的，古式的 n. 古董，古玩；古风，古希腊和古罗马艺术风格 v. 觅购古玩
experiment	v. 尝试；进行实验 n. 实验，试验；尝试
field	n. 领域；牧场；旷野；战场；运动场 v. 担任场外队员 adj. 扫描场；田赛的；野生的
handbag	n. 手提包
include	v. 包含，包括
ripe	adj. 熟的，成熟的；时机成熟的 vt. 搜查；调查 vi. 进行搜查 n. (Ripe)人名；(意、瑞典)里佩
peasant	n. 农民；乡下人
athletics	n. 竞技；体育运动；田径运动
discover	v. 发现；发觉
leak	n. 泄漏；漏洞，裂缝 v. 使渗漏，泄露
rainfall	n. 降雨；降雨量
tool	n. 工具，用具；器械，机床；手段 v. 使用工具；用机床装备工厂
bite	v. 咬；刺痛 n. 咬；一口；咬伤；刺痛 abbr. 机内测试设备（Built-In Test Equipment）
praise	n. 赞扬；称赞；荣耀；崇拜 v. 赞美，歌颂；表扬
activity	n. 活动；行动；活跃
carry	v. 拿，扛；携带；支持；搬运 n. 运载；[计] 进位；射程
take	v. 拿，取；采取；接受（礼物等）；买，花费；耗费（时间等） n. 捕获量；看法；利益，盈益；（入场券的）售得金额
dimension	n. 方面;[数] 维；尺寸；次元；容积 vt标出尺寸 adj. 规格的
format	n. 格式；版式；开本 v. 使格式化；规定…的格式
start	v. 开始；启动 n. 开始；起点
week	n. 周，星期
reject	v. 拒绝；排斥；抵制；丢弃 n. 被弃之物或人；次品
artificial	adj. 人造的；仿造的；虚伪的；非原产地的；武断的
welcome	adj. 受欢迎的 n. 欢迎 v. 欢迎 int. 欢迎
earth	n. 地球；地表，陆地；土地，土壤；尘事，俗事；兽穴 v. 把（电线）[电] 接地；盖（土）；追赶入洞穴
avenue	n. 大街；林荫大道；[比喻](达到某物的)途径，手段，方法，渠道
strawberry	n. 草莓；草莓色
translate	v. 翻译；转化；解释；转变为；调动
sea	n. 海；海洋；许多；大量
drill	n. 训练；钻孔机；钻子；播种机 v. 钻孔；训练
page	n. 页；记录；大事件，时期；男侍者 v. 给…标页码
stamp	n. 邮票；印记；标志；跺脚 v. 铭记；标出；盖章于…；贴邮票于…；用脚踩踏
along	adv. 一起；向前；来到 prep. 沿着；顺着
style	n. 风格；时尚；类型；字体 v. 设计；称呼；使合潮流
garden	n. 花园；菜园 v. 栽培花木
oppose	v. 反对；对抗，抗争
nationality	n. 国籍，国家；民族；部落
consultant	n. 顾问；咨询者；会诊医生
load	n. 负载，负荷；工作量；装载量 v. [力] 加载；装载；装货
behavious	n. 行为
nylon	n. 尼龙，[纺] 聚酰胺纤维；尼龙袜
statue	n. 雕像，塑像 vt. 以雕像装饰
witness	n. 证人；目击者；证据 v. 目击；证明；为…作证
difficult	adj. 困难的；不随和的；执拗的
moral	adj. 道德的；精神上的；品性端正的 n. 道德；寓意
evidence	n. 证据，证明；迹象；明显 v. 证明
pour	n. 倾泻；流出；骤雨 v. 灌，注；倒；倾泻；倾吐
map	v. 映射；计划；绘制地图；确定基因在染色体中的位置 n. 地图；示意图；染色体图
blouse	n. 宽松的上衣；女装衬衫 vt. 使…宽松下垂 vi. 宽松下垂
lab	n. 实验室，研究室
hall	n. 过道，门厅，走廊；会堂；食堂；学生宿舍；大厅，前厅；娱乐中心，会所
compromise	v. 妥协；危害 n. 妥协，和解；折衷
motivation	n. 动机；积极性；推动
unfit	adj. 不适宜的；不合格的；不健康的 v. 使不合格；使不相宜；使不胜任
lonely	adj. 寂寞的；偏僻的 n. 孤独者
gifted	adj. 有天赋的；有才华的 v. 给予（gift的过去分词）
considerate	adj. 体贴的；体谅的；考虑周到的
plot	n. 情节；图；阴谋 v. 密谋；绘图；划分；标绘
carrot	n. 胡萝卜
nothing	neg. 没什么；毫不 n. 无；零；不关紧要之事 adv. 毫不；决不 pron. 无事；无物 int. 什么也没有
brochure	n. 手册，小册子
weight	n. 重量，重力；负担；砝码；重要性 v. 加重量于，使变重
hope	n. 希望；期望；信心 v. 希望；期望
lorry	n. （英）卡车；[车辆] 货车；运料车
noisily	adv. 吵闹地，喧闹地
cloud	n. 云；阴云；云状物；一大群；黑斑 v. 使混乱；以云遮敝；使忧郁；玷污
topic	n. 主题（等于theme）；题目；一般规则；总论
hug	v. 拥抱；紧抱；抱有，坚持 n. 拥抱；紧抱；固执
size	n. 大小；尺寸 adj. 一定尺寸的 v. 依大小排列
ladder	n. 阶梯；途径；梯状物 v. 成名；发迹
folk	n. 民族；人们；亲属（复数） adj. 民间的
energetic	adj. 精力充沛的；积极的；有力的
mop	v. 擦干；用拖把拖洗 n. 拖把；蓬松的头发；鬼脸
assumption	n. 假定；设想；担任；采取
flesh	n. 肉；肉体 v. 喂肉给…；使发胖
marathon	n. 马拉松赛跑；耐力的考验 adj. 马拉松式的；有耐力的 vi. 参加马拉松赛跑
remove	v. 移动，迁移；开除；调动 n. 移动；距离；搬家
sun	n. 太阳 v. 使晒
expect	v. 期望；指望；认为；预料
ward	n. 病房；保卫；监视 v. 避开；保卫；守护
comfortable	adj. 舒适的，舒服的 n. 盖被
yesterday	n. 昨天；往昔 adv. 昨天
feeling	n. 感觉，触觉；感情，情绪；同情 adj. 有感觉的；有同情心的；富于感情的 v. 感觉；认为（feel的现在分词）；触摸
spaghetti	n. 意大利式细面条
his	pron. 他的 n. (His)人名；(法)伊斯
media	n. 媒体；媒质（medium的复数）；血管中层；浊塞音；中脉
director	n. 主任，主管；导演；人事助理
produce	v. 生产；引起；创作；生育，繁殖 n. 农产品，产品
waist	n. 腰，腰部
porter	n. 门房；服务员；行李搬运工；守门人
nut	n. 螺母，螺帽；坚果；难对付的人，难解的问题 v. 采坚果
westwards	adv. 向西 adj. 向西的
offence	n. 犯罪；违反；过错；攻击
vocabulary	n. 词汇；词表；词汇量
aim	v. 目的在于；引导；把…对准 n. 目的；目标；对准
receptionist	n. 接待员；传达员
greengrocer	n. 蔬菜水果商；菜贩
box	n. 箱，盒子；包厢；一拳 v. 拳击
jaw	n. 颌；下巴；狭窄入口；唠叨 v. 教训；唠叨
cinema	n. 电影；电影院；电影业，电影制作术
weed	v. 除草；铲除 n. 杂草，野草；菸草
merry	adj. 愉快的；微醉的；嬉戏作乐的 n. 甜樱桃
accident	n. 事故；意外；[法] 意外事件；机遇
suitable	adj. 适当的；相配的
pilot	n. 飞行员；领航员 adj. 试点的 v. 驾驶；领航；试用
friendship	n. 友谊；友爱；友善
floor	n. 地板，地面；楼层；基底；议员席 v. 铺地板；打倒，击倒；（被困难）难倒
magic	n. 巫术；魔法；戏法 adj. 不可思议的；有魔力的；魔术的
unfold	v. 打开；呈现
October	n. [天] 十月
musician	n. 音乐家
lounge	n. 休息室；闲逛；躺椅；（英）酒吧间 v. 闲逛；懒洋洋地躺卧；闲混
strait	adj. 狭窄的；苦恼的 n. 海峡；困境
suite	n. （一套）家具；套房；组曲；（一批）随员，随从
lively	adj. 活泼的；生动的；真实的；生气勃勃的 n. (Lively)人名；(英)莱夫利
cigarette	n. 香烟；纸烟
hometown	n. 家乡；故乡
shortly	adv. 立刻；简短地；唐突地
arrow	n. 箭，箭头；箭状物；箭头记号 vt. 以箭头指示；箭一般地飞向
May	n. 五月
attach	v. 使依附；贴上；系上；使依恋
fortnight	n. 两星期
expose	v. 揭露，揭发；使曝光；显示
pollute	v. 污染；玷污；败坏
thank	v. 感谢 n. 感谢 int. 谢谢
ski	n. 滑雪橇 v. 滑雪 adj. 滑雪（用）的
sunshine	n. 阳光；愉快；晴天；快活
project	v. 设计；计划；表达；投射 n. 工程；计划；事业
southwest	n. 西南方 adj. 西南的 adv. 往西南；来自西南
illegal	adj. [法] 非法的；违法的；违反规则的 n. 非法移民，非法劳工
statistics	n. 统计；统计学；[统计] 统计资料
level	n. 水平；标准；水平面 adj. 水平的；平坦的；同高的 v. 瞄准；拉平；变得平坦
cosy	adj. 舒适的；惬意的 n. 保温罩
tight	adj. 紧的；密封的；绷紧的；麻烦的；严厉的；没空的；吝啬的 adv. 紧紧地；彻底地 n. (Tight)人名；(英)泰特
shadow	n. 阴影；影子；幽灵；庇护；隐蔽处 v. 遮蔽；使朦胧；尾随；预示 adj. 影子内阁的
continent	n. 大陆，洲，陆地 adj. 自制的，克制的
bacterium	n. [微] 细菌；杆菌属
roundabout	adj. 迂回的，绕道的；圆滚滚的 n. 迂回路线；环状交叉路口
connection	n. 连接；关系；人脉；连接件
bottom	n. 底部；末端；臀部；尽头 adj. 底部的 v. 装底；测量深浅；查明真相
printer	n. [计] 打印机；印刷工；印花工
aboard	adv. 在飞机上；[船] 在船上；在火车上 prep. 在…上
writing	n. 书写；作品；著作；[法] 笔迹 v. 书写（write的ing形式）
bleed	v. 使出血；榨取
spy	v. 侦察；发现；暗中监视 n. 间谍；密探
soldier	n. 军人；[昆] 兵蚁；懒汉；一片烤面包 v. 当兵；磨洋工；坚持干；假称害病
temperature	n. 温度；体温；气温；发烧
both	adj. 两个的；两者的 adv. 并；又；两者皆 pron. 双方都；两者都 conj. 既…且… n. (Both)人名；(德、罗、捷、南非、匈)博特
fresh	adj. 新鲜的；清新的；淡水的；无经验的 n. 开始；新生；泛滥 adv. 刚刚，才；最新地
kingdom	n. 王国；界；领域
boating	n. 划船 adj. 划船的 v. 划船（boat的ing形式）
tendency	n. 倾向，趋势；癖好
concert	n. 音乐会；一致；和谐 v. 使协调；协同安排 adj. 音乐会用的；在音乐会上演出的
consume	v. 消耗，消费；使…著迷；挥霍
six	num. 六，六个 n. 六，六个
refresh	v. 更新；使……恢复；使……清新；消除……的疲劳
broad	adj. 宽的，辽阔的；显著的；大概的 n. 宽阔部分 adv. 宽阔地
camp	v. 露营；扎营 n. 露营
gale	n. [气象] 大风，狂风；（突发的）一阵
borrow	v. 借；借用；从其他语言中引入 n. (Borrow)人名；(英)博罗
demand	v. 要求；需要；查询 n. [经] 需求；要求；需要
knock	v. 敲；打；敲击 n. 敲；敲打；爆震声
sour	adj. 酸的；发酵的；刺耳的；酸臭的；讨厌的 v. 发酵；变酸；厌烦 n. 酸味；苦事
grandpa	n. 爷爷；外公
zip	n. 拉链；活力，精力；尖啸声，撕裂声；一种程序压缩的档案文件格式 v. 拉开或拉上；以尖啸声行进
rank	n. 排；等级；军衔；队列 adj. 讨厌的；恶臭的；繁茂的 v. 排列；把…分等
butcher	v. 屠杀 n. 屠夫
ready	adj. 准备好；现成的；迅速的；情愿的；快要…的 n. 现款；预备好的状态 adv. 迅速地；预先 v. 使准备好
pig	n. 猪；猪肉 v. 生小猪；像猪一样过活
trap	v. 诱捕；使…受限制；使…陷入困境 n. 陷阱；圈套；[建] 存水湾
cancer	n. 癌症；恶性肿瘤
vice	n. 恶习；缺点；[机] 老虎钳；卖淫 prep. 代替 vt. 钳住 adj. 副的；代替的
harm	n. 伤害；损害 v. 伤害；危害；损害
rare	adj. 稀有的；稀薄的；半熟的 adv. 非常；极其 vi. 用后腿站起；渴望
brewery	n. 啤酒厂
finish	v. 完成；结束；用完 n. 结束；完美；回味（葡萄酒）
cock	n. 公鸡；龙头；雄鸟；头目 v. 使竖起；使耸立；使朝上
fairly	adv. 相当地；公平地；简直 n. (Fairly)人名；(英)费尔利
grandparents	n. 祖父母（grandparent的复数）；外祖父母
instant	adj. 立即的；紧急的；紧迫的 n. 瞬间；立即；片刻
see	v. 看见；理解；领会 n. (See)人名；(英)西伊；(柬)塞；(德)泽
back	n. 后面；背部；靠背；足球等的后卫；书报等的末尾 v. 支持；后退；背书；下赌注 adv. 以前；向后地；来回地；上溯；回来；回原处 adj. 后面的；过去的；拖欠的
area	n. 区域，地区；面积；范围
sacrifice	n. 牺牲；祭品；供奉 v. 牺牲；献祭；亏本出售
Africa	n. 非洲
collision	n. 碰撞；冲突；（意见，看法）的抵触；（政党等的）倾轧
homeland	n. 祖国；故乡
technical	adj. 工艺的，科技的；技术上的；专门的
ink	v. 签署；涂墨水于 n. 墨水，墨汁；油墨
faith	n. 信仰；信念；信任；忠实
never	adv. 从未；决不
quarrel	v. 吵架；争论；挑剔 n. 吵架；反目；怨言；争吵的原因；方头凿
undivided	adj. 专心的；专一的；未分开的；完整的 v. 未分开（undivide的过去式和过去分词）
separation	n. 分离，分开；间隔，距离；[法] 分居；缺口
Indicate	v. 表明；指出；预示；象征
will	n. 意志；决心；情感；遗嘱；意图；心愿 v. 决心要；遗赠；用意志力使 aux. 将；愿意；必须
express	v. 表达；快递 adj. 明确的；迅速的；专门的 n. 快车，快递，专使；捷运公司
fast	adj. 快速的，迅速的；紧的，稳固的 adv. 迅速地；紧紧地；彻底地 v. 禁食，斋戒 n. 斋戒；绝食
open	adj. 公开的；敞开的；空旷的；坦率的；营业着的 v. 开始；展现 n. 公开；空旷；户外
pocket	n. 口袋；钱；容器 v. 隐藏；忍受；将…放入衣袋 adj. 小型的，袖珍的；金钱上的
soul	n. 灵魂；心灵；精神；鬼魂 adj. 美国黑人文化的
branch	v. 分支；出现分歧 n. 树枝，分枝；分部；支流
tip	v. 给小费；翻倒；倾覆 n. 小费；尖端；小建议，小窍门；轻拍
mutton	n. 羊肉
boom	v. 使兴旺；发隆隆声 n. 繁荣；吊杆；隆隆声
magazine	n. 杂志；弹药库；胶卷盒
hospital	n. 医院
sock	n. 短袜；一击 v. 重击；给……穿袜 adv. 正着地；不偏不倚地 adj. 非常成功的
physics	n. 物理学；物理现象
taxi	v. 乘出租车；滑行 n. 出租汽车
facial	adj. 面部的，表面的；脸的，面部用的 n. 美容，美颜；脸部按摩
famous	adj. 著名的；极好的，非常令人满意的
China	n. 中国 adj. 中国的；中国制造的
exam	n. 考试；测验
passenger	n. 旅客；乘客；过路人；碍手碍脚的人
seagull	n. 海鸥
when	conj. 考虑到；既然；当…时；在…时；如果 adv. 什么时候，何时；（用于时间的表达方式之后）在那时；其时；当时 pron. 那时；什么时侯 n. 时间，时候；日期；场合
trick	n. 诡计；恶作剧；窍门；花招；骗局；欺诈 v. 欺骗；哄骗；装饰；打扮 adj. 特技的；欺诈的；有决窍的
fix	v. 使固定；修理；安装；准备 n. 困境；方位；贿赂
onto	prep. 在…之上；对…了解；映射到…上 adj. 映射的；自身的；映成的
commit	v. 犯罪，做错事；把交托给；指派…作战；使…承担义务
oval	adj. 椭圆的；卵形的 n. 椭圆形；卵形
building	n. 建筑；建筑物 v. 建筑；建立；增加（build的ing形式）
evolution	n. 演变；进化论；进展
disgusting	adj. 令人厌恶的
unmarried	adj. [法] 未婚的；单身的；独身的 v. 离婚（unmarry的过去分词）
chair	n. 椅子；讲座；（会议的）主席位；大学教授的职位 v. 担任（会议的）主席；使…入座；使就任要职
reasonable	adj. 合理的，公道的；通情达理的
hide	v. 隐藏；隐瞒；鞭打 n. 躲藏；兽皮；躲藏处
bye	int. 再见 n. 轮空；次要的东西 adj. 次要的
sharpen	v. 削尖；磨快；使敏捷；加重
fantastic	adj. 奇异的；空想的；异想天开的；古怪的；极好的，极出色的；不可思议的；不切实际的 n. 古怪的人
eraser	n. 橡皮；擦除器；[计] 清除器
chemical	n. 化学制品，化学药品 adj. 化学的
ministry	n. （政府的）部门
sponsor	n. 赞助者；主办者；保证人 v. 赞助；发起
nose	n. 鼻子；嗅觉；突出的部分；探问 v. 嗅；用鼻子触
reserve	n. 储备，储存；自然保护区；预备队；缄默；[金融] 储备金 v. 储备；保留；预约
during	prep. 在…的时候，在…的期间 n. (During)人名；(法)迪兰；(瑞典、利比)杜林
corn	n. （美）玉米；（英）谷物；[皮肤] 鸡眼 v. 腌；使成颗粒
unfair	adj. 不公平的，不公正的
educate	v. 教育；培养；训练
arrange	v. 安排；排列；整理
rise	v. 上升；增强；起立；高耸 n. 上升；高地；增加；出现
month	n. 月，一个月的时间
competence	n. 能力，胜任；权限；作证能力；足以过舒适生活的收入
noon	n. 中午；正午；全盛期
glasshouse	n. 温室；暖房
water	n. 水；海水；雨水；海域，大片的水 v. 使湿；供以水；给…浇水
key	n. （打字机等的）键；关键；钥匙 v. 键入；锁上；调节…的音调；提供线索 adj. 关键的
lung	n. 肺；呼吸器
sixty	num. 六十；六十个
January	n. 一月
fried	adj. 油炸的，油煎的；喝醉了的 v. 油炸（fry的过去分词）
kilogram	n. 公斤；千克
smooth	adj. 顺利的；光滑的；平稳的 v. 使光滑；消除（障碍等）；使优雅；缓和 n. 平滑部分；一块平地 adv. 光滑地；平稳地；流畅地
reviewer	n. 评论者，评论家
inside	n. 里面；内部；内情；内脏 adj. 里面的；内部的；秘密的 adv. 在里面 prep. 少于；在…之内
second	n. 秒；第二名；瞬间；二等品 v. 支持 adj. 第二的；次要的；附加的 num. 第二 adv. 第二；其次；居第二位
master	v. 控制；精通；征服 n. 硕士；主人；大师；教师 adj. 主人的；主要的；熟练的
healthy	adj. 健康的，健全的；有益于健康的
file	n. 文件；档案；文件夹；锉刀 v. 提出；锉；琢磨；把…归档
seventh	n. 第七；七分之一 adj. 第七的；七分之一的 adv. 居第七位地
college	n. 大学；学院；学会
liberty	n. 自由；许可；冒失
blow	n. 吹；打击；殴打 v. 风吹；喘气
questionnaire	n. 问卷；调查表
Christmas	n. 圣诞节；圣诞节期间
father	n. 父亲，爸爸；神父；祖先；前辈 v. 发明，创立；当…的父亲
everyone	pron. 每个人；人人 n. 每个人
mild	adj. 温和的；轻微的；淡味的；文雅的；不含有害物质的的 n. （英国的一种）淡味麦芽啤酒
could	aux. 能够 v. 能（can的过去式）
automatic	adj. 自动的；无意识的；必然的 n. 自动机械；自动手枪
article	n. 文章；物品；条款；[语] 冠词 v. 订约将…收为学徒或见习生；使…受协议条款的约束
link	n. [计] 链环，环节；联系，关系 v. 连接，连结；联合，结合
CD	abbr. 光盘，激光唱片（Compact Disc）；呼叫设备（Calling Device）；中央地区（Central District）；商务部（Commerce Department）
about	prep. 关于；大约 adj. 在附近的；四处走动的；在起作用的 adv. 大约；周围；到处 n. 大致；粗枝大叶；不拘小节的人
local	n. [计] 局部；当地居民；本地新闻 adj. 当地的；局部的；地方性的；乡土的
hydrogen	n. [化学] 氢
backache	n. 背痛；腰痛
temptation	n. 引诱；诱惑物
crayon	n. 蜡笔，有色粉笔 v. 以蜡笔作画，用颜色粉笔画
fruit	n. 水果；产物 v. 结果实
learned	adj. 博学的；有学问的；学术上的 n. (Learned)人名；(英)勒尼德
rather	adv. 宁可，宁愿；相当 int. 当然啦（回答问题时用） n. (Rather)人名；(英)拉瑟
job	n. 工作；职业 v. 承包；代客买卖
mathematics	n. 数学；数学运算
occupation	n. 职业；占有；消遣；占有期
consequence	n. 结果；重要性；推论
increase	n. 增加，增长；提高 v. 增加，增大；繁殖
forest	v. 植树于，使成为森林 n. 森林
relative	adj. 相对的；有关系的；成比例的 n. 亲戚；相关物；[语] 关系词；亲缘植物
pupil	n. 学生；[解剖] 瞳孔；未成年人
visa	n. 签证 v. 签发签证
restriction	n. 限制；约束；束缚
fridge	n. 电冰箱
behind	prep. 落后于；支持；晚于 adv. 在后地；在原处 n. 屁股
swing	n. 摇摆；摆动；秋千；音律；涨落 v. 摇摆；转向；悬挂；大摇大摆地行走 adj. 旋转的；悬挂的；强节奏爵士音乐的
approach	n. 方法；途径；接近 v. 接近；着手处理
correct	v. 改正；告诫 adj. 正确的；恰当的；端正的
at	prep. 在（表示存在或出现的地点、场所、位置、空间）；以（某种价格、速度等）；向；达；因为；朝；忙于 n. 阿特（老挝货币基本单位att）；[化]砹（极不稳定放射性元素） abbr. 密封的（airtight）；气温（air temperature）
pill	n. 药丸；弹丸，子弹；口服避孕药 v. 把…制成丸剂；使服用药丸；抢劫，掠夺（古语）
underline	v. 强调；在…下面划线；预告 n. 下划线；下期节目预告
team	n. 队；组 v. 使合作
scholarship	n. 奖学金；学识，学问
committee	n. 委员会
stick	v. 刺，戳；伸出；粘贴 n. 棍；手杖；呆头呆脑的人
cowboy	n. 牛仔；牧童；莽撞的人
expectation	n. 期待；预期；指望
unconditional	adj. 无条件的；绝对的；无限制的
drier	n. 干燥机；干燥剂；吹风机
end	n. 结束；目标；尽头；末端；死亡 v. 结束，终止；终结
permission	n. 允许，许可
use	n. 使用；用途；发挥 v. 利用；耗费
hearing	n. 听力；审讯，听讯 v. 听见（hear的ing形式）
iron	n. 熨斗；烙铁；坚强 v. 熨；用铁铸成 adj. 铁的；残酷的；刚强的
reward	n. [劳经] 报酬；报答；酬谢 v. [劳经] 奖励；奖赏
signal	n. 信号；暗号；导火线 v. 标志；用信号通知；表示 adj. 显著的；作为信号的
oneself	pron. 自己；亲自
argument	n. 论证；论据；争吵；内容提要
character	n. 性格，品质；特性；角色；[计] 字符 v. 印，刻；使具有特征
northwards	adv. 向北
hat	n. 帽子 v. 给……戴上帽子
improve	v. 改善，增进；提高…的价值
fail	v. 失败，不及格；破产；缺乏；衰退 n. 不及格
scholar	n. 学者；奖学金获得者
require	v. 需要；要求；命令
mention	v. 提到，谈到；提及，论及；说起 n. 提及，说起
eight	num. 八；八个；第八 adj. 八的 n. 八字形
attention	n. 注意力；关心；立正！（口令）
decline	n. 下降；衰退；斜面 v. 下降；衰落；谢绝
skillfully	adv. 巧妙地；精巧地
cat	n. 猫，猫科动物
last	n. 末尾，最后；上个；鞋楦（做鞋的模型） adj. 最后的；最近的，最新的；仅剩的；最不可能…的 v. 持续；维持，够用；持久 adv. 最后地；上次，最近；最后一点
yourself	pron. 你自己
like	v. 喜欢；想；愿意 prep. 像；如同 adj. 同样的；相似的 n. 爱好；同样的人或物 adv. 可能 conj. 好像
west	n. 西；西方；西部 adj. 西方的；朝西的 adv. 在西方；向西方；自西方
surgeon	n. 外科医生
flow	v. 流动，涌流；川流不息；飘扬 n. 流动；流量；涨潮，泛滥
congratulate	v. 祝贺；恭喜；庆贺
whole	adj. 完整的；纯粹的 n. 整体；全部
Miss	n. 女士，小姐，年轻未婚女子
brief	adj. 简短的，简洁的；短暂的，草率的 n. 摘要，简报；概要，诉书 v. 简报，摘要；作…的提要
animal	n. 动物
question	n. 问题，疑问；询问；疑问句 v. 询问；怀疑；审问
inn	n. 客栈；旅馆 vi. 住旅馆
polish	n. 磨光，擦亮；擦亮剂；优雅，精良 v. 擦亮，变光滑 adj. 波兰的
principle	n. 原理，原则；主义，道义；本质，本义；根源，源泉
satisfaction	n. 满意，满足；赔偿；乐事；赎罪
clean	adj. 清洁的，干净的；清白的 v. 使干净 adv. 完全地 n. 打扫
reputation	n. 名声，名誉；声望
belly	n. 腹部；胃；食欲 v. 涨满；鼓起
suck	v. 吸吮；吸取 n. 吮吸
toilet	n. 厕所，盥洗室；梳妆，打扮 vi. 梳妆，打扮 vt. 给…梳妆打扮
bacon	n. 咸肉；腌肉；熏猪肉
poison	v. 污染；使中毒，放毒于；败坏；阻碍 n. 毒药，毒物；酒；有毒害的事物；[助剂] 抑制剂 adj. 有毒的
motorbike	n. 摩托车
sink	v. 下沉；消沉；渗透 n. 水槽；洗涤槽；污水坑
tongue	n. 舌头；语言 v. 舔；斥责；用舌吹
violin	n. 小提琴；小提琴手
delicate	adj. 微妙的；精美的，雅致的；柔和的；易碎的；纤弱的；清淡可口的
embassy	n. 大使馆；大使馆全体人员
error	n. 误差；错误；过失
disadvantage	n. 缺点；不利条件；损失
green	adj. 绿色的；青春的 n. 绿色；青春 v. 使…变绿色
seek	v. 寻求；寻找；探索；搜索
maybe	adv. 也许；可能；大概 n. 可能性；不确定性
graph	n. 图表；曲线图 v. 用曲线图表示
recipe	n. 食谱；[临床] 处方；秘诀；烹饪法
laser	n. 激光
entrance	n. 入口；进入 v. 使出神，使入迷
rent	n. 租金 v. 出租；租用；租借
match	v. 使比赛；使相配；敌得过，比得上；相配；与…竞争 n. 比赛，竞赛；匹配；对手；火柴
very	adj. 恰好是，正是；甚至；十足的；特有的 adv. 非常，很；完全 n. (Very)人名；(英)维里
raw	adj. 生的；未加工的；阴冷的；刺痛的；擦掉皮的；无经验的；（在艺术等方面）不成熟的 n. 擦伤处 vt. 擦伤
absurd	adj. 荒谬的；可笑的 n. 荒诞；荒诞作品
possibility	n. 可能性；可能发生的事物
garage	n. 车库；汽车修理厂；飞机库 v. 把……送入车库；把（汽车）开进车库
oxygen	n. [化学] 氧气，[化学] 氧
goat	n. 山羊；替罪羊（美俚）；色鬼（美俚）
radiation	n. 辐射；发光；放射物
fog	n. 雾；烟雾，尘雾；迷惑 v. 使模糊；使困惑；以雾笼罩
host	n. [计] 主机；主人；主持人；许多 v. 主持；当主人招待
amazing	adj. 令人惊异的 v. 使吃惊（amaze的ing形式）
outdoors	adv. 在户外 n. 户外 adj. 户外的（等于outdoor）
progress	n. 进步，发展；前进 v. 前进，进步；进行
authentic	adj. 真正的，真实的；可信的
omelette	n. 煎蛋卷
headmistress	n. 女校长
trip	v. 绊倒；远足；犯错误；轻快地走 n. 旅行；绊倒；差错
transport	n. 运输；运输机；狂喜；流放犯 v. 运输；流放；使狂喜
erupt	v. 爆发；喷出；发疹；长牙
forgetful	adj. 健忘的；不注意的；疏忽的；使遗忘的
sir	n. 先生；（用于姓名前）爵士；阁下；（中小学生对男教师的称呼）先生；老师
friend	n. 朋友；助手；赞助者
holiday	n. 假日；节日；休息日 v. 外出度假
drink	v. 喝，饮；吸收；举杯庆贺 n. 酒，饮料；喝酒
commercial	adj. 商业的；营利的；靠广告收入的 n. 商业广告
whenever	conj. 每当；无论何时 adv. 不论何时；随便什么时候
emperor	n. 皇帝，君主
bingo	n. 宾戈游戏
operator	n. 经营者；操作员；话务员；行家
apology	n. 道歉；谢罪；辩护；勉强的替代物
pure	adj. 纯的；纯粹的；纯洁的；清白的；纯理论的 n. (Pure)人名；(俄)普雷
devotion	n. 献身，奉献；忠诚；热爱
grade	n. 年级；等级；成绩；级别；阶段 v. 评分；把…分等级
now	adv. 现在；如今；立刻 adj. 现在的 n. 现在；目前 conj. 由于；既然
wounded	adj. 受伤的 n. 受伤者，伤员 v. 使受伤（wound的过去分词）
hen	n. 母鸡；女人；雌禽
opposite	adj. 相反的；对面的；对立的 n. 对立面；反义词 prep. 在…的对面 adv. 在对面
profit	n. 利润；利益 v. 获利；有益
courage	n. 勇气；胆量
outstanding	adj. 杰出的；显著的；未解决的；未偿付的 n. 未偿贷款
shelter	n. 庇护；避难所；遮盖物 v. 保护；使掩蔽
look	v. 看；期待；注意；面向；看上去像 n. 看；样子；面容
coast	v. 滑行；沿岸航行 n. 海岸；滑坡
ignore	v. 驳回诉讼；忽视；不理睬
different	adj. 不同的；个别的，与众不同的
real	adj. 实际的；真实的；实在的 adv. 真正地；确实地 n. 现实；实数
typical	adj. 典型的；特有的；象征性的
handy	adj. 便利的；手边的，就近的；容易取得的；敏捷的 n. (Handy)人名；(英)汉迪
broken	adj. 破碎的；坏掉的 v. 折断；打碎；损坏（break的过去分词）
aloud	adv. 大声地；出声地
appear	v. 出现；显得；似乎；出庭；登场
barbershop	n. 理发店 adj. 有男声合唱之和声的
student	n. 学生；学者
yummy	adj. 好吃的；美味的；愉快的 n. 美味的东西；令人喜爱的东西
midnight	n. 午夜，半夜12点钟 adj. 半夜的；漆黑的
addition	n. 添加；[数] 加法；增加物
weatherman	n. 气象员；天气预报员
permit	v. 许可；允许 n. 许可证，执照
hand	n. 手，手艺；帮助；指针；插手 v. 传递，交给；支持；搀扶
obtain	v. 获得；流行
prize	n. 奖品；奖赏；战利品 v. 珍视；捕获；估价 adj. 获奖的
content	n. 内容，目录；满足；容量 adj. 满意的 v. 使满足
firmly	adv. 坚定地，坚决地；坚固地，稳固地
colour	v. 把…涂颜色，粉饰；歪曲；使脸红 n. 颜色；风格；气色，面色；外貌
tired	adj. 疲倦的；厌倦的，厌烦的 v. 疲倦；对…腻烦（tire的过去分词形式）
vague	adj. 模糊的；含糊的；不明确的；暧昧的 n. (Vague)人名；(法)瓦格；(英)韦格
classic	adj. 经典的；古典的，传统的；最优秀的 n. 名著；经典著作；大艺术家
concern	v. 涉及，关系到；使担心 n. 关系；关心；关心的事；忧虑
talent	n. 才能；天才；天资
several	adj. 几个的；各自的 pron. 几个；数个
simply	adv. 简单地；仅仅；简直；朴素地；坦白地
India	n. 印度（南亚国家）
acre	n. 土地，地产；英亩
potato	n. [作物] 土豆，[作物] 马铃薯
adopt	v. 采取；接受；收养；正式通过
knee	n. 膝盖，膝 v. 用膝盖碰
newspaper	n. 报纸
uniform	adj. 统一的；一致的；相同的；均衡的；始终如一的 n. 制服 v. 使穿制服；使成一样
support	v. 支持，支撑，支援；扶持，帮助；赡养，供养 n. 支持，维持；支援，供养；支持者，支撑物
conservation	n. 保存，保持；保护
fundamental	adj. 基本的，根本的 n. 基本原理；基本原则
wayside	n. 路旁 adj. 路旁的
request	n. 请求；需要 v. 要求，请求
coke	n. 焦炭；可卡因；可口可乐（Coca-Cola） v. 焦化
between	prep. 在…之间 adv. 在中间
opener	n. [五金] 开启工具；开启的人
credit	n. 信用，信誉；[金融] 贷款；学分；信任；声望 v. 相信，信任；把…归给，归功于；赞颂
absorb	v. 吸收；吸引；承受；理解；使…全神贯注
multiply	v. 乘；使增加；使繁殖；使相乘 adv. 多样地；复合地 adj. 多层的；多样的
chocolate	n. 巧克力，巧克力糖；巧克力色 adj. 巧克力色的；巧克力口味的
ball	n. 球；舞会 v. 成团块
cheque	n. 支票
Russia	n. 俄罗斯
Tibetan	adj. 西藏的；藏族的 n. 藏语；西藏人
temple	n. 庙宇；寺院；神殿；太阳穴
fire	n. 火；火灾；炮火；炉火；热情；激情；磨难 v. 点燃；解雇；开除；使发光；烧制；激动；放枪
excite	v. 激起；刺激…，使…兴奋
parcel	n. 包裹，小包 v. 打包；捆扎
ability	n. 能力，能耐；才能
leave	v. 离开；留下；遗忘；委托 n. 许可，同意；休假
handle	n. [建] 把手；柄；手感；口实 v. 处理；操作；运用；买卖；触摸
flashlight	n. 手电筒；闪光灯
keyboard	n. 键盘 v. 键入；用键盘式排字机排字
candidate	n. 候选人，候补者；应试者
photograph	v. 为…拍照；使深深印入 n. 照片，相片
glass	n. 玻璃；玻璃制品；镜子 v. 反映；给某物加玻璃
tradition	n. 惯例，传统；传说
these	pron. 这些 adj. 这些的
unlike	adj. 不同的，不相似的 prep. 和…不同，不像
seldom	adv. 很少，不常
please	v. 使喜欢；使高兴，使满意 int. 请（礼貌用语）
overcome	v. 克服；胜过
except	v. 不计；把…除外 prep. 除…之外 conj. 除了；要不是
advocate	v. 提倡，主张，拥护 n. 提倡者；支持者；律师
mountainous	adj. 多山的；巨大的；山一般的
four	num. 四；四个 adj. 四的；四个的 n. (Four)人名；(西)福尔；(法)富尔
meet	v. 满足；遇见；对付 n. 集会 adj. 合适的；适宜的
Dynasty	n. 王朝，朝代
reach	v. 达到；延伸；伸出手；传开 n. 范围；延伸；河段；横风行驶
ordinary	adj. 普通的；平凡的；平常的 n. 普通；平常的人（或事）
challenging	adj. 挑战的；引起挑战性兴趣的 v. 要求；质疑；反对；向…挑战；盘问（challenge的ing形式）
speed	v. 超速，加速；加速，迅速前行；兴隆 n. 速度，速率；迅速，快速；昌盛，繁荣
once	adv. 一次；曾经 conj. 一旦 n. 一次，一回
type	n. 类型，品种；模范；样式 v. 打字；测定（血等）类型
sweet	adj. 甜的；悦耳的；芳香的；亲切的 n. 糖果；乐趣；芳香；宝贝
goodness	int. 天哪 n. 善良，优秀 ；精华，养分
irrigation	n. 灌溉；[临床] 冲洗；冲洗法
tourist	n. 旅行者，观光客 adj. 旅游的 vt. 在旅行参观 vi. 旅游；观光 adv. 坐旅游车厢；坐经济舱
buffet	n. 自助餐；小卖部；打击；猛烈冲击 v. 与…搏斗；连续猛击 adj. 自助的；自助餐的
share	v. 分享，分担；分配 n. 份额；股份
intelligence	n. 智力；情报工作；情报机关；理解力；才智，智慧；天分
aware	adj. 意识到的；知道的；有…方面知识的；懂世故的 n. (Aware)人名；(阿拉伯、索)阿瓦雷
adolescent	adj. 青春期的；未成熟的 n. 青少年
scan	v. 扫描；浏览；细看；详细调查；标出格律 n. 扫描；浏览；审视；细看
anecdote	n. 轶事；奇闻；秘史
former	adj. 从前的，前者的；前任的 n. 模型，样板；起形成作用的人
fetch	v. 取来；接来；到达；吸引 n. 取得；诡计
toothbrush	n. 牙刷
Egyptian	adj. 埃及的；埃及人的 n. 埃及人；古代埃及语
reform	n. 改革，改良；改正 v. 改革，革新；重新组成 adj. 改革的；改革教会的
bench	n. 长凳；工作台；替补队员 v. 给…以席位；为…设置条凳
best	n. 最好的人，最好的事物；最佳状态 adj. 最好的 adv. 最好地 v. 打败，胜过
vest	n. 背心；汗衫 v. 授予；使穿衣
weakness	n. 弱点；软弱；嗜好
luck	n. 运气；幸运；带来好运的东西 v. 靠运气，走运；凑巧碰上
Friday	n. 星期五
helicopter	n. [航] 直升飞机 vi. [航] 乘直升飞机 vt. 由直升机运送
dare	n. 挑战；挑动 v. 敢冒；不惧
confidential	adj. 机密的；表示信任的；获信任的
slight	adj. 轻微的，少量的；脆弱的；细长的；不重要的 v. 轻视，忽略；怠慢 n. 怠慢；轻蔑
wait	v. 等候；推迟；延缓 n. 等待；等候
journey	n. 旅行；行程 v. 旅行
lazy	adj. 懒惰的；懒洋洋的；怠惰的；慢吞吞的 n. (Lazy)人名；(德)拉齐
understanding	n. 谅解，理解；理解力；协议 adj. 了解的；聪明的；有理解力的 v. 理解；明白（understand的ing形式）
loudspeaker	n. 喇叭，扬声器；扩音器
chimney	n. 烟囱
sweep	v. 扫除；猛拉；掸去 n. 打扫，扫除；范围；全胜
endless	adj. 无止境的；连续的；环状的；漫无目的的
instrument	n. 仪器；工具；乐器；手段；器械
zoom	n. 急速上升；嗡嗡声；[摄] 变焦摄影 v. 急速上升；摄像机移动
prison	n. 监狱；监禁；拘留所 vt. 监禁，关押
pianist	n. 钢琴家；钢琴演奏者
ballpoint	n. 圆珠笔
rooster	n. 公鸡；狂妄自负的人
capsule	n. 胶囊；[植] 蒴果；太空舱；小容器 adj. 压缩的；概要的 v. 压缩；简述
rag	n. 破布；碎屑 v. 戏弄；责骂
game	n. 游戏；比赛 adj. 勇敢的 v. 赌博
port	n. 港口，口岸；（计算机的）端口；左舷；舱门 v. 转向左舷
leaf	n. 叶子；（书籍等的）一张；扇页 v. 生叶；翻书页
waiter	n. 服务员，侍者
flower	n. 花；精华；开花植物 v. 成熟，发育；开花；繁荣；旺盛
dusty	adj. 落满灰尘的
attraction	n. 吸引，吸引力；引力；吸引人的事物
sister	n. 姐妹；（称志同道合者）姐妹；修女；护士 adj. 姐妹般的；同类型的
vegetable	n. 蔬菜；植物；植物人 adj. 蔬菜的；植物的
beehive	n. 蜂窝；蜂箱
fool	v. 欺骗；开玩笑；戏弄 n. 傻瓜；愚人；受骗者 adj. 傻的
firework	n. 烟火；激烈情绪
dusk	n. 黄昏，薄暮；幽暗，昏暗 adj. 微暗的 v. 使变微暗
somewhere	adv. 在某处；到某处 n. 某个地方
low	adj. 低的，浅的；卑贱的；粗俗的；消沉的 adv. 低声地；谦卑地，低下地 n. 低；低价；低点；牛叫声 v. 牛叫
motto	n. 座右铭，格言；箴言
union	n. 联盟，协会；工会；联合
most	adv. 最；非常，极其；最多；几乎 adj. 大部分的，多数的；最多的 n. 大部分，大多数
skyscraper	n. 摩天楼，超高层大楼；特别高的东西
chemist	n. 化学家；化学工作者；药剂师；炼金术士
apple	n. 苹果，苹果树，苹果似的东西；[美俚]炸弹，手榴弹，（棒球的）球；[美俚]人，家伙。
convey	v. 传达；运输；让与
bathrobe	n. 浴衣；睡衣
enjoy	v. 欣赏，享受；喜爱；使过得快活
platform	n. 平台；月台，站台；坛；讲台
dentist	n. 牙科医生
turkey	n. 火鸡；笨蛋；失败之作
eastwards	adv. 向东方地 adj. 向东方的
confirm	v. 确认；确定；证实；批准；使巩固
Scratch	n. 擦伤；抓痕；刮擦声；乱写 adj. 打草稿用的；凑合的；碰巧的 v. 抓；刮；挖出；乱涂
spray	n. 喷雾；喷雾器；水沫 v. 喷射
happiness	n. 幸福
sand	n. 沙；沙地；沙洲；沙滩；沙子 v. 撒沙于；以沙掩盖；用砂纸等擦平或磨光某物；使撒沙似地布满；给…掺沙子
hook	n. 挂钩，吊钩 v. 钩住；引上钩
jungle	n. 丛林，密林；危险地带 adj. 丛林的；蛮荒的
cleaner	n. [化工] 清洁剂；清洁工；干洗店；干洗商；洗洁器
develop	v. 开发；进步；使成长；使显影
standard	n. 标准；水准；旗；度量衡标准 adj. 标准的；合规格的；公认为优秀的
patent	v. 授予专利；取得…的专利权 adj. 专利的；新奇的；显然的 n. 专利权；执照；专利品
modest	adj. 谦虚的，谦逊的；适度的；端庄的；羞怯的 n. (Modest)人名；(罗)莫代斯特；(德)莫德斯特；(俄)莫杰斯特
cookie	n. 饼干；小甜点
German	adj. 德国的；德语的，德国人的 n. 德语；德国人
popular	adj. 流行的，通俗的；受欢迎的；大众的；普及的
lead	n. 领导；铅；导线；榜样 v. 领导；致使；引导；指挥 adj. 带头的；最重要的
labour	n. 劳动力，人工；分娩 v. 劳动；分娩；费力地前进
textbook	n. 教科书，课本
feather	n. 羽毛 v. 用羽毛装饰
forehead	n. 额，前额
barrier	n. 障碍物，屏障；界线 vt. 把…关入栅栏
provide	v. 提供；规定；准备；装备
throughout	adv. 自始至终，到处；全部 prep. 贯穿，遍及
optimistic	adj. 乐观的；乐观主义的
careful	adj. 仔细的，小心的
rose	n. 玫瑰；粉红色；蔷薇（花）；粉红色的葡萄酒 adj. 玫瑰花的；玫瑰色的；粉红色的；带有玫瑰香味的 vt. 使成玫瑰色，使（面颊）发红；使有玫瑰香味 vi. 起义( rise的过去式)；升起；（数量）增加；休会
slide	n. 滑动；幻灯片；滑梯；雪崩 v. 滑动；滑落；不知不觉陷入
sadness	n. 悲哀
cooker	n. 炊具；烹饪用水果；窜改者
runner	n. 跑步者；走私者；推销员；送信人
hunt	v. 打猎；搜索 n. 狩猎；搜寻
courtyard	n. 庭院，院子；天井
seven	num. 七个，七 n. 七个，七 adj. 七的；七个的
ballet	n. 芭蕾舞剧；芭蕾舞乐曲
angry	adj. 生气的；愤怒的；狂暴的；（伤口等）发炎的
jewel	n. 宝石；珠宝 v. 镶以宝石；饰以珠宝
due	adj. 到期的；预期的；应付的；应得的 n. 应付款；应得之物 adv. 正（置于方位词前）
abroad	adv. 在国外；到海外 adj. 往国外的 n. 海外；异国
sob	v. 啜泣，呜咽；（风等）发出呜咽声 n. 啜泣，呜咽
sunny	adj. 阳光充足的，和煦的；快活的；性情开朗的
black	adj. 黑色的；黑人的；邪恶的 n. 黑色；黑人；黑颜料 v. 使变黑；把鞋油等涂在…上；把（眼眶）打成青肿
contain	v. 包含；控制；容纳；牵制（敌军）
comfort	n. 安慰；舒适；安慰者 v. 安慰；使（痛苦等）缓和
sightseeing	n. 观光；游览 adj. 观光的；游览的 v. 观光（sightsee的ing形式）；游览
session	n. 会议；（法庭的）开庭；（议会等的）开会；学期；讲习会
toy	n. 玩具；小装饰品；不值钱的东西 v. 玩弄；调情；随随便便地对待 adj. 作为玩具的；玩物似的
comprehension	n. 理解；包含
unsuccessful	adj. 不成功的；失败的
annual	adj. 年度的；每年的 n. 年刊，年鉴；一年生植物
sunburnt	adj. 晒黑的；有晒斑的；日炙的 v. 晒黑（sunburn的过去式和过去分词）
method	n. 方法；条理；类函数 adj. 使用体验派表演方法的
treasure	n. 财富，财产；财宝；珍品 v. 珍爱；珍藏
moment	n. 片刻，瞬间，时刻；重要，契机
applaud	v. 赞同；称赞；向…喝彩
grammar	n. 语法；语法书
ever	adv. 永远；曾经；究竟 n. (Ever)人名；(英)埃弗；(俄)叶韦尔；(西、法)埃韦尔
fish	v. 捕鱼，钓鱼；用钩捞取 n. 鱼，鱼类
bright	adj. 明亮的，鲜明的；聪明的；愉快的 adv. 明亮地；光明地；欢快地 n. 车头灯光
flame	n. 火焰；热情；光辉 v. 焚烧；泛红
light	n. 光；光线；灯；打火机；领悟；浅色；天窗 adj. 轻的；浅色的；明亮的；轻松的；容易的；清淡的 v. 点着；变亮；着火 adv. 轻地；清楚地；轻便地
nobody	pron. 无人，没有人；没有任何人 n. 无名小卒；小人物
object	n. 目标；物体；客体；宾语 v. 提出…作为反对的理由
workday	n. 工作日 adj. 日常的，工作日的；平凡的
film	n. 电影；薄膜；胶卷；轻烟 v. 在…上覆以薄膜；把…拍成电影
immediately	adv. 立即，立刻；直接地 conj. 一…就
inspire	v. 激发；鼓舞；启示；产生；使生灵感
scream	v. 尖叫；呼啸；发出尖锐刺耳的声音；令人触目惊心 n. 尖叫声；尖锐刺耳的声音；极其滑稽可笑的人
table	n. 桌子；表格；平地层 v. 制表；搁置；嵌合 adj. 桌子的
anxious	adj. 焦虑的；担忧的；渴望的；急切的
agenda	n. 议程；日常工作事项；日程表
policy	n. 政策，方针；保险单
panda	n. 熊猫；猫熊
clay	n. [土壤] 粘土；泥土；肉体；似黏土的东西 vt. 用黏土处理
assistance	n. 援助，帮助；辅助设备
expensive	adj. 昂贵的；花钱的
outing	n. 远足；短途旅游；体育比赛 adj. 远足适用的 v. 出来；暴露（out的ing形式）
Buddhist	n. 佛教徒 adj. 佛教的
PM	abbr. （拉）下午（Post Meridiem，等于afternoon）；调相（Phase Modulation）
algebra	n. 代数学
tidy	adj. 整齐的；相当大的 v. 整理；收拾；弄整齐 n. 椅子的背罩
manager	n. 经理；管理人员
funny	adj. 有趣的，好笑的，滑稽的；（口）稀奇的，古怪的，奇异的；有病的，不舒服的；狡猾的，欺骗（性）的，可疑的，不光明 n. 滑稽人物；笑话，有趣的故事；滑稽连环漫画栏；（英）（比赛用）单人双桨小艇
suffer	v. 遭受；忍受；经历 n. (Suffer)人名；(意)苏费尔
curriculum	n. 课程
razor	v. 剃，用剃刀刮 n. 剃刀
universe	n. 宇宙；世界；领域
suitcase	n. [轻] 手提箱；衣箱
police	n. 警察，警方；治安 v. 监督；管辖；维持治安；为…配备警察 adj. 警察的；有关警察的
ceiling	n. 天花板；上限
theory	n. 理论；原理；学说；推测
direct	adj. 直接的；直系的；亲身的；恰好的 v. 管理；指挥；导演；指向 adv. 直接地；正好；按直系关系
some	adj. 一些；某个；大约；相当多的 pron. 一些；若干；其中的一部分；（数量不确切时用）有些人 adv. 非常；相当；<美>稍微
tasty	adj. 美味的；高雅的；有趣的 n. 可口的东西；引人入胜的东西
contemporary	n. 同时代的人；同时期的东西 adj. 当代的；同时代的；属于同一时期的
punctual	adj. 准时的，守时的；精确的
must	aux. 必须，一定；可以，应当；很可能 n. 绝对必要的事物；未发酵葡萄汁
attract	v. 吸引；引起
wisdom	n. 智慧，才智；明智；学识；至理名言
shorts	n. 短裤
negotiate	v. 谈判，商议；转让；越过
feast	v. 享受；款待，宴请 n. 筵席，宴会；节日
practical	adj. 实际的；实用性的
private	adj. 私人的；私有的；私下的 n. 列兵；二等兵
technique	n. 技巧，技术；手法
bun	n. 小圆面包
rabbit	n. 兔子，野兔 v. 让…见鬼去吧
yet	adv. 还；但是；已经 conj. 但是；然而 n. (Yet)人名；(东南亚国家华语)一
Germany	n. 德国
referee	n. 裁判员；调解人；介绍人 v. 仲裁；担任裁判
policeman	n. 警察，警员；[分化] 淀帚（橡皮头玻璃搅棒）
normal	adj. 正常的；正规的，标准的 n. 正常；标准；常态
two	n. 两个 adj. 两个的 num. 二
comma	n. 逗号；停顿
couple	n. 对；夫妇；数个 v. 结合；成婚
ours	pron. 我们的 n. (Ours)人名；(法)乌尔斯
cook	v. 烹调，煮 n. 厨师，厨子
slim	adj. 苗条的；修长的；微小的；差的 v. 使…体重减轻；使…苗条 n. (Slim)人名；(阿拉伯)萨利姆；(英、西)斯利姆
memorize	v. 记住，背熟；记忆
copy	v. 复制；复印；抄袭 n. 副本；一册；摹仿
thin	adj. 薄的；瘦的；稀薄的；微弱的 v. 使瘦；使淡；使稀疏 adv. 稀疏地；微弱地 n. 细小部分
September	n. 九月
burn	v. 燃烧；烧毁，灼伤；激起…的愤怒 n. 灼伤，烧伤；烙印
alongside	adv. 在旁边 prep. 在……旁边
educator	n. 教育家；教育工作者；教师
sheet	n. 薄片，纸张；薄板；床单 v. 覆盖；盖上被单；使成大片 adj. 片状的
baggage	n. 行李；[交] 辎重（军队的）
wrestle	n. 摔跤；搏斗；斗争 v. 摔跤；斗争；斟酌
scores	n. 考试成绩；比分（score的复数） v. 得分（score的第三人称单数形式）；刻划
otherwise	adv. 否则；另外；在其他方面 adj. 另外的；其他方面的；原本，本来 conj. 其他；如果不；然后
active	adj. 积极的；活跃的；主动的；有效的；现役的 n. 主动语态；积极分子
connect	v. 连接；联合；关连
bucket	n. 桶，水桶；铲斗；一桶的量 v. 倾盆而下；颠簸着行进
basketball	n. 篮球；篮球运动
lend	v. 贷；增添，提供；把……借给 n. (Lend)人名；(德)伦德
mushroom	n. 蘑菇，伞菌；蘑菇形物体；暴发户 adj. 蘑菇的；蘑菇形的；迅速生长的 v. 迅速增加；采蘑菇；迅速生长
secondhand	adj. 二手的；旧的；间接获得的；做旧货生意的 adv. 间接地；间接听来；以旧货
god	n. 神；（大写首字母时）上帝 vt. 膜拜，崇拜
souvenirs	n. 纪念品；旅游纪念品；回忆
spin	v. 旋转；纺纱；吐丝；晕眩 n. 旋转；疾驰
rubber	n. 橡胶；橡皮；合成橡胶；按摩师 adj. 橡胶制成的 v. 涂橡胶于；用橡胶制造
sincerely	adv. 真诚地；由衷地，诚恳地
reception	n. 接待；接收；招待会；感受；反应
sauce	n. 酱油；沙司；调味汁 v. 使增加趣味；给…调味
spot	n. 地点；斑点 v. 认出；弄脏；用灯光照射 adj. 现场的；现货买卖的 adv. 准确地；恰好
five	n. 五，五个；五美元钞票 num. 五，五个 adj. 五的；五个的
workforce	n. 劳动力；工人总数，职工总数
concept	n. 观念，概念
angle	v. 钓鱼；谋取 n. 角度，角，方面
vertical	adj. 垂直的，直立的；[解剖] 头顶的，顶点的 n. 垂直线，垂直面
insure	v. 确保，保证；给…保险
coffee	n. 咖啡；咖啡豆；咖啡色
gas	n. 气体；[矿业] 瓦斯；汽油；毒气 v. 加油；毒（死）
radium	n. [化学] 镭（88号元素符号Ra）
drive	v. 开车；猛击；飞跑 n. 驱动器；驾车；[心理] 内驱力，推进力；快车道
kiss	v. 吻；（风等）轻拂 n. 吻；轻拂
attend	v. 出席；上（大学等）；照料；招待；陪伴
equipment	n. 设备，装备；器材
heroine	n. 女主角；女英雄；女杰出人物
gentleman	n. 先生；绅士；有身份的人
difficulty	n. 困难，困境
follow	v. 跟随；遵循；追求；密切注意，注视；注意；倾听 n. 跟随；追随
him	pron. 他（宾格） n. (Him)人名；(东南亚国家华语)欣；(柬)亨；(中)谦(广东话·威妥玛)
old	adj. 陈旧的，古老的；年老的 n. 古时
big	adj. 大的；重要的；量大的 adv. 大量地；顺利；夸大地 n. (Big)人名；(土)比格
anyway	adv. 无论如何，不管怎样；总之
fry	n. 鱼苗；油炸食物 v. 油炸；油煎
commitment	n. 承诺，保证；委托；承担义务；献身
stand	v. 站立；位于；停滞 n. 站立；立场；看台；停止
Australia	n. 澳大利亚，澳洲
recover	v. 恢复；弥补；重新获得 n. 还原至预备姿势
pint	n. 品脱；一品脱的量；一品脱牛奶或啤酒
wolf	n. 狼；色狼；残忍贪婪之人 v. 大吃；狼吞虎咽地吃
creature	n. 动物，生物；人；创造物
sentence	n. [语][计] 句子，命题；宣判，判决 v. 判决，宣判
street	n. 街道 adj. 街道的
flash	v. 使闪光；反射 n. 闪光，闪现；一瞬间 adj. 闪光的，火速的
equality	n. 平等；相等；[数] 等式
relate	v. 叙述；使…有联系
independence	n. 独立性，自立性；自主
willingly	adv. 欣然地；愿意地，乐意地
basic	adj. 基本的；基础的 n. 基础；要素
consist	v. 由…组成；在于；符合
land	n. 国土；陆地；地面 v. 使…登陆；使…陷于；将…卸下
user	n. 用户
brain	n. 头脑，智力；脑袋 v. 猛击…的头部
choice	n. 选择；选择权；精选品 adj. 精选的；仔细推敲的
introduce	v. 介绍；引进；提出；采用
ride	v. 骑马；乘车；依靠；漂浮 n. 骑；乘坐；交通工具；可供骑行的路；（乘坐汽车等的）旅行；乘骑；（乘车或骑车的）短途旅程；供乘骑的游乐设施
circulate	v. 传播，流传；循环；流通
person	n. 人；身体；容貌，外表；人称
nursery	n. 苗圃；托儿所；温床
regards	n. 致意，问候 v. 视为，注意（regard的第三人称单数）
postman	n. 邮递员；邮差
sceptical	adj. 怀疑的；怀疑论的；习惯怀疑的
cruel	adj. 残酷的，残忍的；使人痛苦的，让人受难的；无情的，严酷的
seem	v. 似乎；像是；装作 n. (Seem)人名；(英)西姆
access	v. 使用；存取；接近 n. 进入；使用权；通路
statement	n. 声明；陈述，叙述；报表，清单
ambiguous	adj. 模糊不清的；引起歧义的
island	n. 岛；岛屿；安全岛；岛状物 adj. 岛的 vt. 孤立；使成岛状
honey	n. 蜂蜜；宝贝；甜蜜 adj. 甘美的；蜂蜜似的 v. 对…说甜言蜜语；加蜜使甜
wherever	adv. 无论什么地方；究竟在哪里 conj. 无论在哪里；无论什么情况下
yes	adv. 是, 是的 n. 是（表示肯定）
breathless	adj. 喘不过气来的；停止呼吸的
golf	n. 高尔夫球；高尔夫球运动 v. 打高尔夫球
danger	n. 危险；危险物，威胁
interest	n. 兴趣，爱好；利息；趣味；同行 v. 使……感兴趣；引起……的关心；使……参与
flaming	adj. 燃烧的；火红的；激昂的 v. 燃烧；变亮；发光（flame的ing形式） n. (Flaming)人名；(法)弗拉曼
temporary	adj. 暂时的，临时的 n. 临时工，临时雇员
accomplish	v. 完成；实现；达到
stupid	adj. 愚蠢的；麻木的；乏味的 n. 傻瓜，笨蛋
glue	v. 粘合；似胶般固着于 n. 胶；各种胶合物
exercise	n. 运动；练习；运用；操练；礼拜；典礼 v. 锻炼；练习；使用；使忙碌；使惊恐
winner	n. 胜利者
sandwich	v. 夹入；挤进；把做成三明治 n. 三明治；夹心面包
heap	n. 堆；许多；累积 v. 堆；堆积
trend	n. 趋势，倾向；走向 v. 趋向，伸向
cellar	n. 地窖；酒窖；地下室 vt. 把…藏入地窖
visitor	n. 访问者，参观者；视察者；候鸟
seed	n. 种子；根据；精液；萌芽；子孙；原由 v. 播种；结实；成熟；去…籽
out	adv. 出现；在外；出局；出声地；不流行地 adj. 外面的；出局的；下台的 n. 出局 prep. 向；离去 v. 出来；暴露
breakfast	n. 早餐；早饭 v. 吃早餐
certainly	adv. 当然；行（用于回答）；必定
them	pron. 他们；它们；她们 n. (Them)人名；(老)探
kindergarten	n. 幼儿园；幼稚园
microwave	n. 微波
hur	abbr. 飓风（hurricane）
sofa	n. 沙发；长椅
camel	n. [畜牧][脊椎] 骆驼；打捞浮筒；工作作风官僚 adj. 驼色的；暗棕色的 vi. 工作刻板平庸
engine	n. 引擎，发动机；机车，火车头；工具
lift	v. 举起；提升；鼓舞；空运；抄袭 n. 电梯；举起；起重机；搭车
surrounding	adj. 周围的，附近的 n. 环境，周围的事物
flexible	adj. 灵活的；柔韧的；易弯曲的
holy	adj. 圣洁的，神圣的；至善的 n. 神圣的东西
wrong	adv. 错误地；邪恶地，不正当地 n. 坏事；不公正 adj. 错误的；失常的；不适当的 v. 委屈；无理地对待；诽谤
crop	n. 产量；农作物；庄稼；平头 v. 种植；收割；修剪；剪短
subjective	adj. 主观的；个人的；自觉的
blame	v. 责备；归咎于 n. 责备；责任；过失
fireplace	n. 壁炉
cheek	n. 面颊，脸颊；臀部 v. 无礼地向…讲话，对…大胆无礼
fluency	n. （语言、文章）流利；（技能）娴熟
pen	n. 钢笔；作家；围栏 v. 写；关入栏中
survival	n. 幸存，残存；幸存者，残存物
slavery	n. 奴役；奴隶制度；奴隶身份
explorer	n. 探险家；勘探者；探测器；[医]探针
admission	n. 承认；入场费；进入许可；坦白；录用
stress	n. 压力；强调；紧张；重要性；重读 v. 强调；使紧张；加压力于；用重音读
brunch	n. 早午餐
victory	n. 胜利；成功；克服
safe	adj. 安全的；可靠的；平安的 n. 保险箱；冷藏室；纱橱
passport	n. 护照，通行证；手段
pregnant	adj. 怀孕的；富有意义的
stair	n. 楼梯，阶梯；梯级
bravery	n. 勇敢；勇气
struggle	v. 奋斗，努力；挣扎 n. 努力，奋斗；竞争
abundant	adj. 丰富的；充裕的；盛产
pronunciation	n. 发音；读法
relay	v. 转播；接替 n. [电] 继电器；接替，接替人员；驿马
unconscious	adj. 无意识的；失去知觉的；不省人事的；未发觉的
racial	adj. 种族的；人种的
silly	adj. 愚蠢的；不明事理的；没头脑的 n. 傻瓜
remote	adj. 遥远的；偏僻的；疏远的 n. 远程
shallow	adj. 浅的；肤浅的 n. [地理] 浅滩 v. 使变浅
satellite	n. 卫星；人造卫星；随从；卫星国家
expert	adj. 熟练的；内行的；老练的 n. 专家；行家；能手 vt. 当专家；在…中当行家
bath	n. 沐浴；浴室；浴盆 v. 洗澡
haircut	n. 理发；发型
friction	n. 摩擦，[力] 摩擦力
primitive	adj. 原始的，远古的；简单的，粗糙的 n. 原始人
moustache	n. 小胡子；髭；触须
goose	n. 鹅；鹅肉；傻瓜；雌鹅 v. 突然加大油门；嘘骂
absence	n. 没有；缺乏；缺席；不注意
repair	v. 修理；修复 n. 修理，修补；修补部位
admit	v. 承认；准许进入；可容纳
valley	n. 山谷；流域；溪谷
bomb	v. 轰炸，投弹于 n. 炸弹
choir	n. 唱诗班；合唱队；舞蹈队 v. 合唱
thing	n. 事情；东西；事物；情况
toothpaste	n. 牙膏
yours	pron. 你（们）的东西；你的责任[义务]；你的家属；来信，尊函 adj. 你（们）的（东西）；信末署名前用语
geography	n. 地理；地形
loudly	adv. 大声地，响亮地
wealthy	adj. 富有的；充分的；丰裕的 n. 富人
hi	int. 嗨！（表示问候或用以唤起注意） n. (Hi)人名；(柬)希
channel	v. 引导，开导；形成河道 n. 通道；频道；海峡
pillow	n. 枕头 v. 垫；枕于…；使…靠在
soup	n. 汤，羹；马力 v. 加速；增加马力
analysis	n. 分析；分解；验定
cassette	n. 盒式磁带；暗盒；珠宝箱；片匣
laundry	n. 洗衣店，洗衣房；要洗的衣服；洗熨；洗好的衣服
decrease	n. 减少，减小；减少量 v. 减少，减小
insert	v. 插入；嵌入 n. 插入物；管芯；镶块；[机械]刀片
encouragement	n. 鼓励
youth	n. 青年；青春；年轻；青少年时期
thousand	n. 一千；一千个；许许多多 adj. 成千的；无数的
physical	adj. [物] 物理的；身体的；物质的；根据自然规律的，符合自然法则的 n. 体格检查
change	v. 改变；交换 n. 变化；找回的零钱
allowance	n. 津贴，零用钱；允许；限额 v. 定量供应
asleep	adj. 睡着的；麻木的；长眠的 adv. 熟睡地；进入睡眠状态
swimming	n. 游泳；目眩 adj. 游泳的；游泳用的；善于游泳的；晕眩的 v. 游泳；漂浮；旋转（swim的ing形式）
alternative	adj. 供选择的；选择性的；交替的 n. 二中择一；供替代的选择
kindness	n. 仁慈；好意；友好的行为
accept	v. 接受；承认；承担；承兑；容纳
noise	n. [环境] 噪音；响声；杂音 v. 谣传
clear	adj. 清楚的；清澈的；晴朗的；无罪的 v. 通过；清除；使干净；跳过 adv. 清晰地；完全地 n. 清除；空隙
adaptation	n. 适应；改编；改编本，改写本
novel	adj. 新奇的；异常的 n. 小说
inventor	n. 发明家；[专利] 发明人；创造者
merciful	adj. 仁慈的；慈悲的；宽容的
shopping	n. 购物，买东西 v. 购物（shop的ing形式）
soccer	n. 英式足球，足球
pan	n. 平底锅；盘状的器皿；淘盘子，金盘，秤盘 v. 淘金；在浅锅中烹调（食物）；[非正式用语]严厉的批评
forecast	v. 预报，预测；预示 n. 预测，预报；预想
drunk	v. 喝酒（drink的过去分词） adj. 喝醉了的
whom	pron. 谁（who的宾格）
mind	n. 理智，精神；意见；智力；记忆力 v. 介意；专心于；照料
sideways	adv. 向侧面地；向一旁 adj. 向侧面的；一旁的
spare	v. 节约，吝惜；饶恕；分出，分让 adj. 多余的；瘦的；少量的 n. 剩余；备用零件
unique	adj. 独特的，稀罕的；[数] 唯一的，独一无二的 n. 独一无二的人或物
export	n. 输出，出口；出口商品 v. 输出物资
success	n. 成功，成就；胜利；大获成功的人或事物
mess	n. 混乱；食堂，伙食团；困境；脏乱的东西 v. 弄乱，弄脏；毁坏；使就餐
airmail	n. 航空邮件
innocent	adj. 无辜的；无罪的；无知的 n. 天真的人；笨蛋
care	n. 关怀；照料；谨慎；忧虑 v. 照顾；关心；喜爱；顾虑
grand	adj. 宏伟的；豪华的；极重要的 n. 大钢琴；一千美元
triangle	n. 三角（形）；三角关系；三角形之物；三人一组
full	adj. 完全的，完整的；满的，充满的；丰富的；完美的；丰满的；详尽的 adv. 十分，非常；完全地；整整 v. 把衣服缝得宽大 n. 全部；完整
translation	n. 翻译；译文；转化；调任
pound	n. 英镑；重击，重击声；兽栏；拘留所 v. 捣烂；敲打；监禁，拘留
count	v. 计算；认为 n. 计数；计算；伯爵
or	conj. 或，或者；还是 n. (Or)人名；(中)柯(广东话·威妥玛)；(柬)奥；(土、匈、土库、阿塞、瑞典)奥尔
paddle	n. 划桨；明轮翼 v. 拌；搅；用桨划
invitation	n. 邀请；引诱；请帖；邀请函
test	n. 试验；检验 v. 试验；测试
bathtub	n. 浴缸
opinion	n. 意见；主张
delight	n. 高兴 v. 高兴
thirst	n. 渴望；口渴；热望 v. 渴望；口渴
register	v. 登记；注册；记录；挂号邮寄；把…挂号；正式提出 n. 登记；注册；记录；寄存器；登记簿
opening	n. 开始；机会；通路；空缺的职位 adj. 开始的 v. 开放（open的ing形式）；打开；公开
puzzle	v. 使…困惑；使…为难；苦思而得出 n. 谜；难题；迷惑
we	pron. 我们（主格）；笔者，本人（作者或演讲人使用）；朕，寡人 n. (We)人名；(缅)韦
bear	v. 结果实，开花（正式） n. 熊
bedroom	n. 卧室 adj. 两性关系的；城郊住宅区的
hurricane	n. 飓风，暴风
mouthful	n. 一口，满口
apologize	v. 道歉；辩解；赔不是
handtruck	手推车
garbage	n. 垃圾；废物
spelling	n. 拼写；拼字；拼法 v. 拼写；意味着（spell的ing形式）；迷住
useful	adj. 有用的，有益的；有帮助的
astronomy	n. 天文学
lesson	n. 教训；课 vt. 教训；上课
harbour	v. 藏匿；入港停泊；庇护 n. 海港（等于harbor）；避难所
herself	pron. 她自己（she的反身代词）；她亲自
quiet	adj. 安静的；安定的；不动的；温顺的 n. 安静；和平 v. 使平息；安慰
downstairs	adv. 在楼下 adj. 楼下的 n. 楼下
violent	adj. 暴力的；猛烈的
dictation	n. 听写；口述；命令
cathedral	n. 大教堂
respect	n. 尊敬，尊重；方面；敬意 v. 尊敬，尊重；遵守
expression	n. 表现，表示，表达；表情，脸色，态度，腔调，声调；式，符号；词句，语句，措辞，说法
dioxide	n. 二氧化物
villager	n. 乡村居民，村民
guidance	n. 指导，引导；领导
grey	adj. 灰色的；灰白的 v. 使变成灰色；使变老 n. 灰色
refer	v. 参考；涉及；提到；查阅
booth	n. 货摊；公用电话亭
bookmark	n. 书签（等于bookmarker）；标记
walkman	n. 随身听（商标名称）
ha	int. 哈！（表示惊异，愉快，怀疑，胜利等） abbr. 一种元素(hahnium,原子序105) n. (Ha)人名；(德)哈；(日)巴 (姓)
culture	n. 文化，文明；修养；栽培 v. [细胞][微] 培养（等于cultivate）
burial	n. 埋葬；葬礼；弃绝 adj. 埋葬的
bored	adj. 无聊的；无趣的；烦人的 v. 使厌烦（bore的过去式）；烦扰
possess	v. 控制；使掌握；持有；迷住；拥有，具备
ease	v. 减轻，缓和；使安心 n. 轻松，舒适；安逸，悠闲
gardening	n. 园艺；园林工人的工作
whatever	adj. 不管什么样的 pron. 无论什么；诸如此类 conj. 无论什么
drawback	n. 缺点，不利条件；退税
database	n. 数据库，资料库
poisonous	adj. 有毒的；恶毒的；讨厌的
throat	n. 喉咙；嗓子，嗓音；窄路 vt. 开沟于；用喉音说
wise	adj. 明智的；聪明的；博学的 v. 使知道；教导 n. (Wise)人名；(英)怀斯
importance	n. 价值；重要；重大；傲慢
Baby	n. 婴儿，婴孩；孩子气的人 v. 纵容，娇纵；把……当婴儿般对待 adj. 婴儿的；幼小的
hunter	n. 猎人；猎犬；搜寻者
acid	n. 酸；<俚>迷幻药 adj. 酸的；讽刺的；刻薄的
signature	n. 署名；签名；信号
board	n. 董事会；木板；甲板；膳食 v. 上（飞机、车、船等）；用板盖上；给提供膳宿
November	n. 十一月
accelerate	v. 使……加快；使……增速
cow	n. 奶牛，母牛；母兽 v. 威胁，恐吓
motor	n. 发动机，马达；汽车 adj. 汽车的；机动的 v. 乘汽车
birth	n. 出生；血统，出身；起源
wife	n. 妻子，已婚妇女；夫人
totally	adv. 完全地
situation	n. 情况；形势；处境；位置
winter	n. 冬季；年岁；萧条期 v. 过冬 adj. 冬天的；越冬的
apparent	adj. 显然的；表面上的
picnic	n. 野餐 v. 去野餐
carbon	n. [化学] 碳；碳棒；复写纸 adj. 碳的；碳处理的
proud	adj. 自豪的；得意的；自负的 n. (Proud)人名；(英)普劳德
Italy	n. 意大利（欧洲南部国家）
energy	n. [物] 能量；精力；活力；精神
lifetime	n. 一生；寿命；终生；使用期 adj. 一生的；终身的
entry	n. 进入；入口；条目；登记；报关手续；对土地的侵占
general	adj. 一般的，普通的；综合的；大体的 n. 一般；将军，上将；常规
bean	n. 豆；嘴峰；毫无价值的东西 v. 击…的头部
such	adj. 这样的，如此的 n. (Such)人名；(英)萨奇；(德)祖赫
instruct	v. 指导；通知；命令；教授
amusement	n. 消遣，娱乐；乐趣
afterward	adv. 以后，后来
defense	n. 防卫，防护；防御措施；防守 vt. 谋划抵御
fellow	n. 家伙；朋友；同事；会员 adj. 同伴的，同事的；同道的 vt. 使…与另一个对等；使…与另一个匹敌
accumulate	v. 累积；积聚
opera	n. 歌剧；歌剧院；歌剧团
phrase	n. 短语, 习语, 措辞, 乐句 v. 措词, 将(乐曲)分成乐句
cheap	adj. 便宜的；小气的；不值钱的 adv. 便宜地
deer	n. 鹿
internet	n. 因特网
course	n. 科目；课程；过程；进程；道路；路线，航向；一道菜 v. 追赶；跑过
glare	n. 刺眼；耀眼的光；受公众注目 v. 瞪眼表示
walk	n. 步行，走；散步 v. 散步；走过
weep	v. 哭泣；流泪；哀悼；滴落；渗出液体 n. 哭泣；眼泪；滴下
brilliant	adj. 灿烂的，闪耀的；杰出的；有才气的；精彩的，绝妙的
radioactive	adj. [核] 放射性的；有辐射的
wave	v. 波动；起伏；挥手示意；摇动；呈波形 n. 波动；波浪；高潮；挥手示意；卷曲
tomb	n. 坟墓；死亡 vt. 埋葬
seize	v. 抓住；夺取；理解；逮捕
design	v. 设计；计划；构思 n. 设计；图案
small	adj. 少的，小的；微弱的；几乎没有的；不重要的；幼小的 adv. 小小地；卑鄙地 n. 小件物品；矮小的人
heat	n. 高温；压力；热度；热烈 v. 使激动；把…加热
junk	n. 垃圾，废物；舢板
sorrow	n. 悲伤；懊悔；伤心事 v. 懊悔；遗憾；感到悲伤
bungalow	n. 平房；小屋
technology	n. 技术；工艺；术语
hardly	adv. 几乎不，简直不；刚刚
fee	n. 费用；酬金；小费 v. 付费给……
promise	n. 许诺，允诺；希望 v. 允诺，许诺；给人以…的指望或希望
mass	n. 块，团；群众，民众；大量，众多；质量 adj. 群众的，民众的；大规模的，集中的 v. 聚集起来，聚集
settle	v. 解决；定居；沉淀；下陷 n. 有背长椅
competitor	n. 竞争者，对手
chapter	n. 章，回；（俱乐部、协会等的）分会；人生或历史上的重要时期 vt. 把…分成章节
electricity	n. 电力；电流；强烈的紧张情绪
sudden	adj. 突然的，意外的；快速的 n. 突然发生的事
supreme	adj. 最高的；至高的；最重要的 n. 至高；霸权
eyewitness	n. 目击者；见证人
information	n. 信息，资料；知识；情报；通知
queue	n. 队列；长队；辫子 v. 排队；排队等候
candy	v. 用糖煮；使结晶为砂糖；美化 n. 糖果（等于sweets）；冰糖（等于sugar candy，rock candy）；毒品 adj. 新潮的（服饰）；甜言蜜语的
sleep	v. 睡，睡觉 n. 睡眠
act	v. 扮演；装作，举动像 n. 行为，行动；法令，法案；（戏剧，歌剧的）一幕，段；装腔作势
belt	n. 带；腰带；地带 v. 用带子系住；用皮带抽打
widespread	adj. 普遍的，广泛的；分布广的
study	n. 学习，研究；课题；书房；学问 v. 学习；考虑；攻读；细察
advantage	n. 优势；利益；有利条件 v. 获利
abnormal	adj. 反常的，不规则的；变态的
output	n. 输出，输出量；产量；出产 v. 输出
headmaster	n. 校长
sport	n. 运动；游戏；娱乐；运动会；玩笑 v. 游戏 adj. 运动的
admirable	adj. 令人钦佩的；极好的；值得赞扬的
dash	n. 破折号；冲撞 v. 使…破灭；猛撞；泼溅
thirteen	n. 十三；十三岁；十三个 num. 十三 adj. 十三的；十三个的
ambition	n. 野心，雄心；抱负，志向 v. 追求；有…野心
enter	v. 进入；开始；参加 n. [计] 输入；回车
able	adj. 能；[经管] 有能力的；能干的 n. (Able)人名；(伊朗)阿布勒；(英)埃布尔
severe	adj. 严峻的；严厉的；剧烈的；苛刻的
sharpener	n. 卷笔刀；[机] 磨具；研磨者
dream	v. 梦想；做梦，梦见；想到 n. 梦想，愿望；梦 adj. 梦的；理想的；不切实际的
bookshelf	n. 书架
analyze	v. 对…进行分析，分解（等于analyse）
woman	n. 妇女；女性；成年女子
extraordinary	adj. 非凡的；特别的；离奇的；临时的；特派的
outcome	n. 结果，结局；成果
yoghurt	n. 酸奶（等于yoghourt）；酸乳酪
make	v. 使得；进行；布置，准备，整理；制造；认为；获得；形成；安排；引起；构成 n. 制造；构造；性情
only	adv. 只，仅仅；不料 adj. 唯一的，仅有的；最合适的 conj. 但是；不过；可是
title	n. 冠军；标题；头衔；权利；字幕 v. 加标题于；赋予头衔；把…称为 adj. 冠军的；标题的；头衔的
card	n. 卡片；纸牌；明信片 v. 记于卡片上
spell	v. 拼，拼写；意味着；招致；拼成；迷住；轮值 n. 符咒；一段时间；魅力
win	v. 赢得；在…中获胜；劝诱 n. 赢；胜利
Australian	adj. 澳大利亚的，澳大利亚人的 n. 澳大利亚人
champion	n. 冠军；拥护者；战士 v. 支持；拥护 adj. 优胜的；第一流的
clarify	v. 澄清；阐明
comedy	n. 喜剧；喜剧性；有趣的事情
biography	n. 传记；档案；个人简介
clock	n. 时钟；计时器 v. 记录；记时
employ	v. 使用，采用；雇用；使忙于，使从事于 n. 使用；雇用
sixth	n. 月的第六日，（与the连用的）第六个；六分之一 adj. （与 the 连用）第六的，第六个的；六分之一的
injure	v. 伤害，损害
period	n. 周期，期间；时期；月经；课时；（语法学）句点，句号 adj. 某一时代的
excuse	n. 借口；理由 v. 原谅；为…申辩；给…免去
prayer	n. 祈祷，祷告；恳求；祈祷文
fork	n. 叉；餐叉；耙 v. 叉起；使成叉状
greet	v. 欢迎，迎接；致敬，致意；映入眼帘 n. (Greet)人名；(英)格里特
pray	v. 祈祷；恳求；央求 n. (Pray)人名；(匈)普劳伊；(英)普雷
brown	adj. 棕色的，褐色的；太阳晒黑的 v. 变成褐色 n. 褐色，棕色
burden	n. 负担；责任；船的载货量 v. 使负担；烦扰；装货于
civilization	n. 文明；文化
rate	n. 比率，率；速度；价格；等级 v. 认为；估价；责骂
system	n. 制度，体制；系统；方法
advertise	v. 通知；为…做广告；使突出
metal	n. 金属；合金 v. 以金属覆盖 adj. 金属制的
forgive	v. 原谅；免除（债务、义务等）
fat	adj. 肥的，胖的；油腻的；丰满的 n. 脂肪，肥肉 v. 养肥；在…中加入脂肪
go	v. 走；达到；运转；趋于 n. 去；进行；尝试
collection	n. 采集，聚集；[税收] 征收；收藏品；募捐
rich	adj. 富有的；肥沃的；昂贵的 n. (Rich)人名；(丹)里克；(捷)里赫；(英、西)里奇；(葡、法)里什
underwear	n. 内衣物
choke	v. 呛；使窒息；阻塞；抑制；扑灭 n. 窒息；噎；[动力] 阻气门
oh	int. 哦；哎呀（表示惊讶或恐惧等）
sixteenth	num. 第十六；十六分之一 adj. 第十六的；十六分之一的
elder	n. 老人；长辈；年长者；父辈 adj. 年长的；年龄较大的；资格老的
beauty	n. 美；美丽；美人；美好的东西
shy	adj. 害羞的；畏缩的，胆怯的 v. 投；畏缩；惊退；厌恶 n. 投掷；惊跳
existence	n. 存在，实在；生存，生活；存在物，实在物
run	v. 经营；奔跑；运转 n. 奔跑；赛跑；趋向；奔跑的路程
geometry	n. 几何学
living	adj. 活的；现存的；活跃的；逼真的 n. 生活；生存；生计 v. 生活；居住（live的ing形式）；度过
carriage	n. 运输；运费；四轮马车；举止；客车厢
chain	n. 链；束缚；枷锁 v. 束缚；囚禁；用铁链锁住
sweater	n. 毛线衣，运动衫；大量出汗的人，发汗剂
Lost	adj. 失去的；丧失的；迷惑的 v. 遗失（lose的过去分词）；失败
careless	adj. 粗心的；无忧无虑的；淡漠的 n. (Careless)人名；(英)凯尔利斯
river	n. 河，江
routine	n. [计] 程序；日常工作；例行公事 adj. 日常的；例行的
gymnastics	n. 体操；体育；体操运动
storage	n. 存储；仓库；贮藏所
within	prep. 在…之内 adv. 在内部 n. 里面
queen	n. 女王，王后；（纸牌中的）皇后；（蜜蜂等的）蜂王 v. 使…成为女王或王后
wheat	n. 小麦；小麦色
number	n. 数；（杂志等的）期；号码；数字；算术 v. 计入；总数达到
palace	n. 宫殿；宅邸；豪华住宅
childhood	n. 童年时期；幼年时代
violate	v. 违反；侵犯，妨碍；亵渎
tale	n. 故事；传说；叙述；流言蜚语
society	n. 社会；交往；社团；社交界
restrict	v. 限制；约束；限定
speech	n. 演讲；讲话；[语] 语音；演说
harvest	n. 收获；产量；结果 v. 收割；得到
recorder	n. 录音机；记录器；记录员；八孔直笛
be	v. 是； 有，存在； 做，成为； 发生 n. (Be)人名；(缅)拜；(日)部(姓)；(朝)培；(中非)贝
son	n. 儿子；孩子（对年轻人的称呼）；男性后裔
attitude	n. 态度；看法；意见；姿势
AD	n. 公元；广告（ad）
altitude	n. 高地；高度；[数] 顶垂线；（等级和地位等的）高级；海拔
everything	pron. 每件事物；最重要的东西；（有关的）一切；万事
upper	adj. 上面的，上部的；较高的 n. (Upper)人名；(英)厄珀
trunk	n. 树干；躯干；象鼻；汽车车尾的行李箱 vt. 把…放入旅行箱内 adj. 干线的；躯干的；箱子的
other	adj. 其他的，另外的 pron. 另外一个
tram	n. 电车轨道；煤车 v. 用煤车运载
debate	v. 辩论，争论，讨论 n. 辩论；辩论会
sell	v. 销售；推销；出卖；欺骗 n. 销售；失望；推销术
belief	n. 相信，信赖；信仰；教义
bookcase	n. [家具] 书柜，书架
ninth	num. 第九 adj. 第九的；九分之一的 n. 九分之一
hardworking	adj. 努力工作的；不辞辛劳的，苦干的 v. 努力工作（hardwork的ing形式）
unrest	n. 不安；动荡的局面；不安的状态
prejudice	n. 偏见；侵害 v. 损害；使有偏见
dial	n. 转盘；刻度盘；钟面 v. 拨号
variety	n. 多样；种类；杂耍；变化，多样化
wipe	v. 擦；消除；涂上 n. 擦拭；用力打
peach	n. 桃子；桃树；桃红色；受人喜欢的人（或物） adj. 桃色的；用桃子制成的 v. 告密
third	num. 第三；三分之一 adj. 第三的；三分之一的
tube	n. 管；电子管；隧道；电视机 v. 使成管状；把…装管；用管输送
delighted	adj. 高兴的；欣喜的 v. 使…兴高采烈；感到快乐（delight的过去分词）
why	int. 哎呀！什么？ adv. 为什么
control	n. 控制；管理；抑制；操纵装置 v. 控制；管理；抑制
Saturday	n. 星期六
alley	n. 小巷；小路；小径
home	n. 家，住宅；产地；家乡；避难所 adv. 在家，回家；深入地 adj. 国内的，家庭的；有效的 v. 归巢，回家
smog	n. 烟雾
survive	v. 幸存；生还；幸免于；比活得长
stewardess	n. 女管家；女干事；女服务员
snow	n. 雪，积雪；下雪 v. 降雪
cool	adj. 凉爽的；冷静的；出色的 v. 使…冷却；使…平静下来 n. 凉爽；凉爽的空气 adv. 冷静地
useless	adj. 无用的；无效的
secure	adj. 安全的；无虑的；有把握的；稳当的 v. 保护；弄到；招致；缚住
pipe	n. 管；烟斗；笛 v. 吹笛；尖叫
minibus	n. 面包车（等于microbus）；小型公共汽车；中客车 vi. 乘中客车
me	pron. 我（宾格） n. 自我；极端自私的人；自我的一部分
arrival	n. 到来；到达；到达者
conservative	adj. 保守的 n. 保守派，守旧者
however	adv. 无论如何；不管怎样（接副词或形容词）；然而；可是 conj. 无论以何种方式; 不管怎样
mature	adj. 成熟的；充分考虑的；到期的；成年人的 v. 成熟；到期
guide	n. 指南；向导；入门书 v. 引导；带领；操纵
traffic	n. 交通；运输；贸易；[通信] 通信量 v. 用…作交换；在…通行
block	n. 块；街区；大厦；障碍物 v. 阻止；阻塞；限制；封盖 adj. 成批的，大块的；交通堵塞的
happy	adj. 幸福的；高兴的；巧妙的 n. (Happy)人名；(英、瑞典、喀)哈皮
elect	adj. 选出的；当选的；卓越的 n. 被选的人；特殊阶层；上帝的选民 v. 选举；选择；推选
August	adj. 威严的；令人敬畏的 n. 八月（简写为Aug）
past	n. 过去；往事 adj. 过去的；结束的 prep. 越过；晚于 adv. 过；经过
saying	n. 话；谚语；言论 v. 说（say的ing形式）
hello	int. 喂；哈罗 n. 表示问候， 惊奇或唤起注意时的用语
repeat	v. 重复；复制；背诵 n. 重复；副本
separately	adv. 分别地；分离地；个别地
cave	v. 使凹陷，使塌落；在…挖洞穴 n. 洞穴，窑洞
urge	v. 力劝，催促；驱策，推进 n. 强烈的欲望，迫切要求；推动力
whistle	n. 口哨；汽笛；呼啸声 v. 吹口哨；鸣汽笛
instruction	n. 指令，命令；指示；教导；用法说明
postcard	n. 明信片
civil	adj. 公民的；民间的；文职的；有礼貌的；根据民法的 n. (Civil)人名；(土)吉维尔；(法)西维尔
knowledge	n. 知识，学问；知道，认识；学科
fantasy	n. 幻想；白日梦；幻觉 adj. 虚幻的 v. 空想；想像
airline	n. 航空公司；航线 adj. 航线的
till	n. [地理][水文] 冰碛；放钱的抽屉；备用现金 prep. 直到 conj. 直到为止 v. 耕种；犁
sixteen	adj. 十六的，十六个的 num. 十六
born	v. 出世（bear的过去分词） adj. 天生的 n. (Born)人名；(柬)邦；(英、西、俄、捷、德、瑞典、匈)博恩
actual	adj. 真实的，实际的；现行的，目前的
wage	v. 进行；发动；从事 n. 工资；代价；报偿
aeroplane	n. 飞机（等于airplane）
word	n. [语] 单词；话语；消息；诺言；命令 v. 用言辞表达
significance	n. 意义；重要性；意思
quantity	n. 量，数量；大量；总量
shock	n. 休克；震惊；震动；打击；禾束堆 v. 使休克；使震惊；使震动；使受电击；把…堆成禾束堆 adj. 浓密的；蓬乱的
recognise	v. 认出；承认，认可；识别
twice	adv. 两次；两倍
special	n. 特使，特派人员；特刊；特色菜；专车；特价商品 adj. 特别的；专门的，专用的
major	adj. 主要的；重要的；主修的；较多的 n. [人类] 成年人；主修科目；陆军少校 v. 主修
minimum	n. 最小值；最低限度；最小化；最小量 adj. 最小的；最低的
earthquake	n. 地震；大动荡
troublesome	adj. 麻烦的；讨厌的；使人苦恼的
skillful	adj. 熟练的；巧妙的
away	adv. 离去，离开；在远处
anger	n. 怒，愤怒；忿怒 v. 使发怒，激怒；恼火
spade	n. 铁锹，铲子 v. 铲；把……弄实抹平
section	n. 截面；部分；部门；地区；章节 v. 被切割成片；被分成部分
railway	n. （英）铁路；轨道；铁道部门 vi. 乘火车旅行
comment	n. 评论；意见；批评 v. 发表评论；发表意见
salute	n. 致敬，欢迎；敬礼 v. 行礼致敬，欢迎
part	n. 部分；角色；零件；一些；片段 v. 分离；分配；分开 adv. 部分地 adj. 部分的
hate	v. 憎恨；厌恶；遗憾 n. 憎恨；反感
thirsty	adj. 口渴的，口干的；渴望的，热望的
enterprise	n. 企业；事业；进取心；事业心
freeze	v. 冻结；冷冻；僵硬 n. 冻结；凝固
candle	n. 蜡烛；烛光；烛形物 v. 对着光检查
campaign	v. 作战；参加竞选；参加活动 n. 运动；活动；战役
vast	adj. 广阔的；巨大的；大量的；巨额的 n. 浩瀚；广阔无垠的空间
maple	n. 枫树；淡棕色
benefit	n. 利益，好处；救济金 v. 有益于，对…有益
neither	conj. 也不；既不 adv. 两个都不；既不……也不 adj. 两者都不的 pron. 两者都不
sword	n. 刀，剑；武力，战争
desire	n. 欲望；要求，心愿；性欲 v. 想要；要求；希望得到…
relief	n. 救济；减轻，解除；安慰；浮雕
catch	v. 赶上；抓住；感染；了解 n. 捕捉；捕获物；窗钩
consult	v. 查阅；商量；向…请教
preserve	v. 保存；保护；维持；腌；禁猎 n. 保护区；禁猎地；加工成的食品
next	adv. 然后；下次；其次 adj. 下一个的；其次的；贴近的 n. 下一个 prep. 靠近；居于…之后
numb	v. 使麻木；使发愣；使失去感觉 adj. 麻木的；发愣的
one	pron. 一个人；任何人 adj. 一的；唯一的 n. 一 num. 一；一个
shoe	n. 鞋；蹄铁；外胎 v. 给……穿上鞋；穿……鞋
so	adv. 如此，这么；确是如此 conj. 所以；因此 pron. 这样 n. (So)人名；(柬)索
husband	v. 节约地使用（或管理） n. 丈夫
occur	v. 发生；出现；存在
prescription	n. 药方；指示；惯例 adj. 凭处方方可购买的
spoonful	n. 一匙；一匙的量
mankind	n. 人类；男性
slip	v. 滑动；滑倒；犯错；失足；减退 n. 滑，滑倒；片，纸片；错误；下跌；事故 adj. 滑动的；有活结的；活络的 abbr. 串行线路接口协议，是旧式的协议（Serial Line Interface Protocol）
eastern	adj. 东方的；朝东的；东洋的 n. 东方人；（美国）东部地区的人
thought	n. 思想；思考；想法；关心 v. 想，思考；认为（think的过去式和过去分词）
cattle	n. 牛；牲畜（骂人的话）；家畜；无价值的人
dumpling	n. 饺子，汤团；面团布丁
accountant	n. 会计师；会计人员
path	n. 道路；小路；轨道
veal	n. 小牛（等于vealer）；小牛肉
initial	adj. 最初的；字首的 v. 用姓名的首字母签名 n. 词首大写字母
medium	adj. 中间的，中等的；半生熟的 n. 方法；媒体；媒介；中间物
beat	v. 打；打败 n. 拍子；敲击；有规律的一连串敲打 adj. 筋疲力尽的；疲惫不堪的
background	n. 背景；隐蔽的位置 v. 作…的背景 adj. 背景的；发布背景材料的
caution	n. 小心，谨慎；警告，警示 v. 警告
beef	n. 牛肉；肌肉；食用牛；牢骚 v. 抱怨，告发；发牢骚
Belgium	n. 比利时（西欧国家，首都布鲁塞尔Brussels）
stare	v. 凝视，盯着看；显眼 n. 凝视；注视
mistake	n. 错误；误会；过失 v. 弄错；误解
freedom	n. 自由，自主；直率
fountain	n. 喷泉，泉水；源泉
bakery	n. 面包店
juice	n. （水果）汁，液；果汁
similar	adj. 相似的 n. 类似物
pond	vt. 筑成池塘 vi. 筑成池塘 n. 池塘
swim	v. 游泳；漂浮；浸；眩晕 n. 游泳；漂浮；眩晕 adj. 游泳时穿戴的
tonight	adv. 在今晚 n. 今晚
apart	adv. 相距；与众不同地；分离着 adj. 分离的；与众不同的
fly	v. 飞；驾驶飞机；飘扬 n. 飞行；苍蝇；两翼昆虫 adj. 敏捷的
undertake	v. 承担，保证；从事；同意；试图
punctuate	v. 不时打断；强调；加标点于
brick	n. 砖，砖块；砖形物；心肠好的人 v. 用砖砌 adj. 用砖做的；似砖的
dictionary	n. 字典；词典
carrier	n. [化学] 载体；运送者；带菌者；货架
quake	v. 震动；颤抖 n. 地震；颤抖
medal	n. 勋章，奖章；纪念章
theatre	n. 电影院，戏院；戏剧；阶梯式讲堂
shot	n. 发射；炮弹；射手；镜头 adj. 用尽的；破旧的；杂色的，闪光的 v. 射击（shoot的过去式和过去分词）
roof	n. 屋顶；最高处，顶部；最高限度 v. 给…盖屋顶，覆盖
harmful	adj. 有害的；能造成损害的
socialist	n. 社会主义者；社会党党员 adj. 社会主义的
ring	v. 按铃；敲钟；回响；成环形 n. 戒指；铃声，钟声；拳击场；环形物
supermarket	n. 超级市场；自助售货商店
pattern	n. 模式；图案；样品 v. 模仿；以图案装饰
kite	n. 风筝 v. 使用空头支票；像风筝一样飞；轻快地移动
remark	n. 注意；言辞 v. 评论；觉察
greedy	adj. 贪婪的；贪吃的；渴望的
savage	adj. 野蛮的；残酷的；狂怒的；荒凉的 n. 未开化的人；粗鲁的人；残暴成性的人 v. 乱咬；粗暴的对待
novelist	n. 小说家
close	adj. 紧密的；亲密的；亲近的 v. 关；结束；使靠近 adv. 紧密地 n. 结束
northwest	adj. 西北的；向西北的；来自西北的 n. 西北 adv. 在西北；向西北；来自西北
not	adv. 表示否定，不 n. “非”（计算机中逻辑运算的一种）
grateful	adj. 感谢的；令人愉快的，宜人的
unknown	adj. 未知的；陌生的，默默无闻的 n. 未知数；未知的事物，默默无闻的人
pump	v. 打气；用抽水机抽… n. 泵，抽水机；打气筒
publicly	adv. 公然地；以公众名义
fortunate	adj. 幸运的；侥幸的；吉祥的；带来幸运的
assist	n. 帮助；助攻 v. 参加；出席
weak	adj. [经] 疲软的；虚弱的；无力的；不牢固的
accommodation	n. 住处，膳宿；调节；和解；预订铺位
kettle	n. 壶；[化工] 釜；罐；鼓
Easter	n. 复活节
result	n. 结果；成绩；答案；比赛结果 v. 结果；导致；产生
Japanese	adj. 日本（人）的；日语的 n. 日本人；日语
simple	adj. 简单的；单纯的；天真的 n. 笨蛋；愚蠢的行为；出身低微者
president	n. 总统；董事长；校长；主席
mark	n. 标志；马克；符号；痕迹；分数 v. 作记号
tournament	n. 锦标赛，联赛；比赛
musical	adj. 音乐的；悦耳的 n. 音乐片
invite	v. 邀请，招待；招致 n. 邀请
merely	adv. 仅仅，只不过；只是
punctuation	n. 标点；标点符号
stay	v. 停留；坚持；暂住；停下 n. 逗留；停止；支柱
examine	v. 检查；调查； 检测；考试
difference	n. 差异；不同；争执
than	conj. 比（用于形容词、副词的比较级之后）；除…外（用于other等之后）；与其…（用于 rather等之后）；一…就（用于 no sooner等之后） prep. 比；超过 n. (Than)人名；(老、柬、德)坦；(缅)丹
poster	n. 海报，广告；招贴
rice	n. 稻；米饭 v. 把…捣成米糊状
hooray	vi. 呼万岁 vt. 呼万岁 n. 万岁 int. 万岁
hay	n. 干草 v. 把晒干
construction	n. 建设；建筑物；解释；造句
art	n. 艺术；美术；艺术品 adj. 艺术的；艺术品的 v. 是（be的变体）
crossing	n. 十字路口；杂交；横渡；横道 v. 横越（cross的现在分词）
whisper	n. 私语；谣传；飒飒的声音 v. 耳语；密谈；飒飒地响
consensus	n. 一致；舆论；合意
secretary	n. 秘书；书记；部长；大臣
midday	n. 中午；正午 adj. 正午的
every	adj. 每一的，每个的；每隔…的 n. (Every)人名；(英)埃夫里
until	conj. 在…以前；直到…时 prep. 在…以前；到…为止
gay	adj. 快乐的；放荡的；艳丽的 n. 同性恋者
virtue	n. 美德；优点；贞操；功效
glance	n. 一瞥；一滑；闪光 v. 扫视，匆匆一看；反光；瞥闪，瞥见
conflict	n. 冲突，矛盾；斗争；争执 v. 冲突，抵触；争执；战斗
telephone	n. （美）电话；电话机；电话耳机 v. 打电话
bell	n. 铃，钟；钟声，铃声；钟状物 v. 装钟于，系铃于
cold	adj. 寒冷的；冷淡的，不热情的；失去知觉的 n. 寒冷；感冒 adv. 完全地
dance	n. 舞蹈；舞会；舞曲 v. 跳舞；跳跃；飘扬 adj. 舞蹈的；用于跳舞的
bank	n. 银行；岸；浅滩；储库 v. 将…存入银行；倾斜转弯
thread	n. 线；螺纹；思路；衣服；线状物；玻璃纤维；路线 v. 穿过；穿线于；使交织
skilled	adj. 熟练的；有技能的；需要技能的
boxing	n. 拳击；装箱；围模；做箱的材料 v. 将…装入盒中（box的ing形式）
air	n. 空气，大气；天空；样子；曲调 v. 使通风，晾干；夸耀
exist	v. 存在；生存；生活；继续存在
tobacco	n. 烟草，烟叶；烟草制品；抽烟
snatch	n. 抢夺；抓举；小量 v. 夺得；抽空做；及时救助
three	n. 三，三个 num. 三 adj. 三的，三个的
double	n. 两倍；双精度型 adj. 双重的；两倍的 v. 加倍，加倍努力；快步走 adv. 双重地；两倍地；弓身地
invention	n. 发明；发明物；虚构；发明才能
printing	n. 印刷；印刷术
worthless	adj. 无价值的；不值钱的；卑微的
tortoise	n. 龟，[脊椎] 乌龟（等于testudo）；迟缓的人
because	conj. 因为
dirty	adj. 下流的，卑鄙的；肮脏的；恶劣的；暗淡的 v. 弄脏
supply	n. 供给，补给；供应品 v. 供给，提供；补充
inform	v. 通知；告诉；报告
responsibility	n. 责任，职责；义务
class	n. 阶级；班级；种类；班；等级 v. 分类；把…分等级；把…归入某等级，把…看作（或分类、归类）；把…编入某一班级 adj. 极好的；很好的，优秀的，出色的
frontier	n. 前沿；边界；国境 adj. 边界的；开拓的
dine	v. 进餐，用餐 n. (Dine)人名；(意、葡)迪内；(英)戴恩；(法)迪纳
life	n. 生活，生存；寿命
child	n. 儿童，小孩，孩子；产物；子孙；幼稚的人；弟子
UN	abbr. 联合国（United Nations）；硝酸铀铣（Uranyl Nitrate）
overweight	adj. 超重的；过重的 vt. 使负担过重 n. 超重
important	adj. 重要的，重大的；有地位的；有权力的
fist	n. 拳，拳头；〈口〉笔迹；掌握；[印]指标参见号 vt. 紧握；握成拳；用拳打
factory	n. 工厂；制造厂；代理店
division	n. [数] 除法；部门；分配；分割；师（军队）；赛区
wrist	n. 手腕；腕关节 vt. 用腕力移动
hundred	n. 一百；许多 adj. 一百的；许多的 num. 百；百个
chat	v. 聊天；闲谈 n. 聊天；闲谈
bring	v. 带来；促使；引起；使某人处于某种情况或境地 n. (Bring)人名；(英、瑞典)布林
amaze	v. 使吃惊
village	n. 村庄；村民；（动物的）群落
journalist	n. 新闻工作者；报人；记日志者
symbol	n. 象征；符号；标志
spirit	n. 精神；心灵；情绪；志气；烈酒 v. 鼓励；鼓舞；诱拐
kick	v. 踢；反冲，朝后座 n. 踢；反冲，后座力
ice	n. 冰；冰淇淋；矜持；（俚）钻石 v. 冰镇；结冰 adj. 冰的
distinguish	v. 区分；辨别；使杰出，使表现突出
gesture	n. 姿态；手势 v. 作手势；用动作示意
Tokyo	n. 东京（日本首都）
puzzled	adj. 困惑的；茫然的；搞糊涂的
respond	v. 回答；作出反应；承担责任 n. 应答；唱和
latest	adv. 最迟地；最后地 n. 最新的事物 adj. 最新的，最近的；最迟的，最后的
pride	n. 自豪；骄傲；自尊心 v. 使得意，以…自豪
UK	abbr. 联合王国（United Kingdom） n. 英国
wind	n. 风；呼吸；气味；卷绕 v. 缠绕；上发条；使弯曲；吹号角；绕住或缠住某人
split	v. 分离；使分离；劈开；离开；分解 n. 劈开；裂缝 adj. 劈开的
and	conj. 和，与；就；而且；但是；然后 n. (And)人名；(土、瑞典)安德
handsome	adj. （男子）英俊的；可观的；大方的，慷慨的；健美而端庄的
left	adj. 左边的；左派的；剩下的 adv. 在左面 n. 左边；左派；激进分子 v. 离开（leave的过去式）
storm	n. 暴风雨；大动荡 v. 起风暴；横冲直撞；狂怒咆哮
shirt	n. 衬衫；汗衫，内衣
seventeen	n. 十七，十七个 adj. 十七岁的；十七的，十七个的 num. 十七
unhealthy	adj. 不健康的；危险的；有害身心健康的
lap	n. 一圈；膝盖；下摆；山坳 v. 使重叠；拍打；包围
neighbourhood	n. 邻近；周围；邻居关系；附近一带
used	adj. 习惯的；二手的，使用过的 v. 用（use的过去式）；（used to）过去常做
windy	adj. 多风的，有风的；腹胀的；吹牛的
murder	v. 谋杀，凶杀 n. 谋杀，凶杀
nation	n. 国家；民族；国民
cake	n. 蛋糕；块状物；利益总额 v. 使结块
often	adv. 常常，时常
accompany	v. 陪伴，伴随；伴奏
subscribe	v. 订阅；捐款；认购；赞成；签署
relation	n. 关系；叙述；故事；亲属关系
anywhere	adv. 在任何地方；无论何处 n. 任何地方
dilemma	n. 困境；进退两难；两刀论法
beard	v. 公然反对；抓…的胡须 n. 胡须；颌毛
though	adv. 可是，虽然；不过；然而 conj. 虽然；尽管 prep. 但
bow	n. 弓；鞠躬；船首 v. 鞠躬；弯腰 adj. 弯曲的
many	pron. 许多；许多人 adj. 许多的 n. (Many)人名；(法)马尼
what	pron. 什么；多么；多少 adj. 什么；多么；何等 adv. 到什么程度，在哪一方面 int. 什么；多么
shooting	n. 射击；打猎；摄影；射门 v. 射击（shoot的ing形式）
government	n. 政府；政体；管辖
right	adj. 正确的；直接的；右方的 v. 复正；恢复平稳 n. 正确；右边；正义 adv. 正确地；恰当地；彻底地
cash	n. 现款，现金 v. 将…兑现；支付现款
chest	n. 胸，胸部；衣柜；箱子；金库
advise	v. 建议；劝告，忠告；通知；警告
sad	adj. 难过的；悲哀的，令人悲痛的；凄惨的，阴郁的（形容颜色）
another	adj. 又一，另一；另外的；不同的 pron. 另一个；又一个 prep. 另一个；另一个人
pole	n. 杆；极点；电极 v. 用竿支撑
average	n. 平均；平均数；海损 adj. 平均的；普通的；通常的 v. 算出…的平均数；将…平均分配；使…平衡
capital	n. 首都，省会；资金；大写字母；资本家 adj. 首都的；重要的；大写的
sit	v. 坐；位于 n. (Sit)人名；(东南亚国家华语)硕；(罗)西特
stain	v. 沾污；败坏；给…着色 n. 污点；瑕疵；着色剂
aluminium	adj. 铝的 n. 铝
conventional	adj. 符合习俗的，传统的；常见的；惯例的
prepare	v. 准备；使适合；装备；起草
elegant	adj. 高雅的，优雅的；讲究的；简炼的；简洁的
present	v. 提出；介绍；呈现；赠送 adj. 现在的；出席的 n. 现在；礼物；瞄准
bachelor	n. 学士；单身汉；（尚未交配的）小雄兽
religious	adj. 宗教的；虔诚的；严谨的；修道的 n. 修道士；尼姑
mailbox	n. 邮箱；邮筒
dizzy	adj. 晕眩的；使人头晕的；昏乱的；心不在焉的；愚蠢的 v. 使头晕眼花；使混乱；使茫然 n. (Dizzy)人名；(英)迪齐
chopsticks	n. 筷子
accustomed	adj. 习惯的；通常的；独有的 v. 使习惯于（accustom的过去分词）
ancient	adj. 古代的；古老的，过时的；年老的 n. 古代人；老人
acquire	v. 获得；取得；学到；捕获
regardless	adj. 不管的；不顾的；不注意的 adv. 不顾后果地；不管怎样，无论如何；不惜费用地
firefighter	n. 消防队员
pineapple	n. [园艺] 菠萝；[园艺] 凤梨 adj. 凤梨科的
impossible	adj. 不可能的；不可能存在的；难以忍受的；不真实的 n. 不可能；不可能的事
classmate	n. 同班同学
pop	abbr. 卖点广告（Point of Purchase）
contribute	v. 贡献，出力；投稿；捐献
license	n. 执照，许可证；特许 v. 许可；特许；发许可证给
peaceful	adj. 和平的，爱好和平的；平静的
probable	adj. 很可能的；可信的 n. 很可能的事；大有希望的候选者
admire	v. 钦佩；赞美
identity	n. 身份；同一性，一致；特性；恒等式
observe	v. 庆祝
profession	n. 职业，专业；声明，宣布，表白
with	prep. 用；随着；支持；和…在一起 n. (With)人名；(德、芬、丹、瑞典)维特
minister	n. 部长；大臣；牧师 v. 执行牧师职务；辅助或伺候某人
enough	adv. 足够地，充足地 n. 很多；充足 adj. 充足的 int. 够了！
cup	n. 杯子；奖杯；酒杯 v. 使成杯状；为…拔火罐
gy	abbr. 灰色（gray）；圭亚那（Guyana） n. 戈瑞
movement	n. 运动；活动；运转；乐章
ending	n. 结局；结尾
centigrade	adj. 摄氏的；[仪] 摄氏温度的；百分度的
ceremony	n. 典礼，仪式；礼节，礼仪；客套，虚礼
point	n. 要点；得分；标点；[机] 尖端 v. 指向；弄尖；加标点于
sniff	v. 嗅；嗤之以鼻 n. 吸，闻；嗤之以鼻；气味；以鼻吸气；吸气声
annoy	v. 骚扰；惹恼；打搅 n. 烦恼（等于annoyance）
architecture	n. 建筑学；建筑风格；建筑式样；架构
television	n. 电视，电视机；电视业
editor	n. 编者，编辑；社论撰写人；编辑装置
criminal	n. 罪犯 adj. 刑事的；犯罪的；罪恶的
dialogue	n. 对话；意见交换 vi. 对话 vt. 用对话表达
per	prep. 每；经；按照；每一 n. (Per)人名；(德、挪、丹、瑞典)佩尔
programme	n. 计划，规划；节目；程序 v. 编程序；制作节目
menu	n. 菜单
pancake	n. 薄烤饼；粉饼；平降（全称pancake landing） vi. 平坠着陆；平展 vt. 使平坠著陆；使平展
her	pron. 她（she的宾格）；她的（she的所有格）；她（指某个国家；一艘船） n. （法）埃尔（人名）
mist	n. 薄雾；视线模糊不清；模糊不清之物 v. 下雾；变模糊
pace	n. 一步；步速；步伐；速度 v. 踱步；缓慢而行
story	n. 故事；小说；新闻报道；来历；假话 vt. 用历史故事画装饰 vi. 说谎
regret	n. 遗憾；抱歉；悲叹 v. 后悔；惋惜；哀悼
grocer	n. 杂货店；食品商
celebration	n. 庆典，庆祝会；庆祝；颂扬
build	v. 建立；建筑 n. 构造；体形；体格
smoke	n. 烟；抽烟；无常的事物 v. 冒烟，吸烟；抽烟；弥漫
confuse	v. 使混乱；使困惑
cottage	n. 小屋；村舍；（农舍式的）小别墅
manage	v. 管理；经营；控制；设法
lovely	adj. 可爱的；令人愉快的；爱恋的；秀丽的，优美的 n. 美女；可爱的东西
rude	adj. 粗鲁的；无礼的；狂暴的；未开化的 n. (Rude)人名；(英、西、瑞典)鲁德；(法)吕德
nursing	n. 护理；看护；养育 v. 看护；养育（nurse的ing形式）
compensate	v. 补偿，赔偿；抵消
yourselves	pron. 你们自己；你们本人（yourself的复数）
always	adv. 永远，一直；总是；常常
origin	n. 起源；原点；出身；开端
distinction	n. 区别；差别；特性；荣誉、勋章
begin	v. 开始 n. (Begin)人名；(以、德)贝京；(英)贝让
garlic	n. 大蒜；蒜头
tailor	v. 剪裁；使合适 n. 裁缝
off	prep. 离开；脱落 adv. 切断；走开 adj. 远离的；空闲的
unit	n. 单位，单元；装置；[军] 部队；部件
allergic	adj. 对…过敏的；对…极讨厌的
finger	n. 手指；指针，指状物 v. 伸出；用手指拨弄
upstairs	adv. 在楼上，向楼上；上楼；往楼上 adj. 楼上的 n. 楼上
misunderstand	v. 误解；误会
cater	v. 投合，迎合；满足需要；提供饮食及服务 n. (Cater)人名；(英)凯特
riddle	v. 解谜；给出谜；充满于 n. 谜语；粗筛；谜一般的人、东西、事情等
huge	adj. 巨大的；庞大的；无限的 n. (Huge)人名；(英)休奇
centimetre	n. 厘米；公分
more	adv. 更多；此外；更大程度地 adj. 更多的；附加的 pron. 更多的数量 n. 更多
unable	adj. 不会的，不能的；[劳经] 无能力的；不能胜任的
telescope	v. 压缩；使套叠 n. 望远镜；缩叠式旅行袋
castle	n. 城堡；象棋中的车 v. 置…于城堡中；筑城堡防御
noisy	adj. 嘈杂的；喧闹的；聒噪的
which	pron. 哪/那一个；哪/那一些 adj. 哪一个；哪一些
equip	v. 装备，配备
rain	n. 雨；下雨；雨天；雨季 v. 下雨；降雨
hill	n. 小山；丘陵；斜坡；山冈
doctor	v. 修理；篡改，伪造；为…治病；授以博士学位 n. 医生；博士
incorrect	adj. 错误的，不正确的；不适当的；不真实的
help	v. 帮助；促进；治疗；补救 n. 帮助；补救办法；帮忙者；有益的东西
room	n. 房间；空间；余地；机会；房间里所有的人 v. 为…提供住处；租房，合住；投宿，住宿；留…住宿
park	n. 公园；[交] 停车场 v. 停放；放置；寄存
idiom	n. 成语，习语；土话
beneficial	adj. 有益的，有利的；可享利益的
incident	n. 事件，事变；插曲 adj. [光] 入射的；附带的；易发生的，伴随而来的
text	n. [计] 文本；课文；主题 v. 发短信
strength	n. 力量；力气；兵力；长处
their	pron. 他们的，她们的；它们的 n. (Their)人名；(英)蒂尔；(芬、瑞典)泰尔
material	adj. 重要的；物质的，实质性的；肉体的 n. 材料，原料；物资；布料
receipt	n. 收到；收据；收入 v. 收到
actor	n. 男演员；行动者；作用物
globe	n. 地球；地球仪；球体 vt. 使…成球形 vi. 成球状
chief	n. 首领；酋长；主要部分 adj. 首席的；主要的；主任的 adv. 主要地；首要地
politics	n. 政治，政治学；政治活动；政纲
heart	n. 心脏；感情；勇气；心形；要点 vt. 鼓励；铭记 vi. 结心
chew	n. 咀嚼；咀嚼物 v. 嚼碎，咀嚼
extension	n. 延长；延期；扩大；伸展；电话分机
botanical	adj. 植物学的 n. 植物性药材
lame	adj. 跛足的；僵痛的；不完全的；无说服力的；差劲的，蹩脚的 v. 变跛
rectangle	n. 矩形；长方形
thief	n. 小偷，贼
brand	v. 铭刻于，铭记；打烙印于；印…商标于 n. 商标，牌子；烙印
litter	n. 垃圾；轿，担架；一窝（动物的幼崽）；凌乱 v. 乱丢；给…垫褥草；把…弄得乱七八糟
sneaker	n. 运动鞋；卑鄙者；鬼鬼祟祟做事的人
abstract	n. 摘要；抽象；抽象的概念 adj. 抽象的；深奥的 v. 摘要；提取；使……抽象化；转移(注意力、兴趣等)；使心不在焉
nowadays	adv. 现今；时下 n. 当今
unimportant	adj. 不重要的；琐碎的
just	adv. 只是，仅仅；刚才，刚刚；正好，恰好；实在；刚要 adj. 公正的，合理的；正直的，正义的；正确的；公平的；应得的 n. (Just)人名；(英)贾斯特；(法)朱斯特；(德、匈、波、捷、挪)尤斯特；(西)胡斯特
acknowledge	v. 承认；答谢；报偿；告知已收到
enlarge	v. 扩大；放大；详述
Switzerland	n. 瑞士（欧洲国家）
conclusion	n. 结论；结局；推论
theirs	pron. 他们的；她们的；它们的
labourer	n. 劳动者；劳工
forbid	v. 禁止；不准；不允许；〈正式〉严禁
weekly	adj. 每周的；周刊的；一周一次的 n. 周刊 adv. 每周一次；逐周
skip	v. 跳跃；跳绳；遗漏；跳读 n. 跳跃；跳读
something	pron. 某事；某物 n. 重要的人；值得重视的事 adv. 非常；有点；大约 adj. 大约；有点象
themselves	pron. 他们自己；他们亲自
net	n. 网；网络；净利；实价 v. 编网 adj. 纯粹的；净余的
rail	n. 铁轨；扶手；横杆；围栏 v. 抱怨；责骂
interrupt	v. 中断；打断；插嘴；妨碍 n. 中断
case	n. 情况；实例；箱 v. 包围；把…装于容器中
bless	v. 祝福；保佑；赞美 n. (Bless)人名；(英、意、德、匈)布莱斯
shoot	v. 射击，射中；拍摄；发芽；使爆炸；给…注射 n. 射击；摄影；狩猎；急流
upward	adj. 向上的；上升的 adv. 向上
atmosphere	n. 气氛；大气；空气
consistent	adj. 始终如一的，一致的；坚持的
organization	n. 组织；机构；体制；团体
each	adj. 每；各自的 adv. 每个；各自 pron. 每个；各自
stone	n. 石头；结石；[宝] 宝石 adj. 石的，石制的 v. 向扔石块；用石头铺
afternoon	n. 午后，下午
loud	adj. 大声的，高声的；不断的；喧吵的 adv. 大声地，高声地，响亮地 n. (Loud)人名；(英)劳德
foot	n. 脚；英尺；步调；末尾 v. 步行；跳舞；总计
sunglasses	n. 太阳镜；凸透镜（sunglass的复数）
hilly	adj. 丘陵的；陡的；多小山的；多坡的 n. (Hilly)人名；(阿拉伯)希利
command	v. 命令，指挥；控制 n. 指挥，控制；命令；司令部
string	n. 线，弦，细绳；一串，一行
thus	adv. 因此；从而；这样；如此 conj. 因此 n. 乳香
percent	n. 百分比，百分率；部分；百分数 adj. 百分之…的 adv. 以百分之…地
banana	n. 香蕉；喜剧演员；大鹰钩鼻
thick	n. 最拥挤部分；活动最多部分；事物的粗大浓密部分 adj. 厚的；浓的；粗大的 adv. 密集地；浓浓地，厚厚地
far	adv. 很；遥远地；久远地；到很远的距离；到很深的程度 adj. 远的；久远的 n. 远方
astronaut	n. 宇航员，航天员；太空旅行者
much	adv. 非常，很 adj. 大量的 n. 许多，大量 pron. 许多，大量
security	n. 安全；保证；证券；抵押品 adj. 安全的；保安的；保密的
rigid	adj. 严格的；僵硬的，死板的；坚硬的；精确的
keeper	n. 监护人；饲养员；看守人；管理人
backward	adj. 向后的；反向的；发展迟缓的 adv. 向后地；相反地
uncle	n. 叔叔；伯父；伯伯；舅父；姨丈；姑父
reality	n. 现实；实际；真实
rot	n. 腐烂；腐败；腐坏 v. 腐烂；腐败；堕落 int. （表示厌恶、蔑视、烦恼等）胡说；糟了
receive	v. 收到；接待；接纳
bee	n. 蜜蜂，蜂；勤劳的人
appreciation	n. 欣赏，鉴别；增值；感谢
chairman	n. 主席，会长；董事长
swift	n. 褐雨燕 adj. 快的；迅速的；敏捷的；立刻的 adv. 迅速地
lavatory	n. 厕所，盥洗室
judge	v. 判断；审判 n. 法官；裁判员
tough	adj. 艰苦的，困难的；坚强的，不屈不挠的；坚韧的，牢固的；强壮的，结实的 n. 恶棍 v. 坚持；忍受，忍耐 adv. 强硬地，顽强地
biochemistry	n. 生物化学
dull	adj. 钝的；迟钝的；无趣的；呆滞的；阴暗的 v. 使迟钝；使阴暗；缓和 n. (Dull)人名；(罗、匈)杜尔；(柬)杜；(英)达尔
king	n. 国王；最有势力者；王棋 vi. 统治；做国王 vt. 立…为王 adj. 主要的，最重要的，最大的
crash	n. 撞碎；坠毁；破产；轰隆声；睡觉 v. 摔碎；坠落；发出隆隆声；(金融企业等)破产
church	n. 教堂；礼拜；教派 adj. 教会的；礼拜的 v. 领…到教堂接受宗教仪式
language	n. 语言；语言文字；表达能力
boundary	n. 边界；范围；分界线
cheat	v. 欺骗；骗取 n. 欺骗，作弊；骗子
cocoa	n. 可可粉；可可豆；可可饮料；深褐色
idea	n. 想法；主意；概念
climb	v. 爬；攀登；上升 n. 爬；攀登
upset	v. 使心烦；颠覆；扰乱 adj. 心烦的；混乱的；弄翻的 n. 混乱；翻倒；颠覆
Thursday	n. 星期四
performance	n. 性能；绩效；表演；执行；表现
appeal	v. 呼吁，恳求；上诉；诉诸，求助；有吸引力，迎合爱好；（体育比赛中）诉诸裁判 n. 呼吁，请求；吸引力，感染力；上诉；诉诸裁判
national	adj. 国家的；国民的；民族的；国立的 n. 国民
socket	n. 插座；窝，穴；牙槽 vt. 给…配插座
burglar	n. 夜贼，窃贼
owner	n. [经] 所有者；物主
grow	v. 发展；生长；渐渐变得… n. (Grow)人名；(英)格罗
beautiful	adj. 美丽的
fierce	adj. 凶猛的；猛烈的；暴躁的 n. (Fierce)人名；(英)菲尔斯
pedestrian	adj. 徒步的；缺乏想像力的 n. 行人；步行者
court	n. 法院；球场；朝廷；奉承 v. 招致（失败、危险等）；向…献殷勤；设法获得
badminton	n. 羽毛球
postbox	n. 邮箱
photo	n. 照片
onion	n. 洋葱；洋葱头
meat	n. 肉，肉类（食用）
Atlantic	n. 大西洋 adj. 大西洋的
voyage	n. 航行；航程；旅行记 v. 航行；航海
excellent	adj. 卓越的；极好的；杰出的
telegraph	n. [通信] 电报机，电报 v. 电汇；流露出；打电报给…
breakthrough	n. 突破；突破性进展
cause	n. 原因；事业；目标 v. 引起；使遭受
swap	n. 交换；交换之物 v. 与交换；以作交换
nervous	adj. 神经的；紧张不安的；强健有力的
thorough	adj. 彻底的；十分的；周密的
seal	n. 密封；印章；海豹；封条；标志 v. 密封；盖章
tissue	n. 组织；纸巾；薄纱；一套 v. 饰以薄纱；用化妆纸揩去
damp	v. 使潮湿；使阻尼；使沮丧，抑制 n. 潮湿，湿气 adj. 潮湿的
condemn	v. 谴责；判刑，定罪；声讨
yawn	n. 哈欠；裂口 v. 打哈欠；裂开
biology	n. （一个地区全部的）生物；生物学
announcement	n. 公告；宣告；发表；通告
punish	v. 惩罚；严厉对待；贪婪地吃喝
army	n. 陆军，军队
hunger	n. 饿，饥饿；渴望 v. 渴望；挨饿
businesswoman	n. 女商人
well	adv. 很好地；充分地；满意地；适当地 adj. 良好的；健康的；适宜的 n. 井；源泉 v. 涌出
airplane	n. 飞机
boss	n. 老板；首领；工头 v. 指挥，调遣；当…的领导
warm	adj. 温暖的；热情的 v. 同情；激动；变温暖 n. 取暖；加热
figure	n. 数字；人物；图形；价格；（人的）体形；画像 v. 计算；出现；扮演角色
condition	n. 条件；情况；环境；身份 v. 决定；使适应；使健康；以…为条件
bus	n. 公共汽车
works	n. 作品；工厂；工程结构
bargain	n. 交易；便宜货；契约 v. 讨价还价；议价；(谈价钱后)卖
Dynamic	adj. 动态的；动力的；动力学的；有活力的 n. 动态；动力
song	n. 歌曲；歌唱；诗歌；鸣声
goal	n. 目标；球门，得分数；终点 vi. 攻门，射门得分
grain	n. 粮食；颗粒；[作物] 谷物；纹理 v. 成谷粒
add	v. 加；增加；加起来；做加法 n. 加法，加法运算
premier	adj. 第一的；最初的 n. 总理，首相
starve	v. 饿死；挨饿；渴望
himself	pron. 他自己；他亲自，他本人
pie	n. 馅饼；饼图；爱说话的人 vt. 使杂乱
slave	n. 奴隶；从动装置 v. 苦干；拼命工作
December	n. 十二月
budget	n. 预算，预算费 v. 安排，预定；把…编入预算 adj. 廉价的
dinner	n. 晚餐，晚宴；宴会；正餐
patience	n. 耐性，耐心；忍耐，容忍
should	aux. 应该；就；可能；将要
mistaken	adj. 错误的；弄错的；被误解的 v. 弄错（mistake的过去分词）
adjust	v. 调整，使…适合；校准
possession	n. 拥有；财产；领地；自制；着迷
blanket	n. 毛毯，毯子；毯状物，覆盖层 adj. 总括的，全体的；没有限制的 v. 覆盖，掩盖；用毯覆盖
ashamed	adj. 惭愧的，感到难为情的；耻于……的
crowded	adj. 拥挤的；塞满的 v. 拥挤（crowd的过去分词）
long	n. 长时间；[语] 长音节；（服装的）长尺寸；长裤 adj. 长的；过长的；做多头的；长时间的；冗长的，长音 v. 渴望；热望 adv. 长期地；始终
review	n. 回顾；复习；评论；检讨；检阅 v. 回顾；检查；复审
shine	v. 发出光；反射光，闪耀；出类拔萃，表现突出；露出；照耀；显露；出众 n. 光亮，光泽；好天气；擦亮；晴天；擦皮鞋；鬼把戏或诡计
rid	v. 使摆脱；使去掉 n. (Rid)人名；(英)里德
learn	v. 学习；得知；认识到
disagreement	n. 不一致；争论；意见不同
lose	v. 浪费；使沉溺于；使迷路；遗失；错过 n. (Lose)人名；(英)洛斯；(德)洛泽
graduate	v. 授予…学位；分等级；标上刻度 n. 研究生；毕业生 adj. 毕业的；研究生的
everybody	pron. 每个人；人人
describe	v. 描述，形容；描绘
especially	adv. 特别；尤其；格外
Tuesday	n. 星期二
crossroads	n. 十字路口；交叉路口；聚会的中心地点（crossroad的复数形式）
soon	adv. 快；不久，一会儿；立刻；宁愿
inspect	v. 检查；视察；检阅
protection	n. 保护；防卫；护照
fasten	v. 使固定；集中于；扎牢；强加于 n. (Fasten)人名；(英)法森
deeply	adv. 深刻地；浓浓地；在深处
tanker	n. 油轮；运油飞机；油槽车；坦克手
lion	n. 狮子；名人；勇猛的人；社交场合的名流
skill	n. 技能，技巧；本领，技术
familiar	adj. 熟悉的；常见的；亲近的 n. 常客；密友
silence	n. 沉默；寂静；缄默；不谈；无声状态 v. 使沉默；使安静；压制；消除噪音 int. 安静！；别作声！
send	v. 发送，寄；派遣；使进入；发射 n. 上升运动
birthday	n. 生日，诞辰；诞生的日子
compare	n. 比较 v. 比拟，喻为；[语]构成
illness	n. 病；疾病
universal	adj. 普遍的；通用的；宇宙的；全世界的；全体的 n. 一般概念；普通性
arise	v. 出现；上升；起立 n. (Arise)人名；(西)阿里塞；(日)在濑(姓)
reason	n. 理由；理性；动机 v. 推论；劝说
picture	n. 照片，图画；影片；景色；化身 v. 画；想像；描写
lack	v. 缺乏；不足；没有；需要 n. 缺乏；不足
westerner	n. 西方人，欧美人；美国西部的人
unless	conj. 除非，如果不 prep. 除…之外
everyday	adj. 每天的，日常的 n. 平时；寻常日子
gift	n. 礼物；天赋；赠品 v. 赋予；向…赠送
soap	n. 肥皂 v. 将肥皂涂在……上；对……拍马屁（俚语）
painting	n. 绘画；油画；着色 v. 绘画（paint的ing形式）；涂色于
advance	n. 发展；前进；增长；预付款 v. 提出；预付；使……前进；将……提前 adj. 预先的；先行的
sex	n. 性；性别；性行为；色情 v. 引起…的性欲；区别…的性别
thunderstorm	n. [气象] 雷暴；雷暴雨；大雷雨
privilege	n. 特权；优待 v. 给与…特权；特免
personal	adj. 个人的；身体的；亲自的 n. 人事消息栏；人称代名词
introduction	n. 介绍；引进；采用；入门；传入
carpet	v. 在…上铺地毯，把地毯铺在…上；斥责 n. 地毯；地毯状覆盖物
chemistry	n. 化学；化学过程
hear	v. 听到，听；听说；审理
combine	v. 使化合；使联合，使结合 n. 联合收割机；联合企业
smelly	adj. 有臭味的，发臭的
tourism	n. 旅游业；游览
Japan	n. 日本（东亚国家名）
affection	n. 喜爱，感情；影响；感染
locust	n. [植保] 蝗虫，[昆] 蚱蜢
accuse	v. 控告，指控；谴责；归咎于
beam	n. 横梁；光线；电波；船宽；[计量] 秤杆 v. 发送；以梁支撑；用…照射；流露
embarrass	v. 使局促不安；使困窘；阻碍
businessman	n. 商人
bat	n. 蝙蝠；球棒；球拍；批处理文件的扩展名 v. 用球棒击球；击球率达…
English	adj. 英国人的；英国的；英文的 n. 英语；英国人；英文；英格兰人 vt. 把…译成英语
reference	n. 参考，参照；涉及，提及；参考书目；介绍信；证明书 v. 引用
beer	n. 啤酒 vi. 喝啤酒
public	adj. 公众的；政府的；公用的；公立的 n. 公众；社会；公共场所
breathe	v. 呼吸；低语；松口气；（风）轻拂
eggplant	n. 茄子 adj. 深紫色的
cousin	n. 堂兄弟姊妹；表兄弟姊妹
push	v. 推动，增加；对…施加压力，逼迫；按；说服 n. 推，决心；大规模攻势；矢志的追求
tolerate	v. 忍受；默许；宽恕
golden	adj. 金色的，黄金般的；珍贵的；金制的 n. (Golden)人名；(英、法、罗、德、瑞典)戈尔登
waitress	n. 女服务员；女侍者 v. 做女服务生
senior	adj. 高级的；年长的；地位较高的；年资较深的，资格较老的 n. 上司；较年长者；毕业班学生
FALSE	adj. 错误的；虚伪的；伪造的 adv. 欺诈地
February	n. 二月
suffering	n. 受难；苦楚 adj. 受苦的；患病的 v. 受苦；蒙受（suffer的ing形式）
peace	n. 和平；平静；和睦；秩序
astronomer	n. 天文学家
biscuit	n. 小点心，饼干
reuse	n. 重新使用，再用 v. 再使用
rope	n. 绳，绳索 v. 捆，绑
radio	n. 收音机；无线电广播设备 v. 用无线电进行通信
cent	n. 分；一分的硬币；森特（等于半音程的百分之一）
refreshments	n. 点心；[食品] 茶点；小吃
vital	adj. 至关重要的；生死攸关的；有活力的 n. (Vital)人名；(法、德、意、俄、葡)维塔尔；(西)比塔尔
settlement	n. 解决，处理；[会计] 结算；沉降；殖民
pot	n. 壶；盆；罐 v. 把…装罐；射击；节略
windbreaker	n. 防风夹克，同windcheater
frog	n. 青蛙；[铁路] 辙叉；饰扣 v. 捕蛙
sure	adj. 确信的；可靠的；必定的 adv. 当然；的确 n. (Sure)人名；(英)休尔
poor	adj. 贫穷的；可怜的；贫乏的；卑鄙的 n. (Poor)人名；(英、伊朗)普尔
soft	adj. 软的，柔软的；温柔的，温和的；软弱的；笨的 adv. 柔软地；温和地 n. 柔性；柔软的东西；柔软部分
relevant	adj. 相关的；切题的；中肯的；有重大关系的；有意义的，目的明确的
limit	n. 限制；限度；界线 v. 限制；限定
sow	v. 播种；散布；使密布 n. 母猪
usual	adj. 通常的，惯例的；平常的
jazz	n. 爵士乐，爵士舞；喧闹 v. 奏爵士乐，跳爵士舞；游荡 adj. 爵士乐的；喧吵的
century	n. 世纪，百年；（板球）一百分
tea	n. 茶叶；茶树；茶点 vt. 给…沏茶 vi. 喝茶；进茶点
corner	n. 角落，拐角处；地区，偏僻处；困境，窘境 v. 囤积；相交成角
fiction	n. 小说；虚构，编造；谎言
understand	v. 理解；懂；获悉；推断；省略
mean	adj. 平均的；卑鄙的；低劣的；吝啬的 v. 意味；想要；意欲 n. 平均值
resist	v. 抵抗，抗拒；忍耐 n. [助剂] 抗蚀剂；防染剂
playmate	n. 玩伴；游伴
fault	n. 故障；[地质] 断层；错误；缺点；毛病；（网球等）发球失误 v. 弄错；产生断层
thriller	n. 惊险小说；使人毛骨悚然的东西；使人毛骨悚然的小说
message	n. 消息；差使；启示；预言；广告词 v. 报信，报告；[通信] 报文
theme	n. 主题；主旋律；题目 adj. 以奇想主题布置的
am	abbr. 调频，调谐，调幅（ amplitude modulation） v. （用于第一人称单数现在时） aux. （与v-ing连用构成现在进行时，与v-ed连用构成被动语态） n. （柬）安（人名）
accuracy	n. [数] 精确度，准确性
balloon	v. 激增；膨胀如气球 n. 气球 adj. 像气球般鼓起的
you	pron. 你；你们 n. (You)人名；(柬)尤；(东南亚国家华语)猷
oil	n. 油；石油；油画颜料 v. 加油；涂油；使融化
departure	n. 离开；出发；违背
eighth	adj. 第八的；八分之一的 num. 第八；八分之一
corporation	n. 公司；法人（团体）；社团；大腹便便；市政当局
salesman	n. 推销员；售货员
chorus	n. 合唱队；齐声；歌舞队 v. 合唱；异口同声地说
competition	n. 竞争；比赛，竞赛
boat	n. 小船；轮船 v. 划船
fur	n. 皮，皮子；毛皮；软毛 v. 用毛皮覆盖；使穿毛皮服装
trainer	n. 助理教练；训练员；驯马师；飞行练习器；运动鞋
encourage	v. 鼓励，怂恿；激励；支持
road	n. 公路，马路；道路；手段 vt. （狗）沿臭迹追逐（猎物） adj. （美）巡回的
punishment	n. 惩罚；严厉对待，虐待
place	n. 地方；住所；座位 v. 放置；任命；寄予
parking	n. 停车 adj. 停车的 v. 停车（park的ing形式）
machine	n. 机械，机器；机构；机械般工作的人 v. 用机器制造
tell	v. 告诉，说；辨别；吩咐；断定 n. (Tell)人名；(英、德、瑞典)特尔；(罗、意)泰尔；(阿拉伯)塔勒
think	v. 想；认为；想起；想像；打算 n. 想；想法 adj. 思想的
nearby	adj. 附近的，邻近的 adv. 在附近 prep. 在…附近
human	adj. 人的；人类的 n. 人；人类
range	n. 范围；幅度；排；山脉 v. （在内）变动；平行，列为一行；延伸；漫游；射程达到
complex	adj. 复杂的；合成的 n. 复合体；综合设施
fever	n. 发烧，发热；狂热 vt. 使发烧；使狂热；使患热病 vi. 发烧；狂热；患热病
royal	adj. 皇家的；盛大的；女王的；高贵的；第一流的 n. 王室；王室成员
brave	adj. 勇敢的；华丽的 v. 勇敢地面对 n. 勇士
irrigate	v. 灌溉；冲洗；使清新
desert	v. 遗弃；放弃；逃跑 n. 沙漠；荒原；应得的赏罚 adj. 沙漠的；荒凉的；不毛的
urban	adj. 城市的；住在都市的 n. (Urban)人名；(西)乌尔万；(斯洛伐)乌尔班；(德、俄、罗、匈、塞、波、捷、瑞典、意)乌尔班；(英)厄本；(法)于尔邦
splendid	adj. 辉煌的；灿烂的；极好的；杰出的
Asian	n. 亚洲人 adj. 亚洲的；亚洲人的
conversation	n. 交谈，会话；社交；交往，交际；会谈；（人与计算机的）人机对话
rescue	v. 营救；援救 n. 营救；援救；解救
microcomputer	n. 微电脑；[计] 微型计算机
lamp	n. 灯；照射器 vt. 照亮 vi. 发亮
lecture	n. 演讲；讲稿；教训 v. 演讲；训诫
teacher	n. 教师；导师
beg	v. 乞讨；恳求；回避正题 n. (Beg)人名；(德、塞、巴基)贝格
trust	n. 信任，信赖；责任；托拉斯 v. 信任，信赖；盼望；赊卖给
strike	v. 打，打击；罢工；敲，敲击；抓；打动；穿透 n. 罢工；打击；殴打
thermos	n. 热水瓶
amateur	n. 爱好者；业余爱好者；外行 adj. 业余的；外行的
March	n. 三月
its	pron. 它的 n. (Its)人名；(俄)伊茨
phone	n. 电话；耳机，听筒 v. 打电话
province	n. 省；领域；职权
workplace	n. 工作场所；车间
play	v. 游戏；扮演；演奏；播放；同…比赛 n. 游戏；比赛；剧本
reply	v. 回答；[法] 答辩；回击 n. 回答；[法] 答辩
department	n. 部；部门；系；科；局
intention	n. 意图；目的；意向；愈合
tutor	v. 辅导；约束 n. 导师；家庭教师；助教
graduation	n. 毕业；毕业典礼；刻度，分度；分等级
spear	n. 矛，枪 v. 用矛刺
communication	n. 通讯，[通信] 通信；交流；信函
plant	n. 工厂，车间；植物；设备；庄稼 v. 种植；培养；栽培；安置
listen	v. 听，倾听；听从，听信 n. 听，倾听
this	pron. 这；这个；这里 adj. 这；本；这个；今 adv. 这样地；这么 n. (This)人名；(法)蒂斯
decide	v. 决定；解决；判决
empire	n. 帝国；帝王统治，君权
worker	n. 工人；劳动者；职蚁
weekday	n. 平日，普通日；工作日
controversial	adj. 有争议的；有争论的
company	n. 公司；陪伴，同伴；连队 v. 交往
Spanish	adj. 西班牙的；西班牙人的；西班牙语的 n. 西班牙语；西班牙人
mile	n. 英里；一英里赛跑；较大的距离
dry	adj. 干的；口渴的；枯燥无味的；禁酒的 v. 把…弄干 n. 干涸
skirt	n. 裙子 v. 绕过，回避；位于…边缘
sign	n. 迹象；符号；记号；手势；指示牌 v. 签署；签名
playroom	n. 游戏室；娱乐室
hole	n. 洞，孔；洞穴，穴；突破口 v. 凿洞，穿孔；（高尔夫球等）进洞
fingernail	n. 手指甲
spoon	n. 匙，勺子；一杓的量 v. 用匙舀；使成匙状
assess	v. 评定；估价；对…征税
middle	adj. 中间的，中部的；中级的，中等的 n. 中间，中央；腰部
cartoon	n. 卡通片，[电影] 动画片；连环漫画 v. 为…画漫画
mail	n. 邮件；邮政，邮递；盔甲 v. 邮寄；给…穿盔甲
cafeteria	n. 自助餐厅
violinist	n. 小提琴演奏者，小提琴家
unpleasant	adj. 讨厌的；使人不愉快的
relationship	n. 关系；关联
receiver	n. 接收器；接受者；收信机；收款员，接待者
health	n. 健康；卫生；保健；兴旺
pea	n. 豌豆
grill	v. 烧，烤； n. 烤架，铁格子；烤肉
softball	n. 垒球；垒球运动
seaweed	n. 海藻，海草
coral	n. 珊瑚；珊瑚虫 adj. 珊瑚的；珊瑚色的
rush	n. 冲进；匆促；急流；灯心草 adj. 急需的 v. 使冲；突袭；匆忙地做；飞跃
narrow	adj. 狭窄的，有限的；勉强的；精密的；度量小的 n. 海峡；狭窄部分，隘路 v. 使变狭窄
boot	v. 引导；踢；解雇；使穿靴 n. 靴子；踢；汽车行李箱
claw	n. 爪；螯，钳；爪形器具 v. 用爪抓（或挖）
answer	v. 回答；符合 n. 回答；答案；答辩
own	v. 拥有；承认 adj. 自己的；特有的 n. 自己的
rhyme	n. 韵律；韵脚；韵文；押韵词 v. 使押韵；用韵诗表达；把…写作诗
likely	adj. 很可能的；合适的；有希望的 adv. 很可能；或许
plain	adj. 平的；简单的；朴素的；清晰的 n. 平原；无格式；朴实无华的东西 adv. 清楚地；平易地
Frenchman	n. 法国人
socialism	n. 社会主义
experience	n. 经验；经历；体验 v. 经验；经历；体验
awful	adj. 可怕的；极坏的；使人敬畏的
applicant	n. 申请人，申请者；请求者
speak	v. 说话；演讲；表明；陈述
saleswoman	n. [贸易] 女售货员；[贸易] 女店员
twelfth	adj. 第十二的，第十二个的；十二分之一的 n. 第十二；月的第十二日
nail	v. 钉；使固定；揭露 n. [解剖] 指甲；钉子
fancy	n. 幻想；想象力；爱好 adj. 想象的；奇特的；昂贵的；精选的 v. 想象；喜爱；设想；自负
disability	n. 残疾；无能；无资格；不利条件
besides	adv. 此外；而且 prep. 除…之外
beginning	n. 开始；起点 v. 开始；创建（begin的ing形式）
rock	n. 岩石；摇滚乐；暗礁 v. 摇动；使摇晃
betray	v. 背叛；出卖；泄露（秘密）；露出…迹象
soil	n. 土地；土壤；国家；粪便；务农；温床 v. 弄脏；污辱
sunset	n. 日落，傍晚
allow	v. 允许；给予；认可
clerk	n. 职员，办事员；店员；书记；记账员；<古>牧师，教士 v. 当销售员，当店员；当职员
chant	n. 圣歌；赞美诗 v. 唱；诵扬
cloudy	adj. 多云的；阴天的；愁容满面的
here	adv. 在这里；此时 int. 嘿！；喂！ n. 这里
price	n. 价格；价值；代价 v. 给……定价；问……的价格
bride	n. 新娘；姑娘，女朋友
challenge	n. 挑战；怀疑 v. 向…挑战；对…质疑
painful	adj. 痛苦的；疼痛的；令人不快的
cushion	n. 垫子；起缓解作用之物；（猪等的）臀肉；银行储蓄 v. 给…安上垫子；把…安置在垫子上；缓和…的冲击
oilfield	n. 油田
fit	v. 安装；使……适应；使……合身；与……相符 adj. 健康的；合适的；恰当的；准备好的 n. 合身；发作；痉挛
value	n. 值；价值；价格；重要性；确切涵义 v. 评价；重视；估价
scene	n. 场面；情景；景象；事件
freezing	adj. 冰冻的；严寒的；冷冻用的
wild	adj. 野生的；野蛮的；狂热的；荒凉的 n. 荒野 adv. 疯狂地；胡乱地
scenery	n. 风景；景色；舞台布景
sideway	n. 人行道；小巷 adv. 斜地里 adj. 旁边的；向侧面的（等于sideways）
squid	n. 鱿鱼；乌贼；枪乌贼
convenient	adj. 方便的；[废语]适当的；[口语]近便的；实用的
dark	adj. 黑暗的，深色的；模糊的；无知的；忧郁的 n. 黑暗；夜；黄昏；模糊
zero	n. 零点，零度 num. 零
interesting	adj. 有趣的；引起兴趣的，令人关注的
chips	n. [食品] 炸土豆条；小木片；（作赌注用的）圆形筹码；缺口（chip的复数形式）
sugar	n. 糖；食糖；甜言蜜语 v. 加糖于；粉饰
silk	n. 丝绸；蚕丝；丝织物 adj. 丝的；丝绸的；丝制的 vi. （玉米）处于长须的阶段中
nod	n. 点头；打盹；摆动 v. 点头；点头表示
float	v. 使漂浮；实行 n. 彩车，花车；漂流物；浮舟；浮萍
believe	v. 信任；料想；笃信宗教
Mom	n. 妈妈
June	n. 六月；琼（人名，来源于拉丁语，含义是“年轻气盛的六月”）
treatment	n. 治疗，疗法；处理；对待
sight	n. 视力；景象；眼界；见解 v. 看见；瞄准 adj. 见票即付的；即席的
calm	adj. 静的，平静的；沉着的 v. 使平静；使镇定 n. 风平浪静
plenty	n. 丰富，大量；充足 adj. 足够的，很多的 adv. 足够
missile	n. 导弹；投射物 adj. 导弹的；可投掷的；用以发射导弹的
environment	n. 环境，外界
anyone	pron. 任何人；任何一个
clearly	adv. 清晰地；明显地；无疑地；明净地
climate	n. 气候；风气；思潮；风土
behave	v. 表现；（机器等）运转；举止端正；（事物）起某种作用
delete	v. 删除
call	v. 呼叫；拜访；叫牌 n. 电话；呼叫；要求；访问
catastrophe	n. 大灾难；大祸；惨败
orbit	n. 轨道；眼眶；势力范围；生活常规 v. 盘旋；绕轨道运行
customs	n. 海关；风俗（custom的复数）；习惯；关税
snowy	adj. 下雪的，多雪的；被雪覆盖的；洁白无瑕的
waste	n. 浪费；废物；荒地；损耗；地面风化物 v. 浪费；消耗；使荒芜 adj. 废弃的；多余的；荒芜的
regard	n. 注意；尊重；问候；凝视 v. 注重，考虑；看待；尊敬；把…看作；与…有关
communism	n. 共产主义
less	adv. 较少地；较小地；更小地 adj. 较少的；较小的 prep. 减去 n. 较少；较小
French	adj. 法国的；法语的；法国人的 n. 法国人；法语
reduce	v. 减少；降低；使处于；把…分解
identification	n. 鉴定，识别；认同；身份证明
alphabet	n. 字母表，字母系统；入门，初步
lawyer	n. 律师；法学家
moon	n. 月亮；月球；月光；卫星 v. 闲荡；出神
robot	n. 机器人；遥控设备，自动机械；机械般工作的人
nineteen	num. 十九
sigh	v. 叹息，叹气 n. 叹息，叹气
food	n. 食物；养料
raise	v. 提高；筹集；养育；升起 n. 高地；上升；加薪
strengthen	v. 加强；巩固
league	n. 联盟；社团；范畴 v. 使…结盟；与…联合
scissors	n. 剪刀；剪式跳法 v. 剪开；删除（scissor的第三人称单数）
sweat	v. 使出汗；流出；使干苦活；剥削；藉出汗减轻；焦急地期待 n. 汗；水珠；焦急；苦差使
reflect	v. 反映；反射，照出；表达；显示;反省
deep	n. 深处；深渊 adj. 深的；低沉的；深奥的 adv. 深入地；深深地；迟
tooth	n. 牙齿 vt. 给……装齿 vi. 啮合
orange	adj. 橙色的；橘色的 n. 橙；橙色；桔子
prohibit	v. 阻止，禁止
finance	n. 财政，财政学；金融 v. 负担经费，供给…经费
rule	v. 统治；管辖；裁定 n. 统治；规则
tank	n. 坦克；水槽；池塘 v. 把…贮放在柜内；打败
worthy	adj. 值得的；有价值的；配得上的，相称的；可尊敬的；应…的 n. 杰出人物；知名人士
communicate	v. 通讯，传达；相通；交流；感染
population	n. 人口；[生物] 种群，[生物] 群体；全体居民
influence	n. 影响；势力；感化；有影响的人或事 v. 影响；改变
Oceania	n. 大洋洲
noble	adj. 高尚的；贵族的；惰性的；宏伟的 n. 贵族 vt. 抓住；逮捕
knife	n. 刀；匕首 v. 用刀切；（口）伤害
grandson	n. 孙子；外孙
revolution	n. 革命；旋转；运行；循环
clone	n. 克隆；无性系；无性繁殖；靠营养生殖而由母体分离繁殖的植物 v. 无性繁殖，复制
post	n. 岗位；邮件；标杆 v. 张贴；公布；邮递；布置
bunch	n. 群；串；突出物 v. 隆起；打褶；形成一串
twenty	n. 二十；二十年代 num. 二十 adj. 二十的
troop	n. 军队；组；群；多数 v. 群集；成群而行；结队
kangaroo	n. 袋鼠
dear	adj. 亲爱的；尊敬的；昂贵的 adv. 高价地；疼爱地 int. 哎呀 n. 亲爱的人
welfare	n. 福利；幸福；福利事业；安宁 adj. 福利的；接受社会救济的
roll	v. 卷；滚动，转动；辗 n. 卷，卷形物；名单；摇晃
explanation	n. 说明，解释；辩解
feel	v. 感觉；认为；触摸；试探 n. 感觉；触摸
mad	adj. 疯狂的；发疯的；愚蠢的；着迷的 n. 狂怒
squirrel	n. 松鼠；松鼠毛皮 v. 贮藏
she	pron. 她（主格）；它（用来指雌性动物或国家、船舶、地球、月亮等） n. 女人；雌性动物
destination	n. 目的地，终点
differ	v. 使…相异；使…不同 n. (Differ)人名；(法)迪费
pack	n. 包装；一群；背包；包裹；一副 v. 包装；压紧；捆扎；挑选；塞满
seaman	n. 海员，水手；水兵
terror	n. 恐怖；恐怖行动；恐怖时期；可怕的人
force	n. 力量；武力；军队；魄力 v. 促使，推动；强迫；强加
discussion	n. 讨论，议论
station	n. 车站；驻地；地位；身份 v. 配置；安置；驻扎
business	n. 商业；[贸易] 生意；[贸易] 交易；事情
granny	n. 奶奶；外婆；婆婆妈妈的人
Arabic	adj. 阿拉伯的；阿拉伯人的 n. 阿拉伯语
bone	n. 骨；骨骼 v. 剔去的骨；施骨肥于
OK	adj. 好的；不错的 adv. 行；很好 int. 好；可以 v. 对…表示同意 n. 同意
bishop	n. （基督教的）主教；（国际象棋的）象
refusal	n. 拒绝；优先取舍权；推却；取舍权
eager	adj. 渴望的；热切的；热心的 n. (Eager)人名；(英)伊格
cancel	vt.  取消
prepare	v.  准备； 配制
govern	v.  统治； 管理
surgeon	n.  外科医生
analyse	vt.  分析； 研究
abrupt	adj.  突然的， 意外的
resemble	vt.  像， 类似
discourage	vt.  使气馁， 打消
hall	n.  大厅， 礼堂； 门厅， 过道
pollution	n.  污染
remote	adj.  遥远的
explanation	n.  解释， 说明
cafeteria	n.  自助餐厅
salary	n.  工资， 薪水
pretend	v.  假装， 装作
youth	n.  青春； 青年
without	prep.  没有， 不
drunk	adj.  醉的
would	modal verb. 将，将会〔表示想做某事或认为某事会发生〕
pick	v.  拾起， 采集； 挑选
customs	n.  海关； 关税
calculate	v.  计算， 核算
energy	n.  精力； 能量
audience	n.  观众， 听众
solid	adj. 结实的，固体的 n.  固体
thus	adv.  这样； 因而
meanwhile	adv.  同时
sniff	v.  用力吸； 嗅， 闻
possess	vt.  占有， 拥有
require	vt.  需求； 要求
optional	adj.  可选择的； 随意的
scratch	v. 抓，划破；乱涂 n.  乱写； 抓痕
analysis	n.  分析； 解析
click	v. 点击；发出滴答声 n.  滴答声
apparent	adj.  明显的， 清楚的
journalist	n.  记者， 新闻工作者
left	adv. 向左边，在左边 adj. 左边的 n.  左， 左边
dawn	n.  黎明， 拂晓
sideways	adj.  斜向一边的
object	v.  反对 n.  物体； 目标； 宾语
harbour	n.  港口
chapter	n.  章
accessible	adj.  可使用的； 可进入的； 易接近的
flight	n.  飞行； 航班； 楼梯的一段
hang	v.   悬挂； 装饰； 绞死
role	n.  [Ｃ] 角色； 作用
independent	adj.  独立的， 有主见的
carriage	n.  四轮马车；  客车厢
defence	n.  防御； 防护； 辩护
achieve	vt.  达到， 取得
ahead	adv.  在前， 向前
anybody	pron.  任何人， 无论谁
roll	v. 滚动,打滚 n.  面包圈； 卷状物
turn	v. 旋转；转变；转弯 n.  轮流
elect	vt.   选举
example	n.  例子， 范例
result	n.  结果， 效果
same	adj.  同样的， 同一的 n. 同样的事
selfish	adj.  自私的
after	prep&conj&adv.  在…之后， 后来
headline	n. 标题；
connect	vt.  连接， 把…联系起来
hand	n. 手；指针 vt.  交付； 传递
merciful	adj.  仁慈的； 宽大的
rebuild	vt.  重建
sharpen	v.   变锐利， 削尖
committee	n.  委员会
address	n.  地址
union	n.  联合， 联盟
straight	adj&adv.  直的
wipe	vt.  擦； 扫
sale	n.  卖， 出售
component	n.  成分； 零部件
suite	n.  套， 组； 套间
consultant	n.  顾问； 会诊医师
outdoors	adv. 户外的，野外的 n.  户外
throw	v.   投， 掷， 扔
obvious	adj.  明显的， 显而易见的
arch	n.  拱门； 拱形
discuss	v.  讨论， 议论
standard	adj.  标准的 n. 标准，规格
violent	adj.  暴力的； 猛烈的
harmony	n.  协调， 融洽
correct	adj.  正确的， 对的； 恰当的 vt. 改正；纠正
empty	adj.  空的 vt. 倒空
wish	n&v.  祝愿； 想要
institution	n.  公共机构； 协会
tie	v. 系，拴，扎 n.  关系； 领带； 绳子， 结
wise	adj.  聪明的， 明智的
ambition	n.  雄心， 野心
tin	n.  罐头
enlarge	v.  扩大， 放大
besides	adv.  此外； 再说 prep. 除…以外
serious	adj.  严肃的， 严重的； 认真的
tip	vt. 告诫，提示；给小费 n.  顶端； 小费； 提示
export	vi.  出口 vt. 输出 n.  出口
conversation	n.  谈话， 交谈
laugh	vi.  笑， 大笑 n. 笑，大笑，笑声；嘲笑
murder	n&v.  谋杀
fantasy	n.  幻想， 白日梦
pay	v. 付钱，给…报酬 n.  工资
check	v. 核对；检查；批改 n.  检查； 批改
list	n. 一览表，清单 vt.  列表
strange	adj.  奇怪的， 奇特的； 陌生的
lack	n&v.  缺乏， 缺少
toast	vt. 向…敬酒；烘，烤 n.  烤面包， 吐司； 祝酒， 祝酒词
aside	adv.  在旁边
circumstance	n.  环境； 情况
success	n.  成功， 成就； 成功的人
brunch	n.  早午饭
authority	n.  权威； 当局
creature	n.  生物； 动物
outgoing	adj.  好交际的， 外向的； 即将离职的
tasteless	adj.  无滋味的
harm	n&vt.  伤害， 损伤
instrument	n.  乐器； 工具， 器械
medium	adj. 中间的，中等的 n.   媒介
remove	vt.  移动， 拿走； 去除
wisdom	n.  智慧
starvation	n.  饥饿； 饿死
nowhere	adv.  任何地方都不； 无处
psychology	n.  心理学
wrestle	v.  摔跤， 格斗； 斟酌
treasure	n.  金银财宝， 财富
multiply	v.    相乘； 增加
live	vi. 生活，居住 adj.  活的； 直播的 vt. 过着，经历
approval	n.  赞成； 认可； 批准
victory	n.  [C] 胜利
mobile	adj.  活动的， 可移动的
perform	v.  表演， 表现； 履行
evolution	n.  进展， 演变， 进化
expose	vt.  暴露； 揭露
concentrate	v.  集中， 聚集
cheer	n&v.  欢呼， 喝彩
with	prep.  与， 伴随； 有， 以
there	adv.  在那里 int. 那！你瞧！
permit	v. 许可，允许 n.  许可证， 执照
well	adv. 好，充分地 adj. 健康的 int. 好吧 n.  井
suitable	adj.  合适的， 适宜的
personnel	n.  人员， 职员
hopeless	adj.  没有希望的； 不可救药的
freeway	n.  高速公路
fountain	n.  喷泉； 源泉
pile	v. 堆积，积累 n.  堆
channel	n.  海峡； 频道； 通道
sunburnt	adj.  晒黑的， 晒伤的
focus	v. 聚焦，集中 n.  中心， 焦点
entire	adj.  整个的， 全部的
approach	v.  接近， 靠近 n. 方式，方法
wrist	n.  手腕， 腕关节
experiment	n.  实验
fierce	adj.  猛烈的， 激烈的
reservation	n.   预订； 预约
e-mail	n. 电子邮件 vt.  给…发电子邮件
hate	vt. 恨，讨厌，不喜欢 n.  怨恨
block	v.  阻塞， 阻挡 n. 大块；街区
write	v.   写
pet	n.  宠物， 爱畜
flow	v. 流动 n.  流， 流动
order	n. 顺序；命令 vt.  命令； 点菜； 订货
wage	n.  工资， 报酬
period	n.  时期， 时代
musical	adj. 音乐的，爱好音乐的 n.  音乐剧
corporation	n.  团体； 公司， 企业
distant	adj.  远的， 遥远的
understand	v.   懂得， 理解
dismiss	v.  解雇； 解散
intelligence	n.  智力， 聪明
reform	v.  改革， 革新 n. 改革；改善
ever	adv.  曾经； 无论何时
even	adv. 甚至，更加，还要 adj.  平坦的
restriction	n.  限制
crazy	adj.  疯狂的
razor	n.  剃须刀
coach	v. 指导，训练 n.  教练； 马车； 长途车
champion	n.  冠军， 优胜者
wait	v. 等待 n.  等待， 等候
circuit	n.  电路
pint	n.   品脱； 一品脱啤酒
matter	vi.  要紧， 有重大关系 n. 事情，物质；原因
instant	adj. 立即的；速食的 n.  瞬间
personalization	n.  个性化
shaver	n.  电动剃须刀
top	n.  顶部； 上面
native	adj.  本土的， 本国的
too	adv.  也； 又； 太； 很
have	v.  帮助构成完成时态 vt. 有，使，令
violence	n.  暴力； 强烈
roast	v.  烤
energetic	adj.  精力旺盛的
consequence	n.  结果， 后果
quilt	n.  加衬芯床罩
famous	adj.  著名的， 出名的
question	vt. 询问 n.  问题
vinegar	n.  醋
spirit	n.  精神， 灵魂
premier	n.  总理， 首相
produce	v.  生产， 制造
allergic	adj.  过敏的
cheat	v. 哄骗，欺骗，骗取 n.  骗子； 诈骗
framework	n.  框架， 结构
regard	v. 当做，看待 n.  关心， 注意； 致意
anecdote	n.  轶事； 趣事
prohibit	vt.  禁止， 阻止
almost	adv.  几乎， 差不多
steward	n.  男乘务员
fuel	n.  燃料
manner	n. 方式；举止；
upon	prep.  在…上面
foresee	vt.   预见， 预知
harmful	adj.  有害的； 致伤的
associate	v.  结合； 结交
pray	v.  祈祷， 祈求
wake	v.   醒来， 叫醒
pin	vt. 钉住，别住 n.  别针； 胸针
academic	adj. 学术的；院校的 n.  大学教师； 学者
whether	conj.  是否
function	vi.  起作用； 行使职责 n. 功能，作用，职责；函数
raise	vt.  举起； 提高， 使升高； 饲养， 养育
spoon	n.  勺， 匙， 调羹
quite	adv.  完全， 十分
lap	n.  大腿；  一圈
mineral	n.  矿物质， 矿物
representative	n.  代表
terror	n.  恐怖； 可怕的人
beneath	prep.  在…下方， 在…下面
everyone	pron.  每人， 人人
lay	v.   放， 搁； 产
swap	v.   交换
hatch	v.   孵蛋
pardon	vt&n.  原谅， 宽恕； 对不起
plenty	n.  充足， 大量， 丰富
tick	v.  发出滴答声 n. 钟表的滴答声；记号
basis	n.  [C] 基础； 根据； 原则
adventure	n.  冒险； 奇遇
condition	n.  条件， 状况
improve	v.  改进， 更新
ceremony	n.  典礼， 仪式
bingo	n.  宾果
try	v.   尝试， 试图； 努力
gym	n.  体育馆； 健身房
basic	adj. 基本的 n.  要素； 基础
twist	v. 拧，扭曲 n.  扭曲， 歪曲
unite	v.  联合， 团结
bush	n.  灌木丛， 矮树丛
technique	n.  技术， 技巧
cause	n. 原因，起因 vt.  促使， 引起
dioxide	n.  二氧化物
wound	vt. 伤，使受伤；伤害 n.  [Ｃ] 创伤； 伤口
catastrophe	n.  灾难； 灾祸； 横祸
busy	adj.  忙碌的
convey	vt.  搬运； 传播， 传达
extra	adj.  额外的， 外加的
design	v. 设计；制订；筹划 n.  样式
generous	adj.  慷慨的， 大方的
land	v.  登陆； 降落 n. 陆地
coincidence	n.  一致； 巧合
victim	n.  受害人， 牺牲品
department	n.  部门；  系
possibility	n.  可能， 可能性
direction	n.  方向； 说明； 说明书； 指导
exhibition	n.  展览， 展览会； 展品
burn	v. 燃，烧，着火；使烧焦；
garlic	n.  大蒜
alcoholic	adj. 酒精的；酒精中毒的 n.  饮酒过度的人
bachelor	n.  学士； 单身汉
countryside	n.  乡下， 农村
chief	adj. 主要的，首要的 n.  领导
automatic	adj.  自动的， 机械的
lamp	n.  灯， 油灯； 光源
cry	v.  喊叫； 哭 n. 喊；哭声
Antarctic	adj. 南极的 n.  南极地区
conduct	vt.  引导； 管理
bury	vt.   埋， 葬
obey	v.  服从， 顺从
stable	adj.  稳定的
lamb	n.  羔羊； 羔羊肉
fantastic	adj.  极好的， 美妙的， 很棒的
changeable	adj.  易变的， 变化无常的
spoken	adj.  口语的
respond	v.  回答； 做出反应
incident	n.  事件
walk	v.  走路， 步行 n. 散步
lame	adj.  跛的； 残废的
marry	v.   和…结婚
pity	n.  怜悯， 同情； 憾事
absorb	vt.  吸收； 吸引
supply	v.  供给， 提供 n. 供给；供应品
uncertain	adj.  不确定的
concern	n. 关系；关心 vt.  涉及， 关系到
circulate	vt.  使流通； 使运行
liberty	n.  自由
recycle	v.  再循环， 回收
let	vt.   让
state	n. 状态；国家；州 vt.  宣称
press	vt. 压，按 n.  压， 按； 新闻界， 出版社
welcome	n&vt&adj.  欢迎
confidential	adj.  极受信任的； 秘密的
chaos	n.  混乱
abundant	adj.  丰富的， 充裕的
want	v.  想要， 需要
pace	n.  步子， 步速； 节奏
ballet	n.  芭蕾舞， 芭蕾舞剧
opposite	adj.  相反的， 对面的 n. 相反，对面；对立面，对立物
forecast	n. 预知 vt.  预告， 预测
recognize	vt.  认出； 承认
warehouse	n.  仓库； 大商店
pack	v.  包装， 整理 n. 包，背包；一群
each	adj&pron.  每人， 每个， 每件
abnormal	adj.  反常的； 变态的
difference	n.  不同
must	modal verb. 必须 n. 必须做的事；必不可少的东西
circle	v.  围起来， 环绕 n. 圆圈
resign	v.  辞去， 辞职
drier	n.  烘干机， 吹风机
bathe	v.  洗澡， 沐浴， 浸洗
polite	adj.  有礼貌的， 有教养的
cut	v. 切，剪，削，割；删节 n.  伤口
entertainment	n.  娱乐； 娱乐表演
probably	adv.  很可能， 大概
document	n.  文件， 文献
aluminum	n.  铝
ward	vt. 保卫，看护 n.  病房， 收容所
starve	v.  饿死， 挨饿
prize	n.  奖赏， 奖品， 奖金
accident	n.  事故， 意外事件
clay	n.  黏土； 泥土
moment	n.  [C] 片刻， 瞬间， 刹那
anyway	adv.  不管怎样
promote	vt.  促进； 提升； 推销
routine	n.  常规， 日常事务
found	vt.  成立， 建立
tear	v.   扯破， 撕开 n.  眼泪
excuse	n.  借口， 理由 vt.  原谅， 宽恕
attack	v&n.  攻击， 袭击
spoonful	n.  一匙
humour	n.  幽默， 幽默感
divorce	n. 离婚 vt.  使离婚
currency	n.  货币
distribute	v.  分布； 分配
worried	adj.  担心的； 烦恼的
attach	vt.  系上， 贴上
canal	n.  运河； 水道
shout	v.  呼喊， 呼叫 n. [C]喊，高声呼喊
escape	v&n.  逃跑， 逃脱； 避开
flashlight	n.  手电筒； 闪光信号
ankle	n.  脚踝
situation	n.  形势， 情况
think	v.   想， 思索； 认为
receive	v.  收到， 得到
thirst	n.  渴， 口渴
participate	vi.  参加， 参与
surplus	n.  剩余， 过剩
refresh	v.   精神振作； 更新
librarian	n.  图书管理员， 图书馆馆长
theft	n.  盗窃案
religion	n.  宗教
diagram	n.  图表， 图样
claw	n.  爪
prayer	n.  祈祷
speech	n.  演讲
watch	v.  观察， 观看 n. 手表
clap	v.   拍手， 鼓掌
quit	v.   离开； 停止
polish	v.  擦亮， 磨光； 润色
chart	n.  图表； 航海图
insurance	n.  保险
medical	adj.  医学的， 医疗的
principle	n.  原则； 原理
till	conj&prep.  直到， 直到…为止
attend	v.  出席， 参加； 专心， 考虑； 看护， 照料
goods	n.  商品， 货物
lie	vi. 躺，卧，平放；位于 n. 谎言 vt.   说谎
secure	adj.  安全的， 可靠的； 放心的， 无虑的
smell	n. 气味 v. 闻出，闻到，嗅到
used to	v.  过去常常
unable	adj.  不能的， 不能胜任的
glare	v. 瞪眼，怒目而视；闪耀 n.  强光
disappointed	adj.  失望的
irrigation	n.  灌溉
late	adv.  晚， 迟 adj. 晚的，迟的
continue	v.  延伸； 继续
shoot	vt. 射击，射中；摄影 n.  嫩枝， 苗， 芽
realize	vt.  认识到； 实现
budget	n.  预算
actual	adj.  实际的， 现实的
tension	n.  紧张， 不安； 拉紧， 绷紧； 压力， 张力
chest	n.  箱子； 胸部
eastern	adj.  东方的， 东部的
marathon	n.  马拉松
last	determiner. 最近的，最近一段时间的，最近一次的 adv. 最近，上次 v. (使)持续 n. 鞋楦
adapt	v.  适应； 改编
wash	v. 洗涤，冲刷 n.  洗； 洗的衣服
weight	n.  重量
doubt	n&v.  怀疑， 疑惑
cheerful	adj.  兴高采烈的， 快活的
uncomfortable	adj.  不舒服的， 不安的
develop	v.   发展；  发育； 开发； 冲洗
misunderstand	vt.   误会， 不理解
warn	vt.  警告； 预告
measure	v. 测量；权衡 n.  方法， 措施
guilty	adj.  有罪的， 犯法的； 内疚的
crossroads	n.  十字路口
district	n.  区， 地区
receipt	n.  收据； 收到， 接收
assume	vt.  假定， 设想； 承担
swim	vi.  游泳； 游
full	adv.  完整地， 十分地 adj. 满的，充满的，完全的
basement	n.  地下室
pepper	n.  胡椒粉
chant	v. 唱；歌颂 n.  圣歌， 赞美诗
capsule	n.  胶囊； 太空舱
away	adv.  离开， 远离
memory	n.  回忆， 记忆
concept	n.  概念， 观念
motivation	n.  动机
impossible	adj.  不可能的， 办不到的
effort	n.  努力， 艰难的尝试
wave	v. 挥手；摇动 n.  波， 波浪
disaster	n.  灾难， 祸患
anything	pron.  某事  ； 任何事
agriculture	n.  农业， 农学
grocer	n.  零售商人； 食品店
ecology	n.  生态学
stare	v.  盯着看， 凝视
painful	adj.  痛苦的； 疼痛的
steady	adj.  稳固的； 平稳的
vote	v.  选举， 投票
early	adv.  早， 在早期 adj. 早的，早期的
harvest	n&v.  收割； 收获
pain	n. 疼痛；
disease	n.  病， 疾病
start	n&v.  开始， 着手； 出发
purchase	n&vt.  购买
yet	adv.  到目前为止； 还； 仍然
engineer	n.  工程师； 技师
pair	n.  一双， 一对
manage	vi.  应付过去 vt. 管理；达成
equal	adj. 平等的，相等的 vt.  等于， 比得上
alike	adv.  类似于， 以同样的方式 adj. 相同的，相似的
gravity	n.  地心引力， 重力
typical	adj.  典型的； 象征性的
bravery	n.  勇敢， 勇气
finance	n.  财政， 金融
parking	n.  停车
shadow	n.  [C] 影子， 阴影
hydrogen	n.  氢
put	vt.   放， 摆
climb	v.  爬， 攀登
offence	n.  犯罪； 过错； 冒犯； 攻击
carbon	n.  碳
circus	n.  马戏团
controversial	adj.  争论的， 争议的
dinosaur	n.  恐龙
enter	v.  进入
attain	vt.  获得； 达到
trap	vt. 使陷入困境 n.  陷阱， 圈套
lonely	adj.  孤独的， 寂寞的
tram	n.  有轨电车
pale	adj.  苍白的， 灰白的
struggle	n&v.  努力， 斗争， 挣扎
gallery	n.  画廊， 美术品陈列室
pest	n.  害虫
warmth	n.  温暖， 暖和； 热烈， 热情， 热心
lesson	n.  课； 功课； 教训
destroy	v.  破坏， 毁坏
supreme	adj.  极度的； 极大的， 最高的
ambulance	n.  救护车
junior	adj.  初级的； 年少的
coast	n.  海岸， 海滨
shuttle	n.   车辆、 飞机等
provide	v.  提供
allocate	vt.  分配； 配给； 拨出
light	vi. 点，变亮 adj.  明亮的； 轻的； 浅色的 n. 光，灯，灯光
valuable	adj.  值钱的， 贵重的
primary	adj.  初级的； 首要的
stubborn	adj.  顽固的， 固执的； 难应付的
enterprise	n.  企业， 事业
paperwork	n.  文书工作
solar	adj.  太阳的
consume	vt.  消耗； 消费
triangle	adj.  三角形的 n. 三角形
competence	n.  能力
helmet	n.  头盔
theme	n.  主题
consult	v.  请教， 商议； 查询
merely	adv.  仅仅， 只不过
wealth	n.  财富
editor	n.  编辑
means	n.  方法， 手段
chain	n.  链， 链条
desire	n&v.  渴望， 期望
survive	vi. 幸存，生还 vt.  比…活得长
initial	adj.  开始的， 最初的
muddy	adj.  泥泞的，多泥的
consistent	adj.  一致的， 连贯的
sword	n.  剑， 刀
fingernail	n.  手指甲
permanent	adj.  永久的， 持久的
chat	vi.  聊天， 闲谈 n. 聊天，闲谈
fetch	v.  去取来， 去请来
fellow	n.  同伴， 伙伴
choice	n.  选择， 抉择
travel	n&vi.  旅行
civilization	n.  文明， 文化
before	adv. 以前 conj.  在…之前 prep. 在…以前，在…前面
fiction	n.  小说； 虚构， 杜撰
friendly	adj.  友好的
possession	n.  所有， 拥有； 财产， 所有物
tell	v.   告诉， 吩咐； 辨别， 知道
replace	vt.  取代， 代替； 把…放回原处
appointment	n.  约会
stomach	n.  [C] 胃， 胃部
experience	vt. 经历，体验 n.  经验； 经历
listen	vi.  听， 仔细听， 留神听
hit	n&v.   打， 撞； 击中
major	adj. 主要的；成年的 n.  主修专业
interrupt	v.  打扰， 打断
beat	v. 打赢；跳动；敲打 n.   节拍
worldwide	adj.  遍及全球的， 世界各地的
bear	v. 承担；忍受 n.  熊
affair	n.  事， 事情
consider	vt.  考虑； 认为
housework	n.  家务劳动
potential	adj. 潜在的，可能的 n.  潜力
accustomed	adj.  通常的， 习惯的
group	n.  组， 群
jewelry	n.  〈总称〉 珠宝， 首饰
obtain	vt.  获得， 得到
lounge	n.  休息厅， 休息室
rugby	n.  英式橄榄球
resist	vt.  抵抗； 挡开
format	n.  版式， 格式
sacrifice	n&v.  牺牲， 奉献
particular	adj. 特殊的；个别的
illegal	adj.  违法的， 不合规定的
pause	n&vi.  暂停， 停止
congratulate	vt.  祝贺， 恭贺
careless	adj.  粗心的； 漫不经心的
square	adj.  平方的； 方形的 n. 广场；正方形
rainbow	n.  彩虹； 幻想
twice	adv.  两次； 两倍
ample	adj.  充足的， 丰富的
altitude	n.  高度； 高处
request	n&vt.  要求， 请求
classify	vt.  分类
part	v.  分离， 分别 n. 部分；角色
percent	n.  百分之…
point	v. 指，指向 n.  点； 要点， 观点； 分数
paddle	v.  划桨； 戏水 n. 桨状物；蹼
general	adj.  大体的， 总的； 一般的； 普遍的
tend	vi.  趋向， 往往是 vt. 照管，护理
frighten	vt.  使惊恐， 吓唬
relief	n.  缓解； 轻松
boycott	n&vt.  联合抵制
dimension	n.  尺寸， 尺度
park	n. 公园；停车场 vt.  停放
unbelievable	adj.  难以置信的
process	vt. 加工，处理 n.  程序； 方法
deserve	vt.  应受， 值得
subscribe	v.  捐赠； 订阅
clear	adj.  清晰的； 明亮的； 清楚的
chef	n.  厨师
alternative	adj.  选择性的， 二者择一的
zoom	v.  突然扩大， 使猛增
colleague	n.  同事
diamond	n.  钻石， 金刚石； 菱形
someone	pron.  某人； 重要人物
build	v. 建造 n.  构造
mean	v.   意味着， 意思是
approve	vi.  赞成； 满意 vt. 批准，通过
neither	determiner. 两者都不（的），两者中无一（的） adv. 也不
earn	vt.  挣得， 赚得
glad	adj.  高兴的， 乐意的
chew	v.  咀嚼
pedestrian	n.  步行者， 行人
hurry	v. 赶快；急忙 n.  匆忙， 仓促
account	v.  总计有； 认为 n. 账目；描述
tolerate	vt.  忍受， 容忍
radioactive	adj.  放射性的
underline	vt.  在…下面划线； 强调
innocent	adj.  清白的， 无罪的； 纯真的
chopsticks	n.  筷子
alphabet	n.  字母表
ambiguous	adj.  暧昧的； 不明确的
advance	v&n.  推进， 前进
trip	n.  [C] 旅行， 旅程
botanical	adj.  植物学的， 植物的
appreciate	vt.  欣赏； 感激
record	v.  录制， 记录 n.  记录； 唱片
diverse	adj.  不同的， 多种多样的
cube	n.  立方体， 立方
strict	adj.  严格的， 严密的
jump	v.  跳跃； 惊起； 猛扑 n. [C]跳跃
knowledge	n.  知识， 学问
happen	v.   发生， 碰巧
pass	v.  传递； 经过
past	adj. 过去的，最近的 prep.  经过； 晚于 n. 过去，往事
festival	n.  节日
shock	vt. 使震惊 n.  震动， 冲击
delighted	adj.  高兴的， 快乐的
pancake	n.  薄煎饼
active	adj.  积极的， 主动的
bill	n.  钞票； 账单； 法案， 议案
whichever	pron.  不论哪个
court	n.  法庭， 法院； 球场
whose	pron&conj.  谁的
bucket	n.  桶； 铲斗
senior	adj. 年长的，资深的；高年级的 n.  上级， 长辈； 高年级学生
flexible	adj.  柔软的， 灵活的
relative	adj.  相对的； 比较的 n. 亲属，亲戚
attitude	n.  态度； 看法
organ	n.  器官
average	adj. 平均的；普通的 n.  平均数
compare	vt.  比较， 对照
sceptical	adj.  怀疑的， 怀疑论的
unwilling	adj.  不愿意， 勉强的
thriller	n.  使人激动的人； 惊险、 恐怖、 刺激的小说、 戏剧或电影
transparent	adj.  显然的； 透明的
characteristic	adj.  特有的， 独特的， 典型的
how	adv.  怎样， 如何； 多少； 多么
grasp	vt.  抓住， 紧握； 领会
Buddhism	n.  佛教
receptionist	n.  接待员
composition	n.  作文； 作曲
unlike	prep.  不像， 和…不同
hearing	n.  听力
term	n.  学期； 术语； 条款； 项
volcano	n.  火山
wedding	n.  婚礼， 结婚
acquisition	n.  获得； 获得物
rigid	adj.  刚硬的， 刚性的； 严格的
deadline	n.  最后期限， 截止日期
spare	adj. 空闲的；多余的，剩余的 vt.  提供； 匀出， 分出
mine	pron.  我的 v. 开采，挖掘 n. 矿藏
mind	v.  介意 n. 思想
grateful	adj.  感激的， 感谢的
business	n.  商业， 生意； 职业， 事业
bungalow	n.  平房
staff	n.  全体职员
possible	adj.  可能的
partly	adv.  部分地， 在一定程度上
breathless	adj.  喘不过气来的
meet	v. 遇见，会面；满足 n.  集会
answer	v.  回答， 应答； 接电话 n. 答案
borrow	v.  借用； 借
maximum	n&adj.  最大量 ， 最大限度
under	adv. 在下 prep.  在…下面， 向…下面
desert	v.  舍弃， 遗弃 n.  沙漠
represent	vt.  代表； 表现
compete	vi.  比赛， 竞赛
die	v.   死亡； 消失； 熄灭
radium	n.  镭
fragrant	adj.  香的， 芬芳的
dig	v.   挖  ， 掘
accountant	n.  会计， 会计师
stocking	n.  长筒袜
sometimes	adv.  有时
emergency	n.  紧急情况或状态
promise	v. 答应，允诺；预示 n.  答应， 允诺； 希望， 前景
dip	v.   浸， 蘸
hold	v.   拿， 握住； 举行
habit	n.  习惯， 习性
passport	n.  护照
absurd	adj.  不合理的； 荒谬的
burglar	n.  盗贼， 窃贼
considerate	adj.  体贴的， 考虑周到的； 替人着想的
rubber	n.  橡皮； 橡胶； 合成橡胶
legal	adj.  法律的， 法定的
underwear	n.  内衣
talk	v. 谈话，议论 n.  谈话， 会谈； 演讲
reply	n&vi.   回答， 答复
train	v. 培训，训练 n.  火车
parcel	n.  包裹
test	n&vt.  测试， 考查， 试验
journey	n.  旅行， 路程
count	v.  数； 计算； 有价值
graph	n.  图表， 曲线图
upwards	adv.  向上， 往上
feast	n.  盛宴； 节日； 令人愉悦的事情
contradictory	adj.  相互矛盾的；不一致的
take	v.   拿走； 接受， 接纳
accompany	vt.  陪伴， 伴随； 伴奏
petrol	n.  汽油
beneficial	adj.  有益的， 受益的
blame	n&vt.  责备， 责怪
final	adj. 最后的 n.  决赛； 期末考试
some	pron.  若干， 一些 adj. 一些，若干；有些；某一
squeeze	v.  压榨， 挤 n. 紧握，捏
blank	adj. 空的；茫然的 n.  空格， 空白， 空白处
rather	adv.  相当， 宁可
importance	n.  重要性
session	n.  会议； 开庭
back	adv. 回；向后 adj. 后面的 n.  背后， 后部； 背
worthy	adj.  值得的； 相称的
endless	adj.  无止境的； 没完没了的
training	n.  培训
expectation	n.  预料； 期望
mist	n.  雾
miss	v.  错过； 想念
pound	n.  磅； 英镑
load	n.  担子， 货物
bite	v. 咬，叮 n.  咬； 一口
ferry	n.  渡船
disgusting	adj.  令人讨厌的
ignore	vt.  不理睬； 忽视
loaf	n.  一条
reception	n.  接待
applaud	v.  鼓掌， 喝彩
just	adv. 刚才，恰好；只是，仅 adj.  公正的
outward	adv. 向外，在外 adj.  向外的， 外出的
notice	v.  注意到 n. 通告，注意
yummy	adj.  美味的
holy	adj.  神圣的
relax	v.   放松， 轻松
relay	n. 接力；
custom	n.  习惯， 习俗
length	n.  长， 长度
permission	n.  允许， 许可， 同意
grand	adj.  宏伟的， 盛大的
schedule	n. 时刻表 vt.  安排， 排定
eastwards	adv.  向东
print	v.  印刷
rewind	v.  重绕； 回转
although	conj.  虽然， 尽管
material	n.  材料， 原料； 物质
approximately	adv.  近似地， 大约
encouragement	n.  鼓励， 支持， 促进； 起激励作用的事物
universe	n.  宇宙
biochemistry	n.  生物化学
iron	v.  熨烫 n. 铁；熨斗
idiom	n.  习语， 成语
blanket	n.  毛毯， 毯子
hug	v. 紧抱，拥抱 n.  拥抱
explain	vt.  解释， 说明
envy	n&v.  嫉妒， 羡慕
discount	n.  折扣
construct	vt.  构筑； 建造
hope	n&v.  希望
attempt	vt&n.  试图， 尝试
soon	adv.  不久， 很快， 一会儿
division	n.  除， 除法； 分开， 分割； 分界线
tablet	n.  药片
hook	n. 钩子 vt.  钩住， 用钩子挂
balance	v.  使平衡； 权衡 n. 平衡
bend	v.   弯曲； 弯腰， 屈身
action	n.  行动
lock	n. 锁 vt.  锁， 锁上
stadium	n.   体育场
fear	n&v.  害怕， 恐惧， 担忧
appreciation	 n.  欣赏； 评论； 感激
electrical	 adj.  与电有关的， 电气的
statue	 n.  雕像
sense	 n.  感觉， 意识
cream	 n.  奶油； 乳脂
sensitive	 adj.  敏感的； 灵敏的； 易被惹恼的
being	 n.  生物， 人； 存在
vacant	 adj.  空的， 空白的
afford	 vt.  买得起； 有时间做； 承担得起； 提供
birthplace	 n.  出生地， 故乡
dustbin	 n.  垃圾箱
impression	 n.  印象， 感觉
interval	 n.  间歇， 间隔； 幕间休息
evaluate	 vt.  评价； 估计
status	 n.  身份， 地位
upset	 adj. 心烦的，苦恼的 vt.   使苦恼
dot	 n.  点， 圆点
deliver	 vt.  投递  ； 交付， 给
tailor	 v.  定做 n. 裁缝
stamp	 n.  [C] 邮票
skip	 vi.   跳过； 跳读
phenomenon	 n.   现象
mention	 vt. 提到，说起 n.  提及
mad	 adj.  发疯的； 生气的
barbecue	 n.  烤肉野餐
file	 n.  文件， 档案
laundry	 n.  洗衣店； 要洗的衣服
member	 n.  成员， 会员
brewery	 n.  啤酒厂， 酿酒厂
accumulate	 vt.  堆积， 积累
crime	 n.   罪， 罪行
stand	 vi. 站立 vt. 承担，忍受 n.  站； 台
surround	 vt.  围绕， 包围
together	 adv.  一起， 共同
pavement	 n.  人行道
cigarette	 n.  香烟
may	 modal verb. 可能，也许 n. 山楂花
could	 modal verb. 能，会，可以〔can 的过去式〕
forward	 adv.  向前， 前进 adj. 早的；前进的
bent	 n. 爱好，嗜好 adj. 弯曲的；决心的
strike	 vt. 罢工；侵袭；敲；
health	 n.  健康， 卫生
positive	 adj.  积极的； 肯定的
favourite	 adj. 特别喜爱的 n.  特别喜爱的人
bless	 vt.  保佑， 降福
menu	 n.  菜单
Pacific	 adj.  太平洋的
able	 adj.  有能力的； 有才干的， 有本事的
mend	 v.  修理， 修补
return	 v. 归还，返回 n.  返回， 来回
mail	 n. 邮政，邮递 vt.  〈美〉 邮寄
conscience	 n.  道德心， 良心
subject	 n.  题目， 主题； 学科； 主语； 主体
use	 n.  利用； 应用
bonus	 n.  奖金， 红利
feel	 vi. 摸索，寻找 v.  觉得； 摸起来 vt. 感觉；触摸；认为
main	 adj.  主要的
thrill	 n. 激动，兴奋；刺激 vt.  使激动； 使胆战心惊
serve	 vt.  服务， 招待； 服役
cassette	 n.  [C]卡式盒； 暗盒
smile	 n&v.  微笑
fine	 adj. 好的；晴朗的；健康的 vt.  处…以罚金
find	 vt.   找到， 发现； 感到
host	 n. 主人；节目主持人 vt.  招待； 主持
accelerate	 vt.  加速， 促进
grain	 n.  谷物， 谷类
international	 adj.  国际的
maid	 n.  女仆； 少女
credit	 n.  信用； 信赖； 贷方
oxygen	 n.  氧； 氧气
regardless	 adv.  不管， 不顾； 不加理会
terrible	 adj.  可怕的； 糟糕的
combine	 v.  联合， 结合
upward	 adv.  向上， 往上
waste	 vt. 浪费 n.  废弃物； 粪便
citizen	 n.  公民， 市民
occur	 vi.  发生， 出现
comedy	 n.  喜剧
pleasant	 adj.  令人愉快的， 舒适的
difficult	 adj.  难的； 艰难的； 不易相处的
pressure	 n.  压； 压力； 压强
sort	 v. 分类，拣选 n.  种类， 类别
fill	 v.  填空； 装满； 充满
dentist	 n.  牙科医生
numb	 adj.  麻木的
feed	 v.   喂  ， 饲  ； 吃
forget	 v.   忘记， 忘掉
professor	 n.  教授
convenient	 adj.  便利的， 方便的
specialist	 n.  专家， 专科医生； 专家； 专业人员
compass	 v. 包围 n.  指南针
background	 n.  背景
true	 adj.  真正的， 确实的； 正确的
adolescent	 adj.  青春期的 n. [C]青少年
valley	 n.  山谷， 溪谷
position	 n.  位置； 职位
present	 adj. 当前的；出席的 n.  礼物， 赠品 vt.  赠送； 介绍
laughter	 n.  笑， 笑声
since	 prep. 自从…以来，自从…之后
patent	 n.  专利权
belong	 vi.  属， 附属
soul	 n.  灵魂， 心灵
dangerous	 adj.  危险的
certificate	 n.  证明， 证明书
mess	 v.  弄乱 n. 凌乱
sour	 adj.  酸的
delete	 vt.  删除
stain	 n.  污点， 瑕疵
breath	 n.  气息， 呼吸
transform	 v.  转变， 转换
advise	 vt.  忠告， 劝告， 建议
repeat	 vt.  重说， 重做； 重复
physical	 adj.  身体的； 物理的； 客观存在的
make	 vt.   制造， 做； 使成为
microwave	 n.  微波
rooster	 n.  公鸡
brochure	 n.  小册子
master	 vt. 精通，掌握 n.  主人； 硕士
extraordinary	 adj.  非常的； 非凡的
witness	 v. 目击，作证 n.  证人， 目击者
conventional	 adj.  惯例的， 传统的； 常规的
regulation	 n.  规则， 规章
due	 adj.  预期的； 约定的
ripen	 v.   成熟
puzzle	 v.  迷惑， 困扰 n. 难题；谜
evident	 adj.  明显的， 显然的
accommodation	 n. 住处；工作场所
authentic	 adj.  真的， 可信的
socket	 n.  插座， 插孔； 孔， 穴
biscuit	 n.  饼干
fence	 n.  栅栏， 篱笆
breast	 n.  胸部； 胸怀
mercy	 n.  怜悯
annoy	 vt.  使烦恼， 使生气； 骚扰
inform	 v.  通知， 告诉
depend	 vi.  依靠， 指望； 取决于
commit	 v.   犯  ， 干
about	 adv. 大约；到处，周围 prep.  关于； 在附近， 在周围
scream	 v. 尖叫，尖声喊叫 n.  尖叫
sorrow	 n.  悲伤， 悲痛
cure	 n&v.  治疗， 医好
danger	 n.  危险
crash	 v&n.  碰撞； 坠毁
cover	 n. 盖子；罩；封面 vt.  覆盖； 掩盖； 包括； 报道
firm	 adj.  坚固的； 坚定的 n. 公司，企业
character	 n.  字符； 性格
reflect	 vt.  反射， 反映
contribution	 n.  贡献； 捐款
above	 adv.  在上面 adj. 上面的，上述的；上文的 prep. 在…上面，在…上方；多于，大于
fire	 n. 火，火灾 vt.  点火； 射击； 解雇
stick	 v. 黏住；坚持 n.  木棒， 木棍
orbit	 n.   运行轨道
band	 n.  乐队； 带子； 镶边
height	 n.  高， 高度
spray	 v.  喷洒 n. 水雾，喷雾
distinguish	 v.  区分， 辨别
outer	 adj.  外部的
invent	 vt.  发明， 创造
fluent	 adj.  流利的， 流畅的
wonderful	 adj.  极好的
shortcoming	 n.  [C] 缺点， 短处
haircut	 n.   理发
howl	 v.  嚎叫， 嚎哭
something	 pron.  某事； 某物
benefit	 n. 利益，好处 vt.  使受益
flood	 v.  淹没， 泛滥 n. 洪水
quality	 n.  质量； 品质
intention	 n.  计划， 意图， 目的
booth	 n.  岗；  亭或小隔间
rude	 adj.  无礼的， 粗鲁的， 粗暴的
enthusiastic	 adj.  热心的， 热情的
symptom	 n.  症状
funeral	 n.  葬礼
unique	 adj.  唯一的， 独特的
except	 prep.  除…之外
ministry	 n.   部门
religious	 adj.  宗教的； 虔诚的
shelter	 n.  掩蔽； 隐蔽处
fact	 n.  事实， 现实
examine	 v.  检查， 诊察
scan	 v.   细看； 浏览； 扫描
fundamental	 adj.  基础的， 基本的
association	 n.  联合； 联盟； 结交， 交往； 协会
believe	 vt.  相信； 认为
remember	 v.  记得； 纪念
outline	 n. 大纲，轮廓；要点，概要 vt.  描绘轮廓； 略述
fade	 v.  褪色； 使消退； 枯萎
unless	 conj.  如果不， 除非
glance	 v&n.  扫视， 匆匆一看
free	 adj.  自由的， 空闲的； 免费的
equality	 n.  平等， 同等， 均等
mix	 v.  混合， 搅拌
ought	 aux. 应该，应当；大概 vi. 应该，应当；大概
dictation	 n.  听写
crayon	 n.  蜡笔； 蜡笔画
honour	 vt. 尊敬，给予荣誉 n.  荣誉， 光荣
bother	 vt.  烦扰， 打扰
expression	 n.  表情； 表达法， 表达方式
middle	 adj.  中部的， 中间的， 中级的 n. 中间，当中
childhood	 n.  幼年时代， 童年
though	 conj&adv.  虽然， 可是， 尽管
thorough	 adj.  彻底的
appeal	 n&v.  呼吁， 请求
everyday	 adj.  日常的
stay	 v. 保持，停止，阻止 n.  逗留
appear	 vi.  出现； 看来， 似乎
face	 n. 脸；面容；表情；面子；正面 vt.  面向； 面对， 朝； 正视； 面临
abandon	 vt.  放弃
congratulation	 n. 祝贺，恭贺
inspire	 v.  鼓舞， 激励； 启示
afraid	 adj.  害怕的， 恐惧的
progress	 vi.  进展； 进行 n.  进步， 上进
geometry	 n.  几何学
invite	 vt.  邀请； 招待
open	 adj. 公开的；开着的 v.  打开； 公开
devote	 vt.  奉献； 致力； 专心
agent	 n.  代理商
treat	 vt.  对待， 看待； 治疗
abortion	 n.  流产； 堕胎
bishop	 n.  主教
suffering	 n.  痛苦，苦难
afterward	 adv.  后来
reputation	 n.  名誉， 名声
project	 n.  项目， 工程
inside	 adv.  在里面， 在内部 prep. 在…里面，在…之内
independence	 n.  独立
presentation	 n.  演示， 演出； 呈现， 展示
whenever	 conj.  无论何时
dynasty	 n.  朝代， 王朝
bark	 v. 〔狗〕吠叫 n. 狗叫声，吠声
greedy	 adj.  贪婪的
awkward	 adj.  笨拙的； 难使用的
bare	 adj.  赤裸的 vt. 使赤裸；露出
ruin	 v. 毁坏；毁灭
mutton	 n.  羊肉
celebrate	 v.  庆祝
admirable	 adj.  令人钦佩的； 极好的
please	 v.  使人高兴， 令人满意 int. 请
look	 vi.  看， 瞧； 看起来； 注意 n. [C]看，瞧
offshore	 adj&adv.  近海的， 向海的
fortnight	 n.  两星期
scar	 n.  伤疤
mountainous	 adj.  多山的
inspect	 vt.  检查； 审视
campaign	 vi.  参加活动； 作战 n. 战役；竞选活动
vital	 adj.  重大的， 生死攸关的
conflict	 n.  斗争， 冲突
allow	 vt.  允许， 准许
rough	 adj.  粗糙的； 粗略的
knock	 n&v.  敲； 打； 击
mass	 n. 众多，大量；
rule	 n. 规则，规定；统治 vt.  统治； 支配
proper	 adj.  恰当的， 合适的
update	 vt&n.   现代化； 更新
amateur	 adj. 业余爱好的 n.  业余爱好者
poisonous	 adj.  有毒的； 有害的； 致命的
condemn	 vt.  谴责， 声讨
assistance	 n.  援助， 帮助
bitter	 adj.  有苦味的； 痛苦的； 严酷的
speed	 v. 加速 n.  速度
gesture	 n.  姿势； 手势
admit	 v.   承认； 准许
common	 adj.  普通的； 公共的； 共有的
interest	 n. 兴趣，趣味；利息 vt.  使产生兴趣
wonder	 v. 想知道；对…感到惊讶 n.  奇迹
sleepy	 adj.  想睡的， 困倦的， 瞌睡的
sneeze	 n&vi.  打喷嚏
bath	 n.  [C] 洗澡； 浴室； 澡盆
every	 adj.  每一， 每个的； 每…
mask	 v.  戴面具； 掩饰 n. 口罩，面罩；遮盖物
thermos	 n.  热水瓶
summary	 n.  [C] 摘要， 概要
apply	 v.  申请； 应用
overlook	 vt.  俯瞰； 远眺
politician	 n.  政治家
taxpayer	 n.  纳税人
indeed	 adv.  确实， 实在
seagull	 n.  海鸥
artificial	 adj.  人造的； 非天然的
disagree	 vi.  意见不一致， 持不同意见
comment	 v.  评论； 注释 n. 评论
step	 v. 走；跨步 n.  脚步； 台阶
forever	 adv.  永远地， 永恒地
mark	 v.  做记号， 标记 n. 标记；分数
base	 n. 根据地；底部 vt.  以…为基础， 基于…
employ	 vt.  雇用
trend	 n.  倾向， 趋势； 时尚
achievement	 n.  [U] 完成， 达到； [C] 成就， 成绩
whole	 adj.  完整的， 所有的
fair	 adj. 公平的；晴朗的；白皙的 n.  集市， 展览会
during	 prep.  在…期间， 在…过程中
balcony	 n.  阳台； 包厢
revolution	 n.  革命， 变革
mop	 v. 用拖把拖地 n.  拖把
consist	 vi.  由…组成
preparation	 n.  准备， 预备； 准备工作， 准备措施
relation	 n.  关系； 亲属
reliable	 adj.  可靠的
loss	 n.  丧失； 损耗
relate	 v.  有关； 涉及
typhoon	 n.  台风
decoration	 n.  装饰， 修饰； 勋章
eggplant	 n.  茄子
zip	 v. 拉开拉链，拉上拉链 n.  拉链
profession	 n.  职业； 专业
still	 adv.  仍然， 还 adj. 静止的，平静的
worn	 adj.  破烂的， 损坏的
arise	 vi.   起来， 升起； 出现
dizzy	 adj.  头晕目眩的
work	 v.  工作； 运作； 奏效 n. 工作；著作
lose	 vt.   失去， 丢失
agree	 v.  同意； 应允
fail	 v.  失败； 不及格； 衰退
toward	 prep.  向， 朝， 对于
enjoyable	 adj.  愉快的； 有趣的
anyone	 pron.  任何人， 无论谁
convince	 vt.  使确信， 使信服
pride	 v.  自豪， 自夸 n. 自豪，骄傲
emperor	 n.  皇帝
word	 n.  单词； 言语； 消息， 音讯
theory	 n.  理论
broadcast	 v. 广播 n.  广播节目
love	 n. 爱；热爱；爱情；爱好 vt.  爱， 热爱； 很喜欢
extension	 n.  伸展， 延伸
signature	 n.  签名
steep	 adj.  险峻的， 陡峭的
seize	 v.  抓住
literary	 adj.  文学的
architect	 n.  建筑师； 设计师
forehead	 n.  前额
enjoy	 v.  欣赏， 享受…之乐趣； 喜欢
privilege	 n.  特权， 特别待遇
fireworks	 n.  烟火
substitute	 vt.  替换
foreign	 adj.  外国的
across	 prep.  横过， 穿过
uniform	 n.  制服
fall	 v. 落，降落；跌倒 n.  秋季
identity	 n.  身份； 一致
violate	 vt.  违反， 干扰
federal	 adj.  中央的 ， 联邦的
event	 n.  事件， 大事； 竞赛
academy	 n.  学院
wherever	 conj.  无论何处； 任何地方
reward	 n.  奖赏； 报答； 报酬； 回报
include	 vt.  包含， 包括
alongside	 adv&prep.  在旁边； 沿着
swallow	 vt. 吞下；咽下 n.  燕子
agency	 n.  代理处， 经销处
abstract	 adj.  抽象的 n. 抽象；概要
agenda	 n.  议程
opinion	 n.  看法， 见解
altogether	 adv.  总共
appearance	 n.  出现， 露面； 容貌
culture	 n.  文化
devotion	 n.  奉献， 奉献精神
prefer	 vt.   宁愿  ； 更喜欢
perfect	 adj.  完美的， 极好的
butcher	 vt. 屠宰，残杀 n.  肉店； 屠夫
float	 v.  漂浮， 浮动
pole	 n.  杆， 电线杆； 极
minority	 n.  少数； 少数民族
tight	 adj&adv.  紧的
space	 n.  空白处； 空地； 空间； 太空
reference	 n.  涉及； 参考； 证明书
arrange	 vt.  安排， 布置
from	 prep.  从； 从…起； 距； 来自
alley	 n.  小巷； 弄堂； 胡同
discover	 vt.  发现， 找到
bench	 n.  长凳； 工作台
commitment	 n.  承诺， 许诺； 保证； 献身； 投入
excite	 vt.  刺激； 使兴奋， 使激动
rhyme	 v.   押韵； 作诗 n. 韵，押韵
spade	 n.  铲子； 纸牌中的黑桃
revision	 n.  复习， 温习； 修订
qualification	 n.  资格， 条件； 资格证书
collision	 n.  碰撞； 冲突
bridegroom	 n.  新郎
repair	 vt. 修理，修补；纠正；恢复 n.  修理， 修补
advice	 n.  忠告， 劝告， 建议
frequent	 adj.  经常的， 频繁的
insure	 v.  确保； 给…保险
elder	 adj. 年长的 n.  长者， 前辈
error	 n.  错误
windy	 adj.  多风的
Oceania	 n.  大洋洲
public	 adj. 公共的，公众的，国家的 n.  公众
spend	 vt.   度过； 花费
barbershop	 n.  理发店
track	 n.  小道； 足迹； 轨道
value	 n. 价值，益处 vt.  估价， 评价
foggy	 adj.  有雾的， 多雾的
quantity	 n.  数量
fortune	 n.  财产； 运气
advantage	 n.  优点， 好处
instead	 adv.  代替， 顶替
rush	 vi.  冲， 奔跑
command	 n&v.  命令
expensive	 adj.  昂贵的， 高消费的
cloudy	 adj.  多云的， 阴天的
compulsory	 adj.  必修的； 义务的
trade	 n. 贸易 vt.  买卖
dessert	 n.  甜点， 甜食
round	 adv. 转过来 adj.  圆的， 球形的 prep. 环绕一周，围着
ambassador	 n.  大使
non-stop	 adj&adv.  不停的， 不断的
temple	 n.  庙宇， 寺院
growth	 n.  生长； 增长
vague	 adj.  含糊的， 不清楚的
communist	 adj.  共产党的， 共产主义的 n. 共产主义者
fare	 n.   费用， 票
temporary	 adj.  暂时的， 临时  的
desperate	 adj.  令人绝望的； 不顾一切的
unrest	 n.  不安； 骚动
kangaroo	 n.  大袋鼠
accuracy	 n.  准确性
awful	 adj.  糟糕的， 可怕的
handy	 adj.  便利的； 手边的； 附近的
urge	 vt.  催促， 力劝
via	 prep.  经， 经过， 经由
score	 v.  得分 n. [Ｃ]得分，分数；二十；许多，很多
poor	 adj.  贫穷的， 可怜的； 差的
graduate	 v.  毕业 n.   毕业生； 研究生
visual	 adj.  视力的， 视觉的
absent	 adj.  缺席的， 不在的
rag	 n.  破布， 抹布
because	 conj.  因为
near	 adv.  附近， 邻近 adj. 近的 prep. 在…附近，靠近
educate	 v.   教育， 培养
ashamed	 adj.  惭愧的， 害臊的， 羞耻的
appendix	 n.  附录， 附属品； 阑尾
instruct	 v.  指示； 教导； 通知
excellent	 adj.  极好的， 优秀的
fairly	 adv.  相当； 还算； 公正地
handwriting	 n.  书法
raw	 adj.  生的； 未加工的
merchant	 adj.  商业的， 商人的 n. 商人，生意人
retell	 vt.  重讲， 重复， 复述
ray	 n.  光辉， 光线
version	 n.  译文； 版本
exam	 n.  考试， 测试； 检查
stop	 vt. 停止；阻止 n.  停；  站
nationality	 n.  国籍； 民族
guess	 v.  猜， 猜测； 认为
adolescence	 n.  青春期
aboard	 prep&adv.  在船上， 上船
institute	 v.  建立， 设立 n. 协会；学院
poster	 n.  海报， 广告
shortly	 adv.  不久
appropriate	 adj.  适当的
criterion	 n.   标准， 规则
least	 n.  最少， 最少量
immediately	 adv.  立即
symphony	 n.  交响乐
optimistic	 adj.  乐观的
sleep	 n&vi.  睡觉
vocabulary	 n.  词汇， 词汇表
refuse	 v.  拒绝， 不愿
aspect	 n.  方面； 外表
aggressive	 adj.  侵略的； 咄咄逼人的
close	 adv.  近， 靠近 adj. 近的；亲密的 v.  关， 关闭
sweep	 vt.   扫除， 打扫
website	 n.  网站
learn	 vi. 学，学习；得知，获悉 vt.  学， 学习， 学会， 得知
swing	 v. 挥舞，摆动 n.  秋千
ridiculous	 adj.  荒谬的， 可笑的
severe	 adj.  严重的
spin	 vt. 纺纱；旋转 n.  旋转
grocery	 n.  杂货； 食品； 食品杂货店
communism	 n.  共产主义
spit	 v.   吐唾沫； 吐痰
anniversary	 n.  周年纪念
register	 v.  登记， 注册 n. 记录，登记簿
couple	 n.  夫妇；  对，  双
communicate	 v.  交际； 传达 ； 通信
eager	 adj.  渴望的， 热切的
evidence	 n.  证据
republic	 n.  共和国
official	 adj.  官方的， 政府的； 公务的 n. 官员；高级职员
acid	 adj.  酸的
assessment	 n.  估价； 评价
post	 n. 岗位，职位；邮政，邮寄，邮件 vt.  投寄； 邮寄； 发布
agricultural	 adj.  农业的
leave	 v.   离开； 留下； 遗忘
duck	 v.  躲避； 浸入水中 n. 鸭子
cottage	 n.  小屋； 村舍； 小别墅
tiresome	 adj.  令人厌烦的， 讨厌的
finish	 v.  结束， 做完
discrimination	 n.  歧视
female	 adj. 女性的，雌性的 n.  女性， 女人
melon	 n.  甜瓜
swift	 adj.  快的， 迅速的
add	 v.  添加， 增加
minister	 n.  部长； 牧师
need	 v. 必须 vt. 需要modal n.  需要， 需求
cruel	 adj.  残忍的， 残酷的； 无情的
erupt	 v.   喷发， 爆发
shade	 n.  阴凉处， 树荫处
often	 adv.  经常地
gather	 v.  聚集； 采集
insist	 v.  坚持， 坚决认为
article	 n.  文章； 东西； 冠词
respect	 n. 尊敬，尊重；方面 vt.  尊敬， 尊重
ache	 vi. 疼痛 n.  痛， 疼痛
loose	 adj.  松散的； 宽松的
therefore	 adv.  因此， 所以
exchange	 n&v.  交换； 交流； 兑换
adjustment	 n.  调整， 调节； 校正
hesitate	 v.  犹豫， 踌躇
hardly	 adv.  几乎不
bored	 adj.  无聊的， 厌烦的
trust	 vt&n.  相信， 信任， 信赖
income	 n.  收入， 所得
private	 adj.  私人的； 私营的； 秘密的
technical	 adj.  技术的， 工艺的
companion	 n.  同伴， 同事
choose	 vt.   选择； 决定
directory	 n.  姓名地址录； 公司名录
peaceful	 adj.  和平的， 安宁的
prevent	 v.  防止， 阻止
behave	 v.  表现； 行为得体
accomplish	 vt.  完成， 达到
disturbing	 adj.  令人不安的； 引起烦恼的
engine	 n.  发动机， 引擎
photographer	 n.  摄影师
end	 v. 结束，终止 n.  终点； 结束
mistake	 v. 弄错 n.  错误
pour	 v.  倾泻， 不断流出
message	 n.  消息， 留言； 要旨
praise	 n&vt.  赞扬， 表扬
significance	 n.  意义， 重要性
special	 adj.  特别的； 专门的
scissors	 n. 剪刀
environment	 n.  环境
truth	 n.  事实； 真理
clone	 n&v.  克隆， 无性繁殖
betray	 vt.  出卖， 背叛
pronounce	 v.  发音
family	 n.  家； 家人
swear	 v.   发誓， 诅咒
gift	 n.  赠品； 礼物； 天赋， 才能
atmosphere	 n.  气氛； 大气
decorate	 v.  装饰， 修饰
education	 n.  教育， 培养
occupation	 n.  职业， 工作； 占领， 占据
tendency	 n.  [C] 倾向， 趋势
slim	 adj.  苗条的， 纤细的
arithmetic	 n.  算术
caption	 n.  标题； 字幕
rid	 vt.   使…摆脱
moral	 adj. 道德的，精神的 n.  道德； 寓意
number	 n.  数字， 号码； 数量
explode	 v.   爆炸； 爆发
greengrocer	 n.  蔬菜水果商
punish	 vt.  惩罚， 处罚
casual	 adj.  偶然的， 不经意的； 非正式的； 临时的
decline	 v.  下降； 衰败； 倾斜； 谢绝
narrow	 adj.  狭窄的
judge	 v. 判断，评价 n.  裁判， 法官
similar	 adj.  相似的， 像
contradict	 v.  同…矛盾， 同…抵触
Catholic	 adj.  天主教的
shape	 n. 形状，外形 vt.  使成形； 制造， 塑造
nothing	 pron.  没有东西， 没有什么； 无关紧要的东西
headmistress	 n.  女校长
anyhow	 adv.  不管怎样
whistle	 v.  鸣笛， 吹口哨 n. 口哨声；汽笛声
handle	 vt. 处理 n.  柄， 把手
chain stores	 n.  连锁店
crossing	 n.  十字路口； 人行横道
tough	 adj.  结实的； 棘手的
exit	 n.  出口
system	 n.  体系， 系统
giraffe	 n.  长颈鹿
spot	 n. 斑点，污点；场所，地点 vt.  沾上污渍， 弄脏； 认出， 发现
aid	 v.  帮助 n. 援助，救护；辅助器具
other	 pron&adj.  其他的， 另外的
aim	 v.  计划； 瞄准； 针对 n. 目的
against	 prep.  对着； 反对
confident	 adj.  自信的； 确信的
cell	 n.  细胞； 蜂房； 电池
swell	 v.  肿胀， 增大
courage	 n.  勇气， 胆略
local	 adj.  当地的， 地方的
remind	 vt.  提醒， 使记起
crew	 n.  全体人员
valid	 adj.  有效的
defeat	 vt.  击败； 战胜
spear	 n.  矛
encourage	 vt.  鼓励， 激励
electronic	 adj.  电子的
vacation	 n.  假期， 休假
speak	 v.   说， 讲； 谈话； 发言
share	 v. 分享，共同使用 n.  一份； 股份
bureaucratic	 adj.  官僚政治的
sacred	 adj.  宗教的； 庄严的， 神圣的
elegant	 adj.  文雅的， 雅致的
outcome	 n.  结果， 成果
curriculum	 n.  课程
satisfaction	 n.  满意
sharp	 adj.  尖锐的； 敏锐的； 整点的
powerful	 adj.  强有力的， 强大的； 有影响力的
slip	 v. 溜；滑动 n.  片， 纸片； 滑倒
future	 n.  将来
anchor	 v. 抛锚；停泊 n.  锚
acquaintance	 n.  相识， 熟人
novelist	 n.  小说家
royal	 adj.  王室的， 皇家的； 第一流的
shake	 vt.   使摇动； 震动
eyesight	 n.  视力， 视觉
semicircle	 n.  半圆
screen	 n.  幕， 荧光屏
autonomous	 adj.  自治的
referee	 n.  仲裁人， 调解人； 裁判员
trial	 n.  审判； 试验
correspond	 vi.  通信； 一致； 相当； 协调
undertake	 vt.   承担； 保证
insect	 n.  昆虫
buffet	 n.  自助餐
entrance	 n.  入口； 入场； 入学许可
pregnant	 adj.  怀孕的
all	 adj&pron&adv.   全部
always	 adv.  总是； 一直； 永远
border	 n.  边缘； 边境， 国界
below	 adv.  在下面 prep. 在…下面
already	 adv.  已经
touch	 v. 触摸，接触 n. 接触；联系 vt.  感动
shall	 modal verb. 〔某事〕必定，一定〔发生〕
admission	 n.  准许进入； 承认
real	 adj.  真实的， 确实的
expense	 n.  费用， 支出
unit	 n.  单元； 单位
yell	 vt.  大叫， 呼喊
contemporary	 adj.  当代的； 同时代的
collect	 v.  收集， 搜集
dusty	 adj.  尘土般的； 尘土多的
amusement	 n.  娱乐， 消遣
boundary	 n.  边界， 分界线
shame	 n.  遗憾的事； 羞愧
rob	 v.   抢夺， 抢劫
outing	 n.  远足； 郊游
trick	 n.  [C] 诡计， 把戏
favour	 n.  恩惠； 好感； 帮助
around	 adv. 在周围；在附近；大约；掉头 prep.  在…周围； 绕着
pollute	 vt.  污染
disappoint	 v.  失望
rot	 v.   腐烂， 腐败
construction	 n.  建造， 建设； 建筑物
predict	 v.  预言； 预报
row	 v.  划船 n. 排，行
universal	 adj.  普遍的， 全体的
abroad	 adv.  到国外； 在国外
frontier	 n.  国境， 边界； 前线
subjective	 adj.  主观的
deliberately	 adv.  故意地
seaweed	 n.  海草， 海藻
drawer	 n.  抽屉
transport	 n.  运输； 传送器 vt.  运输， 传送
specific	 adj.  特殊的； 明确的
any	 pron.  任何一个； 任何一些 adj. 任何的；一些
application	 n.  申请； 申请书
freezing	 adj.  冻结的； 极冷的
punctuation	 n.  标点符号
acre	 n.  英亩； 田地
whisper	 n&v.  低语， 私语
appetite	 n.  食欲， 胃口
until	 prep&conj.  直到…为止， 在…以前
dull	 adj.  单调无味的； 阴暗的； 迟钝的
clumsy	 adj.  笨拙的
reason	 v.  说服， 劝说 n. 理由，原因
thought	 n.  思考， 思想； 念头
accurate	 adj.  正确的， 准确的
ring	 v. 响；打电话 n.  电话铃声； 环形物
taste	 n. 喜爱，爱好，口味 v. 有…的味道
anywhere	 adv.  任何地方
bargain	 v.  讨价还价 n. 便宜货，廉价货
identification	 n.  辨认， 鉴定； 身份证明
jam	 v. 阻塞 n.  果酱； 阻塞
annual	 adj.  一年一次的， 每年的
gentle	 adj.  温柔的， 柔和的
cheers	 int.  干杯
boil	 v.  沸腾， 烧开； 煮
sneaker	 n. 胶底运动鞋
lightning	 n.  闪电
remain	 vi. 余下，留下 v.  保持， 仍是
shabby	 adj.  破旧的， 衣衫褴褛的； 不公正的， 不讲理的； 低劣的
amaze	 vt.  惊奇， 惊叹， 震惊
demand	 n&v.  要求， 需要
envelope	 n.  信封
slow	 adj. 缓慢的 v.  放慢速度， 减缓
turkey	 n.  火鸡
grade	 n.  等级； 学年； 成绩， 分数
deposit	 n&v.  存 ； 堆积
tasty	 adj.  味道好的
telescope	 n.  望远镜
flash	 v.   闪光，  闪现 n. 闪，闪光，转瞬间
skillful	 adj.  熟练的； 技艺精湛的； 灵巧的
continent	 n.  大陆， 大洲
accuse	 vt.  控告， 谴责
maybe	 adv.  可能， 大概， 也许
another	 pron.  另一个 adj. 另一；别的
guarantee	 vt&n.  保证， 担保
algebra	 n.  代数学
recommend	 v.  推荐
acquire	 vt.  获得； 学到
worth	 adj.  值得的； 价值…
helicopter	 n.  直升机
ripe	 adj.  成熟的， 熟的
where	 adv&conj.  那儿； 何处
disabled	 adj.  残疾的
watermelon	 n.  西瓜
arm	 v.  以…装备， 武装起来 n. 手臂；支架
popular	 adj.  流行的， 受欢迎的； 大众的
broken	 adj.  弄坏了的， 破碎的
outwards	 adv. 向外，在外 adj.  向外的， 外出的
vice	 prep.  副， 次； 代替 n. 恶习；缺陷
poison	 n.  毒药
silly	 adj.  傻的，愚蠢的
liberation	 n.  解放
fortunate	 adj.  幸运的， 侥幸的
wrinkle	 n.  皱纹
tour	 n.  [C] 参观， 观光， 旅行
persuade	 v.  说服， 劝说； 使相信
call	 n. 叫；电话 vt.  称呼； 呼唤； 叫； 给…打电话
consensus	 n.  一致意见
such	 adv. 那么，如此 pron.   人， 事物 adj. 这样的，那样的
calm	 adj. 镇静的，沉着的 v.  镇静， 沉着
boring	 adj.  令人厌烦的
classic	 adj.  经典的， 一流的
kick	 v&n.  踢
absolute	 adj.  完全的， 绝对的
ask	 v.  询问； 要求
canteen	 n.  餐厅； 食堂
describe	 vt.  描写， 叙述
suck	 v.  吸， 吮
dilemma	 n.  进退两难的局面
wealthy	 adj.  富有的
strength	 n.  力量， 力气
dusk	 n.  黄昏
administration	 n.  管理； 行政部门
run	 vi.  跑， 奔跑； 褪色； 经营， 管理
challenging	 adj.  具有挑战性的
research	 n.  研究， 调查
debate	 n&v.  讨论， 辩论
view	 n.  看法； 景色
either	 determiner. 〔两者中的〕任何一个 adv. 也(不)
furniture	 n.  〈总称〉 家具
jet	 v. 喷射 n.  喷气式飞机； 喷射
donate	 v.  捐赠， 赠送
helpful	 adj.  有帮助的， 有益的
dust	 n.  灰尘， 尘土
worry	 v&n.  担忧， 烦恼
cater	 v.  投合； 备办食物
imagine	 v.  想象， 设想
attractive	 adj.  迷人的， 有吸引力的
superb	 adj.  庄重的， 华丽的， 极好的
might	 modal verb. 可以〔用于礼貌地提出建议〕 n. 力量；威力；权力
bleed	 v.   出血， 流血
catalogue	 n.  目录
whatever	 conj&pron.  无论什么
decrease	 v.  减小， 减少
camp	 n&vi.  野营， 宿营
difficulty	 n.  困难， 费力； 异议
volunteer	 v. 自愿 n.  志愿者
everywhere	 adv.  到处
clothing	 n.  〈总称〉 衣服
aloud	 adv.  大声地； 出声地
thunderstorm	 n.  雷暴， 雷雨交加
mourn	 v.  哀痛； 哀悼
next	 adv. 随后，然后，下一步 adj. 最近的；紧挨着的，隔壁的；下一次 n.  下一个人
blind	 adj.  瞎的， 盲的
nod	 v&n.   点头
string	 n.  细绳， 线， 带
import	 n.  进口， 输入
distance	 n.  距离
occupy	 vt.  占领， 占据
submit	 vt.   提交， 递交
boom	 v.  发出隆隆声； 兴隆， 使繁荣 n. 繁荣；隆隆声
abolish	 vt.  废止； 废除
absence	 n.  不在， 缺席； 没有
nearly	 adv.  将近； 几乎
attract	 v.  吸引； 引起
show	 v. 给…看，出示，
edition	 n.   版， 版本
cautious	 adj.  小心的， 谨慎的
disappear	 vi.  消失
perfume	 n.  香味； 香水
shot	 n.  射击， 开枪， 开炮， 射击声； 子弹； 拍摄
conclusion	 n.  [C] 结论； 结束
nor	 conj.  也不
central	 adj.  中心的， 中央的； 主要的
defend	 vt.  保护， 防御
arrive	 vi.  到达， 达到
memorial	 adj.  纪念的 n. 纪念碑，纪念物
wag	 v.   摇动， 摆动
race	 v.  赛跑， 比赛 n. 种族；比赛
introduce	 vt.  介绍； 引进
greet	 vt.  问候， 向…致敬
sculpture	 n.  雕塑  ， 雕像
bond	 v.  黏合； 结合 n. 联结；联结物
way	 n.  道路； 方法； 作风
target	 n.  目标， 对象； 靶子
wax	 n.  蜡， 蜡状物
grey	 adj.  灰色的； 灰白的
what	 pron&adj&conj.  什么
urban	 adj.  城市的， 市内的
guidance	 n.  引导， 指导
refer	 v.   谈到， 提到
nervous	 adj.  紧张不安的， 神经质的
duty	 n.  责任； 义务； 税
risk	 n. 冒险，风险 vt.  冒…的危险
flame	 n.  火焰， 光辉
rise	 n.  上升， 上涨
play	 v. 玩；打；播放 n.  玩耍； 戏剧
delicate	 adj.  精巧的， 精致的
fancy	 adj. 奇特的；空想的 n. 空想，假想 vt.  想象， 空想
bounce	 v.  使反弹； 跳跃
tissue	 n.  薄的纱织品； 薄纸；  组织
decide	 v.  决定， 下决心
rent	 v.  租用； 出租 n. 租金
when	 adv.  在那时 conj. 什么时候；当…的时候
nearby	 adv.  在附近 adj. 附近的
carpenter	 n.  木匠
modest	 adj.  谦虚的， 谦逊的
cast	 vt. 扔，抛 n.  演员表
anxious	 adj.  忧虑的； 焦急的
fan	 n.   迷， 狂热的爱好者、 支持者； 风扇
slice	 n.  片， 薄片
far	 adj&adv.   远的
frost	 n.  霜
catch	 vt.   接住； 捉住； 赶上； 染上
fax	 n.  传真
plan	 n&v.   计划， 打算
cash	 n. 现金，现钞 vt.  兑现
case	 n.  情况； 病例； 案件； 容器
generation	 n.  代， 一代
give	 v.   给， 付出
double	 adj. 两倍的；双重的 v.  加倍 n. 两个；双打
downtown	 n&adj.  市区 ， 闹市区
trunk	 n.  树干； 大箱子
stainless	 adj.  无污染的； 无瑕疵的； 不锈的
explicit	 adj.  清楚的； 直率的
rely	 vi.  依赖， 依靠； 信任
phone	 v. 打电话 n.  电话； 电话机
slide	 v. 滑行，滑动 n.  幻灯片； 滑道
comfortable	 adj.  舒服的； 安逸的； 舒服自在的
waist	 n.  腰部， 腰围
style	 n.  风格， 时尚
jungle	 n.  丛林， 密林
flesh	 n.  肉， 肉体
suit	 vt. 适合 n.  一套
grill	 n.   烤架； 烤肉
care	 v. 介意，在乎；在意；关心 n.  照料； 保护； 小心
damage	 n&v.  毁坏， 损害
guard	 v. 保卫，看守 n.  防护装置； 警戒
settle	 vi. 安家，定居 vt.  解决
direct	 adj. 直接的；直达的 v.  指挥， 指导
pattern	 n.  式样； 模式
exercise	 v.  锻炼 n. [C]练习；[U]锻炼
labour	 n.  劳动， 劳力
gain	 v. 获得，挣得 n.  收获
vehicle	 n.  车辆
hardship	 n.  困难， 艰辛
confuse	 vt.  使糊涂； 搞乱
kilo	 n.  千克； 公斤
freedom	 n.  自由
cushion	 n.  垫子
scold	 vt.  责骂， 谴责
modern	 adj.  现代的， 近代的； 时尚的
physics	 n.  物理
seldom	 adv.  很少， 不常
physician	 n.   医生
protect	 vt.  保护
architecture	 n.  建筑， 建筑学
souvenir	 n.  纪念品， 纪念物
dial	 v.  拨
stress	 n. 压力 vt.  强调
explore	 v.  探险； 探索
more	 adv. 更 pron.  更多的…； 另外的… adj. 更多的
wet	 adj.  湿的
born	 adj.  出生的
strawberry	 n.  草莓
electricity	 n.  电； 电流
tentative	 adj.  试验性的； 试探的 n. 试验；假设
climate	 n.  气候； 风气； 环境气氛
kill	 vt.  杀死， 弄死； 消磨
conductor	 n.  管理人； 指导者； 售票员， 列车员； 乐队指挥
porridge	 n.  稀饭， 粥
pleased	 adj.  高兴的
certain	 adj.  某些； 确定的， 无疑的； 一定会…
woolen	 adj.  羊毛的， 羊毛制的
board	 n. 木板；布告牌；委员会 vt.  上
statistics	 n.  统计表， 数字， 数据
shut	 v. （使）关[合]上，（使）关闭 adj. 关闭的，关上的
arrest	 vt&n.  逮捕， 拘留
distinction	 n.  区别； 差别
widow	 n.  寡妇
mature	 adj.  成熟的， 成年的
navy	 n.  海军
disability	 n.  残疾； 无能
fee	 n.  费， 费用
section	 n.  段； 部分； 部门
simple	 adj.  简单的， 简易的
used	 adj.  用过的； 旧的， 二手的
influence	 n&vt.  影响
mustard	 n.  芥末， 芥子粉
percentage	 n.  百分率； 比例
talent	 n.  天才， 才能
few	 pron.  不多， 少数 adj. 不多的，少数的
otherwise	 adv.  否则， 要不然
negotiate	 v.  谈判， 协商
hunt	 v&n.  寻找； 狩猎， 猎取
package	 n.  一包， 一袋， 一盒； 包裹
pronunciation	 n.  发音
kind	 adj.  善良的， 亲切的， 和蔼的， 仁慈的 n. [C]种；类
survival	 n.  幸存； 生存
strait	 n.  海峡
both	 pron.  两者都； 双方都 adj. 双方的
voyage	 n.  航行， 旅行
important	 adj.  重要的
nutrition	 n.  营养
detective	 n.  侦探
phrase	 n.  短语， 习惯用语
personally	 adv.  就自己而言
outside	 adv. 在外面，向外面，出界 adj. 外面的，外表的 prep.  在…外 n. 外面，外表，外界
passer-by	 n.  过客， 过路人
keep	 v. 保留；保存；使…保持某种状态； 保持， 继续
effect	 n.  效果； 作用， 影响
affection	 n.  友爱； 爱情
yoghurt	 n.  酸乳酪
skate	 vi.  溜冰， 滑冰
correction	 n.  改正
embarrass	 vt.  使困窘， 使局促不安
who	 pron.  谁
weigh	 v.  称量； 重
sponsor	 n. 赞助者；主办者 vt.  赞助； 主办
acute	 adj.  尖锐的； 敏锐的； 严重的； 急性的
kindergarten	 n.  幼儿园
jog	 v.   慢跑
terrify	 vt.  使人感到害怕， 使恐惧
contribute	 v.  捐款， 捐献
faith	 n.  信仰， 信念； 信任
insert	 vt.  插入
why	 adv. 为什么 interjection. 哎呀，嗨〔表示惊讶或突然意识到某事〕
remark	 n&v.  陈述， 评论
forbid	 v.   禁止， 不许
microscope	 n.  显微镜
tortoise	 n.  乌龟
candidate	 n.  候选人
alone	 adj.  单独的， 孤独的
database	 n.  资料库， 数据库
parallel	 adj.  平行的 n. 平行线；类似
patient	 adj.  耐心的 n. 病人
reject	 vt.  拒绝
dialogue	 n.  对话
diet	 v.  节食 n. 饮食；节食
profit	 v.  赢利， 获益于 n. 利润，益处
win	 v.   赢得， 获胜
rest	 vi.  休息， 歇息 n. 休息；剩余的部分，其余的人
move	 v.  移动， 搬动， 搬家
amount	 vi. 总计；等于 n.  数量
handful	 n.  把； 少数， 少量
album	 n.  照相簿； 集邮本； 签名纪念册
electric	 adj.  电的
yawn	 v.  打呵欠
say	 v.   说， 讲
also	 adv.  也
terminal	 n.   终点站； 终端
enough	 n&adj&adv.  足够  ； 充足
increase	 v.  增加， 繁殖 n.  增加， 加大
differ	 vi.  不一致， 有区别
shine	 v.  发光； 照耀
spread	 n&v.   延伸， 展开； 传播
various	 adj.  各种各样的， 不同的
attention	 n.  注意； 关心
latter	 n.   后者
front	 adj. 前面的；前部的 n.  前面； 前部； 前线
visit	 n&v.  参观， 访问， 拜访
clinic	 n.  诊所
customer	 n.   顾客， 主顾
stupid	 adj.  愚蠢的， 笨的
greeting	 n.  祝贺； 问候； 致谢
bring	 vt.   拿来， 带来， 取来
beddings	 n.  被褥
awake	 v. 唤醒 adj.  醒着的
kiss	 n. [C]吻，亲吻 vt.  吻， 亲吻
ban	 vt. 禁止；取缔 n.  禁令
hamburger	 n.  汉堡包
fond	 adj.  喜爱的， 爱好的
fit	 v. 适合 adj.  适合的， 健康的
offer	 v&n.  提供； 提出； 出价
robot	 n.  机器人
bar	 n.  酒吧； 条， 横木； 栅栏
suffer	 v.  受苦， 遭受
fix	 v.  修理， 安装； 确定， 决定
neighbourhood	 n.  四邻， 邻近地区
complex	 adj. 复杂的；联合的 n.  联合体
draft	 vt. 起草 n.  草稿
honest	 adj.  诚实的， 正直的
pension	 n.  养老金
assumption	 n.  假设， 假定
rank	 n.  等级， 级别； 职衔， 军衔
rubbish	 n.  垃圾； 废物
addition	 n.  增加； 加法
afterwards	 adv.  后来
sure	 adv.  〈口语〉 的确， 一定， 当然 adj. 确信，肯定
grow	 v. 种植；生长，发育； 渐渐变得， 变成
carve	 v.  刻； 雕刻
shrink	 v.   收缩； 缩短
ancestor	 n.  祖宗， 祖先
league	 n.  联盟， 社团
personal	 adj.  个人的， 私人的
angry	 adj.  生气的， 愤怒的
former	 adj.  以前的， 从前的；  前者
panic	 v. 惊恐，恐慌 n.  惊慌， 恐慌
fold	 v.  折叠； 合拢； 包围
stewardess	 n.  女乘务员， 空中小姐
as	 adv.  像…一样 conj. 当…时；正如；因为；尽管 prep. 作为，以…身份
delay	 n&v.  拖延
at	 prep.  在…； 以…
chemical	 adj. 化学的 n.  化学制品
turning	 n.  拐弯处， 拐角处
peace	 n.  和平； 安宁
plant	 vt. 种植；播种 n.  植物
folk	 adj.  民间的
enquiry	 n.  询问
drive	 v.  驾驶， 开； 驱赶
hurt	 v.   伤害
deal	 v. 处理 n.  量， 数额； 交易
abuse	 vt.  滥用 n.  辱骂， 粗话
prove	 vi.  证明是， 结果是， 原来是 vt. 证明，证实
homeland	 n.  祖国
affect	 vt.  影响
deaf	 adj.  聋的
admire	 vt.  钦佩； 羡慕
virus	 n.  病毒
amuse	 vt.  使快乐， 逗乐
see	 v.   看见， 看到； 领会
search	 n&v.  搜寻， 搜查
furnished	 adj.  配备了家具的
responsibility	 n.  责任
sudden	 adj.  突然的
fool	 v.  欺骗； 做蠢事； 游手好闲 n. 傻子，蠢人，白痴
civil	 adj.  国内的； 平民的； 民事的
by	 prep.  靠近； 到…时； 被； 由； 以…的标准
whom	 pron&conj.  谁
indicate	 vt.  指出， 显示
set	 vt. 设置，调整；树立；摆放；日落 n.  一套； 设备
charge	 v. 收费；指控；索价；充电 n.  费用， 价钱
contain	 vt.  包含； 包括
outstanding	 adj.  突出的， 显著的； 杰出的
litter	 v.  乱丢杂物
oval	 adv. 椭圆
procedure	 n.  程序， 手续
familiar	 adj.  熟悉的
biography	 n.  传记
breathe	 v.  呼吸
applicant	 n.  申请人
battle	 n.  战斗； 战役
awesome	 adj.  可怕的； 引起敬畏的
partner	 n.  搭档， 合作者
gifted	 adj.  有天赋的， 有才华的
visa	 n.  签证
zipper	 n.  拉链
Arctic	 n.  北极
unfit	 adj.  不适宜的， 不相宜的
interview	 n&v.  采访； 会见； 面试
clarify	 v.  澄清， 阐明
beauty	 n.  美， 美丽； 美人
beg	 v.  请求， 乞求
scare	 v.  惊吓， 威吓； 受惊
do	 v.  用以构成疑问句及否定句 vt. 做，干
observe	 v.  观察； 遵守
humorous	 adj.  幽默的
garment	 n.  衣服， 外衣
rare	 adj.  罕见的， 稀有的
useless	 adj.  无用的
which	 pron.  哪一个； 哪一些
disadvantage	 n.  不利条件； 弱点
garbage	 n.  垃圾
mainland	 n.  大陆
downstairs	 adv.  在楼下， 到楼下
marble	 n.  大理石
never	 adv.  决不， 从来没有
anxiety	 n.  忧虑； 焦急
piece	 n.  一块  ； 小的部分
adjust	 v.  适应； 调整， 调节
carry	 v.  携带； 搬运； 背
burst	 v.   突然发生； 爆炸
western	 adj.  西方的； 西部的
debt	 n.  债务， 欠款
little	 adj.   小的； 少的
however	 adv.  可是， 然而， 尽管如此； 无论如何
deep	 adv.  深深地； 在深处 adj. 深的；深厚的；沉睡的；渊博的
goose	 n.   鹅
forgive	 vt.   原谅， 宽恕
origin	 n.  起源； 由来
for	 conj.  因为， 由于 prep. 为了；在…期间；对于
mistaken	 adj.  错误的
content	 adj.  满意的 n.  内容； 含量
deed	 n.  行为， 事迹
burden	 n.  担子， 负担
salute	 n&v.  敬礼； 问候
random	 adj.  随意的， 任意的
perhaps	 adv.  可能， 或许
plot	 vt. 密谋 n.  情节
rate	 v.  估价； 认为 n. 比率；价格；速度
skill	 n.  技能， 技巧
trouble	 n. 问题；疾病；麻烦 vt.  使苦恼； 使忧虑； 使麻烦
unfair	 adj.  不公平的， 不公正的
divide	 v.  分， 划分； 除以
contrary	 adj.  相反的 n. 反面
sit	 vi.  坐
digital	 adj.  数字的， 数码的
over	 adv. 越过 adj.  完了， 结束了 prep. 在…之上；超过
brilliant	 adj.  闪耀的； 有才气的
practical	 adj.  实际的； 适用的； 实用的； 应用的
pesticide	 n.  杀虫剂
bound	 adj. 被束缚的；有义务的 v.  跳跃
false	 adj.  假的； 不正确的
go	 v. 去，走；进行；进展； 变得， 变成
tease	 v.  取笑， 嘲弄
fork	 n.  叉； 餐叉
form	 v.  形成， 组建 n. 表格；形式；结构
publish	 v.  出版， 发行
pyramid	 n.  角锥形； 金字塔
cheque	 n.  支票
avoid	 vt.  避免， 躲开， 逃避
bid	 v&n.  出价， 投标
fresh	 adj.  新鲜的； 不熟练的
astonish	 vt.  使惊讶
withdraw	 v.   缩回， 撤回
straightforward	 adj&adv.  正直的， 坦率的
very	 adv. 很，非常 adj.  恰好的， 正好的
decade	 n.  十年
expert	 n.  专家， 能手
practice	 n.  实践； 练习； 惯例， 常规
select	 adj.  精选的 vt. 选择，挑选，选拔
crowd	 v.  拥挤， 群聚 n. 人群；堆
sick	 adj.  有病的， 患病的， 不舒服的；  呕吐的
bit	 n.  一点， 一些， 少量
welfare	 n.  福利； 安宁， 幸福
output	 n.  产量， 输出量
corner	 n.  角； 角落； 拐角
else	 adv.  别的， 其他的
modem	 n.   调制解调器
majority	 n.  多数
beside	 prep.  在…旁边； 靠近
join	 v.  参加， 加入； 连接； 会合
drag	 v.   拖， 拽
reduce	 vt.  减少， 缩减
likely	 adj.  很可能的
large	 adj.  大的； 巨大的
bakery	 n.  面包店
vain	 adj.  自负的； 徒劳的
ordinary	 adj.  普通的， 平常的
fry	 v.  油炸， 油煎
somebody	 pron.  某人； 重要人物
drink	 v. 喝 n.  饮酒
announce	 v.  宣布， 宣告
traditional	 adj.  传统的
lively	 adj.  活泼的； 充满生气的
operate	 v.  动手术； 操作， 运转
begin	 v.   开始， 着手
become	 vt.   变得， 成为
bacterium	 n.   细菌
paragraph	 n.   段落
oilfield	 n.  油田
alive	 adj.  活着的， 存在的
eventually	 adv.  最终地
neighbour	 n.  邻居
tournament	 n.  比赛， 锦标赛
cycle	 vi. 骑自行车，循环 n. 周期；循环 vt.  使循环
thinking	 n.  思索； 见解； 想法
literature	 n.  文学
astronomer	 n.  天文学家
prejudice	 n.  偏见， 成见
digest	 v.  消化； 领会 n.  摘要， 概要； 文摘
angle	 n.  角度
tradition	 n.  传统， 惯例
ability	 n.  能力； 才能
everything	 pron.  每件事； 一切， 所有的东西
unbearable	 adj.  无法忍受的
urgent	 adj.  急迫的， 紧急的
programme	 v.  为…编制程序 n. 节目；项目
belief	 n.  [C] 信条， 信念， 信仰； [U] 信任， 相信
delight	 n. 快乐，乐事 vt.  使高兴， 使快乐
immigration	 n.  移民
break	 v. 打破，弄坏；撕开 n.  间歇； 休息
chain store	 n.  连锁店
vest	 n.  背心， 内衣
change	 vt. 改变；更换；兑换 n.  零钱； 变化
suggestion	 n.  [C] 建议
fluency	 n.  流利， 流畅
draw	 v.   绘画； 拉， 吸引； 提取
systematic	 adj.  系统的， 有体系的
trolleybus	 n.  无轨电车
lantern	 n.  灯笼
cupboard	 n.  碗柜， 橱柜
off	 prep&adv.  离开， 走开
comfort	 v. 安慰，缓和 n.  安慰， 慰问
joke	 n.  笑话
knee	 n.  膝盖
punishment	 n.  惩罚， 处罚
hide	 v.   掩饰； 隐藏
troublesome	 adj.  令人烦恼的； 讨厌的
instruction	 n.  说明， 须知； 教导
report	 n&vt.  报道， 报告
oral	 adj.  口头的， 口述的
complete	 adj.  完成的， 完整的 vt. 完成；结束
compensate	 v.  补偿， 赔偿
fun	 n.  乐趣， 娱乐
constant	 adj.  经常的， 不断的
smog	 n.  烟雾
sob	 n&v.   抽泣， 呜咽地说
political	 adj.  政治的
while	 conj. 正当…的时候；然而 n.  一小会儿
anger	 n.  愤怒
second	 adj.  二等的 num. 第二 n. 秒
that	 determiner. 那，那个〔指已经提到或已经知道的人、事物、想法等〕 conjunction. 〔用于动词、名词或形容词后引导一个从句，表示某人所说或所想，或陈述一个事实或理由〕 adv. 那么〔大、多等〕〔尤指通过手势比画来表示大小、数量等〕
edge	 n.  边缘
download	 n&vt.  下载
split	 vt.   撕开， 切开
than	 conj.  比
limit	 vt.  限制， 限定； 减少
widespread	 adj.  分布广的
antique	 n.  古董
sow	 v.   播种
different	 adj.  不同的， 有差异的
fasten	 v.  扎牢， 扣住
porter	 n.   搬运工
level	 adj.  平坦的 n. 水平线，水平
dirt	 n.  污物， 脏物； 尘土
videophone	 n.  可视电话
preserve	 vt.  保护， 保存
plus	 prep.  加， 加上
relevant	 adj.  有关的
license	 n.  执照， 许可证
entry	 n.  进入； 入口
expand	 vi.  发展 vt. 扩张
dream	 n. 梦 v. 梦想，希望
noble	 adj.  高贵的， 贵族的
plug	 vt. 把…塞住；接通电源 n.  塞子， 插头
bunch	 n.  串， 束
spy	 v.  侦探， 刺探 n. 密探，间谍
postpone	 vt.  推迟， 延期
tense	 adj. 紧张的；拉紧的 n.  时态
bride	 n.  新娘
heat	 v.  加热 n. 热
behind	 adv.  在后面； 向后 prep. 在…后面
hammer	 v.  敲， 锤击 n. 锤子，锣锤
seal	 n.  海豹
recipe	 n.  食谱
ambassadress	 n.  大使夫人； 女大使
mental	 adj.  精神的， 脑力的
bow	 v&n.  鞠躬， 弯腰
storage	 n.  贮藏， 储存； 存放
racial	 adj.  种族的
switch	 v&n.  更换， 转换
total	 adj. 总数的；总括的；完全的 n. 合计 vt.  合计为
of	 prep.  …的
reserve	 n&vt.  保留， 储备； 预订
somehow	 adv.  以某种方式； 不知怎么地
brick	 n.  砖； 砖块
dive	 vi.  跳水
heap	 v.  堆起来 n. 堆
sympathy	 n.  同情
hear	 v.   听见， 听说， 得知
fight	 n&v.   打仗， 打架； 争论
roundabout	 adj. 绕道的；不直接的 n.  转盘路
rescue	 vt&n.  营救， 援救
facial	 adj.  面部用的
on	 adv.  继续 prep. 在…上；在…时候；在…地方；关于
zebra	 n.  斑马
brief	 adj.  简洁的
unfortunate	 adj.  不幸的， 倒霉的
recover	 vi. 痊愈 vt.  恢复； 重新获得
or	 conj.  或者； 还是， 否则
chance	 n.  机会； 可能性
determine	 v.  决定； 测定； 确定
nature	 n.  自然； 性质； 本性
social	 adj.  社会的； 社交的； 群居的
wheel	 n.  轮， 车轮； 方向盘
interesting	 adj.  有趣的
cross	 n. 十字形的东西；十字架 vt.  越过； 穿过
control	 vt&n.   控制
drill	 v. 钻；重复训练 n.  钻头；  训练
friction	 n.  摩擦； 摩擦力
clerk	 n.  书记员； 办事员； 职员
walnut	 n.  胡桃， 胡桃木
acknowledge	 vt.  答谢； 承认
equip	 vt.   装备； 训练
radiation	 n.  放射； 放射物； 放射疗法
quarrel	 n&vi.  争吵， 吵架
Christian	 adj.  基督教徒的 n. 基督教徒
pulse	 v.  搏动， 跳动 n. 脉搏；脉冲
maple	 n.  枫树
spiritual	 adj.  精神的； 心灵的
worthwhile	 adj.  值得做的
nation	 n.  民族， 国家
upper	 adj.  较高的， 较上的
splendid	 adj.  灿烂的， 辉煌的； 〈口语〉 极好的
adaptation	 n.  [U] 适应， 适合； [C] 改编本
behalf	 n.  利益； 代表
somewhere	 adv.  在某处， 到某处
scene	 n.   一场， 场景， 布景； 景色， 风景
injure	 vt.  损害， 伤害
freeze	 v.    结冰
eastward	 adv.  向东
geography	 n.  地理学
horrible	 adj.  令人恐惧的， 恐怖的
strengthen	 v.  加强， 增强
injury	 n.  损伤； 受伤处
diploma	 n.  毕业文凭， 学位证书
brand	 n.  商标， 牌子
suspension	 n.  暂停， 中止； 悬挂， 悬浮
choke	 n&v.  窒息
alcohol	 n.  酒精， 酒
pleasure	 n.  高兴， 愉快
old	 adj.  老的， 旧的
recreation	 n.  消遣， 娱乐
allowance	 n.  津贴， 补贴
interpreter	 n.  翻译员， 口译人员
hurricane	 n.  飓风， 狂风
portable	 adj.  轻便的， 便携的
then	 adv.  当时， 那时； 然后； 那么
ancient	 adj.  古代的， 古老的
accept	 v.  接受
glory	 n.  光荣， 荣誉
seat	 n. 座位，座 vt.  使就座； 可容纳
wander	 v.  游荡； 漫步； 流浪
adopt	 vt.  采用； 收养
oppose	 v.  反对
minus	 adj. 负的 prep.  减去
belly	 n.  肚子
conservative	 adj.  守旧的； 保守主义的； 谨慎的
access	 n. 通道；机会，权利 vt.  进入； 存取
conference	 n.   会议
primitive	 adj.  原始的， 远古的
activity	 n.  活动
dormitory	 n.  学生宿舍
overcome	 v.  战胜， 克服， 胜过
recite	 v.  背诵
seek	 v.   试图； 寻找， 寻求
seem	 v.  似乎， 好像
heel	 n.  脚后跟
variety	 n.  种种； 种类
disturb	 v.  打扰， 扰乱
adore	 vt.  爱慕， 崇拜
lecture	 n.  [C] 讲课， 演讲
civilian	 n.  平民， 老百姓
so	 adv. 也，同样〔用于表示刚说过的情况也适用于某人或某物〕 conjunction. 因此，所以 n. 全音阶的第五音
pump	 vt. 用泵抽水；抽 n.  抽水机， 泵
caution	 n.  小心， 谨慎
key	 n.  [C] 钥匙； 答案； 键； 关键
teenager	 n.  青少年， 十几岁的少年
dumpling	 n.  饺子
silent	 adj.  无声的， 沉默的
decision	 n.  决定； 决议
addicted	 adj.  入迷的， 上瘾的
necessary	 adj.  必需的， 必要的
one	 num&pron.  一个  ； 任何人
garage	 n.  汽车间， 汽车库
badminton	 n.  羽毛球
confirm	 vt.  确定； 批准
single	 adj.  单一的， 单个的
pull	 v. 拉，拖 n.  拉力， 引力
unconditional	 adj.  无条件的， 绝对的
gallon	 n.  加仑
appoint	 vt.  指定， 任命
assist	 v.  帮助， 协助
bun	 n.  馒头； 小甜面包
but	 conj. 但是，可是 prep.  除了， 除…外
symbol	 n.  符号， 象征
sincerely	 adv.  真诚地
commercial	 adj.  商业的， 贸易的
separate	 v.   分开，  分离 adj.  单独的， 分开的
declare	 v.  宣布， 声明； 申报
reasonable	 adj.  合理的， 有道理的； 通情达理的， 合乎情理的
dislike	 n&vt.  不喜欢， 嫌恶
willing	 adj.  情愿的， 乐意的
available	 adj.  有空的； 可得到的， 可用的
express	 vt. 表达；表示 n.  快车
advocate	 vt.  提倡； 鼓吹
amazing	 adj.  令人惊异的
luggage	 n.  〈总称〉 行李
drawback	 n.  缺点； 障碍
dynamic	 adj.  有活力的； 动力的， 动力学的
up	 adv. 从下往上地，向上地 v. 提高；增加
unusual	 adj.  不平常的， 异常的
extreme	 adj.  极端的， 偏激的
usual	 adj.  通常的， 平常的
sink	 v. 下沉；消沉；陷入 n.  洗涤槽， 污水槽
degree	 n.  程度； 度数； 文凭
astronomy	 n.  天文学
suppose	 vi.  料想 vt. 猜想，假定
brake	 v.  刹车 n. 闸
tube	 n.  管子
outspoken	 adj.  坦率的
especially	 adv.  特别， 尤其
once	 adv. 一次，一回 conjunction. 一…便，一旦，一经
failure	 n.  失败
quake	 n&vi.  震动
know	 v.  知道， 了解； 认识； 懂得
sing	 v.  唱， 唱歌
organise	 v.  组织
support	 vt&n.  支持， 赞助； 赡养
drop	 v. 掉下，落下 n.  滴； 下降
preview	 vt.  预演， 预习
questionnaire	 n.  调查表， 问卷
saucer	 n.  茶碟； 小圆盘
hire	 vt.  租用
breakthrough	 n.  突破
idea	 n.  主意， 意见； 打算， 想法
destination	 n.  目的地
apron	 n.  围裙； 台口
vertical	 adj.  垂直的， 直立的； 纵向的
monument	 n.  纪念碑， 纪念物
pure	 adj.  纯的， 不掺杂的
vivid	 adj.  生动的， 鲜明的
damp	 adj. 潮湿的 n. 潮湿；湿气 v. 使潮湿
throughout	 prep.  遍及， 贯穿
virtue	 n.  美德， 正直的品行
overweight	 adj.  过重的， 超重的
gay	 adj. 快活的，愉快的 n.   同性恋
successful	 adj.  成功的， 有成就的
lovely	 adj.  美好的， 可爱的
normal	 adj. 正常的 n.  正常， 常态， 普通
gradual	 adj.  逐渐的， 渐进的
figure	 v.  认为；  描绘 n. 数字；人物
socialist	 adj.  社会主义的 n. 社会主义者
airmail	 n.  〈总称〉航空邮件
slight	 adj.  轻微的， 细小的
corrupt	 adj. 腐败的，贪污的 v.  腐烂， 腐蚀
wide	 adj.  宽的， 宽阔的； 广泛的
previous	 adj.  在前的， 早先的
teach	 v.  教书； 教
socialism	 n.  社会主义
argue	 v.  争论； 说服
technology	 n.  技术， 科技
superior	 adj.  较高的， 上好的 n. 长者；上级
succeed	 vi. 成功 vt.  继承， 接替
choir	 n.  唱诗班
punctual	 adj.  准时的
advertise	 vt.  为…做广告
compromise	 v.  妥协， 折中
software	 n.  软件
seminar	 n.  研究会， 讨论发表会
reach	 v.  到达；  够到
react	 vi.  起反应， 起作用； 反抗
competition	 n.  比赛， 竞赛
none	 pron.  无任何东西或人
type	 vt.  打字， 用打字机打出
beyond	 prep.  超过；  在…的那边
practise	 v.  练习； 实习； 经常做； 养成…的习惯
review	 vt. 复习；重新调查 n.  复习； 复查； 评论
sight	 n.  情景， 风景； 视力
voluntary	 adj.  自愿的
asleep	 adj.  睡着的， 熟睡的
nobody	 pron. 没有人，谁也不 n.  小人物
guide	 v.  指导； 指引 n. 向导，导游
between	 prep.  在之间； 在…中间
surrounding	 adj. 周围的 n. 围绕；
goal	 n.  目标； 进球得分；  球门
collar	 n.  衣领
natural	 adj.  自然的， 天然的； 天生的
overhead	 adj&adv.  在高处， 在空中
conclude	 v.  推论； 断定； 完成； 结束
come	 vi. 来，来到 v.  变成
comprehension	 n.  理解
leather	 n.  皮革
comb	 v. 梳 n.  梳子
exist	 vi.  存在， 生存
unemployment	 n.  失业
exact	 adj.  精确的， 准确的， 确切的
lift	 vi.  升起，  消散
motto	 n.  箴言， 格言
nationwide	 adj.  全国性的
force	 vt. 强迫，迫使 n.  力量， 武力
centigrade	 adj.  摄氏的； 百分度的
botany	 n.  植物学； 植物
wear	 v.   穿， 戴； 留， 蓄； 磨损， 使变旧
range	 n.  范围； 射程
weak	 adj.  虚弱的； 差的
leak	 v.  漏， 泄漏
impress	 vt.  留下印象
flat	 adj. 平的 n.  一套房间； 公寓
get	 v.  变得； 到达 vt. 得到，获得
course	 n.  过程， 经过； 课程
barber	 n.  理发师
copy	 v.  复制； 抄写； 复印 n. 抄本，副本；一本
precise	 adj.  精确的， 准确的
power	 n.  力量； 动力
place	 n. 地方，处所 vt.  放置， 安置
dare	 v.  敢， 敢于
regular	 adj.  规则的； 经常的
precious	 adj.  宝贵的， 珍贵的
sell	 v.  卖， 售
tired	 adj.  疲劳的， 累的； 厌烦的
tremble	 v.  颤抖， 挥动
gymnastics	 n.  体操， 体育
suspect	 v.  怀疑 n.  犯罪嫌疑人
suggest	 vt.  建议； 提出； 暗示
apologize	 vi.  道歉， 谢罪
expect	 v.  预料； 期望； 要求
help	 n&v.  帮助， 帮忙； 有帮助， 有用
depth	 n.  深， 深度
assess	 vt.  估定， 评定
prescription	 n.  处方， 药方
behaviour	 n.  [U] 行为， 举止
chorus	 n.  合唱
minimum	 adj.  最小的 n. 最小量，最小值
queue	 vi. 排队 n.  行列， 长队
apology	 n.  道歉； 歉意
date	 n. 日期；约会 vt.  约会； 注明日期
magic	 adj.  有魔力的 n. 魔法，魔术
dress	 v. 穿衣，打扮 n.  女服， 连衣裙； 服装
argument	 n.  [C] 争论， 辩论
passage	 n.   一节； 走廊； 通道
theoretical	 adj.  理论的
adequate	 adj.  足够的， 适当的
sound	 n. 声，声音 v. 听起来；看起来；好像 adj. 明智的；合理的；正确的
own	 adj. 自己的 vt.  拥有
hopeful	 adj.  有希望的； 有前途的
dozen	 n.  十二个； 许多
translate	 v.  翻译
drug	 n.  药， 药物； 毒品
barrier	 n.  栅栏， 挡板； 障碍
plain	 adj. 平常的，普通的；明白的 n.  草原
should	 modal verb. 应当，应该 〔用于提供或征求建议〕
only	 adv.  只， 仅仅 adj. 唯一的，仅有的
create	 vt.  创造； 造成
justice	 n.  正义， 公正； 司法
criminal	 n.  罪犯
blow	 v.   吹  ； 刮风 n. 击，打击
curious	 adj.  好奇的； 奇异的
proud	 adj.  自豪的， 骄傲的
like	 v.  喜欢， 喜爱 prep. 像，跟…一样 n. 爱好
ugly	 adj.  丑陋的， 难看的
earthquake	 n.  地震
tax	 n.  税， 税款
towards	 prep.  向， 朝， 对于
messy	 adj.  乱七八糟的
embassy	 n.  大使馆
rectangle	 adj.  长方形的 n. 长方形
fragile	 adj.  易碎的， 脆的
departure	 n.  离开； 背离； 违反
dash	 v. 快跑，猛撞 n.  快跑， 猛撞； 少量
send	 vt.   打发， 派遣； 送， 邮寄
concrete	 adj.  具体的； 有形的
note	 n. 便条，笔记，注释 vt.  记录， 注意
everybody	 pron.  每人， 人人
sail	 v. 航行，开航 n.  帆； 航行
cab	 n.  出租车； 驾驶室
purpose	 n.  目的， 意图
regret	 n. 遗憾，懊悔；令人遗憾的事 vt.   遗憾； 后悔
line	 v.  画线于，  成行 n. 直线；排
stout	 adj.  结实的， 矮胖的
link	 v. 连接，联合 n.  链环， 链接
flee	 v.   逃走， 逃跑
weep	 v.   哭泣， 流泪
tune	 n.  曲调， 调子
aware	 adj.  知道的， 意识到的
can	 n.  罐头； 铁罐； 垃圾桶
security	 n.  安全
award	 n.  奖品， 奖励
ready	 adj.  准备就绪的
alarm	 n.  警报
weed	 n.  野草， 杂草
herb	 n.  草药
unconscious	 adj.  不省人事的， 无意识的
rainfall	 n.  一场雨； 降雨量
cost	 n. 成本；代价 vt.   花费； 使付出
will	 n.  意志； 遗嘱
satisfy	 v.  满足， 使满意
smoke	 v.  冒烟； 吸烟 n. 烟
match	 v. 相配，相称 n.  比赛； 火柴
arbitrary	 adj.  武断的； 任意的
cuisine	 n.  烹饪， 烹饪术
fault	 n.  过错， 缺点， 毛病
follow	 v.  跟随； 遵循； 仿效
passive	 adj.  被动的； 消极的
hard-working	 adj.  勤劳的， 辛勤工作的
carrier	 n.  搬运者；  置物架
dignity	 n.  尊严； 高贵
challenge	 n. 挑战；挑战性 vt.  挑战
category	 n.  种类
cosy	 adj.  暖和舒服的； 舒适的
intend	 v.  想要， 打算
wild	 adj.  野生的
`;

const TOEFL_TEXT = `back	adv. 回原处 n. 背,后面 adj. 后面的 v. 后退
significant	adj. 重要的,意义重大的
skill	n. 技能,技巧
public	adj. 公共的,公开的 n. 公众
go	v. 去,离开,进行
fish	n. 鱼 v. 钓鱼
set	n. (一)套 v. 放置,设定
once	adv. 一次,曾经 conj. 一旦…(就…)
table	n. 桌子,表格
demand	n&v. 要求,需要
day	n. 天,一昼夜,时期
south	n. 南部 adj. 南方的 adv. 在南方
almost	adv. 几乎,差不多
local	adj. 当地的,局部的 n. 当地人
open	adj. 开的,开放的 v. 开
cover	v. (掩)盖,包括,报道 n. 盖子,封面
purpose	n. 目的,意图
reach	v. 到达,伸出,达成 n. 范围
various	adj. 不同的,多样的,多方面的
late	adj. 晚的,最近的 adv. 迟,晚
sometime	adv. 将来(或过去)某个时候 adj. 以前的
function	n. 功能,职务 v. 运行,起作用
able	adj. 能够…的,得以…的
allow	v. 允许(…进入),同意给,承认
middle	n. 中部,中间 adj. 中部的,中间的
home	n. 家(乡)
European	adj. 欧洲的 n. 欧洲人
reason	n. 原因v分析,推理
rise	n&v. 上升,升起
member	n. 成员,会员
toward	prep. 向,朝,接近
house	n. 房屋 v. 给…房子住
characteristic	n. 特性,特征 adj. 特有的,典型的
last	adj. 刚过去的,最后的 adv. 最后 v. 持续
location	n. 位置,地点
today	n. 今天,现今
culture	n. 文化,文明
infant	n. 婴儿
left	adj. 左边的 adv. 向左 n. 左边
recent	adj. 近来的,新近的
Europe	n. 欧洲
family	n. 家,家庭
site	n. 位置,地点 v. 使位于,设置
incorrect	adj. 不正确的,错误的
agricultural	adj. 农业的
generally	adv. 通常,普遍地
property	n. 财产,所有物
atmosphere	n. 大气,空气,气氛
themselves	pron. 他(她、它)们自己
though	conj. 尽管,虽然 adv. 可是
strong	adj. 强烈的,坚强的,强壮的
clear	a&ad. 清晰的(地) v. 清除 v. 变清澈
reduce	v. 减少,缩小
deposit	v. 沉淀,存放,堆积 n. 存款,堆积物
west	n. 西(方,部) adj. 西方(部)的 adv. 向西方
thus	adv. 如此,因此
cannot	conj. 不能
statement	n. 陈述,声明
settle	v. 解决,定居,安顿
melt	v. (使)融化,(使)消散,(使)逐渐消失
Pacific	n. 太平洋
available	adj. 可利用的,可得到的,有空的
direct	a&ad. 直接的 v. 对准,指导
industry	n. 工业,产业
language	n. 语言
vary	v. 改变,变化,使多样化
glass	n. 玻璃,玻璃杯,[pl]眼镜
range	n. 范围,山脉 v. 变动,排列
subject	n. 主题,学科 v. 使服从
deep	adj. 深的 adv. 深深地
green	adj. 绿色的,生的 v. 使…变绿
charge	v. 指控,收费,充电
travel	n&v. 旅行,移动,传播
dry	adj. 干的,干燥的 v. (使)变干
role	n. 作用,角色
establish	v. 建立,确立,创办
right	a&ad. 对(的),右(的) n. 权利 v. 扶直,纠正
lower	adj. 较低的,下面的 v. 降下,放低
center	n&a. 中心(的) v. 居中,使集中
roman	a&n. 罗马(的),罗马人(的)
tend	v. 易于,趋向 v. 照料
longer	ad&a. 比较久(的)
just	adv. 正好,仅仅,刚才 adj. 公平的
lack	v&n. 缺乏,不足
compare	v. 比较,对比,比喻 n. 比较
away	adv. 在远处,离去
insect	n. 昆虫,虫
experience	n&vt. 经历,经验
measure	n. 措施,量度,尺寸 v. 测量
replace	v. 取代,替换,放回原处
attract	v. 吸引
snow	n. 雪 v. 下雪
salt	n. 盐 v. 腌,盐渍
hunt	n&v. 狩猎,追捕,搜寻
clay	n. 黏土,泥土
turn	v. 转动,扭转,(使)变成
feature	n. 特征 v. 以为特色,起作用
marine	n. 船舶,水兵 adj. 海(洋)的,海军(事)的
weather	n. 天气,气象 v. 风化,经受风雨(侵蚀)
popular	adj. 流行的,通俗的,受欢迎的
consider	v. 考虑,认为
necessary	adj. 必要的,必然的 n. 必需品
researcher	n. 研究者,调查者
upper	adj. 上面的,上部的
wide	adj. 宽阔的,广泛的
forest	n. 森林 v. 种植于
current	adj. 当前的 n. 趋势
learn	v. 学会,学习,得知
select	v. 选择,挑选 adj. 精选的
improve	v. 改善,改进
western	adj. 西方的,西部的 n. 西方人
lake	n. 湖
value	n. 价值 v. 评估,重视
factory	n. 工厂,制造厂
school	n. 学校,学院 v. 教育
warm	a&ad. 温暖的 v. 变暖,使暖和
scientific	adj. 科学的
raise	n. 上升,增高 v. 升起,举起,提出
political	adj. 政治的,政党的
maintain	v. 维持,保持
ant	n. 蚂蚁
affect	v. 影响,作用
fit	v. 适合,适应,安装
periodic	adj. 周期的,定期的
metal	n. 金属 v. (以金属)覆盖、装配
importance	n. 重要(性)
native	adj. 本国的,本土的,当地的 n. 本地人
identify	v. 识别,鉴定
valley	n. 山谷
specific	adj. 特定的,具体的
short	adj. 短的,矮的
foot	n. 足,脚
style	n. 风格,式样
hard	adj. 硬的,困难的 adv. 努力地,强烈地
origin	n. 起源,来源
grain	n. 谷物,颗粒 v. 形成(颗粒),(用谷物)喂养
national	adj. 国家的,民族的
near	adv. 在近处 v&prep. 靠(接)近 adj. 接近的
person	n. 人
primary	adj. 首要的,主要的,最初的 n. 居首位的事物
mammal	n. 哺乳动物
formation	n. 形成,构成,编队
deer	n. 鹿
complex	adj. 复杂的,复合的
past	adj. 以前的 prep&ad. 经过,过 n. 过去
say	v. 说,表明
flow	n&v. 流动,淹没
break	n. 休息 v. 打破,弄坏
low	a&ad. 低(的),低下(的)
seed	n. 种子 v. 播种
perhaps	adv. 也许,可能
steam	n. 蒸汽v蒸,蒸发
picture	n. 画,照片 v. 描绘,构想
east	n. 东(方，部)a东方(部)的 adv. 向东方
agriculture	n. 农业,农学
particle	n. 微粒,极小量
aspect	n. 方面,外观
industrial	adj. 工业的,产业的
field	n. 田地,领域
experiment	n. 试验 v. 尝试,做实验
itself	pron. 它自己
relate	v. 叙述,使有联系,有关联
yet	adv. 还,已经 conj. 然而
instrument	n. 仪器,工具
speed	n. 速度 v. 加速,急行
thousand	n. 一千(个),许许多多,成千上万
print	v. 印刷,冲洗(照片)
therefore	adv. 因此,所以
tradition	n. 传统,惯例
goods	n. 货物,商品
represent	v. 代表,表现,描绘
iceberg	n. 冰山,冷若冰霜的人
our	pron. 我们的
man	n. 男人,人(类)
store	v. 储存,贮藏 n. 商店
depend	v. 依靠,取决于
heavy	a&ad. 重的,大量的
general	adj. 普遍的,概括的
story	n. 故事,小说
technology	n. 工艺,技术
rain	n. 雨 v. 下雨
contrast	v&n. 对比,对照
predator	n. 掠夺者,食肉动物
against	prep. 反对,逆,防御
survive	v. 活着,幸存
biological	adj. 生物(学)的
nature	n. 自然(界),本性
expression	n. 措辞,表达
solar	adj. 太阳(能)的
teacher	n. 教师
off	adv. 掉(下),离开,停止
town	n. 城市,城镇
architecture	n. 建筑,建筑学
train	v. 训练,培训
contribute	v. 捐助,贡献
least	ad&a. 最小的,最少的
pass	v. 通过,经过
always	adv. 总是,一直,始终,
normal	adj. 正常的,正规的
mineral	n. 矿物,矿石
primarily	adv. 主要地,起初地
knowledge	n. 知识,学问
ask	v. 询问,请求,邀请
observe	v. 注意到,观察,监视
simple	adj. 简单的,朴素的
slow	adj. 慢的 v. 放慢,减速
canal	n. 运河,沟渠
craft	n. 工艺,手艺
name	n. 名字 v. 命名
reflect	v. 反映,反射
addition	n. 加,增加,附加物
argue	v. 说服,争论,辩论
draw	v. 画,拖,移动
theater	n. 戏院,剧场
above	prep. 在…上方,多(大,高)于 adv. 在上面
especially	adv. 特别,尤其
central	adj. 中心的,主要的,重要的
apply	v. 申请,应用
quickly	adv. 快速地
every	adj. 每个,一切的,每隔
successful	adj. 成功的,圆满的
frequent	adj. 频繁的,经常的
surround	v. 包围,环绕
practice	n&v. 练习
introduce	v. 介绍,引进
aggressive	adj. 侵略的,进攻性的
act	v. 行动,表演 n. 行为
Canada	n. 加拿大
extreme	adj. 极度的,极端的 n. 极端,过分
test	n&vt. 试验,测试
glacial	adj. 冰川(期)的,非常冷的
sense	v. 感觉,意识到
eat	v. 吃
single	adj. 单一的,单个的,独身的
quality	n. 质量,品质,性质
teach	v. 讲授,教授
continent	n. 大陆,洲
cycle	n. 循环,周期 v. 骑自行(摩托)车,循环
previous	adj. 以前的,先于,在之前
northern	adj. 北方的,北部的
separate	v. 分开,隔开
cost	n. 价格,成本 v. 花费,使付出
advantage	n. 优势,有利条件 v. 有利于
transportation	n. 运输(工具、系统)
discovery	n. 发现,发现物
stream	n. 小河,溪流 v. 涌流(出)
obtain	v. 获得,得到
recognize	v. 认出,确认,意识到
parent	n. 父母亲
hypothesis	n. 假设
England	n. 英格兰
rural	adj. 农村的
concern	v. 有关于,使担心,
get	v. 获得,得到
substance	n. 物质,实质,主旨
original	adj. 原始的,最初的
easily	adv. 容易地
channel	n. [常pl]通道,渠道
belong	v. 属于
construction	n. 建造,结构
swim	n&v. 游泳
southern	adj. 南的,南方的
worth	prep. 相当于…价值的,值得…的 n. 价值
run	v. 跑,运转,经营
imply	v. 暗示, 意味
basic	adj. 基本的,基础的
internal	adj. 内在的,国内的
crystal	n. 水晶
explanation	n. 解释,说明
evolve	v. 演变,进化,发展
hundred	n. 百,[pl]数以百计
start	v. 开始,出发
beg	v. 请求,乞求
rapid	adj. 快的,迅速的
quantity	n. 量,数量
illustrate	v. 说明,阐明
locate	v. 定位,把…设置在
remove	v. 移开,去除
across	prep. 穿过,在对面
whose	pron. 谁的,那(些)人的
typical	adj. 典型的,有代表性的
matter	n. 事情,情况 v. 要紧
resource	n. 资源
eastern	adj. 东方的,东部的
half	n&a. 一半,半个的
migration	n. 移居,迁移
course	n. 过程,课程
date	n. 日期,时期 v. 追溯到
merchant	n. 商人
face	n. 脸 v. 面向,面对
coast	n. 海岸,海滨
machine	n. 机器,机械
claim	n&v. 声称,要求
religious	adj. 宗教的
twentieth	num. 第二十,二十分之一
throughout	prep. 遍及,贯穿 adv. 始终
special	adj. 特别的,特殊的
plate	n. 盘子,碟
mark	n. 痕迹,记号 v. 做标记
atomic	adj. 原子的,原子能的
rapidly	adv. 迅速地
wood	n. 木头,木材
leader	n. 领导者
fire	n. 火 v. 开火,解雇,点燃
entire	adj. 全部的,整个的
plain	n. 平原,草原 adj. 清晰的,简单的
extend	v. 延伸,扩展
difficulty	n. 困难,难点
core	n. 核心,要点
easy	adj. 容易的,轻松的
constant	adj. 不变的,持续的
adult	n. 成年人
consist	v. 由组成,在于
figure	n. 图形,外形 v. 计算,认为
cold	adj. (寒)冷的 n. (寒)冷,感冒
education	n. 教育
railroad	n. 铁路 v. 由铁道运输 v. 在铁路公司工作
law	n. 法律
unlike	adj. 不同的 prep. 不象…
expand	v. 扩大,扩展,膨胀
brain	n. 脑,头脑
carbon	n. 碳
return	v. 返回,恢复,归还
cell	n. 单元,细胞
either	adv. [否]也 a&pron. 任一的
company	n. 公司
grass	n. 草
engine	n. 发动机,引擎
stimulus	n. 促进(因素),刺激(物)
hour	n. 小时,钟点
program	n. 节目,计划,程序 v. 编程
prevent	v. 防止,预防
per	prep. 每,每一
sell	v. 出售,卖
damage	v&n. 损害,毁坏
unusual	adj. 异常的,独特的
lie	v. 躺,说谎
wall	n. 墙 v. 围住,隔开
landscape	n. 风景,全景 v. 美化
brief	n. 摘要,大纲 adj. 简短的
associate	v. 联合,结交 n. 伙伴 adj. 副的
rare	adj. 稀有的,珍奇的
minor	adj. 较小的,次要的
artisan	n. 工匠,技工
meteorite	n. 陨石, 流星
define	v. 定义,详细说明
cool	v. 冷却,(使)冷静
oxygen	n. 氧
daily	adj. 每日的,日常的
Africa	n. 非洲
erosion	n. 腐蚀,侵蚀
want	v. 想要
response	n. 回答,响应,反应
third	num. 第三,三分之一
decade	n. 十年,十
emphasize	v. 强调,着重
baby	n. 婴孩
volcanic	adj. 火山的,猛烈的
organization	n. 组织,机构,团体
colonial	adj. 殖民地的
preserve	v. 保护,保存
detail	n. 细节,详情 v. 详述
bone	n. 骨,骨骼
position	n. 位置,职务,立场 v. 安置
protect	v. 保护
labor	n. 工人 v. 劳动
degree	n. 学位,程度,度数
revolution	n. 革命
read	v. 读,理解
positive	adj. 积极的,肯定的
receive	v. 接到,收到,接待
route	n. 路线,途径
statue	n. 塑像,雕像
meter	n. 米,公尺
jupiter	n. 木星
organic	adj. 有机(体)的,有机物的
apparent	adj. 明显的,表面上的
motion	n. 运动,动作
you	pron. 你,你们
composition	n. 成分,作品,合成物
stage	n. 舞台,阶段
cut	v. 切,割,剪
vegetation	n. 植物,草木
winter	n. 冬季 v. 过冬
eventually	adv. 最后,终于
expose	v. 暴露,显露
dinosaur	n. 恐龙
literature	n. 文学,文献
project	n. 计划,工程v设计,计划
meet	v. 遇见,见面
benefit	n. 利益 v. 有益于,得益
whether	conj. 是否,不管,无论
slowly	adv. 慢慢地,迟缓地
thing	n. 东西,事情
facial	adj. 脸部的,面部的
liquid	n. 液体 adj. 液体的
cultural	adj. 文化的,教养的
differ	v. 不同,有区别 n. 区别
never	adv. 决不,从未
science	n. 科学
spread	v. 传播,展开,散布
whig	n. 辉格党
encourage	v. 鼓励,促进,支持
newspaper	n. 报纸
party	n. 政党,聚会
data	n. 数据,资料
coal	n. 煤
combine	v. 联合,使结合
happen	v. 发生,碰巧,出现
five	num. 五,五个
cretaceous	n&a. 白垩纪(的)
book	n. 书
quite	adv. 相当,完全,十分
already	adv. 已经
nearly	adv. 几乎,差不多
collect	v. 收集
sand	n. 沙,沙子
hot	adj. 热的,辣的,强烈的
terrestrial	adj. 陆地的
leaf	n. 叶子
sequence	n. 次序,顺序
star	n. 星,明星 v. 以星状物装饰,变成演员
estimate	n&v. 估计,估价
drill	n. 钻子 v. 练习,钻孔
transport	n&v. 运输
groundwater	n. 地下水
international	adj. 国际的,世界的
serve	v. 服务,担任
favor	n. 好感 v. 偏爱,支持
root	n. 根 v. 生根,扎根
huge	adj. 巨大的,庞大的
put	v. 放,安置
whale	n. 鲸 v. 捕鲸
exchange	v&n. 交换,兑换
ecosystem	n. 生态系统
distance	n. 距离,路程
assume	v. 假定,设想
egg	n. 蛋
opinion	n. 意见,看法
principle	n. 原理,原则
global	adj. 全球性的,总的
cause	v. 引起,使发生 n. 原因
eye	n. 眼睛
introductory	adj. 引导的,介绍的
weight	n. 重量,负担 v. 加重量于
variation	n. 变化,变动
sculpture	n. 雕塑,雕刻
student	n. 学生
bacteria	n. 细菌
presence	n. 出席,存在
accept	v. 接受,承认,同意
accumulate	v. 积聚,堆积
colony	n. 殖民地
gradual	adj. 逐渐的,逐步的
piece	n. 片,块 v. 拼合(凑)
solid	n. 固体
action	n. 行动,行为,作用
service	n. 公共设施,服务 v. 服务
destroy	v. 破坏,毁灭,消灭
relative	adj. 相对的,相关的 n. 亲属
military	adj. 军事的 n. 军队
memory	n. 记忆(力),回忆
potential	adj. 潜在的 n. 潜能
sign	n. 标记,符号 v. 做标记
electricity	n. 电流,电
dioxide	n. 二氧化物
perform	v. 执行,履行,表演
situation	n. 情形,境遇
evolution	n. 进化,发展,演变
soon	adv. 不久,很快
fill	v. 装满
fort	n. 堡垒,要塞
content	n. 内容 v. 使满足,使安心
success	n. 成功,成就
signal	n. 信号,标志 v. 发信号,标志着
generation	n. 一代人(或产品),产生,发生
vast	adj. 巨大的,辽阔的,大量的
manufacture	vt&n. 制造,制造业[pl]产品
compete	v. 竞争,比赛
link	v. 连接,联系 n. 联系
blood	n. 血 v. 流血
commercial	adj. 商业的,贸易的
approach	v. 靠近,接近 n. 途径,方法
predict	v. 预知,预言
step	n. (脚)步,步骤,台阶 v. 行走,踏上
stand	v. 站,坐落,处于
release	vt&n. 释放,解脱
plan	n. 计划 v. 计划,设计
sample	n. 样品,样本 v. 采样,取样
expansion	n. 膨胀,扩展,扩充
extensive	adj. 广泛的,广阔的
reveal	v. 揭露,显示
helium	n. 氦
regular	adj. 规则的,定期的
effort	n. 努力,成就
mile	n. 英里
irrigation	n. 灌溉
next	n&a. 下一个的 prep. 靠近
actual	adj. 实际的,真实的
egyptian	n&a. 埃及人(的)
attempt	n&vt. 尝试,企图,努力
finally	adv. 最后,终于
serious	adj. 严肃的,认真的,严重的
clock	n. 时钟
adapt	v. 适应,改编
observation	n. 观察,观测
fine	adj. 好的,优质的,健康的
mar	n. 污点,瑕疵 v. 破坏
distinguish	v. 区别,辨别
decrease	v&n. 减少,降低
Dutch	n. 荷兰人 adj. 荷兰的
African	n. 非洲人 adj. 非洲的
rich	adj. 富有的 n. 有钱人
negative	adj. 否定的,消极的
vessel	n. 船,容器,血管
galaxy	n. 银河,星系
focus	v. 集中,聚集 n. 焦点,中心
instead	adv. 代替,反而
democrat	n. 民主主义者,美国民主党人
aquifer	n. 含水土层,蓄水层
road	n. 道路,途径
bank	n. 银行 v. 把(钱)存入银行
drift	v&n. 漂流
appearance	n. 出现,露面,外貌
wire	n. 金属丝,电线 v. 安装电线,发电报
Australia	n. 澳大利亚
price	n. 价格,价值 v. 给…定价,估价
outside	prep&n&ad&a. (在,向)的外面(的)
bottom	n. 底部,底端
Greek	n. 希腊人 adj. 希腊的
decline	v&n. 下降,衰退
business	n. 商业,事务,生意
display	n&vt. 陈列,展览,显示
immediate	adj. 直接的, 立即的
crater	n. 弹坑
strike	v&n. 罢工,袭击,打
feed	v. 喂养
aggression	n. 进攻,侵略
master	v. 控制,精通 n. 主人
emerge	v. 浮现,显露
nation	n. 国家,民族
import	vt&n. 进口,输入,[pl]进口商品
muscle	n. 肌肉
organize	v. 组织,安排
personal	adj. 私人的,个人的
careful	adj. 小心的,仔细的
danger	n. 危险(物)
equal	adj. 同样的 v. 等于
desire	n&vt. 渴望,要求
publish	v. 出版,发表
bear	v. 忍受,承担
total	adj. 全部的,完全的 n. 总数
character	n. 特征,品质
season	n. 季节
turtle	n. 海龟
useful	adj. 有用的,有益的
generate	v. 产生,发生
breathe	v. 呼吸
park	n. 公园 v. 停放(汽车等)
pheromone	n. <生化>信息素
characterize	v. 以…为特征
loss	n. 丧失,遗失,损失
pay	v. 付款,给予(注意等),付出代价 n. 工资
diversity	n. 多样性,差异
simply	adv. 简单地
real	adj. 真的,真实的
stability	n. 稳定性
solution	n. 解决,解答
era	n. 时代,纪元
climax	n. 高潮,顶点
standard	n. 标准,规格 adj. 标准的
task	n. 任务,作业
speak	v. 说话,谈话
shift	v&n. 转移,转变,转换
additional	adj. 另外的,附加的
considerable	adj. 重要的,相当大的,可观的
British	adj. 英国(人)的 n. 英国人
mine	n. 矿 v. 采矿
geologist	n. 地质学者
isolate	v. 使隔离,使孤立
attention	n. 注意,关心
again	adv. 再,又
settlement	n. 解决,协议,居留地
wealth	n. 财富,财产
prove	v. 证明,证实
achieve	v. 完成,达到
eighteenth	num. 第十八,十八分之一
opportunity	n. 机会
continuous	adj. 连续的,持续的
flower	n. 花 v. 开花,繁荣
stratum	n. 地层,阶层
kilometer	n. 千米,公里
paper	n. 纸,报纸
red	n&a. 红色(的),
arrange	v. 安排,排列
promote	v. 促进,提升
prefer	v. 更喜欢,宁愿
inhabitant	n. 居民,居住者
Mediterranean	n. 地中海
issue	n&v. 问题,分发,颁布
fungus	n. 真菌,真菌类植物
analysis	n. 分析,解析
pot	n. 罐,壶
fuller	n. 漂洗工
slight	adj. 轻微的,微小的
month	n. 月
hydrogen	n. 氢
depth	n. 深度
upon	prep. 在之上
visible	adj. 看得见的,显而易见的
belief	n. 信念,信仰
skeleton	n. 骨架,纲要
absorb	v. 吸收,吸引
advertise	v. 登广告,宣传
host	n. 主人
enable	v. 使能够,使可能
basin	n. 脸盆,盆地
money	n. 钱,货币
gather	v. 聚集,集合,收集
note	n. 便条,笔记 v. 注意,记录
flood	v. 淹没,充满 n. 洪水
black	adj. 黑暗的,黑人的
soldier	n. 士兵,军人
artistic	adj. 艺术的
shell	n. (贝)壳,外壳 v. 剥壳,炮击
section	n. 部分
big	adj. 大的
device	n. 装置,设备
fast	a&ad. 快的,迅速的
drop	v. 下降,放弃 n. 下降
nitrogen	n. 氮
surprise	n. 惊奇 v. 使惊奇
transform	v. 改变,转换
television	n. 电视(机)
band	n. 乐队 v. 联合,结合
sufficient	adj. 足够的,充分的
private	adj. 私人的,私有的
Asia	n. 亚洲
dust	n. 尘土,粉末 v. 除尘,撒(粉末等)
attitude	n. 态度,看法
painter	n. 画家,油漆匠
birth	n. 出生
English	n&a. 英语,英国人(的)
agree	v. 同意,赞成
expensive	adj. 昂贵的,高价的
valuable	adj. 贵重的,有价值的
approximate	adj. 近似的,大约的 v. 近似,接近
fuel	n. 燃料 v. 加燃料
blue	n. 蓝色 adj. 蓝色的,忧郁的
visual	adj. 视觉的,看得见的
shop	n. 商店 v. 买东西
push	n&v. 推,推动
offer	n&vt. 给予,提供
wear	v. 穿,戴
dye	n. 染料 v. 给…染色
future	n. 未来,将来
share	v. 分享,分担
writer	n. 作者,作家
hide	v. 躲藏,隐瞒
fee	n. 费, 酬金
tell	v. 告诉,讲述
practical	adj. 实际的,实践的,实用的
electron	n. 电子
bill	n. 帐单 v. 开帐单
rhythm	n. 节奏,韵律
topic	n. 话题,主题
ritual	n. 仪式,典礼
existence	n. 存在(物)
spring	n. 春天,泉 v. 跳,涌现
communication	n. 交流,通讯
lightning	n. 闪电
account	n. 记述,帐(户),解释 v. 说明,占
connect	v. 连接,联系
folk	n. 人们
block	v. 堵塞,妨碍
photograph	n. 照片,相片 v. 拍照
village	n. 村庄
thin	a&ad. 薄、细、瘦(的)
beneath	prep. 在…下,(地位等)低于 adv. 在下方
head	n. 头部,头脑v前进,领导
survival	n. 幸存,生存
university	n. (综合)大学
concentration	n. 集中,专心
invention	n. 发明,创造
extinct	adj. 熄灭的,灭绝的
avoid	v. 避免,预防
carve	v. 雕刻,切割
interior	adj. 内部的
electrical	adj. 电的,与电有关的
continental	adj. 大陆的
technological	adj. 科技的
death	n. 死,死亡
wave	n. 波(浪) v. 挥动,波动
explosion	n. 爆炸,爆发
network	n. 网络,网状物
density	n. 密度
flight	n. 飞行,航班
class	n. 阶级,班级,课
financial	adj. 财政的,金融的
moon	n. 月球,月亮
tissue	n. 组织,纸巾
indeed	adv. 真正地,的确,事实上
prepare	v. 预备,准备
cotton	n. 棉花
crust	n. 外壳,硬壳,面包皮
trace	v. 追踪,探索 n. 痕迹
discussion	n. 讨论
floor	n. 地面,地板
fiber	n. 光纤
geological	adj. 地质学的
escape	v. 逃跑,逃脱
dense	adj. 密集的,浓厚的
stimulate	v. 刺激,激励
reflection	n. 反映,考虑
accurate	adj. 准确的,精确的
whole	adj. 全部的,完整的
increasingly	adv. 日益,愈加
spot	n. 地点,污点 v. 认出,玷污
length	n. 长度
advertisement	n. 广告
top	n. 顶部,顶端
tropical	adj. 热带的,炎热的
efficient	adj. 效率高的,有能力的
nutrient	n. 营养品 adj. 营养的
ten	num. 十,十个
pastoralist	n. 田园诗的作者,牧民
Britain	n. 英国
search	v. 搜寻,调查
leatherback	n. 棱龟(大海龟之一种)
boundary	n. 边界,分界线
sky	n. 天,天空
steel	n. 钢,钢铁
thick	adj. 厚的,粗的
fail	v. 失败,没有通过
Atlantic	n. 大西洋 adj. 大西洋的
computer	n. 计算机,电脑
fruit	n. 水果,果实
tension	n. 紧张,拉力 vt. 使拉紧,使绷紧
performance	n. 履行,执行,表演
audience	n. 听众,观众
Cambrian	n. 威尔斯人
free	a&ad. 自由的(地),免费的(地) v. 解放
conflict	n. 冲突,战斗 v. 冲突,抵触
freeze	v. (使)结冰,(使)冷冻
climatic	adj. 气候上的
musical	adj. 音乐的,悦耳的
familiar	adj. 熟悉的,常见的
Chinese	n&a. 中国人(的)
shelf	n. 架子,搁板
fly	v. 乘,飞(行) n. 苍蝇
microscope	n. 显微镜
comparison	n. 比较,对照
appeal	n&v. 呼吁,上诉
map	n. 地图 v. 绘制地图
cue	n. 暗示,提示
atom	n. 原子
civilization	n. 文明,文化
model	n. 模型 v. 模仿,展示
item	n. 项目,条款
seventeenth	num. 第十七,十七分之一
skin	n. 皮肤
shelter	n. 掩蔽,庇护所 v. 掩蔽,躲避
inside	ad&prep. 在…里面,少于 n&a. 里面(的)
rainfall	n. 降雨,降雨量
try	v&n. 尝试,试验
something	pron. 某事,某物 adv. 有点,大约
gain	n&v. 获得,增益
habit	n. 习惯,习性
ceramic	adj. 陶器的 n. 陶瓷制品
famous	adj. 著名的,出名的,
report	n. 报告 v. 报导,汇报
moral	adj. 道德(上)的,精神的
buy	v. 买 n. 购买,买卖
sleep	vi&n. 睡,睡觉
decision	n. 决定,决议
stable	adj. 稳定的
remember	v. 回忆起,记得
series	n. 系列,连续
white	n&ad. 白色(的)
due	adj. 应有的 n. 应得物
song	n. 歌(曲)
soft	adj. 软的,温和的
lichen	n. 青苔,苔藓
stem	n. 茎,干 v. 起源于 v. 堵住
car	n. 汽车
habitat	n. 栖息地,住处
bur	n. 刺果
unique	adj. 唯一的,独特的
coastal	adj. 海岸的,沿海的
whereas	conj. 然而,反之,尽管
consequence	n. 结果
California	n. 加利福尼亚,加州
trail	n. 踪迹 v. 追踪
rely	v. 依赖,依靠
tribe	n. 部落,部族
average	n&a. 平均(的) v. 平均
appropriate	adj. 适当的
here	adv. 在这里,这时
nor	conj. 也不
external	n&a. 外部(的)
insert	v. 插入,嵌入
stud	v. 镶嵌,点缀
proportion	n. 比例
concept	n. 观念,概念
geometric	adj. 几何(学)的
inner	adj. 内部的,里面的,内心的
resemble	v. 象,类似于
scale	n. 规模,等级,比例
dark	n. 黑暗
intense	adj. 强烈的,激烈的
dominate	v. 支配,占优势
wild	adj. 野生的 n. 荒野
ton	n. 吨,大量
ship	n. 船 v. 航运,载运
significance	n. 意义,重要性
Mexico	n. 墨西哥(拉丁美洲国家)
ordinary	adj. 平常的,普通的
case	n. 事例,情形
compose	v. 组成,写作
Rome	n. 罗马
permit	n. 通行证,执照 v. 许可,允许
capable	adj. 有能力的,能干的
fully	adv. 充分地,完全地
factual	adj. 事实的,实际的
tiny	adj. 很少的,微小的
mouth	n. 口,嘴
connection	n. 连接,关系
Philadelphia	n. 费城(美国宾西法尼亚州东南部港市)
strength	n. 力,力量
professional	adj. 专业的,职业的
virtually	adv. 事实上,实质上
diet	n. 通常所吃的食物,会议
phenomenon	n. 现象
permanent	adj. 永久的,持久的
column	n. 圆柱,专栏
warmer	n. 使热的人,温热装置
rest	n&v. 休息
leg	n. 腿 v. 走,跑
contact	n. 接触,联系
paleolithic	adj. 旧石器时代的
hear	v. 听到,听说
crow	n. 乌鸦 v. 啼叫
spend	v. 花费,度过
respond	v. 回答,响应,作出反应
minute	n. 分钟,片刻
Washington	n. 华盛顿
machinery	n. 机械,机器
unit	n. 个体,(计量)单位
improvement	n. 改进,进步
deal	n. 交易 v. 处理,分配
compound	n. 混合物
fear	n. 恐怖,害怕 v. 害怕,畏惧
feather	n. 羽毛,轻的东西
specialize	v. 专攻
bed	n. 床,基础 v. 安置
initial	adj. 最初的,初始的
inch	n. 英寸
evaporate	v. (使)蒸发,消失
electric	adj. 电的
nucleus	n. 核子
ecologist	n. 生态学者
exercise	n&v. 运动,练习
despite	prep. 尽管,不论
Indian	n. 印度(人)
independent	n. 中立派,无党派者
neighbor	n. 邻居,邻国
migrate	v. 迁移,转移
contribution	n. 贡献
divide	v. 分,划分
prey	v. 捕食,掠夺
expect	v. 期待,预期
creature	n. 创造物
billion	n&a. 十亿(的)
die	v. 死亡
innovation	n. 改革,创新
depression	n. 沮丧,消沉
edge	n. 边(缘) v. 侧着移动,徐徐移动
ever	adv. 曾经,永远
job	n. 工作,职业
protection	n. 保护
timberline	n. 树带界线
acquire	v. 获得,学到
association	n. 协会,联合,结交
abundant	adj. 丰富的,充裕的
regard	n. 尊敬 v. 看待,当作
nothing	pron. 没有什么 n. 没有 adv. 毫不
yield	v. 生产,获利,屈服
adaptation	n. 适应, 改编, 改写本
attack	v&n. 攻击,进攻
contemporary	n. 同时代的人 adj. 当代的
wealthy	adj. 富有的
construct	v. 建造,构造,创立
adopt	v. 采用,收养
petroleum	n. 石油
summer	n. 夏季
competition	n. 竞争,竞赛
boat	n. 小船,艇
demonstrate	v. 示范,证明,论证
crack	n. 裂缝,噼啪声 v. (使)破裂
dissolve	v. 溶解,解散
moisture	n. 潮湿,湿气
vapor	n. 水蒸气
equipment	n. 装备,设备
threaten	v. 恐吓,威胁
succession	n. 连续,继承
annual	adj. 年度的
cattle	n. 牛,家养牲畜
six	num. 六,六个
underground	adj. 地下的,地面下的
comet	n. 彗星
creation	n. 创造,创作物
feel	v. 感觉,触摸 v. 有知觉
jazz	n. 爵士乐
Maya	n. 玛雅人,玛雅语
capital	n. 首都 adj. 首都的,重要的
poor	adj. 贫穷的,可怜的
depict	v. 描述,描写
prior	adj. 优先的,在前的
fantasy	n. 幻想
ecological	adj. 生态学的
acorn	n. 橡树果,橡子
employ	v. 雇用
fair	a&ad. 公平的
immigrant	n. 移民,侨民
pump	n. 泵,抽水机
fresh	adj. 新鲜的,无经验的
industrialization	n. 工业化,产业化
suitable	adj. 适当的,相配的
cultivate	v. 培养,耕作
tie	v. 扎,捆绑
derive	v. 获取,得自,起源
retain	v. 保持,保留
chance	n. 机会
civil	adj. 公民的,文明的
prehistoric	adj. 史前的
exhibit	n&v. 展览,陈列,展示
numerous	adj. 众多的,许多的
hunter	n. 猎人
Florida	n. 佛罗里达(美国州名)
rule	n. 规则,条例 v. 支配,统治
game	n. 比赛
obsidian	n. [矿]黑曜石
migratory	adj. 迁移的,流浪的
nestling	n. 尚未离巢的小鸟,婴孩
sculptor	n. 雕刻家
complicate	v. (使)变复杂
progress	n&v. 前进,进步,发展
consumer	n. 消费者
frontier	n. 国境,边疆
suit	v. 合适,相配
kill	v. 杀死,毁掉
distinct	adj. 清楚的,明显的,不同的
responsible	adj. 有责任的,负责的
decorative	adj. 装饰的
president	n. 总统,会长
parasite	n. 寄生虫
final	adj. 最后的,最终的
modify	v. 更改,修改
finish	n&v. 完成,结束
tone	n. 音调
abundance	n. 丰富,充裕
vocabulary	n. 词汇,词表
alder	n. [植]桤木
title	n. 标题 v. 加标题于,赋予称
moreover	adv. 此外,而且
propose	v. 打算,向提议,求婚
street	n. 街道
collection	n. 收藏(品)
seven	num. 七,七个
explicit	adj. 明确的,清晰的
reaction	n. 反应,反作用
molecule	n. 分子
readily	adv. 乐意地,欣然
mix	v. 使混和,混淆
document	n. 公文,文件 v. 记载
waste	v&n. 浪费
ancestor	n. 祖先,祖宗
scholar	n. 学者
join	v. 参加,加入,连接
access	n. 入口,通道 v. 进入
pullman	n. 卧车,普式火车
raw	adj. 自然状态的,生的,原始的
horse	n. 马
mechanism	n. 机械装置
textile	n. 纺织品
rocky	adj. 岩石的,稳固的
care	n&v. 关心,担忧,照顾
citizen	n. 市民,公民
interaction	n. 交互作用
beyond	prep. 远于,越出 adv. 在更远处
desertification	n. 荒漠化,沙漠化
gold	n. 黄金,金币 adj. 金的
analyze	v. 分析,分解
night	n. 夜,夜晚
army	n. 军队
expedition	n. 远征,探险队
conduct	n. 行为 v. 引导,管理
principal	adj. 主要的,首要的 n. 资本
front	n&a. 前面(的) v. 面向
convention	n. 习俗,惯例
seek	v. 寻找,探索
surge	n&v. (波涛)汹涌,涌起
ogallala	n. 奥加拉拉(美国地名)
availability	n. 可用性,有效性,实用性
sophisticate	adj. 诡辩的,久经世故的
archaeological	adj. 考古学的
universe	n. 宇宙,万物
impulse	n. 冲动 vt. 推动
debris	n. 碎片,残骸
unknown	adj. 不知道的,未知的
tooth	n. 牙齿
twenty	num. 二十,二十个
office	n. 办公室,事务所
wet	adj. 湿的,多雨的
texture	n. 质地,(材料等的)结构
remarkable	adj. 非凡的,显著的
enormous	adj. 巨大的,庞大的
archaeologist	n. 考古学家
neither	a&pron. 两者都不 conj. 既不也不
formal	adj. 正式的,正规的
perspective	n. 视角,观点,远景
cetacean	n. 鲸类动物
sunlight	n. 日光,阳光
gap	n. 缺口裂缝,差距
destructive	adj. 破坏(性)的
plankton	n. 浮游生物
radio	n. 收音机,无线电
reproduce	v. 再生,复制
enter	v. 进入,参加
oak	n. 橡树,橡木
key	n. 关键,钥匙
silver	n. 银 v. 镀银
hole	n. 洞,孔 v. 凿洞
nearby	adj. 附近的,邻近的 adv. 在附近
yellow	n&a. 黄色(的)
press	n&v. 压,压迫 n. 报刊,新闻界
credit	n. 信任 v. 相信,信任
ware	n. 陶器,器皿
diameter	n. 直径
neanderthal	adv. 穴居人的
frame	n. 镜框,构架 v. 镶框,制定
distinction	n. 差别,区分,优秀
French	n&a. 法国(人)(的)
ideal	n. 理想 adj. 理想的,完美的
exact	adj. 精确的,准确的
behind	prep. 在…后,落后于 adv. 在后面
foreign	adj. 外国的
flat	adj. 平坦的
enjoy	v. 享受,喜爱
furthermore	adv. 而且,此外
independence	n. 独立,自主
beach	n. 海滩
technical	adj. 技术的,技巧的
artificial	adj. 人造的,虚伪的
drive	n&v. 驾驶
respect	n&v. 尊敬,敬重
precede	v. 领先(于),在之前,先于
guild	n. 行会,协会
nile	n. 尼罗河
instance	n. 实例,建议
decoration	n. 装饰(品)
decay	v&n. 衰退,腐败
originate	v. 起源于,创始
radiation	n. 放射物,辐射
massive	adj. 巨大的,大规模的
fundamental	adj. 基础的,基本的
height	n. 高度,海拔
butterfly	n. 蝴蝶
reproduction	n. 再现,复制品
asteroid	n. 小行星
tunnel	n. 隧道,地道
apartment	n. 公寓住宅
him	pron. 他
burn	v. 烧 n. 烧伤
export	v&n. 输出,出口
flash	n&v. 闪光,闪现
secondary	adj. 次要的,二级的
pottery	n. 陶器
chimpanzee	n. 黑猩猩
onto	prep. 在之上
occupy	v. 占,占领
harvest	n. 收获 v. 收获,收割
disappear	v. 消失
Australian	n. 澳大利亚(的)
conclusion	n. 结束,结论
dominant	adj. 有统治权的,占优势的
pull	v. 拉,拖,拔
tuna	n. 金枪鱼
restrict	v. 限制,约束
distribution	n. 分发,分配,分布
movie	n. 电影
projection	n. 发射
stretch	v&n. 伸展,延伸
goal	n. 目的,目标
requirement	n. 需求,要求
operate	v. 操作,运转
trap	v. 设圈套,陷入(困境) n. 圈套
reject	v. 拒绝,退回
majority	n. 大多数
volume	n. 卷,册
float	v&n. 漂浮,浮现
zone	n. 地域,地带 v. 分成区
pastoralism	n. 田园主义,牧歌体
reliable	adj. 可靠的,可信赖的
frequency	n. 频率,发生次数
geologic	adj. 地质的
extent	n. 范围,程度,广度
pleistocene	n&a. [地]更新世(的)(一段时期)
enhance	v. 提高,增强
accompany	v. 陪伴,伴奏
interpret	v. 解释,说明
snowfall	n. 降雪,降雪量
storm	n. 暴风雨,暴风雪
musician	n. 音乐家
critical	adj. 批评的,挑剔的,决定性的
Netherlands	n. 荷兰[国家]
choose	v. 选择,选定
polar	adj. (近)地极的,对立的
pollutant	n. 污染物质
unable	adj. 不能的,不会的
elite	n. 精英,精华
branch	n. 树枝,分部,分支
seawater	n. 海水
Chicago	n. 芝加哥
walk	v. 行,走 n. 步行
Health	n. 健康
decorate	v. 装饰
portion	n. 一部分
combination	n. 结合,联合,合并
active	adj. 积极的,活跃的,起作用的
division	n. 分开,分割,区分
pure	adj. 纯的,纯粹的
engage	v. 雇佣,从事,参加
stay	v&n. 逗留,保持,延缓
regulate	v. 管理,控制,调整
send	v. 发送,派遣
copper	n. 铜,警察
engineer	n. 工程师 v. 设计,建造
critic	n. 批评家,评论家
investment	n. 投资,可获利的东西
Boston	n. 波士顿
opportunist	n. 机会主义者,投机取巧者
dependent	adj. 依靠的,依赖的
week	n. 星期,周
balance	n. 平衡 v. 使平衡
pollution	n. 污染
mother	n. 母亲
drought	n. 干旱,缺乏
survey	n&vt. 调查
repeat	n&v. 重复,重做,使再现
reflective	adj. 反射的,反映的,沉思的
status	n. 身份,地位,情形,
authority	n. 权威,权力
perception	n. 观念,洞察力,认识能力
ridge	n. 背脊,山脊
stress	n. 压力,重点 v. 着重,强调
accumulation	n. 积聚,堆积物
bound	n. 范围,界限
Alaska	n. 阿拉斯加州(美国州名)
context	n. 上下文
perfect	adj. 完美的 v. 使完美,修改
millennium	n. 太平盛世,一千年
somewhat	adv. 稍微,有点,有些
China	n. 中国,瓷器
favorable	adj. 赞成的,有利的
broad	adj. 宽的,广泛的
risk	vt&n. 冒险,风险
antarctica	n. 南极洲
kinetoscope	n. 活动电影放映机
absence	n. 不在, 缺席, 缺乏, 没有
representative	n. 代表 a典型的, 有代表性的
enlarge	v. 扩大, 放大
defense	n. 国防部,防卫
category	n. 种类
intensity	n. 强度,强烈
abandon	v. 放弃,遗弃
relation	n. 关系,联系
virus	n. 病毒
exhibition	n. 表现,展览会
alter	v. 改变
myth	n. 神话
arid	adj. 干旱的,贫瘠的
erode	v. 侵蚀,腐蚀
dramatic	adj. 戏剧性的,生动的
arise	v. 出现,发生,起因于
reverse	v. 颠倒,倒转
capacity	n. 容量,能力
competitor	n. 竞争者
promise	vt&n. 允诺,答应
wooden	adj. 木制的
portray	v. 描绘
composer	n. 作家,作曲家
stick	n. 棍 v. 刺,戳
glaciation	n. 冻结成冰,冰河作用
arm	n. 臂 v. 供给,武装
transfer	n&v. 迁移,移动,转移
arch	n. 拱门v(使)弯成弓形
prediction	n. 预言
stencil	n. 模版,蜡纸 v. 用蜡纸印刷
distinctive	adj. 有区别的,独特的
tail	n. 尾巴 v. 跟踪,尾随
France	n. 法国,法兰西
toxic	adj. 有毒的,中毒的
magnetic	adj. 磁的,有吸引力的
visit	n&v. 拜访,访问
apart	adv. 相间隔,分离 adj. 分离(隔)的
gull	n. 海鸥 v. 欺骗
herbivore	n. 草食动物
cross	n. 十字,交叉 v. 使交叉,横过
tornado	n. 龙卷风
metallic	adj. 金属(性)的
loud	a&ad. 高声的,大声地
drain	n. 排水,消耗
realize	v. 认识到,了解
shallow	adj. 浅的
surplus	n. 剩余,过剩
explore	v. 探险,探测
classify	v. 分类,分等
possibility	n. 可能性
novel	n. 小说,长篇故事
afford	v. 提供,给予
southeast	n&a. 东南(的)
narrow	adj. 狭窄(隘)的,勉强的 v. 变窄,压缩
northwest	n&a. 西北方(的)
collision	n. 碰撞,冲突
lung	n. 肺,呼吸器
diverse	adj. 不同的,变化多的
temperate	adj. 温和的,适度的,有节制的
widespread	adj. 分布广泛的,普遍的
isotope	n. 同位素
detect	v. 察觉,侦查,发现
nevertheless	adv. 尽管如此 conj. 然而,不过
wheat	n. 小麦
peak	n. 山顶,顶点
parlor	n. 客厅,会客室
navigate	v. 航行,航海
tendency	n. 趋向,倾向
flourish	v&n. 繁荣,茂盛
catch	v. 捕获,抓住
evolutionary	adj. 进化的,发展的,演变的
bead	n. 珠子,水珠
variability	n. 可变性
turbine	n. 涡轮
highland	n. 高地,丘陵地带
meat	n. (食用)肉,肉类
match	v. 相配,相称
tall	adj. 高的,长的
communicate	v. 沟通,通信,传达
distribute	v. 分发,分配
comparative	adj. 比较的,相当的
newly	adj. 重新,最近
mill	v. 碾磨,搅拌
indirect	adj. 间接的,迂回的
stop	n&v. 停止,阻止
destruction	n. 破坏,毁灭
customer	n. 消费者
suddenly	adv. 突然地
multiple	adj. 多样的 n. 倍数
vitamin	n. 维他命,维生素
manner	n. 礼貌,方式
vegetable	n. 蔬菜,植物
conclude	v. 推断出,结束,总结
barrier	n. 障碍物,栅栏
mud	n. 泥,泥浆
motif	n. 主题,主旨
wheel	n. 轮 v. 推,拉,转动
rough	adj. 粗糙的,大致的
corridor	n. 走廊
challenger	n. 挑战者
fragment	n. 碎片 v. (使)成碎片
occasionally	adv. 有时候,偶而
component	n. 成分
beaver	n. 海狸(毛皮)
comprehension	n. 理解,包含
physiological	adj. 生理(学)的
ceremony	n. 典礼,仪式
altitude	n. 高度(海拔)
arrive	v. 到达,抵达
exploit	v. 开拓,开采
microscopic	adj. 显微镜的,极小的
schedule	n. 时刻表,日程 v. 安排,排定
former	adj. 从前的,以前的
career	n. 事业,生涯
aim	n. 目标v对瞄准,打算
inventor	n. 发明家
consume	v. 消耗,消费,消灭
examine	v. 检查,调查,考试
atmospheric	adj. 大气的
fore	adj. 在前的 n. 前头,船头
province	n. 省(一个国家的大行政区)
introduction	n. 介绍,传入
encode	v. 把编码
squirrel	n. 松鼠
random	n&a. 任意(的),随便(的)
tulip	n. 郁金香
invent	v. 发明,创造
pueblo	n. 印第安人村庄
pound	n. 磅,英镑 v. (连续)猛击,捣碎
pebble	n. 小圆石,小鹅卵石
lot	n. 许多,大量
obvious	adj. 明显的,显而易见的
station	n. (车)站,台 v. 安置,派驻
limestone	n. 石灰石
sumerian	n. 闪族人[语]
brown	n&a. 棕色(的),人名
gazelle	n. 瞪羚,小羚羊
Columbia	n. 哥伦比亚
statistic	n. 统计数值
evaporation	n. 蒸发
archaeology	n. 考古学
dweller	n. 居住者,居民
possess	v. 占有,拥有
elsewhere	adv. 在别处
seasonal	adj. 季节的,周期性的
assemble	v. 集合,聚集,装配
mask	n. 面具
reality	n. 真实,事实
alone	adj. 单独的
college	n. 学院
definition	n. 定义,解说
dead	adj. 死的 n. 死者
regional	adj. 整个地区的,地域性地
border	n. 边界 v. 与接壤,接近
household	n. 家庭
trend	n&v. 倾向,趋势
sandstone	n. 沙岩
Sweden	n. 瑞典
suck	v. 吸,吮
speech	n. 演说
consequent	n. 推论,结论
crisis	n. 决定性时刻,危机
modem	n. [计]调制解调器
literary	adj. 文学的
pioneer	n. 先驱者,创始人 v. 开拓(创)
criticize	v. 批评,责备
originally	adv. 最初,原先
salinity	n. 盐分,盐度
room	n. 房间
shrub	n. 灌木, 灌木丛
weapon	n. 武器
clean	adj. 清洁的 v. 打扫,使干净
corn	n. 玉米
dynasty	n. 朝代,王朝
livestock	n. 家畜
drama	n. 戏剧
photography	n. 摄影
colonist	n. 殖民地居民,殖民者
extra	adj. 额外的
algae	n. 水藻
lowland	n. 低地
otherwise	conj. 否则 adv. 否则,除此以外
round	adj. 圆的 adv. 在周围 prep. 大约
imagine	v. 想象,设想
selection	n. 选择,挑选
vertebrate	n. 脊椎动物
sixteenth	num. 第十六,十六分之一
recover	v. 恢复,复原,重获
forward	adv. 向前,从今往后 adj. 前部的
expense	n. 费用,代价
smooth	adj. 光滑的,平整的 v. 弄平
talk	v&n. 谈话
scheme	n. 安排 v. 计划,策划
tower	n. 塔,城堡
bright	adj. 明亮的
anthropologist	n. 人类学家
discipline	n. 纪律,学科 v. 训练
opposite	adj. 相对的,对面的 n. 相反的事物
oyster	n. 牡蛎,蚝
interval	n. 间隔,距离
volcano	n. 火山
love	n&v. 爱
mind	n. 头脑,意见 v. 介意,注意
steady	adj. 稳固的,坚定的
full	n. 全部 adj. 充满的,完全的
universal	adj. 普遍的,全体的
union	n. 联合,联盟
terrain	n. 地形
fluid	n. 液体 adj. 流体的,流动的
wildebeest	n. 羚羊(其中一种)
resistance	n. 反抗,抵抗
rabbit	n. 兔
candidate	n. 候选人,投考者
museum	n. 博物馆
hormone	n. 荷尔蒙,激素
countryside	n. 乡下地方
thereby	adv. 因此,从而
violin	n. 小提琴
bad	adj. 劣质的,有害的,坏的
copy	n. 副本 v. 复印,抄袭
distant	adj. 远的,疏远的
lens	n. 透镜,镜头
track	n. 轨道,踪迹 v. 跟踪
porcelain	n. 瓷,瓷器
pellet	n. 小球
physics	n. 物理学
spectrum	n. 光谱
forth	adv. 往前,向外
mesozoic	n&a. 中生代(的)
assign	v. 分配,指派
giant	n. 巨人,天才
superior	n. 长者,上级 adj. 较高的,上级的
sheet	n. (一)片,(一)张
rigid	adj. 刚硬的,严格的
Denmark	n. 丹麦
symbol	n. 符号,记号,象征
gar	n. 雀鳝属鱼, 雀鳝
functional	adj. 功能的
cultivation	n. 培养,教养
impossible	adj. 不可能的
domestic	adj. 国内的,家庭的
emphasis	n. 强调,重点
colonize	v. 拓殖,殖民
flipper	n. 鳍状肢
peninsula	n. 半岛
acid	n. 酸 adj. 酸的
droplet	n. 小滴
paleontologist	n. 古生物学者
apprentice	n. 学徒 v. 当学徒
grandma	n. 奶奶
justify	v. 证明是正当的
cereal	n. 谷类食品
investigation	n. 调查,研究
rail	n. 栏杆 v. 抱怨,责骂
post	n. 邮政(件),职位 v. 邮寄,贴出
lock	n. 锁 v. 锁上
feeling	n. 触觉,知觉
ore	n. 矿石
fossilization	n. 化石作用
precise	adj. 精确的,准确的
consistent	adj. 一致的,调和的
homeland	n. 祖国,本国
policy	n. 政策,方针
wrong	a&ad. 错误的,不正当的
transition	n. 转变,过渡
Greece	n. 希腊
screen	n. 屏幕 v. 掩蔽,放映
freezing	adj. 冰冻的,严寒的
mislead	v. 误导
hind	adj. 后边的,后面的
psychological	adj. 心理(上)的
venus	n. 维纳斯,金星
aid	n. 帮助,资助
fern	n. 蕨类植物
aurora	n. 黎明的女神,极光
zebra	n. 斑马
heart	n. 心,心脏
whatever	pron. 凡是,无论什么 adj. 无论怎样的
skull	n. 头脑,头骨
list	n. 目录,列表 v. 列出
scandinavian	n. 斯堪的纳维亚人[语]
Paris	n. 巴黎
handle	v. 处理,操作
profit	n. 利润,益处 v. 得益,有利于
revise	v. 修订,校订
fracture	v. (使)破碎,(使)破裂
hence	adv. 因此,从此
investigator	n. 调查人
rent	v. 租用,出租 n. 租金
interpretation	n. 解释,阐明
overcome	v. 战胜,克服
dam	n. 水坝,障碍
reduction	n. 减少,缩影
unless	conj. 如果不,除非
preference	n. 偏爱,优先选择
transformation	n. 变化,转化
calculate	v. 计算,考虑
basket	n. 篮,一篮
establishment	n. 确立,制定
canopy	n. 天篷,遮篷
dig	v. 挖
consumption	n. 消费
reservoir	n. 水库,蓄水池
description	n. 描写,记述
pore	n. 小孔
operation	n. 运转,操作,实施
cast	v. 投, 抛
oral	adj. 口头的
circumstance	n. 环境,详情,境况
potash	n. 碳酸钾,苛性钾
severe	adj. 严厉的,剧烈的,严重的
satellite	n. 人造卫星
trouble	n&v. 烦恼,麻烦
string	n. 线 v. 排成一列
architect	n. 建筑师
exhibitor	n. 展出者,显示者
classical	adj. 古典的,正统派的
extract	v. 取出,提取 n. 摘录
none	adv. 决不,毫不 pron. 一个也没有
compact	v. 使坚实 n. 契约
undergo	v. 经历,遭受
fragile	adj. 易碎的,脆的
responsibility	n. 责任,职责
exaggerate	v. 夸大,夸张
output	n. 产量,输出
skyscraper	n. 摩天楼
wing	n. 翅膀 v. 飞过
disease	n. 疾病
resist	v. 抵抗,反抗
win	v. (获)胜,赢得
fluctuation	n. 波动,起伏
breed	v. 教养,抚养 n. 品种
partner	n. 合伙人
argument	n. 争论
solve	v. 解决,解答
cage	n. 笼
shale	n. 页岩,泥板岩
productivity	n. 生产力
furniture	n. 家具,设备
systematic	adj. 系统的,体系的
attribute	n. 属性,品质,特征
maker	n. 制造者
variable	adj. 多变的,可变的 n. 变量
preservation	n. 保存
initiate	v. 开始,发起
breakfast	n. 早餐 vi进早餐
perceive	v. 察觉,感知
convince	v. 使确信, 使信服
competitive	adj. 竞争的
clue	n. 线索
nervous	adj. 紧张的,不安的
count	v. 数,计算
adjust	v. 调整,校准
challenge	n&v. 挑战
hyper	adj. 亢奋的,高度紧张的
eliminate	v. 排除,除去
warren	n. 养兔场,大杂院
resident	n. 居民
vent	n. 出口 v. 排出,发泄
pole	n. 柱,地极
storage	n. 贮藏(量),存储
investor	n. 投资者
loose	n. 解放,放任 v. 弄松, 释放
miss	n. 过错 v. 错过,遗漏
upward	adj. 向上的 adv. 以上
linguistic	adj. 语言(学)上的
primitive	adj. 原始的,远古的
uniform	n. 制服 v. 使统一
vision	n. 幻想,视觉
graze	v. 放牧,掠过
cucumber	n. 黄瓜
exception	n. 除外,例外
elaborate	adj. 详尽的,复杂的 v. 详述
failure	n. 失败
secure	adj. 安全的,可靠的 v. 保护
pool	n. 池
mystery	n. 神秘,神秘的事物
coat	n. 外套 v. 涂上,包上
mature	adj. 成熟的 v. 使成熟
sustain	v. 支撑,维持
latitude	n. 纬度,范围
clothe	v. 给穿衣,覆盖
coin	n. 硬币 v. 铸造(硬币)
news	n. 新闻,消息
organ	n. 器官,机构
earthenware	n. 土器,陶器
refuse	v. 拒绝
hill	n. 小山,丘陵
wagon	n. 四轮马车,货车
rite	n. 仪式,典礼
achievement	n. 成就,功绩
inhabit	v. 居住于,栖息
locust	n. 蝗虫
federal	adj. 联邦的,联合的
govern	v. 统治,支配,管理
philosophy	n. 哲学
endure	v. 耐久,忍耐
offspring	n. 儿女,子孙
Hawaii	n. 夏威夷
brick	n. 砖块
convert	v. 使转变,转换
pigeon	n. 鸽子
celebrity	n. 名声,名人
devise	v. 设计,发明
your	pron. 你的,你们的
territory	n. 领土,地域
interact	v. 互相作用,互相影响
gulf	n. 海湾,深渊
bond	n. 结合,协定 v. 使结合,粘合
cluster	n. 串,丛
calcium	n. 钙
vital	adj. 重大的,至关重要的
poetry	n. 诗
notice	n. 通知 v. 注意到
inland	adj. 内陆的,国内的
voice	n. 嗓音,意见 v. 说(话)
double	n&a. 两倍(的) v. 使加倍
entrance	n. 入口
chemistry	n. 化学
oppose	v. 反对,对抗
portrait	n. 肖像,人像
agent	n. 代理(商)
weave	v. 织,编
scatter	v. 撒(播),分散
empty	adj. 空的 v. (使)空,倒出
islander	n. 岛上居民
recognition	n. 识别,确认
tile	n. 瓦片,瓷砖
indication	n. 指示,表示,迹象
implement	v. 履行,实施 n. 工(器,用)具
limitation	n. 限制,局限性
piano	n. 钢琴
proxy	n. 代理人
neolithic	adj. 新石器时代的
voyage	n&v. 航海
inspire	v. 鼓舞,激起,给…以灵感
spore	n. 孢子
Texas	n. 德克萨斯州(美国州名)
strain	n&v. 拉紧,紧张,劳累
imitate	v. 模仿,仿制
timber	n. 木材,木料
rank	n. 等级,阶层 v. 排列
concentrate	v. 专心,集中,浓缩
container	n. 容器
article	n. 文章,论文
sink	v. 下沉
ecology	n. 生态学
drink	v. 喝酒
runoff	n. 径流量,流出
watercolor	n. 水彩颜料,水彩画(法)
streamline	adj. 流线型的
self	n. 自己,自我
reward	n. 报酬 v. 酬劳
mantle	n. 斗蓬 v. 披风,覆盖
telescope	n. 望远镜
subsequent	adj. 后来的,并发的
hungry	adj. 饥饿的,渴望的
episode	n. 一段情节
crossbill	n. 交喙鸟
emergence	n. 浮现,露出
cheap	adj. 便宜的,不值钱的
sort	n. 种类v分类,拣选
industrialize	v. 使工业化
burial	n. 埋葬
hominid	n. 原始人类
laboratory	n. 实验室
cinema	n. 电影院,电影
compass	n. 罗盘,指南针
kittiwake	n. 三趾鸥
mode	n. 方式,模式
entertainment	n. 款待,娱乐
everything	pron. 每件事物
purchase	v. 购买
sanctuary	n. 避难所
bus	n. 公共汽车
theatrical	adj. 戏剧性的
profession	n. 职业,专业
theme	n. 主题
gravel	n. 砂砾(层)
laborer	n. 劳动者
proton	n. 质子
commerce	n. 商业
decide	v. 决定,判决
fireplace	n. 壁炉
aluminum	n. 铝
firm	n. 公司
collide	v. 碰撞,抵触
fight	n&v. 战斗,打架,斗争
puzzle	n. 难题 v. (使)迷惑
performer	n. 表演者
twist	v. 缠绕,拧,扭曲
dramatically	adv. 戏剧地,引人注目地
listen	v. 听
dependence	n. 依靠,信任
struggle	v. 努力,奋斗,挣扎
German	n. 德国人 adj. 德国的
irregular	adj. 不规则的,无规律的
centimeter	n. 厘米
colonization	n. 殖民地化,殖民
fund	n. 资金 v. 支助,投资
historian	n. 历史学家
female	n. 女性
emit	v. 发出,放射
retreat	v. 撤退,退却
deficiency	n. 缺乏,不足
rotate	v. (使)旋转
invertebrate	a&n. 无脊椎的,无骨气的人
symbiotic	adj. 共生的
alternative	adj. 选择性的,二中择一的
bridge	n. 桥 v. 架桥,渡过
vertical	adj. 垂直的,直立的
circle	n. 圆(圈) v. 围着,盘旋
quarter	n. 四分之一,一刻钟
fix	v. 修理,安装,整理
doubt	n&v. 怀疑,怀疑
Tennessee	n. 田纳西州
eruption	n. 爆发,火山灰
treat	vt&n. 对待,款待
politician	n. 政治家,政客
politics	n. 政治,政治学
mail	n. 邮件,邮政
beauty	n. 美,美景
format	n. 设计,格式
Spanish	a&n. 西班牙(的),西班牙人(的)
confirm	v. 确定,确认
bubble	n. 泡 v. 冒泡,起泡
engraving	n. 雕刻术,雕版
specimen	n. 范例,标本,样品
tide	n. 潮,潮汐
ray	n. 光线,射线
weigh	v. 称重量
encounter	v&n. 遭遇,遇到
costume	n. 装束,服装
plane	n. 平面,飞机
nouveau	adj. 新近到达的,最近产生的
gland	n. 腺
emission	n. 散发,发行,排放
log	n. 原木,航海日志 v. 正式记录
glaze	v. 变呆滞 v. 上釉 n. 釉(料)
martian	n&a. 火星人(的)
bee	n. 蜜蜂
latter	adj. 后者的,后面的
occurrence	n. 发生,出现
anything	pron. 任何事
prevail	v. 流行,获胜
reliance	n. 信任,信心,依靠
roof	n. 屋顶
mercantile	adj. 贸易的,商业的
overall	adj. 全部的,全面的
fossilize	v. 成化石,陈腐
chain	n. 链(条),一连串,一系列
pose	n. 姿势,姿态 v. 摆姿势
cylinder	n. 圆筒,圆柱体
countercurrent	n. 逆流,反向电流
score	n. 得分
potter	n. 陶工,制陶工人
aesthetic	adj. 美学的,审美的
neighborhood	n. 附近,邻近
hemisphere	n. 半球
excavate	v. 挖掘,开凿
reclamation	n. 开垦,改造
admire	v. 赞美,钦佩,羡慕
ensure	v. 确保,保证
weak	adj. 虚弱的,淡的
excite	v. 使兴奋,激动
orbit	n. 轨道 v. (绕…)作轨道运行
sale	n. 出售,卖出
blow	v. 风吹,吹气于
pair	n. 一对,一双
grind	v. 磨(碎),折磨
cease	v. 停止,终了
incorporate	v. 合并,组成公司
classroom	n. 教室
box	n. 盒子,箱
biologist	n. 生物学家
aboriginal	adj. 土著的,原来的
automatically	adv. 自动地,机械地
crude	adj. 天然的,未加工的,粗鲁的
version	n. 译文,译本
drawing	n. 图画,制图
capture	n&v. 捕获,俘获,夺取
hang	v. 悬挂,附着
income	n. 收入,收益,
freedom	n. 自由
Mississippi	n. 密西西比河,密西西比州(美国州名)
cartoon	n. 漫画,卡通画
separation	n. 分离,分开
recharge	v. 再充电,再进攻,恢复精力
motivation	n. 动机
gene	n. [遗传]因子,[遗传]基因
penetrate	v. 穿透,渗透,看穿
collective	adj. 集体的,共同的
nerve	n. 神经,胆量
engrave	v. 雕刻,使铭记
strait	n. 地峡
flake	n. 薄片 v. 使成薄片,剥落
disadvantage	n. 不利,缺点,劣势
constitute	v. 构成,组成,建立
graham	adj. 全麦(面粉)的
reference	n. 提及,涉及,参考
eight	num. 八,八个,第八
turnpike	n. 收费公路
load	n. 负荷,装载量 v. 装(载),使负担
trigger	v. 引发,引起 n. 板机
mixture	n. 混合(物)
geology	n. 地质学,地质概况
spin	v. 旋转,纺纱
expressive	adj. 表达的,意味深长的
row	n. 排,行v划(船)
secrete	v. 隐藏,隐匿
discourage	v. 使气馁,阻碍
tremendous	adj. 巨大的,惊人的
crab	n. 蟹
garden	n. (菜、花)园
astronomer	n. 天文学家
bare	adj. 赤裸的,无遮蔽的
Erie	n. 伊利(人)
inhibit	v. 阻止妨碍抑制
Yucatan	n. 尤卡坦半岛
alkali	n. 碱 adj. 碱性的
complexity	n. 复杂(性),复杂的事物
sedimentary	adj. 沉积的,沉淀性的
accelerate	v. 加速,促进
Spain	n. 西班牙(欧洲南部国家)
window	n. 窗,窗口
text	n. 正文,课文
sing	v. 唱,演唱
assist	v. 援助,帮助
representation	n. 表示法,表现,陈述
regulation	n. 规则
enclose	v. 放入封套,围绕
fluctuate	v. 变动,波动
furnace	n. 炉子,熔炉
reptile	n. 爬虫动物
popularity	n. 普及,流行
whom	pron. 谁
bake	v. 烘焙,烤
ash	n. 灰(烬),[植]岑树
institution	n. 公共机构,协会,制度
symbolic	adj. 象征的,符号的
religion	n. 宗教,信仰
conserve	v. 保存,保藏
pit	n. 深坑,陷阱v窖藏,使凹下
traffic	n. 交通,运输
Harvard	n. 哈佛大学(美国)
Himalaya	n. 喜马拉雅山
digest	v. 消化,融会贯通
application	n. 请求,申请,应用
gravity	n. 地心引力,重力
explorer	n. 探险者
educate	v. 教育,培养
sudden	adj. 突然的,意外的
precipitation	n. 仓促
sheep	n. 羊,绵羊
mercy	n. 仁慈,宽恕,怜悯
lewis	n. [机] 吊楔,起重爪
oceanic	adj. 海洋的
award	n. 奖,奖品 v. 授予,判给
comfortable	adj. 舒适的,充裕的
sail	v. 航行(于),启航
recall	v. 回忆,记起 n. 召回
publisher	n. 出版者,发行人
seat	n. 座位 v. 使坐下
usual	adj. 平常的,通常的
touch	v. 接触,达到
boom	n. 繁荣 v. 发隆隆声,兴隆
administration	n. 管理,经营
outflow	n. 流出(物)
durable	adj. 持久的,耐用的
undertake	v. 承担,采取
finance	n. 财政 v. 供给经费,筹措资金
seal	n. 封铅 vt封, 密封
assumption	n. 假定, 设想
Ohio	n. 俄亥俄州(美国州名)
guide	n. 领路人,指南 vt指导, 支配
exceed	v. 超越, 胜过
reform	vt&n. 改革, 革新
switch	n. 开关 vt转换, 转变
southwestern	adj. 西南的, 来自西南的
infantile	adj. 幼稚的，幼儿的
brother	n. 兄弟
crucial	adj. 至关紧要的
amnesia	n. 健忘症
toy	n. 玩具
silent	adj. 寂静的, 沉默的
nutritional	adj. 营养的,滋养的
taste	v. 品尝, 体验
contradict	v. 同矛盾, 同抵触
verbal	adj. 口头的
attach	v. 缚上, 配属,隶属于
supplement	n. 补充, 附录
delivery	n. 递送,交付,传输
span	n. 跨度v横越
comparable	adj. 可比较的, 比得上的
satisfy	v. 满足,使满意
panel	n. 面，板,专门小组
react	v. 起反应, 起作用
freshwater	n. 淡水
successive	adj. 连续的, 接连的
official	n. 官员 adj. 官方的,正式的
save	v. 解救, 保存
appreciate	v. 赏识, 感激
friend	n. 朋友, 赞助者, 助手
outline	n. 大纲 v. 描画轮廓,略述
crustal	adj. 地壳的
threat	n. 恐吓, 凶兆, 威胁
carbohydrate	n. 碳水化合物,醣类
periodical	adj. 周期的, 定期的 n期刊, 杂志
nine	num. 九,九个
strengthen	v. 加强, 巩固
quartz	n. 石英
sociologist	n. 社会学家
classic	adj. 最优秀的,标准的 n杰作
sum	n. 总数,总和 v. 共计,概括
delicate	adj. 精巧的, 精致的
leadership	n. 领导能力,领导阶层
king	n. 国王
colleague	n. 同事, 同僚
seafloor	n. 海底
bronze	n. 青铜
medium	n. 媒体,方法 adj. 中间的
dome	n. 圆屋顶
script	n. 手稿, 手迹
hotel	n. 旅馆, 客栈,
found	v. 建立, 创办
twice	adv. 两次, 两倍
instruction	n. 命令,指示,用法说明
thrive	v. 兴旺,繁荣
fiction	n. 虚构,小说
motor	n. 发动机
partially	adv. 部分地
Germany	n. 德国
beautiful	adj. 美丽的
vehicle	n. 交通工具, 车辆
marsh	n. 湿地,沼泽
freight	n. 货物 v. 运送
trust	v. 信任, 信赖
intrigue	v. 激起兴趣,耍阴谋 n. 阴谋，密谋
artwork	n. 艺术品,美术品
hatch	n. 孵化 vt孵出, 策划
shore	n. 岸, 海滨
utilize	v. 利用
classification	n. 分类, 分级
tube	n. 管子
kiln	n. 窑,炉
implication	n. 含意, 暗示
expert	n. 专家, 行家
awareness	n. 知道, 晓得
drag	v. 拖, 拖曳
indium	n. [化]铟
precious	adj. 宝贵的,珍爱的
velocity	n. 速度, 速率
burst	v. 爆裂, 炸破
academy	n. 学院,学会,专科学校
path	n. 小路, 路线
refine	v. 精炼, 精制
imprint	v. 留下烙印
intellectual	adj. 智力的, 有智力的
impression	n. 印象, 感想
Pennsylvania	n. 宾夕法尼亚州（美国州名）
iridium	n. [化]铱
pick	v. 挑选,采摘
cent	n. (货币单位)分, 分币
mobility	n. 活动性, 灵活性
inference	n. 推论
integrate	v. 使成整体, 结合
rush	n&v. 冲,匆忙,突袭
spray	n. 喷雾 vt喷射
strongly	adv. 强烈地；强有力地
lay	v. 放置,铺设
bite	n&v. 咬, 刺痛
harm	v. 伤害, 损害
footprint	n. 足迹
herself	pron. 她自己
sponsor	n. 发起人 v发起, 主办, 赞助
calorie	n. 卡路里
unpredictable	adj. 不可预知的
automobile	n. 汽车
collector	n. 收藏家, 征收者
cooperation	n. 合作, 协作
enzyme	n. [生化]酶
employee	n. 职工, 雇员
irrigate	v. 灌溉
dozen	n. 一打, 十二个
retrieve	v. 恢复,挽回,取回
printer	n. 印刷工,打印机
silt	n. 淤泥 v. (使)淤塞
roll	v. (使)滚动,卷
surveyor	n. 测量员, 检查员
worldwide	adj. 全世界的
acre	n. 英亩, 地产
nuclear	adj. 核子的, 原子能的
nutrition	n. 营养, 营养学
larva	n. 幼虫
exposition	n. 展览会, 说明
sharp	adj. 锐利的,明显的,急剧的
peasant	n. 农夫
plastic	n. 塑料(制品) adj. 塑胶的
genetic	adj. 遗传的, 起源的
page	n. 页,记录
accumulator	n. 蓄电池,积聚者
chief	n. 首领 adj. 主要的, 首要的
imitation	n. 模仿, 效法
beneficial	adj. 有利的, 有益的
lip	n. 嘴唇
fertilizer	n. 肥料
rainwater	n. 雨水
satire	n. 讽刺(文学)
epoch	n. 新纪元, 时代
impressive	adj. 给人深刻印象的, 感人的
brush	n. 刷子, 毛刷, 画笔 vt刷, 掸, 拂
Massachusetts	n. 马萨诸塞(美国州名)
realism	n. 现实主义
watch	v. 看,注视,照顾
foundation	n. 基础, 根本
evident	adj. 明显的, 显然的
marry	v. 娶, 嫁,和结婚
race	n. 种族 v赛跑
orient	v. 使适应,使朝向 n东方
barren	adj. 不生育的,贫瘠的 n. 荒地
prosperity	n. 繁荣
lava	n. 熔岩, 火山岩
pace	n. 步调 v踱步
empire	n. 帝国
contract	n. 合同 v缩小,订合同
deco	n. 装饰派艺术
descriptive	adj. 描述的, 叙述的
ruminant	n&a. 反刍动物(的), 沉思的
stoneware	n. 瓷器
mirror	n. 镜子 v. 反映,映出
barb	n. 鱼钩 v. 装倒钩于
forage	n. 草料
norm	n. 标准,规范
nitinol	n. [冶]镍钛诺(镍和钛的非磁性合金)
chick	n. 小鸡
condense	v. (使)浓缩, 精简
cope	v. 应付,处理
frost	n. 霜 v. 结霜
client	n. [计]顾客, 客户, 委托人
potentially	adv. 潜在地
fertile	adj. 肥沃的, 富饶的, 能繁殖的
attain	v. 达到, 获得
background	n. 背景,后台
facilitate	v. 促进, 帮助
flexible	adj. 易弯曲的,灵活的,柔韧的
precisely	adv. 正好
egalitarian	adj. 平等主义的
plover	n. 千鸟
shelve	v. 搁置
judge	n. 法官,裁判员 v断定,裁决
progressive	adj. 先进的,前进的 n. 进步分子
adjacent	adj. 邻近的,毗连的
unfortunately	adv. 不幸地, 遗憾地
participate	v. 参与, 参加
downward	adj. 向下的
warbler	n. 鸣鸟
specialization	n. 特殊化, 专门化
media	n. 媒体
confuse	v. 搞乱,使糊涂
twig	n. 嫩枝
workweek	n. 一星期工作时间
extensively	adv. 广泛地，彻底地
clement	adj. 仁慈的，温和的
nutritious	adj. 有营养的, 滋养的
throw	v. 扔,投,掷
herb	n. 药草, 香草
affair	n. 事务,事件
mold	n. 模子vt浇铸, 塑造
mammoth	n. 猛犸,长毛象 adj. 庞大的
tellurium	n. 碲
hopewell	n. 霍普韦尔
facility	n. 设备,便利，能力
percentage	n. 百分数, 百分率
butter	n. 黄油,牛油
ignore	v. 不理睬, 忽视
evaluate	v. 评价, 估计
occupation	n. 职业, 占有
chip	n. 碎片 v. 削成碎片
fauna	n. 动物群
cook	n. 厨师 v烹调, 煮
discharge	v&n. 释放,排出
indicator	n. 指示器
steamboat	n. 汽船
heighten	v. 提高, 升高
archaeopteryx	n. 始祖鸟(古代生物)
disclaimer	n. 放弃, 弃权
desirable	adj. 值得拥有的,可取的
carbonate	n. 碳酸盐
southeastern	adj. 东南方的
harmful	adj. 有害的, 伤害的
scarce	adj. 缺乏的,不足的,
profound	adj. 深刻的, 意义深远的
insulation	n. 绝缘
modest	adj. 谦虚的, 适度的
presentation	n. 介绍, 陈述
obviously	adv. 明显地
Missouri	n. 密苏里州(美国州名)
department	n. 部, 局
jet	n. 喷气式飞机
senate	n. 参议院
mobile	adj. 可移动的, 易变的
salty	adj. 咸的
pearl	n. 珍珠
rice	n. 稻, 米
westward	n. 西方a&ad西方的, 向西
slope	n. 斜坡 v(使)顺斜
being	n. 存在, 生命
forecast	v. 预见,预测
excellent	adj. 卓越的, 极好的
conceal	v. 隐藏, 隐瞒
seep	v. 渗出
naturalist	n. 自然主义者
shield	v. 防护,遮蔽
stomach	n. 胃
sloth	n. 懒惰
target	n. 目标, 对象
battle	n. 战役 vi作战, 战斗
interfere	v. 干涉,妨碍
perceptual	adj. 感性的,知觉的
plentiful	adj. 丰富的,充裕的
childhood	n. 孩童时期
proterozoic	n&a. 原生代(的)
falcon	n. 猎鹰
orchid	n. 兰花
cement	n. 水泥,接合剂 v接合,粘牢
shade	n. 荫,阴凉处vi渐变 ,遮蔽
semiarid	adj. 半干旱的
renaissance	n. 文艺复兴(时期)
maintenance	n. 维护, 保持
deliver	v. 递送, 陈述，交付
sibling	n. 兄弟姐妹
regardless	adj. 不管,不顾
click	v. 发出滴答声
board	n. 木板
strip	v. 剥, 剥去
stock	n. 库存，股票 v. 储备
kestrel	n. (一种)鹰
suppress	v. 镇压,抑制
bell	n. 铃, 钟
tire	n&v. 疲劳,厌倦
camel	n. 骆驼
spontaneous	adj. 自发的,自然产生的
lift	v. 举起,提高
earthquake	n. 地震, [喻]在震荡, 在变动
cognitive	adj. 认知的，认识能力的
maximum	n. 最大量, 最大限度
spiral	v. 盘旋
relevant	adj. 相关的, 切题的
elect	v. 选举, 选择
straight	adj. 直的,连续的
animation	n. 兴奋,活跃
elevation	n. 上升, 提高
debate	v. 争论, 辩论
sahara	n. 撒哈拉沙漠
lend	v. 借给, 贷(款)
wavelength	n. 波长
passenger	n. 乘客
highway	n. 公路
molt	vi&n. 脱毛,换毛
columbian	adj. 美国的, 美洲的,哥伦布的
equivalent	adj. 相等的,相当的n等价物
graduate	n. 毕业生
everywhere	adv. 到处, 无论何处
outward	adj. 外表(面)的 adv. 向外
succeed	v. 成功, 继承, 接着发生
aware	adj. 意识到,知道的
commodity	n. 日用品
experimental	adj. 实验(性)的，试验(性)的
hit	v. 打，击
crystalline	adj. 水晶(般)的,透明的
speculation	n. 思索, 做投机买卖
sit	v. 坐
thirty	num. 三十
prize	n. 奖(金，品)vt珍视，珍惜
profitable	adj. 有益的,有利可图的
revolutionary	adj. 革命的
luxury	n. 奢侈, 华贵
scandinavia	n. 斯堪的纳维亚（北欧地名）
wool	n. 羊毛,毛织品
proper	adj. 适当的,正确的
dairy	n. 牛奶场,乳品店
phase	n. 阶段,方面
substantial	adj. 可观的,牢固的，实质的
continually	adv. 不断地，频繁地
confine	v. 限制 n. 界限
calcite	n. 方解石
realm	n. 领域
orchestra	n. 管弦乐队
me	pron. 我
southward	adj. 向南 a向南的
intermediate	adj. 中间的 n媒介
proponent	n. 支持者，拥护者
tip	n. 末端,小费 v倾斜
partnership	n. 合伙(关系)
gender	n. 性别,(语法中的)性
republican	a&n. 共和政体的,共和党人(的)
strict	adj. 严格的, 严厉的
ichthyosaur	n. 鱼龙
India	n. 印度
niche	n. 壁龛,合适的职务(环境、位置等)
magazine	n. 杂志, 期刊
logical	adj. 符合逻辑的,合理的
cavity	n. 洞, 空穴
primate	n. 灵长类(动物)
tribal	adj. 部落的,种族的
storytelling	n. 说书, 讲故事
oven	n. 烤箱
district	n. 区域,行政区
wait	v&n. 等待
stationary	adj. 固定的,静止不动的
measurement	n. 测量法,度量,
pleasure	n. 愉快,乐趣
snowflake	n. 雪花
swallow	n&v. 吞下,咽下
insufficient	adj. 不足的
imagination	n. 想象(力)
telephone	n. 电话
pterosaur	n. 翼龙
fifteen	num. 十五
bay	n. 海湾
squeeze	n&v. 压榨, 挤
realist	n. 现实主义者
pack	v. 捆扎,打包 n. 包
populate	v. 构成人口, 居住于
gallery	n. 走廊,画廊
defend	v. 防护, 辩护
porous	adj. 多孔渗水的
dot	n. 点 vt打点于,点缀
disturb	v. 打扰,弄乱
harbor	n. 海港
tract	n. 传单,小册子,大片(土地或森林)
merely	adv. 仅仅, 只, 不过
protein	n. 蛋白质
inexpensive	adj. 廉价的,便宜的
equatorial	adj. (近)赤道的
tiredness	n. 疲劳,疲倦
hollow	n. 洞, 窟窿 v. 挖空,弄凹
slip	n&v. 滑倒,滑动
illuminate	v. 照明,阐释, 说明
influential	adj. 有影响的, 有势力的
spear	n. 矛, 枪
behave	v. 表现,行为, 举止
equip	v. 装备, 配备
fourth	num. 第四个
everyday	adj. 每天的，日常的
realistic	adj. 现实(主义)的
review	vt&n. 回顾,复习,评论
iodine	n. 碘, 碘酒
hypothalamus	n. [解剖]视丘下部
tablet	n. 药片
songbird	n. 鸣禽,鸣鸟
aside	adv. 在旁边,到旁边
illusion	n. 幻想
cliff	n. 悬崖, 绝壁
else	adj. 别的,其他的 ad另外
interplay	n. 相互影响
topi	n. 遮阳帽,[动]转角牛羚
stiff	adj. (僵)硬的；生硬的
cow	n. 母牛
terminal	n. 终点(站),终端
herd	n. 兽群 v. 使集中，把…赶在一起
ceremonial	n. 仪式 adj. 正式的
piston	n. 活塞
tolerate	v. 忍受,容忍
virtue	n. 美德, 贞操
icebox	n. 冷藏库
roost	v& n. 栖息鸟巢
tropic	n. 回归线,热带 adj. 热带的
nestle	v. 依偎,（舒适地）安顿
tactic	n. 策略, 战略
contaminate	v. 弄脏, 污染
Japanese	n&a. 日本人(的), 日语（的）
cap	n. 帽子,盖 vt覆盖,胜过
carver	n. 雕刻匠
accomplish	v. 完成,实现
properly	adv. 适当地；正确地
kohoutek	n. [天]科胡特克彗星
mere	adj. 仅仅的,起码的
immune	adj. 免疫的
gill	n. 鳃,及耳[液量单位]
disagreement	n. 不一致；争论
entrepreneur	n. 企业家, 主办人
ingredient	n. 成分, 因素
prominent	adj. 显著的,杰出的, 突出的
exploration	n. 探险, 探测
fashion	n. 方式,流行款式 v. 形成,塑造
alarm	n. 警报 vt恐吓, 警告
husband	n. 丈夫
proceed	v. 进行,继续下去
feat	n. 功绩，伟业
angle	n. [数]角,角落
coordinate	v. 调节，协调
substitute	v. 代替,替换
meaningful	adj. 意味深长的
agrarian	adj. 有关土地的, 耕地的
message	n. 消息,信息
margin	n. 边缘,余地,页边空白
airplane	n. 飞机
utility	n. 效用,公用
warn	v. 警告，告诫
motive	n. 动机，目的
letter	n. 信，函件，字母
contrary	adj. 相反的 n. 反面, 相反
canoes	n. 独木舟
adequate	adj. 足够的,适当的
starling	n. 欧掠鸟
correspond	v. 符合,相当
fifteenth	num. 第十五
invade	v. 侵略
sensitive	adj. 敏感的,灵敏的
humidity	n. 湿气,潮湿
additive	adj. 附加的 n. 添加剂
hope	v&n. 希望,信心
peripheral	adj. 外围的,不重要的
Egypt	n. 埃及
steadily	adv. 稳定地,坚定地
odor	n. 气味
deprive	v. 剥夺,使丧失
shoot	v. 发射, 开枪
conquer	v. 征服, 战胜
loyalty	n. 忠诚
unexpected	adj. 想不到的,意外的
eagle	n. 鹰
exchanger	n. 交换器, 换热器
strictly	adv. 严格地
psychodynamic	adj. 精神动力的
lighthouse	n. 灯塔
chart	n. 图表 vt制图
palm	n. 手掌,掌状物
innovative	adj. 创新的, 革新的
impose	v. 强加,征收(税款)
underlie	v. 位于之下, 成为的基础
enemy	n. 敌人
expectation	n. 期待,预料
farmland	n. 农田
disperse	v. 分散, 疏散
relic	n. 遗物, 废墟
pile	n. 一堆，一叠 v堆积
smell	n. 气味v嗅, 闻到
management	n. 经营,管理,处理
gallium	n. 镓
lion	n. 狮子
suspend	v. 暂停,悬，挂
camera	n. 照相机
ion	n. 离子
ink	n. 墨水
eggshell	n. 蛋壳, 易碎的东西
invader	n. 侵略者
interview	n. 接见，会见；面谈
pigment	n. 天然色素,颜料
hire	v. ／n租用，雇用
finger	n. 手指 v用手指拨弄
silversmith	n. 银器匠
poet	n. 诗人
biome	n. (生态)生物群系
darkness	n. 黑暗,漆黑
mount	v. 登上 n山,峰
sodium	n. [化] 钠
ready	adj. 有准备的
Hispanic	adj. 西班牙的
instinct	n. 本能
reformer	n. 改革家, 改革运动者
minimize	v. 将减到最少
Mississippian	adj. 密西西比河的 n密西西比州人
browse	v&n. 浏览, 放牧
southwest	n. 西南方(的)
convex	adj. 凸出的
magma	n. 岩浆, 糊剂
intention	n. 意图, 目的
wash	n&v. 洗,洗涤
trader	n. 商人
injury	n. 伤害,侮辱
sight	n. 视力, 视域
meeting	n. 会议
fault	n. 过错 v. 挑剔,弄错
address	n. 地址,演说 vt写地址,演说
saturate	v. 使湿透,饱和
terrace	n. 平台,阳台 v. 使成梯形地
secret	n&a. 秘密(的)
swamp	n. 沼泽,湿地
inclusion	n. 包含
navigation	n. 航海,航行
sheer	a&ad. 十足的，陡峭的
cadmium	n. [化]镉
banker	n. 银行家
designate	v. 指明,指定
abstract	n. 摘要,抽象
assessment	n. 估计；评估
dominance	n. 支配,优势
anger	n. 怒 v. 恼火
drum	n. 鼓
horticulture	n. 园艺
compress	v. 压缩,摘要叙述
constitution	n. 宪法,章程
cone	n. 圆锥体；
fade	v. 褪去，褪色
lifestyle	n. 生活方式
patent	n&a. 专利(权)(的)
invest	v. 投资，投入
lord	n. 封建领主,君主
debt	n. 债务
dispersal	n. 散布,传播,分散
residential	adj. 住宅的, 居住的
Indiana	n. 印地安那州
mild	adj. 温和的, 轻微的,适度的
tectonic	adj. 构造的, 建筑的
firn	n. 粒雪, 积雪
adulthood	n. 成人期
consciously	adv. 有意识地, 自觉地
advocate	v. 提倡,鼓吹
sixteen	num. 十六
supernatural	a&n. 超自然(的), 神奇(的)
nomadism	n. 游牧,流浪
catastrophe	n. 大灾难
selenium	n. [化]硒
poem	n. 诗
ballet	n. 芭蕾(舞)
unhappy	adj. 不幸的, 不快乐的
Bantu	n. 班图人, 班图语
ratio	n. 比, 比率
noise	n. 喧闹声, 噪声
inadequate	adj. 不充分的,不适当的
strategy	n. 策略
geothermal	adj. 地热的
reclaim	v. 要回,开垦,回收
restoration	n. 恢复, 归还
eddy	n. 旋转,漩涡
wherever	conj. 无论在哪里 adv. 无论什么地方
legislation	n. 立法,法律的制定(或通过)
welfare	n. 福利
telecommuting	n. 远程联机,  远程办公
crowd	n. 人群 v拥挤
presumably	adv. 大概,可能,据推测
metabolism	n. 新陈代谢
transplant	v. 移栽,移植 n(器官)移植
repress	v. 抑制，镇压
subway	n. 地铁, 地下通道
geographical	adj. 地理(学)的
pride	n. 自豪
refrigerator	n. 电冰箱
fir	n. [植]冷杉
reserve	v. 储备,保留
court	n. 法庭，庭院
superorganism	n. [生]超个体(指群居昆虫等的群体)
calculation	n. 计算,考虑
rational	adj. 理性的,合理的
criterion	n. 标准
linen	n. 亚麻布（制品）
Harlem	n. (纽约的）黑人住宅区
orleans	n. 奥尔良[法国]
orientation	n. 方向，目标
foster	v. 收养；培养，促进
inevitable	adj. 不可避免的, 必然的
controversial	adj. 有争议的,引起争论的
dream	v. 做梦 n梦,梦想
geographic	adj. 地理(学)的
projector	n. 放映机
peepshow	n. 西洋镜
anemone	n. [植]银莲花, [动]海葵
handedness	n. 用右手或左手的习惯
harmony	n. 协调,融洽
nut	n. 坚果
billfish	n. 长嘴鱼,尖嘴鱼
identical	adj. 同一的,相同的
mutual	adj. 相互的,共有的
regularity	n. 规律性,规则性
realization	n. 实现
plow	v. 耕, 犁
minimum	adj. 最小的 n. 最小值,
truly	adv. 真正地；忠实地
figurine	n. 小雕像
polygon	n. [数]多角形,多边形
hypothesize	v. 假设,猜测
depletion	n. 损耗
request	v. 请求, 要求
conservation	n. 保存,保持
ammonia	n. [化]氨, 氨水
beringia	n. 白令海和楚可奇海海域
violent	adj. 猛烈的,暴力的
arrival	n. 到来, 到达
sedimentation	n. 沉淀,沉降
rectangular	adj. 长方形的，矩形的
agency	n. 代理处, 中介
questionnaire	n. 调查表, 问卷
temple	n. 庙, 寺
remote	adj. 遥远的, 偏僻的
asphalt	n. 沥青
evergreen	n. 常绿树 adj. 常绿的
lizard	n. [动]蜥蜴
ornament	n&vt. 装饰(品),美化
parental	adj. 父母的
illumination	n. 阐明, 启发
healthy	adj. 健康的
simplify	v. 单一化,简单化
equator	n. 赤道
advertiser	n. 登广告者,广告客户
persian	n. 波斯人[语]
neonate	n. 初生婴儿
genius	n. 天才, 天赋
caterpillar	n. 毛虫
drainage	n. 排水系统,下水道
criticism	n. 批评, 批判
impress	v. 印,留下印象
smile	vi&n. 微笑
silk	n. 丝绸
friction	n. 摩擦,摩擦力
excess	n&a. 过量(的)
zinc	n. 锌
vulnerable	adj. 易受伤的，脆弱的
proposal	n. 提议,建议
effectively	adv. 有效地
flee	v. 逃避,逃跑,消失
wartime	n. 战时
Euphrates	n. 幼发拉底河
gypsum	n. 石膏,
objective	n. 目标,目的a客观的
inspiration	n. 灵感
shrine	n. 圣地, 神龛
meltwater	n. 冰雪融化成的水
sector	n. 部分, 部门
bulb	n. 鳞茎,球形物
trillion	num. 万亿
isolation	n. 隔离，孤立
frontality	n. 正面描绘
Tasmania	n. 塔斯马尼亚岛, 塔斯马尼亚州(澳大利亚州名)
Latin	n&a. 拉丁文,拉丁语(的)
abroad	adv. 到国外,在国外
burgess	n. (英国)市民，镇民
split	v. 分裂；撕裂 n裂口
alternate	v. 交替, 轮流
guarantee	n. 保证(书)vt保证, 担保
manganese	n. n〈化〉锰
ultimately	adv. 最后，最终
strange	adj. 陌生的,奇怪的
journey	n. 旅行
igneous	adj. (指岩石)火成的, 火的
Zealand	n. 西兰岛(丹麦最大的岛)
gaseous	adj. 气体的,气态的
buck	n. (一)美元；雄鹿(兔)
enrich	v. 充实,使富裕
metropolis	n. 首都,大城市
botanical	adj. 植物(学)的
wife	n. 妻子
urge	v. 鼓励；强烈要求 n. 强烈的欲望
lomas	n. 洛马斯(阿根廷东部的一城镇)
deform	v. (使)变形
safe	adj. 安全的 n. 保险箱
confederacy	n. 联盟,邦联
spite	n. (in ～ of)不顾,不管
fertilize	v. 使肥沃；使多产
withstand	v. 抵挡, 经受住
immense	adj. 极广大的, 无边的,
singer	n. 歌手
raft	n. 木排(筏),救生圈 v用筏子渡河
offshore	a&ad. 离岸的,近海的
hierarchy	n. 等级制度
commission	n. 委员会 vt委任,委托
intend	v. 想要, 打算
democratic	adj. 民主的,民主主义的
interlock	v. 互锁
truth	n. 事实,真理
attachment	n. 附件,附加装置
closet	n. 壁橱,储藏室
insulate	v. 使绝缘, 隔离
mission	n. 使命,任务
odd	adj. 奇特的,奇数的 n. [ pl]机会
Illinois	n. 伊利诺斯州(美国州名)
sieve	n. n 筛,滤网 v. 筛, 过滤
prosperous	adj. 繁荣的，兴旺的
alpine	adj. 高山的, 阿尔卑斯山的
monumental	adj. 纪念碑的,不朽的
twelve	num. 十二
payment	n. 付款, 报酬, 偿还
shed	v. 脱落,流出 n棚屋
spectator	n. 观众(指比赛或表演)
partly	adv. 在一定程度上，部分地
thrust	v. 推，插；刺 n. 要旨
delay	v. /n耽搁, 延迟
don	n. 先生,阁下
novelty	n. 新颖, 新奇事物
bend	v. 弯曲,屈服
duration	n. 持续时间
everyone	pron. 每个人
segment	n. 段, 节
compaction	n. 压紧,紧束之状态
carpenter	n. 木匠
assistant	n. 助手, 助教
tape	n. 带子, 磁带
disaster	n. 灾难
astonish	v. 使惊讶
adaptive	adj. 适合的, 适应的
liberal	n. 自由主义者 adj. 慷慨的
perfectly	adv. 理想地；完美地
manage	v. 管理，经营，处理
hair	n. 头发, 毛发
admission	n. 允许进入, 承认, 许可
manufacturer	n. 制造业者, 厂商
census	n. 人口普查
Seattle	n. 西雅图
altogether	adj. 完全地, 总而言之
spectacular	adj. 引人入胜的, 壮观的
mathematician	n. 数学家
beam	n. 梁, 桁条
kerosene	n. 煤油
buffalo	n. 美洲野牛
cosmic	adj. 宇宙的
underwater	adj. 在水中生长的
superiority	n. 优越, 高傲
horizontal	adj. 地平线的, 水平的
eleven	n. 十一
breath	n. 呼吸, 气息
compensate	v. 偿还, 补偿
acceptance	n. 接受,接纳
naturalistic	adj. 自然的, 自然主义的
cenozoic	n. 新生代,新生代之岩层 a新生界的
plantation	n. 种植园,人工林
propulsion	n. 推进(力)
brilliant	adj. 光辉的，卓越的，杰出的
chamber	n. 室, 会议厅
parallel	n. 相似处；平行线 adj. 平行的,类似的
drastically	adv. 大幅度地, 彻底地
tomb	n. 坟墓
obstacle	n. 障碍, 妨害物
Italy	n. 意大利(欧洲南部国家)
subtle	adj. 微妙的；诡秘的,精细的
trolley	n. 电车
totally	adv. 完全地, 整全地
fulfill	v. 履行,实现
distort	v. 歪曲, 扭曲,变形
narrative	n. 故事,叙述 adj. 叙述的
reasonable	adj. 合理的,通情达理的
consideration	n. 考虑, 体贴
wilderness	n. 荒野
fur	n. 毛皮
woodcut	n. 木刻
extraordinary	adj. 非凡的, 特别的
delta	n. 三角州
putrefy	v. (使)化脓, (使)腐烂
postulate	v. 要求, 假定
trip	n. 旅行，旅游
resistant	adj. 抵抗的, 有抵抗力的
peculiar	adj. 奇怪的, 特殊的, 独特的
preparation	n. 准备,预备
gray	adj. 灰色的, 暗淡的
regiment	n. (军队的)团；大量 vt严格地管制
bury	v. 埋葬, 掩埋
procedure	n. 程序, 手续
thank	v. 感谢
conquest	n. 征服 战利品
workshop	n. 车间, 工场
replacement	n. 代替，更换
wonder	n&v. 惊奇, 想知道,
slide	v&n. 滑动,下滑
deplete	v. 耗尽, 使衰竭
toddler	n. 初学走路的孩子
opponent	adj. 对立的 n. 对手
Amsterdam	n. 阿姆斯特丹(荷兰首都)
carrier	n. 运送者
soda	n. 苏打, 碳酸水
remind	v. 提醒, 使想起
reproductive	adj. 生殖的,再生的,复制的
troop	n. [ pl]军队；一群
abigail	n. (贵妇人的贴身)使女
educational	adj. 教育(上)的
zigzag	n. Z字形, 锯齿形
argon	n. [化]氩
genetically	adv. 遗传(基因)方面
shortage	n. 不足, 缺乏
himself	pron. 他自己
occasion	n. 场合,时机
symptom	n. 症状, 征兆
render	v. 使得,提供
robin	n. 知更鸟
monitor	v. 监听(视；测) n检测器
psychologist	n. 心理学者
tourist	n. 旅行者
Marseille	n. 马赛(法国港口城市)
diver	n. 潜水者
vigorous	adj. 精力充沛的,有力的
elliptical	adj. 椭圆的,省略的
hop	n&v. 跳跃, 单脚跳
worksheet	n. 工作记录表
circulation	n. 循环,流通,发行额
broadcast	n&v. 广播, 播音
sphere	n. 球, 范围
seabed	n. 海底, 海床
multiply	v. 繁殖, 乘
angiosperm	n. 被子植物
inclination	n. 倾斜, 弯曲
bud	n. 芽 vi发芽
circadian	adj. 昼夜节律的,生理节奏的
seaway	n. 海上航道
congress	n. (美国等国的)国会,议会
oversea	adj. 外国的, 海外的
moth	n. 蛾, 蛀虫
honor	n&v. 尊敬
frighten	v. 使惊吓 ,惊恐
zoologist	n. 动物学家
library	n. 图书馆
decomposition	n. 分解, 腐烂
catalog	n. 目录 v. 编目录
door	n. 门
observer	n. 观测者, 观察员
flock	n. 羊群 v. 聚集，成群
Caledonian	n&a. 古苏格兰人(的), 苏格兰人（的）
volunteer	n. 志愿者
wetland	n. 潮湿的土壤, 沼泽地
harsh	adj. 粗糙的,严厉的
coma	n. 昏迷
fabric	n. 结构, 织物, 构造
cooler	n. 冷却器
participant	n. 参与者
advent	n. 出现，到来
soften	v. (使)变柔软,(使)变柔和
synthetic	adj. 合成的, 综合的
exposure	n. 暴露, 揭露
chondrite	n. 球粒状陨石
digestive	adj. 消化的
northeast	n&a. 东北(的)
constituent	n. 选民,成分 a组成的,构成的
sketch	n. 略图 v素描；概述
embryo	n. 胚胎
magnify	v. 放大, 扩大
allende	n. 阿连德(在墨西哥, 西经 100o01' 北纬 25o20')
metropolitan	adj. 大城市的，大都会的
notably	adv. 显著地；著名地
loan	n. 贷款 v. 借出，贷给
nonetheless	adv. 虽然如此,但是
hinterland	n. 内地, 穷乡僻壤
mechanize	v. 机械化
finch	n. 雀类
morning	n. 早晨, 上午
tin	n. 锡
moss	n. 苔, 藓
Oregon	n. 俄勒冈州(美国州名)
couple	n. 夫妇 v结合
willing	adj. 乐意的, 自愿的
steppe	n. 特指西伯利亚一带没有树木的大草原
occasional	adj. 偶然的,临时的
patch	n. 补丁 vt补,修补
devote	v. 投入于, 献身
noticeable	adj. 显而易见的
mad	adj. 疯狂的,狂热的
spirit	n. 精神, 灵魂
lunar	adj. 月亮的
presidency	n. 任期
viewer	n. 电视观众,阅读器
horizon	n. 地平(线
academic	adj. 学院的, 理论的
fin	n. 鳍, 鱼翅
stamp	n. 邮票,图章 v. 跺脚,盖章
subtractive	adj. 减去的,负的
motivate	v. 激发
undoubtedly	adv. 无庸置疑地,的确地
granite	n. 花岗岩
quilt	n. 被子 v. 缝被,缝制
suppose	v. 推想, 假设
campaign	n. 运动,战役 vi发起运动
mandan	n. 曼丹人, 曼丹语
invisible	adj. 看不见的, 无形的
neutron	n. 中子
dwell	v. 居住
ward	n. 病房,受监护人
moderate	adj. 中等的, 适度的
territorial	adj. 领土的
predominate	v. 占优势, 支配
inform	v. 通知, 告诉
chiefly	adv. 首要,主要地
champion	n. 拥护者vt 拥护, 支持
craftspeople	n. 工匠; 手艺人
likewise	adv. 同样地, 此外
intelligence	n. 智力, 聪明
visitor	n. 访问者, 来宾
unskilled	adj. 不熟练的,拙劣的
progressively	adv. 日益增多地
thickness	n. 厚度, 浓度, 稠密
graphic	adj. 绘画似的, 图解的
termite	n. 白蚁
analogy	n. 类似, 类推
sure	adj. 对有把握 ad的确, 当然
wrap	v. 包，裹 n披肩，围巾
inability	n. 无能, 无力
jump	n&v. 跳跃
consciousness	n. 意识；觉悟,知觉
reindeer	n. 驯鹿
oxide	n. 氧化物
kingdom	n. 王国
compression	n. 浓缩, 压缩
slush	n. 烂泥 v溅湿
hurt	v. 伤害
seldom	adv. 很少, 不常
repression	n. 镇压, 抑制
recovery	n. 恢复, 痊愈
father	n. 父亲
voyager	n. 航行者, 航海者
horn	n. 触角 v. 强行介入
phonograph	n. 留声机, 电唱机
accustom	v. 使习惯于
welcome	vt& n. 欢迎 a受欢迎的
Eurasia	n. 欧亚大陆
extraction	n. 抽出,拔出
literally	adv. 逐字地,正确地
Italian	n&a. 意大利人(的), 意大利语（的）
railway	n. 铁路
cobalt	n. [化]钴
wish	n. 愿望v希望, 想要
wale	n. 条痕
accident	n. 意外事件, 事故
tongue	n. 舌头
concur	v. 同时发生
uncommon	adj. 不凡的, 难得的
simplification	n. 简化
chemically	adv. 用化学, 以化学方法
rotation	n. 旋转
peculiarity	n. 特性, 怪癖
uncertain	adj. 不确定的,不稳定的,
fluke	n. 侥幸，偶然的机会
basically	adv. 基本上, 主要地
circulate	v. (使)循环,传播
intricate	adj. 复杂的,难懂的
coarse	adj. 粗糙的,粗俗的
feedback	n. 反馈, 反应
cure	n&v. 治愈, 治疗
Norway	n. 挪威(北欧国家)
encouragement	n. 鼓励, 奖励
chew	v. 咀爵
bombard	v. 炮轰；轰击
praise	v&n. 赞扬,称赞
editor	n. 编辑,编者
venture	n&v. 冒险
soluble	adj. 可溶的, 可溶解的
Oceania	n. 大洋洲
temporary	adj. 暂时的, 临时的,
election	n. 选举
backbone	n. 脊梁骨；支柱
medical	adj. 医学的，医疗的
orderly	adj. 整齐的，有秩序的
chemist	n. 化学家, 药剂师
trample	v. 践踏, 轻视
mountainous	adj. 多山的, 巨大的
removal	n. 除去，移动
potassium	n. 钾
cascade	n. 小瀑布
reconstruction	n. 重建, 改造
restless	adj. 得不到休息的, 不安宁的
accordingly	adv. 因此, 相应地, 于是
silicate	n. 硅酸盐
locomotive	n. 机车, 火车头
predominant	adj. 主要的,占优势的
boil	n. 沸点 v煮沸, 激动
saturn	n. 土星
groove	n. 沟，槽
assert	v. 断言, 声称
journeyman	n. 熟练工人
chondrule	n. 陨石球粒
accessible	adj. 可得到的,易接近的
dimension	n. 尺寸, 尺度
bacterial	adj. 细菌的
medicine	n. 药
homo	n. 人, 同性恋者
nose	n. 鼻
incubation	n. 孵化, 熟虑
northeastern	adj. 东北方的, 在东北的
waterway	n. 水路, 排水沟
excavation	n. 挖掘, 发掘
fraction	n. 小部分, 片断
mutualism	n. 互助论,互利共生
weaken	v. 削弱, (使)变弱
wolf	n. 狼
bore	v. 使厌烦 n令人讨厌的人(或事)
probe	v. 探查, 查明
smoke	v. 抽烟, 吸烟
capillary	n&a. 毛细管；毛状的
behavioral	adj. 行为的
pleasant	adj. 令人愉快的,舒适的
thread	n. 线(索),思路 vt穿(过)，通过
subsequently	adj. 其次，接着
intact	adj. 完好无缺的, 未经触碰的
blacksmith	n. 锻工, 铁匠
repair	n. 修理 vt修理(补)
electronic	adj. 电子的
specify	v. 指定, 详细说明
besides	prep. 除之外 adv. 此外, 也
platform	n. 站台, 讲台
surrounding	n. 围绕物,环境 a周围的
tobacco	n. 烟草(制品)
rival	v. 竞争,对抗
agreement	n. 同意, 一致
custom	n. 习惯, 风俗,
costly	adj. 昂贵的，代价高的
exert	v. 尽(力),发挥
director	n. 主管,导演
gift	n. 赠品, 天赋
repeatedly	adv. 重复地, 再三地
tentacle	n. (动物)触角
fertility	n. 肥沃, 多产
simplicity	n. 简单, 朴素
annually	adv. 每年；按年计算
enthusiasm	n. 热情, 热衷
rear	n& a. 后部(面，方)(的) vt养，种
stagecoach	n. 公共马车
attraction	n. 吸引(力)；具有吸引力的事物(或人)
investigate	v. 调查, 研究
locally	adv. 在本地, 地方性地, 局部地
excessive	adj. 过多的,过分的
adjustment	n. 调整, 调节
figurative	adj. 比喻的，借喻的
inscription	n. 题字, 碑铭
appalachian	adj. 阿帕拉契山脉的
declaration	n. 宣布, 声明
markedly	adv. 显著地,明显地
attend	v. 出席, 参加,照料
climb	v. 攀登, 爬
effectiveness	n. 效力
grant	v. 授予,同意，准予
optical	adj. 视觉的, 光学的
overcast	v. 遮盖,变暗 n. 覆盖, 阴天
noisy	adj. 吵杂的, 聒噪的
muscular	adj. 肌肉发达的，强壮的
remarkably	adv. 非凡地；显著地
team	n. 队, 组
surpass	v. 超越, 胜过
institute	n. 学院 vt建立，设立
versus	prep. 对抗, 与相对
cheep	n. 吱吱的叫声 v吱吱地叫
predecessor	n. 前辈, 前任
flora	n. [罗神]花神
pollinator	n. 授花粉器
descendant	n. 子孙, 后裔
somehow	adv. 以某种方式,不知怎么地
hall	n. 会堂, 大厅
efficiently	adv. 有效地；能胜任地
tightly	adv. 紧紧地, 坚固地
medieval	adj. 中世纪的
jewelry	n. 珠宝
differently	adv. 不同地，有差别地
church	n. 教堂
putt	v. 短打,把球轻轻打进洞
notion	n. 概念,观念,想法
reshape	v. 改造, 再成形
pond	n. 池塘
metabolic	adj. 新陈代谢的
methane	n. 甲烷,沼气
tar	n. 焦油, 柏油
fundamentally	adv. 从根本上, 基本地
unprecedented	adj. 空前的, 前所未有的
conservative	adj. 保守的,守旧的
identity	n. 一致, 身份, 特征
expenditure	n. 支出, 花费
cohesive	adj. 粘着的
practically	adv. 实际上,几乎，简直
crew	n. 全体人员
circular	adj. 圆形的, 循环的
forerunner	n. 先驱(者)
alertness	n. 警戒, 机敏
invasion	n. 入侵
recurrence	n. 复发, 重现
hawk	n. 鹰
predatory	adj. 掠夺的,捕食生物的
complement	n. 补足物
humid	adj. 充满潮湿的, 湿润的
limb	n. 肢, 翼, 分支
user	n. 使用者
moraine	n. 冰碛
sandy	adj. 沙的, 沙质
jurassic	adj. 侏罗纪的
literacy	n. 有文化,有教养
prosper	v. 兴旺，繁荣
traditionally	adv. 传统上, 照惯例
plot	n. 小块土地,(小说的)情节vt密谋
meadow	n. 草地, 牧场
intelligent	adj. 聪明的, 智能的
comment	n. 评论，意见 vt评论
analogous	adj. 类似的
cavendish	n. (一种压成饼状的)板烟, 烟草饼
actress	n. 女演员
examination	n. 考试, 检查, 细查
council	n. 委员会，理事会
exogenous	adj. 外生的,外界产生的
informative	adj. 提供消息的, 情报的
ooze	n. 软泥 v渗出
educator	n. 教育家
radically	adv. 根本地, 完全地
republic	n. 共和国, 共和政体
dwarf	n. 矮子, 侏儒
choreographer	n. 舞蹈指导
marriage	n. 结婚, 婚姻
severely	adv. 严格地, 激烈地
propagate	v. 繁(增)殖；传播
confusion	n. 混乱, 混淆
celebrate	v. 庆祝, 祝贺
environmentalist	n. 环境保护论者, 环境论者, 环境论信奉者
outstanding	adj. 优秀的, 突出的,
endogenous	adj. 内生的, 内成的
horseshoe	n. 马蹄铁
probability	n. 可能性
boy	n. 男孩
specifically	adv. 特别地；明确地，具体地
vote	n&v. 投票
susceptible	adj. 易受外界影响的,易受感染的
envision	v. 想象；预想
upside	n. 上边,上部
adept	adj. 熟练的, 老练的 n老手, 擅长者
notation	n. 符号
ease	n. 安逸
capsize	v. (特指船)倾覆
elicit	v. 得出, 引出, 抽出, 引起
financier	n. 财政家, 金融家
obscure	adj. 暗的 vt使暗,使不明显
turbulent	adj. 狂暴的,动荡的
simultaneously	adv. 同时地
rodent	n. 啮齿类动物
prose	n. 散文
seafarer	n. 船员, 航海家
impart	v. 传授, 赋予, 告知
uneven	adj. 不平坦的,不均匀的
repudiate	v. 批判
faunal	adj. 动物区系的
nighttime	n. 夜间
hardly	adv. 几乎不,刚刚
pry	v. 探查
exclusive	adj. 排外的,独占的,唯一的
enterprise	n. 企业, 事业
discard	v. 丢弃, 抛弃
simulation	n. 仿真, 假装
resolve	v. 解决, 决定
mat	n. 席子，垫子
quick	a&ad. 快的, 迅速的
hero	n. 英雄
manipulate	v. 操纵,影响
solo	n. 独奏曲 a单独的
designer	n. 设计者
karst	n. 石灰岩地区常见的地形
interstellar	adj. 星际的
scratch	v& n. 抓，搔,划(痕)
recycle	v. 使再循环, 反复应用 n再循环, 再生, 重复利用
uncover	v. 揭露，揭示
gibraltar	n. 直布罗陀(海峡)
refill	v. 再装满,再充填
fame	n. 名声, 名望
caravan	n. 旅行队,商队, 大篷车
microorganism	n. 微生物
probable	adj. 很可能的, 大概的
compromise	v&n. 妥协, 让步
inequality	n. 不平等, 不平均
physicist	n. 物理学者, 唯物论者
intensive	adj. 强烈的, 精深的
forget	v. 忘记, 忽略
postal	adj. 邮政的,邮局的
queen	n. 王后, 女王
sailor	n. 海员, 水手
intervention	n. 干涉
immobile	adj. 不动的, 静止的
entity	n. 实体
calendar	n. 日历, 历法
stabilize	v. 稳定
tune	n. 曲调vt调音, 调整
predominantly	adv. 主要地, 占优势地
disgust	n. 厌恶vi令人厌恶，作呕
deficient	adj. 缺乏的, 不足的
assistance	n. 协助, 援助, 补助,
persistent	adj. 持久稳固的
prestige	n. 声望, 威望
mound	n. 土墩，沙土堆
fashionable	adj. 流行的, 时髦的
sect	n. 宗派, 教派
exclude	v. 把排除在外, 排斥
vaudeville	n. 歌舞杂耍
scent	n. 气味
uncertainty	n. 无常, 不确定
carnivore	n. 食肉动物
civilian	n. 平民
hunger	n. 饥饿, 欲望
publication	n. 出版(物), 发行
prolong	v. 延长, 拖延
plaster	n. 石膏 vt敷以膏药
sadness	n. 悲哀, 悲伤
theorize	v. 建立理论, 理论化
tundra	n. 苔原, 冻土地带
concert	n. 音乐会
localize	v. 集中,局部化
dependable	adj. 可靠的, 可信赖的
anomaly	n. 不规则, 异常的人或物
displace	v. 转移, 取代
gravitational	adj. 重力的, 引力作用的
pronounce	v. 发音, 宣告
abundantly	adv. 大量地, 丰富地
liberate	v. 解放, 释放
intensify	v. 加强,强化
accord	n&v. 一致, 协定
pollute	v. 弄脏, 污染
cuneiform	a&n. 楔形的,楔形文字(的)
gamma	n. 100万分之1克, 微克
icy	adj. 冰冷的, 冷淡的
nebula	n. 星云
security	n. 安全
supervise	v. 监督, 管理
parasitic	adj. 寄生的, 由寄生虫引起的
documentation	n. 文件
lithosphere	n. [地]岩石圈
richness	n. 富饶；富裕
sulfate	n. 硫酸盐
unity	n. 团结, 联合
wildlife	n. 野生动植物
alike	adj. 相同的, 相似的
sport	n. 运动,运动会
steamship	n. 汽船, 轮船
lithospheric	adj. 岩石圈的; 陆界的
hammer	n. 槌,锤子 v锤击
disturbance	n. 骚动, 动乱
voter	n. 投票者
anywhere	adv. 无论何处
April	n. 四月
meager	n. 兆
incomplete	adj. 不完全的, 不完整的
lecture	n&v. 演讲
tolerance	n. 宽容，容忍
hostile	adj. 敌对的
triangle	n. 三角形,三角关系
unchanging	adj. 不变的
cargo	n. 船货,货物
reconstruct	v. 重建, 改造
conventionally	adv. 照惯例
rainy	adj. 下雨的，多雨的
trial	n. 试验, 考验
wound	n. 创伤, 伤口
forbid	v. 禁止, 不许
judgment	n. 判断
nickel	n. 镍, 镍币
Georgia	n. (美)乔治亚州
ourselves	pron. 我们自己
rid	v. 使摆脱, 使去掉
integral	adj. 完整的, 整体的
pasture	n. 牧草地，牧场 vt放牧
overwhelm	v. 打击, 压倒, 打败
prolific	adj. 多产的；多子嗣的
moist	adj. 潮湿的，湿润的
coral	n. 珊瑚(虫)
cite	v. 引用, 引证
barrel	n. 桶
reef	n. 礁,暗礁
liberty	n. 自由, 特权
millimeter	n. 毫米
molecular	adj. 分子的
exterior	adj. 外部的 n外部
lifetime	n. 一生, 终生
antiquity	n. 古代
adobe	n. 泥砖，土坯
absorption	n. 吸收
sensitivity	n. 敏感, 灵敏(度)
studio	n. 画室,工作室
inevitably	adv. 不可避免地；必然地
fifty	num. 五十
swing	v. 摇摆, 摆动
utilitarian	adj. 功利的 n功利主义者
alive	adj. 活着的, 活泼的
thoroughly	adv. 十分地, 彻底地
hardy	adj. 能吃苦耐劳的，坚强的
stunt	n. 特技；噱头 v阻碍正常成长
accomplishment	n. 成就, 完成
routine	n. 例行公事, 常规
nourish	v. 滋养, 使健壮,
busy	adj. 忙碌的
ultraviolet	adj. 紫外线的 n紫外线辐射
pyramid	n. 金字塔(形结构)；锥状物
cannonball	n. 炮弹
transitional	adj. 变迁的, 过渡期的
amplification	n. 扩大
subsurface	adj. 地下的, 表面下的n地表下岩石
philosopher	n. 哲学家, 哲人
semiskilled	adj. 半熟练的
relax	v. 放松,休息
mackerel	n. 鲭
witness	n. 目击者；证据(言) vt目击,作证
midwest	n. 中西部
scrub	n. 灌木丛
textbook	n. 教科书, 课本
sharply	adv. 锋利地；剧烈地
sunrise	n. 日出
mutoscope	n. (早期的)电影放映机
summarize	v. 概述, 总结
stalk	n. 茎，梗 v跟踪,高视阔步地走
numerical	adj. 数字的, 用数表示的
dynamic	adj. 动力的, 动力学的
fellow	n. 家伙, 同事
punishment	n. 惩罚, 处罚
ethnic	adj. 人种的, 种族的
goat	n. 山羊
cottonwood	n. [植]三叶杨
theorist	n. 理论家
mental	adj. 精神的,智力的
web	n. 网
pursue	v. 追赶, 追踪
resilience	n. 弹性，弹力
outbreak	n. 爆发, 发作
mutually	adv. 互相地, 互助
driver	n. 驾驶员，司机
leather	n. 皮革, 皮革制品
neon	n. [化]氖
cash	n. 现金 vt兑现
dog	n. 狗, 犬
bladder	n. 膀胱, 气泡
cry	v&n. 哭
tale	n. 故事,传说
cord	n. 绳索, 束缚
wed	v. 娶, 嫁, 结婚
advancement	n. 前进, 进步
dedicate	v. 献(身), 致力
thirteen	num. 十三
respiration	n. 呼吸, 呼吸作用
cheaply	adv. 廉价地；粗俗地
safety	n. 安全, 保险
coach	n. 教练；长途公共汽车 vt训练，指导
transit	n. 运输，载运
soap	n. 肥皂
quiet	adj. 安静的, 宁静的
corona	n. 冠壮物
therapy	n. 治疗
speculative	adj. 推测的, 思索的,投机的
impressionist	n. 印象主义者
incentive	adj. 刺激的, 鼓励的 n动机
pilot	n. 飞行员, 领航员
disposal	n. 处理, 处置
spectacle	n. 景象, 场面,奇观
flour	n. 面粉
latent	adj. 潜在的, 潜伏的
silica	n. [化]硅石
deaf	adj. 聋的
bureau	n. 局，办事处
tow	v. 拖, 曳
rudimentary	adj. 基本的,初步的,未充分发展的
involvement	n. 连累, 包含
opening	n. 开口, 开始
otter	n. 水獭, 水獭皮
let	v. 允许，让
illustration	n. 说明, 例证
pant	v. 喘 n. 喘息
shatter	v. 粉碎，破灭
makeup	n. 化妆品,组成, 结构
neutral	adj. 中立的, 中性的
anticipate	v. 预期(料),期望
valid	adj. 有效的,有根据的,合法的
borrow	v. 借, 借入
indoor	adj. 户内的, 室内的
grassland	n. 牧草地, 草原
purely	adv. 仅仅；简单地
deciduous	adj. 每年落叶的, 非永久性的
scene	n. 场面, 情景
fifth	adj. 第五的
broadside	n. (船)舷侧
mood	n. 心情, 情绪
tethys	n. 古地中海,  特提斯海
decipher	v. 译解
divert	v. 使转向,转移
broadway	n& a. 百老汇大街(的)
thorough	adj. 十分的, 彻底的
interrupt	v. 打断, 妨碍, 插嘴
compel	v. 强迫, 迫使
dislike	v. 讨厌, 不喜欢
unfamiliar	adj. 不熟悉的
shortly	adv. 立刻, 马上
fence	n. 栅栏 v用篱笆围住
raven	n. 大乌鸦
pamphlet	n. 小册子
dive	v. 潜水, 跳水
swarm	n. 蜂群, 一大群
fuse	n. 保险丝 v熔合
ruin	v& n. 毁灭(坏)
commuter	n. 通勤者, 每日往返上班者
movable	adj. 活动的，变动的
harden	v. (使)变硬, (使)坚强
alloy	n. 合金
astronomy	n. 天文学
bind	v. 捆绑(扎)；结(粘)合
tear	n. 眼泪 v撕(裂)
conversion	n. 变换, 转化
easter	n. [宗](耶稣)复活节
weed	n. 野草, 杂草
negotiate	v. 商议, 谈判
tidal	adj. 潮汐的, 定时涨落的
flask	n. 长颈瓶
eusocial	adj. (昆虫)完全社会性的
gardening	n. 园艺
fat	adj. 肥胖的
deepen	v. 加深, 深化
oliver	n. 脚踏铁槌
canvas	n. 帆布；(帆布)油画
ideology	n. 意识形态
turkey	n. 土耳其,火鸡
slice	n. 薄片 v切(片)
solitary	adj. 孤独的
intensively	adv. 加强地, 集中地
unstable	adj. 不牢固的, 不稳定的
reheat	v. 再热
via	prep. 经,通过,经由
financially	adv. 财政上(金融上)
diversification	n. 变化, 多样化
sedentary	adj. 久坐的,固定不动的
descend	v. 下来, 下降
outwork	n. 外包活
eohippus	n. <古生>始祖马
conductor	n. 领导者, 经理
blast	n. 爆炸；一阵(疾风等) vt炸，炸掉
nutritionally	adv. 在营养上, 营养方面
prime	adj. 首要的,最好的
fold	n. /v折叠
wake	v. 醒来,唤醒
worm	n. 虫，蠕虫
mythical	adj. 神话的, 虚构的
handcraft	n. 手工, 手艺
endanger	v. 危及
wage	n. 工资 v发动
sweep	v. 打扫, 清扫
porosity	n. 多孔性
windmill	n. 风车
backup	n. 后援, 支持
intent	n. 意图, 目的
understory	n. 林下叶层
shaman	n. 萨满教的道士, 僧人或巫师
stylize	v. 使风格化, 仿效的风格
autonomous	adj. 自治的
pipeline	n. 管道, 传递途径
renew	v. 更新, 恢复
dandelion	n. 蒲公英
monopoly	n. 垄断(者)
membership	n. 成员资格,全体会员
gate	n. 大门
homogeneous	adj. 同质的,相似的
substantially	adv. 大体上；本质上
internally	adv. 内部地, 国内地
flame	n. 火焰, 光辉
breeze	n. 微风 vi吹微风,逃走
poorly	adj. 不舒服的  ad贫穷地
popularly	adv. 大众地, 通俗地
devoid	adj. 全无的, 缺乏的
manifest	v. 显示，表明，证明
Guinea	n. 几内亚
landform	n. 地形, 地貌
mistake	n. 错误 v. 弄错,误解
pinpoint	v. 确定,精确地定位 adj. 十分精确的
relief	n. 轻松，缓解
rancher	n. 大牧场主, 大牧场工人
mosaic	n. 镶嵌细工，马赛克
maturation	n. 化脓, 成熟
recruitment	n. 征募新兵, 补充
preschooler	n. (美)学龄前儿童
miniature	adj. 小型的，微小的 n微小的模型
speculate	v. 推测, 思索, 做投机买卖
pale	adj. 苍白的；淡的 vi变得苍白，变得暗淡
loft	n. 阁楼
exotic	adj. 外来的
practitioner	n. 从业者, 开业者
ear	n. 耳朵
photosynthesis	n. 光合作用
diffuse	v. 散播,传播
arc	n. 弧, 弓形
flagellum	n. [动]鞭毛
cloth	n. 布, 织物
collapse	v&n. 倒塌, 崩溃
phytoremediation	n. 植物除污, 植物治理法
mustard	n. 芥菜, 芥末
chlorosis	n. 萎黄病, 变色病
daylight	n. 日光, 白昼
piecework	n. 计件工作
luck	n. 运气, 好运
moment	n. 片刻，瞬间
ingenuity	n. 机灵, 独创性
gear	n. 齿轮 v. 使适应
intimate	adj. 亲密的,私人的
efficiency	n. 效率, 功效
Polynesian	n. 波利尼西亚人, 波利尼西亚语
inaccurate	adj. 不准确的, 错误的
eighteen	num. 十八
lumber	n. 木材,木料
monument	n. 纪念碑
garrison	n. 守备队, 驻地
starve	v. (使)饿死
employment	n. 雇用
crevice	n. 裂缝
port	n. 港口
scavenger	n. 清道夫,食腐动物
antibiotic	n. 抗生素
complain	v. 抱怨,控诉
patron	n. 资助人，赞助人
legume	n. 豆类, 豆荚
entry	n. 进入, 入口
cohesion	n. 结合, 凝聚
bag	n. 袋子
stave	n. 桶材；窄板  v敲破
fungal	adj. 真菌的
outlet	n. 出口, 出路
interconnect	v. 使互相连接
synthesize	v. 综合, 合成
magnetosphere	n. 磁气圈
chisel	n. 凿子 v砍凿
disguise	n&v. 伪装，掩饰
vein	n. 静脉，血管
curve	n&v. 曲线,弯曲
bloodhound	n. 一种大侦探犬
conception	n. 观念, 概念
rental	n. 租金额
informal	adj. 不正式的
ambitious	adj. 有雄心的
measurable	adj. 可测量的
stroke	n. 划桨；击
enforce	v. 实施, 执行,加强
tannin	n. [化]丹宁酸
disagree	v. 不一致, 不适宜
joint	n. 关节；接头
tourism	n. 旅游业, 观光
woody	adj. 多树木的,木质的
card	n. 纸牌, 卡片
ownership	n. 所有权, 物主身份
prehistory	n. 史前时代, 史前学
centralize	v. 集聚, 集中
silicon	n. [化]硅
stony	adj. 多石的, 无情的
steep	adj. 陡峭的,急剧的
evening	n. 傍晚, 晚间
depart	v. 离开，出发
consistently	adv. 一致地；始终如一地
cajun	n. 移居美国路易斯安纳州的法人后裔
intrinsically	adv. 内在地, 固有地
rod	n. 杆, 棒
bread	n. 面包, 生计
glow	v. 发光, 发热
flush	v. 冲洗；(脸)发红
geologically	adv. 地质学上
gratify	v. 使满足
crane	n. 起重机
ledge	n. 岩架,岩石突出部
knife	n. 刀, 餐刀
squash	v. 压碎；硬塞n美国南瓜
cowboy	n. 牧童；牛仔
notable	adj. 值得注意的, 显著的
erect	v. 建造,竖立,使直立
maritime	adj. 海上的, 海事的
vastly	adv. 巨大地；广阔地
bicycle	n. 脚踏车, 自行车
fascinate	v. 使着迷
shellfish	n. 贝, 甲壳类动物
dy	n. [化]镝(=dysprosium)
inferior	adj. 下等的, 下级的
rub	v. 擦,擦掉
beat	v. 打；战胜
fan	n. (风)扇 vt扇，煽动
agriculturalist	n. 农学家
cooperate	v. 合作, 协作
adorn	v. 装饰
Pakistan	n. 巴基斯坦(南亚国家)
rhetorical	adj. 带修辞色彩的
formula	n. 公式, 规则
leap	v&n. 跳跃
inferential	adj. 推理的, 推论的
reel	n. 卷轴 vt卷，绕
partial	adj. 部分的,局部的
crown	n. 王冠，冕
mysterious	adj. 神秘的
audio	adj. 音频的,声音的
planetarium	n. 天文馆
spider	n. 蜘蛛,三脚架
humorous	adj. 幽默的,诙谐的
aristocratic	adj. 贵族政治的,贵族的
parrot	n. 鹦鹉
bush	n. 矮树丛
radar	n. 雷达,电波探测器
strand	v. 使搁浅
conductance	n. 电导, 导率
filter	v. 过滤 ,透(过)
rainforest	n. 雨林
endocrine	n. 内分泌
hemlock	n. 铁杉,毒芹
determination	n. 决心, 果断
exclusively	adv. 专门地，排除其他地
quotation	n. 引文,引语
discern	v. 察觉出,识别
professor	n. 教授
deposition	n. 沉积, 免职
handful	n. 一把, 少数
flaw	n. 缺点，瑕疵
shuttle	n. 航天飞机；梭子 v穿梭来回(运送)
necessity	n. 需要,必需品
reasonably	adv. 有理地；合理地
chill	v. 使变冷(冷冻) n寒冷
pink	n&a. 粉红色(的)
ceiling	n. 天花板, 上限
commensalism	n. 共栖
parasitism	n. 寄生状态, 寄生病
outdoor	adj. 室外的, 户外的
blanket	n. 毯子
modernize	v. 使现代化
boredom	n. 厌倦
somewhere	adv. 某处, 在某处
happiness	n. 幸福, 快乐
currency	n. 流通
county	n. 县, 郡
correspondence	n. 通信, 信件, 相符
confidence	n. 信心
coverage	n. 覆盖
botany	n. 植物学
seemingly	adv. 表面上地
feminist	n. 男女平等主义者
radium	n. [化]镭
transmit	v. 传送,传达
persist	v. 坚持, 持续
warrior	n. 勇士，武士
portable	adj. 便于携带的,轻便的
gentle	adj. 温和的, 文雅的
swift	adj. 迅速的,敏捷的
suspect	v. 推测,怀疑
sleepy	adj. 困乏的,欲睡的
weakness	n. 虚弱,弱点
outgoing	adj. 外向的
combat	n. 战斗,格斗
dispute	n&v. 争论,争端
Baltic	n. a波罗的海的, 波罗的语的
male	adj. 男的, 雄的
prevalent	adj. 普遍的, 流行的
convey	v. 搬运,传达
recruit	v. 招募,吸收 n. 新成员, 新兵
hereditary	adj. 世袭的,遗传的
counterpart	n. 职务相当的人,副本
personality	n. 人格,个性
strut	n. 高视阔步 v. 昂首阔步地走
prowl	v. 巡游
worship	n&vt. 崇拜, 爱慕
hat	n. 帽子 vt戴帽子
avenue	n. 林荫道,方法
consensus	n. 一致，同意
sugar	n. 糖
ethic	n. 道德规范
individualistic	adj. 个人主义的
stylistic	adj. 风格上的,文体上
eka	n. 准(第一)
check	v. 检查 n. 核对,支票
cabin	n. 小屋, 船舱
convenient	adj. 便利的,方便的
geography	n. 地理(学)
bottle	n. 瓶子 vt用瓶装
exaggeration	n. 夸张
hamper	v. 妨碍, 牵制
unpleasant	adj. 不愉快的；不合意的
softwood	n. 软木材
arsenic	n. [化]砷, 砒霜
bean	n. 豆, 豆形果实
slate	n. 板岩,石板
reptilian	n. 爬行类动物
overirrigation	n. 过量灌溉
bold	adj. 大胆的, 无礼的
conclusive	adj. 决定性的,结论性的
file	n. 文档 vt登记备案 ,提出
honeybee	n. 蜜蜂
satiric	adj. 讽刺的,挖苦的
refresh	v. (使)精神振作,(使)恢复活力
starvation	n. 饥饿, 饿死
personally	adv. 亲自；就个人来说
spruce	n. 云杉
comprehend	v. 理解，领会
diffusion	n. 传播，散布
differentiate	v. 区分 ,区别
radical	adj. 根本的；激进的 n激进分子
whenever	conj. 无论何时，随时
stiffen	v. 弄硬；加强
simulate	v. 模拟, 模仿
fetus	n. 胎儿
feeder	n. 饲养员
reminder	n. 提醒物；暗示
foodstuff	n. 食品, 粮食
shepherd	n. 牧羊人 v. 带领，引导
pine	n. 松(树) vi消瘦
informant	n. 通知者, 告密者
allocate	v. 分派, 分配
cedar	n. 雪松
vanish	v. 消失
slab	n. 厚板，平板
coexist	v. 共存
marble	n. 大理石
moose	n. [动] 驼鹿
cod	abbr. 货到付款 (Cash on Delivery) n鳕鱼
migrant	n. 移居者, 候鸟
aviation	n. 航空,飞机制造业
frontal	n. 前沿
hexagonal	adj. 六角形的,六边的
journal	n. 定期刊物, 杂志
assure	v. 使确信, 确保
sizable	adj. 相当大的
decompose	v. (使)腐烂
scout	n. 侦察员 vi侦察
mineralization	n. 矿化作用,成矿作用
krypton	n. [化] 氪
diminish	v. (使)减少, (使)变小
residual	adj. 剩余的, 残留的
chlorophyll	n. [生化]叶绿素
xenon	n. 氙(惰性气体的一种,元素符号Xe)
coil	v. 盘绕, 卷
penicillin	n. [微]青霉素（一种抗菌素，音译名为盘尼西林）
homestead	n. 家宅，宅基
prestigious	adj. 享有声望的
frustration	n. 挫败, 挫折
servant	n. 仆人
imitative	adj. 仿制的,模仿的
lesson	n. 功课
incubate	v. 孵卵
hectare	n. 公顷（等于1万平方米）
alert	adj. 警觉的n戒备
committee	n. 委员会
chocolate	n. 巧克力
loosely	adv. 松散地
creator	n. 创建者, 创作者
dirt	n. 污垢, 泥土
Asian	n&a. 亚洲(的), 亚洲人(的)
enthusiastic	adj. 热心的, 热情的
proof	n. 证据，证明
infrastructure	n. 下部构造,基础下部组织
novelist	n. (长篇)小说家
peruvian	n&a. 秘鲁人(的)
static	adj. 静态的, 静止的
osprey	n. 白色的羽毛, 鱼鹰
Scotland	n. 苏格兰(英国的一部分,在不列颠北部)
underneath	adv. 在下面 prep在的下面
pillar	n. 柱子, 栋梁
affection	n. 影响, 感情
someone	pron. 有人, 某人
kneel	v. 跪下
evaluation	n. 估价, 评价
huckleberry	n. 越橘类
elk	n. 麋鹿
darken	v. (使)变暗
suffer	v. 遭受, 经历
jaw	n. 颚,下巴
hardship	n. 困苦, 艰难
historically	adv. 历史上地
disorient	v. 使失去方向感, 使迷惑
anthocyanin	n. [植]花青素, [化]花色醣苔
acidic	adj. 酸的,酸性的
elder	n. 年长者, 老人
modification	n. 更改, 修改
anyone	pron. 任何一个
fingerboard	n. 键盘
watercraft	n. 船只
buildup	n. 集结, 增长
varnish	n. 清漆；光泽 v. 涂清漆，使光亮
warfare	n. 战争, 作战, 冲突, 竞争
cop	n. 警官, 巡警
symbiosis	n. [生]共生(现象),合作关系
presidential	adj. 总统的
sponge	n. 海绵 vt擦
gut	n. 内脏
Russia	n. 俄罗斯
powder	n. 粉(末) v搽粉,撒粉
organizational	adj. 组织的
abruptly	adv. 突然地；粗鲁地
administrative	adj. 管理的，行政的
hypothetical	adj. 假说的，臆说的
pastoral	adj. 田园生活的，宁静的
overtime	n. 超时
interglacial	adj. 间冰期的
bias	n. 偏见vt使存偏见
ahead	a&ad. 在前, 向前
lamp	n. 灯
conform	v. 使一致, 遵从
detractor	n. 诽谤者
timescale	n. 时标, 时间量程
stove	n. 炉
sailfish	n. 旗鱼
marlin	n. 枪鱼
swordfish	n. 旗鱼
commit	v. 犯罪, 承诺, 委托
renewal	n. 更新, 恢复
false	adj. 错误的；假的
Eurasian	adj. 欧亚的, 欧亚人的
tolerant	adj. 宽容的, 容忍的
dull	adj. 乏味的；阴沉的
depress	v. 使沮丧, 使消沉
fortunate	adj. 幸运的, 侥幸的
buoyant	adj. 有浮力的, 轻快的
slick	adj. 圆滑的；精巧的
shine	v. 照耀,发光 n光泽
kinship	n. 血族关系
helpful	adj. 有益的；给予帮助的
domestication	n. 驯养, 教化
blur	v. 弄脏 n. 污点, 模糊
replenish	v. 补充
fellowship	n. 伙伴关系
tutelage	n. 监护
freudian	n. n&a,佛洛伊德学说(的)
controversy	n. 论争, 辩论
blubber	n. 鲸脂,哭号v哭号
basalt	n. 玄武岩
predation	n. 掠食
qualification	n. 资格, 条件
perish	v. 丧生，消亡
photographer	n. 摄影师
boule	n. 人造宝石，议会
Berlin	n. 柏林[德国]
trance	n&v. 恍惚；出神
opaque	adj. 不透明的,难懂的
vigorously	adv. 精力旺盛地；健壮地
lease	n. 租赁vt出租,租得
brightly	adv. 明亮地
underlies	v. 位于之下, 成为的基础
telecommunication	n. 电信，远程通信
recur	v. 再发生，重现
reset	v. 重新安排
constructive	adj. 建设性的,构造上的
habituation	n. 适应
generalization	n. 一般化, 归纳, 概括
shock	n&v. 震动；震惊
permanence	n. 永久, 持久
tine	n. (尖)齿, 叉
vacation	n. 假期,休假
briefly	adv. 简短地；简略地
precipitate	v. 促成；使沉淀 n沉淀物
Scottish	n. 苏格兰人(的), 苏格兰语（的）
Norwegian	adj. 挪威的 n挪威人, 挪威语
lime	n. 酸橙,石灰
ball	n. 球, 球状物
joiner	n. 工匠
bulk	n. (大)块,主体 vt使更大
repetition	n. 重复，反复
patronage	n. 赞助；光顾(买东西)
bacterium	n. 细菌
carman	n. 车夫,司机
incise	v. 切入, 切割
shaft	n. 柄，杆
leak	v. (使)漏；泄露 n漏洞
energetic	adj. 精力充沛的,积极的
restore	v. 恢复,重建
Mexican	n&a. 墨西哥(的)， 墨西哥人(的)
cat	n. 猫
bit	n. 一点儿，少许；小片
doctor	n. 医生；博士
crumple	v. (使)皱，扭曲；(使)崩溃
equality	n. 等同性, 平等
developmental	adj. 发展的, 进化的
await	v. 等候
saline	adj. 含盐的；咸的
minimal	adj. 最小的, 最小限度的
warmth	n. 暖和, 温暖
newborn	n. 婴儿
opposition	n. 反对,相反
shadow	n. 阴影；影子
magic	n. 魔术；魔力 a有魔力的
meal	n. 餐, 一顿饭
mechanical	adj. 机械的, 机械制的
alien	adj. 外国(人)的 n. 外国(星)人
chapbook	n. 畅销故事书
shoe	n. 鞋
Manhattan	n. 曼哈顿岛(美国纽约一区)
distract	v. 转移,分散
satisfactory	adj. 令人满意的
devastate	v. 毁坏
Holland	n. 荷兰
glue	n. 胶(水) vt胶合
prospect	n. 前景, 景象
arcade	n. 拱廊
navigational	adj. 导航的, 航行的
deterioration	n. 变坏, 退化
pursuit	n. 追求,追逐
soak	n&v. 浸泡, 渗透
metallurgy	n. 冶金, 冶金术
taxes	n. 赋税,  税收
solidify	v. (使)凝固,团结
belt	n. 带子, 地带
cape	n. 海角,斗篷
spoil	v. 损坏；溺爱 vi变质
meticulously	adv. 仔细地,谨慎地
configuration	n. 构造, 结构
unaided	adj. 未受协助的, 独立的
perplex	v. 使困惑，使费解
unnecessary	adj. 不必要的,多余的
concave	adj. 凹的 n凹(面)
beak	n. 鸟嘴, 喙
descent	n. 下降,下倾
outermost	adj. 最外方的,离中心最远的
duck	n. 鸭，鸭肉
duty	n. 义务, 责任
yard	n. 院子，场地
legendary	adj. 闻名的；传说的
haul	vt& n. (用力)拖，拉
congressional	adj. 会议的；国(议)会的
abstraction	n. 提取
eel	n. 鳗鱼
hazard	n. 危险 vt冒…风险
December	n. 十二月(略作Dec)
overlap	v. 重叠, 重复
width	n. 宽度, 广度
pet	n. 宠物
camouflage	v&n. 伪装
adverse	adj. 不利的，有害的
postage	n. 邮费
prairie	n. 大草原,牧场,
triumph	n. 胜利 v. 获胜
cylindrical	adj. 圆柱形的
reinforce	v. 增强，加强
bent	n. 倾向, 爱好
son	n. 儿子
stimulation	n. 激励,刺激
hibernate	v. 冬眠
auxiliary	adj. 辅助的, 补助的
athlete	n. 运动员
kettle	n. 壶, 罐, 釜, 鼓
shut	v. 关上, 关闭
priority	n. 优先(权)
salary	n. 薪水
collaboration	n. 合作，协作
waterpower	n. 水力(水力发电)
pollen	n. 花粉
dealer	n. 经销商, 商人
firmly	adv. 坚固地，稳定地
relieve	v. 减轻, 解除
defensive	n&a. 防御(的)
equilibrium	n. 平衡
symbolize	v. 象征
concrete	adj. 实在的，具体的 n混凝土
brea	n. 布雷亚(美国加州地名)
upset	v. 搅乱,使心烦 n不安
exocrine	adj. [医]外分泌的
definite	adj. 明确的,一定的
formerly	adv. 从前, 以前
camp	n. 营地 v. 宿营
cosmos	n. 宇宙
overlie	v. 躺在上面
shorten	v. 缩短, (使)变短
aboard	prep&ad. 在(船、飞机、车)上，上船
blend	v. (使)混和n混合物
participation	n. 参加，参与
brass	n. 黄铜(制品)
detectable	adj. 可发现的,可察觉的
adhere	v. 粘附,遵守
accommodate	v. 容纳,提供(住处),适应
toolmaker	n. 精密工具制造者
printmaking	n. 版画复制(术)
populous	adj. 人口稠密的
wallpaper	n. 墙纸
reputation	n. 名誉, 名声
gasoline	n. 汽油
invite	v. 邀请；征求
tap	n&v. 塞子，龙头；轻叩(拍)
igloo	n. 圆顶建筑
endless	adj. 无止境的,无穷的
formalize	v. 使正式, 形式化
edition	n. 版,版本
sew	v. 缝合, 缝纫
inefficient	adj. 效率低的,效率差的
geographer	n. 地理学者
laser	n. 激光
foul	adj. 邪恶的,下流的 n犯规 v弄脏
willow	n. 柳(树)
continuity	n. 连续性, 连贯性
meteoric	adj. 流星的,大气的
explode	v. 爆炸；爆发
recipient	n. 接受者，接收者
Michigan	n. 密歇根州(美国州名)
favorite	adj. 喜爱的 n特别喜爱的人(或物)
anxious	adj. 渴望的, 忧虑的
harness	n. 马具 v. 治理，束以马具
adoption	n. 采用, 收养
vie	v. 竞争
instruct	v. 教导, 指示
carol	n. 颂歌, 欢乐的歌
god	n. 神, 上帝
girl	n. 女孩
comedy	n. 喜剧
provision	n. 供应,预备
exceptionally	adv. 格外地, 特别地
fieldstone	n. 散石,大卵石
ranch	v. 经营牧场n牧场
imperial	adj. 帝国的，帝王的
defenseless	adj. 无防备的
furnish	v. 布置, 装备, 提供
lag	v. 落后 n滞后
lumiere	n. 彩色照相术
accompaniment	n. 陪伴物, 伴奏
pretend	v. 假装，装作
thresh	v. 打谷, 脱粒, 反复得做
repetitive	adj. 重复的,反复的
mule	n. 骡子,十分固执的人
prone	adj. 易于…的，很可能…的
wipe	v. 擦, 揩
individualism	n. 个人主义, 利己主义
Russian	a& n. 俄罗斯(语)(的)
formulate	v. 构想出，规划
krill	n. [动]磷虾(单复同)
forty	num. 四十
coastline	n. 海岸线
unevenly	adv. 不平坦地, 不均衡地
assess	v. 估定,评定
sick	adj. 有病的；恶心的
drapery	n. 布业，布匹
nick	n. 小伤口，刻痕
Ute	n. 犹特人(美洲印第安人的一种), 犹特语
ordinarily	adv. 平常地；普通地
headquarter	v. 将之总部设在
peach	n. 桃(树)
radiocarbon	n. 放射性炭
afield	adv. 远离着(家乡), 去远处
relocate	v. 重新部署
enormously	adv. 极度,大量
saltwater	adj. 盐水的, 海产的
pipe	n. 管子
mute	adj. 哑的,不发音的 vt消除(声音)
deglaciation	n. 冰消作用
glen	n. 峡谷, 溪谷
poison	n. 毒药vt 下毒
wax	n. 蜡, 蜡状物
neglect	vt&n. 忽视，忽略
pangaea	n. 泛古陆,  泛大陆
fahrenheit	n. 华氏温度计
lys	n. [化]赖氨酸
Sac	n. 〈生〉囊,液囊
midcontinent	n. 大陆中部
emperor	n. 皇帝, 君主
mainstay	n. 支柱;骨干
connecticut	n. (美国）康涅狄格
wholly	adv. 整个,全部
brilliance	n. 光辉，辉煌
Oklahoma	n. 俄克拉荷马州
rhinoceros	n. [动]犀牛
externally	adv. 外部地, 外面地
successor	n. 接班人, 继任人
tax	n. 税,税款
plumb	v. （用铅垂）测量,探测
lessen	v. 减少,缩小
trout	n. 鲑鱼
permian	n&a. [地]二叠纪(的)
superintendent	n. 主管人，监管人
friendly	adj. 友好的, 友谊的
wasteful	adj. 浪费的，挥霍的
foraminifera	n. 有孔虫类
peace	n. 和平, 安静
domain	n. 领地,范围
agitate	v. 搅动,煽动
farce	n. 闹剧；荒唐可笑
aborigine	n. 土著居民
attest	v. 证明
aggressiveness	n. 进取精神, 侵犯
privately	adv. 秘密，一个人
vague	adj. 不明确的,模糊的
lawlike	adj. 似法律的
oppositely	adv. 相反地, 相对地
anecdotal	adj. 轶事的,趣闻的
ounce	n. 盎司
disorder	n. 混乱 vt扰乱
defeat	vt&n. 击败,战败
synchronization	n. 同步化
dress	n. 连衣裙,女装 v打扮
biographer	n. 传记作者
creativity	n. 创造(力)
illness	n. 疾病, 生病
curriculum	n. 课程
Anglo	n. 盎格鲁, 英裔美国人
revival	n. 复兴, 复活
Hampshire	n. 汉普郡(英国南部之一郡)
worthwhile	adj. 值得做的
spy	n. 间谍, 侦探 v侦察
instinctive	adj. 本能的,直觉的
signaler	n. 信号员
retire	v. 退休
turbulence	n. 骚乱, 动荡
paradigm	n. 范例
insight	n. 洞察力, 见识
penchant	n. 喜好(倾向)
sinkhole	n. 污水池
neptune	n. [天]海王星
cyanide	n. [化]氰化物
gin	n. 杜松烧酒  v开始
flax	n. 亚麻
revolve	v. 旋转
withdraw	v. 收回,撤消
purple	adj. 紫色的
comprise	v. 包含, 由组成
timer	n. 计时员, 定时器
supplant	v. 排挤，取代
harpsichord	n. 大键琴
peaceful	adj. a 和平的, 平静的
reign	n. 君主统治 v. 统治, 支配
appreciation	n. 感谢, 感激
tempt	v. 吸引,诱惑
boast	v&n. 自夸
revitalize	v. 新生
spiritual	adj. 精神上的
clan	n. 氏族,部落
fictional	adj. 虚构的,小说的
heterogeneous	adj. 异种的, 异质的
diversion	n. 转向, 转移
protrude	v. 突出
recrystallize	v. ( 使) 再结晶
warp	v. 弯曲,歪曲
Nevada	n. 内华达州(美国西部内陆州)
amusement	n. 娱乐, 消遣
monetary	adj. 货币的, 金融的
reed	n. 芦苇
legislature	n. 立法机关
baboon	n. [动]狒狒
wedge	n. 楔 vt楔入, 楔进
overgraze	vt. 使过度放牧
embed	v. 使插入, 嵌入
blowhole	n. 喷水孔, 通风孔
imagist	n&a. 意像派者(的)
antenna	n. 天线
receptor	n. 接受器
magenta	n&a. 红紫色(的)
valse	v. 轻轻地走 n. 华尔兹
rebellion	n. 反叛，反抗
discoverer	n. 发现者
charcoal	n. 木炭
conifer	n. [植]松类, 针叶树
botanist	n. 植物学家
narrator	n. 讲述者
critically	adv. 批评性地, 危急地
Inca	n. 印加人(古代秘鲁土著人)
woolen	adj. 毛线的 n. 毛制品
dialogue	n. 对话
void	adj. 无效的
variously	adv. 不同地, 各种各样地
dictate	v. 口授；命令
incursion	n. 侵犯，入侵
sweet	adj. 甜的
decode	v. 解码, 译解
advantageous	adj. 有利的
legend	n. 传说
toll	n. 过路(桥)费
deliberate	adj. 故意的,深思熟虑的
milk	n. 乳, 牛奶
subside	v. 下沉,平静
socially	adv. 社交上；社会上
inventory	n. 详细目录, 存货(清单)
twin	n. 双胞胎中一人 v. 使成对
drastic	adj. 激烈的, 极端的
chapel	n. 小教堂
tenement	n. 公寓
daguerreotype	n. (早期)银板照相
staple	v. 订 a主要的
fatty	adj. 脂肪的
mainland	n. 大陆
disrupt	v. 使中断，扰乱
rend	v. 撕裂，猛拉
maser	n. 微波激射器
spinal	adj. 脊椎骨 n. 脊髓麻醉
clockwise	adv. ／ a顺时针方向地(的)
generic	adj. 种类的，类属的
resin	n. 树脂 vt涂树脂于
backward	a&ad. 向后的, 落后的
carving	n. 雕刻(品)
frown	v. ／ n皱眉，蹙额
feasible	adj. 可行的
distrust	n&vt. 不信任，怀疑
incredible	adj. 不可信的；不可思议的
smother	v. 窒息
stain	n. 污点v染污
cavern	n. 洞穴，大山洞
minuscule	n&a. 草写小字(的)
envelop	v. 包封, 遮盖
fortunately	adv. 幸运地，幸亏
dormant	adj. 冬眠的
coppersmith	n. 铜匠
intrinsic	adj. 内在的, 固有的
portability	n. 可携带, 轻便
pest	n. 害虫
potato	n. 马铃薯
clarify	v. 澄清, 阐明
extermination	n. 消灭, 根绝
suburbanization	n. 市郊化
succulent	adj. 多汁的
medal	n. 奖牌，奖章
micron	n. 微米,百万分之一米
publicize	v. 宣传
spout	v. 喷出
catastrophic	adj. 悲惨的, 灾难的
sensory	adj. 知觉的, 感觉的
fodder	n. 饲料, 草料
photoflash	n. （照相）闪光灯
substantiated	vt. 证实, 实体化
cramp	n. 痉挛 v. 限制，束缚
reversal	n. 翻转, 倒转, 反转
psychologically	adv. 精神上地, 心理上地
virtuosity	n. 艺术鉴别力
leafy	adj. 叶状的；叶茂的
perishable	adj. 容易腐烂的
retract	v. 缩回, 撤销
Israel	n. [地名] 以色列
retrieval	n. 取回，补偿
insist	v. 坚持, 强调
inject	v. 注射, 注入
domelike	adj. 穹顶状的
savannah	n. (南美)大草原
snake	n. 蛇
pour	v. 灌,注,倾泻
navigator	n. 航海家
vacuum	n. 真空
elliot	n. 埃利奥特(男子名)
perry	n. 梨子酒
liter	n. 公升
arthropod	n&a. 节肢动物(的)
airflow	n. 气流
departure	n. 启程, 出发
momentum	n. 动力, 势头
spearhead	v. 充当先锋
unjust	adj. 不公平的
industrialism	n. 产业主义,工业制度
drug	n. 药
environmentally	adv. 在环境方面地
gem	n. 宝石, 珍宝
detract	v. 转移
swirl	n&v. 旋转，漩涡
bluefin	n. 金枪鱼
radiant	adj. 发光的, 辐射的
potent	adj. 强有力的,有效的
sociobiology	n. 生物社会学
ideological	adj. 意识形态的
solidarity	n. 团结
providence	n. 深谋远虑，远见
catharsis	n. 宣泄，净化
contradictory	adj. 相矛盾的
chloride	n. [化]氯化物
archaic	adj. 古代的, 陈旧的
aristocrat	n. 贵族
consolidate	v. 合并,统一,巩固
spark	n. 火花 v. 触发，引起
plug	v. 塞 n插头
spine	n. 脊柱
absolute	adj. 完全的, 绝对的
lade	v. 装载,装货
Soviet	n&a. 苏维埃(的)
humanity	n. 人性
budget	n. 预算 v做预算
magnesium	n. [化]镁
engulf	v. 吞没
frigid	adj. 寒冷的
grandiose	adj. 宏伟的,堂皇的
citizenship	n. 公民的身份
despondent	adj. 失望的, 沮丧的
identifiable	adj. 可辨认的
cellular	adj. 细胞组成的，多孔的
universality	n. 普遍性, 一般性
widen	v. 加宽,扩展
Impressionism	n. 印象派, 印象主义
steer	v. 操纵, 驾驶
moderately	adv. 适度地
writing	n. 笔迹, 作品
symbolism	n. 象征主义
acute	adj. 敏锐的, 急性的
romance	n. 恋爱关系；浪漫气氛
bowl	n. 碗
unreliable	adj. 不可靠的
unfortunate	adj. 不幸的
weekly	adj. 每周的 ad一周一次地 n周报
compensation	n. 补偿, 赔偿
vine	n. 葡萄树；藤本植物
hardness	n. 硬度
aerodynamic	adj. 空气动力学的
command	n&v. 命令；指挥
arbitrary	adj. 任意的, 武断的
pianist	n. 钢琴家
slender	adj. 苗条的, 微薄的
admit	v. 承认,准许
alp	n. 高山
commonplace	n. 寻常的事物
vase	n. (花)瓶
deliberately	adv. 故意地
recommend	v. 推荐,劝告
dual	adj. 双的, 二重的
mouse	n. 鼠
craftsmanship	n. 技术
beast	n. 野兽，牲畜
affinity	n. 密切关系,类同
diagonal	n&a. 对角线(的)
exhaust	v. 使筋疲力尽,耗尽
resemblance	n. 相似，形似
nontraditional	adj. 非传统的
disprove	v. 反驳,证明为误
skeptical	adj. 怀疑的
shirt	n. 衬衫
plenty	n. 丰富, 大量
appropriately	adv. 适当地
emotionally	adv. 感情上地, 冲动地
freshly	adv. 新近，刚才
unbelievable	adj. 难以置信的
simultaneous	adj. 同时发生的,同步的
induce	v. 促使,引诱
woodworker	n. 木工
conversation	n. 会话
translate	v. 翻译
transaction	n. 交易，业务
eager	adj. 热心于, 渴望着
skillful	adj. 熟练的, 灵巧的
fate	n. 天数,命运
possession	n. 财产, 所有
invariably	adv. 不变地，始终如一地
Babylonian	n. 巴比伦人(的), 巴比伦语（的）
urbanization	n. 都市化
tram	n. 有轨电车
sulfur	n. [化] 硫磺
stripe	n. 条纹
ought	aux. 应当, 应该
volatile	adj. 动荡不定的,反复无常的
densely	adv. 浓密地
biography	n. 传记
inscribe	v. 题写
intercity	adj. 城市间的
alongside	prep&ad. 在旁边
erratic	adj. 古怪的，飘忽不定的
overly	adv. 过度地, 极度地
uplift	v. 提高；振奋(精神)
workday	n. 工作日
golden	adj. 金(黄)色的；金的
officially	adv. 职务上, 正式
sacrifice	n& vt. 牺牲，献祭
trick	n. 诡计 v. 欺诈
melody	n. 旋律，曲调
array	n&v. 展示,排列
thunderstorm	n. 雷暴雨
frog	n. 青蛙
deception	n. 欺骗, 诡计
snap	v. 喀嚓折断,拍快照 n吧嗒声
typify	v. 代表
gently	adv. 轻轻地, 温柔地
astronomical	adj. 天文学的, 巨大的
quantify	v. 用数量表示,量化
startle	v. 震惊
peregrine	n. 游隼 a外来的,移住的
optimal	adj. 最理想的
tapestry	n. 挂毯
polish	v. 磨光，擦亮
capability	n. 能力，才能
mechanization	n. 机械化
influx	n. 流入
sculptural	adj. 雕刻的
calm	adj. 镇定的,平静的 v(使)平静
announce	v. 宣布,宣告
leisure	n. 闲暇, 休闲
essence	n. 本质，实质
landmass	n. 大陆
shrimp	n. 小虾 v捕虾
ornamentation	n. 装饰
freely	adv. 自由地；慷慨地
undesirable	adj. 令人不悦的，讨厌的
globe	n. 球体,地球仪
grasshopper	n. 蚱蜢，蝗虫
elegant	adj. 优雅的, 雅致的
shiny	adj. 发光的；磨光的
glassmaker	n. 玻璃工人
spectacularly	adv. 壮观地, 令人吃惊地
nss	n. 卫星导航系统(供氮系统)
submerge	v. 浸没，淹没
terminology	n. 术语(学)
unclear	adj. 不清楚的
unimportant	adj. 不重要的
ubiquitous	 adj. 到处存在的
demise	 n. 死亡,让位
conspicuous	 adj. 显著的, 显眼的
error	 n. 错误, 过失
deadly	 adj. 致命的
barter	 v. 交易
nomadic	 adj. 游牧的, 流浪的
merge	 v. 结合,合并
seashore	 n. 海岸, 海滨
nonhuman	 adj. 非人类的
cottage	 n. 村舍,小别墅
fairground	 n. 游乐场, 集市
lengthen	 v. 变长,延伸
candle	 n. 蜡烛
kilogram	 n. [物]千克, 公斤
naturalism	 n. 自然主义
input	 n. 输入，投入
delight	 n&v. 高兴,欣喜
telegraph	 n&v. (打)电报
stance	 n. 站姿，立场
kitchen	 n. 厨房
tour	 n&v. 旅行，游历
maple	 n. 枫树
contraction	 n. 收缩
hinge	 n. （门、盖等的）铰链
biotic	 adj. 有关生命的,生物的
maturity	 n. 成熟,(票据)到期
honest	 adj. 诚实的, 正直的
firewood	 n. 木柴, 柴火
barn	 n. [农]谷仓, 畜棚, 畜舍, 机器房
joke	 n. 笑话, 玩笑
granular	 adj. 由小粒而成的,粒状的
preindustrial	 adj. 未工业化的, 工业化前的
thaw	 n. 融化,解冻
quarry	 n. 采石场 v. 挖出
ethology	 n. 动物行动学, 人种学
amendment	 n. 改善, 改正
curious	 adj. 好奇的, 奇特的
faith	 n. 信仰, 信念
overtake	 v. 追上，超过
neck	 n. 脖子, 颈
impurity	 n. 不纯；杂质
formidable	 adj. 可怕的；难以克服的
acceptable	 adj. 可接受的, 合意的
forager	 n. 强征(粮食)者
impend	 v. 迫近，逼近
glasslike	 adj. 玻璃状的
translucent	 adj. 半透明的
topsoil	 n. 表层土
interrelationship	 n. 相互关系
blade	 n. 刀刃, 刀片
pocket	 n. 衣袋，小袋
hillside	 n. 山腰
beside	 prep. 在…旁边,和…相比
subscribe	 v. 订阅, 签名,捐赠
buffer	 n. 缓冲器
embody	 v. 使具体化
happy	 adj. 快乐的，幸福的
net	 n. 网, 网络
litter	 n. 垃圾 v乱扔东西
outsider	 n. 外行, 局外人
aragonite	 n. [矿]霰石, 文石
convenience	 n. 便利,适宜
promotion	 n. 提升；促进
unaltered	 adj. 未被改变的
bath	 n. 沐浴, 浴室
directional	 adj. 方向的
holding	 n. 保持，固定
romantic	 adj. 传奇式的, 浪漫的
treeless	 adj. 没有树木的
recorder	 n. 记录员, 记录器
seller	 n. 售货者
noticeably	 adv. 显著地，显然
plunge	 v& n. 投入, 跳进
eradicate	 v. 根除
caste	 n. 印度的世袭阶级
inherit	 v. 继承
gosling	 n. 小鹅，年轻无知的人
formally	 adv. 正式地, 形式上
rattle	 v. 嘎嘎作响n咯咯声;吵闹声
residence	 n. 居住, 住处
antecedent	 adj. 先行的 n. 祖先
stake	 n. 树桩
disloyalty	 n. 不忠实
certainty	 n. 确定, 确实的事情
nystatin	 n. [微]制霉菌素
compile	 v. 编译, 编辑
prodigious	 adj. 巨大的, 惊人的
mural	 adj. 墙壁的  n壁画
fountain	 n. 喷泉
gatherer	 n. 收集者, 收集器
shoemaking	 n. 制鞋
electrically	 adv. 用电力;有关电地
generous	 adj. 慷慨的,丰富的
sprawl	 v. 伸开
petal	 n. 花瓣
technologically	 adv. 科技地
proportionately	 adv. 相称地, 成比例地
germanium	 n. 锗
likelihood	 n. 可能(性)
charter	 v. 租 n宪章
threshold	 n. 门槛, 开端
sparse	 adj. 稀少的, 稀疏的
statuary	 n. 雕象
hypha	 n. [植]菌丝
farsighted	 adj. 有先见之明的, 远视的
fatten	 v. 养肥；使肥沃
spit	 n. 唾液 v吐(唾沫)
crawl	 vi&n. 爬行, 蠕动
cautious	 adj. 谨慎的, 小心的
expanse	 n. 广阔；宽阔的区域
dawn	 n. 黎明 vi破晓,开始出现
pram	 n. 婴儿车
purify	 v. 使纯净
wonderful	 adj. 精彩的, 极好的
Sanskrit	 n& a. 梵语(的)
orbital	 adj. 轨道的
quit	 v. 离开, 辞职
confront	 v. 面临, 对抗
bison	 n. (美洲)野牛
sideways	 a&ad. 旁的, 横向的
hyksos	 n. 希克索斯王朝(古埃及王朝之一)
arduous	 adj. 费力的, 辛勤的
boulder	 n. 大石头
saint	 n. 圣人, 圣徒
bathhouse	 n. 公共浴室, 澡堂,
dilute	 v. 稀释，冲淡
principally	 adv. 主要地
imbalance	 n. 不平衡,不均衡
ionize	 v. 使离子化 ,电离
immigration	 n. 移民入境
agitation	 n. 鼓动，焦虑
vivid	 adj. 生动的，栩栩如生的
necessitate	 v. 使成为必需,迫使
Hollywood	 n. 好莱坞
poverty	 n. 贫穷, 贫困
blossom	 n. 花 v. 开花
demographic	 adj. 人口统计学的
accidentally	 adj. 意外的,偶然(发生)的
shipbuilding	 n. 造船
duct	 n. 管道, 导管 vt. 用导管输送
sweat	 n. 汗 v(使)出汗
empirical	 adj. 经验主义的
mediate	 v. 调停, 斡旋
bloodstream	 n. 血流
verify	 v. 核实, 证明
reelection	 n. 再选, 改选
dwelling	 n. 住处
foremost	 adj. 最重要的,最初的
midair	 n. 半空中
crocodile	 n. 鳄鱼, 鳄鱼皮
sister	 n. 姐妹
calve	 v. 生小牛, (使)冰山崩解
integration	 n. 综合
usefulness	 n. 有用, 有效性
olfactory	 adj. 嗅觉的
cranial	 adj. 头盖(形)的
prerequisite	 n. 先决条件
occupational	 adj. 职业的
eclipse	 n. (日、月)食 vt形成(日、月)食
refute	 v. 驳斥，驳倒
updraft	 n. 上升气流
deliberation	 n. 仔细考虑；商量
flagpole	 n. 旗杆
invoke	 v. 恳求
hypersensitive	 adj. 过份敏感的
unavoidable	 adj. 不可避免的
lucky	 adj. 幸运的, 吉祥的
upcoming	 adj. 即将来临的
February	 n. 二月(略作Feb)
lug	 v. (用力)拖拉
broadly	 adv. 宽广地, 广泛
friendship	 n. 友谊, 友好
twain	 n. 两, 双, 二
pathogen	 n. [微生物]病菌, 病原体
memorable	 adj. 难忘的,重大的
auditory	 adj. 耳的, 听觉的
avant	 adj. 先锋的,激进的
tertiary	 adj. 第三的, 第三位的
submarine	 n. 潜水艇
locality	 n. 位置, 地点
questionable	 adj. 可疑的
Inuit	 n. 因纽特人,  因纽特语
alga	 n. 藻类,海藻
dialect	 n. 方言
respectively	 adv. 分别地, 各个地
absent	 adj. 缺席的；缺乏的
feldspar	 n. [矿]长石
biology	 n. (生物)学
fatal	 adj. 致命的，灾难性的
romanticism	 n. 浪漫精神, 浪漫主义
needlework	 n. 刺绣, 缝纫
palace	 n. 宫, 宫殿
ingenious	 adj. 设计独特的，巧妙的
framework	 n. 框架, 体系, 结构
imposition	 n. 强迫接受
meantime	 n&ad. 同时, 其间
caribou	 n. 北美产驯鹿(=Rangifer)
attentive	 adj. 注意的, 留意的
lifelong	 adj. 终生的
August	 n. 八月(略作Aug)
motionless	 adj. 不动的, 静止的
renewable	 adj. 可更新的, 可再生的
aural	 adj. 听觉的
amateur	 n. 业余爱好者
tangle	 v. (使)乱作一团 n混乱
onset	 n. 开始；攻击
flank	 n. 肋，侧边
ornamental	 adj. 装饰的  n装饰品
connective	 adj. 连合的, 连接的
meaningless	 adj. 无意义的
capitalist	 adj. 资本主义的 n资本家
estate	 n. 财产, 地产
cenotes	 n. 天然井
mesquite	 n. 豆科灌木
actively	 adv. 活跃地, 积极地
prison	 n. 监狱
whistle	 v. 吹口哨，鸣笛 n哨子
seedling	 n. 幼苗
lace	 n. 花边,系带 vt用系带束紧
constrict	 v. 压缩
electromagnetic	 adj. 电磁的
Virginian	 n. 弗吉尼亚州的人
dryness	 n. 干燥
locale	 n. 现场, 场所
rodeo	 n. 马术竞技表演会, 将牛、马驱集在一起
endurance	 n. 忍耐(力), 持久(力)
tribute	 n. 颂词，称赞
mussel	 n. [动]贻贝, 蚌类
cyan	 n. 蓝绿色, 青色
jungle	 n. (热带)丛林
clam	 n. 蛤
angry	 adj. 发怒的，生气的
usher	 v. 引，领，陪同
fusion	 n. 熔化,融合
scarcely	 adv. 几乎不, 简直没有
herald	 n. 使者 v. 预报, 标志
mismatch	 n&v. 配错, 不相匹配
stitch	 v. 缝, 缝合
suspicious	 adj. 可疑的,多疑的
monarch	 n. 君主
extol	 v. 赞美
squat	 v. 蹲(下)
rope	 n. 绳, 索
verse	 n. 诗(句)
spoon	 n. 匙，调羹
chaos	 n. 混乱，紊乱
prizefight	 n. 职业拳击赛
inactivity	 n. 不活动, 迟钝
confident	 adj. 自信的, 确信的
shipment	 n. 装船, 出货
unprotected	 adj. 无保护的, 未做防护措施的
spawn	 v. 产卵 n. 卵
lobe	 n. 耳垂，(肺，肝等的)叶
plummet	 n. 铅锤 vi垂直落下
biologically	 adv. 生物学地
firearm	 n. 火器,枪炮
communal	 adj. 公共的，集体的
kick	 v. 踢
boost	 v. 推进
linguist	 n. 语言学家
cortex	 n. 外皮, （大脑）皮层
objectively	 adv. 客观地
chilly	 adj. 寒冷的
artifact	 n. 人造物品
statesman	 n. 政治家
curator	 n. 管理者
tally	 n. 记分  vi符合
corporation	 n. 公司, 法人
expertise	 n. 专门知识(或技能等)，专长
coincide	 v. 一致, 符合
operator	 n. 操作员, 技工
originator	 n. 创始人, 发起人
pacifier	 n. 调停者，和解人
Indus	 n. 印度河（印度西北部的河流）
asymmetrical	 adj. 不对称的,不均匀的
lady	 n. 女士,夫人,小姐
quantifiable	 adj. 可以计量的, 可量化的
pul	 n. 普尔(阿富汗辅币单位)
temper	 n. 脾气,韧度 vt调和
humanness	 n. 为人,人性
companion	 n. 同伴, 共事者
slave	 n. 奴隶
pinniped	 adj. 鳍足类的
companionship	 n. 友谊
archaeocyte	 n. 原始(生殖)细胞
protective	 adj. 给予保护的, 保护的
incidental	 adj. 偶然的；附带的
intruder	 n. 入侵者
conjunction	 n. 联合, 关联
ornate	 adj. 华丽的, 装饰的
intentionally	 adv. 有意地,故意地
impractical	 adj. 不切实际的,不实用的
steal	 v. 偷, 窃取
rhetoric	 n. 雄辩言辞,修辞学
clump	 n. (树，草)丛 v. 使成一丛
immaturity	 n. 不成熟
understandable	 adj. 可理解的,能够懂的
register	 n& vt. 登记(表)，注册
offset	 v. 补偿，抵消
faculty	 n. 能力，院系，全体教员
divorce	 n&v. 离婚, 脱离
daytime	 n. 白天, 日间
dare	 v. 敢, 挑战
overcrowd	 v. 过度拥挤
marvelous	 adj. 令人惊异的, 非凡的
foolish	 adj. 愚蠢的，荒谬的
opportunistic	 adj. 机会主义的, 投机取巧的
brine	 n. 盐水
naive	 adj. 天真的
merchandise	 n. 商品, 货物
jade	 n. 玉，翡翠
lapis	 n. [化]天青石(常用于化学中的矿物命名)
breakthrough	 n. 突破
manager	 n. 经理, 管理人员
compositional	 adj. 合成的,组成的
youngster	 n. 年青人,  少年
ideologically	 adv. 意识形态上地, 思想上地
interpersonal	 adj. 人与人之间的, 人际关系的
Afghanistan	 n. 阿富汗(西南亚国家)
lazuli	 n. 天青石
electronically	 adv. 电子地, 通过电子手段
sewage	 n. 污水, 污物
authorize	 v. 批准
municipal	 adj. 市政的
imagery	 n. 意象, 肖像
refreeze	 vt. 再结冰, 重新冻结
hydrologic	 adj. 水文的
dietary	 adj. 饮食的 n. 规定的食物
hydropower	 n. 水力发出的电力
granule	 n. 小粒，微粒
further	 a&ad. 更远的,更进一步地
recreational	 adj. 娱乐的, 消遣的
insecure	 adj. 不安全的,不稳固的
dealing	 n. 行为, 交易
circumvent	 v. 绕行,设法避开
chunk	 n. 大块,相当大的部分（数量）
staff	 n. 全体职工，全体人员
achondrite	 n. 不含球粒陨石
asset	 n. 资产
navigable	 adj. 可航行的,可操纵的
flutter	 v. 振翼；飘动
pitch	 n. 球场,强度v扔,猛然倒下
multiplicity	 n. 多样性
figuratively	 adv. 比喻地
crime	 n. 犯罪
speaker	 n. 说话者, 演讲人
undermine	 v. 破坏
greener	 n. 生手
entrepreneurial	 adj. 企业家的,  企业性质的
foliage	 n. 树叶,植物
vice	 n. 缺点, 恶习
supreme	 adj. 最高的, 至上的
maximize	 v. 取最大值, 最佳化
bushman	 n. 丛林居民
grade	 n. 等级 v. 评分,分等级
marshy	 adj. 沼泽般的,湿软的
anxiety	 n. 忧虑, 焦急
retirement	 n. 退休
sympathetic	 adj. 同情的
manifestation	 n. 显示, 表现
excitement	 n. 刺激, 兴奋
porcupine	 n. [动]豪猪
amaze	 v. 使吃惊
barge	 n. 驳船 vi猛撞
keyboard	 n. 键盘
hook	 n. 钩 v. 钩住
experimentation	 n. 实验
percussion	 n. 碰撞, 打击乐器
plausible	 adj. 似真实合理的
crisscross	 v. 交叉, 来回移动 n. 十字形
blink	 v&n. 眨眼, 闪烁
rift	 n. 裂口 v. 裂开
radiator	 n. 暖气片，散热器
myriad	 adj. 无数的 n无数
clavichord	 n. 翼琴(钢琴的前身)
trilobite	 n. [古生]三叶虫
converter	 n. 转炉
layout	 n. 布局，安排
claw	 n. (脚)爪
repel	 v. 排斥,击退
sierra	 n. [地]齿状山脊, [鱼]马鲛
legitimate	 adj. 合法的
plus	 prep. 加上 a正的
octopus	 n. 章鱼
temporal	 adj. 现世的, 暂时的
unpredictability	 n. 不可预测性
minimalist	 n. 最低限要求者
magical	 adj. 魔术的, 神奇的
storefront	 n. 店头, 店面
makeshift	 adj. 临时的 n. 临时替代物
plight	 n. 困境
cactus	 n. [植]仙人掌
solemn	 adj. 庄严的,严肃的
reap	 v. 收割, 收获
improvise	 v. 即兴创作
ascend	 v. 攀登, 上升
showman	 n. 戏剧制作人, 玩杂耍的
summit	 n. 顶点, 最高阶层
appointment	 n. 约会, 指定
lawyer	 n. 律师
Alaskan	 n. 阿拉斯加人 a阿拉斯加的
constrain	 v. 强迫, 限制
exploitation	 n. 开发, 开采
doctrine	 n. 教条, 学说
immeasurably	 adv. 无法计量地, 无限地
ambition	 n. 野心, 雄心
perpetuate	 v. 使永存, 使不朽
afterlife	 n. 来世, 后来的岁月
bask	 v. 晒太阳
humanitarian	 n&a. 人道主义者(的)
shoemaker	 n. 鞋匠
prairies	 n. 大草原
handicraft	 n. 手工艺(品)
logically	 adv. 符合逻辑地, 逻辑上地
airstream	 n. 气流
whoever	 pron. 任何人, 无论谁
unsafe	 adj. 不安全的
flashbulb	 n. [摄]闪光灯泡
bovine	 adj. (似)牛的，迟钝的
thoughtful	 adj. 深思的
ignite	 v. 点火
icicle	 n. 冰柱
unbroken	 adj. 不间断的
funnel	 n. 漏斗,烟囱
fastidious	 adj. 过分讲究的, 挑剔的
overshadow	 v. 遮蔽, 使失色
hare	 n. 野兔
consult	 v. 商量, 商议
inhospitable	 adj. 不好客的,不适于居住的
artistically	 adv. 艺术地, 在艺术上
pigmentation	 n. 染色
quincy	 n. 昆西(美国伊利诺斯州西部一城市)
afternoon	 n. 午后
rumen	 n. 瘤胃(反刍动物的第一胃)
aristocracy	 n. 贵族（政治）
advise	 v. 劝告, 忠告, 警告, 建议
impair	 v. 损害,削弱
greedy	 adj. 贪婪的
broadleaf	 n. 阔叶烟草,阔叶树
pierce	 v. 刺穿
bluish	 adj. 带蓝色的
autobiographical	 adj. 自传的
Parisian	 n&a. 巴黎(人)(的)
halfway	 adj. 中途的ad半路地
instability	 n. 不稳定(性)
fabricate	 v. 编造, 虚构
ring	 n. 环 v. 包围
embrace	 v. 拥抱
corruption	 n. 腐化；贪污
postwar	 adj. 战后的
orange	 n. 橘子
license	 n. 许可证 vt许可
heel	 n. 脚后跟
whichever	 pron. 无论那一个, 任何一个
brant	 n. 黑雁
obsession	 n. 迷住, 困扰
scurry	 v. 疾行
subtropical	 adj. 亚热带的
comfort	 n. /v安慰
banana	 n. 香蕉
Vancouver	 n. 温哥华（城市名)
thorn	 n. [植]刺
megawatt	 n. 兆瓦特
cellar	 n. 地窖, 地下室
pain	 n. 痛苦 v. 使痛苦
arboreal	 adj. 树木的
multicellular	 adj. 多细胞的
hail	 n. 雹 v. 下雹,高呼
slop	 v. 溢出, 溅溢
spontaneously	 adv. 自发地
limner	 n. 素描者
elective	 adj. 选举的,随意选择的
devour	 v. 吞食,吞没
repertoire	 n. 全部节目
swimmer	 n. 游泳者
physically	 adv. 身体上地
eagerly	 adv. 热心地,急切地
protectionist	 n. 保护贸易论(者)
husbandry	 n. 管理
barely	 adv. 仅仅, 几乎不能
fortification	 n. 防御工事
ill	 adj. 有病的,坏的
vascular	 adj. 血管的,  脉管的
glassy	 adj. 象玻璃的
trunk	 n. 树干, 行李箱
tenth	 num. 第十, 十分之一
unavailable	 adj. 难以获得的
sulfuric	 adj. [化] 硫磺的,含硫的
latest	 adj. 最近的
redefine	 v. 重新定义
greenhouse	 n. 温室, 花房
instinctively	 adv. 本能地
universally	 adv. 普遍地
guard	 n. 警戒 v. 守卫
clearer	 adj. 更清楚的
matrix	 n. 矩阵
complaint	 n. 诉苦, 抱怨
graduation	 n. 毕业典礼
huddle	 n&v. 拥挤,挤作一团
bloom	 v. (使)开花,(使)繁盛
epitome	 n. 摘要
subspecies	 n. [生]亚种
scrap	 n. 碎片 v. 废弃
celebration	 n. 庆祝, 庆典
mist	 n. 薄雾
joy	 n. 欢乐, 喜悦
propel	 v. 推进, 驱使
chalk	 n. 粉笔
weaver	 n. 织布者
dropstone	 n. 滴石
unlimited	 adj. 无限的；过渡的
respondent	 n. 应答者, 被告
portrayal	 n. 描画, 描写
declare	 v. 宣布，声明
curtain	 n. 窗帘
hexagon	 n. 六角形, 六边形
poetic	 adj. 诗歌的
undisturbed	 adj. 未受干扰的
ascent	 n. 上升,提高
Talbot	 n. [动]塔尔博特提猎狗
query	 n&v. 质问,疑问
evoke	 v. 唤起, 引起
amass	 v. 积累，积聚
poll	 n. 民意测验, 投票
causal	 adj. 原因的
glide	 v&n. 滑行
metalworker	 n. 金工工人
sinuous	 adj. 蜿蜒的
floral	 adj. 花的,像花的
grasp	 v. 抓住,领会
incongruous	 adj. 不协调的,不一致的
overlook	 v&n. 俯瞰,忽视
adventurer	 n. 冒险家
personalize	 v. 个人化, 私人化
tenant	 n. 承租人, 房客
herbaceous	 adj. 草本植物的
sap	 n. 树液  vt耗尽
respective	 adj. 分别的, 各自的
primordial	 adj. 原始的,最初的
oversee	 v. 监督，监管
deity	 n. 神, 神性
phosphorus	 n. 磷
unearned	 adj. 不劳而获的
burrow	 n. 洞穴 v. 挖地洞
infrequent	 adj. 不频发的,不常见的
acclaim	 n&v. 喝采, 欢呼
peg	 n. 小钉 v. 钉，固定
translation	 n. 翻译, 译文
yarn	 n. 纱线 v. 讲故事
plasma	 n. 血浆
London	 n. 伦敦
originality	 n. 独创性
ford	 n. 浅滩 v徒涉
mortise	 n. 榫眼  v用榫接合
wander	 v. 漫步, 徘徊
mate	 n. 配偶, 对手
microbial	 adj. 微生物的,  由细菌引起的
intervene	 v. 干涉，干预
ironwork	 n. 铁制品
unearth	 v. 掘出
microbiologist	 n. 微生物学家
situate	 v. 位于，坐落在
mallet	 n. 槌棒
alcohol	 n. 酒精,酒
guncotton	 n. [军]强棉药
approval	 n. 赞同,批准, 认可
fathom	 n. 长度单位(6英尺)
accidental	 adj. 意外的，偶然(发生)的
disastrous	 adj. 灾难性的, 极糟的
execute	 v. 执行, 处决
supersonic	 n&a. 超声波(的)
exemplify	 v. 例证, 例示
sixth	 num. 第六, 六分之一
sex	 n. 性别,性
pantomime	 n. 哑剧
alligator	 n. 产于美洲的鳄鱼
continuum	 n. 连续统一体
transparent	 adj. 透明的, 显然的
conscious	 adj. 意识到的，自觉的
spherical	 adj. 球(面、状)的
retail	 n. ／v／ad零售
Japan	 n. 日本
microwave	 n. 微波(波长为1毫米至30厘米的高频电磁波)
adversely	 adv. 不利地,逆向地
indirectly	 adv. 间接地
domesticate	 v. 驯养, 教化
philosophical	 adj. 哲学的, 达观的
deceive	 v. 欺骗, 行骗
aesthetically	 adv. 有审美能力地
anthropology	 n. 人类学
functionalism	 n. 功能主义, 机能心理学
talent	 n. 天才,才能
continuation	 n. 继续(部分)；续篇
detach	 v. 拆卸,使分开
hydrodynamic	 adj. 水力的
shoreline	 n. 海岸线
sedge	 n. [植]莎草
disproportionate	 adj. 不成比例的
tanker	 n. 油轮
lament	 n. 悲伤v哀悼
systematically	 adv. 有系统地, 有条理地
curiosity	 n. 好奇心
ancestral	 adj. 祖先的
resume	 v. (中断后)继续 n摘要；简历
eligible	 adj. 有资格的, 合适的
absolutely	 adv. 完全地, 绝对地
senator	 n. 参议员
pig	 n. 猪
marvel	 n. 令人惊奇的事物(或人物)
afraid	 adj. 害怕的
estuary	 n. 河口, 江口
seismic	 adj. [地]地震的
radius	 n. 半径（范围）
withdrawal	 n. 收回, 撤退
ember	 n. 灰烬, 余烬
launch	 vt&n. 发射
sorghum	 n. [植]高粱属的植物
paleoecologist	 n. 古生态学家
primal	 adj. 最初的
regulatory	 adj. 管理的, 控制的
isotopic	 adj. 同位素的,合痕的
captain	 n. 首领, 船长
extension	 n. 延长, 扩充
ultimate	 adj. 最后的, 最终的n终极(限)
omit	 v. 省略,遗漏
applicable	 adj. 合适的, 适用的,
snowstorm	 n. 暴风雪
macdonald	 n. 麦当劳快餐店
locomotion	 n. 运动, 移动
persuasively	 adv. 有说服力的
livable	 adj. 适于居住的
pretty	 adj. 漂亮的, 可爱的
dime	 n. <美> 一角硬币
testify	 v. 证明, 证实
outlying	 adj. 远离中心的，偏僻的
dollar	 n. 元, 美元
lid	 n. 盖子,vt给盖盖子
privilege	 n. 特权，优惠
ethological	 n. 行为性的,  行为学的
disruption	 n. 分裂
subsistence	 n. 生存, 生活, 留存
notwithstanding	 prep. ／ ad尽管
autumn	 n. 秋天
clip	 n. 夹子 vt夹住
impetus	 n. 推动力, 促进
grower	 n. 种植者，栽培者
sophistication	 n. 老练, 精明
instructive	 adj. 有益的, 教育性的
manual	 adj. 手工的 n手册,指南
mundane	 adj. 平凡的, 世俗的
raindrop	 n. 雨滴, 雨点
appoint	 v. 任命, 委派
inflation	 n. 通货膨胀, 膨胀
sunflower	 n. [植]向日葵
doorway	 n. 门口
injure	 v. 伤害，损害
instigate	 v. 鼓动
spill	 v. (使)溢出 n溢出
January	 n. 一月(略作Jan)
gateway	 n. 入口；通道
rigorously	 adv. 严格地
roam	 v. 漫游, 闲逛
onrushing	 adj. 猛冲的
tricycle	 n. 三轮车
hydrological	 adj. 水文学的
foresee	 v. 预见, 预知
ignorance	 n. 无知
constitutional	 adj. 法治的；体质的
orogeny	 n. [地] 山岳之形成
accuse	 v. 控告, 谴责
administrator	 n. 管理人,行政官
trainer	 n. 训练者
temporarily	 adv. 临时
befit	 v. 适合
compost	 n. 混合肥料
collaborator	 n. 合作者
lodge	 v. (让)暂住 n乡间小屋，旅舍
endow	 v. 捐赠, 赋予
patience	 n. 耐性, 忍耐
residency	 n. 居住, 住所
cosmopolitan	 adj. 全球的,四海为家的 n世界主义者
shower	 n. 阵雨, 淋浴
collaborative	 adj. 合作的, 协作的
westerner	 n. 美国之西部的人
refrigerate	 v. 使冷冻, 使冷藏
clergy	 n. 圣职者, 牧师
brewster	 n. 酿造者
rage	 n. 愤怒
execution	 n. 处决, 执行
tough	 adj. 坚韧的，强硬的，困难的
skirt	 n. 裙子
lithograph	 n. 石版画, 平版印刷
cling	 v. 紧贴, 附着
yew	 n. 紫杉, 紫杉木
wholesale	 n. 批发 adj. 大规模的
cart	 n. 大车，手推车
adrift	 a&ad. 漂流的,漫无目的
mystical	 adj. 神秘的
coerce	 v. 强制
crash	 v. 碰撞，撞击
eccentricity	 n. 反常，怪癖
distasteful	 adj. 味道差的,反感的
tragedy	 n. 悲剧, 惨案
lantern	 n. 灯笼，提灯
diagram	 n. 图表
spell	 v. 拼写
durability	 n. 经久, 耐久力
stark	 adj. 荒凉的；严酷的 adv. 完全
code	 n. 代码 vt把…编码
revere	 v. 尊敬,敬畏
crush	 vt&n. 压碎
goose	 n. 鹅
tabulate	 v. 把制成表格
please	 adv. 请 v使高兴
uniquely	 adv. adv独特地, 唯一地
birch	 n. 桦树, 白桦
adaptability	 n. 适应性
caledonian	 n&a. 苏格兰人(的)
strive	 v. 努力, 奋斗
qualitative	 adj. 性质上的, 定性的
gram	 n. 克
prohibitive	 adj. 禁止的, 抑制的
prospector	 n. 探勘者, 采矿者
contradiction	 n. 反驳, 矛盾
auditorium	 n. 听众席,观众席,
remark	 n. 备注,评论 vt评论
rote	 n. 死记硬背
battleship	 n. 战舰
regime	 n. 政权制度,政权
skepticism	 n. 怀疑论
economist	 n. 经济学者
commandment	 n. 戒律
glimpse	 n. 一瞥v瞥见
preferable	 adj. 更好的,更合意的
delineate	 v. 描绘
rugged	 adj. 高低不平的, 崎岖的
referent	 n. 指示物
inadequacy	 n. 不充分
Gypsy	 n&a. 吉普赛人(的),吉普赛语（的）
outwash	 n. [地质]冰水沉积
crumble	 v. 弄碎,崩溃
dissatisfaction	 n. 不满
knap	 v. 敲击
basaltic	 adj. 玄武岩的
plateau	 n. 高地, 高原
carbonic	 adj. (含)碳的
lengthy	 adj. 冗长的
intersect	 v. 贯穿, 交叉
masterpiece	 n. 杰作, 名著
Yale	 n. 耶鲁
redwood	 n. [植]红杉
connoisseur	 n. 鉴赏家
accessory	 n. 附件 adj. 辅助的
seriousness	 n. 严肃, 认真
finely	 adv. 细微地,美好地
preferentially	 adj. 优先的, 优待的
acquisition	 n. 获得(物)
march	 n&v. 行军
lane	 n. 小路, 小巷
sterile	 adj. 贫脊的,不结果的
seaweed	 n. 海草, 海藻
preschool	 adj. 未满学龄的n幼儿园
smelt	 v. 熔解，熔炼
streambed	 n. 河床
hint	 n. 暗示,  线索
rally	 n. 集会 v集合
luckily	 adv. 幸运地
drawback	 n. 缺点,障碍
successional	 adj. 接连著的, 连续性的
drake	 n. 公鸭, 蜉蝣类
salinization	 n. 盐渍化
shrinkage	 n. 收缩
detachment	 n. 冷漠, 脱离
oblige	 v. 迫使；施恩于
gully	 n. 小峡谷, 排水沟
inconclusive	 adj. 非决定性的,不确定的
innovator	 n. 改革者, 革新者
pulverization	 n. 弄成粉, 粉碎
homemaking	 n. 家政
rebuild	 v. 重建, 改造
intestine	 adj. 内部的,国内的
tavern	 n. 酒馆, 客栈
uncompetitive	 adj. 非竞争性的
tenfold	 adj. 十倍的 ad成十倍
panic	 n. 恐(惊)慌 v(使)恐慌
aircraft	 n. 航行器
desiccation	 n. 干燥
chimney	 n. 烟囱, 灯罩
shin	 n. 胫骨
mandarin	 n. 官话,普通话
conceive	 v. 构想，设想
guilde	 n. 行会, 协会
earn	 v. 赚得
Iroquois	 n. 易洛魁族人
pen	 n. 钢笔 v. 写
quietly	 adv. 平静地,寂静地
ectotherm	 n. [动] 冷血动物,变温动物
miner	 n. 矿工
vas	 n. 血管, 脉管
aqueduct	 n. 沟渠,导水管
triple	 n. 三倍数, 三个一组
meanwhile	 adv. 其间
ravage	 n&v. 毁坏
befriend	 v. 待人如友,帮助
adaptable	 adj. 能适应的,适应性强的
converge	 v. 聚合, 集中
fortune	 n. 财富, 运气
phosphorescence	 n. 磷光
endeavor	 n&v. 尽力, 努力
supervisor	 n. 管理人；监督人
Portugal	 n. 葡萄牙(欧洲西南部国家)
safely	 adv. 安全地, 确实地
invisibly	 adv. 看不见地, 看不出地
visibility	 n. 可见度
generalize	 v. 归纳, 概括
levy	 v. 征收(税等) n征税
rye	 n. 裸麦
unpopular	 adj. 不流行的, 不受欢迎的
holocene	 n&a. [地]全新世(的)
titanium	 n. [化]钛
linear	 adj. 线的, 直线的
tang	 v. 有浓味 n特殊气味
thesis	 n. 论题, 论文
astronaut	 n. 宇航员
reuse	 v. 再使用 n重新使用
antagonism	 n. 对抗(状态), 对抗性
rehabilitation	 n. 复原
canoe	 n. 独木舟
dramatize	 v. 编写剧本
leisurely	 adj. 从容地，慢慢地
Minneapolis	 n. 明尼苏达[美国州名]
apple	 n. 苹果
Ontario	 n. 安大略湖[北美洲]
June	 n. 六月(略作Jun)
quote	 v. 引用, 引证
delft	 n. 代夫特(荷兰城市)陶器
beef	 n. 牛肉
unobtainable	 adj. 无法得到的,难获得的
utterly	 adv. 完全地,绝对地
reddish	 adj. 微红的
rejection	 n. 拒绝
outweigh	 v. 在重量(或价值等)上超过
chariot	 n. 战车
communicative	 adj. 健谈的,交流的
conversely	 adv. 倒地,逆地
instrumentalist	 n. 乐器演奏家
racial	 adj. 人种的, 种族的
Arab	 n&a. 阿拉伯人(的)
loom	 n. 织布机 vi迫近
platelet	 n. [解] 血小板
ambient	 adj. 周围的 n周围环境
accrete	 v. 共生, 附着, 增加
bubbly	 adj. 多泡的
metalwork	 n. 金属制品
resent	 v. 愤恨, 怨恨
correlation	 n. 相互关系
devotion	 n. 献身, 热爱
useless	 adj. 无用的, 无效的
keen	 adj. 锋利的
bulldozer	 n. 推土机
politically	 adv. 政治上地
centigrade	 adj. 摄氏的
alchemist	 n. 炼金术士
optimum	 n&a. 最适宜(的)
mechanic	 n. 技工
blame	 n&vt. 责备
presently	 adv. 目前, 不久
reelect	 v. 重选, 改选
warehouse	 n. 仓库，货栈
ensue	 v. 接着发生，接踵而来
cherry	 n. 樱桃
historic	 adj. 有历史意义的, 历史的
monster	 n. 怪物
tapeworm	 n. [动]绦虫
languish	 v. 憔悴, 凋萎
mythology	 n. 神话
lateness	 n. 迟, 晚
amid	 prep. 在中
mythological	 adj. 神话(学)的
prototype	 n. 原型
newcomer	 n. 新来的人；移民
holiday	 n. 假日
gravitas	 n. 庄严(举止)
foresightedness	 n. 先见之明
prerecord	 v. 事先录音
brittle	 adj. 易碎的, 脆弱的
dispense	 v. 分发, 分配
inedible	 adj. 不能吃的，不宜食用的
lure	 v. 引诱
swiftly	 adv. 很快地, 即刻
risky	 adj. 危险的
gibbon	 n. 长臂猿
raccoon	 n. <美>[动]浣熊
peep	 n&vi. 窥视, 偷看
arousal	 n. 觉醒, 激励
neurotransmitter	 n. [生化]神经传递素
avalanche	 n. 雪崩
skyrocket	 n. 冲天火箭（烟火）
skate	 n. 冰鞋 vi溜冰
ibex	 n. 野生山羊
monkey	 n. 猴子
cessation	 n. 停止
shovel	 n. 铲,挖斗机
eccentric	 adj. 古怪的 n. 怪人
steamer	 n. 汽船, 蒸汽机
sentimental	 adj. 感伤的；多愁善感的
iridescent	 adj. 闪光的，现晕光的
eocene	 n&a. 始新世(的)
cushion	 n. 垫子
bowel	 n. 肠
technician	 n. 技术员, 技师
maybe	 adv. 大概, 或许
snowdrift	 n. 雪堆
seventy	 num. 七十
cleaner	 n. 清洁工人, 清洁器
accordion	 n. 手风琴
manure	 n. 肥料
clover	 n. [植]三叶草
heater	 n. 加热器
circumference	 n. 圆周, 周围
treatment	 n. 待遇, 对待
sanitation	 n. 卫生(设施)
entertainer	 n. 款待者, 表演娱乐节目的人
scrape	 v&n. 刮，擦
violently	 adv. 猛烈地, 激烈地
masonry	 n. 石工术, 石匠职业
flexibility	 n. 灵活性, 弹性
obstruct	 v. 阻塞，堵塞
mediocre	 adj. 平庸的
tributary	 a&n. 支流(的)，进贡(的)
choosy	 adj. 好挑剔的
distinguishable	 adj. 可区别的, 可辨别的
commute	 v. 通勤, 折换 n. 乘车上下班
absenteeism	 n. 旷课, 旷工
pointillist	 n. 点彩派画家
crudely	 adv. 粗糙地, 粗鲁地
ride	 v. 骑, 乘
epistle	 n. 书信
endotherms	 n. 温血动物, 恒温动物
disseminate	 v. 散布，传播
berg	 n. 冰山
corpus	 n. 资料, 文集
unchangeable	 adj. 不变的,不能改变的
patriot	 n. 爱国者
gel	 n. 凝胶体 v成冻胶
ignorant	 adj. 无知的
illusory	 adj. 虚幻的
sparsely	 adv. 稀疏地
methyl	 n. 甲基, 木精
worshipper	 n. 礼拜者
saturday	 n. 星期六
watercourses	 n. 水流, 河道
luxurious	 adj. 奢侈的, 豪华的
receptacle	 n. 容器
motorcycle	 n. 摩托车, 机车
recreation	 n. 消遣, 娱乐
vest	 n. 汗衫 vt使穿衣服, 授予
chemurgy	 n. [化]农业化工,实用化学
imitator	 n. 模仿者
edifice	 n. 大厦, 大建筑物
wary	 adj. 机警的
surmise	 v. 猜测
disdain	 n. 轻蔑 v蔑视
poisonous	 adj. 有毒的, 恶意的
anti	 n. 反对者 a反对的
continuator	 n. 继续者
grid	 n. 格子, 栅格
predispose	 v. (使)易罹患, (使)预先偏向于
aviator	 n. 飞行员
preposterous	 adj. 荒谬的, 可笑的
subtlety	 n. 微妙, 精明
suburb	 n. 市郊, 郊区
streetcar	 n. 路面电车
oscillate	 v. 振荡
aptly	 adv. 适当地,适宜地
underfoot	 adv. 在脚下面, 踩着地
ox	 n. 牛, 公牛
developer	 n. 开发者
worry	 n&v. 烦恼, 忧虑
gourd	 n. 葫芦
landowner	 n. 土地所有者
crossing	 n. 交叉口
pane	 n. 窗格玻璃；长方块
undisputed	 adj. 无可置辩的
maneuver	 n. 策略[ pl]演习 v(巧妙)控制；用策略
predictability	 n. 可预见性
celsius	 adj. 摄氏的
uncomfortable	 adj. 不舒服的，不自在的
revitalization	 n. 新生 复兴
redbud	 n. 紫荆属植物
bullrush	 n. 芦苇
speculator	 n. 投机者
homesteader	 n. 农场所有权人, 自耕农
valve	 n. 阀,活门
inaccessible	 adj. 难接近的, 难达到的
draft	 n. 草稿 v. 草拟
qualify	 v. (使)胜任,(使)合格
nodule	 n. 节结
skillfully	 adv. 巧妙地,技术好地
competence	 n. 能力
dormancy	 n. 休眠
supposedly	 adv. 推测地, 大概
basketry	 n. 篓编织品
bark	 n. 吠声
amuse	 v. 使发笑,使愉快
legal	 adj. 法律的,合法的
eukaryotic	 adj. 真核状态的
emulsion	 n. 乳状液
shake	 n&  v. 摇动，颤抖
condensation	 n. 浓缩
rebound	 n. /v回弹
indefinite	 adj. 不明确的，含糊的
insignificant	 adj. 无关紧要的,  可忽略的
handmade	 adj. 手工的
Iceland	 n. 冰岛(欧洲岛名,在大西洋北部,近北极圈)
incandescent	 adj. 遇热发光的, 白炽的
implicitly	 adv. 含蓄地,  暗中地
rob	 v. 抢夺
fanciful	 adj. 想像的, 奇怪的
fixture	 n. 固定物(装置)
battery	 n. 电池
deprecate	 v. 抨击, 反对
infusion	 n. 灌输
carriage	 n. 马车, 客车
worsen	 v. 恶化
portraitist	 n. 肖像画家
rhythmical	 adj. 节奏的, 合拍的
exploratory	 adj. 勘探的, 探索的
coconut	 n. 椰子
infancy	 n. 幼年
visualize	 v. 想象，设想
credence	 n. 信任
encase	 v. 装入, 包住
bemoan	 v. 哀叹
maroon	 n. 栗色 a栗色的
legally	 adv. 法律上, 合法地
inspection	 n. 检查, 视察
immunity	 n. 免疫性
tariff	 n. 关税
restriction	 n. 限制, 约束
asthenosphere	 n. 岩流圈
violet	 n. 紫罗兰 a紫色的
periphery	 n. 外围
insure	 v. 给保险,确保
insult	 n&vt. 侮辱, 辱骂
supercontinent	 n. [地]超大陆
notorious	 adj. 臭名昭著的
idiom	 n. 成语, 方言
psychology	 n. 心理学
discrete	 adj. 不连续的, 离散的
hieroglyphic	 n. 象形文字
hurricane	 n. 飓风, 狂风
condenser	 n. 冷凝器, 电容器
bilingual	 adj. 能说两种语言的
abolish	 v. 废止, 废除
entitle	 v. 给权利(或资格), 给题名
streptomycin	 n. 链霉素
innermost	 adj. 最里面的, 内心的
sting	 n&v. 刺, 刺痛
jellyfish	 n. 水母
stagnant	 adj. 停滞的；萧条的
afar	 adv. 遥远地
epic	 n. 史诗, 伟大事迹
circumscribe	 v. 在…周围画线；限制
inactive	 adj. 不活动的, 怠惰的
DNA	 abbr. [生化]脱氧核糖核酸(=deoxyribonucleic acid)
alkaloid	 n. [化]生物碱
televise	 v. 广播, 播映
stump	 n. 树桩;残余部分 v. 笨重地走,使为难
reciprocate	 v. 互换,  交换
discourse	 n&v. 谈话, 演讲
labellum	 n. （兰花的） 唇瓣
fishery	 n. 渔业, 水产业
necrosis	 n. 坏死
eastward	 adj. 向东的 adv. 向东
stag	 n. 牡鹿vi不带女伴参加晚会
encroach	 v. 侵占,侵犯
rotary	 adj. 旋转的
syllable	 n. 音节
sequoia	 n. [植] 美洲杉
humor	 n. 幽默, 诙谐
tempera	 n. 蛋彩画
dogwood	 n. 山茱萸
Switzerland	 n. 瑞士(欧洲中部国家)
immigrate	 v. 移入
plank	 n. 厚木板(条)
lighten	 v. 减轻,点亮
cripple	 n. 跛子 v削弱
brand	 n. 商标, 牌子, 烙印
notoriously	 adv. 臭名昭著地, 众所周知地
naked	 adj. 裸体的, 无遮盖的
plutonic	 adj. 火成岩的
aggravate	 v. 使恶化, 加重
neutralize	 v. 压制
memorial	 n. 纪念物, 纪念馆
condor	 n. [动]秃鹰, 秃鹫
disappointment	 n. 失望
sprout	 v. 萌芽 n苗芽
badly	 adv. 严重地, 恶劣地
corpse	 n. 尸体
sake	 n. 缘故，理由
attainment	 n. 达到
careless	 adj. 粗心的, 疏忽的
progression	 n. 行进, 级数
cable	 n. 缆绳；电缆
oceanographer	 n. 海洋学者, 海洋研究者
legitimately	 adv. 正当地, 合理地
estuarine	 adj. 入海的, 在入海口形成的
cup	 n. 杯子
speciality	 n. 特性, 特质
waterfront	 n. 水边地码头区, 滨水地区
carboniferous	 n. 石炭层
believable	 adj. 可信的
regularize	 v. 使有规则, 使有秩序
casual	 adj. 偶然的, 不经意的
skeletal	 adj. 骨骼的, 梗概的
landmark	 n. (航海)陆标, 地界标
hinder	 v. 阻碍, 打扰
elemental	 adj. 元素的,自然力的
serpentine	 adj. 蜿蜒的
bog	 n. 沼泽
reside	 v. 居住
toe	 n. 趾, 脚趾
tentatively	 adv. 试验性地,犹豫不决地
brightness	 n. 光亮, 明亮
regeneration	 n. 再生, 重建
contour	 n. 轮廓
kiwi	 n. [鸟]几维(一种新西兰产的无翼鸟)
hummingbird	 n. 蜂雀
ridiculous	 adj. 荒谬的, 可笑的
resolution	 n. 决心,决议
unsuitable	 adj. 不适宜的, 不合适的
hydroponic	 adj. 溶液培养的
currier	 n. 制革匠
Semitic	 n. /a闪族人(语) (的)
randomly	 adv. 随便地,任意地
intergalactic	 adj. 银河间的, 星际间的
diffuses	 v. 扩散,弥漫
synonymous	 adj. 同义的
arrow	 n. 箭, 箭头记号
discoloration	 n. 变色, 污点
laborious	 adj. 艰苦的, 费劲的
backdrop	 n. 背景幕, 背景
refractory	 adj. 难控制的,耐火的
soilless	 adj. 不用泥土(培植)的
tight	 adj. 紧的
chest	 n. 胸腔，橱
nebular	 adj. [天]星云的
mint	 n. 薄荷
chair	 n. 椅子,主席 vt担任主席
merit	 n. 优点，功绩 v. 值得
specially	 adv. 专门地；特别地
someday	 adv. 有朝一日
journalism	 n. 新闻业；新闻工作
circuit	 n. 电路,巡回
complementary	 adj. 补充的, 补足的
nectar	 n. [希神] 神酒, 任何美味的饮料, 花蜜
package	 n. 包裹, 包 v. 打包
USA	 abbr. 美国(美利坚合众国)
adornment	 n. 装饰, 装饰品
photo	 n. 照片
imperative	 n. 命令,祈使语气 adj. 命令的,强制的
lesley	 n. 莱斯利（女子名）
ppm	 abbr. 百万分率，百万分之…（parts per million）
purification	 n. 净化
assortment	 n. 分类,混合物
saving	 n. 存款 adj. 搭救的, 节约的
astound	 v. 使惊骇, 使大吃一惊
ID	 abbr. 身份 (identification, identity) n. 遗传素质
germinate	 v. 发芽,使生长
nitric	 adj. [化]氮的, 含氮的
luncheon	 n. 午宴, 正式的午餐
viscosity	 n. 粘质, 粘性
intrude	 v. 侵入,强挤入
dating	 n. 约会 v. 约会
muddy	 adj. 多泥的, 泥泞的
hive	 n. 蜂房 v. (使)入蜂箱, 群居
incomprehensible	 adj. 费解的,不可思议的
evidently	 adv. 显然,清楚地
label	 n. 标签,商标 v. 贴标签于
symmetrical	 adj. 匀称的，对称的
lily	 n. 百合,百合花 adj. 纯洁的
theropod	 adj. 兽性的，野兽般的
supporter	 n. 支持者, 赡养者
precarious	 adj. 危险的,不确定的
wispy	 adj. 纤细的, 脆弱的
artificially	 adv. 人工地,不自然地
exempt	 v. 免除 adj. 被免除的
vacancy	 n. 空白, 空缺
rehabilitate	 v. 修复, 改造
persuade	 v. 说服, 劝说, (使)相信
sunset	 n. 日落, 晚年
intoxication	 n. 陶醉,中毒
genuine	 adj. 真实的, 真正的, 诚恳的
whereby	 adv. 凭什么, 为何
auger	 n. 螺丝钻 vt. 用钻子钻洞于
alteration	 n. 变更, 改造
longtime	 adj. (已持续)长时间的 adv. 长久地
customary	 adj. 习惯的, 惯例的
validate	 v. [律]使有效, 使生效
sulfide	 n. <美>[化]硫化物
sensibility	 n. 敏感性,识别力
ether	 n. 天空醚, 大气
tenon	 n. [木工]榫 vt. 接榫, 造榫
whittle	 v. 切, 削 n. 屠刀
supersede	 v. 代替, 取代
dehydrate	 v. (使)脱水
amino	 adj. 氨基的 n. [化学] 氨基
subjective	 adj. 主观的, 个人的
milky	 adj. 牛奶的,乳白色的
fertilization	 n. 肥沃, 施肥, 授精
celestial	 adj. 天上的 n. 神仙
appreciable	 adj. 可感知的,相当可观的
eject	 v. 逐出,喷射
victory	 n. 胜利,[罗神]胜利女神
tent	 n. 帐篷
petrifaction	 n. 石化, 化石
regolith	 n. [地质]风化层, 土被
marrow	 n. 精华, 活力
rim	 n. 边, 轮缘 v. 镶边
ptarmigan	 n. 松鸡类
hydroxyapatite	 n. [矿]羟磷灰石
percolate	 n. 滤过之液体,滤液 v. 过滤
stun	 v. 使晕倒,打晕 n. 打昏,惊倒
rapidity	 n. 速度,迅速,急速
mudflats	 n. 泥滩
mineralize	 v. 使矿物化,采集矿物
calcareous	 adj. 钙质的,石灰质的
tailor	 n. 裁缝 v. 剪裁, 缝制
eyebrow	 n. 眉毛
bedcover	 n. 被面
pillow	 n. 枕头, 枕垫 v. 枕着
heal	 v. 治愈, 医治
vaguely	 adv. 含糊地, 暧昧地
hundredfold	 adj. 百倍的 n. 百倍, 百重
agriculturally	 adv. 农业上
pinhead	 n. 针头, 小东西
immersion	 n. 沉浸,专心
founding	 adj. 创办的 n. 资金
indispensable	 n. 不可缺少之物 adj. 不可缺少的
nail	 n. 指甲,钉子 v. 将钉牢
entertain	 v. 娱乐,招待
scuba	 n. 水中呼吸器
frustrate	 v. 挫败, 阻挠 n. 挫败的
sunlit	 adj. 被日光照射了的, 阳光照射的
unsatisfactory	 adj. 不令人满意的,不满足的
separately	 adv. 分别地,分离地
collectible	 adj. 可收集的, 可代收的
mercury	 n. 水银, 汞
rider	 n. 骑手, 附文, 扶手
opera	 n. 歌剧
orchestral	 adj. 管弦乐的,管弦乐队的
landslide	 n. [地]山崩, 滑坡
counteract	 v. 抵消, 中和, 阻碍
stature	 n. 身高,(精神、道德等的)高度
relaxation	 n. 松弛, 放宽
remediation	 n. 补习,补救
unincorporated	 n. 未联合的,未合并的
profile	 n. 侧面,轮廓
spurge	 n. [植]大戟
corner	 n. 角落, (街道)拐角处 v. 迫至一隅,把难住
calotype	 n. 光力照像法
fringe	 n. 边缘, 须边 adj. 边缘的
molasses	 n. <美>糖蜜
torque	 n. 扭矩, 转矩
battlefield	 n. 战场, 沙场
dish	 n. 盘, 碟 v. 把…装盘
needlefish	 n. [动] 颌针鱼(一种长嘴便鳞之海鱼)
discriminate	 v. 歧视,区别待遇
fireball	 n. 火球, 大流星
improvisation	 n. 即席创作
recommendation	 n. 推荐, 介绍(信)
meteor	 n. 流星, 大气现象
comprehensible	 adj. 可理解的
etch	 v. 蚀刻
my	 pron. 我的
hay	 n. 干草
hale	 adj. 强壮的 v. 硬拖
instantly	 adv. 立即地, 即刻地
ingoing	 adj. 进入的 n. 进入,迁就
realistically	 adv. 现实地,逼真地
artistry	 n. 艺术之性质
knowledgeable	 adj. 知识渊博的, 有见识的
cannon	 n. 大炮, 加农炮 v. 炮轰
recede	 v. 后退
organically	 adv. 器官上地, 有机地
unintentionally	 adv. 无意地,非故意地
geomagnetic	 adj. 地磁的,地磁气的
magnetize	 v. 使磁化, 吸引
recess	 n. (墙壁等的)凹进处 v. 使凹进,休假
bonito	 n. 鲣
hatchling	 n. 人工孵化的鱼苗或小鸟
specialist	 n. 专门医师, 专家
vocal	 adj. 声音的,有声的 n. 元音
hilly	 adj. 多小山的, 多坡的
elongate	 v. 拉长, (使)伸长 adj. 伸长的
linoleum	 n. 油布, 油毯
armor	 n. 装甲 v. 为…装甲
customarily	 adv. 通常,习惯上
comprehensive	 adj. 全面的,能充分理解的
franklin	 n. 小地主, 乡绅
morally	 adv. 道德上
lathe	 n. 车床 vt. 用车床加工
inherent	 adj. 固有的,与生俱来的
grand	 adj. 盛大的,极重要的
inconspicuous	 adj. 不显眼的,不引人注意的
integrity	 n. 正直, 诚实, 完整
enroll	 v. 登记, 招收, 参加
utterance	 n. 意见, 说话, 发表
treasury	 n. 财政部, 国库
apparatus	 n. 器械, 设备, 仪器
heartbeat	 n. 心跳
mast	 n. 桅,桅杆 vt. 装桅杆于
unify	 v. 统一,使成一体
scat	 v. 迅速走开 n. 爵士音乐中无意义的音节的演唱
unexplored	 adj. [地质] 未勘查过的
playground	 n. 运动场, 操场
upland	 n. 丘陵地, 高地 adj. 高地的,山地的
woodpecker	 n. [鸟]啄木鸟
friendliness	 n. 友谊,友善
sympathy	 n. 同情, 同情心
wingspan	 n. [空]翼展
counter	 n. 计算器,柜台 ad&prep. 相反地
campus	 n. <美>校园,大学教育
flicker	 n&v. 闪烁,摇曳
approve	 v. 赞成, 批准
anvil	 n. [解]砧骨
proximity	 n. 接近, 亲近
excellence	 n. 优秀, 卓越
loggerhead	 n. 傻子,铁球棒
pertain	 v. 适合, 属于
demonstration	 n. 示范, 实证
dike	 n. 堤防 v. 筑堤提防
ineffective	 adj. 无效的, (指人)工作效率低的
explosive	 adj. 爆炸(性)的,暴露 n. 爆炸物
rooftop	 n. 屋顶 adj. 屋顶上的
interplanetary	 adj. 太阳系内的,行星间的
actor	 n. 男演员,行动者
lovely	 adj. 可爱的,有趣的
caput	 n. 头, 首
receptiveness	 n. 感受性,接受能力
punish	 v. 惩罚,处罚
animate	 v. 鼓舞 adj. 生气勃勃的
militaristic	 adj. 军国主义的
acreage	 n. 英亩数, 面积
impersonation	 n. 扮演
reabsorb	 v. 再吸附,重吸收
interference	 n. 冲突, 干涉
overturn	 n. 倾覆, 破灭 v. 推翻, 颠倒
duke	 n. 公爵
squarely	 adv. 方形地, 直角地
Henderson	 n. 亨德森（姓氏）
pronoun	 n. 代名词
prisoner	 adj. 囚犯的 n. 战俘
October	 n. 十月(略作Oct)
rawhide	 n. 生牛皮 vt. 用生牛皮鞭抽打 adj. 生牛皮的
nonagricultural	 adj. 非农业的
dale	 n. 宽谷, 溪谷
devastation	 n. 毁坏,荒废
fletcher	 n. <古>造箭者,弗莱彻
paradoxically	 adv. 相矛盾地,似非而是地
credible	 adj. 可信的,可靠的
flute	 n. 长笛 v. 吹长笛,刻槽
automate	 v. 使自动化, 自动操作
pedagogy	 n. 教学, 教授
pregnant	 adj. 怀孕的, 重要的
trait	 n. 显著的特点, 特性
autonomy	 n. 自治
exuberant	 adj. 繁茂的,生气勃勃的
option	 n. 选项, 选择权
reaper	 n. 收割者, 收割机
anxiously	 adv. 忧虑地, 不安地
elephant	 n. 象
plague	 n. 瘟疫,麻烦 v. 折磨, 使苦恼
bellow	 v. 怒吼, 咆哮
unreal	 adj. 不真实的, 虚幻的
fond	 adj. 喜欢的,温柔的
toad	 n. [动]蟾蜍
heave	 v. 举起 n. 举起,投掷
parade	 n. 游行,炫耀 v. 游行,炫耀
receptive	 adj. 善于接受的,能容纳的
scope	 n. (活动)范围
unplanned	 adj. 意外的,在计划外的
longevity	 n. 长命, 寿命
submit	 v. (使)服从,递交
nomad	 n. 游牧部落的人,流浪者 adj. 游牧的
Mongolia	 n. 蒙古
clarity	 n. 清楚,透明
sexually	 adv. 性别地,两性之间地
lifeway	 n. 生活方式, 生活
facade	 n. 正面
torrid	 adj. 晒热的,热情的
kindergarten	 n. 幼儿园 adj. 幼儿园的,启蒙阶段的
neuron	 n. [解]神经细胞,神经元
transmission	 n. 播送, 发射
eukaryote	 n. 〈生〉真核细胞
commensal	 adj. 共餐的 n. 共食伙伴, 共生物
living	 n. 生活,生计 adj. 活的,逼真的
inadvertently	 adv. 非故意地,不注意地
volt	 n. (马术中的)环骑,[电工]伏特
roadbed	 n. 路基
encompass	 v. 包围,环绕
outnumber	 v. 数目超过, 比多
scar	 n. 伤痕,疤痕 v. 结疤,使留下伤痕
metabolize	 v. 产生代谢变化
administer	 v. 管理, 给予, 执行
fasten	 v. 扎牢,扣住
diversify	 v. 使多样化, 作多样性的投资
grumble	 adj. 嘟囔地说 n. 怨言 v. 发牢骚
degradation	 n. 降级, 降格, 退化
neurospora	 n. [微]脉孢菌
subsidy	 n. 补助金,津贴
commonsense	 adj. 常识的,具有常识的
destination	 n. 目的地
yellowstone	 n. 黄石国家公园, 黄石河
mosquito	 n. 蚊子
paucity	 n. 极小量
infect	 v. [医] 传染, 感染
burin	 n. 冰凿,雕刻刀
walrus	 n. [动]海象, 海象胡须
deserve	 v. 应受, 值得
incubator	 n. 培养的器具, 孵卵器
poorhouse	 n. 救济院
subsidize	 v. 资助,津贴
excitation	 n. 刺激,兴奋, 激动
amniotic	 adj. [昆] 羊膜的
porpoise	 n. [动]海豚, 小鲸
spew	 v. 喷涌,呕吐
emanate	 v. 散发,发出
noxious	 adj. 有害的
deviate	 v. 偏离,偏轨
shun	 v. 避开,避免
individually	 adv. 个别地,单独地
aggregation	 n. 集合,集合体
erectus	 adj. [拉丁语]直立的
sleepiness	 n. 想睡,瞌睡
oneness	 n. 单一,  统一
remainder	 n. 残余, 剩余物 adj. 剩余的
passive	 adj. 被动的,消极的
excrete	 v. 排泄, 分泌
namely	 adv. 即,也就是
infection	 n. 传染病, 影响,
piling	 n. 打桩, 打桩工程
button	 n. 钮扣 v. 扣住,扣紧
workforce	 n. 劳动力,职工总数
analyst	 n. 分析家, 分解者
gradient	 adj. 倾斜的 n. 梯度,坡度
brace	 n. 支柱 v. 支住,撑牢
quest	 n. 寻求 v. 追求,探索
regulator	 n. 调整者,调整器
toolmaking	 n. 工具(或刀具)制造,机床维修
essay	 n. 散文
morphology	 n. [生物]形态学, [语法]词法
hiccup	 n. 打嗝 v. 打嗝
sow	 n. 大母猪 v. 播种,散布
platypus	 n. [动]鸭嘴兽
nurse	 n. 护士,保姆 v. 护理,照料
damp	 n. 湿气 adj. 潮湿的 v. 使潮湿,阻尼
halite	 n. [化]岩盐
subsist	 v. 生存, 存在, 供养
straighten	 v. (使)弄直, 伸直
July	 n. 七月(略作Jul)
lump	 n. 肿块,笨人 v. 使成块状
balloon	 n. 气球 v. 膨胀
meteorologist	 n. 气象学者
rust	 n. 铁锈 v. (使)生锈,锈蚀
undeveloped	 adj. 不发达的, 未开发的
conestoga	 n. 一种大篷马车
unexpectedly	 adv. 出乎意料地,意外地
disappearance	 n. 不见,消失
abrupt	 adj. 突然的,陡峭的,生硬的
nowcasting	 n. 预告
readership	 n. 读者的身分, 读者人数
pencil	 n. 铅笔
wharf	 n. 码头 v. 靠在码头
individuality	 n. 个性,(通常用复数)个人的嗜好
squander	 v. 浪费 n. 浪费
cheese	 n. 干酪
mesopotamian	 n. 美索不达米亚（两河流域）
birdlike	 adj. 敏捷轻快的,似鸟的
somerset	 n. 翻筋斗 vi. 翻筋斗
appetite	 n. 食欲,欲望
shrink	 v. 收缩, (使)皱缩 n. 收缩
dampen	 v. 使潮湿,沮丧
textural	 adj. 组织的,结构的
ribbon	 n. 缎带,丝带 v. 撕成条
derrick	 n. 起重机, (钻井)井口上的铁架塔
phoenix	 n. 凤凰,完人
impersonal	 adj. 客观的,没有人情味的
secular	 adj. 长期的,世俗的
onward	 adj. 向前的 adv. 向前,在前面
expend	 v. 花费,消耗,支出
imaginary	 adj. 假想的,虚构的
kinetic	 adj. (运)动的,动力(学)的
commitment	 n. 委托事项,许诺
pluto	 n. 冥王星, 阴间之神
chicopee	 n. 奇科皮（美国马萨诸塞州西南部城市）
seaport	 n. 海港, 港口都市
patchy	 adj. 补丁的, 不调和的
sacred	 adj. 神的,害怕的
clinical	 adj. 临床的,诊所的
verbalize	 v. 用语言描述,累赘
generator	 n. 发电机, 发生器
uphold	 v. 支持, 赞成
fare	 n. 费用,票价 v. 遭遇, 进展
cellulose	 n. 纤维素,（植物的）细胞膜质
Patricia	 n. 帕特丽夏（女子名）
yam	 n. 山药, 洋芋
sharper	 n. 磨具,(赌博中的)骗子
candlelight	 n. 烛火,黄昏
allocation	 n. 分配,安置
vantage	 n. 优势,有利情况
flowerbed	 n. 花床,花圃
debatable	 adj. 成问题的,未决定的
petrochemical	 adj. 石化的 n. 石化产品
objectify	 v. 使客观化,具体化
alternatively	 adv. 做为选择,二者择一地
lawn	 n. 草坪, (均匀生长于固体培养基的)菌苔
intelligible	 adj. 可理解的,明了的
deviation	 n. 背离,偏离
vacate	 v. 腾出, 空出,离(职),退(位)
subtropic	 adj. 亚热带的,副热带的
scenic	 adj. 舞台的, 景色优美的 n. 风景照片
comic	 n. 滑稽演员 adj. 滑稽的, 喜剧的
tusk	 n. 长牙 v. 以牙刺戳
meaty	 adj. 肉的,多肉的
resilient	 n. 帕特森（美国一座城市）
indigestible	 adj. 不吸收的,难理解的
subtitle	 n. 说明对白的字幕 v. 给…加字幕
prolifically	 adj. 丰富地,多产地
elevator	 n. 电梯,升降机
rigidity	 n. 刻板,严格
soar	 v. 高飞,昂扬 n. 高涨程度
dismantle	 v. 拆除
refinery	 n. 精炼厂
riverbank	 n. 河堤, 河岸
landslip	 n. [地]山崩,塌方
ephemeral	 adj. 朝生暮死的, 短暂的
clerk	 n. 职员, 办事员
monotonous	 adj. 单调的,无抑扬顿挫的
aquatic	 adj. 水的,水生的 n. 水生动物
vibration	 n. 振动,颤动
loop	 n. 环,回路 v. 使成环,打环
unionization	 n. 联合, 结合
aboveground	 adj. 在地面上的 adv. 地面上地
encroachment	 n. 侵蚀, 侵犯
semicircular	 adj. 半圆的
handsome	 adj. 英俊的,大方的
snout	 n. 猪嘴,鼻子
weightlessness	 n. 无重状态
suggestive	 adj. 提示的,暗示的
rougher	 n. 粗切机,粗选槽
peat	 n. 泥煤, 泥炭块
mystique	 n. 神秘性,奥秘
lengthwise	 adj. 纵长的 adv. 纵长地
sensation	 n. 感觉,感情
Victorian	 adj. 维多利亚女王时代的
contend	 v. 斗争, 竞争, 主张
grace	 n. 优美, 雅致 v. 使优雅
Chile	 n. 智利
hander	 n. 支持器,夹头
ninety	 num. 九十
alpha	 n. 希腊字母的第一个字母
slumber	 n. 睡眠 v. 睡眠
dart	 n. 标枪, 镖 v. 投掷
prevalence	 n. 流行,普遍
cousin	 n. 堂兄弟姊妹, 表兄弟姊妹
negligible	 adj. 可以忽略的, 不予重视的
finite	 adj. 有限的,限定的
sleeper	 n. 睡眠,枕木
colonizer	 n. 殖民者,殖民地开拓者, 移民
welland	 n. 韦兰（加拿大东南部港口城市）
unmatched	 adj. 无与伦比的,不相配的
nutritive	 adj. 营养的 n. 营养物
revision	 n. 修订,修正,修订本
inception	 n. 起初, 获得学位
clearing	 n. 结算,空旷地 vi. 澄清
morris	 n. 莫理斯舞(英国传统民间舞蹈)
nonfiction	 n. 非小说的散文文学
straightforward	 adj. 正直的,简单的 adv. 坦率地
brilliantly	 adv. 辉煌地,灿烂地
bull	 n. [动]公牛, 粗壮如牛的人
eighty	 num. 八十, 八十个
flexibly	 adv. 易曲地, 柔软地
sandal	 n. 凉鞋, 檀香
cumulative	 adj. 累积的
creep	 v. 爬, 蹑手蹑脚 n. 爬行
tan	 n. 日晒后的颜色 adj. 棕褐色的 v. 晒成褐色
wisdom	 n. 智慧,学识
rigor	 n. 严格,精确
grotto	 n. 洞穴,人工洞室
salad	 n. 色拉
prostrate	 adj. 降伏的,俯卧的 v. 使屈服
protector	 n. 保护者
bode	 v. 预示
club	 n. 俱乐部,(扑克牌)梅花 v. 募集
hump	 n. 驼峰,峰丘 v. (使)隆起
blaze	 n. 火焰 v. 照耀,激发
indecipherable	 adj. 无法解释的,难辨认的
substantiate	 v. 使实体化,证实
ghost	 n. 鬼, 幽灵
faint	 n. 昏晕 v. 昏晕 adj. 头晕的
Peru	 n. 秘鲁
diva	 n. 歌剧中的首席女主角
nonstop	 adj. 不断的,直达的 adv. 不休息地
bifocal	 adj. 双焦点的
cougar	 n. [动]美洲狮(尤指Felis concolor)
versatile	 adj. 多才多艺的,万能的
smear	 v. 涂污,弄脏 n. 油迹, 涂片
ocher	 n. 黄土, 赭土
mentally	 adv. 精神上, 智力上
obliterate	 v. 涂去, 删除, 使湮没
aspiration	 n. 热望, 渴望
conceivable	 adj. 可能的,想得到的
internationally	 adv. 国际性地, 在国际间
greenish	 adj. 呈绿色的
succinct	 adj. 简洁的, 紧身的
midway	 n. 中途,半路 adj. 中途的 adv. 在中途
unsung	 adj. 未唱的,未赞颂的
fungicide	 n. 杀真菌剂
popularize	 v. 普及
changeable	 adj. 可改变的,无常的
responsive	 adj. 响应的,应答的
amplify	 v. 放大,详述
notebook	 n. 笔记簿, 笔记本
pertinent	 adj. 有关的,相干的
concise	 adj. 简明的,简练的
utilization	 n. 利用
theoretical	 adj. 理论的,理论上的
figural	 adj. 借喻的,比喻的
determinant	 adj. 决定性的 n. 决定因素
overtax	 v. 课税过重, 使负担过度
youth	 n. 青春,少年
custodial	 adj. 保管的,保管人的 n. [宗]圣物保管容器
academician	 n. 院士, 大学生
cole	 n. 油菜, 小菜
flatter	 v. 过分夸赞, 奉承,使满意
impressionistic	 adj. 印象派的,给人深刻印象的
faction	 n. 派别,小集团
fortuitously	 adv. 偶然地,意外地
thriller	 n. 使人毛骨悚然的东西, 使人毛骨悚然的小说
plentifully	 adv. 丰富地,富裕地
monopolize	 v. 独占, 垄断
burden	 n. 担子, 负担 v. 烦扰
breadbasket	 n. <俚>胃, 腹
annihilate	 v. 消灭,湮灭
sectional	 adj. 可组合的,部分的
jealousy	 n. 嫉妒,猜疑
garbage	 n. 垃圾, 废物
routinely	 adv. 例行公事地
predicament	 n. 困境,窘状
thermometer	 n. 温度计, 体温计
divergence	 n. 分歧
oceanography	 n. 海洋学
outbuilding	 n. [建]外屋, (指车库, 谷仓等)
forbes	 n. 福布斯（美国著名财经杂志）
grama	 n. 美国西部产的一种牧草
rhyolite	 n. [地]流纹岩
decisive	 adj. 决定性的,果断的
comparably	 adv. 同等地,可比较地
transmitter	 n. 转送者,传导物,发射机
exponential	 n. 指数 adj. 指数的, 幂数的
gesso	 n. (雕刻、绘画用的)石膏, 石膏粉
attendant	 n. 服务员 adj. 伴随的
capitalism	 n. 资本主义
deference	 n. 顺从, 尊重
cumbersome	 adj. 笨重的,累赘的
weft	 n. [纺]织物,信号旗
dire	 adj. 可怕的,极端的
pendant	 n. 垂饰, 下垂物
basketmaking	 n. 篮子编织
generalist	 n. 多面手,通才
kennel	 n. 狗窝 v. 置于狗窝,关进狗窝
postmaster	 n. 邮局局长
interestingly	 adv. 有趣地
perfume	 n. 芳香,香水 v. 使发香,洒香水于
concomitant	 adj. 伴随的 n. 伴随物
patient	 n. 病人 adj. 耐心的
reckless	 adj. 不计后果的,鲁莽的
rigidly	 adv. 坚硬地, 严格地
renounce	 v. 宣布放弃,断绝关系
overhang	 v. 悬于之上,悬垂 n. 屋檐
observatory	 adj. 天文台,气象台
urbanism	 n. 都市生活,都市化
refrigeration	 n. 冷藏, 致冷
stuff	 n. 原料,素材资料 v. 塞满
harshly	 adv. 严厉地, 苛刻地
chitin	 n. 壳质, 角素
polymer	 n. 聚合体
Jules	 n. 朱尔斯（男子名）
reviewer	 n. 批评家,评论家
triassic	 adj. [地]三叠纪的 n. 三叠纪
adjunct	 n. 附件, 助手 adj. 附属的
glasswork	 n. 玻璃制品 v. 制成玻璃状的
sate	 v. 使心满意足
flier	 n. 飞行者,快车,宣传单
deplorable	 adj. 可叹的,凄惨的
instructor	 n. 教师,指导书
midday	 n. 正午
auto	 n. 自动,<美口>汽车
loneliness	 n. 孤独, 寂寞
hopeless	 adj. 没有希望的,不可救药
interchangeable	 adj. 可互换的,可交换的
bizarre	 adj. 奇异的(指态度,容貌,款式等)
laundry	 n. 洗衣店, 要洗的衣服
definitive	 adj. 最后的,确定的
puncture	 n. 小孔 v. 刺破
glandular	 adj. 腺的,腺状的
glycoside	 n. [化]配醣, 配糖类
interactive	 adj. 交互式的,相互作用的
preform	 v. 预先形成 n. 粗加工的成品
unusable	 adj. 不能用的,与众不同的
inducible	 adj. 可诱导的,可导致的
sepal	 n. 萼片
snippet	 n. 小片, 片断
correlate	 v. 相互关联 adj. 相互关联的
beetle	 n. 甲虫
glycoprotein	 n. [化]糖蛋白类, 醣蛋白
cardiac	 n. 强心剂 adj. 心脏的, (胃的)贲门的
glial	 adj. 神经胶质的
autonomic	 adj. 自治的, 自律的
ending	 n. 结尾, 结局
preoccupation	 n. 全神贯注,当务之急
coyote	 n. 一种产于北美大草原的小狼, 山狗
endowment	 n. 捐赠,天资,捐款
puddle	 n. 水坑, 泥潭 v. 搅浊,搅泥泞
flare	 n. 闪光, 闪耀 v. 闪光,闪耀
proboscis	 n. 鼻子,[昆] 喙
crimson	 adj. 深红色的 v. 变深红色 n. 深红色
exhaustion	 n. 耗尽枯竭,疲惫,竭尽
winner	 n. 胜利者,优胜者
anthropological	 adj. 人类学的,人类学上的
sticky	 adj. 粘的, 粘性的
structurally	 adv. 在结构上
wholesome	 adj. 有益的,健康的,健全的
polyphony	 n. 复调音乐, 多音
cornet	 n. 圆锥形纸袋, 短号
maize	 n. 玉米, 黄色 adj. 玉米色的
chivalry	 n. 骑士精神, 骑士制度
unadorned	 adj. 朴素的,未装饰的
brave	 adj. 勇敢的
compatible	 adj. 谐调的,兼容的
hotelkeeper	 n. 旅馆经营者
inn	 n. (尤指乡村或公路边的) 旅馆 vi. 住旅馆
multitude	 n. 多数, 群众
paraphrase	 v. 解释 n. 释义
unselfish	 adj. 无私的,慷慨的
disco	 n. 迪斯科舞厅
nonself	 n. (有机体的)异物
ragtime	 n. 拉格泰姆音乐 adj. 使人发笑的
unrestricted	 adj. 自由的,无限制的
quasar	 n. 恒星状球体, 类星体
concertina	 n. 类似风琴的六角形的乐器
bedroom	 n. 卧室
quill	 n. 羽茎,大翎毛 vt. 刺穿
bolster	 n. 垫子 v. 支持
halt	 n. 停止,暂停 v. 停止,使立定
exhale	 v. 呼气,发出
angstrom	 n. [物理]埃(长度单位)
microscopy	 n. 显微镜检查,显微镜使用
narcotic	 n. 麻醉药,镇静剂 adj. 麻醉的
narcosis	 n. 昏迷状态, 麻醉
complication	 n. 复杂化, (使复杂的)因素
embolism	 n. 加闰日, 栓塞
rupture	 v. 破裂,裂开 n. 破裂, 决裂
abrasion	 n. 磨损
proportionally	 adv. 成比例地,相称地
virgo	 n. 室女宫,室女(星)座
freighter	 n. 货船,承运人
thinly	 adv. 稀疏地,瘦
morality	 n. 道德,品行
Andromeda	 n. 埃塞俄比亚的公主, 仙女座
yardstick	 n. <美> 码尺, 准绳
exalt	 v. 晋升
monoxide	 n. 一氧化物
comply	 v. 顺从,答应
owe	 v. 欠(债等),感激
ingot	 n. [冶]锭铁, 工业纯铁
premature	 adj. 未成熟的,早熟的
grievance	 n. 委屈, 冤情, 不平
conjectural	 adj. 推测的,好推测的
knot	 n. (绳等的)结 v. 打结
notch	 n. 槽口,刻痕 v. 刻凹痕
oystercatcher	 n. 〈动〉蛎鹬
shorebird	 n. 岸禽类鸟,沙禽
photogrammetry	 n. 照相测量法
mandible	 n. 下颚, 下颚骨
attire	 n. 服装 v. 打扮
corrosion	 n. 侵蚀,腐蚀状态
upright	 adj. 正直的 n. 垂直, 竖立
unravel	 v. 拆开,拆开
glassmaking	 n. 玻璃(或玻璃器皿等)制造(术)
Katherine	 n. 凯瑟琳（女子名）
malleability	 n. 有延展性, 柔韧性
deft	 adj. 敏捷熟练的, 灵巧的
robust	 adj. 精力充沛的
baedeker	 n. 旅行指南, 入门手册
sword	 n. 剑
microfossil	 n. 微体化石,微化石
entomb	 v. 埋葬, 成为的坟墓
burgher	 n. 公民, 市民
puffin	 n. [鸟]角嘴海雀
insoluble	 adj. 不能溶解的, 不能解决的
reliability	 n. 可靠性
unemployed	 adj. 失业的, 未被利用的
immobility	 n. 牢固,不动
preside	 v. 主持,管理
spacious	 adj. 广大的,大规模的
hydrographic	 adj. 水道测量数的,水道学的
portraiture	 n. 肖像画法
talented	 adj. 有才能的
homework	 n. 家庭作业, 副业
filmmaker	 n. 电影摄制者
understate	 v. 打着折扣说,有意轻描淡写
narrate	 v. 叙述,作解说
lean	 n. 倾斜,倚靠 v. 依靠,倾斜 adj. 贫乏的
consort	 v. 结交,符合 n. 配偶
gannet	 n. 塘鹅
underwing	 n. 后翅, 后翅色彩瑰丽的蛾
exorbitant	 adj. （要价等）过高的,（性格等）过分的
gondwanaland	 n. [地]冈瓦纳大陆
gunpowder	 n. 黑色火药, 有烟火药
herring	 n. 青鱼, 鲱
earner	 n. 赚钱的人
angular	 adj. [生物] 有角的,生硬的,笨拙的
wren	 n. [动] 鹪鹩
weary	 adj. 疲倦的,厌倦的 v. 疲倦,厌倦
kinglet	 n. <贬>懦弱的国王,小国君主
uniformity	 n. 一致,均匀
screw	 n. 螺丝钉,螺旋 v. 调节,旋
priestess	 n. 女祭司, (基督教会以外的)神职人员
neoclassical	 adj. 新古典主义的
thousandfold	 adv. 千倍地 adj. 千倍的
enjoyment	 n. 享乐, 快乐
forester	 n. 林务官, 森林人
spoilage	 n. 损坏
nonthreatening	 adj. 非胁迫的
solder	 n. 焊料 v. 焊接
tumble	 n. 跌倒,翻斤斗 v. 翻倒, 摔倒
harshness	 n. 粗糙的事物, 严肃, 刺耳
collagen	 n. 胶原质
surgeon	 n. 外科医生
idle	 adj. 空闲的,懒惰的 v. 虚度, 闲散
sumptuous	 adj. 奢侈的,华丽的
synchrotron	 n. 同步加速器
landlord	 n. 房东,地主
familiarity	 n. 熟悉,通晓,精通
stringent	 adj. 严厉的,迫切的
signature	 n. 签名,信号
cabinetmaker	 n. 家具师,细工木匠
chord	 n. 弦,和音
supervisory	 adj. 监督的
resentment	 n. 怨恨,愤恨
purposely	 adv. 故意地,蓄意地
irresponsibly	 adv. 不负责任地,不可靠地
quench	 v. 结束,熄灭
grapple	 v. 格斗,抓住 n. 格斗
haunt	 v. 出没于
revealingly	 adv. 启发人地,袒胸露肩地
obedience	 n. 服众, 顺从
rearrange	 v. 再排列,重新整理
roar	 n. 吼叫, 怒号 v. 滚动,咆哮
armory	 n. 兵工厂,军械库
tuck	 n. 缝摺, 活力 v. 卷起,大口的吃
slippery	 adj. 滑的,光滑的
courtship	 n. 求爱, 求爱时期
sleek	 adj. 圆滑的,使…光滑
corselet	 n. 盔甲,胸衣
keel	 n. 龙骨(船的脊骨),平底船 v. 装以龙骨,倾覆
needle	 n. 针 v. 缝纫,刺激
secrecy	 n. 秘密,保密
lira	 n. 里拉（意大利货币单位）
livelihood	 n. 生计,谋生
impediment	 n. 妨碍,口吃, 障碍物
bow	 n. 弓,弓形 v. 鞠躬,弯腰
nurture	 n. 养育,教育 v. 养育,给与营养物
silhouette	 n. 侧面影象,轮廓 v. 使…照出影子来
inward	 adv. 向内,在内 adj. 向内的,内在的
misinterpret	 v. 曲解
marketable	 adj. 市场的,可销售的
mudstone	 n. [地]泥岩
carcass	 n. (屠宰后)畜体
subdivide	 v. 再分, 细分
meteoritic	 adj. 陨星的,陨石的
offshoot	 n. 分支, 支流
inborn	 adj. 天生的,生来的
stereotypical	 adj. 老一套的,陈规的
manipulation	 n. 处理,操纵
lifelike	 adj. 栩栩如生的,逼真的
bipedal	 adj. 两足动物的,两足的
antiquate	 adj. 旧式的,过时的
chondritic	 adj. 球粒状陨石的
replicate	 v. 复制 adj. 复制的
painful	 adj. 疼痛的,使痛苦的
weldon	 n. 韦尔登（男子名）
scorch	 v. 烧焦,枯萎 n. 烧焦,枯黄
stonework	 n. 石雕工艺, 做石工的场所
shipwreck	 n. 船只失事,海难 v. 使失事
uncle	 n. 伯父,叔父,援助者
unanswered	 adj. 未答复的,无反应的
misfortune	 n. 不幸, 灾祸
greet	 v. 问候,向致意
aggregate	 n. 合计 v. 聚集, 集合
journalist	 n. 新闻记者,从事新闻杂志业的人
mantel	 n. 壁炉架
desalination	 n. 减少盐分, 脱盐作用
slit	 v. 撕裂 n. 裂缝, 狭长切口
hydraulic	 adj. 水力的,水压的
reappear	 v. 再出现
carton	 n. 硬纸盒, 纸板箱
wan	 adj. 苍白的,病态的 v. (使)变苍白
elegance	 n. 高雅,典雅
horsepower	 n. 马力
quiver	 n. 震动,颤抖 v. 颤抖,射中
airport	 n. 机场,航空站
eternal	 adj. 永恒的,永远的
duchenne	 n. 杜氏营养不良症
reopen	 v. 重开,再开始
immutable	 adj. 不变的,不可变的
pave	 v. 铺,安排
permeability	 n. 渗透性
afterwards	 adv. 然后, 后来地
consolidation	 n. 巩固, 合并
waterfowl	 n. 水鸟, 水禽
efficacious	 adj. 有效的,灵验的
permeable	 adj. 有浸透性的, 能透过的
fanwise	 ad& adj. 呈扇形展开的
riverbed	 n. 河床
destine	 v. 注定, 预定
expertly	 adv. 熟练地
stipulate	 v. 规定, 保证
sandbar	 n. 沙洲
contingent	 adj. 可能发生的, 附随的 n. 偶然的事情
congenial	 adj. 意气相投的,性格相似的
faucet	 n. 龙头, (连接管子的)插口
alienate	 v. 疏远
implicit	 adj. 暗示的,盲从的
preponderance	 n. 优势,占优势
imperfect	 adj. 有缺点的,未完成的 n. 未完成体
homeotherm	 n. <主美>恒温动物
envy	 n. 羡慕,嫉妒 v. 羡慕,嫉妒
drape	 n. 窗帘 v. 使褶皱
drip	 n. 水滴 v. (使)滴下
jewel	 n. 宝石
practicality	 n. 实用性,实际
pictorial	 adj. 图示的 n. 画报
bland	 adj. 温和的,乏味的 v. 变得乏味
mortal	 n. 凡人,人类 adj. 必死的,致命的
unschooled	 adj. 天生的,未受学校教育的
harmless	 adj. 无害的
burgeon	 n. 嫩芽 v. 萌芽
ashcan	 n. 垃圾桶, 深水炸弹
literalness	 n. 文字的,表面意义上的
flyspeck	 n. 污点,小斑 v. 弄脏
rennin	 n. 高血压蛋白原酶
hormonal	 adj. 荷尔蒙的,激素的
angiotensin	 n. [医]血管紧缩素
deprivation	 n. 剥夺
aldosterone	 n. [生化]醛甾酮,醛固酮
mandate	 n. (书面)命令,训令 v. 委任统治
henceforth	 adv. 今后,自此以后
mammalian	 n. 哺乳动物 adj. 哺乳动物的
unfairly	 adv. 不公平地,不正当地
irrelevant	 adj. 不相干的,不切题的
jury	 n. [律] 陪审团 adj. [海]临时应急的
burdensome	 adj. 繁重的,难以承担的
confederate	 n. 同盟者,同盟国 adj. 同盟的 v. (使)联盟, 联合
pardon	 v. 原谅,宽恕 n. 原谅
convict	 v. 证明有罪 n. 罪犯
authorization	 n. 授权,认可
gymnastic	 adj. 体操的,体育的 n. 训练课程
stagger	 v. 蹒跚,交错 adj. 交错的
peacetime	 n. 和平时期 adj. 和平时期的
readjust	 v. 重新调整,再调整
rivalry	 n. 竞争,竞赛,敌对
nobility	 n. 高贵,贵族
revive	 v. 苏醒, (使)复兴
ponderous	 adj. 笨重的,沉闷的
thresher	 n. 打谷者, 打谷机, [鱼]长尾鲨
utensil	 n. 器具
knight	 n. (欧洲中世纪的)骑士 v. 授以爵位
intentional	 adj. 故意的,策划的
thrifty	 adj. 节约的
enactment	 n. 设定,制定
proclaim	 v. 宣布,声明,显露
seafood	 n. 海产食品, 海味
besiege	 v. 围困,围攻
unsubstantiated	 adj. 未经证实的,无事实根据的
unaware	 adj. 不知道的, 没觉察到的
semimolten	 adj. 半熔的
incinerate	 v. 把烧成灰,烧弃
topographical	 adj. 地志的,地形学的
festival	 n. 节日,喜庆日 adj. 节日的,快乐的
canyon	 n. <美>峡谷, 溪谷
falconer	 n. 以鹰狩猎者,养鹰者
lien	 n. 留置权,抵押品所产生的利息
prejudice	 n. 偏见,损害 v. 损害,有偏见
starfish	 n. 海星
extraordinarily	 adv. 非常,格外地
dismember	 v. 肢解,割断手足
unquestionably	 adv. 无可非议地,确凿地
phylum	 n. (生物分类学上的)门, 语群
spinet	 n. 古时的小型竖琴, 小型立式钢琴
avail	 v. 有益于,有帮助 n. 效用, 利益
supremacy	 n. 地位最高的人,至高,霸权
rumor	 n. 流言,谣言 v. 谣传, 传闻
passageway	 n. 过道,出入口
Gothic	 n. 哥特式 adj. 哥特式的,野蛮的
bluff	 n. 断崖,诈骗 adj. 绝壁的 v. 诈骗
versatility	 n. 多功能性
tonal	 adj. 音调的
pedal	 n. 踏板 v. 踩的踏板
inconvenient	 adj. 不便的,打扰的
contributor	 n. 贡献者,捐助者
overcultivation	 n. 耕种过度
penetration	 n. 穿过, 渗透, 突破
subtract	 v. (～ from)减去, 减
hearth	 n. 壁炉地面, 家庭（生活）
saguaro	 n. 仙人掌之一种
transcend	 v. 超越, 胜过
taproot	 n. [植]主根, 直根
firing	 n. 开火, 生火 v. 开火,烧制
distributor	 n. 发行人,经销商
signify	 v. 颇为重要, 意味
heed	 n. 注意,留意 v. 注意,留意
seminar	 n. 研究会,讨论发表会
flavor	 n. 情味, 风味 v. 加味于
dissatisfy	 v. 使感觉不满, 不满足
adequacy	 n. 适当, 足够
uninteresting	 adj. 无趣味的，乏味的
minstrel	 n. 吟游诗人(或歌手)
irreversible	 adj. 不可逆的,不能取消的
commend	 v. 称赞, 表扬, 推荐
ling	 n. 鳕鱼, 石南之一种
phosphate	 n. 磷酸盐
apiece	 adv. 每个, 每人, 各
walker	 n. 徒步者, 参加竞走者
distinctly	 adv. 清楚地, 显然
deteriorate	 v. (使)恶化
taut	 adj. (绳子)拉紧的,紧张的 vt. 使纠缠
spur	 n. 踢马剌 v. 鞭策, 刺激
stretcher	 n. 担架, 延伸器
hoof	 n. 蹄 v踢
discolor	 v. 使脱色, (使)变色,(使)退色
foreleg	 n. 前肢(指四肢或多肢动物的)前脚
buckskin	 n. 鹿皮裤, 鹿皮
fortify	 v. 增强(体力,结构等) v. 筑防御工事
suspender	 n. 吊裤带, 悬挂物, 吊杆, 袜吊
buckle	 n. 带扣 v扣住, 变弯曲
chafe	 v. (将皮肤等)擦热, 使恼火
tourniquet	 n. 止血带, 压脉器
bandanna	 n. 大手帕
charm	 n. 吸引力, 魅力 v. 迷人, 使陶醉
vestigial	 adj. 退化的,发育不全的
harem	 n. （伊斯兰教教徒之）闺房, 为一个雄性动物所控制的许多雌性动物
nonfunctional	 adj. 不运行的
everest	 n. 珠穆朗玛峰(世界最高峰)
trench	 n. 沟渠, 堑壕 v. 掘沟, 挖战壕
Monroe	 n. 门罗(m)
concede	 v. 勉强, 承认, 退让 vi让步
jawbone	 n. 颚骨, 下颚骨, 信用 v赊买
selective	 adj. 选择的, 选择性的
Iraq	 n. 伊拉克共和国
grande	 adj. 重大的，显要的
facelift	 n. 整容手术（除去面部皱纹）
donation	 n. 捐赠品, 捐款, 贡献
massif	 n. 山丘
atlas	 n. 地图, 地图集
wireless	 adj. 无线的 n. 无线
sterilize	 v. 杀菌, 消毒, 使成不毛
reenter	 n. 重进入, 再加入 v. 重返
retard	 v. 延迟, 妨碍 n. 延迟
logic	 n. 逻辑, 逻辑学 adj. 逻辑的
rot	 v. (使)腐烂, (使)腐败 n腐烂, 腐败
satisfaction	 n. 满意, 满足, 令人满意的事物
rapport	 n. 和谐, 亲善
elevate	 v. 举起, 提升的职位
gripe	 n. 紧握, 柄 v. 握紧
gossip	 n. 闲话, 闲谈
attendance	 n. 出席, 出席的人数
socialization	 n. 社会化, 社会主义化
Irish	 n&a. 爱尔兰人(的),爱尔兰语（的）
eyewitness	 n. 目击者, 见证人
conglomerate	 v. 聚结 n. 企业集团
gang	 n. (一)伙, (一)群
entail	 v. 使必需, 使蒙受 n. [建]限定继承权
punch	 v. 冲孔, 打孔
railhead	 n. 铺设中的铁路末端, 终点
preferential	 adj. 优先的；选择的
cerebral	 adj. 脑的, 大脑的
Kenya	 n. 肯尼亚
alphabet	 n. 字母表
cleanly	 adv. 干净地, 清洁地
quina	 n. [植]金鸡纳树皮, 奎宁
unresolved	 adj. 未解决的，未决定的
lunch	 n. 午餐
exhilarate	 v. 使高兴, 使愉快
choreography	 n. 舞蹈术, 舞台舞蹈
teem	 v. 大量出现
lately	 adv. 近来, 最近
scarcity	 n. 缺乏, 不足
premiere	 v. 初次公演 n. 初次的演出 adj. 杰出的
screening	 n. 放映 v. 遮蔽,筛选
exemplary	 adj. 典范的,惩戒性的
Austrian	 n. 奥地利人 adj. 奥地利的, 奥地利人的
watershed	 n. 分水岭
periodization	 n. (历史等的)时期(或时代)划分
homemaker	 n. 主妇
chronicle	 n. 编年史 v. 编入编年史
substrate	 n. （土地）底层,基础
sustenance	 n. 食物, 生计, (受)支持
charitable	 adj. 慈善事业的,慷慨的,仁慈的
tremendously	 adv. 非常地,可怕地,惊人地
outlook	 n. 景色, 展望
perceptive	 adj. 感知的,知觉的
legacy	 n. 遗赠(物), 遗产
painstaking	 n. 辛苦 adj. 辛苦的, 辛勤的
unsure	 adj. 没有自信的, 不确定的
loess	 n. 黄土
reflectivity	 n. 反射率
dishabituate	 vt. 使戒除(或放弃)习惯,使不习惯
roughness	 n. 粗糙, 未加工, 粗糙程度
responsiveness	 n. 响应能力,有同情心
partition	 v. 区分, 分割 n分割, 划分
electro	 n. 电镀物品, 电版
neutrality	 n. 中立, 中性
alkaline	 adj. 碱性的，碱的
ballad	 n. 民歌, 流行歌曲
ratify	 v. 批准, 认可
conflate	 v. 合并
cardboard	 n. 纸板
catechism	 n. 问答教学法, 问答集
convection	 n. 传送, 对流
rewrite	 v. 重写, 改写
counterbalance	 v. 使平均, 弥补 n. 平衡量, 平衡力
creditor	 n. 债权人
regionalization	 n. 分成地区, 按地区安排
cany	 adj. 藤的,状似手杖的
telescopic	 adj. 望远镜的,[眼科] 远视的
crayfish	 n. 小龙虾
geophysical	 adj. 地球物理学的
ample	 adj. 充足的, 丰富的
synchronize	 v. 同步
fluffy	 adj. 绒毛似的, 蓬松的
militarily	 adv. 以武力, 以军事行动
precision	 n. 精确, 精密度, 精度
clause	 n. 子句, 条款
enforcer	 n. 实施者,强制执行者
ostracize	 v. (古希腊)贝壳放逐法, 放逐, 排斥
extracurricular	 adj. 课外的, 业余的
habitual	 adj. 习惯的, 惯常的
chronobiology	 n. [生]时间生物学, 生物钟学
thinker	 n. 思想者, 思想家, 心智
songwriter	 n. 歌曲作家，歌曲作者
spotlight	 n. 聚光灯
inducement	 n. 诱因, 刺激物
vogue	 n. 、a流行（的）, 时髦（的）
overgeneralize	 v. 太笼统地概括
catalogue	 n. 目录
keplerian	 adj. 开普勒理论的,开普勒定律的
grinder	 n. 磨工, 研磨者
Galilean	 adj. 伽利略的, 加利利的（位于巴基斯坦北部）
align	 v. 排列，使结盟
diffusely	 adv. 广泛地,扩散地
caucasian	 n. 高加索人 adj. 高加索的, 白种人的
Korean	 n. 韩国人, 韩国语 a朝鲜人的, 朝鲜语的
crescent	 n. 新月, 月牙
dodge	 v. /n避开, 躲避
surrender	 v&n. 放弃, 投降
preach	 v. 鼓吹
impatient	 adj. 焦躁的,不耐心的
gospel	 n. 〈圣经·新约〉福音书
thirst	 n. 口渴,热望 v. 渴望
ductless	 adj. 无导管的
ridicule	 n. 嘲笑, 奚落 v. 嘲笑
admiration	 n. 钦佩, 赞美, 羡慕
garland	 n. 花环 vt戴花环
recreate	 v. (使)得到休养, (使)得到娱乐
uncritical	 adj. 无批判力的,不加批判的
resonator	 n. 共鸣器
Jewett	 n. 朱厄特（姓氏）
chaotic	 adj. 混乱的, 无秩序的
fen	 n. 沼泽, 沼池
toss	 v. 投, 掷
glance	 n. /v一瞥,匆匆一看
pretension	 n. 借口, 要求, 自负
remuneration	 n. 报酬
expressiveness	 n. 表现, 表示
scant	 adj. 缺乏的,不足的 v节省,减少
pancreatic	 adj. 胰的,胰腺的
pancreas	 n. [解]胰腺
juice	 n. (水果)汁, 液
celebratory	 adj. 快乐的
digestion	 n. 消化力, 领悟
endocrinology	 n. 内分泌学
intestinal	 adj. 肠的
secretin	 n. 分泌素
hamlin	 n. 哈姆林（姓氏）
crustacean	 adj. 甲壳类的 n. 甲壳纲动物
dragon	 n. 龙, 凶暴的人
consultant	 n. 顾问, 商议者, 咨询者
lobster	 n. 龙虾
bliss	 n. 福佑, 天赐的福 v. 狂喜
empress	 n. 皇后, 女皇帝, 皇太后, 极有权力的女人
pomegranate	 n. [植]石榴
misunderstand	 v. 误解, 误会
spatter	 v. 溅污 n滴落
refurbish	 v. 再磨光, 刷新
mottle	 v. 使有斑点 n杂色, 斑点
indifferent	 adj. 漠不关心的,中性的
doubtful	 adj. 可疑的, 不确的, 疑心的
idealization	 n. 理想化, 理想化的事物
fidelity	 n. 忠实, 诚实, 忠诚, 保真度, (收音机, 录音设备等的)逼真度, 保真度, 重现精度
appreciably	 adv. 略微, 有一点
exceedingly	 adv. 非常,极度地
immensely	 adv. 极大地,无限地
interdependent	 adj. 相互依赖的,互助的
understandably	 adv. 可理解地
misunderstanding	 n. 误会, 误解
emblem	 n. 象征, 徽章 vt. 用象征表示
lyrical	 adj. 抒情诗调的, 充满感情的
module	 n. 模数, 模块
Yuan	 n. 元(中国货币单位)
victimize	 v. 使牺牲,使受害
uppermost	 a&ad. 至上的，最高的
cheater	 n. 骗子, 欺诈者, 背叛者
beggar	 n. 乞丐
siliceous	 adj. 硅酸的；硅土的
grassy	 adj. 绿色的, 象草的
ape	 n. 猿
suburban	 adj. 郊外的, 偏远的
edible	 adj. 可食用的
hiss	 v. 嘶嘶作声, 用嘘声表示
scramble	 n&v. 混乱, 攀爬
discontent	 n. 不满a不满的vt使不满
tressed	 adj. 有一绺绺长发的
rib	 n. 肋骨vt戏弄
bongo	 n. 非洲产大羚羊, 一种用手指敲的小鼓
recital	 n. 朗诵, 背诵, 独奏会
restaurant	 n. 餐馆, 饭店
nursery	 n. 托儿所
dizzy	 adj. (指人)晕眩的 v. 使人晕眩的
stir	 n. 轰动, 搅动 v. 搅拌,激起
woodwind	 n. 木管乐器
humble	 adj. 卑下的, 微贱的 v. 使卑下, 挫
unsuccessful	 adj. 不成功的,失败的
seeker	 n. 搜索者, 探求者
unfavorably	 adv. 不利地,不适宜地
spatial	 adj. 空间的
symphony	 n. 交响乐, 交响曲
chronological	 adj. 按年代顺序排列的
superb	 adj. 庄重的, 华丽的, 极好的
pylon	 n. 塔门, 路标塔
acquaintance	 n. 相识, 熟人
decease	 n. 死亡 v. 死
cult	 n. 祭仪, 礼拜式
divine	 adj. 神圣的, 非凡的 n牧师 v占卜
colonel	 n. 陆军上校, 团长
marshal	 n. 元帅 v整顿, 排列
dilemma	 n. 进退两难的局面, 困难的选择
validity	 n. 有效性, 合法性, 正确性
Militant	 adj. 好战的n好斗者
dismiss	 v. 解散, 下课, 解职,
superficial	 adj. 表面的, 肤浅的n浅薄的人
federalist	 n. 联邦党,联邦制拥护者
biographical	 adj. 传记的,传记体的
magnetism	 n. 磁, 磁力, 吸引力, 磁学
sonar	 n. 声纳, 声波定位仪
perennial	 adj. 终年的, 长期的
infiltration	 n. 渗透
breakage	 n. 破坏, 破损, 破损量
bounce	 v. (使)反跳, 弹起 n(球)跳起, 弹回
apace	 adv. 快速地, 急速地
herbicide	 n. 除草剂
compactness	 n. 紧密, 简洁
pluck	 n. 勇气v拔, 采集
springboard	 n. 跳板vi利用跳板
hurl	 n. 用力或猛烈的投掷v用力投掷
genu	 n. 膝
localization	 n. 地方化, 局限, 定位
airborne	 adj. 空运的, 空气传播的
catalyst	 n. 催化剂
rarity	 n. 稀有
fend	 v. 保护, 供养
beneficiary	 n. 受惠者, 受益人
leaflet	 n. 小叶, 传单
genotype	 n. 基因型
affordable	 adj. 负担得起的
myxoma	 n. [医]粘液瘤
reply	 n. 答复, 答辩v答复, 回击
importation	 n. 进口, 输入品
deny	 v. 否认, 拒绝
intaglio	 n. 凹雕, 阴雕vt凹雕
elaboration	 n. 苦心经营, 详尽的细节
congenital	 adj. 先天的,天生的,天赋的
blockage	 n. 封锁, 妨碍
photodissociation	 n. [物][化]光离解,光解 (作用)
survivor	 n. 生还者, 残存物
uninhabited	 adj. 无人居住的,杳无人迹的
aphid	 n. [动]蚜虫
weekend	 n. 周末, 周末休假 a周末的
Miami	 n. 迈阿密(美国佛罗里州达东南部港市)
weekday	 n. 周日, 平日
paralyze	 v. 使瘫痪, 使麻痹
articulate	 adj. 有关节的, 发音清晰的 v用关节连接, 接合
airway	 n. 空中航线, 通风孔
outgassing	 n. 除气 v除气 a释气的
overrun	 n. 泛滥成灾 v超过, 泛滥
fever	 n. 发烧, 狂热 v(使)发烧, 狂热
loosen	 v. 解开, 放松, 松开
Netherland	 n. 荷兰
incorrectly	 adv. 错误地,不适当地
Athens	 n. 雅典(希腊首都)
tollgate	 n. 征收通行税的关卡, 关门
bravely	 adv. 勇敢地
unwilling	 adj. 不愿意的,不情愿的
impressively	 adj. 令人难忘地,  令人印象深刻地
overkill	 n. 过度的杀伤威力 v. 超量杀伤
Athenian	 n. /a雅典(人)(的)
outskirt	 n. 外边, 郊区
milligram	 n. 毫克
supplier	 n. 供应者, 补充者
closeness	 n. 紧闭, 狭窄
stately	 adj. 庄严的, 堂皇的
infinitesimally	 adv. 极小地
viability	 n. 生存能力
lyric	 n. 抒情诗, 歌词
dispose	 v. 处理,布置, 安排
uranus	 n. 天王星
rocket	 n. 火箭
insulator	 n. 绝缘体, 绝热器
keelboat	 n. 一种河船
manageable	 adj. 易处理的，易管理的
metaphor	 n. 隐喻, 暗喻
disaffection	 n. 不满
requisition	 n. 正式请求；征用
reprint	 v. 再版
cheerful	 adj. 愉快的, 高兴的
entwine	 v. (使)缠住, (使)盘绕
untie	 v. 解开,  松开
impermeable	 adj. 不能渗透的
condenses	 v. 浓缩,  压缩
pork	 n. 猪肉,
looseness	 n. 松开, 解除
anchor	 n. 锚 v抛锚
governmental	 adj. 政府的
auction	 n. ／ vt拍卖
successively	 adv. 一个接一个地
obey	 v. 服从, 顺从
romanize	 v. 古罗马化, 用罗马字书写
permeate	 v. 弥漫, 渗透
teacup	 n. 茶杯
allay	 v. 减轻, 减少
characterization	 n. 描述, 人物之创造
earthen	 adj. 土制的, 陶制的
insistence	 n. 坚持, 坚决主张
whence	 adv. 从何处；从那里
nonporous	 adj. 无细孔的
turnover	 n. 翻转,营业额
fork	 n. 叉, 叉状物 vi分叉
deed	 n. 行为，事迹；契约
southernmost	 adj. 最南的
landless	 adj. 无土地的，无陆地的
enhancement	 n. 增进, 增加
memorize	 v. 记住, 记忆
session	 n. 会议, 开庭
indeterminate	 adj. 不确定的, 含混的
unbalance	 v. 使失衡,使精神紊乱n失衡
conclusively	 adv. 最后地, 确定地
fortuitous	 adj. 偶然的, 幸运的
hieroglyph	 n. 象形文字, 图画文字
admirable	 adj. 令人钦佩的,令人赞赏的
democratization	 n. 民主化
peacefully	 adv. 平静地,  和平地
upheaval	 n. 剧变
inflection	 n. 变形
stocking	 n. 长袜
radiometric	 adj. 辐射测量的,  辐射度的
balkan	 n&a. 巴尔干半岛(的)
thwart	 v. 阻挠
hieratic	 adj. 僧侣的, 僧侣用的
cater	 v. 迎合,提供饮食及服务
intonation	 n. 语调, 声调
composite	 adj. 合成的, 复合的 n合成物
fibrous	 adj. 含纤维的, 纤维性的
pedagogic	 adj. 教师的, 教育学的, 教授法的
floe	 n. 大浮冰, 浮殡冰块
bony	 adj. 多骨的, 瘦骨嶙峋的
synonym	 n. 同义字
listener	 n. 收听者, 听众
conductivity	 n. 传导性, 传导率
physiology	 n. 生理学
miocene	 adj. 中新世的, 中新统的
eletricity	 n. 电, 电学
nowhere	 adv. 无处,任何地方都不
depiction	 n. 描写, 叙述
gun	 n. 炮, 枪,
groom	 v. 刷洗 n新郎；马夫
unfair	 adj. 不公平的
prickly	 adj. 多刺的
recurrent	 adj. 再发生的, 周期性的
pear	 n. 梨子, 梨树
monoid	 n. 独异点
affront	 v. 侮辱，冒犯
deflect	 v. (使)偏斜, (使)偏转
harper	 n. 弹竖琴者, 竖琴师
discernible	 adj. 可辨别的
selfish	 adj. 自私的
Maine	 n. 缅因州(美国东北角的州)
watery	 adj. (似)水的, 潮湿的
fad	 n. 时尚, 一时流行的狂热
secretary	 n. 秘书, 部长
shy	 adj. 怕羞的, 畏缩的
catchment	 n. 排水,集水
underscore	 v. 画底线
tambourine	 n. 小手鼓
fluidity	 n. 流动性,变移性
ongoing	 adj. 正在进行的
unhindered	 adj. 无阻的, 不受阻碍的
fleet	 n. 舰队 v疾驰,掠过
almanac	 n. 历书, 年鉴
breathtaking	 adj. 令人赞叹的,  壮观的
coniferous	 adj. 松类的,  结球果的
loyalist	 n. 忠诚的人, 反对独立者
pray	 v. 祈祷, 恳求
incoming	 adj. 引入的
unpredictably	 adv. 不可预见地,  不能预料地
scraping	 v&n. 刮，擦
reorganize	 v. 改组, 整顿
Turkic	 n. 土耳其语(的), 土耳其语系者(的)
immature	 adj. 不成熟的, 未完全发展的
accuracy	 n. 精确性, 正确度
momentarily	 adv. 暂时地, 立刻地
overconfident	 adj. 自负的, 过于自信的
expansionist	 n&a. 扩张主义(的)
bother	 v&n. 烦扰, 打扰 v
boss	 n. 老板, 上司 vt指挥
crowbar	 n. 撬棍, 铁橇
interdependence	 n. 互相依赖
magnitude	 n. 大小, 数量,量级
broaden	 v. 放宽, 变宽, 扩大, 加宽
till	 prep. 直到, 在以前
inappropriate	 adj. 不适当的, 不合宜的
jar	 n. 罐子 v刺激，震动
residue	 n. 残渣, 剩余物
enterprising	 adj. 有事业心的, 有进取心的
moisten	 v. 弄湿 vi变潮湿
medicinal	 adj. 药物的，治疗的
tribespeople	 [复]n. 部落(或宗族等)成员
unattractive	 adj. 无魅力的, 无吸引力的
tug	 n&v. 用力拉, 拖船
envelope	 n. 信封, 封套
crucible	 n. 坩锅, 严酷的考验
misty	 adj. 有薄雾的
unbreakable	 adj. 不易破碎的, 牢不可破的
thumb	 n. 拇指
intermittently	 adv. 间歇地
flotation	 n. 浮选
healthful	 adj. 有益健康的
mesh	 n. 网，筛孔
hydration	 n. 水合作用
leafcutter	 n. [昆]南美切叶蚁
zagros	 n. 扎格罗斯山脉[伊朗西南部]
Arabian	 n. 阿拉伯人 a阿拉伯(人)的
bypass	 v. 绕开, 忽视 n旁道
segregate	 v. 隔离
willingness	 n. 乐意, 愿意
marketplace	 n. 集会场所, 市场
revenue	 n. 收入,税收
unconsciously	 adv. 无意识地；不觉察地
forebear	 n. 祖先, 祖宗
snail	 n. 蜗牛
topography	 n. 地形学
clergyman	 n. 牧师, 教士
perm	 v. /n电烫（头发）
Haiti	 n. 海地
fatigue	 n. 疲劳，劳累 v(使)疲劳
wreck	 v. 毁坏；使遇难 n失事(船等)，残骸
disintegrate	 v. 分裂成小片，瓦解
moody	 adj. 易怒的, 情绪化的
faithful	 adj. 守信的, 忠实的
awesome	 adj. 可怕的, 表示敬畏的
kink	 n. 结 v纠结,纽绞
hydroelectric	 adj. 水力电气的
favorably	 adv. 赞同地, 亲切地
proud	 adj. 自豪的, 得意的
unemployment	 n. 失业, 失业人数
preferably	 adv. 更好地,宁愿
driveway	 n. 车道
spacecraft	 n. 太空船
hermit	 n. 隐士, 隐居者
hurry	 v. 赶紧,匆忙
grab	 v. 抢夺, 攫取
pathway	 n. 路, 径
guideline	 n. 方针
November	 n. 十一月(略作Nov)
lvory	 n. 象牙
deluge	 n. 洪水, 豪雨
minutely	 adj. 每分钟的,持续的
landlocked	 adj. 陆地包围的, 内陆水域的
rape	 n&v. 掠夺, 强奸
monolithic	 n. 单片电路, 单块集成电路
cohesiveness	 n. 粘合, 凝聚性
peculiarly	 adv. 古怪地,  特有地
cruise	 vi&n. 巡游, 漫游
oceanographic	 adj. 海洋学的
vicious	 adj. 恶毒的，凶残的
turnip	 n. [植]芜箐(甘蓝)
deck	 n. 甲板, 舰板
congestion	 n. 拥塞, 充血
engender	 v. 造成
workplace	 n. 工作场所
meticulous	 adj. 一丝不苟的, 缜密的
fluent	 adj. 流利的, 流畅的
impermanence	 n. 暂时, 无常
impenetrable	 adj. 不能穿过的, 不可理喻的
expendable	 n. 消耗品, 可牺牲的
undeniable	 adj. 不可否认的, 无可辩驳的
conqueror	 n. 征服者, 胜利者
incur	 v. 招致
backbreaking	 adj. 非常辛苦的,极累人的
commercialize	 v. 使商业化
landsman	 n. 同胞,同乡
albedo	 n. [天文](星体)反照率
verbalizable	 adj. 可用言辞表达的
incompatibility	 n. 不两立, 不相容
gist	 n. 要点, 要旨
doll	 n. 洋娃娃, 玩偶
forefront	 n. 最前部, 最前线
classicism	 n. 古典主义,古典风格
foresight	 n. 远见, 深谋远虑
infertile	 adj. 贫瘠的, 不能生育的
horticultural	 adj. 园艺的
parcel	 n. 包裹 vt打包, 捆扎
hospitalize	 v. 就医,  使住院
scanty	 adj. 缺乏的,不足的
verbally	 adv. 用言辞地, 口头地
juicy	 adj. 多汁(液)的
trim	 vt&n. 修剪
physiologically	 adv. 生理上, 在生理学上
viewpoint	 n. 观点
chipmunk	 n. [动] 花栗鼠
birthday	 n. 生日
jay	 n. 松鸡；鸟
kernel	 n. 果仁，核心
wine	 n. (葡萄)酒
incline	 v. (使)倾斜；倾向于， n斜面
stereotype	 n. 老套，固定模式
magnet	 n. 磁体, 磁铁
trivial	 adj. 琐碎的，不重要的
distortion	 n. 扭曲, 变形,曲解
circumstantially	 adv. 因情形地,  附随地
repute	 n. 名誉, 名声 v认为
grizzly	 adj. 灰(白)色的
zoo	 n. 动物园
Americanism	 adj. 美国所创, 美国风俗, 美国精神
implicate	 v. 含意, 暗示
shortwave	 n. 短波
processor	 n. 加工业者；处理机
fleshy	 adj. 肉的, 多肉的
fallout	 n. 辐射微尘, 原子尘, 附带结果
pluralism	 n. 复数, 兼职
alumnus	 n. 男毕业生, 男校友
heritage	 n. 遗产, 继承权
tenet	 n. 原则
logger	 n. 樵夫, 圆木装车机
geochemical	 adj. 地球化学的
cloudlike	 adj. 云雾状的
aide	 n. 助手, 副官
vegetative	 adj. 植物生长的,植物人状态的
quickest	 adj. 最快的
overgrow	 v. 长满
enlargement	 n. 放大
downhill	 adv. 下坡；向下
idiomatic	 adj. 地道的 成语的
reckon	 v. 计算,估计
chromosphere	 n. 色球
nonproductive	 adj. 非生产性的
traverse	 v. 横渡，横越
grammar	 n. 文法
caliber	 n. 口径, 才干
junior	 adj. 年少的；资历较浅的 n年少者；晚辈
photosphere	 n. 光球
millet	 n. [植]稷, 粟
ruler	 n. 统治者, (直)尺
intimacy	 n. 亲密, 隐私
coalescence	 n. 合并, 接合
tantamount	 adj. 同等的,相当于
rag	 n. 抹布
zero	 num. 零点, 零度
inorganic	 adj. 无机的, 非自然生长的
forever	 adv. 永远, 永恒
preen	 v. 整理羽毛，(人)打扮修饰
marvelously	 adv. 奇迹般地,奇异地
cavalry	 n. 骑兵
unacceptable	 adj. 不能接受的, 不受欢迎的
unprofitable	 adj. 没有利润的, 无益的
fray	 n. 吵架 v. 磨破，恼火
reradiate	 vt. 再辐射(转播)
forge	 v. 铸造, 伪造
tinge	 n. (清淡的)色调 vt给…着色
weld	 v& n. 焊接，焊缝
fanners	 n. 电风扇,通风机
attractiveness	 n. 魅力,  吸引力
unparalleled	 adj. 无比的, 空前的
saddle	 n. 鞍；(自行车)座 vt装鞍
contamination	 n. 污染, 污染物
dyestuff	 n. 染料
disadvantageous	 adj. 不利的
southerner	 n. 南方人, 居住在南方的人
drab	 adj. 土褐色的, 单调的
vicinity	 n. 邻近, 附近
resourcefulness	 n. 足智多谋
micronesian	 n&a. 密克罗尼西亚人(的)
outrigger	 n. (承力外伸)支架
narration	 n. 叙述
ere	 pron&conj. 在…之前
usable	 adj. [亦作useable] 可用的, 合用的
harmonious	 adj. 和谐的, 和睦的
anew	 adv. 重新, 再
ironically	 adv. 具有讽刺意味地；嘲讽地
genre	 n. 类型, 流派
marginal	 adj. 边缘的, 边际的
visually	 adv. 在视觉上地, 真实地
primacy	 n. 首位
sago	 n. 西米, 西米椰子
breadfruit	 n. 面包果树
taro	 n. 芋头
sugarcane	 n. [植]甘蔗
predetermine	 v. 预先确定
nobody	 pron. 无人, 没有任何人
hazardous	 adj. 危险的, 冒险的
unsuspected	 adj. 未知的, 未被怀疑的
missionary	 n&a. 传教士(的) ,传教的,
underestimate	 vt& n. 估计不足，低估
nitrate	 n. [化]硝酸盐, 硝酸钾
exportation	 n. 出口
extremity	 n. 极度，绝境
converse	 v. 交谈 n反面说法 a相反的
grounding	 n. 基础训练, 染色的底色, [电]接地
spillage	 n. 溢出, 溢出量
curiously	 adv. 好奇地
timely	 adj. 及时的, 适时的
ashore	 adv. 向岸地, 在岸上地
redesign	 v&n. 重新设计
citizenry	 n. 公民成市民(集合称)
scenario	 n. 剧情说明书，剧本
duplicate	 n. 复制品 a复制的 vt复制，复印
wad	 n. 填料 vt填塞
smelter	 n. 熔炉, 熔炼工
diamond	 n. 钻石,金钢石
crook	 v. 使弯曲
pennycress	 n. [植]菥蓂
resort	 vi& n. 求助，采用
hydroponically	 n. 水耕法,  水栽培
petiole	 n. 叶柄, 柄部
mobilize	 v. 动员
conveniently	 adv. 方便地；合宜地
roller	 n. 滚筒
paramount	 adj. 极为重要的
Shoshone	 n. 美国休休尼族印第安人;休休尼语
puff	 v. 喘气；抽烟
salmon	 n. [鱼]鲑鱼, 大麻哈鱼
oxfordshire	 n. 牛津郡[英国]
Isle	 n. ( 小)岛
gaslit	 adj. 以煤气灯照明的
londoner	 n. 伦敦人
microbe	 n. 微生物, 细菌
tepee	 n. 美国印第安人的圆锥形帐篷
Pawnee	 n. 波尼族人(语)
experimenter	 n. 实验者
virtual	 adj. 实质的, 虚拟的
inter	 v. 埋葬
spare	 adj. 备用的；多余的
inanimate	 adj. 无生命的
halve	 v. 二等分,  分享
commentary	 n. 注释, 解说词
handsomely	 adv. 漂亮地,慷慨地
outcrop	 n. 露出地面的岩层
breadth	 n. 宽度, (布的)幅宽, (船)幅
parish	 n. 教区
nucleic	 adj. 核的
pavement	 n. 人行道, 公路
avid	 adj. 渴望的
pity	 v. 可怜 n怜悯, 同情
ascribe	 v. 归因于, 归咎于
innumerable	 adj. 无数的,数不清的
totality	 n. 全部，总数
emigration	 n. 移民出境, 侨居
peck	 vt& n. 啄,小口地吃
patriarch	 n. 家长, 族长, 创办人
grandeur	 n. 庄严, 伟大
everlasting	 adj. 永恒的, 持久的
detritus	 n. 碎石
hover	 v. 盘旋
completion	 n. 完成
abound	 v. 富于,  充满
lipid	 n. 脂质, 油脂
smoky	 adj. 冒烟的, 烟状的
confer	 v. 授予, 协商
primeval	 adj. 原始的, 早期的
viral	 adj. 滤过性毒菌的
subtraction	 n. 减少
concentric	 adj. 同中心的, 同轴的
iconography	 n. 肖像学, 肖像画法
mite	 n. 微小的东西,
innate	 adj. 先天的, 天生的
indigenous	 adj. 本地的, 天生的
fog	 n. 雾, 烟雾
remnant	 n. 残余, 剩余
graceful	 adj. 优美的
toehold	 n. （攀岩时的）立足点,（发展的）起点
wise	 adj. 英明的, 明智的
eon	 n. 永世, 无数的年代
planetary	 adj. 行星的
cuspidor	 n. 痰盂
activist	 n. 激进主义分子, 行动主义分子
hue	 n. 色彩，色调
identification	 n. 辨认, 鉴定
weakly	 a&ad. 虚弱地, 软弱地
doorknob	 n. 门把手
incessant	 adj. 不断的,  无尽的
fancy	 v. 喜欢n爱好；想象力
widow	 n. 寡妇
preliminary	 adj. 预备的, 初步的
tieback	 n. 牵索,  拉条
loyal	 adj. 忠诚的, 忠心的
afloat	 a&ad. 飘浮的, 传播的
mistrust	 n&v. 不信任, 猜疑
interviewer	 n. 会见者
affectional	 adj. 情感上的,  爱情的
southerly	 adj. 向南方的 ad在南方
covering	 n. 遮盖物
abnormal	 adj. 反常的, 变态的
shopper	 n. 购物者
correspondingly	 adv. 相应地
varicolored	 adj. 杂色的,  多色的
flap	 n. 片状垂悬物；飘动 v飘动，拍动
psychoanalyst	 n. 心理分析学者
stagecraft	 n. 编剧才能,演出技术
lifeblood	 n. 生命必须的血液, 活力的源泉
autobiography	 n. 自传
bedpan	 n. 便盆, 睡床用脚炉
streak	 n. 条纹vi疾驶 vt加条纹
duet	 n. 二重奏
daughter	 n. 女儿
sentimentalized	 v. 流于感伤,  变多愁善感
rentable	 adj. 可出租的
voluminous	 adj. 卷数多的,大量的
glare	 n. 闪耀光, 刺眼 v发眩光, 瞪视
stint	 v. 紧缩,节省
glory	 n. 荣誉, 光荣
wand	 n. 魔杖；[乐]指挥棒
cud	 n. 反刍的食物
inhibition	 n. 禁止, 阻止
innocent	 adj. 清白的, 无罪的, 天真的
chomp	 v. 大声地咀嚼, 反复咀嚼
civic	 adj. 市的, 市民的
stout	 adj. 发胖的；结实的
inconsistency	 n. 矛盾
perceivable	 adj. 可知觉的
posit	 v. 安置
incompletely	 adv. 不完全地
subjugate	 v. 使屈服，征服
lamina	 n. 薄板, 薄层
uniformitarianism	 n. [地质]均变论
guidance	 n. 指导, 领导
disappoint	 v. 使失望
wit	 n. 智力, 才智
contributory	 adj. 贡献的, 捐助的
beloved	 adj. 心爱的 n所爱的人
ration	 n. 定额, 定量
sunshine	 n. 阳光
exponent	 n. 阐述者,倡导者
intellectually	 adv. 理智地, 与智力(或思维)有关地
concoct	 v. 编造；调制
darling	 n. 心爱的人, 亲爱的
leaning	 n. 倾斜, 倾向
seclusion	 n. 隔离
vulnerability	 n. 弱点, 攻击
candid	 adj. 率直的, 坦诚的
puritan	 n. 清教徒 a清教徒的
regurgitate	 v. 反刍,（液体）回流
ruminate	 v. 反刍, 沉思
flatten	 v. 变平, 变单调
milkweed	 n. 乳草属植物
divergent	 adj. 分歧的,分开的, 偏离的
unproven	 adj. 未经证明的, 未经检验的
permafrost	 n. [地]永久冻结带
stocky	 adj. 矮壮的, 健壮结实的
convergence	 n. 集中, 收敛
conceivably	 adv. 可想到地, 想象中
rat	 n. 老鼠
statistical	 adj. 统计的, 统计学的
Venice	 n. 威尼斯(意大利港市)
tiffany	 n. 纱的一种
chase	 v. 追赶, 追逐
hardware	 n. 五金器具
bunch	 n. 串, 束 v捆成一束
uproot	 v. 连根拔起, 根除
refuge	 n. 庇护, 避难所
unnatural	 adj. 不自然的, 反常的
powerfully	 adv. 非常地,强有力地
nursing	 n. 看护, 养育
enamel	 n. 珐琅, 瓷釉
gossamer	 n. 蛛丝，薄纱  a轻而薄的
unnecessarily	 adv. 不必要地,  徒然
cube	 n. 立方体, 立方
monogamous	 n. 一夫一妻的, 单配的
unwieldy	 adj. 笨重的，笨拙的
coloration	 n. 染色, 着色
butler	 n. 仆役长, 男管家
Caribbean	 n. 加勒比海
anatomy	 n. 剖析, 解剖学
flop	 v. 猛落，惨败
pulse	 n. 脉搏, 脉冲
genuinely	 adv. 真正地,  由衷地
bomb	 n. 炸弹 vt投弹于
flint	 n. 打火石, 燧石
vicissitude	 n. 变迁兴衰
quantitative	 adj. 数量的, 定量的
suitably	 adv. 合适地, 适宜地
colorless	 adj. 无色的, 无趣味的
cider	 n. 苹果酒
bard	 n. 吟游诗人
chop	 v. 砍，劈，斩
presage	 n. 预兆 v预示
flatboat	 n. (浅水)平底船
onion	 n. 洋葱
cleanliness	 n. 洁癖, 清洁
peal	 n. 钟声  v(使)鸣响
mow	 v. 割(草)
professionalism	 n. 职业水准或特性, 职业化
monochrome	 n. 单色 单色的
incessantly	 adv. 不间断地
damper	 n. 风阀, 减音器
lightweight	 n. 轻量级选手, 不能胜任者
polychrome	 adj. 彩饰的 n多彩艺术品
coriander	 n. [植]胡荽
tedium	 n. 厌烦, 沉闷
foothill	 n. 山麓小丘, 丘陵地带
momentous	 adj. 重要的, 重大的
chateau	 n. 城堡
provincialism	 n. 地方风尚
husk	 n. 外壳；v剥壳,削皮
seashell	 n. 海贝壳
emigrant	 n. 移居外国者, 移民
quitter	 n. 轻易停止的人, 懦夫
unsettle	 v. 不安
feasibility	 n. 可行性, 可能性
unending	 adj. 不断的, 不断重复的
dispatch	 v. 分派, 派遣
eradication	 n. 连根拔除, 根除
fun	 n. 娱乐, 玩笑
disapproval	 n. 不赞成
junction	 n. 连接, 接合
upriver	 adj. 上游的 ad在上游
reorient	 v. 重定的方向(或方位)
portend	 v. 预示
neatness	 n. 整洁, 干净
nonnative	 n. 非本地的,  非本地人
chug	 n. 轧轧响声 v. 发出轧轧声
intercommunity	 n. 共同性, 共有
shear	 v. 剪, 剪切
townspeople	 n. 市民, 镇民
Utopian	 adj. 乌托邦式的，梦想的
intensely	 adv. 激烈地；热切地
biogeochemical	 adj. 生物地球化学的
loder	 n. [计]装填器
homespun	 n. 手织物
unwelcome	 adj. 不受欢迎的, 讨厌的
avoidable	 adj. 可避免的
referee	 n. 裁判员 v裁判, 仲裁
predetermined	 adj. 预订的
unselective	 adj. 非选择性的
sensitively	 adv. 易感知地,  神经过敏地
authenticity	 n. 确实性, 真实性
discredit	 v. 怀疑  n丧失名誉
superorganisms	 n. [生]超个体(指群居昆虫等的群体)
exclusion	 n. 排除, 除外
floodplain	 n. 泛洪平原, 漫滩
preservative	 n. 防腐剂
sill	 n. 基石(岩床底面)
insightful	 adj. 有深刻见解的, 富有洞察力的
misdeed	 n. 罪行, 犯罪
proficient	 n. 精通
salmonberry	 n. 美洲大树莓
optimization	 n. 最佳化, 最优化
snugly	 adv. 舒适温暖地, 整洁地
dripstone	 n. 滴水石
counterexample	 n. 反例
dapple	 n. 斑纹, 斑点 v. (使）有斑纹
multifaceted	 adj. 多层面的
flesh	 n. 肉，果肉
alluvial	 adj. 冲积的, 淤积的
welt	 n. 鞭痕, 贴边vt贴边于
rootless	 adj. 无根的, 无根据的
fecund	 adj. 生殖力旺盛的, 多产的
proliferation	 n. 增殖, 分芽繁殖
loam	 n. 肥土
petticoat	 n. 衬裙, 裙子
reluctant	 adj. 不情愿的, 勉强的
stratify	 v. (使)成层
basketwork	 n. 编织物
commercialization	 n. 商品化
acidity	 n. 酸度, 酸性, [医]酸过多, 胃酸过多
tray	 n. 盘, 碟
intently	 adv. 专心地, 集中地
excel	 v. 优秀, 胜过他人
diligence	 n. 勤奋
separable	 adj. 可分离的, 可分的
breast	 n. 胸脯，乳房
thimble	 n. 顶针；嵌环
overload	 v. 使超载  n超载
cyclic	 adj. 循环的,周期性的
worst	 a& ad. 最坏(的)，最差(的)
buyer	 n. 买主, 顾客
dim	 v. (使)暗淡,(使)模糊
lop	 v. 剪去, 砍掉
harmfully	 adv. 伤害地,有害地
boxlike	 adj. 象箱子一样的
amazingly	 adv. 惊奇地, 惊人地
pinhole	 n. 针孔, 小孔
admittedly	 adv. 不可否认的, 公认地
maternal	 adj. 母亲的, 母系的
wintertime	 n. 冬, 冬季
pliable	 adj. 柔顺的
anthropologically	 adv. 人类学上
cobble	 n. 圆石,鹅卵石 v. 修补
bachelor	 n. 单身汉, 文理学士
literate	 adj. 有读写能力的；有文化修养的
totemism	 n. 对图腾的信仰, 图腾制度
enigmatic	 adj. 谜的, 莫明其妙的
illiterate	 n. 文盲 a不识字的
allusion	 n. 提及, 暗示
inquire	 v. 询问,  查究
proclivity	 n. 倾向
awkwardly	 adv. 笨拙地, 无技巧地
contention	 n. 争夺, 争论
recount	 v. 叙述
sorrow	 n. 悲哀, 悲痛
escutcheon	 n. 有花纹的盾, 锁眼盖, 孔罩
horticulturalist	 n. 园艺家
reunion	 n. 团圆, 重聚
alphabetically	 adv. 按字母表顺序地
carelessly	 adv. 粗心地；疏忽地
supermodel	 n. 超级名模
brusquely	 adv. 唐突地, 粗率地
stubble	 n. 短须, 麦茬
solely	 adv. 独自地, 单独地
flout	 vt&n. 轻视, 嘲笑
chihuahua	 n. 吉娃娃(一种产于墨西哥的狗)
morphological	 adj. 形态学的
reactive	 adj. 反应的, 反作用的
Philippine	 adj. 菲律宾的, 菲律宾人的
geothermally	 adj. 地热的
inflow	 n. 流入, 流入物
subfreezing	 adj. 低于冰点的
anthropomorphism	 n. 拟人论,拟人观
slot	 n. 狭缝；空位
mansion	 n. 大厦, 官邸
awkward	 adj. 难使用的, 笨拙的
constraint	 n. 约束, 强制
linger	 v. 逗留, 闲荡
confinement	 n. 限制, 禁闭
centrally	 adv. 在中心, 在中央
adversity	 n. 灾祸, 逆境
imaginative	 adj. 富有想象力的
incapacitated	 vt. 使不能
onslaught	 n. 冲击
industrialist	 n. 工业家, 实业家,
relay	 n. 接力赛；中继转播(设备) vt转述；转播
soloist	 n. 独奏者, 独唱者
interstitial	 adj. 空隙的, 裂缝的,
intertidal	 n&a. 潮间带(的)
refreshment	 n. 点心, 精力恢复
sickness	 n. 疾病, 呕吐
distill	 v. 蒸馏, 滴下, 吸取
noble	 adj. 高尚的,贵族的
patrol	 v. 出巡, 巡逻
pony	 n. 矮种马，小马
intertwine	 v. (使)纠缠,(使)缠绕
morale	 n. 士气, 民心
incompatible	 adj. 不相容的 ,矛盾的
buddy	 n. <美口>密友, 伙伴
pristine	 adj. 质朴的
sludge	 n. 软泥, 淤泥
Swiss	 n. / a瑞士(的), 瑞士人(的)
hallmark	 n. 特点
jean	 n. 牛仔裤
beau	 n. 花花公子
vibrato	 n. 颤音, 振动
sparrow	 n. [鸟]麻雀
blackbird	 n. 山鸟类
rhythmic	 adj. 节奏的, 合拍的
waling	 n. 横撑
lacuna	 n. 空白, 空隙
enigma	 n. 谜, 难以理解的事物
tendon	 n. [解]腱
fiddler	 n. 拉提琴的人,游手好闲的人
carnival	 n. 狂欢节, 饮宴狂欢
assemblage	 n. 集合, 集会
saucer	 n. 茶托, 碟子
dedication	 n. 贡献, 奉献
qualitatively	 adv. 质量上
redwing	 n. [动](欧洲产的)红翼鸫
vigilance	 n. 警戒, 警惕
adventurous	 adj. 冒险的；惊险的
telltale	 adj. 泄密的
ordinance	 n. 法令，条例
tether	 n. 范围
overestimate	 vt&n. 评价过高
syrup	 n. 糖浆, 果汁
gild	 v. 镀金
ductile	 adj. 易延展的, 易教导的
anonymous	 adj. 无名的；匿名的
grateful	 adj. 感激的, 感谢的
sewerage	 n. 排水设备, 污水
dissolution	 n. 分解, 解散
urbanity	 n. 有礼貌, 文雅
avoidance	 n. 避免
permineralization	 n. 完全矿化
amenable	 adj. 顺从的；对…负有责任(义务)的
binge	 n. 狂闹, 狂欢
immerse	 v. 沉浸, 使陷入
quicksand	 n. 流沙, 敏捷
modernization	 n. 现代化
cabbage	 n. [植]甘蓝, 卷心菜
malleable	 adj. 有延展性的, 可锻的
einkorn	 n. 单粒小麦
carrot	 n. 胡萝卜
unanticipated	 adj. 不曾预料到的
pistachio	 n. [植]阿月浑子树
dredge	 n. 挖泥机 v挖掘,
propriety	 n. 适当
glassware	 n. 玻璃器具类
affluent	 adj. 丰富的, 富裕的
courtyard	 n. 庭院, 院子
singleton	 n. 一个, 独身
wrestle	 n. /v摔跤, 角力
nationalistic	 adj. 国家主义的
soothe	 v. 缓和, 安慰
deteriorates	 v. 恶化，变坏
stabilization	 n. 稳定性
aspire	 v. 热望, 立志
joinery	 n. 木工职业
mechanically	 adv. 机械地；无意识地
stride	 v. 大步走(过), 跨过
windswept	 adj. 风刮的, 被风吹扫的
swiftness	 n. 迅速，敏捷
radioactivity	 n. 放射能
seabird	 n. 海鸟(如海鸥)
Reykjavik	 n. 雷克雅末(冰岛首都)
brook	 n. 小溪 vt容忍
polarize	 v. (使)偏振, (使)极化
degas	 v. 除去瓦斯
midnight	 n. 午夜
Utah	 n. 犹他州(略作Ut,UT)
trickle	 v. 滴流
admiral	 n. 海军上将, 舰队司令
slat	 n. 板条v打击
hydrosphere	 n. 水圈, 水气
geyser	 n. 天然热喷泉
stabilizer	 n. 稳定器, 安定装置
exoskeleton	 n. [动] 外骨骼
dimply	 adj. 有酒窝的, 有凹处的
clamor	 n. 喧闹
mob	 n. 暴民 vt成群围住,聚众袭击
enjoyable	 adj. 有趣的, 愉快的
reluctantly	 adj. 不情愿地；勉强地
overbalance	 v. 失去平衡
carbonization	 n. 碳化(物)
marshland	 n. 沼泽地
viscera	 n. 内脏,内部的东西
lethal	 adj. 致命的 n致死因子
superbly	 adv. 雄伟地, 壮丽地
shipwright	 n. 造船者
ghostly	 adj. 可怕的
thrift	 n. 节俭
conservatism	 n. 保守主义
leaky	 adj. 漏的
blacken	 v. 使变黑, 诽谤
fiercely	 adv. 猛烈地, 厉害地
fox	 n. 狐狸 v奸狡地行动
verb	 n. [语]动词
faultfinding	 n. 找茬,挑剔
steadfastly	 adv. 踏实地, 不变地
untold	 adj. 未说过的,未透露的
intolerant	 adj. 不宽容的, 偏狭的
venue	 n. 审判地, 集合地
encapsulate	 v. 装入胶囊，压缩
evanescent	 adj. 迅速消失的, 短暂的
archipelago	 n. 群岛, 多岛海
usefully	 adv. 有用地
encyclopedia	 n. 百科全书
multivolume	 adj. 多卷的
supportive	 adj. 支持的
anathema	 n. 诅咒
patty	 n. 小馅饼,
workmanship	 n. 手艺, 技艺
documentary	 n. 记录片 a纪录的, 文件的
untraditional	 adj. 非传统的,不符合传统的
thoughtless	 adj. 欠考虑的
modernist	 n. 现代主义者, 现代人
bergere	 n. 围手椅
mainstream	 n. 主流
photojournalism	 n. 摄影新闻工作
souvenir	 n. 纪念品
regionalist	 n. 地方主义者, 地方主义作家
reportedly	 adv. 据传说, 据传闻
reachable	 adj. 可达成的, 可获得的
paradox	 n. 似非而是的论点, 自相矛盾的话
stratosphere	 n. 平流层, 高层次
Americana	 n. 有关美国的文物, 史料
desirability	 n. 愿望, 希求
inflexibly	 adv. 不弯曲地, 不屈地
implausible	 adj. 难信的, 似乎不合情理的
convincingly	 adv. 令人信服地, 有说服力地
unwillingness	 n. 不愿意, 不情愿
generically	 adv. 属类地, 属类上
stronghold	 n. 要塞, 据点
drench	 v. 湿透
industrially	 adv. 企业[工业]地
vitality	 n. 活力, 生命力
restatement	 n. 再声明, 重述
constituency	 n. (选区的)选民,  支持者
eclectic	 adj. 折衷的 n. 折衷主义者
preparedness	 n. 有准备, 已准备
wrinkle	 n. 皱纹 v使皱
eyeball	 n. 眼球, 眼珠子
persuasive	 n. 说服者a善说服的
seedy	 adj. 多种子的, 结籽的
thoughtfully	 adv. 思虑地, 仔细地
unbiased	 adj. 公正的
square	 adj. 正方形的,平方的 n正方形；广场
plethora	 n. 过剩,过量
openly	 adv. 不隐瞒地, 公然地
conditioner	 n. 调节者, 调节装置
dung	 n. 粪 vt施粪肥于
substantive	 adj. 独立存在的，直接的
automatic	 n. 自动机械 a自动的,机械的
replenishment	 n. 补给, 补充
fanner	 n. 通风机
globally	 adv. 世界上, 全世界
invigorate	 v. 鼓舞
civet	 n. [动物]麝猫
drown	 v. 溺死, 淹没
setup	 n. 装备, 安装,计划
untrue	 adj. 不真实的, 不正确的
dolphin	 n. 海豚
rephrase	 v. 改述
overproduction	 n. 生产过剩
moat	 n. 护城河, 城壕
replica	 n. 复制品
minority	 n. 少数, 少数民族
forum	 n. 讨论会, 论坛
aridity	 n. 干旱, 乏味
purge	 v. 清洗(除) n清洗
therapist	 n. 临床医学家
attacker	 n. 攻击者
regrettable	 adj. 可惜的, 遗憾的
cheer	 n& v. 欢呼
schist	 n. [地]片岩
Thai	 n. 泰国人, 泰国语
rime	 n. 结晶, v使蒙霜
loyally	 adv. 忠诚
artiste	 n. 技艺家
symbolically	 adv. 象征(性)地
misinterprete	 v. 误解
controllable	 adj. 可管理的, 可控制的
categorically	 adv. 断然地, 明确地
outwit	 v. 瞒骗, 以智取胜
intelligently	 adv. 聪明地；理智地
problematic	 adj. 问题的, 有疑问的
restlessness	 n. 辗转不安, 烦躁不安
bearing	 n. 举止，风度
clutch	 v. 抓住, 攫住
uncarved	 adj. 没雕刻的
macaque	 n. 短尾猿
villager	 n. 村民
fallacy	 n. 谬误, 谬论
vitascope	 n. 老式放映机
unfocused	 adj. 未聚焦的,无焦点的
anyplace	 adv. 任何地方
stealthy	 adj. 鬼鬼祟祟的, 秘密的
beng	 n. 大麻
hut	 n. 小屋, 棚屋
douse	 v. 熄灭；浸，洒
silvery	 adj. 含银的,银色光泽的
healer	 n. 医治者, 治病术士
holy	 adj. 神圣的, 圣洁的
diviner	 n. 占卜者, 占卦的人
panhandle	 n. 狭长地带 v乞讨
belter	 n. 非常好, 出色的例子
foe	 n. 敌人,危害物
terylene	 n. 涤纶
humorously	 adv. 幽默地, 滑稽地
nylon	 n. 尼龙
elimination	 n. 排除,消除
nowadays	 adv. 现今, 现在
permission	 n. 许可, 允许
crease	 n. 折缝，皱褶 v(使)起皱
rayon	 n. 人造丝, 人造纤维
olive	 n. 橄榄树
indigo	 n. 靛, 靛青
woad	 n. [植]菘蓝
needlelike	 adj. 针状的
mote	 n. 尘埃, 微粒
salal	 n. [植](产于北美洲太平洋沿岸的)沙龙白珠树
abnormality	 n. 变态 畸形
hugely	 adv. 巨大地, 非常地
acetate	 n. [化]醋酸盐
micronutrient	 n. [生]微量营养素
turmeric	 n. [植]姜黄, 姜黄根, 姜黄根粉末
christian	 n. /a基督徒,基督教的
saffron	 n. [植]藏红花
overprint	 vt& n. 套印, 印戳
religiously	 adv. 虔诚地, 笃信地
deem	 v. 认为, 相信
storyteller	 n. 说故事的人, 作家
ritualize	 v. 使仪式化, 奉行仪式主义
teller	 n. 讲话的人, 告诉的人
abruptness	 n. 唐突,粗鲁
pantomimic	 adj. 哑剧的
slider	 n. 滑雪者, 滑冰者
subglacial	 adj. 冰川下的
cute	 adj. 可爱的, 聪明的
hike	 n&v. 徒步旅行
rhythmically	 adv. 有节奏地
sincerity	 n. 诚挚, 真实
cleverness	 n. 聪明, 机灵
bombardment	 n. 炮击, 轰击
lounger	 n. 漫步的人, 懒人
northward	 adv. 向北 adj. 向北的
dugout	 n. 防空洞, 独木舟
moccasin	 n. 鹿皮鞋, 软拖鞋
interruption	 n. 中断, 打断
chronologically	 adj. 按年代的
activate	 v. 激活, 使活动
episodic	 adj. 插曲式的,短暂的
fiord	 n. (尤指挪威的)海湾, 峡湾
esteem	 n. ／ vt尊重，敬重
colosseum	 n. 罗马圆形大剧场(建于公元80年,耗时5年,至今大部分尚存)
holder	 n. 持有者, 占有者
achievable	 adj. 做得成的, 可完成的
fixation	 n. 固定, 注视
acknowledge	 v. 承认, 答谢
uncooperative	 adj. 不合作的, 不配合的
hub	 n. 中心,轮轴
meteoroid	 n. 流星体
threadlike	 adj. 线状的
pulp	 n. 酱；果肉；纸浆
physician	 n. 医师, 内科医师
sod	 n. 草地
clench	 v. 捏紧；紧紧握住
fist	 n. 拳头
supplementation	 n. 增补,补充
disrepute	 n. 坏名声
syndrome	 n. 综合病症
rectify	 v. 矫正, 调整
herein	 adv. 在此处, 此中
denial	 n. 否认,谢绝
sugarlike	 adj. 类糖的(糖似的)
rake	 n. 耙子, 斜度
survivability	 n. 残存性
theological	 adj. 神学(上)的
dorsal	 adj. 背的, 脊的
irritability	 n. 过敏性, 兴奋性
neurilemmal	 adj. 神经膜的, 神经鞘的
neuroglia	 n. [解]神经胶(质)
mushroom	 n. 蘑菇
breakdown	 n. 崩溃, 衰弱
yeast	 n. 酵母, 发酵粉
concurrent	 adj. 一致的；同时的
stratification	 n. 分层, 成层法
microcosm	 n. 微观世界
unsureness	 n. 不确定, 缺乏自信
fright	 n. 惊骇, 吃惊
belie	 v. 掩饰
hesitant	 adj. 迟疑的, 犹豫不定的
sewer	 n. 排水沟，下水道
slum	 n. 贫民窟
detection	 n. 察觉, 侦查
glider	 n. 滑行(或物), 滑翔机
anytime	 adv. 任何时候, 无论何时
intuitive	 adj. 有直觉力的，直觉到的
undernutrition	 n. 营养不良
urgent	 adj. 急迫的, 紧急的
hohokam	 adj. 霍霍坎文化的
irresponsible	 adj. 不负责任的, 不可靠的
retrospect	 n. 回顾
chronic	 adj. 慢性的, 延续很长的
index	 n. 索引, 指数
flatfish	 n. 比目鱼
attic	 n. 阁楼
sundial	 n. 日昝仪, 日规
butte	 n. 孤立的丘
lightly	 adv. 轻轻地, 轻松地
uneducated	 adj. 没受教育的；文盲的
securely	 adv. 安全地；无疑地
uncorrupt	 adv. 不腐败的;廉洁的
landscapist	 n. 风景画家
scenery	 n. 风景, 景色
complimentary	 adj. 称赞的；免费的
incorporation	 n. 合并；组建公司
sobriquet	 n. 假名, 绰号
socialize	 v. 使社会化, 使社会主义化
rename	 v. 重新命名, 改名
awaken	 v. 唤醒, 醒来
afflict	 v. 使痛苦, 折磨
governance	 n. 统治, 管理
methodically	 adv. 有条不紊地, 有方法地
feverishly	 adv. 兴奋地, 发热地
personnel	 n. 人员, 职员
antifungal	 adj. 抗真菌的, 杀真菌的
senior	 adj. 年长的, 资格较老的
flashy	 adj. 浮华的
dimly	 adv. 微暗, 朦胧
earthward	 adv. 向地球, 向地面
justice	 n. 正义, 公平
overwhelmingly	 adv. 压倒性地, 不可抵抗地
assembly	 n. 集会，集合;组装
stressful	 adj. 紧张的, 压力重的
exertion	 n. 努力, 发挥,运用
deformity	 n. 残缺, 畸形
disruptive	 adj. 使破裂的, 分裂性的
girder	 n. 梁
bustle	 v. 匆匆忙忙
unforeseen	 adj. 无法预料的
conversational	 adj. 会话的, 对话的
governor	 n. 统治者, 管理者
abbreviate	 v. 缩写, 简化
restrain	 v. 抑制, 制止
broadcaster	 n. 播送设备, 广播员
adviser	 n. 顾问,
clarification	 n. 澄清, 净化
awful	 adj. 可怕的, 威严的,
speechwriter	 n. 演讲稿撰写人
televisual	 adj. 电视的
electrify	 v. 使充电, 使通电
legislative	 adj. 立法的, 立法机关的
melodic	 adj. 有旋律的,调子美妙的
predictably	 adv. 可预言地, 不出所料地
climatically	 adv. 气候上, 风土上
lethargic	 adj. 昏睡的
chicken	 n. 小鸡
compute	 v. 计算, 估计
pathology	 n. 病理学
offend	 v. 犯罪, 冒犯
disk	 n. 磁盘,圆盘
helper	 n. 帮忙者, 助手
triangular	 adj. 三角形的, 三人间的
counsel	 n. 律师 vt劝告，提议
programme	 n. 程序, 编程
curvature	 n. 弯曲, 曲率
endpoint	 n. 端点
vocational	 adj. 职业的，业务的
datebase	 n. 数据库, 资料库
compulsory	 adj. 强制的,  义务的
shyness	 n. 羞怯, 胆怯
lethargy	 n. 无生气
hostility	 n. 敌意, 不友善
credential	 n. 外交使节所递的国书, 信任状
disorientation	 n. 迷失方向, 迷惑
additionally	 adv. 另外, 同时
uninterrupted	 adj. 不停的, 连续的
bureaucratization	 n. 官化
excursion	 n. 远足，短途旅行
dissension	 n. 意见不同, 纠纷
embryonic	 adj. 胚胎的，萌芽期的
breakup	 n. 破裂, 崩溃
necklace	 n. 项链
bylaw	 n. 附则, 法规
republish	 v. 再版, 重新发表
publicly	 adv. 公然地, 舆论上
distantly	 adj. 疏远的, 遥远的
oily	 adj. 油的, 油滑的
assault	 n&v. 攻击, 袭击
fierce	 adj. 凶猛的, 猛烈的
categorize	 v. 加以类别, 分类
severity	 n. 严肃, 严格
definitively	 adv. 决定性地, 最后地
lineage	 n. 血统, 世系
slam	 v. 砰地关上(放下)
flaming	 adj. 熊熊燃烧的；热情的
pique	 n. 生气, 愤怒
internet	 n. 国际互联网，因特网
newscast	 n. <美>新闻广播
fateful	 adj. 重大的；不幸的
antipathy	 n. 憎恶, 反感
hurtle	 v. 急飞
glisten	 v. 闪光
predate	 v. 提早日期, 居先
Finnish	 adj. 芬兰的
cenote	 n. 天然井
empathy	 n. 移情作用, 共鸣
hardwood	 n. 硬木, 阔叶树
sash	 n. 腰带，肩带
prohibit	 v. 禁止, 阻止
foment	 v. [医]热敷
gesture	 n. 姿态, 手势
pretentious	 adj. 自命不凡的，自负的
heredity	 n. 遗传, 形质遗传
yean	 v. 生产, 生育
dining	 n. 吃饭
amenity	 n. 宜人, 礼仪
changeover	 n. 转换, 大变更
meander	 v. 蜿蜒而行
skylight	 n. 天窗
palatable	 adj. 味美的
contender	 n. 竞争者
invariable	 n&a. 不变的, 永恒的
depreciation	 n. 贬值, 减价
unspecified	 adj. 未详细说明的
disability	 n. 无力, 残疾
helplessness	 n. 无能为力
retentive	 adj. 有记忆力的
amplifier	 n. 扩音器, 放大器
scan	 n&v. 扫描；浏览
unfailingly	 adv. 无穷尽地, 可靠地
swell	 v. (使)膨胀, 增大
needless	 adj. 不需要的, 不必要的
bulge	 n&v. 膨胀，鼓起
undiscovered	 adj. 未被发现的
helplessly	 adv. 无能为力地
overnight	 ad& a. (在)整夜(的)；突然(的)
dentist	 n. 牙科医生
optometrist	 n. 验光师, 视力测定者
merciless	 adj. 残忍的；无情的
strenuous	 adj. 奋发的, 费力的, 积极的
passion	 n. 激情，热情
emancipate	 v. 释放, 解放
protagonist	 n. 提倡者，支持者
leo	 n. [天]狮子座，狮子宫
cruel	 adj. 残酷的, 悲惨的
grimly	 adv. 严格地,冷酷地
apportion	 v. 分配
commentator	 n. 评论员, 解说员
repay	 v. 偿还, 报答
earning	 n. 所得,收入
bankruptcy	 n. 破产
subjugation	 n. 镇压, 平息
uncontrollably	 adj. 无法管束的, 控制不住的
lazily	 adv. 懒洋洋地
radioactive	 adj. 放射性的，有辐射能的
consortium	 n. 财团, 联合, 合伙
preventive	 adj. 预防性的
supplementary	 adj. 增补的，补充的
multidirectional	 adj. 多方向的
booklet	 n. 小册子
curio	 n. 古董, 古玩
chandler	 n. 杂货零售商
speck	 n. 斑点
stair	 n. 楼梯
encircle	 v. 环绕, 围绕
surmount	 v. 克服；置于…顶上
heading	 n. 标题
Californian	 n. 加利福尼亚州人 a加州的
reaumur	 n&a. 列氏温度计(的)
mycology	 n. [植]真菌学
glean	 v. 拾落穗, 收集
nevus	 n. [医]痣
watcher	 n. 监票员, 看守人
filament	 n. 细丝, 灯丝
thermal	 adj. 热的, 热量的
ostrich	 n. 鸵鸟
faintly	 adv. 微弱地, 朦胧地
dazzlingly	 adv. 灿烂地, 耀眼地
tint	 n. 色彩
varve	 n. [地质]纹泥
server	 n. 服务器
benign	 adj. 仁慈的, 温和的, 良性的
feathery	 adj. 生有羽毛的,柔软如羽毛的
churn	 v. 搅拌, 搅动
awhile	 adv. 片刻, 一会儿
proudly	 adv. 骄傲地
pedestrian	 n. 步行者，行人
oilskin	 n. 油布, 防水布
splash	 n&v. 溅, 飞溅
unnoticed	 adj. 不被注意的, 被忽视的
thunderous	 adj. 打雷的, 雷鸣般的
faraway	 adj. 遥远的
ploy	 n. 花招，手段
noisily	 adv. 吵闹地
squeak	 n. 吱吱声 v. 吱吱叫
crouch	 v. 蜷缩, 蹲伏
regain	 v. 收回；恢复
outcome	 n. 结果, 成果
heroism	 n. 英雄品质, 英雄主义
inconspicuously	 adv. 难以觉察地, 不显著地
matron	 n. 主妇；护士长
suspension	 n. 暂停, 中止
stratagem	 n. 战略, 计谋
brood	 v. 沉思；孵蛋 n一窝
vole	 n. 田鼠
mimic	 v. 模仿, 模拟
unmanageable	 adj. 难处理的, 难控制的
rivet	 n. 铆钉  v固定
hairy	 adj. 毛发的，多毛的
reception	 n. 招待会；接受
flyway	 n. 候鸟迁徙所经的路径
nozzle	 n. 管口, 喷嘴
bonanza	 n. 走运，发财
electrician	 n. 电工, 电学家
overburden	 v. 装载过多, 负担过多
lavish	 adj. 无节制的；浪费的 vt慷慨给予，挥霍
bravery	 n. 勇敢
creek	 n. 小溪, 小河,
waster	 n. 挥霍者, 废品
Stamford	 n. 斯坦福德[美国康涅狄格州西南部城市]
gallon	 n. 加仑
beer	 n. 啤酒
tact	 n. 机智, 手法
trapper	 n. 捕兽者, 捕捉器
romantically	 adv. 浪漫地, 空想地
prosecute	 v. 起(公)诉，告发
sonic	 adj. 音速的
enthusiast	 n. 热心家, 狂热者
smoothly	 adv. 平稳地
gingham	 n. 条纹棉布
slipper	 n. 拖鞋
instantaneous	 adj. 瞬间的，即刻的
shoeshine	 n. 鞋油, 擦皮鞋
politely	 adv. 有礼貌地
modestly	 adv. 谨慎地, 适当地
balcony	 n. 阳台, 包厢
loudspeaker	 n. 扩音器, 喇叭
confluence	 n. 汇合
crunch	 vi&n. 嘎吱嘎吱地响(声)
juggle	 v&n. 玩杂耍
seize	 v. 抓住,夺取
mormon	 n. 摩门教徒, 一夫多妻主义者
atheist	 n. 无神论者
gallop	 n. /v疾驰, 飞奔
trestle	 n. 架柱, 支架
ravine	 n. 沟壑, 峡谷
spidery	 adj. 蜘蛛(网)一般的, 细长足的
wildcatter	 n. 投机份子
onlooker	 n. 旁观者
folly	 n. 愚蠢, 荒唐事
lubricate	 v. 润滑 v加润滑油
trespasser	 n. 侵入者, 侵犯者
waxes	 n. 蜡，蜂蜡 vt给…上蜡
grocery	 n. 食品杂货店
refiner	 n. 精炼者, 精炼机
richly	 adv. 富裕地, 丰富地
remodel	 v. 重新塑造, 改造
kier	 n. 漂煮锅
seepage	 n. 渗流, 渗出的量
cooperative	 adj. 合作的, 协力的
ponytail	 n. 马尾辫(一种发型)
disuse	 n&v. 废弃, 废止
adequately	 adv. 充分地
wither	 v. 凋谢,枯萎
facsimile	 n. 摹写, 传真
unproductive	 adj. 不生产的, 徒劳的
methodical	 adj. 有条理的，井然的
contest	 n&v. 论争, 竞赛
bike	 n. 脚踏车, 自行车
indulge	 v. 纵容
unnoticeable	 adj. 不引人注意的(
termination	 n. 终止
dismay	 n&v. 沮丧, 绝望
irreparable	 adj. 无法修复的，不能挽回的
birthright	 n. 生来就有的权利, 长子继承权
negotiation	 n. 商议, 谈判
fruitless	 adj. 不结果实的
conscription	 n. 征召
aloof	 adj. 冷漠的
downtown	 adv. 在市区 adj. 市区的
delectable	 adj. 使人愉快的
intermittent	 adj. 间歇的，断断续续的
hatchery	 n. 孵卵所
doggedly	 adv. 固执地, 顽强地
depot	 n. 贮藏所, 仓库
Minnesota	 n. 明尼苏达州(美国州名)
erupt	 v. 喷出 vi爆发
truck	 n. 卡车, 敞棚货车
phonetic	 adj. 语音的,语音学的
lap	 n. 膝上；一圈 v. 舔(食)；拍打
chic	 adj. 别致的, 时髦的
executive	 n. 主管，行政官a行政的
slapstick	 n. 闹剧, 趣剧
hairdo	 n. 发型
maraca	 n. [音]沙球
beater	 n. 搅拌器
picnic	 n. 野餐
craze	 n. 狂热
synthesizer	 n. 综合者, [电子]合成器
liberation	 n. 释放, 解放
thunder	 n. 雷,雷声
blip	 n. （在雷达屏幕显示出的）物体光点, 尖音信号
excessively	 adv. 过分地, 过度地, 极度地
indiscernible	 adj. 看不清的
lopsided	 adj. 倾向一方的, 不平衡的
hippopotamus	 n. 河马
laugh	 v&n. 笑, 笑声
groan	 n&v. 呻吟, 叹息
sneeze	 n. 喷嚏 vi打喷嚏
tapir	 n. [动]貘
scream	 v. /n尖声叫, 尖叫声
horsefly	 n. 马蝇
nonelectronic	 adj. 非电子的
vestige	 n. 痕迹
baseball	 n. 棒球(运动)
reverently	 adv. 恭敬地, 虔诚地
homeless	 adj. 无家的, 无家可归的
mystify	 v. 迷惑
mesmerize	 v. 施催眠术
undifferentiated	 adj. 无差别的, 一致的
gravitation	 n. 地心吸力, 引力作用
springtime	 n. 春天, 春季
sled	 n. (小)雪撬
ski	 n. 滑雪板 vi滑雪
swampy	 adj. 沼泽的，似沼泽的
pickaxe	 n. 鹤嘴锄, 手镐
cubic	 adj. 立方体的, 立方的
taint	 v. 感染 n污点
pestilential	 adj. 引起瘟疫的, 有害的
miasmic	 adj. 毒气的, 瘴气的
onstage	 adj. 台上的,舞台表演区的
holm	 n. (河，湖中的)小岛
anymore	 adv. 不再, 再也不
trainload	 n. 装载量, 列车载重
ziggurat	 n. 古代亚述及巴比伦之金字形神塔(顶上有神殿)
shapeless	 adj. 不成形的, 无定形的
troupe	 n. 剧团
postmodern	 adj. 后现代主义的
expressionless	 adj. 无表情的
clumsy	 adj. 笨拙的
foghorn	 n. [航海]雾角,尖而响的声音
majestic	 adj. 雄伟的，壮丽的
viennese	 n&a. 维也纳人（语）(的)
commissioner	 n. 委员, 专员
plum	 n. [植] 李子, 洋李
seaman	 n. 海员, 水手
stilt	 n. 高跷, 支柱
stele	 n. 石碑,  匾额
chronology	 n. 年代学, 年表
overt	 adj. 明显的, 公然的
colorfully	 adj. 华美的, 富有色彩的
eminence	 n. 出众, 显赫
beacon	 n. 信号灯，闪光灯
stubbornness	 n. 倔强, 顽强
prearrange	 v. 预先安排
persevere	 v. 坚持
softball	 n. 垒球运动, 垒球
Shakespeare	 n. 莎士比亚(1564-1616,英国剧作家,诗人)
abuse	 n&v. 滥用, 虐待,辱骂
cither	 n. 齐特拉琴(古希腊一种类似竖琴的古乐器)
modernistic	 adj. 现代的, 现代主义的
wick	 n. 蜡烛心, 灯芯
corp	 n. 公司
sturdiness	 n. 强健, 雄壮, 坚固
wicker	 n. 柳条 a柳条制的
austere	 adj. 简朴的, 严厉的
nationwide	 adj. 全国性的
astrological	 adj. 占星的, 占星术的
mirage	 n. 海市蜃楼,幻想
repertory	 n. 仓库
rescue	 v. ／ n营救，救援
nearness	 n. 靠近, 接近
pavlova	 n. 奶油水果蛋白饼
nourishment	 n. 食物, 营养品
schoolroom	 n. 教室
helpless	 adj. 无助的,没用的
grandparents	 n. 外祖父母, 祖父母
fruitfulness	 n. 多产, 肥沃
cathedral	 n. 大教堂
ignition	 n. 点火, 点燃
midwestern	 adj. 美国中西部的
interject	 v. 插嘴, 突然插入
lightness	 n. 轻盈, 灵活
idyllic	 adj. 田园短诗的, 牧歌的
resonance	 n. 共鸣,  反响
allegory	 n. 寓言
rainbow	 n. 彩虹
pretense	 n. 借口,伪装，自吹
gratuitous	 adj. 无缘无故的；免费的
liveliness	 n. 活泼
stench	 n. 恶臭, 臭气
slime	 n. 粘土, 粘液
tern	 n. 三个一组, [鸟]燕鸥
starlike	 adj. 星形的, 星般闪烁的
slimy	 adj. 黏滑的, 卑劣的
germ	 n. 微生物, 细菌
storeroom	 n. 储藏室, 库房
Oakland	 n. 奥克兰(美国加利福尼亚州西部城市)
allude	 v. 暗指，提及
sunburst	 n. 从云隙射下的阳光
lordly	 adj. 高贵的；高傲的
ditch	 n. 沟,  壕沟
rebellious	 adj. 反抗的，难控制的
disciple	 n. 信徒, 弟子
arctic	 adj. 北极的 n北极(圈)
tadpole	 n. [动]蝌蚪
propensity	 n. 倾向
wildflower	 n. 野花
stifle	 v. 窒息, 抑制
whip	 n. 鞭子 v鞭打
debut	 n. 首次演出，初次露面
sufficiency	 n. 充足；充裕
rebel	 n. 反叛分子 v. 反叛；反对
foray	 v&n. 突袭，偷袭
pupil	 n. 小学生
lacquer	 n. 漆, 漆器
gobi	 n. 戈壁
maiden	 n. 少女, 处女
academically	 adv. 学业上
vaccinate	 v. 接种疫苗，给…打防疫针
summarization	 n. 摘要, 概要
flu	 n. 流感
haphazardly	 adv. 不规则地, 随意地
geometrically	 adv. 成几何级数(图形)地
solidly	 adv. 坚硬地, 稳固地
timid	 adj. 胆小的, 羞怯的
embroider	 v. 刺绣，修饰
drugstore	 n. 药房, 杂货店
speckle	 n. 小斑点  vt点缀
gentlemanly	 adj. 绅士派头的
gamble	 v& n. (打)赌；投机，冒险
override	 v. 不顾，否决
citadel	 n. 根据地, 大本营
fresher	 n. 大学一年级新生, 新鲜人
outcry	 n. 大声疾呼
edit	 v. 编辑, 校订
postgraduate	 n. 研究生
manifesto	 n. 宣言, 声明
treasurer	 n. 司库,财务主管
gnaw	 v. 啃，咬
endear	 v. 使亲密
industrious	 adj. 勤劳的, 勤奋的
participator	 n. 参加者
trespass	 n&v. 侵犯，擅自进入
darn	 v. 缝补，补缀
irony	 n. 反话, 讽刺
cheerless	 adj. 不快活的
sovereignty	 n. 君主, 主权
renunciation	 n. 放弃，抛弃
Calvinist	 n. 加尔文教徒(见Calvin)
sociability	 n. 好交际,善于交际
frivolity	 n. 轻薄,轻浮
womanhood	 n. 女人,女人气质
stern	 adj. 严厉的 n. 船尾
patriarchal	 adj. 家长的, 族长的
disinterest	 n. 无兴趣, 不关心
grip	 v. 握紧，抓牢
luce	 n. 一种成鱼
writhe	 v. 翻滚，扭动
overhead	 ad& a. 在头顶上(的)
embroidery	 n. 刺绣(品)
hobby	 n. 业余爱好
radish	 n. [植]萝卜
ventilation	 n. 通风, 流通空气
babble	 v. 说蠢话，牙牙学语
belle	 n. 美女
fragility	 n. 脆弱, 虚弱
innocence	 n. 清白
nonconformity	 n. 不信奉国教
cardinal	 adj. 主要的, 最重要的
willingly	 adv. 自动地, 欣然地
fervor	 n. 热情, 热烈
undergraduate	 n. (尚未取得学位的)大学生
rosy	 adj. 蔷薇色的, 玫瑰红色的
telecommuter	 n. 远程工作者
seduce	 v. 勾引；引诱
programmer	 n. 程序师, 程序规划员
paycheck	 n. 薪水支票, 工资
disillusion	 v. 醒悟
accountant	 n. 会计(员), 会计师
tranquil	 adj. 安静的
solitude	 n. 孤独
chary	 adj. 小心的，审慎的
farmhand	 n. 农业工人，农场工人
tardiness	 n. 缓慢
harvester	 n. 收割机
reliant	 adj. 信赖的, 依靠的
facet	 n. 小平面, 方面, 刻面
transpose	 v. 调换, 颠倒顺序
culturally	 adv. 人文地, 文化地
iconographic	 adj. 肖像的, 图像材料的
earnestness	 n. 坚定, 认真
folkloric	 adj. 民间传说的, 民俗的
vibrant	 adj. 震动的；明亮的
unfold	 v. 展开,显露，展现
coherence	 n. 一致
reprieve	 n& v. 缓刑，暂时解救
malfunction	 n. 故障
eloquent	 adj. 雄辩的, 有口才的
introspective	 adj. 反省的
etching	 n. 蚀刻版画
gouache	 n. 树胶水彩画
frisky	 adj. 活泼的, 欢闹的
yelp	 n. 咆哮
barrelful	 n. 一桶之量, 大量
chorus	 n. 合唱(队)
unwell	 adj. 不舒服的
displacement	 n. 移置, 转移, 取代
chaotically	 adv. 浑沌地
bathe	 v. 沐浴 n. 洗澡
fearsome	 adj. 可怕的
scour	 v. 四处搜索；洗涤
philology	 n. 语言学, 文献学
gentleman	 n. 阁下, 先生
unobservable	 adj. 不可见的
sluggishly	 adj. 缓慢的, 懒惰的
balsam	 n. 香液
weightily	 adv. 沉重地, 重要地
zoology	 n. 动物学, 生态
horseback	 n. 马背, 隆起的条状地带
replant	 v. 再植, 改种
nonessential	 adj. 非本质的
grammatical	 adj. 语法的,合乎文法的
sensational	 adj. 轰动的, 耸人听闻的
filmy	 adj. 薄膜的, 朦胧的
pearly	 adj. 珍珠似的
arrest	 v. 逮捕, 拘留
nationally	 adv. 全国性地, 在全国范围内
listless	 adj. 倦怠的, 冷漠的
aloft	 adv. 在高处, 在上
hacienda	 n. 庄园
vaguest	 adj. 含糊的，不明确的
furnishing	 n. 供给(装备)
oversight	 n. 疏忽,  看管
veteran	 n. 老兵,老手 adj. 经验丰富的
stinger	 n. 刺激者, 讽刺者
inundate	 v. 淹没
dusty	 adj. 满是灰尘的, 粉状的
suffice	 v. 足够 v. 使满足
luster	 n. 光彩, 光泽
housewares	 n. 家用器皿
drainpipe	 n. 排水管
trash	 n. 垃圾, 废物
clayware	 n. 黏土制品
weedy	 adj. 杂草多的
mermaid	 n. 美人鱼
hart	 n. 雄赤鹿
chant	 n. 圣歌
plaza	 n. 广场，集市
slay	 v. 杀死，宰杀
falsely	 adj. 虚伪地,  错误地
emergent	 adj. 紧急的
landownership	 n. 土地所有
metaphysical	 adj. 形而上学的, 纯粹哲学的
feeble	 adj. 虚弱的, 衰弱的
joyous	 adj. 快乐的, 高兴的
forceful	 adj. 有力的, 强烈的
reluctance	 n. 不愿, 勉强
engagement	 n. 约会, 婚约
swear	 v. 宣誓, 发誓
lover	 n. 爱人, 爱好者
epithet	 n. 绰号, 称号
collapsible	 adj. 可折叠的;可拆卸的
scruffy	 adj. 肮脏的，不洁的
derisive	 adj. 嘲笑的
messy	 adj. 肮脏的, 凌乱的
misery	 n. 痛苦, 苦恼
fragmentary	 adj. 由碎片组成的
oxidizable	 adj. 可氧化的
difluoride	 n. 二氟化物
zirconium	 n. 锆
publicity	 n. 公开
relict	 n. 残遗物
effortlessly	 adv. 毫不费力地, 轻易地
defensible	 adj. 可防御的
idealistic	 adj. 理想主义的, 空想的
blister	 n. 水泡
statuette	 n. 小雕像
featureless	 adj. 无特色的, 平凡的
creed	 n. 信条
scraggly	 adj. 零乱的, 锯齿状的
zeal	 n. 热心, 热情
slapdash	 adj. 匆促的
badge	 n. 徽章, 证章
shrubby	 adj. 灌木的
brutal	 adj. 残忍的, 兽性的
impinge	 v. 撞击
scrubbiness	 adj. 褴褛的,灌木丛生的
flavin	 n. [化]黄素, 四羟酮醇
mountainside	 n. 山腹, 山腰
sunbaked	 adj. 晒干的
testimony	 n. 证词, 宣言
alumina	 n. [化]氧化铝(亦称矾土)
hairlike	 adj. 毛一般的, 细微的
coating	 n. 被覆, 衣料
wee	 adj. 很少的, 微小的
watertight	 adj. 不漏水的, 无懈可击的
rationalism	 n. 理性主义, 唯理论
willful	 adj. 任性的, 故意的
worthiness	 n. 价值,值得
moralistic	 adj. 狭隘道德观的, 说教的
conscientious	 adj. 认真的，勤勤恳恳的
syntax	 n. 语法, 句法
nonsense	 n. 胡说, 废话
loudness	 n. 大声, 喧闹
terminate	 v. 停止, 终止
playful	 adj. 爱玩耍的；幽默的
discontinuity	 n. 不连续, 中断
prosaic	 adj. 单调乏味的,平淡的
discrimination	 n. 歧视；辨别力
vowel	 n&a. 元音(的)
dew	 n. 露水
shroud	 n. 裹尸布, 寿衣 v. 用裹尸布裹, 遮蔽
fearless	 adj. 不怕的，无畏的
doom	 v. 注定，命定 n厄运
install	 v. 安装, 安置
landholder	 n. 地主, 土地拥有者
emergency	 n. 紧急情况, 突然事件
workable	 adj. 可经营的, 可使用的
moralism	 n. 道德主义, 说教
dune	 n. 沙丘
monarchy	 n. 君主政体, 君主国
nationalism	 n. 民族主义, 国家主义
flowerpot	 n. 花盆, 花钵
resale	 n. 再贩卖, 转售
dubious	 adj. 可疑的, 不确定的
centralization	 n. 集中, 中央集权化
profusion	 n. 丰富
seacoast	 n. 海滨
lush	 adj. 茂盛的, 丰富的
champagne	 n. 香槟酒
pesky	 adj. 讨厌的，烦人的
sorrowful	 adj. 悲伤的，使人伤心的
overtone	 n. 寓意；眩外音；暗示
towel	 n. 毛巾
purposefully	 adv. 有目的地, 蓄意地
dislodge	 v. 驱逐
lint	 n. 绷带用麻布
shortness	 n. 短缺
softness	 n. 柔和, 温柔
domestically	 adv. 家庭式地,国内地
behaviorist	 n. 行为主义者, 行为科学家
foil	 n. 箔, 金属薄片
newsworthy	 adj. 有报导价值的
imminent	 adj. 逼近的, 即将发生的
proficiently	 adv. 熟练地
locomotor	 adj. 运动的
cloudy	 adj. 多云的, 阴天的
wirephoto	 n. 有线传真
attractively	 adv. 有吸引力地，诱人地
snowy	 adj. 雪的, 多雪的
inaugurate	 v. 开始；举行就职典礼
kit	 n. 成套工具, 用具包
comminute	 v. 使成粉末,粉碎
indebted	 adj. 受惠的, 负债的
cache	 v. 贮藏，隐藏  n藏物处
germination	 n. 萌芽, 发生
unseen	 adj. 未见过的
guest	 n. 客人, 来宾
cognition	 n. 认识
forelimb	 n. 前肢
limy	 adj. 含石灰的, 石灰似的
lithographic	 adj. 石版印刷的, 石版的
lagoon	 n. 泻湖 礁湖
numeral	 n. 数字
eloquently	 adv. 雄辩地, 有口才地
extravagantly	 adv. 挥霍无度地
crest	 n. 浪尖, 冠
centrality	 n. 中心, 中央
insatiable	 adj. 不知足的, 贪求无厌的
prospective	 adj. 预期的
bewilder	 v. 使迷惑，使难住
obstruction	 n. 阻塞, 妨碍
procure	 v. 获得, 取得
subsidiary	 adj. 辅助的, 补充的
putrefaction	 n. 腐败, 腐败物
pasteurization	 n. 加热杀菌法, 巴斯德杀菌法
summertime	 n. 夏季
meltdown	 n. 彻底垮台
chlorate	 n. [化]氯酸盐
intersection	 n. 交集, 交叉点
stepper	 n. 行走的人或动物, 跳舞者
supposition	 n. 假定, 想象
smoothness	 n. 平坦， 光滑
vertically	 adv. 垂直地
dichotomy	 n. 两分, 二分法
clipper	 n. 大剪刀, 快速帆船修剪者
fruitful	 adj. 果实结得多的, 多产的
flag	 n. 旗，旗帜
acoustical	 adj. 听觉的, 声学的
kitchenware	 n. 厨房用具
intimidate	 v. 胁迫
serviceable	 adj. 有用地，耐用的
chalky	 adj. 白垩的
Yorkshire	 n. 约克郡,约克夏(英国英格兰原郡名)
royalty	 n. 皇室, 王权
renowned	 adj. 有名的, 有声誉的
worthy	 adj. 值得的,有价值的
kinfolk	 n. 亲属
prompt	 v. 推动；提示
nonliving	 adj. 无生命的, 非活体的
impervious	 adj. 不透的；不受影响的
deceptive	 adj. 骗人的，造成假象的
wok	 n. 锅，炒菜锅
appraisal	 n. 估计, 评估
lone	 adj. 孤独的，寂寞的
dissenter	 n. 持异议者
enure	 v. 使习惯于 v. 变得更有利
conformity	 n. 一致, 符合
unanimity	 n. 全体一致
pedagogical	 adj. 教学(法)的
hopper	 n. 单足跳者
affirm	 v. 断言, 确认
scientifically	 adv. 科学地, 系统地
modus	 n. 方法, 形式
laborsaving	 adj. 节省劳力的;省力气的
spontaneity	 n. 自发性
respectable	 adj. 可敬的；有身价的
paperback	 n. 平装本, 纸面本
strap	 n. 带, 皮带 v. 用带捆扎
topical	 adj. 有关时事的
exclaim	 v. 呼喊, 惊叫
ratchet	 n. 棘轮, 棘齿
humiliate	 v. 羞辱, 使丢脸
conduction	 n. 传导
indefinitely	 adv. 不确定地
unused	 adj. 不用的；未消耗的
ala	 n. (昆虫的)翼, 翅
virgin	 n. 处女, 未婚女子
terrifyingly	 adv. 恐怖地
conference	 n. 会议, 讨论会
kinsman	 n. 男性亲戚, 同族者
Norman	 n&a. 法国诺曼第人(的)
chaste	 adj. 贞洁的, 朴素的
sully	 v. 玷污
incapable	 adj. 无能力的
mouldy	 adj. 发霉的, 腐朽的, 旧式的
condemn	 v. 判刑,谴责
handicap	 n. 障碍 v. 妨碍
dumb	 adj. 哑的,沉默的
hygiene	 n. 卫生, 卫生学
happily	 adv. 幸福地, 愉快地
slothful	 adj. 偷懒的
forefather	 n. 祖先, 祖宗
soundly	 adv. 完全地, 健全地
asleep	 adj. 睡着的
torpor	 n. 麻木,不活泼
lull	 v. 缓和 n暂时的平息
lash	 n& v. 鞭打
cementation	 n. 粘固
anyway	 adv. 无论如何, 总之
trumpeter	 n. 喇叭手, 号兵
breathless	 adj. 无声息的, 喘不过气来的
convene	 v. 召集, 集合
wingless	 adj. 无翼的, 没有翅膀的
modal	 adj. 模态的, 形态上的
sweaty	 adj. 出汗的, 吃力的
brawl	 v. 争吵, 怒骂
useable	 adj. 可用的, 有效的
operational	 adj. 操作的, 运作的
clockmaker	 n. 制造或修理钟表者
linkage	 n. 联接
offensive	 adj. 冒犯的, 无礼的
midst	 n. 中部，中间
multifunctional	 adj. 多功能的
vigor	 n. 精力, 活力
singular	 n. 单数 adj. 单一的
parliament	 n. 国会, 议会
oust	 v. 剥夺,取代,罢免
promptly	 adv. 敏捷地, 迅速地
sage	 adj. 智慧的  n智者
rejoin	 v. 再结合, 再加入
courage	 n. 勇气, 精神
debtor	 n. 债务人
penal	 adj. 刑事的
wrapper	 n. 包装材料,包装纸
outright	 adj. 直率的, 彻底的 ad直率地, 彻底地
orphanage	 n. 孤儿院, 孤儿身份
authentic	 adj. 可信的,真正的
florist	 n. 种花人
fragrance	 n. 芬芳, 香气
daddy	 n. 爸爸
eventual	 adj. 最后的, 结局的
agonize	 v. 使极度痛苦, 折磨
oft	 adv. 常常, 再三
horde	 n. 游牧部落
primer	 n. 初级读本,原始物
revert	 v. 回复
copyright	 n. 版权, 著作权
nephew	 n. 侄子, 外甥
Dutchman	 n. 荷兰人
van	 n. 有篷货车, 前驱 vt用车搬运
salesperson	 n. 售货员
jewellery	 n. [总称]珠宝
pelt	 n. 投掷, 毛皮 v剥的皮, 投掷
Lowa	 n. 爱荷华州(美国中西部的一州)
pella	 n. 斗篷
goldsmith	 n. 金匠
saw	 n. 锯 v锯,锯开
woodblock	 n. 木板 〈印〉木版
upwind	 adj. 逆风的 ad逆风地
volatility	 n. 挥发性
nostalgic	 adj. 乡愁的, 怀旧的
longing	 n. 渴望 a渴望的
homesick	 adj. 想家的,思乡病的
pike	 n. 长枪, 梭子鱼 vt用矛刺穿
seaboard	 n. 海岸, 沿海地方 a海滨的
bench	 n. 长椅子,替补队员 vt给…以席位
corrosive	 adj. 腐蚀的, 蚀坏的 n腐蚀物
rut	 n. 定例, 惯例 v在形成车辙
tenuous	 adj. 纤细的,稀薄的
guarantor	 n. [律]保证人
omnipotent	 adj. 全能的, 无所不能的
overland	 adj. /ad经过陆地的, 陆上的
Interstate	 adj. 州际的
carnation	 n. 荷兰石竹, 康乃馨, 粉红色
priest	 n. 牧师
obedient	 adj. 顺从的,孝顺的
sty	 n. 猪栏 v住在猪圈里, 关入猪栏
undecided	 adj. 未定的, (天气等)不稳定的
oasis	 n. (沙漠中)绿洲,舒适的地方
irregularly	 adv. 不规则地,不整齐地
gregarious	 adj. 社交的,群居的
honey	 n. (蜂)蜜,宝贝 a甜美的
hitherto	 adv. 迄今,至今
heroic	 adj. 英雄的, 英勇的
pervasive	 adj. 普遍的,深入的
uninhabitable	 adj. 不适宜居住的
venom	 n. (蛇的)毒液, 恶意 vt放毒, 使恶毒
placental	 adj. 胎盘的 n有胎盘哺乳动物
spiny	 adj. 多剌的, 剌状的
anteater	 n. [动]食蚁动物
postpone	 v. 推迟, 使延期
modulate	 v. 调整, 调节, (信号)调制
vagary	 n. 奇特行为, 奇想
modulation	 n. 调制
acoustic	 adj. 有关声音的, 声学的
marsupial	 n. 有袋动物 a有袋动物的
dwindle	 v. 缩小
outpouring	 n. 倾泄, 流出, 流露
beluga	 n. (欧洲)白色大鳇鱼, 白鲸
insensitivity	 n. 感觉迟钝,不灵敏性
anaerobic	 adj. 厌氧的,厌气的
enrichment	 n. 发财致富, 丰富, 肥沃
coincidence	 n. 一致,  同时发生或同时存在(尤指偶然)的事
advice	 n. 忠告, 建议
printmaker	 n. 版画复制匠
lithography	 n. 平版印刷术
rationale	 n. 基本原理
serigraphy	 n. 绢印, 绢网印艺术
curly	 adj. 卷曲的, 弯曲的, (木材)有皱状纹理的
mayor	 n. 市长
chimp	 n. (非洲)黑猩猩
waterworks	 n. 自来水厂,供水系统
lieu	 n. 场所
parkway	 n. 公园道路, 驾车专用道路
serene	 adj. 平静的 n宁静
boulevard	 n. <美>林荫大道
omission	 n. 冗长,疏漏
implementation	 n. 执行
multipurpose	 adj. 多种用途的, 多目标的
restful	 adj. 宁静的
preexist	 v. 先前存在
incipient	 adj. 初期的,初始的
metamorphic	 adj. 变质的,变性的
sidewalk	 n. 人行道
libelous	 adj. 诽谤的,损害名誉的
broker	 n. 掮客, 经纪人
Washingtonian	 n. /a(美国)华盛顿市(或州)人
sensationalism	 n. 追求轰动效应, 感觉论
aromatic	 adj. 芬芳的
unmistakable	 adj. 明显的,不会弄错的
weird	 adj. 怪异的, 超自然的, 不可思议的
pollinate	 v. 对授粉
runway	 n. 飞机跑道, 斜坡跑道, 河道
irresistible	 adj. 不可抵抗的,不能压制的
rampant	 adj. 猖獗的, 蔓生的
crossbreed	 n. [生物]杂种 v异种交配
gorgeous	 adj. 华丽的, 灿烂的
intrusion	 n. 闯入, 侵扰
pinch	 n. 捏, 撮 v夹痛,节省
inactivate	 v. 使不活泼, 阻止活动
degrade	 v. (使)降级, (使)堕落
pollination	 n. 授粉
recognizable	 adj. 可辨认的,可认识的
unwillingly	 adv. 不情愿地,勉强地
impartially	 adv. 公平地,无私地
dose	 n. 剂量, (一)剂 v(给)服药
retrain	 v. 重新教育, 再教育
irrationally	 adv. 无理性地,不合理地
boon	 n. 恩惠, 福利
democracy	 n. 民主政治, 民主主义
unavoidably	 adv. 不可避免地,不得已地
layman	 n. 外行
racetrack	 n. (主要用于赛马, 赛狗的)跑道
inoffensive	 adj. 不触犯人的,无害的
boomer	 n. 生育高峰中出生的人
cynthia	 n. 月亮女神, 月亮
struggler	 n. 奋斗者,斗争者
honorable	 adj. 光荣的,高贵的
impregnate	 v. 使怀孕, 使受精 a怀孕的, 充满的
enthusiastically	 adv. 热心地,满腔热情地
consecutive	 adj. 连贯的,连续不断的
needy	 adj. 贫困的, 缺乏生活必需品的
bequest	 n. 遗产, 遗赠
childless	 adj. 无儿女的
cuticle	 n. 表皮,角质层
spiky	 adj. 大钉似的, 尖刻的
waxy	 adj. 象蜡的,苍白的, 柔软的,
unpalatable	 adj. 味道差的,难吃的
epidermis	 n. [生]表皮, 上皮
immobilize	 v. 固定不动
deterrent	 n. 威慑 a遏制的
infest	 v. 骚扰,大批滋生
rancho	 n. 大牧场(或大农场)工人住的棚屋
breach	 n. 破坏, 裂口 vt打破, 突破
crayon	 n. 有色粉笔, 蜡笔
unwary	 adj. 粗心的, 不警惕的
sapiens	 adj. （拉）现代人的
mastodon	 n. [古生]乳齿象, 庞然大物
suspicion	 n. 猜疑, 怀疑
preeminent	 adj. 卓越的
ingeniously	 adv. 贤明地,有才能地
daunt	 v. 沮丧
monochromatic	 adj. 单色的
educable	 adj. 可教育的, 可培养的
tame	 adj. (指动物)驯服的,平淡的 v驯养, 驯服
clever	 adj. 机灵的, 聪明的
scam	 n. 诡计 v诓骗
pin	 n. 钉, 栓 vt钉住, 牵制
astute	 adj. 机敏的, 狡猾的
dash	 n. 冲撞, 破折号 v猛掷, 冲撞
emboss	 v. 饰以浮饰, 使浮雕出来
yolk	 n. 蛋黄, [生物] 卵黄
embellish	 v. 修饰
learner	 n. 学习者, 初学者
theft	 n. 偷, 行窃
unread	 adj. 没有人看的, 无学问的
reinterpretation	 n. 重新解释
tread	 n. 踏, 步态 v踏,  跳
postdate	 v. 填迟的日期 n事后日期
mania	 n. [医]颠狂, 狂躁, 癖好, 狂热
basement	 n. 地下室, 墙脚
smuggle	 v. 走私, 偷带
stash	 v. 存放 n隐藏处
quarrelsome	 adj. 喜欢吵架的,好争论的
speedy	 adj. 快的, 迅速的
prepay	 v. 预付
loathsome	 adj. 讨厌的
counterfeit	 n. 赝品  a伪造的 v伪造
sender	 n. 寄件人,发送人
affix	 v. 使附于, 粘贴 n[语]词缀
obsess	 v. 迷住, 使困扰
demolish	 v. 毁坏, 推翻, 粉碎
golf	 n. 高尔夫球 vi打高尔夫球
glaciate	 v. 使结冰, 以冰(或冰河)覆盖
ambience	 n. 周围环境, 气氛
cab	 n. 出租汽车
frenzy	 n. 狂暴, 狂怒 vt使发狂
melodrama	 n. 情节剧
treasure	 n. 财宝, 财富 vt珍爱
Cincinnati	 n. 辛辛那提（美国俄亥俄州西南部城市）
trove	 n. 被发现的东西, 收藏的东西
acronym	 n. 只取首字母的缩写词
bet	 n. 赌, 打赌 v赌, 赌钱
vault	 n. 拱顶 v做成弧形
labyrinth	 n. 迷路, 迷宫, 难解的事物
rubble	 n. 碎石
recipe	 n. 处方
rainer	 n. 人工降雨装置,喷灌装置
yesteryear	 n. 去年 ad过去不久的岁月
lore	 n. 学问,（动物的）眼光知识
adjoin	 v. 邻接, 毗连
mortar	 n. 灰泥,迫击炮 vt用灰泥结合
incongruity	 n. 不调和的, 不适宜的
tableland	 n. 高原
perfection	 n. 尽善尽美, 完美, 完成
fullness	 n. 满, 丰富, 成熟
recoil	 n. 畏缩, 弹回 vi退却, 畏缩
musicologist	 n. 音乐学者
forte	 n. 长处
percussive	 adj. 冲击的,叩诊的
multistory	 adj. 多层的,有多层楼的
hammerhead	 n. 锤头 a锤头状的, 鲁钝的
induct	 v. 感应,引导
coincident	 adj. 一致的,符合的
assort	 v. 分类配全
forgiveness	 n. 宽恕, 宽仁之心
spoonful	 n. 一匙
oat	 n. [植]燕麦, 麦片粥
differentiating	 adj. 微分的
symphonic	 adj. 交响乐的, 和声的
sad	 adj. 忧愁的, 悲哀的
violinist	 n. 小提琴演奏者, 小提琴家
cellist	 n. 大提琴演奏家
upsurge	 n. 高潮 vi涌起
phenomenal	 adj. 现象的,显著的
midocean	 n. 海洋中央
deformation	 n. 变形
omnibus	 n. 公共汽车, 精选集 a综合性的
accessibility	 n. 易接近, 可到达的
unoccupied	 adj. 空闲的,未占领的
catalyze	 v. 催化, 刺激, 促进
vacant	 adj. 空的, 头脑空虚的,空缺的
suite	 n. (一批)随员, (一套)家具, 组
scavenge	 v. 打扫, 以(腐肉)为食
subdivision	 n. 细分, 一部
juvenile	 adj. 青少年的 n青少年, 少年读物
betray	 v. 出卖, 背叛
sensible	 adj. 有感觉的, 明智的
treetop	 n. 树稍
ancestry	 n. 祖先(集合称), 血统
virginal	 adj. 处女的, 无瑕的
dulcimer	 n. [乐] 洋琴
unpublished	 adj. 未公开出版的,未发表过的
paddle	 n. 短桨, 划桨 v划桨,拌
twine	 n. 合股线 v织, (使)缠绕
jumble	 v. 混杂, 搞乱 n混乱
bituminous	 adj. 沥青的,含沥青的
practicable	 adj. 可实行的,可用的
acquaint	 v. 使熟知, 通知
toil	 n. 苦工, 圈套 v费力地做
insurmountable	 adj. 不能克服的,不能超越的
instantaneously	 adv. 即刻,突如其来地
prohibitively	 adv. 禁止地,过分地
video	 n. 录象, 视频 a视频的
unprocessed	 adj. 未被加工的
standardize	 v. 使符合标准, 使标准化
uncooked	 adj. 未煮过的
forecaster	 n. 预报员
stormy	 adj. 暴风雨的, 激烈的, 暴怒的
untouched	 adj. 未触及的, 未改变的
mennonite	 n. 门诺派教徒
police	 n. 警察 vt管辖 a警察的
humility	 n. 谦卑
torrential	 adj. 猛烈的,汹涌的
dissipate	 v. 驱散, 消散
advantageously	 adv. 有利地,方便地
merchandis	 n. 商品,货物 v买卖
hospital	 n. 医院
proboscidean	 adj. 长鼻类的 n长鼻目动物
sift	 v. 详审
premium	 n. 额外费用, 奖金, 奖赏
neat	 adj. 整洁的, 灵巧的, 优雅的
precursor	 n. 先驱
economize	 v. 节省, 有效地利用
haven	 n. 港口, 避难所
tranquillity	 n. 宁静
competitiveness	 n. 竞争力,好竞争
atomization	 n. 分离成原子, 雾化
custodian	 n. 管理人
stagnate	 v. (使)淤塞, (使)停滞, (使)沉滞, (使)变萧条
emigrate	 v. 移居, 移民
regret	 n. /v遗憾, 抱歉,后悔
civility	 n. 礼貌, 端庄
unbridgeable	 adj. 不能架桥的,不能逾越的
determinedly	 adv. 决然地,断然地
abandonment	 n. 放弃
mimetic	 adj. 模仿的,拟态的
fictive	 adj. 虚构的, 想象上的
shudder	 n. 震动 vi战栗, 发抖
violence	 n. 猛烈, 暴力, 暴虐
insanity	 n. 精神错乱, 疯狂, 愚顽
pinon	 n. 矮松, 矮松果
juniper	 n. [植]刺柏属丛木或树木
eke	 v. 补充, 增加
hem	 n. 边,缘 v给缝边
wring	 v. 绞, 扭, 折磨 n绞, 扭动
briny	 adj. 盐水的, 咸的, 海水的
midlatitude	 n. 中间纬度
regenerate	 v. 使新生, 重建 a新生的, 更新的
eviscerate	 v. 取出内脏, 除去精华
sparingly	 adv. 节俭地, 保守地
squirt	 v. 喷出
sanction	 n. 支持, 制裁 vt支持, 鼓励
antagonistic	 adj. 敌对的,对抗性的
buggy	 adj. 多虫的 n童车
infrequently	 adv. 罕见地, 稀少的
quiescent	 adj. 静止的
inanity	 n. 空虚, 愚蠢
romancer	 n. 传奇小说作家, 讲虚构故事的人
strikingly	 adv. 醒目地, 引人侧目地
akin	 adj. 同类的
voracious	 adj. 狼吞虎咽的, 贪婪的
gourmet	 n. 美食家
supremely	 adv. 无上地, 崇高地
absurd	 adj. 荒谬的, 可笑的
complacence	 n. 自满
pleasantly	 adv. 令人愉快地；舒适地
supervision	 n. 监督, 管理
humanist	 n. 人道主义者, 人文主义者
cannibalism	 n. 同类相食
satirist	 n. 讽刺作家
distend	 v. (使)扩大, (使)扩张
balmy	 adj. 芳香的, 温和的
compo	 n. 组合物,混合涂料
pressurize	 v. 增压, 密封
freshness	 n. 新鲜, 精神饱满
wearer	 n. 穿用者, 佩带者
dimensional	 adj. 维度的, 空间的, 尺寸的
dependably	 adv. 可信任地
reexamine	 v. 复试
behalf	 n. 利益
sanctimonious	 adj. 伪装虔诚的, 道貌岸然的
nominate	 v. 提名, 推荐
frenetic	 adj. 发狂的, 狂热的
distinctively	 adv. ad/ 区别地, 特殊地
prod	 v. 刺
secondhand	 adj. a&ad  二手的, 间接的
irreverence	 adj. 不尊敬的
briskness	 n. 敏捷, 活泼
famine	 n. 饥荒,
ethically	 adv. 伦理(学)上
juxtaposition	 n. 毗邻, 并置
platitudinous	 adj. 平凡的,  陈腐的
moralize	 v. 教化 ,说教
platitude	 n. 陈词滥调
irreverent	 adj. 不敬的,  无礼的
megalopolis	 n. 巨大都市, 人口稠密地带
comer	 n. 来者, 新来者
conurbation	 n. 有卫星城的大都市
elusive	 adj. 难懂的, 难捉摸的
scowl	 n. 愁容, 皱眉 v皱眉
subterranean	 adj. 地下的
ramble	 n. 漫步  vi闲逛；漫谈
pharmacy	 n. 药房, 药剂学
gyration	 n. 旋回, 回转
miraculous	 adj. 奇迹的,不可思议的
grainy	 adj. 粒状的, 木纹状的
vagueness	 n. 暧昧, 含糊
urbanize	 v. 使都市化, 使文雅
miracle	 n. 奇迹, 奇事
quaint	 adj. 离奇有趣的, 奇怪的
counterclockwise	 n&a. 反时针方向(的)
entanglement	 n. 纠缠
diagonally	 adv. 斜对地,  对角地
rustproof	 adj. 不锈的, 抗锈的
enclosure	 n. 围住, 围栏
installation	 n. 安装, 装置
galvanize	 v. 通电流于, 电镀
matrilinear	 adj. 母系的
underworld	 n. 黑社会
oval	 n&a. 卵形(的), 椭圆(的)
crimp	 v. 起皱, 卷曲, 抑制
serrate	 adj. 锯齿状的
convivial	 adj. 好交际的, 愉快而随和的
foreshadow	 v. 预示
plaint	 n. [诗]悲叹, 抱怨
waterborne	 adv. 水上的,  水运的
amazement	 n. 惊愕, 惊异
urgency	 n. 紧急, 紧急的事
unpromising	 adj. 没有希望的(结果未必良好的)
deter	 v. 阻止
bluntly	 adv. 坦率地, 率直地
overcharge	 v. 讨价过高,夸张,过度充电
calibration	 n. 标度, 刻度
subclass	 n. [生]亚纲, 子集
luminous	 adj. 发光的,清楚的,明白易懂的
simplistic	 adj. 过分简单化的
teapot	 n. 茶壶
specification	 n. 详述, 规格
rationally	 adv. 理性地
prominence	 n. 突出, 显著
importer	 n. 输入者, 进口商
foundry	 n. 铸造, 铸造场
systematize	 v. 系统化
persuasion	 n. 说服, 说服力
penalty	 n. 处罚, 罚款
singly	 adv. 单独地, 个别地
gloss	 n. 光泽，注解
refinement	 n. 精致, 文雅
guess	 v. 猜测, 推测
gaze	 v. 盯, 凝视
earthworm	 n. 蚯蚓
fantastic	 adj. 幻想的, 奇异的
lateral	 n. 侧部, 支线 a侧面的
intimately	 adv. 密切地,  亲密地
nostril	 n. 鼻孔
bis	 adv. 二度, 二回
uniqueness	 n. 唯一性, 独特性
deferential	 adj. 恭敬的, 顺从的
shaper	 n. 造形者, 塑造者
genial	 adj. 亲切的
avocational	 n. 娱乐,  消遣
occupancy	 n. 占有
mildly	 adv. 温和地, 适度地
bundle	 n. 捆v捆扎
ethnographic	 adj. 民族志学的,  人种志学的
infinite	 adj. 无限的，无穷的
wearability	 n. 耐磨性, 磨损性
masthead	 n. 桅顶, 报头
gazette	 n. 报纸, 政府的公报
disc	 n. 圆盘, 唱片
spheroidal	 adj. 球状的
flattish	 adj. 有点平凡的, 稍平的
businesswoman	 n. 妇女实业家
expo	 n. 博览会, 展览会
slander	 vt&n. 诽谤
signer	 n. 签名人, (用手势) 示意者
silurian	 adj. 〈地〉志留纪的
explosively	 adv. 爆发地, 引起爆炸地
lastly	 adv. 最后, 终于
radial	 adj. 光线的, 放射状的
culminate	 v. 达到顶点
restraint	 n. 抑制, 制止
frill	 n. 皱边
facilitation	 n. 简易化, 助长
provocative	 adj. 煽动的 n刺激物
megafossil	 n. 大化石
cryptic	 adj. 秘密的, 含义模糊的
inspect	 v. 检查, 视察
genesis	 n. 起源
conspiracy	 n. 共谋, 阴谋
jobber	 n. 临时工, 批发商
wholesaler	 n. 批发商
cigar	 n. 雪茄
sweatshop	 n. 血汗工厂(指工人劳动条件差,工作时间长,工资低的工场或工厂)
retailer	 n. 零售商人
cabinet	 n. 橱柜, a<美>内阁的
orthopteran	 n. 直翅类的昆虫
heyday	 n. 全盛时期
sideline	 n. 副业, 边界线
modicum	 n. 少量, 一点点
handbook	 n. 手册, 便览
bitter	 adj. 苦的, 痛苦的
lonely	 adj. 孤独的, 寂寞的
shutter	 n. 百叶窗；(照相机的)快门
shoulder	 n. 肩(部)t肩负, 承当
decorator	 n. 油漆工
wonderfully	 adv. 令人惊讶地；奇妙地
unimaginable	 adj. 不能想象的, 想象不到的
ruthlessly	 adv. 冷酷地, 残忍地
unknowing	 adj. 没查觉的, 无知的
haste	 n. 匆忙, 急忙
scruple	 n&v. 踌躇, 犹豫
equitable	 adj. 公平的, 公正的
laurasia	 n. [地质] 劳亚古大陆
innkeeper	 n. 旅馆主人
buzz	 n. 嗡嗡声 v嗡嗡作响
peddler	 n. 小贩, 传播者
educationally	 adv. 教育的, 有关教育的
tractor	 n. 拖拉机
constellation	 n. [天]星群, 星座
exam	 n. 考试, 测验
working	 n. 工作
inclusive	 adj. 包含在内的
grandparent	 n. 祖父或祖母, 祖父母
contractor	 n. 订约人, 承包人
cubism	 n. 立体派
woodcarving	 n. 木雕, 木刻
prodigy	 n. 惊人的事物, 天才
nonconformist	 adj. 不信奉英国国教的 n非国教徒
fascination	 n. 魔力,  魅力, 迷恋
rectangle	 n. 长方形, 矩形
aloud	 adv. 大声地
walnut	 n. 胡桃, 胡桃木
profitability	 n. 收益性, 利益率
renter	 n. 租贷人
claimant	 n. 要求者,申请者, 原告
sadden	 v. 悲哀
beard	 n. 胡须
skeletally	 adj. 骨骼的, 梗概的
muscularly	 adj. 肌肉的
tinplate	 n. 镀锡铁皮, 马口铁
tomato	 n. 番茄, 西红柿
starch	 n. 淀粉
grape	 n. 葡萄, 葡萄树
packer	 n. 包装工人, 打包机
strawberry	 n. [植]草莓
negate	 v. 否定, 打消
creeper	 n. 爬行者
bluebird	 n. 北美产的蓝知更鸟
lark	 n. 云雀, 百灵鸟
communally	 adv. 共同地, 社区地
rooster	 n. 雄禽,
sociably	 adv. 和蔼可亲地
perch	 n. 栖息处 v暂栖，停留
geometrical	 adj. 几何学的,  几何的
awake	 v. 醒,唤醒 a警觉的, 醒的
radiate	 v. 放射, 辐射
obsolete	 adj. 已废弃的, 过时的
rarefy	 v. 稀薄
crossbones	 n. 交叉腿骨的图形
figurehead	 n. 装饰船头的雕像, 破浪神
snipe	 n. [鸟]鹬
intricately	 adv. 杂乱地,  复杂地
icon	 n. 图标, 肖像
antelope	 n. 羚羊
interferometer	 n. 干涉计
hardworking	 adj. 努力工作的,  勤奋的
proprietorship	 n. 所有权
aie	 n. 急性包涵(体)脑炎
imbibe	 v. 吸收
agility	 n. 敏捷, 活泼
delightful	 adj. 令人愉快的,  可喜的
overheat	 v. 使过热， 变得过热
rehydrate	 v. [化] 再水化, 再水合
efficacy	 n. 功效, 效验
dilution	 n. 稀释
festive	 adj. 庆祝的, 喜庆的
zealous	 adj. 热心的
bust	 n. 半身像, 胸像
equestrian	 adj. 骑马的 n骑手
urn	 n. 瓮, 缸
timidity	 n. 胆怯
stonemason	 n. 石匠
biter	 n. 咬人的动物, 骗子
bitterness	 n. 苦味, 辛酸
plainspoken	 adj. 老实说的,直言的
grit	 n. 粗砂 v研磨
aero	 adj. 航空的,  飞行的
cheapen	 v. 减价, 跌价
thorny	 adj. 多刺的, 痛苦的
inchworm	 n. [昆] 尺蠖
escalator	 n. 电动扶梯
voltage	 n. [电工]电压, 伏特数
smite	 v. 重击
follower	 n. 追随者, 信徒
indifference	 n. 不关心
eyelid	 n. 眼皮, 眼睑
comfortably	 adv. 舒适地
hatchet	 n. 短柄斧
axe	 n. 斧, (经费的)大削减
ambidextrous	 adj. 十分灵巧的
attributable	 adj. 可归因于的
predominance	 n. 优势
petrify	 v. 石化,吓呆
polarity	 n. 极性
ax	 n. 斧头 vt削减
ferromagnetic	 adj. 铁磁的
afterward	 adv. 然后, 后来
occupant	 n. 占有者, 居住者
inflexible	 adj. 不可弯曲的, 僵硬的
lotus	 n. [植] 莲(花) adj. 贪图安乐的
inexplicable	 adj. 无法解释的，难理解的
nineteen	 num. 十九
therapeutic	 adj. 治疗的, 治疗学的 n治疗剂, 治疗学家
restrictive	 adj. 限制性的
ail	 v. 生病，使苦恼
unbind	 v. 解开, 解放
Grecian	 adj. 希腊的, 希腊式的 n希腊学家
defender	 n. 防卫者, 拥护者
volcanism	 n. 火山作用
subduction	 n. [地]潜没(指地壳的板块沉到另一板块之下)
diverge	 v. 分歧
electrocardiogram	 n. [医]心电图
grope	 v. / n摸索
hesitate	 v. 犹豫, 踌躇
electroencephalogram	 n. [医]脑电图
blackout	 n. 灯火管制，断电
jolt	 v& n. (使)颠簸；震动
bandleader	 n. 伴舞乐队的指挥
ballroom	 n. 舞厅, 跳舞场
memorandum	 n. 备忘录, 便笺
nickname	 n. 绰号, 昵称
pepper	 n. 胡椒粉
accusation	 n. 谴责, [律]指控
obligate	 v. 使负义务 a有责任的
forbearance	 n. 自制，忍耐
consent	 n& vi. 同意，赞成
Thames	 n. 泰晤士河(流经牛津,伦敦等)
maverick	 adj. 标新立异的；持不同意见的
commemorate	 v. 纪念
blower	 n. 吹制工, 送风机
goldfish	 n. 金鱼
decor	 n. 舞台装饰
fresco	 n. 壁画 vt作壁画于
rook	 n. 白嘴鸦；赌棍  vt骗
fitting	 adj. 适合的n试穿，装配
equilateral	 adj. 等边的 n等边形
honeycomb	 n. 蜂房, 蜂巢
romanticize	 v. 浪漫化, 传奇化
misconception	 n. 误解
conviction	 n. 深信,  定罪
poster	 n. 海报, 招贴
tessellation	 n. 棋盘形嵌石饰
victim	 n. 受害人,牺牲品
cate	 n. 佳肴, 美食
arouse	 v. 唤醒,鼓励 v. 睡醒
officeholder	 n. 官员,公务员
pentagon	 n. 五角形, 五边形
corset	 n. 束腹, 妇女的胸衣 v. 严格控制
sheepskin	 n. 羊皮(革,纸), 毕业证书
perimeter	 n. [树数] 周长, 周界
denomination	 n. 面额,名称,教派
breech	 n. 臀部,后膛 vt. 给…穿上裤子
mitigate	 v. 减轻,缓和
mighty	 n. 有势力的人 adj. 有势力的
spaceship	 n. 太空船
adventure	 n. 冒险 v. 冒险,大胆说出来
feud	 n. 不和,争执 v. 长期争斗
ted	 vt. 翻晒 n. 泰德
venturesome	 adj. 危险的,冒险的
knuckle	 n. 指节, 关节 v. 开始工作
receiver	 n. 接受者, 接收器, 收信机
wrist	 n. 手腕, 腕关节
familiarization	 n. 亲密, 熟悉, 精通
bulldoze	 v. 威吓, 欺负
mason	 n. 泥瓦匠 vt. 用砖瓦砌成
woodlot	 n. 植林地(尤指附属林场地)
profoundly	 adv. 深深地, 衷心地
hone	 n. 磨（刀）石vt用磨刀石磨
tele	 n. 电视
uncounted	 adj. 无数的,没有数过的
profiteer	 n. 奸商 v. 牟取暴利
arsenal	 n. 兵工厂, 军械库
ordnance	 n. 军火
tycoon	 n. 企业界大亨, 将军
knit	 v. 编织, 密接 n. 编织物
stickpin	 n. 领带夹(指插于领带上的装饰别针)
cane	 n. 藤条,手杖 v. 以杖击, 以藤编制
flamboyant	 adj. 辉耀的,艳丽的
rumble	 v. 隆隆声,低沉地说 n. 隆隆声, 吵嚷声
gunfire	 n. 炮火
shrill	 adj. 尖声的 v. 尖声叫出
ameliorate	 v. 改善, 改进
bugle	 n. 喇叭,军号 v. 吹号集合
heartbreak	 n. 心碎；伤心事
northerner	 n. 北国人, 北方人
tingle	 v. 造成麻刺的感觉,使感刺痛
achingly	 adv. 极其,非常痛地
desolate	 adj. 荒凉的, 无人烟的
helicopter	 n. 直升(飞)机, 直升机
ankle	 n. [解]踝
dishonest	 adj. 不诚实的
shortcut	 n. 捷径
roadway	 n. 车行道, 路面
royal	 adj. 皇家的, 高贵的
promoter	 n. 促进者, 助长者
hydra	 n. [希神]九头怪蛇, 难以根除之祸害, [动]水螅
coelenterate	 n. [动]腔肠动物 adj. 腔肠动物的
plantlike	 adj. 似植物的
homeownership	 n. 房主
acceleration	 n. 加速度,加速
traction	 n. 牵引,牵引力
dictaphone	 n. 录音电话机（商标名称） [商标名] 录音机
utter	 adj. 全然的, 绝对的 v. 发出, 发射
succinctly	 adv. 简洁地, 简便地
standpoint	 n. 立场, 观点
codify	 v. 把…编成法典, 编纂
soul	 n. 灵魂, 精髓
airy	 adj. 通风的, 轻快的
dread	 n. 恐惧,可怕的人(或物) v. 惧怕 adj. 恐怖的
sway	 v&n. 摇摆, 支配
reconstitute	 v. 重新组成, 重新设立
overexploitation	 n. (对资源等的)过度开采,(对工人等的)过度剥削
designation	 n. 指示, 指定, 名称
wretched	 adj. 可怜的, 恶劣的
entrench	 v. 以壕沟防护,保护
thousandth	 adj. 第一千的, 千分之一的
woodworking	 n. 木工艺, 木工行业 adj. 干木工活的
demolition	 n. 毁坏, 毁坏之遗迹
magnification	 n. 扩大, 放大倍率
bat	 n. 蝙蝠, 球棒 v用球棒击球
sawyer	 n. 锯木匠, 漂流水中的树木
wavy	 adj. 波状的,不稳的
cooper	 n. 制桶工人 v. 制桶
forestall	 v. 之前, 先(用先发制人的方法)预防, 阻止
melange	 n. 混合物, 杂录
waterside	 n. n& adj. 水边(的),湖畔(的)
irrational	 adj. 无理性的, 失去理性的 n. 无理数
cherish	 v. 珍爱, 怀抱(希望等)
improbable	 adj. 不大可能的, 不像会发生的, 似不可信的
kiosk	 n. 亭子
cordwainer	 n. 鞋匠
sear	 adj. 烤焦的, 枯萎的 v. 烤焦,变干枯
negligibly	 adv. 可忽略不计地, 微不足道地, 极小地
abut	 v. 邻接, 毗邻
annex	 n. 附件 v. 并吞, 附加
proliferate	 v. 繁殖,使激增, 使扩散
spank	 v. 鞭策前进 v. 轻快的移动 n. 拍击
peart	 adj. 有精神的, 快活的
Indonesia	 n. 印尼(东南亚岛国)
Thailand	 n. 泰国
biodiversity	 n. 生物多样性
gust	 n. 一阵狂风,（感情的）迸发，汹涌
newberry	 n. 纽伯里
keenly	 adv. 敏锐地, 强烈地, 热心地
captivate	 v. 迷住, 迷惑
philanthropist	 n. 慈善家,博爱的人
purplish	 adj. 略带紫色的
venerable	 adj. 值得尊敬的, 庄严的
sargeant	 n. 萨金特
unmarried	 adj. 未婚的, 单身的
gentility	 n. 文雅, 出身高贵, 有教养
plasticity	 n. 可塑性, 塑性
carpet	 n. 地毯
adolescent	 adj. 青春期的 n. 青少年
regimentation	 n. 管辖,严格控制
rarer	 adj. 稀罕的,  珍贵的
jibe	 v. 嘲笑, 与一致, 使转向
knead	 v. 揉(面等)成团, 按摩
nonchalant	 adj. 若无其事的, 不关心的, 冷淡的
humanlike	 adj. 似人类的
boron	 n. [化]硼
dump	 v. 倾倒(垃圾), 倾卸 n. 堆存处
topographically	 adv. 地形地
mandatory	 adj. 命令的, 托管的
scholarly	 adj. 学者气质的, 学者风度的
offering	 n. 提供, 奉献物
chlorine	 n. [化]氯
bromine	 n. [化]溴
gush	 v. 涌出,滔滔不绝 n. 迸发
kea	 n. 食肉鹦鹉
hillbilly	 n. 山地内部的贫农,乡下人
pont	 n. (南非的)缆拉渡船
resettle	 v. (使)重新定居,再坐下来
pivotal	 adj. 重要的, 轴的
untimely	 a&ad. 不适时的, 不合时宜的
sack	 n. 大袋, 大袋之量 v. 解雇, 洗劫
pointe	 n. （芭蕾舞中的）足尖舞
woodcutting	 adj. 木雕的 n. 伐木, 木刻
chapter	 n. (书籍)章,回
homely	 adj. 家常的,平凡的
circulatory	 adj. 循环的, 循环系统的
variance	 n. 不一致, 变化,
affiliate	 v. 使隶属于 n. 附属机构
unquestioning	 adj. 无条件的, 不犹豫的
primatology	 n. 灵长类动物学
demerit	 n. 缺点,过失
inferiority	 n. 自卑, 次等
tyrannical	 adj. 暴虐的, 压制的, 残暴的
potentiality	 n. (用复数)潜能,可能性
applicability	 n. 适用性, 适应性
enlightenment	 n. 启迪, 教化
terrible	 adj. 很糟的, 极坏的,骇人的
glossy	 adj. 平滑的, 有光泽的
relevance	 n. 中肯, 适当
wanderer	 n. 流浪者, 徘徊者, 迷路的动物
rebirth	 n. 复活, 新生
unfertilized	 adj. 未施肥的,  未受精的
untreated	 adj. 未经处理的, 未经治疗的
folklore	 n. 民间传说, 民俗学
fumigate	 v. 熏制, 以烟熏消毒
unverified	 adj. 未经证实的,  未经核对的
veil	 n. 面纱 v. 遮蔽, 掩饰
uncontested	 adj. 无争论的, 无异议的
inspector	 n. 检查员, 巡视员
nutritionist	 n. 营养学家
dismal	 adj. 阴沉的, 凄凉的n沼泽
thicken	 v. (使)变厚, (使)变粗
courageous	 adj. 勇敢的
roe	 n. 鱼卵,獐鹿
unrecognizable	 adj. 未被承认的, 无法识别的
soup	 n. 汤
directive	 n. 指示 adj. 指导的
september	 n. 九月(略作Sep)
unreachable	 adj. 不能到达的,  不能得到的
stew	 v. 炖, 焖
slowness	 n. 缓慢, 迟钝
slavery	 n. 奴隶身分, 奴隶制度
herculean	 adj. 极困难的,需要大力气的
colossal	 adj. 巨大的,  <口>异常的
prudent	 adj. 审慎的,小心谨慎的
liable	 adj. 有责任的, 易的, 有倾向的
imprisonment	 n. 关押,监禁
sour	 adj. 酸的, 发酵的 v. 变酸
treason	 n. 叛逆, 通敌, 背信
wold	 n. 无树木的山地, 荒野
abalone	 n. [动]鲍鱼(软体动物)
mime	 n. 哑剧 v. 做哑剧表演
dram	 n. 液量特兰(药衡系统中的容量单位),  少量
desperate	 adj. 不顾一切的, 拚死的, 令人绝望的
retool	 v. 将机械重新整备, 重组
urchin	 n. 顽童, [动物]刺猥, [动物]海胆
relational	 adj. 有关系的, 亲属的
demobilize	 v. 使复员, 使退伍, 遣散
bid	 v. 出价, 投标 n. 投标,企图
palimpsest	 n. 重写本
hermetic	 adj. 密封的, 与外界隔绝的
lust	 n. 繁殖力, 强烈的性欲 v. 强烈欲望
posthumously	 adv. 在死后
outfit	 n. 用具, 全套装配, vt配备, 装备
revolt	 v& n. 反抗,反叛
maw	 n. 动物的胃,口部
utmost	 n. 极限, 最大可能 adj. 极度的, 最远的
bryn	 n. 布琳
consistency	 n. 坚固性, 浓度, 一致性
sentimentalism	 n. 感情主义, 沉于情感
philosophic	 adj. 哲学的, 哲学家的
trilogy	 n. 三部剧, 三部曲
diction	 n. 措辞, 用语, 言语
stylish	 adj. 时髦的, 漂亮的, 流行的
embarrass	 v. 使困窘, 使局促不安
vocation	 n. 召唤,天职,职业
arena	 n. 竞技场, 舞台
waist	 n. 腰部, 衣服的上身部分
irritate	 v. 激怒, 使急躁
storehouses	 n. 仓库,  储藏所,  宝藏
uncharted	 adj. 地图上没标明的,未知的
hanker	 v. 渴望, 追求
rattlesnake	 n. <美>[动]响尾蛇
glamorous	 adj. 富有魅力的, 迷人的
brim	 n. (杯, 碗等)边, 边缘 v. 注满
boot	 n. <美> (长统)靴
garb	 n. 服装 v. 装扮
flannel	 n. 法兰绒(衣服)
thigh	 n. 大腿, 股
collarless	 adj. 无领的,无马轭(或颈圈)的
cowhand	 n. <美>(牧场的)牧牛工
taxonomy	 n. 分类法, 分类学
narrower	 adj. 有限的, 精密的 n. 海峡
waterfall	 n. 瀑布, 瀑布似的东西
hibernation	 n. 过冬, 冬眠, 避寒
evenness	 n. 平均, 平等, 平坦
poikilotherm	 n. [动]变温动物,冷血动物
unload	 v. 卸货 v. 摆脱之负担
depositor	 n. 寄托者, 存款人
lyrically	 adv. 抒情地,  狂热地
theatrically	 adv. 戏剧化地
splinter	 n. 尖片, 碎片 v. 分裂
tonnage	 n. 登记吨位, 排水量
seagoing	 adj. 适于远航的,出海的
jacket	 n. 夹克,护封 v. 给穿夹克
fisherman	 n. 渔民, 渔夫
mainsheet	 n. 主桅帆操纵索
oblivious	 adj. 没注意到, 健忘的
coaming	 n. 舱口栏板, 边材
lad	 n. 少年, 青年男子
tilt	 v. (使)倾斜, 以言词或文字抨击
choppy	 adj. （海等）波浪起伏的, (指风)不断改变方向的
illustrator	 n. 插图画家,说明者
ectothermic	 n. 变温动物
poikilothermic	 adj. [动]变温的, 冷血动物的
locomote	 v. 移动, 行动
inadequately	 adv. 不够地,  不够好
onetime	 adj. 从前的,  一度的 adv. 从前
citation	 n. 引用,表扬
stillness	 n. 静止, 沉静
eyesight	 n. 视力, 目力
comical	 adj. 好笑的, 滑稽的
mollusk	 n. [动]软体动物
rediscover	 v. 重新发现
eminent	 adj. 著名的,  卓越的
bleak	 adj. 寒冷的,荒凉的, 黯淡的
silence	 n. 寂静, 沉默 v. 使沉默
sequester	 v. 使隐退, 扣押, 没收
metazoan	 n&a. [动]后生动物(的)
abreast	 adv. 并肩地, 并排地
serum	 n. 浆液, 血清
adrenaline	 n. 肾上腺素(使激动兴奋等)
milieu	 n. 周围, 环境
compensatory	 adj. 赔偿的, 补偿的
unconventional	 adj. 非传统的, 不合惯例的
gibe	 v. 嘲笑,讥笑 n. 嘲笑
proprietor	 n. 所有者, 经营者
mess	 n. 混乱, 脏乱 v. 弄乱
silly	 adj. 愚蠢的, 可笑的
metric	 adj. 米制的, 公制的
lintel	 n. [建]楣, 过梁
untapped	 adj. 塞子未开的, 未使用的
mysteriously	 adv. 神秘地,  故弄玄虚地
corral	 n. 畜栏 v. 关进畜栏
prevention	 n. 预防, 防止
playwright	 n. 剧作家
Cuban	 n. 古巴人 adj. 古巴(人)的
char	 v. 烧焦 n. 碳
tavernkeeper	 n. 小餐馆老板
upgrade	 n. 升级, 上升 v. 使升级, 提升 adv. 往上
incident	 n. 事件 adj. 附带的, 易于发生的
slavish	 adj. 奴隶的, 盲从的, 专横的
emotive	 adj. 感情的, 引起强烈感情的
physic	 n. 医术 vt. 治愈
synapsis	 n. [生]染色体结合, 突触
unsophisticated	 adj. 不谙世故的, 不复杂的
unspoiled	 adj. 未损坏的, 未宠坏的
arthritis	 n. 关节炎
whim	 n. 一时的兴致, 奇想
hospitable	 adj. 好客的, 宜人的
carnivorous	 adj. 食肉的, 肉食性的
depredation	 n. 掠夺, 破坏痕迹
nostalgia	 n. 乡愁, 怀旧之情
stewpot	 n. 双把炖锅
adolescence	 n. 青春期
ministry	 n. (政府的)部门
Toronto	 n. 多伦多（加拿大）
narrowly	 adv. 勉强地, 精细地
proficiency	 n. 熟练, 精通, 熟练程度
spar	 n. 争论,园材(如桅,桁等)
hometown	 n. 故乡
sociology	 n. 社会学
dough	 n. 生面团
flair	 n. 才能, 本领
esoteric	 adj. 秘传的,  神秘的,  难懂的
potion	 n. 一服, 一剂
laboriously	 adv. 艰难地,  辛勤地
elixir	 n. 炼金药, 不老长寿药
inextricably	 adv. 分不开地, 无法摆脱地
imprecise	 adj. 不精确的
bestow	 v. 给予,利用
bless	 v. 祝福, 保佑
quaker	 n. 教友派信徒, 贵格会会员
alternately	 adv. 交替地,轮流地
thermodynamic	 adj. 热力学的, 使用热动力的
uncrumple	 vt. 去掉…的皱纹,使回复到平整状态
dinner	 n. 正餐, 宴会
untwist	 v. 拆开(搓合的绳,线等), 解开
selfless	 adj. 无私的
obligation	 n. 义务, 职责, 债务
fanatical	 adj. 狂热的, 入迷的
coax	 v. 巧妙地（耐心地）处理,哄
flue	 n. 烟道, 暖气管
pivot	 n. 枢轴 v. 在枢轴上转动
coordination	 n. 协调
cancel	 v.  取消， 废除； 删去， 删除； 抵消
recline	 v.  向后倚靠， 斜倚
explosive	 adj. 爆炸的，爆发的；使人冲动的 n.  炸药
prepare	 v.  准备， 预备
crusade	 v.  加入十字军， 投身正义运动 n. 十字军；斗争，运动
supplant	 vt.  取代， 代替
surgeon	 n.  外科医师
abrupt	 adj.  突然的， 意外的； 唐突的， 鲁莽的
discourage	 vt.  使泄气， 使灰心； 阻止， 劝阻
predispose	 v.  事先影响某人； 易受感染
spontaneous	 adj.  自发的， 自然产生的； 自然的， 无雕饰的
convection	 n.  对流； 传送
wreck	 vt. 使失事；破坏 n.  沉船； 失事
twinkling	 adj.  闪光的 n. 瞬间，一眨眼
gloomy	 adj.  忧郁的， 令人沮丧的； 昏暗的， 阴暗的， 阴沉的
reproach	 v&n.  指责， 斥责， 批评
customs	 n.  关税， 进口税； 海关
warrant	 n. 授权，批准；许可证；委任状，执行令 vt.  保证， 担保； 使正当
sake	 n.  缘故， 理由； 好处
conceal	 vt.  隐蔽； 隐瞒； 覆盖
solid	 adj. 固体的；实心的；结实的，稳固的；可靠的；连续的 n.  固体
narrative	 adj.  叙述性的 n. 叙述；记叙体，叙述技巧
coincide	 vi.  同时发生； 一致， 相符； 重合
circular	 adj.  圆形的， 环形的； 循环的； 绕行的
scratch	 vt. 刮擦，划；抓，搔 n.  划痕； 挠痒
require	 vt.  需要； 要求， 命令
cooperative	 adj. 合作的，协作的；配合的 n.  合作企业
willow	 n.  柳， 柳树； 柳木制品
corporeal	 adj.  肉体的， 身体的； 物质的； 实体的
irritable	 adj.  急躁的， 易怒的； 易受刺激的； 过敏的
triple	 v. 增至三倍 adj.  三部分的； 三方的； 三倍的
temper	 n. 脾气，性情 vt.  缓和， 调节
legible	 adj.  清楚的； 易读的
tickle	 v. 发痒；使高兴，逗乐 n.  痒
cardiac	 adj.  心脏的； 心脏病的
accessible	 adj.  易接近的； 可得到的； 可进入的
ageism	 n.  年龄歧视
cliff	 n.  悬崖， 峭壁
roll	 v. 滚动，转动；卷，绕；摇摆，摇晃 n.  卷； 卷形物； 名单， 花名册
notable	 adj. 值得注意的，明显的；显著的；著名的；重要的 n.  名人， 要人
concede	 v.  承认； 让步； 允许
unparalleled	 adj.  空前的， 无比的
evaporate	 v.  蒸发； 消失， 不复存在
luminosity	 n.  亮度， 发光度； 光明
commission	 n. 授权，委任；委员会；佣金，回扣 vt.  委托， 授权
policy	 n.  政策， 方针； 原则； 保险单
resume	 v.  重新开始， 继续
provocative	 adj.  挑衅的， 煽动性的； 惹人讨厌的； 挑逗的
address	 v.  作讲话； 写姓名地址 n. 地址；讲话
spiral	 vi. 盘旋；盘旋上升；急剧增长 adj. 螺旋形的 n.  螺旋形； 螺旋式的上升
artistic	 adj.  艺术的； 富有艺术性的， 精美的； 有艺术天赋的
ramble	 vi. 漫游；漫谈，闲聊 n.  漫步
vocation	 n.  职业； 使命感； 圣召
halt	 v.  停住， 停下 n. 停止，阻止；暂停
throw	 v. 投，掷，抛；丢，扔；使陷入，使处于；使困惑，使吃惊 n.  投， 掷， 抛； 投掷的距离
sunset	 n.  日落， 傍晚
stature	 n.  身材， 身高； 地位， 声望， 名望
dogged	 adj.  顽强的， 坚持不懈的； 顽固的， 固执的
plasma	 n.  血浆； 等离子体
exorbitant	 adj.  过高的， 不合理的
surgery	 n.  外科手术； 外科学； 手术室， 诊疗室
violent	 adj.  暴力的； 感情强烈的， 激情的； 强烈的， 激烈的
inaccessible	 adj.  难达到的， 不可及的； 不能得到的
resolve	 v. 解决；决定，决心；分解；显现 n.  决心， 决议
choreograph	 v.  设计舞蹈动作， 编舞
confront	 vt.  使面临， 使遭遇； 对抗
nonverbal	 adj.  非语言的
deploy	 vt.  部署， 调度； 利用
reproduce	 v.  繁殖， 生育； 复制； 再现
skeleton	 n.  梗概， 提纲； 骨架， 骨骼； 框架
huddle	 vi.  聚集在一起， 挤作一团； 蜷缩， 缩成一团， 蜷缩 n. 挤在一起的人
syntactic	 adj.  句法的； 按照句法的
rendition	 n.  表演， 演唱； 提供， 给予； 翻译
intersection	 n.  交点； 十字路口， 道路交叉口
scholarship	 n.  奖学金； 学问， 学识
myriad	 adj.  无数的； 大量的 n. 无数；大量
besides	 adv.  而且， 还有 prep. 除…之外
implement	 vt.  使生效， 执行， 实施
disperse	 v.  分散， 散开； 疏散； 散布
erratic	 adj.  古怪的， 反复无常的； 不规则的； 不稳定的
incinerate	 vt.  焚化， 焚毁
fantasy	 n.  想象， 幻想
capillary	 adj.  毛状的； 毛细血管的 n. 毛细血管
deform	 v.  变形
erode	 v.  侵蚀， 腐蚀
informative	 adj.  提供消息的， 给予知识的； 见闻广博的
check	 n. 支票；账单；
frustrate	 vt.  使感到灰心， 挫败； 阻止
sparse	 adj.  稀疏的， 稀少的； 贫乏的
gorgeous	 adj.  漂亮的； 令人愉快的； 华丽的， 灿烂的
pragmatic	 adj.  务实的， 注重实效的， 实用的
erosion	 n.  腐蚀， 侵蚀； 削弱， 减少
methane	 n.  甲烷， 沼气
tectonic	 adj.  地壳构造的
superstitious	 adj.  迷信的， 受迷信思想支配的
ascend	 v.  上升， 升高； 攀登
elasticity	 n.  弹力； 弹性
proactive	 adj.  积极主动的； 先发制人的
aboriginal	 adj. 原始的；土著的，土生土长的 n.  土著
indispensable	 adj.  必不可少的
lens	 n.  透镜； 镜头； 镜片
embody	 vt.  表达， 体现； 含有
verifiable	 adj.  可证实的， 可核实的
comprehensible	 adj.  可理解的， 能懂的， 能充分理解的
motive	 adj.  发动的； 导致运动的 n. 动机，目的
elliptical	 adj.  椭圆的； 隐晦的； 省略的， 简略的
emancipate	 vt.  解放， 解除
romantic	 adj.  爱情的； 浪漫的， 富有情调的； 多情的； 不切实际的， 幻想的； [R-]浪漫主义的
motivate	 vt.  激励； 激发
spoil	 v.  破坏； 宠坏， 溺爱； 变质
multiply	 v.  增加； 繁殖； 乘
pasture	 n. 牧场，草原；
conducive	 adj.  有助于…的， 有益于…的
pilot	 adj. 试验性的 n. 飞行员，领航员；领导人 vt.  驾驶， 领航； 试行， 试用； 使通过， 引导
curative	 adj. 有助于治疗的，有疗效的 n.  药物
cartilage	 n.  软骨
snide	 adj.  伪造的； 不诚实的； 讽刺的， 挖苦的， 含沙射影的
multiple	 adj. 多样的；多重的 n.  倍数
expose	 vt.  暴露， 显露； 揭露， 揭穿； 使接触， 使面临
magnet	 n.  磁铁， 磁体； 有吸引力的人
versatile	 adj.  多才多艺的； 多用途的
concentrate	 v. 集中，专心；
versus	 prep.  对， 对抗； 与…相对， 与…相比
penmanship	 n.  书法
tundra	 n.  苔原， 冻原， 冻土地带
explosion	 n.  爆炸； 爆发； 激增
tinker	 vi. 做焊锅匠；做拙劣修补 n.  补锅匠
populate	 vt.  居住于
puncture	 v. 刺穿；泄气，挫伤 n.  小孔； 刺伤
permit	 v.  允许， 许可 n.  许可证， 执照
translation	 n.  翻译； 译文， 译本
personnel	 n.  全体人员， 员工
splash	 v.  溅， 泼 n. 重点文章；溅上的液体；斑点
fountain	 n.  喷泉； 丰富来源， 源泉
porcelain	 n.  瓷器， 瓷
catalog	 n.  目录
part-time	 adj.  兼职的； 部分时间的
pioneer	 vt. 开拓，开创 n.  开拓者， 创始人
chilly	 adj.  寒冷的； 冷淡的， 不友好的
flagellum	 n. [昆] 鞭毛；鞭子；鞭状匍匐枝
rhinoceros	 n.  犀牛
implication	 n.  含义； 暗示， 暗指； 卷入， 牵连
fierce	 adj.  凶猛的， 残忍的； 狂热的， 强烈的； 激烈的， 猛烈的
reservation	 n.  预约， 预订； 保留意见， 疑惑； 居留地
block	 vt. 阻塞；阻碍，妨碍 n.  大块； 街区； 障碍物
cordial	 adj.  亲切的， 热诚的
odorous	 adj.  有气味的， 难闻的； 香的， 芬芳的
cooperation	 n.  合作， 协作
conceit	 n.  自负， 自大
modulate	 v.  调整， 调节； 调制
mottled	 adj.  有杂色的， 斑驳的
morphology	 n.  形态学， 形态论
distant	 adj.  远离的， 遥远的； 疏远的， 冷淡的； 久远的； 不同的
resonance	 n.  共振， 共鸣； 回声， 反响
propose	 v.  建议， 提议； 提名， 推荐； 打算， 计划； 求婚
spearhead	 n. 先锋，前锋，先头部队 vt.  为…作先锋； 带头做
seismograph	 n.  地震仪， 测震仪
reform	 n&v.  改革， 改造， 革新； 改正， 改过自新
angular	 adj.  有角的， 尖角的； 消瘦的， 瘦骨嶙峋的
daylight	 n.  日光； 白昼
podium	 n.  讲坛， 讲台； 指挥台
binary	 adj.  二进制的； 二元的； 由两部分组成的
ensue	 vi.  继而发生， 接着发生
crazy	 adj.  疯狂的， 不理智的； 狂热的， 热衷的； 精神失常的
microscopic	 adj.  用显微镜可见的； 极小的
homage	 n.  尊敬， 敬意
penicillin	 n.  青霉素， 盘尼西林
pine	 vi.  憔悴； 难过， 悲伤 n. 松树
enlightenment	 n.  启发， 教化， 启迪； [the E-]启蒙运动
irony	 n.  反话， 讽刺， 嘲弄； 具有讽刺意味的事
mandatory	 n. 强制的，法定的，义务的； 受托人； 代理人
caterpillar	 n.  毛毛虫
hypertext	 n.  超文本
bedrock	 n.  基础， 根基； 基岩
syndrome	 n.  综合征； 典型表现
newsprint	 n.  新闻纸
tow	 vt&n.  拖， 牵引
harmonic	 n. 泛音；
haul	 v. 拖，拖运 n.  拖， 拉， 拖运； 一次获得的数量； 旅行的距离
energetic	 adj.  精力充沛的， 积极的
quilt	 v. 缝被；缝制 n.  被褥
premier	 adj.  第一的， 首要的； 最著名的 n. 首相，总理
allergic	 adj.  过敏的， 变态反应的； 对…讨厌的
oceanographer	 n.  海洋学者
anecdote	 n.  秘闻； 轶事， 趣闻
officious	 adj.  爱发号施令的， 爱指手画脚的
infiltrate	 v.  渗入， 渗透； 悄悄进入， 潜入
minor	 vi.  辅修 adj. 较小的；次要的 n. 未成年人；辅修科目
hostile	 adj.  不友好的， 敌意的； 敌方的
flora	 n.  植物群
celestial	 adj.  天空的， 天上的
decode	 vt.  译， 解， 破译
bruise	 v. 出现伤痕；挫伤 n.  伤痕， 擦痕， 青肿
crawl	 v. 缓慢行进；爬行 n.  缓慢的速度
identical	 adj.  相同的； 同一的
unaided	 adj.  未受协助的， 独立的
ambitious	 adj.  有雄心的， 有野心的
academic	 adj. 学术的；学校的，学院的；纯理论的 n.  大学教师
coral	 adj.  珊瑚色的， 红色的 n. 珊瑚
function	 v.  运行； 起作用 n. 机能，功能，作用；函数
raise	 v. 举起，提升；直立；增加；募集；饲养，养育；引起；提出 n.  提升， 增加
delinquency	 n.  行为不良； 过失， 失职
pipe	 vt. 用管道输送；用线路系统传输 n.  管子， 管道； 烟斗
pliant	 adj.  柔软的； 温顺的； 易受影响的
revere	 vt.  尊敬， 敬畏
representative	 adj.  典型的， 有代表性的 n. 代表，代理人
sneaky	 adj.  偷偷摸摸的， 鬼鬼祟祟的
longitude	 n.  经度， 经线
pigeon	 n.  鸽子
lax	 adj.  懒散的； 不严格的， 马虎的
comparison	 n.  比较， 对比； 比拟， 比喻
lay	 v.  产； 放置； 铺； 筹划， 设置； 提出， 提交
hatch	 v. 孵化，孵出 n.  开口； 舱门
patriot	 n.  爱国者
pernicious	 adj.  有害的， 恶性的
revert	 v.  恢复； 归还， 归属
cohabitation	 n.  同居， 同住
herbivore	 n.  食草动物
successive	 adj.  接替的， 继承的； 接连的， 连续的
adventure	 n.  奇遇； 冒险活动
ceremony	 n.  典礼， 仪式； 礼节
improve	 v.  改善， 改进， 增进； 好转， 进步
idyllic	 adj.  田园诗般的， 田园风光的， 牧歌的
hawk	 n. 鹰，隼；主战分子 vt.  叫卖， 兜售
speckle	 v. 弄上斑点；点缀 n.  斑点； 色斑
emanate	 v.  散发； 表现， 显示
exterior	 adj. 外部的，外表的 n.  外部， 外表
captivity	 n.  囚禁， 拘留
levy	 vt. 征收 n.  征收额； 税款； 征兵
effective	 adj.  有效的， 生效的； 显著的； 实际的， 事实上的
muscle	 n.  肌肉； 体力， 力量， 实力； 影响力
generous	 adj.  慷慨的， 大方的； 大量的， 丰富的； 宽厚的， 宽宏大量的
flux	 n.  变迁， 不断的变动
jelly	 n.  果冻， 胶状物
probe	 v. 探查，探测；盘问，追问 n.  探针； 探测器； 探索， 调查
crescent	 adj. 新月形的；逐渐增强的 n.  新月； 新月形， 月牙形
inflate	 v.  充气， 膨胀； 鼓吹， 吹捧； 涨价
stable	 adj. 稳定的，安定的；牢固的；沉稳的 n.  马厩
quantitative	 adj.  数量的， 定量的
clamor	 n.  吵闹， 喧哗
harness	 vt. 利用…产生动力；给上挽具 n.  马具
foment	 vt.  煽动， 挑起， 激起
respond	 vi.  回答， 答复； 作出反应； 响应
incident	 n.  事情， 事件； 摩擦， 冲突
cluster	 vi.  成群， 成串； 丛生； 群集 n. 簇，团，串，丛；群
prey	 vi. 捕食，捕获 n.  猎物； 受害者， 牺牲品
attire	 n. 穿着，服饰 vt.  给…穿衣， 打扮
tug	 v. 拖，
neuron	 n.  神经元， 神经细胞
vertebrate	 adj.  有脊椎的 n. 脊椎动物
expedition	 n.  远征； 探险
concert	 n.  音乐会， 演奏会； 一致
absorb	 vt.  吸收； 理解， 掌握； 吸引…的注意， 使全神贯注； 使并入， 同化
supply	 n. 供应；储备；补给 vt.  供给， 供应； 满足， 弥补
concern	 vt. 涉及，关系到；使关心，使担忧 n.  关心， 挂念； 关系； 有关的事， 负责的事； 公司， 企业
circulate	 v.  循环； 流通； 传播， 流传
incubate	 v.  孵化； 培育； 潜伏
rectify	 vt.  矫正， 纠正； 整顿
antonym	 n.  反义词
integrity	 n.  正直； 完整
refrain	 v.  抑制； 戒除 n. 反复句，副歌
pact	 n.  协议， 条约， 公约
notation	 n.  符号， 记号
liable	 adj.  有责任的， 有义务的； 易于…的
homing	 adj.  有返回原地本能的
state	 v.  陈述， 说明， 声明； 规定 n. 情况，状况；国家；州
cargo	 n.  货物
press	 v.  压， 按， 挤； 压榨， 压迫； 催促， 逼迫 n. 报刊；新闻界，新闻工作者；报道，评论；出版社；印刷厂；压，按，挤
jumble	 vt. 混杂，掺杂 n.  杂乱的一堆， 混乱的一团
element	 n. 元素，要素，组成部分；
environmental	 adj.  有关环境的， 自然环境的， 生态环境的； 环境的
picky	 adj.  挑剔的， 难以取悦的
crustacean	 adj.  甲壳类的 n. 甲壳类动物
exclaim	 v.  惊叫， 呼喊
opposite	 adj. 对面的；对立的；相反的 prep.  在…对面 n. 对立面；对立物
pack	 v. 收拾，打包；捆扎；塞满 n.  包， 包裹
restraint	 n.  抑制， 克制； 限制； 约束力； 管制措施
aftermath	 n.  后果， 余波
pollutant	 n.  污染物质， 有害物质
untapped	 adj.  未开发的， 未使用的
cue	 n.  暗示， 提示
effluent	 n.  流出物， 废水， 污水
untamed	 adj.  未驯服的， 难驾驭的
stereotype	 n. 陈规；固定形式，老套；刻板印象 vt.  对…形成固定看法
enroll	 v.  登记， 注册； 招收
sweeping	 adj. 彻底的，广泛的；〈贬〉笼统的，一概而论的 n.  清扫， 扫除； 垃圾
ardent	 adj.  热心的， 热情洋溢的
cohesive	 adj.  黏着的； 使凝结的， 使内聚的
battery	 n.  电池； 排炮； 一系列， 一批
clay	 n.  泥土， 黏土
irreverent	 adj.  不敬的
promote	 vt.  促进； 提升； 宣传， 推销
façade	 n.  正面； 表面
divorce	 v.  与…离婚； 使分离， 使脱离 n. 离婚；分离，脱离
distribute	 vt.  分配， 分发； 散布
attach	 vt.  连接； 依附于； 系， 贴， 连接； 使依恋， 使喜爱 ； 认为有
cornerstone	 n.  墙角石， 奠基石； 基础
quiz	 n. 小测验；智力竞赛 vt.  测验； 盘问， 查问， 询问
inclination	 n.  爱好， 意愿； 趋向， 趋势； 倾斜度
participate	 vi.  参与， 参加
ingredient	 n.  成分， 要素； 原料
consolidate	 v.  巩固； 合并
biochemical	 adj.  生物化学的， 生化的
librarian	 n.  图书馆馆长； 图书管理员
contour	 n.  等高线； 轮廓
lyric	 adj. 抒情的 n. 抒情诗；
suborn	 vt.  收买， 买通， 唆使
clan	 n.  家族， 宗族， 氏族； 帮派
purple	 adj. 紫色的 n.  紫色
quit	 v.  停止； 放弃； 离开； 辞
clam	 n.  蛤， 蛤肉； 〈口〉守口如瓶的人， 寡言的人
economical	 adj.  经济的， 实惠的； 节俭的， 节约的； 精打细算的
polish	 v.  磨光， 擦亮； 修改， 润色 n.  上光剂
cabinet	 n.  内阁； 储藏柜， 陈列柜
ordinal	 adj. 序数的；顺序的 n.  序数词
insurance	 n.  保险； 保险费； 保险业
principle	 n.  原则； 原理； 道德准则， 行为规范； 信念
tedious	 adj.  单调乏味的， 令人厌烦的
source	 n.  源， 源泉； 来源， 出处； 信息来源
telecommunication	 n.  电信
participant	 n.  参与者； 参赛者
initiate	 vt.  发起， 开始， 创始； 接纳， 让…加入 n.  新加入组织的人
domestic	 adj.  国内的； 家庭的； 驯养的
detergent	 adj.  净化的， 清洁的 n. 清洁剂
glare	 v.  怒目而视； 发出刺眼的光 n. 耀眼的光；怒视，瞪眼
terrestrial	 adj.  陆地的， 陆生的， 陆栖的； 地球的
deception	 n.  骗局； 诡计； 欺骗， 欺诈
compile	 vt.  汇编； 编辑， 编纂
bias	 n. 偏见，偏心 vt.  使有偏见， 使偏心
fume	 vi.  冒烟； 大为恼火
budget	 v. 做预算 adj.  价格低廉的 n. 预算
radiate	 v.  辐射， 发射； 流露， 显示； 自中心向各方伸展
tension	 n.  紧张； 拉紧； 张力
tenuous	 adj.  纤细的； 稀薄的； 脆弱的
reflection	 n.  反映； 映像； 深思， 考虑； 回忆； 记录， 描述
campus	 n.  校园
ultimate	 adj. 最后的，最终的；根本的 n.  最好的事物； 最大的或最先进的事物
prosecute	 v.  起诉， 控告， 检举； 担任控方律师； 继续从事
verbal	 adj.  口头的； 言辞的； 动词的
district	 n.  地区， 区域； 管区， 行政区
arboreal	 adj.  树栖的； 树木的
overall	 adv.  总共 adj. 全面的，综合的 n.  工作服， 工装裤
assume	 vt.  假定； 承担
pepper	 n. 胡椒；辣椒 vt.  撒胡椒粉； 大量给予
mellow	 adj. 醇香的；柔和的；成熟的 v.  醇香； 柔和； 成熟
concept	 n.  概念， 观念； 设想
impersonal	 adj.  没有人情味的， 冷淡的； 客观的
millennium	 n. 一千年，千年期
resistant	 adj.  抵抗的， 有抵抗力的； 抵制的； 抗…的， 耐…的
salamander	 n.  火蜥蜴； 火蛇
disaster	 n.  灾难； 彻底的失败
stark	 adv.  十足 adj. 赤裸的；严酷的，严峻的；明显的，鲜明的；十足的，极端的
hitch	 v. 搭便车；提起，拉起；拴住 n.  故障， 障碍
perceptual	 adj.  感知的， 知觉的
furry	 adj.  毛皮似的； 盖着毛皮的； 生苔的
enhance	 vt.  提高； 增强
convention	 n.  会议； 习俗， 惯例； 公约
cranial	 n.  头盖骨的， 颅骨的
purchase	 n. 购买；购买的物品 vt.  购买
shore	 n. 滨，岸 vt.  支撑， 支持
teem	 vi.  充满， 到处都是
anomie	 n.  社会道德沦丧， 失范； 混乱
chlorine	 n.  氯
manage	 v.  勉力完成； 应付； 操纵， 控制； 管理
equal	 adj. 相同的 vt. 等于；相当于 n.  同等的人； 相等的事物
stylish	 adj.  漂亮的， 时髦的； 高雅的， 有格调的
marvel	 v. 对…感到惊异，大为赞叹 n.  令人惊异的人， 奇迹； 不凡的成果
silicon	 n.  硅
silicate	 n.  硅酸盐
fund	 n. 基金，专款；储备，蕴藏； vt.  为…提供资金
gravity	 n.  重力； 严重性； 严肃， 庄严
recipient	 n.  接受者， 收受者
mesmerize	 vt.  施催眠术； 使入迷， 迷住
finance	 vt. 给…提供资金 n. 财政，金融；
stash	 vt. 隐藏，藏匿 n.  贮藏物
parking	 n.  机动车停放； 停车场
studio	 n.  工作室， 画室； 摄影室， 演播室， 录音室； 练习室； 电影公司
incur	 vt.  招致， 招惹， 遭受
downward	 adv. 向下，往下 adj.  向下的
plump	 adj.  微胖的； 丰满的
abreast	 adv.  并列地， 并排地
recoil	 vi. 弹回；后退，退缩；产生后坐力 n.  后退， 退缩； 反冲， 后坐力
regulate	 v.  管理， 控制； 调整， 调节； 校准
interactive	 adj.  交互式的； 合作的， 互相配合的
listless	 adj.  倦怠的， 没精打采的
gland	 n.  腺
complementary	 adj.  补充的； 互补的
consistency	 n.  浓度， 密度； 一致性， 协调； 连接， 结合
ordeal	 n.  折磨； 严峻考验
primate	 n.  灵长类， 灵长目动物； 大主教
wispy	 adj.  成束的； 纤细的
premise	 n.  房屋和地基， 经营场址； 前提， 假设
colonize	 vt.  聚居于， 大批生长于； 开拓殖民地， 移居于
season	 n.  季节； 时节； 时期
controversial	 adj.  引起争论的， 有争议的
attain	 vt.  达到； 获得
tenant	 n. 房客，承租人 vt.  居住
gallery	 n.  画廊， 美术馆
restoration	 n.  恢复； 整修， 修复； 复位， 复原； 归还
pale	 vi.  变得苍白， 变得暗淡 adj. 苍白的；淡色的；暗淡的，微弱的
hardware	 n.  五金制品， 金属制品； 硬件
batter	 v. 连续猛击 n.  击球手； 面糊
wretch	 n.  不幸的人； 恶棍， 无赖
priority	 n.  优先权， 优先； 优先考虑的事， 最重要的事
metallic	 adj.  金属般的； 金属制的； 含金属的
creative	 adj.  有创造力的， 创造性的
mythology	 n.  神话； 神话学； 虚幻的想法
shuttle	 v. 穿梭往返；短程往返运送 n.  航天飞机； 梭子； 航班
allocate	 vt.  分配， 分派， 把…拨给
bagel	 n.  硬面包圈
primary	 adj.  最初的； 首要的； 基本的
log	 n. 原木，木材；日志，航海日志，飞行日志 vt.  记录； 伐木
enterprise	 n.  企业， 公司； 事业
falcon	 n.  猎鹰， 隼
ventilation	 n.  通风设备； 空气流通
solar	 adj.  太阳的， 日光的； 太阳能的
consume	 vt.  消耗， 损耗； 消费； 吃， 喝； 使充满； 烧毁， 毁灭
formation	 n.  形成， 构成； 形成物； 编队
psychoanalysis	 n.  心理分析， 精神分析
bilingualism	 n.  双语现象
competence	 n.  能力， 胜任； 权限； 技能
fuse	 v. 融合；熔接；熔化；因保险丝烧断而断电；合并 n.  保险丝； 引信； 导火线
frivolous	 adj.  琐碎的， 无关紧要的； 愚蠢的， 可笑的； 无聊的， 不严肃的， 轻佻的
pretext	 n.  借口， 托词
emergent	 adj.  突现的； 新兴的； 紧急的
assure	 vt.  确保； 使确信
consult	 v.  请教； 商议； 参考， 翻阅
funding	 n.  基金， 资金； 提供资金
survive	 v.  幸免， 幸存； 继续存在， 存货； 艰难度过； 比…长命
initial	 adj. 开始的，最初的 n.  词首大写字母
rudimentary	 adj.  未充分发展的， 原始的； 基本的， 基础的
adversary	 n.  对手， 敌手
postulate	 vt.  假定， 假设
infest	 vt.  大批滋生， 大批出没于
satiric	 adj.  讽刺的， 嘲讽的
eternal	 adj.  永恒的， 不朽的
crumple	 v.  变皱， 起皱； 破裂； 崩溃， 垮台
satire	 n.  讽刺文学， 讽刺作品； 讽刺
prevalent	 adj.  流行的， 普遍的
cling	 vi.  附着， 黏住； 紧紧抓住； 挨近
clip	 v. 夹住，扣住；修剪；剪下 n.  夹子， 回形针， 别针； 弹夹， 弹仓； 电影片段， 剪报
oasis	 n.  绿洲； 避风港
nutrient	 adj.  滋养的， 有营养的 n. 滋养物，营养品
compact	 adj. 紧凑的；简洁的 vt.  压缩
outlaw	 vt. 宣布…为非法 n.  罪犯， 歹徒， 亡命之徒； 被剥夺法律权益者
irrigate	 vt.  灌溉； 冲洗
shrivel	 v.  枯萎
encrust	 v.  在表面形成硬壳， 结壳； 用…装饰外层
upsurge	 n.  高涨； 激增
dam	 n. 坝，堤 vt.  筑坝； 控制
bloom	 v.  开花 n. 花；开花；青春焕发
denote	 v.  表示， 意指； 标示， 预示， 象征
zone	 vt. 将…划做特殊区域；分区，划分地带 n.  地区， 地域， 地带； 气候带
audible	 adj.  听得见的
exhort	 vt.  劝告， 规劝， 告诫
propagate	 v.  繁殖； 散布， 传播
checked	 adj.  格子花纹的； 棋盘状的
necessitate	 vt.  需要， 使成为必要
orthodox	 adj.  传统的； 正统的
depredation	 n.  劫掠， 掠夺， 破坏
combination	 n.  结合， 混合； 化合； 组合
ambush	 n&vt.  埋伏， 伏击
jewelry	 n.  〈总称〉首饰； 珠宝
obtain	 v.  获得； 通用， 流行
statesman	 n.  政治家
quadruple	 v. 成四倍 adj. 四部分组成的；四倍的 n.  四倍
adept	 adj. 熟练的，精通的，内行的 n.  行家， 熟手
curiosity	 n.  好奇心， 求知欲； 罕见而有趣之物， 珍品
repute	 v. 称为，认为 n.  名声， 名誉
nimble	 adj.  敏捷的， 灵活的
amiable	 adj.  可爱的； 友好的， 和蔼的， 亲切的
format	 n. 设计，安排；格式，样式 vt.  使格式化
sacrifice	 v. 牺牲，献出；以…做祭献 n.  牺牲， 献身； 献祭， 祭品
particular	 adj. 特定的；独特的；详细的；挑剔的 n.  详情， 细目
corps	 n.  军团， 兵团； 特种部队； 一群人， 一组人
pause	 n&v.  中止， 暂停
formal	 adj.  正规的， 正式的； 形式的
rainbow	 n.  彩虹
instructor	 n.  导师， 讲师； 教练， 指导员
fervor	 n.  热情， 热烈
ample	 adj.  富足的， 充足的， 丰富的； 宽敞的
cohesion	 n.  内聚力； 凝聚力； 团结， 结合
entertain	 v.  招待， 款待； 使快乐， 娱乐
ease	 v.  缓和， 减轻 n. 不费力，容易；悠闲，自在
condiment	 n.  调味品
certitude	 n.  确定， 确信； 必然性
overrun	 v. 超过，溢出；泛滥；横行 n.  泛滥； 超出的部分
deceptive	 adj.  欺骗性的， 导致误解的
mathematics	 n.  数学
reactor	 n.  反应堆
cookout	 n.  野外烧烤宴会
envision	 vt.  想象， 展望， 预想
outcry	 n.  大声疾呼， 强烈的抗议
penetrate	 v.  刺穿； 渗透； 洞察
paddle	 v.  用桨划船； 涉水， 戏水 n. 桨；桡足
reschedule	 vt.  重新计划， 重订…的时间表
principal	 adj. 主要的，最重要的 n.  校长； 资本； 主角
tend	 v.  趋于， 易于； 照料， 看护
somber	 adj.  昏暗的； 忧郁的
synonym	 n.  同义词
equitable	 adj.  公平的， 公正的
inconspicuous	 adj.  不引人瞩目的， 不显眼的
specimen	 n.  标本， 样本； 范例； 抽样
exotic	 adj.  外来的， 来自异国的； 奇异的
relief	 n.  缓解， 减轻， 轻松； 援救， 救济； 宽慰； 浮雕
boycott	 vt.  联合抵制， 拒绝购买
introduction	 n.  介绍； 传入， 引进； 导言， 绪论
subscribe	 v.  订购， 订阅； 申请， 预订； 捐助， 赞助
therapy	 n.  治疗， 疗法
chromosome	 n.  染色体
concentration	 n.  专注， 专心； 浓度， 含量； 集中， 聚集
velocity	 n.  速度， 速率； 迅速
fellowship	 n.  友谊； 奖学金； 团体， 协会
colleague	 n.  同事， 同僚
unadorned	 adj.  未装饰的， 朴实的
confession	 n.  供认， 招供， 坦白； 供词； 承认
meridian	 n.  子午线， 经线
interfere	 vi.  干涉， 干扰， 妨碍
apartment	 n.  公寓套房； 房间
tolerate	 vt.  忍受； 容许， 承认
stack	 v.  堆积， 堆放 n. 堆
resent	 v.  憎恶， 愤恨， 怨恨
fiery	 adj.  似火的； 易怒的， 暴躁的
mime	 v. 模拟，模仿 n.  喜剧； 哑剧； 哑剧演员； 模拟表演
ambiguous	 adj.  不明确的， 模棱两可的
parliament	 n.  国会， 议会
allay	 vt.  减轻， 减少
path	 n.  道路； 路线； 小路， 小径
crack	 v. 破裂，断裂；发出爆裂声；重击，猛击；崩溃，
dote	 vi.  溺爱
retrieval	 n.  数据检索； 取回， 索回
conceivable	 adj.  可能的； 可信的， 可想象的
cube	 n.  立方体； 立方形的东西； 立方
synchronize	 v.  同步， 同时发生
sequoia	 n.  美洲杉， 红杉
impact	 v.  影响； 冲击， 撞击 n.  影响； 冲击， 撞击
mild	 adj.  轻微的； 温和的； 随和的
profile	 n. 人物专访；概述，传略，人物简介；面部的侧影；轮廓，外形 vt.  扼要介绍， 概述
bill	 n. 账单；纸币，钞票；议案，法案；节目单；招贴，海报 vt.  用招贴宣布； 给…开账单
tributary	 n. 支流；
clog	 v. 堵塞，阻塞 n.  障碍
senior	 adj. 地位较高的；
dilate	 v.  膨胀， 扩大； 详述
domain	 n.  领土； 领域
census	 n.  人口普查， 人口统计
smear	 v. 胡乱涂抹；弄脏；诽谤，诋毁 n.  污迹， 污斑； 诽谤， 诋毁； 涂片
willful	 adj.  成心的， 有意的； 任性的
relative	 adj. 相对的；有关的 n.  亲属， 亲戚
average	 adj. 平均的；一般的；平庸的 v.  平均为 n. 平均水平；平均数
compare	 v.  比较， 相比， 对比
pluralism	 n.  多元化， 多元性； 多元主义
influential	 adj.  有影响力的； 有权势的
amenity	 n. 生活设施；便利设施
bequeath	 vt.  遗赠； 流传
transparent	 adj.  透明的； 明显的， 显而易见的； 直率的
adaptive	 adj.  适合的， 有适应性的
mint	 v. 铸造 n.  薄荷； 造币厂； 大量的钱
grasp	 vt&n.  抓住； 掌握， 理解， 领会
journal	 n.  期刊， 杂志； 日记， 日志
pave	 v.  铺； 密布
distinctive	 adj.  出众的， 有特色的
chaotic	 adj.  混乱的， 无秩序的
brag	 v.  吹嘘， 自夸， 自吹自擂
annoyed	 adj.  生气的
chimpanzee	 n.  黑猩猩
term	 n. 学期；期限，期间；条件，条款；术语 vt.  把…称为
volcano	 n.  火山
acquisition	 n.  习得， 获得； 收购， 购置
rigid	 adj.  严格的； 刚硬的， 不易弯曲的； 死板的， 刻板的； 僵硬的
deadline	 n.  最后期限， 截止时间
so-called	 adj.  所谓的
mine	 pron. 我的 v. 开矿，采矿；在…布雷 n.  矿， 矿井； 地雷， 水雷
advent	 n.  到来， 来临； 出现
medieval	 adj.  中世纪的， 中古的
staff	 n. 全体职工；行政人员；棍棒 vt.  为…配备人员； 任职于
involve	 vt.  包含； 牵涉， 牵连； 使参加
stage	 n. 阶段；步骤；舞台；戏剧 vt.   上演； 筹划
complicated	 adj.  难懂的， 复杂的
maximum	 adj. 最大的，最大限度的 n.  最大量， 极限
finch	 n.  雀类
syllabus	 n.  教学大纲， 课程提纲
fragrant	 adj.  芬芳的， 香的
tolerant	 adj.  宽容的； 容忍的
dialect	 n.  方言， 土话
rigor	 n.  严格； 严酷
dim	 adj. 模糊的；暗淡的；朦胧的；不乐观的 v.  变暗淡； 变冷漠
impel	 vt.  驱使， 促使
lichen	 n.  青苔， 地衣
paralyze	 vt.  使瘫痪， 使麻痹； 使无效
besiege	 vt.  包围； 使应接不暇
exemplary	 adj.  模范的； 典型的
faculty	 n.  学院； 全体教职员工； 能力
photodissociation	 n.  光解
adamant	 adj.  坚定不移的， 坚决的； 固执的
hydraulic	 adj.  水力的， 液压的； 液压驱动的； 与水力系统有关的
habit	 n.  习惯； 习性， 脾性
limestone	 n.  石灰石
considerate	 adj.  考虑周到的， 体贴的， 体谅的
livestock	 n.  〈总称〉家畜， 牲畜
clue	 n.  线索； 提示
meteorite	 n.  陨石
molten	 adj.  熔化的， 熔融的
radius	 n.  半径； 周围， 范围
signal	 v. 发信号，示意；标志 adj.  显要的， 重大的 n. 信号，暗号；标志
scruffy	 adj.  不整洁的， 邋遢的
impair	 vt.  削弱； 损害
sumptuous	 adj.  奢华的， 豪华的
stray	 vi. 迷路；分心，走神；离题 adj. 迷路的；
static	 adj.  静态的， 静止的； 静电的； 静力的 n. 静电噪音；静电；[-s]静力学
kinship	 n.  血缘关系， 亲属关系
exhaust	 n. 废气；排气管 vt.  用尽， 耗尽； 使非常疲倦； 详尽讨论
soluble	 adj.  可溶的； 可解决的
varied	 adj.  各式各样的
intriguing	 adj.  引起兴趣的， 吸引人的
strap	 n. 带 vt.  用带捆扎， 束牢； 用绷带包扎
diversify	 v.  多样化， 不同
graph	 n.  图表
feast	 v.  尽情享用 n. 节日；盛宴，宴会
sodium	 n.  钠
imbibe	 v.  喝； 吸收， 接受
impermeable	 adj.  不可渗透的， 不透水的
precautionary	 adj.  预防的
pretentious	 adj.  自负的
tackle	 v. 对付，处理；阻截；抢球 n.  拦截； 用具
solvent	 adj.  有溶解力的； 有偿付能力的 n. 溶剂
nude	 adj.  裸体的
distract	 vt.  分散注意力， 使分心
palate	 n.  上腭； 味觉， 品尝力
influenza	 n.  流行性感冒
loan	 n. 贷款；出借，借出；暂借的东西 vt.  借出； 贷给
virtual	 adj.  模拟的， 虚拟的； 实际上的， 事实上的
squeeze	 v. 挤压；挤入；挤过，塞入；压榨，榨取；
endless	 adj.  无止境的， 无穷尽的
pound	 v. 猛击；捣碎；怦怦跳 n.  磅； 英镑
load	 n. 负荷，负担；装载 vt.  装载， 使负担
plantation	 n.  种植园； 人造林
ignore	 vt.  忽视； 不顾， 不理
hemisphere	 n.  半球； 大脑半球
continuation	 n.  延长， 延续， 持续； 延长物， 扩建物； 延续部分
applaud	 v.  鼓掌， 喝彩； 称赞
lunar	 adj.  月亮的
poetry	 n.  诗歌； 诗集； 诗意
arrogant	 adj.  傲慢的， 自大的
relay	 vt.  转播； 传达， 转述 n.  接替人员， 轮换者； 接力赛； 中继设备
permission	 n.  允许， 同意； 许可证， 书面许可
permeate	 v.  弥漫； 渗透
monogamous	 adj.  一夫一妻制的； 单配的
schedule	 vt. 安排，预定 n.  时刻表， 日程表； 清单， 明细表
apprehend	 vt.  逮捕； 领会， 理解
crippling	 adj.  令人震惊的； 严重损害身体的； 极其有害的
inherit	 v.  继承， 遗传而得
arduous	 adj.  费力的， 艰巨的
interpret	 v.  解释， 说明； 理解； 翻译
faction	 n.  派别， 派系， 小集团； 派系斗争
beach	 n.  海滩， 湖滩， 河滩
universe	 n.  宇宙； 世界
blanket	 n.  毯子； 覆盖物
grant	 v. 给予，授予；允许，同意；承认 n.  拨款； 津贴； 授予物
recoup	 vt.  收回， 弥补
aquifer	 n.  含水土层
append	 vt.  附加， 增补
newsletter	 n.  时事通讯
copilot	 n.  副驾驶员
frigid	 adj.  寒冷的； 冷淡的
relic	 n.  遗物， 遗迹， 遗风
bellows	 n.  风箱
discount	 n.  折扣 vt.  把…打折扣； 不全信， 漠视， 低估
convert	 v.  改变； 转变， 转化
construct	 vt.  建造； 创立 n.  构想， 观念
attempt	 n&vi.  尝试； 努力
rivalry	 n.  竞争 ； 敌对
charisma	 n.  超凡魅力； 感召力； 号召力
division	 n.  除， 除法； 分开， 分隔； 分配； 部分； 分歧， 分裂； 部门
balance	 vt. 使平衡，使均衡 n.  天平， 秤； 平衡； 差额； 余款
stalk	 v.  偷偷接近； 跟踪； 趾高气扬地走 n. 茎，梗，柄
pancreas	 n.  胰腺
supplier	 n.  供应者， 供应商， 供货方
patriarchic	 adj.  家长的， 族长的； 德高望重的
mimic	 adj.  模仿的， 模拟的 vt. 模仿；像 n. 模仿者；小丑
pitch	 n. 音高，音调；倾斜度；沥青，柏油；
feat	 n.  功绩， 壮举
incessant	 adj.  不断的， 不停的
torrent	 n.  洪流， 急流； 爆发， 迸发
appreciation	 n.  欣赏； 理解， 体谅； 感激； 鉴定， 评价
statue	 n.  雕像
sense	 v.  觉得， 意识到 n. 感官，官能；感觉；判断力；意义，意思
brew	 v. 酿造；冲泡；酝酿，行将发生 n.  冲泡的饮料； 啤酒
pretension	 n.  要求， 主张； 自命不凡； 虚饰
deflect	 v.  偏斜， 转向
virtuous	 adj.  有道德的， 品行端正的， 品德高的； 〈贬〉自命清高的， 自以为是的
invalid	 adj.  无效的； 无可靠根据的， 站不住脚的 n.  病弱者， 残疾者
legitimate	 adj.  合法的， 法定的； 正当合理的， 合情合理的
interval	 n.  间隔时间； 间距； 幕间休息
whereby	 ad&conj.  借以， 凭
evaluate	 vt.  评价， 估计
status	 n.  身份， 地位； 情况
ooze	 v. 渗出，慢慢流出；洋溢着，充满 n.  泥浆； 缓慢渗出
renown	 n.  名望， 声誉
semantic	 adj.  语义的
upset	 adj.  心烦意乱的； 不适的 vt.  使心烦意乱； 颠覆， 推翻； 搅乱 n.  困扰， 麻烦； 出乎意料的结局； 苦恼
diffusion	 n.  散布， 扩散； 传播
curve	 v. 弄弯，成曲线形 n.  曲线； 曲线图； 弯曲
dot	 v. 星罗棋布于；打点于；点缀 n.  点， 圆点； 小数点
skim	 v.  撇去； 掠过， 擦过； 浏览， 略读
skip	 v. 跳；跳过，略过，漏过；不出席 n.  跳； 跳过
disseminate	 v.  散布， 传播
liquefy	 v.  溶解， 液化
exodus	 n.  大批离去， 成群外出
mention	 v.  提及， 说起
stream	 v. 涌 n.  溪流； 串， 股
laundry	 n.  洗衣店， 洗衣房； 洗好的衣服； 待洗的衣服
digression	 n.  离题， 扯到枝节上； 题外话， 枝节内容
grudge	 v.  勉强做； 不情愿地给 n. 怨恨，积怨
herald	 vt. 预示；宣布，宣告 n.  信使； 预示， 预兆
accumulate	 v.  积累， 积聚， 堆积
coalition	 n.  联盟， 同盟； 结合， 联合
dwarf	 adj. 矮小的 vt. 使显得矮小，使相形见绌 n.  侏儒， 矮人
crime	 n.  犯罪； 罪行
leisure	 n.  空闲， 闲暇
surround	 v.  包围， 圈住； 围绕， 环绕
mar	 vt&n.  损坏， 损毁
mat	 n.  垫子
forward	 adv. 向前； vt. 发送；转交，转递
melanin	 n.  黑色素
assimilate	 v.  透彻理解， 吸收， 消化； 同化
ethical	 adj.  道德的
zealous	 adj.  狂热的， 热烈的， 充满激情的
comparable	 adj.  可比较的， 类似的； 比得上的
bait	 n. 鱼饵，诱饵 vt.  下诱饵； 激怒
mail	 n. 邮件 vt.  邮寄
dimensional	 adj.  …度空间的
subject	 adj.  受…支配的 n. 主题；对象 vt.  使服从
recognition	 n.  承认， 认同； 认出， 识别， 辨认； 赏识
disinterest	 n.  无兴趣， 冷漠； 客观， 公正
lunge	 vi&n.  猛冲， 猛扑
convene	 v.  召集， 召开； 聚集， 集合
revenue	 n.  收入； 税收
strip	 vt. 剥夺，剥掉；脱去…的衣服 n.  条， 带状物； 条纹
monopoly	 n.  垄断， 专卖； 垄断商品， 专卖商品； 独占， 专利
negotiation	 n.  商议， 谈判； 流通
grain	 n.  谷物； 颗粒； 纹理； 少量
credit	 vt. 把…归于 n.  荣誉； 学分； 信用； 贷款
oxygen	 n.  氧， 氧气
combine	 v.  联合， 结合
alter	 vt.  改变
fraudulent	 adj.  欺诈的， 欺骗性的
waste	 adj. 无用的，废弃的；荒芜的 n. 浪费；废料，废弃物 vt.  浪费， 消耗
approximation	 n.  接近； 近似值
syllable	 n.  音节
comedy	 n.  喜剧； 喜剧性， 滑稽， 幽默
literacy	 n.  有文化， 有教养； 读写能力
originate	 v.  起源； 发起； 创立
compass	 n. 罗盘，罗盘仪；
soloist	 n.  独奏者， 独唱者， 单独表演者
nonetheless	 adv.  虽然如此， 但是， 依然
dispose	 v.  安排， 布置； 使倾向于
disconcert	 vt.  使惊慌， 使不安； 使困惑
constitution	 n.  宪法， 章程； 体质； 构成
paradigm	 n.  范例， 典范
blend	 v. 混合，混杂 n.  混合； 混合物
overact	 v.  把表演得过火； 表现做作
fidelity	 n.  忠诚， 忠实； 精确， 逼真
conceive	 v.  构思， 构想， 设想； 怀孕
incursion	 n.  袭击， 突然入侵； 介入
nonsense	 n.  胡说， 废话； 冒失的行为
stain	 v. 沾污；留下污渍 n.  污点， 污渍
balk	 v.  畏缩； 阻止； 妨碍 n. 障碍
electrode	 n.  电极
airborne	 adj.  空气传播的； 空运的
reckless	 adj.  轻率的， 鲁莽的， 无所顾忌的
oversleep	 v.  睡过头； 睡得过久
bald	 adj.  光秃的， 秃头的； 简单的， 单调的
paradox	 n.  似非而是的论点； 自相矛盾的话
oratorio	 n.  清唱剧， 宗教剧
X-ray	 n.  X射线， X光； X光照片
physical	 adj. 物理的；物质的，有形的；身体的，肉体的 n.  体检
categorize	 vt.  将…分类， 把…加以分类
mania	 n.  躁狂； 狂热； 癖好
poetic	 adj.  诗歌的； 诗意的
opposed	 adj.  反对的； 截然不同的
familiarize	 vt.  使熟悉
apportionment	 n.  分派， 分摊， 分配
thread	 v. 穿；穿过，通过 n.  线； 线索； 思路
enrollment	 n.  登记， 注册； 入学
tyrannical	 adj.  专制的， 残暴的， 专横的
stake	 n. 股份；赌注；利害关系 vt.  以…打赌， 拿…冒险
fortify	 vt.  支持， 给…以勇气； 加强， 增强； 筑防御工事于
due	 adj.  到期的； 预期的； 应得的； 恰当的， 适当的； 应支付的
ripen	 v.  成熟
conform	 vi.  遵守， 服从； 符合； 适应
bake	 v.  烘， 烤， 焙
authentic	 adj.  真正的， 真实的； 逼真的； 可靠的
opal	 n.  蛋白石
lodge	 v.  正式提出； 租住， 借宿； 为…提供住宿； 寄存 n. 巢穴；旅社；乡间小屋
threat	 n.  恐吓， 威胁； 坏兆头， 危险迹象
rayon	 n.  人造丝， 人造纤维
devoid	 adj.  全无的
mercy	 n.  宽恕； 仁慈； 恩惠， 幸运
curl	 v. 卷曲，蜷缩 n.  卷发； 卷曲状； 卷曲物
inform	 vt.  通知， 通告； 了解， 熟悉； 告发， 检举， 告密
depend	 v.  依靠， 依赖； 取决于
dearth	 n.  缺乏， 短缺
commit	 vt.  承诺； 犯错； 犯罪； 忠于
patch	 vt. 修补，打补丁 n.  小片， 小块； 补丁； 小块土地
presidency	 n.  职位； 任期
scurry	 vi&n.  急跑， 疾行
scornful	 adj.  轻蔑的， 鄙视的
cholesterol	 n.  胆固醇
magnetic	 adj.  磁的， 磁石的； 有磁性的； 有吸引力的
stick	 v. 刺，戳，插；粘住，粘贴；放置；卡住 n.  棍， 棒； 手杖
orbit	 v.  作轨道运行 n. 轨道；势力范围
band	 vi. 联合，集合 n.  乐队； 群， 伙； 带； 波段， 频带
beneficent	 adj.  有益的； 行善的， 慈善的
comprise	 vt.  包含； 由…组成
moderate	 adj.  适度的； 温和的； 普通的 v. 缓和，使适中 n.  持温和意见的人
resident	 adj. 常驻的；居住的 n.  居民； 住宿者， 旅客； 住院实习医生
upheaval	 n.  剧变， 动乱， 大变动
receiver	 n.  接收器； 听筒； 接收者； 官方接管人
gilding	 n.  镀金； 贴金层， 镀金层； 金色涂层
execute	 vt.  执行， 履行， 实施； 将…处死， 处决； 完成
substantial	 adj.  实质的； 坚固的； 可观的， 大量的
balm	 n.  香脂油， 药膏； 镇痛剂， 安慰剂
Paleolithic	 adj. 旧石器时代的 n.  旧石器时代
benefit	 v.  受益； 得益于 n. 益处，好处；恩惠；津贴
quality	 adj.  优良的， 优质的 n. 质，质量；品德，品质；性质，特性
unique	 adj.  唯一的； 独特的， 罕见的； 特有的
boost	 vt. 提高，推进；替…做广告，宣扬 n.  增加， 帮助
sober	 adj. 清醒的，未醉的；持重的，冷静的；素净的 v.  清醒； 变得冷静
male	 adj. 雄的，公的；
maternal	 adj.  母亲的， 母系的
prolific	 adj.  多产的； 富有创造力的
expel	 vt.  开除； 驱逐； 排出
shelter	 n. 掩蔽处，庇护所；居所，住所；掩蔽，保护 vt.  保护， 掩蔽； 躲避
externality	 n.  外部性， 外界效应
latitude	 n. 纬度；
vigor	 n.  活力， 精力
scan	 vt. 细察，审视；扫描；粗略地看，浏览 n.  扫描检查； 浏览
industry	 n.  勤劳， 勤奋； 工业， 行业
eliminate	 vt.  消除； 淘汰
augment	 vt.  增加， 提高
tangent	 adj.  切线的， 相切的 n. 切线；正切
benign	 adj.  良性的； 有利的； 善良的， 和蔼的
destruction	 n.  毁坏， 毁灭
acquit	 vt.  宣告无罪； 表现
stiff	 adv.  极其， 非常； 僵硬地 adj. 硬的，僵直的；呆板的；拘谨的；艰难的，费劲的；强烈的
prosper	 vi.  繁荣， 兴旺； 成功
blizzard	 n.  暴风雪， 大风雪
appeal	 vi. 上诉，起诉；呼吁，恳求；吸引 n.  上诉， 申诉； 呼吁， 恳求； 感染力， 吸引力
swamp	 n. 沼泽地，湿地 vt.  使陷入， 淹没； 使应接不暇， 使疲于应对
entrepreneur	 n.  企业家； 承包人
transportation	 n.  运输； 运输系统， 运输工具
dedicate	 vt.  致力于， 奉献给； 题献词于上
dye	 v.  染色 n. 颜料，染料
extensive	 adj.  广大的， 广阔的； 广泛的， 大量的
monotonous	 adj.  单调的， 无聊的
negate	 vt.  取消； 否定
impart	 vt.  传授； 传达； 给予
inspire	 vt.  鼓舞， 激励； 给…以灵感
bureaucracy	 n.  官僚主义， 官僚作风； 政府机构， 官僚机构
geometry	 n.  几何， 几何学
devote	 vt.  为…付出； 献身于
delectable	 adj.  美味可口的； 有吸引力的； 令人喜爱的， 赏心悦目的
barb	 n.  鱼钩， 倒钩； 挖苦的话
alumnus	 n. 校友，毕业生
far-fetched	 adj.  牵强的
approximate	 adj.  大约的， 近似的 vt.  接近， 近似
craftsman	 n.  能工巧匠， 手艺人， 工艺师
project	 v.  放映； 规划； 预测， 推想 n.  方案； 课题， 项目； 工程
aberrant	 adj.  越轨的； 异常的
lope	 vi. 轻松地大步跑 n.  轻快的步伐
lateral	 adj.  侧面的， 旁边的； 横向的
hinterland	 n.  内地， 腹地； 内地贸易区
nominate	 vt.  任命， 指定； 提名， 推荐
tread	 v. 踏，践踏；行走 n.  轮胎面； 脚步声； 步法
diameter	 n.  直径
stationary	 adj.  静止的； 固定的， 稳定的， 不变的
barn	 n.  谷仓； 牲口棚
bark	 v.  吠叫； 厉声质问 n. 树皮；犬吠声
kennel	 n.  狗窝； 养狗场
ellipse	 n.  椭圆， 椭圆形
bare	 adj. 赤裸的；光秃的，无遮盖的；最基本的 vt.  脱掉； 显露
sidewalk	 n.  人行道
formidable	 adj.  难对付的； 强大的； 令人敬畏的
abound	 vi.  富于； 大量存在； 充满
suitcase	 n.  手提箱， 衣箱
invert	 vt.  使倒转， 使倒置， 使颠倒
discrete	 adj.  分离的， 个别的； 离散的
temperate	 adj.  气候温和的， 温带的； 温和的， 自我克制的
immutable	 adj.  不可改变的， 永恒不变的
disrupt	 vt.  使中断； 扰乱； 使分裂， 使瓦解
scar	 vt. 给…留下疤痕；给…留下精神创伤；损害…的外观 n.  疤痕； 创伤
abort	 v.  夭折， 中止； 使流产
hypothetical	 adj.  假设的
coefficient	 n.  系数
converse	 vi. 交谈，会话 adj. 逆向的，相反的 n.  相反的事物； 反面
gospel	 n.  准则， 信条； 绝对真理； [G-]福音； 福音音乐； 训示
eccentric	 adj.  古怪的， 反常的 n. 古怪的人
appliance	 n.  用具， 器具； 装置
alloy	 n.  合金 vt.  使成合金
defer	 v.  推迟， 延期
drowsy	 adj.  昏昏欲睡的； 催眠的
lore	 n.  学问， 学识； 传说， 传统
mast	 n.  船桅； 旗杆； 天线塔
mass	 adj.  大量的 n. 质量；块，团；众多；群众，平民百姓
muggy	 adj.  闷热的
revoke	 vt.  撤销， 撤回； 取消， 废除
proper	 adj.  正确的； 合乎体统的， 适当的； 固有的， 特有的
renaissance	 n.  [the R-] 文艺复兴， 文艺复兴时期； 复兴， 再生
poisonous	 adj.  有毒的， 有害的； 恶毒的
auction	 n&v.  拍卖
allot	 vt.  分配， 配给， 拨给
propel	 vt.  推进， 驱使； 激励
admit	 v.  承认； 准许…进入， 接纳
rampant	 adj.  猖獗的， 肆虐的； 蔓生的
interest	 n. 兴趣，关注；业余爱好；利息；利害关系 vt.  使感兴趣， 引起…关注
uneven	 adj.  不平均的； 不平坦的； 不规则的； 不势均力敌的； 不公平的
twig	 n.  嫩枝， 小枝
immature	 adj.  未成熟的， 未充分发展的
organic	 adj.  有机的； 器官的； 有机体的
chaste	 adj.  贞洁的； 简朴的， 朴实的
mask	 n. 面具；面罩；假面具，
evacuation	 n.  撤离
patron	 n.  资助人， 赞助人； 老主顾， 顾客
apply	 v.  申请， 请求； 适用； 应用， 运用； 涂， 敷， 施
stew	 v.  炖， 煨； 思考； 不安， 担忧 n. 炖菜；不安，担忧
overlook	 vt.  俯瞰， 眺望； 忽略； 对…不予考虑
incredible	 adj.  惊人的， 难以置信的
layout	 n.  编排， 版面设计； 规划， 布局
landing	 n.  登陆； 着陆， 降落
formula	 n.  公式， 方程式； 分子式； 配方
avalanche	 n&v.  雪崩； 山崩
revolt	 v. 反叛，反抗；违抗；厌恶，反感 n.  起义， 叛乱， 反抗
disgust	 vt.  厌恶， 嫌恶
tribute	 n.  贡品； 颂词， 称赞； 悼念， 致哀； 礼物
endanger	 vt.  危及， 危害
base	 adj.  卑鄙的， 不道德的 vt. 把设在；
stem	 vt. 阻止，遏制；起源 n.  茎， 干
subordinate	 adj. 次要的；下级的 vt.  使处于次要地位， 使从属于 n.  部属， 下属
trend	 n.  趋势， 倾向
mechanic	 n.  技工， 机修工
revolution	 n.  革命； 巨变； 旋转
reliable	 adj.  可靠的， 可信赖的
incentive	 n.  刺激； 动机
relate	 v.  叙述， 讲述； 有关联
preliminary	 adj. 预备的，初步的 n.  初步做法， 起始行为
obstacle	 n.  障碍， 妨害物
leftover	 adj.  剩余的
collaborative	 adj.  合作的， 协作的
constitute	 v.  组成； 设立； 制定
indict	 vt.  控诉， 起诉， 控告
courier	 n.  送急件的人， 信使； 旅游服务员
convince	 vt.  使确信， 说服
mate	 v.  交配 n. 配偶；朋友，伙伴；同事；大副
stampede	 v. 狂奔，涌向；使仓促行事 n.  逃窜， 狂奔； 热潮， 风尚
gorge	 v. 狼吞虎咽 n.  山峡， 峡谷
terminate	 v.  停止， 结束
mannerism	 n.  怪癖， 癖性； 过分的独特风格
theory	 n.  理论， 原理； 学说； 见解， 看法
confederacy	 n.  联盟， 同盟， 联邦； 私党
flock	 vi. 聚结，成群 n.  群； 一群； 大量
extension	 n.  延长； 延伸； 电话分机， 分机号码
internal	 adj.  内在的， 内部的； 国内的， 内政的； 内心的
gender	 n.  性别； 性
literary	 adj.  文学的； 文人的， 书卷气的
architect	 n.  建筑师； 设计师， 缔造者
excise	 vt.  切除； 删去
punch	 vt. 拳打；打孔；按，压 n.  重拳击打； 冲床， 打孔机
across	 adv. 横过；到对面，向对面 prep.  穿过， 越过； 在对面
flexibility	 n.  灵活性； 弹性， 韧性； 适应性
mortgage	 n. 抵押贷款，按揭；抵押证书 vt.  用…作抵押
identity	 n.  身份； 特征， 特性； 同一性
federal	 adj.  联邦的； 联邦制的； 联邦政府的
verify	 v.  检验， 核实
excursion	 n.  远足， 短途旅游
inaugurate	 vt.  为…举行就职典礼； 为…举行开幕式； 开始， 开创
cramp	 n. 痉挛，抽筋； vt.  阻碍， 阻止
academy	 n.  学会， 研究院； 专科院校
solitude	 n.  孤独， 单独； 独处， 独居； 隐居处
reward	 n. 报答，奖赏，报酬 vt.  奖赏， 奖励， 给以报酬
hockey	 n.  曲棍球
graze	 v. 吃草；放牧；擦伤 n.  擦伤
swallow	 v. 吞，咽；吞没，侵吞；轻信，轻易接受；默默忍受；使不流露，抑制 n.  燕子； 吞， 咽
perquisite	 n.  津贴， 利益； 特权
hominid	 adj.  灵长目的 n. 原始人类；人科动物
nucleus	 n. (原子)核
sting	 v. 刺，蜇；感觉刺痛 n.  尾刺； 刺痛
juice	 vt. 榨出汁液 n.  汁， 液
haste	 v.  赶快， 匆忙 n. 急忙，急速，匆忙
nurture	 vt. 养育，养护，培养；扶植，支持；滋长，助长 n.  养育， 培养
buckle	 v.  扣紧； 变形， 弯曲 n. 皮带扣环
degenerate	 vi.  退化， 衰退 adj.  堕落的； 退化的
destructive	 adj.  破坏性的， 毁灭性的
monastery	 n.  男修道院， 寺院
devout	 adj.  虔敬的； 诚恳的
censor	 n. 审查员 vt.  审查， 检查
devour	 vt.  狼吞虎咽地吃， 吞食； 吞没， 吞噬； 如饥似渴地读
stir	 v. 搅拌；煽动；激发，打动；行动，活动 n.  搅拌， 搅动； 激动， 震动
insult	 vt.  侮辱， 凌辱 n.  侮辱， 凌辱
existence	 n.  存在， 实在； 生存， 生活
craft	 v.  手工制作 n. 手艺，工艺
axis	 n.  轴； 轴线， 中心线
maze	 n. 迷宫；复杂难懂的细节；困惑，迷惘 vt.  使混乱； 使困惑， 迷惑
float	 v.  漂浮， 浮动； 飘动
gaseous	 adj.  气体的， 气态的
negligent	 adj.  忽略的； 疏忽的； 粗心大意的
expressive	 adj.  有表现力的， 富有表情的； 表示…的， 表现…的
conductivity	 n.  传导性； 传导率
desolate	 adj.  荒凉的， 无人烟的； 不幸的， 忧伤的 vt.  使感到悲惨， 使感到凄凉； 使荒芜
coarse	 adj.  粗糙的； 粗俗的
evade	 v.  逃避， 回避； 躲开， 避开
associative	 adj.  联想的； 结合的； 关联的
exaggerate	 v.  夸张， 夸大
cortex	 n.  皮层， 皮质
imply	 vt.  意味着， 暗示； 说明， 表明； 使有必要
offset	 n. 分支；补偿；抵消 vt.  补偿； 抵消
backhand	 n.  反手击球
cascade	 vi. 倾泻，流注 n.  小瀑布； 倾泻
cavity	 n.  腔； 洞， 穴， 窟窿； 龋洞
sequence	 n. 一系列，一连串；顺序，次序，序列 vt.  按顺序排列
provision	 n.  供应， 供应品； 条款； 准备， 预备
recruit	 v. 招募，征募 n.  新兵； 新成员
thrust	 v. 挤；插；戳，刺 n.  戳， 刺； 要旨； 驱动力
abolition	 n.  废除， 废止； 废奴运动
sporadic	 adj.  偶发的， 间或出现的， 零星的
turnout	 n.  出席人数； 产量， 产额
configuration	 n.  布局， 格局； 结构， 构造， 形状； 配置
scientific	 adj.  科学的； 细致严谨的
spherical	 adj.  球形的， 球状的
chunk	 n.  厚片， 大块； 相当大的部分； 矮胖的人
asteroid	 n.  小行星
commonplace	 adj.  普通的， 平凡的 n. 平凡的事；老生常谈
libel	 vt. 诽谤 n.  诽谤； 诽谤性文字
parameter	 n.  参量， 参数； 界限， 范围
extinct	 adj.  灭绝的， 不存在的； 不再活跃的
forerunner	 n.  先驱者， 开路人； 先兆， 预兆
cubism	 n.  立体派； 立体主义
agonize	 vi.  苦苦思索； 焦虑不已
percolate	 v. 过滤；渗入，渗透；逐渐流传，传开 n.  滤液
opaque	 adj.  不透明的， 不透光的； 难懂的， 晦涩的
advantage	 n. 优点；优势，有利条件 vt.  有益于
assistant	 adj. 辅助的，助理的；副的 n.  助手， 助教
humid	 adj.  湿的， 潮湿的； 湿润的
instead	 adv.  代替， 顶替； 反而， 却
controversy	 n.  争论， 辩论
command	 n&v.  命令； 指挥， 统率
compulsory	 adj.  必须做的， 义务的； 强制性的； 必修的
abortive	 adj.  落空的， 失败的
swarm	 vi. 云集 v.  密集， 云集； 成群地飞行 n. 群，一大群
anticipate	 v.  预见， 预期； 先于…行动
variable	 adj. 易变的；
temple	 n.  寺庙， 教堂； 太阳穴
slash	 v. 砍；大幅削减 n.  砍痕， 伤痕； 斜线号
fabricate	 vt.  编造； 制造
uproot	 v.  根除； 离开家园
tally	 v.  吻合 n. 记录；账
landscape	 n. 风景，景色；地貌，地形；风景画 vt.  美化…的环境
exception	 n.  除外， 例外
prevailing	 adj.  普遍的； 流行的； 一地常刮的， 盛行的
temporary	 adj.  暂时的， 临时的
habitat	 n.  自然环境， 栖息地
optimal	 adj.  最佳的， 最理想的
desperate	 adj.  绝望的； 不顾死活的， 拼命的； 极度渴望的
awful	 adj.  不舒服的； 糟糕的； 可怕的； 非常的
urge	 v. 促进，力劝；驱赶，驱策 n.  强烈的欲望， 冲动
handy	 adj.  可用的； 易使用的， 便利的； 手巧的
anguish	 v.  极度痛苦 n. 极度痛苦
refraction	 n.  折射
visual	 adj.  视觉的
sanctuary	 n.  禁猎区， 动物保护区； 庇护所， 避难所； 圣所， 圣殿
aerobics	 n.  有氧运动
inviting	 adj.  动人的， 诱人的； 引人注目的
instruct	 vt.  指示； 教授
agreeable	 adj.  使人愉快的； 欣然同意的
merchant	 n.  商人
community	 n.  社会； 社团； 群落； 共同体
ailment	 n.  小病
version	 n.  译文， 译本； 版本
charismatic	 adj.  蒙受神恩的； 有超凡魅力的
overload	 vt.  使超载， 使过载； 使超负荷； 给…增加负担 n.  超载； 超负荷
bronze	 adj.  青铜色的 n. 青铜；青铜色；青铜制品；铜牌
staunch	 adj.  坚定的， 忠诚的
selection	 n.  选择， 挑选； 精选； 被挑选出来的人， 精选品； 可供选择的事物
adolescence	 n.  青春
notch	 n. 等级，档次；
subculture	 n.  亚文化行为观念， 次文化
exhale	 v.  呼出； 散发
appropriate	 adj.  适当的 vt.  拨款； 占用， 挪用
least	 adv.  最小； 最少； 微不足道 adj. 最小的；最少的；最不重要的
utility	 n.  功用， 效用； 公用事业
abrasion	 n.  表面磨损
symphony	 n.  交响乐， 交响曲； 和谐， 协调
eloquent	 adj.  雄辩的 ； 动人的
observatory	 n.  天文台， 天文观测站
optimistic	 adj.  乐观的
proponent	 n.  支持者； 倡导者
insolvent	 adj.  财力不足的， 破产的
submarine	 adj.  水下的， 海底的 n. 潜水艇
empiricism	 n.  经验论， 经验主义
sleek	 adj. 光滑而有光泽的；线条流畅的；时髦的 vt.  使平整光亮
particle	 n.  微粒， 颗粒； 【语】小品词
musician	 n.  音乐家， 乐师
typify	 vt.  是…的典范； 成为…的特征
stagnant	 adj.  不景气的； 停滞的； 迟钝的； 因不流动而污浊的
perceptive	 adj.  感知的， 知觉的； 有洞察力的， 理解力强的
annotation	 n.  注释， 注解
minimize	 vt.  将…减到最少， 使最小化； 降低， 贬低
sweep	 v. 打扫；席卷，横扫；挥动，舞动；迅速传播；
descend	 v.  遗传； 下降； 起源； 降临， 来临
mechanics	 n.  机械学， 力学； 技巧， 方法
toed	 adj.  有趾的
maglev	 n.  磁力悬浮火车
logical	 adj.  逻辑的； 符合逻辑的， 合理的； 有逻辑头脑的
characterize	 vt.  以…为特征； 刻画； 描述
descent	 n.  血统， 世系； 下降
stunt	 vt. 阻碍生长；遏制 n.  特技表演； 噱头； 愚蠢行为
weird	 adj.  怪异的， 神秘的
farce	 n.  笑剧， 滑稽剧； 闹剧
ridiculous	 adj.  荒唐的， 可笑的
intrusion	 n.  侵扰， 干扰； 侵犯； 侵入， 闯入
refute	 vt.  反驳， 驳斥
severe	 adj.  严重的； 严厉的； 剧烈的； 严峻的， 艰巨的； 朴素的， 不加装饰的
exemplify	 vt.  是…的典型； 例示， 举例证明
emerge	 vi.  显露， 暴露； 出来， 现出
lease	 n. 租约；租期 vt.  出租
exploit	 vt.  开发； 利用； 剥削 n.  英勇行为， 业绩， 功绩
eager	 adj.  渴望的， 热切的
evidence	 vt. 证明 n.  证据； 迹象； 根据
republic	 n.  共和国； 共和政体
errand	 n.  差事， 差使
flamboyant	 adj.  艳丽的， 绚丽夺目的； 炫耀的
lethal	 adj.  致命的； 破坏性极大的， 极其有害的
stun	 vt.  使昏迷； 使震惊； 使…目瞪口呆， 给以深刻印象
repetition	 n.  重复， 反复； 重复的事
sled	 v.  乘雪橇， 用雪橇运 n. 雪橇；摘棉机
polygamous	 adj.  一夫多妻的， 一妻多夫的
suspense	 n.  担心， 焦虑； 悬念， 不确定
gemstone	 n.  经雕琢的宝石
narrate	 v.  讲述， 叙述
spring	 v. 跳跃；涌现，突然出现；突然提出 n.  泉； 弹簧， 发条； 春天； 跳， 跃
autonomy	 n.  自治， 自治权； 自主， 自主权
gibe	 n&v.   嘲弄， 讥笑
fitness	 n.  健康， 健壮； 适合
shred	 n. 碎片，细条；些许，少量 vt.  切碎， 撕碎
kindle	 v.  点燃， 开始燃烧； 激起
surrender	 v. 投降；放弃，交出 n.  投降； 屈服， 屈从； 放弃
faint	 vi. 昏厥，晕倒 adj. 模糊的，不清楚的；无力的，虚弱的；眩晕的 n.  昏厥
elm	 n.  榆树
shade	 n. 阴凉处，遮光物；阴暗；色度；差别 vt.  遮蔽， 遮光
collide	 vi.  碰撞， 互撞； 冲突， 抵触
cardinal	 adj. 主要的，最重要的 n.  红衣凤头鸟
insist	 v.  坚持要求； 坚决主张
evergreen	 adj. 常绿的 n.  常绿树， 常青树
staggered	 adj.  交错的， 错开的； 震惊的
volume	 n.  体积， 容积， 容量； 音量； 卷， 册； 书
transact	 v.  交易； 执行， 处理
catalyst	 n.  催化剂， 触媒； 促使变化的人
guideline	 n. 指导方针，指导原则
loose	 adj.  松散的， 宽松的； 不精确的， 不严密的； 不牢固的； 自由的， 散漫的
loathsome	 adj.  令人厌恶的， 讨厌的
flint	 n.  燧石， 打火石
preeminent	 adj.  卓越的， 杰出的
indignant	 adj.  愤慨的， 恼怒的
decimal	 adj. 十进位的，小数的 n.  小数
hardly	 adv.  几乎不， 简直不； 刚刚， 仅仅
lasting	 adj.  持久的， 永久的
cynical	 adj.  愤世嫉俗的， 冷嘲热讽的
technical	 adj.  技术的， 工艺的； 专业的
outermost	 adj.  最外面的， 离中心最远的
companion	 n.  同伴， 共事者
culminate	 vi.  达到顶点； 告终； 【天】到中天
tortuous	 adj.  折磨人的， 令人痛苦的； 曲折的， 蜿蜒的； 含混不清的， 拐弯抹角的
paucity	 n.  极小量， 少量
stretch	 v.  延伸， 拉长 n. 一段路程；延伸
strand	 n. 股，缕；部分，方面 vt.  使滞留； 使搁浅
accomplish	 vt.  达到； 完成； 实现
constituent	 adj.  有宪法制定或修改权的； 组成的， 构成的 n. 选民；要素，成分
intentionally	 adv.  有意地， 故意地
irritate	 vt.  激怒， 使烦躁； 刺激
havoc	 n.  混乱， 大破坏
responsible	 adj.  有责任感的， 负责的； 需负责任的； 责任重大的， 重要的
vagrant	 adj.  漂泊的 n. 无业游民，流浪者
medal	 n.  奖牌， 奖章
linen	 n.  亚麻织品； 亚麻布
satellite	 n.  卫星； 人造卫星
packed	 adj.  拥挤的； 压紧的
illuminate	 vt.  照亮； 启发， 启迪； 阐明， 说明
lizard	 n.  蜥蜴
delirium	 n.  精神错乱， 神志失常
preoccupation	 n.  主要考虑因素； 全神贯注
vow	 v. 发誓 n.  誓约
cipher	 n.  密码， 暗号
protrude	 v.  突出， 伸出
residue	 n.  剩余物， 残余物
noted	 adj.  著名的
frenzy	 n.  狂暴， 狂热， 疯狂
forum	 n.  论坛； 讨论会
contempt	 n.  轻视， 鄙视， 轻蔑
horizon	 n. 地平线；
undertaking	 n.  任务， 项目； 事业， 企业； 承诺， 保证
figurative	 adj.  比喻的， 借喻的， 象征的； 形象的
sweat	 v.  出汗 n. 汗；一身汗
progressive	 adj.  进步的； 逐步的， 渐进的； 【语】进行时的
betray	 vt.  出卖， 泄露； 辜负， 对…不忠； 流露情感
aloft	 adv.  在高处； 在空中
contributory	 adj.  贡献的； 捐助的； 促进的
deliberate	 adj.  故意的， 蓄意的； 审慎的， 深思熟虑的 v.  深思熟虑
swear	 v.  诅咒； 宣誓， 发誓
atmosphere	 n.  大气， 大气层； 空气； 气氛， 氛围
decorate	 v.  装饰， 布置
career	 n.  生涯， 经历； 职业
slacken	 v.  松弛， 放松； 减缓， 放慢
release	 n&vt.  释放； 发布， 公开； 发泄
charter	 vt. 特许设立，给予特权；包租 n.  纲领， 宣言； 宪章； 特许状
abiding	 adj.  持久的， 永久的
liberate	 vt.  解放； 释放
moral	 adj. 道德的，道义上的；有道德的，品行端正的；精神的
diminution	 n.  减少， 缩减
aspire	 v.  有志于； 热望， 向往
explode	 v.  爆炸； 激增； 冲动， 发怒
outbreak	 n.  发作； 爆发
nap	 n.  小睡， 打盹
manipulate	 vt.  操作， 处理； 利用， 操纵
similar	 adj.  相似的， 类似的
ecological	 adj.  生态的
contradict	 v.  反驳； 同…矛盾， 相抵触
digitize	 vt.  数字化
partnership	 n.  合伙； 伙伴关系； 合伙人身份
shape	 n. 形状，外形，样子；体形，身材；形式；幻象；情况，状况 vt.  使成为…形状， 塑造； 决定…的形成
verbalize	 v.  用言语表达
momentous	 adj.  重大的， 重要的
specify	 vt.  使具体化； 明确规定， 详细说明
allegiance	 n.  忠诚， 效忠， 拥戴
wanna	 v.  想要
crossing	 n.  十字路口， 人行横道； 过境处； 交叉点； 穿越， 横渡
relevance	 n.  有关， 相关； 中肯， 适当； 重大关系， 意义； 实用性
quarry	 v.  采石； 采集 n. 采石场，石矿；猎物，追捕的对象
gravel	 n.  沙砾， 砾石
malnutrition	 n.  营养不良
submerge	 v.  浸没， 淹没
converge	 vi.  汇聚， 聚集， 聚合； 相交， 会合； 趋于一致
pertinent	 adj.  相关的； 恰当的， 贴切的
compose	 v.  创作； 组成； 使安定
giraffe	 n.  长颈鹿
supersonic	 adj. 超音速的，超声波的 n.  超音速， 超声波
cell	 n.  细胞； 基层组织； 单人房间； 电池
swell	 v. 增加，扩大；膨胀，肿胀 n.  波浪的涌动； 隆起； 增强， 增加
remind	 vt.  提醒； 使想起； 使发生联想
crude	 adj.  天然的， 未提炼的； 粗糙的； 粗俗的
valid	 adj.  有根据的， 合理的； 有效的
withstand	 vt.  经受住， 耐； 抵挡
inertia	 n.  惯性； 惰性
epitomize	 vt.  成为…的缩影； 摘要， 概括， 缩写
wintry	 adj.  冬天的； 寒冷的； 冷淡的
encourage	 v.  鼓励， 激励； 促进， 激发
vacuum	 n. 真空；真空状态，空白，
era	 n.  纪元， 年代， 时代； 代
administer	 vt.  管理； 执行； 给予， 提供
transplant	 vt.  移植； 使迁移， 使移居； 移栽， 移种 n.  移植
deficit	 n.  不足额； 赤字， 逆差
elegant	 adj.  优美的， 高雅的； 雅致的， 精美的； 简练的， 简洁的
cohere	 vi.  连贯， 一致； 黏合； 齐心协力， 团结一致
snowflake	 n.  雪花， 雪片
linger	 vi.  徘徊， 流连； 继续存留； 缓慢消失
grasshopper	 n.  蚂蚱， 蝗虫
dispel	 vt.  驱散， 驱逐； 消除
cascara	 n.  缓泻剂
slip	 v. 滑倒，失足；滑落；悄悄疾行，溜；摆脱；下降，跌落；陷入 n.  差错， 纰漏； 滑倒； 纸片
species	 n.  种类， 类群
anchor	 v. 抛锚；使固定；扎根，基于；主持 n.  锚； 给人安全感的物， 精神支柱
manifesto	 n.  宣言， 声明
quench	 vt.  扑灭， 熄灭； 解
spice	 n. 香料，调味品；趣味，情趣 vt.  加香料于； 给…增添趣味
pedagogy	 n.  教育学， 教学法
screen	 vt. 掩蔽；审查；筛选 n.  屏幕
autonomous	 adj.  自治的； 独立自主的
naked	 adj.  裸露的， 无遮盖的； 直白的， 露骨的， 不加掩饰的
vibration	 n.  振动， 颤动
aerial	 adj. 空中的，地表以上的；从飞行器上的 n.  天线
trial	 n.  审讯； 试验， 试用； 令人伤脑筋的人
perception	 n.  感知， 感觉； 认识， 观念； 洞察力
saturation	 n.  饱和； 饱和度
stylistic	 adj.  风格上的， 文体上的
undertake	 v.  承担； 进行， 从事
optimize	 vt.  使最优化； 充分利用
indigenous	 adj.  本地的， 本土的； 土产的； 土著的
visualize	 v.  想象， 使形象化； 构思
rejuvenate	 vt.  使年轻； 使恢复活力
obituary	 n.  讣闻， 讣告
bureau	 n.  局， 署； 办公室； 机构
moist	 adj.  潮湿的； 多雨的
cable	 v.  给…发电报， 用电报传送 n. 缆绳，钢索；电缆；电报
intense	 adj.  强烈的； 热切的； 激烈的
thrifty	 adj.  节省的， 节俭的
yelp	 v. 尖叫 n.  短而尖的叫声
estate	 n.  地产； 庄园； 个人财产， 遗产
acoustic	 adj.  非电声乐器的， 原声的； 听觉的， 声音的
articulate	 adj.  善于表达的； 发音清晰的， 口齿清楚的 v.  明确表达， 清楚说明； 清晰地吐， 清晰地发； 用关节连接
brass	 n.  铜管乐器； 黄铜
dignify	 vt.  使有尊严， 使高贵； 美化
bluster	 v.  虚张声势地恫吓； 猛刮
traverse	 v.  横穿， 横渡
impending	 adj.  即将发生的， 迫近的
rigorous	 adj.  缜密的， 谨慎的； 严格的， 严厉的
amino	 adj.  氨基的
secular	 adj.  现世的； 世俗的； 非宗教的
activate	 vt.  刺激， 使活动
strenuous	 adj.  费劲的， 费力的， 艰苦的； 精力充沛的； 奋力的
lethargy	 n.  死气沉沉； 无精打采， 倦怠
amusement	 n.  可笑； 娱乐， 消遣
boundary	 n.  分界线； 边界
shame	 n. 羞耻，羞愧，耻辱；可耻的人 vt.  使羞愧； 玷辱
endow	 vt.  使天生具有， 赋予； 资助， 捐赠
precipitate	 v. 使…突然降临；加速；降水；使突然陷入； adj.  仓促的， 鲁莽的
centric	 adj.  以…为中心的
mandate	 v.  强制执行； 授权 n. 授权；委托书，授权令；任期
slog	 v.  艰难行进； 埋头苦干； 猛击
financial	 adj.  财政的， 财务的， 金融的
respective	 adj.  分别的， 各自的
inactivate	 vt.  使不活动， 使不活跃
media	 n.  媒介， 媒体
plaudit	 n. 喝彩；赞美
exalt	 vt.  高度赞扬， 褒扬； 提升， 提拔
reversible	 adj.  可逆的， 可翻转的； 正反两用的； 可恢复原状的
define	 vt.  定义， 解释； 限定
dictate	 v. 规定；决定；口述；支配 n.  命令， 规定
flick	 v. 轻拍；移动 n.  轻拍； 浏览
memorize	 vt.  记住， 记忆， 熟记
render	 vt.  给予， 提供； 致使； 递交， 呈献； 表达； 翻译
haven	 n.  港口； 庇护所， 避难所； 栖息处
neon	 n.  氖； 霓虹灯
manifest	 adj.  明显的 vt. 表明，显示 n. 货物清单
relieve	 vt.  缓解， 减轻； 使轻松， 使宽慰； 调剂； 接替， 换班
buffalo	 n.  水牛； 野牛
endeavor	 vi&n.  努力， 尽力
quartz	 n.  石英
prelude	 n.  前奏曲， 序幕
adjacent	 adj.  邻近的， 毗连的
transport	 n.  运输； 运输系统， 运载工具 vt.  运输； 传播
grump	 vi. 发脾气，发牢骚 n.  脾气不好的人
specific	 adj.  明确的， 具体的； 特定的， 特有的
sprain	 n&vt.  扭伤
prioritize	 v.  划分优先顺序； 优先处理
engage	 v.  从事于， 忙于； 吸引； 订婚； 聘用
adroit	 adj.  精明的， 干练的； 熟练的， 灵巧的
appetite	 n.  胃口， 食欲； 欲望
frivolity	 n.  轻浮； 愚蠢的行为
strategy	 n.  战略， 策略
remainder	 n.  剩余物， 残余； 其他的人； 差数， 余数
clumsy	 adj.  笨拙的； 不得体的， 冒犯人的； 复杂难懂的， 难处理的
territory	 n.  领土， 版图； 领域， 地盘
summon	 v.  传唤， 传讯； 召集， 召开； 鼓起， 振作
grovel	 vi.  摇尾乞怜， 奴颜婢膝
maintain	 vt.  维持， 保持； 维修， 保养； 主张， 坚持； 赡养， 负担
shift	 v. 转移；改变 n.  转移； 改变； 轮班
implore	 v.  哀求， 恳求
rehabilitate	 vt.  使恢复原状， 修复； 改造， 使恢复正常生活； 恢复…的名誉
expertise	 n.  专门知识， 专长
bargain	 vi.  讨价还价 n. 特价商品，廉价货；协议；交易
elective	 adj.  选举的； 可选择的； 选修的
pivot	 v.  在枢轴上旋转 n. 枢轴；中心点；核心
dissuade	 vt.  劝阻， 阻止
sneaker	 n.  鬼鬼祟祟的人， 卑鄙者； 运动鞋
conclusive	 adj.  确定的， 确凿的， 不容置疑的； 结论性的
encompass	 vt.  包含； 环绕
sustenance	 n.  食物； 生计； 维持
allergy	 n.  过敏性反应
disinterested	 adj.  客观的， 无私的， 公正的； 无兴趣的， 不关心的
envelope	 n.  信封
deposit	 v. 沉淀；堆积；储蓄；
dissipate	 v.  消散， 消失； 挥霍， 浪费
recount	 v.  讲述， 描述； 重新清点， 重计
flask	 n.  细颈瓶； 烧瓶
fluctuation	 n.  波动， 起伏
pliable	 adj.  易弯曲的， 柔韧的； 易受影响的； 顺从的
flash	 vi.  闪光； 反射 n. 闪光；闪现
continent	 n.  大陆， 陆地； 洲
disturbance	 n.  打扰； 骚动； 心神不安， 烦恼
confidant	 n.  知己， 密友
simultaneous	 adj.  同时的， 同步的
guarantee	 v. 保证；担保 n.  保证， 担保； 保证书
improvise	 v.  即兴创作； 临时准备
predation	 n.  掠夺； 掠食
recommend	 vt.  推荐； 建议
demobilize	 vt.  遣散； 使复员
leach	 v. 过滤；溶解 n.  过滤器； 过滤剂
prodigious	 adj.  巨大的
lost-and-found	 n.  失物招领
knack	 n.  诀窍； 技能， 本领； 习惯， 癖好
default	 vi.  不履行义务， 违约 n. 违约；弃权；缺省
indolent	 adj.  懒惰的， 懒散的； 不活跃的
tropic	 adj.  热带的 n. 回归线；热带地区
beverage	 n.  饮料
diction	 n.  措辞， 用语
ripe	 adj.  熟的； 成熟的
attribute	 n.  属性， 特征 vt.  把…归于
genetic	 adj.  基因的， 遗传的
triumph	 v.  获胜， 成功 n. 狂喜；胜利，成功
slumber	 vi.  睡眠， 安睡
arouse	 vt.  唤醒， 唤起； 激起， 引起
nest	 v. 做窝，筑巢 n.  巢， 窝
tout	 v.  吹捧； 兜售
expropriate	 vt.  征用， 没收
consensus	 n.  共识， 一致同意； 舆论
classic	 adj. 经典的；典型的 n. 经典作品；
embellish	 vt.  装饰； 对…添枝加叶， 渲染
metric	 adj.  米制的； 公制的
absolute	 adj.  完全的， 绝对的； 地道的； 无疑的， 确凿的； 不受限制的， 不受约束的
retract	 v.  收回， 撤销； 缩回
gossip	 vi.  传播流言飞语， 说长道短 n. 闲话，流言飞语；爱说长道短的人
technological	 adj.  技术的， 工艺的
grab	 v.  拿， 抓， 夺
silversmith	 n.  银匠； 银器商人
antecedent	 adj.  先行的 n. 祖先，先辈
remains	 n.  剩余物， 残留物； 古代遗物， 遗迹， 遗址； 遗骸
granular	 adj.  粒状的； 含颗粒的
incorporate	 vt.  纳入， 合并； 包含； 吸收； 注册成立
graphite	 n.  石墨
boast	 v&n.  自我夸耀
reiterate	 vt.  反复说， 重申
flank	 n. 肋腹；侧面；侧翼 vt.  位于…的侧面
counterpart	 n.  相对物； 职位相当的人； 副本
segment	 n.  音段； 段， 部分
stripe	 n.  条纹， 斑纹
sovereign	 adj. 君主的；至高无上的；独立自主的 n.  君主， 元首， 最高统治者
gourd	 n.  葫芦； 葫芦制成的容器
attractive	 adj.  吸引人的， 有魅力的； 引起注意的
cater	 v.  迎合； 提供饮食
superb	 adj.  极好的， 高质量的， 上乘的； 华丽的
engineering	 n.  工程； 工程学
duplicate	 adj. 完全相同的；副本的 n.  复制品； 副本 vt.  复写； 复制； 使加倍
affable	 adj.  和蔼可亲的， 易于交谈的， 友善的
decrease	 v.  减少 n.  减少
surmise	 v.  推测， 猜测 n.  推测， 猜测
eradicate	 vt.  根除， 灭绝
germinate	 v.  发芽， 萌芽； 发展
trumpet	 v. 鼓吹，宣扬 n.  小号， 喇叭
conservationist	 n.  自然环境保护论者
despondent	 adj.  垂头丧气的， 沮丧的
trifle	 vi.  不认真对待， 怠慢 n. 少许；琐事，小事；无价值的东西
migrate	 v.  迁徙； 移居
Easter	 n.  复活节
string	 v.  用线串； 悬挂 n. 细绳，带子；一串；一系列；弦
submit	 v.  提交， 呈递； 屈从； 主张， 建议
occupy	 vt.  占用； 占据， 占领； 使忙于
import	 n.  进口， 输入； 意义， 要旨， 重要性 vt.  进口， 输入
affluent	 adj.  丰富的； 富裕的
indigestion	 n.  消化不良
intrude	 vi.  侵入， 闯入； 打扰， 侵扰
simplicity	 n.  简单， 容易； 朴素， 质朴
blink	 v. 眨眼睛；闪亮，闪烁 n.  眨眼睛
summit	 n.  最高点， 峰顶， 极点； 峰会
perfume	 n. 香味；香水 vt.  使充满香气； 洒香水于
magnify	 vt.  放大， 扩大； 夸大
redundant	 adj.  多余的； 累赘的
durable	 adj.  持久的， 耐用的
impose	 v.  把…强加于； 征； 处以
mammal	 n.  哺乳动物
preliterate	 adj.  文字出现以前的， 没有文字的
factor	 n.  要素， 因素； 因数； 系数
rite	 n.  仪式， 典礼
pinch	 v. 捏，掐；夹痛；偷窃；逮捕 n.  捏， 掐； 一撮， 微量
mischievous	 adj.  恶作剧的， 顽皮的， 淘气的； 恶意的
conquer	 vt.  战胜， 征服； 克服
wan	 adj.  苍白的， 无血色的； 憔悴的
continuity	 n.  连贯性， 连续性
sculpture	 n.  雕像， 雕塑品； 雕刻术
realization	 n.  实现； 意识
wax	 v. 给…打蜡；渐满 n.  蜡； 蜡状物
contamination	 n.  污染； 玷污
arable	 adj. 可耕作的，适于耕作的 n.  可耕地
gist	 n.  主旨， 要点， 大意
urban	 adj.  城市的， 市内的
refer	 v.  提到， 谈及； 查阅， 参考
stellar	 adj.  星的， 恒星的， 星球的； 精彩的； 优秀的
flame	 v.  燃烧； 闪耀 n. 火舌，火焰；光芒，光辉；强烈的感情
discard	 vt.  丢弃
subsidy	 n.  补助金， 津贴
criteria	 n.  [criterion的复数形式]标准， 准则
obscene	 adj.  淫秽的， 下流的； 骇人听闻的； 可憎的， 可恶的
raft	 v.  用筏运送； 乘筏渡河 n. 筏，木排；充气船
attentive	 adj.  注意的， 专心的； 关心的
prohibitive	 adj.  禁止的， 抑制的； 高得令人难以承受的
flair	 n.  才能， 本领； 天资
modest	 adj.  谦虚的； 适度的
crush	 vt.  碾碎； 使变形； 镇压
electron	 n.  电子
embed	 vt.  把…嵌入； 使深留脑中
citadel	 n.  堡垒， 要塞
promising	 adj.  有希望的； 有前途的
ambivalent	 adj.  对立的， 感情矛盾的
practicable	 adj.  能实行的， 可行的， 适用的
physiology	 n.  生理学； 生理机能
lofty	 adj.  高耸的； 崇高的； 高傲的
explicit	 adj.  清楚的； 直率的
utilize	 vt.  利用
prevail	 vi.  盛行， 流行； 战胜， 压倒； 劝说
flake	 v. 使成薄片；雪片般落下 n.  薄片
browse	 v. 吃嫩叶或草；浏览 n.  嫩叶； 浏览
implicit	 adj.  含蓄的； 绝对的； 内含的
purity	 n.  纯度； 纯洁， 纯净， 纯粹
portion	 n. 部分；一份 vt.  划分， 分配
futile	 adj.  无效的， 无用的， 无意义的； 琐细的； 没出息的
pensive	 adj.  沉思的； 忧虑的
reliever	 n.  救济者； 缓解物
acumen	 n.  敏锐， 聪明
abate	 v.  减少， 减轻
tragic	 adj.  悲惨的； 悲剧的
eschew	 vt.  避开， 戒除， 回避
physician	 n.  内科医生
stardom	 n.  明星的身份
amass	 vt.  积聚
venturesome	 adj.  敢于冒险的； 有危险的
souvenir	 n.  纪念品， 纪念物
quaint	 adj.  古色古香的； 离奇有趣的
grip	 v. 控制；紧握；吸引住…的注意 n.  控制， 影响力； 紧握； 理解
tornado	 n.  飓风， 龙卷风
explore	 v.  探索， 勘探； 探险； 探究
acronym	 n.  首字母缩写词
noteworthy	 adj.  显著的， 值得注目的
shirk	 v.  逃避， 规避
electricity	 n.  电； 电流
tentative	 adj.  试验性的； 不确定的， 暂定的； 犹豫的
cosmos	 n.  宇宙
climate	 n.  气候； 气候区， 地带； 风气， 氛围； 思潮
staggering	 adj.  巨大的； 势不可挡的； 惊人的， 令人吃惊的
crust	 n.  地壳； 外壳； 硬的表面； 面包片
criticize	 v.  批评； 吹毛求疵， 非难； 评论
incredulous	 adj.  怀疑的， 不轻信的
condole	 vi.  向…吊唁； 慰问
grid	 n.  格子， 栅格； 地图上的坐标方格， 网格； 输电网， 煤气输送网
circumference	 n.  周围， 周边； 圆周； 周长
rage	 v. 猛烈地继续，激烈进行；发怒，怒斥；迅速蔓延，猖獗 n.  风靡一时的事物， 时尚； 狂怒
finalize	 vt.  使完成； 把…最后定下来； 定稿
hull	 n. 外壳；船身，船体 vt.  给…去外壳
preside	 vi.  担任主席； 主持； 掌管
board	 v.  登机， 上船； 搭伙， 寄宿 n. 膳食费用；委员会，董事会；板，木板
economic	 adj.  经济的； 经济上的； 经济学的； 合算的
stuff	 n. 原料，材料 vt.  填满， 塞满； 让…吃饱
offspring	 n.  子孙， 后代； 崽
whim	 n.  一时的兴致， 冲动； 怪念头， 奇想
arrest	 n&vt.  逮捕， 拘留； 停止， 阻止； 吸引
assortment	 n.  分类； 各种各样
section	 n.  部分； 地区； 部门； 段落， 章节； 截面， 剖面
rumor	 n.  传闻， 谣言
overflow	 v.  泛滥， 溢出 n.  溢出； 容纳不下的物
provoke	 vt.  挑动， 激怒， 挑衅； 引发， 引起
enrich	 vt.  使充实； 使肥沃； 使富裕， 使富有
strain	 n. 拉力，压力，张力；
otherwise	 adv. 另样，用别的方法；在其他方面 conj.  要不然， 否则
marked	 adj.  显著的； 有记号的； 被监视的
pathological	 adj.  病态的； 病理学的； 不理智的， 无道理的
recital	 n.  音乐演奏会； 诗歌朗诵会； 赘述
visible	 adj.  看得见的， 明显的
intrigue	 v.  密谋； 迷住 n.  阴谋， 诡计
tangle	 v.  缠结， 纠结 n. 混乱；纠纷，不和
orient	 n. [O-]东方 vt.  使适应； 确定方向， 定位
recurring	 adj.  往复的， 反复的， 再次发生的
tranquil	 adj.  安静的， 平静的
pleasing	 adj.  令人高兴的， 愉快的
inner	 adj. 内部的；内心的 n.  内部； 内心
voyage	 n.  旅行； 航程
keen	 adj.  灵敏的， 敏锐的； 热心的， 渴望的； 激烈的； 锋利的
nutrition	 n.  营养； 营养学
absenteeism	 n.  旷课； 旷工
cereal	 n.  谷物； 谷类食物
gait	 n.  步法， 步态
overhaul	 n.  仔细检查； 彻底检修 vt.  仔细检查； 彻底检修
elementary	 adj.  初级的， 基础的； 基本的； 简单的
solemn	 adj.  庄严的， 严肃的； 隆重的
perceive	 vt.  感知， 察觉； 理解
embarrass	 vt.  使尴尬， 使困窘； 使困惑
politics	 n.  政治； 政纲， 政见； 政治事务； 权术； 政治学
acute	 adj.  严重的； 极度的， 激烈的； 敏锐的
stigma	 n.  污点， 耻辱； 烙印； 特征
pathology	 n.  反常， 变态； 病理学； 病状
silica	 n.  硅石， 硅土； 二氧化硅
crucial	 adj.  至关重要的， 决定性的
contribute	 v.  贡献， 捐赠； 有助于； 投稿
remark	 v. 评论；谈论；察觉 n.  评论， 评语； 注释
microscope	 n.  显微镜
dissenter	 n.  不同意者， 反对者
strive	 vi.  奋斗， 努力； 力求
candidate	 n.  候选人； 投考者
fungus	 n. 真菌
intelligible	 adj.  聪明的， 理智的； 易懂的， 易理解的
along	 adv. 向前；一起 prep.  沿着
parallel	 adj. 平行的；相似的 n. 相似处；
cashier	 n.  收银员， 出纳员
inert	 adj.  无活动的， 惰性的； 不活泼的， 迟钝的
diet	 vi.  节食 n. 饮食，食物；规定饮食
dissimulate	 v.  掩盖， 掩饰， 假装
enzyme	 n.  酶， 酵素
soccer	 n.  足球
breach	 n. 违背；破裂；缺口 vt.  打破； 违反
butter	 n. 黄油 vt.  涂黄油于
wit	 n.  智力， 才智； 风趣； 机智幽默的人
respire	 v.  呼吸
selective	 adj.  选择的， 选择性的； 精挑细选的
handful	 n.  一把； 少数人
rebate	 n.  回扣， 折扣； 退还款
stimulus	 n. 刺激（物）；促进因素
systematize	 vt.  使系统化， 使条理化， 使成体系
barter	 n&v.  实物交易， 以物易物
bewilder	 vt.  使迷惑， 使不知所措
regiment	 n. 团；
terminal	 adj.  末端的 n. 终点站；终点；航站楼
kerosene	 n.  煤油， 火油
diminish	 v.  降低， 贬低； 减少， 减弱
surpass	 vt.  超过， 超越， 胜过
linguist	 n.  语言学家； 通晓数国语言的人
oyster	 n.  牡蛎， 蚝
aloof	 adj.  远离的； 冷淡的， 冷漠的
idealize	 vt.  将…理想化
gouge	 vt. 挖出；敲竹杠 n.  凿子
attention	 n.  注意， 留心； 立正
succumb	 vi.  屈服， 屈从； 死亡
disproportionate	 adj.  不成比例的
extent	 n.  程度， 范围
translucent	 adj.  半透明的
magma	 n.  岩浆
fin	 n.  鳍； 鳍状物； 翼
sauce	 n.  调味汁， 佐料
husk	 n. 外壳，外皮 vt.  去壳， 削皮
fix	 v. 修理；使固定，安装；安排；找到，确定 n.  解决方法； 困境， 窘境
colonial	 adj.  殖民的； 殖民国家的
rank	 v.  属于某等级， 归类 n. 等级；头衔
giant	 adj. 巨大的；超群的 n.  巨大的动物； 才智超群的人
perch	 v. 栖息，停留；把…置于较高处；坐于 n.  栖息处， 栖木； 高处， 较高的位置； 鲈鱼
ablaze	 adj.  着火的， 燃烧的； 闪耀的； 情绪激动的
grouse	 v. 发牢骚，抱怨 n.  松鸡； 怨言
addition	 n.  加， 加法； 添加， 增加
overcharge	 v. 讨价过高，索价过高；过量装填；渲染，夸张 n.  过高的要价； 超载
saucy	 adj.  无礼的； 俏皮的； 漂亮的
neglect	 vt&n.  忽略， 忽视； 疏忽
cosmic	 adj.  宇宙的； 无限的
gang	 vi.  合伙 n. 一帮，一伙；帮派
vein	 n.  静脉； 叶脉； 纹理， 纹路； 方式， 风格
carve	 v.  雕刻； 切
shrink	 v.  收缩， 缩小； 退缩， 畏缩
veil	 n. 面纱；遮蔽物 vt.  以面纱掩盖； 掩饰
ancestor	 n.  祖先， 祖宗； 原种； 原型
hierarchy	 n.  统治集团； 等级制度； 阶层
league	 n.  联盟， 同盟； 等级， 级别
textile	 n.  纺织品
locality	 n.  地点； 位置
uncanny	 adj.  神秘的； 易乎寻常的
former	 adj. 从前的 n.  前者
panic	 n&v.  惊慌
extend	 v.  延长， 延伸； 扩大…的范围； 舒展
fold	 n. 褶，褶层；褶皱；褶痕，褶缝；羊栏，
canyon	 n.  峡谷
impenetrable	 adj.  不能穿透的； 不可理解的， 高深莫测的
hurl	 v.  猛投； 大声斥责
intermediate	 adj. 中间的；中级的 n.  中间体， 媒介
consideration	 n.  考虑， 思考； 体谅， 照顾； 考虑因素， 理由； 报酬
frank	 adj.  坦白的， 直率的
inscribe	 v.  写、 题、 铭刻； 铭记
admire	 vt.  钦佩， 仰慕； 欣赏
virus	 n.  病毒； 病毒性疾病
rape	 vt&n.  强奸； 肆意破坏
metaphor	 n.  隐喻， 暗喻
genre	 n.  类型； 流派
permanence	 n.  永久， 持久
panel	 n. 面板，镶板；仪表盘；专门小组 vt.  镶板
humanity	 n.  人类； 人性； 人道， 仁慈
outstanding	 adj.  优秀的， 杰出的， 出色的； 未解决的； 未偿付的
adobe	 n.  泥砖， 土坯
alternate	 v.  轮流， 交替 adj.  交替的， 轮流的； 间隔的
unbridgeable	 adj.  不能架桥的； 不能逾越的
infuriate	 vt.  激怒
flu	 n.  流行性感冒
plunge	 v. 掉入；暴跌，突降 n.  跳水； 猛跌， 骤降； 卷入
skeptical	 adj.  怀疑的
decipher	 vt.  破译
burgeon	 vi.  迅速成长， 发展
naive	 adj.  天真的， 率真的， 质朴的； 幼稚的， 无知的， 轻信的； 稚拙派的
sewage	 n.  污水， 污物
essential	 adj. 基本的，本质的；极其重要的，必不可少的 n.  要素， 实质； 必需品
expenditure	 n.  花费， 支出
vent	 n. 通风口；出口 vt.  表达， 发泄
clarify	 vt.  澄清， 阐明
furnace	 n.  火炉， 熔炉； 锅炉
haunt	 vt. 出没于；萦绕在心头；长期缠扰 n.  常去的地方
scarf	 n.  围巾， 披巾， 头巾
congenial	 adj.  情投意合的； 相宜的， 适宜的； 适当的， 合适的
graphics	 n.  图形， 图像； 制图法， 制图学
observe	 v.  遵守， 奉行； 观察； 察觉， 看到； 评说， 评论
meaningful	 adj.  意味深长的； 有目的的， 有用意的； 有意义的
furnish	 vt.  提供， 供应； 布置， 为…配备家具
larynx	 n.  喉
excavation	 n.  挖掘， 发掘； 出土文物； 挖掘现场
rare	 adj.  稀有的， 罕见的； 半熟的
exclude	 vt.  把…排除在外
amalgamation	 n.  融合， 合并； 联合， 结合
creativity	 n.  创造力， 创造性
enlighten	 vt.  启发， 启迪； 开导； 阐明
needy	 adj.  贫穷的， 贫困的
utmost	 adj. 最大限度的 n.  最大限度； 最大量
deduct	 vt.  扣除， 减去； 推论， 演绎
image	 n.  形象， 印象； 画像； 影像， 映像； 意象， 比喻
voracious	 adj.  狼吞虎咽的， 贪婪的； 求知欲强的
unpredictable	 adj.  不可预知的； 无法预言的
topography	 n.  地形学； 地形， 地貌
ribbon	 n.  带状物； 丝带， 缎带； 绶带； 色带
portray	 vt.  描绘； 扮演， 饰演
trance	 n.  恍惚； 昏睡状态
scrub	 v. 擦洗；取消 n.  灌木丛； 丛林地带
profound	 adj.  巨大的， 深远的； 知识渊博的； 深奥的
affirm	 v.  断言， 坚持声称； 证实， 确认
homogeneous	 adj.  同类的， 相似的， 同质的
marble	 n.  大理石； 子弹
waggle	 v&n.  摆动
garb	 n. 服装，装束 vt.  穿着， 装扮
necessity	 n.  必需品； 必要， 需要； 必然性
frame	 n. 框架；总的思想，体系 vt.  设计， 构成； 给…镶框； 表达
salon	 n.  营业性的厅； 沙龙； 客厅， 会客厅
vocal	 adj. 声音的，嗓音的，发声的；直言不讳的
origin	 n. 起源，由来；
plow	 v.  耕田， 犁田， 耕作 n. 犁
clasp	 n. 搭扣，扣环；紧抱；紧握 vt.  握紧； 抱紧； 扣住， 扣牢
hover	 vi.  徘徊， 彷徨； 翱翔， 盘旋
random	 adj. 随机的，任意的 n.  随机， 随意
personality	 n.  个性； 性格； 名人
terminology	 n.  专门用语， 术语； 术语学
alert	 adj. 警觉的，警惕的 vt. 警告，提醒 n.  警戒； 警报
rate	 v.  估价； 评级， 评价； 把…列为 n. 率，比率；速度；价格；等级
plot	 n. 情节；阴谋，密谋；
sanction	 vt. 同意，许可；惩罚，实施制裁 n.  同意， 许可； 约束； 制裁
mosaic	 n.  马赛克； 镶嵌工艺
oak	 n.  橡树， 橡木
prosperity	 n.  繁荣， 兴旺
proprietor	 n.  所有者， 业主
contrary	 adj. 相反的，逆的 n.  相反， 反面
rehearse	 v.  预演， 排练； 默诵； 照搬， 重复
thwart	 vt.  阻碍； 使…受挫
gamble	 n&v.  投机， 冒险； 赌博， 打赌
pesticide	 n.  杀虫剂， 农药
deport	 vt.  驱逐出境
syrup	 n.  糖浆
counter	 adv. 相反地 adj. 相反的 n. 柜台；
conserve	 vt.  保存， 保藏
Gothic	 adj. 哥特式的，哥特风格的 n.  哥特式建筑
rhythm	 n.  节奏， 韵律
rash	 adj. 鲁莽的，轻率的 n.  疹， 皮疹； 一连串令人不快的事物
pottery	 n.  陶器； 陶器厂， 制陶作坊； 制陶工艺， 陶器制造术
cylinder	 n.  圆筒， 圆柱体； 气缸
starch	 n. 淀粉；
depose	 vt.  革除， 罢免， 废黜
correspondent	 n.  报道者， 记者； 通信者
fort	 n.  要塞， 堡垒； 营地
renew	 vt.  使…续期； 重新开始； 重申； 修复
assign	 vt.  指派； 指定； 分配； 布置
withdraw	 v.  取消； 撤销； 提取； 撤退， 撤离
decade	 n.  十年， 十年期
languish	 vi.  憔悴； 凋谢， 枯萎； 受煎熬
melodic	 adj.  旋律的， 曲调的； 音调优美的
congress	 n.  [C-] 议会， 国会； 大会
welfare	 n.  福利； 安宁， 幸福
divine	 adj. 神的，神圣的；非凡的，超人的；极好的，
abhor	 vt.  憎恨， 厌恶
legislative	 adj.  立法的， 有立法权的； 根据法规执行的 n. 立法机关
flourish	 vi.  繁荣， 茂盛； 挥舞， 挥动
transcribe	 vt.  记录， 抄录； 转录； 改编
foul	 adj.  污秽的， 肮脏的； 充满脏话的， 辱骂性的； 邪恶的
intricate	 adj.  错综复杂的
contemplate	 v.  思量， 考虑， 思忖； 注视， 凝视； 打算
rodent	 adj.  啮齿目的； 咬的 n. 啮齿目动物
context	 n.  上下文； 背景； 环境
drag	 v. 拖动；缓慢而费力地移动；拖沓地进行，拖延 n.  累赘， 障碍； 一吸， 一抽， 一饮
zinc	 n.  锌
advisory	 adj. 顾问的，咨询的；劝告的 n.  警报
issue	 n. 问题，争论点；发行；
maturity	 n.  成熟； 完备
subsistence	 n.  生存， 生计
lower	 v. 降低 adj.  较低的； 下级的， 下等的
frail	 adj.  体弱的， 虚弱的； 易碎的
odd	 adj.  单数的； 奇数的； 奇异的， 古怪的； 偶尔发生的
announce	 vt.  宣布； 通知； 声称， 宣称； 广播， 播音
mechanize	 vt.  使机械化
additive	 n. 〔食品的〕添加剂，添加物
decree	 v.  判决； 颁布 n. 政令，法令；裁定，判决
traditional	 adj.  传统的， 惯例的； 口传的， 传说的
conservation	 n.  守恒； 保存； 保护
malleable	 adj.  有延展性的， 易成型的； 易受影响的， 可塑的
supplement	 n.  补充， 增补； 增刊； 补遗， 附录 vt.  补充， 增补
well-heeled	 adj.  富有的， 有钱的
contrast	 v.  对比， 对照 n.  对比， 对照
brittle	 adj.  易碎的； 脆弱的； 尖利的
affinity	 n.  密切关系； 吸引力； 喜爱
mediate	 v.  调解， 调停， 斡旋
amplify	 vt.  放大； 增强； 详述， 充实
inflation	 n.  通货膨胀， 物价上涨； 膨胀
disposal	 n.  清除， 外理， 处置； 变卖
matrimony	 n.  婚姻， 婚配
recede	 vi.  退， 后退； 渐渐远去； 逐渐减弱
delegate	 n.  代表 vt.  委派…为代表， 授权
literature	 n.  文学； 文学作品； 文献
suffragist	 n.  妇女政权论者
sphere	 n.  球； 范围， 领域； 阶层
digest	 v.  消化， 吸收； 领悟 n.  摘要， 概要
melodious	 adj.  旋律优美的， 悦耳的
ethnology	 n.  民族学， 文化人类学
ability	 n.  能力， 才干
veto	 n. 否决权；禁止 vt.  否决； 禁止
delight	 v. 愉快，高兴 n.  快乐， 高兴； 令人高兴的事， 乐趣
proficient	 adj.  熟练的， 精通的
continuum	 n.  统一体
draw	 v. 吸引，招引；画，描绘；拖，拉；引起，激起；拨出，抽出；提取，支取；推断出；打成平局 n.  平局， 和局； 抽签
contender	 n.  竞争者， 争夺者， 对手
slender	 adj.  细长的； 苗条的， 纤细的； 微薄的， 不足的
terminus	 n.  终点站
oral	 adj.  口头的， 口述的； 口腔的
compensate	 v.  赔偿， 弥补
conscious	 adj.  自觉的， 意识到的； 有知觉的， 有意识的； 有意的， 刻意的
transaction	 n.  交易， 业务； 办理， 处理
accomplishment	 n.  成就； 完成； 才艺， 技艺
pants	 n.  内裤， 短裤； 裤子
placid	 adj.  平静的， 安静的； 温和的， 文静的
solitary	 adj.  孤独的； 单独的， 独自的； 单个的； 唯一的， 仅有的
second	 adj. 第二的；次等的，二等的 v. 赞成，附和 num.  第二 n. 秒；瞬间，片刻
laudable	 adj.  值得赞美的， 值得称赞的
edge	 v.  徐徐移动； 略为增加； 给…加边 n. 边，边缘；刀口，刃；优势
orchestra	 n.  管弦乐队
sufficient	 adj.  足够的， 充分的
glaze	 v.  上釉； 给…装玻璃 n. 釉料；糖浆
claim	 v&n.  声称， 断言； 要求； 索赔
widespread	 adj.  分布广泛的， 普遍的
antique	 n. 古物，
thaw	 v. 融化，解冻；化冻；变暖；变得友善 n.  解冻时期； 缓和
fasten	 v.  使固定； 系牢， 扎牢； 握住， 抓牢
toxic	 adj.  有毒的； 中毒的
contest	 vt.  竞争； 争辩， 就…提出异议 n.  竞赛； 辩论； 争夺
asymmetrical	 adj.  不均匀的， 不对称的
turmoil	 n.  骚动， 混乱； 焦虑
clench	 v&n.  握紧， 抓牢； 咬紧
modernity	 n.  现代性
schematic	 adj.  图解的； 纲要的； 严谨的
rekindle	 vt.  重新点燃； 使振作
expansion	 n.  扩张； 膨胀
wrench	 v. 扭伤；猛拉，猛扭；使痛苦 n.  扭伤； 痛苦， 难受； 扳手
license	 n. 许可证，执照 vt.  批准， 许可
puff	 v. 喘气，喘息；喷出 n.  吸； 一缕； 喘息
expand	 v.  扩张； 膨胀； 伸展， 伸开
squander	 vt.  浪费， 挥霍
synchronizer	 n.  同步装置
perimeter	 n.  周长； 外缘， 边缘
essay	 n.  散文， 随笔； 短文； 评论
retrieve	 vt.  取回， 索回； 挽回， 扭转颓势； 检索
survey	 v.  调查； 概述 n.  调查； 概述
malice	 n.  恶意， 怨恨
postpone	 v.  延期， 推迟
codify	 vt.  把…编成法典， 使法律成文化； 整理， 系统化
dorsal	 adj.  背部的， 背脊的
code	 vt. 编纂；把…编码 n.  法典， 法规； 密码， 代码
potassium	 n.  钾
displace	 vt.  取代； 撤职； 迫使…离开家园
hammer	 v. 锤打 n.  锤， 槌； 锤子
ideology	 n.  思想体系； 意识形态
seal	 vt. 密封；确定，使成定局 n.  海豹； 封铅， 封条； 印， 图章
investigate	 v.  研究， 调查
storage	 n.  库房； 贮藏； 存储
troposphere	 n.  对流层
swindle	 vt&n.  诈骗， 骗取
illusion	 n.  幻觉， 错觉； 幻想中的事物
productivity	 n.  生产力， 生产率
reserve	 n. 储备；自然保护区；谨慎；替补队员；后备部队 vt.  保留； 预订
subsist	 vi.  存活， 生存
invertebrate	 adj.  无脊椎的 n. 无脊椎动物
dive	 vi&n.  跳水； 潜水
sympathy	 n.  同情， 同情心； 赞同， 支持
rescue	 vt&n.  营救， 搭救
brief	 adj. 简短的，短暂的；简洁的
recover	 v.  复原， 恢复； 重新获得； 收回
influx	 n.  注入， 涌入
determine	 v.  查明， 确定； 决心， 决定； 支配， 影响
devastate	 vt.  破坏， 毁坏； 令人震惊， 使难以承受
embark	 v.  上船
cousin	 n.  堂兄弟， 堂姐妹
intelligent	 adj.  有才智的， 聪明的
confer	 v.  授予； 协商， 商讨
friction	 n.  摩擦； 摩擦力； 矛盾， 冲突
walnut	 n.  胡桃； 胡桃木
incessantly	 adv.  不断地
imagist	 adj. 意象派的 n.  意象派诗人
radiation	 n.  放射； 辐射； 放射物， 放射线； 辐射的热
luxury	 adj. 奢华的 n.  奢侈， 奢华； 奢侈品
diagonal	 adj. 斜线的，
knit	 v.  编结， 编织； 紧密结合， 使紧凑； 愈合； 皱紧， 皱
aroma	 n.  芳香， 香味； 气氛， 氛围
subversive	 adj. 颠覆性的，破坏性的 n.  颠覆分子
strategic	 adj.  对全局有重要意义的， 关键的； 战略性的
wholesome	 adj.  健康的， 有利健康的； 有道德的
readily	 adv.  欣然地； 容易地
convenience	 n.  便利； 便利设施
discipline	 vt. 训练；惩罚 n.  纪律； 学科
calculus	 n.  微积分； 结石
expedient	 adj.  得当的， 可取的 n. 权宜之计，应急办法，临时手段
emission	 n.  散发物， 排放物； 发射， 排放
ensconce	 vt.  使安顿， 安置， 使安坐
freeze	 v.  结冰， 凝固
inevitably	 adv.  不可避免地， 必然地
estimate	 v.  评估， 估计； 估价 n.  估计； 估价； 评价， 看法
brand	 vt. 铭刻；打烙印于；丑化，败坏名声 n.  商标， 品牌； 类型； 烙印
suspension	 n.  暂停； 暂缓， 推迟， 延期； 悬架； 悬浮液
proposal	 n.  提议， 建议； 求婚
vibrant	 adj.  振动的； 活泼的， 充满生气的
insanity	 n.  精神错乱， 疯狂
recreation	 n.  娱乐， 消遣
skyscraper	 n.  摩天楼
portable	 adj.  轻便的， 便携的， 手提式的
ancient	 adj.  古代的； 古老的
antecede	 vt.  居先； 高于
squirrel	 n.  松鼠
cognitive	 adj.  认识的； 认知的， 有感知的
attorney	 n.  辩护律师； 代理人
adopt	 v.  采用； 收养， 领养； 正式通过， 批准
expire	 vi.  到期， 期满， 失效； 断气， 去世
viral	 adj.  病毒的， 病毒引起的
oppose	 v.  反对， 对抗
singular	 adj.  单数的； 突出的， 卓越的； 异常的
device	 n.  装置， 设备； 手法， 策略
evaporation	 n.  蒸发； 消失， 不存在
commentary	 n.  评论， 注释； 实况报道， 现场解说
homosexuality	 n.  同性恋； 同性恋行为
minus	 adj. 减的，负的 prep.  减 n. 负数；减号；不足
conservative	 adj. 保守的，守旧的；不时新的，传统的 n.  保守派
skeletal	 adj.  骨骼的， 骸骨的； 梗概的； 轮廓的
seep	 v.  漏出， 渗漏
unsubstantiated	 adj.  未经证实的， 无事实根据的
cabin	 n.  小屋； 机舱， 船舱
seem	 v.  好像， 似乎
apprenticeship	 n.  学徒的身份； 学徒的年限
disturb	 vt.  打扰； 搅乱， 弄乱； 使烦恼， 使不安
persist	 vi.  坚持； 持续
pump	 n. 泵 vt.  抽
pierce	 v.  刺穿， 刺破； 穿孔， 打眼
calendar	 n.  日历， 挂历， 月历； 日程表
patriarch	 n.  家长， 族长
intern	 n.  实习生 vt.  拘禁， 软禁
sensual	 adj.  感觉的， 感官的； 肉欲的； 耽于感官享受的
righteous	 adj.  正直的， 公正的； 正义的， 正当的
speculate	 v.  推测； 深思， 沉思； 投机， 做投机买卖
closet	 adj.  隐蔽的； 私下的， 秘密的 vt. 把…关在房间里 n. 橱，壁橱
heed	 n&v.  注意， 留心
adorn	 vt.  装饰， 装扮
monster	 adj.  巨大的， 庞大的 n. 怪物；庞然大物；恶魔
cement	 n. 水泥；胶合剂 vt.  巩固； 使团结
subway	 n.  地铁
scourge	 vt. 鞭笞；使受苦，折磨 n.  鞭子； 祸害； 鞭笞
acquaint	 vt.  使认识； 使熟悉
atrophy	 n.  萎缩
pulp	 vt. 使成浆状 n.  纸浆； 浆状物
undergraduate	 n.  大学肄业生； 大学本科生
antibiotic	 adj.  抗菌的
joint	 adj.  连接的； 共同的， 共有的， 联合的 n. 关节，骨节；接头，接合处
separate	 v.  分离； 划分； 区别； 分居 adj.  分离的； 个别的
reasonable	 adj.  合理的， 适当的； 通情达理的； 公道的
endangered	 adj.  濒危的， 将要灭绝的
haphazard	 adj.  偶然的， 任意的； 无计划的， 无秩序的
wick	 n.  蜡烛芯； 灯芯
biannual	 adj.  一年两次的
elicit	 vt.  得出， 引出； 诱出
relegate	 vt.  使贬职， 使降级； 放逐， 贬谪
ambiguity	 n.  模棱两可的话； 歧义
trivial	 adj.  琐碎的， 微不足道的
awareness	 n.  知道， 意识， 察觉
postcard	 n.  明信片
longevity	 n.  长寿； 寿命
military	 adj. 军事的 n.  [the ～]军队， 军方
reluctant	 adj.  不情愿的， 勉强的
conscientious	 adj.  凭良心的； 认真谨慎的， 一丝不苟的
coil	 v. 盘绕，卷 n.  卷； 线圈
authoritative	 adj.  官方的； 权威性的， 可信的； 专断的， 命令式的
ensure	 vt.  确保， 担保， 保证
organism	 n.  生物， 有机物； 有机体
epidemic	 adj.  流行性的， 传染性的 n. 流行；流行病
suppose	 v.  假设， 推测； 认为， 料想； 要不
scruple	 n&vi.  踌躇， 顾忌， 顾虑
remarkable	 adj.  显著的， 值得注意的； 非凡的
flavor	 n. 风味，滋味；调味品 vt.  给…调味
recess	 n. 休会期；休庭；暂停；凹室，
extract	 vt.  取出； 提取， 榨取 n.  提出物； 摘录， 选段； 精， 汁
outspoken	 adj.  直言不讳的， 坦率的
obscure	 adj. 暗的，模糊的，朦胧的；费解的，晦涩的；不著名的，不重要的 vt.  使变模糊； 使费解
noxious	 adj.  有害的； 有毒的
bolster	 vt. 支持；改善 n.  垫子， 枕垫
region	 n.  层； 地区， 区域； 范围
deceive	 v.  欺骗
ingenious	 adj.  巧妙的； 聪明的， 机敏的； 善于创造发明的； 设计独特的， 别致的
questionnaire	 n.  问卷， 调查表
breakthrough	 n.  突破， 重大进展
snack	 n.  快餐， 小吃， 点心
amphibious	 adj.  两栖的； 水陆两用的
imprint	 vt.  使铭记， 使牢记； 压印 n.  印记， 印痕； 持久的影响
destination	 n.  目的地， 终点
yoke	 n. 裤腰；牛轭；奴役，束缚 vt.  使结合， 连接
vertical	 adj. 垂直的，竖直的 n.  垂直线
reciprocal	 adj. 相互的；互惠的；相应的；
perpetuate	 vt.  使永存， 使持续
pure	 adj.  纯洁的； 纯净的； 完全的； 纯理论的， 抽象的
damp	 adj. 潮湿的 n. 潮湿；湿气 vt.  弄湿； 减弱， 抑制
emphasize	 vt.  强调， 着重
brighten	 v.  更明亮； 快活起来； 有希望
ore	 n.  矿； 矿物， 矿石
slight	 adj. 轻微的，微小的 v. 侮慢；轻视，冷落
previous	 adj.  先前的， 在前的
argue	 v.  争论， 辩论； 主张， 论证； 说服， 劝说
concomitant	 adj. 伴随的 n.  伴随物
cumbersome	 adj.  笨重的； 麻烦的； 累赘的， 冗长的
belie	 vt.  给人以错觉； 掩饰； 证明…不正确
premature	 adj. 早熟的；过早的；不成熟的，仓促的 n.  早产儿
superior	 adj. 较高的；更好的；有优越感的，高傲的；超群的 n.  上级， 长官
choir	 vi.  合唱 n. 唱诗班，合唱队
compensation	 n.  补偿， 赔偿； 赔偿金
accessory	 adj.  辅助的 n. 附件，零件；配饰；从犯，同谋
ecosystem	 n.  生态系统
seminar	 n.  研讨会； 研讨班
pupil	 n.  小学生； 瞳孔
naturalist	 n.  自然主义者； 博物学家
venom	 n.  毒液； 恶意， 怨恨
hazard	 n. 危险；风险 vt.  尝试着做； 冒…风险， 使处于危险
melodrama	 n.  情节剧， 通俗剧； 戏剧性的事件
vegetative	 adj.  植物的； 有生长力的
proof	 adj.  耐…的， 防…的 n. 证据，证明；证词；检验，证实；校样
militant	 adj. 好战的，好暴力的 n.  激进分子
phase	 n. 相位，月相；阶段，时期 vt.  分阶段实行， 逐步做
dilute	 adj. 冲淡的，稀释的 vt.  冲淡， 稀释； 淡化， 削弱
method	 n.  方法， 办法， 措施； 秩序
contract	 v.  订合同； 收缩； 感染， 染上 n.  合同， 契约
scroll	 n.  卷轴； 纸卷， 画卷； 名册
sluggish	 adj.  行动迟缓的； 不活泼的； 无精打采的， 怠惰的
yolk	 n.  蛋黄， 卵黄
vascular	 adj.  血管的， 脉管的
susceptible	 adj.  易受感染的； 易受影响的； 过敏的； 感情丰富的； 能经受…的， 容许…的
innovative	 adj.  革新的， 创新的； 富有革新精神的
insight	 n.  洞察力； 领悟
quiescent	 adj.  静止的， 寂静的； 静态的
assail	 vt.  抨击， 指责； 猛攻； 困扰
fabric	 n.  布料， 织品； 构造， 结构
exact	 adj. 精确的，准确的；严谨的，严格的；
centigrade	 adj.  百分度的； 摄氏温度的
cerebral	 adj.  大脑的； 理智的
mural	 adj.  墙壁的； 在墙上的 n. 壁画，壁饰
periodic	 adj.  周期的， 定期的
seismology	 n.  地震学
slander	 n. 诽谤，中伤，诋毁 vt.  诽谤， 诋毁
gem	 n.  宝石， 珍品； 美丽绝伦的事物
sedentary	 adj.  久坐的， 固定不动的； 土生的， 不迁徙的； 沉积的
capacity	 n.  能力； 容量； 职责， 职位； 生产力
hemp	 n.  大麻； 由大麻制成的麻醉药
saturate	 vt.  使湿透； 使饱和
counterfeit	 adj. 伪造的，假冒的 n. 赝品 vt.  伪造， 仿造
course	 n.  课程， 教程； 过程， 进程； 路线； 一道菜
barber	 v.  为…理发； 当理发师 n. 理发师
precise	 adj.  准确的， 精确的； 严谨的
sensible	 adj.  可察觉的， 可感知的； 明智的； 切合实际的； 意识到的
precious	 adj.  贵重的； 珍爱的
suspect	 v.  怀疑， 猜想 adj. 可疑的；不信任的 n.  嫌疑犯， 可疑分子
apologize	 vi.  道歉， 认错； 辩解
mingle	 v.  混合； 交往
braid	 n. 穗带，饰带；发辫 vt.  编织； 编成辫子
unravel	 v.  澄清； 解体， 瓦解； 解开
edible	 adj.  可食用的
chorus	 n. 合唱曲；合唱队；副歌，叠句；齐声，
prone	 adj.  平卧的， 俯卧的； 易于做…的， 倾向于…的
asset	 n.  资产， 财产； 有价值的人； 长处， 优点
exposition	 n.  展览会， 博览会； 阐释
minimum	 adj. 最小的，最低的 n.  最小值， 最低限度
date	 n. 日期，日子；时期，年代；约会；
reveal	 vt.  暴露， 揭露； 展现
depot	 n.  库房， 仓库； 公共汽车站， 火车站
theoretical	 adj.  不切实际的； 理论的
owl	 n.  猫头鹰
sound	 adj. 可靠的；健康的，完好无损的；合理的 v.  似乎； 测量…的深度
harbor	 vt. 窝藏；藏有 n.  港口
vibrate	 v.  颤动， 振动
hospitable	 adj.  宜人的； 好客的， 殷勤的； 开通的
multiplicative	 adj.  倍增的； 乘法的
impetus	 n.  促进， 推动； 刺激； 推动力
healing	 adj. 有治疗功用的 n.  康复， 治疗； 复原
realistic	 adj.  现实的； 逼真的
revitalize	 vt.  使恢复生机， 使再生； 使更强壮
barrier	 n.  屏障， 障碍物； 检票口； 障碍， 阻力； 隔阂
caribou	 n.  北美驯鹿
simmer	 vi. 充满；煨，炖 n.  煨， 炖
eviscerate	 vt.  取出内脏； 除去主要部分
resource	 n. 资源〔指土地、矿产等〕 v. 向…提供资源
brace	 vt. 绷紧肌肉；使顶住；使防备；加强，加固 n.  支架， 托架
brisk	 adj.  清新的； 敏捷的， 活泼的
nightmare	 n.  噩梦； 无法摆脱的恐惧； 可怕的事
prolonged	 adj.  长期的， 持久的
prestige	 n.  威望； 声望
spontaneity	 n.  自发性； 自发行为
core	 n. 地核；果心，核心；要点，精髓 vt.  去掉…的中心部分
famish	 v.  饥饿
fraud	 n.  骗子， 冒名顶替者； 冒牌货； 欺骗
council	 n.  委员会； 地方议会
igneous	 adj.  火的， 似火的； 火成的， 火成岩的
dazzling	 adj.  令人眼花缭乱的， 耀眼的
rectangle	 n.  长方形， 矩形
rotational	 adj.  旋转的； 轮流的
quash	 vt.  撤销， 废止； 镇压； 平息
sprawl	 vi. 伸开四肢坐；扩展，蔓延 n.  扩展， 蔓延； 蔓延物
concrete	 adj. 混凝土制的；具体的；确凿的 n.  混凝土
rustproof	 adj.  不锈的
shrimp	 n.  小虾
abridge	 vt.  缩短， 删节， 节略， 精简
penalty	 n.  处罚， 惩罚； 罚金； 犯规的处罚
scale	 n. 鳞；规模；比例；刻度；【音】音阶；等级，级别 vt.  攀登
vegetation	 n.  植物； 植被
gin	 n. 杜松子酒；弹棉机，
engaging	 adj.  迷人的
contributor	 n.  投稿者； 贡献者， 捐助者； 促成物
subdivide	 v.  再分， 细分
nosy	 adj.  爱管闲事的， 好打听的
salient	 adj.  显著的， 突出的
buck	 v. 猛然弓背跃起；猛然震荡；抵制，反抗 n.  美元； 雄鹿
iceberg	 n.  冰山； 冷冰冰的人
station	 n. 所；站；台；岗位；身份，地位 vt.  安置； 派驻， 驻扎
feeble	 adj.  虚弱的， 衰弱的， 无力的
herb	 n.  药草， 香草； 草本植物
herd	 v.  放牧； 成群， 聚集 n. 牧群，兽群；人群，芸芸众生
limb	 n.  肢， 臂； 主枝
prose	 n.  散文
inverse	 adj. 相反的，反向的 n.  反面； 倒数
cognition	 n.  感知， 认知， 认识
confidence	 n.  信任； 信心
cuisine	 n.  烹饪； 烹调法， 烹调风格
arbitrary	 adj.  任意的； 专制的， 专断的
intent	 adj.  专心的， 专注的； 急切的 n. 意图，目的
readability	 n.  可读性
interrogate	 vt.  审问， 讯问， 盘问
astute	 adj.  机敏的， 精明的
challenge	 n. 挑战；艰巨任务，难题；质疑，质问 vt.  向…挑战； 公然反抗； 对…质疑
dignity	 n.  尊严， 庄严； 高贵， 尊贵； 自尊， 自重
unearth	 vt.  掘出， 发掘； 揭露
emit	 vt.  发出； 放射； 排放
snap	 v. 猛咬；折断，断裂；打开，关上；呵斥，厉声说；拍照 adj.  仓促的， 匆忙的 n. 啪嗒声；照片
sleigh	 n.  雪橇
govern	 v.  统治， 治理， 管理； 决定， 支配； 控制， 影响
numerous	 adj.  许多的； 无数的
seismic	 adj.  地震的， 地震引起的； 影响深远的， 重大的
resemble	 vt.  与…相似， 像
remote	 adj.  偏僻的， 偏远的； 久远的； 远程的； 关系远的； 微乎其微的； 冷漠的
cafeteria	 n.  自助餐厅， 自助食堂
rupture	 v.  破裂； 决裂， 断绝
afflict	 vt.  使苦恼， 折磨
fluctuate	 v.  波动； 变化
calculate	 v.  计算， 核算； 估计， 推测； 计划， 打算
rancorous	 adj.  怨恨的， 满怀恶意的
persistent	 adj.  坚持的， 百折不挠的； 持续的
authorize	 vt.  授权； 批准， 许可
trauma	 n.  精神创伤； 外伤； 痛苦经历
groom	 v. 刷洗；梳理毛发；培养，
audience	 n.  听众； 观众； 读者
possess	 vt.  具有， 拥有
dedication	 n.  献身， 奉献； 献词； 奉献仪式
neutral	 adj.  中性的； 中立的
optional	 adj.  可以任选的， 非强制的
analysis	 n.  分析； 分析报告； 分解
devise	 vt.  设计； 发明； 想出； 策划， 图谋
apparent	 adj.  显然的， 明显的； 表面上的， 貌似的
journalism	 n.  新闻业， 新闻工作
chronical	 adj.  慢性的， 延续很长的
exposure	 n.  暴露， 显露； 揭露； 曝光； 面临， 遭受
evacuate	 v.  疏散， 撤离； 排空
clutch	 v.  企图抓住， 抓紧 n. 一次所孵的卵；离合器；掌握，控制；把握，抓紧
dawn	 n.  破晓， 黎明； 开始， 发端
humble	 adj. 谦卑的；卑贱的；简陋的，低劣的 vt.  降低， 贬抑
commodity	 n.  商品； 日用品
independent	 adj.  独立的， 自主的； 自立的； 不相干的， 不受影响的； 无偏见的， 中立的； 私立的； 有主见的； 无党派的
glossy	 adj.  光滑的； 光彩夺目的； 浮华的
blur	 v. 变模糊，难以区分；玷污 n.  模糊形状； 模糊的记忆； 污点
plausible	 adj.  似有道理的， 似乎正确的
cider	 n.  苹果酒； 苹果汁
hearsay	 n.  谣言， 传闻， 道听途说
mundane	 adj.  世俗的； 平凡的
alkali	 n.  碱
colonization	 n.  殖民地化
fortuitous	 adj.  偶然的， 意外的
equator	 n.  赤道
sexism	 n.  性别歧视
incapacitate	 vt.  使无资格； 使失去能力； 使不胜任
deceitful	 adj.  欺诈的， 惯于欺骗的， 不诚实的
audition	 n.  旁听； 试演
editorial	 adj.  社论的； 编辑的 n. 社论，重要评论
sharpen	 v.  削尖， 磨快； 使敏锐； 变得清晰
sedimentary	 adj.  沉积的， 沉淀性的
committee	 n.  委员会
kernel	 n.  仁； 粒； 核心， 要点
stingy	 adj.  吝啬的， 小气的
excavate	 vt.  挖掘； 掘出
wipe	 v&n.  擦， 揩， 抹
subtle	 adj.  细微的， 微妙的； 精巧的， 巧妙的； 狡猾的； 敏锐的
foliage	 n.  叶
photograph	 v.  拍照 n. 照片
component	 adj.  组成的， 构成的 n. 成分，组成部分
suite	 n.  套， 组； 套房
overwhelm	 vt.  淹没， 漫过； 压倒， 击败， 制服； 使难以忍受； 使应接不暇
morgue	 n.  停尸房， 太平间
unprecedented	 adj.  空前的
pocketbook	 n.  钱袋， 皮夹； 财政状况， 财力
charcoal	 n.  木炭
disguise	 vt&n.  掩饰； 伪装， 假装
imperial	 adj.  帝国的， 帝王的； 至尊的； 专横的
wrap	 vt. 包，裹 n.  披肩， 围巾； 包装材料
prehistoric	 adj.  史前的； 陈旧的
facet	 n.  小平面； 方面
novel	 adj. 新颖的 n.  小说
tedium	 n.  单调， 乏味
liberal	 adj.  自由的， 开明的； 慷慨的； 不严格的； 人文的
standard	 adj.  标准的 n. 标准，准则
harmony	 n.  和声； 和谐， 融洽， 协调； 相符， 一致
genial	 adj.  亲切的， 和蔼的； 温和的， 温暖的
epitome	 n.  摘要， 梗概； 典型， 典范
sharply	 adv.  急剧地； 猛烈地； 尖刻地； 鲜明地
afoul	 adv.  相抵触， 有冲突
chill	 adj. 寒冷的 v.  变冷， 冷却 n. 寒冷，寒意
dominate	 v.  支配， 统治； 控制； 盛行
imitate	 vt.  模仿， 效仿； 仿制， 仿造
compute	 v.  计算， 估算
pastel	 adj. 彩色蜡笔的；柔和的 n.  彩色蜡笔
homestead	 n.  家宅， 农庄； 宅地
middleman	 n.  中间人， 调解人； 经纪人
exceed	 v.  超过， 超出
avert	 vt.  避免， 规避； 转移
conversation	 n.  交谈， 会话
monarchy	 n.  君主制； 君主国
manifestation	 n. 显示，表明；
vicious	 adj.  危险的， 罪恶的； 残酷的， 凶残的； 恶性的
lace	 v.  用带子束紧 n. 蕾丝；缎带；鞋带，系带
invitation	 n.  邀请； 请柬； 吸引， 诱惑
lithosphere	 n.  岩石圈
enormous	 adj.  巨大的， 极大的
revival	 n.  复兴， 再流行； 复苏； 苏醒， 复活； 重演
moisture	 n.  潮湿， 湿气
sloth	 n.  树懒； 懒散， 怠惰
lack	 n&vt.  缺乏， 不足
external	 adj.  外部的， 外面的； 外来的； 对外的
circumstance	 n.  环境， 条件； 境况， 经济状况
revise	 vt.  修订， 修改； 复习
authority	 n. 权力，管辖权；
paramount	 adj.  至为重要的； 最高权力的， 至尊的
emerald	 n.  祖母绿， 绿宝石； 翡翠绿
legislature	 n.  立法机关， 立法团体
sociable	 adj.  好交际的， 合群的； 友善的， 友好的
exhilarating	 adj.  令人高兴的， 使人兴奋的
Saturn	 n.  土星
avenge	 vt.  复仇， 报仇； 向…报仇
obsolete	 adj.  过时的； 废弃的
instrument	 n.  仪器， 器械， 工具； 乐器
medium	 adj. 〔大小、水平或数量〕中等的；中号的 n. 传播媒介〔如报纸、电视等〕 n. 灵媒，巫师，通灵的人
gasoline	 n.  汽油
interface	 n.  界面， 分界面； 接口
sculpt	 vt.  雕刻
lipid	 n.  脂质， 类脂
fatal	 adj.  致命的； 毁灭性的； 命中注定的
hormone	 n.  激素， 荷尔蒙
psychology	 n.  心理学； 心理， 心理特征
outgas	 vt.  除去气
ridge	 n.  脊； 山脊， 山脉； 高压脊； 隆起物
hypothesize	 v.  假定， 假设
puritanical	 adj.  极守道德的
twine	 v.  缠绕， 盘绕， 围绕 n. 细绳
mobile	 adj.  可移动的； 多变的 n. 动的雕塑
perform	 v.  做， 履行， 完成； 表演， 演出； 执行
retrospective	 adj.  回顾的， 追想的； 有追溯效力的
peak	 adj. 最高的，高峰的 n.  最高点， 顶峰
evolution	 n.  发展； 演变， 进化， 进化论
lucrative	 adj.  赚钱的， 获利的， 有利可图的
portrait	 n.  肖像， 画像； 描写， 描绘
inanity	 n.  空虚， 空洞； 无意义的事物
acidity	 n.  酸度； 酸性
complaint	 n.  诉苦， 抱怨； 投诉； 控告
pinnacle	 n.  山顶， 顶峰； 鼎盛时期； 小尖塔
inject	 vt.  注射； 注入， 灌输； 投入
cannibalism	 n.  嗜食同类
indifference	 n.  冷漠， 不关心
copious	 adj.  丰富的， 富饶的
inception	 n.  开端， 开始
channel	 n.  频道； 渠道， 途径； 通道； 海峡； 水道， 航道
focus	 v.  集中； 聚焦 n. 焦点，焦距；中心
hamper	 vt. 妨碍，阻挠 n.  大篮子
approach	 v. 接近；
usher	 v.  引领， 引导 n. 领座员，招待员
decisive	 adj.  决定性的； 果断的
pollinate	 vt.  给…授粉
concise	 adj.  简明的， 简练的
thesis	 n.  论文； 论题， 论点
bump	 v.  碰撞 n. 肿块；撞击；碰撞声
precursor	 n.  先驱； 先兆， 前兆； 前身
revive	 v.  恢复； 苏醒； 重新利用
fumigate	 vt.  烟熏， 香薰
arid	 adj.  干旱的； 贫瘠的； 无趣的
fiber	 n.  纤维素； 纤维制品； 纤维
proceed	 vi.  进行下去， 继续做； 发生； 继续下去； 行进， 前往
musical	 adj. 音乐的；悦耳的；有音乐天赋的，爱好音乐的 n.  音乐剧
aria	 n.  独唱曲， 咏叹调
bulb	 n.  鳞茎； 鳞茎状物； 灯泡
dismiss	 v.  不再考虑， 不接受； 消除， 摒除； 免职， 解雇； 解散， 遣散； 驳回， 不受理
abysmal	 adj.  深不可测的； 极坏的， 糟透的
verbiage	 n.  冗词， 赘言， 废话
underlying	 adj.  潜在的； 基础的
intelligence	 n.  智力， 智慧； 情报
utilitarian	 adj. 实用的；功利主义的 n.  功利主义者
even	 adv. 甚至，连；甚至可以说 adj. 平滑的，平坦的；平稳的，均匀的；均衡的；平均的；偶数的 v.  平坦； 相等
ambience	 n.  周围环境， 气氛
install	 vt.  安置， 安装
analyze	 vt.  分析， 研究
cuneiform	 adj. 〔古代美索不达米亚人使用的〕楔形文字的
bulk	 n.  容积， 体积； 主体， 大部分
vacancy	 n.  空房间； 空位， 空缺； 空虚
champion	 n. 冠军；拥护者 vt.  声援
ceramic	 adj.  陶器的， 瓷器的
plumage	 n.  鸟类羽毛
circuit	 n.  电路； 线路； 巡回； 环行； 环行路线
piracy	 n.  海盗行为； 抢劫行为； 剽窃行为
locomotion	 n.  移动； 运动
magnificent	 adj.  极好的； 宏伟的， 华丽的； 崇高的， 高尚的
irregular	 adj.  不规则的， 无规律的； 不整齐的； 不合常规的
restrict	 vt.  限制， 约束
mason	 n.  石匠， 泥瓦匠
recharge	 v.  充电； 休整； 再装弹药
legislate	 v.  制定法律； 通过立法
imperative	 adj. 迫切的，重要紧急的；必要的；命令的；
documentary	 adj. 文件的，文献的；记录的，纪实的 n.  纪录片
hitherto	 adv.  迄今， 至今
consequence	 n.  结果； 影响； 推理； 重要， 重大
linear	 adj.  线的， 直线的； 线性的； 长度的
robust	 adj.  健壮的， 强壮的
raven	 adj. 乌黑光亮的 n.  渡鸦
dominant	 adj.  统治的， 支配的， 占优势的； 有统治权的
heading	 n.  标题； 主题
denounce	 vt.  谴责， 公开指责， 抨击； 告发
swampy	 adj.  沼泽的， 湿地的； 松软的
verge	 vi. 接近，濒临 n.  草地
framework	 n.  框架， 构架； 原则， 准则； 机制， 结构
milieu	 n.  出身背景； 社会环境
microorganism	 n.  微生物
entity	 n.  实体， 独立存在物
chronicle	 vt. 把…载入编年史 n.  编年史， 年代记
tide	 v. 涨落 n.  潮， 潮汐； 潮流， 趋势
prohibit	 v.  禁止， 阻止
frugal	 adj.  节约的， 节俭的； 少量的
franchise	 n. 特权，特许；特许经销权；选举权 vt.  赋予特权； 赋予选举权
replica	 n.  复制品
bacteria	 n.  细菌
laureate	 adj.  享有殊荣的 n. 桂冠诗人；荣誉获得者
reign	 n. 统治，支配；
infirm	 adj.  虚弱的； 不坚定的
tempo	 n.  速度， 节奏； 行进速度
manner	 n. 方式，风格；
associate	 v.  结交； 关联 adj. 副的；合伙的 n.  伙伴
scrupulous	 adj.  多顾虑的， 谨慎的； 一丝不苟的， 严谨的； 审慎正直的， 恪守道德规范的
gleam	 vi.  闪光， 闪烁； 流露出 n. 微光；一丝，一线；表露
glean	 vt.  点滴搜集， 四处收集
detract	 v.  减损； 贬低， 诋毁
pin	 vt. 钉住；固定 n.  大头针； 钢钉； 胸针； 徽章
pit	 vt. 使有坑，使…表面有斑点 n.  大坑， 深坑； 矿井； 陷阱
motif	 n.  主题， 主旨； 图形
stock	 vt. 储备，储存 n. 库存，现货；备用物；股份，股票；世系，血统；家畜，
suspend	 vt.  吊， 悬挂； 暂缓， 暂停， 中止
swap	 v. 交换，掉换 n.  交换， 掉换； 交换物， 被调换者
ritual	 adj.  仪式的； 习惯的， 例行的 n. 典礼，仪式；例行公事，老规矩
surge	 v. 涌动；蜂拥而出；飞涨，
basin	 n.  盆， 脸盆； 盆地； 流域
resolute	 adj.  坚决的， 果断的
tutor	 v.  辅导 n. 导师；家庭教师
senator	 n.  参议员
reconcile	 vt.  使协调； 使和解； 使顺从
quantify	 vt.  以数量表示， 量化
annul	 vt.  宣布无效， 取消， 废除
tempt	 vt.  引诱， 诱惑； 吸引
ethic	 n. 伦理；道德体系
basic	 adj.  基本的， 基础的； 初步的， 初级的
twist	 v. 缠绕，扭曲；曲解，歪曲 n.  转折， 突然变化； 卷曲物
absolve	 vt.  赦免； 免除； 宽恕
seclusion	 n.  独处， 隐居； 隔离； 与世隔绝， 归隐
boulder	 n.  巨石， 巨砾
locate	 vt.  使坐落于； 找出， 定位
Mesolithic	 adj. 中石器时代的 n.  中石器时代
bush	 n.  灌木； 荒野
muse	 v.  沉思， 冥想 n. 灵感
combat	 v&n.  战斗， 格斗
despise	 vt.  鄙视， 看不起
dioxide	 n.  二氧化物
grievous	 adj.  令人忧伤的； 极严重的
oblong	 adj. 矩形的，长方形的；椭圆形的 n.  矩形， 长方形； 椭圆形
unity	 n.  团结一致， 统一， 联合； 协调； 统一体
genetics	 n.  遗传学
pursue	 v.  继续； 从事于； 追击， 追踪； 追求
vulgar	 adj.  下流的， 粗俗的； 普通的， 通俗的
catastrophe	 n.  灾难， 灾祸； 困难
convey	 vt.  运送， 运输； 传达， 表达
convex	 adj.  凸出的
redeem	 vt.  赎回； 偿清， 付清； 兑换； 弥补， 补偿； 履行， 遵守
skull	 n.  颅骨， 头骨； 脑袋； 头脑
rationality	 n.  理性； 合理性
monogamy	 n.  一夫一妻制
contaminate	 vt.  污染
allude	 vi.  暗指， 影射， 间接提到
torpor	 n.  迟钝； 死气沉沉
chagrin	 n.  懊恼， 失望
predator	 n.  捕食性动物， 食肉动物； 掠夺者， 剥削者
chief	 adj. 主要的；总的；首席的 n.  首领； 酋长， 族长
accord	 v.  与…一致， 符合 n. 协议，条约
forfeit	 vt. 被没收，丧失 n.  罚款； 没收物
foremost	 adj.  最先的； 最著名的， 最重要的
automatic	 adj. 自动的；无意识的；必然的，自然的 n.  自动手枪； 自动换挡汽车
disintegrate	 v.  瓦解； 碎裂
consecutive	 adj.  连续不断的， 连贯的
assimilation	 n.  同化； 吸收
quotient	 n.  商； 份额
groan	 vi. 呻吟；叹息；发出呻吟般的声音 n.  呻吟； 抱怨； 呻吟声， 叹息声
merchandise	 n. 商品，货物 vt.  买卖， 经营
pebble	 n.  小圆石， 鹅卵石
conduct	 v.  引导； 传导； 进行； 管理， 指挥； 表现 n.  行为； 管理， 实施
livelihood	 n.  生计， 谋生手段
reunion	 n.  团圆， 重聚
fantastic	 adj.  荒诞的， 奇异的； 极好的； 极大的
semiotics	 n.  符号学
indecipherable	 adj.  无法破译的； 难以领悟的
immigrate	 vi.  移居入境
apparatus	 n.  器械， 器具， 设备， 装置； 机构， 组织； 器官
decay	 v&n.  腐烂， 腐朽； 衰退， 衰落
incidental	 adj.  偶然的； 附带发生的， 伴随而来的
induct	 vt.  使正式就任； 使了解， 传授； 使入伍
fracture	 v.  断裂， 折断； 分裂 n. 骨折；断裂；破裂
lessen	 v.  变小， 变少， 减轻
championship	 n. 锦标赛，冠军赛
recycle	 vt.  回收利用， 再应用
marsh	 n.  沼泽， 湿地
sapphire	 adj.  天蓝色， 蔚蓝色的 n. 蓝宝石，青石；蔚蓝色
drift	 v. 漂流，漂移；漂泊，游荡 n.  漂流； 漂泊； 大意， 主旨； 倾向， 趋势
anthropology	 n.  人类学
chaos	 n.  混乱
abundant	 adj.  大量的， 充足的， 丰富的
absorption	 n.  吸收； 全神贯注， 专心致志
pigment	 n.  颜料； 色素
forecast	 vt&n.  预报； 预测， 预料
deteriorate	 v.  变坏， 恶化； 变质
recognize	 vt.  认出， 识别； 认可
warehouse	 n.  仓库， 货栈
bisect	 vt.  把…二等分， 对半分
induce	 vt.  引起， 导致； 诱使， 劝诱； 感应
abnormal	 adj.  反常的， 变态的
wane	 vi. 衰退，减弱；减少；亏，缺 n.  月亏； 衰落
shrewd	 adj.  敏捷的， 机灵的； 精明的
baffle	 vt.  使困惑， 难住
molecule	 n.  分子
sewerage	 n.  排水系统； 污水处理； 污水
resign	 v.  辞去， 辞职； 放弃； 顺从， 听从
diligent	 adj.  勤奋的， 刻苦的， 勤勉的
seasoning	 n.  调味品， 调料
sophisticated	 adj.  老练的， 见多识广的； 精密的； 复杂的， 先进的； 高雅的， 有教养的
anomaly	 n.  反常， 异常； 异常的人
chivalrous	 adj.  有骑士精神的； 彬彬有礼的， 殷勤的
dateline	 n.  日期栏； 国际日期变更线
grazing	 n.  放牧； 牧场
reside	 vi.  居住于， 定居； 存在， 在于
ware	 n. 陶器；器皿；
aluminum	 n.  铝
prize	 adj.  应获奖的； 优秀的， 典范性的 vt. 珍视 n. 奖品；奖金；难能可贵的东西
accident	 n.  意外事件， 事故
marine	 adj. 海的；海生的；海上贸易的 n.  海军陆战队士兵
ravine	 n.  沟壑， 溪谷
incompatible	 adj.  不兼容的； 不协调的， 合不来的
routine	 adj.  例行的； 常规的 n. 例行公事；惯例，常规
distasteful	 adj.  令人反感的， 讨厌的； 味道不佳的
defense	 n.  防御， 防卫
tariff	 n.  关税； 价目表， 收费表
canal	 n. 运河，沟渠 vt.  开运河
enlist	 v.  征募； 从军， 参军； 谋取
convict	 vt. 定罪，宣告…有罪 n.  服刑囚犯
validate	 vt.  使有效， 使生效； 证实
dynamical	 adj.  动态的； 动力的； 充满活力的
surplus	 adj.  过剩的， 多余的 n. 过剩，剩余；盈余，顺差
grading	 n.  评分； 等级
decadent	 adj.  堕落的， 颓废的
gradient	 n.  坡度； 倾斜度， 斜率； 梯度
inhibit	 vt.  阻碍， 抑制
weathering	 n.  侵蚀， 风化
intimate	 adj. 亲密的，密切的；详尽的，精通的；个人隐私的 v.  暗示， 透露 n.  至交， 密友
disclose	 vt.  泄露， 透露； 揭发
religion	 n.  宗教； 宗教信仰； 宗派， 教派
diagram	 n.  图表； 图解
disparate	 adj.  迥然不同的
defiant	 adj.  反叛的， 挑衅的， 公然违抗的
tragedy	 n.  惨事， 灾难； 悲剧
oxide	 n.  氧化物
startling	 adj.  惊人的， 令人吃惊的
bison	 n.  美洲野牛
chart	 vt. 用图说明；制图；记录，跟踪；计划 n.  图表； 航海图
evoke	 vt.  唤起， 引起， 激起
attend	 v.  出席， 参加； 照料， 看管； 专心， 注意； 陪同
shovel	 vt. 铲；把…大量投入 n.  铲， 铁铲； 挖掘机
embryo	 n.  胚， 胚胎； 雏形
accounting	 n.  会计学； 会计
align	 v.  结盟； 排整齐； 校准； 使一致
secure	 adj. 安全的，有保障的；可靠的；确定的；
intoxication	 n.  醉， 醉酒； 极度兴奋
wasp	 n.  黄蜂
canopy	 n.  天篷； 罩盖， 遮篷； 天蓬似的树阴
neutron	 n.  中子
locomotive	 adj.  运动的； 移动的 n. 机车，火车头
tile	 vt. 铺瓦；铺地砖 n.  瓦片； 地砖
immense	 adj.  巨大的， 极大的
avenue	 n.  途径， 手段； 大街
vacate	 vt.  腾出， 空出； 离， 退
inherent	 adj.  固有的； 内在的
brush	 v. 刷，拂；轻碰 n.  画笔； 刷子； 轻碰； 小冲突
advantageous	 adj.  有利的
given	 adj. 规定的，特定的；假定的 prep.  考虑到， 鉴于
hay	 n.  干草
encroach	 vi.  侵占； 侵蚀， 蚕食
pronounced	 adj.  显著的； 明确的
perish	 v.  灭亡； 湮灭， 毁灭； 老化
definite	 adj.  清楚的， 确切的； 肯定的
stipulate	 v.  规定， 明确要求； 约定
wary	 adj.  小心翼翼的， 留神的， 警惕的
adapt	 v.  适合； 适应； 调整； 改编， 改写
batch	 v.  分批处理 n. 一批，一组，一群；一批生产的量
stagecoach	 n.  公共马车， 驿站马车
insufficient	 adj.  不足的， 不够的
intrinsic	 adj.  固有的， 本质的， 内在的
guilty	 adj.  有罪的， 犯罪的； 内疚的
measure	 v. 量，测量 n. 措施，办法
vestige	 n.  遗迹， 残余； 丝毫， 一点儿
interstellar	 adj.  星际的
luminous	 adj.  发光的， 明亮的
lash	 v. 将系牢，捆绑；猛烈打击；鞭打；猛烈抨击，严厉斥责 n.  鞭打； 睫毛
maritime	 adj.  海的， 海事的； 航海的
rattle	 v. 发出咔嗒声；使紧张，使恐惧 n.  咔嗒声； 拨浪鼓
warp	 v. 扭曲，弯曲，变形；
basement	 n.  地下室， 地窖； 建筑物的底部
injurious	 adj.  侮辱的， 诽谤的； 造成伤害的， 有害的
chant	 v.  唱圣歌； 反复呼喊 n. 圣歌；单调的吟唱；反复呼喊的话语
commune	 vi.  与…亲密地交谈 n.  群体， 公社
babble	 v.  胡言乱语； 含糊不清地说； 喋喋不休
focalize	 v.  调节焦距； 使聚焦； 使集中
ceremonial	 adj. 礼仪的，礼节的 n.  礼仪， 礼节
toady	 vi. 谄媚，奉承 n.  谄媚者， 马屁精
squabble	 vi. 发生口角，
rustic	 adj.  乡村的； 淳朴的； 用粗糙木材制作的
lava	 n.  岩浆， 熔岩
minimal	 adj.  最小的； 最低限度的
ecology	 n.  生态； 生态学； 生态环境
venomous	 adj.  有毒的， 分泌毒液的； 恶意的， 狠毒的
courageous	 adj.  勇敢的， 有胆量的
prudent	 adj.  谨慎的； 深谋远虑的
secrete	 vt.  分泌； 藏匿， 躲藏
steady	 adj. 牢固的；稳定的；沉稳的，
enclose	 vt.  围住； 把…装入
overview	 n.  梗概， 概述
disease	 n.  疾病； 弊端， 恶疾
notwithstanding	 ad&prep.  虽然， 尽管如此
volatile	 adj.  挥发性的， 易挥发的； 不稳定的； 反复无常的
ideomotor	 adj.  观念运动的
generic	 adj.  种类的， 属的； 一般的， 普通的
endorse	 vt.  签名； 宣传， 代言； 签署； 赞同， 支持
alike	 adv. 一样地，相似地；同样程度地 adj.  相同的， 相似的
genius	 n.  天才； 天赋
infrastructure	 n.  基础设施， 基础结构
typical	 adj.  典型的， 有代表性的
embargo	 n. 禁止贸易令；
wither	 v.  枯萎， 凋谢； 衰退； 萎缩； 破灭
quotation	 n.  引文， 引语， 语录； 报价
nocturnal	 adj.  夜行性的； 夜间发生的
corrosion	 n.  腐蚀， 侵蚀
notorious	 adj.  臭名昭著的， 声名狼藉的
illustrative	 adj.  作为例证的； 用做说明的； 解释性的
hydrogen	 n.  氢
superimpose	 vt.  使重叠， 使叠加； 添加
infant	 adj.  婴儿的； 初期的 n. 婴儿，幼儿
artifact	 n.  人工制品， 手工艺品
carbon	 n.  碳
dinosaur	 n.  恐龙
turnpike	 n.  收费公路
deprive	 vt.  使失去， 剥夺
tantalizing	 adj.  诱人的
swoop	 v.  猛扑； 突然袭击 n. 突然行动
floral	 adj.  花的， 像花的； 饰以花的， 绘有花的
pest	 n.  害虫； 令人讨厌的人
swoon	 vi&n.  昏厥， 昏倒； 痴迷
magnesium	 n.  镁
infancy	 n.  幼年； 初期
heritage	 n.  遗产； 传统
supreme	 adj.  至高无上的
philosophy	 n.  哲学； 哲学体系， 思想体系； 人生观， 人生哲学
slope	 v.  倾斜 n. 斜坡，斜面；斜度
outrageously	 adv.  令人不能容忍地； 肆无忌惮地
lapse	 vi.  期满终止， 失效； 衰退； 背弃 n. 失误；失足
regenerate	 v.  复兴， 振兴； 再生
latent	 adj.  潜在的， 隐伏的； 潜伏的； 休眠的
forestall	 vt.  预防， 预先阻止； 先发制人
terrific	 adj.  极好的； 非常的， 极度的； 可怕的
stanza	 n.  节， 段
niche	 n.  生态位； 壁龛
worship	 n&v.  祭拜； 崇拜， 崇敬
lawn	 n.  草地， 草坪； 操场
infection	 n.  传染， 感染； 传染病
ponderous	 adj.  笨重的； 笨拙的； 沉闷的
stubborn	 adj.  顽固的， 倔强的； 难对付的
imprecise	 adj.  不精确的； 不严密的
formulate	 vt.  阐明， 确切表达； 规划， 构想； 制定
glorify	 vt.  吹捧， 美化； 赞美， 赞扬
emigrate	 v.  移民， 移居国外
sinuous	 adj.  蜿蜒的； 迂回的
triangle	 n.  三角形； 三角形物体
alien	 n. 外星人；组织之外的人；外国人，
layer	 n.  层， 层次
linguistic	 adj.  语言的， 语言学的
sanitation	 n.  卫生； 卫生设施， 卫生设备
elite	 adj. 卓越的，精锐的 n.  精英
ornament	 n.  装饰 vt.  装饰， 点缀
chubby	 adj.  丰满的， 圆胖的
ivory	 n.  象牙； 象牙制品； 象牙色， 乳白色
anomalous	 adj.  异常的； 不规则的
deficient	 adj.  不足的， 缺乏的； 有缺陷的， 不完善的
henceforth	 adv.  从此以后
preponderance	 n.  优势
barrel	 n.  桶
chain	 n. 链； vt.  用链条拴住； 联号， 连锁店
efficient	 adj.  有效的， 有效率的； 有能力的， 能胜任的
unify	 vt.  统一， 联合
consistent	 adj.  一致的； 稳定的； 调和的； 始终如一的
reverse	 v. 反转；彻底转变，颠倒；撤销，废除；交换； adj.  相反的
ravage	 vt.  毁坏； 抢劫， 掠夺
barren	 adj.  贫瘠的， 荒芜的； 不结果实的， 不育的
fungi	 n.  [fungus的复数]真菌
permanent	 adj.  持久的， 永久的； 固定不变的
foster	 v. 鼓励，促进，助长；培养，抚育；领养 adj.  代养的
receptacle	 n.  容器； 插座
summarize	 v.  概括， 总结
facility	 n. 设施；设备；容易；灵巧
gregarious	 adj.  群居的； 合群的， 爱社交的
beam	 v. 面露喜色；发射，播送；照射 n.  束， 波束， 光线； 梁； 笑容， 喜色
beak	 n.  鸟嘴， 喙
fiction	 n.  小说； 虚构， 编造
bead	 n.  珠子； 小滴
replace	 vt.  替换， 取代； 归还， 把…放回原处
aviation	 n.  航空， 航空学； 飞行
appointment	 n.  约会， 约定； 任命， 委派； 职位
synthesize	 vt.  合成； 综合
trek	 n&v.  艰苦跋涉
squash	 v. 压碎，挤压；挤进，塞入；制止 n.  软式墙网球， 壁球； 果汁汽水
major	 vi.  主修， 专攻 adj. 较大的；主要的；主修的 n. 专业
playwright	 n.  剧作家
interrupt	 v.  打扰； 中断； 阻碍
beat	 v. 打拍子，指挥；敲打；打败，胜过；跳动 adj.  疲惫的 n. 跳动；节拍，节奏；有规律的敲击
feasible	 adj.  可行的， 行得通的
prescribe	 v.  开处方； 规定； 指示
proofread	 v.  校对， 校正
potential	 adj.  潜在的； 可能的 n. 潜能，潜力
lounge	 vi.  懒洋洋地站 n. 等候室，休息室
gross	 adj. 总的，毛的；粗俗的，粗野的；令人不快的 vt. 总收入为 n. 一罗；
resist	 v.  抵抗； 耐， 抗
archive	 n. 档案室 vt.  存档
disarm	 v.  解除武装； 裁军； 消除， 消解
extrapolate	 v.  外推； 推断， 推知
stimulate	 vt.  刺激； 激励， 激发
reciprocity	 n.  互惠， 互助； 互惠主义
eclipse	 vt. 遮住光；使相形见绌 n.  日食， 月食
square	 adj. 正方形的；成直角的，方的；平方的 n. 正方形；广场；平方 vt.  使成正方形； 求平方； 使打成平局
careless	 adj.  粗心的， 疏忽的； 无忧无虑的； 不关心的， 冷漠的
soak	 v.  浸泡， 浸湿， 浸透
counteract	 vt.  消除； 抵消
deserted	 adj.  荒废的， 空无一人的； 被离弃的， 被遗弃的
commute	 v.  上下班往返， 经常往返； 代偿； 减刑
sustain	 vt.  保持， 维持； 支持， 支撑； 经受， 承受
anarchist	 n.  无政府主义者
classify	 vt.  分类； 分等
altitude	 n. 海拔，高度；
request	 n&vt.  要求， 请求
colony	 n.  群， 群体； 殖民地； 聚居地
wagon	 n.  四轮马车； 货车
numeric	 adj.  数字的
debut	 n.  首次演出； 初次亮相
uphold	 vt.  支持， 维护； 维持
dimension	 n. 维，元；尺寸；方面；特点；
nostalgia	 n.  思乡病， 乡愁； 怀旧之情， 恋旧
deserve	 v.  应得， 值得
process	 vt. 加工，处理 n.  过程； 程序， 手续； 工序， 制作法
artisan	 n.  工匠， 手艺人
sprout	 v. 发芽，抽条，生长；迅速出现，涌现出 n.  新芽， 嫩枝， 苗
restore	 vt.  恢复； 修复； 归还， 交还
viscous	 adj.  黏滞的， 黏性的
nostalgic	 adj.  思乡的； 怀旧的
alternative	 adj.  可供替代的； 非传统的 n. 可供选择的事物；选择的自由，选择的余地
banner	 n.  横幅
encounter	 vt&v.  偶然碰到； 遭遇
soda	 n.  苏打， 纯碱
landslide	 n.  山崩， 塌方； 压倒性胜利
prairie	 n.  大草原
approve	 v.  批准； 赞成
chafe	 v.  擦破， 擦痛； 恼怒， 焦躁
chew	 v.  咀嚼； 思量， 熟思
domicile	 n.  住处， 住所
pedestrian	 adj.  徒步的； 缺乏想象力的 n. 步行者，行人
hurry	 v. 使加快，催促；赶快，匆忙 n.  急忙， 匆忙， 仓促
account	 v. 说明，解释；占 n.  解释， 描述， 叙述； 账目； 账户
radioactive	 adj.  放射性的， 有辐射的
innocent	 adj.  天真的； 清白的； 无恶意的
alphabet	 n.  字母表
stride	 n. 大步；步法；
advance	 v. 前进，向前移动；发展，进步；促进；预付 adj.  预先的； 先头的 n. 前进；进展；预付
appreciate	 vt.  赏识； 鉴赏， 欣赏； 感激
bleach	 v.  变白， 漂白 n. 漂白剂
diverse	 adj.  不同的； 多样的
rally	 v. 集合，召集；恢复，重新振作 n.  集会， 大会
soft	 adj.  柔软的； 柔和的； 不强烈的； 心肠软的； 软性的
fictitious	 adj.  虚构的； 假的； 假装的， 虚伪的
prime	 adj. 主要的；最初的；最好的；首先的 n. 全盛时期，盛年 vt.  使准备好； 事先指点
intellect	 n.  智力， 理解力； 知识分子
amble	 vi.  缓行， 漫步
loyal	 adj.  忠诚的， 忠贞的
preference	 n.  偏爱； 优先
mainstream	 n.  主流， 主要倾向； 主流思想
opportunity	 n.  机会， 时机
dissolute	 adj.  放荡的， 放纵的， 道德沦丧的
court	 n. 法院，法庭；宫廷，朝廷；球场 vt.  献殷勤， 讨好； 招致； 求爱
chapel	 n.  教堂； 祈祷室
distort	 vt.  弄歪； 扭曲， 歪曲
subsidiary	 adj.  次要的； 辅助的， 附设的； 附属的 n. 子公司；附属机构；支流
venture	 v.  敢于去； 冒险 n. 冒险，投机；投机活动，风险项目
interrelate	 v.  相互关联， 紧密联系
corrosive	 adj.  腐蚀的
enthusiasm	 n.  热情； 积极性； 热衷的事物
discern	 vt.  洞悉； 识别
propensity	 n.  倾向， 癖好
entreat	 v.  乞求， 恳求， 请求
flexible	 adj.  易弯曲的； 柔韧的； 灵活的， 可变通的
agile	 adj.  敏捷的， 灵活的
replenish	 vt.  添加， 补充
hoe	 vt. 用锄头锄 n.  锄头
amenable	 adj.  顺从的， 服从劝导的； 有服从义务的
depict	 vt.  描写， 描述， 描绘
sustainable	 adj.  不破坏生态平衡的， 可持续的； 足可支撑的； 可忍受的
hop	 v. 单足跳行；齐足跳行；跳上 n.  蹦跳； 短程旅行
secede	 vi.  正式脱离， 退出
characteristic	 adj.  特有的； 典型的 n. 特性，特征
interior	 adj. 内部的；内地的 n.  内部； [the ～]内陆
interweave	 v.  交织， 编结
rouse	 vt.  唤起， 唤醒； 激起， 鼓舞； 激怒
capability	 n.  能力； 性能； 容量； 潜质
spark	 v. 激发，引发，触发；
integral	 adj.  构成整体所必需的， 不可或缺的； 完整的
comet	 n.  彗星
assembly	 n.  集会； 集会者； 装配， 安装； 立法机构， 议会
smelting	 n.  冶炼， 熔炼
spare	 adj. 备用的；空闲的 vt. 抽出；免除 n.  备用品
chip	 v. 削下 n.  碎片； 芯片
replicate	 v.  复制； 再制， 再生
emotional	 adj.  感情的， 情绪的； 引起情感的； 易动感情的
noticeable	 adj.  明显的， 值得注意的
assemble	 v.  集合； 装配
hibernation	 n.  冬眠； 休眠， 蛰伏
transition	 n.  过渡， 过渡时期； 转变
march	 v.  前进， 进发； 行进， 齐步走； 游行示威 n. 行进，行军；示威游行；进行曲；进行，进展
blast	 v. 爆炸；发出尖响；猛烈抨击 n.  一阵； 爆炸； 冲击波； 响声
repel	 v.  击退， 驱逐； 排斥； 抵制， 拒绝； 使反感， 使厌恶
publicize	 vt.  宣传， 推广， 宣扬
underscore	 vt.  强调； 在…之下画线 n.  底线
seashore	 n.  海岸， 海滨
series	 n.  系列， 连续； 连续剧
cultivate	 vt.  耕种； 培养
thrive	 vi.  茂盛； 茁壮成长； 兴旺， 繁荣
imaginative	 adj.  富有想象力的； 创新的
treadmill	 n.  踏车； 枯燥乏味的工作
represent	 vt.  代表； 表现； 描绘； 象征
dispatch	 vt&n.  分派， 派遣； 发送
corpus	 n.  文集， 文献， 汇编； 语料库
inconvenient	 adj.  不便的； 让人不舒服的
dramatize	 v.  改编成戏剧； 戏剧化， 戏剧性地表现
absurd	 adj.  可笑的， 荒唐的
prior	 adj.  在…前的； 优先的
trait	 n.  特性， 特点
landmark	 n.  路标， 地标； 〈喻〉里程碑
vanish	 vi.  消失； 灭绝
vault	 v.  跳过 n. 拱顶；金库，保险库；撑杆跳
concave	 adj.  凹的
dolphin	 n.  海豚
enactment	 n.  制订， 颁布； 法律， 法规
planet	 n.  行星
ornithology	 n.  鸟类学
prerequisite	 adj.  必备的， 作为先决条件的 n. 先决条件，前提
count	 v. 数，计算；算入；看做，认为；值得考虑，有重要意义 n.  计数， 计算； 总数； 罪状
creep	 vi.  缓慢行进； 爬行； 悄悄地移动
deciduous	 adj.  落叶的； 非永久的， 短暂的
scholar	 n.  学者； 奖学金获得者
contradictory	 adj. 对立的，矛盾的；反驳的 n.  对立物； 矛盾因素
accompany	 vt.  为…伴奏； 陪伴， 陪同； 伴随， 和…一起发生
immediate	 adj.  即刻的； 当前的； 最接近的； 紧接的， 紧靠的
perspicuous	 adj.  明白易懂的； 明了的
beneficial	 adj.  有益的， 有利的
blame	 vt. 谴责，责备 n.  过失， 责备； 责任
confusion	 n.  困惑； 混乱， 混淆
platitude	 n.  陈词滥调， 老生常谈
auditorium	 n.  礼堂； 观众席
session	 n.  会议； 开庭； 开庭期； 一节
tactile	 adj.  触觉的； 有触觉的； 可感触的
extrinsic	 adj.  外来的， 外在的， 非本质的
bland	 adj.  平淡的， 乏味的； 清淡的； 沉稳的
microbe	 n.  微生物， 细菌
reception	 n.  招待会； 反响； 接纳， 接待； 接收
sole	 adj. 单独的；唯一的 n.  鞋底， 脚底
lumber	 v. 笨拙地移动；迫使担负 n.  木材， 木料； 杂物
sledding	 n.  进展
solo	 adv. 独自，单独地 adj. 单独的；独唱的，独奏的 n.  独唱， 独奏， 独舞
monitor	 vt. 监控；调节 n.  显示器； 监视器； 班长
tuition	 n.  学费； 教学， 讲授
Fahrenheit	 adj.  华氏温度的 n. 华氏温度计
tangible	 adj.  可触摸的， 可感知的； 明确的， 确凿的； 有形的， 实际的
congest	 v.  充满， 拥塞； 充血
postage	 n.  邮资， 邮费
tame	 adj. 驯服的；沉闷的，乏味的 vt.  驯化； 控制并利用
cavern	 n.  大洞穴， 大山洞
material	 adj.  物质的， 身体上的； 重要的； 实质性的， 客观存在的 n. 材料，原料；素材，资料
adjoin	 v.  贴近， 紧挨， 毗连
spectacular	 adj. 壮观的，引人注目的 n.  壮观的场面； 壮观的演出
peculiar	 adj.  独特的； 罕见的； 奇怪的， 古怪的
hue	 n.  颜色； 色度， 色调； 信仰， 观点； 形式， 样子
idiom	 n.  习惯用语； 术语； 风格， 特色
diplomat	 n.  外交官； 有手腕的人
landmass	 n.  大片陆地
president	 n.  总统， 校长， 主席
muscular	 adj.  肌肉的； 肌肉发达的； 强健的， 强壮的
staple	 n. 主要产品；原材料；主食；订书钉
memo	 n.  备忘录
artifice	 n.  诡计， 奸计； 策略
collaborate	 v.  协作， 合作； 勾结， 通敌
collaborator	 n.  合作者， 协作者； 通敌者
superficial	 adj.  肤浅的， 浅薄的； 表面的， 外表的， 外层的
executive	 adj.  执行的， 实施的； 行政的 n. 执行者；管理人员；行政负责人
melt	 v.  融化， 熔化； 溶化； 消散
hook	 v. 连接到无线电设备；勾住 n.  钩， 吊钩； 钩状物
stadium	 n.  竞走场； 运动场
refrigerate	 vt.  冷冻， 冷藏； 使冷却， 使变冷
casualty	 n.  伤亡事故； 伤亡
spatial	 adj.  空间的
gauge	 n. 标准，规格；测量仪表，计量器 vt.  测量， 度量
belt	 n.  地带， 地区； 腰带， 皮带； 带状物
ridicule	 vt. 嘲笑，奚落 n.  嘲笑， 奚落
protest	 v.  抗议， 反对 n.  抗议， 反对
sensitive	 adj.  敏感的； 灵敏的
vacant	 adj.  空的； 闲置的； 茫然的， 空虚的
hoof	 n.  蹄
afford	 v.  买得起， 担负得起； 冒险做； 提供， 给予
underground	 adv.  在地下， 往地下； 秘密地， 不公开地 adj.  地下的； 秘密的， 不公开的 记 组合词： under + ground → 地下的
sieve	 n. 筛子；漏勺 vt.  筛， 滤
appease	 vt.  平息； 安抚， 抚慰； 绥靖
reddish	 adj.  微红的
impede	 vt.  妨碍， 阻碍， 阻止
acting	 adj. 代理的 n.  演戏， 表演
machinery	 n.  〈总称〉机器， 机械； 机构
shield	 n. 防护物；盾 vt.  保护
anatomy	 n.  解剖； 解剖构造； 剖析
deliver	 v.  传送， 传递； 发表， 宣布； 履行诺言； 移交， 交出； 接生
instantaneous	 adj.  瞬间的， 即刻的， 立即的
phenomenon	 n.  现象， 迹象； 非凡的人
quarterly	 adv. 按季度，一季一次 adj.  季度的， 每季一次的 n. 季刊
notify	 vt.  通报
smirk	 vi.  假笑， 得意地笑
barbecue	 v.  在烤架上烧烤 n. 烧烤野餐；金属烤架
abbey	 n.  修道院； 大教堂
alienable	 adj.  可转让的
buoyant	 adj.  有浮力的， 漂浮的； 轻快的， 快乐的； 繁荣的； 看涨的
intrepid	 adj.  勇敢的， 无畏的
generalize	 v.  概括， 归纳； 推广
accredit	 vt.  委任， 授权； 把…归于； 正式认可
nourish	 vt.  滋养； 养育
faucet	 n.  龙头， 旋塞
lengthen	 v.  延长， 变长
unconsolidated	 adj.  松散的， 疏松的
strike	 v. 碰，撞，撞击；侵袭；突然想到；给…以深刻印象；罢工；敲响 n.  罢工； 袭击
subdue	 vt.  制服， 征服； 抑制， 克制
allege	 vt.  断言， 宣称
positive	 adj.  肯定的； 积极的； 确凿的； 自信的， 乐观的； 正电的
trigger	 vt. 引发，导致 n.  扳机
segregate	 vt.  隔离， 使分开
maize	 n.  玉米
meticulous	 adj.  细心的， 小心翼翼的
rental	 adj. 租用的；出租的 n.  租金额； 租赁， 出租
prospect	 v.  勘探， 勘察 n. 前景，前途；可能性；景象；期望
radar	 n.  雷达
withhold	 vt.  拒绝给， 不给； 抑制； 忍住
kinetic	 adj.  运动的， 运动引起的； 动力学的
specialize	 v.  专攻； 专用于
rotate	 v.  转动， 旋转； 轮流
instance	 n.  例子， 事例
consonant	 adj. 和谐的，协调的，符合的 n.  辅音
engulf	 vt.  吞没
inheritance	 n.  遗产， 继承物； 继承； 遗传
reptile	 n.  爬行动物， 爬虫类； 卑鄙的人
cassette	 n.  盒式录音带
receptive	 adj.  接受得快的； 善于接受的， 能接纳的
blade	 n.  刀刃， 刀片； 叶片； 草叶； 桨叶
solution	 n.  溶液； 解答， 解决
foreshorten	 vt.  用透视法缩小； 缩短， 节略
diverge	 vi.  分开， 叉开； 分歧； 偏离
opponent	 adj.  对立的， 反对的， 对抗的 n. 敌手，对手，反对者
accelerate	 v.  加快， 加速
emblem	 n.  徽章； 标记， 象征
regardless	 adv.  不顾， 不管
confiscate	 vt.  没收， 充公， 征用
filial	 adj.  子女的； 子孙后代的
barge	 v. 冲撞，乱闯 n.  驳船
turtle	 n.  龟， 海龟
meteorology	 n.  气象学
occur	 vi.  发生， 出现； 存在于
illustrate	 vt.  说明， 解释； 加插图于； 显示…存在
scuba	 n.  水中呼吸器， 水肺
definitive	 adj. 确定的，最后的，决定性的；
breeze	 vi.  飘然移动 n. 微风，和风
trash	 n. 无价值之物，废物；拙劣的文学作品；没用的人 vt.  捣毁， 破坏
horn	 n.  角； 号角， 喇叭
troupe	 n.  剧团； 马戏团； 芭蕾舞团
transit	 n.  运输， 运送； 中转； 转变； 交通运输系统
sore	 adj. 疼痛的；恼火的 n.  疮口， 痛处
position	 vt. 安置 n.  位置； 职位； 立场； 姿势， 姿态； 见解
curtail	 vt.  缩短， 缩减， 削减
glow	 vi. 发光；发红，发热；洋溢 n.  暗淡的光； 容光焕发； 喜悦
patent	 adj.  有专利的； 显而易见的 vt. 取得专利权 n.  专利权
sheath	 n.  鞘， 外壳； 套； 护皮； 紧身连衣裙
pollen	 n.  花粉
remodel	 vt.  重新塑造， 改造； 改编； 改变
groove	 n.  沟； 槽； 唱片上的纹路
certificate	 n.  证书， 证明书； 文凭， 结业证书
dispersal	 n.  疏散； 散布， 散开
quantum	 n. 量子
racket	 n.  球拍； 喧嚷， 吵闹； 勒索， 诈骗
mess	 n. 肮脏，杂乱；混乱，困境 vt.  弄脏， 弄乱； 搞糟
sour	 v. 变酸；变馊；变坏，恶化 adj.  酸的； 馊的； 乖戾的， 尖酸刻薄的； 酸痛的
transform	 vt.  使变形； 改造， 改革； 转换
magnitude	 n.  巨大； 重要性； 星等， 星球的亮度
genuine	 adj.  真的， 非人造的； 真诚的， 诚实的
agitate	 v.  鼓动， 煽动； 激怒， 使激动， 使不安； 搅动
microwave	 n.  微波； 微波炉
gorilla	 n.  大猩猩
immune	 adj.  免疫的， 有免疫力的； 不受影响的； 免除的， 豁免的
brochure	 n.  小册子， 说明书
downside	 n.  缺点， 负面； 底侧； 下降趋势
equation	 n.  等式， 方程式； 等同， 相等； 均衡
impressive	 adj.  给人深刻印象的； 感人的
prospector	 n.  勘探者， 采矿者
compound	 n. 化合物， vt.  使恶化， 使加重； 混合
discredit	 vt. 使丧失声誉；使怀疑 n.  名誉丧失
extraordinary	 adj.  特别的； 非凡的
spawn	 v. 产卵；产生，促成 n.  卵
sensory	 adj.  感觉的， 感官的
puzzle	 n. 难题，谜 vt.  迷惑， 使困惑
mere	 adj.  仅仅的， 纯粹的
suburb	 n.  市郊， 郊区
taut	 adj.  绷紧的； 肌肉结实的； 结构严谨的， 紧凑的
simplify	 vt.  简化， 使简单， 使单纯
lubricant	 n.  润滑剂
glue	 vt. 胶合，黏合；紧附于 n.  胶， 胶水
orbital	 adj.  轨道的
solder	 vt. 焊接 n.  焊料， 焊锡
envelop	 vt.  包围
firm	 adj.  结实的； 坚定的， 坚决的 n. 公司
reflect	 v.  反射， 映现； 显示， 表明； 仔细考虑， 深思
adventitious	 adj.  偶然的， 偶发的
ongoing	 adj. 正在进行的；不间断的；继续存在的 n.  前进， 发展
outfit	 n.  全套装备； 全套服装
ignorant	 adj.  无知的， 愚昧的； 无知觉的
extort	 vt.  勒索， 敲诈， 强夺
trample	 v.  踩碎； 践踏， 摧残
negligible	 adj.  可以忽略的， 微不足道的； 无关紧要的
setback	 n.  挫折， 阻碍； 倒退
spray	 n. 浪花；飞沫；
distinguish	 v.  区别， 辨别； 使有别于， 成为…的特征； 看清， 听出； 使杰出， 使著名
primordial	 adj.  原始的， 最初的； 基本的
husbandry	 n.  耕种， 务农， 农牧业
haircut	 n.  理发
decorative	 adj.  装饰性的， 做装饰用的
pointed	 adj.  尖的， 尖角的； 尖锐的， 尖刻的
enthusiastic	 adj.  热情的， 热心的
elongate	 v.  延长， 伸长
symptom	 n.  症状； 征兆
fray	 vi. 磨损，磨破；烦躁，恼火 n.  争斗
thereby	 adv.  因此， 从而
wield	 vt.  支配， 掌权， 行使
disastrous	 adj.  灾难性的
impulse	 n.  冲动， 一时的念头； 刺激， 推动力； 脉冲
crystallize	 v.  结晶； 明确
subspecies	 n.  亚种
shower	 v.  淋浴； 下阵雨； 洒落， 纷纷降落； 抛撒 n. 阵雨，暴雨；淋浴；一阵，一大批
infectious	 adj.  传染性的， 传染病的； 有感染力的
concur	 v.  同时发生； 意见一致
nevertheless	 adv.  然而， 不过
prominent	 adj.  卓著的， 杰出的； 突起的， 凸出的
insulin	 n.  胰岛素
ironic	 adj.  说反话的， 讽刺的； 出乎意料的
fundamental	 adj. 基础的，基本的，根本的 n.  基本原则； 基础
hieratic	 adj. 僧侣的；
entitle	 vt.  使…有权； 给题名
monotony	 n.  单调， 千篇一律
outline	 n.  轮廓； 概要， 大纲 vt.  描绘； 略述
counselor	 n.  顾问； 律师
fade	 v.  褪色； 凋谢； 逐渐消失
overdue	 adj.  过期未付的， 逾期的； 过度的， 过火的； 迟到的， 延误的
nominal	 adj.  名义上的； 微不足道的
excess	 adj.  过量的； 额外的 n.  过度， 超过
perspective	 n.  展望； 观点， 看法； 远景； 透视图， 透视法； 前途
galaxy	 n.  星系； [G-]银河系， 银河； 群英
invade	 v.  侵入， 侵略； 侵扰
intervening	 adj.  介于中间的， 发生于期间的
clump	 v.  聚集， 成群； 以沉重的脚步行走 n. 丛，簇，束；块，团；群，组
thorough	 adj.  彻底的； 详尽的； 一丝不苟的
democracy	 n.  民主政体， 民主制度； 民主国家； 民主精神
peninsula	 n.  半岛
evolve	 v.  发展； 进化
congratulation	 n.  祝贺， 道喜
abandon	 vt. 离弃，放弃 n.  放纵， 放任
extol	 vt.  赞美， 颂扬
household	 adj. 家庭的，家用的；家喻户晓的 n.  家庭
adverse	 adj.  负面的； 不利的； 逆的
bulletin	 n.  新闻简报； 公告， 布告； 简报
ratio	 n.  比， 比率
junction	 n.  交叉点， 汇合处； 连接， 接合
electrolysis	 n.  电解作用； 电解术
bandanna	 n.  色彩鲜艳的围巾
instinct	 n.  本能， 直觉； 生性， 天性
gourmet	 adj. 美味的 n.  美食家
reputation	 n.  名声， 声望， 名誉
spike	 n.  长钉， 大钉； 猛增， 急升
shrub	 n.  灌木
presentation	 n.  提供， 显示； 介绍， 陈述； 赠送； 表演
genesis	 n.  起源， 开端
subliminal	 adj.  下意识的， 潜意识的
engrave	 vt.  雕刻； 铭刻
tavern	 n.  小旅馆， 客栈； 小酒店
glimmer	 vi.  发微光； 隐约出现 n. 闪烁的微光；隐约的迹象；一丝，一线
awkward	 adj.  别扭的； 笨拙的； 难处理的， 棘手的； 难操纵的
adhesive	 adj.  带黏性的 n. 胶合剂
monumental	 adj.  纪念碑的； 不朽的
ruin	 vt. 破坏，毁灭；使破产 n. 毁灭，毁坏；
spill	 v. 溢出，溅出；蜂拥而出 n.  溢出， 泄漏
celebrate	 v.  赞美； 庆祝
cradle	 n.  摇篮； 发源地
abut	 v.  邻接， 毗邻
folkway	 n.  社会风俗
mountainous	 adj.  多山的； 巨大的
laboratory	 n.  实验室， 研究室
geometric	 adj.  几何的， 几何学的
Latin	 adj. 拉丁的；拉丁语的 n.  拉丁语
inspect	 vt.  检查， 视察
campaign	 vi. 竞选；参加战斗 n.  竞选活动； 活动； 战役
vital	 adj.  生死攸关的； 至关重要的； 精力充沛的， 有活力的
conflict	 vi.  冲突； 不一致； 争论 n.  冲突； 争论
engraving	 n.  雕刻术， 刻版术； 版画
rough	 adj. 粗糙不平的；粗暴的；艰难的 n.  高低不平的地面
lawsuit	 n.  诉讼
sequential	 adj.  序列的； 连续的； 随之而来的
detect	 vt.  发现， 察觉； 探测； 查明
derivative	 adj. 派生的，引出的；无创意的 n.  派生词， 衍生词； 派生物
amateur	 adj.  业余爱好的； 业余的 n. 业余爱好者；外行
rodeo	 n.  牛仔竞技表演
assistance	 n.  帮助， 援助
commerce	 n.  贸易， 商业； 交往， 交流
canvass	 v.  游说， 拉选票； 细查
gulf	 n.  海湾； 分歧， 隔阂， 鸿沟
causal	 adj.  原因的， 因果关系的
tectonics	 n.  构造地质学
wonder	 v. 诧异；纳闷，想知道 n.  惊奇， 惊异； 奇迹， 奇事
mansion	 n.  公寓， 府邸； 大厦
gull	 n.  鸥， 海鸥
summary	 adj.  概括的， 概要的； 即刻的， 立即的 n. 摘要，概要
illusory	 adj.  虚幻的， 幻觉的
nickel	 n.  镍； 五分镍币
accustom	 vt.  使习惯于
entail	 vt.  牵涉； 使必要， 需要
inferior	 adj. 劣等的，较差的；次要的；级别低的 n.  下级， 下属， 晚辈
dramatic	 adj.  戏剧的； 引人注目的； 突然的， 巨大的； 戏剧性的
spinet	 n.  小型立式钢琴
mosquito	 n.  蚊子
parasite	 n.  寄生物； 食客
artificial	 adj.  人工的， 人造的， 假的； 矫揉造作的， 假装
deficiency	 n.  不足， 缺乏
imaginary	 adj.  想象中的， 虚构的， 假想的
removal	 n.  除去； 移动， 搬迁
comment	 v&n.  评论； 注释
vaporize	 v.  蒸发， 汽化
transcend	 vt.  超越
spiny	 adj.  长满刺的， 多刺的， 带刺的； 棘手的
chronological	 adj.  按年代顺序排列的， 年代学的
humanitarian	 adj. 人道主义的，慈善的 n.  人道主义者， 博爱者， 慈善家
employ	 vt. 用，使用；雇用 n.  受雇， 雇用
surcharge	 n. 额外费用，增收费，附加费 vt.  收取额外费用
sturdy	 adj.  健壮的， 结实的； 稳固的； 顽强的
fable	 n.  寓言； 谎言
balcony	 n.  阳台； 楼厅， 楼座
instill	 vt.  慢慢灌输； 逐渐培养
consist	 vi.  在于， 存在于； 由…组成， 由…构成
palatable	 adj.  美味的， 可口的； 合意的， 认可的
compatible	 adj.  协调的， 一致的； 兼容的； 能和睦相处的
critic	 n.  评论家， 批评家； 吹毛求疵者
tenement	 n.  廉租公寓
photosynthesis	 n.  光合作用
sidebar	 n.  补充报道
crest	 v.  达到顶点 n. 顶峰，顶点；浪尖；羽冠
profession	 n.  职业； 同行； 专业； 宣称
deplore	 vt.  悲叹， 哀叹， 公开谴责
compress	 v.  压缩； 缩短； 浓缩
grimly	 adv.  冷酷地； 严肃地； 坚定地
cherish	 vt.  爱护， 珍爱； 怀有， 抱有
outlive	 vt.  比…长命， 比…耐久
patronize	 v.  以高人一等的态度对待； 光顾； 赞助， 资助
eminent	 adj.  显著的， 杰出的
underneath	 adv.  在下面 prep. 在…下面
spectrum	 n.  谱， 光谱， 频谱； 范围， 幅度
prolong	 vt.  拉长， 延长
refund	 n.  偿还额； 退款 vt.  退还， 偿付
distress	 n. 痛苦，忧伤；贫困，窘迫；遇难 vt.  使痛苦， 使悲伤， 使忧虑
remnant	 n.  残余物； 布头； 遗迹
broadcast	 v. 广播，播放 n.  广播， 广播节目
compressible	 adj.  可压缩的
steep	 adj. 陡的，陡峭的；急剧的；过高的 v.  浸泡； 沉浸
classical	 adj.  经典的， 古典的
immunity	 n.  免疫力； 保护； 免除， 豁免
privilege	 vt. 给予特权，特别优待 n.  特权， 特殊待遇； 特殊利益， 优惠； 荣耀， 荣幸
shroud	 vt. 隐藏，遮蔽 n.  裹尸布， 寿衣； 遮蔽物
substitute	 v.  代替 n. 代替者，代替品
criss-cross	 v. 构成十字形图案；交叉往来 adj.  纵横交错的
uniform	 adj.  统一的； 均匀的 n. 制服
choppy	 adj.  波浪起伏的， 不平静的； 不连贯的， 支离破碎的
blaze	 vi.  燃烧， 着火； 发光， 放光彩； 怒视 n. 火焰；光辉，强烈的光；迸发
bountiful	 adj.  慷慨的； 大量的， 充足的
meager	 adj.  不足的， 贫乏的； 消瘦的
scatter	 v.  使分散， 驱散， 散开； 撒播
violate	 vt.  违反， 违背； 亵渎； 侵犯， 干扰
methanol	 n.  甲醇
steer	 v. 驾驶，为…操舵；引导 n.  食用公牛
pheromone	 n.  信息素
collective	 adj. 集体的，共同的 n.  集体， 共同体
buddy	 n.  密友； 搭档， 伙伴
undergo	 vt.  经历； 遭受
outlying	 adj.  边远的， 偏僻的； 无关的， 题外的
delineate	 vt.  描绘， 描述； 解释
agency	 n.  代理处， 经销机构； 专门机构
coupon	 n.  礼券， 优惠券； 配给券， 票证
multitude	 n.  大量， 众多； 群众， 民众； 人群
inhabit	 vt.  居住于， 栖居于
innate	 adj.  天生的， 固有的； 内在的， 直觉的
siege	 n.  包围， 围困； 封锁
gratify	 vt.  使满意， 使高兴； 满足
fascinating	 adj.  迷人的， 醉人的
abstract	 adj. 抽象的；抽象派的 n.  摘要， 梗概 vt.  做…的摘要； 提取
agenda	 n.  议程， 议程表
liquid	 adj. 液体的，液态的，流体的；清澈的；流畅的 n.  液体； 液态
quasar	 n.  类星体
anonymous	 adj.  匿名的， 不具名的； 无特色的， 无个性特征的
fake	 v.  伪造； 伪装
span	 n. 跨度；持续时间 vt.  跨越； 持续， 贯穿； 包括
desegregate	 v.  废除种族隔离
girder	 n.  主梁， 大梁
bizarre	 adj.  奇形怪状的， 古怪可笑的， 怪诞的
perfect	 adj.  完美的， 理想的； 完全的， 十足的 vt.  使完美， 使熟练
prefer	 v.  更喜欢， 宁愿
astronomical	 adj.  天文学的； 极大的， 庞大的
ascribe	 vt.  把…归于； 归咎于
pole	 n.  地极； 磁极， 电极； 柱， 杆， 杖； 极端
minority	 n.  少数； 少数民族
allure	 n&v.  诱惑， 吸引
reference	 n.  提到， 论及， 涉及； 引文， 参考； 介绍
conspiracy	 n.  密谋； 阴谋
chamber	 n.  会议厅； 议院； 洞穴； 腔， 室； 房间
arrange	 v.  布置； 安排， 筹备
aristocratic	 adj.  贵族的， 有贵族气派的
trivialize	 vt.  使显得琐碎； 轻视
depart	 vi.  离开； 背离
exponent	 n.  解释者； 倡导者， 拥护者； 指数， 幂
accordion	 n.  手风琴
incongruity	 n.  不一致， 不和谐
solicit	 v.  恳请； 乞求； 征求； 勾引； 招揽
rhyme	 v. 押韵；和…同韵 n.  押韵； 同韵词， 押韵词
fossil	 adj. 化石的；陈腐的 n.  化石； 老顽固
disciple	 n.  门徒， 弟子， 追随者
collision	 n.  碰撞； 冲突， 抵触
manufacture	 vt. 大量制造，成批生产；捏造 n. 大量制造；
arthritis	 n.  关节炎
focal	 adj.  焦点的； 很重要的
spinning	 adj. 旋转的 n.  纺纱
squid	 n.  鱿鱼， 枪乌贼
slogan	 n.  标语， 口号； 广告语
bosom	 n.  胸部， 乳房； 胸怀， 内心
tract	 n.  地域； 领域； 传单， 小册子； 大片
mercury	 n.  [M-]水星； 水银， 汞
interact	 vi.  相互作用； 互相配合
powder	 n.  粉， 粉末； 散剂； 火药， 炸药
bestow	 vt.  赠与， 授予， 献给
aggregate	 n.  聚集物； 总计 vt.  聚集； 总计
differential	 adj. 差别的，有区别的；微分的 n.  差别， 差异； 微分
forsake	 vt.  遗弃， 放弃， 抛弃
rust	 v. 生锈 n.  锈， 铁锈； 锈病
trace	 vt. 查出，找到；追溯；探索；描摹；追述 n.  痕迹； 微量， 少许； 扫描线
stylized	 adj.  非写实的； 程式化的
array	 n. 一系列；阵列 vt.  布置， 排列； 部署
terrorism	 n.  恐怖主义
nominee	 n.  被提名者， 被任命者
discriminate	 v.  区别； 歧视
camouflage	 n&vt.  掩饰， 伪装
track	 v.  跟踪， 追踪 n. 跑道；小路；轨迹；足迹
annex	 vt.  兼并； 附加
enslave	 vt.  奴役
centennial	 n.  百年纪念
monetary	 adj.  金钱的， 货币的
rush	 v. 冲，突进；奔，急速流动；仓促从事；突袭 n. 冲，急速行进；匆忙；
demolish	 vt.  拆除； 破坏； 驳倒， 推翻
shellfish	 n.  贝类， 有壳的水生动物
trade	 v.  交易， 买卖； 互相交换 n. 贸易，商业；交易；职业，行业
gush	 v. 滔滔不绝地说；喷涌 n.  喷出， 涌出； 迸发， 发作
derivation	 n.  起源， 发源； 派生
spew	 v. 喷涌；射出；呕吐，呕出 n.  喷出物
comic	 adj. 可笑的，滑稽的；喜剧的 n.  喜剧演员
weave	 v. 迂回行进；编织；编造，编纂 n.  编法， 织法
normally	 adv.  通常地； 正常地
vague	 adj.  模糊的； 不明确的
fare	 vi. 进展 n.  费用
juridical	 adj.  法律的， 司法的
ephemeral	 adj.  短暂的， 转瞬即逝的
accuracy	 n.  准确， 精确
curtsy	 vi.  行屈膝礼 n. 屈膝礼
setting	 n.  环境； 背景； 布景； 曲； 底座， 底板
score	 v. 评分；划；获胜，成功 n.  得分， 分数； 乐谱； 抓痕， 划痕； 二十
quote	 v. 引用；
unanimous	 adj.  全体一致的， 一致同意的
quota	 n.  配额， 限额， 定额
scorn	 v.  轻蔑， 鄙视； 不屑于 n. 轻蔑，鄙视
thermal	 adj. 热的，热量的；保暖的，防寒的 n.  上升的热气流
percussion	 n.  打击乐器
nationalism	 n.  国家主义； 民族主义， 民族优越感
sulfur	 n.  硫； 硫黄
terrain	 n.  地势， 地形； 地带
navigate	 v.  航行， 横渡； 导航； 设法完成
culpable	 adj.  有罪的； 该谴责的， 难辞其咎的
raw	 adj.  生的， 未烹制的； 自然状态的， 未经加工的； 生疏的， 无经验的； 粗犷的； 原始的， 未经处理的
sprinkle	 v. 撒，洒，喷 n.  少量
backlighting	 n.  逆光
municipal	 adj.  市政的； 内政的； 地方性的
institute	 vt. 设立；制定；开创 n.  研究所， 学院
endure	 vt.  忍受， 忍耐； 持久， 持续
feign	 vt.  装作， 假装； 伪造
poster	 n.  海报， 招贴画； 发布消息的人
shortly	 adv.  不久； 简要地； 不耐烦地
criterion	 n. 〔判断、决定的〕标准，准则
essence	 n.  本质， 精髓
pore	 vi. 仔细阅读，审阅；审视 n.  气孔， 小孔
ambient	 adj.  周围的， 周围环境的； 产生轻松氛围的
insistence	 n.  坚持， 坚决主张
manual	 adj. 手工的；体力的 n.  手册， 指南
ornamental	 adj. 装饰性的，装饰用的 n.  装饰物
sentimental	 adj.  情感的； 伤感的， 多愁善感的
maneuver	 v. 操纵，控制；耍花招 n.  策略； 花招
dual	 adj.  双的， 二重的
retire	 v.  退休， 引退， 退役； 退出； 撤退； 就寝
dexterous	 adj.  惯用右手的； 灵巧的， 熟练的
aspect	 n.  方面； 朝向， 方向； 外表， 外观
vegetarian	 adj.  素食者的 n. 素食者
aggressive	 adj.  侵略的， 挑衅的； 强有力的； 敢作敢为的， 有进取心的
resilience	 n.  弹力， 弹性； 复原力； 适应力
corona	 n.  日冕， 日华； 光环
midterm	 adj. 中间的，期中的 n.  期中考试； 中期； 期中
signify	 v.  意味； 表示， 预示； 要紧， 有重要性
suction	 n.  吸， 抽吸； 吸力
holistic	 adj.  整体的， 全面的； 功能整体性的
stratum	 n. 岩层；地层
swing	 v. 摆动，摇荡；突然转向，突然转身 n.  摆动， 摇摆； 秋千
turbulent	 adj.  动乱的； 狂暴的， 汹涌的
overt	 adj.  公开的， 非秘密的
invasion	 n.  侵入， 侵略， 侵犯
forefront	 n.  最前沿， 最前线； 中心
spin	 v. 快速旋转；纺纱；吐丝；甩干衣服 n.  旋转
grocery	 n.  杂货店； 杂货
shallow	 adj. 浅的；
scout	 v. 侦察；寻找；搜索 n.  侦察员； 侦察机； 童子军
edifice	 n.  大厦， 宏伟的建筑物
register	 v&n.  登记， 注册
persuasive	 adj.  有说服力的， 让人信服的
couple	 n. 对，双；夫妇，情侣；几个人，几件事 vt.  连接， 结合
communicate	 v.  交流， 沟通； 传达， 传播； 通信
saddle	 n. 马鞍；车座 vt.  给…备鞍
rural	 adj.  乡村的， 农村的； 田园的
acclaim	 n&vt.  喝彩， 称赞
concord	 n.  和睦； 公约
acid	 adj.  酸的， 酸味的； 尖刻的， 刻薄的 n. 酸，酸性物质
shortage	 n.  不足， 缺乏
blush	 vi. 脸红；羞愧 n.  脸上泛起的红晕
overgraze	 v.  过度放牧
dubious	 adj.  怀疑的， 拿不准的； 可疑的， 靠不住的
clipper	 n.  快速帆船； 剪刀
swift	 adj. 敏捷的，速度快的 n.  雨燕
ductile	 adj.  有延性的， 韧性的； 易引导的， 易受影响的
conciliate	 vt.  安抚， 抚慰； 调和
utensil	 n.  用具； 器皿
accede	 vi.  即位， 就任； 同意
ratify	 vt.  正式批准， 使正式生效
vivify	 vt.  赋予生气； 使生动， 使活跃
pose	 vt. 摆姿势；造成；提出 n.  姿势
amend	 vt.  修正， 修订
erupt	 v.  突然发生， 爆发； 喷出
benevolent	 adj.  慈善的； 善心的
consent	 vi&n.  同意， 赞成， 准许
respect	 vt. 尊重，尊敬；遵守 n.  尊敬， 尊重； 重视； 方面
retreat	 vi. 退却，撤退；退缩 n.  退却， 撤退； 隐退处
fusion	 n.  熔化， 熔解； 熔合； 核聚变； 联合， 合并
parachute	 v.  跳伞； 空投 n. 降落伞
behaviorism	 n.  行为主义
mutual	 adj.  相互的； 共有的
shell	 n. 壳，外壳；壳状物；骨架，框架；外表；炮弹 vt.  给…去壳； 炮击
carnivore	 n.  食肉动物
pharmacy	 n.  药店； 药剂学
therefore	 adv. 因此，从而 conj.  因此
exchange	 vt. 兑换；交易；调换，交换；交流 n.  交易； 兑换； 交换； 交流
crooked	 adj.  不诚实的； 欺诈的； 弯曲的
contiguous	 adj.  接壤的， 毗邻的； 不间断的
nourishment	 n.  营养， 营养品
connote	 v.  意味着； 暗示
puddle	 n.  水坑， 水洼
primal	 adj.  最初的； 主要的， 首要的
paste	 v. 粘贴；拼贴 n.  面团； 糨糊
directory	 n.  人名地址录， 电话号码簿； 目录
jeans	 n.  牛仔裤
monarch	 n.  君主， 帝王
overnight	 adv.  整夜； 一夜之间 adj.  通宵的， 一整夜的； 一夜之间的
behave	 v.  行为， 表现； 表现得体， 有礼貌； 作出反应
laser	 n.  激光； 激光器
scope	 n.  范围， 界限； 眼界， 见识； 余地， 机会
notate	 vt.  以符号表示， 把…写成记号
archaeology	 n.  考古学
molecular	 adj.  分子的； 摩尔的； 由分子组成的
morale	 n.  士气， 斗志
periphery	 n.  外围， 边缘
fresco	 v.  绘湿壁画于 n. 湿壁画；湿壁画技法
identify	 v.  识别； 鉴定； 找到， 发现
embrace	 v. 拥抱；包含；欣然接受 n.  拥抱
nitrogen	 n.  氮
artesian	 adj.  自流水的， 喷水的
label	 vt. 标记 n.  标签； 称号
aquarium	 n.  养鱼缸； 水族馆
modify	 vt.  修改， 更改； 缓和； 【语】修饰
soprano	 n.  女高音
mortify	 vt.  使蒙受屈辱， 使难堪
cram	 v.  填塞， 塞满； 匆忙准备， 临时死记硬背
clone	 n. 克隆动物，无性繁殖动物；复制品，翻版 vt.  克隆， 以无性繁殖技术复制
detest	 v.  憎恶
enunciate	 v.  清晰地发音； 表达， 阐明
reservoir	 n.  水库， 蓄水池； 储备， 储藏
exempt	 adj. 被免除的，被豁免的 vt.  免除， 豁免
degenerative	 adj.  衰退的， 堕落的； 变性的
crab	 n.  蟹， 螃蟹
feminist	 n.  女权主义者
aesthetic	 adj.  审美的， 美学的； 美的， 艺术的
backup	 n. 后援，增援；
arithmetic	 n.  算术
hardy	 adj.  强壮的； 耐寒的； 能吃苦耐劳的
caption	 n. 说明文字；标题；字幕 vt.  给加说明文字
mismanage	 vt.  对…管理不当， 处理不当
carbohydrate	 n.  碳水化合物
subconscious	 adj.  下意识的， 潜意识的 n. 下意识，潜意识
eject	 v.  逐出， 驱赶； 喷出， 喷射； 弹出
meteorologist	 n.  气象学者
defect	 vi.  变节， 叛变 n.  瑕疵， 缺陷； 过失
obedience	 n.  服从， 顺从
reinforce	 vt.  加固， 加强； 增援
casual	 adj.  非正式的， 随便的； 漫不经心的； 漠不关心的， 冷淡的； 偶然的， 碰巧的； 临时的
rim	 n. 边，轮缘；边界 vt.  给…镶边
decline	 n&v.  下降； 衰退； 拒绝， 谢绝
rip	 v. 扯破，撕坏 n.  裂口， 裂缝
property	 n.  财产， 所有物； 所有权； 房产， 地产； 特性
debris	 n.  岩屑； 残骸； 碎屑
scuffle	 n&vi.  扭打， 混战
luster	 n.  光亮， 光泽； 荣耀
handle	 v. 处理；对待；操纵；触，摸 n.  柄， 把手， 拉手
urbanization	 n.  都市化
tough	 adj.  坚韧的； 棘手的， 困难的； 强健的， 吃苦耐劳的； 粗暴的； 严格的； 老的
yeast	 n.  酵母， 发酵粉
script	 n. 剧本，脚本，广播稿；笔迹；字母表 vt.  为电影写剧本
melody	 n.  旋律， 曲调； 乐曲， 歌曲
trilogy	 n.  三部剧， 三部曲
spot	 v. 认出，发现 n.  地点； 斑点； 少量
sterile	 adj.  不育的； 贫瘠的； 无菌的； 无结果的， 没有实际价值的； 刻板的
watercourse	 n.  水道， 河道
catholic	 adj. 广泛的，包罗万象的；[C-]天主教的 n.  [C-]天主教
mighty	 adj.  强有力的； 巨大的
partial	 adj.  部分的， 不完全的； 偏爱的， 癖好的； 偏袒的
pictorial	 adj. 图示的，有图片的；绘画的，图画的 n.  画报， 画刊
slough	 vt.  使脱落 n.  泥坑， 沼泽； 绝境
drench	 vt.  使湿透
retain	 vt.  保持， 保留
drastic	 adj.  剧烈的， 猛烈的， 激烈的
epoch	 n.  新纪元， 时代
retail	 adv.  以零售方式 v. 零售；以…价格销售 n. 零售
crew	 n.  全体船员； 全体工作人员
spear	 v. 刺，戳 n.  矛， 枪； 嫩叶
innovate	 v.  革新， 创新
extravagant	 adj.  放肆的， 过分的； 奢侈的， 铺张的
accommodate	 v.  提供； 容纳； 适应， 顺应
bubble	 n. 泡；
yield	 v. 生产，出产；屈服，顺从；让出，放弃；变形，弯曲 n.  产量； 收益
protagonist	 n.  主角， 主人公； 领导者， 倡导者
vacation	 vi. 度假 n.  假期
sacred	 adj.  宗教的； 上帝的， 神圣的
outcome	 n.  结果， 成果
polar	 adj.  极的， 极地的； 磁极的； 正好相反的， 截然对立的
tender	 adj. 嫩的；脆弱的；温柔的，亲切的 v. 提出；投标 n.  投标
vapor	 n.  蒸气， 潮气
curriculum	 n. 课程
meditate	 v.  沉思， 冥想； 考虑； 谋划
prototype	 n.  原型， 雏形
meantime	 n&ad.  其时， 同时
dehydrate	 v.  脱水
cite	 vt.  引用， 引证； 传唤， 传讯； 表彰， 嘉奖
blurt	 vt.  脱口而出
atom	 n.  原子； 微粒， 微量
internship	 n.  实习期
pertain	 vi.  存在； 适用
shed	 vt. 抛弃；摆脱；流出；散发；发出；脱落 n.  小屋
spun	 adj.  拉成丝的
tolerable	 adj.  可忍受的， 可容忍的； 尚好的， 过得去的
bicameral	 adj.  两院制的， 有两个议院的
correspond	 vi.  相一致， 符合； 相当于； 通信
spur	 n. 刺激；激励；马刺 vt.  激励， 鼓舞； 刺激， 促进
mode	 n.  方式， 形式； 风格； 时尚
rear	 adj.  后部的， 后面的 vt. 养育，抚养，培养；饲养 n. 后部，后方；臀部
elapse	 vi.  消逝， 流逝
symmetry	 n.  对称； 相似， 相仿
insect	 n.  昆虫， 虫
complement	 vt.  补充， 补足， 使完善； 与…相配 n.  补充物， 补足物； 足数， 足额； 补足语
qualify	 v.  具有资格， 合格； 有权； 限定， 修饰
bode	 vi.  预示
already	 adv.  已， 已经
Pueblo	 n.  普韦布洛印第安人村落； 普韦布洛人
applicable	 adj.  可应用的， 可实施的； 适当的， 合适的
admission	 n.  准许进入； 入场费； 承认
adhere	 vi.  黏附， 附着； 坚持； 遵守
sediment	 n.  沉淀物， 沉积物
tremulous	 adj.  发抖的， 颤抖的； 害怕的
hybrid	 adj. 杂交产生的；混合的，合成的 n.  杂交植物； 混合物， 合成物
panorama	 n.  全景， 全貌； 概观， 综述
adaptable	 adj.  能适应的； 可改编的
contemporary	 adj. 当代的；
mock	 v. 嘲笑，嘲弄；模仿；蔑视， n.  模拟考试
credence	 n.  可信性， 真实性； 信任； 信念
gear	 n. 齿轮，传动装置；挡；设备 vt.  调节， 使适应
facilitate	 vt.  推动， 促进
rob	 vt.  抢夺， 抢掠； 剥夺， 使失去
rod	 n.  杆， 棒
roe	 n.  鱼卵
quiver	 vi.  颤动， 抖动 n. 颤抖；箭筒
encase	 vt.  包住
telegraph	 v.  打电报， 发电报 n. 电报；电报机
disappoint	 v.  失望， 扫兴
rebellious	 adj.  反叛的， 叛逆的； 叛乱的
gloss	 v.  有光泽 n. 光泽，色泽；亮光漆；注解
ration	 n. 配给量，定量；给养，口粮 vt.  配给， 定量供应
construction	 n.  构造， 结构； 建筑物
predict	 v.  预言， 预测
dump	 vt. 丢弃，倾倒；抛弃；推卸；倾销 n.  垃圾场
universal	 adj.  普遍的， 全体的； 通用的， 万能的； 宇宙的， 全世界的
subjective	 adj.  主观的， 个人的
blossom	 vi.  开花； 长成 n. 花
radical	 adj. 根本的；激进的，极端的；全新的，不同凡响的 n.  激进分子； 游离基， 自由基
blunt	 adj. 钝的；不敏感的；直率的 vt.  使迟钝； 使减弱
irresistible	 adj.  无法抗拒的， 诱人的； 不能自已的
doodle	 vi.  乱涂， 胡画
intuitive	 adj.  直觉的
minute	 adj.  细微的， 极小的； 细致入微的， 详细的 n.  分， 分钟； 一会儿， 片刻； 时刻
analogy	 n.  类比， 类推
transcendent	 adj.  卓越的， 出众的
swirl	 v.  打旋， 旋转 n. 漩涡；螺旋形
application	 n.  请求， 申请； 应用， 运用； 敷用
productive	 adj.  生产的； 能产的， 多产的； 富有成效的
hummingbird	 n.  蜂鸟
semester	 n.  学期
hypothesis	 n.  假设， 假说； 前提
collapse	 v&n.  崩溃， 倒塌； 虚脱
dull	 adj.  乏味的， 单调的； 迟钝的； 无光泽的； 萧条的； 阴沉的， 昏暗的
ferment	 v.  发酵； 骚动 n.  发酵； 动乱， 骚动
comprehend	 v.  理解， 领会； 包括， 由…组成
potency	 n.  影响力， 支配力； 效力
accurate	 adj.  正确无误的， 精确的
octopus	 n.  章鱼
prostitution	 n.  卖淫； 出卖灵魂， 堕落； 滥用
legend	 n.  传奇故事， 传说； 传奇文学
paraphrase	 v.  解释； 改写 n. 释义
erect	 adj. 直立的 vt.  建立； 竖立
exalted	 adj.  崇高的， 高贵的， 显赫的
identification	 n.  身份证明； 辨认， 鉴定
protein	 n.  蛋白质
annual	 adj. 每年的，一年一度的 n.  年报， 年刊， 年鉴； 一年生植物
exclusive	 adj. 独占的；除外的，排他的；奢华的 n.  独家新闻
jar	 v. 震动；冲突，抵触；感到不快 n.  坛子； 广口瓶
poverty	 n.  贫穷， 贫困
repertoire	 n.  常备剧目， 保留剧目； 可表演节目； 全部才能
resort	 vi. 求助 n.  度假胜地； 手段
dwindle	 v.  减少； 缩小
lightning	 adj.  闪电般的， 快速的 n. 闪电
jaw	 n. 颌，颚；
reef	 n.  礁， 暗礁
margin	 n.  边缘； 页边空白； 差数， 差额； 余地， 余裕
nail	 n. 指甲，爪；钉 vt.  将…钉牢， 钉住
tarnish	 v. 失去光泽；玷污，败坏 n.  污点； 瑕疵
sunlit	 adj.  阳光照射的
refine	 vt.  精炼， 精制； 使完善； 净化， 提纯
mount	 v. 增加；登上，攀登；骑上，乘上；发起，组织，开展 n.  山， 山峰； 支架， 底座
coexist	 vi.  共存
acquiesce	 vi.  默许， 默认
pathetic	 adj.  可怜的， 引起怜悯的， 令人怜惜的
turkey	 n.  火鸡； 失败
atomic	 adj.  原子的； 原子能的
overtime	 adv. 加班 adj.  超时的， 加班的
scorch	 v. 烧焦；枯萎，枯黄 n.  焦痕
telescope	 n.  望远镜
mound	 n.  土墩， 土丘； 堆， 垛
gentility	 n.  有教养， 文雅
accuse	 vt.  谴责； 指责， 归咎； 指控， 控告
algebra	 n.  代数
espouse	 vt.  支持， 拥护， 赞成
predecessor	 n.  前辈； 前任； 原有事物
acquire	 vt.  获得， 取得
tactic	 n. 手段，策略；
worth	 adj. 值…的，价值…的，值得…的 n.  价值； 财产
automobile	 n.  汽车， 机动车
fertile	 adj.  肥沃的， 富饶的； 能结果的， 能繁殖的； 想象力丰富的
diversity	 n.  多样性
notion	 n.  概念， 观念； 想法
captive	 adj. 被监禁的，被困住的；受控制的 n.  俘虏， 战俘
dividend	 n.  红利， 股息； 回报， 效益； 被除数
popular	 adj.  通俗的； 受欢迎的； 流行的
vice	 n.  恶行， 恶习； 副， 代理
esteem	 n&vt.  尊重， 敬重
outweigh	 vt.  超过
shear	 v.  剪； 切断， 剪切
wedge-shaped	 adj.  楔形的
alga	 n. 水藻
dupe	 n. 上当者 vt.  欺骗， 愚弄
meteor	 n.  流星
empower	 v.  授权， 准许； 使控制局势
suppress	 vt.  抑制， 阻止； 镇压， 压制； 禁止发表， 查禁； 阻止…的生长
crater	 n.  火山口； 坑
gravitational	 adj.  重力的， 万有引力的
wrinkle	 v.  起皱纹 n. 皱纹
calm	 adj. 平静的；镇静的，沉着的 vt.  使平静， 使镇定， 平息
supervise	 vt.  监督； 指导
fabulous	 adj.  寓言式的； 难以置信的； 极好的
dilemma	 n.  困境， 进退两难的局面
rub	 n&v.  擦， 摩擦
through	 adv. 从头到尾，自始至终；直达，径直；彻底，完全 adj.  完成的， 结束的； 直达的， 直通的 prep. 穿过，通过；从头到尾，自始至终；经由，以；因为，由于
rug	 n.  地毯； 围毯
hieroglyph	 n.  象形文字， 象形符号
towering	 adj.  高耸的； 杰出的
occasional	 adj.  偶然的， 不经常的； 临时的
enact	 v.  制定法律， 颁布； 扮演
deviant	 adj. 不正常的，越出常规的 n.  不正常的人
pharaoh	 n.  法老
scrutinize	 v.  仔细检查， 细察
realtor	 n.  房地产经纪人
debate	 v&n.  辩论； 讨论， 争论
spacecraft	 n.  航天器， 宇宙飞船
extinguish	 vt.  熄灭， 扑灭； 消灭， 毁灭， 使破灭
vulnerable	 adj.  易受攻击的， 易受伤的
preach	 v.  布道， 讲道； 竭力鼓吹， 宣讲， 宣传； 说教
fibrous	 adj.  含纤维的； 纤维状的
recollection	 n.  记忆力； 回忆， 记忆； 回想起来的事
subjugate	 vt.  征服， 制伏， 使服从
donate	 vt.  捐赠； 赠送
deplete	 vt.  使枯竭， 耗尽
bonanza	 n.  富矿带； 带来好运的事； 兴盛， 繁荣
statistic	 n. 统计数字，统计资料；
nicotine	 n.  尼古丁
taboo	 adj.  忌讳的 n. 禁忌，忌讳；禁止，避讳
mold	 n. 霉菌；模型 vt.  塑造
bold	 adj.  大胆的； 冒失的； 粗体的； 醒目的
significant	 adj.  有重大意义的， 重要的， 显著的； 意味深长的
tentacle	 n.  触角， 触须， 触手
overlap	 v.  交叠， 部分重叠 n.  重叠； 重叠的部分
volunteer	 v. 自愿做 adj.  志愿的， 义务的 n. 志愿者；志愿军
senate	 n.  参议院； 上院
assassinate	 vt.  暗杀， 行刺； 诋毁
crow	 v.  啼叫， 打鸣； 得意洋洋 n. 乌鸦
bolt	 v. 逃跑；闩上 n.  插销， 门闩； 闪电
congressional	 adj.  立法机构的； 代表大会的； 国会的
boon	 n.  恩惠， 恩赐； 益处
novelty	 n.  新奇， 新颖； 新奇的事物
boom	 vi. 迅速发展，激增；发出低沉有力的声音 n.  激增， 繁荣； 繁荣昌盛期
abolish	 vt.  废止， 废除
absence	 n.  缺席； 缺乏
attract	 vt.  吸引
critique	 n. 批评，评论 vt.  写评论
cautious	 adj.  小心的， 谨慎的
recession	 n.  衰退， 衰退时期， 萧条时期； 撤回， 退回
situated	 adj.  坐落在…的； 处于…境地的
malicious	 adj.  怀有恶意的， 恶毒的
vigilance	 n.  警戒， 警惕
ally	 v.  结盟 n.  同盟国； 结盟者， 支持者
concentric	 adj.  同心的
mantle	 n.  覆盖物； 披风， 斗篷； 纱罩； 【地】地幔
outrageous	 adj.  残暴的； 骇人的； 反常的， 过度的
abbreviate	 vt.  缩略， 缩写
lavish	 adj.  大方的， 慷慨的； 大量的； 浪费的 vt. 慷慨给予，滥用；浪费，挥霍
substance	 n.  物质； 主旨， 实质； 根据； 重要性
varnish	 vt. 上清漆 n.  清漆
tribal	 adj.  部落的， 宗族的； 种族的
bond	 v.  黏合， 结合 n. 联结，黏结；债券；黏合剂；契约，合同
momentum	 n.  动量； 动力， 冲力； 势头
target	 n. 目标，对象；靶子 vt.  把…作为目标
discourse	 vi.  讲述， 论述 n.  演讲； 论文； 话语
obstruct	 vt.  妨碍， 阻挠； 阻塞
grind	 v. 打磨；磨，碾 n.  磨碎， 碾碎； 苦差事
bony	 adj.  瘦骨嶙峋的； 似骨的； 多骨的
labyrinth	 n.  迷宫； 错综复杂的事件
aquatic	 adj.  水生的； 水上的
cape	 n.  海角， 岬； 斗篷， 披肩
microprocessor	 n.  微处理器
delicate	 adj.  易损的； 微妙的； 精巧的； 娇弱的， 纤细的
rebel	 vi.  造反， 起义， 反抗 n.  叛逆者， 起义者
modeling	 n.  立体感； 建模， 造型
bounce	 v. 弹起，反弹 n.  弹跳； 反弹力
ammonia	 n.  氨， 氨水
crustal	 adj.  外壳的， 地壳的
tissue	 n. 纸巾，面巾纸
experimental	 adj.  实验的， 用于实验的
cart	 n. 运货马车；手推车 vt.  用车装运
cast	 vt. 浇铸；投掷；投射；蜕 n.  铸件； 演员表， 全体演员； 投， 抛
anxious	 adj.  渴望的； 担忧的； 令人焦虑的
slice	 n. 薄片；部分，份额 vt.  把…切成片
auditory	 adj.  耳的； 听觉的
frost	 v. 结霜，蒙上霜 n.  霜； 霜冻； 严寒
larva	 n. 〔昆虫的〕幼虫，幼体
burrow	 v. 挖掘，挖地洞；寻找，
incline	 v.  倾斜； 倾向于 n.  斜坡， 斜面
olfactory	 adj.  嗅觉的
elevate	 vt.  举起， 抬高； 提升职位； 使情绪高昂， 使兴高采烈
designate	 adj.  已任命但尚未就职的 vt. 命名；任命；指明，标示
slick	 adj.  光滑的； 熟练的； 圆滑的， 口齿伶俐的； 精巧的， 巧妙的
oppressive	 adj.  压迫的， 压制的； 令人焦虑的
item	 n.  项目， 条款； 一件商品； 一条， 一则
canvas	 n.  画布； 油画； 帆布
superintendent	 n.  主管， 负责人； 指挥者， 管理者； 警长
invasive	 adj.  侵入的， 侵略的； 开刀的
calculable	 adj.  可计算的； 能预测的； 可信的
hollow	 adj. 空心的，中空的；凹陷的；空洞的，虚伪的；沉闷的， vt.  挖空， 凿空
shipwright	 n.  造船者， 造船工人； 修船工
epic	 adj.  史诗般的； 艰苦卓绝的； 壮丽的， 宏大的 n. 史诗；史诗般的电影；壮举
downtown	 adv.  在市中心； 往市中心 adj. 市中心的
rely	 vi.  依赖， 依靠； 信赖， 信任
moor	 v.  停泊， 系泊 n. 沼泽；旷野，荒野
slide	 v. 滑动 n.  滑动； 滑坡， 滑道； 幻灯片
hydrothermal	 adj.  热液的
sticky	 adj.  黏的， 黏性的； 闷热的； 棘手的
grill	 vt. 烧烤；拷问，盘问 n.  烤架
care	 v.  关心， 关怀； 介意； 担忧 n. 小心，谨慎；照看，照料；忧虑，焦虑
pattern	 n. 模式，方式；样式，图案；样品，样本 vt.  仿制； 使形成， 促成
settle	 v.  安定， 安顿， 定居； 结束， 解决； 决定， 确定； 平静下来； 支付， 结算； 飞落， 停留
increment	 n.  增加； 增量； 定期的加薪
harsh	 adj.  恶劣的， 严酷的； 刺耳的； 粗糙的， 毛糙的
smother	 vt.  使窒息而死； 厚厚地覆盖； 抑制， 扼杀； 把闷熄
cramped	 adj.  狭小的， 狭窄的； 受限制的； 密小难认的
vehicle	 n.  交通工具， 车辆； 工具， 手段
scrape	 v. 刮掉，擦掉；发出刺耳的刮擦声；
kiln	 n.  窑， 炉
bleak	 adj.  阴冷的； 无望的， 令人沮丧的； 乏味的； 荒凉的
meteorological	 adj.  气象学的； 气象的
cushion	 vt. 起缓冲作用 n.  垫子
glorious	 adj.  壮丽的， 辉煌的； 光荣的； 令人愉快的， 极好的
bilateral	 adj.  有两边的； 双边的
plateau	 vi.  保持稳定水平 n. 高原；稳定期，停滞期
aptitude	 n.  适合， 恰当； 天资， 才能， 资质
daisy	 n.  雏菊； 一流的人物
stress	 v.  强调； 重读； 焦虑不安 n. 压力；强调；精神压力，紧张；重音，重读
reliance	 n.  依靠， 依赖； 信任
display	 vt&n.  陈列； 展示； 显示
gnaw	 v.  啃， 咬
disorder	 n.  混乱， 凌乱； 动乱， 骚乱； 失调， 紊乱
aggravate	 vt.  恶化， 加重； 激怒
disquiet	 v. 不安，忧虑 n.  不安， 忧虑
addictive	 adj.  使人上瘾的； 使人沉醉的， 醉心的
yarn	 n.  纱， 纱线； 故事
spurn	 vt&n.  拒绝； 摈弃
orchid	 n.  兰， 兰花
dairy	 adj.  乳品的 n. 牛奶场；乳品店；奶制品
plaque	 n.  匾额； 牙斑
membrane	 n.  薄膜； 细胞膜
mature	 adj. 成熟的；
scavenger	 n.  捡破烂的人， 拾荒者； 食腐动物
alleviate	 vt.  减轻， 缓解， 缓和
talent	 n.  天赋； 才干； 人才
scoff	 vi.  嘲笑， 讥笑
sacrificial	 adj.  供奉的， 献祭的， 牺牲的
factual	 adj.  实际的， 真实的， 事实的
negotiate	 v.  谈判， 商议； 商定， 达成； 通过， 越过
moth	 n.  蛾
germ	 n.  微生物， 细菌； 萌芽
shatter	 v.  粉碎， 破碎； 破灭； 散开， 吹散； 给予极大打击
credentialism	 n.  文凭主义
glimpse	 n. 一看，一瞥 vt.  瞥见
moss	 n.  苔藓
detective	 adj.  侦探的 n. 侦探，私人侦探
transfer	 v. 转移；转学；转让；换乘 n.  转移； 转学； 转让； 换乘
resin	 n.  树脂
affection	 n. 喜爱，钟爱；
diversion	 n.  消遣， 娱乐； 转移， 转换
omit	 vt.  省略， 删去； 遗漏， 忽略
courteous	 adj.  谦恭的， 有礼貌的
limitation	 n.  限制； 局限性
sponsor	 vt. 主办；赞助 n.  发起者； 赞助者
jog	 vi.  慢跑； 轻轻触碰
ascertain	 vt.  弄清， 查明
insert	 vt.  插入
jot	 vt.  草草记下， 匆匆记下
Neolithic	 adj.  新石器时代的
highlight	 vt. 强调，突出；以强烈光线照射 n.  最精彩部分
database	 n.  数据库
sac	 n.  囊， 液囊
patient	 adj. 有耐心的，能忍耐的 n.  病人， 患者
reject	 vt.  拒绝， 抵制； 抛弃， 摈弃， ， 丢弃； 拒收， 不录用； 排斥 n.  被拒货品， 不合格产品
sheer	 adv. 垂直地，陡峭地 vi.  急转， 偏离 adj. 陡峭的；完全的，十足的，全然的；绝对的；极薄的
imitation	 n.  模仿， 仿效； 仿制； 仿造品
compliment	 vt.  赞美， 称赞 n.  赞美；
miracle	 n.  奇事， 奇迹
rinse	 vt. 冲洗，漂洗，冲刷 n.  漂洗， 冲洗， 洗涤； 染发剂
amount	 vi. 总计 n.  总额
comply	 vi.  服从； 遵守
sap	 vt. 使衰竭；削弱，逐渐破坏 n.  液， 汁； 精力； 笨蛋
spellbind	 vt.  用妖术迷惑； 迷住， 使入迷
nectar	 n.  花蜜； 甘美的饮料， 琼浆玉液
feudal	 adj.  封建的
kingdom	 n.  王国； 领域， 界
spread	 v. 展开；蔓延，扩散；散布；涂，敷 n.  传播， 蔓延； 涉及幅度， 活动范围
puppet	 n.  木偶； 玩偶； 傀儡， 受人操纵的人
educated	 adj.  受过教育的， 有教养的
favor	 n.  帮助； 赞同， 支持； 偏爱
latter	 adj. 后面的，后半期的；后者的 n.  后者
clinic	 n.  门诊部， 诊所
affiliate	 vt.  使隶属于 n.  分公司
simply	 adv.  简单地， 简明地； 简直； 仅仅， 只； 朴素地， 简朴地
recessive	 adj.  隐性的
equivalent	 adj.  相同的； 相当的 n. 对等物；等价物
momentary	 adj.  片刻的， 瞬间的， 暂时的
hypocritical	 adj.  伪善的， 虚伪的
constricted	 adj.  狭窄的； 收缩的； 抑制的， 约束的
sensational	 adj.  轰动性的， 引起哗然的， 耸人听闻的； 〈口〉极好的， 绝妙的
canoe	 vi. 乘独木舟，划独木舟 n.  独木舟
wedge	 n. 楔子；楔形物 vt.  ■入， 塞入
alienate	 vt.  使疏远， 使不友好； 转让， 让渡
awake	 v. 唤醒；醒；觉醒，醒悟 adj.  醒着的； 警觉的
plague	 vt. 困扰，使苦恼；纠缠 n.  鼠疫； 传染病； 祸患， 灾害
perpetual	 adj.  连续不断的； 永久的， 长期的
retrospect	 n.  回顾， 反顾
fascinate	 v.  深深吸引， 迷住
offer	 v. 提供；自愿给予；提出，提议 n.  提议； 报价， 出价； 特价
diplomatic	 adj.  外交的， 从事外交的； 有策略的， 有手腕的， 老练的
projector	 n.  放映机， 幻灯机， 投影仪
draft	 adj.  供役使的 n. 草图，草稿；汇票；气流 vt. 起草；征募，选派
loath	 adj.  不情愿的， 勉强的
complex	 adj.  合成的， 综合的； 复杂的， 错综的， 难以理解的 n.  建筑群； 综合体， 集合体； 情结
humidity	 n.  湿度； 潮湿
fluid	 adj.  液体的； 流动的 n. 液体，流体
pamphlet	 n.  小册子
healthful	 adj.  有益健康的
posit	 vt.  安排； 假定
ornate	 adj.  华丽的， 豪华的
metropolis	 n.  首府； 大都市
documentation	 n.  文件； 归档， 文献记录
proliferate	 vi.  激增， 迅速繁殖
personal	 adj.  个人的， 私人的； 亲自的
plastic	 adj.  塑料的； 可塑的； 做作的， 虚伪的 n. 塑料
delay	 v. 耽搁，延迟 n.  耽搁， 延迟
onslaught	 n.  冲击； 攻击， 猛攻
transient	 adj.  短暂的， 转瞬即逝的； 临时的
disrepute	 n.  坏名声， 不光彩
plank	 n.  木板； 政策要点， 政纲的核心
heyday	 n.  全盛期
sponge	 v.  用海绵擦， 揩 n. 海绵；寄生虫
deal	 v.  处理， 对付； 给予； 做买卖， 经营 n. 交易，买卖；协议
spaghetti	 n.  意大利式细面条
insulate	 vt.  使隔离， 使隔绝
scheme	 v.  密谋， 秘密策划， 图谋 n. 计划，方案；阴谋；体系，体制
affect	 vt.  影响； 感染
drain	 v. 流走，流出；使耗尽 n.  下水道， 排水沟； 排放； 消耗
smoothly	 adv.  顺利地； 平稳地； 平静地
isolate	 vt.  使隔离， 使孤立
civil	 adj.  市民的， 公民的， 平民的； 民事的； 国家的， 政府的； 文明的， 有教养的
subsequent	 adj.  随后的； 并发的
indicate	 v.  表明， 显示； 指出， 指示； 象征， 预示； 暗示， 间接提及
metabolic	 adj.  新陈代谢的
completion	 n.  完成， 实现； 结束
contain	 vt.  包含， 容纳； 控制； 防止…蔓延
litter	 v.  乱扔； 使凌乱 n. 废弃物，垃圾；一窝幼崽
sew	 v.  缝， 做针线活； 缝补， 缝上
oval	 adj. 卵形的，椭圆形的 n.  卵形， 椭圆形
column	 n.  专栏； 圆柱， 支柱； 纵队
indigent	 adj.  贫困的， 贫穷的
biography	 n.  传记
procedure	 n.  程序， 手续， 步骤
sample	 n. 样品，标本 vt.  抽样调查； 品尝， 体验
integrate	 v.  合并， 成为一体
operant	 adj. 运转中的；生效的；操作性的 n.  起作用的人
cellist	 n.  大提琴演奏家
applicant	 n.  申请者
awesome	 adj.  使人敬畏的； 使人恐惧的
admiration	 n.  钦佩， 赞赏， 羡慕
Jupiter	 n.  木星
pique	 vt. 激怒；激起，引起 n.  恼怒， 生气； 怨恨
planetary	 adj.  行星的
ultraviolet	 adj.  紫外的
diagnose	 v.  诊断； 判断
petition	 v.  请愿， 正式请求 n. 请愿；请愿书；诉状
somewhat	 adv.  稍微， 有点
vicinity	 n.  邻近， 附近
earnest	 adj. 认真的；真诚的 n.  诚挚； 认真
validity	 n.  合法性； 符合逻辑
crevice	 n.  缺口， 裂缝
precede	 v.  在…之前， 先于
humorous	 adj.  幽默的， 滑稽的， 诙谐的
bet	 v.  打赌； 敢说， 确信 n. 打赌；赌注
differentiate	 v.  不同， 区别
discharge	 v.  释放； 放； 解雇； 清偿； 履行 n.  流出物； 放电
disadvantage	 n.  缺点， 障碍， 不利之处
plaster	 v.  在…上抹灰泥， 厚厚地涂 n. 灰浆，灰泥，石膏
metropolitan	 adj.  大都市的； 本土的
eclecticism	 n.  折中主义
garbage	 n.  垃圾， 废物； 废话， 无聊的东西； 垃圾箱
suspicious	 adj.  可疑的， 令人怀疑的； 不信任的， 猜疑的， 多疑的
complain	 v.  诉苦， 抱怨； 投诉； 控告
polygamy	 n.  一夫多妻制， 一妻多夫制， 多配偶制
renovate	 vt.  修复； 更新， 翻新
adjust	 v.  调整， 调节； 适合， 适应； 校正， 校准
debt	 n.  债务； 负债情况； 罪过
perpendicular	 adj. 成直角的，垂直的 n.  垂直线
ordinate	 n.  纵坐标
deem	 vt.  认为， 相信
stiffen	 v.  变僵硬； 变坚定， 变强硬
compel	 vt.  驱使， 强迫
depress	 vt.  降低， 削弱； 使沮丧； 使萧条
pendant	 n.  垂饰， 下垂物
repress	 vt.  克制， 抑制； 镇压， 压制
riddle	 n. 谜；谜语；难解之谜；粗筛 vt.  使布满窟窿
apprise	 vt.  通知， 告诉
candid	 adj.  坦白的， 直率的， 直言不讳的
client	 n.  委托人， 当事人； 顾客
plankton	 n.  浮游生物
conversion	 n.  转变， 变换； 改变信仰， 皈依
brilliant	 adj.  给人印象深刻的； 闪耀的； 杰出的， 卓越的
practical	 adj.  实用的； 实际的； 现实的
deductive	 adj.  演绎的， 推论的
breathing	 n.  呼吸
bound	 adj. 被束缚的，有义务的 v.  跳跃； 弹回； 形成…的界线， 给…划界
falter	 v.  衰退， 衰落； 发抖， 结巴地说； 蹒跚
breed	 v. 〔动物〕交配繁殖 n. 〔宠物或牲畜的〕品种
elusive	 adj.  难以理解的， 难懂的； 难捕捉的； 逃避的
appraise	 vt.  估价； 估量； 评价， 评定
pyramid	 n.  金字塔； 锥体； 金字塔形物； 金字塔式的组织
realm	 n.  王国， 国度； 界， 范围， 领域
avoid	 vt.  避免， 规避
comprehensive	 adj.  全面的； 综合的
entourage	 n.  〈总称〉随从， 随行人员
prompt	 adj. 敏捷的；及时的，迅速的 vt. 促进，推动；提示；鼓励 n.  提词， 提示
tunnel	 v.  开凿隧道； 挖地道 n. 隧道；地道
elaborate	 adj.  精心制作的， 复杂精美的 v.  详述； 详细制订， 精心制作
fulfill	 vt.  履行； 实现； 符合， 具备
advanced	 adj.  先进的； 高级的， 高等的； 晚期的， 后期的
output	 n.  产量； 输出； 产生
fatigue	 n.  劳累； 疲劳
inactive	 adj.  不活动的； 怠惰的
modem	 n.  调制解调器
costume	 n.  服饰； 服装， 装束； 戏装
crown	 v.  加冕； 使圆满， 使完美 n. 王冠；花冠
inquire	 v.  打听， 询问
gymnasium	 n.  体育馆； 健身房
vain	 adj.  徒然的， 无效的； 自负的， 虚荣的
harmonious	 adj.  和谐的， 协调的； 和睦的， 融洽的
filament	 n.  灯丝； 细丝
spheroid	 n.  球状体， 椭球体
operate	 v.  运转， 开动； 动手术； 经营， 管理； 起作用
verdict	 n.  裁定； 判断； 意见
stereo	 adj.  立体声的 n. 立体声
doctrine	 n.  教条， 教义； 学说
template	 n.  模板， 样板
proportion	 n.  比例； 部分； 均衡， 相称
crystal	 n. 水晶；晶体，
prophet	 n.  先知； 预言者； 拥护者， 鼓吹者
pursuit	 n. 追求；
cowhand	 n.  牛仔， 牧牛工
plate	 n. 盘子；板条，板材；号码牌 vt.  镀， 电镀； 覆盖
tournament	 n.  比赛； 锦标赛
ruthless	 adj.  无情的， 残酷的， 冷酷的； 坚决的， 彻底的
lure	 vt. 吸引，诱惑 n.  诱惑力； 诱饵
simile	 n.  明喻
inflammation	 n.  炎症， 发炎
dissolve	 v.  溶解； 清除； 解散， 结束
prejudice	 n. 偏见，成见 vt.  使产生偏见； 使…受到损害， 有损于
angle	 v.  把…放置成一角度； 使带上倾向性 n. 角；角度，立场，观点
immigrant	 adj. 移来的，移民的 n.  移民； 侨民
urgent	 adj.  急迫的， 紧迫的
optic	 adj. 眼的；视觉的；光学上的 n.  光学仪器
bundle	 n. 捆，束；包袱 vt.  收集， 归拢； 把…塞入
soybean	 n.  大豆
counseling	 n.  咨询； 辅导
thorn	 n.  刺， 荆棘； 带刺小灌木
break	 v. 破，裂，碎；使中止，打断，断绝；损坏，弄坏；违犯；打破；破晓 n.  打断， 中止； 休息时间； 破裂
composer	 n.  作曲家， 作曲者
predominate	 vi.  统治， 支配， 占优势
porous	 adj.  有孔的， 多孔的； 能渗透的
systematic	 adj.  系统的， 体系的
vogue	 adj.  流行的， 时髦的 n. 时尚，风气，流行
combustible	 adj.  可燃的， 易燃的
reapply	 v.  再申请； 再利用
likewise	 adv.  同样； 也
bacon	 n.  咸肉， 熏肉
hide	 v. 躲藏；掩藏；掩盖 n.  兽皮
polygon	 n.  多角形， 多边形
corporate	 adj.  法人的， 公司的； 共同的， 全体的
instruction	 adj.  说明用法的 n. 教导；
shuffle	 v&n.  拖着脚走； 洗； 蒙混； 搅乱
infatuate	 vt.  使迷恋； 使糊涂
constant	 adj. 坚定的；稳定的；不变的，持续的 n.  常数， 恒量
debatable	 adj.  有争议的
lament	 n. 挽歌，悼词 vt.  抱怨； 痛惜
outrage	 n. 暴行；
diffuse	 v.  散播， 传播； 漫射， 扩散 adj.  扩散的， 漫射的； 冗长的
communal	 adj.  公共的， 共享的； 社区的
split	 v. 分开，分裂；撕裂；分担，分享；断绝关系，分手 n.  裂口； 分化， 分裂
contagious	 adj.  传染性的； 有感染力的
immerse	 vt.  使浸没于； 使沉浸于， 使陷入
publication	 n.  出版， 发行； 出版物； 公布， 发表
lust	 v.  对…有强烈的欲望 n. 性欲；强烈的欲望
sardonic	 adj.  嘲笑的， 讥讽的
squirt	 v. 喷射，喷；向…喷射 n.  喷射； 〈口， 贬〉无名小辈
sow	 v.  播种， 种； 灌输； 煽动
petroleum	 n.  石油
novice	 n.  生手， 新手； 新信徒
portraiture	 n.  画像技法； 肖像， 画像
peripheral	 adj.  不重要的； 外围的
incoming	 adj. 引入的；新任的；正来临的，刚收到的 n. 进来，到来；
inanimate	 adj.  无生命的； 无生气的
level	 adj. 平坦的；等高的 n. 水平；高度；级别 vt.  夷平， 使平坦
preserve	 vt.  保护， 维护； 保存， 保养
lush	 adj.  茂盛的
establish	 vt.  建立， 设立； 安置， 使定居； 确定， 证实
mammoth	 adj. 巨大的 n.  猛犸， 毛象
relevant	 adj.  相关的， 有关的； 中肯的， 贴切的； 有价值的， 有意义的
deter	 v.  威慑， 阻止
synthetic	 adj. 合成的，综合的；人造的
proclaim	 v.  宣布， 声明； 显示
bunch	 v.  捆成一束； 聚集 n. 簇，束，捆；帮，伙
jolt	 v. 震动，颠簸；震惊 n.  震动， 颠簸； 震惊； 一阵强烈的感情等
jeopardize	 vt.  破坏， 危及
provincialism	 n.  地方主义， 乡土性
predominant	 adj.  占优势的， 主导的， 支配的； 显著的， 盛行的
domesticate	 vt.  驯养， 驯化； 使精于家务， 使喜爱家居
recipe	 n.  食谱； 方法， 秘诀， 诀窍
roost	 vi. 栖息 n.  栖息处， 鸟巢
apportion	 vt.  分配； 分派
mental	 adj.  精神的； 智力的； 精神健康的
decent	 adj.  体面的； 适当的， 得体的； 令人满意的； 正派的
afloat	 adv.  漂浮地 adj. 漂浮的；有偿债能力的，能维持下去的
switch	 v.  转变， 改变； 交换， 掉换 n. 开关，电闸；转换，改变；枝条，鞭子
auxiliary	 adj.  辅助的， 补助的， 补充的； 备用的， 后备的
savage	 adj. 凶残的；野蛮的，未开化的 n. 野蛮人，未开化的人 vt.  残害； 激烈抨击
viable	 adj.  可行的， 可实施的； 可生长发育的
facial	 adj.  面部的； 面部用的
by-product	 n.  副产品； 副作用， 意外结果
console	 vt.  安慰， 抚慰
auspicious	 adj.  吉兆的， 吉利的； 幸运的
chance	 v.  碰巧， 偶然发生； 冒…的险 n. 机会；可能性，偶然性；偶然的事
medication	 n.  药物治疗； 药物
demanding	 adj.  苛求的， 难满足的； 需要高的， 费力的
drill	 v. 钻，打眼；训练 n.  钻； 训练
corollary	 n.  必然的结果； 推断
conjure	 v.  变魔术， 变戏法； 召唤
acknowledge	 v.  承认， 确认； 对…表示感谢
receptor	 n.  感受器； 受体
dormant	 adj.  静止的； 休眠的； 隐匿的
lobby	 v.  游说 n. 休息室，大厅；游说团
pulse	 n.  脉搏， 脉率； 脉冲
descriptive	 adj.  描述性的， 叙述的
reconstruction	 n.  复兴； 改造， 再建
hereditary	 adj.  遗传的； 可继承的， 世袭的
stumble	 vi.  绊脚； 蹒跚而行； 结巴
lineage	 n.  宗系， 世系， 血统
lighthearted	 adj.  无忧无虑的； 愉快的
hoard	 v. 贮藏，囤积 n.  储藏， 贮存
vary	 v.  改变， 变化
coherent	 adj.  条理清楚的， 连贯的； 有表达能力的
ledge	 n.  突出部分； 暗礁
delta	 n.  三角洲； 希腊字母表的第四个字母
episode	 n.  一段时期； 片段， 插曲； 一集
infrared	 adj. 红外线的；产生红外线的 n.  红外线
respondent	 adj.  回答的 n. 回答者，响应者；调查对象；被告
ponder	 v.  思索， 沉思
animate	 adj.  活的， 有生命的 vt.  赋予生命， 使有活力
scene	 n.  地点， 现场； 景色； 一场， 一个镜头； 场面； 活动领域， 圈子
objective	 adj.  客观的 n. 目标，目的
exert	 vt.  运用， 行使； 施加； 努力， 竭力
scandal	 n.  丑事， 丑闻； 恶意诽谤， 流言蜚语； 可耻的行为
dormancy	 n.  休眠； 催眠状态； 隐匿
hinder	 vt.  阻碍， 妨碍
scent	 n. 香味，香气；气味；踪迹，线索；香水 vt.  闻出； 察觉
exhibit	 v. 陈列，展览；显示，表现 n.  展览， 陈列
adjunct	 n.  附加物， 附件； 附加语， 修饰语
mushroom	 vi.  迅速成长 n. 蘑菇
pinpoint	 adj.  准确的， 精确的 vt. 精准定位；准确解释 n. 极小的范围；光点
altruistic	 adj.  利他的， 无私心的， 为他人着想的
extremity	 n.  末端； 极端， 极度
deny	 v.  否认； 拒绝承认； 拒绝给予
alchemist	 n.  炼金术士
trench	 v.  挖沟 n. 沟渠，壕沟；战壕
miserable	 adj.  痛苦的； 可怜的； 令人不快的
subtract	 vt.  减去
dent	 vt. 使凹下；挫伤，损害 n.  缺口， 凹痕
hurricane	 n.  飓风， 暴风
asthma	 n.  哮喘
hike	 v&n.  徒步旅行， 远足
zigzag	 vi. 曲折行进 adj. 之字形的，弯弯曲曲的 n.  之字形
mission	 n.  代表团， 使团； 任务， 使命
generalization	 n.  概括， 归纳
biologist	 n.  生物学家
rancher	 n.  牧场主； 大农场工人
hustle	 v. 推搡，硬挤 n. 忙碌；喧闹
mercantile	 adj.  贸易的， 商业的； 重商主义的
dosage	 n.  剂量
motor	 adj. 机动的；肌肉运动的 n.  发动机， 电动机
access	 n. 通道；接近，进入；机会 vt.  进入； 使用； 存取
primitive	 adj. 原始的，远古的；简单的，粗糙的 n.  原始人； 原始事物
advisable	 adj.  可取的， 适当的； 明智的
dormitory	 n.  宿舍
hind	 adj.  后面的， 在后的
overcome	 vt.  战胜， 克服
sum	 v.  共计， 合计， 总计 n. 和，总数；金额，数额；算术
stratigraphy	 n.  地层学； 地层中的岩石组成
obliterate	 vt.  覆盖； 消灭； 忘却
current	 adj.  现行的， 当前的； 流通的； 最近的 n. 流；潮流，趋势
bookstore	 n.  书店
obligate	 vt.  使负义务， 强迫
democrat	 n.  民主主义者； [D-]民主党人
angiosperm	 n.  被子植物
audit	 vt.  旁听； 审计
cactus	 n. 仙人掌
copper	 n.  铜； 铜币
audio	 adj.  音频的； 声音的
patriarchy	 n.  父权制， 父系社会， 家长统治
incense	 n. 〔燃烧时发出怡人香味的〕香 v. 使〔某人〕十分愤怒
offensive	 adj. 攻击性的；冒犯的，使人不快的；攻方的 n.  进攻， 攻击； 攻势
texture	 n.  质地； 纹理； 结构
amid	 prep.  在…中， 被…围绕
launch	 vt. 发动，发起；推出；使下水；
silt	 v.  阻塞 n. 淤泥
quell	 vt.  制止， 镇压； 缓解， 减轻
understate	 vt.  轻描淡写， 避重就轻地说
confirm	 vt.  证实； 使巩固； 批准
detectable	 adj.  可发觉的， 可察觉的
bud	 vi.  发芽， 萌芽 n. 芽；蓓蕾
uppermost	 adv.  在最上面， 在最重要的位置 adj. 最高的，最上面的；最重要的
expeditious	 adj.  迅速而有效的， 迅速完成的
gallop	 v.  飞奔， 疾驰
neoclassical	 adj.  新古典主义的
mortality	 n.  死亡率
vast	 adj.  巨大的； 大量的； 范围广的
dissent	 vi. 不同意，持异议 n.  不同意见， 异议
symbol	 n.  符号， 标志； 象征
ignite	 v.  点燃， 着火
declare	 v.  表明； 断言， 声称； 申报
calamitous	 adj.  灾难性的
available	 adj.  可得到的， 可找到的； 有空的
unequal	 adj.  不同的， 不相等的； 不平等的， 不相称的； 不胜任的
confine	 vt.  限制； 禁闭
advocate	 vt.  提倡 n.  倡导者
posthumous	 adj.  死后的， 身后的
horizontal	 adj.  水平的； 与地面平行的
consort	 vi.  结交； 鬼混 n.  配偶； 团伙
drawback	 n.  缺点， 障碍， 不利条件； 退款， 退税
missile	 n.  发射物； 导弹， 飞弹
variant	 adj.  不同的， 变异的 n. 变体，变形
generate	 vt.  产生； 引起， 导致
beaver	 vi. 忙于 n.  海狸； 海狸毛皮
passion	 n.  激情， 热情
extreme	 adj. 极度的；极端的 n.  极端
anecdotal	 adj.  轶话的， 逸闻趣事的
coordinate	 v.  协调， 相配合 n.  同等物； 坐标
athlete	 n.  运动员， 体育家
despoil	 vt.  夺取， 掠夺； 蹂躏
query	 v.  向…提问； 对…表示怀疑 n. 疑问，问题
degree	 n.  程度； 度数； 学位； 等级
dismal	 adj.  阴沉的， 阴郁的； 忧郁的， 沮丧的； 差劲的
vocalize	 v.  用言语表达； 说， 唱， 发声
astronomy	 n.  天文学
ranch	 n.  大牧场， 饲养场
tube	 n.  管； 管状物； 管状器官
discord	 n.  不一致； 不和， 纷争； 不和谐
ripple	 v.  起涟漪； 扩散 n. 细浪，涟漪
dismay	 vt. 使气馁，使沮丧；使诧异 n.  灰心， 气馁； 诧异
naval	 adj.  海军的
hint	 v.  暗示， 示意 n. 暗示，提示；
myopic	 adj.  近视的； 缺乏远见的
illegible	 adj.  难以辨认的， 模糊的
demonstrate	 v.  论证， 证明； 表现， 显露； 示范， 演示； 游行示威
decompose	 v.  分解； 腐烂
throng	 v.  群集， 拥向 n. 一大群人
monument	 n.  纪念碑； 历史遗迹
inventory	 n.  目录， 清单； 库存
saunter	 vi&n.  闲逛， 漫步
vivid	 adj.  清晰的； 鲜明的； 生动的； 活泼的
blues	 n.  布鲁斯音乐， 蓝调
defecate	 vi.  排便； 澄清
assent	 n&vi.  同意， 赞成
virtue	 n.  美德； 优点
coverage	 n.  新闻报道； 覆盖范围
perishable	 adj.  易腐的， 易变质的
gradual	 adj.  逐渐的， 逐步的； 坡度平缓的， 不陡的
figure	 n. 身材，体形；轮廓；数字；图形，图表；人物，
corrupt	 adj. 堕落的，腐化的；腐败的，
commemorate	 vt.  庆祝， 纪念
transmit	 v.  传送， 传递， 输送； 传播， 传染
consumption	 n.  消耗； 消费； 食用
repertory	 n.  保留剧目； 保留剧目轮演； 库存， 储备； 仓库
hazel	 n. 榛树 adj. 〔眼睛〕绿褐色的
voltage	 n.  电压， 伏特数
vaccine	 n.  疫苗
zest	 n.  趣味； 热情， 狂热
drought	 n.  干旱， 旱灾
periodical	 adj.  周期的， 定期的 n. 期刊，杂志
bluff	 v. 虚张声势，吓唬 adj.  直率的， 坦率的 n. 悬崖，峭壁；虚张声势，唬人
punctual	 adj.  守时的
compromise	 n&v.  妥协， 折中
advertise	 vt.  为…做广告， 宣传； 公告， 公布
yogurt	 n.  酸奶
comparative	 adj. 比较的；比较级的；相对的 n.  比较级
hesitant	 adj.  犹豫的， 吞吞吐吐的， 犹豫不定的
feedback	 n.  反馈； 反馈信息
folklore	 n.  民间传说； 民俗学
credential	 n.  证书； 文凭； 资格
justify	 v.  证明…是正当的； 为…辩护
review	 vt&n.  审查； 复习； 回顾； 评论； 检阅
entrench	 vt.  使根深蒂固， 牢固确立
timber	 n.  木材， 木料
roam	 vi. 漫游，漫步，闲逛 n.  漫步， 漫游
simulate	 vt.  模仿， 模拟； 假装， 伪装
tenet	 n.  原则； 信条； 教义
spectacle	 n. 精彩的表演；壮观的场面；奇观；壮丽的景象；
efficiency	 n.  效率， 功效
ethnic	 adj.  种族的； 民族的
lettuce	 n.  生菜； 莴苣
intact	 adj.  无损伤的， 完整的
motto	 n.  座右铭； 箴言， 格言
juvenile	 adj.  幼稚的， 不成熟的； 少年的， 未成年的 n. 幼体；未成年人，少年
pervasive	 adj.  普遍深入的； 遍及的， 弥漫的
tableland	 n.  高原， 台地
hive	 v. 入蜂箱；群居 n.  蜂箱， 蜂房； 闹市， 忙碌之地
laborious	 adj.  艰苦的， 费力的， 艰难的； 勤劳的
flag	 v.  标记 n. 旗帜；标记
racing	 adj. 比赛的 n.  比赛， 竞赛
sympathetic	 adj.  感应的， 交感的； 有同情心的； 体谅的
freight	 n. 货运；运费 vt.  运送， 货运； 使充满
wear	 v. 穿，戴；留；面露，面带；磨损，用旧 n.  穿戴， 衣着； 服装， 穿戴物； 磨损， 损坏
botany	 n.  植物学； 植物
range	 v.  变动； 散布； 漫游 n. 范围；山脉；一系列；射程，距离
topsoil	 n.  表层土
aurora	 n.  极光
glamorous	 adj.  富有魅力的， 迷人的
disprove	 vt.  证明…不成立， 证明…是错误的
derive	 v.  取得； 起源
overseas	 adv. 在海外，在国外 adj.  海外的， 国外的
leak	 v. 漏，渗出，泄漏 n.  漏洞， 裂缝； 泄露； 走漏
complacence	 n.  自满， 满足
assert	 v.  断言， 声称
recall	 v. 回忆起，回想起；召回，叫回；收回，撤销 n.  记忆力， 记性； 召回
flap	 n. 拍打；振翅；封盖，
leap	 vi.  跳跃； 急速行动； 骤变； 激增 n. 跳跃；骤变；激增
regular	 adj.  规则的， 有规律的； 整齐的， 匀称的； 频繁的， 经常的； 正常的； 经常的； 正规的， 正式的
glacial	 adj.  冰川期的， 冰河时代的； 寒冷的， 冰冷的； 冷若冰霜的
picturesque	 adj.  如画的； 别致的； 生动的
informed	 adj.  有学识的； 见多识广的， 有见识的
dispute	 v.  争论； 对…表示异议 n. 争论；纠纷
aggression	 n.  侵略； 敌对的情绪或行为
refurbish	 vt.  再装修， 重新装饰
rugged	 adj.  崎岖的， 凹凸不平的； 艰难的； 粗犷的； 结实的， 耐用的； 粗野的， 不文雅的
lead	 v. 领导，引导；领先，占首位；通向，导致，
fraction	 n.  小部分， 一点儿， 少许
token	 adj.  象征性的 n. 表示，标志，象征；记号；信物；代币；礼券，代价券
filter	 v. 过滤；筛选；走漏；渗入，透过 n.  过滤器； 筛选
expect	 v.  预期， 期望， 指望
emotion	 n.  感情， 激情， 情绪
soothe	 vt.  缓和， 减轻； 抚慰， 安慰
cease	 v&n.  结束， 终止， 停止
assess	 vt.  估价； 评定
etiquette	 n.  礼节， 礼仪
prescription	 n.  处方， 药方； 开处方， 开药方
spectator	 n.  观众； 旁观者
submission	 n.  屈服， 服从； 提交， 呈递； 提交物； 看法， 意见
scarce	 adj.  缺乏的； 稀有的， 罕见的
obsess	 v.  迷住； 牵挂
utter	 adj.  完全的 vt. 出声；说
adequate	 adj.  适当的； 足够的； 适当的， 胜任的
fauna	 n.  动物群
uniformity	 n.  同样， 一致； 一致性
bustle	 vi.  奔忙， 匆匆忙忙 n. 忙乱嘈杂，喧嚣
dozen	 n.  一打， 十二个
tremendous	 adj.  惊人的； 巨大的
condense	 v.  压缩； 凝结
substantiate	 vt.  证实， 证明
divert	 vt.  转移…的注意力， 使分心； 使娱乐； 使转向， 使改道
hygiene	 n.  卫生； 卫生学
sage	 adj. 贤明的；审慎的 n.  智者， 圣人
tycoon	 n.  巨头， 大亨
conspicuous	 adj.  显眼的， 明显的
justice	 n.  法官； 司法； 正义， 公正
verse	 n.  诗歌； 韵文； 诗节
furious	 adj.  狂怒的， 狂暴的； 强烈的， 猛烈的
individual	 adj. 单独的；独特的 n.  个人， 个体
salmon	 n.  鲑鱼， 大马哈鱼
bouquet	 n.  花束； 香味， 芬芳
instinctual	 adj.  本能的
constrain	 vt.  束缚， 限制
empress	 n.  女皇， 皇后
informant	 n.  提供消息或情报的人， 线人； 提供资料的人； 合作者
tendon	 n.  腱
interim	 adj.  暂时的， 过渡的 n. 间歇，过渡期间
testimony	 n.  证词； 证据， 证明
enforce	 vt.  实施， 生效， 执行； 强迫， 迫使
glitter	 vi. 闪烁，闪耀 n.  灿烂的光辉； 诱惑力， 魅力
destined	 adj.  注定的； 以…为目的地的
fragile	 adj.  易碎的； 脆弱的； 纤巧的； 虚弱的
painstaking	 adj.  煞费苦心的， 勤勉的
sociology	 n.  社会学
stout	 adj.  结实的， 强壮的； 肥胖的； 顽强的
gigantic	 adj.  巨大的， 庞大的
distinct	 adj.  明显的， 清楚的； 确实的； 截然不同的
forage	 vi. 觅食；搜寻 n.  草料， 饲料
nomadic	 adj.  游牧的； 流浪的
geology	 n.  地质学； 地质概况
hedge	 v.  用篱笆围； 避免直接回答 n. 树篱；防止损失的措施；防备
dragonfly	 n.  蜻蜓
aware	 adj.  知道的； 意识到的
eligible	 adj.  符合条件的， 合格的； 适合的
alarm	 n. 闹钟；警报 vt.  使惊恐； 使担心
weed	 n.  杂草； 水草
Babylonian	 adj. 巴比伦的；奢华的 n.  巴比伦人
glacier	 n.  冰川， 冰河
ultimatum	 n.  最后通牒
horde	 n.  一大群人； 游牧部落
rainfall	 n.  降雨； 降雨量
racism	 n.  种族主义， 种族歧视
orientation	 n.  方向， 方位； 定位； 培训； 情况介绍
luxurious	 adj.  奢侈的， 奢华的
motion	 v.  做动作， 示意 n. 运动，移动；动作；提议，动议
idle	 adj. 懒散的；没有工作的，闲散的；空闲的；漫无目的的；无用的，无效的 v.  无所事事， 虚度
plight	 n.  困境， 苦境
match	 v.  匹配 n. 比赛；对手
fault	 n.  过错， 过失； 缺点， 弱点； 断层
interplay	 n&vi.  相互作用， 相互影响
hail	 v.  招呼； 高呼； 赞扬， 称颂； 下冰雹 n. 冰雹；一阵
accent	 n.  重音； 口音； 重音符号 vt.  重读
passive	 adj.  被动的， 消极的； 被动语态的
nauseous	 adj.  恶心的； 令人作呕的， 令人厌恶的
fragment	 v.  分裂， 成碎片 n.  碎片， 断片
granite	 n.  花岗岩， 花岗石
response	 n.  回答； 反应， 响应
refreshing	 adj.  使人耳目一新的； 提神的， 使人精神振作的
oblivious	 adj.  遗忘的； 未注意的， 不知不觉的
category	 n.  种类； 范畴
rival	 adj.  竞争的， 对抗的 vt. 与…相匹敌，比得上 n. 竞争对手
`;

const IELTS_TEXT = `emperor	n. 皇帝；君主
exact	a. 精确的；准确的
traditional	a. 传统的，惯例的；口传的，传说的
lack	n./vt. 缺乏，不足，没有
pardon	excl.（用于请求别人重复某事）什么，请再说一遍 n./vt. 原谅，宽恕；赦免
regent	n. 摄政者（代国王统治者）
burgeon	vi. 迅速成长；发展
argue	v. 争论；说服
barely	ad. 仅仅，几乎不；赤裸裸地，无遮蔽地
methane	n. 甲烷，沼气
hierarchy	n. 领导层；层次，等级
guidance	n. 指引，指导
easy-going	a. 脾气随和的，心平气和的；随便的
electrical	a. 电的，电学的，有关电的
electronic	a. 电子的
roll	film  胶卷
philosophy	n. 哲学；哲理
chronic	a. （疾病）慢性的；积习难改的
desirable	a. 值得拥有的；合意的；可取的，有利的
consortium	n. 集团；财团；社团，协会
buckle	n. 皮带扣环 v. 扣紧；（使）变形；弯曲
curry	n. 咖喱，咖喱饭菜  vt. 把（肉、蔬菜等）做成咖喱食品；梳刷（马毛等）
subliminal	a. 下意识的，潜意识的
chamber	n. 室；洞穴；（枪）膛
frequent	a. 频繁的，常见的，常用的
prosperous	a. 繁荣的，兴旺的；成功的
purpose	n. 目的，意图；用途，效果  v. 打算，企图，决心
variety	n. 品种，种类；变化，多样化
immigration	n. 外来的移民；移居
natural	a. 正常的，普通的，自然的；自然界的，天然的；天赋的，固有的
bet	v. 赌，打赌  n. 打赌，赌注
consumer	n. 消费者；用户
physician	n. 内科医生，医师
equal	a. 相等的  vt. 比得上
resort	n. 求助；诉诸；胜地  vi. 求助；诉诸
leadership	n. 领导，领导层；领导能力
equity	n. 公平，公正
excavate	vt. 挖掘，开凿
nuclear	a. 核能的，原子能的
mutual	a. 相互的；共同的
hectare	n. 公顷
density	n. 密集；浓度，密度
massive	a. 大而重的，厚实的，粗大的；大量的，大规模的
congratulate	vt. 祝贺
companion	n. 共事者；同伴
rig	vt. 操纵，垄断  n. 船桅（或船帆等）的装置；成套器械
input	n. 投入，输入；输入的数据  vt. 把……输入计算机
merely	ad. 仅仅，只不过
impart	vt. 给予，赋予；传授；告知，透露
forfeit	v. （因犯规等而）丧失，失去  n. 罚款；代价
calorie	n. 卡（路里）， 大卡（食物的热量）
van	n. 运货车
ventilation	n. 空气流通；通风设备，通风方法
intermediate	a. 中间的，中级的
eternal	a. 永恒的
invasion	n. 入侵，侵略
nevertheless	ad. 仍然；然而  conj. 然而，不过
celebrate	v. 赞扬，歌颂；庆祝
inspiring	a. 鼓舞（或激励）人心的；启发灵感的
attendance	n. 到场，出席；出勤；伺候，照料
optional	a. 可选择的，非强制的，随意的
enable	vt. 使能够，使成为可能
departmental	a. 部门的
heal	v. 治愈，康复；调停
dismantle	vt. 拆除；废除，取消
wage	n. 工资；[常 pl.] 报酬
landscape	n. 风景  vt. 对……作景观美化，美化（自然环境等）
emotion	n. 感情；情绪
commonwealth	n. [the C-] 英联邦；联合体
newsletter	n. 时事通讯，业务通讯
periodical	n. 期刊，杂志  a. 周期的，定期的
receptionist	n. 接待员
security	n. 安全，保障；抵押品；[pl.]证券
clip	n. （弹簧）夹子，回形针，别针；弹夹；修剪；剪报，电影（或电视）片断  v.（夹子、回形针等）夹住，扣住；剪，修剪
apace	ad. 快速地，急速地
yield	n. 产量  v. 出产；放弃
fair	a./ad. 公平的/地
regional	a. 局部范围的；地方（性）的，区域性的；全地区的，整个地区的
secure	v. 得到某物，获得；防护，保卫  a. 安全的；可靠的，放心的
preserve	vt. 保护；维持；保存，保藏；腌渍
reject	vt. 拒绝  /ˈriːdʒekt/ n. 被拒货品，不合格品
code	n. 密码；代码  vt. 把……编码
seek	v. 寻找；探索；追求
item	n. 条款，项目； （新闻等）一则
crown	n. 王冠；花冠；齿冠
effort	n. 努力，艰难的尝试；成就
point	n. 尖，尖端；点，小数点；条款，细目；分数，得分；要点，论点，观点  v. 指，指向；表明；瞄准
review	vt. 回顾；自习；评论  n. 回顾；评论
fabrication	n. 捏造，伪造；制作；构成
series	n. 一系列，连续；丛书
variation	n. 变化，变动；变种；变异；变更；变奏
margin	n. 差额，差距；页边空白；边缘；余地；幅度  v. 加旁注于；加边于
distraction	n. 分散注意力的事；使人分心的事；娱乐，消遣
complicate	vt. 使变复杂
tram	n. 有轨电车，电车轨道  v. 乘电车
maturity	n. 成熟；完善，完备，准备就绪；到期（应付款）
download	v. 下载
refer	v. 参考，查阅，查询；提到，谈及；引用；提交，上呈
interview	v./n. 接见，会见；采访；面试
extent	n. 范围；面积；广度，长度；程度
evacuate	v. 疏散；撤离
stint	n. 定量；限额
embankment	n. 筑堤；堤岸，路基
squash	n. 软式墙网球，壁球  v. 压碎，挤压；挤进，塞入；镇住，镇压；制止
federation	n. 联邦；同盟
surge	v. （人群等）蜂拥而出；波动，涌动  n. （感情等的）洋溢；猛增
physical	a. 身体的，肉体的；物理的，物理学的；物质的，有形的； n. 体检
justify	v. 证明……为正当的；为……辩护
score	v. 得分，记分；给（试卷等）打分，给……评分；刻痕于，画线于；获胜，成功  n. 得分，分数；乐谱；抓痕，划痕；二十
persuade	v. 说服，劝说；使相信
migration	n. 迁徙，移居，移民
overweight	a. 超重的，过重的  n. 超重，过重  vt. 使负担过重
cooperation	n. 合作，协作；配合
zoological	a. 动物学的
stamp	v. 跺（脚），重踏；在……上盖（字样或图案等）；重步走  n. 邮票，印花；印，图章；标志，印记；跺脚，顿足
whistle	v. 吹口哨  n. 口哨；呼啸而过
detective	n. 侦探  a. 侦探的
occupy	vt. 占用，占领；（使）忙碌于；（使）从事
ceremony	n. 典礼；仪式
diagnose	v. 诊断；判断
denote	v. 表示，指示；意味着
chink	n. 裂缝，裂口；一缕光；叮当声  v. （使）发出叮当声
iris	n. （pl. irises或irides）虹；（眼球的）虹膜
resource	n. [pl.] 资源，财力；应付办法，谋略；应变之才
entire	a. 全部的，整个的
epitomise	vt. 集中体现；概括
crocodile	n. 鳄鱼；鳄鱼皮
summit	n. （山等的）最高点，峰顶
ensure	vt. 确保，保证；担保；赋予
odour	n. 气味
accurate	a. 正确无误的；精确的
superior	a. 上级的，（在职位、地位等方面）较高的；优越的，优于……的，较……多的；优良的，卓越的；有优越感的，高傲的  n. 上级，长官
tender	a. 嫩的；脆弱的；温柔的
willing	a. 愿意的，乐意的
perform	v. 履行，执行，完成；表演，演出；（机器）运作
seep	vi. 漏出，渗漏
ambassador	n. 大使，使节
delinquency	n. 失职；行为不良
deliberate	a. 故意的；深思熟虑的；从容不迫的  /dɪˈlɪbəreɪt/ v. 深思熟虑；审议
implication	n. 含意；暗示，暗指；卷入，牵连
broom	n. 扫帚
opponent	n. 敌手，对手；反对者  a. 对立的，对抗的
sponsor	n. 发起者，赞助人，主办者；主顾   vt. 发起，主办；赞助，资助；惠顾
decisive	a. 决定性的；果断的
substantial	a. 可观的，大量的；坚固的，结实的；实质的；大体上的
questionnaire	n. 问卷，调查表
viewpoint	n. 观点，看法
routine	n. 例行公事；惯例  a. 例行的；常规的
nurture	vt. 培养；滋养  n. 营养品
slight	a. 轻微的，不足道的；纤细的，瘦弱的  vt./n. 轻视，藐视，轻蔑
genetic	a. 遗传的  n. [-s] 遗传学
similarly	ad. 同样地，类似地
leak	n. 漏洞；泄露 v. （使）漏，（使）渗出
literature	n. 文学（作品）；文献
suffer	v. 遭受，忍受；忍耐；容许；患病；受损失
impede	vt. 阻碍，妨碍
spring	n. 春天，春季；弹簧，发条；弹性，弹力；（源）泉；跳跃  v. 跳跃；涌现，突然出现；突然提出（或说出）
biological	a. 生物的；生物学的，有关生物学的
deduce	v. 演绎，推断
doctorate	n. 博士学位
absolute	a. 完全的，绝对的，纯粹的
theoretical	a. 理论（上）的
internship	n. 实习身份；实习医师
slender	a. 修长的，细长的，苗条的；微小的，微薄的
respondent	n. 回答者，响应者；调查对象；被告
surroundings	n. 周围的事物，环境
couple	n. （一）对，（一）双；夫妇；  v. 连接，联合，结合；结婚
voluntary	a. 自愿的，志愿的
submarine	n. 潜水艇  a. 水底的，海底的
commercial	a. 商业的，商品化的，贸易的  n. 商业广告
notion	n. 概念，观念；想法
lavatory	n. 盥洗室，厕所
tablet	n. 药片
actual	a. 实际的；真实的
fold	v. 折叠  n. 皱；折
instrument	n. 仪器；手段；工具；乐器
simplify	vt. 使简化
compulsory	a. 义务的；必须做的；强制性的；（课程）必修的
irritation	n. 激怒，恼怒；刺激物，恼人的事
expense	n. 花费，开支；消费，消耗；代价，损失
muddle	n. 一团糟，凌乱，混乱；（头脑）糊涂，困惑  vt. 将……弄成一团糟；使困惑，使糊涂；混淆
originate	v. 起源，发生；首创，创造
induce	vt. 引诱，劝使；引起，导致；感应
exchange	v. 交换，调换；交易；兑换；交流；谈话，争论  n. 交换，调换；交易（所）；兑换（率）；交流
disharmony	n. 不一致；不和谐
cosset	vt. 宠爱，溺爱 n. 宠儿
unique	a. 唯一的，独一无二的；极不寻常的，极好的
crossword	n. 纵横填字游戏
atomic	a. 原子（能）的
disagree	v. 不同意；不一致
check-up	n. 检查
silt	n. 淤泥  v. （用淤泥）阻塞
inclusive	a. 包括一切费用在内的；所有数目（或首尾日期）包括在内的；包容广阔的
reservation	n. 保留意见，存疑；预定，预订
transcript	n. 抄本，副本；文字记录
include	v. 包括，包含；计入
reasonable	a. 合理的，有道理的；通情达理的；适度的
abode	n. 房屋，家，住所
gadget	n. 小巧的器械，精巧的装置；小玩意
emergency	n. 紧急情况，突发事件
legacy	n. 遗产，遗赠
leisure	n. 空闲时间；悠闲
overlap	v. （使）部分重叠，交叠
counterpart	n. 与对方地位相当的人；配对物；副本
tune	vt. 调音；调节，调整  n. 调子；和谐
strike	v. 打；折磨  n. 罢工
ambiguous	a. 含糊其辞的； 不明确的，模棱两可的
represent	vt. 代表；表示；表现
vanish	vi. 突然消失； 不复存在，消逝
mechanism	n. 机械装置；机制，机理；办法
dispute	n. 争论，争端，争吵  v. 对……表示异议；争论，争吵
furniture	n. 家具
standard	n. 标准  a. 标准的
typical	a. 典型的
strengthen	vt. 加强，巩固
workaholic	n. 工作狂
unaware	a. 未意识到的
erosion	n. 腐蚀；磨损
exclusively	ad. 专有地，专门地
feather	n. 羽毛，翎毛
pronounceable	a. （指声音）发得出的；（指词）可发音的
bare	a. 赤裸的，光秃的
luggage	n. 行李
hose	n. 软管  vt. 用软管淋
bulb	n. 灯泡
internal	a. 内部的，国内的
ion	n. 离子
cruise	v. 航游，巡航；（出租车、船等）缓慢巡行 n. 旅游，游戈
illusion	n. 幻想中的事物，错误的观念；错觉，幻觉，假象
shave	n./v. 修面
incredible	a. 不可信的；难以置信的
vertebrate	n. 脊柱动物  a. 有脊柱的
industrious	a. 勤奋的，勤勉的，勤劳的
intestine	n. [解]肠
outpost	n. 前哨（站）；偏远村落
general	a. 一般的，普通的；全体的，普遍的；大体的，概括的；首席的  n. 将军
bother	v. 打扰，烦扰；烦恼，操心  n. 麻烦，烦扰
consignment	n. 交付，委托；投递，发送；所托运的货物
administrator	n. 管理者，管理人员；行政人员
convention	n. 大会，会议；惯例，常规，习俗；公约，协定
organic	a. 器官的；有机的；有机体的；组织的
trapeze	n. 高空秋千；吊架
intersection	n. 道路交叉口，十字路口
concept	n. 概念，观念；设想
cardiovascular	a. 心血管的
humble	a. 谦逊的，谦虚的；地位（或身份）低下的，卑贱的；简陋的，低劣的  vt. 使谦恭；使卑下；贬低
lecture	n. 演讲，讲课
counter	n. 柜台  ad. 相反
brass	n. 黄铜；黄铜器；铜管乐器
fauna	n. （某地区或某时期的）所有动物
expel	vt. 把……开除；驱逐
equator	n. （地球）赤道
invest	v. 投资；投入（时间、精力等）；授予，赋予
essay	n. （作为课程作业的）短文、文章；评论文
dedicate	vt. 献（身）；（在著作等上）题献词
astrology	n. 占星学；占星术
attain	vt. 达到；获得；完成
divisional	a. 部门的
ambition	n. 雄心，抱负；野心
range	n. 范围，领域；系列；（山）脉；射程  v.（在一定范围内）变化，变动；排列
ultimate	a. 最后的，最终的；根本的  n. 最好（或先进、伟大等）的事物，极品，精华
counsellor	n. 顾问，辅导顾问
flap	v. 拍打；（翅膀）拍动  n. 薄片；封盖；振动；激动
wastage	n. 消耗量；损耗；（雇员的）减员
earthquake	n. 地震
device	n. 装置，设备，仪表；方法；设计；手段；策略
regulate	v. 管制，控制；调节，校准；调整
mould	n. 霉，霉菌；模型，铸模；（人的）性格，气质  v. 用模子制作，浇铸；使形成，把……塑造成
potential	a. 潜在的；可能的  n. 潜力，潜能
discretion	n. 判断力；谨慎，审慎；明智
ambitious	a. 有抱负的，有雄心的，有野心的
brief	a. 短时间的，短暂的；简短的，简洁的  n. 概要，摘要  vt. 向……介绍基本情况，为……提供资讯
dorm	n. 宿舍
substitute	v. 代替，替换  n. 代替者，代替物，代用品
striking	a. 显著的，惹人注目的
pirate	n. 侵犯版权者；海盗  vt. 盗用，盗版
refrigerator	n. 冰箱；冷藏库
minimise	vt. 使减到最低限度；最小化
imaginative	a. 富有想象力的；创新的
profit	n. 利润；益处  v. 有利于；获益
decrepit	a. 破旧的；衰老的
ignorant	a. 无知的；愚昧的
leopard	n. 豹，美洲豹
mastery	n. 精通，熟练；控制
forecast	n./vt. 预报；预测；预想
precision	n. 准确，精确；精确度
quote	n. 引文，引语；估价，报价； [pl.] 引号  v. 引用，引述，引证；提出，提供；报价
comparative	a. 比较的；相当的
recruit	v. 招募（新兵），招收（新成员）；复原，恢复；补充  n. 新兵，新成员，新会员
gloss	n. 光泽，色泽；虚假的外表，假象；注解，解释  v. 使具有光泽；掩饰；曲解；作注释；发光，发亮
committee	n. 委员会，全体委员
exile	vt. 放逐，流放，使流亡  n. 流放，流亡；被流放者，背井离乡者，流犯
representative	n. 代表，代理人  a. 典型的，有代表性的
reverse	n. 相反，颠倒；背面，后面  a. 相反的；倒转的，颠倒的  v. 颠倒，（使）倒退
finance	vt. 为……提供资金  n. 财政，金融； [常pl.] 财务情况
resign	v. 辞职；辞去；放弃
preparation	n. 准备（工作），预备；制剂
eyesight	n. 视力
thrive	vi. 兴旺，繁荣
judgment	n. 意见；审判；判断（力）
outward	a. 外面的；外表的，表面的
consequently	ad. 因此，因而
entertain	v. （使）欢乐，（使）娱乐；招待
withstand	vt. 抵挡；经受住
anthropologist	n. 人类学家
comb	n. 梳子；蜂巢；（鸡等的）肉冠，冠状物  v. 梳理；搜寻，彻底搜查
suitably	ad. 合适地，适宜地，相称地
pulley	n. 滑轮；滑车
privilege	n. 特权，优惠，特许  vt. 给予特权，特别优待
infrastructure	n. 基础结构，基础设施
allocate	vt. 分配；分派
qualification	n. 资格，合格；技能；限定，条件；合格证
expand	v. （使）膨胀，（使）扩张；张开，展开；详述
trap	n. 陷阱，圈套，诡计  vt. 诱捕，诱骗，使中圈套；使陷入困境，使受限制
intern	vt. 拘禁，软禁   /ˈɪntɜːn/ n. 实习生
repaint	v. 重新油漆，重画
specialist	n. 专家；专科医生
migratory	a. 迁徙的，迁居的；流动的，游牧的
nutrition	n. 营养；营养学
inlet	n. 入口；进（水）口，水湾
censor	vt. 审查，检查（书报）  n. 检查员
widespread	a. 分布广的；普遍的
hazard	n. 危险，冒险  v. 尝试着做（或提出）；冒……风险
rear	a. 后方的，后部的；背后的  n. 后部，尾部  v. 饲养，抚养；种植
shareholder	n. 股票持有人；股东
bid	n./v. 出价；投标
alight	a. 点着的  vi. 降落，飞落；从（公共汽车等）下来
credit	vt. 记入贷方；把……归于  n. 信用贷款，赊欠；信任，相信；贷方；荣誉，名望；光荣，功劳；学分
shrewd	a. 机灵的；精明的
desert	n. 沙漠；荒地  a. 沙漠的；荒凉的  /dɪˈzɜːt/ v. 舍弃
conclude	v. 推断出；作结论
explosive	n. 爆炸物，炸药  a. 爆炸的，爆发的；使人冲动的
inherent	a. 内在的；生来就有的
world-wide	a./ad. 遍及全球的/地
grope	v. （暗中）摸索
lever	vt. （用杠杆）撬动  n. 杠杆；施压手段
ethical	a. （有关）道德的；伦理的
improvement	n. 改进，进步；改进措施；改进处
vacant	a. 未占用的，空的
truant	vi. 逃避责任；旷课  n. 逃学者；逃避者
scandal	n. 丑事，丑闻；恶意诽谤；流言飞语；反感，愤慨
latent	a. 潜在的，潜伏的，不易察觉的
tenant	n. 承租人；房客；佃户
psychiatric	a. 精神病的；治疗精神病的
bolster	vt. 支持，支撑；改善  n. 垫子
immigrant	n. 移民；侨民
sequence	n. 一系列，一连串；顺序，次序
ecosystem	n. 生态系统
concern	vt. 涉及；使关心；让（人）担忧  n. 关心；关注
transfer	v. 搬，转移；调动，转学；转让，过户；转车，换乘  /ˈtrænsfɜː(r)/ n. 转移；调动；转车，换乘
exotic	a. 外来的；奇异的；醒目的，吸引人的
evaporate	v. （使）蒸发；消失；不复存在
destiny	n. 命运，定数
hide	v. （躲）藏  n. 皮革，兽皮
former	a. 以前的  n. 前者
awful	a. 糟糕的
sore	a. 痛的；恼火的；剧烈的  n. 疮
virtually	ad. 几乎，差不多；实际上，事实上
tangibly	ad. 可触摸地；可感知地；有形地
windscreen	n. 挡风玻璃；风档
decent	a. 大方的，体面的，像样的；正派的，合乎礼仪的
alluvial	a. [地] 冲积的，淤积的  n. 冲积土（或层、矿床），淤积土
slum	n. 贫民窟，贫民区
distill	vt. （使）蒸馏，提取
economical	a. 节约的；经济的
fate	n. 命运，天数
medication	n. 药；药物
target	n. 目标；对象，靶子  vt. 对准，面向
independent	a. 独立的，自主的，不受约束的   n. 中立派，无党派议员
radius	n. 半径；周围，范围
fossil	n. 化石；老顽固
shade	n. 阴凉处；（灯）罩；暗部；色度；细微差别  vt. 遮蔽，遮光；把……涂暗
headmaster	n. （中小学）校长
wean	vt. （使）断奶，（使）戒掉
comprise	vt. 包含；由……组成
stable	a. 稳定的，稳固的，安定的；沉稳的，持重的  n. 马厩
disappointing	a. 令人失望的
delta	n. 三角洲；希腊字母表的第四个字母
urban	a. 都市的；住在都市的
compliment	n. 赞美； [pl.] 问候，祝贺
execution	n. 执行，实施；处决
heritage	n. 遗产；传统
appropriate	a. 适当的  /əˈprəuprɪeɪt/ vt. 占有，挪用；拨出（款项）
annual	a. 每年的，年度的  n. 年刊，年鉴；一年生植物
depict	vt. 描绘，描述
literacy	n. 有文化；有教养；读写能力
calculate	v. 计算，推算；估计，推测；计划，打算
luxury	n. 豪华（品）；奢侈（品）  a. 奢华的
souvenir	n. 纪念品，纪念物
purchase	vt. 买，购买  n. 购买的物品
constant	a. 经常的，不断的；坚定的，永恒的，忠实的；持续的，不变的  n. 常数，恒量
dormancy	n. 休眠；催眠状态；冬眠；隐匿
particular	a. 特殊的，特别的；特定的，个别的；详细的  n. 详情，细目，细节
subscription	n. 订阅，订购；订阅费，订购款；捐赠，捐助；签字，签署
pitch	v. 投掷；颠簸；为……定音高  n. 沥青；场地；程度；最高点；音高
entitle	vt. 给……权利（或资格）；给（书、文章等）题名；给……以称号
shutter	n. 百叶窗；（照相机的）快门
demolish	vt. 破坏；拆除；驳倒（论点等），推翻
durable	n. 耐用品  a. 耐久的；耐用的
cope	vi. （成功地）应付；（妥善地）处理
circulation	n. （体液的）循环，（水、空气等的）流通；流传，传播；发行，发行量
tradition	n. 传统；惯例
benefit	v. 使受益；有益于，得益于  n. 益处，好处；恩惠；救济金，保险金，津贴
decay	n. 腐烂，腐朽；衰败（或衰退）状态  v. 腐烂，腐朽；衰败，衰退
distribution	n. 分发，分配；配给物；散布，分布
defect	n. 缺点，不足之处   /dɪˈfekt/ vi. 叛变
oppose	v. 反对、反抗
statistics	n. 统计数字，统计资料；统计学
stuffy	a. 不透气的，（空气）不新鲜的，不通风的；乏味的
approximately	ad. 近似，大约
excusable	a. 可原谅的；可谅解的；可容许的
propose	v. 提议，建议；提名，推荐；打算；（向某人）求婚
ornament	n. 装饰；装饰物  vt. 装饰，修饰，美化
energetic	a. 有力的，精力旺盛的；积极的
atmospheric	a. 大气的，空气的；大气层的；大气所引起的
cooperative	a. 合作的，协作的  n. 合作社
corrode	v. 腐蚀；侵蚀
honour	n. 光荣；尊敬  vt. 向……示敬意；信守，执行（承诺）
except	vt. 将……除外  prep. 除……外
soluble	a. 可溶的；可解决的
administration	n. 管理（部门）；行政（机关）
environment	n. 周围状况；环境
license	n. 许可（证），执照  vt. 批准，准许
underline	vt. 画线于……之下；强调
activate	vt. 激活；使活动，使活化
major	a. 主要的   n. 专业（学生）  vi. 主修，专攻
specific	a. 特定的；明确的
objective	n. 目标，目的  a. 客观的
concentrate	v. 全神贯注，全力以赴；集中，聚焦；浓缩  n. 浓缩物，浓缩液
conflict	n. 冲突  /kənˈflikt/ vi. 冲突，抵触
antidote	n. 解毒药；矫正方法
discover	vt. 发现，找到；发觉
necessarily	ad. 必要地；必然地
continent	n. 大陆，陆地；洲
turret	n. 塔楼，角楼
elastic	a. 有弹性的；灵活的  n. 松紧带
enhance	vt. 提高，增强；增进
demonstration	n. 论证，证明；示范；显示，表露；示威游行
interrupt	v. 中断，中止；阻碍；打断，打扰
redundant	a. （因人员过剩而）被解雇的；多余的，过剩的；累赘的，冗长的
mishandle	vt. 粗暴地对待；错误地处理，胡乱操作
discovery	n. 发现
alcohol	n. 含酒精饮料，酒；酒精
suppression	n. 镇压，压制，抑制；扑灭
mainly	ad. 大体上，主要地
property	n. 财产，所有物；性质，特性；房产，地产
naked	a. 裸体的，无遮蔽的
feature	n. 特征，特色； [pl.] 面貌，相貌；特定，专题节目；故事片  v. 以……为特色；由……主演；占重要地位
lens	n. 透镜；镜片；镜头
coordinator	n. 协调者
nourish	vt. 养育，滋养；培养（情绪、观点等）
crisp	a. 脆的；利落的  n. [pl.] 油炸土豆片
guilty	a. 内疚的；有罪的
crack	n. 裂缝，缝隙；爆裂声  v. （使）破裂；（使）发出爆裂声；重击；崩溃，瓦解
flourish	v. 繁荣；茂盛；兴旺；健康幸福  n. （为引起注意的）夸张动作；修饰
reserve	vt. 预订，预约；保留；储备  n. 储备（量）；自然保护区
dimensional	a. ……度空间的，……维的
gravel	n. 沙砾，砾石
advertisement	n. 广告，公告；广告活动，宣传
insulation	n. 隔绝，隔绝状态；绝缘（材料），隔热，隔音
hesitation	n. 犹豫，踌躇
undermine	vt. 削弱；破坏
eliminate	vt. 消灭，消除；淘汰
volcano	n. 火山
exclude	vt. 把……排斥在外；将（某物）排除，不包括
laundry	n. 洗衣房；待洗衣服
apparently	ad. 显然；看来，似乎
gelatin	n. 明胶
stimulate	vt. 刺激；使兴奋；激发，激励
fuel	n. 燃料  v. 给……加燃料
operational	a. 运转的；操作的；运营的，业务的
image	n. 形象；印象；图像
distribute	vt. 分发，分配，分送；散布，分布；分类，分区
notice	board 布告牌，公告牌
intend	v. 想要，打算
empirical	a. 经验主义的，以经验为依据的
probation	n. 缓刑（制）；（对人的）试用；试用期
depression	n. 忧愁，消沉；低气压，低压；不景气，萧条（期）
proximity	n. 接近，邻近；亲近
attention	n. 注意（力），留心；立正
factual	a. 事实的；真实的，确凿的
acclaim	vt. 向……欢呼，为……喝彩  n. 称赞；欢迎
carry	v. 运送，搬运；传送，传播  n. 运载；射程
devastate	vt. 破坏，毁坏；使震惊，使极为悲痛
response	n. 回答，答复；反应，响应
postcode	n. 邮政编码
dull	a. 乏味的；阴沉的
basis	n. 基础；根据；原则
tropical	a. 热带的；炎热的
rumour	n. 谣传，谣言
endeavour	n./vi. 努力，尽力；尝试
address	vt. 致函，写姓名地址；向……讲话，演说；处理，对付  n. 地址；致词
payment	n. 支付；支付的款项
superb	a. 极好的；高质量的
intention	n. 意图，目的
demonstrate	v. 认证，证实；演示，说明；举行示威游行（或集会）
agenda	n. 议程；议程表
illuminate	vt. 照亮；阐明，解释；启发
slim	a. 苗条的；薄的  vi. 变苗条
warrant	v. 保证；证明……正当  n. 授权；许可证
optimism	n. 乐观，乐观主义
rank	v. 排列；分等  n. 等级；军衔
dimension	n. 尺寸，（长、宽、厚、深）度；方面、特点；维、元；  [pl.] 面积
avail	vt. 有帮助，有益，有用  n. 效用；利益
dioxide	n. 二氧化物
block	n. 一排房屋，街区；阻塞；大块木料（或石料、金属） vt. 阻塞，拦阻；封锁
administrative	a. 管理的，行政的
frustrating	a. 令人泄气的，使人沮丧的
resistant	a. 抵抗的，有抵抗力的
overdue	a. 过期未付的；逾期的；过度的，过火的；迟到的，延误的
impressive	a. 给人深刻印象的，令人敬佩的
analysis	n. 分析，分解
verdict	n. 裁定；定论；判断；意见
refresher	n. 提神物；帮助记忆的东西或人；补习课程
blaze	v. 熊熊燃烧；发（强）光；迸发  n. 火焰
misjudge	vt. 判断错误
pregnant	a. 怀孕的，妊娠的；充满的
unyielding	a. 顽强的；坚硬的；不能弯曲的，坚固的
exterior	a. 外部的，外表的  n. 外部，外表
approve	v. 赞成；批准，同意
client	n. 委托人；顾客，客户
vernacular	n. 本国话；方言；土语；（建筑的）民间风格  a. 本国语的
compare	v. 比较；对比
transparent	a. 透明的；清澈的；明显的；易懂的
cassette	n. 盒式录音（或录像）带
deputy	n. 代理人；代表
fraud	n. 诈骗罪；骗子；伪产品，冒牌货
bind	v. 捆绑，系；约束；凝结
fragrance	n. 芳香，香味；香水
marketplace	n. 市场，集市
acute	a. 灵敏的；剧烈的，猛烈的
ripe	a. （水果或庄稼）成熟的；时机成熟的
vet	vt. 审查，仔细检查  n. 兽医
formulate	vt. 系统阐述，明确表达；构想出（计划、方法等），规划（制度等）
collate	vt. 对照；核对；整理（文件、书页等）
infer	v. 推断，猜想
fiction	n. 小说
ability	n. 能力；本领；才能
sector	n. 部分，部门；防御地段，防区；扇形
creep	vi. 悄悄移动；缓慢进行；爬行
casual	a. 偶然的，碰巧的，不经意的；临时的，非正式的
interpretation	n. 口译；解释，诠释；（表演、演奏的）艺术处理
trimester	n. 三月期；学期
consensus	n. 共识；（意见）一致
redevelopment	n. 重新规划；重新建设
auditorium	n. 礼堂；观众席
condition	n. 状况，状态； [pl.] 环境，形势；条件，前提  vt. 训练；使适应，使习惯于；对……有重要影响
furnish	vt. 布置，为……配置家具；供应，提供；装备
stabilise	v. （使）稳定，（使）稳固
incoming	a. 进来的  n. [pl.] 收入
alignment	n. 排成直线；联盟
boot	n. （长筒）靴子；（汽车后部的）行李箱； [the ~] 解雇
ozone layer	n.臭氧层
acid	n. 酸  a. 酸的；尖刻的
booming	a. 发展迅速的；激增的
definite	a. 明确的，肯定的；清楚的
deem	vt. 认为
narrator	n. 讲述者，叙述者
reorient	vt. 重新定位方位；重新定位；使适应
reckon	v. 认为，估计；测算，测量；料想，指望
tutorial	n. 大学导师的辅导课；指南  a. 家庭教师的，辅导教师的，大学导师的；辅导的，指导的
reference	n. 参考，参考书目；提及，涉及；证明书（或人）；介绍（人）
sledge	n. 雪橇  vi. 乘雪橇
exaggerate	v. 夸大，夸张
restriction	n. 限制，约束
abandon	vt. 放弃，遗弃
priority	n. 优先（权），重点；优先考虑的事
terrify	vt. 使恐怖，使惊吓
habitat	n. 栖息地，住处
encourage	v. 鼓励；促进，激发
celebrity	n. 名声；知名人士
significance	n. 重要性，意义
magnetic	a. 磁的，有磁性的；有吸引力的
slippery	a. 滑的，滑溜的；油滑的，狡猾的；棘手的
graphic	a. 文学的；生动的，形象的；绘画的，图表的
examine	vt. 检查；调查，研究；测验
opportunity	n. 机会，时机
distinguish	v. 区别，辨别；辨认出；使杰出
blanket	n. 毯子；厚的覆盖物
arrogance	n. 傲慢，自大
era	n. 纪元；时代
stimulus	n. 刺激（物），促进（因素）
roam	v. 随便走，漫游；徜徉；漫谈某事  n. 漫步；徘徊
provided	conj. 倘若，只要，假如
comparison	n. 比较，对比，对照；比喻，比拟
publicity	n. 宣传，宣扬；公众的注意，名声
depend	vi. 依靠，依赖；信赖，相信；决定于，视……而定
composition	n. 作品；写作，作曲；结构，组成，成分
architecture	n. 建筑学；建筑设计，建筑风格  [计] 体系结构
hurdle	n. 障碍；跳栏  v. 越过障碍
teamwork	n. 协力合作，团队合作；配合
damp	a. 潮湿的  n. 潮湿，湿气  vt. 使潮湿；减弱，抑制；（使）沮丧
staff	n. 全体职工，工作人员；棒；（军队的）全体参谋人员  vt. 为……配备人员；任职于
symbol	n. 象征；符号
apt	a. 易于……的；适宜的；敏捷的
homogeneous	a. 同种类的，由相同（或同类型）事物（或人）组成的
conserve	vt. 保护；保存，储存；节约
spasm	n. 痉挛；抽搐；（活动、情感等的）突发、阵发
invisible	a. 看不见的，无形的
devote	vt. 将……奉献给；致力（于）
illustrate	v. （用图等）说明，举例说明，阐明；给……作插图说明
terrace	n. 一层梯田；一排并列的房子；阳台
dynamic	a. 动力的；活跃的，充满活力的，精力充沛的
throughout	prep. lad. 各处；遍及；在整个……期间
smart	a. 漂亮的，时髦的；高明的
criticise	v. 批评，非难，责备；评论
beyond	prep. 在……较远的一边；超出；除……之外
hinterland	n. 内地，腹地，内陆
fumes	n. 烟，气，汽
positive	a. 明确的；肯定的；积极的
assistant	a. 助理的；副的  n. 助理
cannon	n. 加农炮，大炮
obligation	n. 义务，职责，责任
hockey	n. 曲棍球；冰球
liberty	n. 自由，自由权；许可，准许  [常pl.] 过于随便，放肆
pesticide	n. 杀虫剂，农药
poll	n. 民意测验；政治选举，大选  v. 对……进行民意测验；获得……选票
refundable	a. 可退还的，可归还的，可偿还的
homesick	a. 想家的，思乡的
compassionate	a. 有同情心的，表示怜悯的
orientate	vt. 使适应，使熟悉情况（或环境等）；给……定位，给……定向；使朝向；转至特定方向；适应（=orient）
insight	n. 洞察力，深刻的了解；顿悟
resist	v. 抵抗；抗（病等）；耐（热等）
glide	vi./n. 滑行，滑翔
casualty	n. 伤亡（人员），伤亡者；损失的东西；伤亡事故
belief	n. 信仰，信条；相信
concentration	n. 集中；专心，专注；浓缩，浓度
tug	v. 用力拖（或拉）
proceed	vi. 进行；前进；继续
status	n. 地位；身份；状况
document	n. 公文，文件，证件 vt. 用文件（或文献等）证明；记载
mattress	n. 床垫
hostile	a. 敌方的；不友善的；不利的
intervene	vi. 干涉，干扰；介于其间
promote	vt. 促进；提升；促销
bump	v. 碰，撞；颠簸着前进  n. 碰撞；隆起物
reunion	n. 重聚，团聚；（久别后的）聚会，联谊活动
digestive	a. 消化的；和消化有关的
homestay	n. 在当地居民家居住的时期
commit	v. 把……交托给，提交；犯（错误），干（坏事）
practically	ad. 几乎，简直；实际上
acrobat	n. 特技演员；杂技演员
revenue	n. （尤指大宗的）收入；税收
nickel	n. 镍；（美国或加拿大的）五分镍币
limp	a. 软的；无力的
spit	v. 吐唾沫（或痰）；喷出  n. 唾液，唾沫
irregularity	n. 不规则，无规律
breeze	n. 微风，和风
avenue	n. 林荫道，大街；方法，途径
magnify	vt. 放大，扩大
hive	n. 蜂房，蜂箱；蜂房内的蜂群；闹市，忙碌之地  v. （使）入蜂箱；群居
oxide	n. 氧化物
calf	n. 牛犊；崽，幼兽
foremost	a. 最好的；最重要的
procedure	n. 程序，手续；过程
assemble	v. 集合；装配
plagiarism	n. （文学、学说等的）剽窃，抄袭；剽窃物
gallop	v./n. 奔驰，飞跑，飞驰
pledge	v. 正式承诺；发誓，保证；抵押，典当  n. 誓约，保证；抵押
effective	a. 有效的，生效的；给人深刻印象的，显著的
appreciate	v. 赏识，鉴赏；感激；涨价，增值
deny	v. 否认，否定；拒绝
union	n. 协会，工会，同盟；联合，合并
responsibility	n. 责任，责任心；职责，任务
conform	vi. 遵守，服从；适应，顺应；相一致，相符合
handy	a. 方便的；手边的；手巧的
notify	vt. 通知，报告
splendid	a. 壮观的，壮丽的，极好的；堂皇的，豪华的；灿烂的，辉煌的
direction	n. 方向；趋势，动向； [pl.] 用法说明；指导
execute	vt. 将……处死；实施，执行
witness	n. 证据；目击者  v. 目击；为……作证
elbow	n. 肘；（衣服的）肘部
limited	a. 有限的
vessel	n. <总称>船只；容器；血管
private	a. 私人的；私下的；私立的
stereo	a. 立体声的  n. 立体声（装置）
soak	v. 浸泡
stout	a. 发胖的，肥胖的，强壮的；结实的，牢固的；顽强的，坚毅的
greasy	a. 多脂的；油滑的
boast	n./v. 自夸；夸耀
swift	a. 快的；敏捷的，迅速的
ignorance	n. 无知，愚昧；不知道
aesthetic	a. 美学的；审美的
screen	n. 屏幕，银幕；遮蔽；屏风，帘；筛子  vt. 掩蔽，遮蔽；包庇；筛选；放映（电影），播放（电视节目）
absent	a. 不在场的；心不在焉的
scrape	v./n. 刮，擦
promotion	n. 提升，晋级；促进，增进；发起，发扬；宣传，推销
recreation	n. 娱乐，消遣
specialise	v. 专门研究，专攻；专用于，使适应特殊目的
magnificent	a. 壮丽的，宏伟的，华丽的；高尚的
spasmodic	a. 痉挛的；间歇性的
fund	n. 基金，专款；储备，蕴藏； [pl.] 存款，资金  vt. 为……提供资金，给……拨款
perceive	vt. 感知，察觉；认识到，理解
manufacturer	n. 制造商，制造厂，生产者
specification	n. [常pl.] 规格，规范；明确说明；（产品等的）说明书
schedule	vt. 安排；列入，收进（清单等）  n. 时刻表；清单
arrangement	n. 安排； [常pl.] 准备工作
destruction	n. 破坏，毁灭，摧毁
extinguisher	n. 灭火器；灭火者
assume	vt. 假定，设想；承担（责任），就（职）
proportion	n. 比例；部分；相称
forth	ad. 离去，外出；向前；向某处
referee	v. 裁判；仲裁，调停  n. 裁判（员）；仲裁人，调停人；证明人，介绍人
forgo	vt. 放弃，抛弃；作罢
assistantship	n. （给研究生的）半工半读助学金，（大学）研究生助教奖学金
conversation	n. 会话，谈话
recommendation	n. 推荐，推荐信；劝告，建议
graph	n. 图，图表，曲线图
offset	vt. 抵消，补偿，弥补
humanity	n. 人类，人；人性；人道，仁慈； [pl.] 人文学科
intact	a. 完整无缺的；完好无损的
stripe	n. 条纹
mechanical	a. 机械的，机械制造的；呆板的；习惯性的；体力的
junction	n. 连接；联结点；交叉路口
siesta	n. 午睡，午休
detect	vt. 发现，察觉；侦查，探测
detour	n. 弯路，便道  v. 迂回，绕道
staircase	n. 楼梯
arthritis	n. 关节炎
barrier	n. 栅栏；关卡，检票口；障碍，隔阂；屏障
replace	vt. 代替；更换；把……放回原处
justice	n. 正义，公正；司法
diploma	n. 毕业文凭（或证书）；资格证书
visa	n. 签证
cosmic	a. 宇宙的
extendable	a. 可延伸的，可展开的，可扩张的
abundance	n. 大量，丰富，充足，充裕
supervisor	n. 监督人，管理人，指导者；主管
jumble	n. 混杂，掺杂；供义卖的旧杂货  vt. 混杂，掺杂
equip	vt. 装备，配备；使有能力，使有准备
permanent	a. 永久的，持久的
embed	vt. 把……嵌入（或埋入、插入），扎牢；使深留脑中
orientation	n. 定位；方向，方位；情况介绍；培训，训练
deprive	vt. 剥夺；使丧失
amaze	vt. 使惊奇，使惊愕
dividend	n. 红利，股息；回报，效益；被除数
preference	n. 喜爱；偏爱的事物（或人）；优先
contract	n. 契约，合同  /kənˈtrækt/ v. 缩小；签约
uneasy	a. 心神不安的；担心的
automatically	ad. 自动地；无意识地
female	a. 女（性）的；雌的  n. 女子
asset	n. 财产；优点
athlete	n. 运动员；体育家
clarity	n. 清楚
swap	v./n. 交换
sophisticated	a. 老于世故的，老练的；精密的，尖端的，先进的；复杂的；高雅的，有教养的
bulk	n. 大量；大批
machinery	n. <总称> 机械；机构
intimate	a. 亲密的，密切的；私人的，个人的；小圈子内的  n. 至交，密友  /ˈɪntɪmeɪt/ vt. 暗示，提示，透露
restrict	vt. 限制，约束
waist	n. 腰，腰部
calibre	n. 质量，才干，能力；口径
harsh	a. 严厉的，严酷的；粗糙的，毛糙的；刻薄的；（天气或生活环境）恶劣的；刺耳的，刺目的
parliament	n. 议会，国会
flight	n. 航班
remind	vt. 提醒，使想起；使发生联想
aquarium	n. 养鱼池；玻璃缸；水族馆
cell	n. 细胞；小房间；电池
dweller	n. 居住者，居民
declare	v. 正式宣布；声明；断言
suitcase	n. 手提箱；衣箱
graduate	n. （尤指大学）毕业生；研究生  /ˈgrædʒueɪt/ v. （使）毕业；获得学位
predict	v. 预言；预告
headquarters	n. 总部，总公司；大本营；司令部
coverage	n. 新闻报道；覆盖范围
enforce	vt. 实施，执行；强制，迫使
specialty	n. 特产；特长
intrinsic	a. 固有的，内在的；本质的
medical	a. 医学的，医疗的；内科的
stick	v. 刺，戳；黏贴，黏住；卡住，陷住
realistic	a. 现实（主义的），实际的；恰如其分的；逼真的
indifferent	a. 冷漠的，不关心的
retailer	n. 零售商人；复述者，传播者
turnover	n. 营业额；人事变动率；货物周转率
brand	n. 商标；品牌  vt. 铭刻，打烙印于；丑化
accompany	vt. 陪伴；伴随，与……同时发生；伴奏
cheat	v. 欺骗；作弊  n. 欺骗；骗子
mention	n./v. 提及，说起
level	n. 水平面，水平线；高度，水平；等级  a. 平的、水平的；同高度的，同等程度的；平稳的；冷静的  v. （使）变平坦
lateral	a. 侧面的，旁边的
dense	a. 密集的；浓厚的
flash	v. 闪光，闪耀  n. 闪烁；闪光灯
snack	n. 快餐，小吃；点心
marvellous	n. 令人惊奇的；奇特的，非凡的；奇迹般的，不可思议的；绝妙的
export	v. 出口；输出，传播  /ˈekspɔːt/ n. 出口；输出；出口商品
tribute	n. 贡品；颂词，称赞；（表示敬意的）礼物
sanitary	a. 清洁的；保健的，卫生的  n. （有卫生设备的）公共厕所
submit	v. 屈从；提交
archive	n. 档案；档案室  vt. 存档
anecdotal	a. 轶话的，轶闻趣事的
shorthand	n. 速记法；速记
exceptional	a. 例外的；异常的
rude	a. 粗鲁的；粗糙的
resume	v. （中断后）重新开始，继续恢复
bookrest	n. 阅书架
primitive	a. 原始的，上古的；简单的，粗糙的  n. 原始人；原始事物
craft	n. 工艺，手艺；船；航空器
hire	v./n. 租用；雇用
goggles	n. 护目镜；风镜；游泳镜
thereby	ad. 因此，从而
stake	n. 桩；火刑柱；利害关系；股份；赌金  vt. 以……打赌；拿……冒险
barge	n. 驳船  v. 猛撞；闯
aerobics	n. 有氧运动
shrub	n. 灌木
slat	n. 板条，狭板  vt. 用板条制作
legal	a. 法律的；合法的
cinematography	n. 电影摄影术
imagination	n. 想象（力）；想象出来的事物
bronchitis	n. [医] 支气管炎
exacerbate	vt. 恶化，加剧
intrusion	n. 闯入；打搅；侵扰
cancel	v. 取消，废除；抵消，对消；删去，划掉
cork	n. 软木塞  vt. 用软木塞塞住
data	n. 数据；资料
buffalo	n. 水牛；（北美）野牛
insufficient	a. 不足的，不够的
grocery	n. 杂货店；食品，杂货
humid	a. 湿的，潮湿的，湿润的，多潮气的
relation	n. 关系，联系；亲属，亲戚
confuse	vt. 使混乱，混淆；使迷惑，使糊涂
correspondence	n. 通信，信件；符合，一致；对应
allocation	n. 配给，分配，安置；配给量
entertainment	n. 招待，款待；娱乐（业）；供消遣的事物
conquer	vt. 征服，战胜，占领；克服，破除（坏习惯等）
decoration	n. 装饰，装潢；装饰品
reward	n. 奖赏；报酬  vt. 酬谢；奖励
larva	n. [pl. larvae] 幼虫，幼体
semester	n. 学期
offspring	n. 子女，后代；产物
occasional	a. 偶尔的，间或发生的
crater	n. 火山口；坑
ensue	vi. 继而发生；接着发生
instruct	vt. 教导；指示，命令
declaration	n. 宣布；宣言，声明（书）
flexibility	n. 柔韧，有弹性；柔顺，温顺；灵活性；适应性
native	a. 当地（人）的  n. 本地人，本国人
significant	a. 有意义的；重大的，重要的
loyalty	n. 忠诚，忠心
conditioner	n. 护发素，护发剂；调节物；调节器，调节装置
reduce	v. 减少，缩小；简化
controversy	n. 争论，辩论，论战
service	n. 服务，帮助；公共设施，公用事业；维修，保养；行政部门，服务机构  vt. 维修，保养
dwell	vi. 居住；栖身
sensation	n. （感官的）感觉能力；感觉，知觉；轰动，引起轰动的事件（或人物）
scrap	n. 碎屑  vt. 废弃；抛弃
anxious	a. 渴望的；忧虑的
recipient	n. 接受者
identical	a. 完全相同的，同一的
clay	n. 泥土，黏土
rival	n. 竞争者，竞争对手；可与匹敌的人（或物）  a. 竞争的，对抗的  vt. 与……竞争；与……匹敌，比得上；竞争，对抗
tropospheric	a. 对流层的
attraction	n. 爱慕，吸引；吸引力；具有吸引力的事（或人）
earthwork	n. 土方（工程）
surround	vt. 围绕；包围
impression	n. 印象，感想；印记，压痕
horrify	vt. 使恐惧，使惊骇；使震惊；使感到厌恶
introduction	n. 介绍；传入，引进；导言，绪论
compact	a. 紧密的，结实的；简明的；紧凑的  vt. 使紧凑，压缩
enquire	v. 打听，询问；查问，调查
onwards	ad. 向前地，前进地
memorandum	n. 备忘录，摘要
rectangular	a. 长方形的，矩形的
kidney	n. 肾，肾脏
standpoint	n. 立场；观点
curative	a. 有疗效的；医疗的
predominantly	ad. 主要地；重要地；显著地
clutch	n. 离合器； [常 pl.] 控制  v. 企图抓；抓紧
combine	v. 联合，结合
chart	n. 图，图表；海图  vt. 记录；用图表表示；制图
asthma	n. 哮喘症
signature	n. 签名，签字；签署
occasion	n. 时刻，时候；场合；重大（或特殊）活动，盛会；时机，机会；起因，理由  vt. 引起，惹起
mineral	n. 矿物，矿石
invaluable	a. 无价的
recover	v. 重新获得，重新得到；使复原，使康复；收回，换回
moderation	n. 温和，中庸；适度，合理
documentation	n. 文件证据，文献资料，文件
critical	a. 批评的，评论的；危急的，紧要的；临界的；挑剔的
vocational	a. 职业的，业务的
summary	n. 摘要，概要  a. 概括的，简略的
remove	vt. 排除，消除；搬迁，移动；开除，解除  n. 距离，间距
coffer	n. 保险箱
bound	a. 负有义务的；一定的，必然的
mercury	n. 水银
trinket	n. 小装饰品；不值钱的珠宝
expire	v. 期满；终止
accessible	a. 能接近的；易达到的
turbine	n. 涡轮机，汽轮机
backbone	n. 脊椎；骨干；支柱
attribute	vt. 把……归于  /ˈætrɪbjuːt/ n. 属性；品质
magnitude	n. 广大，巨大；重要，重要性；星体的亮度
compatible	a. 兼容的；合得来的
entrepreneur	n. 企业家；承包人
proposal	n. 提议，建议；求婚
coach	n. 教练；指导；长途汽车  vt. 训练；辅导
fatal	a. 致命的；重大的；命中注定的；灾难性的
currency	n. 货币；通用，流行
disapprove	v. 不赞成，反对
complain	v. 抱怨；投诉
fact sheet	n. （尤指英国广播或电视节目中有关讨论题目的）资料页
audacious	a. 大胆的；有冒险精神的；鲁莽的；厚颜无耻的
disrupt	vt. 使中断；扰乱
tramp	v. 跋涉；踩踏  n. 长途跋涉
pest	n. 害虫
inflation	n. 通货膨胀
statement	n. 陈述；声明；报表
amount	n. 总额  vi. 合计
given	a. 规定的，特定的；假设的
advanced	a. 先进的
milestone	n. 里程碑；转折点
crank	n. 曲柄，曲轴  vt. 用曲柄转动某物
lexicographer	n. 词典编纂者
bunch	n. 群，伙；束，串，捆  v. 集中，挤在一起；使成一束（或一群等）
costume	n. 戏装；（特定场合穿的）成套服装
scare	n. 惊恐，恐慌  v. 吓，使害怕；受惊吓，感到害怕
manipulate	vt. 应付，处理；操纵，控制；影响
juvenile	a. 少年的，少年特有的；幼稚的，不成熟的  n. 未成年人，少年
phenomenon	n. 现象，迹象；非凡的人（或事物）
freight	n. 货物  vt. 运送（货物）；货运
vulnerable	a. 易受攻击的，易受伤的
steam	n. （蒸）汽，汽雾  v. 发出蒸汽；（火车、轮船）行驶；用蒸汽开动
valuable	a. 贵重的，有价值的  n. 贵重物品，财宝
presumably	ad. 推测起来，大概
sanctuary	n. 圣堂，圣殿，圣坛；圣地；庇护所，避难所；禁猎区，动物保护区
bring out	出版；激起；鼓励
arithmetic	n. 算术
request	n./vt. 要求；请求
dash	v. 飞奔，猛冲；猛掷；使破灭，使沮丧  n. 飞奔，猛冲；破折号；精力，干劲
treatment	n. 治疗；对待
coarse	a. 粗的；粗糙的；粗劣的
insecure	a. 不安全的，不可靠的
linen	n. 亚麻织品；亚麻布
inspiration	n. 启示，灵感；鼓舞人心的人（或事），激励
generous	a. 慷慨的；大量的
cultivate	vt. 种植；培养
campaign	vi. 参加活动；作战  n. 战役；活动
disorder	n. 混乱；失调，紊乱，疾病
spot	vt. 认出，发现；看见，注意到  n. 地点，处所；斑点，污点；少量
outcome	n. 结果，成果；后果；结局；出口，输出量
aggravate	vt. 恶化，加重，加剧
deception	n. 欺骗；诡计
sharpen	v. 削尖，磨快；使敏锐，使敏捷
practical	a. 实际的，实用的；实践的，应用的
pliable	a. （指人或思想）容易受影响的；顺从的；易弯的，柔韧的
disposal	n. 处理，处置；布置，安排
subsidiary	n. 子公司；附属机构；支流  a. 次要的；辅助的，附设的
cautious	a. 十分小心的，谨慎的
pattern	n. 样式；模式  vt. 构成图案；使形成，促成
terrain	n. 地形，地势
darkroom	n. 暗室
kneel	vi. 跪
overwhelm	vt. 征服；淹没
contempt	n. 轻视，鄙视，不尊重；蔑视
recognize	vt. 认出；承认，认可
badge	n. 徽章；标记；象征
economic	a. 经济的；经济上的，经济学的
feeble	a. 虚弱的；无效的
virtue	n. 美德；优点
fibre	n. 纤维
suburb	n. 郊区
pulverise	vt. 碾磨成粉，粉碎
inductive reasoning	归纳；推理
fertilise	vt. 使肥沃，使多产；施肥于；使受精
ration	n. 配给量，定量；给养，口粮  vt. 配给，定量供应
debt	n. 债，债务
attractive	a. 吸引的，有吸引力的；引起注意的
conquest	n. 征服；战利品
sophisticate	n. 久经世故的人；精通者
snap	v. 咔嚓折断，啪地绷断；（啪的一声）打开（或关上）；咬；厉声说话，怒声责斥  n. 咔嚓声  a. 突然的，匆忙的
express	vt. 表达，表示  a. 特快的，快速的；明确的  n. 快车，快运，快递
identifiable	a. 可辨认的，可识别的；可确定的，可证明是同一的
nominal	a. 名义上的；（金额、租金等）微不足道的
acquire	vt.  取得，获得
bump into	不期而遇，邂逅
graphology	n. 笔迹学，笔相学
register	n. 注册，登记；登记表  v. 注册，登记
extremely	ad. 极端地；非常地
rot	n. 腐烂  v. （使）腐烂
ambulance	n. 救护车；野战医院
miserable	a. 悲惨的，痛苦的；令人难受的
continuous	a. 连续的，不断的
divide	v. 分开，分隔；分配，分享；除（以）  n. 分歧，差异；分界线，分水岭
gross	a. 总的，毛的
cloakroom	n. 衣帽间； <英> 洗手间
short-term	a. 短期的
refusal	n. 拒绝
coupon	n. 优惠券；票证；配给券；参赛表，订货单
tome	n. 册，大部头书；（有学术价值的）巨著
toxin	n. 毒素，毒质
simultaneously	ad. 同时地
ridiculous	a. 荒谬的；可笑的
chip	n. 碎片；芯片；瑕疵  v. 削（或凿）下（屑片或碎片）
polish	v. 磨光，擦亮；使优美，润饰  n. 擦光剂，上光蜡
wonder	v. 诧异，奇怪；纳闷，想知道  n. 惊奇，惊异；奇迹，奇事
scholarship	n. 奖学金；学问，学识
familiarise	vt. 使熟悉，使通晓；使家喻户晓
expectancy	n. 期待，期望；预期数额（如寿命等）
shilling	n. 先令
blueprint	n. 蓝图；方案
interplay	vi./n. 相互作用，相互影响
convenient	a. 方便的，便利的；适宜的
genuine	a. 真正的；真实的
attentive	a. 注意的，专心的；关心的，体贴的；留意的
observation	n. 观察，观测；监视；评述，评论
personal	a. 个人的，私人的；亲自的，本人的；身体的，人身的
vitality	n. 生命力，活力
requirement	n. 需要，需求，要求；需要的东西；必要条件
advisable	n. 可取的，适当的；明智的
bankrupt	a. 破产的
deplete	vt. 倒空；（使）枯竭；消耗
influence	vt. 影响  n. 影响力；产生影响力的人
fantasy	n. 想像
tragic	a. 悲惨的；悲剧（性）的
splint	n. 细木梗；[医] （用于固定受伤肢体的）夹板  vt. 用夹板夹
foam	n. 泡沫；泡沫材料  vi. 起泡沫
occupation	n. 占领；职业；消遣
format	vt. 使格式化  n. 安排，计划；版式；格式
bachelor	n. 学士；单身汉
typhoon	n. 台风
appointment	n. 约会
slope	n. 斜坡；倾斜  vi 倾斜
complex	n. 综合体，集合体；建筑群；情结  a. 合成的，综合的；复杂的，难懂的
overhead	a. 在头顶上的；高架的  n. 天花板；企业管理费用  /ˏəuvəˈhed/ ad. 在空中，在头顶上，在高处
population	n. 人口
prey	n. 猎物，捕获物；牺牲品，战利品  vi. 捕食；折磨，使烦恼；掠夺
catalogue	n. 目录；系列  vt. 编目录；记载
prerequisite	n. 先决条件，前提；必备条件  a. 必备的
assessment	n. 判定，评定；核定的付款额；看法，评价
suggest	v. 建议，提出；暗示
volt	n. 伏特
weed	n. 杂草
screw	v. 用螺钉固定  n. 螺丝（钉）
enlighten	vt. 启发；开导；阐明
textile	n. 纺织品
hesitate	vi. 犹豫；不情愿
tutor	v. （给……）当家庭教师  n. 导师；家庭教师
topsoil	n. 表层土
background	n. 背景；经历；后台；不重要或不引人注目的地方
impossible	a. 不可能的，办不到的
surgeon	n. 外科医生
promise	n./v. 允诺，保证；预兆，预示
battery	n. 电池（组），蓄电池（组）
thunder	n. 雷；雷声  v. 打雷；轰隆响
delicate	a. 纤细的；精巧的；微妙的
account	v. 说明，解释；（在数量、比例方面）占；导致  n. 账，账户；叙述，说明
booklet	n. 小册子
layout	n. 布局，安排，设计
venture	v. 敢于去；拿……冒险，冒……的险  n. 风险投资，（商业等的）风险项目
shrink	v. （使）收缩；萎缩
gland	n. 腺
curriculum	n. 课程，（学校等的）全部课程
shortage	n. 不足，缺少
accreditation	n. 证明合格，鉴定合格
clerk	n. 办事员；职员
attach	v. 系，贴；认为有重要性（或意义，价值等）；使附属，附加
flip	v. 轻抛；轻弹
comment	n. 注释，评论，意见  v. 注释，评论
emphasize	vt. 强调，着重
flame	n. 火焰；强烈的感情  v. 发火焰，燃烧
foresee	vt. 预见，预知
historic	a. 有历史意义的；历史的，历史性的
provision	n. 供应，（一批）供应品；准备，预备；条款，规定；给养，口粮
president	n. 总统，校长，会长，（大会）主席
internist	n. 内科医生
reception	n. 接收，接受；接待，招待会；接收效果
suspend	vt. 吊，悬挂；推迟；暂停，中止
explorer	n. 勘探者，探险者
untrustworthy	a. 不值得信任的，靠不住的
prospective	a. 预期的；未来的；可能的
percentage	n. 百分比，百分率
clue	n. 线索；提示
stammer	n. 结巴，口吃  v. 口吃
hawk	n. 鹰，隼
swamp	vt. 淹没；使应接不暇  n. 沼泽
jealous	a. 嫉妒的；猜疑的
favour	n. 帮忙；偏爱；赞同；恩惠  vt. 赞同；较喜欢，偏袒；有利于
fickle	a. 易变的，无常的
uphill	ad. 向上，往上；上坡；艰难地
succeed	v. 成功；接着发生
gender	n. 性别；（语法中的）性
consecutive	a. 连续不断的，连贯的
diversion	n. 转向，转移，转换；转移视线的事物；娱乐
donate	vt. 捐赠，赠送
defence	n. 防御，保护；辩护；答辩； [pl.] 防务工事
volume	n. 卷，册；体积；音量
refund	n. 退款  /riːˈfʌnd/ vt. 退还（钱款），偿付
regardless	ad. 不顾后果地；无论如何
emboss	vt. 使……凸出；压花（纹）
internationalist	n. 国际主义者  a. 国际主义者的
scatter	v. （使人或动物）散开，驱散；撒；撒播
appetite	n. 食欲，胃口；欲望
prevail	vi. 流行，盛行；占优势，战胜
glossary	n. 词汇表；术语表
consolidation	n. 合并；巩固
sulphuric acid	硫酸
goodwill	n. 友好，善意；信誉
amass	vt. 积聚
federal	a. 联邦的，联盟的
consideration	n. 考虑；思考；体谅
grip	v. 握紧，抓牢；吸引住……的注意力（或想象力等）  n. 紧握，抓牢；掌握，控制
mansion	n. 大厦；（豪华的）宅邸
galaxy	n. [the G-] 银河；星系；群英
route	n. 路线；路程
deficiency	n. 缺乏，不足
opposite	prep. 在……对面  a. 对面的，对立的；相反的，相对的  n. 对立面，对立物
sensational	a. 轰动性的，引起哗然的；耸人听闻的；极好的；绝妙的
participation	n. 分享；参与
relief	n. （痛苦等）减轻，解除；援救，救济；安慰；缓和剂
cultivation	n. 耕种，耕作；培养，教育
pretension	n. 声称，自命；自负，自命不凡
harness	vt. 控制，利用；上马具  n. 马具
bent	a. 被弄弯的，弯曲的  n. 爱好，天赋
dormitory	n. （集体）宿舍
stitch	vt. 缝，缝合  n. 一针，针脚
manual	n. 手册，指南  a. 手的，手工的，体力的
mite	n. 极小量；螨虫
burglar	n. 窃贼
scheme	n. 计划，方案；体系，体制；阴谋  v. 计划，策划；密谋
addition	n. 加，增加（物）
sensory	a. 感觉的，感官的
grove	n. 树丛，小树丛
materialistic	a. 唯物主义的；物质享乐主义的，贪图享乐的
detach	v. 分开，分离；分遣
torrent	n. 洪流；爆发；（讲话等的）连发
clarify	vt. 澄清；阐明
thirsty	a. 口渴的；饥渴的
inspect	vt. 检查，检阅
seam	n. 缝，接缝；煤层
agriculture	n. 农业；农学
microcosm	n. 微观世界；缩影
surgery	n. 外科学；外科手术；手术室，诊疗室
catastrophe	n. 大灾难
overwork	v. 使劳累过分；对……使用过度；滥用（词等）  n. 过重的工作；工作过度
parental	a. 父的；母的；父母（般）的
sediment	n. 沉淀物；沉积物（如沙、砾、石、泥等）
various	a. 各种各样的；不同的；多方面的
resit	v./n. 重修，补考
menace	n. 威胁；危险的人（或物）  vt. 威胁到，危及
contain	vt. 包含，容纳，装有；控制，阻止，遏制
fasten	v. 扎牢，扣住
establish	vt. 建立；确立；安置，使安居
position	n. 位置，方位；职位，职务；姿势，姿态；见解，立场  vt. 安放，安置
simulate	vt. 模仿，模拟；假装，伪装；扮演
scratch	n. 划伤，抓痕  v. 抓，掻；划破，划损
flexitime	n. 弹性工作制
assist	v. 帮助，援助，协助
mammal	n. 哺乳动物
illegal	a. 不合法的，违法的
ultimately	ad. 最终地
sinew	n. 肌腱；力量的来源
artificial	a. 人工的，人造的；假的，矫揉造作的；模拟的
veil	n. 面纱；遮蔽物  vt. 蒙着面纱；掩饰
tend	v. 倾向于，趋于；照料；招待
removal	n. 除去；免职；搬迁
parallel	n. 可相比拟的事物（或人），相似处；纬线  a. 平行的；类似的，相对应的；并行的  vt. 与……相似；比得上
compel	vt. 强迫
immediately	ad. 立即，马上；紧接地；直接地
institute	n. 研究所，学院  vt. 建立，设立
serial	n. 连续剧  a. 连续的；顺序排列的
oversee	vt. 监督，监视（某人或某物）；俯瞰，眺望
reinforce	vt. 加强；增援
commitment	n. 委托；许诺；承担义务
donation	n. 捐款；捐赠
curious	a. 好奇的；奇怪的
jungle	n. 丛林
overdraft	n. 透支；透支额
optical	a. 视力的；光学的
otherwise	ad. 另样，用别的方法；在其他方面  conj. 要不然，否则
possession	n. 持有，拥有；所有权；所有物，财产，财富；领土
however	conj. 不管用什么方法，然而  ad. 无论如何，不管怎样；可是；仍然
retail	n. 零售  v. 零售，以……价格销售
cultural	a. 文化的，人文的
morality	n. 道德，美德
transaction	n. 办理；处理；交易，业务； [pl.] 会报，学报
twofold	a. 两位的，双重的；两部分的  ad. 两倍地，双重地
solution	n. 解答，解决办法；溶解，溶液
embassy	n. 大使馆；大使馆全体官员
remark	v. 评论，谈论；注意到，察觉  n. 评语，评论；注释
delay	n./v. 耽搁，延迟，延期，迟滞
congress	n. （代表）大会；（美国等国的）国会，议会
germ	n. 微生物，细菌；起源，萌芽
fashion	n. 方式；流行款式；时装
carousel	n. 行李式传送带
splash	v. 溅；泼
beforehand	ad. 预先，事先
spade	n. 铁锹
filter	n. 过滤器  v. 过滤；（消息等）走漏
aspect	n. 方面；（建筑物的）朝向，方向；外貌，外观样子
objection	n. 反对；反对的理由
tunnel	n. 隧道；地道  v. 挖（地道），开（隧道）
contrast	n. 对比；对照  /kənˈtrɑːst/ v. 对比；对照；形成对比
effect	n. 作用，影响；结果；效果  vt. 使产生，招致；实现
parcel	n. 包裹
distance	n. 距离；远方；一长段时间
stem	n. 茎；（树）干；词干  vt. 止住，抑止，堵住，阻止
normal	a. 正常的，平常的；标准的，规范的，正规的
sincere	a. 真挚的，诚挚的，真诚的，诚恳的
summarise	v. 总结，概括
vice versa	反之亦然
foetus	n. 胎儿；胚胎
merge	v. （使）结合
aware	a. 知道的；意识到的
label	vt. 贴标签于  n. 标签，标记；称号；绰号，外号
guarantee	v. 保证；允诺  n. 保证；担保物
interrelationship	n. 相互关联，相互影响
stationery	n. 文具
limestone	n. 石灰石，石灰岩
impulse	n. 冲动，突如其来的念头；刺激，驱使；脉冲
wax	n. 蜡；蜂蜡  v. 给……上蜡，给……打蜡；（月亮）渐圆，渐满
incapacitate	vt. 使无能力；使伤残；使不适合；使无资格
appear	v. 出现，显露，公开露面；出场，问世；仿佛，似乎
check	v. 检查，核对；阻止，制止  n. 检查，核对；制止，抵制；支票，帐单
collect	v. 收集，搜集；领取，接走；收（税等）；聚焦；积累
attract	vt. 吸引，招引，引诱，引起（注意等）
describe	vt. 描述，描写，形容
chunk	n. 大块；相当大的部分（或数量）
agency	n. 机构；代理，代办
blend	v. （使）混合，（使）混杂  n. 混合物；混合，交融
conceive	v. （构）想出，构想，设想；怀孕
affect	v. 影响；感染
frustrate	vt. 使沮丧；挫败
extend	v. 延长；扩大
introduce	vt. 介绍；传入，引进；提出；采用，推行
advice	n. 劝告，忠告；建议，（医生等的）意见
attitude	n. 态度，看法；姿势
deliver	v. 交付，递送；发表，表达；释放；接生
course	n. 过程，进程；路线，方针；跑道；课程  v. 追猎；运行；流动
match	n. 火柴；比赛，竞赛；对手，敌手  v. 匹配，相称
employ	n./vt. 雇用；用，使用
pedal	v. 骑车；踩踏板  n. 踏板
resident	n. 居民，住户  a. 常驻的，居住的
optometrist	n. 验光师，视力测定者
degrade	v. （使）降级；（使）堕落；（使）降解；（使）退化
particle	n. 极少量；微粒
downpour	n. 暴雨
telescope	n. 望远镜
transport	n. 运输，运送；运输系统，运载工具  /trænˈspɔːt/ vt. 运输，运送，搬运
prepare	v. 准备，预备
registration	n. 登记，注册；（邮件等的）挂号；登记或注册的项目
chaos	n. 混乱
gorge	v. 狼吞虎咽，塞饱  n. 山峡，峡谷
recreational	a. 消遣的，娱乐的；游戏的
systematic	a. 系统的，体系的
subtropical	a. 亚热带的
detract	v. 去掉，减损
seal	vt. 封，密封  n. 封铅，封条；印，图章；海豹
depress	vt. 使沮丧；使不景气；降低，减少
scarce	a. 缺乏的，不足的；稀少的，罕见的
evidence	n. 根据，证据 ；形迹，迹象
besides	prep. 除……之外  ad. 而且
waterproof	a. 不透水的；防水的
exclusive	a. 奢华的；独有的；排他的  n. 独家新闻
majority	n. 多数，大多数
despite	prep. 不管，尽管
dissolve	v. 溶解；解散；结束
release	vt. 释放，解放；发表，发行  n. 释放；发表，发布；排放，泄露
deploy	vt. 部署；使用，运用
original	a. 最初的，原始的；新颖的，有独创性的  n. 原物，原作
branch	n. 树枝；分部，分科
chancellor	n. 大臣；总理；首席法官；大学校长
vertical	a. 垂直的；竖式的  n. 垂直线
herbivore	n. 食草动物
flat	a. 平的；（价格）固定的  n. 单元住宅
occasionally	ad. 有时候，偶尔
harridan	n. 凶恶的老妇；老巫婆
accommodation	n. 住处，膳宿；适应，调节
static	n. 静电；[-s] 静力学  a. 静止的，静态的；呆板的
section	n. 部分；部门；截面
scale	n. 规模，大小； [pl.] 天平，磅秤；刻度，标度；（鱼等的）鳞；（音乐）音阶；等级，级别；比例（尺）  vt. 攀登，爬越
constantly	ad. 经常；不断地
ailment	n. （不严重的）疾病
adhere	vi. 黏附；遵守；坚持
extracurricular	a. 课外的
propel	vt. 推进，推动；驱使
posture	n. 姿势；心情；态度
overseas	a. 在海外的  ad. 在海外
industrialise	v. （使）工业化
empire	n. 帝国
mechanic	n. 机修工； [-s] 力学，机械学
fracture	n. 断裂，折断；骨折  v. （使）断裂
glacial	a. 冰期的；冰川的；寒冷的，冰冷的；冷若冰霜的
badminton	n. 羽毛球
dock	v. （使）靠码头  n. 码头
argument	n. 争吵，争论；观点，论据；说理，论证
chase	v. 追捕；追求；雕镂
brochure	n. 小册子；说明书
convince	vt. （使）确信；说服
teem	vi. 倾泻；充满，遍布
confront	vt. 遭遇；面对，正视
exhibition	n. 展览（会）；陈列，展览
whereas	conj. 然而，但是
oak	n. 橡树，橡木
additional	a. 附加的；追加的
overlapping	a. 重叠的；共通的
poultry	n. 家禽；禽肉
pregnancy	n. 怀孕；怀孕期
confirmation	n. 证实，确认；批准
unquote	v. 结束引语
embezzlement	n. 贪污，盗用
acrobatic	a. 杂技的；杂技般的；杂技演员
numerous	a. 众多的
balcony	n. 阳台；楼座
postgraduate	n. 研究生
well-being	n. 安宁；福利
at random	随便地，任意地
prime	a. 首要的；最好的
settle	v. 定居，安家；解决，调停；安排，安放；支付，结算；安置于；（鸟等）飞落，停留，栖息
fallow	a. （土地）休耕的；休闲的
troupe	n. （演出的）班子，团，队；（尤指）马戏团，芭蕾舞团
premise	n. 前提，假设； [pl.] （企业、机构等使用的）房屋和地基，经营场址
discerning	a. 有识别力的，眼光敏锐的
niggle	v. 拘泥小节；挑剔，吹毛求疵；为小事操心；不断地烦扰
prospectus	n. 内容说明书，简章，简介
liaise	vi. 做联络人；联络，联系
excavation	n. 挖掘，发掘；出土文物
continental	a. 欧洲大陆的；大陆性的  n. 欧洲大陆人
modernism	n. 现代主义
artery	n. 动脉；干线，要道
premium	a. 高级的，优质的；售价高的  n. （投保人向保险公司支付的）保险金；额外费用，加付款；奖品，赠品；额外津贴
glamor	n. 魅力；诱惑力
barbecue	n. 金属烤肉架；烧烤野餐
material	n. 材料；素材  a. 物质的；重要的
adapt	v. 使适合；改编；适应
gullibly	ad. 轻信地，易受欺骗地
succession	n. 连续；接替，继承
sift	v. 细查；筛；过滤
spark	n. 火花
sympathy	n. 同情；赞同，支持
chill	v. （使）变冷，冷藏  n. 寒意；寒战；寒心  a. 寒冷的；扫兴的
multinational	a. 多国的，多民族的；跨国公司的  n. 跨国公司
exposure	n. 暴露；显露；接触；曝光
fierce	a. 凶猛的；强烈的
crime	n. 罪行；犯罪
constitute	v. 组成；构成；设立，成立
deceive	v. 欺骗，蒙骗
haul	vt. 用力拖；搬运
emission	n. （光、热等的）散发；散发物
procession	n. 队伍，行列
bistro	n. 小酒馆；小餐馆
crash	v. 碰撞；冲，闯；倒下，坠落；发出撞击（或爆裂）声；垮台，破产  n. 碰撞；坠落，坠毁；破裂声，撞击声  a. 速成的
pearl	n. 珍珠
workforce	n. 受雇的或现有的工作人员总数；劳动人口
surpass	v. 超过，超越，优于，胜过；超过……的界限，非……所能办到（或理解）
sociology	n. 社会学
violent	a. 暴力的；带有强烈感情的；猛烈的
frock	n. 上衣；连衣裙
epidemic	a. 流行性的  n. 流行病
grab	v./n. 抓，夺
statue	n. 塑像
appliance	n. 用具，器具
facility	n. [pl.] 设备，设施；便利条件
consolation	n. 安慰；慰问
texture	n. 质地，纹理；口感
assumption	n. 假定，假设；担任，承担
dissatisfied	a. 不满意的，不满足的
simultaneous	a. 同时的，同时发生的，同时存在的；同步的
sundial	n. （通过太阳知道时间的）日规；日晷（仪）
toxic	a. 有毒的；中毒的
utilise	vt. 利用，运用
conformity	n. 符合，一致
overrate	vt. 对……评价过高，高估
dormant	a. 休眠的；静止的；隐匿的
displace	vt. 取代；迫使（人们）离开家园；撤职，使失业
embrace	v./n. 拥抱；包括；欣然接受
engrave	vt. （在……上）雕刻；（使）铭记
disrespectful	a. 失礼的，无礼的
invade	v. 侵犯，侵入，侵略，侵袭
arcade	n. 拱廊，有拱廊的街道
commentary	n. （尤指电台或电视台所作的）实况报道，现场解说；注释，解释；批评；评价
recreate	vt. 再现，再创造
mock	a. 假的；模拟的  n. 嘲弄；模仿，仿制品  v. 嘲笑，嘲弄
territory	n. 领土，版图；领域，范围
prohibit	v. 禁止，阻止
shipment	n. 装运，运输；装载（或运输）的货物，装货量
calendar	n. 日历；月历；日程表
magic	n. 魔法，法术；魅力，魔力  a. 有魔力的，神奇的
slip	v. 滑到，失足；减退；摆脱，闪开；塞入  n. 差错，疏漏；滑到；纸片
shatter	v. （使）破碎，碎裂；给予极大打击
truce	n. 休战（协定）
discount	n. （价格、债款等）折扣   /dɪsˈkaunt/ vt. 给……打折；漠视，低估
tough	a. 难对付的；健壮的；（肉等食物）老的
volunteer	v. 自愿做，无偿做  a. 志愿的，义务的，无偿的  n. 志愿的
eruption	n. （火山、战争等）爆发；（疾病）发作
pension	n. 养老金，抚恤金；年金
assignment	n. 任务，工作
assign	vt. 指派，分配；指定
concert	n. 音乐会，演奏会
microbiology	n. 微生物学
stainless	a. 不锈的；无污点的，无瑕疵的
hallowed	a. 受崇敬的；神圣（化）的
terminal	n. 终点，终端；终点站，航站楼  a. 末端的
climate	n. 气候；风气，思潮
bring	around/round     说服；使恢复知觉（或健康）
relevance	n. 中肯，适当；相关性
reluctant	a. 不情愿的，勉强的；难得到的，难处理的
regularity	n. 规律性，规则性；整齐，匀称
laterality	n. 对一侧面的偏重，偏向一侧状态
predominant	a. 卓越的，突出的；支配的，主要的，盛行的
trek	vi./n. 牛拉车；艰苦跋涉
daunt	vt. 使气馁，使胆怯
itinerary	n. 行程表；旅行路线，旅行计划
acclimatise	v. （使……）服水土；（使……）适应新环境
meadow	n. 草地
forthcoming	a. 即将到来的
structure	n. 结构；构造；建筑物  vt. 系统安排；精心组织
quantity	n. 数量，数目；量；众多，大宗
integral	a. 不可或缺的，构成整体所必需的；完整的，完备的
intensive	a. 加强的；密集的
acknowledge	v. 承认，确认；致意；感谢
liquor	v. 烈性酒；含酒精饮料
presence	n. 出席；存在；仪态
develop	v. 发展；生长，形成；开发
blast	v. 爆破，炸毁  n. 一阵（大风）；冲击
pudding	n. 布丁
greatly	ad. 非常；很；极大地
sporadically	ad. 偶发地；零星地
imitate	vt. 模仿，模拟；仿效
constitution	n. 宪法，章程；体质，体格；组成，形成
photography	n. 摄影术，摄影
modem	n. 调制解调器
advocate	vt. 拥护，支持；提倡   /ˈædvəkət/ n. 拥护者，支持者；提倡者
maintenance	n. 维持；保养；抚养费
spouse	n. 配偶
furnace	n. 熔炉
expedition	n. 远征，探险，考察；（短途的）旅行，出行；远征队，探险队，考察队
incendiary	a. 放火的，能引起燃烧的；煽动性的
expansion	n. 扩大，扩张
encase	vt. 装入，包住
invalid	a. （指法律上）无效的，作废的；无可靠根据的，站不住脚的；有病的，伤残的  /ˈɪnvəlɪd/ n. （需要有人照顾的）病弱者，残疾者
unbiased	a. 公正的，没有偏见的
postpone	v. 延迟，延期
skim	v. 撇去；掠过，擦过；浏览，略读
preface	n. 序言，引言  vt. 为……写序言；以……为开端
retain	vt. 保留；保持
culminate	vi. （以某种结果）告终；（在某一点）结束
robotic	a. 机器人的；像机器人的，呆板面机械的
profile	n. 面部的侧影，侧面轮廓；传略，人物简介  vt. 扼要介绍；写传略（或简介）
salinity	n. 盐分，盐度
aggravation	n. 加重；恶化；愤怒，恼怒
incident	n. 发生的事；事件，事变
previous	a. 以前的，在……之前的；早先的，稍前的
spice	n. 香料，调味品  vt. 使增添趣味；往……加香料
bore	v. 使厌烦；钻孔  n. 令人讨厌的人（或事）
lull	n. 间歇，暂停；平静期
county	n. 郡，县
betray	vt. 出卖，泄露（秘密等）；辜负；流露情感
underlying	a. 表面下的，下层的，在下面的；根本的；潜在的，隐含的
dispiriting	a. 令人沮丧的，使人气馁的
opulent	a. 豪华的，华丽的，富裕的；丰富的，丰饶的
plush	a. 豪华的，舒适的  n. 长毛绒
dispense	vt. 分发，分配；提供
behalf	n. 利益；代表
initial	a. 最初的，开始的；词首的  n. 词首大写字母
govern	v. 统治，管理；控制，支配
mingle	v. （使）混合，（使）联结；相往来；混杂其中
charter	n. 纲领，宣言；宪章；包租  vt. 包租（飞机，船等）；特许设立，给……发许可证，给予特权
formidable	a. 可怕的；难以应付的，难以克服的
belt	n. 腰带；地带
relay	n. 接力赛；中继设备  /ˈriːleɪ; rɪˈleɪ/ vt. 传送；转播
crockery	n. 陶器；瓦器
diversify	v. （使）多样化
threshold	n. 入门，门槛；界限；开端，起点
vacation	n. 假期；休假
skyscraper	n. 摩天楼
draft	n. 草稿，草案；汇票；征兵，服役；通风，气流  vt. 起草，草拟；选派，抽调；征募，征召……入伍
deter	v. 威慑，吓住，（使）断念
promising	a. 有希望的；有前途的
goal	n. 球门；射门，进球得分；目标
crush	vt. 碾碎；压服，压垮；镇压，制服；压碎，压坏
stream	n. 溪流；一股  v. 流出
urgent	a. 紧急的，紧迫的；催促的，急切的
thigh	n. 大腿
maximise	vt. 使增加到最大限度，最佳化；充分利用
sleek	a. （毛发等）光滑而有光泽的；时髦的；豪华的  vt. 使（毛发等）光滑发亮
entrust	vt. 委托，交付，托付
pamper	vt. 纵容，娇惯；精心护理
veterinarian	n. 兽医
demolition	n. 拆除；破坏，毁坏
derelict	a. 被抛弃的；衰退的，破败的  n. 遗弃物；无家可归者，社会弃儿
synchronise	v. （使）同步发生，同速进行
ornamental	a. 装饰性的，装饰的
estuary	n. （江河入海口的）河口，河口湾
leaflet	n. 传单，散页印刷品；小册子  v. 散发传单（或小册子）
cascade	n. 小瀑布
irritate	vt. 使烦躁；使疼痛；刺激
hatch	v. 孵出，孵化；策划  n. （门、地板或天花板上的）开口；（飞机等的）舱门
commence	v. 开始，着手
initiative	n. 倡议，新方案；主动性，积极性；主动权
track	n. 小路；跑道  v. 跟踪，追踪
fruitful	a. 多产的，富饶的；富有成效的
stationary	a. 静止的，不动的，固定的；稳定的
superficial	a. 表面的；肤浅的
crawl	vi. 爬，爬行；缓慢进行  n. 缓慢（或费力）的进行；自由泳
rotate	v. （使）旋转，转动；轮流，轮换
spoil	v. 损坏，破坏，糟蹋；宠坏，溺爱；（食物）变质  n. [pl.] 战利品，掠夺物，赃物
flask	n. 长颈瓶；烧瓶
camper	n. 露营者，宿营者
attend	v. 出席，参加；随同，陪同；专心，注意
rim	n. （圆形物体的）边，缘
motivate	vt. 使有动机；激励，激发
patent	vt. 取得专利权  n. 专利（权）  /ˈpeɪtnt/ a. 显而易见的；有专利的，受专利保护的
architect	n. 建筑师，设计师；创造者
symptom	n. 症状；征候，征兆
tremendous	a. 极大的，巨大的；非常的，惊人的
in	accordance with 按照，依据
destination	n. 目的地，终点；目标
welfare	n. 福利
envisage	vt. 展望，想象；面对
binoculars	n. 双筒望远镜
glutamate	n. 谷氨酸；谷酸盐
spoilage	n. 变质；损坏
misconception	n. 误解，错误想法
vegetation	n. 植物，草木
conceptual	a. 观念的，概念的
modification	n. 修改，改正
erroneous	a. 错误的，不正确的
robust	a. 健壮的，强壮的；坚定的
get	off track 离题，偏离目标
immense	a. 巨大的，广大的
pull	up stakes 离开，搬家
baron	n. 贵族；男爵
independence	n. 独立，自主
intense	a. 强烈的，剧烈的；紧张的；热情的，热切的
thesis	n. 论文
withdraw	v. 收回；撤退；缩回，退出；提取（钱）
sceptical	a. 怀疑的，猜疑的
flicker	n./vi. 闪烁；一闪而过
cord	n. 线；带
lower	a. 较低的；下面的  v. 降低，减少
primary	a. 最初的，初级的；首要的，基本的
coincide	vi. 同时发生；一致
mess	n. 凌乱  v. 弄糟，搞乱
design	n. 设计，构想；图样，图案；企图，图谋  v. 设计；谋划，构思
insist	v. 坚持，坚决认为；一定要
crew	n. 全体船员；工作人员；队，组
exhaustion	n. 精疲力竭；耗尽
geographical	a. 地理学的；地理的
indigenous	a. 土产的，本地的，本土的
consistent	a. 一致的，协调的；相符的，相容的
sympathetic	a. 同情的，体谅的；赞同的，支持的；和谐的
personalize	vt. 使成为私人的；在（物品）上标出主人姓名（或记号）；个人化
incompatible	a. 不兼容的，不能和谐共存的，不协调的，合不来的
predominate	vi. 统治，支配；（数量、力量上）占优势
complexity	n. 复杂，复杂性；复杂的事物
terrestrial	a. 陆地的，陆生的，陆栖的；地球的
commission	n. 委托；佣金  v. 授权，委托
beware	v. 谨防，当心
compensation	n. 补偿，赔偿；赔偿物；赔偿金
issue	n. 问题，争论点；发行；（报刊的）一期；分发，流出  vt. 颁布；发行；流出；分发，发给
finite	a. 有限的；限定的
curly	a. 卷曲的，波浪式的
wildlife	n. 野生生物
swallow	v. 吞咽；忍受  n. 燕子
hasty	a. 草率的，匆忙的
geometry	n. 几何；几何学
stuff	n. 原料，材料  vt. 填进；让……吃饱
landward	a./ad. 向陆的/地，近陆的/地
vigorous	a. 朝气蓬勃的；有力的
subordinate	n. 下属  a. 下级的；次要的  vt. 使处于次要地位，把……列在下级；使服从
correspond	vi. 相一致，符合；通信；相当于，相应
farewell	n. 告别；欢送会
adjacent	a. 邻近的，毗连的
charity	n. 慈善；施舍；慈善机构
comedy	n. 喜剧；喜剧性（事件）
gorgeous	a. 华丽的；极好的
recommend	vt. 推荐；劝告；使受欢迎
survive	v. 活下来；幸免于；比……活得长，比……长命
grim	a. 严厉的；可怕的；讨厌的
apparatus	n. 器械，器具，仪器；机构，组织
dome	n. 圆屋顶；穹顶
formal	a. 正式的；正规的
explore	v. 探险，探索；仔细检查，探究
extension	n. 伸展；延长部分；电话分机
consist	vi. 由……组成，由……构成；在于，存在于
brew	v. 酿造；冲泡；酝酿
sacrifice	n. 牺牲，牺牲品；献祭，供奉；祭品，供物  v. 牺牲，献祭
degenerate	vi. 退化  /dɪˈdʒenərət/ a. 退化的
intelligent	a. 聪明的，理智的
historian	n. 历史学家，历史学工作者
fancy	a. 别致的  vt. 想象  n. 想象力
aspiration	n. 强烈的愿望；志向
considerable	a. 相当大（或多）的，可观的；值得考虑的，重要的
clumsy	a. 笨拙的；不得体的
gleam	vi. 闪烁；流露  n. 闪光
plastic	a. 塑料（制）的
fascinate	v. 强烈地吸引，使着迷
supervise	vt. 监督，管理；指导
evaluate	vt. 评价，估价
curiosity	n. 好奇，好奇心；稀奇或罕见的事物或人，古玩
residential	a. 居住的，住宅的；寄宿的
sole	a. 唯一的，独有的  n. 鞋底，袜底；脚底
decade	n. 十年，十年期
survey	n. 调查，勘察；测量，勘测；审视  /səˈveɪ/ vt. 调查，检视（建筑物等）；测量，勘测；俯瞰，眺望
fitting	n. 试穿；装置  a. 适合的
rudimentary	a. 基本的，初步的；未充分发展的，发育不成熟的；退化的
courtship	n. 求爱或追求；求爱期，追求期
ritual	n. 典礼，（宗教等的）仪式；例行公事，老规矩  a. 作为仪式一部分的，仪式的；例行的
stereoscopic	a. 有立体视觉的；有立体效果的
interface	n. 界面；接口；接合点
preliminary	a. 开端的，预备的，初步的  n. [常pl.] 初步做法，起始行为
turbid	a. 混浊的；紊乱的
repertoire	n. （剧团等）常备剧目；（剧团、演员等的）全部节目
monotonous	a. 单调的，无聊的
speculation	n. 推测，思索；投机活动，投机买卖
resemble	vt. 与……相似，像
perspective	n. （判断事物的）角度，方法；透视法
rendition	n. 表演，扮演，演唱；翻译；视觉再现
metaphorical	a. 隐喻的
interpret	v. 解释，说明；口译，翻译
perimeter	n. 周长；周边
jerk	v. 使猝然一动；猛拉  n. 急推，急扭；抽搐
visual	a. 视觉的，用于视觉的
doctoral	a. 博士的
distort	vt. 扭曲；曲解；变形
and	so forth 等等
expose	vt. 使暴露，揭露
sponge	n. 海绵  v. 用湿海绵（或布）擦，揩
audition	n. 试演；试听，试音
reliable	a. 可靠的，可依赖的
abstraction	n. 抽象
mount	n. 山，山峰；支架，底座  v. 登上；骑上；发起；镶嵌
announce	vt. 宣布；声称
headline	n. 大字标题； [常pl.] 头版头条新闻
horror	n. 害怕，恐怖
collapse	v./n. 坍塌，崩溃；晕倒
assistance	n. 协助，援助
discriminate	v. 区别；歧视
destructive	a. 破坏（性）的
authority	n. 权力，管辖权； [pl.] 官方，当局；权威，专家
mild	a. 温柔的；温和的；轻微的
capacity	n. 容量，容积；能量，能力
latitude	n. 纬度； [pl.] 纬度地区；（言行等的）自由
circus	n. 马戏团；环形广场
comet	n. 彗星
grin	v./n. 咧嘴笑
democratic	a. 民主的，有民主精神的
install	vt. 安顿，安置；安装，设置；正式任命，使正式就职
faculty	n. 才能；学院，系；（学院或系的）全体教学人员
cucumber	n. 黄瓜
institution	n. （行业）协会；机构；制度；习俗；团体；设立，制定
Kung Fu	n. 功夫
probability	n. 可能性；概率
bizarre	a. 奇形怪状的；怪诞的
gravity	n. 重力
cap	vt. 盖在……上面  n. 帽子
external	a. 外面的，表面的
absurd	a. 荒谬的，荒唐的
separate	v. 使分离，使分开；划分，区分；分离，分开；分居  /ˈseprət/ a. 分离的，分开的；不同的，特别的
inclination	n. 爱好；趋势；倾斜
pressure	n. 压力，压强；强制，压迫  vt. 对……施加压力（或影响）；迫使，说服
conviction	n. 定罪；坚信，确信
tranquility	n. 宁静，安静
facilitate	vt. 使便利，使容易；推动，帮助
grand	a. 宏伟的；大的
acumen	n. 敏锐；精明
dissertation	n. 专题论文
heap	n. （一）堆；大量  vt. （使）成堆
blame	vt. 责怪，责备
frame	n. 框架  vt. 给……镶框
installment	n. 分期付款；（连载或连播的）一集
symbolism	n. 符号的使用；（尤指文艺中的）象征主义，象征手法
ascribe	vt. 把……归因于
abstract	a. 抽象的；抽象派的  n. 摘要，梗概；抽象  /əbˈstrækt/ vt. 摘要，提炼；抽象化
disruption	n. 动乱；打乱；破坏
self-esteem	n. 自尊；自负
literate	a. 有读写能力的；有文化的；博学的
extinction	n. 灭绝，绝种；熄灭
endanger	vt. 危及，危害
perception	n. 看法；感觉；洞察力
prediction	n. 预言，预料，预报
foster	v. 培养，培育（某物）；鼓励，促进；领养  a. 收养
ancestral	a. 祖先的；祖传的
rekindle	vt. 重新点燃；使复苏
revival	n. （健康、力量或知觉的）恢复，复原；苏醒，复活；复兴；重新使用；重新流行
inevitable	a. 不可避免的，必然（发生）的
disenchantment	n. 失望，不抱幻想
acupuncture	n. 针刺疗法，针灸
loath	a. 不情愿的，勉强的
orthodox	a. 正统的，传统的
popularity	n. 普及，流行
amplify	v. 详述；放大（声音等）
reliance	n. 依靠，依赖
nightmare	n. 噩梦；可怕的事物
leap	n. 跳跃；激增  v. 跳；冲
conscious	a. 自觉的；意识到的；神志清醒的
divine	a. 神的；神授的，天赐的
decompose	v. （使）分解，（使）腐烂
spot	on 恰好的（地），准确的（地）
investigate	v. 调查
underneath	ad. 在下面  prep. 在……下面  n. 下部
division	n. 分开，分隔；分配；分歧；除（法）；部门，科，司
gamble	v. 赌博，打赌；投机；冒险
ancient	a. 古老的；年老的
strand	n. 股，缕；部分，方面
specimen	n. 范例，样品；样本，标本
motive	n. 动机，目的
furious	a. 狂怒的；激烈的
alternative	a. 可供替代的；非传统的，另类的  n. 可供选择的事物
access	vt. 进入；使用  n. 通道，入径；机会；权利
whaling	n. 捕鲸
exhilaration	n. 高兴；兴奋
inland	a. 内陆的  /ˏɪnˈlænd/ ad. 向内地（或内陆）
migrate	v. （候鸟等）迁徙；移居
barrel	n. 桶，圆筒
claim	v. 要求；声称，主张；索赔  n. 要求；主张，断言；索赔
digest	v. 消化；领会  /ˈdaɪdʒest/ n. 文摘
decipher	vt. 破译；解释
extraordinary	a. 不同寻常的，非常的
aluminium	n. 铝
stale	a. 不新鲜的；陈腐的
snap	up  抢购
tan	n. 棕褐色；晒黑  v. （使）晒成棕褐色，晒黑；硝（皮）
hang	on 抓住；坚持下去；别挂断
impair	vt. 损害；削弱
inescapable	a. 不可逃避的；难免的
adolescent	n. 青少年  a. 青春期的；青少年的
associate	v. 使联合；使有联系；交往  /əˈsəuʃɪət/ n. 伙伴；同事  a. 副的；联合的，合伙的
guinea	n. 几尼（英国的旧货币单位，现值1.05镑）
layer	n. 层，层次
cable	n. 缆绳；电缆；电报  v. （给……）发电报
wedge	n. 楔子，楔形  vt. 楔入
judicious	a. 明智的；有见识的
cast	v. 投射（光、视线等）；把……加于；投，扔；丢弃，剔除；脱落，蜕（皮）；浇铸，铸造  n. 演员表，全体演员；石膏绷带；铸模，铸件；外貌，特征
curtain	n. 窗帘，门帘
uniform	n. 制服  a. 相同的；一致的
quartz	n. 石英
longitudinal	a. 经度的，经线的；纵的；长度的
disillusion	vt. 使醒悟
clientele	n. （医生、律师等的）顾客，主顾，客户
holistic	a. 整体的，全面的；功能整体性的
exodus	n. 大批离去，成群外出
concur	v. 同时发生；意见相同，一致
preventative	a. 预防性的
complementary	a. 互补的；补充的，补足的
adjunct	n. 附属物，附件；附加语，修饰语
simplistic	a. 过分单纯化的，过分简单化的
hiccup	n. 嗝，呃逆；暂时（或小的）困难（或挫折）  vi. 打嗝
prowess	n. 杰出的才能，高超的技艺，专长，造诣
engross	vt. 使全神贯注，占去（某人的）全部注意力和时间
tease	v. 逗乐，奚乐，戏弄；强求  n. 挪揄，戏弄，取笑；逗弄者，取笑者
exuberant	a. 繁茂的，丰富的；非凡的；华而不实的
cavort	v. 欢跃，跳跃；嬉戏
socialise	v. （同他人）来往，交往，交际；使（某人）适应社会生活
optimum	a. 最好的；最有利的
molecule	n. 分子
fitness	n. 健康；适合（某事物）
regarding	prep. 关于
contact	n. 接触；联系  vt. 与……取得联系，联络
creative	a. 创造性的；创作的
consultant	n. 顾问；专科医生
secondary	a. 次要的，二级的；（教育、学校等）中等的；辅助的、从属的
in	favour of 赞同，支持
fraction	n. 小部分，片断
dictation	n. 听写
engage	v. 吸引（某人的注意力等）；占用（某人的时间）；使从事于，使忙于；雇用，聘用；与（某人）交战；（指机器零件等）啮合，衔接
populate	vt. （大批地）居住于，生活于
merchandising	n. 销售规划
meteorology	n. 气象学
dealer	n. 商人，经销商
weapon	n. 武器，兵器
authorise	vt. 批准，认可；授权
pore over	仔细阅读
spectator	n. 观众；旁观者
compatriot	n. 同胞；同国人
dreadful	a. 可怕的；令人不快的
laboratory	n. 实验室，研究室
shuttle	n. 航天飞机
entail	vt. 牵涉；需要
alchemist	n. 炼金术士
contrary	a. 相反的  n. 相反
alert	a. 警惕的  n. 警戒；警报  vt. 警告
shift	v. 移动，转移；改变，转变  n. 转换，转变；轮（或换）班
mere	a. 仅仅的；纯粹的
monitor	n. 班长；监视器  vt. 监视；监测
derive	v. 取得；起源
desire	v./n. 想望，期望；要求
minimal	a. 最小的，最低限度的
sketch	v. 画素描；概述  n. 素描；速写
lag	v. 走得慢；落后  n. （时间上的）间隔；滞后
trigger	vt. 引发，导致  n. 扳机
supplement	vt. 补充，增补  /ˈsʌplɪmənt/ n. 增补（物），补充（物）；补遗；增刊；附录
offend	v. 冒犯；使厌恶；违犯
vivid	a. 鲜艳的；生动的
as	for/to 至于，关于
enclose	vt. 围住；附上；把……装入信封
dose	n. 剂量，一剂
supply	n. 供给，供应（量）；[常 pl.] 存货，必需品  vt. 供给，供应；满足（需要），弥补（不足）
on	the horizon 即将发生的
compress	v. 压紧；压缩  /ˈkɔmpres/ n. 敷布，压布
interest	n. 兴趣；利息；利益  vt. 使感兴趣
overcome	vt. 战胜，克服；（感情等）压倒
achievement	n. 成就，成绩；达到，完成，实现
dusk	n. 薄暮，黄昏
cease	v. 停止，终止
arable	a. 可耕作的  n. 耕地
congested	a. 拥挤不堪的；充塞的
split	v. （使）分裂，分享；（被）撕裂，裂开；劈开；分担，分享  n. 裂口；分化，分裂
distinct	a. 清楚的，明显的；有区别的，不同的
negotiate	v. 洽谈，协商；商定，达成；顺利通过
cruel	a. 残忍的，残暴的
Nordic	a. 北欧人的；北欧国家的
linger	vi. 继续逗留；缓慢消失
womb	n. 子宫；发源地
advantageous	a. 有利的
manoeuvre	n. 移动；策略，手段  v. 移动，转动；操纵，控制
predatory	a. 食肉的；掠夺的
converse	vi. 谈话，会谈  /kənˈvɜːs/ a. 逆向的  n. 相反的事物；反面
context	n. 上下文；背景；环境
entrepreneurial	a. 创业的
dearth	n. 缺乏，短缺
adventurous	a. 喜欢冒险的，敢做敢为的；充满危险和刺激的，惊险的
exploitative	a. 开发的，利用的；剥削的
impoverish	vt. 使贫困；使枯竭，使贫瘠
convection	n. 传送；对流
plateau	n. 高原；（上升后的）稳定时期（或状态）
crust	n. 硬层，硬表面，地壳；（一片）面包皮
overlie	v. 躺在……上面；置于……上面
brittle	a. 易碎的，易损坏的；靠不住的；冷淡的，不友好的；（声音）尖利的
collision	n. 碰撞；冲突，抵触
extrusion	n. 挤出，推出，挤压
pumice	n. 浮石，浮岩  vt. 用浮岩磨
predictable	a. 可预言的，可预报的；按老一套办事的，墨守成规的
geological	a. 地质的，地质学的
halve	v. 二等分，减半
assimilate	v. 吸收；使同化
harbour	n. 港湾  v. 停泊；隐匿
hybrid	n. 杂交生成的生物体，杂交植物（或动物）；杂种，混血儿；混合物，合成物  a. 杂交产生的；混合的，合成的
inhale	v. 吸（烟），吸气
decibel	n. 分贝
voyage	n./v. 旅行，航行，飞行
cherry	n. 樱桃（树）
contingency	n. 偶然性，可能性；意外事件；附带事件
for	the sake of 为了
relieve	vt. 救济；缓解
stance	n. 姿势；观点，立场
conduct	n. 举止；指导；管理  /kənˈdʌkt/ v. 指导；管理，实施；指挥
mate	v. 交配，配种  n. 配偶；伙伴；（商船上的）大副
attack	n./v. 进攻；抨击；（疾病等）突然发作
discredit	vt. 使怀疑；使丧失信誉，使丢脸
flora	n. （某地区或时期的）一切植物，植物群
mass	a. 大量的  n. 团，众多；[植] 质量； [pl.] 群众，民众  v. 聚焦
anticipate	v. 预期，预料，期望；先于……行动
operate	v. 运转；动手术；起作用；操作；经营
bypass	n. （绕过市镇的）旁道  vt. 绕过
undetected	a. 未被发现的
shaft	n. 轴，柄，杆；矛柄，把柄；（光的）束，光线；竖井，（电梯的）升降井
channel	n. 频道； [常pl.] 渠道，途径；沟渠；海峡，水道；航道
determine	v. 确定；决定；（使）下决心
dominate	v. 支配，统治；耸立于
instrumental	a. 有帮助的，起作用的；用乐器演奏的
load	v. 装载；装（胶卷、弹药等）  n. 负荷；装载
improve	v. 改善，改进
sensitive	a. 敏感的，灵敏的；神经过敏的，容易生气的；易受伤害的
abolish	vt. 废止，废除
conception	n. 观念；概念
encounter	vt./n. 遭遇，遇到
bubble	vi. 冒泡，起泡；发出冒泡的声音  n. 泡，泡沫；气泡；幻想的计划
sample	n. 样品，样本  vt. 从……抽样，采样；品尝
qualitative	a. 性质的，质量的；定性的
accountant	n. 会计师
plaster	n. 灰泥，石膏；膏药
storey	n. 楼层
gang	n. 一帮  v. 结成一伙
enterprise	n. 企业，公司；事业
verify	vt. 证明；证实
string	n. 线；弦；细绳；一串  vt. （用绳等）缚；扎；挂；（用线）串起；使排成一列
litter	v. 使乱七八糟；乱扔  n. 废弃物，垃圾；一窝幼崽
manor	n. 领地，庄园
location	n. 位置，场所；（电影的）外景拍摄地
breakdown	n. 垮台，倒塌，破裂；（健康、精神等）衰竭，衰弱；（机器等的）损坏，故障；分类
irresistible	a. 无法抵抗的，不能压制的；不能自己的
fluency	n. 流利，流畅；通顺
transcription	n. 抄写，誊写；抄本，誊本；书面标注的事物；（乐曲的）改编
introspection	n. 内省，反省
elicitation	n. 引出，诱出
informant	n. 提供消息或情报的人，线人；提供资料的人
ambiguity	n. 模棱两可；不明确
generative	a. 生殖的，生产的；有生产能力的
recourse	n. 依靠；求助，求援
scrupulous	a. 多顾虑的，谨慎的（尤指道德方面）；一丝不苟的，严谨的
utterance	n. 用言语表达，讲话；话语，言语，言论
emeritus	a. 保留头衔而退休的，荣誉退休的
bilingual	a. （说）两种语言的
substitution	n. 代替，置换；代入法
mundane	a. 世界的；世俗的，现世的；平淡的
foreseeable	a. 可预知的，能预测的
invoke	vt. 恳求，祈求；援用，援引；使用，应用
hurl	vt. 猛投，猛摔；大声叫骂
duplicate	vt. 复制，复写；重复  /ˈdjuːplɪkət/ a. 完全相同的；副本的  n. 复制品
mushroom	vi. 迅速成长（或发展）  n. 蘑菇
adaptation	n. 适应；改编；改制物
elite	n. 精英，中坚  a. 卓越的，精锐的
up-to-date	a. 直到最近的；现代的
bury	vt. 埋葬；埋藏，掩藏
moderate	a. 温和的；适度的  /ˈmɔdəreɪt/ v. （使）减轻，缓和；使适中
bold	a. 粗（字）体的；大胆的，鲁莽的，勇敢的；醒目的
award	n. 奖；评判；授予  vt. 授予；给予
hassle	n. 困难，麻烦；分歧，争论
addict	n. 吸毒成瘾的人，有瘾的人，对……入迷的人
restrain	vt. 阻止；抑制
reproduce	v. 繁殖，生育；复制，仿造，翻版；再现，使……在脑海中重现
signpost	vt. 在……设置路标  n. 路标
intent	n. 意图，意向，目的  a. 专心的，专注的；急切的
artefact	n. 人工制品，手工艺品
highland	n. 高地，高原
application	n. 请求，申请（书，表）；应用，运用；施用，敷用
acquaintance	n. 熟人；认识，了解
challenge	n. 挑战；质疑；艰巨任务，难题  vt. 挑战；质疑
guideline	n. [常pl.] 指导方针；准则，行动纲领
hemisphere	n. （地球的）半球；大脑半球
civil	a. 国民的；民用的；政府的
viable	a. 可行的，可实施的； [生] 能自行生长发育的
cameral	a. （立法机关）院的
gigantic	a. 巨大的，庞大的
venue	n. （聚焦、审判、比赛等的）地点
grieve	v. （使）伤心
studio	n. 工作室；摄影室；练习室
inhabitant	n. 居民，住户，居住者；栖息的动物
suicidal	a. 自杀（性）的；有自杀倾向的
bilateral	a. 双边的；双方的
clinic	n. 门诊部，诊所
memorable	a. 容易记住的；难忘的
dazzle	v. 使目眩；使倾倒  n. 耀眼眩目；令人眼花缭乱的东西
vast	a. 巨大的；大量的
underground	a. 地下的  n. 地铁  /ˏʌndəˈgraund/ ad. 在地（面）下
scholar	n. 学者；奖学金获得者
compete	vi. 竞争；比赛
prescription	n. 处方，药方；开处方，开药方
crude	a. 天然的；粗糙的；粗俗的
vary	v. 改变；（使）多样化；变化；不同
compose	v. 组成，构成；写，创作（乐曲等）；使安定
in	vain 徒然，无效例
alley	n. 小巷；胡同
dolphin	n. 海豚
bounce	v. 弹起，反弹；（使）上下晃动  n. 弹跳；反弹力；活力，精力
platform	n. 平台，站台；纲领
atmosphere	n. 大气；气氛；环境
appoint	vt. 任命，委任；指定（时间、地点等）
characteristic	n. 特性；特征  a. 特有的；典型的
identify	v. 认出，识别；辨别；查明；确定；视……（与……）为同一事物
altitude	n. 海拔，高度； [pl.] 高地，高处
possess	vt. 具有；拥有
excitement	n. 激动；兴奋；令人兴奋的事
contradiction	n. 矛盾，不一致；否认，反驳
painstaking	a. 需细心的，辛苦的，煞费苦心的；勤勉的；刻苦的  n. 辛苦；勤勉；刻苦
pursuit	n. 追求，寻求； [常pl.] 花时间和精力等做的事；消遣，爱好
humanistic	a. 人文主义的，人性的
coherent	a. 条理清楚的，连贯的；一致的，协调的
outlook	n. 观点，见解；展望，前景
apportion	vt. 分派，（按比例或计划）分配
finitude	n. 有限；限定，界限
exhaustible	a. 可耗尽的，会枯竭的
revelation	n. 被揭示的真相，（惊人的）新发现；揭示，显示；泄露
resistance	n. 反抗，抵制；抵抗力，抵抗性；阻力；电阻
attainable	a. 可获得的，可达到的，可实现的
indispensable	a. 必不可少的，必需的
cuisine	n. 烹饪；烹调法，烹调风格；菜肴
reputable	a. 名声好的，高尚的；受尊敬的；值得信赖的
overshadow	vt. 给……蒙上阴影；使扫兴；使黯然失色
unparalleled	a. 无双的，无比的，空前的
opulence	n. 财富，富裕；丰富，富饶
supersede	vt. 代替，取代
exploitation	n. 开采，开发；剥削，榨取；自私的利用
passionate	a. 充满激情的，热切的，狂热的
poisonous	a. 有毒的，有害的；恶毒的，邪恶的
strip	v. 剥夺；夺去，使空无一物；拆卸，拆开  n. 带状物；条纹；狭长地带，带状水域
exhaust	v. 使非常疲倦，使疲惫不堪；用尽，耗尽  n. （机器排出的）废气，蒸汽
mysterious	a. 神秘的，诡秘的
spite	n. 恶意，怨恨
passport	n. 护照；途径，路子，手段
divert	vt. 使绕道，转移；娱乐，供消遣
dissemination	n. 散布，传播
perpetual	a. 连续不断的；长期的；永久的
contradict	v. 反驳，驳斥；与……发生矛盾；相抵触
organize	v. 组织，使有条理；成立
column	n. 柱；柱状物；专栏（文章），栏目
source	n. 来源，出处；（河的）源头，发源地；根源，起源
cater	v. 提供饮食；迎合，满足需要（或欲望）
lobby	v. 游说  n. 大厅；游说团
flexible	a. 易弯曲的；柔韧的；灵活的
penalty	n. 惩罚；罚金
comply	vi. 遵从；服从
racket	n. （网球、羽毛球等的）球拍
wire	n. 金属丝；电线
capsule	n. 胶囊；航天舱，太空舱
canteen	n. 餐厅，食堂
aeronautics	n. 航空学
adopt	v. 采用，采取，采纳；收养，领养；正式通过，批准
lease	n. 租约  vt. 出租，租用
bit	n. 少许；小片；小块
conceal	vt. 隐藏；隐瞒；掩盖
compromise	n. 妥协，折中办法  v. 妥协，放弃（原则、理想等）；危及
haphazard	a. 无秩序的，无计划的，组织混乱的
essential	a. 本质的，基本的；必要的，必不可少的；极其重要的  n. 要素；实质，本质；要点
urge	v. 敦促，力劝；鼓励；竭力主张
feasible	a. 可行的，可能的；可做的，可实行的
cereal	n. 谷类植物；谷物；谷类食物
existence	n. 存在；生活（方式）
apply	v. 申请；应用，使用；涉及
slurry	n. 泥浆
admission	n. 允许进入，加入权，进入权；招供，招认；入场券
attempt	n./v. 尝试，试图；努力
jaw	n. 颌
inference	n. 推论；推断
loop	n. 圈环；环状物；环路；循环  v. （使）成环，（使）成圈；成环形运动
subtract	vt. 减去；去掉
linguistic	a. 语言的；语言学的
aptitude	n. 天资，天赋，天生的才能
lava	n. 岩浆，熔岩
premier	n. 总理；首相  a. 首要的，第一位的；最著名的
enquiry	n. 询问；调查；探索
lawsuit	n. 诉讼，起诉
pack	v. （把……）打包，收拾（行李）；包装，包裹；塞满  n. 包
prescribe	v. 开处方，开药；规定，指示
universe	n. 宇宙，天地万物；世界；领域
skull	n. 颅骨；脑袋
domination	n. 控制，统治，支配
animate	a. 活的，有生命的  /ˈænɪmeɪt/ vt. 赋予生命；使生机勃勃
accountancy	n. 会计工作，会计职业
availability	n. 可利用性，可得性；利用的可能性；可利用的人或物
payable	a. 可支付的；应支付的
solicitor	n. （城镇的）法务官；初级律师，事务律师
departure	n. 离开，出发；背离，违反
audit	vt. 审计，查账；旁听  n. 审计，查账
receipt	n. 收到，接到；发票，收据； [pl.] 收入，进款
scamper	vi. 奔跑，快跑
spiral	a. 螺旋形的，盘旋的  v. 盘旋上升（或下降）
encode	vt. 把（电文等）译成电码（或密码），把……编码
scout	n. 侦察员（或机、舰）；童子军  v. 侦察；寻找；搜索
regurgitate	vt. 涌回，流回；[动] （使）反胃，将（咽下的食物）返回到口中，反刍
propellant	n. 喷射剂；推进物，推进剂
ejection	n. 喷出；排出物
barrage	n. 弹幕射击；火力网
intrigue	v. 密谋，施诡计；引起极大兴趣，迷住  /ˈɪntriːg/ n. 阴谋，诡计；密谋
transition	n. 过渡，过渡时期；转变，转换，变革
realm	n. 界，领域，范围；王国，国度
ingredient	n. （混合物的）组成部分，成分；（烹调的）原料；（构成）要素，因素
friction	n. 摩擦（力）；矛盾，冲突
astronaut	n. 宇航员
banner	n. 横幅；旗帜
ounce	n. 盎司
technique	n. 技巧，技艺；技术，技能
stack	n. 整齐的一叠（或一堆）  v. 把……叠成堆，堆放于；堆积，堆起
petrol	n. 汽油
squeeze	v. 压榨，榨取；捏，挤压；挤入，挤过；向……勒索  n. 挤压，捏；紧缺，拮据，经济困难；减少，削减
sorrow	n. 悲哀；伤心事
arboreal	a. 树木的；栖于树木的
facade	n. 正面；（虚伪的）外表
post-mortem	a. 事后的  n. 检尸，尸体解剖；事后反思（或剖析）
disillusionment	n. 幻灭；觉醒，醒悟
subject	n. 题目；学科；主语  /səbˈdʒekt/ a. 受……支配的，取决于……的；易遭受……的
blunt	a. 钝的；率直的  vt. 把……弄钝；使减弱
stockpile	n. 囤聚的物资  vt. 大量贮备
indicate	v. 标示，表示，表明；象征；暗示，示意
statistically	ad. 统计上地
switch	n. 开关；转换  v. （使）改变，转变；转换；对调
uncertainty	n. 犹豫，迟疑；不确定；无把握
hypothesis	n. 假设，假定；假说；猜想
ultraclean	a. 超净的，特净的
mountainous	a. 多山的
trim	vt./n. 修剪；整理  a. 苗条的，修长的；整齐的，整洁的
steady	a. 稳步的；稳定的  v. （使）稳定，（使）平稳；（使）镇定
orientation	meeting 新生报到会
dramatic	a. 引人注目的；戏剧性的；激动人心的；戏剧的
amorphous	a. 无固定形状的；无组织的
solve	vt. 解答；解决
blade	n. 刀片；桨叶；（草的）叶片
glimpse	vt. 瞥见  n. 一瞥，一看
bulletin	n. （报纸、电台等的）新闻简报；公告；学报；期刊（尤指机关刊物）
annoy	vt. 使烦恼；打搅
chapel	n. 小教堂；祈祷室
subscribe	v. 订阅，订购；申请，预订
foil	n. 箔；箔纸
invoice	n. 发票  vt. 给……开发票
extra	a. 额外的；特别的  ad. 额外地，另外；特别地
analyse	vt. 分析；分解
acoustic	a. 原声的；声音（学）的；听觉的
stall	n. 货摊；小隔间
cover	vt. 盖，覆盖；包含，包括；走过（一段路）；适用于；报道，采访；给……上保险，足够支付；用枪掩护  n. 盖子，套子；封面；掩蔽（物），掩护（物）
breakthrough	n. 突破；重大进展
microprocessor	n. 微处理器
spiritual	a. 精神的；心灵的；宗教的
concrete	a. 混凝土制的；确实的，具体的；有形的，实在的  n. 混凝土
generalise	v. 概括；推广
remarkable	a. 引人注目的，显著的，值得注意的；异常的，非凡的
clot	n. （血液）凝块  v. 凝结成块
prior	a. 在前的，优先的
integrate	v. （使）合并，（使）成为一体
exemplify	vt. 作为……的典型；例证，举例说明
herdsman	n. 牧人
formulation	n. 公式化，格式化；确切的表达
exploratory	a. 探测的；勘探的；探索的
pasture	n. 牧场，草原  vt. 放牧
nutrient	n. 滋养物，营养品
plough	n. 犁  v. 耕地；开（路）；破（浪）
patriotic	a. 爱国的，有爱国心的；显示出爱国精神的
scrub	v. 用力擦洗，把……擦净；取消（计划等）  n. 矮树丛，灌木丛
formality	n. 认真遵循规范、礼节等；例行公事；正式手续
perquisite	n. 利益；特权
heighten	v. （使）增强，（使）加剧
assimilation	n. 吸收；（被）吸收和同化的过程
necessity	n. 必然，必要；必需品；必要性
disposable	a. 一次性的；可动用的
ingenuity	n. 心灵手巧，足智多谋；巧妙，精巧
simplicity	n. 简单（性），简易；朴素；直率，单纯
luxuriant	a. 繁茂的；肥沃的；丰富的
consequential	a. 结果的，随之发生的
scour	vt. 四处搜寻，细查；擦洗，擦亮；冲刷出，冲刷成
seasonal	a. 季节性的，随季节而变化的；节令性的
murky	a. 浑浊的；黑暗的；朦胧的；隐晦的
melatonin	n. 褪黑激素
cue	n. 暗示，提示
thermal	a. 热的，热量的  n. 热气流
revolution	n. 革命；巨变，大变革
ID card	身份证（= identity card）
romance	n. 恋爱；浪漫爱情；爱情小说，传奇故事
currently	ad. 当前，现时，目前
inferential	a. 可推断的，推理的
persist	vi. 坚持；维持，保持，持续
minimum	n. 最小值，最低限度  a. 最低的，最小的
output	n. 产量；输出量；输出功率  vt. 输出
stash	vt. 藏匿；贮藏
species	n. 种，物种
subtle	a. 细微的，微妙的，难以捉摸的；隐约的；精巧的，巧妙的；诡秘的，狡诈的
competent	a. 有能力的；能胜任的
select	v. 选择，挑选  a. 精选的，优等的
loose	a. 松的；散漫的；不精确的
available	a. 可获得的，可得到的；可用的；有空的
illustration	n. 说明；实例；图解，插图
slice	v. 把……切成片，削  n. 薄片，切片；份，部分
waterfront	n. 滨水路，滨水区，码头区
generic	a. 一般的，普通的，通用的；种的，属的
cricket	n. 板球；蟋蟀
exhale	v. 呼出（气）；散发（气味、蒸气等）
creation	n. 创造；作品
corporate	a. 团体的，共同的；法人的，公司的
swell	v. 膨胀；增长，增强
synthesis	n. 综合，合成；综合体
excreta	n. 排泄物
decapitate	vt. 斩首
pepper	n. 胡椒（粉）  vt. 在……上撒（胡椒粉等）
groan	vi. 呻吟；叹息  n. 呻吟声，叹息声
diminish	v. 减少；降低；贬低，轻视
naive	a. 幼稚的，天真的，不成熟的
upset	vt. 使苦恼；搅乱；推翻，颠倒   /ˏʌpˈset/ a. 心烦的；（肠胃等）不适的
appeal	vi. 呼吁；起诉，上诉；吸引  n. 上诉，申诉；呼吁；感染力，吸引力
consumption	n. 消耗（量）；消费（量）
caution	n. 谨慎，小心  v. 提醒，警告
average	n. 平均（数）  a. 平均的；平常的，普通的  v. 平均达到；平均为
blonde	a. （人）白肤金发碧眼的  n. 白肤金发碧眼的女人
burst	v. （使）爆炸；突然发作；破裂  n. 爆炸
ecology	n. 生态，生态学；生态环境
profession	n. 行业，职业；宣称，表白
for	instance 例如
transit	n. 运输，运载  v. 通过，经过；中转
medieval	a. 中世纪的；中古（时代）的
behave	v. 表现；（机器等）运转；（事物）起作用；表现得体；使检点
devastating	a. 毁灭性的；强有力的
dredge	v. 挖掘；疏浚；挖出，吸出；重提（不愉快或令人难堪的）旧事
launch	vt. 将……投放市场；开始从事，发动，发起；发射  n. 发射；（产品）上市
disintegrate	v. （使）碎裂，瓦解，解体
fade	v. （使）变淡，变暗；褪色；凋谢；逐渐消失
highway	n. 公路
concede	v. （不情愿地）承认；让步
chef	n. 厨师长，厨师
complaint	n. 抱怨；投诉；控告；（尤指不严重、常影响身体某部位的）疾病
irritable	a. 急躁的，易怒的，易受刺激的；过敏的
legislation	n. 法律，法规；立法
bouncing	a. 健壮的，茁壮的
sizeable	a. 相当大的
innovative	a. 革新的，创新的，新颖的；富有革新精神的
congestion	n. 拥挤，充塞；充血
particulate	a. 粒子状的，微粒的，颗粒的  n. 粒子，微粒状物质
pollutant	n. 污染物质（尤指排入水中和空气中的有害化学物质），有害物质
megacity	n. （人口超过1000万的）大城市
allergic	n. 过敏的，（对……）变态反应的，变应性的
populace	n. （一个国家或地区的）人口，全体居民；平民，大众
proclaim	v. 宣告，宣布，声明；显示
comparable	a. 可比较的，类似的；比得上的
habitual	a. 惯常的，通常的
rehabilitate	vt. 改造（罪犯等），使恢复正常生活；使恢复原状，修复；复职；恢复……的名誉
picturesque	a. 美丽如画的；（语言）生动的
afield	ad. 在野外，在田中；在战场上；背井离乡地；到远方，在远处
form	n. 形式；外形；表格  v. （使）形成，（使）出现
temporary	a. 临时的，暂时的
spill	v. （使）溢出；涌出
mediocre	a. 平庸的，平凡的
lead	v. 指引；领导；致使  /led/ n. 铅
define	vt. 下定义；限定
figure	n. 数字；人物；体态，体形；轮廓；（插）图，图表；雕像，塑像  v. 是重要部分；认为；计算，估计
productive	a. 生产性的；多产的；富有成效的
respond	vi. 回答，答复；响应；作出反应
approval	n. 赞成，同意；正式批准
smell	v. 散发（或有）……的气味；闻到，嗅到
flaw	n. 缺点；瑕疵
multiple	a. 多重的；多样的  n. 倍数
adventure	n. 冒险，冒险活动；异乎寻常的经历，奇遇
zone	n. 地区，地带；区域
diagram	n. 图解，图表
raw material	n. 原材料
slouch	v. 懒散地站（或坐、走）；低头垂肩地站（或坐、走）
bloom	n. 花；开花（期）；青春焕发（的时期）  v. （使）开花
horizon	n. 地平线；范围；眼界
trick	n. 诡计，花招  vt. 欺诈，哄骗
centigrade	a. 百分度的；摄氏度的
courageous	a. 勇敢的，有胆量的
as	if/though  好像，仿佛
academic	a. 学院的；学术的；不切实际的  n. 学者；大学教师
preferable	a. 更可取的，更好的，更合意的
biometrics	n. 生物测定学
reunite	v. （使）结合；（使）重聚
minority	n. 少数；少数民族
clench	v. 握紧；咬紧（牙关等）；牢牢抓住
corpus	n. 文集，文献，汇编；语料库
alarm	n. 惊恐，恐慌；报警器；闹钟；警报  vt. 使惊恐；使担心
beam	n. （光线等的）束；梁；笑容，喜色  v. 面露喜色；发射电波，播送
conjunction	n. 连接；连词
height	n. 海拔；身高
escalator	n. <美> 自动扶梯
nasty	a. 令人讨厌的；不友好的，恶意的，下流的；恶劣的
monster	n. 怪物；巨人，庞然大物
continually	ad. 连续地，持续地
adequate	a. 充足的；合适的，合格的
hike	v. 徒步旅行；提高（价格等）  n. 远足，徒步旅行；猛增
grateful	a. 感激的，感谢的
organ	n. 器官；（官方的）机构
rely	vi. 依靠；依赖
incentive	n. 刺激；激励
at	least 至少
technical	a. 技术的，工艺的
chorus	n. 合唱，合唱曲；合唱队；副歌，叠句；齐声，齐声说的话（或发出的喊声）  v. 齐声说
scent	n. 香味；气味  vt. 嗅到；察觉
hitherto	ad. 到目前为止，迄今
accomplish	vt. 达到（目的），完成（任务），实现（计划、诺言等）
bullet	n. 枪弹，子弹
rural	a. 农村的，乡村的
enclosure	n. 四周有篱笆（或围墙等）的场地，围场；（信中的）附件
discontinue	v. 停止；中断；不连续
revegetate	v. 再生长，再植
sustainable	a. 可以忍受的；足以支撑的；养得起的
dispersal	n. 散布，分散；消散，疏散
fabulous	a. 寓言式的；极为巨大的；极好的
retailing	n. 零售业
rental	n. 租金额；出租，租赁  a. 租用的；出租（业）的
obsession	n. 牵挂，惦念；迷住，困扰；萦绕于心的事物或人；固执的念头
fraught	a. 充满……的；担心的，烦恼的
ethereal	a. 太空的；轻巧的
unobtrusive	a. 不显著的，不引人注目的；不张扬的
underpin	vt. 加固……的基础；加强，巩固
nutritional	a. 营养的，滋养的；营养物的，食物的
velocity	n. 速度，速率；迅速，快速
unveil	v. 揭去面纱或覆盖物；揭幕；首次公开、揭露或展示（某事物）
prototype	n. 原型，蓝本
swivel	v. 旋转  n. 转环，转节
replicate	vt. 重复，复现或复制；再制造；再生
capsize	v. （使船）翻，倾履
project	n. 计划，方案；课题，项目；工程  /prəˈdʒekt/ v. 放映；投射，发射；（使）突出，（使）伸出；设计，规划
drum	n. 鼓，鼓状物
thorny	a. 多刺的；痛苦的，棘手的
eligible	a. 符合条件的；合适的
admit	v. 承认；准许……进入；准许……加入
bacterial	a. 细菌的；由细菌引起的
management	n. 管理（部门、人员）；处理
enrolment	n. 登记（人数），注册（人数）；入学，入伍；登记簿，名册
strategy	n. 战略，策略
emerge	vi. 出现；显露，（事实等）暴露
submerge	v. 浸没；潜入水中
mantle	n. 披风，斗篷；覆盖物；（煤气灯）纱罩；[解] 外层；包膜；外表；（水库的）槽； [地] 地幔  vt. 用斗篷盖；覆盖
overall	a. 全面的；全部的
granite	n. 花岗岩，花岗石
approximate	a. 近似的  /əˈprɔksɪmeɪt/ vt. 近似
gallery	n. 美术馆
community	n. 社会；社区；团体；（动植物的）群落；共同体
swing	v. 摇摆；（使）突然转向  n. 摇摆；秋千
cite	vt. 引用；引证
spectrum	n. 谱，光谱，频谱；范围，幅度
drawback	n. 缺点；不利条件
identity	n. 身份；特性；同一性
trend	n. 倾向；趋势；流行，时尚  vi. 伸向；倾向
extreme	a. 极度的；最后的  n. 极端，过分
skip	v. 跳，蹦；漏过；逃学
military	a. 军事的  n. [the ~] 军队
poison	n. 毒，毒药  vt. 毒害
vested	a. 法律规定的；既定的
symphony	n. 交响乐
locate	vt. 找到；位于；使坐落于；把……设置在
classify	vt. 把……归类，把……分级
enthusiastic	a. 热情的；热心的
alter	vt. 改变；变动
disqualify	vt. 使丧失资格
database	n. 数据库
maximum	n. 最大量，极限  a. 最大的，最高的
delivery	n. 投递，交付；分娩
undergraduate	n. 大学本科生，大学生，大学肄业生
focus	v. （使）聚焦，（使）集中  n. 焦点，焦距；（注意力、活动等的）中心
administer	v. 掌管；给予
ash	n. 灰；灰烬； [pl.] 骨灰，遗骸
intensify	vt. 使增强；使加剧
inventory	n. 目录；存货
event	n. 事件；比赛项目
crucial	a. 决定性的；至关重要的
stage	n. 舞台；戏剧；阶段
aeration	n. 通风
profitable	a. 有利可图的，赚钱的；有益的
virus	n. 病毒
faith	n. 信任，信用；信仰，信条
cafeteria	n. 自助餐馆；自助食堂
involve	vt. 使卷入，使参与；牵涉，陷入，连累；包含，含有
dairy	n. 奶制品；乳品店  a. 乳制品的
confirm	vt. 证实，确定；肯定；批准，使有效
hinge	n. 合叶；铰链  v. 依……而定
hurricane	n. 飓风
subsidise	vt. 津贴，资助
stain	vt. 染污；给……着色  n. 污点
unload	v. 从……卸下货物；摆脱
conversion	n. 转化；转变，变换；兑换；改变信仰，皈依
irrelevant	a. 不相关的；离题的
thrill	v. （使）非常激动；（使）发抖
trial	n. 审讯；试验  a. 试验性的
extol	vt. 赞颂，赞美，颂扬
albeit	conj. 虽然，尽管
obstacle	n. 障碍，妨碍物，干扰
meagre	a. 少量的，粗劣的
precipitation	n. 降雨（量），降水（量）；仓促，急躁； [化]沉淀作用
precarious	a. 不安全的，充满危险的；不牢靠的，不稳固的
autonomy	n. 自治，自治权；人身自由，自主权
credibility	n. 可信性，可靠性
onslaught	n. 猛攻，猛袭
curtail	vt. 缩短，消减；剥夺
correlation	n. 相互关系，相关（性）
afflicting	a. 痛苦的
simulation	n. 假装；模拟
incongruous	a. 不协调的，不一致的；不适宜的
remuneration	n. 报酬
intermix	v. 混入，混杂
paramount	a. 最重要的，决定性的  n. 最高统治者
hypnotic	a. 催眠的  n. 催眠药
suffice	v. （使）满足，（使）满意；足够
technician	n. 技术员，技师
apart	ad. 相间隔；分离；除去  a. 分离的
mainstream	n. 主要倾向，主要趋势，主流；主流派爵士乐（介乎传统与现代之间者）  a. 主流的
flush	v. 冲洗，清除；（使）发红；（使）脸红；奔流  n. 脸红，红光  a. 齐平的，同高的
stir	v./n. 搅动；摇动；激动
odd	a. 奇特的；临时的；奇数的
inject	vt. 注射；注入，灌输
demand	n. 要求；需求（量）  v. 需求；需要；询问
unsatisfactory	a. 不能令人满意的
grid	n. 格子，栅格；地图上的坐标方向；输电网，煤气输送网
aeroplane	n. 飞机
controversial	a. 争论的
wagon	n. 四轮马车；大篷车
reputation	n. 名誉，名声
tag	n. 标签；附加语  v. 跟随；给……加标签；添加
excursion	n. 远足，短途旅游；[物] 偏移，漂移
dizzy	a. 头晕目眩的，眩晕的；（使）人头晕的
immune	a. 免疫的，有免疫力的；有抵抗力的；不受影响的；免除的，免除惩罚的，豁免的
carve	v. 切；雕刻
canoe	n. 独木舟
geology	n. 地质学；地质概况
directory	n. 人名地址录；（电话）号码簿
mall	n. 购物中心
vital	a. 生死攸关的；极其重要的；有生命力的
droplet	n. 小滴
reveal	vt. 揭露；泄露；展现
visible	a. 可见的，看得见的；有形的；明显的，显而易见的
conference	n. （正式）会议
cholesterol	n. 胆固醇
cube	n. 立方形；立方
construct	vt. 建造；构思，构筑；创立  {ˈkɒnstrʌkt} n. 构想，观念
calcium	n. 钙
interval	n. 间隔，幕间休息；间距
advent	n. 到来；出现
aggressiveness	n. 侵略；争斗；攻击
category	n. 种类；类别；范畴
fault	n. 缺点，瑕疵，毛病
confusion	n. 困惑，糊涂；混淆；混乱，杂乱，无秩序状态，骚乱
wrinkle	n. 皱纹  v. （使）起皱纹
huddle	vi. 聚焦在一起  n. 杂乱的一堆；拥挤
clash	v. 发生冲突；不协调；砰地相撞，发出刺耳的撞击声  n. 冲突；不协调；（金属等的）刺耳的撞击声
marble	n. 大理石；弹子； [pl.] 弹子游戏
booth	n. （隔开的）小房间；公用电话亭；售货棚
imitation	n. 模仿；仿造；仿制品，假货，赝品
exceed	v. 超过，胜过
cohesion	v. 结合，团结；凝聚力
astound	v. （使）震惊
absorb	v. 吸收；吸引……的注意，使全神贯注；把……并入，同化
livestock	n. <总称> 家畜，牲畜
decrease	v. 减少，减小  /ˈdiːkriːs/ n. 减少；减少量
moral	a. 道德的，伦理的  n. [pl.] 品行，道德；寓意，教训
weigh	v. 称重；认真考虑，权衡
ceramic	a. 陶器的  n. [pl.] 陶瓷器
acquisition	n. 取得；获得物
character	n. 性格，品质；性质，特性；人物，角色；（书写或印刷）符号，（汉）字
arrange	v. 安排；排列
conservation	n. 保存；保护
earthworm	n. 蚯蚓；小人
entice	v. 怂恿，引诱
manipulative	a. 操纵别人的；老于世故的
memorise	vt. 记住，熟记
retrenchment	n. 节省；削减
motivational	a. 动机的，有关动机的
reinforcement	n. 增援，加强，加固
intervention	n. 干涉，干预，介入
infirmity	n. 虚弱，衰弱
glossy	a. 有光泽的，光滑的
escalate	v. （使）逐步增长或发展，（使）逐步升级
extravagance	n. 奢侈，挥霍；放肆的言行
victimise	v. （使）受害，迫害
evaluation	n. 估价，评价
maternal	a. 母亲的；母系的
crusade	n. 十字军（远征）；斗争，运动  v. 加入十字军，投身正义运动
recalcitrant	a. 顽抗的，反抗的
mortality	n. 死亡率
taunt	vt. 嘲笑，讥笑  n. [常pl.] 嘲弄的言语，讥讽
disseminate	v. 散布，传播
sanction	v. 批准，认可  n. 批准，认可；约束因素，约束力；[常pl.] 国际制裁
frustration	n. 沮丧，不满
invert	vt. （使）倒转，（使）颠倒
recipe	n. 食谱；方法，秘诀，秘方
condense	v. （使）压缩，精简；（使）凝结
unfortunately	ad. 不幸地
gather	v. 聚焦，集合，聚拢；收集，采集；逐渐增加；猜想，推测
Cantonese	n./a. 广东人（的）；广东话（的）
advertise	vt. 为……做广告；宣传；（在报刊、电视、广播中）公告，公布
utility	n. 功用，效用； [常pl.] 公用事业
exhibit	n. 展览品  v. 陈列，展览；显示
irrevocable	a. 无法取消的，不能改变的
shelter	n. 掩蔽（处），隐蔽（处）；住所；保护  v. 掩蔽；躲避
stock	n. 储备品；股票； <总称> 家畜  v. 储备  a. 常备的
devise	vt. 设计，发明
career	n. 生涯；经历；职业
humidity	n. 湿度；潮湿
hollow	a. 空的，空洞的；（声音）沉闷的；虚伪的，空虚的  v. 挖空，凿空
statistic	n. 统计数值；统计学
bark	vi. 吠叫  n. 犬吠声；树皮
burrow	v. 挖掘，钻进；翻寻  n. 地洞
equivalent	a. 相等的，等量的  n. 相等物，等价物
fatigue	n. 疲劳，劳累  v. （使）疲劳
bibliography	n. 参考书目；书目；文献学
probable	a. 很可能的，大概的
fortnight	n. 两星期，十四天
treadmill	n. （人或畜力的）踏车；累人的活；单调的例行工作，乏味繁重的工作
flavour	n. 风味，滋味  vt. 给……调味
asymmetry	n. 不对称
lethal	a. 致命的，破坏性的，毁灭性的；有害的
stare	n./vi. 盯
bungalow	n. （带走廊的）平房
colony	n. 殖民地；（动植物的）群体
stab	v. 刺，戳
fingerprint	n. 指纹，手印
enthusiasm	n. 热情，热心，积极性；热衷的事物
briefly	ad. 暂时地；简要地
flint	n. 火石，打火石
commodity	n. 商品，货物；日用品
mixture	n. 混合（物）
tendency	n. 倾向，趋向
lane	n. 小巷；行车道
assess	vt. 评定；估价
inductive	a. 诱导的，归纳的
session	n. 一场，一节；会议；集会
constrain	vt. 迫使；约束
negative	a. 否定的，反面的；消极的；负的，阴性的  n. 负数；（照相的）底片
unwrap	vt. 打开，解开；除去包装
punctual	a. 守时的；准时的
intake	n. 吸入，纳入；进气口，入口
penetration	n. 进入，穿过；洞察力，领悟力
municipal	a. 市的，市政的；地区的；内政的
deficit	n. 不足额，赤字
triumphant	a. 得胜的；得意洋洋的；狂欢的
plagiarise	v. 剽窃，抄袭
reptile	n. 爬行动物，爬虫类；卑鄙的人
circumscribe	vt. 在……周围画线；限制
patronage	n. 赞助；支持；光顾；任免权
analogy	n. 类推；类比
precedent	n. 先例，范例；惯例
obscurity	n. 模糊；费解；不出名
ascertain	vt. 弄清，查明；确定
esteem	n./vt. 尊重；尊敬
legitimacy	n. 合法性；正统性
discrepancy	n. 不同；矛盾
benevolent	a. 善心的，仁心的
malevolent	a. 有恶意的；恶毒的
downsize	v. 缩小，紧缩
lunar	a. 月的；月亮的
complicated	a. 复杂的；难懂的
handle	v. 处理；操作，操纵；触，抚摸  n. 手柄，把手
innovation	n. 革新，创新
glitter	n./vi. 闪光
feedback	n. 反馈；反馈信息
subsequent	a. 继……之后的，随后的
shark	n. 鲨鱼；诈骗者
council	n. 理事会，委员会
venomous	a. 有毒的；分泌毒液的；恶意的，狠毒的
intellectual	n. 知识分子  a. 智力的；理智的
strain	v./n. 拉紧，绷紧；扭伤，拉伤；（使）过劳，（使）极度紧张
champion	n. 冠军
leukaemia	n. 白血病
terminology	n. （某学科的）专门用语；术语
centennial	n. 百年纪念  a. 一百年的
Mediterranean	a. 地中海（式）的  n. 地中海
outdo	vt. 超越，胜过
discipline	vt. 训练，训导  n. 学科；纪律；处分
consequent	a. 作为结果的；随之发生的
fulfil	vt. 实现，完成；满足
element	n. 要素；元素； [the -s] 基本原理
segment	n. 片段；部分；节；线段；（橘子等的）瓣
orchestra	n. 管弦乐队
muscle	n. 肌肉；体力；力量，实力
function	vi. 运行，起作用  n. 功能；职责，作用；函数
metaphor	n. 隐喻，暗喻
delegate	n. 代表，代表团成员  /ˈdelɪgeɪt/ vt. 委派……为代表；授（权）给……，把……委托给……
fragile	a. 脆弱的；虚弱的；易碎的；易受伤害的
radiate	v. 发光；发热；辐射
situated	a. 位于……的；处于……境地的
invader	n. 入侵者
complete	a. 彻底的；完成的；绝对的  vt. 完成；结束
kit	n. 成套工具  v. 装备
generate	vt. 发生，生产（光、热、电等）；引起，导致
remote	a. 远的，长久的；遥远的，偏僻的；远程的；关系疏远的，脱离的；绝少的，微乎其微的；孤高的，冷淡的
stove	n. 炉
avoid	vt. 避免；躲开
dismiss	v. 解雇，解散；驳回，不受理
bucket	n. 水桶
owl	n. 猫头鹰
absenteeism	n. 旷课；旷工
apparent	a. 显然的；表面上的
succumb	vi. 屈服，屈从；（因……）死亡
stretch	v. 伸展；延伸，延续，拉长；使倾注全力，使紧张  n. 一段（时间、路径）；伸展，延伸，延续
minister	n. 部长；外交使节；牧师
combustion	n. 燃烧；燃烧过程
veterinary	a. 兽医的
plausible	a. 似有道理的，貌似真实的；嘴巧的
elucidate	vt. 阐明，使……清楚
transient	a. 短暂的，转瞬即逝的  n. 在某地短暂停留或工作的人
sanitation	n. （公共）卫生，卫生设施
distortion	n. 扭曲，变形；曲解，歪曲
altruistic	a. 无私的，为他人着想的
climatic	a. 气候（上）的
pragmatic	a. 务实的；实事求是的；实用主义观点的
dwindle	v. （使）变小，（使）缩小
disdain	v./n. 鄙视，蔑视
constituent	n. 成分，要素；选区内的选民  a. 组成的；有宪法制定或修改权的
impetus	n. 推动，促进，刺激；推动力
malleable	a. 可塑的；易改变的
renaissance	n. [the R-] （欧洲14至16世纪的）文艺复兴，文艺复兴时期；（文学、艺术等的）复兴、新生
incongruity	n. 不和谐，不相称；不协调或不一致的事物
instinctual	a. 本能的
pedigree	n. 家谱；门第；血统
scuffle	n./vi. 扭打，混战
treatise	n. 论文；专著
hypothetical	a. 假设的，假定的；爱猜想的
smother	v. 厚厚的覆盖；（使）窒息；把（火）闷熄
excess	n. 超越；过量  /ˈekses/ a. 过量的，额外的
spine	n. 脊椎，脊柱；（动植物的）刺，刺毛；书脊；<喻> 中心
stress	n. 压力；重音；强调，重点，着重  vt. 强调；重读
smooth	a. 顺利的；流畅的；协调的
incur	vt. 招致，遭受
missile	n. 发射物；导弹，飞弹
compulsively	ad. 强制地；禁不住地
wrap	v. 裹；包；缠绕
confine	vt. 限制，仅限于；管制，禁闭  n. [pl.] 界限，范围
limitation	n. 限制；局限
chain	n. 链，链条；一连串，一系列； [pl.] 枷锁，镣铐；联号，连锁店  vt. 用链条拴住
sip	v. 小口地喝；吸吮
tedious	a. 冗长乏味的，单调的
pathology	n. 病理学；病变
setting	n. 环境；背景；安置
mood	n. 心情，情绪
extinct	a. 灭绝的；废弃的
aridity	n. 干旱；乏味
vision	n. 想象力；视力，视觉；梦幻，幻觉
sausage	n. 香肠
organism	n. 生物；有机体
surveillance	n. 监视，盯梢
senior	a. 资格较老的；年长的  n. 较年长者；（中学或大学的）毕业班学生
vague	a. 模糊的；含糊的
translate	v. 翻译
poverty	n. 贫穷
breakwater	n. 防浪堤
modify	vt. 更改，修改；（语法上）修改
clockwise	a./ad. 顺时针方向的/地
isolate	vt. 使陆离，使孤立
highlight	vt. 强调，突出；以强烈光线照射；集中注意力于  n. 最精彩的部分，最重要的事件
moist	a. 湿润的，潮湿的
threaten	v. 威胁，恐吓；预示（危险）快要来临；是……的征兆，可能发生
underling	n. 职位低的人，下属
medium	n. 媒质，媒介；工具，手段；（细菌等的）生存环境  a. 中等的；平均的
detail	n. 细节，详情；枝节，琐事  vt. 详述，详细说明
compile	vt. 汇编；编纂
induction	n. 就职；归纳；感应
link	n. 环节；联系，纽带  v. 连接，联系
foreland	n. 前沿地；岬角
unemployment	n. 失业；失业人数
option	n. 选择（权）；（供）选择的物（或人）；选课
bay	n. 海湾
slogan	n. 标语，口号
instinct	n. 本能，直觉；天性
marsh	n. 沼泽；湿地
mental	a. 心理的，精神的；智力的
hospitality	n. （对客人的）友好款待，好客；盛情；招待礼节
origin	n. 起源；[常pl.] 出身
array	n. 陈列；大批  vt. 部署
remain	v. 保持；仍旧是；剩下  n. [pl.] 残余；遗迹；残骸，遗体
comprehension	n. 理解；理解力
journal	ｎ. 杂志；日报；日志
notorious	a. 著名的，众所周知的；声名狼藉的
cash	n. 现金，现款  vt. 把……兑现
valid	a. 有效的，具有法律效力的；正当的；有根据的，有理的
enrich	vt. 充实，使丰富；使富裕
tab	n. 标签
equation	n. 方程式，等式；平衡；等同，相等
miracle	n. 奇迹；奇事
worthy	a. 有价值的；值得的
irrigation	n. 灌溉；冲洗
chief	a. 主要的；为首的
remedy	n. 药品；治疗法；补救  vt. 治疗；补救
accelerate	v. 加速；促进
thoughtful	a. 沉思的；体贴的
brunt	n. 冲击；冲力
prominence	n. 突出，显著；卓越；重要
compass	n. 罗盘，罗盘仪；界限，范围； [pl.] 圆规
inaugurate	vt. 开始，开创；为……举行就职典礼；为……举行开幕式；为……举行落成仪式
suppress	vt. 压制，镇压；禁止发表；查禁；抑制（感情等），忍住；阻止……的生长（或发展）
perpetuate	vt. 使永存；使持续
configuration	n. 结构，配置；轮廓，外形
replenish	vt. 再斟（或装）满；添加，补充
encompass	vt. 包含；包围；环绕
camouflage	v./n. 掩饰，伪装
encapsulate	vt. 装入胶囊；压缩；总结，概述
reinvigorate	vt. 使重新振作；使恢复活力
repatriate	v. 把（某人）遣返回国；归国
tensile	a. 拉力的，张力的；可延展的，可伸长的
solidify	v. 巩固，确保；凝固，（使）固化；团结
propagate	v. 繁殖，增殖；传播，宣传，使普及
germinate	v. （使）发芽，（使）生长；发展
unbeatable	a. 无敌的，不可战胜的
accredit	vt. 信任，相信，委任，授权；把……归于
disorientate	vt. 使失去方向感；使迷茫，使不知所措（= disorient）
slumber	v. 睡眠（尤指睡得安稳而舒服），安睡  n. [常pl.] 睡眠，安睡
sufficient	a. 足够的，充分的
antiquity	n. 古，古老；古代；古人；古迹，古物
pretend	v. 装作，假装
dominant	a. 占优势的；统治的；居高临下的
privacy	n. 隐私，私事；隐私权
pilot	n. 飞行员，引航员  vt. 驾驶，为……引航
advance	a. 预先的；先行的  v. 前进，向前移动；取得进展；预付  n. 前进，前移；增长，提高；预付（款等）
efficiency	n. 效率；功效，效能
drainage	n. 排水（系统）
credible	a. 可信的，可靠的
elaborate	a. 详尽的；复杂的；精心制作的  /ɪˈlæbəreɪt/ v. 详述；详细制定
consult	v. 请教；查阅；商议
fare	n. 费，票价  vi. 进展
foundation	n. 基础；地基；创立
principal	a. 主要的  n. 校长；资本；主角
collection	n. 收集，积聚；收藏（品）
comparatively	ad. 相对地；比较地
victim	n. 牺牲者；受害者
aisle	n. 走廊，通道；（教堂的）侧廊
lime	n. 石灰
scan	v. 扫描；浏览  n. 扫描
sculpture	n. 雕塑品
rigorous	a. 严密的；严格的，严厉的；严酷的
fragment	n. 碎片，小部分，片断  /frægˈment/ v. 分裂；破碎
audio	a. 听觉的；声音的
landmark	n. 路标，地标；里程碑
biography	n. 传记
dubious	a. 怀疑的；靠不住的，不确定的
boulder	n. 大石头；鹅卵石
drill	v./n. 钻；训练
batch	n. 一批，一组，一群；一批生产量
camel	n. 骆驼
shell	n. 壳；炮弹  v. 给……去壳；炮击
triangle	n. 三角（形）
subsidy	n. 津贴，补助金
contrived	a. 不自然的；人为的
multiply	v. （使）增加，（使）繁殖；乘
joint	n. 接头；关节  a. 连接的；联合的
spray	n. 浪花；喷雾；飞沫  v. 喷射；（使）溅洒
meanwhile	ad. 与此同时
force	vt. 强迫  n. [pl.] 军队；力气；影响力
evolve	v. （使）逐渐形成；（使）演变，（使）进化
chew	v. 咀嚼；回味；熟思
speculate	v. 推测；投机
bulge	n./v. 膨胀；凸出；塞满
insignificant	a. 无关紧要的，无意义的
revise	v. 修订；复习
deposit	v. 存放；储蓄；使沉淀；付（保证金）  n. 存款；保证金，押金；沉积物
professional	a. 职业的；专业的  n. 自由职业者；专业人员
rigid	a. 严格的，死板的；刚硬的，僵硬的
solemn	a. 庄严的，隆重的；严肃的，认真的
outsell	vt. 卖得比……多
forum	n. 论坛；讨论会
anecdote	n. 短故事；趣闻，轶事
conversely	ad. 相反地，颠倒地
prefabricate	vt. 预制构件（用以组装建筑物、船舶等）
paralysis	n. 瘫痪，麻痹，中风
geometric	n. 几何的，几何学的
floral	a. 花的，像花的；绘有花的，饰以花的；植物群的
pollinate	vt. [植] 给……授粉
objectify	vt. 使客观化；使具体化；物化
presuppose	vt. 预先假定……属实；认为，假设；以……为先决条件，以……为前提
recapture	vt. 重获，收复
contrive	v. 计划，图谋；设计；发明
anticipation	n. 预料
provenance	n. 出处，起源
studious	a. 好学的，学习勤勉的；专心的；谨慎的，认真的，仔细的
vibrant	a. 振动的；活泼的，充满生气的；兴奋的
inventive	a. 发明的，创造的；善于发明创造的
protrude	v. （使）伸出；（使）突出
managerial	a. 经理的；管理的，经营的
notoriety	n. 声名狼藉，臭名昭著
opaque	a. 不透明的；晦涩的，难懂的
ape	n. 猿  vt. 模仿
partial	a. 部分的，不完全的；偏爱的，癖好的；偏向一方的，偏心的
portable	a. 便于携带的；手提式的
depart	vi. 离开，起程
gauge	n. 测量仪表；规格，标准；计量器  vt. 测量，度量
dialect	n. 方言，土语
debate	n./v. 争论，辩论
freefone	n. 免费电话
cosmopolitan	a. 世界性的，全球的  n. 世界主义者；四海为家者
helix	n. 螺旋（形），螺旋结构
motion	n. 运动；手势  v. （向……）打手势
understanding	n. 理解；谅解  a. 体谅的；宽容的
circumstance	n. 环境； [pl.] 境况，情况
temper	n. 情绪  vt. 使缓和
bamboo	n. 竹子
shore	n. 滨，岸，海滩
insurance	n. 保险；保险费；保险业
impress	vt. 给……留下深刻印象，使铭记；印，压印  n. 印记
maintain	vt. 维持，保持；维修，保养；坚持，主张；赡养，负担
meaningful	a. 有目的的；有意义的
exist	vi. 存在；生存
jostle	v. 推挤；挤开通路
version	n. 样式；型号；种类；说法；版本；译本
hostility	n. 敌意，敌对，对抗；抵制，反对，否决； [pl.] 交战，战争
appearance	n. 出现；外观
grind	n. <口> 苦差事  v. 磨（碎），碾；折磨
optimistic	a. 乐观的，乐观主义的
tense	a. 拉紧的  v. （使）拉紧
ignore	vt. 不顾，不理，忽视
extract	n. 摘录，选段；提出物，精，汁  /ɪkˈstrækt/ vt. 取出；提取
therefore	ad. 因此，所以
bar	n. 酒吧；栅栏；棒，条状物  vt. 闩（门、窗等）；阻拦
externally	ad. 外表上，外形上
abound	vi. 富于；充满
subjective	a. 主观（上）的
particularly	ad. 特别，尤其
quiver	v. 颤抖，抖动
marker	n. 标记，标志
district	n. 区，地区
MasterCard	n. 万事达信用卡
classification	n. 分类；级别
pollution	n. 污染，污染物；玷污
obtain	v. 获得，得到；通用，流行
mandarin	n. 橘子；达官贵人，官僚； [M-] 普通话
probe	v. 探索，查究；（用探针或探测器等）探查，探测  n. 探针；探测器，探测飞船；探索，调查
panic	a. 恐慌的  n. 恐慌，惊惶  v. （使）惊惶失措
disturb	v. 扰乱；弄乱，打乱；打扰，使烦恼
grassy	a. 草绿色的；似草的
glorious	a. 光荣的；壮丽的
fertile	a. 肥沃的，多产的，富饶的；能繁殖的
amateur	n. 外行；业余爱好者  a. 业余的
undisguised	a. 无伪装的；坦率的
sliver	n. 银；银器
fulfillment	n. 履行；实现
aspire	v. 向往，渴望，追求；有志于，有抱负
recession	n. （经济的）衰退，衰退时期；撤回，退回
miscellaneous	a. 各种各样的；混杂的
utilization	n. 利用
caustic	n. 腐蚀剂  a. 腐蚀性的；（指评论）讽刺的，挖苦的
detergent	a. 净化的，清洁的  n. 清洁剂
reclaim	vt. 纠正；要求归还，收回；开垦（土地）
deflect	v. （使）偏斜，（使）转向
trench	n. 沟，壕沟  v. 挖沟
holistically	ad. 整体地，全盘地
urbanization	n. 城市化，都市化
insularity	n. 岛国（状态）；与外界隔绝的生活状况；（思想、观点等的）褊狭
permeate	v. 扩散，弥漫；渗透，渗入
repack	vt. 重新包装；重新填塞；再装配；拆修
disruptive	a. 制造混乱的；分裂性的；破坏性的
clinical	a. 临床的；冷静客观的；简朴的，不装饰的
momentum	n. 动力，冲力，势头；动量
disempower	vt. 使失去权力或影响
depletion	n. 消减，消耗
authenticate	vt. 鉴别，证明
anatomy	n. 解剖（学）；解剖结构
confidence	n. 信任；信心
chemical	a. 化学的  n. 化学制品
literal	a. 照字面的；逐字的
comprehensive	a. 全面的，广泛的；综合的；包容的
glue	n. 胶水  vt. 胶合，张贴
bureau	n. 办公室；机构；局；处；所
marsupial	n./a. 有袋动物（的）
commencement	n. 开始，开端；毕业典礼
observe	v. 察觉；观察；遵守
brood	v. 深思；孵蛋  n. （雏鸡等）一窝
interdependent	a. 互相依赖的，互助的
prominent	a. 突出的；著名的；显著的
conventional	a. 普通的，习惯的；常规的，因循守旧的，传统的
productivity	n. 生产力；生产率
viscous	a. 黏滞的，黏性的
murder	n./v. 谋杀，凶杀
transform	v. 使改观，改革，改善；变换，把……转换成
strategist	n. 战略家
indulge	v. 沉溺于，纵情于；满足（欲望、兴趣等）；放纵，听任
centrifugal force	n. 离心力
personality	n. 人格；个性；名人，人物
definition	n. 定义，释义；清晰（度）
host	n. 主人；东道主；主办方；大量，许多  v. 主办；招待
feminism	n. 男女平等主义；女权主义；女权运动
abate	v. 减轻；降价
expectation	n. 期待，预期； [pl.] 前程，成功的前景
excessive	a. 过多的，极度的，过分的
brilliant	a. 光辉灿烂的；卓越的，有才华的
hall	n. 门厅；礼堂
seminar	n. （大学的）研究班，研讨会
charcoal	n. 炭，木炭
navigable	a. 可通航的；适于航行的
foul	a. 发臭的；肮脏的；邪恶的  n. 犯规
track	and field 田径
contemplate	v. 思量，深思；注视，凝视；打算，预期
budget	n. 预算，预算经费  v. 做预算
flee	v. 逃走；逃避
worthwhile	a. 值得花费时间（或金钱）的，值得做的
clamp	v. （用夹具等）夹紧  n. 夹钳
convenience	n. 方便；便利设施
fountain	n. 喷泉
migrant	n. 移居者，移民；迁移动物，候鸟
specify	v. 指定；详细说明
deviance	n. 异常；偏常行为
estimate	v. 估计，估量；估价；评价  /ˈestɪmət/ n. 估计，估量；估价；评价
tick off	用记号勾出，给……打核对号
livelihood	n. 生活，生计
manufacture	vt. 大量制造，成批生产  n. 大量制造；工业品
censure	vt./n. 指责，谴责，责难
voltage	n. 电压
logic	n. 逻辑；逻辑学
metro	n. 地下铁路
enroll	v. 入学，登记；加入；招收
civilization	n. 文明（社会），文化
compendium	n. 简要，概略
embark	v. （使）上船或飞机；（使）从事
deserve	v. 应得；值得
eject	v. 弹出；喷出；驱逐，逐出
verification	n. 确认
autoimmune	a. 自身免疫的
inheritance	n. 遗传；继承，继承物；遗产，遗赠
relentless	a. 无情的，残酷的
requisite	a. （情况）需要的；（成功）必要的  n. 必需品；要素
dizziness	n. 头昏眼花，眩晕
periphery	n. 不重要的部分；外围
credential	n. 证明书；（学历、资历）资格证书；证件
facsimile	n. 复制品；副本
reel	n. 卷轴，卷筒，卷盘，线轴  v. 摇摇晃晃地移动，蹒跚；眩晕，发昏；卷，绕
churn	n. （制作黄油用的）搅乳器；  v. 用搅乳器搅拌；剧烈搅动；猛烈翻滚；反胃，恶心
nocturnal	a. 夜晚的；夜晚发生的；夜晚活动的
obstruct	v. 妨碍，阻止；阻塞；截断
prohibitive	a. 禁止的，抑制的；令人望而却步的
navigation	n. 航空，航海，航行；导航，领航
entwine	vt. 使缠住，使盘绕
monumental	a. 纪念碑的，纪念物的；不朽的，有重大意义的
reiterate	vt. 重复，反复；反复地说，重申
jeopardise	vt. 危害，使受危困
peripheral	a. 外围的；次要的，附带的  n. 外围设备
elusive	a. 难懂的，难捉摸的；易忘的
distinctive	a. 出众的；有特色的
board	n. 板；委员会
decompression	n. 减压；减压室
prevalent	a. 流行的，普遍的
twist	v. 缠绕；捻；扭曲，弯曲  n. 弯曲
rent	v. 租借；出租  n. 租金
eminent	a. 杰出的，显赫的
crescent	n. 新月，月牙；新月形（物）  a. 新月形的
sucker	n. 吸盘；吸根，根出条
calm	a. 镇静的；平静的  v. （使）平静，（使）镇静
scope	n. 眼界，见识；（活动、影响等的）范围；（发挥能力等的）余地，机会
cooperate	vi. 合作，协作
applaud	v. （向……）鼓掌，喝彩；称赞
appraisal	n. 评估，评价
allowance	n. 津贴；允许，容忍
heir	n. 继承人
exploit	vt. 剥削；开发，开拓；利用  /ˈeksplɔɪt/ n. 英勇行为；业绩，功绩
domestic	a. 本国的；家庭的；驯养的
unexpected	a. 想不到的，意外的
counsel	n. 律师，法律顾问；建议，忠告  v. 商议，劝告
sticky	a. 黏性的；（天气）湿热的
competition	n. 竞争；比赛
responsible	a. 有责任感的；可靠的
critic	n. 批评家；爱挑剔的人
extensive	a. 广大的，广阔的；广泛的
corridor	n. 过道，走廊
imagine	v. 想象；猜想
interact	vt. 相互作用；相互影响
starchy	a. 含淀粉的
trivial	a. 无价值的，琐屑的；平庸的，普通的
exorbitant	a. 过分的，不合理的
large-scale	a. 大规模的，大范围的
region	n. 地区；范围
alternate	v. （使）轮流，（使）交替  /ɔːlˈtɜːnət/ a. 轮流的；间隔的；交替的
steer	v. 引导；驾驶
bargain	vi. 讨价还价  n. 协议；交易；便宜货
infection	n. 传染，感染，侵染，传播；传染病
conservative	a. 保守的；传统的；守旧的  n. 保守的人
spin	v. （使）旋转  n. 旋转
personnel	n. 全体人员，员工
liver	n. 生活者，居住者；肝脏
inflammable	a. 易燃的；易怒的
disfigure	vt. 使毁容，使变丑
surf	v. 冲浪
swear	v. 宣（誓）；诅咒
create	vt. 创造，创作；产生
mime	v. 模拟，模仿  n. 哑剧表演；哑剧演员
impose	v. 把……强加于；征（税等）；处以（罚款、监禁等）
likelihood	n. 可能；可能性
explode	v. （使）爆炸；爆发；激增
spectacular	a. 壮观的；令人惊叹的  n. 壮观的场面；精彩的表演
enormous	a. 巨大的，庞大的，极大的
counterproductive	a. 产生相反效果的，适得其反的
variant	a. 不同的  n. 变量；变体
healing	n. 康复，复原  a. 有治疗作用的
autocratic	a. 独裁的，专制的
emulate	vt. 与……竞争，赶上；仿真，模仿
disastrous	a. 损失惨重的，灾难性的；极坏的
topple	v. 倒塌，倒下；打倒，推翻
resilience	n. 弹性，弹力；复原力；适应性；（指人）乐观的性情
collateral	a. 并行的；间接的，附带的
colossal	a. 巨大的，庞大的
tackle	v. 对付，处理；向某人提起（问题或困难情况）；（足球等比赛中）抢截，抢球
coordinate	v. 调整，协调  {kəuˈɔːdɪnət}  n. 同等者，同等物  a. 同等的，并列的
supplementary	a. 增补的，补充的
scrutiny	n. 详细检查，细看；监视
cognition	n. 感知，认知；认识力
repel	vt. 击退，驱逐；抵制，拒绝；使反感，使厌恶
domesticate	vt. 驯养，教化；使喜爱家居生活
exhaustive	a. 包揽无遗的，彻底的，详尽的
calibrate	vt. 标定，划分；校准刻度
descend	v. 下来，下降；遗传
frontier	n. 边境，边界；开发地区的边缘地带； [常pl.] 前沿，新领域
fascinating	a. 迷人的
stroke	n. 击，打；（病）突然发作，中风；（体育中的）击球；笔触，一笔；（游泳或划船的）划，划法；一击；报时的钟声；抚摸  vt. 抚摸
solar	a. 太阳的；（利用）太阳能的
sympathise	vi. 同情；赞同
fusion	n. 熔化，熔合；聚变
slash	n. 砍痕，伤痕；斜线号  v. 砍；大幅度消减
diversity	n. 多样性；差异
decline	n./v. 下降，减少；衰退，衰落
crisis	n. 危机；紧要关头，关键阶段
edible	a. 可食用的
collaboration	n. 合作，协作；勾结，通敌
decouple	v. 减弱，减少
participant	n. 参加者，参与者
weaken	v. （使）变弱，（使）减弱
distract	vt. 转移（注意力）；使分心
frown	vi. （表示愤怒或烦心而）皱眉
skew	vt. 使偏；曲解  a. 歪斜的
glove	n. 手套
beehive	n. 蜂窝；蜂箱
astray	ad. 迷路地；误入歧途地
theory	n. 理论，原理；学说；意见，看法
weakness	n. 虚弱；缺点；偏好，嗜好
portion	n. 部分；一份  vt. 划分，分配
compound	vt. 使恶化，加重；使化合，使合成  /ˈkɔmpaund/ n. 化合物，复合物；（有围墙或篱笆等的）楼群，大院  a. 复合的，化合的；综合的
span	n. 跨距；一段时间  v. 横跨；持续
vacancy	n. 空位，空房间；（职位的）空缺，空职；无主意，空虚，茫然若失
locality	n. 位置；地区
circle	n. 圆；圈，环状物；圈子，阶层；周期，循环  v. 圈出；盘旋，环绕……移动
accuracy	n. 准确（性），精确（性）
tolerate	vt. 容忍，宽容；容许，承认
afford	v. 负担得起
excellent	a. 极好的；杰出的
connect	v. 连接，衔接；联合，关联；由……联想到；给……接通电话
cylinder	n. 圆柱体；圆筒；汽缸
disadvantage	n. 缺点，不利
participate	vi. 参加，参与
principle	n. 原则，原理；规范，准则；基本信念，信条
refreshment	n. （精力的）恢复； [pl.] 茶点，点心，饮料
deteriorate	v. 变坏，恶化；退化
scorching	a. 酷热的；激烈的
meantime	n. 其时  ad. 同时，当时
townscape	n. 市镇风光
upper	a. 上面的；地位较高的
innocent	a. 清白的；无害的；天真的
emphasis	n. 强调；重要性
approach	v. 靠近，接近；来临  n. 靠近，接近；方法，途径
duration	n. 持续，持续的时间，期间
primarily	ad. 首先；主要地，首要地
due	a. 到期的，预期的；应有的，应得的；正当的
keen	a. 热衷的，热心的，渴望的；敏锐的，敏捷的；激烈的，紧张的；锋利的
worm	n. 虫，蠕虫；蜗杆，螺纹
stiff	a. 硬的，僵硬的  ad. 极其，非常
timber	n. 木材，木料；栋木，大梁
profound	a. 深切的，深远的；知识渊博的，见解深刻的，深奥的
journalist	n. 新闻工作者，新闻记者
permission	n. 允许，准许
labour	n. 劳动；劳动力，工人  v. 劳动；努力
quota	n. 定额，限额，配额
unconcerned	a. 漠不关心的；不烦恼的
suspect	v. 猜想，怀疑
deterioration	n. 恶化；堕落
triple	a. 三部分的；三倍的  v. （使）增至三倍
condemn	vt. 声讨，极力谴责；给……判刑
transcend	vt. 超越，胜过，优于
cumulative	a. 积累的，渐增的
horizontal	a. 地平线的，水平的
adobe	n. 土坯，泥砖
certify	vt. 证明，保证
arousal	n. 唤起，激起
addiction	n. 瘾；沉溺
allege	vt. 断言，宣称
amphibious	a. 两栖的；水陆两用的
ascend	v. 攀登；上升，升高
assert	v. 断言，声称；坚持
assure	vt. 使确信，使确保；保证，向……保证
baffle	vt. 使困惑，难倒  n. 挡板，隔板
bewilder	vt. 使迷惑，使昏乱
biodiversity	n. 生物多样性
bud	n. 花蕾；叶芽  v. 发芽，萌芽
celestial	a. 天体的，天上的
combination	n. 结合（体），联合（体）；化合
impact	n. 影响，作用；冲击
renew	v. 重新开始；恢复；更换，更新；续借
bow	v. 低下（头）；弯腰，鞠躬  /bəu/ n. 弓
defeat	n./vt. 击败；挫败；战败
subsoil	n. 底土，下层土
bin	n. 大箱子；仓
evoke	vt. 唤起
flutter	v. 振（翅），拍打（翅膀）；飘动，晃动；（快速而不规则地）跳动
front-line	a. 前线的；第一线的
desperate	a. 绝望的；拼命的，不顾一切的；极度渴望的；危急的
wheelchair	n. （病人等用的）轮椅
gear	n. 齿轮，传动装置，（排）挡；（从事某项活动所需的）用具、设备、衣服等  vt. 调节，调整，使适应
band	n. 乐队；群，伙；带，箍；条纹；波段，频带  vt. 用带绑扎
breed	v. 饲养，养殖，繁殖；养育，培育；酿成，招致  n. 种，品种
intelligible	a. 可理解的，明白易懂的，清楚的
essence	n. 本质；精髓
predispose	v. 事先（在某方面）影响某人；偏爱；（使）易受感染（或患病）
display	vt./n. 陈列，展览；显示，表现
retire	v. 退休；引退，退隐，撤退
enlarge	v. 扩大，放大，扩充
occur	vi. 发生；存在
relate	v. 有关联；讲述，叙述
stark	a. 光秃秃的，赤裸的；荒凉的；完全的
inform	v. 通知；向……报告
halt	v. 暂停；踌躇；停住  n. 暂停
nerve	n. 神经；勇敢
deadline	n. 最后期限
limb	n. 肢，臂；树枝
sphere	n. 球（体）；范围，领域
evolution	n. 进展；进化
suitable	a. 适当的，相配的；合适的，适宜的
beverage	n. 饮料
influenza	n. 流行性感冒
criminal	a. 犯罪的；刑事的  n. 罪犯
undoubtedly	ad. 毋庸置疑地，确凿地
avalanche	n./v. 雪崩
alienation	n. 疏远；离间
accumulate	v. 积累；堆积
transmit	v. 传送；传染；发射
identification	n. 身份证明；识别，鉴定
wander	v. 徘徊，闲逛，漫步；偏离正道；走神，（神情）恍惚
classical	a. 古典的；传统的；经典的
abuse	n. 滥用，妄用；虐待，伤害；辱骂，毁谤  /əˈbjuːz/ v. 滥用，妄用；虐待，伤害；辱骂，毁谤
fake	a. 假的  n. 假货；骗子  v. 伪装
incorporate	vt. 把……合并，纳入；包含，吸收
trace	vt. 追踪，追查；追溯；描摹，标出  n. 痕迹；微量
convey	vt. 传送，运送；表达，传递
boundary	n. 分界线；边界
frank	a. 坦白的，直率的
bonus	n. 资金，红利；好处
militant	a. 好战的，好斗的；激进的  n. 好斗的人，激进分子
starve	v. （使）挨饿；（使）饿死
refresh	v. （使）复原，更新；（使）精神振作，（使）精力恢复
dystrophy	n. 营养障碍；营养不良
conduce	v. 有益于，有助于；导致
consulate	n. 领事馆；领事职位，领事任期
contaminate	n. 致污物，污染物
demerit	n. 过失；缺点，短处
denomination	n. 命名；（货币等的）单位；宗教派别
disturbance	n. 扰乱，打扰；骚乱，混乱；心神不安，烦恼
enjoyable	a. 令人愉快的，使人快乐的
expiry	n. 满期，终结
fluctuation	n. 波动，起伏；动摇
frequency	n. 频繁；频率
hamlet	n. 小村庄
hence	ad. 因此，所以；今后，从此
inadequate	a. 不充分的；不适当的
keystone	n. 拱顶石；（计划，论据等的）基础，主旨
manifest	a. 明显的  vt. 表明，显示  n. 货物清单
marginally	ad. 稍微，些微
moderately	ad. 适度地，不过分地，有节制地
noticeable	a. 显而易见的；明显的
optic	a. 眼的，视觉的；光学的  n. 光学仪器
outweigh	vt. 比……重；（在重要性、影响上）比……更重要；胜过，强于
long-term	a. 长期的
adverse	a. 不利的，有害的
finale	n. （音乐的）终曲；终场
astonish	vt. 使惊讶，使吃惊
charge	n. 价钱，费用；管理；照管；掌管；控告，指控；电荷，电量  v. 索取（金额），要价；控告，指控；委以；指示；（使）充电
module	n. 模块；模式；（航空器中的）舱；组件；单元
corps	n. 部队；军团
petroleum	n. 石油
magma	n. 岩浆
stylish	a. 时髦的；漂亮的
dump	vt. 倾卸，倾倒  n. 垃圾场
debris	n. 碎屑，残骸；[地质] 岩屑
irony	n. 反话，讽刺；出人意料的事情
component	n. 成分；零部件  a. 构成的，组成的
fieldwork	n. 实地调查，野外考察
contaminate	vt. 污染
applicant	n. 申请人
strap	n. 带子  vt. 捆扎；（用绷带）包扎
fundamental	a. 基础的，基本的  n. [pl.] 基本原理
conclusion	n. 结论，推论；结束，结尾；[法] 缔结，认定
intensity	n. 强烈，剧烈；强度
notable	a. 值得注意的；显著的，杰出的，显赫的  n. 名人，要人
implement	vt. 使生效，实施；贯彻，执行  /ˈɪmplɪmənt/ n. 工具
isle	n. 小岛，岛
cervical	a. 子宫颈；颈部的
plot	n. 情节；阴谋；小块土地
acquaint	vt. （使）认识；（使）熟悉
violence	n. 暴力行为；激烈，猛烈
revolve	v. （使）旋转
vegetarian	n. 素食者  a. 素食者的
ratio	n. 比，比率
scream	v. 尖叫  n. 尖叫声
steep	a. 陡峭的；（价格等）过高的；急剧的
interior	a. 内部的，里面的  n. 内部；内地
analogous	a. 类似的
cookery	n. 烹调法
high-tech	n. 高科技
aggressive	a. 侵犯的，侵略的；挑衅的；有进取心的，有冲劲的
process	n. 过程；步骤，程序  vt. 加工；处理；办理
hum	n. 嗡嗡声，嘈杂声  vi. 哼曲子；发嗡嗡声
sinister	a. 不吉祥的，凶兆的；险恶的，邪恶的
refinement	n. 精巧的附件，精制的改良品；精炼；文雅
solidarity	n. 团结，一致
outline	n. 提纲；梗概；轮廓；草图  vt. 概述；列提纲
blank	a. 空白的
photocopy	v. 影印，复印  n. 影印本，复印本
accessory	n. 附件，零件； [常pl.] （尤指女性的）服装搭配物，装饰品；[律] 同谋，帮凶
dean	n. （基督教的）教长；（大学的）院长、系主任
compensate	v. 补偿，赔偿；弥补
chest	n. 胸；金库，资金
tanker	n. 油轮；油罐车；加油飞机
capture	vt. 捕获，俘获；夺取或赢得  n. 捕获；战利品
in	addition 另外；加之
overestimate	vt. 对……估计过高  {ˏəuvərˈestɪmət} n. 过高的估计
overview	n. 综览，概述
pathway	n. 路径，途径
perplex	vt. 使困惑；使复杂化
recognition	n. 识别；认出；承认，确认，认可；赏识，表彰
reconstruction	n. 重建；再现
render	vt. 使得，致使；给予，以……回报；提供；呈报，递交；表达；表演；翻译
renewal	n. 更新，恢复；重新开始；重建；复兴；续期；重申
requisition	n./vt. 正式要求；征用
reserved	a. 说话不多的，内向的；有所保留的，预订的
resolve	v. 解决，解答；决定，决意；分解，分析  n. 决心，决意
sack	n. 麻袋，粗布袋；解雇；劫掠  vt. 解雇；劫掠
slide	v. 滑动，下滑；（使）悄悄地移动  n. 滑动，下滑；滑坡，滑道，滑面；幻灯片；（土、泥等的）突然崩落
slump	vi. 大幅度下降，暴跌；突然倒下，猛然落下  n. 萧条期；低潮状态
surface	n. 表面；外表，外观  v. 浮出水面；浮现，显露；在……上加表面
tickle	v. （使）发痒；使高兴，逗乐  n. 痒
transportation	n. 运输，运输系统，运输工具
unanimous	a. 一致同意的；一致通过的
underestimate	vt. 低估  /ˏʌndərˈestɪmət/ n. 低估
understandable	a. 可以理解的，能懂的；可同情的
transcribe	vt. 抄写，誊写；打印；转录
differ	vi. 不同，相异；（在意见方面）发生分歧
undertake	v. 承担（某事物），负起（某事物的）责任；同意或答应做某事
plus	prep. 加上；和，以及  n. 加号；正号  a. 比所示数量多的
recycle	v. 回收利用
captive	a. 被抓住的，被捕获的；受控制的；受垄断的  n. 被抓住的人或动物
unconquerable	a. 不可征服的
respect	vt. 尊敬  n. 尊敬；方面
neutral	a. 中立的；无明显特性的
campus	n. 校园
presentation	n. 赠送；赠品，礼物；授予，提供；显示；引荐，介绍；报告；表演，上演
residence	n. 住宅，住处；居住
mission	n. 使命，任务；代表团，使团；传教，布道
content	n. 内容；满意  /kənˈtent/ vt. 使满意  a. 满意的
emit	vt. 发出（光、热、声音等），射出，散发，排放
pamphlet	n. 小册子
assurance	n. 信心；保证；保险
equipment	n. 设备，装备
hamster	n. 仓鼠
sensible	a. 明智的；合情理的；能觉察到的
spacecraft	n. 航天器，宇宙飞船
consequence	n. [常pl.] 结果，影响；重要意义
efficient	a. 有效的，效率高的；有能力的，能胜任的
current	a. 流通的；流动的；现行的，当前的  n. （水、气等的）流动；电流；潮流
inversion	n. 倒置，颠倒
elevate	vt. 提升……的职位；举起；使更有修养
loan	n./vt. 贷款，借
capable	a. 有能力的；能够的
performance	n. 演出，表演；履行，执行；功能，性能表现
handicapped	a. 残废的，有生理缺陷的
insulate	vt. 使绝缘，使隔热，使隔音；隔离；使隔绝（以免受到影响）
household	n. 家庭，户，全家人  a. 家庭的，家用的，普通的；家喻户晓的
detrimental	a. 不利的，有害的
decorate	v. 装饰，装潢，布置；授勋
nationality	n. 国籍；民族
fleet	n. 舰队，船队  a. 快速的，敏捷的  v. 疾驰，飞逝，掠过
interfere	vi. 干涉，干扰，妨碍
signal	n. 信号；暗号；标志  v.（向……）发信号；标志着
rescue	n./vt. 营救，救援
proof	n. 证据，证明；校样，样张  a. 能防……的，耐……的
afflict	vt. 使苦恼；折磨
log	n. 原木；航海或飞行日志  vt. 记录
maritime	n. 海的，海事的；海运的
formula	n. 公式；配方；准则
therapy	n. 治疗，疗法
concession	n. 让步，迁就；特许权；承认，认可
whisper	n./v. 低语
grant	n. 授予物；补助金，助学金，津贴；授权  v. 同意，承认；给予，授予
relevant	a. 有关的，相应的；适当的，中肯的；有重大意义的
unrealistic	a. 不现实的，不切实际的
enfranchise	vt. 给予……政治权利（尤指选举权）；解放（奴隶）
disregard	vt. 不理会，漠视  n. 忽视，漠视
convert	v. （使）改变信仰，皈依；（使）转变，（使）转化；改装
grasp	vt. 抓紧；掌握，全面理解  n. 抓住；支配；理解
wealthy	a. 富的，富裕的；充裕的
object	n. 物体；对象；目标；宾语  /əbˈdʒekt/ v. 反对，不赞成
tariff	n. 关税，税率；（旅馆、饭店等的）价目表
defendant	n. 被告  a. 处于被告地位的；为自己辩护的
bankruptcy	n. 破产；彻底失败
connection	n. 连接；关系
airtight	a. 密闭的；无懈可击的
unprejudiced	a. 无偏见的；公正的
leather	n. 皮革，皮革制品
unregistered	a. 未注册的
versus	prep. 与……相对，对抗
wretch	n. 不幸的人
acceptable	a. 可接受的
antique	a. 古时的，古老的  n. 古物，古董
autobiography	n. 自传
browse	v. 吃嫩叶或草；浏览  n. 嫩叶，嫩芽；吃草；浏览
dot	n. 点，小圆点  v. 打点于；散布于，点缀
emotional	a. 感情（上）的，情绪（上）的；引起情感的，表示情感的；情绪激动的，易动感情的
extrovert	n. 性格外向的人；爱交际的人
favourite	a. 特别喜欢的，宠爱的  n. 特别喜欢的人或物；亲信
hang	v. 悬挂，吊，垂下；吊死，绞死
harmony	n. 相符，一致；和谐，融洽；[音] 和声
hospitable	a. 好客的，殷勤的，热情友好的；（气候、环境）宜人的；（对新思想等）易接受的，开通的
inflate	v. 使充气，使膨胀；使得意，使骄傲；抬高（物价），使（通货）膨胀
influential	a. 有影响力的；有权势的
insane	a. 蠢极的，荒唐的；（患）精神病的，精神失常的，疯狂的
inscribe	v. （在某物上）写、题、铭刻；牢记，铭记
hostel	n. （青年）招待所；学生宿舍
substance	n. 物质；实质
refectory	n. （学院）餐厅，食堂
fuse	n. 保险丝  v. 因保险丝烧断而断电；熔合；熔化
contemporary	a. 当代的；同时代的  n. 同代人
continuity	n. 连续（性）；持续（性）
advantage	n. 优点；优势
tube	n. 管道，试管；<英> 地铁
beneficial	a. 有利的，有益的
inhibit	v. 抑制，约束；起抑制作用
damage	n. 损害；[pl.] 损害赔偿（金）  vt. 损害
vibrate	v. （使）颤动
inspire	vt. 鼓舞，激起；给……以灵感
introvert	n. 性格内向的人
pedestrian	n. 行人  a. 徒步的；缺乏想象力的
punch	v. 穿孔，打孔；重击，猛击  n. 猛击；冲床；穿孔机；力量；效力
rectangle	n. 长方形，矩形
relative	a. 相对的；比较的；有关的，相关的  n. 亲属，亲戚
sociable	a. 友善的，友好的；好交际的，合群的
spacious	a. 宽广的，宽敞的
religion	n. 宗教；宗教信仰
demographic	a. 人口统计学的；人口的
random	a. 任意的，随机的，随意的  n. 随机，随意
repay	v. 归还（款项）；报答
vacuum	n. 真空； [pl.] 真空吸尘器  v. 用吸尘器清扫
firm	n. 公司  a. 坚实的，稳固的，坚定的
digital	a. 数码的，数字的
humour	n. 幽默，幽默感
global	a. 全球的，全世界的；整体的，全面的
cluster	n. 串，束，群  v. 成群；群集
handout	n. 传单，分发的印刷品；救济品
endure	v. 忍受；持久，持续
helicopter	n. 直升飞机
lead to	导致，通向
sprawl	n. 四肢伸开的姿势或动作；（城市的）无计划发展  v. 伸开四肢坐、卧或倒下；杂乱无序地延伸
crowded	a. 拥挤的；塞满的
knob	n. 球形把手；（机器等）旋钮
ideal	a. 理想的，完美的；理想主义的；空想的；唯心的  n. 理想；理想的东西（或人）
in comparison with	与……比较起来
midst	n. 中间
fluctuate	v. （使）涨落，（使）起伏；（使）变化
neglect	n./vt. 忽视；疏忽；遗漏
drought	n. 干旱，旱灾
hug	n./v. （热烈的/地）拥抱
variability	n. 可变性，易变性
indication	n. 指示，象征
insert	v. 插入，嵌入
in	addition to 除……之外
certificate	n. 证书，执照
severe	a. 严重的；严厉的；剧烈的
diameter	n. 直径
gesture	n. 姿势，姿态；手势  v. 做手势
disclose	vt. 揭露；透露；公开
sheer	a. 十足的；纯粹的；陡峭的
successive	a. 连续的
balance	n. 平衡；余额  vt. 平衡
adjust	v. 校准；调节；使……适应
require	vt. 需要；命令；规定，要求
fairly	ad. 相当地；公平地；简直，完全地
precise	a. 精确的，准确的；严谨的
colour-blind	a. 色盲的
trustworthy	a. 值得信赖的，可靠的
vomit	n. 呕吐，呕吐物；催吐剂  v. 呕吐，恶心；喷出
wrestle	v. 摔跤；全力对付；用力移动
adolescence	n. 青春，青春期
captivity	n. 囚禁，拘留
commerce	n. 贸易，商业；交往，交流
condensation	n. 浓缩，凝结
facial	a. 面部的；面部用的
herbal	a. 草本植物的；药草（制）的  n. 草本植物志；药草书
hover	v. （鸟等）翱翔，盘旋；逗留在近旁，徘徊；彷徨，犹豫
imprecise	a. 不精确的，不严密的
inactive	a. 不活动的；懒散的
initiate	vt. 开始，创造，发起；接纳（成员），让……加入  /ɪˈnɪʃɪət/ n. （新）加入组织者
longitude	n. 经度，经线
procrastinate	v. 耽搁，拖延
rarity	n. 稀有；稀有的事物
seclude	vt. 使隔离，使孤立
ongoing	a. 进行中的  n. 前进，发展
almond	n. 杏树；杏仁
feed	v. 喂养，为……提供食物；吃，以……为食  n. 饲料
scenery	n. 舞台布景；风景，景色
stagnate	v. （使）停滞；不发展
ozone	n. 臭氧
tap	v. 轻拍；利用，开发
owe	vt. 欠；把……归功于
ministry	n. （政府的）部
laser	n. 激光
individual	a. 个别的，单独的；独特的  n. 个人，个体
association	n. 协会
tempt	vt. 引诱；吸引
beneath	prep./ad. 在下方
naturally	ad. 当然，自然；天生地
microscope	n. 显微镜
estate	n. 个人财产，（尤指）遗产；土地，地产，（尤指）庄园
discourage	vt. 使泄气，使灰心；阻止，劝阻
briefcase	n. 公文包
candidate	n. 候选人，候补者；申请求职者；报考者
melt	v. （使）融化；（使）消散
shrug	n./v. 耸肩
frightened	a. 受惊的；受恐吓的
relax	v. （使）放松
aerospace	n. 宇宙空间；航空航天技术
suppose	v. 假想，假定，猜想，推测；[用于祈使句] 假定，让；[常用于被动语态] 期望做（某事），认为应该做（某事）
tenable	a. 站得住脚的；可防守的
sustain	v. 支撑，撑住，承受住；维持，保持；经受，遭受，忍耐
straw	n. 稻草；吸管
border	n. 边缘；边界  v. 与……接壤；接近，毗邻
dispenser	n. 药剂师，配药师；分配者，施予者；自动售货机
receiver	n. （电话）听筒；接收器
monopoly	n. 垄断，专卖；垄断商品，专卖商品
bureaucracy	n. 官僚主义；官僚机构
construction	n. 建造；建筑物；构造
endorse	vt. 支持，赞同
embryo	n. 胚，胚胎；事物的萌芽期
silicon	n. 硅
intelligence	n. 智力，理解力；情报
mature	a. 成熟的；深思熟虑的  v. （使）成熟
discard	vt. 丢弃，遗弃
membership	n. 会员身份；全体会员
roast	a. 烤过的  n. 烤肉  v. 烤，炙
computerize	vt. 使计算机化；用计算机做；用计算机储存（信息）
popularize	vt. 宣扬，宣传，推广；使普及，使通俗化
devalue	v. 使（货币）贬值；贬低
ferry	n. 渡船；摆渡  v. 渡运
iron	n. 铁；烙铁，熨斗  v. （用熨斗）熨，烫平
bully	n. 恃强凌弱者  vt. 恐吓；胁迫，欺负
storyline	n. 故事情节
orbit	n. 轨道；影响范围，势力范围  v. 沿轨道运行；围绕……运动
combat	n. 战斗，搏斗  vt. 战斗，与……搏斗；防止
slothful	a. 怠惰的，懒惰的；迟钝的
catastrophic	a. 悲惨的；灾难性的
abide	v. 停留，逗留；容忍，忍受
allure	n./v. 诱惑，吸引
oxygen	n. 氧，氧气
pervasive	a. 遍布的，弥漫的
encroach	vi. 侵入，侵占，侵犯；侵蚀，蚕食（土地）
fantastic	a. 极好的；荒诞的，奇异的；不切实际的
abhorrent	a. 可恶的，可恨的
inflict	vt. 把……强加给，使遭受，使承受
tilt	v. （使）倾斜，倾侧；（使）倾向于，偏向  n. 倾斜，倾侧
mosquito	n. 蚊子
offensive	a. 冒犯的；使人不快的；无礼的；攻击性的，进攻性的  n. 进攻，攻击；攻势
extravagant	a. 奢侈的，铺张的；（言行等）无节制的，过分的，放肆的
begrimed	a. 污秽的
ruthless	a. 无情的，冷酷的，残忍的
jargon	n. 行话，行业术语；黑话
diverse	a. 不同的，多样的
extinguish	vt. 熄灭，扑灭；消灭，使破灭
estrange	vt. 使疏远，使分离
neoclassical	a. 新古典主义的
biased	a. 有偏见的；片面的
grimy	a. 积满污垢的，肮脏的
enhancer	n. 增强剂；放大器
ulterior	a. 较远的；不可告人的，隐秘的，秘密的
corrupt	v. 腐化，腐蚀；使堕落；破坏，损坏；（计算机文件等）出错  a. 堕落的，腐化的；腐败的，贪污的
stringent	a. （法律、规则等）严格的，苛刻的；（财政状况）紧缩的，短缺的，银根紧的；迫切的
novice	n. 生手，新手；初学者；新信徒，初学修士（或修女）
hinder	vt. 阻碍，妨碍
impoverished	a. 穷困的，赤贫的；贫乏的，贫瘠的；枯竭的
shallow	a. 浅的；肤浅的，浅薄的
inundate	vt. 淹没，泛滥的；使不胜负荷，使应接不暇
erode	v. 侵蚀，腐蚀；削弱，损害
doom	vt. 注定……失败（或遭殃、死亡等），使……在劫难逃  n. 毁灭；厄运，劫数
alienate	vt. 使疏远，使不友好；转让，让渡（财产等）
brazen	a. 黄铜制的，黄铜色的；厚颜无耻的
tortoise	n. 龟，陆龟；行动迟缓的人
commiserate	vi. 同情，怜悯
outlaw	n. 亡命之徒，逃犯，被剥夺法律权益者  vt. 宣布……为非法，使……成为非法
pavement	n. 人行道；地面，路面
antiquated	a. 陈旧的，过时的；废弃的
coral	n. 珊瑚；珊瑚虫  a. 珊瑚色的，红色的
incinerate	vt. 焚化，焚毁，把……烧成灰烬
renewable	a. 可更新的，可再生的，可恢复的；可延长有效期的，可续期的
shin	n. 胫，胫部，胫骨  v. （手脚并用沿某物）爬
enslave	vt. 奴役，征服，使受控制
timid	a. 胆小的；羞怯的
vile	a. 糟糕透顶的，可恶的；恶劣的，卑鄙的
diesel	n. 柴油；柴油机；柴油车
guzzle	v. 狂饮，暴饮；大量消耗
torment	n. 痛苦，折磨；令人痛苦的东西  /tɔːˈment/ vt. 折磨，使痛苦，烦扰；纠缠；戏弄，捉弄
revive	v. （使）苏醒，复活；重新使用
inhumane	a. 不近人情的，残忍的，不人道的
imperil	vt. 使陷于危险，危及
diverge	vi. （道路，线条等）分开，岔开；（意见、观点等）分歧，相异；偏离，违背
irrational	a. 不合理的，不合逻辑的，荒谬的  n. 无理数
verbal	a. 口头的；言辞的，文字的，词语的；动词的
saline	a. 含盐的，咸的  n. [医] 盐水
disable	vt. 使丧失能力，使伤残；使不能正常运转，使无效
seduce	vt. 勾引，引诱；诱使，唆使
relocate	v. 重新安置，（使）搬迁，迁移
angle	n. 角；角度；观点，立场  v. 移向；使成角度移动；从（某角度）报道
legitimate	a. 合法的，法定的；正当的，合情合理的   {lɪˈdʒɪtɪmeɪt} vt. 使合法
sedentary	a. （工作、活动等）需要久坐的；（人）惯于久坐不动的；（人或动物）定居的，不迁徙的；沉积的
water-borne	a. 水运的，水传播的，饮水传染的
kindergarten	n. 幼儿园
molten	a. 熔化的
processor	n. 加工机；加工工人；处理器
saturate	vt. 使湿透，浸透；使充满，使饱和
trivialize	vt. 使显得不重要，轻视，淡化
assault	n. （武力或口头上的）攻击，袭击；侵犯人身罪；冲击；抨击  vt. 攻击，袭击；使难受
obscene	a. 淫秽的，猥亵的，下流的；可憎的，可恶的；（数量）大得惊人的，骇人听闻的
authentic	a. 真品的，真迹的；真正的，真实的，逼真的
righteous	a. 正义的，正直的；公正的；正当的
purify	vt. 使洁净，使纯洁，净化；提纯，精炼
gregarious	a. 群居的；合群的；爱交际的
heartless	a. 无情的，狠心的；无生气的，没精打采的
instil	vt. 滴注；逐渐灌输；逐步培养（感受、思想等）
infringe	v. 侵犯，侵害；违背，触犯（法规）；干涉，干扰
comic	a. 可笑的，滑稽的；喜剧的  n. 喜剧演员
transplant	vt. 移栽，移种（植物等）；移植（器官等）；使迁移，使移居  /ˈtrænsplɑːnt/ n. （器官等的）移植
algebra	n. 代数
spur	n. 刺激（物）；激励；靴刺，马刺  vt. 刺激，激励，鞭策；（用马刺）策马加速
barbaric	a. 野蛮的，粗鲁的；残暴的，残忍的；原始部落的
delinquent	a. 失职的；违法的；拖欠的  n. 违法者，罪犯（尤指少年犯）
retaliate	vi. 报复，反击；复仇
perpetrate	vt. 做（坏事），犯（罪）
prosper	vi. 繁荣，兴旺；成功
gorilla	n. 大猩猩
sluttish	a. 懒惰的，邋遢的；放荡的
anchor	n. 锚；给人安全感的人（或物）；精神支柱；顶梁柱  v. 抛锚；使固定，系牢；使基于；主持（电视节目等）
despoil	vt. 抢夺，掠夺；蹂躏，破坏
discourteous	a. 无礼的，粗鲁的
gene	n. 基因
lax	a. 懒散的；松弛的，不严格的，马虎的
boost	vt. 使增长，使兴旺；鼓励，促进；为……作宣传，宣扬  n. 增加，提高；帮助，激励
smear	v. 胡乱涂抹；弄脏，弄污；诽谤，诋毁；变得模糊不清，把（图画等）弄得模糊不清  n. 污迹，污渍；（显微镜的）涂片；诽谤，诋毁
lenient	a. （执法时）宽大的，宽容的；厚道的，仁慈的
synthetic	a. 人造的；合成的，综合的  n. 合成物；合成纤维（织物）
enact	v. 通过（法律）；扮演（角色）
resent	v. 愤恨；对……表示愤恨，感到气愤
affluent	a. 丰富的，富裕的
trunk	n. 树干，躯干；大箱子；象鼻
coexist	vi. 共存
aviation	n. 航空，飞行；航空制造业
rampant	a. （犯罪、疾病等）猖獗的，肆虐的，泛滥的；（植物）蔓生的，疯长的
prolonged	a. 持久的，长期的
crushing	a. 惨重的，毁灭性的；压倒的，决定性的
futile	a. 无效的，无用的，无意义的；（人）没出息的；琐细的
edify	v. 陶冶，教化；启发，启迪
vulgar	a. 庸俗的，粗俗的，下流的，缺乏教养的；大众的，通俗的
core	n. 果心，果核；（物体的）中心部分；核心、要点，精髓  vt. 去掉核
inborn	a. 天生的，先天的，天赋的
habitable	a. 适于居住的，可居住的
ecological	a. 生态学的，生态的
stipulate	v. 规定，明确要求；（作为条件）讲定，约定
legitimize	vt. 使合法；赋予合法权利
crystallize	v. （使）结晶；（使）变明确
solar-powered	a. 由太阳能驱动的
cosy	a. 舒适的，安逸的
roller	n. 滚筒；滚轴
unsanitary	a. 不卫生的（= insanitary）
condone	v. 宽恕，赦免；纵容，容忍
bereave	vt. 使丧失，剥夺
faulty	a. 有错误的，有缺点的；不完美的
enigma	n. 迷，迷一样的人或事
gill	n. 鳃
spare	a. 闲置的；备用的，外加的；空闲的  v. 省出，抽出（时间等）；饶恕，赦免；免去；不吝惜（时间、金钱等）  n. 备用品；[pl.] 配件
nursery	a. 幼儿教育的  n. 托儿所；苗圃
semantic	a. 语义的
barren	a. （土地等）贫瘠的，荒芜的；不结果实的，不育的；无益的，无效果的
conductive	a. 能传导电（或热）的，导电（或热）的
eccentric	a. 古怪的，反常的  n. 古怪的人
inferior	a. 较差的，次的，低劣的；级别低的，较低的  n. 下级；下属，晚辈
slacken	v. （使）松弛，放松；放慢；萧条
mentor	n. 导师；顾问，指导者
pad	n. 软垫；便笺本  v. （用软材料）堵塞；蹑手蹑脚地走
unblemished	a. 无瑕疵的，完好的
lounge	vi. 懒洋洋地站（或坐、躺）  n. 等候室；休息室
axle	n. 车轴，轮轴
dietary	a. 饮食的
hamper	vt. 妨碍，阻挠  n. 有盖的大篮子；盒装食物
disparage	vt. 贬抑，贬低；轻蔑，轻视
corporal	a. 肉体的，身体的  n. （陆军或空军）下士
libel	n. （文字）诽谤，中伤；诽谤性文字  vt. 诽谤，中伤，诬蔑
criterion	n. 标准，准则
eco-friendly	a. 环保的
predator	n. 捕食性动物；食肉动物；奴役他人者（尤指在财务或性关系上面）；剥削者，掠夺者
telegraph	n. 电报机；电报  v. 打电报，发电报；（无意中）泄露，流露
episodic	a. 偶然发生的，不定期的；由许多片段组成的，松散的
trespass	vi. 侵犯（某人的财产）；擅闯（某人的领地）；利用（某物）；冒犯，触犯
millennium	n. 一千年，千禧年；（未来的）太平盛世
susceptible	a. 易受影响的，易受伤害的；易受感染的；（人）敏感的，易动感情的；能经受……的，容许……的
antiseptic	a. 防腐的，抗菌的  n. 防腐剂，抗菌剂
indolent	a. 懒惰的，倦怠的；不活跃的，无行动的
thrifty	a. 节俭的，节约的
nutritious	a. 有营养的，营养丰富的
dupe	n. 上当者，受骗者  vt. 欺骗，愚弄
overfill	v. 装得太多，装到满溢
inviolable	a. 不可侵犯的，不容亵渎的，不容破坏的
penalize	vt. 惩罚，处罚；判罚；使处于不利地位
slander	n. 诋毁，中伤，诽谤（罪）  vt. 诋毁，诽谤
restore	vt. 恢复，使复位；修复，整修，重建；归还，交还
virtuous	ad. 有道德的，品性好的，品德高的；自命清高的；贞洁的
superstitious	a. 迷信的；根据迷信的，由迷信引起的；受迷信思想支配的
bead	n. 珠子；（水、血、汗的）小滴
malt	n. 麦芽；麦芽酒  v. 把……制成麦芽；（谷物）变成麦芽
augment	vt. 增加，提高，扩大
agile	a. 敏捷的，灵活的，机敏的
tribal	a. 部落的，部族的；集团意识强的
precede	v. 领先，先于
alleviate	vt. 减轻，缓解，缓和
antibiotic	n. 抗生素，抗菌素  a. 抗菌的
overexploit	vt. 过度开采
grill	vt. 烧烤；拷问，盘问  n. 烤架
inculcate	vt. 谆谆教诲，反复灌输
brutal	a. 野兽般的，残忍的；无情的，冷酷的
avenge	vt. 报仇，复仇，向（某人）报仇
invasive	a. 侵略的，入侵的；（疾病等）侵袭的，扩散的；切入的，开刀的
upgrade	n. 向上的斜坡；增加，改善   vt. 使（机器等）升级，提高，改进；提拔，提升；改善
commute	v. （乘公共汽车等）上下班往返，经常往返；交换，抵偿；减刑  n. 上下班路程
legislative	a. 立法的，有立法权的；根据法规执行的；立法机关的  n. 立法机关
differentiate	v. 区分，区别；差别对待，区别对待
pour	v. 灌，倒；倾泻，涌流；喷发；不断涌现
hook	n. 钩，吊钩，钩状物  v. （使）钩住，挂住；钓（鱼）
tighten	v. （使）变紧；使更加严格，加强
humane	a. 善良的，人道的，仁慈的，慈悲的；（指学科）促进文明或教化的，人文的
infiltrate	v. （使）悄悄进入，潜入；渗入，渗透
violate	vt. 违反，违犯，违背；亵渎，侵犯，干扰
glacier	n. 冰川，冰河
hereditary	a. （尤指疾病）遗传的，遗传性的；可继承的，世袭的
discharge	n. 排出（物）；获准离开，免职；履行，执行；（债务的）清偿  /dɪsˈtʃɑːdʒ/ v. 解雇；释放；排出，放出；放（电）；完成，履行
refrain	v. 抑制，克制  n. 反复句，（诗歌的）叠句；副歌；经常重复的评价
supportive	a. 支持的，支援的；赞助的；鼓励的；同情的
accustom	vt. 使习惯于
inalienable	a. 不可剥夺的，不可分割的
savour	vt. 品尝，品味；欣赏；体会，体味  n. 味道，风味；情趣，吸引力
insidious	a. 潜伏的，隐伏的
pump	v. 用泵抽（水）；涌出，奔流  n. 泵，抽水机
astronomy	n. 天文学
hazardous	a. 危险的，冒险的；有害的
segregate	vt. 隔离，（使）分开
tillable	a. 适宜耕种的，可耕种的
overgraze	v. 过度放牧
embody	vt. （作品等）表达，体现；具体表现，使具体化；包括，包含
reciprocate	v. 回报，回应；报答
moribund	a. 垂死的，即将灭亡的；即将结束的
isolated	a. 隔离的，分离的；与世隔绝的，偏僻的；孤立的，孤独的；个别的
modish	a. 流行的，时髦的
maltreat	vt. 虐待
pine	v. 难过，悲伤  n. 松树，松木
disobey	v. 不服从，违抗
moss	n. 苔藓
versatile	a. 多才多艺的，多面手的；多用途的，通用的
grudge	n. 不满，积怨，怀恨  v. 勉强做；不情愿地给，吝惜
pretentious	a. 自命不凡的，自负的；炫耀的；做作的
enlist	v. 征募；从军，参军；谋取（帮助，支持等）
curb	vt. 控制，抑制，约束  n. 路缘，（街道的）镶边石；马勒；起限制作用的事物
elaboration	n. 精心之作；详尽阐述
snobbish	a. 势利的，谄上欺下的；自命不凡的
magnet	n. 磁铁，磁石；磁体；有吸引力的人或物
prevalence	n. 普及，流行，盛行
bleak	a. 寒冷的，阴沉的，阴郁的，暗淡的；没有希望的，不乐观的；荒凉的；索然无味的
ecliptic	n. [天] 黄道  a. 黄道的，日（或月）食的
vicious	a. 罪恶的，邪恶的；残酷的；残忍的；凶猛的；恶性的
begrudge	vt. 对……感到不满；嫉妒；勉强做，不乐意地做
diffuse	v. 散布，传播；（光等）漫射；（使气体或液体）扩散，弥漫 a. 扩散的，漫射的；（文章等）冗长的，难解的`;

export const SAMPLE_WORDS: Record<BookType, Word[]> = {
  [BookType.GAOKAO]: parseWords(GAOKAO_TEXT, 'gk'),
  [BookType.TOEFL]: parseWords(TOEFL_TEXT, 'tf'),
  [BookType.IELTS]: parseWords(IELTS_TEXT, 'ielts'),
};