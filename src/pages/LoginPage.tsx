import LoginForm from "@/components/forms/login-form";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/40 p-6 md:p-10">
      <div className="inline-flex items-center cursor-default justify-center bg-primary py-1 px-2 rounded-sm text-primary-foreground font-bold text-xl">
        <span>MovieMate</span>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
