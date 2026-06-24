import os

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Annotated, Literal

router = APIRouter()

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODEL = "llama-3.3-70b-versatile"

KNOWLEDGE_BASE = """
# RANK SPIDERS — DIGITAL MARKETING AGENCY
Rank Spiders is a digital marketing and SEO agency based in Punjab, India (Office No. 22, Ground Floor,
D-152, Phase 8, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071, India).
Founded by Kartik Bhalla, the agency has 8+ years of experience and has worked with 200+ clients —
from local Punjab startups to national e-commerce brands.

Contact: phone +91 99883-57092, email contact@rankspiders.com, contact form at /contact-us.

## Services
- SEO (Search Engine Optimization) — technical SEO, on-page SEO, link building, local SEO
- Paid Ads (Google Ads / Meta Ads / PPC)
- Content Marketing (SEO writing, content strategy, blogging)
- Social Media Marketing (Instagram, LinkedIn, YouTube, Facebook)
- Web Development
- Consultancy / Digital marketing strategy consulting
Each service has its own page under rankspiders.com/services/<service>.

## Free SEO Tools (lead magnets, available at /tools)
- SEO Audit — full on-page SEO audit (title, meta, headings, canonical, images, OG tags, speed, robots)
- Page Speed Checker
- Keyword Density Analyzer
- Robots.txt Tester
- Sitemap Validator
- Meta Tag Extractor
- Rank Tracker — full keyword rank tracking dashboard with competitor analysis and history charts
All tools are free to use on the website.

## How to get started / book a consultation
Visitors can fill out the contact form on the website, use the lead popup, or call/email directly.
The team typically follows up within a couple of business hours.

---

# RANK SPIDERS ACADEMY — EDUCATION ARM
RankSpiders Academy is the education arm of RankSpiders Digital Agency, teaching practical digital
marketing skills using the agency's own real-world frameworks. It is personally led by founder Kartik
Bhalla — there is no separate instructor team yet.

## Offline Job-Ready Program (flagship offering, currently the main active program)
- In-person, hands-on training at the RankSpiders office, working on real, live client projects.
- Students choose a specialization track.
- Performance is evaluated throughout the program, not just at the end.
- Graduates receive a Certificate + Experience Letter documenting real client work completed.
- A full-time job offer at RankSpiders is POSSIBLE if a role is open and the student's performance
  fits — but this is never guaranteed.
- Attendance is mandatory since it's hands-on, in-person training.
- Seats per batch are intentionally limited for hands-on attention; applicants should apply early.
- Exact batch duration, daily hours, and fees are confirmed individually during the application call
  and depend on the chosen specialization — the chatbot should NOT invent specific numbers, durations,
  or prices for this program. Direct users to apply at /program#apply-form or contact the team for exact
  figures.
- No strict degree or age requirement — willingness to learn and consistent attendance matter most;
  some specializations may recommend a certain experience level.
- Application process: apply online -> short screening conversation with the team to check fit ->
  seat confirmed -> requirements (laptop/software) shared after confirmation.
- Specialization switches are considered case-by-case, early in the program — talk to the team ASAP.

## Online Courses (COMING SOON — not yet launched, not yet purchasable)
These are planned self-paced courses for learners who can't train in person. They are NOT live yet.
Pricing and launch dates have not been announced. Do not state or imply a specific price or date —
direct interested users to join the waitlist on the Online Courses page.
Planned course catalogue (subject to change before launch):
1. SEO Mastery: Beginner to Expert — on-page, technical & off-page SEO, keyword research, link building
2. Google Ads & PPC Masterclass — Search, Display, Shopping, Performance Max, conversion tracking
3. Content Marketing Strategy — content planning, SEO writing, distribution, ROI measurement
4. Social Media Marketing Pro — Instagram, LinkedIn, YouTube growth and paid social
5. Technical SEO Deep Dive (advanced) — Core Web Vitals, structured data, JS SEO, log file analysis
6. Digital Marketing Complete Bootcamp — full A-Z bundle covering SEO, Ads, Social, Content, Analytics

## Academy values
Transparency, Practical Learning, Community, Results-Focused, Excellence, Student-First (refund if a
course doesn't deliver value).

## Founder
Kartik Bhalla — Founder & CEO of RankSpiders, Digital Marketing Strategist & Educator, 8+ years
experience, 200+ clients served, personally leading the Academy.

## Key links
- RankSpiders agency website: https://rankspiders.com
- RankSpiders Academy website: https://academy.rankspiders.com
- Academy Offline Program page: https://academy.rankspiders.com/program
- Academy Online Courses page: https://academy.rankspiders.com/courses
"""

SYSTEM_PROMPT = f"""You are the official assistant for RankSpiders (a digital marketing agency) and
RankSpiders Academy (its education arm, currently focused on the offline program; online courses are
coming soon). Answer ONLY using the knowledge base below. Be friendly, concise, and helpful.

Hard rules:
- ONLY answer questions about RankSpiders, RankSpiders Academy, their services, tools, courses, the
  offline program, or how to get in touch / apply. Do not answer questions unrelated to RankSpiders or
  the Academy (general knowledge, coding help, other companies, etc.) — politely decline and steer the
  conversation back to RankSpiders/Academy topics.
- Never invent facts, prices, dates, or numbers that are not in the knowledge base. If something isn't
  in the knowledge base (e.g. exact program fees, exact batch dates, online course pricing), say it is
  confirmed individually / announced later, and point the user to the right next step (apply, contact,
  or waitlist).
- Keep answers short — a few sentences, not essays. Use the user's question to decide if they mean the
  agency or the academy when ambiguous.
- Links: when your answer is mainly about the RankSpiders agency (services, free tools, the company
  itself), include the link https://rankspiders.com. When your answer is mainly about the Academy
  (program, courses, applying), include the link https://academy.rankspiders.com (or the more specific
  page from "Key links" if relevant, e.g. the Program or Courses page). Place the link on its own line
  at the end of the answer.
- Formatting: write in short paragraphs (1-3 sentences) separated by a blank line. When listing multiple
  items (services, courses, steps), put each item on its own line starting with "- ". Use **double
  asterisks** only around a handful of key terms you want to stand out. Do not use markdown headers,
  numbered lists, or code blocks.

Knowledge base:
{KNOWLEDGE_BASE}
"""


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: Annotated[str, Field(max_length=2000)]


class ChatRequest(BaseModel):
    messages: Annotated[list[ChatMessage], Field(min_length=1, max_length=20)]


@router.post("/chat")
async def chat(body: ChatRequest):
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY not configured")

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages += [{"role": m.role, "content": m.content} for m in body.messages]

    try:
        async with httpx.AsyncClient(timeout=30) as client:
            res = await client.post(
                GROQ_URL,
                headers={"Authorization": f"Bearer {api_key}"},
                json={
                    "model": GROQ_MODEL,
                    "messages": messages,
                    "temperature": 0.4,
                    "max_tokens": 400,
                },
            )
        res.raise_for_status()
        data = res.json()
        reply = data["choices"][0]["message"]["content"]
    except httpx.HTTPStatusError as e:
        print(f"Groq API error: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Chat service is temporarily unavailable.")
    except Exception as e:
        print(f"Chat error: {e}")
        raise HTTPException(status_code=502, detail="Chat service is temporarily unavailable.")

    return {"reply": reply}
