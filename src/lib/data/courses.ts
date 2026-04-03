import type { Course, Module } from '$lib/types';

export const sampleCurriculum: Module[] = [
	{
		title: 'Foundation: Understanding AI in the Enterprise',
		lessons: [
			{ title: 'The AI Landscape Today', duration: '12 min', type: 'video', preview: true },
			{ title: 'Key AI Technologies for Business', duration: '18 min', type: 'video' },
			{ title: 'AI Readiness Assessment Framework', duration: '10 min', type: 'reading' },
			{ title: 'Knowledge Check', duration: '5 min', type: 'quiz' }
		]
	},
	{
		title: 'Strategy: Building Your AI Roadmap',
		lessons: [
			{ title: 'Identifying High-Impact AI Use Cases', duration: '15 min', type: 'video' },
			{ title: 'ROI Modeling for AI Initiatives', duration: '20 min', type: 'video' },
			{ title: 'Stakeholder Alignment Workshop', duration: '25 min', type: 'exercise' },
			{ title: 'Building a 90-Day AI Roadmap', duration: '18 min', type: 'video' },
			{ title: 'Module Assessment', duration: '10 min', type: 'quiz' }
		]
	},
	{
		title: 'Implementation: From Pilot to Production',
		lessons: [
			{ title: 'Selecting Your AI Pilot Project', duration: '14 min', type: 'video' },
			{ title: 'Building Cross-Functional AI Teams', duration: '16 min', type: 'video' },
			{ title: 'Change Management for AI Adoption', duration: '20 min', type: 'video' },
			{ title: 'Measuring AI Implementation Success', duration: '12 min', type: 'reading' },
			{ title: 'Implementation Planning Exercise', duration: '30 min', type: 'exercise' }
		]
	},
	{
		title: 'Governance & Scale',
		lessons: [
			{ title: 'AI Governance Frameworks', duration: '18 min', type: 'video' },
			{ title: 'Risk Management in AI Deployment', duration: '15 min', type: 'video' },
			{ title: 'Scaling AI Across the Organization', duration: '22 min', type: 'video' },
			{ title: 'Final Assessment', duration: '15 min', type: 'quiz' }
		]
	}
];

export const courses: Course[] = [
	{
		slug: 'ai-strategy-for-executives',
		title: 'AI Strategy for Executives',
		description:
			'Master the strategic frameworks needed to identify, prioritize, and execute high-impact AI initiatives across your organization.',
		level: 'Executive',
		format: 'Self-Paced',
		duration: '8 hours',
		category: 'Strategy',
		modules: 4,
		lessons: 18,
		price: 1299,
		featured: true,
		tags: ['Strategy', 'Leadership', 'ROI'],
		outcomes: [
			'Build a comprehensive AI strategy aligned with business objectives',
			'Identify and prioritize high-ROI AI use cases',
			'Create stakeholder alignment frameworks',
			'Design measurable AI adoption roadmaps'
		],
		curriculum: sampleCurriculum
	},
	{
		slug: 'ai-implementation-masterclass',
		title: 'AI Implementation Masterclass',
		description:
			'From pilot to production — learn the operational frameworks, team structures, and governance models needed to deploy AI successfully at scale.',
		level: 'Advanced',
		format: 'Cohort',
		duration: '12 hours',
		category: 'Implementation',
		modules: 6,
		lessons: 32,
		price: 1799,
		featured: true,
		tags: ['Implementation', 'Operations', 'Scale'],
		outcomes: [
			'Design and execute AI pilot programs',
			'Build high-performing AI implementation teams',
			'Implement governance frameworks for responsible AI',
			'Scale AI initiatives from pilot to enterprise-wide deployment'
		]
	},
	{
		slug: 'workforce-ai-enablement',
		title: 'Workforce AI Enablement',
		description:
			'Equip your teams with practical AI skills. From prompt engineering to workflow automation, build organization-wide AI capability.',
		level: 'Beginner',
		format: 'Self-Paced',
		duration: '6 hours',
		category: 'Training',
		modules: 5,
		lessons: 24,
		price: 499,
		featured: false,
		tags: ['Workforce', 'Hands-On', 'Productivity'],
		outcomes: [
			'Apply AI tools effectively in daily workflows',
			'Design AI-enhanced processes for common business functions',
			'Evaluate and select AI tools for specific use cases',
			'Build personal AI productivity systems'
		]
	},
	{
		slug: 'ai-governance-compliance',
		title: 'AI Governance & Compliance',
		description:
			'Navigate the complex landscape of AI governance, risk management, and regulatory compliance with frameworks built for enterprise deployment.',
		level: 'Advanced',
		format: 'Self-Paced',
		duration: '10 hours',
		category: 'Governance',
		modules: 5,
		lessons: 28,
		price: 1499,
		tags: ['Governance', 'Compliance', 'Risk'],
		outcomes: [
			'Design comprehensive AI governance frameworks',
			'Implement responsible AI practices',
			'Navigate regulatory requirements across jurisdictions',
			'Build AI risk assessment and mitigation strategies'
		]
	},
	{
		slug: 'ai-for-department-leaders',
		title: 'AI for Department Leaders',
		description:
			'Specifically designed for department heads and managers who need to lead AI adoption within their teams and align with organizational strategy.',
		level: 'Intermediate',
		format: 'Self-Paced',
		duration: '5 hours',
		category: 'Leadership',
		modules: 4,
		lessons: 16,
		price: 699,
		tags: ['Leadership', 'Management', 'Teams'],
		outcomes: [
			'Lead AI transformation within your department',
			'Identify department-specific AI opportunities',
			'Build team AI readiness and capability',
			'Align departmental AI initiatives with enterprise strategy'
		]
	},
	{
		slug: 'ai-measurement-kpi-frameworks',
		title: 'AI Measurement & KPI Frameworks',
		description:
			'Learn to design, implement, and track the metrics that prove AI value. From adoption rates to operational impact, measure what matters.',
		level: 'Intermediate',
		format: 'Self-Paced',
		duration: '7 hours',
		category: 'Measurement',
		modules: 4,
		lessons: 20,
		price: 899,
		featured: true,
		tags: ['KPIs', 'Measurement', 'Analytics'],
		outcomes: [
			'Design AI-specific KPI frameworks',
			'Build measurement dashboards for AI initiatives',
			'Track adoption rates and usage patterns',
			'Quantify and communicate AI ROI to stakeholders'
		]
	},
	{
		slug: 'prompt-engineering-for-business',
		title: 'Prompt Engineering for Business',
		description:
			'Go beyond basic prompting. Learn systematic prompt engineering techniques that drive consistent, high-quality AI outputs across business workflows.',
		level: 'Beginner',
		format: 'Self-Paced',
		duration: '4 hours',
		category: 'Technical',
		modules: 3,
		lessons: 14,
		price: 349,
		tags: ['Prompting', 'Technical', 'Practical'],
		outcomes: [
			'Design systematic prompt frameworks for business use cases',
			'Build reusable prompt templates for teams',
			'Optimize AI outputs for quality and consistency',
			'Implement prompt governance and version control'
		]
	},
	{
		slug: 'enterprise-ai-transformation',
		title: 'Enterprise AI Transformation',
		description:
			'The comprehensive program for organizations undertaking full-scale AI transformation. Strategy, culture, technology, governance, and measurement in one cohesive framework.',
		level: 'Executive',
		format: 'Cohort',
		duration: '20 hours',
		category: 'Transformation',
		modules: 8,
		lessons: 48,
		price: 3499,
		featured: true,
		tags: ['Enterprise', 'Transformation', 'Comprehensive'],
		outcomes: [
			'Architect enterprise-wide AI transformation programs',
			'Build and lead AI Centers of Excellence',
			'Design culture change programs for AI adoption',
			'Implement comprehensive measurement and optimization systems'
		]
	}
];

export const courseCategories = [
	'All',
	'Strategy',
	'Implementation',
	'Training',
	'Governance',
	'Leadership',
	'Measurement',
	'Technical',
	'Transformation'
];
