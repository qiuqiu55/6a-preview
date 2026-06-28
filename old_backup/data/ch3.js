// ============================================================
// 第三章：一元一次方程 3.1 ~ 3.3
// ============================================================
var SECTION_DATA = SECTION_DATA || {};

// ===== 3.1 一元一次方程 =====
SECTION_DATA['ch3-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>方程</strong>：含有<strong>未知数</strong>的等式叫做方程。</p>'
               +'<p><strong>一元一次方程</strong>：只含有<strong>一个未知数</strong>，并且未知数的次数都是<strong>1</strong>的整式方程。</p>'
               +'<p><strong>标准形式</strong>：ax + b = 0（其中 a ≠ 0）</p>'
               +'<p><strong>方程的解</strong>：使方程左右两边相等的未知数的值。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例1：</strong>判断下列哪些是一元一次方程：</p>'
               +'<p>(1) 2x + 3 = 7 &nbsp;&nbsp; (2) x² - 1 = 0 &nbsp;&nbsp; (3) 1/x + 2 = 5 &nbsp;&nbsp; (4) 3y - 1 = 2y + 4</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) <strong>是</strong>（只含 x，次数 1，是整式方程）</p>'
               +'<p>(2) <strong>不是</strong>（x 的次数是 2）</p>'
               +'<p>(3) <strong>不是</strong>（含有 1/x，不是整式方程）</p>'
               +'<p>(4) <strong>是</strong>（只含 y，次数 1）</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>一元一次方程必须同时满足：① 只有一个未知数 ② 未知数的次数是 1 ③ 是整式方程（分母不含未知数）</li>'
               +'<li>ax + b = 0 中 a ≠ 0，否则就不是一次方程了。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'choice',
          q: '下列方程中，是一元一次方程的是（ ）',
          options: ['A. x² + 2x = 3', 'B. 2x - 1 = 5', 'C. 1/x = 3', 'D. x + y = 1'],
          answer: 1,
          explanation: '选 B。A 次数 2；C 不是整式方程；D 含两个未知数。'
        },
        {
          type: 'fill',
          q: '若方程 (a-2)x + 3 = 0 是关于 x 的一元一次方程，则 a ≠ ______。',
          answers: [['2', '２']],
          explanation: '一元一次方程要求 x 的系数 ≠ 0，所以 a-2 ≠ 0，即 a ≠ 2。'
        },
        {
          type: 'choice',
          q: '下列方程中，是一元一次方程的是（ ）',
          options: ['A. 2x + 3y = 5', 'B. x² = 4', 'C. 3t - 7 = 2t + 1', 'D. 1/x + x = 2'],
          answer: 2,
          explanation: '选 C。A 含两个未知数；B 次数 2；D 不是整式方程。'
        },
        {
          type: 'fill',
          q: 'x = 2 是方程 3x - 5 = 1 的解吗？______（填"是"或"不是"）。',
          answers: [['是']],
          explanation: '代入：3×2 - 5 = 6 - 5 = 1，左右相等，所以 x=2 是解。'
        }
      ]
    }
  ]
};

// ===== 3.2 一元一次方程的解法 =====
SECTION_DATA['ch3-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>解方程的依据</strong>：等式的性质</p>'
               +'<p>- 性质1：等式两边同时加上（或减去）同一个数或代数式，等式仍然成立</p>'
               +'<p>- 性质2：等式两边同时乘以（或除以一个不等于 0 的数），等式仍然成立</p>'
               +'<p><strong>解一元一次方程的步骤</strong>：</p>'
               +'<p>1. <strong>去分母</strong>：方程两边同乘分母的最小公倍数</p>'
               +'<p>2. <strong>去括号</strong>：用分配律去掉括号（注意符号！）</p>'
               +'<p>3. <strong>移项</strong>：把含未知数的项移到等号一边，常数项移到另一边（移项要变号！）</p>'
               +'<p>4. <strong>合并同类项</strong>：化简方程</p>'
               +'<p>5. <strong>系数化为 1</strong>：两边同除以未知数的系数</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例2：</strong>解方程：3(x-2) + 1 = x - (2x - 1)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><strong>Step 1 去括号</strong>：</p>'
               +'<p>3x - 6 + 1 = x - 2x + 1</p>'
               +'<p>3x - 5 = -x + 1</p>'
               +'<p><strong>Step 2 移项</strong>（把含 x 的移到左边，常数移到右边）：</p>'
               +'<p>3x + x = 1 + 5</p>'
               +'<p><strong>Step 3 合并同类项</strong>：</p>'
               +'<p>4x = 6</p>'
               +'<p><strong>Step 4 系数化为 1</strong>：</p>'
               +'<p>x = 6/4 = <strong>3/2</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（去分母）</strong>：解方程 (x-1)/2 + 1 = (2x+1)/3</p>'
               +'<p style="color:#888;margin-left:12px">答：两边同乘 6 → 3(x-1) + 6 = 2(2x+1) → 3x-3+6=4x+2 → 3x+3=4x+2 → x=1</p>'
               +'<p><strong>变化2（含小数）</strong>：0.5x - 0.2 = 0.3x + 0.1，可以先化成整数系数。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li><strong>移项要变号！</strong> 3x - 5 = -x + 1 → 3x + x = 1 + 5（不是 3x - x = 1 - 5！）</li>'
               +'<li>去括号时，括号前去号，括号内各项都要变号！</li>'
               +'<li>去分母时，两边都要乘最小公倍数，不能漏项！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '解方程：2x + 3 = 11，则 x = ______。',
          answers: [['4', '+4']],
          explanation: '2x = 11-3 = 8，x = 4。'
        },
        {
          type: 'fill',
          q: '解方程：3(x - 1) = 2x + 5，则 x = ______。',
          answers: [['8', '+8']],
          explanation: '去括号：3x-3 = 2x+5，移项：3x-2x = 5+3，x = 8。'
        },
        {
          type: 'choice',
          q: '解方程 2x - 4 = 3x + 1，下列移项正确的是（ ）',
          options: ['A. 2x + 3x = 1 + 4', 'B. 2x - 3x = 1 + 4', 'C. 2x - 3x = 1 - 4', 'D. 2x + 3x = 1 - 4'],
          answer: 1,
          explanation: '选 B。移项变号：2x-3x = 1+4。'
        },
        {
          type: 'fill',
          q: '解方程：(x+1)/2 = 3，则 x = ______。',
          answers: [['5', '+5']],
          explanation: '去分母：x+1 = 6，x = 5。'
        },
        {
          type: 'fill',
          q: '解方程：4x - 7 = 2 - x，则 x = ______。',
          answers: [['9/5', '1.8', '9/5=1.8']],
          explanation: '4x + x = 2 + 7，5x = 9，x = 9/5。'
        }
      ]
    }
  ]
};

// ===== 3.3 一元一次方程的应用 =====
SECTION_DATA['ch3-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>用方程解决实际问题的一般步骤</strong>：</p>'
               +'<p>1. <strong>审题</strong>：弄清题意，找出已知量和未知量</p>'
               +'<p>2. <strong>设未知数</strong>：用字母表示未知数（通常设 x）</p>'
               +'<p>3. <strong>列方程</strong>：根据等量关系列出方程</p>'
               +'<p>4. <strong>解方程</strong>：求出未知数的值</p>'
               +'<p>5. <strong>检验并作答</strong>：检验答案是否符合题意</p>'
               +'<p><strong>常见等量关系</strong>：行程问题（路程=速度×时间）、工程问题（工作量=效率×时间）</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例3（行程问题）</strong>：甲、乙两人相距 30 km，甲在后，乙在前，两人同时出发同向而行。甲的速度是 8 km/h，乙的速度是 5 km/h，几小时后甲追上乙？</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><strong>解</strong>：设 x 小时后甲追上乙。</p>'
               +'<p>甲走的路程：8x km</p>'
               +'<p>乙走的路程：5x km</p>'
               +'<p>等量关系：<strong>甲走的路程 = 乙走的路程 + 30</strong></p>'
               +'<p>列方程：8x = 5x + 30</p>'
               +'<p>解方程：3x = 30，<strong>x = 10</strong></p>'
               +'<p>答：10 小时后甲追上乙。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（工程问题）</strong>：一项工程，甲单独做需要 6 天完成，乙单独做需要 12 天完成。两人合作 2 天后，剩下的由乙单独完成，还需要几天？</p>'
               +'<p style="color:#888;margin-left:12px">答：设还需要 x 天。甲效率 1/6，乙效率 1/12。方程：2×(1/6+1/12) + x×(1/12) = 1，解得 x = 6。</p>'
               +'<p><strong>变化2（利润问题）</strong>：某商品进价 80 元，标价 120 元，打 x 折后利润率为 5%，求 x。</p>'
               +'<p style="color:#888;margin-left:12px">答：售价 = 120×(x/10)，利润 = 售价 - 80，利润率 = 利润/80 = 5%。方程：120x/10 - 80 = 80×5%，解得 x = 7（打 7 折）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>列方程时，先弄清<strong>等量关系</strong>，再写方程。</li>'
               +'<li>行程问题中，"追上"的等量关系是：快者路程 = 慢者路程 + 初始距离。</li>'
               +'<li>检验时，要把答案代入原题，看是否符合题意（不仅仅是解方程没错）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '某商品进价 50 元，售价 80 元，卖出 x 件后利润为 300 元，则 x = ______。',
          answers: [['10', '１０']],
          explanation: '每件利润 = 80-50 = 30 元，总利润 = 30x = 300，x = 10。'
        },
        {
          type: 'fill',
          q: 'A、B 两地相距 120 km，甲从甲地出发，速度为 15 km/h，乙从乙地同时出发，速度为 10 km/h，两人相向而行，____ 小时后相遇。',
          answers: [['24/5', '4.8', '4又4/5']],
          explanation: '相向而行，等量关系：甲路程 + 乙路程 = 120。15x + 10x = 120，25x = 120，x = 24/5 = 4.8 小时。'
        },
        {
          type: 'choice',
          q: '一项工程，甲单独做需要 10 天完成，乙单独做需要 15 天完成。两人合作 3 天后，剩下的由甲单独完成，还需要几天？列式正确的是（ ）',
          options: ['A. (1-3×(1/10+1/15)))÷(1/10)', 'B. (1-3×(1/10))÷(1/15)', 'C. (1-3×(1/10+1/15)))÷(1/15)', 'D. 3×(1/10+1/15) = 1'],
          answer: 0,
          explanation: '选 A。总工作量 1，合作 3 天完成 3×(1/10+1/15)，剩余 1-3×(1/10+1/15)，甲效率 1/10，所以还要 [1-3×(1/10+1/15)]÷(1/10) 天。'
        },
        {
          type: 'fill',
          q: '小明买了 x 支铅笔，每支 2 元，付了 20 元，找回 4 元，则 x = ______。',
          answers: [['8', '８']],
          explanation: '2x = 20-4 = 16，x = 8。'
        }
      ]
    }
  ]
};
