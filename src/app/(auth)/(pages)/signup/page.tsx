import { AuthForm } from '@auth/AuthForm/AuthForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'SignUp'
};

export default function SignUp() {
	return <AuthForm />;
}
