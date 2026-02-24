import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown, Lock, CheckCircle } from "lucide-react";
import { 
  HelpRequest, 
  calculateVotePercentage 
} from "@/data/helpRequests";

interface VotingCardProps {
  request: HelpRequest;
  isLoggedIn?: boolean;
  onVote?: (requestId: string, vote: "for" | "against") => void;
}

export function VotingCard({ request, isLoggedIn = false, onVote }: VotingCardProps) {
  const [hasVoted, setHasVoted] = useState(false);
  const [userVote, setUserVote] = useState<"for" | "against" | null>(null);
  const [localVotesFor, setLocalVotesFor] = useState(request.votesFor);
  const [localVotesAgainst, setLocalVotesAgainst] = useState(request.votesAgainst);

  const votePercentage = calculateVotePercentage(localVotesFor, localVotesAgainst);
  const totalVotes = localVotesFor + localVotesAgainst;

  const handleVote = (vote: "for" | "against") => {
    if (!isLoggedIn || hasVoted) return;

    if (vote === "for") {
      setLocalVotesFor((prev) => prev + 1);
    } else {
      setLocalVotesAgainst((prev) => prev + 1);
    }
    
    setHasVoted(true);
    setUserVote(vote);
    onVote?.(request.id, vote);
  };

  if (!isLoggedIn) {
    return (
      <Card className="bg-card border-0 card-shadow">
        <CardContent className="p-6">
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-ren-text-secondary" />
            </div>
            <h3 className="font-bold text-card-foreground mb-2">Anmeldung erforderlich</h3>
            <p className="text-ren-text-secondary text-sm mb-4">
              Um abzustimmen, müssen Sie eingeloggt sein.
            </p>
            <Button 
              variant="outline" 
              className="border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              Jetzt einloggen
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-ren-divider">
            <p className="text-sm text-ren-text-secondary text-center mb-3">
              Aktueller Stand:
            </p>
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-primary" />
                <span>{request.votesFor}</span>
              </div>
              <span className="font-semibold">{votePercentage}%</span>
              <div className="flex items-center gap-2">
                <span>{request.votesAgainst}</span>
                <ThumbsDown className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <Progress 
              value={votePercentage} 
              className="h-2 bg-muted [&>div]:bg-primary" 
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (hasVoted) {
    return (
      <Card className="bg-card border-0 card-shadow">
        <CardContent className="p-6">
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-bold text-card-foreground mb-2">Danke für Ihre Stimme!</h3>
            <p className="text-ren-text-secondary text-sm">
              Sie haben „{userVote === "for" ? "Direkt unterstützen" : "Zurückstellen"}“ gewählt.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-ren-divider">
            <p className="text-sm text-ren-text-secondary text-center mb-3">
              Aktueller Stand ({totalVotes} Stimmen):
            </p>
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-primary" />
                <span>{localVotesFor}</span>
              </div>
              <span className="font-semibold">{votePercentage}% Direkt unterstützen</span>
              <div className="flex items-center gap-2">
                <span>{localVotesAgainst}</span>
                <ThumbsDown className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <Progress 
              value={votePercentage} 
              className="h-2 bg-muted [&>div]:bg-primary" 
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-0 card-shadow">
      <CardContent className="p-6">
        <h3 className="font-bold text-card-foreground text-center mb-2">
          Wie möchten Sie abstimmen?
        </h3>
        <p className="text-ren-text-secondary text-sm text-center mb-6">
          Ihre Stimme entscheidet mit, ob diese Hilfeanfrage jetzt aus dem Pool finanziert wird.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            onClick={() => handleVote("for")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-sm"
          >
            <ThumbsUp className="w-5 h-5 mr-2 flex-shrink-0" />
            Direkt unterstützen
          </Button>
          <Button
            onClick={() => handleVote("against")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-6 text-sm"
          >
            <ThumbsDown className="w-5 h-5 mr-2 flex-shrink-0" />
            Zurückstellen
          </Button>
        </div>

        <div className="pt-4 border-t border-ren-divider">
          <p className="text-sm text-ren-text-secondary text-center mb-3">
            Aktueller Stand ({totalVotes} Stimmen):
          </p>
          <div className="flex justify-between items-center text-sm mb-2">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-primary" />
              <span>{localVotesFor}</span>
            </div>
            <span className="font-semibold">{votePercentage}% Direkt unterstützen</span>
            <div className="flex items-center gap-2">
              <span>{localVotesAgainst}</span>
              <ThumbsDown className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <Progress 
            value={votePercentage} 
            className="h-2 bg-muted [&>div]:bg-primary" 
          />
        </div>
      </CardContent>
    </Card>
  );
}
