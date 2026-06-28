// ============================================================
// 第五章：数的整除 5.1 ~ 5.6
// ============================================================
var SECTION_DATA = SECTION_DATA || {};

// ===== 5.1 整数和整除 =====
SECTION_DATA['ch5-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>整数</strong>：正整数、零、负整数的统称。</p>'
               +'<p><strong>整除</strong>：整数 a 除以整数 b（b ≠ 0），除得的商是整数而余数为零，就说 a 能被 b 整除。</p>'
               +'<p><strong>整除的条件</strong>：</p>'
               +'<ul>'
               +'<li>① 被除数、除数都是<strong>整数</strong></li>'
               +'<li>② 商必须是整数，<strong>余数为零</strong></li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：判断下列哪些是整除：</p>'
               +'<p style="margin:8px 0;font-style:italic;">(1) 12 ÷ 3 = 4 &nbsp;&nbsp; (2) 10 ÷ 4 = 2.5 &nbsp;&nbsp; (3) 15 ÷ 5 = 3 &nbsp;&nbsp; (4) 7 ÷ 2 = 3...1</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>(1) <strong>是整除</strong>（整数÷整数=整数，余数 0）</p>'
               +'<p>(2) <strong>不是整除</strong>（商 2.5 不是整数）</p>'
               +'<p>(3) <strong>是整除</strong></p>'
               +'<p>(4) <strong>不是整除</strong>（余数不为 0）</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>整除的前提是<strong>整数÷整数</strong>，10 ÷ 4 = 2.5 不是整除（商不是整数）。</li>'
               +'<li>余数为零是整除的必要条件！</li>'
               +'<li>整除关系一般说"a 能被 b 整除"或"b 能整除 a"。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'choice',
          q: '下列各式中，是整除的是（ ）',
          options: ['A. 12 ÷ 5 = 2.4', 'B. 20 ÷ 4 = 5', 'C. 15 ÷ 6 = 2...3', 'D. 8 ÷ 3 = 2 余 2'],
          answer: 1,
          explanation: '选 B。A 商不是整数；C 和 D 余数不为 0。'
        },
        {
          type: 'fill',
          q: '整数 a 能被整数 b 整除，则余数必须为 ______。',
          answers: [['0', '零']],
          explanation: '整除的定义：余数为零。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 任何整数都能被 1 整除', 'B. 整除关系可以写成分数形式', 'C. 商为整数时一定是整除', 'D. 0 不能做除数，所以整除中不考虑 0'],
          answer: 0,
          explanation: '选 A。任何整数÷1=整数，所以能被 1 整除。B 错误（整除是整数除法）；C 错误（还要看被除数和除数是否整数）；D 错误（0 可以做被除数）。'
        },
        {
          type: 'fill',
          q: '如果 a ÷ b = 5（a、b 为整数，b≠0，余数为 0），则 a 能被 b ______。（填"整除"或"除尽"）',
          answers: [['整除']],
          explanation: 'a、b、商都是整数且余数为 0，所以是整除。'
        }
      ]
    }
  ]
};

// ===== 5.2 素数、合数与分解素因数 =====
SECTION_DATA['ch5-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>素数（质数）</strong>：一个大于 1 的整数，如果只有 1 和它本身两个因数，这样的数叫做素数。</p>'
               +'<p><strong>合数</strong>：一个大于 1 的整数，如果除了 1 和它本身还有其他因数，这样的数叫做合数。</p>'
               +'<p><strong>1 的特殊性</strong>：1 既不是素数也不是合数。</p>'
               +'<p><strong>分解素因数</strong>：把一个合数用素因数相乘的形式表示出来，叫做分解素因数。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：判断 2、9、1、17 是素数还是合数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>2：只有 1 和 2 两个因数 → <strong>素数</strong></p>'
               +'<p>9：有 1、3、9 三个因数 → <strong>合数</strong></p>'
               +'<p>1：只有一个因数 → <strong>既不是素数也不是合数</strong></p>'
               +'<p>17：只有 1 和 17 两个因数 → <strong>素数</strong></p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（分解素因数）</strong>：把 60 分解素因数。</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>60 = 2² × 3 × 5</strong>（短除法：60÷2=30，30÷2=15，15÷3=5，5 是素数）。</p>'
               +'<p><strong>变化2</strong>：写出 20~30 之间的所有素数。</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>23、29</strong>（20~30 之间的素数：23、29）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li><strong>2 是最小的素数，也是唯一的偶素数</strong>！</li>'
               +'<li>分解素因数时，要把所有因数都写成<strong>素数</strong>（如 12 = 2²×3，不能写成 12 = 4×3）。</li>'
               +'<li>不要忘了 1 既不是素数也不是合数！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'choice',
          q: '下列各数中，是素数的是（ ）',
          options: ['A. 1', 'B. 9', 'C. 11', 'D. 15'],
          answer: 2,
          explanation: '选 C。A 不是素数；B 有因数 3；D 有因数 3、5。'
        },
        {
          type: 'fill',
          q: '把 36 分解素因数：36 = ______。',
          answers: [['2²×3²', '2^2×3^2', '2·2·3·3', '2²×3²']],
          explanation: '36 = 2² × 3²。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 所有的偶数都是合数', 'B. 所有的奇数都是素数', 'C. 两个素数的和一定是偶数', 'D. 一个合数至少有 3 个因数'],
          answer: 3,
          explanation: '选 D。A 错误（2 是偶素数）；B 错误（9 是奇数但不是素数）；C 错误（2+3=5 是奇数）。'
        },
        {
          type: 'fill',
          q: '10 以内的素数是：______。（按顺序写，用逗号分隔）',
          answers: [['2,3,5,7', '2, 3, 5, 7', '2,3,5,7']],
          explanation: '10 以内的素数：2、3、5、7。'
        }
      ]
    }
  ]
};

// ===== 5.3 公因数与最大公因数 =====
SECTION_DATA['ch5-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>公因数</strong>：几个数共有的因数，叫做这几个数的公因数。</p>'
               +'<p><strong>最大公因数</strong>：几个数的公因数中最大的一个，叫做这几个数的最大公因数，记作 <code>(a, b)</code>。</p>'
               +'<p><strong>求法</strong>：① 列举法 ② 分解素因数法 ③ 短除法</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：求 12 和 18 的最大公因数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><strong>方法1（列举法）</strong>：</p>'
               +'<p>12 的因数：1, 2, 3, 4, 6, 12</p>'
               +'<p>18 的因数：1, 2, 3, 6, 9, 18</p>'
               +'<p>公因数：1, 2, 3, 6 → <strong>最大公因数是 6</strong></p>'
               +'<p><strong>方法2（短除法）</strong>：</p>'
               +'<p>用公有素因数 2、3 除，2×3 = <strong>6</strong>。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：如果 (a, b) = 1，则 a 和 b 叫做<strong>互素</strong>（互质）。</p>'
               +'<p style="color:#888;margin-left:12px">例：8 和 15 互素（虽然它们都是合数，但最大公因数是 1）。</p>'
               +'<p><strong>变化2</strong>：求 24、36、48 的最大公因数。</p>'
               +'<p style="color:#888;margin-left:12px">答：用短除法，公有素因数有 2、2、3，所以 <strong>(24,36,48) = 12</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li><strong>互素</strong>是指最大公因数为 1，不是"都是素数"！</li>'
               +'<li>短除法求最大公因数时，要<strong>除到互素为止</strong>，然后把所有除数相乘。</li>'
               +'<li>如果两个数成倍数关系，较小数就是它们的最大公因数。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '求 (12, 18) = ______。',
          answers: [['6', '６']],
          explanation: '12 和 18 的最大公因数是 6。'
        },
        {
          type: 'fill',
          q: '8 和 15 的最大公因数是 ______。（这两个数是互素吗？______）',
          answers: [['1'], ['是', '互素']],
          explanation: '8 和 15 的公因数只有 1，所以最大公因数是 1，它们互素。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 互素的两个数都是素数', 'B. 两个合数的最大公因数一定大于 1', 'C. 如果 a 是 b 的倍数，则 (a, b) = b', 'D. 1 和任何数的最大公因数都是 1'],
          answer: 2,
          explanation: '选 C。A 错误（8 和 15 互素但都是合数）；B 错误（如 4 和 9 的最大公因数是 1）；D 错误（1 和 1 的最大公因数是 1，但 0 和 1 的最大公因数是 1，也不一定"都是 1"）。'
        },
        {
          type: 'fill',
          q: '求 (24, 36) = ______。',
          answers: [['12', '１２']],
          explanation: '24 = 2³×3，36 = 2²×3²，公有素因数：2²×3 = 12。'
        }
      ]
    }
  ]
};

// ===== 5.4 公倍数与最小公倍数 =====
SECTION_DATA['ch5-4'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>公倍数</strong>：几个数共有的倍数，叫做这几个数的公倍数。</p>'
               +'<p><strong>最小公倍数</strong>：几个数的公倍数中最小的一个（0 除外），叫做这几个数的最小公倍数，记作 <code>[a, b]</code>。</p>'
               +'<p><strong>求法</strong>：① 列举法 ② 分解素因数法 ③ 短除法</p>'
               +'<p><strong>关系</strong>：a × b = (a, b) × [a, b]（两个正整数）。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：求 4 和 6 的最小公倍数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p><strong>方法1（列举法）</strong>：</p>'
               +'<p>4 的倍数：4, 8, 12, 16, 20, 24...</p>'
               +'<p>6 的倍数：6, 12, 18, 24...</p>'
               +'<p>公倍数：12, 24... → <strong>最小公倍数是 12</strong></p>'
               +'<p><strong>方法2（短除法）</strong>：</p>'
               +'<p>用公有素因数 2 除，再乘以各自的商：2 × 2 × 3 = <strong>12</strong>。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：已知 (4, 6) = 2，求 [4, 6]。</p>'
               +'<p style="color:#888;margin-left:12px">答：用公式 a×b = (a,b)×[a,b]，所以 [4,6] = 4×6÷2 = <strong>12</strong>。</p>'
               +'<p><strong>变化2</strong>：如果两个数互素，则它们的最小公倍数是 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>两数的乘积</strong>（因为 (a,b)=1，所以 [a,b]=a×b）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>求最小公倍数时，要<strong>除到互素为止</strong>，然后把所有除数和最后的商相乘。</li>'
               +'<li>如果两个数成倍数关系，较大数就是它们的最小公倍数。</li>'
               +'<li>0 是任何数的倍数，但最小公倍数一般取<strong>正整数</strong>中最小的。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '求 [4, 6] = ______。',
          answers: [['12', '１２']],
          explanation: '4 和 6 的最小公倍数是 12。'
        },
        {
          type: 'fill',
          q: '如果 (a, b) = 3，a×b = 90，则 [a, b] = ______。',
          answers: [['30', '３０']],
          explanation: '用公式：a×b = (a,b)×[a,b]，所以 [a,b] = 90÷3 = 30。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 两个数的最小公倍数一定大于这两个数', 'B. 互素的两个数的最小公倍数是 1', 'C. 如果 a 是 b 的倍数，则 [a, b] = a', 'D. 两个数的最小公倍数只有一个'],
          answer: 2,
          explanation: '选 C。A 错误（如 [2,4]=4，等于较大数）；B 错误（互素的两数最小公倍数是它们的乘积）；D 正确但 C 更准确。'
        },
        {
          type: 'fill',
          q: '求 [3, 5] = ______。（3 和 5 互素吗？______）',
          answers: [['15', '１５'], ['是', '互素']],
          explanation: '3 和 5 互素，所以 [3,5] = 3×5 = 15。'
        }
      ]
    }
  ]
};

// ===== 5.5 整除的综合应用 =====
SECTION_DATA['ch5-5'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>整除的实际应用</strong>：</p>'
               +'<p>- <strong>分东西问题</strong>：用最大公因数</p>'
               +'<p>- <strong>排队/分组问题</strong>：用最小公倍数</p>'
               +'<p>- <strong>判断整除</strong>：用分解素因数</p>'
               +'<p><strong>整除的特征</strong>：</p>'
               +'<ul>'
               +'<li>被 2 整除：个位是 0、2、4、6、8</li>'
               +'<li>被 3 整除：各位数字之和能被 3 整除</li>'
               +'<li>被 5 整除：个位是 0 或 5</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>题目</strong>：把 24 个苹果和 36 个梨平均分给一些小朋友，刚好分完，最多有几个小朋友？</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>分析：求<strong>最多</strong>有几个小朋友，就是求 24 和 36 的<strong>最大公因数</strong>。</p>'
               +'<p>(24, 36) = <strong>12</strong></p>'
               +'<p>答：最多有 12 个小朋友。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1（分组问题）</strong>：一排气球，按"红、黄、蓝"3 个一组排列，第 25 个气球是什么颜色？</p>'
               +'<p style="color:#888;margin-left:12px">答：25 ÷ 3 = 8 组...1 个，第 25 个是<strong>红色</strong>（余数 1 对应第一个）。</p>'
               +'<p><strong>变化2（判断整除）</strong>：判断 123456 能否被 3 整除。</p>'
               +'<p style="color:#888;margin-left:12px">答：1+2+3+4+5+6 = 21，21 能被 3 整除，所以 123456 <strong>能</strong>被 3 整除。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>"最多"用<strong>最大公因数</strong>，"最少"用<strong>最小公倍数</strong>！</li>'
               +'<li>被 3 整除的特征是"各位数字之和"能被 3 整除，不是"个位"。</li>'
               +'<li>应用题要先弄清是求最大公因数还是最小公倍数！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 18 支铅笔和 24 块橡皮平均分给一些同学，刚好分完，最多有 ______ 个同学。',
          answers: [['6', '６']],
          explanation: '求 (18,24) = 6，最多有 6 个同学。'
        },
        {
          type: 'fill',
          q: '判断 357 能否被 3 整除：______（填"能"或"不能"）。',
          answers: [['能']],
          explanation: '3+5+7=15，15 能被 3 整除，所以 357 能被 3 整除。'
        },
        {
          type: 'choice',
          q: '一排灯笼按"红、红、黄、黄"4 个一组排列，第 30 个灯笼是（ ）',
          options: ['A. 红', 'B. 黄', 'C. 红或黄', 'D. 无法确定'],
          answer: 1,
          explanation: '30÷4=7 组...2 个，第 30 个是第二个，即黄色。选 B。'
        },
        {
          type: 'fill',
          q: '小明每 4 天去一次图书馆，小红每 6 天去一次，两人今天在图书馆相遇，再过 ______ 天两人再次相遇。',
          answers: [['12', '１２']],
          explanation: '再过 [4,6]=12 天两人再次相遇。'
        }
      ]
    }
  ]
};

// ===== 5.6 整除复习 =====
SECTION_DATA['ch5-6'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '知识梳理',
      content: '<p><strong>整除</strong>：整数 a ÷ 整数 b = 整数（余数 0）。</p>'
               +'<p><strong>素数 vs 合数</strong>：</p>'
               +'<ul>'
               +'<li>素数：只有 1 和它本身两个因数（2, 3, 5, 7, 11...）</li>'
               +'<li>合数：除了 1 和它本身还有其他因数（4, 6, 8, 9...）</li>'
               +'<li>1：既不是素数也不是合数</li>'
               +'</ul>'
               +'<p><strong>最大公因数 & 最小公倍数</strong>：</p>'
               +'<ul>'
               +'<li>短除法求 (a,b)：除到互素，除数相乘</li>'
               +'<li>短除法求 [a,b]：除到互素，除数和商都相乘</li>'
               +'<li>公式：a×b = (a,b)×[a,b]</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '综合例题',
      content: '<p><strong>题目</strong>：用短除法求 (12, 18) 和 [12, 18]。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>短除法：</p>'
               +'<p>2 | 12 &nbsp;18</p>'
               +'<p>3 |&nbsp; 6 &nbsp; 9</p>'
               +'<p>&nbsp;&nbsp;&nbsp; 2 &nbsp; 3（互素）</p>'
               +'<p>(12, 18) = 2×3 = <strong>6</strong></p>'
               +'<p>[12, 18] = 2×3×2×3 = <strong>36</strong></p>'
               +'<p>验证：12×18 = 216，(12,18)×[12,18] = 6×36 = 216 ✓</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>短除法求最大公因数时，只要把<strong>除数</strong>相乘。</li>'
               +'<li>短除法求最小公倍数时，要把<strong>除数和最后的商</strong>都相乘。</li>'
               +'<li>1 既不是素数也不是合数，不要漏掉这个特殊情况！</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '用短除法求 (18, 24) = ______。',
          answers: [['6', '６']],
          explanation: '18=2×3²，24=2³×3，(18,24)=2×3=6。'
        },
        {
          type: 'fill',
          q: '用短除法求 [5, 7] = ______。（5 和 7 互素吗？______）',
          answers: [['35', '３５'], ['是', '互素']],
          explanation: '5 和 7 互素，所以 [5,7]=5×7=35。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 所有的偶数都是合数', 'B. 两个素数的积一定是合数', 'C. 0 是最小的合数', 'D. 两个合数的最大公因数一定大于 1'],
          answer: 1,
          explanation: '选 B。两个素数的积至少有 3 个因数（1、两个素数、积本身），所以是合数。A 错误（2 是偶素数）；C 错误（0 不是合数，1 也不是）；D 错误（如 4 和 9）。'
        },
        {
          type: 'fill',
          q: '把 48 和 60 分解素因数，求 (48, 60) 和 [48, 60]。\n(48, 60) = ______，[48, 60] = ______。',
          answers: [['12', '１２'], ['240', '２４０']],
          explanation: '48=2⁴×3，60=2²×3×5，(48,60)=2²×3=12，[48,60]=2⁴×3×5=240。'
        }
      ]
    }
  ]
};
