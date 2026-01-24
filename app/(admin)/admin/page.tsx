"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  CreditCard,
  XCircle,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Download,
  Filter,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 198 },
  { name: "Mar", revenue: 5000, orders: 320 },
  { name: "Apr", revenue: 4500, orders: 280 },
  { name: "May", revenue: 6000, orders: 390 },
  { name: "Jun", revenue: 5500, orders: 350 },
  { name: "Jul", revenue: 7000, orders: 420 },
];

const paymentStatusData = [
  { name: "Successful", value: 65, color: "hsl(142, 76%, 36%)" },
  { name: "Pending", value: 20, color: "hsl(48, 96%, 53%)" },
  { name: "Failed", value: 10, color: "hsl(0, 84%, 60%)" },
  { name: "Cancelled", value: 5, color: "hsl(215, 14%, 34%)" },
];

const recentOrders = [
  {
    id: "#ORD-7821",
    customer: "John Smith",
    amount: "$299.00",
    status: "completed",
    date: "2 min ago",
  },
  {
    id: "#ORD-7820",
    customer: "Sarah Wilson",
    amount: "$149.50",
    status: "pending",
    date: "15 min ago",
  },
  {
    id: "#ORD-7819",
    customer: "Mike Johnson",
    amount: "$599.00",
    status: "completed",
    date: "1 hour ago",
  },
  {
    id: "#ORD-7818",
    customer: "Emily Davis",
    amount: "$89.99",
    status: "failed",
    date: "2 hours ago",
  },
  {
    id: "#ORD-7817",
    customer: "Chris Brown",
    amount: "$449.00",
    status: "cancelled",
    date: "3 hours ago",
  },
];

const statsCards = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Total Orders",
    value: "2,350",
    change: "+15.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Failed Payments",
    value: "234",
    change: "-4.5%",
    trend: "down",
    icon: XCircle,
    description: "from last month",
  },
  {
    title: "Cancelled Orders",
    value: "89",
    change: "-12.3%",
    trend: "down",
    icon: CreditCard,
    description: "from last month",
  },
];

const getStatusBadge = (status: string) => {
  const variants: Record<
    string,
    {
      variant: "default" | "secondary" | "destructive" | "outline";
      className: string;
    }
  > = {
    completed: {
      variant: "default",
      className:
        "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20",
    },
    pending: {
      variant: "secondary",
      className:
        "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20",
    },
    failed: {
      variant: "destructive",
      className:
        "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20",
    },
    cancelled: {
      variant: "outline",
      className:
        "bg-slate-500/10 text-slate-400 hover:bg-slate-500/20 border-slate-500/20",
    },
  };
  return variants[status] || variants.pending;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AdminHub</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 md:px-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your business performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {statsCards.map((stat) => (
            <Card key={stat.title} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <div className="flex items-center text-emerald-500 text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="font-medium">{stat.change}</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-emerald-500 text-sm">
                      <ArrowDownRight className="h-4 w-4" />
                      <span className="font-medium">{stat.change}</span>
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary opacity-50" />
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-7 mb-8">
          {/* Revenue Chart */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>
                    Monthly revenue and order trends
                  </CardDescription>
                </div>
                <Tabs defaultValue="revenue" className="w-auto">
                  <TabsList className="h-8">
                    <TabsTrigger value="revenue" className="text-xs px-3">
                      Revenue
                    </TabsTrigger>
                    <TabsTrigger value="orders" className="text-xs px-3">
                      Orders
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted"
                    />
                    <XAxis
                      dataKey="name"
                      className="text-xs"
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      className="text-xs"
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Payment Status Pie Chart */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
              <CardDescription>
                Distribution of payment outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {paymentStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {paymentStatusData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders & Quick Stats */}
        <div className="grid gap-6 lg:grid-cols-7">
          {/* Recent Orders */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Latest transactions from your store
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">{order.amount}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.date}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={getStatusBadge(order.status).className}
                      >
                        {order.status}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                Key indicators for your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Conversion Rate
                  </span>
                  <span className="text-sm font-medium">3.2%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[32%] rounded-full bg-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Average Order Value
                  </span>
                  <span className="text-sm font-medium">$127.50</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[64%] rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Customer Retention
                  </span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[68%] rounded-full bg-amber-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Refund Rate
                  </span>
                  <span className="text-sm font-medium">2.1%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[21%] rounded-full bg-red-500" />
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-xs font-medium">+12%</span>
                    </div>
                    <p className="text-2xl font-bold">847</p>
                    <p className="text-xs text-muted-foreground">
                      Active Users
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-xs font-medium">+8%</span>
                    </div>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-xs text-muted-foreground">
                      Products Sold
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
export default Index;
