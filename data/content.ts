import { DecadeContent, SelectOption } from '../types';

export const eraOptions: SelectOption[] = [
  { value: "1920년대 아르데코", label: "1920s Art Deco" },
  { value: "1930년대 스트림라인", label: "1930s Streamline" },
  { value: "1940년대 세계대전", label: "1940s WWII" },
  { value: "1950년대 미드센추리", label: "1950s Mid-Century" },
  { value: "1960년대 사이키델릭", label: "1960s Psychedelic" },
  { value: "1970년대 펑크", label: "1970s Punk" },
  { value: "1980년대 멤피스", label: "1980s Memphis" },
  { value: "1990년대 그런지", label: "1990s Grunge" },
  { value: "2000년대 Y2K", label: "2000s Y2K" },
  { value: "2010년대 플랫 디자인", label: "2010s Flat Design" },
];

export const decadesData: DecadeContent[] = [
  {
    id: "decade-1920",
    year: "1920s",
    subtitle: "Jazz Age / Art Deco",
    description: "1차대전 직후 경제 호황과 낙관이 팽배했던 ‘재즈 시대(Jazz Age)’. 아르데코의 화려함이 도시를 수놓았고, 플래퍼(Flapper)들은 짧은 스커트를 입고 춤을 췄습니다. 금주법으로 인해 스피크이지 문화가 발달했던 이중적인 매력의 시대입니다.",
    researchKit: {
      images: [
        "아르데코 건축물 외관",
        "플래퍼 패션의 전신 사진",
        "스피크이지 재즈 클럽 내부"
      ],
      keywords: [
        "“1920s Art Deco building”",
        "“Flapper dress 1920s”",
        "“Speakeasy 1920s jazz club”"
      ],
      vibe: "대칭적 패턴, 금속적 장식, 검정-금의 대비. 짧은 헤어·드레스. 낮은 조도의 바(bar)."
    },
    designColor: {
      colors: [
        { hex: "#000000", name: "Black" },
        { hex: "#FFD700", name: "Gold" }
      ],
      text: [
        "**그래픽 스타일: Art Deco (아르데코)**",
        "**블랙 & 골드:** 검정색은 도시의 신비와 격조를, 금속색(골드)은 산업 발전과 낭만적 미래를 상징하며 아르데코의 화려함을 완성했습니다.",
        "**특징:** 대담한 기하학적 무늬, 반복되는 대칭 구조, 강렬한 선."
      ]
    },
    popCulture: {
      icons: "루이 암스트롱, 듀크 엘링턴 (재즈), 찰리 채플린 (영화)",
      youthStyle: "플래퍼(Flapper) - 짧은 단발과 드레스, 옥스퍼드 백(남성 와이드 팬츠), 찰스턴 댄스."
    },
    styleCulture: [
      "**패션:** 허리선이 낮아진 드레스, 보터 모자.",
      "**음악/영화:** 재즈 황금기, 유성영화 등장.",
      "**서브컬처:** 할렘 르네상스, 스피크이지, 갱스터."
    ],
    context: [
      "**역사:** 대공황 전의 호황, 금주법.",
      "**심리:** 전쟁 후 해방감과 향락주의.",
      "**분위기:** 반항적이고 대담, 소비주의적."
    ]
  },
  {
    id: "decade-1930",
    year: "1930s",
    subtitle: "Depression Era / Swing",
    description: "대공황의 암울함 속에서도 회복의 희망을 노래했던 시대. 거리는 잿빛이었지만 스크린 속은 화려했고, 파스텔톤의 색조가 퍼져나갔습니다. 실용성과 절제가 미덕이었던 시기입니다.",
    researchKit: {
      images: [
        "대공황 거리 풍경(흑백)",
        "1930s 할리우드 배우 사진",
        "스윙재즈 빅밴드 공연"
      ],
      keywords: [
        "“Great Depression street”",
        "“Dorothea Lange”",
        "“Swing jazz band 1930s”"
      ],
      vibe: "장대코트와 중절모. 우울한 거리 분위기와 화려한 헐리우드의 극명한 대비."
    },
    designColor: {
      colors: [
        { hex: "#808080", name: "Gray" },
        { hex: "#93dfb8", name: "Seafoam Green" }
      ],
      text: [
        "**그래픽 스타일: Streamline Moderne (스트림라인 모던)**",
        "**그레이 & 시냇물색 녹색:** 대공황의 잿빛 회색과, 회복의 희망을 담은 부드러운 파스텔톤의 대비.",
        "**특징:** 속도감을 표현하는 유선형 디자인, 수평선 강조, 산업 디자인의 발달."
      ]
    },
    popCulture: {
      icons: "클라크 게이블, 바바라 스탠윅 (배우), 스윙 재즈 밴드 리더들.",
      youthStyle: "'10대(Teenager)' 개념의 태동기. 가난 속에서 음악/영화/스포츠로 소속감 찾기."
    },
    styleCulture: [
      "**패션:** 실용성 강조. 중절모, 긴 스커트.",
      "**음악/영화:** 스윙 재즈, 멜로드라마(바람과 함께 사라지다).",
      "**스타일:** 스트림라인 모던(유선형)."
    ],
    context: [
      "**역사:** 세계 대공황, 파시즘 대두.",
      "**심리:** 불안 속에서 희망(영화)을 갈구함.",
      "**분위기:** 실용과 절제, 소박한 즐거움."
    ]
  },
  {
    id: "decade-1940",
    year: "1940s",
    subtitle: "WWII & New Look",
    description: "전시와 전후 복구가 교차한 격변의 시기. 전반기에는 유니폼과 밀리터리 룩이, 후반기에는 디올의 '뉴 룩'으로 여성성이 극적으로 부활했습니다.",
    researchKit: {
      images: [
        "전쟁 프로파간다 포스터",
        "Rosie the Riveter",
        "Christian Dior 1947 New Look"
      ],
      keywords: [
        "“WWII propaganda poster”",
        "“Rosie the Riveter”",
        "“Dior New Look 1947”"
      ],
      vibe: "군용색(올리브), 절제미, 강인함. 전후 풍성한 스커트의 여성미."
    },
    designColor: {
      colors: [
        { hex: "#556B2F", name: "Olive Green" },
        { hex: "#F5F5DC", name: "Beige" }
      ],
      text: [
        "**그래픽 스타일: Propaganda Art (프로파간다 아트)**",
        "**올리브 그린 & 베이지:** 전시의 군국주의를 상징하는 올리브 그린과 전후의 안정을 뜻하는 베이지.",
        "**특징:** 대담하고 선동적인 타이포그래피, 메시지 전달 중심의 간결한 이미지."
      ]
    },
    popCulture: {
      icons: "프랭크 시나트라(초기 팬덤 문화), 험프리 보가트.",
      youthStyle: "'바비 삭서(Bobby Soxers)'. 소년들은 전쟁터로, 소녀들은 공장으로."
    },
    styleCulture: [
      "**패션:** 유틸리티(군복) -> 뉴 룩(여성성).",
      "**음악/영화:** 빅밴드, 전쟁 영화, 서부극.",
      "**서브컬처:** 재즈, 전후 록큰롤의 전조."
    ],
    context: [
      "**역사:** 2차 대전 종전, 한국 분단.",
      "**심리:** 단결과 희생 -> 승리의 기쁨과 안보 불안.",
      "**분위기:** 애국주의와 보수적 가치."
    ]
  },
  {
    id: "decade-1950",
    year: "1950s",
    subtitle: "Mid-century Modern / Rock’n’Roll",
    description: "전후 복구와 경제 호황 속 소비주의가 폭발한 시기. 파스텔톤 가전제품과 로큰롤이 대중문화를 이끌었습니다.",
    researchKit: {
      images: [
        "1950s 파스텔 가전제품",
        "마릴린 먼로·제임스 딘",
        "로큰롤 공연"
      ],
      keywords: [
        "“1950s pastel kitchen”",
        "“Elvis Presley”",
        "“Rock and roll 1950s”"
      ],
      vibe: "민트·핑크·크림색. 풍성한 스커트. 가족 중심의 행복."
    },
    designColor: {
      colors: [
        { hex: "#FFC0CB", name: "Baby Pink" },
        { hex: "#98FF98", name: "Mint Green" }
      ],
      text: [
        "**그래픽 스타일: Mid-Century Modern (미드센추리 모던) / Swiss Style (스위스 스타일)**",
        "**베이비 핑크 & 민트 그린:** 경제적 안정감과 낙천주의를 반영한 밝고 편안한 파스텔 톤.",
        "**특징:** 깔끔한 그리드 시스템, 산세리프 서체, 추상적 기하학 패턴."
      ]
    },
    popCulture: {
      icons: "엘비스 프레슬리 (로큰롤), 마릴린 먼로, 제임스 딘.",
      youthStyle: "테디 보이(Teddy Boy), 가죽 재킷과 청바지(그리서), 로큰롤 댄스."
    },
    styleCulture: [
      "**패션:** 주부의 풀 스커트, 남성의 세련된 정장.",
      "**음악/영화:** 로큰롤, 신경극, 뮤지컬 코미디.",
      "**서브컬처:** 비트 제너레이션."
    ],
    context: [
      "**역사:** 한국 전쟁, 냉전 심화.",
      "**심리:** 번영에 대한 낙관 vs 핵전쟁 공포.",
      "**분위기:** 환희와 안주 속 긴장감."
    ]
  },
  {
    id: "decade-1960",
    year: "1960s",
    subtitle: "Counterculture / Space Age / Psychedelic",
    description: "우주를 향한 '스페이스 에이지'의 실버와, 평화를 외치는 히피의 '사이키델릭' 컬러가 공존했던 독특한 시대입니다.",
    researchKit: {
      images: [
        "사이키델릭 록 페스티벌 포스터",
        "히피 패션·플라워 무브먼트",
        "스페이스 에이지 패션"
      ],
      keywords: [
        "“Psychedelic poster”",
        "“Hippie 1960s”",
        "“Space Age fashion”"
      ],
      vibe: "형광 컬러, 곡선 타이포. 미니 스커트. 평화·반전·자유."
    },
    designColor: {
      colors: [
        { hex: "#C0C0C0", name: "Silver" },
        { hex: "#FF4500", name: "Neon Orange" }
      ],
      text: [
        "**그래픽 스타일: Psychedelic Art (사이키델릭 아트) & Pop Art (팝아트)**",
        "**메탈릭 실버 & 형광 오렌지:** 미래지향적 기술 유토피아(실버)와 자연 회귀 본능(사이키델릭)의 충돌.",
        "**특징:** 왜곡된 타이포그래피, 환각적인 색채, 반복적인 실크스크린(앤디 워홀)."
      ]
    },
    popCulture: {
      icons: "비틀즈, 롤링 스톤즈, 밥 딜런.",
      youthStyle: "히피(자연주의, 장발), 모드(Mods, 깔끔한 수트). 우드스톡 페스티벌 세대."
    },
    styleCulture: [
      "**패션:** 미니스커트, 벨보텀, 스페이스 룩.",
      "**음악/영화:** 사이키델릭 록, 포크락, 반전 영화.",
      "**서브컬처:** 반문화(Counterculture) 운동."
    ],
    context: [
      "**역사:** 베트남 전쟁, 민권 운동, 달 착륙.",
      "**심리:** 기성세대에 대한 저항과 자유 갈망.",
      "**분위기:** 혁명, 평화, 창의성."
    ]
  },
  {
    id: "decade-1970",
    year: "1970s",
    subtitle: "Disco / Punk / Warm Earth Tones",
    description: "자유분방함과 개성 추구가 극단으로 향한 시대. 오일 쇼크 이후의 자연주의(어스톤)와 디스코/펑크의 화려함이 공존했습니다.",
    researchKit: {
      images: [
        "디스코 클럽 조명과 춤",
        "펑크 밴드 무대 사진",
        "70s 패턴·페이즐리·브라운 톤"
      ],
      keywords: [
        "“1970s disco”",
        "“Punk band 1970s”",
        "“Paisley pattern”"
      ],
      vibe: "주황·갈색, 따뜻한 조명. 벨보텀, 플랫폼 슈즈. 화려함과 반항."
    },
    designColor: {
      colors: [
        { hex: "#A0522D", name: "Earth Brown" },
        { hex: "#FF8C00", name: "Orange" }
      ],
      text: [
        "**그래픽 스타일: Punk DIY (펑크 DIY) & Early Post-Modernism**",
        "**어스 브라운 & 주황색:** 환경을 생각하는 자연주의적 열정(흙빛)과 히피의 연장선에 있는 선명한 개성.",
        "**특징:** 콜라주 기법, 찢어진 종이, 거친 텍스처, 버블 폰트."
      ]
    },
    popCulture: {
      icons: "ABBA (디스코), 레드 제플린 (록), 섹스 피스톨즈 (펑크).",
      youthStyle: "펑크족(안전핀, 찢어진 옷), 디스코 클러버(화려한 의상), 밴드 티셔츠."
    },
    styleCulture: [
      "**패션:** 디스코 vs 펑크 양분화.",
      "**음악/영화:** 블록버스터(스타워즈), 록발라드.",
      "**서브컬처:** 환경주의, 페미니즘."
    ],
    context: [
      "**역사:** 오일쇼크, 베트남 종전.",
      "**심리:** '나(Me)'에게 집중하는 시대.",
      "**분위기:** 힙한 자연주의와 경제적 긴장감."
    ]
  },
  {
    id: "decade-1980",
    year: "1980s",
    subtitle: "Neon / Digital / Power Fashion",
    description: "물질적 풍요와 기술 혁신의 시대. 선명한 네온 컬러와 파스텔이 부활했고, MTV와 비디오 게임이 문화를 주도했습니다.",
    researchKit: {
      images: [
        "네온 그리드 그래픽",
        "파워슈트 패션 사진",
        "아케이드 게임·MTV 이미지"
      ],
      keywords: [
        "“1980s neon grid”",
        "“Power suit 1980s”",
        "“Synthwave aesthetic”"
      ],
      vibe: "민트·네온 핑크. 어깨 패드. 비디오 시대와 테크노 낙관주의."
    },
    designColor: {
      colors: [
        { hex: "#98FF98", name: "Mint Green" },
        { hex: "#FF00FF", name: "Magenta" }
      ],
      text: [
        "**그래픽 스타일: Memphis Style (멤피스 스타일)**",
        "**민트 그린 & 네온:** 인공적이고 쨍한 파스텔. 기술적 낙관주의와 복고풍 개성을 상징.",
        "**특징:** 장난기 넘치는 기하학 패턴, 무질서한 배치, 비비드한 컬러."
      ]
    },
    popCulture: {
      icons: "마돈나, 마이클 잭슨, 듀란듀란 (MTV 스타).",
      youthStyle: "여피족(성공 지향), 힙합퍼(브레이크 댄스), 아케이드 게이머."
    },
    styleCulture: [
      "**패션:** 파워슈트, 레깅스, 형광 스니커즈.",
      "**음악/영화:** 신스팝, 헤비메탈, 액션 블록버스터.",
      "**서브컬처:** 비디오 게임, 아케이드."
    ],
    context: [
      "**역사:** 냉전 종식, 서울올림픽, 경제 호황.",
      "**심리:** \"Greed is Good\". 성공 과시와 물질 풍요.",
      "**분위기:** 극단적 자신감과 화려함."
    ]
  },
  {
    id: "decade-1990",
    year: "1990s",
    subtitle: "Minimalism / Grunge / Early Internet",
    description: "정보화의 시작과 냉전 종식. 화려함을 버리고 어둡고 짙은 색조, 낡은 듯한 그루지 스타일, 그리고 미니멀리즘이 유행했습니다.",
    researchKit: {
      images: [
        "그루지 밴드 사진",
        "초기 인터넷 UI 스크린샷",
        "90s 힙합/스트리트 패션"
      ],
      keywords: [
        "“Grunge band”",
        "“Windows 95 interface”",
        "“90s Minimalism”"
      ],
      vibe: "청록과 보라. 체크 셔츠와 루즈핏. 사이버 문화의 탄생."
    },
    designColor: {
      colors: [
        { hex: "#008080", name: "Teal" },
        { hex: "#8E4585", name: "Plum" }
      ],
      text: [
        "**그래픽 스타일: Grunge Typography (그런지 타이포그래피) & Anti-Design**",
        "**청록(Teal) & 자두색(Plum):** 디지털 시대의 차가움과 자연 회복의 욕망이 담긴 짙고 어두운 색조.",
        "**특징:** 깨진 글자, 불규칙한 레이아웃, 로우파이(Lo-fi) 그래픽."
      ]
    },
    popCulture: {
      icons: "너바나 (커트 코베인), 서태지와 아이들, 스파이스 걸스.",
      youthStyle: "X세대. 그루지 룩(낡은 체크셔츠), 힙합 패션(통 넓은 바지), PC통신."
    },
    styleCulture: [
      "**패션:** 그루지, 미니멀리즘, 힙합.",
      "**음악/영화:** 얼터너티브 록, 브릿팝.",
      "**서브컬처:** 레이브(Rave) 파티."
    ],
    context: [
      "**역사:** 인터넷 상용화, IMF 위기.",
      "**심리:** 정보 과부하, 세기말 불안.",
      "**분위기:** 과도기적, 실험적."
    ]
  },
  {
    id: "decade-2000",
    year: "2000s",
    subtitle: "Y2K / Chrome / Digital Pop",
    description: "디지털 팝과 소셜 미디어의 태동기. 테크노 레트로와 하이브리드 스타일이 유행하며, 선명한 팝 컬러와 메탈릭한 질감이 시대를 정의했습니다.",
    researchKit: {
      images: [
        "Y2K UI 그래픽",
        "로우라이즈/스키니 패션",
        "싸이월드/블로그 감성"
      ],
      keywords: [
        "“Y2K chrome design”",
        "“2000s low rise jeans”",
        "“Web 1.0 aesthetic”"
      ],
      vibe: "은색·핫핑크, 글로시 UI. 디지털 낙관주의."
    },
    designColor: {
      colors: [
        { hex: "#FF1493", name: "Deep Pink" },
        { hex: "#C0C0C0", name: "Silver" }
      ],
      text: [
        "**그래픽 스타일: Y2K Aesthetic (Y2K 에스테틱) & Skeuomorphism (스큐어모피즘)**",
        "**팝 컬러 & 메탈릭 실버:** 사이버펑크적 미학과 현대적 감각이 결합된 선명한 파스텔과 크롬 색상.",
        "**특징:** 입체감 있는 3D 버튼, 글로시한 질감, 반짝이는 효과."
      ]
    },
    popCulture: {
      icons: "브리트니 스피어스, 에미넴, 동방신기/빅뱅.",
      youthStyle: "싸이월드 감성, 이모(Emo) 키드, 스키니 진, 샤기컷."
    },
    styleCulture: [
      "**패션:** 로고 티셔츠, 스키니 진, 믹스매치.",
      "**음악/영화:** K팝 부상, 블록버스터 시리즈.",
      "**서브컬처:** 블로그, SNS, 게이밍."
    ],
    context: [
      "**역사:** 9/11 테러, 스마트폰 확산.",
      "**심리:** 연결 갈망, 정보 홍수 속 흥분.",
      "**분위기:** 기술 낙관주의, 엔터테인먼트."
    ]
  },
  {
    id: "decade-2010",
    year: "2010s",
    subtitle: "Flat Design / Social Media Era / Normcore",
    description: "모바일 혁명과 초연결 시대. 인스타그램 감성의 은은한 색조와 플랫 디자인이 지배했습니다. 과거를 재해석한 모던 레트로와 놈코어가 유행했습니다.",
    researchKit: {
      images: [
        "플랫 디자인 아이콘/앱 UI",
        "애슬레저/놈코어 패션",
        "유튜브/인플루언서 문화"
      ],
      keywords: [
        "“Flat design icons”",
        "“Normcore fashion”",
        "“Millennial pink”"
      ],
      vibe: "파스텔 블루·밀레니얼 핑크. 심플함. SNS 중심."
    },
    designColor: {
      colors: [
        { hex: "#F5F5DC", name: "Beige" },
        { hex: "#FFD1DC", name: "Millennial Pink" }
      ],
      text: [
        "**그래픽 스타일: Flat Design (플랫 디자인) & Material Design**",
        "**복고풍 베이지 & 밀레니얼 핑크:** 인스타그램 필터 감성의 따스한 베이지와 핑크. 현실의 안락함과 디지털 감성의 공존.",
        "**특징:** 그림자와 그라데이션 제거, 단순한 면과 선, 직관적 UI."
      ]
    },
    popCulture: {
      icons: "BTS, 블랙핑크, 테일러 스위프트, 마블 히어로.",
      youthStyle: "힙스터(Hipster), 놈코어, 유튜버/인플루언서 워너비, 젠더리스 룩."
    },
    styleCulture: [
      "**패션:** 놈코어, 애슬레저, 모던 레트로.",
      "**음악/영화:** 스트리밍 시대, 히어로물 전성기.",
      "**서브컬처:** Z세대 크리에이터(틱톡/유튜브)."
    ],
    context: [
      "**역사:** 스마트폰 일상화, 팬데믹.",
      "**심리:** 연결 갈망 vs 사생활 불안.",
      "**분위기:** 디지털 편리성과 피로감."
    ]
  }
];