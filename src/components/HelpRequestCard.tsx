import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ThumbsUp, ThumbsDown, Clock, CheckCircle2, XCircle } from "lucide-react";
import { 
  HelpRequest, 
  formatCurrency, 
  calculateVotePercentage, 
  getTimeRemaining,
  categoryLabels,
  statusLabels 
} from "@/data/helpRequests";

interface HelpRequestCardProps {
  request: HelpRequest;
  variant?: "default" | "compact";
}

export function HelpRequestCard({ request, variant = "default" }: HelpRequestCardProps) {
  const votePercentage = calculateVotePercentage(request.votesFor, request.votesAgainst);
  const timeRemaining = getTimeRemaining(request.votingEndsAt);
  const totalVotes = request.votesFor + request.votesAgainst;
  const isVotingOpen = request.status === "offen";

  const getStatusBadge = () => {
    switch (request.status) {
      case "offen":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-600 text-xs font-semibold rounded-full">
            <Clock className="w-3 h-3" />
            {timeRemaining}
          </span>
        );
      case "genehmigt":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-600 text-xs font-semibold rounded-full">
            <CheckCircle2 className="w-3 h-3" />
            {statusLabels[request.status]}
          </span>
        );
      case "abgelehnt":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-600 text-xs font-semibold rounded-full">
            <XCircle className="w-3 h-3" />
            {statusLabels[request.status]}
          </span>
        );
      case "abgeschlossen":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            <CheckCircle2 className="w-3 h-3" />
            {statusLabels[request.status]}
          </span>
        );
    }
  };

  return (
    <Card className="group overflow-hidden bg-card border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={request.image}
          alt={request.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ren-teal/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
            {categoryLabels[request.category]}
          </span>
          {getStatusBadge()}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {request.title}
        </h3>
        
        {variant === "default" && (
          <p className="text-ren-text-secondary text-sm mb-4 line-clamp-2">
            {request.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-card-foreground">
            Angefragte Summe:
          </span>
          <span className="text-lg font-bold text-accent">
            {formatCurrency(request.requestedAmount)}
          </span>
        </div>

        {isVotingOpen ? (
          <div className="space-y-3 mb-5">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-green-500" />
                <span className="text-ren-text-secondary">{request.votesFor}</span>
              </div>
              <span className="font-semibold text-card-foreground">
                {votePercentage}% Zustimmung
              </span>
              <div className="flex items-center gap-2">
                <span className="text-ren-text-secondary">{request.votesAgainst}</span>
                <ThumbsDown className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <Progress 
              value={votePercentage} 
              className="h-2 bg-muted [&>div]:bg-primary" 
            />
            <p className="text-xs text-center text-ren-text-secondary">
              {totalVotes} Stimmen abgegeben
            </p>
          </div>
        ) : (
          <div className="mb-5 py-3 px-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-ren-text-secondary">Abstimmungsergebnis:</span>
              <span className="font-semibold text-card-foreground">
                {votePercentage}% Ja ({totalVotes} Stimmen)
              </span>
            </div>
            {request.disbursedAmount && (
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-ren-text-secondary">Ausgezahlt:</span>
                <span className="font-semibold text-accent">
                  {formatCurrency(request.disbursedAmount)}
                </span>
              </div>
            )}
          </div>
        )}

        <Link to={`/anfragen/${request.id}`} className="block">
          <Button 
            className={`w-full transition-all group/btn ${
              isVotingOpen 
                ? "bg-accent hover:bg-ren-red-hover text-accent-foreground" 
                : "bg-ren-teal hover:bg-accent text-primary-foreground hover:text-accent-foreground"
            }`}
          >
            {isVotingOpen ? "Jetzt abstimmen" : "Details ansehen"}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
