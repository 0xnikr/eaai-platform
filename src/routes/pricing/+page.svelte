<svelte:head><title>Pricing — EAAI</title></svelte:head>
<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PricingCards from '$lib/components/PricingCards.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import type { PricingTier } from '$lib/types';

	const tiers: PricingTier[] = [
		{
			name: 'Individual',
			description: 'Access courses and certifications as an individual professional.',
			price: 'From $349',
			priceDetail: 'per course',
			features: ['Self-paced course access', 'Certification assessments', 'Digital certificates', 'Community access', '12-month access per course'],
			cta: 'Browse Courses'
		},
		{
			name: 'Team',
			description: 'For teams of 5-25 looking for structured AI capability building.',
			price: 'From $2,500',
			priceDetail: 'per team',
			features: ['Everything in Individual', 'Volume course pricing', 'Team progress dashboard', 'Cohort study groups', 'Dedicated program manager', 'Custom learning paths'],
			highlighted: true,
			cta: 'Contact for Team Pricing'
		},
		{
			name: 'Enterprise',
			description: 'For organizations pursuing comprehensive AI transformation.',
			price: 'Custom',
			priceDetail: 'tailored engagement',
			features: ['Everything in Team', 'Unlimited seat licensing', 'Executive advisory', 'Custom content development', 'LMS integration', 'White-label options', 'Dedicated success manager', 'Board-level reporting'],
			cta: 'Schedule Enterprise Call'
		}
	];
</script>

<Hero eyebrow="Pricing" title="Transparent <span class='gradient'>Investment</span>" subtitle="Flexible pricing models for individuals, teams, and enterprises. Every investment includes structured support and measurable outcomes." compact={true} />

<section class="section-spacing">
	<div class="container-main"><PricingCards {tiers} /></div>
</section>

<CTABand variant="gradient" title="Need a Custom Solution?" description="Our team designs tailored pricing models for organizations with unique requirements." primaryCta={{ label: 'Schedule Call', href: '/bookings' }} />
