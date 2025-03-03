import { AuthForm } from '@auth/AuthForm/AuthForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Recovery'
};

export default function Recovery() {
	return <AuthForm />;
}
