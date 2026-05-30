export type ServiceRequestType =
  | "ppc"
  | "seo"
  | "web-development"
  | "software-development"
  | "ui-ux"
  | "smm"
  | "sales-setup"
  | "lead-generation";

export type ServiceRequestPayload = {
  service: ServiceRequestType;
  name: string;
  email: string;
  challenge: string;
  budget?: string;
  spend?: string;
  website?: string;
  appUrl?: string;
  socialUrl?: string;
  techStack?: string;
  teamSize?: string;
  crm?: string;
  volume?: string;
};

export async function submitServiceRequest(payload: ServiceRequestPayload) {
  const response = await fetch("/api/service-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(result?.error || "The request could not be submitted.");
  }

  return response.json() as Promise<{ id: string }>;
}
