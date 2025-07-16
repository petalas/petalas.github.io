export function setupFAQ(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${faqs.map(faqTemplate).join("")}
    ${generateFAQSchema()}
  `;
}

const generateFAQSchema = () => {
  const faqItems = faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, "").trim(),
    },
  }));

  return `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(faqItems)}
    }
    </script>
  `;
};

const faqTemplate = (faq: FAQ): string => {
  return `
    <details class="faq-item mb-4 bg-latte-surface0 dark:bg-mocha-surface0 rounded-lg" itemscope itemtype="https://schema.org/Question">
      <summary class="p-4 cursor-pointer hover:bg-latte-surface1 dark:hover:bg-mocha-surface1 rounded-lg font-medium" itemprop="name">
        ${faq.question}
      </summary>
      <div class="p-4 pt-0 text-sm text-latte-subtext0 dark:text-mocha-subtext0" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
        <div itemprop="text">${faq.answer}</div>
      </div>
    </details>
  `;
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer: `I specialize in full-stack web development with a focus on <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>. I also have extensive experience with Java, Python, SQL databases, and DevOps practices.`,
  },
  {
    question: "Are you available for freelance work?",
    answer: `Currently, I'm focused on building <a href="https://www.dailygoal.fit" target="_blank" rel="noopener noreferrer" class="text-latte-blue dark:text-mocha-blue hover:underline">DailyGoal.fit</a>. However, I'm always open to discussing interesting opportunities and potential collaborations.`,
  },
  {
    question: "What is DailyGoal.fit?",
    answer: `DailyGoal.fit is a health and fitness tracking platform I founded and am currently building. It focuses on helping people achieve their goals through consistency and simplicity, featuring nutrition tracking, goal setting, and progress monitoring.`,
  },
  {
    question: "How can I get in touch?",
    answer: `You can reach me via email at <a href="mailto:webmasternikos@gmail.com" class="text-latte-blue dark:text-mocha-blue hover:underline">webmasternikos@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/petalas" target="_blank" rel="noopener noreferrer" class="text-latte-blue dark:text-mocha-blue hover:underline">LinkedIn</a>.`,
  },
  {
    question: "Do you have experience with remote work?",
    answer: `Yes, I have extensive experience working remotely. During my time at Genesis Global Technology, I successfully collaborated with distributed teams and managed projects across different time zones.`,
  },
];
