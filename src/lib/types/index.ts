// ===== Core Data Types =====

export interface Course {
	slug: string;
	title: string;
	description: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Executive';
	format: 'Self-Paced' | 'Cohort' | 'Hybrid';
	duration: string;
	category: string;
	modules: number;
	lessons: number;
	price?: number;
	featured?: boolean;
	tags: string[];
	instructor?: Instructor;
	outcomes?: string[];
	curriculum?: Module[];
}

export interface Module {
	title: string;
	lessons: Lesson[];
}

export interface Lesson {
	title: string;
	duration: string;
	type: 'video' | 'reading' | 'quiz' | 'exercise';
	preview?: boolean;
	completed?: boolean;
}

export interface LiveTraining {
	slug: string;
	title: string;
	description: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Executive';
	date: string;
	time: string;
	timezone: string;
	duration: string;
	format: 'Virtual' | 'In-Person' | 'Hybrid';
	instructor: Instructor;
	price: number;
	seatsTotal: number;
	seatsAvailable: number;
	category: string;
	tags: string[];
	agenda?: AgendaItem[];
	outcomes?: string[];
	testimonials?: Testimonial[];
	faqs?: FAQ[];
}

export interface AgendaItem {
	time: string;
	title: string;
	description: string;
}

export interface Instructor {
	name: string;
	title: string;
	bio: string;
	avatar?: string;
	specialties: string[];
}

export interface Certification {
	slug: string;
	title: string;
	description: string;
	level: 'Foundation' | 'Professional' | 'Expert' | 'Executive';
	domains: string[];
	duration: string;
	assessments: number;
	price: number;
	priceEnterprise?: number;
	prerequisites?: string[];
	outcomes?: string[];
	featured?: boolean;
}

export interface Testimonial {
	name: string;
	title: string;
	company: string;
	quote: string;
	rating?: number;
	avatar?: string;
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface ComparisonRow {
	feature: string;
	basicWorkshop: string | boolean;
	diyInternal: string | boolean;
	genericConsultant: string | boolean;
	eaai: string | boolean;
}

export interface OpenSourceProject {
	slug: string;
	title: string;
	description: string;
	category: string;
	stars: number;
	language: string;
	tags: string[];
	githubUrl: string;
	featured?: boolean;
}

export interface BookingType {
	slug: string;
	title: string;
	description: string;
	duration: string;
	price?: number;
	priceLabel?: string;
	category: string;
	icon: string;
}

export interface PricingTier {
	name: string;
	description: string;
	price: string;
	priceDetail?: string;
	features: string[];
	highlighted?: boolean;
	cta: string;
}

// ===== Dashboard / Platform Types =====

export interface EnrolledCourse {
	courseSlug: string;
	title: string;
	progress: number;
	lastAccessed: string;
	status: 'in-progress' | 'completed' | 'not-started';
}

export interface CertificationProgress {
	certSlug: string;
	title: string;
	progress: number;
	assessmentsPassed: number;
	assessmentsTotal: number;
	status: 'in-progress' | 'completed' | 'not-started';
}

export interface QuizQuestion {
	id: string;
	question: string;
	options: string[];
	correctIndex?: number;
	explanation?: string;
}

export interface QuizState {
	currentQuestion: number;
	totalQuestions: number;
	answers: (number | null)[];
	score?: number;
	passed?: boolean;
}

// ===== Navigation Types =====

export interface NavItem {
	label: string;
	href: string;
	children?: NavItem[];
}
