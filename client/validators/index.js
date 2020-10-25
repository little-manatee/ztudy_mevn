import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("min", {
	...min,
	message: "Too short",
});
extend("email", {
	...email,
	message: "Invalid email address",
});
extend("required", {
	...required,
	message: "This field is required",
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

export default {};