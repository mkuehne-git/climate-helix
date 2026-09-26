import type { Changelog } from "./Changelog";
import { compareVersions } from "./changelogFormat";
import type { PersistentState } from "./PersistentState";

/** The last version without What's new: someone who used it, or an older one, has seen no news yet. */
export const VERSION_BEFORE_WHATS_NEW = "0.11.1";

/**
 * The version whose news someone has already seen, or undefined for a first
 * visit: a new visitor gets the app as it is, without news.
 */
export function versionSeenBefore(lastSeenVersion: string | undefined, hadStoredState: boolean): string | undefined {
  return lastSeenVersion ?? (hadStoredState ? VERSION_BEFORE_WHATS_NEW : undefined);
}

/**
 * Shows the changes since the version seen last, once: the current version
 * counts as seen as soon as its news are shown. Resolves when they are closed,
 * or at once if there are none.
 */
export async function showWhatsNewOnce(changelog: Changelog, state: PersistentState, currentVersion: string): Promise<void> {
  const since = versionSeenBefore(state.state.lastSeenVersion, state.hadStoredState);
  if (state.state.lastSeenVersion !== currentVersion) {
    state.update({ lastSeenVersion: currentVersion });
    state.flush();
  }
  if (since !== undefined && compareVersions(since, currentVersion) < 0) {
    await changelog.showWhatsNew(since, currentVersion);
  }
}
