// ============================================================
// 第四章：线段与角 4.1 ~ 4.6
// ============================================================
var SECTION_DATA = SECTION_DATA || {};

// ===== 4.1 点与线 =====
SECTION_DATA['ch4-1'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>直线</strong>：没有端点，可以向两端无限延伸，不可度量长度。</p>'
               +'<p><strong>射线</strong>：有一个端点，向一端无限延伸，不可度量长度。</p>'
               +'<p><strong>线段</strong>：有两个端点，可以度量长度。</p>'
               +'<p><strong>基本事实</strong>：经过两点有且只有一条直线（两直线确定一条直线）。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例1：</strong>经过 3 个点中的每两个点画直线，最多可以画几条？</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>假设三个点 A、B、C：</p>'
               +'<p>- 经过 A、B 可以画一条直线</p>'
               +'<p>- 经过 A、C 可以画一条直线</p>'
               +'<p>- 经过 B、C 可以画一条直线</p>'
               +'<p>如果三个点不在同一直线上，最多可以画 <strong>3 条</strong>。</p>'
               +'<p>如果三个点在同一直线上，只能画 <strong>1 条</strong>。</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>直线没有端点，所以不能用"长度"来描述直线。</li>'
               +'<li>射线只有一个端点，表述时要说明端点和方向（如"以 A 为端点的射线 AB"）。</li>'
               +'<li>两点确定一条直线，不是"两条"（有且只有一条 = 唯一一条）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 直线有两个端点', 'B. 射线有一个端点', 'C. 线段可以无限延伸', 'D. 直线可以度量长度'],
          answer: 1,
          explanation: '选 B。A 错误（直线没有端点）；C 错误（线段不能无限延伸）；D 错误。'
        },
        {
          type: 'fill',
          q: '经过两点可以画 ______ 条直线。',
          answers: [['1', '一', '一条']],
          explanation: '经过两点有且只有一条直线。'
        },
        {
          type: 'choice',
          q: '下列可以度量长度的是（ ）',
          options: ['A. 直线', 'B. 射线', 'C. 线段', 'D. 以上都可以'],
          answer: 2,
          explanation: '选 C。直线和射线都不能度量长度。'
        },
        {
          type: 'fill',
          q: '射线 AB 和射线 BA 是同一条射线吗？______（填"是"或"不是"）。',
          answers: [['不是']],
          explanation: '射线 AB 以 A 为端点向 B 方向延伸；射线 BA 以 B 为端点向 A 方向延伸，不是同一条。'
        }
      ]
    }
  ]
};

// ===== 4.2 画线段的和、差与线段的中点 =====
SECTION_DATA['ch4-2'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>线段的中点</strong>：把一条线段分成两条相等线段的点，叫做这条线段的中点。</p>'
               +'<p>如果 M 是 AB 的中点，那么 AM = MB = <strong>1/2 AB</strong>。</p>'
               +'<p><strong>线段的和</strong>：AC = AB + BC（B 在线段 AC 上）。</p>'
               +'<p><strong>线段的差</strong>：BC = AC - AB（B、C 在 A 的同侧）。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例2：</strong>已知：点 M 是线段 AB 的中点，AB = 12 cm，求 AM 和 MB 的长度。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：因为 M 是 AB 的中点，</p>'
               +'<p>所以 AM = MB = 1/2 AB = 1/2 × 12 = <strong>6 cm</strong>。</p>'
               +'<p>答：AM = 6 cm，MB = 6 cm。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：已知 AM = 4 cm，MB = 6 cm，则 AB = ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>10 cm</strong>（如果 M 在线段 AB 上，AB = AM + MB = 10 cm）。</p>'
               +'<p><strong>变化2</strong>：已知 AB = 10 cm，M 是 AB 的中点，N 是 AM 的中点，求 MN 的长度。</p>'
               +'<p style="color:#888;margin-left:12px">答：AM = 5 cm，MN = 1/2 AM = <strong>2.5 cm</strong>。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>中点一定在线段上，AM = MB = 1/2 AB。</li>'
               +'<li>题目说"点 M 在线段 AB 上"和"点 M 是 AB 的中点"不一样！前者不一定平分。</li>'
               +'<li>计算时，注意单位是 cm 还是没有单位（纯数字）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '已知线段 AB = 8 cm，M 是 AB 的中点，则 AM = ______ cm。',
          answers: [['4', '４']],
          explanation: 'AM = 1/2 AB = 4 cm。'
        },
        {
          type: 'fill',
          q: '已知 AM = 3 cm，MB = 3 cm，且 M 在线段 AB 上，则 AB = ______ cm。',
          answers: [['6', '６']],
          explanation: 'AB = AM + MB = 3 + 3 = 6 cm。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 如果 AM = MB，则 M 是 AB 的中点', 'B. 如果 M 是 AB 的中点，则 AM = MB = 1/2 AB', 'C. 延长线段 AB 到 C，使 BC = AB，则 B 是 AC 的中点', 'D. 以上都正确'],
          answer: 1,
          explanation: '选 B。A 错误（A、M、B 不一定在同一直线上）；C 错误（B 是 AC 的中点需要 AB=BC 且 A、B、C 共线）。'
        },
        {
          type: 'fill',
          q: '已知 AB = 15 cm，M 是 AB 的中点，N 是 MB 的中点，则 AN = ______ cm。',
          answers: [['11.25', '45/4', '11又1/4']],
          explanation: 'AM = 7.5 cm，MB = 7.5 cm，NB = 3.75 cm，AN = AB - NB = 15 - 3.75 = 11.25 cm。'
        }
      ]
    }
  ]
};

// ===== 4.3 角及其度量 =====
SECTION_DATA['ch4-3'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>角的定义</strong>：由两条有公共端点的射线组成的图形叫做角。</p>'
               +'<p><strong>角的度量单位</strong>：1° = 60\'（分），1\' = 60"（秒）。</p>'
               +'<p><strong>角的分类</strong>：</p>'
               +'<ul>'
               +'<li>锐角：0° < 角 < 90°</li>'
               +'<li>直角：角 = 90°</li>'
               +'<li>钝角：90° < 角 < 180°</li>'
               +'<li>平角：角 = 180°</li>'
               +'<li>周角：角 = 360°</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例3：</strong>把 25.45° 用度、分、秒表示。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：25.45° = 25° + 0.45°</p>'
               +'<p>0.45° = 0.45 × 60\' = 27\'</p>'
               +'<p>所以 25.45° = <strong>25°27\'0"</strong></p>'
               +'<p>💡 注意：0.45° = 27\'，不是 45\'！</p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>角度换算是<strong>60 进制</strong>，不是 10 进制！1° = 60\'，不是 100\'。</li>'
               +'<li>把度化成分或秒时，要<strong>乘</strong>60；把秒或分化成度时，要<strong>除以</strong>60。</li>'
               +'<li>锐角 < 90°，不要写成 ≤ 90°（等于 90° 是直角）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '把 38.6° 用度、分表示：______°______\'。',
          answers: [['38', '３８'], ['36', '３６']],
          explanation: '0.6° = 0.6×60\' = 36\'，所以 38.6° = 38°36\'。'
        },
        {
          type: 'fill',
          q: '把 45°30\' 化成度：______°。',
          answers: [['45.5', '45又1/2', '45']],
          explanation: '30\' = 30/60° = 0.5°，所以 45°30\' = 45.5°。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 锐角大于 90°', 'B. 1° = 100′', 'C. 钝角大于 90° 且小于 180°', 'D. 平角就是一条直线'],
          answer: 2,
          explanation: '选 C。A 错误（锐角小于 90°）；B 错误（1°=60′）；D 错误（平角有顶点，不是直线）。'
        },
        {
          type: 'fill',
          q: '把 90° 化成度、分、秒：______°______\'______"。',
          answers: [['90', '９０'], ['0', '０', '0'], ['0', '０', '0']],
          explanation: '90° = 90°0\'0"。'
        }
      ]
    }
  ]
};

// ===== 4.4 角的比较与应用 =====
SECTION_DATA['ch4-4'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>角的大小比较</strong>：</p>'
               +'<p>- <strong>度量法</strong>：量出角度，直接比较</p>'
               +'<p>- <strong>叠合法</strong>：把一个角画在另一个角上面，使顶点重合、一边重合，看另一边的位置</p>'
               +'<p><strong>角平分线的定义</strong>：从一个角的顶点出发，把这个角分成<strong>两个相等的角</strong>的射线，叫做这个角的平分线。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例4：</strong>已知 OC 是 ∠AOB 的平分线，∠AOB = 60°，求 ∠BOC 的度数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：因为 OC 是 ∠AOB 的平分线，</p>'
               +'<p>所以 ∠BOC = 1/2 ∠AOB = 1/2 × 60° = <strong>30°</strong>。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：已知 ∠AOC = 25°，OC 是 ∠AOB 的平分线，求 ∠AOB。</p>'
               +'<p style="color:#888;margin-left:12px">答：∠AOB = 2 × ∠AOC = <strong>50°</strong>。</p>'
               +'<p><strong>变化2</strong>：已知 ∠AOB = 80°，OD 是 ∠AOC 的平分线，OE 是 ∠COB 的平分线，求 ∠DOE。</p>'
               +'<p style="color:#888;margin-left:12px">答：∠DOE = 1/2 ∠AOB = <strong>40°</strong>（无论 C 在哪里，只要 OD、OE 是平分线）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>角平分线把一个角分成两个<strong>相等</strong>的角，不是分成两个直角！</li>'
               +'<li>只有平角的平分线才把角分成两个直角（90°）。</li>'
               +'<li>表述角时要写清楚三个字母（如 ∠AOB），不要只写一个字母（除非没有歧义）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '已知 OC 是 ∠AOB 的平分线，∠AOB = 80°，则 ∠AOC = ______°。',
          answers: [['40', '４０']],
          explanation: '∠AOC = 1/2 × 80° = 40°。'
        },
        {
          type: 'fill',
          q: '已知 ∠AOC = 30°，OC 是 ∠AOB 的平分线，则 ∠AOB = ______°。',
          answers: [['60', '６０']],
          explanation: '∠AOB = 2 × 30° = 60°。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 角平分线把角分成两个直角', 'B. 如果两个角相等，则它们的角平分线也相等', 'C. 角平分线是一条射线', 'D. 平角没有角平分线'],
          answer: 2,
          explanation: '选 C。A 错误（只有平角的平分线分两个直角）；B 错误（角平分线是射线，不能说相等）；D 错误。'
        },
        {
          type: 'fill',
          q: '已知 ∠AOB = 120°，OC 是 ∠AOB 的平分线，OD 是 ∠BOC 的平分线，则 ∠AOD = ______°。',
          answers: [['90', '９０', '+90']],
          explanation: '∠BOC = 60°，∠COD = 30°，∠AOD = ∠AOC + ∠COD = 60°+30° = 90°。'
        }
      ]
    }
  ]
};

// ===== 4.5 画角的和、差与角的平分线 =====
SECTION_DATA['ch4-5'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>角的和</strong>：∠AOC = ∠AOB + ∠BOC（OB 在 ∠AOC 内部）。</p>'
               +'<p><strong>角的差</strong>：∠AOB = ∠AOC - ∠BOC（OB 在 ∠AOC 内部）。</p>'
               +'<p><strong>角的平分线</strong>：若 OC 平分 ∠AOB，则 ∠AOC = ∠COB = 1/2 ∠AOB。</p>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例5：</strong>已知 ∠AOB = 70°，∠BOC = 30°，OD 平分 ∠AOC，求 ∠BOD 的度数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：∠AOC = ∠AOB + ∠BOC = 70° + 30° = 100°</p>'
               +'<p>因为 OD 平分 ∠AOC，</p>'
               +'<p>所以 ∠COD = 1/2 ∠AOC = 50°</p>'
               +'<p>∠BOD = ∠COD - ∠BOC = 50° - 30° = <strong>20°</strong></p>'
               +'</div>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>计算角度的加减时，要注意<strong>60 进制</strong>进位！</li>'
               +'<li>∠AOC = ∠AOB + ∠BOC 成立的前提是 OB 在 ∠AOC 的<strong>内部</strong>。</li>'
               +'<li>如果 OC 不在 ∠AOB 内部，则 ∠AOC = |∠AOB - ∠BOC|。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '已知 ∠AOB = 50°，∠BOC = 30°，则 ∠AOC = ______°（OB 在 ∠AOC 内部）。',
          answers: [['80', '８０']],
          explanation: '∠AOC = ∠AOB + ∠BOC = 50°+30° = 80°。'
        },
        {
          type: 'fill',
          q: '已知 ∠AOC = 100°，∠AOB = 60°，则 ∠BOC = ______°（OB 在 ∠AOC 内部）。',
          answers: [['40', '４０']],
          explanation: '∠BOC = ∠AOC - ∠AOB = 100°-60° = 40°。'
        },
        {
          type: 'fill',
          q: '已知 ∠AOB = 80°，OC 平分 ∠AOB，OD 平分 ∠AOC，则 ∠COD = ______°。',
          answers: [['20', '２０']],
          explanation: '∠AOC = 40°，∠COD = 1/2 × 40° = 20°。'
        }
      ]
    }
  ]
};

// ===== 4.6 余角与补角 =====
SECTION_DATA['ch4-6'] = {
  layers: [
    {
      type: 'concept',
      icon: '📖',
      title: '基础概念',
      content: '<p><strong>余角</strong>：如果两个角的和等于 90°，这两个角叫做互为余角（简称互余）。</p>'
               +'<p><strong>补角</strong>：如果两个角的和等于 180°，这两个角叫做互为补角（简称互补）。</p>'
               +'<p><strong>性质</strong>：</p>'
               +'<ul>'
               +'<li>同角（或等角）的余角相等</li>'
               +'<li>同角（或等角）的补角相等</li>'
               +'</ul>'
    },
    {
      type: 'example',
      icon: '📝',
      title: '基础例题',
      content: '<p><strong>例6：</strong>一个角的补角是它的 3 倍，求这个角的度数。</p>'
               +'<button class="toggle-answer" onclick="toggleAnswer(this)">查看解析</button>'
               +'<div class="answer">'
               +'<p>解：设这个角为 x°，则它的补角为 (180 - x)°。</p>'
               +'<p>根据题意：180 - x = 3x</p>'
               +'<p>解方程：180 = 4x，x = <strong>45°</strong></p>'
               +'<p>答：这个角是 45°。</p>'
               +'</div>'
    },
    {
      type: 'tips',
      icon: '💡',
      title: '题型变化',
      content: '<p><strong>变化1</strong>：一个角的余角是它的 2 倍，求这个角的度数。</p>'
               +'<p style="color:#888;margin-left:12px">答：设这个角为 x°，则 90 - x = 2x，解得 x = <strong>30°</strong>。</p>'
               +'<p><strong>变化2</strong>：∠A 与 ∠B 互余，∠A 与 ∠C 互余，则 ∠B 与 ∠C 的关系是 ______。</p>'
               +'<p style="color:#888;margin-left:12px">答：<strong>相等</strong>（同角的余角相等）。</p>'
    },
    {
      type: 'warn',
      icon: '⚠️',
      title: '易错提醒',
      content: '<ul>'
               +'<li>余角是两角之和为 90°，补角是两角之和为 180°。</li>'
               +'<li>"互余"和"互补"是指<strong>两个角的关系</strong>，不能单独说"一个角是余角"。</li>'
               +'<li>钝角的补角是一个锐角（因为 180° - 钝角 = 锐角）。</li>'
               +'</ul>'
    },
    {
      type: 'practice',
      icon: '✏️',
      title: '即时练习',
      exercises: [
        {
          type: 'fill',
          q: '一个角是 35°，它的余角是 ______°。',
          answers: [['55', '５５']],
          explanation: '余角 = 90° - 35° = 55°。'
        },
        {
          type: 'fill',
          q: '一个角是 120°，它的补角是 ______°。',
          answers: [['60', '６０']],
          explanation: '补角 = 180° - 120° = 60°。'
        },
        {
          type: 'choice',
          q: '下列说法正确的是（ ）',
          options: ['A. 相等的角一定互余', 'B. 互余的两个角一定都是锐角', 'C. 一个角的余角一定小于它的补角', 'D. 补角一定大于余角'],
          answer: 1,
          explanation: '选 B。互余的两角之和=90°，所以每个角都小于90°（锐角）。A错误；C错误（如30°的余角=60°，补角=150°，确实余角<补角，但这不是"一定"的情况——需要证明）；D错误（钝角没有余角）。'
        },
        {
          type: 'fill',
          q: '一个角的补角是 125°，则它的余角是 ______°。',
          answers: [['35', '３５']],
          explanation: '这个角 = 180°-125° = 55°，余角 = 90°-55° = 35°。'
        },
        {
          type: 'fill',
          q: '∠A 与 ∠B 互补，∠A 与 ∠C 互补，则 ∠B ______ ∠C（填"="或"≠"）。',
          answers: [['=']],
          explanation: '同角的补角相等，所以 ∠B = ∠C。'
        }
      ]
    }
  ]
};
