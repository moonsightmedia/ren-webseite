import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { HelpRequest } from "@/data/helpRequests";
import { helpRequests as initialHelpRequests } from "@/data/helpRequests";

export type HelpRequestPatch = Partial<
  Pick<
    HelpRequest,
    | "title"
    | "description"
    | "details"
    | "category"
    | "requestedAmount"
    | "usage"
    | "location"
    | "image"
    | "status"
    | "votingEndsAt"
  >
>;

type HelpRequestsContextValue = {
  requests: HelpRequest[];
  getRequestById: (id: string) => HelpRequest | undefined;
  updateRequest: (id: string, patch: HelpRequestPatch) => void;
  addRequest: (request: HelpRequest) => void;
};

const HelpRequestsContext = createContext<HelpRequestsContextValue | null>(null);

export function HelpRequestsProvider({ children }: { children: ReactNode }) {
  const [requests, setRequests] = useState<HelpRequest[]>(() => [...initialHelpRequests]);

  const getRequestById = useCallback(
    (id: string): HelpRequest | undefined => {
      return requests.find((r) => r.id === id);
    },
    [requests]
  );

  const updateRequest = useCallback((id: string, patch: HelpRequestPatch) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
    );
  }, []);

  const addRequest = useCallback((request: HelpRequest) => {
    setRequests((prev) => [...prev, request]);
  }, []);

  return (
    <HelpRequestsContext.Provider
      value={{ requests, getRequestById, updateRequest, addRequest }}
    >
      {children}
    </HelpRequestsContext.Provider>
  );
}

export function useHelpRequests(): HelpRequestsContextValue {
  const ctx = useContext(HelpRequestsContext);
  if (!ctx) throw new Error("useHelpRequests must be used within HelpRequestsProvider");
  return ctx;
}
