import User from "@models/User";
import * as Yup from "yup";

const RegisterValidator = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string()
		.email()
		.required(),
	password: Yup.string()
		.min(6)
		.required(),
});

export default (req, res, next) => {
	const { name, email, password } = req.body;
	RegisterValidator.validate({ name, email, password })
		.then((results) => {
			User.findOne({ email: email.toLowerCase() })
				.then((uresults) => {
					if (uresults) {
						return res.status(422).json({
							email: "User is existed.",
						});
					} else {
						return next();
					}
				})
				.catch((error) => {
					return next();
				});
		})
		.catch((error) => {
			console.log("Validation Failed", error);
			return res.status(422).json({
				[error.path]: error.message,
			});
		});
};
