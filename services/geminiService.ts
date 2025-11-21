import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMix = async (eraA: string, eraB: string): Promise<string> => {
  const prompt = `
    당신은 전문 크리에이티브 디렉터입니다.
    [${eraA}]의 조형적 특징과 [${eraB}]의 조형적 특징을 결합하여 새로운 디자인 컨셉을 제안해주세요.
    
    결과는 다음 형식으로 간단명료하게(Bullet point) 한국어로 작성해주세요:
    1. **비주얼 컨셉**: (두 스타일이 섞인 구체적인 시각 묘사)
    2. **추천 컬러**: (두 시대의 컬러를 섞은 3가지 메인 컬러코드와 이름)
    3. **활용 아이디어**: (포스터, 로고, 패키지 등 현대적 적용 예시 1개)
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "결과를 생성하지 못했습니다.";
  } catch (error) {
    console.error("Gemini Mix Error:", error);
    return "AI 서비스 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

export const reinterpretDecade = async (eraName: string): Promise<string> => {
  const prompt = `
    '${eraName}' 스타일을 2025년의 트렌디한 디자인(웹, 앱, 포스터 등)으로 재해석한다면?
    촌스럽지 않게 핵심 요소(형태, 질감, 컬러)만 차용하여 현대적으로 적용할 수 있는 구체적인 팁 3가지를 알려주세요.
    마크다운 형식으로 깔끔하게 정리해 주세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "결과를 생성하지 못했습니다.";
  } catch (error) {
    console.error("Gemini Reinterpret Error:", error);
    return "AI 서비스 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};