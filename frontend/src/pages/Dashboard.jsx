import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Users,
  Euro,
  Calendar,
  Clock,
  TrendingUp,
  Plus,
  ChevronRight
} from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get(`${API}/stats/dashboard`);
      setStats(res.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, subtitle, color = '#0EA5E9' }) => (
    <Card className="bg-white border-[#E2E8F0]/30 hover:border-[#0EA5E9]/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#334155] font-manrope">{title}</p>
            <p className="text-3xl font-playfair font-medium text-[#0F172A] mt-2">{value}</p>
            {subtitle && (
              <p className="text-xs text-[#334155] mt-1 font-manrope">{subtitle}</p>
            )}
          </div>
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.5} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8" data-testid="dashboard-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-playfair text-3xl md:text-4xl font-medium text-[#0F172A]">
              Buongiorno!
            </h1>
            <p className="text-[#334155] mt-1 font-manrope">
              {format(new Date(), "EEEE d MMMM yyyy", { locale: it })}
            </p>
          </div>
          <Link to="/appointments">
            <Button 
              data-testid="new-appointment-btn"
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow-lg shadow-[#0EA5E9]/20 transition-all active:scale-95"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nuovo Appuntamento
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            title="Appuntamenti Oggi"
            value={stats?.today_appointments_count || 0}
            icon={Calendar}
            color="#0EA5E9"
          />
          <StatCard
            title="Clienti Totali"
            value={stats?.total_clients || 0}
            icon={Users}
            color="#789F8A"
          />
          <StatCard
            title="Incasso Mensile"
            value={`€${(stats?.monthly_revenue || 0).toFixed(0)}`}
            icon={Euro}
            subtitle={`${stats?.monthly_appointments || 0} appuntamenti`}
            color="#E9C46A"
          />
          <StatCard
            title="Prossimi 7 Giorni"
            value={stats?.upcoming_appointments?.length || 0}
            icon={TrendingUp}
            color="#334155"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Today's Appointments */}
          <Card className="lg:col-span-8 bg-white border-[#E2E8F0]/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="font-playfair text-xl text-[#0F172A]">Appuntamenti di Oggi</CardTitle>
              <Link to="/appointments">
                <Button variant="ghost" size="sm" className="text-[#0EA5E9] hover:text-[#0284C7]">
                  Vedi tutti <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {stats?.today_appointments?.length > 0 ? (
                <div className="space-y-3">
                  {stats.today_appointments.map((apt) => (
                    <div
                      key={apt.id}
                      data-testid={`appointment-${apt.id}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#FAF5F2] transition-colors"
                    >
                      <div className="flex-shrink-0 w-16 text-center">
                        <p className="text-lg font-medium text-[#0EA5E9] font-manrope">{apt.time}</p>
                        <p className="text-xs text-[#334155]">{apt.end_time}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#0F172A] truncate">{apt.client_name}</p>
                        <p className="text-sm text-[#334155] truncate">
                          {apt.services.map(s => s.name).join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[#0F172A]">€{apt.total_price}</p>
                        <p className="text-xs text-[#334155]">{apt.total_duration} min</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 mx-auto text-[#E2E8F0] mb-4" strokeWidth={1.5} />
                  <p className="text-[#334155] font-manrope">Nessun appuntamento per oggi</p>
                  <Link to="/appointments">
                    <Button 
                      variant="outline" 
                      className="mt-4 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#FAF5F2]"
                    >
                      Prenota un appuntamento
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions & Upcoming */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white border-[#E2E8F0]/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-xl text-[#0F172A]">Azioni Rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/appointments" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-[#E2E8F0]/50 text-[#0F172A] hover:bg-[#FAF5F2] hover:border-[#0EA5E9]/30"
                  >
                    <Calendar className="w-5 h-5 mr-3 text-[#0EA5E9]" strokeWidth={1.5} />
                    Nuovo Appuntamento
                  </Button>
                </Link>
                <Link to="/clients" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-[#E2E8F0]/50 text-[#0F172A] hover:bg-[#FAF5F2] hover:border-[#0EA5E9]/30"
                  >
                    <Users className="w-5 h-5 mr-3 text-[#789F8A]" strokeWidth={1.5} />
                    Aggiungi Cliente
                  </Button>
                </Link>
                <Link to="/stats" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-[#E2E8F0]/50 text-[#0F172A] hover:bg-[#FAF5F2] hover:border-[#0EA5E9]/30"
                  >
                    <TrendingUp className="w-5 h-5 mr-3 text-[#E9C46A]" strokeWidth={1.5} />
                    Vedi Statistiche
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="bg-white border-[#E2E8F0]/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-xl text-[#0F172A]">Prossimi Appuntamenti</CardTitle>
              </CardHeader>
              <CardContent>
                {stats?.upcoming_appointments?.length > 0 ? (
                  <div className="space-y-3">
                    {stats.upcoming_appointments.slice(0, 5).map((apt) => (
                      <div key={apt.id} className="flex items-center gap-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#0F172A] truncate">{apt.client_name}</p>
                          <p className="text-xs text-[#334155]">
                            {format(new Date(apt.date), "EEE d MMM", { locale: it })} - {apt.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#334155] text-center py-4">Nessun appuntamento in programma</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
