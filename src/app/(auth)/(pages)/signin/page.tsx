import { AuthForm } from '@auth/AuthForm/AuthForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'SignIn'
};

export default function SignIn() {
	return <AuthForm />;
}
