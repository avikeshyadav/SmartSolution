import { useState } from "react";
import { Code2, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "../Config/AuthLayout";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", terms: false });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password.length < 8) {
      setMessageType("error");
      setMessage("Password must be at least 8 characters long.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match. Please check again.");
      return;
    }
    if (!form.terms) {
      setMessageType("error");
      setMessage("Please agree to the terms to continue.");
      return;
    }
    setMessageType("info");
    setMessage("Demo form validated. Connect your backend API to create an account.");
  };

  const fieldClass = "w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600";

  return (
    <AuthLayout title="Create your account" subtitle="Start learning, building, and tracking your progress.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Full name</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <UserRound size={18} className="shrink-0 text-slate-500" />
            <input name="name" type="text" autoComplete="name" value={form.name} onChange={update} placeholder="Your full name" className={fieldClass} required />
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Email address</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <Mail size={18} className="shrink-0 text-slate-500" />
            <input name="email" type="email" autoComplete="email" value={form.email} onChange={update} placeholder="you@example.com" className={fieldClass} required />
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Password</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <LockKeyhole size={18} className="shrink-0 text-slate-500" />
            <input name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} value={form.password} onChange={update} placeholder="At least 8 characters" className={fieldClass} required />
            <button type="button" onClick={() => setShowPassword((show) => !show)} aria-label={showPassword ? "Hide password" : "Show password"} className="text-slate-500 hover:text-white">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Confirm password</span>
          <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-3.5 transition focus-within:border-indigo-400/60">
            <LockKeyhole size={18} className="shrink-0 text-slate-500" />
            <input name="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" value={form.confirmPassword} onChange={update} placeholder="Re-enter your password" className={fieldClass} required />
          </span>
        </label>

        <label className="flex items-start gap-2.5 py-1 text-xs leading-5 text-slate-400">
          <input type="checkbox" name="terms" checked={form.terms} onChange={update} className="mt-1 h-4 w-4 shrink-0 accent-indigo-500" />
          <span>I agree to the <a href="#terms" onClick={(e) => { e.preventDefault(); setMessage("Add your Terms of Service page before launch."); }} className="font-semibold text-indigo-300 hover:text-indigo-200">Terms of Service</a> and <a href="#privacy" onClick={(e) => { e.preventDefault(); setMessage("Add your Privacy Policy page before launch."); }} className="font-semibold text-indigo-300 hover:text-indigo-200">Privacy Policy</a>.</span>
        </label>

        {message && <p role="status" className={`rounded-xl border px-3.5 py-3 text-sm leading-5 ${messageType === "error" ? "border-rose-400/20 bg-rose-400/10 text-rose-200" : "border-indigo-400/20 bg-indigo-400/10 text-indigo-200"}`}>{message}</p>}

        <button type="submit" className="w-full rounded-xl bg-indigo-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">Create account</button>
      </form>

      <div className="my-5 flex items-center gap-3"><span className="h-px flex-1 bg-white/10" /><span className="text-xs text-slate-600">OR</span><span className="h-px flex-1 bg-white/10" /></div>
      <button type="button" onClick={() => setMessage("GitHub registration is a placeholder. Configure OAuth to enable it.")} className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"><Code2 size={18} /> Sign up with GitHub</button>

      <p className="mt-6 text-center text-sm text-slate-400">Already have an account? <Link to="/login" className="font-bold text-indigo-300 hover:text-indigo-200">Log in</Link></p>
    </AuthLayout>
  );
}
