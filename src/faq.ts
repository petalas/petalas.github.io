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
    answer: `I specialize in full-stack development with a focus on <strong>TypeScript</strong>, <strong>React</strong>, <strong>React Native</strong>, and <strong>Node.js</strong>. I build across web and iOS, and also have extensive experience with Java, Python, SQL databases, and DevOps practices.`,
  },
  {
    question: "Are you available for freelance work?",
    answer: `I'm currently employed as a Senior Frontend Developer at Eeze and running <a href="https://www.dailygoal.fit" target="_blank" rel="noopener noreferrer" class="text-latte-blue dark:text-mocha-blue hover:underline">DailyGoal.fit</a> on the side. I'm not actively looking, but if you think you have a role that's a really good fit, I'd love to hear about it — feel free to reach out.`,
  },
  {
    question: "What is DailyGoal.fit?",
    answer: `DailyGoal.fit is a health and fitness tracking platform I founded, available as an <strong>iOS app</strong> and web app. It focuses on helping people achieve their goals through consistency and simplicity, featuring nutrition tracking, workout logging, goal setting, streak systems, and progress analytics.`,
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
