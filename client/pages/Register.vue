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
					<div v-show="error_msg" class="pb-1 w-full text-center">
						<span class="text-red-400 text-xs font-normal px-2">
							{{ error_msg }}
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
	import formMixin from "@mixins/form";
    export default {
		mixins: [formMixin],
		data: () => ({
			errors: {},
			error_msg: "",
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
					this.errors = {}
					this.error_msg = ""
					this.toggleLoading()
					this.$store
						.dispatch(POST_REGISTER, this.model)
						.then(response => {
                            this.toggleLoading()
                            this.setAuth(response.data)
						})
						.catch((error, response) => {
							this.toggleLoading()
							
							if (typeof error.response.data == "string") {
								this.errors = { error: error.response.data };
								this.error_msg = error.response.data;
								return;
							}

							Object.keys(error.response.data).forEach((field) => {
								this.errors[field] = error.response.data[field];
								this.error_msg  = "| " + field + " : " + error.response.data[field] + " |";
							});
						});
                })
            }
        },
    }
</script>