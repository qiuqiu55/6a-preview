// ============================================================
// 第一章：有理数 1.1 ~ 1.5（样板）
// ============================================================
var SECTION_DATA = {};

// ===== 1.1 正数与负数 =====
SECTION_DATA['ch1-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>正数</b>：大于 0 的数（如 +3, +5.2），"+" 通常可以省略不写。</p>'
               +'<p><b>负数</b>：小于 0 的数（如 -3, -5.2），"-" 绝对不能省略！</p>'
               +'<p><b>0 的特殊性</b>：0 既不是正数也不是负数，是正负数的分界点。</p>'
               +'<p>💡 小技巧：看到"不是正数"，先想想 0 是不是符合条件！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目：</b>指出下列哪些是正数，哪些是负数：</p>'
               +'<p style="font-style:italic;margin:8px 0">+8, -3, 0, +2.5, -4/5, 100, -0.01</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><b>✅ 正数</b>：+8, +2.5, 100</p>'
               +'<p><b>✅ 负数</b>：-3, -4/5, -0.01</p>'
               +'<p><b>⚡ 特别注意</b>：0 既不是正数也不是负数！</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：a 一定是正数吗？</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>不一定</b>。a 可以表示任意数，a 也可能是负数或 0！</p>'
               +'<p><b>变化2</b>：收入 200 元记作 +200 元，支出 50 元记作 ______ 元。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-50</b>（支出用负数表示）</p>'
               +'<p><b>变化3</b>：如果 m > 0，那么 -m 是 ______ 数。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>负</b>数（正数的相反数是负数）</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 0 不是没有温度！0°C 是一个确定的温度，0 是正数和负数的分界。</li>'
               +'<li>🚨 "-a" 不一定是负数！如果 a 本身是负数，那么 -a 就是正数（负负得正）。</li>'
               +'<li>🚨 正数前面的 "+" 可以省略，但负数前面的 "-" 绝对不能省略。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '水位升高 3 米记作 +3 米，那么水位下降 2 米记作 ______ 米。',
          answers: ['-2', '－2'],
          explanation: '下降用负数表示，所以答案是 -2。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 0是最小的正整数', 'B. 负数一定小于正数', 'C. 负号可以省略不写', 'D. 0°C表示没有温度'],
          answer: 1,
          explanation: '选 B。A 错误（0不是正数）；C 错误；D 错误。'
        },
        {
          type: 'fill',
          q: '如果 a 是负数，那么 -a 是 ______ 数（填"正"或"负"）。',
          answers: ['正', '正数'],
          explanation: 'a<0，所以 -a>0，是正数。'
        },
        {
          type: 'fill',
          q: '向东走 50 米记作 +50 米，向西走 30 米记作 ______ 米。',
          answers: ['-30', '－30'],
          explanation: '向西是相反方向，用负数表示。'
        }
      ]
    }
  ]
};

// ===== 1.2 数轴 =====
SECTION_DATA['ch1-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>数轴的三要素</b>：</p><ul>'
               +'<li><b>原点</b>：表示 0 的点</li>'
               +'<li><b>正方向</b>：通常向右（题目有特殊说明时按题目来！）</li>'
               +'<li><b>单位长度</b>：每一格代表多少，必须一致</li>'
               +'</ul>'
               +'<p>💡 判断一条线是不是数轴，就看它有没有同时满足这三个条件！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：在数轴上表示 +3, -2, 0, +1.5</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>1️⃣ 画一条横线，标出原点 <b>0</b></p>'
               +'<p>2️⃣ 向右为正方向，取单位长度为 1</p>'
               +'<p>3️⃣ +3 → 原点右侧 3 个单位</p>'
               +'<p>4️⃣ -2 → 原点左侧 2 个单位</p>'
               +'<p>5️⃣ +1.5 → 原点右侧 1.5 个单位（在 1 和 2 中间）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：数轴上表示 -4 的点到原点的距离是 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>4</b>（距离是非负数，不用写负号！）</p>'
               +'<p><b>变化2</b>：表示 +2 的点与表示 -3 的点之间的距离是 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>5</b>（计算：2 - (-3) = 5）</p>'
               +'<p><b>变化3（动点问题）</b>：一个点从 +1 开始，先向右移动 3 个单位，再向左移动 5 个单位，最后停在 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-1</b>（计算：1 + 3 - 5 = -1）</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 单位长度要一致！0→1 的距离和 1→2 的距离必须相等。</li>'
               +'<li>🚨 正方向不一定向右！题目说"向左为正"就要按题目来。</li>'
               +'<li>🚨 表示小数时，先想清楚它在哪两个整数之间，再估位置。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '在数轴上，到原点距离等于 4 的点表示的数是 ______（若有多个用"或"连接）。',
          answers: ['4或-4', '±4', '4或－4'],
          explanation: '有两个点，分别在原点左右两侧，所以是 +4 或 -4。'
        },
        {
          type: 'choice',
          q: '点 A 表示 -2，将点 A 向右移动 6 个单位后到达点 B，点 B 表示的数是（ ）',
          options: ['A. -6', 'B. -4', 'C. +4', 'D. +6'],
          answer: 2,
          explanation: '-2+6=4，所以点 B 表示的数是 +4。选 C。'
        },
        {
          type: 'choice',
          q: '在数轴上，原点左边的点表示的是（ ）',
          options: ['A. 正数', 'B. 负数', 'C. 0', 'D. 非负数'],
          answer: 1,
          explanation: '数轴上原点左边是负数，右边是正数。选 B。'
        },
        {
          type: 'fill',
          q: '点 M 表示 -5，点 N 表示 +3，这两点之间的距离是 ______ 个单位。',
          answers: ['8'],
          explanation: '距离 = 3-(-5) = 8 个单位。'
        },
        {
          type: 'fill',
          q: '一个点从表示 -3 的点开始，向右移动 7 个单位，再向左移动 2 个单位，最后停在 ______。',
          answers: ['2', '+2'],
          explanation: '-3+7-2=2，最后停在 +2。'
        }
      ]
    }
  ]
};

// ===== 1.3 相反数 =====
SECTION_DATA['ch1-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>相反数</b>：只有符号不同的两个数，叫做互为相反数。</p>'
               +'<p>求一个数的相反数的方法：在这个数的前面加上"-"号，然后化简。</p>'
               +'<p><b>要点</b>：</p><ul>'
               +'<li>正数的相反数是负数</li>'
               +'<li>负数的相反数是正数</li>'
               +'<li>0 的相反数是 0（唯一特殊情况！）</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：写出下列各数的相反数：8, -2/3, 0, -(-5), +(-2)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>8 的相反数：<b>-8</b></p>'
               +'<p>-2/3 的相反数：<b>2/3</b>（计算：-(-2/3)=2/3）</p>'
               +'<p>0 的相反数：<b>0</b></p>'
               +'<p>-(-5) = 5，所以相反数是 <b>-5</b></p>'
               +'<p>+(-2) = -2，所以相反数是 <b>+2</b></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1（多重符号化简）</b>：-[-(+3)] = ______</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>3</b>（有 2 个"-"号，偶数个，结果为正）</p>'
               +'<p><b>变化2</b>：如果 x = -7，那么 -x = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>7</b>（因为 -(-7) = 7）</p>'
               +'<p><b>变化3</b>：如果点 A 表示的数是 a，点 A 关于原点对称的点是 B，那么点 B 表示的数是 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-a</b>（关于原点对称 = 互为相反数）</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 "-a" 不一定是负数！如果 a 是负数，-a 就是正数。</li>'
               +'<li>🚨 多重符号化简时，只数"-"的个数。"+"可以直接忽略。</li>'
               +'<li>🚨 0 的相反数是 0，这是唯一一个特殊的。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '化简：-[-(+3)] = ______。',
          answers: ['3'],
          explanation: '有 2 个"-"号，偶数个，结果为正。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 符号不同的两个数叫做互为相反数', 'B. 互为相反数的两个数一定一正一负', 'C. 如果 a+b=0，那么 a 和 b 互为相反数', 'D. 0 没有相反数'],
          answer: 2,
          explanation: '选 C。A 错误（必须是"只有符号不同"）；B 错误（0的相反数是0）；D 错误。'
        },
        {
          type: 'fill',
          q: '化简：-[-(-a)] = ______（用含 a 的式子表示）。',
          answers: ['-a'],
          explanation: '有 3 个"-"号，奇数个，结果为 -a。'
        },
        {
          type: 'fill',
          q: '如果点 A 表示的数是 5，那么它关于原点的对称点是 ______。',
          answers: ['-5', '－5'],
          explanation: '关于原点对称 = 互为相反数，5 的相反数是 -5。'
        }
      ]
    }
  ]
};

// ===== 1.4 绝对值 =====
SECTION_DATA['ch1-4'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>绝对值</b>：一个数在数轴上所对应点到原点的距离，叫做这个数的绝对值。记作 |a|。</p>'
               +'<p><b>代数定义</b>：</p><ul>'
               +'<li>当 a > 0 时，|a| = a</li>'
               +'<li>当 a = 0 时，|a| = 0</li>'
               +'<li>当 a < 0 时，|a| = -a</li>'
               +'</ul>'
               +'<p><b>核心要点</b>：|a| ≥ 0，即绝对值永远是非负数！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：求下列各数的绝对值：-5, +3, 0, -7/2, +0.6</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>|-5| = <b>5</b></p>'
               +'|+3| = <b>3</b></p>'
               +'|0| = <b>0</b></p>'
               +'|-7/2| = <b>7/2</b></p>'
               +'|+0.6| = <b>0.6</b></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1（双值性）</b>：已知 |x| = 5，求 x。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>x = 5 或 x = -5</b>（绝对值等于 5 的数有两个！）</p>'
               +'<p><b>变化2（非负性）</b>：如果 |a-2| + |b+3| = 0，求 a 和 b。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>a=2, b=-3</b>（绝对值是非负数，两个非负数相加等于 0，只能都为 0）</p>'
               +'<p><b>变化3</b>：已知 |x| = |-7|，求 x。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>x = 7 或 x = -7</b></p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 |a| = a 不一定成立！只有当 a ≥ 0 时才成立。</li>'
               +'<li>🚨 |-a| = |a| 恒成立（相反数的绝对值相等）。</li>'
               +'<li>🚨 已知 |x| = a 求 x 时，不要漏解！x 通常有两个值。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '如果 |x| = |-7|，那么 x = ______（若有多个用"或"连接）。',
          answers: ['7或-7', '+7或-7', '±7', '7或－7', '+7或－7'],
          explanation: '|-7|=7，所以 |x|=7，x=7 或 x=-7。'
        },
        {
          type: 'choice',
          q: '已知 |m| = |n|，下列结论正确的是（ ）',
          options: ['A. m = n', 'B. m = -n', 'C. m = ±n', 'D. 以上都不对'],
          answer: 2,
          explanation: '|m|=|n| 说明 m 和 n 相等或互为相反数，即 m=±n。选 C。'
        },
        {
          type: 'fill',
          q: '绝对值等于 3 的数有 ______ 个，它们是 ______。',
          answers: [['2', '两'], ['3和-3', '+3和-3', '±3', '3和－3']],
          explanation: '绝对值等于 3 的数有 2 个：+3 和 -3。'
        },
        {
          type: 'fill',
          q: '如果 |a| = 4，|b| = 2，且 a < b，那么 a = ______，b = ______。',
          answers: [['-4'], ['2', '-2', '+2']],
          explanation: '因为 a<b，a 必须是 -4；b 可以是 +2 或 -2。'
        }
      ]
    }
  ]
};

// ===== 1.5 有理数大小的比较 =====
SECTION_DATA['ch1-5'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>法则1（数轴法）</b>：在数轴上，右边的点所表示的数总比左边的点所表示的数大。</p>'
               +'<p><b>法则2（符号法）</b>：</p><ul>'
               +'<li>正数 > 0 > 负数</li>'
               +'<li>两个正数比较：绝对值大的数更大</li>'
               +'<li>两个负数比较：<b>绝对值大的反而小</b>！（这是考试高频点！）</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：比较下列各组数的大小：</p>'
               +'<p style="font-style:italic;margin:8px 0">(1) -3 和 +1　(2) -5 和 -2　(3) 0 和 -4</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) <b>-3 < +1</b>（负数 < 正数）</p>'
               +'<p>(2) <b>-5 < -2</b>（两个负数，|-5|=5 > |-2|=2，绝对值大的反而小）</p>'
               +'<p>(3) <b>0 > -4</b>（0 大于任何负数）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1（多个数排序）</b>：将 -5, +3, -1, 0, -2.5 从大到小排列。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>+3 > 0 > -1 > -2.5 > -5</b></p>'
               +'<p><b>技巧</b>：先把数分成"正数、零、负数"三类，再分别排序，最后合并。</p>'
               +'<p><b>变化2</b>：如果 |a| = 4，|b| = 2，且 a > b，那么 a = ______，b = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>a = +4 或 -4，b = +2 或 -2</b>，但需要满足 a > b。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 两个负数比较是考试高频出错点，一定要记住"<b>绝对值大的反而小</b>"。</li>'
               +'<li>🚨 做比较题时，可以先画数轴，把数标上去，直接看左右关系。</li>'
               +'<li>🚨 多个数排序时，建议先把所有数分成"负数、零、正数"三类，再分别排序。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '将 -5, +3, -1, 0, -2.5 从大到小排列：______ > ______ > ______ > ______ > ______。',
          answers: [['+3', '3'], ['0'], ['-1'], ['-2.5', '－2.5'], ['-5', '－5']],
          explanation: '先分类：正数(+3) > 0 > 负数(-1,-2.5,-5)，负数中绝对值小的更大。'
        },
        {
          type: 'choice',
          q: '下列不等式正确的是（ ）',
          options: ['A. -3 > -2', 'B. |-5| < 0', 'C. -4 < +1', 'D. 0 < -1'],
          answer: 2,
          explanation: '选 C。A 错误（-3<-2）；B 错误（|-5|=5>0）；D 错误（0>-1）。'
        },
        {
          type: 'fill',
          q: '如果 a = -| -6 |，那么 a = ______。',
          answers: ['-6', '－6'],
          explanation: '|-6|=6，所以 a=-6。'
        }
      ]
    }
  ]
};

console.log('✅ ch1.js loaded:', Object.keys(SECTION_DATA).length, 'sections');


// ===== 1.6 有理数的加减法 =====
SECTION_DATA['ch1-6'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>加法法则</b>：</p><ul>'
               +'<li>同号两数相加，取相同的符号，并把绝对值相加。</li>'
               +'<li>异号两数相加，取绝对值较大的数的符号，并用较大的绝对值减去较小的绝对值。</li>'
               +'<li>一个数同 0 相加，仍得这个数。</li>'
               +'</ul>'
               +'<p><b>减法法则</b>：减去一个数，等于加上这个数的相反数。即 a - b = a + (-b)</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：(1) (+3) + (-5)　(2) (-4) - (-7)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) (+3)+(-5) = -(5-3) = <b>-2</b>（异号相加，取 -5 的符号，用 5-3=2）</p>'
               +'<p>(2) (-4)-(-7) = (-4)+7 = <b>3</b>（减法变加法，减数变相反数）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：计算 (-12) + (+8) + (-5)</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-9</b>（-12+8=-4，-4+(-5)=-9）</p>'
               +'<p><b>变化2</b>：某地白天最高温为 +5°C，夜间最低温为 -3°C，温差是多少？</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>8°C</b>（温差 = 最高 - 最低 = 5-(-3) = 8）</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 减法一定要变号！a - b = a + (-b)，减号变加号，减数变相反数。</li>'
               +'<li>🚨 异号相加时，用"大绝对值减小绝对值"，不是加！</li>'
               +'<li>🚨 连续加减时，可以把所有减法统一变成加法再算。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-8) + (+3) = ______。',
          answers: ['-5', '－5'],
          explanation: '异号相加，|-8|>|+3|，所以取负号，8-3=5，答案是 -5。'
        },
        {
          type: 'fill',
          q: '计算：(-4) - (-9) = ______。',
          answers: ['5', '+5'],
          explanation: '减法变加法：(-4)-(-9) = (-4)+9 = 5。'
        },
        {
          type: 'fill',
          q: '计算：(+7) + (-12) + (+5) = ______。',
          answers: ['0', '零', '0'],
          explanation: '(+7)+(-12) = -5，(-5)+(+5) = 0。'
        }
      ]
    }
  ]
};

// ===== 1.7 有理数的加减混合运算 =====
SECTION_DATA['ch1-7'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>混合运算步骤</b>：</p><ul>'
               +'<li>第一步：把所有减法变成加法（减号变加号，减数变相反数）</li>'
               +'<li>第二步：同号的数放在一起算</li>'
               +'<li>第三步：按顺序计算</li>'
               +'</ul>'
               +'<p><b>技巧</b>：可以写成"代数和"的形式，如 (-8)+(+3)-(-5) 可以写成 -8+3+5。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算 (-12) + (+8) - (-5) + (-7)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>第一步：减法变加法</p>'
               +'<p>(-12)+(+8)+(+5)+(-7)</p>'
               +'<p>第二步：同号放一起</p>'
               +'<p>[(-12)+(-7)] + [(+8)+(+5)] = (-19) + (+13)</p>'
               +'<p>第三步：计算 = <b>-6</b></p>'
               +'</div>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-9) + (+4) - (-6) + (-2) = ______。',
          answers: ['-1', '－1'],
          explanation: '变成加法：(-9)+(+4)+(+6)+(-2) = [(-9)+(-2)]+[(+4)+(+6)] = -11+10 = -1。'
        }
      ]
    }
  ]
};

// ===== 1.8 有理数的乘法 =====
SECTION_DATA['ch1-8'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>乘法法则</b>：</p><ul>'
               +'<li>两数相乘，同号得正，异号得负，并把绝对值相乘。</li>'
               +'<li>任何数同 0 相乘，都得 0。</li>'
               +'</ul>'
               +'<p><b>多个有理数相乘</b>：</p><ul>'
               +'<li>先看有没有因数 0，有 0 直接得 0。</li>'
               +'<li>没有 0 时，数负因数的个数：偶数个得正，奇数个得负。</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：(1) (-3)×(-4)　(2) (-2)×3×(-5)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) (-3)×(-4) = <b>+12</b>（同号得正，3×4=12）</p>'
               +'<p>(2) (-2)×3×(-5)：负因数有 2 个（偶数），所以得正。2×3×5=30，答案是 <b>+30</b>。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：计算 (-1)×(-2)×(-3)×(-4)</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>+24</b>（负因数 4 个，偶数，得正。1×2×3×4=24）</p>'
               +'<p><b>变化2</b>：如果 ab > 0，那么下列说法正确的是？</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>a 和 b 同号</b>（同号得正）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 多个数相乘，先数负因数的个数！偶数个得正，奇数个得负。</li>'
               +'<li>🚨 带分数乘法，先把带分数化成假分数再算。</li>'
               +'<li>🚨 (-a)×(-b) = +ab，负号×负号 = 正号！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-5)×(-6) = ______。',
          answers: ['30', '+30'],
          explanation: '同号得正，5×6=30，所以答案是 +30。'
        },
        {
          type: 'fill',
          q: '计算：(-2)×3×(-4) = ______。',
          answers: ['24', '+24'],
          explanation: '负因数有 2 个（偶数），得正。2×3×4=24。'
        },
        {
          type: 'choice',
          q: '下列计算正确的是（ ）',
          options: ['A. (-3)×(-4) = -12', 'B. (-2)×5 = +10', 'C. (-6)×(-1) = +6', 'D. 3×(-7) = +21'],
          answer: 2,
          explanation: '选 C。A 应得 +12；B 应得 -10；D 应得 -21。'
        }
      ]
    }
  ]
};

// ===== 1.9 有理数的除法 =====
SECTION_DATA['ch1-9'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>除法法则</b>：除以一个数（不等于 0），等于乘以这个数的倒数。</p>'
               +'<p>即：a ÷ b = a × (1/b)（b≠0）</p>'
               +'<p><b>符号规律</b>：同号两数相除得正，异号两数相除得负。</p>'
               +'<p><b>0 不能做除数</b>！0 做被除数时，商是 0。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：(1) (-12)÷(-4)　(2) 18÷(-6)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) (-12)÷(-4) = <b>+3</b>（同号得正，12÷4=3）</p>'
               +'<p>(2) 18÷(-6) = <b>-3</b>（异号得负，18÷6=3）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：计算 (-24)÷(-6)÷(+2)</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>+2</b>（从左到右算：(-24)÷(-6)=+4，(+4)÷(+2)=+2）</p>'
               +'<p><b>变化2</b>：0÷(-5) = ______</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>0</b>（0 做被除数，商是 0）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 0 不能做除数！但题目可能出 0÷a（a≠0），这时答案是 0。</li>'
               +'<li>🚨 除法没有结合律！a÷b÷c ≠ a÷(b÷c)，要从左到右算。</li>'
               +'<li>🚨 把除法变乘法时，一定要把除数变成倒数！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-36)÷(+4) = ______。',
          answers: ['-9', '－9'],
          explanation: '异号得负，36÷4=9，所以答案是 -9。'
        },
        {
          type: 'fill',
          q: '计算：0÷(-8) = ______。',
          answers: ['0', '零'],
          explanation: '0 做被除数，商是 0。'
        }
      ]
    }
  ]
};

// ===== 1.10 有理数的乘方 =====
SECTION_DATA['ch1-10'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>乘方</b>：求 n 个相同因数 a 的积的运算，叫做乘方，记作 aⁿ。</p>'
               +'<p>a 叫做底数，n 叫做指数，aⁿ 读作"a 的 n 次方"。</p>'
               +'<p><b>符号规律</b>：</p><ul>'
               +'<li>正数的任何次幂都是正数。</li>'
               +'<li>负数的奇数次幂是负数，负数的偶数次幂是正数。</li>'
               +'<li>0 的任何正整数次幂都是 0。</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：(1) (-2)³　(2) (-3)²　(3) -( -3)²</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) (-2)³ = (-2)×(-2)×(-2) = <b>-8</b>（奇数次幂，负号保留）</p>'
               +'<p>(2) (-3)² = (-3)×(-3) = <b>+9</b>（偶数次幂，负负得正）</p>'
               +'<p>(3) -(-3)² = -(9) = <b>-9</b>（注意：先算乘方，再算负号！）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：(-1) 的奇偶次幂：(-1)^奇数 = ______，(-1)^偶数 = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-1 和 +1</b>。</p>'
               +'<p><b>变化2</b>：2³ 和 3² 哪个大？</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>一样大</b>（都是 8 和 9？不对，2³=8，3²=9，所以 3² 更大）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 (-a)² 和 -a² 不一样！(-a)² 是正数（平方后负号消失），-a² 是负数。</li>'
               +'<li>🚨 乘方优先级比乘除高！有括号先算括号里的。</li>'
               +'<li>🚨 负数的奇数次幂是负数，偶数次幂是正数，这是高频考点！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-2)⁴ = ______。',
          answers: ['16', '+16'],
          explanation: '(-2)⁴ = (-2)×(-2)×(-2)×(-2) = 16（偶数次幂，得正）。'
        },
        {
          type: 'fill',
          q: '计算：-3² = ______。（注意：不是 (-3)²！）',
          answers: ['-9', '－9'],
          explanation: '-3² = -(3²) = -9。注意和 (-3)²=9 的区别！'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. (-2)³ = -6', 'B. (-1)^100 = -1', 'C. 0^5 = 0', 'D. -2² = 4'],
          answer: 2,
          explanation: '选 C。A 应得 -8；B 应得 +1（偶数次幂）；D 应得 -4。'
        }
      ]
    }
  ]
};

// ===== 1.11 有理数的混合运算 =====
SECTION_DATA['ch1-11'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>运算顺序</b>（从左到右，先高级后低级）：</p><ul>'
               +'<li>第一步：先算乘方（最高优先级）</li>'
               +'<li>第二步：再算乘除</li>'
               +'<li>第三步：最后算加减</li>'
               +'<li>有括号先算括号里的！</li>'
               +'</ul>'
               +'<p><b>口诀</b>：括号 → 乘方 → 乘除 → 加减</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算 (-2)² × 3 + (-4) ÷ 2 - 5</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>第一步：乘方 → (-2)² = 4</p>'
               +'<p>第二步：乘除 → 4×3 = 12，(-4)÷2 = -2</p>'
               +'<p>第三步：加减 → 12 + (-2) - 5 = 12 - 2 - 5 = <b>5</b></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><b>变化1</b>：计算 -1⁴ - (-2)³ ÷ 4</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>-1 - (-8)÷4 = -1 - (-2) = -1+2 = +1</b>。</p>'
               +'<p><b>变化2</b>：简便运算：25 × (-18) + (-25) × (-8)</p>'
               +'<p style="color:#888;margin-left:12px">答：<b>25×[(-18)+(-8)的简便算法？不对，应该是提取公因数 25：25×[(-18)+8] = 25×(-10) = -250</b>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>🚨 一定要按顺序算！不要看到能简便就随便换顺序。</li>'
               +'<li>🚨 (-a)² 和 -a² 的区别，每次都要看清楚！</li>'
               +'<li>🚨 负数的奇数次幂要带括号！(-2)³ ≠ -2³。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(-3)² + (-2)³ ÷ (-4) = ______。',
          answers: ['11', '+11'],
          explanation: '(-3)²=9，(-2)³=-8，(-8)÷(-4)=+2，9+2=11。'
        },
        {
          type: 'fill',
          q: '计算：-2² × (-3) = ______。',
          answers: ['12', '+12'],
          explanation: '-2²=-(2²)=-4，(-4)×(-3)=+12。'
        }
      ]
    }
  ]
};
