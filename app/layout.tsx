import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MetricAlert — Get alerts when growth metrics change unexpectedly',
  description: 'Connect to Stripe, Google Analytics, and Mixpanel. Get intelligent alerts when MRR, churn, or CAC deviate from expected patterns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="34dec31c-6b70-4dc8-acb9-84bb4587770f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
