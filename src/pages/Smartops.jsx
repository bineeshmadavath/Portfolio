import { Link } from 'react-router-dom'
import { useState } from 'react'
import configFOI from '../../Config-FOI.png'
import configTable from '../../Config-Table.png'
import configClause from '../../Config-Clause.png'
import currentDrFoi from '../../current-01.png'
import currentDrTable from '../../current-02.png'
import currentDrClause from '../../current-03.png'
import infFoi from '../../inf-01.png'
import infTable from '../../inf-02.png'
import infClause from '../../inf-03.png'
import heroImage from '../../heroimage-smartvision.png'

export default function Smartops() {
  const [activeConfig, setActiveConfig] = useState('foi')
  const [activeDrTab, setActiveDrTab] = useState('foi')

  const configTabs = [
    {
      id: 'foi',
      label: 'FOI Definition',
      image: configFOI,
      alt: 'FOI AI Inference Configuration',
      description: 'Each Field of Interest includes an AI Inference toggle with visible indicator icon',
      benefit: 'Makes inference configuration explicit and discoverable'
    },
    {
      id: 'table',
      label: 'Table Definition',
      image: configTable,
      alt: 'Table AI Inference Configuration',
      description: 'Tables support row-level inference. "Inference" becomes a reserved system column name to prevent conflicts.',
      benefit: 'Enables exception-based row reviews with system consistency'
    },
    {
      id: 'clause',
      label: 'Clauses Definition',
      image: configClause,
      alt: 'Clause AI Inference Configuration',
      description: 'Clauses display inference inline beneath clause headers for natural legal reading flow.',
      benefit: 'Preserves legal reading flow while adding contextual intelligence'
    }
  ]

  const activeTab = configTabs.find(t => t.id === activeConfig)
  const drTabs = [
    {
      id: 'foi',
      label: 'Fields of Interest (FOIs)',
      shortLabel: 'FOIs',
      icon: 'solar:tag-linear',
      accent: 'violet',
      description: 'Displays extracted field values captured from the document, without any interpretation or validation insight.',
      image: currentDrFoi,
      imageAlt: 'Current Document Review FOI tab'
    },
    {
      id: 'tables',
      label: 'Tables',
      shortLabel: 'Tables',
      icon: 'solar:table-linear',
      accent: 'blue',
      description: 'Shows extracted tabular content row by row, but does not indicate anomalies, validations, or semantic exceptions.',
      image: currentDrTable,
      imageAlt: 'Current Document Review Tables tab'
    },
    {
      id: 'clauses',
      label: 'Clauses',
      shortLabel: 'Clauses',
      icon: 'solar:document-linear',
      accent: 'emerald',
      description: 'Presents clause text as extracted from the document, with no contextual interpretation or validation guidance.',
      image: currentDrClause,
      imageAlt: 'Current Document Review Clauses tab'
    }
  ]
  const activeDrPreview = drTabs.find(tab => tab.id === activeDrTab)
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-24 bg-white rounded-[20px]">
      {/* Header / Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-violet-600 transition-colors group"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-violet-50 text-[#0097AC] font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
            UX Case Study
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight">
            AI-Powered Inference<br />
            Document Review Experience
          </h1>
          <p className="text-lg lg:text-xl text-neutral-500 max-w-xl">
            Designing an intuitive AI inference layer that surfaces contextual business insights directly in the document review screen without compromising trust or mixing facts with interpretations.
          </p>
        </div>

        {/* Hero Mockup */}
        <div className="flex-1 w-full relative">
          <div className="bg-neutral-100 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden group">
            <img
              src={heroImage}
              alt="AI Inference Document Review Screen Mockup"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Project Meta — full-width single column below hero image */}
      <div className="max-w-6xl mx-auto px-6 pb-12 border-b border-neutral-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl p-6 lg:p-8" >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: '#c4f1f7', backgroundColor: '#c4f1f7' }}>
              <iconify-icon icon="solar:user-circle-linear" width="20" className="text-neutral-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Role</div>
              <div className="text-sm text-neutral-500">UX/Product Designer</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: '#c4f1f7', backgroundColor: '#c4f1f7' }}>
              <iconify-icon icon="solar:pen-new-square-linear" width="20" className="text-neutral-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Tools</div>
              <div className="text-sm text-neutral-500">Figma, React</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: '#c4f1f7', backgroundColor: '#c4f1f7' }}>
              <iconify-icon icon="solar:calendar-linear" width="20" className="text-neutral-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Timeline</div>
              <div className="text-sm text-neutral-500">1 Week</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: '#c4f1f7', backgroundColor: '#c4f1f7' }}>
              <iconify-icon icon="solar:devices-linear" width="20" className="text-neutral-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Project Type</div>
              <div className="text-sm text-neutral-500">AI/ML Integration</div>
            </div>
          </div>
        </div>
      </div>

      {/* 01 & 02 Sections */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* 01 THE PROBLEM */}
        <div>
          <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>01</span> THE PROBLEM
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Document reviewers can see extracted data but lack contextual business interpretation. AI validations only happen in downstream automation flows, creating inefficiencies and forcing manual interpretation.
          </p>
          <ul className="space-y-4">
            {[
              "Only extracted data is visible; business interpretation is missing",
              "Deterministic rule-based systems fail for semantic scenarios",
              "No clear separation between facts and inferences",
              "Reviewer trust decreases when interpretation is mixed with extraction",
              "Additional manual effort required to validate document meaning"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <iconify-icon icon="solar:close-square-bold" width="14"></iconify-icon>
                </div>
                <span className="text-sm text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 02 PROJECT GOALS */}
        <div>
          <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>02</span> PROJECT GOALS
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:graph-up-linear" width="24" class="text-neutral-500" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Business Goal</div>
                <div className="text-sm text-neutral-600">Enable faster, more confident decisions by bringing business interpretation closer to source data.</div>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:user-linear" width="24" class="text-neutral-500" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">User Goal</div>
                <div className="text-sm text-neutral-600">Surface AI-generated inferences clearly separated from extraction, supporting field-linked insights.</div>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:settings-linear" width="24" class="text-neutral-500" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Design Goal</div>
                <div className="text-sm text-neutral-600">Maintain explainability and reviewer trust while minimizing disruption to existing workflows.</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 03 USERS & PAIN POINTS */}
      <div className="max-w-6xl mx-auto px-6 pb-20 border-b border-neutral-100">
        <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-8 flex items-center gap-2">
        <span>03</span> PRIMARY USERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0" style={{ backgroundColor: 'var(--brand-accent)' }}>
               <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c4f1f7' }}>
                 <iconify-icon icon="solar:user-linear" width="24" className="text-neutral-600" />
               </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Document Reviewers</div>
              <div className="text-sm text-neutral-500">Primary interface users validating extracted information</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0" style={{ backgroundColor: 'var(--brand-accent)' }}>
               <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c4f1f7' }}>
                 <iconify-icon icon="solar:users-group-rounded-linear" width="24" className="text-neutral-600" />
               </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Compliance Analysts</div>
              <div className="text-sm text-neutral-500">Validate policy violations and regulatory compliance</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0" style={{ backgroundColor: 'var(--brand-accent)' }}>
               <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c4f1f7' }}>
                 <iconify-icon icon="solar:shield-check-linear" width="24" className="text-neutral-600" />
               </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Legal Review Teams</div>
              <div className="text-sm text-neutral-500">Assess legal implications and contract terms</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0" style={{ backgroundColor: 'var(--brand-accent)' }}>
               <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c4f1f7' }}>
                 <iconify-icon icon="solar:settings-linear" width="24" className="text-neutral-600" />
               </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Business Admins</div>
              <div className="text-sm text-neutral-500">Configure inference at template definition level</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-bold text-neutral-900 mb-8">Key Pain Points</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-red-500">⚠</span> Reviewer Challenges
              </div>
              <ul className="space-y-3">
                {[
                  "\"I can see extracted value, but need to interpret meaning\"",
                  "\"Must manually validate policy violations\"",
                  "\"Unsure if issues exist without downstream flags\""
                ].map((item, i) => (
                  <li key={i} className="text-sm text-neutral-600 italic">{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-orange-500">⚙</span> Admin Challenges
              </div>
              <ul className="space-y-3">
                {[
                  "\"Hard-coded automation flows difficult to maintain\"",
                  "\"Business logic changes require technical intervention\"",
                  "\"Need scalable configuration system\""
                ].map((item, i) => (
                  <li key={i} className="text-sm text-neutral-600 italic">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Current DR Screen Behavior</h3>
              <p className="text-neutral-600 leading-relaxed">
                The Document Review (DR) screen is designed to display extracted data only, structured across three primary tabs. Each section focuses on presenting what is extracted from the document, without providing any interpretation or validation context.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-500 border border-neutral-200">
              <iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon>
              Extraction-only experience
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col gap-3 lg:w-72 shrink-0">
              {drTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDrTab(tab.id)}
                  className={`rounded-xl border p-5 text-left transition-all duration-300 ${
                    activeDrTab === tab.id
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-lg shadow-neutral-200'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-white'
                  }`}
                >
                  <div className="mb-3">
                    <div className={`font-semibold text-left ${activeDrTab === tab.id ? 'text-white' : 'text-neutral-900'}`}>
                      {tab.label}
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed text-left ${activeDrTab === tab.id ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {tab.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="min-h-110 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-5 py-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">Document Review</div>
                  <div className="mt-1 text-sm font-semibold text-neutral-900">Current tab: {activeDrPreview?.label}</div>
                </div>
                <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500">
                  Extracted data only
                </div>
              </div>

              <div key={`dr-preview-${activeDrTab}`} className="animate-in fade-in duration-300 p-5">
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                  <img
                    src={activeDrPreview?.image}
                    alt={activeDrPreview?.imageAlt}
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 04 PROPOSED SOLUTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-100">
        <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-12 flex items-center gap-2">
        <span>04</span> PROPOSED SOLUTION
        </h2>
        
        <div className="space-y-16">
          {/* Part 1 */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Part 1: DTD Screen Configuration</h3>
              <p className="text-neutral-600 leading-relaxed">
                Admins configure AI inference at the Definition Template Design (DTD) level for granular control.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tab Selectors */}
              <div className="flex flex-col gap-3 lg:w-72 shrink-0">
                {configTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveConfig(tab.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 group ${
                      activeConfig === tab.id
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-lg shadow-neutral-200'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-white'
                    }`}
                  >
                    <div className={`font-semibold text-sm mb-1 ${activeConfig === tab.id ? 'text-white' : 'text-neutral-900'}`}>
                      {tab.label}
                    </div>
                    <div className={`text-xs leading-relaxed ${activeConfig === tab.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {tab.description}
                    </div>
                    {activeConfig === tab.id && (
                      <div className="mt-3 pt-3 border-t border-neutral-700">
                        <div className="text-xs text-neutral-300 flex items-center gap-1.5">
                          <iconify-icon icon="solar:lightbulb-bolt-linear" width="14"></iconify-icon>
                          <span>{tab.benefit}</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Image Preview with animation */}
              <div className="flex-1 relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 aspect-16/10">
                {/* Fade-out layer: shows the previous image fading away */}
                <img
                  key={`active-${activeConfig}`}
                  src={activeTab?.image}
                  alt={activeTab?.alt}
                  className="absolute inset-0 w-full h-full object-cover animate-config-pan-x"
                />
                {/* Spotlight sheen overlay */}
                <div
                  key={`spotlight-${activeConfig}`}
                  className="absolute inset-0 pointer-events-none animate-spotlight-x"
                />

                {/* Label badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm">
                  <span className="text-xs font-semibold text-violet-600 flex items-center gap-1.5">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="14"></iconify-icon>
                    {activeTab?.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Part 2: DR Screen Display</h3>
              <p className="text-neutral-600 leading-relaxed max-w-3xl">
                The Document Review screen surfaces inferences contextually, ensuring extracted data remains primary.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">Progressive Disclosure</div>
                    <p className="text-sm text-neutral-600">Show inference summary, expand for detailed explanation</p>
                  </div>
                  <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">Contextual Placement</div>
                    <p className="text-sm text-neutral-600">Inference stays near source data with evidence highlighting</p>
                  </div>
                  <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">Visual Hierarchy</div>
                    <p className="text-sm text-neutral-600">Extraction first, inference second with clear separation</p>
                  </div>
            </div>
          </div>
        </div>
      </div>

      {/* 05 DETAILED UX SOLUTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-100">
        <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-12 flex items-center gap-2">
        <span>05</span> DETAILED UX SOLUTION
        </h2>
        
        <div className="space-y-16">
          {[
            {
              id: 'foi',
              title: 'FOIs Tab — Field-Level Inline Inference',
              description: 'Inference displayed directly alongside extracted field values with expand/collapse interaction.',
              previewImage: infFoi,
              previewAlt: 'FOI Field-Level Inline Inference Preview',
              showPillars: true
            },
            {
              id: 'tables',
              title: 'Tables Tab — Row-Level Inference',
              description: 'Inference applied at row level for anomaly detection and exception-based review.',
              previewImage: infTable,
              previewAlt: 'Tables Row-Level Inference Preview',
              showPillars: false
            },
            {
              id: 'clauses',
              title: 'Clauses Tab — Clause-Level Inline Inference',
              description: 'Inference appears directly beneath clause headers while preserving legal reading flow.',
              previewImage: infClause,
              previewAlt: 'Clauses Clause-Level Inline Inference Preview',
              showPillars: false
            }
          ].map(section => (
            <div key={section.id}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{section.title}</h3>
              <p className="text-neutral-600 mb-6">{section.description}</p>

              {/* Horizontal pillars (FOIs only) */}
              {section.showPillars && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">🟢 Rule Pass / 🔴 Rule Fail</div>
                    <p className="text-sm text-neutral-600">Visual outcome indicator for quick at-a-glance assessment</p>
                  </div>
                  <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">One-Line Preview</div>
                    <p className="text-sm text-neutral-600">Summary statement with expandable detailed view</p>
                  </div>
                  <div className="p-5 bg-smartops-accent border-[#e0f7fa] rounded-xl border">
                    <div className="font-bold text-neutral-900 mb-2">Evidence Highlighting</div>
                    <p className="text-sm text-neutral-600">Click inference to highlight supporting evidence in viewer</p>
                  </div>
                </div>
              )}

              {/* Full-width preview area */}
              <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <img
                  src={section.previewImage}
                  alt={section.previewAlt}
                  className="block w-full h-auto"
                />
              </div>
            </div>
          ))}

          {/* Empty State */}
          <div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Empty State: No Inference Available</h3>
            <p className="text-neutral-600 mb-4">
              When backend does not return inference, the system explicitly communicates this state with "No inference available" message.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>✓ Neutral informational display (not an error)</li>
              <li>✓ Improves transparency and prevents confusion</li>
              <li>✓ Maintains reviewer trust in the system</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 06 DESIGN PRINCIPLES & SUCCESS METRICS */}
      <div className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-100">
        <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-12 flex items-center gap-2">
        <span>06</span> DESIGN PRINCIPLES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-white">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 font-bold">1</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Progressive Disclosure</h3>
              <p className="text-sm text-neutral-600">Show summary first, expand for details to reduce cognitive load</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 font-bold">2</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Contextual Placement</h3>
              <p className="text-sm text-neutral-600">Inference stays near source data for strong contextual relevance</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-white">
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 shrink-0 font-bold">3</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Visual Hierarchy</h3>
              <p className="text-sm text-neutral-600">Extraction first, inference second with clear separation</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-white">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 font-bold">4</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Explainable AI</h3>
              <p className="text-sm text-neutral-600">Every inference supports evidence tracing for trust and clarity</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-white lg:col-span-2">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 shrink-0 font-bold">5</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Non-Intrusive Enhancement</h3>
              <p className="text-sm text-neutral-600">Does not disrupt existing reviewer workflows or document reading patterns</p>
            </div>
          </div>
        </div>
      </div>

      {/* 07 SUCCESS METRICS */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm font-bold text-[#0097AC] tracking-wider uppercase mb-12 flex items-center gap-2">
        <span>07</span> SUCCESS METRICS
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Business Metrics</h3>
            <div className="space-y-4">
              {[
                { label: "Reduced downstream validation effort", icon: "solar:graph-down-linear" },
                { label: "Faster document review turnaround", icon: "solar:arrow-right-linear" },
                { label: "Higher reviewer productivity", icon: "solar:graph-up-linear" },
                { label: "Reduced compliance misses", icon: "solar:shield-check-linear" }
              ].map((metric, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <iconify-icon icon={metric.icon} width="24" class="text-emerald-600 shrink-0 mt-0.5"></iconify-icon>
                  <p className="text-sm text-neutral-700 font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-6">UX Metrics</h3>
            <div className="space-y-4">
              {[
                { label: "Reduced manual interpretation time", icon: "solar:arrow-right-linear" },
                { label: "Higher inference adoption rate", icon: "solar:check-circle-linear" },
                { label: "Reduced reviewer confusion", icon: "solar:question-circle-linear" },
                { label: "Increased trust score in AI outputs", icon: "solar:star-shine-linear" }
              ].map((metric, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-violet-50 border border-violet-200">
                  <iconify-icon icon={metric.icon} width="24" class="text-violet-600 shrink-0 mt-0.5"></iconify-icon>
                  <p className="text-sm text-neutral-700 font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Ready to enhance your AI-driven workflows?</h2>
            <p className="text-neutral-600">Let's explore how AI inference can transform your document review process</p>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors whitespace-nowrap"
          >
            Get in Touch
            <iconify-icon icon="solar:arrow-right-linear" width="18" height="18"></iconify-icon>
          </Link>
        </div>
      </div>
    </div>
  )
}
