// ============================================================
// 第二章：代数式 2.1 ~ 2.7
// ============================================================
var SECTION_DATA = SECTION_DATA || {};

// ===== 2.1 用字母表示数 =====
SECTION_DATA['ch2-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p>用字母表示数，可以把数量和数量之间的关系<b>一般化</b>，这是从算术到代数的重要一步。</p>'
               +'<p><b>书写规范</b>（考试经常扣分！）：</p>'
               +'<ul>'
               +'<li>数字与字母相乘，<b>数字写前面</b>，2×a 写作 <code>2a</code></li>'
               +'<li>字母与字母相乘，直接写在一起，a×b 写作 <code>ab</code></li>'
               +'<li>数字与字母相除，写成分数形式，a÷2 写作 <code>a/2</code></li>'
               +'<li><b>"1" 作为系数时省略</b>：1a 写作 <code>a</code></li>'
               +'<li>带分数要先化成假分数：2⅓a = <code>7/3 a</code></li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p>用代数式表示：</p>'
               +'<p style="margin:8px 0;font-style:italic;">(1) a 与 b 的和的 2 倍 &nbsp;&nbsp; (2) a 的 3 倍与 b 的 1/2 的差</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) "和的 2 倍"：先求和，再乘 2 → <code>2(a+b)</code>（注意加括号！）</p>'
               +'<p>(2) "a 的 3 倍" = <code>3a</code>，"b 的 1/2" = <code>1/2 b</code>，相减 → <code>3a - 1/2 b</code></p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>"a 与 b 的和的 2 倍" 是 <code>2(a+b)</code>，不是 <code>2a+b</code>！</li>'
               +'<li>除法结果必须写成分数形式，不能保留"÷"号。</li>'
               +'<li>带分数必须先化成假分数再运算。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '用代数式表示：a 与 b 的和的相反数。',
          answers: [['-(a+b)', '-(a + b)', '-(b+a)', '-(b + a)']],
          explanation: '和的相反数是 -(a+b)。'
        },
        {
          type: 'fill',
          q: '长方形的宽是 a 厘米，长比宽多 3 厘米，用代数式表示周长。',
          answers: [['2(a+a+3)', '4a+6', '2(2a+3)', '4a + 6']],
          explanation: '长 = a+3，周长 = 2(a + a+3) = 2(2a+3) = 4a+6 厘米。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. a×2 写作 a2', 'B. a÷2 写作 a/2', 'C. 1×a 写作 1a', 'D. 2×3 写作 23'],
          answer: 1,
          explanation: '选 B。A 应写作 2a；C 应写作 a；D 应写作 2·3 或 6。'
        },
        {
          type: 'fill',
          q: '一辆汽车以每小时 v 千米的速度行驶，t 小时后行驶多少千米？',
          answers: [['vt', 'v×t', 'v·t']],
          explanation: '路程 = 速度×时间 = vt 千米。'
        },
        {
          type: 'fill',
          q: '用代数式表示：x 的 2 倍与 y 的 3 倍的和。',
          answers: [['2x+3y', '3y+2x']],
          explanation: 'x 的 2 倍 = 2x，y 的 3 倍 = 3y，和 = 2x+3y。'
        }
      ]
    }
  ]
};

// ===== 2.2 代数式的概念 =====
SECTION_DATA['ch2-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>代数式</b>：用运算符号（加、减、乘、除、乘方）把数或表示数的字母连接而成的式子。</p>'
               +'<p><b>注意</b>：单独的一个数或一个字母也是代数式（如 5, a, x）。</p>'
               +'<p><b>关键</b>：代数式<b>不含等号或不等号</b>！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p>判断下列哪些是代数式：</p>'
               +'<p style="margin:8px 0;font-style:italic;">3x + 5, 2a = 6, S = πr², 0, -x</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><b>代数式</b>：3x + 5, 0, -x（不含等号或不等号）</p>'
               +'<p><b>不是代数式</b>：2a = 6（等式），S = πr²（等式）</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>代数式可以含运算符号，但不能含等号（=）或不等号（>, <, ≥, ≤）。</li>'
               +'<li>单独的一个数（如 0, 5）或一个字母（如 a, x）也是代数式。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '下列各式中，哪些是代数式？（多选：写序号）\n① 2x+3  ② 5  ③ a  ④ x>3  ⑤ x+y=5',
          answers: [['①②③', '1,2,3', '①,②,③', '1 2 3']],
          explanation: '①②③是代数式；④是不等式；⑤是等式。'
        },
        {
          type: 'choice',
          q: '代数式 (a+b)/2 表示的是（ ）',
          options: ['A. a 与 b 的和', 'B. a 与 b 的差', 'C. a 与 b 的平均值', 'D. a 与 b 的积'],
          answer: 2,
          explanation: '选 C。(a+b)/2 是 a 与 b 的平均值（算术平均）。'
        },
        {
          type: 'fill',
          q: '用代数式表示：棱长为 a 的正方体的体积。',
          answers: [['a³', 'a^3', 'a·a·a']],
          explanation: '正方体体积 = 棱长³ = a³。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 代数式可以含等号', 'B. 单独的一个数不是代数式', 'C. 单独的一个字母是代数式', 'D. 代数式 x>2 是正确的写法'],
          answer: 2,
          explanation: '选 C。A 错误（代数式不含等号）；B 错误；D 错误（含不等号）。'
        },
        {
          type: 'fill',
          q: '用代数式表示：半径为 r 的圆的周长和面积。',
          answers: [['2πr', 'πr²', '2πr和πr²']],
          explanation: '周长 = 2πr，面积 = πr²。'
        }
      ]
    }
  ]
};

// ===== 2.3 代数式的值 =====
SECTION_DATA['ch2-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>代数式的值</b>：用数值代替代数式里的字母，计算后得到的结果。</p>'
               +'<p><b>步骤</b>：① 写出字母的值 → ② 代入代数式 → ③ 按运算顺序计算</p>'
               +'<p><b>⚠️ 关键</b>：代入负数时，一定要加括号！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：当 a = 3, b = -2 时，求 a² - 2ab + b² 的值。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：原式 = 3² - 2×3×(-2) + (-2)²</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 9 - （-12）+ 4</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 9 + 12 + 4</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b>25</b></p>'
               +'<p>💡 注意：b = -2，所以 b² = (-2)² = 4（不是 -4！）</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li><b>代入负数时千万别忘了加括号</b>！</li>'
               +'<li>错误：a = -2 代入 a² 时写成 -2² = -4（<b>错！</b>）</li>'
               +'<li>正确：(-2)² = 4（负数加括号再平方）</li>'
               +'<li>代入分数时也要加括号：a = 1/2 时，2a 要写成 2×(1/2)</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '当 x = 5 时，求代数式 2x - 3 的值。',
          answers: [['7', '+7']],
          explanation: '2×5 - 3 = 10 - 3 = 7。'
        },
        {
          type: 'fill',
          q: '当 a = -3 时，求 a² 的值。',
          answers: [['9', '+9']],
          explanation: '(-3)² = 9。注意：要加括号！'
        },
        {
          type: 'fill',
          q: '当 x = 2, y = -1 时，求 3x - 2y 的值。',
          answers: [['8', '+8']],
          explanation: '3×2 - 2×(-1) = 6 - (-2) = 6 + 2 = 8。'
        },
        {
          type: 'fill',
          q: '当 a = 1/2 时，求 4a + 1 的值。',
          answers: [['3', '+3', '3.0']],
          explanation: '4×(1/2) + 1 = 2 + 1 = 3。'
        },
        {
          type: 'choice',
          q: '当 x = -1 时，代数式 2x² + 3x - 1 的值是（ ）',
          options: ['A. 4', 'B. 0', 'C. -2', 'D. -6'],
          answer: 2,
          explanation: '2×(-1)² + 3×(-1) - 1 = 2×1 - 3 - 1 = 2 - 3 - 1 = -2。选 C。'
        }
      ]
    }
  ]
};

// ===== 2.4 一次式的概念 =====
SECTION_DATA['ch2-4'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>单项式</b>：只含有乘法（和乘方）运算的代数式叫做单项式。</p>'
               +'<p><b>多项式</b>：几个单项式的和叫做多项式。</p>'
               +'<p><b>一次式</b>：含有一个字母，并且字母的指数和为 1 的整式。</p>'
               +'<p><b>同类项</b>：所含字母相同，并且相同字母的指数也相同的项。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：判断下列各式是单项式还是多项式：</p>'
               +'<p style="margin:8px 0;font-style:italic;">3x, 2x + 5, -a, x², 4</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><b>单项式</b>：3x, -a, x², 4（只含乘法运算）</p>'
               +'<p><b>多项式</b>：2x + 5（两个单项式 2x 和 5 的和）</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>x + y 不是一次式（含两个字母）</li>'
               +'<li>x² 不是一次式（指数为 2）</li>'
               +'<li>3x 和 3x² 不是同类项（指数不同）</li>'
               +'<li>2ab 和 -5ab 是同类项（字母相同，指数相同）</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'choice',
          q: '下列各式中，是单项式的是（ ）',
          options: ['A. x + 1', 'B. 3x', 'C. x/y', 'D. x² + x'],
          answer: 1,
          explanation: '选 B。A 和 D 是多项式；C 含除法，不是整式。'
        },
        {
          type: 'fill',
          q: '多项式 3x² - 2x + 5 的常数项是 ______。',
          answers: [['5', '＋5', '+5']],
          explanation: '常数项是不含字母的项，即 5。'
        },
        {
          type: 'choice',
          q: '下列各组式子中，是同类项的是（ ）',
          options: ['A. 3x 与 3y', 'B. 2x² 与 3x', 'C. -5ab 与 2ab', 'D. x 与 x²'],
          answer: 2,
          explanation: '选 C。A 字母不同；B 和 D 指数不同。'
        },
        {
          type: 'fill',
          q: '写出一个与 2x²y 同类的项：______。',
          answers: [['-x²y', '5x²y', 'x²y', '1/2 x²y', '-3x²y']],
          explanation: '只要字母是 x²y（或 xy² 不对！），系数可以不同。如 -x²y。'
        }
      ]
    }
  ]
};

// ===== 2.5 一次式的同类项 =====
SECTION_DATA['ch2-5'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>同类项</b>：所含字母相同，并且相同字母的指数也相同的项。</p>'
               +'<p><b>合并同项法则</b>：同类项的系数相加，字母和字母的指数不变。</p>'
               +'<p>例如：3x + 5x = <b>(3+5)x</b> = <b>8x</b></p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：合并同项：3x²y - 2xy² + 5x²y + 4xy²</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：原式 = (3x²y + 5x²y) + (-2xy² + 4xy²)</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b>8x²y + 2xy²</b></p>'
               +'<p>💡 注意：x²y 和 xy² <b>不是</b>同项（指数不同）！</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>3x²y 和 -2xy² 不是同项！虽然都有 x 和 y，但指数不同。</li>'
               +'<li>常数项都是同项（比如 3 和 -5 可以合并）。</li>'
               +'<li>合并时，字母和指数不变，只把系数相加！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '合并同项：2x + 5x = ______。',
          answers: [['7x', '7·x', '7· x']],
          explanation: '系数相加：2+5=7，字母不变，结果是 7x。'
        },
        {
          type: 'fill',
          q: '合并同项：3a²b - 5a²b = ______。',
          answers: [['-2a²b', '－2a²b']],
          explanation: '3-5=-2，字母部分 a²b 不变，结果是 -2a²b。'
        },
        {
          type: 'choice',
          q: '下列各组式子中，是同类项的是（ ）',
          options: ['A. 2x²y 与 3xy²', 'B. 1/2 ab² 与 -3ab²', 'C. 5x² 与 5x³', 'D. a 与 b'],
          answer: 1,
          explanation: '选 B。A 指数不同；C 指数不同；D 字母不同。'
        },
        {
          type: 'fill',
          q: '合并同项：4xy - 2xy + 7xy = ______。',
          answers: [['9xy', '9·xy']],
          explanation: '4-2+7=9，结果是 9xy。'
        },
        {
          type: 'fill',
          q: '合并同项：x³ - 2x³ + 5x³ = ______。',
          answers: [['4x³', '4·x³']],
          explanation: '1-2+5=4，结果是 4x³。'
        }
      ]
    }
  ]
};

// ===== 2.6 一次式的加减 =====
SECTION_DATA['ch2-6'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>去括号法则</b>：</p>'
               +'<ul>'
               +'<li>括号前是"+"号：去掉括号和"+"号，括号内各项不变号</li>'
               +'<li>括号前是"-"号：去掉括号和"-"号，括号内各项都变号</li>'
               +'</ul>'
               +'<p><b>添括号法则</b>：</p>'
               +'<ul>'
               +'<li>添"+"号：括号里各项不变号</li>'
               +'<li>添"-"号：括号里各项都变号</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：(3a² - 2ab + 5) - (a² + 4ab - 3)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：原式 = 3a² - 2ab + 5 - a² - 4ab + 3（注意第二个括号前去号，里面全变号！）</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (3a² - a²) + (-2ab - 4ab) + (5 + 3)</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b>2a² - 6ab + 8</b></p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>括号前去号时，要去掉括号和前面的符号，括号内<b>每一项</b>都要变号！</li>'
               +'<li>常见错误：(a - b) - (c - d) = a - b - c - d（错！应该是 a - b - c + d）</li>'
               +'<li>建议：先重新写一遍（把括号去掉），再合同类项。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：(2x + 3) + (x - 5) = ______。',
          answers: [['3x-2', '3x - 2', '3·x-2']],
          explanation: '2x+3+x-5 = 3x-2。'
        },
        {
          type: 'fill',
          q: '计算：(5a - 3b) - (2a + b) = ______。',
          answers: [['3a-4b', '3a - 4b']],
          explanation: '5a-3b-2a-b = 3a-4b。'
        },
        {
          type: 'choice',
          q: '下列计算正确的是（ ）',
          options: ['A. (x+1)-(x-1) = 0', 'B. 2(a+b) = 2a+b', 'C. -(a-b) = -a-b', 'D. 3x-(2x-1) = x+1'],
          answer: 3,
          explanation: '选 D。A 应得 2；B 应得 2a+2b；C 应得 -a+b。'
        },
        {
          type: 'fill',
          q: '去括号：-(2x - 3y) = ______。',
          answers: [['-2x+3y', '3y-2x', '-2x + 3y']],
          explanation: '括号前去号，里面各项变号：-2x+3y。'
        },
        {
          type: 'fill',
          q: '计算：(4x² - 3x + 2) + (-x² + 5x - 1) = ______。',
          answers: [['3x²+2x+1', '3x² + 2x + 1']],
          explanation: '4x²-3x+2-x²+5x-1 = 3x²+2x+1。'
        }
      ]
    }
  ]
};

// ===== 2.7 数与一次式相乘 =====
SECTION_DATA['ch2-7'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><b>分配律</b>：k(a + b) = ka + kb，这是数与一次式相乘的核心法则。</p>'
               +'<p><b>步骤</b>：① 用数字因数乘以括号内的每一项 → ② 注意符号！</p>'
               +'<p><b>要点</b>：数字因数要乘以<b>每一项</b>，不能漏项！</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><b>题目</b>：计算：-3(2x - 5y + 1)</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：原式 = (-3)×2x + (-3)×(-5y) + (-3)×1</p>'
               +'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b>-6x + 15y - 3</b></p>'
               +'<p>💡 注意：(-3)×(-5y) = +15y（负负得正）！</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>分配律时，数字因数要乘以<b>每一项</b>，不能漏项！</li>'
               +'<li>符号最容易错：-2(3-5) = -6+10 = 4，不是 -6-10！</li>'
               +'<li>建议：先把符号写在脑子里，再写答案。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '计算：2(3x + 4) = ______。',
          answers: [['6x+8', '6x + 8']],
          explanation: '2×3x + 2×4 = 6x+8。'
        },
        {
          type: 'fill',
          q: '计算：-4(x - 2) = ______。',
          answers: [['-4x+8', '-4x + 8', '8-4x']],
          explanation: '(-4)×x + (-4)×(-2) = -4x+8。'
        },
        {
          type: 'choice',
          q: '下列计算正确的是（ ）',
          options: ['A. -2(3x-1) = -6x-2', 'B. 5(x+2) = 5x+2', 'C. -3(2-x) = -6+3x', 'D. 4(1-2x) = 4-8x'],
          answer: 3,
          explanation: '选 D。A 应得 -6x+2；B 应得 5x+10；C 应得 -6+3x 要写成 3x-6。'
        },
        {
          type: 'fill',
          q: '计算：1/2(4x - 6) = ______。',
          answers: [['2x-3', '2x - 3']],
          explanation: '(1/2)×4x + (1/2)×(-6) = 2x-3。'
        },
        {
          type: 'fill',
          q: '计算：-(-2x + 3) = ______。（提示：相当于 -1×(...)，用分配律）',
          answers: [['2x-3', '2x - 3']],
          explanation: '(-1)×(-2x) + (-1)×3 = 2x-3。'
        }
      ]
    }
  ]
};
