import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
	const { data: session, status } = useSession();

	// if (status !== "authenticated") {
	// 	return <p>Loading...</p>;
	// }

	// if (session) {
	// 	return (
	// 		<>
	// 			<p>Welcome, {session.user?.email}!</p>
	// 			<button onClick={() => signOut()}>Sign out</button>
	// 		</>
	// 	);
	// }

	return (
		<>
			<button onClick={() => signIn("google")}>Sign in with Google</button>
			<button onClick={() => signIn("apple")}>Sign in with Apple</button>
			<form
				onSubmit={() =>
					signIn("credentials", { email: "user@example.com", callbackUrl: "/" })
				}
			>
				<input type="email" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Sign in with Email</button>
			</form>
		</>
	);
}
