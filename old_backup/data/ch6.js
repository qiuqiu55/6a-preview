// ============================================================
// 第六章：分数 6.1 ~ 6.11
// ============================================================
var SECTION_DATA = SECTION_DATA || {};

// ===== 6.1 分数与除法 =====
SECTION_DATA['ch6-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数的定义</strong>：把单位"1"平均分成若干份，表示这样的一份或几份的数叫做分数。</p>'
               +'<p><strong>分数与除法的关系</strong>：</p>'
               +'<p style="text-align:center;font-size:1.2em;">分子 ÷ 分母 = 分数</p>'
               +'<p>即：<code>a ÷ b = a/b</code>（b ≠ 0）</p>'
               +'<p><strong>要点</strong>：分母不能为 0！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：把 3 米长的绳子平均分成 5 段，每段长多少米？每段占全长的几分之几？</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：</p>'
               +'<p>(1) 每段长 = 3 ÷ 5 = <strong>3/5 米</strong></p>'
               +'<p>(2) 每段占全长 = 1 ÷ 5 = <strong>1/5</strong></p>'
               +'<p>💡 注意：问题(1)有单位（米），问题(2)没有单位（是分率）！</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分数既可以表示<strong>具体的量</strong>（带单位），也可以表示<strong>分率</strong>（不带单位）。</li>'
               +'<li>分子 ÷ 分母 = 分数，但<strong>分母不能为 0</strong>！</li>'
               +'<li>"把单位1平均分成 5 份"和"取其中的 3 份"要分清！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 4 个苹果平均分给 7 个小朋友，每个小朋友分到 ______ 个苹果。（用分数表示）',
          answers: [['4/7', '４／７', '4÷7']],
          explanation: '4 ÷ 7 = 4/7 个苹果。'
        },
        {
          type: 'fill',
          q: '2 ÷ 3 用分数表示是 ______。',
          answers: [['2/3', '２／３']],
          explanation: '2 ÷ 3 = 2/3。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 分数就是除法', 'B. 分母可以为 0', 'C. 分子 ÷ 分母 = 分数', 'D. 分数不能表示具体的量'],
          answer: 2,
          explanation: '选 C。A 错误（分数和除法有关系，但不是同一个概念）；B 错误；D 错误。'
        },
        {
          type: 'fill',
          q: '把 1 升水平均倒在 4 个杯子里，每个杯子有 ______ 升。',
          answers: [['1/4', '１／４', '0.25']],
          explanation: '1 ÷ 4 = 1/4 升。'
        }
      ]
    }
  ]
};

// ===== 6.2 分数的基本性质(1) =====
SECTION_DATA['ch6-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数的基本性质</strong>：分数的分子和分母同时乘（或除以）同一个不为零的数，分数的大小不变。</p>'
               +'<p style="text-align:center;font-size:1.1em;">a/b = (a×c)/(b×c) = (a÷c)/(b÷c)（c ≠ 0）</p>'
               +'<p><strong>应用</strong>：通分、约分、比较分数大小。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：把 2/3 化成分母是 12 而大小不变的分数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：分母 3 → 12，乘了 4，所以分子也要乘 4。</p>'
               +'<p>2/3 = (2×4)/(3×4) = <strong>8/12</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：把 18/24 化成最简分数。</p>'
               +'<p style="color:#888;margin-left:12px">答：分子分母同除以 6，18/24 = <strong>3/4</strong>。</p>'
               +'<p><strong>变化2</strong>：x/6 = 2/3，则 x = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：6 → 3 除以 2，所以 x = 2×2 = <strong>4</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>"同时"乘或除以，不能只乘分子或只乘分母！</li>'
               +'<li>c ≠ 0，除以 0 没有意义！</li>'
               +'<li>化成分母相同的分数时，要找<strong>最小公倍数</strong>作公分母。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 3/4 化成分母是 16 的分数：______。',
          answers: [['12/16', '１２／１６', '12÷16']],
          explanation: '分母 4→16 乘 4，分子 3×4=12，所以是 12/16。'
        },
        {
          type: 'fill',
          q: '把 10/15 化成最简分数：______。',
          answers: [['2/3', '２／３']],
          explanation: '分子分母同除以 5，10/15 = 2/3。'
        },
        {
          type: 'choice',
          q: '下列变形正确的是（ ）',
          options: ['A. 1/2 = 2/4 = 3/6', 'B. 1/2 = 2/3', 'C. 2/3 = 4/5', 'D. 3/4 = 6/7'],
          answer: 0,
          explanation: '选 A。分子分母同时乘 2、乘 3，大小不变。'
        },
        {
          type: 'fill',
          q: '如果 x/8 = 3/4，则 x = ______。',
          answers: [['6', '６']],
          explanation: '分母 4→8 乘 2，所以分子 3×2=6，x=6。'
        }
      ]
    }
  ]
};

// ===== 6.3 分数的基本性质(2) =====
SECTION_DATA['ch6-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>通分</strong>：把异分母的分数化成同分母的分数，而不改变每个分数的大小，叫做通分。</p>'
               +'<p><strong>通分步骤</strong>：</p>'
               +'<p>1. 求分母的<strong>最小公倍数</strong>（公分母）</p>'
               +'<p>2. 用分数的基本性质，把每个分数化成分母是公分母的分数</p>'
               +'<p><strong>最简分数</strong>：分子和分母互素的分数。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：把 2/3 和 3/4 通分。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：公分母是 [3, 4] = <strong>12</strong></p>'
               +'<p>2/3 = (2×4)/(3×4) = <strong>8/12</strong></p>'
               +'<p>3/4 = (3×3)/(4×3) = <strong>9/12</strong></p>'
               +'<p>通分后：8/12 和 9/12</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>通分时，公分母要取<strong>最小公倍数</strong>，不要随便乘！</li>'
               +'<li>通分后，两个分数的<strong>分母相同</strong>，但大小不变。</li>'
               +'<li>约分时，要约到<strong>最简分数</strong>（分子分母互素）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 1/2 和 1/3 通分，公分母是 ______。',
          answers: [['6', '６']],
          explanation: '[2,3]=6，公分母是 6。'
        },
        {
          type: 'fill',
          q: '把 1/2 和 1/3 通分：1/2 = ______，1/3 = ______。',
          answers: [['3/6', '３／６'], ['2/6', '２／６']],
          explanation: '1/2=3/6，1/3=2/6。'
        },
        {
          type: 'choice',
          q: '把 2/5 和 3/7 通分，公分母是（ ）',
          options: ['A. 12', 'B. 35', 'C. 5', 'D. 7'],
          answer: 1,
          explanation: '选 B。[5,7]=35，公分母是 35。'
        },
        {
          type: 'fill',
          q: '把 5/6 化成最简分数：______。',
          answers: [['5/6', '５／６']],
          explanation: '5 和 6 互素，5/6 已经是最简分数。'
        }
      ]
    }
  ]
};

// ===== 6.4 分数的基本性质(3) =====
SECTION_DATA['ch6-4'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>约分</strong>：把一个分数化成同它相等，但分子、分母都比较小的分数，叫做约分。</p>'
               +'<p><strong>约分方法</strong>：用分子和分母的<strong>公因数（最好用最大公因数）</strong>去除分子和分母。</p>'
               +'<p><strong>最简分数</strong>：分子和分母互素的分数（不能再约分）。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：把 12/18 约分。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：方法1（逐步约分）：</p>'
               +'<p>12/18 = 6/9 = <strong>2/3</strong></p>'
               +'<p>方法2（用最大公因数）：</p>'
               +'<p>(12, 18) = 6，分子分母同除以 6：</p>'
               +'<p>12/18 = (12÷6)/(18÷6) = <strong>2/3</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：把 24/36 约成最简分数。</p>'
               +'<p style="color:#888;margin-left:12px">答：(24,36)=12，24/36 = <strong>2/3</strong>。</p>'
               +'<p><strong>变化2</strong>：一个分数约分化成 2/3，原分数可能是 ______。（写一个即可）</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>4/6、6/9、8/12</strong> 等（分子分母同乘一个不为零的数）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>约分要约到<strong>最简</strong>（分子分母互素），不能中途停止！</li>'
               +'<li>用<strong>最大公因数</strong>去除，可以一次约到最简。</li>'
               +'<li>判断最简分数：看分子和分母是否互素（最大公因数是否为 1）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 9/12 约成最简分数：______。',
          answers: [['3/4', '３／４']],
          explanation: '(9,12)=3，9/12 = 3/4。'
        },
        {
          type: 'fill',
          q: '把 16/24 约成最简分数：______。',
          answers: [['2/3', '２／３']],
          explanation: '(16,24)=8，16/24 = 2/3。'
        },
        {
          type: 'choice',
          q: '下列分数中，是最简分数的是（ ）',
          options: ['A. 4/6', 'B. 5/7', 'C. 9/12', 'D. 15/25'],
          answer: 1,
          explanation: '选 B。A 可约成 2/3；C 可约成 3/4；D 可约成 3/5。'
        },
        {
          type: 'fill',
          q: '一个分数约分化成 3/5，原分数可能是 ______。（写一个即可）',
          answers: [['6/10', '９／１５', '12/20']],
          explanation: '3/5 的分子分母同乘 2 得 6/10，同乘 3 得 9/15，等等。'
        }
      ]
    }
  ]
};

// ===== 6.5 分数的大小比较 =====
SECTION_DATA['ch6-5'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数大小比较的方法</strong>：</p>'
               +'<p>1. <strong>同分母</strong>：分子大的分数大</p>'
               +'<p>2. <strong>同分子</strong>：分母小的分数大</p>'
               +'<p>3. <strong>异分母异分子</strong>：先通分，再比较</p>'
               +'<p>4. <strong>与 1/2 比较</strong>：分子的两倍小于分母，则分数 < 1/2；分子的两倍大于分母，则分数 > 1/2</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：比较 3/4 和 5/6 的大小。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：先通分，公分母是 [4,6] = <strong>12</strong></p>'
               +'<p>3/4 = 9/12，5/6 = 10/12</p>'
               +'<p>因为 9/12 < 10/12，所以 <strong>3/4 < 5/6</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（同分子）</strong>：比较 2/3 和 2/5 的大小。</p>'
               +'<p style="color:#888;margin-left:12px">答：分子相同，分母小的分数大，所以 <strong>2/3 > 2/5</strong>。</p>'
               +'<p><strong>变化2（多个分数排序）</strong>：把 1/2、2/3、3/4 从大到小排列。</p>'
               +'<p style="color:#888;margin-left:12px">答：通分（公分母 12）：6/12、8/12、9/12，所以 <strong>3/4 > 2/3 > 1/2</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>异分母分数比较时，一定要先<strong>通分</strong>！</li>'
               +'<li>通分时，公分母取<strong>最小公倍数</strong>，不要随便乘。</li>'
               +'<li>比较大小的结果要用<strong>原来的分数</strong>表示，不要用通分后的分数表示！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '比较大小：2/3 ______ 2/5（填">"或"<"）。',
          answers: [['>']],
          explanation: '分子相同，分母小的分数大，所以 2/3 > 2/5。'
        },
        {
          type: 'fill',
          q: '比较大小：3/7 ______ 5/7（填">"或"<"）。',
          answers: [['<']],
          explanation: '分母相同，分子小的分数小，所以 3/7 < 5/7。'
        },
        {
          type: 'choice',
          q: '下列分数中，最大的是（ ）',
          options: ['A. 1/2', 'B. 2/3', 'C. 3/4', 'D. 4/5'],
          answer: 3,
          explanation: '选 D。通分（公分母 60）：30/60、40/60、45/60、48/60，所以 4/5 最大。'
        },
        {
          type: 'fill',
          q: '把 1/3、1/2、2/3 从大到小排列：______ > ______ > ______。',
          answers: [['1/2', '２／３'], ['1/3']],
          explanation: '通分（公分母 6）：2/6、3/6、4/6，所以 2/3 > 1/2 > 1/3。注意题目问的是从大到小。'
        }
      ]
    }
  ]
};

// ===== 6.6 分数的加减法 =====
SECTION_DATA['ch6-6'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>同分母分数加减法</strong>：分母不变，分子相加减。</p>'
               +'<p style="text-align:center;">a/c ± b/c = (a±b)/c</p>'
               +'<p><strong>异分母分数加减法</strong>：先通分，变成同分母分数，再加减。</p>'
               +'<p><strong>结果处理</strong>：计算结果要化成<strong>最简分数</strong>！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：计算 2/3 + 1/4。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：先通分，公分母是 [3,4] = <strong>12</strong></p>'
               +'<p>2/3 = 8/12，1/4 = 3/12</p>'
               +'<p>2/3 + 1/4 = 8/12 + 3/12 = <strong>11/12</strong></p>'
               +'<p>💡 11/12 已是最简分数。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（带分数加减）</strong>：1 又 1/2 + 2 又 1/3 = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：化成假分数：3/2 + 7/3 = 9/6 + 14/6 = <strong>23/6 = 3 又 5/6</strong>。</p>'
               +'<p><strong>变化2（连减）</strong>：1 - 1/3 - 1/4 = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：1 = 12/12，12/12 - 4/12 - 3/12 = <strong>5/12</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>异分母分数加减，一定要先<strong>通分</strong>！不能直接分子加分子、分母加分母！</li>'
               +'<li>计算结果要化成<strong>最简分数</strong>，不能保留可以约分的分数。</li>'
               +'<li>1 可以化成任意分子和分母相同的分数（如 2/2、3/3、12/12）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：1/2 + 1/3 = ______。',
          answers: [['5/6', '５／６']],
          explanation: '通分：3/6 + 2/6 = 5/6。'
        },
        {
          type: 'fill',
          q: '计算：3/4 - 1/2 = ______。',
          answers: [['1/4', '１／４']],
          explanation: '通分：3/4 - 2/4 = 1/4。'
        },
        {
          type: 'choice',
          q: '计算 1/2 + 1/4 + 1/8 = （ ）',
          options: ['A. 3/14', 'B. 7/8', 'C. 3/8', 'D. 5/8'],
          answer: 1,
          explanation: '选 B。通分（公分母 8）：4/8+2/8+1/8 = 7/8。'
        },
        {
          type: 'fill',
          q: '计算：1 - 2/5 = ______。',
          answers: [['3/5', '３／５', '0.6']],
          explanation: '1 = 5/5，5/5 - 2/5 = 3/5。'
        }
      ]
    }
  ]
};

// ===== 6.7 分数的乘法 =====
SECTION_DATA['ch6-7'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数乘法法则</strong>：</p>'
               +'<p style="text-align:center;">分子乘分子，分母乘分母</p>'
               +'<p style="text-align:center;">a/b × c/d = (a×c)/(b×d)</p>'
               +'<p><strong>要点</strong>：</p>'
               +'<ul>'
               +'<li>能约分的要先<strong>约分</strong>，再计算（简便）</li>'
               +'<li>分数乘整数：分母不变，分子乘整数</li>'
               +'<li>乘积要化成<strong>最简分数</strong></li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：计算 2/3 × 3/4。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解法1（先乘后约分）：</p>'
               +'<p>2/3 × 3/4 = 6/12 = <strong>1/2</strong></p>'
               +'<p>解法2（先约分再乘，更简便）：</p>'
               +'<p>2/<del>3</del> × <del>3</del>/4 = 2/4 = <strong>1/2</strong></p>'
               +'<p>💡 推荐先约分再乘，计算更简便！</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分数乘法是<strong>分子乘分子，分母乘分母</strong>，不是分子加分子！</li>'
               +'<li>一定要先<strong>约分</strong>再计算，避免大数运算！</li>'
               +'<li>带分数乘法，要先把带分数化成<strong>假分数</strong>再算！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：2/3 × 1/2 = ______。',
          answers: [['1/3', '１／３']],
          explanation: '2/3 × 1/2 = 2/6 = 1/3。或先约分：2/3 × 1/2 = 1/3。'
        },
        {
          type: 'fill',
          q: '计算：3/4 × 2/5 = ______。',
          answers: [['3/10', '３／１０']],
          explanation: '3/4 × 2/5 = 6/20 = 3/10。或先约分：3/4 × 2/5 = 3/10。'
        },
        {
          type: 'choice',
          q: '计算 4/5 × 5/8 = （ ）',
          options: ['A. 20/40', 'B. 1/2', 'C. 9/13', 'D. 4/8'],
          answer: 1,
          explanation: '选 B。先约分：4/5 × 5/8 = 1/2。'
        },
        {
          type: 'fill',
          q: '计算：2 又 1/2 × 1/5 = ______。（提示：先化成假分数）',
          answers: [['1/2', '０．５', '１／２']],
          explanation: '2又1/2 = 5/2，5/2 × 1/5 = 5/10 = 1/2。'
        }
      ]
    }
  ]
};

// ===== 6.8 分数的除法 =====
SECTION_DATA['ch6-8'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数除法法则</strong>：除以一个分数，等于乘以这个分数的<strong>倒数</strong>。</p>'
               +'<p style="text-align:center;">a/b ÷ c/d = a/b × d/c = (a×d)/(b×c)</p>'
               +'<p><strong>倒数</strong>：乘积为 1 的两个数互为倒数。求倒数：分子分母<strong>互换</strong>。</p>'
               +'<p><strong>要点</strong>：0 没有倒数！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：计算 2/3 ÷ 4/5。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：除法变乘法，除数变倒数：</p>'
               +'<p>2/3 ÷ 4/5 = 2/3 × <strong>5/4</strong></p>'
               +'<p>= (2×5)/(3×4) = 10/12 = <strong>5/6</strong></p>'
               +'<p>💡 也可以先约分：2/3 × 5/4 = 5/6。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：求 3/5 的倒数。</p>'
               +'<p style="color:#888;margin-left:12px">答：分子分母互换，倒数是 <strong>5/3</strong>。</p>'
               +'<p><strong>变化2</strong>：a ÷ 1/2 = ______（用 a 表示）。</p>'
               +'<p style="color:#888;margin-left:12px">答：a ÷ 1/2 = a × 2 = <strong>2a</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分数除法：<strong>除号变乘号，除数变倒数</strong>！</li>'
               +'<li>0 没有倒数（因为 0 不能做分母）！</li>'
               +'<li>带分数除法，要先把带分数化成<strong>假分数</strong>！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：2/3 ÷ 1/2 = ______。',
          answers: [['4/3', '１又１／３', '4÷3']],
          explanation: '2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3。'
        },
        {
          type: 'fill',
          q: '求 4/7 的倒数：______。',
          answers: [['7/4', '１又３／４', '7÷4']],
          explanation: '分子分母互换，倒数是 7/4。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 0 的倒数是 0', 'B. 1 的倒数是 1', 'C. 2/3 的倒数是 3/2', 'D. 倒数是它本身的数是 0 和 1'],
          answer: 1,
          explanation: '选 B。A 错误（0 没有倒数）；C 正确但 B 更简单；D 错误（0 没有倒数，只有 1 的倒数是它本身）。'
        },
        {
          type: 'fill',
          q: '计算：3/4 ÷ 3/8 = ______。',
          answers: [['2', '２', '+2']],
          explanation: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2。'
        }
      ]
    }
  ]
};

// ===== 6.9 分数与小数的互化 =====
SECTION_DATA['ch6-9'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数化小数</strong>：用分子除以分母（可以用竖式或计算器）。</p>'
               +'<p><strong>有限小数化分数</strong>：</p>'
               +'<ul>'
               +'<li>一位小数：写成 <code>a/10</code> 再约分</li>'
               +'<li>两位小数：写成 <code>a/100</code> 再约分</li>'
               +'<li>三位小数：写成 <code>a/1000</code> 再约分</li>'
               +'</ul>'
               +'<p><strong>循环小数</strong>：有些分数化成小数是循环小数（如 1/3 = 0.333...）。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：(1) 把 3/4 化成小数；(2) 把 0.6 化成分数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) 3/4 = 3 ÷ 4 = <strong>0.75</strong></p>'
               +'<p>(2) 0.6 = 6/10 = <strong>3/5</strong>（约分）</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：把 5/8 化成小数。</p>'
               +'<p style="color:#888;margin-left:12px">答：5 ÷ 8 = <strong>0.625</strong>。</p>'
               +'<p><strong>变化2</strong>：把 0.125 化成分数。</p>'
               +'<p style="color:#888;margin-left:12px">答：0.125 = 125/1000 = <strong>1/8</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分数化小数时，如果除不尽，一般保留<strong>三位小数</strong>或写成<strong>循环小数</strong>。</li>'
               +'<li>有限小数化分数时，小数的位数是几，分母就是 1 后面几个 0（如 0.25 = 25/100）。</li>'
               +'<li>化成分数后，要化成<strong>最简分数</strong>！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 1/2 化成小数：______。',
          answers: [['0.5', '０．５', '0.5']],
          explanation: '1 ÷ 2 = 0.5。'
        },
        {
          type: 'fill',
          q: '把 0.8 化成分数：______。',
          answers: [['4/5', '８／１０＝４／５', '0.8=4/5']],
          explanation: '0.8 = 8/10 = 4/5。'
        },
        {
          type: 'choice',
          q: '下列分数中，化成小数是有限小数的是（ ）',
          options: ['A. 1/3', 'B. 2/5', 'C. 1/6', 'D. 1/7'],
          answer: 1,
          explanation: '选 B。2/5=0.4（有限小数）；A、C、D 都是循环小数。'
        },
        {
          type: 'fill',
          q: '把 0.04 化成分数：______。',
          answers: [['1/25', '４／１００＝１／２５']],
          explanation: '0.04 = 4/100 = 1/25。'
        }
      ]
    }
  ]
};

// ===== 6.10 分数、小数的四则混合运算 =====
SECTION_DATA['ch6-10'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数、小数四则混合运算</strong>：</p>'
               +'<p>1. <strong>统一形式</strong>：全部化成分数（或全部化成小数）</p>'
               +'<p>2. <strong>运算顺序</strong>：先乘除，后加减；有括号先算括号内</p>'
               +'<p>3. <strong>简便运算</strong>：灵活运用交换律、结合律、分配律</p>'
               +'<p><strong>技巧</strong>：如果分数能化成<strong>有限小数</strong>，通常化成小数算更简便。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：计算 2/5 + 0.4 × 1/2。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解法1（统一化小数）：</p>'
               +'<p>2/5 = 0.4，所以 0.4 + 0.4 × 0.5 = 0.4 + 0.2 = <strong>0.6</strong></p>'
               +'<p>解法2（统一化分数）：</p>'
               +'<p>0.4 = 2/5，所以 2/5 + 2/5 × 1/2 = 2/5 + 1/5 = <strong>3/5</strong></p>'
               +'<p>💡 0.6 = 3/5，两种解法结果一致！</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（简便运算）</strong>：计算 2.5 × 3/5 + 2.5 × 2/5。</p>'
               +'<p style="color:#888;margin-left:12px">答：提取公因数 2.5：2.5 × (3/5 + 2/5) = 2.5 × 1 = <strong>2.5</strong>。</p>'
               +'<p><strong>变化2（有括号）</strong>：(1/2 + 0.75) ÷ 1/4 = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：1/2 + 0.75 = 0.5 + 0.75 = 1.25，1.25 ÷ 1/4 = 1.25 × 4 = <strong>5</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分数和小数混合运算时，要先<strong>统一形式</strong>！</li>'
               +'<li>如果能化成有限小数，<strong>化成小数</strong>通常更简便。</li>'
               +'<li>如果不能化成有限小数（如 1/3），就只能<strong>化成分数</strong>算！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：1/2 + 0.5 = ______。（可以用小数或分数表示）',
          answers: [['1', '１', '1.0']],
          explanation: '1/2 = 0.5，0.5 + 0.5 = 1。'
        },
        {
          type: 'fill',
          q: '计算：3/4 × 0.8 = ______。',
          answers: [['0.6', '３／５', '0.6=3/5']],
          explanation: '3/4 = 0.75，0.75 × 0.8 = 0.6；或 3/4 × 4/5 = 3/5 = 0.6。'
        },
        {
          type: 'choice',
          q: '计算 (1/2 + 1/4) × 0.8 = （ ）',
          options: ['A. 0.6', 'B. 3/5', 'C. 0.75', 'D. 两者都对'],
          answer: 3,
          explanation: '选 D。1/2+1/4=3/4，3/4×0.8=0.6=3/5，所以 A 和 B 都对。'
        },
        {
          type: 'fill',
          q: '计算：2.4 ÷ 3/5 = ______。',
          answers: [['4', '４', '+4']],
          explanation: '2.4 = 12/5，12/5 ÷ 3/5 = 12/5 × 5/3 = 12/3 = 4。'
        }
      ]
    }
  ]
};

// ===== 6.11 分数运算的应用 =====
SECTION_DATA['ch6-11'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>分数应用题常见类型</strong>：</p>'
               +'<p>1. <strong>求一个数是另一个数的几分之几</strong>：前者 ÷ 后者</p>'
               +'<p>2. <strong>求一个数的几分之几是多少</strong>：这个数 × 几分之几</p>'
               +'<p>3. <strong>已知一个数的几分之几是多少，求这个数</strong>：用方程（设计 x）</p>'
               +'<p><strong>解题步骤</strong>：审题 → 找等量关系 → 列式或列方程 → 解答</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：小明有 24 元，用了 1/3，还剩多少元？</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解法1（分数乘法）：</p>'
               +'<p>用了：24 × 1/3 = 8 元</p>'
               +'<p>还剩：24 - 8 = <strong>16 元</strong></p>'
               +'<p>解法2（直接算剩下的分率）：</p>'
               +'<p>剩下：1 - 1/3 = 2/3</p>'
               +'<p>24 × 2/3 = <strong>16 元</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（已知部分求整体）</strong>：一本书，小明看了 60 页，正好看了全书的 2/5，全书有多少页？</p>'
               +'<p style="color:#888;margin-left:12px">答：设计 x 页，2/5 x = 60，x = <strong>150 页</strong>。</p>'
               +'<p><strong>变化2（分数加减应用）</strong>：一根绳子，第一次用去 1/3，第二次用去 1/4，还剩几分之几？</p>'
               +'<p style="color:#888;margin-left:12px">答：1 - 1/3 - 1/4 = <strong>5/12</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>"求一个数是另一个数的几分之几"，要用<strong>前者除以后者</strong>！</li>'
               +'<li>"已知一个数的几分之几是多少，求这个数"，要<strong>列方程</strong>或"除以分数"！</li>'
               +'<li>应用题要<strong>写答</strong>，并且要检查答案是否合理！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '一本书共 120 页，小明看了 1/4，看了 ______ 页。',
          answers: [['30', '３０']],
          explanation: '120 × 1/4 = 30 页。'
        },
        {
          type: 'fill',
          q: '一根绳子长 12 米，用去 2/3，还剩 ______ 米。',
          answers: [['4', '４']],
          explanation: '用去 12×2/3=8 米，还剩 12-8=4 米；或剩下 1-2/3=1/3，12×1/3=4 米。'
        },
        {
          type: 'choice',
          q: '一个数的 2/5 是 20，则这个数是（ ）',
          options: ['A. 8', 'B. 50', 'C. 20', 'D. 40'],
          answer: 1,
          explanation: '选 B。设计 x，2/5 x=20，x=20÷2/5=20×5/2=50。'
        },
        {
          type: 'fill',
          q: '小明有 36 元，是小红的 3/4，小红有 ______ 元。',
          answers: [['48', '４８']],
          explanation: '设计 x 元，3/4 x=36，x=36÷3/4=36×4/3=48 元。'
        },
        {
          type: 'fill',
          q: '一桶油重 5 千克，用去 1/5 后，还剩 ______ 千克。',
          answers: [['4', '４']],
          explanation: '用去 5×1/5=1 千克，还剩 5-1=4 千克；或剩下 1-1/5=4/5，5×4/5=4 千克。'
        }
      ]
    }
  ]
};
