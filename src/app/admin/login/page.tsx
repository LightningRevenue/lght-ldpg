import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/admin-auth';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Admin Login | LightningRevenue',
  description: 'LightningRevenue admin access.',
};

export default async function AdminLoginPage() {
  const admin = await getCurrentAdmin();

  if (admin) {
    redirect('/admin');
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 pt-40 pb-24 text-black">
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
            Restricted
          </div>
          <h1 className="text-[4rem] font-medium leading-[0.9] tracking-[-0.04em] text-[#2f5b7c] sm:text-[6rem]">
            Admin
            <span className="block text-[#2f5b7c]/20">access.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-black/60">
            Login is limited to users created manually in the database. There is
            no public registration flow.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}
