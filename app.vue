<script lang="ts" setup>
import { Toaster } from 'vue-sonner'

useHead({
	titleTemplate: title => {
		return `${title} - Ataxanov Dostonbek`
	},
})

const isResponsiveNavbarVisible = ref(false)

const openResponsiveNavbar = () => {
	isResponsiveNavbarVisible.value = true
	console.log(isResponsiveNavbarVisible.value)
}

const closeResponsiveNavbar = () => {
	isResponsiveNavbarVisible.value = false
}
</script>

<template>
	<div class="template font-poppins">
		<ClientOnly>
			<Toaster position="top-right" />
		</ClientOnly>
		<nav class="navbar z-50 shadow-lg transition-all bg-blue py-4 fixed top-0 w-full">
			<div class="container px-2 flex items-center justify-between mx-auto">
				<div class="first-part flex items-center space-x-4">
					<div class="left xl:w-[70px] xl:h-[70px] w-[50px] h-[50px]">
						<IoLogo class="w-full h-full" />
					</div>
					<div class="right text-white">
						<h1 class="name font-bold xl:text-4xl text-2xl">Ataxanov Dostonbek</h1>
						<p class="job xl:text-lg text-base">Copywriter | Marketing Specialist</p>
					</div>
				</div>
				<div class="second-part space-x-4 text-white lg:flex hidden">
					<NuxtLink class="p-1 transition-all hover:text-yellow-bolder" to="/">Home</NuxtLink>
					<NuxtLink class="p-1 transition-all hover:text-yellow-bolder" to="#about">About</NuxtLink>
					<NuxtLink class="p-1 transition-all hover:text-yellow-bolder" to="#services"
						>Services</NuxtLink
					>
					<NuxtLink class="p-1 transition-all hover:text-yellow-bolder" to="#expertise"
						>Expertise</NuxtLink
					>
					<NuxtLink to="#contact" class="bg-yellow-bolder rounded p-1 px-2 font-bold"
						>Contact</NuxtLink
					>
				</div>
				<div class="second-part-responsive lg:hidden">
					<button @click="openResponsiveNavbar" class="text-white">
						<IconMenu class="w-[30px] h-[30px]" />
					</button>
					<div
						:class="{
							'scale-y-100': isResponsiveNavbarVisible,
							'scale-y-0': !isResponsiveNavbarVisible,
						}"
						class="menu-links origin-top transition-all duration-700 h-screen w-full fixed inset-0 bg-blue z-50 flex flex-col items-center justify-center space-y-6 text-lg text-white"
					>
						<button
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							@click="closeResponsiveNavbar"
							class="text-white transition-all duration-[900ms] fixed top-5 left-5"
						>
							<IconX class="w-[30px] h-[30px]" />
						</button>
						<NuxtLink
							@click="closeResponsiveNavbar"
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							class="p-1 transition-all duration-[950ms] hover:text-yellow-bolder"
							to="/"
							>Home</NuxtLink
						>
						<NuxtLink
							@click="closeResponsiveNavbar"
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							class="p-1 transition-all duration-[950ms] hover:text-yellow-bolder"
							to="#about"
							>About</NuxtLink
						>
						<NuxtLink
							@click="closeResponsiveNavbar"
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							class="p-1 transition-all duration-[950ms] hover:text-yellow-bolder"
							to="#services"
							>Services</NuxtLink
						>
						<NuxtLink
							@click="closeResponsiveNavbar"
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							class="p-1 transition-all duration-[950ms] hover:text-yellow-bolder"
							to="#expertise"
							>Expertise</NuxtLink
						>
						<NuxtLink
							@click="closeResponsiveNavbar"
							:class="{
								'opacity-100': isResponsiveNavbarVisible,
								'opacity-0': !isResponsiveNavbarVisible,
							}"
							to="#contact"
							class="bg-yellow-bolder duration-[950ms] rounded p-1 px-2 font-bold"
							>Contact</NuxtLink
						>
					</div>
				</div>
			</div>
		</nav>
		<NuxtPage />
	</div>
</template>

<style></style>
