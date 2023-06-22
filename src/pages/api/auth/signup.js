import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				// Handle email signup logic here
				// You can save the user details or perform additional actions here
				const user = { id: 1, email: credentials.email };
				return Promise.resolve(user);
			},
		}),
	],
});
