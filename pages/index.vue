<script setup lang="ts">
import axios from 'axios'
import { toast } from 'vue-sonner'
useHead({
	title: 'Home',
	meta: [{ name: 'description', content: "Ataxanov Dostonbek's service" }],
})
useSeoMeta({
	title: 'Ataxanov Dostonbek',
	ogTitle: 'Ataxanov Dostonbek',
	description: "Ataxanov Dostonbek's service",
	ogDescription: "Ataxanov Dostonbek's service",
})

const message = ref<{ fullname: string; email: string; about?: string }>({
	fullname: '',
	email: '',
	about: '',
})

const token = '6910665574:AAF0_BEnh8Acg0kNWzViQiq9pfyPOzhHFp0'
const chat_id = -4245375395
const endpoint = ref(`https://api.telegram.org/bot${token}/sendMessage`)
const disableButton = ref(false)

const { $toast } = useNuxtApp()

const sendMessage = async (e: Event) => {
	try {
		disableButton.value = true
		e.preventDefault()
		const res = await axios.post(
			endpoint.value,
			{
				chat_id,
				text: `
				🪪${message.value?.fullname}
				📩${message.value?.email}
				✍️${message.value?.about}
				`,
				parse_mode: 'html',
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (!res || !res.data.ok) {
			throw new Error("Couldn't send the message, try again!")
		}

		toast('Your message is sent!')
		message.value.about = ''
		message.value.fullname = ''
		message.value.email = ''
		disableButton.value = false
		return
	} catch (error: any) {
		disableButton.value = false
		toast(error.message)
	}
}
</script>

<template>
	<main class="text-lg h-screen">
		<header class="header text-white h-[70%]">
			<div class="container mx-auto h-full flex flex-col justify-center px-2">
				<div class="md:w-[70%] w-full">
					<h4 class="md:text-2xl text-xl font-semibold text-yellow">
						It is time to level up your business
					</h4>
					<h1 class="md:text-6xl text-4xl font-bold">
						Words that sell everything if it used for good
					</h1>
				</div>
			</div>
		</header>
		<section class="bg-blue">
			<div
				class="container text-white font-semibold md:text-4xl text-2xl mx-auto px-2 md:py-32 py-20 flex items-center"
			>
				Exploit the advantages of persuasive content to improve brand interaction, build customer
				rapport, and boost your revenue.
			</div>
		</section>
		<section
			class="container mx-auto px-2 flex flex-col lg:flex-row items-center lg:justify-between justify-center sm:py-40 py-28"
		>
			<div class="left-part text-center space-y-6">
				<h1 class="text-6xl font-bold mb-10 leading-[80px] text-blue">Imagine this:</h1>
				<p class="text-xl">You’ve got a killer course, mentorship program, or product.</p>
				<p class="text-xl">
					It’s not just a hobby; it’s your main hustle, paying the bills and then some.
				</p>
				<p class="text-xl">You’re all in, treating it with the dedication it deserves.</p>
				<p class="text-xl">But despite all your blood, sweat, and tears,</p>
				<p class="text-xl">The results might be a bit underwhelming.</p>
				<div class="bottom mt-8">
					<p><b class="text-yellow text-xl font-bold">Sound familiar?</b></p>
					<p class="text-xl font-semibold">Time to bring in a pro to turn things around!</p>
				</div>
			</div>
			<div class="right-part flex items-center justify-center lg:mt-0 mt-10">
				<img src="/handshake.jpg" class="w-full h-full" alt="Ataxanov Dostonbek" />
			</div>
		</section>
		<section id="about" class="bg-gray-100 py-20">
			<div
				class="container mx-auto px-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center"
			>
				<div class="left-part xl:w-[49%] lg:w-[60%] w-full">
					<h1 class="lg:text-5xl mb-14 text-3xl font-bold text-blue">Hi, I’m Dostonbek!</h1>
					<p class="text-xl leading-[40px]">
						I help business owners take their marketing to the next level with smart and effective
						copywriting. With a strong background in Sales Funnel Strategy and hands-on experience,
						I do more than just polish your words—I craft them to fit your business perfectly. It’s
						like having a custom-made plan designed to get real, measurable results, all while
						keeping your brand’s voice and personality front and center
					</p>
					<p class="mt-4 text-yellow-bolder">
						<i>Let’s team up and make something amazing happen!</i>
					</p>
				</div>
				<div class="right-part xl:w-[40%] md:w-[70%] w-full md:mt-0 mt-8">
					<img src="/doston.jpg" class="w-full h-full" alt="Ataxanov Dostonbek" />
				</div>
			</div>
		</section>
		<section class="py-20">
			<div
				class="container mx-auto px-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center"
			>
				<div class="main-part">
					<h1 class="lg:text-5xl text-blue mb-5 text-3xl font-bold text-center">
						Having a dedicated copywriter on your team is a game-changer...
					</h1>
					<p class="text-yellow-bolder font-bold mb-16 text-lg text-center">
						WE’RE CRAFTSMEN IN THE ART OF WORDS.
					</p>
					<p class="text-xl leading-[50px] text-center">
						I’m here to help you take your marketing to the next level with some savvy copywriting.
						I bring a fresh perspective and a genuine passion for crafting compelling messages. I’ll
						work with you to create a strategy that fits your unique needs and delivers real
						results.
					</p>
					<p class="mt-4 text-yellow-bolder text-center mb-24">
						<i>Let’s team up and make something amazing happen!</i>
					</p>
					<div
						class="boxes flex md:flex-row md:justify-between flex-col justify-start mt-10 md:gap-x-10 gap-y-10"
					>
						<div class="left-part">
							<p class="mb-4 font-bold">
								With an agency or generic content provider, you might get:
							</p>
							<p class="flex items-center">
								<IconX class="text-red-500 mr-2" /> Writing that feels bland and unoriginal.
							</p>
							<p class="flex items-center">
								<IconX class="text-red-500 mr-2" /> Copy that misses the mark on your brand’s
								personality.
							</p>
							<p class="flex items-center">
								<IconX class="text-red-500 mr-2" /> Content that demands more tweaks and
								adjustments.
							</p>
						</div>
						<div class="right-part">
							<p class="mb-4 font-bold">Opt for a personal copywriter, and you’ll enjoy:</p>
							<p class="flex items-center">
								<IconCheck class="text-green-500 mr-2" /> Unique, engaging writing that sets you
								apart.
							</p>
							<p class="flex items-center">
								<IconCheck class="text-green-500 mr-2" /> Copy that speaks in your brand’s authentic
								voice and resonates with your audience.
							</p>
							<p class="flex items-center">
								<IconCheck class="text-green-500 mr-2" /> Content tailored to your satisfaction and
								beyond.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="py-20 bg-gray-100">
			<div class="container mx-auto px-2">
				<h1 class="lg:text-5xl text-3xl mb-5 font-bold text-center text-blue">
					A masterful copywriter can make your message truly shine .
				</h1>
				<p class="text-yellow-bolder uppercase font-bold mb-24 text-lg text-center">
					we've invested countless hours in mastering our art
				</p>
				<div
					class="boxes flex md:flex-row md:justify-between flex-col justify-start mt-10 md:gap-x-10 gap-y-10"
				>
					<div class="left-part">
						<p class="mb-4 font-bold">If you try to do it all on your own:</p>
						<p class="flex items-center">
							<IconX class="text-red-500 mr-2" /> You’ll spend too much time, and things will take
							longer than you want.
						</p>
						<p class="flex items-center">
							<IconX class="text-red-500 mr-2" /> You’ll get too caught up in the details and might
							miss the big picture.
						</p>
						<p class="flex items-center">
							<IconX class="text-red-500 mr-2" /> You’ll feel stressed trying to make it perfect.
						</p>
					</div>
					<div class="right-part">
						<p class="mb-4 font-bold">But if you hire someone who knows what they’re doing:</p>
						<p class="flex items-center">
							<IconCheck class="text-green-500 mr-2" /> You’ll get what you need fast, and it’ll
							help you succeed.
						</p>
						<p class="flex items-center">
							<IconCheck class="text-green-500 mr-2" /> You’ll have someone else’s view to help you
							see things more clearly.
						</p>
						<p class="flex items-center">
							<IconCheck class="text-green-500 mr-2" /> You’ll feel relaxed, knowing the hard work
							is being handled for you.
						</p>
					</div>
				</div>
				<div class="last-part text-center my-10 space-y-4">
					<p class="text-lg font-semibold text-yellow-bolder">Can’t Find What You Need?</p>
					<p class="">
						If you’re seeking expert copywriting, you’ve come to the right place! Custom projects
						are my specialty, and I’m here to adapt to your specific requirements. Just get in
						touch, and let’s explore how we can achieve your goals together.
					</p>
				</div>
			</div>
		</section>
		<section
			id="vsl"
			class="container mx-auto px-2 flex flex-col lg:flex-row items-center lg:justify-between justify-center sm:py-40 py-28"
		>
			<div class="left-part lg:w-[40%] w-full space-y-6">
				<h1 class="text-6xl font-bold mb-10 leading-[80px] text-blue">Video Sales Letter (VSL):</h1>
				<p class="text-lg">
					Want your message to really stand out? I’ll write a video sales letter that grabs
					attention and gets people excited about what you’re offering. Think of it like a super
					catchy story that makes your product or service look amazing. I handle all the writing, so
					you can focus on sharing your awesome message with the world.
				</p>
			</div>
			<div class="right-part flex lg:w-[50%] w-full items-center justify-center lg:mt-0 mt-10">
				<img src="/laptop.webp" class="w-full h-full" alt="Ataxanov Dostonbek" />
			</div>
		</section>
		<section id="services" class="py-20 bg-gray-100">
			<div class="container mx-auto px-2">
				<h1 class="lg:text-5xl text-3xl mb-5 font-bold text-center text-blue">
					Here to meet all of your copywriting needs
				</h1>
				<div class="boxes">
					<div class="left-part space-y-[40px]">
						<div class="box flex items-start">
							<div class="logo h-full">
								<IconCheck class="text-green-500 w-[30px] h-[30px]" />
							</div>
							<div class="text ml-2">
								<h4 class="text-xl mb-2 font-bold">Email Marketing</h4>
								<p>
									Get emails that convert. Offering email marketing campaigns with sequences made
									for your clients.
								</p>
							</div>
						</div>
						<div class="box flex items-start">
							<div class="logo h-full">
								<IconCheck class="text-green-500 w-[30px] h-[30px]" />
							</div>
							<div class="text ml-2">
								<h4 class="text-xl mb-2 font-bold">Landing Pages</h4>
								<p>
									Get Landing pages that improve your sales funnel and bring in clients with search
									engine optimization. Offering 1 page sales pages, opt-in pages, lead magnet pages,
									click through pages, or any other landing page you need.
								</p>
							</div>
						</div>
						<div class="box flex items-start">
							<div class="logo h-full">
								<IconCheck class="text-green-500 w-[30px] h-[30px]" />
							</div>
							<div class="text ml-2">
								<h4 class="text-xl mb-2 font-bold">Full website copy</h4>
								<p>
									Up to 5 pages of rich, SEO copy to get you the most effective engagement on your
									website and drive sales. I partner with my own amazing graphic designers, or one
									your choice.
								</p>
							</div>
						</div>
						<div class="box flex items-start">
							<div class="logo h-full">
								<IconCheck class="text-green-500 w-[30px] h-[30px]" />
							</div>
							<div class="text ml-2">
								<h4 class="text-xl mb-2 font-bold">Video Sales Letter (VSL):</h4>
								<p>
									Want your message to really stand out? I’ll write a video sales letter that grabs
									attention and gets people excited about what you’re offering. Think of it like a
									super catchy story that makes your product or service look amazing. I handle all
									the writing, so you can focus on sharing your awesome message with the world.
								</p>
							</div>
						</div>
					</div>
					<div class="right-part">
						<div class="box flex items-start">
							<div class="logo h-full">
								<IconShieldAlert class="text-red-500 w-[30px] h-[30px]" />
							</div>
							<div class="text ml-2">
								<h4 class="text-xl mb-2 font-bold">FREE Consultation & Copy Audit</h4>
								<p>
									Get an in-depth review of your website or current copy to identify every area open
									to improvement. Get a chance to talk to me about you copy ideas!
								</p>
							</div>
						</div>
						<div class="box-img my-10 flex items-center justify-center">
							<img src="/laptop.jpg" class="sm:w-[60%] w-[85%]" alt="Ataxanov Dostonbek" />
						</div>
					</div>
				</div>
				<p class="text-yellow-bolder mb-4 text-center">Don't see what your looking for?</p>
				<p class="text-center">
					If it's copywriting, I provide it! Custom projects are my favorite, just reach out to see
					how flexible I am.
				</p>
			</div>
		</section>
		<section
			id="expertise"
			class="bg-blue text-white flex items-center justify-center min-h-screen py-12"
		>
			<div
				class="container mx-auto px-2 h-full flex lg:flex-row flex-col lg:justify-between justify-center items-center"
			>
				<div class="left-part xl:w-[49%] lg:w-[60%] w-full">
					<h1 class="lg:text-5xl mb-14 text-3xl font-bold">Why Dostonbek Ataxanov?</h1>
					<p class="text-xl leading-[40px]">
						I stand by three core values: honesty, clarity, integrity and transparency. These
						qualities should be standard across the industry, but unfortunately, they often aren’t.
						At my firm, I make it a point to deliver these as guarantees. In an industry where
						smooth talkers (copywriters) and quick fixers abound, my goal is to offer a refreshing
						and genuine service. With me, you get not just a provider, but a reliable partner
						committed to making things clear and simple.
					</p>
				</div>
				<div class="right-part xl:w-[40%] md:w-[70%] w-full md:mt-0 mt-8">
					<img src="/why.png" class="w-full h-full" alt="Ataxanov Dostonbek" />
				</div>
			</div>
		</section>
		<section
			id="expertise-part2"
			class="bg-blue text-white flex items-center justify-center min-h-screen py-12"
		>
			<div class="container mx-auto px-2 h-full">
				<h1 class="lg:text-3xl mb-14 text-xl font-bold text-center">What I Bring to the Table:</h1>
				<div class="expertise-boxes">
					<div class="box w-auto flex flex-col items-center justify-center space-y-7 text-center">
						<div class="icon">
							<IconHandshake class="w-[40px] h-[40px]" />
						</div>
						<div class="text space-y-4">
							<h4 class="text-2xl font-bold">Business growth partner</h4>
							<p class="opacity-80 font-light">
								Think of me as your go-to marketing strategist, dedicated to driving your business
								forward. Your goals are my mission, and I’m fully invested in making our
								collaboration a success. Together, we’ll turn your vision into a thriving reality.
							</p>
						</div>
					</div>
					<div class="box w-auto flex flex-col items-center justify-center space-y-7 text-center">
						<div class="icon">
							<IconNotebookPen class="w-[40px] h-[40px]" />
						</div>
						<div class="text space-y-4">
							<h4 class="text-2xl font-bold">Words That Sell</h4>
							<p class="opacity-80 font-light">
								I’ll give my full attention to turning your words and ads into clear, simple, and
								irresistible messages. I focus on making your content not just eye-catching, but
								also money-making. With my help, you won’t just attract customers—you’ll watch your
								profits grow.
							</p>
						</div>
					</div>
					<div class="box w-auto flex flex-col items-center justify-center space-y-7 text-center">
						<div class="icon">
							<IconMessageCircle class="w-[40px] h-[40px]" />
						</div>
						<div class="text space-y-4">
							<h4 class="text-2xl font-bold">High-Speed Communication</h4>
							<p class="opacity-80 font-light">
								I’m here to help you grow your business with no delays and no limits on timing.
								Reach out anytime, and you’ll see how quickly I can get back to you. In business,
								speed is crucial, and I’m all about keeping things moving.
							</p>
						</div>
					</div>
					<div class="box w-auto flex flex-col items-center justify-center space-y-7 text-center">
						<div class="icon">
							<IconLightbulb class="w-[40px] h-[40px]" />
						</div>
						<div class="text space-y-4">
							<h4 class="text-2xl font-bold">New-Age Strategies</h4>
							<p class="opacity-80 font-light">
								In the fast-paced world of business, staying ahead means embracing change. I’ll
								deploy modern, smart strategies to ensure your business not only keeps up but leads
								the way. Let’s make sure you’re not just in the now, but ahead of the game.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="contact" class="py-28 bg-gray-100">
			<div class="container px-2 mx-auto titles text-center mb-24">
				<h1 class="lg:text-5xl text-3xl font-bold text-center text-blue">
					Ready to See Your Own Results?
				</h1>
				<p class="text-yellow-bolder font-semibold text-lg mt-4">
					Take the next step towards bettering your business
				</p>
			</div>
			<div
				class="container flex lg:flex-row flex-col items-start lg:justify-between justify-center lg:gap-x-20 gap-y-16 mx-auto px-2"
			>
				<div class="left lg:w-[44%] w-full">
					<form @submit="sendMessage" class="form">
						<h3 class="title lg:text-3xl text-xl font-bold text-center mb-10">
							Contact to get a free consultation!
						</h3>
						<div class="form-group space-y-6">
							<div class="form-input flex flex-col items-start w-full">
								<label for="fullname">Fullname *</label>
								<input
									v-model="message.fullname"
									type="text"
									id="fullname"
									required
									class="outline-none border-b-2 bg-transparent transition-all w-full p-2 focus:border-b-yellow-bolder"
									autocomplete="off"
								/>
							</div>
							<div class="form-input flex flex-col items-start w-full">
								<label for="email">Email *</label>
								<input
									v-model="message.email"
									type="email"
									id="email"
									required
									class="outline-none border-b-2 bg-transparent transition-all w-full p-2 focus:border-b-yellow-bolder"
									autocomplete="off"
								/>
							</div>
							<div class="form-input flex flex-col items-start w-full">
								<label for="about">Tell me a bit about yourself and your business!</label>
								<textarea
									v-model="message.about"
									type="text"
									id="about"
									class="outline-none min-h-[200px] max-h-[300px] border-b-2 bg-transparent transition-all w-full p-2 focus:border-b-yellow-bolder"
									autocomplete="off"
								></textarea>
							</div>
							<button
								:disabled="disableButton"
								type="submit"
								class="px-8 w-full py-2 rounded text-white font-semibold transition-all hover:bg-yellow-bolder bg-yellow"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div class="right lg:w-[44%]">
					<h3 class="title lg:text-3xl text-xl font-bold mb-10">Once We’re in Contact…</h3>
					<div class="list space-y-4 mb-12">
						<p>
							1. Initial Contact: I’ll reach out via email to arrange your complimentary
							consultation.
						</p>
						<p>
							2. Needs Assessment: We’ll discuss your problems and work together to figure out the
							best possible approach.
						</p>
						<p>3. Strategic Planning: We’ll outline the optimal path forward.</p>
					</div>
					<p class="italic text-yellow-bolder">
						No obligation for the consultation! If, after our discussion, you feel we’re not the
						right fit, that’s perfectly fine.
					</p>
				</div>
			</div>
		</section>

		<footer class="bg-blue text-white text-center py-4 text-sm">
			<p>© 2024 Ataxanov Dostonbek. All rights reserved.</p>
		</footer>
	</main>
</template>

<style scoped>
.header {
	background-image: linear-gradient(rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0.774)),
		url(../assets/media/man-working.jpg);
	background-position: right center bottom;
	background-repeat: no-repeat;
	background-size: cover;
}

.boxes {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	row-gap: 40px;
	margin: 100px 0;
}

.expertise-boxes {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 50px;
	margin-top: 120px;
	place-items: start;
}
</style>
