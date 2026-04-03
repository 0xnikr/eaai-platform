import type { Testimonial, FAQ, ComparisonRow, OpenSourceProject, BookingType } from '$lib/types';

export const testimonials: Testimonial[] = [
	{
		name: 'Katherine Morrison',
		title: 'Chief Operating Officer',
		company: 'Meridian Financial Group',
		quote:
			'The Executive AI Advisory Institute gave us a clear, actionable AI transformation strategy. Within six months, we had three production AI systems and a governance framework that our board fully endorsed.',
		rating: 5
	},
	{
		name: 'David Park',
		title: 'VP of Digital Transformation',
		company: 'Atlas Manufacturing',
		quote:
			'Unlike other consultants who deliver a slide deck and leave, EAAI stayed through implementation and measurement. Our AI adoption rate went from 12% to 73% within the first year.',
		rating: 5
	},
	{
		name: 'Dr. Rachel Stone',
		title: 'Chief Information Officer',
		company: 'Northwell Healthcare Systems',
		quote:
			'The certification program gave our entire leadership team a shared AI vocabulary and decision-making framework. The quality of our AI investment decisions improved dramatically.',
		rating: 5
	},
	{
		name: 'Michael Torres',
		title: 'Head of AI & Analytics',
		company: 'Synapse Logistics',
		quote:
			'The live training intensives were the most impactful professional development our team has experienced. Structured, practical, and immediately applicable.',
		rating: 5
	},
	{
		name: 'Sarah Lindquist',
		title: 'CEO',
		company: 'Vertex Capital Partners',
		quote:
			'Working with EAAI transformed how our entire organization thinks about AI. The measurement framework alone justified the entire engagement — we can now quantify every dollar of AI impact.',
		rating: 5
	},
	{
		name: 'James Okafor',
		title: 'Director of Innovation',
		company: 'Prism Energy Solutions',
		quote:
			'The open-source resources and certification pathway gave our team a credible, structured foundation. When we needed deeper advisory support, the transition was seamless.',
		rating: 5
	}
];

export const homeFaqs: FAQ[] = [
	{
		question: 'How is EAAI different from typical AI training providers?',
		answer:
			'We are not just a training company. We are an AI transformation partner that combines executive advisory, structured training, certification, implementation support, and measurable outcomes. We stay with organizations through the entire journey — from strategy through deployment and optimization.'
	},
	{
		question: 'Who are your programs designed for?',
		answer:
			'Our programs serve C-suite executives, department leaders, implementation teams, and entire workforces. We design pathways appropriate for decision-makers who need strategic fluency through to practitioners who need operational competency.'
	},
	{
		question: 'How do you measure the success of AI transformation?',
		answer:
			'We implement comprehensive KPI frameworks that track AI adoption rates, workflow integration, productivity impact, cost reduction, revenue influence, and leadership readiness scores. Every engagement includes a measurement component.'
	},
	{
		question: 'Can programs be customized for our organization?',
		answer:
			'Absolutely. Our enterprise engagements are tailored to your industry, organizational maturity, team structure, and strategic objectives. Private advisory, custom training, and dedicated certification pathways are available.'
	},
	{
		question: 'What is the typical engagement model?',
		answer:
			'We offer three primary models: Advisory Sprints (4–6 weeks, focused outcomes), Transformation Engagements (3–6 months, comprehensive), and Enterprise Partnerships (12+ months, ongoing strategic support). Each includes training, implementation support, and measurement.'
	},
	{
		question: 'Do you offer individual courses without a full engagement?',
		answer:
			'Yes. Our self-paced courses, live training sessions, and certification programs are available for individual purchase. Many organizations start with individual programs and expand to enterprise engagements as they see results.'
	}
];

export const comparisonData: ComparisonRow[] = [
	{
		feature: 'Strategic AI Roadmap',
		basicWorkshop: false,
		diyInternal: 'Limited',
		genericConsultant: 'Generic',
		eaai: true
	},
	{
		feature: 'Executive Alignment',
		basicWorkshop: false,
		diyInternal: false,
		genericConsultant: 'Partial',
		eaai: true
	},
	{
		feature: 'Implementation Support',
		basicWorkshop: false,
		diyInternal: 'Internal Only',
		genericConsultant: 'Limited',
		eaai: true
	},
	{
		feature: 'Workforce Training at Scale',
		basicWorkshop: 'Basic',
		diyInternal: false,
		genericConsultant: false,
		eaai: true
	},
	{
		feature: 'Structured Certification',
		basicWorkshop: false,
		diyInternal: false,
		genericConsultant: false,
		eaai: true
	},
	{
		feature: 'KPI & Measurement Framework',
		basicWorkshop: false,
		diyInternal: 'Ad Hoc',
		genericConsultant: 'Generic',
		eaai: true
	},
	{
		feature: 'Governance & Compliance',
		basicWorkshop: false,
		diyInternal: 'Fragmented',
		genericConsultant: 'Partial',
		eaai: true
	},
	{
		feature: 'Ongoing Optimization',
		basicWorkshop: false,
		diyInternal: false,
		genericConsultant: false,
		eaai: true
	},
	{
		feature: 'Open-Source Resources',
		basicWorkshop: false,
		diyInternal: false,
		genericConsultant: false,
		eaai: true
	},
	{
		feature: 'Enterprise Scalability',
		basicWorkshop: false,
		diyInternal: 'Limited',
		genericConsultant: 'Project-Based',
		eaai: true
	}
];

export const openSourceProjects: OpenSourceProject[] = [
	{
		slug: 'ai-readiness-framework',
		title: 'AI Readiness Assessment Framework',
		description:
			'Open-source assessment tool for evaluating organizational AI readiness across six dimensions: strategy, data, talent, technology, governance, and culture.',
		category: 'Framework',
		stars: 2847,
		language: 'Python',
		tags: ['Assessment', 'Strategy', 'Framework'],
		githubUrl: '#',
		featured: true
	},
	{
		slug: 'ai-governance-templates',
		title: 'AI Governance Templates',
		description:
			'Production-ready governance documentation templates including policy frameworks, risk assessments, audit checklists, and board communication guides.',
		category: 'Templates',
		stars: 1923,
		language: 'Markdown',
		tags: ['Governance', 'Templates', 'Compliance'],
		githubUrl: '#',
		featured: true
	},
	{
		slug: 'kpi-dashboard-starter',
		title: 'AI KPI Dashboard Starter',
		description:
			'Open-source dashboard for tracking AI adoption metrics, workflow integration, and impact measurement across enterprise AI initiatives.',
		category: 'Tool',
		stars: 3412,
		language: 'TypeScript',
		tags: ['Dashboard', 'KPIs', 'Analytics'],
		githubUrl: '#',
		featured: true
	},
	{
		slug: 'prompt-library',
		title: 'Enterprise Prompt Library',
		description:
			'Curated collection of enterprise-grade prompt templates organized by business function, use case, and complexity level.',
		category: 'Resource',
		stars: 5123,
		language: 'Markdown',
		tags: ['Prompts', 'Templates', 'Practical'],
		githubUrl: '#'
	},
	{
		slug: 'ai-change-management-toolkit',
		title: 'AI Change Management Toolkit',
		description:
			'Communication templates, training materials, and adoption playbooks for managing organizational change during AI transformation.',
		category: 'Toolkit',
		stars: 1456,
		language: 'Markdown',
		tags: ['Change Management', 'Culture', 'Adoption'],
		githubUrl: '#'
	},
	{
		slug: 'ai-use-case-prioritizer',
		title: 'AI Use Case Prioritizer',
		description:
			'Scoring tool for evaluating and prioritizing AI use cases based on business impact, feasibility, risk, and strategic alignment.',
		category: 'Tool',
		stars: 987,
		language: 'Python',
		tags: ['Strategy', 'Prioritization', 'Tool'],
		githubUrl: '#'
	}
];

export const bookingTypes: BookingType[] = [
	{
		slug: 'strategy-consultation',
		title: 'Strategy Consultation',
		description:
			'One-on-one session with our AI strategy team to assess your organization\'s AI readiness and identify transformation opportunities.',
		duration: '60 minutes',
		priceLabel: 'Complimentary',
		category: 'Consultation',
		icon: '🎯'
	},
	{
		slug: 'enterprise-advisory-call',
		title: 'Enterprise Advisory Call',
		description:
			'Deep-dive consultation for organizations considering comprehensive AI transformation engagements or enterprise partnerships.',
		duration: '90 minutes',
		priceLabel: 'Complimentary',
		category: 'Advisory',
		icon: '🏢'
	},
	{
		slug: 'private-training-inquiry',
		title: 'Private Training Inquiry',
		description:
			'Discuss custom training program design for your team, department, or organization. Includes needs assessment and proposal.',
		duration: '45 minutes',
		priceLabel: 'Complimentary',
		category: 'Training',
		icon: '📋'
	},
	{
		slug: 'certification-enrollment',
		title: 'Certification Enrollment',
		description:
			'Guidance on selecting and enrolling in the right certification pathway for individuals or enterprise teams.',
		duration: '30 minutes',
		priceLabel: 'Complimentary',
		category: 'Certification',
		icon: '🏆'
	},
	{
		slug: 'cohort-registration',
		title: 'Cohort Registration',
		description:
			'Register for upcoming live training sessions and cohort-based learning programs.',
		duration: 'Varies',
		category: 'Registration',
		icon: '📅'
	},
	{
		slug: 'implementation-consultation',
		title: 'Implementation Consultation',
		description:
			'Technical consultation for organizations in active AI implementation phases needing expert guidance on deployment, scaling, or optimization.',
		duration: '60 minutes',
		price: 495,
		category: 'Implementation',
		icon: '⚙️'
	}
];

export const openSourceCategories = ['All', 'Framework', 'Templates', 'Tool', 'Resource', 'Toolkit'];
