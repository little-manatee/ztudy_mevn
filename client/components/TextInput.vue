<template>
	<div>
		<validation-provider ref="provider" :rules="rules" v-slot="{ errors }">
			<div class="mb-2">
				<label :for="id">
					{{ label }}
				</label>
				<input
					ref="input"
					:id="id"
					:placeholder="placeholder"
					:type="type"
					:value="value"
					:disabled="isDisabled"
					:autocomplete="autocomplete"
					@input="$emit('input', $event.target.value)"
					modifier="underbar"
					class="w-full text-xs focus:outline-none bg-brown-lightest p-5 text-brown"
				>
			</div>

			<div v-show="showError && errors[0]" class="mb-2 text-xs text-red-400">
				{{ errors[0] }}
			</div>
		</validation-provider>
	</div>
</template>

<script>
    export default {
		props: {
			label: {
				type: String,
				required: false,
			},
			id: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				required: false,
				default: "text",
			},
			value: {
				type: String,
				required: false,
				default: "",
			},
			rules: {
				type: String,
				required: false,
				default: "",
			},
			error: {
				type: String,
				required: false,
				default: "",
			},
			readonly: {
				type: Boolean,
				required: false,
				default: false,
			},
			autocomplete: {
				type: String,
				required: false,
			},
			placeholder: {
				type: String,
				required: false,
			},
			showError: {
				type: Boolean,
				required: false,
				default: true,
			},
		},
		computed: {},
		data: () => ({
			isDisabled: false,
		}),
		methods: {
			focus() {
				this.$refs.input.focus();
			},
		},
		watch: {
			error: function(newVal, oldVal) {
				if (!newVal) {
					return;
				}
				this.$refs.provider.applyResult({
					errors: [this.error],
					valid: false,
					failedRules: {},
				});
			},
		},
		mounted() {
			if (this.autocomplete == "off") {
				if (this.autocomplete == "off") {
					console.log( "off");
					this.$refs.input.setAttribute("readonly", "readonly");
				}
				setTimeout(() => {
					if (this.readonly) {
						console.log('Mounted x')
					} else {
						this.$refs.input.removeAttribute("readonly");
					}
				}, 500);
			}
		},
    }
</script>