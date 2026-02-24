import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Scissors } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    name: '',
    salon_name: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(loginData.email, loginData.password);
      toast.success('Benvenuta!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Errore di accesso');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(
        registerData.email,
        registerData.password,
        registerData.name,
        registerData.salon_name
      );
      toast.success('Account creato con successo!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Errore di registrazione');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Image */}
      <div 
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1762343040706-b74ea936c1c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHx3b21hbiUyMGZhc2hpb24lMjBoYWlyc3R5bGUlMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MHx8fHwxNzcxOTA2MTA4fDA&ixlib=rb-4.1.0&q=85')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 to-transparent" />
        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="font-playfair text-4xl font-medium mb-2">Gestisci il tuo salone</h2>
          <p className="font-manrope text-lg opacity-90">Con eleganza e semplicità</p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#F8FAFC]">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0EA5E9]/10 mb-4">
              <Scissors className="w-8 h-8 text-[#0EA5E9]" strokeWidth={1.5} />
            </div>
            <h1 className="font-playfair text-3xl font-medium text-[#0F172A]">Salone Manager</h1>
            <p className="text-[#334155] mt-2 font-manrope">Il gestionale per il tuo salone</p>
          </div>

          <Card className="bg-white border-[#E2E8F0]/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            <Tabs defaultValue="login">
              <CardHeader className="pb-4">
                <TabsList className="grid w-full grid-cols-2 bg-[#F8FAFC]">
                  <TabsTrigger 
                    value="login" 
                    data-testid="tab-login"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#0EA5E9]"
                  >
                    Accedi
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register" 
                    data-testid="tab-register"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#0EA5E9]"
                  >
                    Registrati
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                {/* Login Form */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-[#0F172A]">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        data-testid="login-email-input"
                        placeholder="nome@esempio.it"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-[#0F172A]">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        data-testid="login-password-input"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="login-submit-btn"
                      disabled={loading}
                      className="w-full h-12 bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow-lg shadow-[#0EA5E9]/20 transition-all active:scale-95"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Accedi'}
                    </Button>
                  </form>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-[#0F172A]">Nome</Label>
                      <Input
                        id="register-name"
                        type="text"
                        data-testid="register-name-input"
                        placeholder="Il tuo nome"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-salon" className="text-[#0F172A]">Nome Salone</Label>
                      <Input
                        id="register-salon"
                        type="text"
                        data-testid="register-salon-input"
                        placeholder="Il nome del tuo salone"
                        value={registerData.salon_name}
                        onChange={(e) => setRegisterData({ ...registerData, salon_name: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-[#0F172A]">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        data-testid="register-email-input"
                        placeholder="nome@esempio.it"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-[#0F172A]">Password</Label>
                      <Input
                        id="register-password"
                        type="password"
                        data-testid="register-password-input"
                        placeholder="••••••••"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        className="bg-[#F8FAFC] border-transparent focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] h-12"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="register-submit-btn"
                      disabled={loading}
                      className="w-full h-12 bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow-lg shadow-[#0EA5E9]/20 transition-all active:scale-95"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Crea Account'}
                    </Button>
                  </form>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
