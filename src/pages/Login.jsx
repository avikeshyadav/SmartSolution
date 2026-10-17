import { useState } from "react";
import { Code2, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../Config/AuthLayout";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email.trim() || !form.password) {
      setMessage("Please enter your email and password.");
      return;
    }
    // UI demo only. Connect this form to your backend authentication API.
    setMessage("Demo form submitted. Connect your backend API to verify login.");
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to continue building something great.">
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Email address</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <Mail size={18} className="shrink-0 text-slate-500" />
            <input name="email" type="email" autoComplete="email" value={form.email} onChange={update} placeholder="you@example.com" className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600" required />
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Password</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <LockKeyhole size={18} className="shrink-0 text-slate-500" />
            <input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={form.password} onChange={update} placeholder="Enter your password" className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600" required />
            <button type="button" onClick={() => setShowPassword((show) => !show)} aria-label={showPassword ? "Hide password" : "Show password"} className="text-slate-500 hover:text-white">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="inline-flex items-center gap-2 text-slate-400">
            <input type="checkbox" name="remember" checked={form.remember} onChange={update} className="h-4 w-4 accent-indigo-500" />
            Remember me
          </label>
          <button type="button" onClick={() => setMessage("Password reset needs a backend email flow.")} className="font-semibold text-indigo-300 hover:text-indigo-200">Forgot password?</button>
        </div>

        {message && <p role="status" className="rounded-xl border border-indigo-400/20 bg-indigo-400/10 px-3.5 py-3 text-sm leading-5 text-indigo-200">{message}</p>}

        <button type="submit" className="w-full rounded-xl bg-indigo-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">Log in to CodePath</button>
      </form>

      <div className="my-6 flex items-center gap-3"><span className="h-px flex-1 bg-white/10" /><span className="text-xs text-slate-600">OR CONTINUE WITH</span><span className="h-px flex-1 bg-white/10" /></div>
      <button type="button" onClick={() => setMessage("GitHub login is a placeholder. Configure OAuth to enable it.")} className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"><Code2 size={18} /> Continue with GitHub</button>

      <p className="mt-7 text-center text-sm text-slate-400">New to CodePath? <Link to="/register" className="font-bold text-indigo-300 hover:text-indigo-200">Create an account</Link></p>
    </AuthLayout>
  );
}
