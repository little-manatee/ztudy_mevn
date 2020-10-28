import { SET_AUTH, UNSET_AUTH, POST_RESENT_EMAIL_CONFIRM } from '@store/auth/actions'

export default {
    computed: {
        auth() {
            return !!this.$store.state.auth.user
        },
        user() {
            return this.$store.state.auth.user
        },
		token() {
			return this.$store.getters.GET_TOKEN;
		},
        confirmed() {
            return !!this.$store.state.auth.user.emailConfirmedAt
        }
    },

    methods: {
        setAuth(payload) {
            localStorage.setItem('auth', JSON.stringify(payload))
            this.$store.commit(SET_AUTH, payload)

            this.$router.push('/')
        },

        unsetAuth() {
            localStorage.removeItem('auth')
            this.$store.commit(UNSET_AUTH)
            this.flash('Successfully logged out.')

            this.$router.push('/')
        },

		resendEmailConfirm() {
			this.$store
				.dispatch(POST_RESENT_EMAIL_CONFIRM, {
					access_token: this.token,
				})
				.then(() => {
                    this.flash('Successfully resent confirm email.')
					if (this.$route.path !== '/') this.$router.push('/')
				})
				.catch(() => {
                    this.flash('Error resending confirm email.')
					if (this.$route.path !== '/') this.$router.push('/')
				});
		},
    }
}