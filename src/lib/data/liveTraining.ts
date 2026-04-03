import type { LiveTraining, Instructor } from '$lib/types';

export const instructors: Instructor[] = [
	{
		name: 'Dr. Sarah Chen',
		title: 'Chief AI Strategist',
		bio: 'Former McKinsey partner with 15+ years leading enterprise AI transformation programs across Fortune 500 companies. PhD in Computational Intelligence from MIT.',
		specialties: ['AI Strategy', 'Enterprise Transformation', 'Executive Advisory']
	},
	{
		name: 'Marcus Rivera',
		title: 'Head of AI Implementation',
		bio: 'Led AI deployment programs at Google, Microsoft, and three successful AI startups. Specializes in bridging the gap between AI strategy and operational reality.',
		specialties: ['Implementation', 'MLOps', 'Change Management']
	},
	{
		name: 'Dr. Aisha Patel',
		title: 'AI Governance Director',
		bio: 'Former regulatory advisor to the EU AI Act committee. Author of "Governing Intelligence" and architect of enterprise AI governance frameworks used by 200+ organizations.',
		specialties: ['Governance', 'Compliance', 'Risk Management']
	},
	{
		name: 'James Whitfield',
		title: 'Workforce AI Lead',
		bio: 'Designed AI enablement programs for 50,000+ employees across banking, healthcare, and manufacturing. Expert in building organization-wide AI capability at scale.',
		specialties: ['Workforce Training', 'Adoption', 'Culture Change']
	}
];

export const liveTrainings: LiveTraining[] = [
	{
		slug: 'executive-ai-strategy-intensive',
		title: 'Executive AI Strategy Intensive',
		description:
			'A hands-on two-day workshop for C-suite and senior leaders to build a complete AI transformation strategy with implementation-ready deliverables.',
		level: 'Executive',
		date: '2025-05-15',
		time: '9:00 AM - 5:00 PM',
		timezone: 'EST',
		duration: '2 Days',
		format: 'Virtual',
		instructor: instructors[0],
		price: 2495,
		seatsTotal: 30,
		seatsAvailable: 8,
		category: 'Strategy',
		tags: ['Executive', 'Strategy', 'Intensive'],
		agenda: [
			{
				time: '9:00 AM',
				title: 'AI Landscape Assessment',
				description: 'Current state analysis and competitive positioning in the AI-driven economy.'
			},
			{
				time: '10:30 AM',
				title: 'Use Case Identification & Prioritization',
				description: 'Framework for identifying and ranking AI opportunities by impact and feasibility.'
			},
			{
				time: '1:00 PM',
				title: 'Roadmap Construction Workshop',
				description:
					'Hands-on session building a 12-month AI implementation roadmap with milestones.'
			},
			{
				time: '3:00 PM',
				title: 'Governance & Measurement Framework',
				description: 'Establishing KPIs, governance structures, and success metrics.'
			}
		],
		outcomes: [
			'Leave with a board-ready AI transformation strategy',
			'Prioritized use case portfolio with ROI projections',
			'12-month implementation roadmap',
			'Governance framework template',
			'Peer network of fellow executive leaders'
		]
	},
	{
		slug: 'ai-implementation-bootcamp',
		title: 'AI Implementation Bootcamp',
		description:
			'Intensive program for implementation leaders responsible for deploying AI initiatives. Covers team building, vendor management, change management, and scaling.',
		level: 'Advanced',
		date: '2025-06-02',
		time: '10:00 AM - 4:00 PM',
		timezone: 'EST',
		duration: '3 Days',
		format: 'Virtual',
		instructor: instructors[1],
		price: 1895,
		seatsTotal: 40,
		seatsAvailable: 15,
		category: 'Implementation',
		tags: ['Implementation', 'Bootcamp', 'Hands-On'],
		outcomes: [
			'Complete implementation playbook for AI initiatives',
			'Team structure and role templates',
			'Vendor evaluation framework',
			'Change management toolkit',
			'Post-deployment measurement plan'
		]
	},
	{
		slug: 'ai-governance-masterclass-live',
		title: 'AI Governance Masterclass',
		description:
			'Deep-dive into building robust AI governance frameworks that satisfy regulatory requirements while enabling innovation speed.',
		level: 'Advanced',
		date: '2025-06-18',
		time: '11:00 AM - 3:00 PM',
		timezone: 'EST',
		duration: '1 Day',
		format: 'Virtual',
		instructor: instructors[2],
		price: 995,
		seatsTotal: 50,
		seatsAvailable: 22,
		category: 'Governance',
		tags: ['Governance', 'Compliance', 'Framework'],
		outcomes: [
			'Complete AI governance framework',
			'Risk assessment methodology',
			'Compliance checklist across major jurisdictions',
			'Board-ready governance documentation'
		]
	},
	{
		slug: 'workforce-ai-readiness-workshop',
		title: 'Workforce AI Readiness Workshop',
		description:
			'Practical workshop for HR leaders, L&D directors, and department leaders building organization-wide AI capability programs.',
		level: 'Intermediate',
		date: '2025-07-10',
		time: '9:00 AM - 1:00 PM',
		timezone: 'EST',
		duration: '4 Hours',
		format: 'Virtual',
		instructor: instructors[3],
		price: 695,
		seatsTotal: 60,
		seatsAvailable: 35,
		category: 'Training',
		tags: ['Workforce', 'HR', 'Capability Building'],
		outcomes: [
			'Workforce AI readiness assessment tool',
			'Capability development framework',
			'Training program templates',
			'Adoption measurement dashboard design'
		]
	},
	{
		slug: 'ai-kpi-measurement-workshop',
		title: 'AI KPI & Measurement Workshop',
		description:
			'Learn to design and implement the metrics that prove AI value, track adoption, and drive continuous optimization of AI initiatives.',
		level: 'Intermediate',
		date: '2025-07-24',
		time: '10:00 AM - 2:00 PM',
		timezone: 'EST',
		duration: '4 Hours',
		format: 'Virtual',
		instructor: instructors[0],
		price: 795,
		seatsTotal: 45,
		seatsAvailable: 28,
		category: 'Measurement',
		tags: ['KPIs', 'Measurement', 'Analytics'],
		outcomes: [
			'Custom AI KPI framework for your organization',
			'Dashboard design templates',
			'Adoption tracking methodology',
			'Executive reporting templates'
		]
	},
	{
		slug: 'private-leadership-intensive',
		title: 'Private Leadership Intensive',
		description:
			'A customized full-day session for your executive team, focused on AI strategy alignment, role clarity, and transformation leadership.',
		level: 'Executive',
		date: '2025-08-05',
		time: 'Custom Schedule',
		timezone: 'Flexible',
		duration: 'Full Day',
		format: 'In-Person',
		instructor: instructors[0],
		price: 12500,
		seatsTotal: 15,
		seatsAvailable: 3,
		category: 'Leadership',
		tags: ['Private', 'Executive', 'Custom'],
		outcomes: [
			'Unified leadership vision for AI transformation',
			'Executive role clarity in AI initiatives',
			'Decision framework for AI investments',
			'90-day leadership action plan'
		]
	}
];
