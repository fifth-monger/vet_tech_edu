export const STORAGE_KEY = 'vet-tech-learning:progress'
export const createDefaultProgress = () => ({ schemaVersion: 1, updatedAt: null, lastVisited: null, lessons: {} })

export function normalizeProgress(value) {
  if (!value || typeof value !== 'object' || value.schemaVersion !== 1 || !value.lessons || typeof value.lessons !== 'object') return createDefaultProgress()
  return { ...createDefaultProgress(), ...value, lessons: value.lessons }
}

export function loadProgress(storage = window.localStorage) {
  try {
    const saved = storage.getItem(STORAGE_KEY)
    return saved ? normalizeProgress(JSON.parse(saved)) : createDefaultProgress()
  } catch {
    return createDefaultProgress()
  }
}

export function saveProgress(progress, storage = window.localStorage) {
  const next = { ...progress, updatedAt: new Date().toISOString() }
  storage.setItem(STORAGE_KEY, JSON.stringify(next))
  return next
}

export function clearProgress(storage = window.localStorage) { storage.removeItem(STORAGE_KEY) }
