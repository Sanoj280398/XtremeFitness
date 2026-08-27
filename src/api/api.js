const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3042/api"
).replace(/\/$/, "");

async function fetchResource(endpoint, options = {}) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API-fejl ${response.status}: ${response.statusText}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export function fetchBlogs() {
  return fetchResource("blogs");
}

export function fetchEmployees() {
  return fetchResource("employees");
}

export function fetchExercises() {
  return fetchResource("exercises");
}

export function fetchMessages() {
  return fetchResource("messages");
}

export function fetchReviews() {
  return fetchResource("reviews");
}

export function fetchServices() {
  return fetchResource("services");
}

export function fetchSubscriptions() {
  return fetchResource("subscriptions");
}

export function fetchSubscription(id) {
  return fetchResource(`subscriptions/${id}`);
}

export function fetchUsers() {
  return fetchResource("users");
}

export function fetchWorkouts() {
  return fetchResource("workouts");
}

export function loginUser(data) {
  return fetchResource("users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function createMessage(data) {
  return fetchResource("messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function createUser(data) {
  return fetchResource("users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function updateUser(id, data) {
  return fetchResource(`users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteUser(id) {
  return fetchResource(`users/${id}`, {
    method: "DELETE",
  });
}
