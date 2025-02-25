'use client';

import { AuthFormUI } from '@auth/AuthFormUI/AuthFormUI';
import { AUTH_FORM_CONFIG } from '@auth/auth-form.config';
import { AUTH_ACTIONS } from '@auth/auth-form.actions';
import { usePathname } from 'next/navigation';

export function AuthForm() {
	const pathname = usePathname();
	const config = AUTH_FORM_CONFIG[pathname];
	const action = AUTH_ACTIONS[pathname];

	return <AuthFormUI config={config} action={action} />;
}
