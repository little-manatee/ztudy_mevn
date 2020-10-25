<template>
	<div class="container my-16 w-full mx-auto">
		<div class="max-w-sm mx-auto">
			<h1 class="text-center text-gold text-2xl mt-6">
				Register
			</h1>

            <div class="w-full p-6 bg-white shadow-md mt-5 rounded-sm p-12">
				<validation-observer ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
					<text-input
						id="RegisterUsername"
						v-model="model.name"
						placeholder="Fullname"
						type="text"
						rules="required"
						autocomplete="off"
						:error="errors['name']"
					/>
					<text-input
						id="RegisterEmail"
						v-model="model.email"
						placeholder="Email"
						type="text"
						rules="required|email"
						autocomplete="off"
						:error="errors['email']"
					/>
					<text-input
						id="RegisterPassword"
						v-model="model.password"
						placeholder="Password"
						type="password"
						rules="required|min:6"
						autocomplete="off"
						:error="errors['password']"
					/>
					<div v-show="errors['error']" class="pb-1 w-full text-center">
						<span class="text-red-400 text-xs font-normal px-2">
							{{ errors["error"] }}
						</span>
					</div>
					<button
						class="w-full mt-3 text-sm py-5 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-light"
					>
						Sign Up
					</button>
				</validation-observer>
            </div>
        </div>
    </div>
</template> 

<script>
	import formMixin from "@mixins/form";
    export default {
		mixins: [formMixin],
		data: () => ({
			errors: {},
			model: {
				name: "",
				email: "",
				password: "",
			},
		}),
		methods: {
            submit() {
				this.$refs.observer.validate().then((isValid) => {
					if (!isValid) {
                        console.log('some invalid')
						return;
                    }
                    console.log('All valid')
                })
            }
        },
    }
</script>