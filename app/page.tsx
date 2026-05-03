export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Startup Founders &amp; Growth PMs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts when your growth metrics change unexpectedly
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe, Google Analytics, and Mixpanel. We monitor MRR, churn, and CAC around the clock and ping you the moment something looks off.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start monitoring — $39/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📊', title: 'MRR & Churn Tracking', desc: 'Pulls live data from Stripe and flags sudden drops or spikes instantly.' },
            { icon: '🔔', title: 'Smart Alerts', desc: 'Statistical deviation detection — no more noisy threshold alerts.' },
            { icon: '💬', title: 'Email & Slack', desc: 'Receive alerts wherever your team already works.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$39<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, cancel anytime</div>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Stripe, GA4 & Mixpanel integrations',
              'MRR, churn, CAC monitoring',
              'Statistical anomaly detection',
              'Email + Slack alerts',
              'Unlimited metric thresholds',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which integrations are supported?',
              a: 'We currently support Stripe (MRR, churn, new customers), Google Analytics 4 (traffic, conversions), and Mixpanel (events, funnels). More integrations are on the roadmap.',
            },
            {
              q: 'How does anomaly detection work?',
              a: 'We use statistical methods (z-score and rolling baselines) to compare current metric values against your historical patterns, so alerts fire only when something is genuinely unusual.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MetricAlert. All rights reserved.
      </footer>
    </main>
  )
}
