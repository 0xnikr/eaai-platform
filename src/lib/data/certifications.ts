import type { Certification } from '$lib/types';

export const certifications: Certification[] = [
	{
		slug: 'ai-strategy-foundation',
		title: 'AI Strategy Foundation',
		description:
			'Validate your understanding of AI strategy fundamentals, use case identification, and organizational readiness assessment.',
		level: 'Foundation',
		domains: ['AI Landscape', 'Use Case Identification', 'Readiness Assessment', 'Strategic Planning'],
		duration: '4–6 weeks',
		assessments: 3,
		price: 799,
		priceEnterprise: 599,
		featured: true,
		outcomes: [
			'Recognized AI strategy competency',
			'Framework for organizational AI assessment',
			'Credential for career advancement',
			'Access to certified professional network'
		]
	},
	{
		slug: 'ai-implementation-professional',
		title: 'AI Implementation Professional',
		description:
			'Demonstrate your ability to lead AI implementation programs from pilot design through production deployment and scaling.',
		level: 'Professional',
		domains: ['Pilot Design', 'Team Building', 'Change Management', 'Deployment', 'Scaling'],
		duration: '6–8 weeks',
		assessments: 4,
		price: 1299,
		priceEnterprise: 999,
		prerequisites: ['AI Strategy Foundation or equivalent experience'],
		featured: true,
		outcomes: [
			'Validated implementation leadership capability',
			'Comprehensive deployment methodology',
			'Industry-recognized credential',
			'Enterprise implementation playbook'
		]
	},
	{
		slug: 'ai-governance-specialist',
		title: 'AI Governance Specialist',
		description:
			'Certify your expertise in designing and implementing AI governance frameworks, risk management, and regulatory compliance.',
		level: 'Professional',
		domains: ['Governance Frameworks', 'Risk Management', 'Compliance', 'Ethics', 'Audit'],
		duration: '6–8 weeks',
		assessments: 4,
		price: 1299,
		priceEnterprise: 999,
		outcomes: [
			'Governance framework design competency',
			'Regulatory navigation expertise',
			'Risk assessment methodology certification',
			'Board-level governance advisory capability'
		]
	},
	{
		slug: 'ai-transformation-leader',
		title: 'AI Transformation Leader',
		description:
			'The most comprehensive certification for leaders driving full-scale AI transformation. Covers strategy, implementation, governance, measurement, and organizational change.',
		level: 'Expert',
		domains: [
			'Enterprise Strategy',
			'Implementation Leadership',
			'Governance',
			'Measurement',
			'Culture Transformation',
			'Scaling'
		],
		duration: '10–14 weeks',
		assessments: 6,
		price: 2999,
		priceEnterprise: 2299,
		prerequisites: ['AI Strategy Foundation', 'AI Implementation Professional or equivalent'],
		featured: true,
		outcomes: [
			'Executive transformation leadership credential',
			'Comprehensive AI leadership methodology',
			'Enterprise-wide transformation playbook',
			'Strategic advisory capability certification'
		]
	},
	{
		slug: 'executive-ai-readiness',
		title: 'Executive AI Readiness',
		description:
			'Designed for C-suite executives who need a fast-track to AI fluency. Focused on strategic decision-making, investment evaluation, and organizational leadership.',
		level: 'Executive',
		domains: ['Executive Decision-Making', 'Investment Evaluation', 'Strategic Oversight', 'Board Communication'],
		duration: '2–3 weeks',
		assessments: 2,
		price: 1999,
		priceEnterprise: 1599,
		outcomes: [
			'Executive-level AI fluency validation',
			'Strategic decision-making framework',
			'Board communication toolkit',
			'Executive peer network access'
		]
	}
];
