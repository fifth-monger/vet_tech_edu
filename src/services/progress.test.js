import { describe, expect, it } from 'vitest'
import { STORAGE_KEY, createDefaultProgress, loadProgress, normalizeProgress, saveProgress } from './progress.js'

function createMemoryStorage() {
  const values = new Map()
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) }
}

describe('progress persistence', () => {
  it('recovers from invalid saved data', () => {
    expect(normalizeProgress({ schemaVersion: 99 })).toEqual(createDefaultProgress())
  })
  it('saves and reloads lesson progress', () => {
    const storage = createMemoryStorage()
    const progress = { ...createDefaultProgress(), lessons: { lesson: { complete: true, bestScore: 80 } } }
    saveProgress(progress, storage)
    expect(loadProgress(storage).lessons.lesson).toEqual({ complete: true, bestScore: 80 })
    expect(storage.getItem(STORAGE_KEY)).toContain('updatedAt')
  })
})
