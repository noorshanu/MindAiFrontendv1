/** Set NEXT_PUBLIC_API_BASE_URL in .env.local, e.g. http://localhost:4000 or https://api.mindsai.live */
const API_ROOT = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.mindsai.live').replace(
  /\/api\/?$/,
  '',
)
const API_BASE_URL = `${API_ROOT}/api`

export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

function mergeSuccessPayload(data: unknown): unknown {
  if (
    data &&
    typeof data === 'object' &&
    (data as { success?: boolean }).success === true &&
    (data as { data?: unknown }).data != null &&
    typeof (data as { data: unknown }).data === 'object' &&
    !Array.isArray((data as { data: unknown }).data)
  ) {
    const envelope = data as Record<string, unknown> & { data: Record<string, unknown> }
    const merged = { ...envelope, ...envelope.data } as Record<string, unknown>
    if (Array.isArray(merged.items) && !Array.isArray(merged.data)) {
      return { ...merged, data: merged.items }
    }
    return merged
  }
  return data
}

async function fetchApi<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, { cache: 'no-store' })
  const text = await response.text()

  let data: Record<string, unknown> = {}
  try {
    data = text ? JSON.parse(text) : {}
  } catch {
    throw new Error('Unexpected server response format')
  }

  if (!response.ok) {
    throw new Error(String(data.error || data.message || 'Request failed'))
  }

  return mergeSuccessPayload(data) as ApiResponse<T>
}

export type TeamMemberPublic = {
  _id: string
  name: string
  title: string
  imageUrl?: string
  order: number
}

export const contentApi = {
  getTeam: () => fetchApi<TeamMemberPublic[]>('/team'),
}
