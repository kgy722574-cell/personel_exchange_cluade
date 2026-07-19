// =========================================================
// 행정정보 통합관리법 · 조문 검색 아카이브
// =========================================================

// 조항 데이터 (조항데이터.json 내용을 그대로 임베드하여
// file:// 로 열어도 fetch 없이 바로 동작하도록 함)
const lawData = [
  { "조": "제1조", "제목": "목적", "본문": "이 법은 행정정보의 통합관리와 공동활용에 관한 기본적인 사항을 정함으로써 행정의 효율성과 국민의 편익 증진에 이바지함을 목적으로 한다." },
  { "조": "제2조", "제목": "정의", "본문": "이 법에서 사용하는 용어의 뜻은 다음 각 호와 같다.\n1. \"행정정보\"란 「전자정부법」 제2조제6호에 따른 행정정보를 말한다.\n2. \"공동활용\"이란 행정기관 간 행정정보를 상호 제공하여 사용하는 것을 말한다.\n3. \"통합관리\"란 「공공기록물 관리에 관한 법률」 제3조에 따른 기록물의 일부로 행정정보를 통합 관리하는 것을 말한다.\n4. \"데이터 표준\"이란 행정정보의 공동활용을 위한 형식·코드·식별자에 관한 표준을 말한다." },
  { "조": "제3조", "제목": "다른 법률과의 관계", "본문": "행정정보의 통합관리 및 공동활용에 관하여 다른 법률에 특별한 규정이 있는 경우를 제외하고는 이 법에서 정하는 바에 따른다. 특히 「개인정보 보호법」, 「공공데이터의 제공 및 이용 활성화에 관한 법률」, 「지능정보화 기본법」에 따른 사항은 해당 법률을 우선 적용한다." },
  { "조": "제4조", "제목": "국가 등의 책무", "본문": "국가와 지방자치단체는 행정정보의 통합관리와 공동활용을 위하여 필요한 시책을 수립하여야 한다. 행정안전부장관은 그 시책을 종합적으로 조정하며, 자세한 사항은 대통령령으로 정한다.\n\n       제2장 기본계획 및 추진체계" },
  { "조": "제5조", "제목": "기본계획의 수립", "본문": "① 행정안전부장관은 행정정보 통합관리 기본계획을 5년마다 수립하여야 한다.\n② 기본계획에는 다음 각 호의 사항을 포함하여야 한다.\n1. 행정정보 통합관리의 기본방향\n2. 행정정보 공동활용의 활성화 방안\n3. 「전자정부법」 제3조의 행정기관 정보화 시책과의 연계\n4. 그 밖에 대통령령으로 정하는 사항" },
  { "조": "제6조", "제목": "시행계획의 수립", "본문": "행정기관의 장은 매년 시행계획을 수립하여야 하며, 그 결과를 행정안전부장관에게 보고하여야 한다. 시행계획의 형식과 절차는 대통령령으로 정한다." },
  { "조": "제7조", "제목": "공동활용 협의회", "본문": "행정정보 공동활용에 관한 사항을 협의하기 위하여 행정안전부에 행정정보 공동활용 협의회를 둔다. 협의회의 구성과 운영에 필요한 사항은 대통령령으로 정한다.\n\n       제3장 공동활용" },
  { "조": "제8조", "제목": "공동활용 신청", "본문": "행정기관의 장은 다른 행정기관이 보유한 행정정보를 활용하려는 경우에는 행정안전부장관에게 신청하여야 한다." },
  { "조": "제9조", "제목": "공동활용 승인", "본문": "행정안전부장관은 신청을 받은 경우 「개인정보 보호법」 제17조에 따른 절차를 거쳐 30일 이내에 승인 여부를 결정하여야 한다." },
  { "조": "제10조", "제목": "보안 조치", "본문": "공동활용 시 행정정보의 안전성 확보를 위하여 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 「개인정보 보호법」에서 정하는 보안 조치를 적용하여야 한다.\n\n       제4장 데이터 표준화" },
  { "조": "제11조", "제목": "데이터 표준", "본문": "행정안전부장관은 데이터 표준을 정하여 고시할 수 있다. 데이터 표준의 적용 범위와 시기는 대통령령으로 정한다." },
  { "조": "제12조", "제목": "표준 적용 의무", "본문": "행정기관은 행정정보를 생산·관리·활용할 때 제11조에 따른 데이터 표준을 따라야 한다.\n\n       제5장 감독·벌칙" },
  { "조": "제13조", "제목": "실태조사", "본문": "행정안전부장관은 매년 행정정보 통합관리 실태를 조사하여 그 결과를 공개한다." },
  { "조": "제14조", "제목": "과태료", "본문": "다음 각 호의 어느 하나에 해당하는 자에게는 1천만원 이하의 과태료를 부과한다.\n1. 제8조를 위반하여 승인 없이 공동활용한 자\n2. 제12조에 따른 데이터 표준을 정당한 사유 없이 위반한 자\n\n       부 칙 <개정 2026. 6. 1.>" },
  { "조": "제15조", "제목": "시행일", "본문": "이 법은 2026년 7월 1일부터 시행한다." }
];

// ---------------------------------------------------------
// DOM 참조
// ---------------------------------------------------------
const searchInput   = document.getElementById('search-input');
const searchClear   = document.getElementById('search-clear');
const resultsPanel  = document.getElementById('results-panel');
const resultCountEl = document.getElementById('result-count');
const resultQueryEl = document.getElementById('result-query');
const resultsList   = document.getElementById('results-list');
const gridPanel     = document.getElementById('grid-panel');
const cardGrid      = document.getElementById('card-grid');

const detailOverlay = document.getElementById('detail-overlay');
const detailPage     = detailOverlay.querySelector('.detail-page');
const detailClose   = document.getElementById('detail-close');
const detailJoNum   = document.getElementById('detail-jo-num');
const detailTitle   = document.getElementById('detail-title');
const detailBody    = document.getElementById('detail-body');

let lastFocusedEl = null;

// ---------------------------------------------------------
// 유틸
// ---------------------------------------------------------
function escapeHtml(str){
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeRegExp(str){
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 본문 전체에서 키워드가 등장하는 모든 위치를 찾는다 (대소문자 무시)
function findMatches(text, query){
  if(!query) return [];
  const re = new RegExp(escapeRegExp(query), 'gi');
  const matches = [];
  let m;
  while((m = re.exec(text)) !== null){
    matches.push(m.index);
    if(m.index === re.lastIndex) re.lastIndex++; // 무한루프 방지
  }
  return matches;
}

// 키워드 중심 앞/뒤 10글자를 잘라 하이라이트된 스니펫 HTML을 만든다
function buildSnippet(text, query, index){
  const CONTEXT = 10;
  const flat = text.replace(/\s+/g, ' ').trim();
  // flat 문자열 기준으로 다시 위치를 찾는다 (개행 제거로 인덱스가 달라질 수 있으므로)
  const flatIndex = flat.toLowerCase().indexOf(query.toLowerCase());
  const pos = flatIndex >= 0 ? flatIndex : index;

  const start = Math.max(0, pos - CONTEXT);
  const end = Math.min(flat.length, pos + query.length + CONTEXT);

  let snippet = flat.slice(start, end);
  if(start > 0) snippet = '…' + snippet;
  if(end < flat.length) snippet = snippet + '…';

  // 스니펫 내에서 키워드를 하이라이트
  const re = new RegExp(escapeRegExp(query), 'i');
  const escaped = escapeHtml(snippet);
  const match = escaped.match(new RegExp(escapeRegExp(escapeHtml(query)), 'i'));

  if(match){
    return escaped.replace(new RegExp(escapeRegExp(escapeHtml(query)), 'i'), `<mark>${match[0]}</mark>`);
  }
  return escaped;
}

// 상세보기용: 본문 전체에서 키워드 모든 등장을 하이라이트
function highlightAll(text, query){
  const escapedText = escapeHtml(text);
  if(!query) return escapedText;
  const re = new RegExp(escapeRegExp(escapeHtml(query)), 'gi');
  return escapedText.replace(re, (m) => `<mark>${m}</mark>`);
}

// ---------------------------------------------------------
// 렌더링 : 전체 카드 그리드
// ---------------------------------------------------------
function renderGrid(){
  cardGrid.innerHTML = '';
  lawData.forEach((item, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'jo-card';
    card.style.animationDelay = `${Math.min(i * 25, 300)}ms`;
    card.setAttribute('data-jo', item.조);
    card.innerHTML = `
      <span class="jo-card__badge">${escapeHtml(item.조)}</span>
      <h3 class="jo-card__title">${escapeHtml(item.제목)}</h3>
      <p class="jo-card__preview">${escapeHtml(item.본문.replace(/\s+/g, ' ').trim())}</p>
    `;
    card.addEventListener('click', () => openDetail(item, card));
    cardGrid.appendChild(card);
  });
}

// ---------------------------------------------------------
// 렌더링 : 검색 결과 목록
// ---------------------------------------------------------
function renderResults(query){
  const q = query.trim();

  if(!q){
    resultsPanel.hidden = true;
    gridPanel.hidden = false;
    return;
  }

  const matchedItems = lawData
    .map(item => {
      const positions = findMatches(item.본문, q);
      const titleMatches = findMatches(item.제목, q);
      return { item, positions, titleMatches };
    })
    .filter(({ positions, titleMatches }) => positions.length > 0 || titleMatches.length > 0);

  resultCountEl.textContent = matchedItems.length;
  resultQueryEl.textContent = q;
  resultsPanel.hidden = false;
  gridPanel.hidden = true;

  resultsList.innerHTML = '';

  if(matchedItems.length === 0){
    const empty = document.createElement('li');
    empty.className = 'no-results';
    empty.textContent = `“${q}” 에 대한 검색 결과가 없습니다.`;
    resultsList.appendChild(empty);
    return;
  }

  matchedItems.forEach(({ item, positions }) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'result-item';

    let snippetHtml;
    let extraHtml = '';
    if(positions.length > 0){
      snippetHtml = buildSnippet(item.본문, q, positions[0]);
      if(positions.length > 1){
        extraHtml = `<span class="result-item__extra">외 ${positions.length - 1}건 더 일치</span>`;
      }
    } else {
      // 제목에서만 매칭된 경우
      snippetHtml = escapeHtml(item.본문.replace(/\s+/g, ' ').trim().slice(0, 40)) + '…';
    }

    btn.innerHTML = `
      <div class="result-item__head">
        <span class="result-item__jo">${escapeHtml(item.조)}</span>
        <span class="result-item__title">${escapeHtml(item.제목)}</span>
      </div>
      <p class="result-item__snippet">${snippetHtml}${extraHtml}</p>
    `;
    btn.addEventListener('click', () => openDetail(item, btn, q));
    li.appendChild(btn);
    resultsList.appendChild(li);
  });
}

// ---------------------------------------------------------
// 상세보기 열기 / 닫기
// ---------------------------------------------------------
function openDetail(item, triggerEl, query){
  lastFocusedEl = triggerEl || document.activeElement;
  detailJoNum.textContent = item.조;
  detailTitle.textContent = item.제목;
  detailBody.innerHTML = query ? highlightAll(item.본문, query) : escapeHtml(item.본문);

  detailOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  detailClose.focus();
}

function closeDetail(){
  detailOverlay.hidden = true;
  document.body.style.overflow = '';
  if(lastFocusedEl) lastFocusedEl.focus();
}

detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', (e) => {
  if(e.target === detailOverlay) closeDetail();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && !detailOverlay.hidden) closeDetail();
});

// ---------------------------------------------------------
// 검색 입력 이벤트
// ---------------------------------------------------------
searchInput.addEventListener('input', () => {
  const q = searchInput.value;
  searchClear.hidden = q.length === 0;
  renderResults(q);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.hidden = true;
  renderResults('');
  searchInput.focus();
});

// ---------------------------------------------------------
// 초기화
// ---------------------------------------------------------
renderGrid();
renderResults('');
