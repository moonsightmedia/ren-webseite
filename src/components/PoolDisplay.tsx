import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Vote, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { poolData, formatCurrency } from "@/data/helpRequests";

interface PoolDisplayProps {
  variant?: "hero" | "card" | "inline";
  showCTA?: boolean;
}

export function PoolDisplay({ variant = "card", showCTA = true }: PoolDisplayProps) {
  if (variant === "hero") {
    return (
      <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-primary-foreground/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <Wallet className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-primary-foreground/70 text-sm">Aktueller Pool-Stand</p>
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground">
              {formatCurrency(poolData.currentAmount)}
            </p>
          </div>
        </div>
        <p className="text-primary-foreground/60 text-sm mb-4">
          {poolData.openRequestsCount} offene Anfragen warten auf Ihre Stimme
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/spenden" className="flex-1">
              <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold">
                In den Pool spenden
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/abstimmung" className="flex-1">
              <Button variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Jetzt abstimmen
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
        <div className="flex items-center gap-3">
          <Wallet className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs text-ren-text-secondary">Pool-Stand</p>
            <p className="font-bold text-card-foreground">{formatCurrency(poolData.currentAmount)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Vote className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs text-ren-text-secondary">Offene Anfragen</p>
            <p className="font-bold text-card-foreground">{poolData.openRequestsCount}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs text-ren-text-secondary">Spender</p>
            <p className="font-bold text-card-foreground">{poolData.donorCount}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-card border-0 card-shadow">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Wallet className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-ren-text-secondary text-sm">Aktueller Pool-Stand</p>
            <p className="text-3xl font-bold text-accent">
              {formatCurrency(poolData.currentAmount)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-ren-divider">
          <div className="text-center">
            <p className="text-2xl font-bold text-card-foreground">{poolData.openRequestsCount}</p>
            <p className="text-xs text-ren-text-secondary">Offene Anfragen</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-card-foreground">{poolData.donorCount}</p>
            <p className="text-xs text-ren-text-secondary">Spender</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-card-foreground">{formatCurrency(poolData.totalDisbursed)}</p>
            <p className="text-xs text-ren-text-secondary">Ausgezahlt</p>
          </div>
        </div>

        <p className="text-ren-text-secondary text-sm text-center mb-6">
          Das Geld im Pool wartet darauf, von der Community verteilt zu werden. 
          Stimmen Sie ab, welche Anfragen Hilfe erhalten sollen.
        </p>

        {showCTA && (
          <div className="space-y-3">
            <Link to="/spenden">
              <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold">
                In den Pool spenden
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/abstimmung">
              <Button variant="outline" className="w-full border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent">
                Zu den Abstimmungen
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
