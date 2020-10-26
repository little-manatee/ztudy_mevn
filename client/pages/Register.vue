<template>
	<div class="container my-16 w-full mx-auto">
		<div class="max-w-sm mx-auto">
			<h1 class="text-center text-gold text-2xl mt-6">
				Register
			</h1>

            <div class="w-full p-6 bg-white shadow-md mt-5 rounded-sm">
				<validation-observer ref="observer" v-slot="{ errors }" tag="form" @submit.prevent="submit()">
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
					<btn
						label="Sign Up"
						:disabled="loading"
						:loading="loading"
						@click="submit"
					/>
				</validation-observer>
            </div>
        </div>
    </div>
</template> 

<script>
	import { POST_REGISTER, SET_AUTH } from '@store/auth/actions'
    export default {
		data: () => ({
			loading: false,
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
						return;
                    }
					this.errors = {};
					this.toggleLoading();
                    this.$store.dispatch(POST_REGISTER, this.model)
						.then(response => {
							this.toggleLoading();

							localStorage.setItem('auth', JSON.stringify(response.data))
							this.$store.commit(SET_AUTH, response.data)
							
							this.$router.push('/')
						})
                })
            },
            toggleLoading() {
                this.loading = !this.loading
            }
        },
    }
</script>