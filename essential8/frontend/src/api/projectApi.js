import { fetchAuthSession } from "aws-amplify/auth";

const url = import.meta.env.VITE_BACKEND_URL;

export async function createProject() {
  console.log(url);
  const session = await fetchAuthSession();

  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}

export async function getCurrentProject() {
  const session = await fetchAuthSession();

  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load project");
  }

  return response.json();
}

export async function getProjects() {
  const session = await fetchAuthSession();

  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load projects");
  }

  return response.json();
}

export async function updateProject(projectId, updates) {
  const session = await fetchAuthSession();

  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects/${projectId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update project");
  }

  return response.json();
}

export async function getProjectReport(projectId) {
  const session = await fetchAuthSession();
  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects/${projectId}/report`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load project report");
  }

  return response.json();
}

export async function getProject(projectId) {
  const session = await fetchAuthSession();
  const token = session.tokens.accessToken.toString();

  const response = await fetch(`${url}/api/projects/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load project");
  }

  return response.json();
}
