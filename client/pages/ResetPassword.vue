<template>
	<div class="container my-16 w-full mx-auto">
		<div class="max-w-sm mx-auto">
			<h1 class="text-center text-gold text-2xl mt-6">
				Reset Your Password
			</h1>

            <div class="w-full p-6 bg-white shadow-md mt-5 rounded-sm">
				<validation-observer ref="observer" v-slot="{ errors }" tag="form" @submit.prevent="submit()">
					<text-input
						id="ResetPassword"
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
						label="Reset"
						:disabled="loading"
						:loading="loading"
					/>
					<div class="my-8 flex justify-center items-center">
						<router-link to="/auth/passwords/email" class="no-underline text-brown">Forgot Password ?</router-link>
					</div>
				</validation-observer>
            </div>
        </div>
	</div>
</template> 

<script>
	import { POST_RESET_PASSWORD } from '@store/auth/actions'
	import formMixin from "@mixins/form";
    export default {
		mixins: [formMixin],
		data: () => ({
			errors: {},
			error_msg: "",
			model: {
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
						.dispatch(POST_RESET_PASSWORD, {
                            ...this.model,
                            token: this.$route.params.token
                        })
						.then(response => {
							this.toggleLoading()
							this.flash('Password has been reset.')
                            this.$router.push('/')
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