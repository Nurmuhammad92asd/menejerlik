    );
  }

  /* RESULT */
  if (screen === "result" && currentLesson && testScore !== null) {
    const passed = testScore >= PASS_PERCENT;
    const earnedXP = calculateFoundationXP(testScore);

    return (
      <>
        <style>{styles}</style>
        <main className="sa-root"><div className="sa-lesson-screen">
          <div className="sa-content-card sa-result">
            <div className="sa-result-icon">{passed ? "🎉" : "🔄"}</div>
            <div style={{ color: passed ? "#86efac" : "#fbbf24", fontWeight: 900, letterSpacing: ".06em", fontSize: 12 }}>{passed ? "LESSON PASSED" : "KEEP PRACTICING"}</div>
            <div className="sa-result-score">{testScore}%</div>
            <p className="sa-small" style={{ maxWidth: 560, margin: "0 auto" }}>{passed ? "Ajoyib! Siz darsni muvaffaqiyatli yakunladingiz." : `Keyingi darsni ochish uchun kamida ${PASS_PERCENT}% natija kerak. Mashqlarni yana ko‘rib chiqing.`}</p>
            <div className="sa-result-grid">
              <div className="sa-result-stat"><strong>{testCorrect}</strong><span>To‘g‘ri javob</span></div>
              <div className="sa-result-stat"><strong>{currentLessonQuestions.length - testCorrect}</strong><span>Xato javob</span></div>
              <div className="sa-result-stat"><strong>{earnedXP}</strong><span>XP</span></div>
            </div>
            <div className="sa-xp">⭐ +{earnedXP} XP</div>

            {passed && nextLesson ? (
              <div style={{ marginTop: 24 }}>
                <div style={{ color: "#86efac", fontWeight: 950, marginBottom: 10 }}>🔓 NEXT LESSON UNLOCKED</div>
                <div className="sa-card" style={{ textAlign: "left", marginBottom: 12 }}><strong>{nextLesson.number}. {nextLesson.title}</strong><div className="sa-small" style={{ marginTop: 5 }}>{nextLesson.subtitle}</div></div>
                <button className="sa-action success" onClick={() => { setSelectedLessonId(nextLesson.id); resetTest(); setPracticeAnswers({}); setScreen("lesson"); }}>Continue Learning →</button>
              </div>
            ) : passed && foundationComplete ? (
              <button className="sa-action success" style={{ marginTop: 20 }} onClick={() => setScreen("foundation")}>🏆 Foundation Complete</button>
            ) : (
              <button className="sa-action" style={{ marginTop: 20 }} onClick={() => { resetTest(); setScreen("test"); }}>🔄 Try Again</button>
            )}
            <button className="sa-action secondary" style={{ marginTop: 9 }} onClick={() => setScreen("foundation")}>← Back to Lessons</button>
          </div>
        </div></main>
      </>
    );
  }

  return null;
}

/* =========================================================
   LESSON CONTENT AND SHARED UI
========================================================= */

function LessonContent({
  lesson,
  meta,
  practiceAnswers,
  setPracticeAnswers,
  onStartTest,
}: {
  lesson: any;
  meta: any;
  practiceAnswers: Record<number, string>;
  setPracticeAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  onStartTest: () => void;
}) {
  const [tab, setTab] = useState<LessonTab>("learn");
  const vocabulary = lesson.vocabulary ?? [];
  const grammar = lesson.grammar ?? [];
  const dialogue = meta.dialogue ?? [];
  const practice = meta.practice ?? [];
  const reading = lesson.reading ?? {};
  const writing = lesson.writing ?? {};

  return (
    <>
      <div className="sa-tabs">
        <Tab active={tab === "learn"} onClick={() => setTab("learn")} label="📖 Learn" />
        <Tab active={tab === "words"} onClick={() => setTab("words")} label="📚 Vocabulary" />
        <Tab active={tab === "grammar"} onClick={() => setTab("grammar")} label="🧠 Grammar" />
        <Tab active={tab === "speak"} onClick={() => setTab("speak")} label="🗣 Speak" />
        <Tab active={tab === "practice"} onClick={() => setTab("practice")} label="🧩 Practice" />
        <Tab active={tab === "reading"} onClick={() => setTab("reading")} label="📖 Reading" />
        <Tab active={tab === "writing"} onClick={() => setTab("writing")} label="✍️ Writing" />
      </div>

      {tab === "learn" && <>
        <div className="sa-content-card"><div className="sa-content-title">🎯 Today’s Mission</div><p className="sa-small">Mavzuni tushuning, yangi so‘zlarni o‘zlashtiring va ingliz tilida mustaqil gap tuzishga harakat qiling.</p></div>
        <div className="sa-content-card"><div className="sa-content-title">💡 Key Concepts</div>{grammar.length ? grammar.map((item: any) => <div key={item.id} className="sa-example"><strong>{item.title}</strong><div className="sa-small" style={{ marginTop: 5 }}>{item.explanation}</div></div>) : <div className="sa-empty">Ushbu dars uchun qo‘shimcha konseptlar tayyorlanmoqda.</div>}</div>
        <div className="sa-content-card"><div className="sa-content-title">✨ Examples</div>{(meta.examples ?? []).length ? (meta.examples ?? []).map((example: string, index: number) => <div className="sa-example" key={`${example}-${index}`}>{example}</div>) : <div className="sa-empty">Misollar mavjud emas.</div>}</div>
        <div className="sa-content-card"><div className="sa-content-title">🚀 Learning Strategy</div><div className="sa-feature-grid"><Feature icon="1️⃣" title="Understand" text="Avval qoidani tushuning."/><Feature icon="2️⃣" title="Practice" text="Mashqlarni bajaring."/><Feature icon="3️⃣" title="Produce" text="O‘zingiz gap tuzing."/></div></div>
      </>}

      {tab === "words" && <div className="sa-content-card"><div className="sa-content-title">📚 New Vocabulary</div>{vocabulary.length ? <div className="sa-word-grid">{vocabulary.map((word: any) => <div className="sa-word" key={word.id}><strong>{word.word}</strong>{word.phonetic && <span>{word.phonetic}</span>}<div style={{ color: "#cbd5e1", marginTop: 7, fontSize: 13 }}>{word.meaning}</div>{word.example && <div className="sa-small" style={{ marginTop: 7 }}>{word.example}</div>}</div>)}</div> : <div className="sa-empty">Vocabulary mavjud emas.</div>}</div>}

      {tab === "grammar" && <div className="sa-content-card"><div className="sa-content-title">🧠 Grammar Lab</div>{grammar.length ? grammar.map((item: any) => <div className="sa-card" style={{ marginBottom: 10 }} key={item.id}><strong>{item.title}</strong>{item.formula && <div className="sa-example">{item.formula}</div>}<p className="sa-small">{item.explanation}</p>{(item.examples ?? []).map((example: string, index: number) => <div className="sa-example" key={`${example}-${index}`}>{example}</div>)}</div>) : <div className="sa-empty">Grammar Lab ma’lumotlari mavjud emas.</div>}</div>}

      {tab === "speak" && <div className="sa-content-card"><div className="sa-content-title">🗣️ Real English Dialogue</div>{dialogue.length ? <div className="sa-dialogue">{dialogue.map((line: { speaker: string; text: string }, index: number) => <div className="sa-bubble" key={`${line.speaker}-${index}`}><div className="sa-bubble-label">{line.speaker}</div>{line.text}</div>)}</div> : <div className="sa-empty">Dialogue mavjud emas.</div>}<div className="sa-card" style={{ marginTop: 15 }}><strong>🎙 Speaking Mission</strong><p className="sa-small">Dialogni ovoz chiqarib o‘qing, so‘ng javoblarni mustaqil aytib ko‘ring.</p></div></div>}

      {tab === "practice" && <div className="sa-content-card"><div className="sa-content-title">🧩 Practice Arena</div>{practice.length ? practice.map((item: any, index: number) => {
        const selected = practiceAnswers[index];
        return <div className="sa-card" key={`${item.question}-${index}`} style={{ marginBottom: 10 }}>
          <div className="sa-level-number">TASK {index + 1}</div><strong>{item.question}</strong>
          {item.options?.length > 0 && <div className="sa-options" style={{ marginTop: 10 }}>{item.options.map((option: string) => <button key={option} type="button" className={`sa-option ${selected === option ? "selected" : ""}`} onClick={() => setPracticeAnswers((old) => ({ ...old, [index]: option }))}>{option}</button>)}</div>}
          {selected && <div className="sa-small" style={{ color: selected === item.answer ? "#86efac" : "#fbbf24", marginTop: 10 }}>{selected === item.answer ? "✓ To‘g‘ri javob." : "Javobingizni yana tekshiring."}</div>}
          <details style={{ marginTop: 10 }}><summary style={{ cursor: "pointer" }}>Javob / izoh</summary><div className="sa-small" style={{ marginTop: 7 }}>{item.answer}</div></details>
        </div>;
      }) : <div className="sa-empty">Practice Arena ma’lumotlari mavjud emas.</div>}</div>}

      {tab === "reading" && <div className="sa-content-card"><div className="sa-content-title">📖 Reading Lab</div>{reading.title && <h3>{reading.title}</h3>}{reading.text ? <p style={{ color: "#cbd5e1", lineHeight: 1.9 }}>{reading.text}</p> : <div className="sa-empty">Reading passage mavjud emas.</div>}{(reading.questions ?? []).map((question: any) => <div className="sa-example" key={question.id}><strong>{question.question}</strong>{question.options?.length > 0 && <div className="sa-small" style={{ marginTop: 8 }}>{question.options.join(" • ")}</div>}</div>)}</div>}

      {tab === "writing" && <div className="sa-content-card"><div className="sa-content-title">✍️ Writing Mission</div>{(writing.tasks ?? []).length ? (writing.tasks ?? []).map((task: any, index: number) => <div className="sa-card" key={task.id} style={{ marginBottom: 10 }}><span className="sa-badge blue">TASK {index + 1}</span><p className="sa-small">{task.instruction}</p><textarea className="sa-writing" placeholder="Write your answer here..."/></div>) : <div className="sa-empty">Writing topshiriqlari mavjud emas.</div>}</div>}

      <div className="sa-content-card" style={{ marginTop: 15 }}>
        <div className="sa-content-title">🏆 Ready for the Challenge?</div>
        <p className="sa-small">Bo‘limlarni o‘rganib chiqing, so‘ng yakuniy testni ishlang. Kamida {PASS_PERCENT}% natija keyingi darsni ochadi.</p>
        <div className="sa-divider"/>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 13 }}>{["📖 Learn", "📚 Vocabulary", "🧠 Grammar", "🗣 Speaking", "🧩 Practice", "📖 Reading", "✍️ Writing"].map((item) => <span className="sa-badge" key={item}>{item}</span>)}</div>
        <button className="sa-action" onClick={onStartTest}>📝 Start Test →</button>
      </div>
    </>
  );
}

function Stat({ icon, value, label }: { icon: string; value: React.ReactNode; label: string }) {
  return <div className="sa-stat"><div className="sa-stat-icon">{icon}</div><div className="sa-stat-value">{value}</div><div className="sa-stat-label">{label}</div></div>;
}

function SectionHead({ title, caption, badge }: { title: string; caption: string; badge?: string }) {
  return <div className="sa-section-head"><div><div className="sa-section-title">{title}</div><div className="sa-section-caption">{caption}</div></div>{badge && <span className="sa-badge blue">{badge}</span>}</div>;
}

function Tab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return <button className={`sa-tab ${active ? "active" : ""}`} onClick={onClick} type="button">{label}</button>;
}

function Feature({ icon, title, text }: { icon: string; title: string; text: string }) {
  return <div className="sa-feature"><div className="sa-feature-icon">{icon}</div><div className="sa-feature-title">{title}</div><div className="sa-feature-text">{text}</div></div>;
}
