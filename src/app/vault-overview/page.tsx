import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault Overview",
  description:
    "Unofficial reference dashboard summarizing Bitwarden's plans, pricing, security posture, and feature areas.",
};

type Plan = {
  tier: string;
  name: string;
  price: string;
  priceSuffix?: string;
  billed: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    tier: "Personal",
    name: "Free",
    price: "$0",
    billed: "forever",
    features: [
      "Unlimited devices & passwords",
      "Browser, mobile, desktop apps",
      "Bitwarden Send, share with 1 user",
    ],
  },
  {
    tier: "Personal",
    name: "Premium",
    price: "$1.65",
    priceSuffix: "/mo",
    billed: "billed $19.80/yr",
    featured: true,
    features: [
      "Integrated TOTP authenticator",
      "5 GB encrypted attachments",
      "Vault health reports & coaching",
      "Emergency access, priority support",
    ],
  },
  {
    tier: "Personal",
    name: "Families",
    price: "$3.99",
    priceSuffix: "/mo",
    billed: "up to 6 users · $47.88/yr",
    features: [
      "Six full Premium accounts",
      "Unlimited sharing & collections",
      "10 GB shared + personal storage",
    ],
  },
  {
    tier: "Business",
    name: "Teams",
    price: "$4",
    priceSuffix: "/user/mo",
    billed: "billed annually",
    features: [
      "Secure credential sharing",
      "Event log auditing",
      "Directory sync, SCIM provisioning",
    ],
  },
  {
    tier: "Business",
    name: "Enterprise",
    price: "$6",
    priceSuffix: "/user/mo",
    billed: "billed annually",
    features: [
      "Passwordless SSO integration",
      "Granular access control & recovery",
      "Self-hosting option available",
      "Free Families plan per seat",
    ],
  },
];

const features = [
  { area: "Credential storage", detail: "Passwords, passkeys, secure notes, secrets", scope: "core" },
  { area: "Sharing", detail: "Bitwarden Send, org collections, emergency access", scope: "core" },
  { area: "Access Intelligence", detail: "Risk remediation and exposure reporting for orgs", scope: "business" },
  { area: "Identity integration", detail: "SSO, directory sync, SCIM provisioning", scope: "business" },
  { area: "Secrets Manager", detail: "Credential management for dev/DevOps/IT teams", scope: "developer" },
  { area: "Agent Access SDK", detail: "Credential handling for AI agents & machine identities", scope: "developer" },
  { area: "Deployment", detail: "Cloud-hosted or self-hosted", scope: "infra" },
  { area: "Free tools", detail: "Password, passphrase & username generators, strength tester", scope: "utility" },
];

const securityPoints = [
  { title: "End-to-end encryption", body: "Vault data is encrypted client-side before it leaves the device." },
  { title: "Third-party audited", body: "Independent security audits performed on a recurring basis." },
  { title: "Open source", body: "Source is publicly available for community review, client and server." },
  { title: "Bug bounty program", body: "Ongoing external vulnerability reporting incentives." },
  { title: "Compliance certifications", body: "Security compliance credentials listed for enterprise buyers." },
];

const audiences = [
  { title: "Individuals & families", body: "Personal vaults, TOTP, secure sharing, unlimited devices across a household." },
  { title: "Business & enterprise", body: "Org-wide policy control, SSO, directory sync, self-hosting, dedicated support." },
  { title: "Developers & AI agents", body: "Secrets Manager and an Agent Access SDK for machine and DevOps credential flows." },
];

export default function VaultOverview() {
  return (
    <div className="vault-page">
      <div className="wrap">
        <header>
          <div>
            <p className="eyebrow">Reference Summary · Unofficial</p>
            <h1>Bitwarden, at a glance</h1>
          </div>
          <p className="header-note">
            Compiled from publicly listed information on bitwarden.com — plans, security
            posture, and platform scope for quick reference. Not affiliated with or
            published by Bitwarden.
          </p>
        </header>

        <div className="stats">
          <div className="stat">
            <div className="stat-label">Businesses using it</div>
            <div className="stat-value num">80,000+</div>
            <div className="stat-sub">across org sizes</div>
          </div>
          <div className="stat">
            <div className="stat-label">Individual users</div>
            <div className="stat-value num">Millions</div>
            <div className="stat-sub">personal &amp; family vaults</div>
          </div>
          <div className="stat">
            <div className="stat-label">Entry price</div>
            <div className="stat-value num">$0</div>
            <div className="stat-sub">free tier, unlimited devices</div>
          </div>
          <div className="stat">
            <div className="stat-label">Source model</div>
            <div className="stat-value">Open</div>
            <div className="stat-sub">third-party audited</div>
          </div>
        </div>

        <section>
          <div className="section-head">
            <h2>Plans &amp; pricing</h2>
            <span className="count">5 tiers · personal + business</span>
          </div>
          <div className="plans">
            {plans.map((p) => (
              <div key={p.name} className={`plan${p.featured ? " featured" : ""}`}>
                <div className="plan-tier">{p.tier}</div>
                <div className="plan-name">{p.name}</div>
                <div className="plan-price num">
                  {p.price}
                  {p.priceSuffix && <span className="suffix">{p.priceSuffix}</span>}
                </div>
                <div className="plan-billed num">{p.billed}</div>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Feature areas</h2>
            <span className="count">by product surface</span>
          </div>
          <div className="matrix">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Capability</th>
                  <th>Scope</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.area}>
                    <td className="area">{f.area}</td>
                    <td className="detail">{f.detail}</td>
                    <td>
                      <span className="chip">{f.scope}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="grid-2">
            <div>
              <div className="section-head">
                <h2>Security posture</h2>
                <span className="count">as stated</span>
              </div>
              <div className="card-list">
                {securityPoints.map((s) => (
                  <div key={s.title} className="sec-card">
                    <div className="sec-mark" />
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-head">
                <h2>Who it&apos;s for</h2>
                <span className="count">3 segments</span>
              </div>
              <div className="audience-block">
                {audiences.map((a) => (
                  <div key={a.title} className="audience-item">
                    <h4>{a.title}</h4>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer>
          Figures and feature descriptions summarized from bitwarden.com (homepage &amp;
          pricing page) at time of compilation. Pricing and features change — confirm
          current terms at{" "}
          <a href="https://bitwarden.com/pricing/">bitwarden.com/pricing</a> before
          purchasing.
        </footer>
      </div>

      <style>{`
        .vault-page {
          --bg: #f3f1eb;
          --surface: #ffffff;
          --surface-2: #ebe8df;
          --border: #d8d3c6;
          --ink: #1c2321;
          --ink-dim: #565f5b;
          --ink-faint: #8a8f89;
          --accent: #0f6e5c;
          --accent-soft: #dbeee8;
          --good: #1f7a4d;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Iowan Old Style', Georgia, serif;
          min-height: 100vh;
        }

        @media (prefers-color-scheme: dark) {
          .vault-page {
            --bg: #121916;
            --surface: #182420;
            --surface-2: #1f2d27;
            --border: #2c3b34;
            --ink: #e9ece9;
            --ink-dim: #a7b3ac;
            --ink-faint: #6f7d76;
            --accent: #4fd8b5;
            --accent-soft: #1d3a32;
            --good: #4fd8a0;
          }
        }

        .vault-page * { box-sizing: border-box; }

        .num { font-family: 'SFMono-Regular', Consolas, Menlo, monospace; font-variant-numeric: tabular-nums; }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 48px 32px 96px; }

        header {
          display: flex; justify-content: space-between; align-items: flex-end;
          gap: 24px; border-bottom: 1px solid var(--border);
          padding-bottom: 28px; margin-bottom: 36px; flex-wrap: wrap;
        }
        .eyebrow {
          font-family: Helvetica, Arial, sans-serif; font-size: 12px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);
          font-weight: 600; margin: 0 0 10px;
        }
        h1 {
          font-size: clamp(32px, 4.4vw, 46px); line-height: 1.05; margin: 0;
          font-weight: 500; text-wrap: balance; letter-spacing: -0.01em;
        }
        .header-note {
          font-family: Helvetica, Arial, sans-serif; font-size: 13px;
          color: var(--ink-faint); max-width: 300px; line-height: 1.5; text-align: right;
        }
        @media (max-width: 640px) { .header-note { text-align: left; } }

        .stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border); margin-bottom: 56px;
        }
        .stat { background: var(--surface); padding: 22px 20px; }
        .stat-label {
          font-family: Helvetica, Arial, sans-serif; font-size: 11px;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-faint);
          margin-bottom: 10px;
        }
        .stat-value { font-size: 28px; color: var(--ink); font-weight: 600; }
        .stat-sub { font-family: Helvetica, Arial, sans-serif; font-size: 12px; color: var(--ink-dim); margin-top: 4px; }
        @media (max-width: 760px) { .stats { grid-template-columns: repeat(2, 1fr); } }

        .section-head {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-bottom: 20px; gap: 16px;
        }
        .section-head h2 { font-size: 22px; font-weight: 500; margin: 0; }
        .section-head .count { font-family: Helvetica, Arial, sans-serif; font-size: 12px; color: var(--ink-faint); letter-spacing: 0.04em; }

        section { margin-bottom: 60px; }

        .plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
        .plan {
          background: var(--surface); border: 1px solid var(--border);
          padding: 24px 22px; display: flex; flex-direction: column; position: relative;
        }
        .plan.featured { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); }
        .plan-tier { font-family: Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 14px; }
        .plan-name { font-size: 21px; font-weight: 600; margin-bottom: 6px; }
        .plan-price { font-size: 26px; color: var(--accent); margin-bottom: 2px; }
        .plan-price .suffix { font-size: 13px; color: var(--ink-faint); }
        .plan-billed { font-family: Helvetica, Arial, sans-serif; font-size: 11px; color: var(--ink-faint); margin-bottom: 18px; }
        .plan-features {
          list-style: none; margin: 0; padding: 0; font-family: Helvetica, Arial, sans-serif;
          font-size: 13px; color: var(--ink-dim); display: flex; flex-direction: column;
          gap: 9px; border-top: 1px solid var(--border); padding-top: 16px;
        }
        .plan-features li { padding-left: 16px; position: relative; line-height: 1.4; }
        .plan-features li::before {
          content: ''; position: absolute; left: 0; top: 7px; width: 5px; height: 5px; background: var(--accent);
        }

        .matrix { background: var(--surface); border: 1px solid var(--border); overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; min-width: 640px; font-family: Helvetica, Arial, sans-serif; font-size: 13.5px; }
        th, td { text-align: left; padding: 13px 18px; border-bottom: 1px solid var(--border); }
        thead th { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-faint); font-weight: 600; background: var(--surface-2); }
        tbody tr:last-child td { border-bottom: none; }
        td.area { color: var(--ink); font-weight: 500; }
        td.detail { color: var(--ink-dim); }
        .chip {
          display: inline-block; font-family: 'SFMono-Regular', monospace; font-size: 10.5px;
          letter-spacing: 0.03em; padding: 3px 8px; border-radius: 3px;
          background: var(--accent-soft); color: var(--accent);
        }

        .grid-2 { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; }
        @media (max-width: 780px) { .grid-2 { grid-template-columns: 1fr; } }

        .card-list { display: flex; flex-direction: column; gap: 14px; }
        .sec-card { background: var(--surface); border: 1px solid var(--border); padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; }
        .sec-mark { width: 8px; height: 8px; margin-top: 6px; flex-shrink: 0; background: var(--good); }
        .sec-card h3 { font-size: 14.5px; margin: 0 0 4px; font-weight: 600; font-family: Helvetica, Arial, sans-serif; }
        .sec-card p { margin: 0; font-size: 12.5px; color: var(--ink-dim); font-family: Helvetica, Arial, sans-serif; line-height: 1.5; }

        .audience-block { background: var(--surface-2); border: 1px solid var(--border); padding: 22px; }
        .audience-item { padding: 14px 0; border-bottom: 1px solid var(--border); }
        .audience-item:last-child { border-bottom: none; padding-bottom: 0; }
        .audience-item:first-child { padding-top: 0; }
        .audience-item h4 { font-size: 15px; margin: 0 0 5px; font-weight: 600; }
        .audience-item p { margin: 0; font-family: Helvetica, Arial, sans-serif; font-size: 12.5px; color: var(--ink-dim); line-height: 1.5; }

        footer {
          border-top: 1px solid var(--border); padding-top: 20px; margin-top: 20px;
          font-family: Helvetica, Arial, sans-serif; font-size: 11.5px; color: var(--ink-faint); line-height: 1.6;
        }
        footer a { color: var(--accent); }
      `}</style>
    </div>
  );
}
